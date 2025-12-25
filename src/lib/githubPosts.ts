import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const OWNER = "callu9"; // target repo owner
const REPO = "frontend-study"; // target repo name
const BRANCH = "main"; // branch to read from
const GITHUB_API = "https://api.github.com";

function getHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN)
    headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
  return headers;
}

async function mdToHtml(md: string) {
  const processed = await remark().use(html).process(md);
  return processed.toString();
}

export async function listMarkdownPathsRecursive(): Promise<string[]> {
  const url = `${GITHUB_API}/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const res = await fetch(url, { headers: getHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch repo tree: ${res.status}`);
  const data = await res.json();
  const tree = data.tree as Array<{ path: string; type: string }>;
  // Return all .md / .mdx files
  return tree
    .filter(
      (t) =>
        t.type === "blob" &&
        (t.path.endsWith(".md") || t.path.endsWith(".mdx")),
    )
    .map((t) => t.path);
}

type TreeNode = {
  name: string;
  path: string;
  type: "tree" | "blob";
  children?: TreeNode[];
};

/**
 * Returns the raw git tree (flat) for the repo branch.
 */
export async function getRepoTreeRecursive() {
  const url = `${GITHUB_API}/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
  const res = await fetch(url, { headers: getHeaders() });
  if (!res.ok) throw new Error(`Failed to fetch repo tree: ${res.status}`);
  const data = await res.json();
  return data.tree as Array<{ path: string; type: string }>;
}

/**
 * Build a nested tree structure from the git tree array.
 * Keeps directories and files; files include their path and type.
 */
export async function buildNestedTree(rootPrefix = ""): Promise<TreeNode[]> {
  const tree = await getRepoTreeRecursive();
  const nodes: Record<string, TreeNode> = {};

  // Helper to ensure a node exists
  const ensureNode = (pathParts: string[]) => {
    let currentPath = "";
    let parent: TreeNode | undefined = undefined;
    for (let i = 0; i < pathParts.length; i++) {
      const part = pathParts[i];
      currentPath = currentPath ? `${currentPath}/${part}` : part;
      if (!nodes[currentPath]) {
        nodes[currentPath] = {
          name: part,
          path: currentPath,
          type: i === pathParts.length - 1 ? "blob" : "tree",
          children: [],
        };
        if (parent) parent.children = parent.children || [];
        if (parent && !parent.children!.some((c) => c.path === currentPath)) {
          parent.children!.push(nodes[currentPath]);
        }
      }
      parent = nodes[currentPath];
    }
    return nodes[pathParts.join("/")];
  };

  // Build tree only for entries that match rootPrefix (or all if empty)
  for (const entry of tree) {
    if (rootPrefix && !entry.path.startsWith(rootPrefix)) continue;
    const rel = rootPrefix
      ? entry.path.replace(new RegExp(`^${rootPrefix}/?`), "")
      : entry.path;
    const parts = rel.split("/").filter(Boolean);
    if (parts.length === 0) continue;
    ensureNode(parts);
  }

  // Collect top-level nodes (those without a slash in rel path)
  const roots: TreeNode[] = [];
  for (const key of Object.keys(nodes)) {
    if (!key.includes("/")) roots.push(nodes[key]);
  }
  return roots;
}

/**
 * Fetch a file's raw content by its repo path (e.g. content/blog/post.md)
 */
export async function fetchRawByPath(path: string) {
  const url = rawUrlForPath(path);
  const res = await fetch(url);
  if (!res.ok)
    throw new Error(`Failed to fetch raw file ${path}: ${res.status}`);
  return res.text();
}

function rawUrlForPath(path: string) {
  return `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}/${path}`;
}

export async function getAllPostsFromGitHub() {
  const paths = await listMarkdownPathsRecursive();
  const posts = await Promise.all(
    paths.map(async (p) => {
      const url = rawUrlForPath(p);
      const res = await fetch(url);
      if (!res.ok)
        throw new Error(`Failed to fetch raw file ${p}: ${res.status}`);
      const raw = await res.text();
      const { data: frontmatter, content } = matter(raw);
      const htmlContent = await mdToHtml(content);
      // Generate a unique slug based on the full path (without extension).
      // Replace path separators with `--` so files with the same name in
      // different directories produce different slugs (e.g. "docs/readme.md" -> "docs--readme").
      const slug = p.replace(/\.mdx?$/, "").toLowerCase();
      return { slug, path: p, frontmatter, html: htmlContent, raw };
    }),
  );
  // sort by date if available
  posts.sort((a, b) => {
    const da = new Date(a.frontmatter?.date || 0).getTime();
    const db = new Date(b.frontmatter?.date || 0).getTime();
    return db - da;
  });
  return posts;
}

export async function getPostBySlugFromGitHub(slug: string) {
  const posts = await getAllPostsFromGitHub();
  return posts.find((p) => p.slug === slug) ?? null;
}

export default getAllPostsFromGitHub;
