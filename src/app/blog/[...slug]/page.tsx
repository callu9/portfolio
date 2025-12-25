import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsFromGitHub } from "@/lib/githubPosts";
import { getBlogConfig, getVisibleBlogs } from "@/data/blogs";

interface Props {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getAllPostsFromGitHub();
    if (posts && posts.length > 0) {
      // Return params as arrays of path segments (without extension)
      return posts.map((p) => ({
        slug: p.path.replace(/\.mdx?$/, "").split("/") as string[],
      }));
    }
  } catch (err) {
    console.error("Failed to list markdown paths from GitHub:", err);
  }

  // Fallback to local blog config if GitHub is inaccessible (e.g., 403).
  const configs = getVisibleBlogs();
  return configs.map((c) => ({
    slug: c.path.replace(/\.mdx?$/, "").split("/") as string[],
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pathWithoutExt = slug.join("/");
  let post = null as any;
  try {
    const posts = await getAllPostsFromGitHub();
    post = posts.find((p) => p.path.replace(/\.mdx?$/, "") === pathWithoutExt);
  } catch (err) {
    console.error("Failed to list markdown paths from GitHub:", err);
  }

  // If not found from GitHub, fall back to local config for title/description
  if (!post) {
    const cfg = getBlogConfig(pathWithoutExt);
    if (cfg) {
      return {
        title: `${cfg.title || "포스트"} | 개발 블로그`,
        description: cfg.description || "",
      };
    }
  }
  return {
    title: `${post?.frontmatter?.title || "포스트"} | 개발 블로그`,
    description: post?.frontmatter?.description || "",
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const pathWithoutExt = slug.join("/");
  let post = null as any;
  try {
    const posts = await getAllPostsFromGitHub();
    post =
      posts.find((p) => p.path.replace(/\.mdx?$/, "") === pathWithoutExt) ??
      null;
  } catch (err) {
    console.error("Failed to list markdown paths from GitHub:", err);
  }

  // Fallback: if GitHub data unavailable, check local config to provide at least metadata
  if (!post) {
    const cfg = getBlogConfig(pathWithoutExt);
    if (cfg) {
      // synthetic minimal post using local config when remote MD is unavailable
      post = {
        frontmatter: {
          title: cfg.title || cfg.path.split("/").pop(),
          description: cfg.description || "",
        },
        html: `<p>원격 저장소에서 포스트 내용을 불러올 수 없습니다. 로컬 메타데이터만 표시됩니다.</p>`,
      } as any;
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="section-container">
          <h1 className="text-text-primary mb-4 text-4xl font-bold">
            포스트를 찾을 수 없습니다
          </h1>
          <p className="text-text-secondary">
            <Link href="/blog" className="text-secondary-coral hover:underline">
              블로그로 돌아가기
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="section-container max-w-3xl">
        <article className="card bg-white/70 p-8 backdrop-blur-sm md:p-12">
          <header className="mb-8">
            <h1 className="text-text-primary mb-4 text-4xl font-bold md:text-5xl">
              {post.frontmatter?.title}
            </h1>
            <div className="text-text-secondary flex items-center gap-4">
              <time>{post.frontmatter?.date}</time>
              <span>•</span>
              <span>
                읽기 시간: 약 {post.frontmatter?.readingTime || "-"}분
              </span>
            </div>
          </header>

          <div className="prose prose-invert prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-secondary-coral hover:prose-a:text-secondary-peach prose-code:text-secondary-coral prose-code:bg-secondary-mint/20 prose-code:px-2 prose-code:py-1 prose-code:rounded max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>

          <footer className="border-secondary-peach/30 mt-12 border-t pt-8">
            <Link
              href="/blog"
              className="text-secondary-coral hover:text-secondary-peach font-medium transition-colors"
            >
              ← 블로그로 돌아가기
            </Link>
          </footer>
        </article>
      </div>
    </div>
  );
}
