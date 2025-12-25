import React from "react";
import Link from "next/link";
import { getVisibleBlogs } from "@/data/blogs";

interface BlogCardProps {
  title: string;
  description: string;
  category: string;
  path: string;
  featured?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  category,
  path,
  featured,
}) => {
  const href = `/blog/${path}`;
  return (
    <article
      className={`group card overflow-hidden backdrop-blur-sm transition-all hover:shadow-lg ${
        featured
          ? "border-secondary-coral/30 to-secondary-mint/20 border-2 bg-gradient-to-br from-white/80"
          : "bg-white/60"
      }`}
    >
      {/* Category Badge */}
      <div className="p-6 pb-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="bg-secondary-peach/50 text-text-primary inline-block rounded-full px-3 py-1 text-xs font-semibold">
            {category}
          </span>
          {featured && (
            <span className="text-secondary-coral text-xs font-bold">
              ★ 추천
            </span>
          )}
        </div>

        <h3 className="text-text-primary group-hover:text-secondary-coral mb-3 text-xl font-bold transition-colors">
          <Link href={href}>{title}</Link>
        </h3>

        <p className="text-text-secondary mb-4 line-clamp-2 text-sm">
          {description}
        </p>
      </div>

      {/* Hover CTA */}
      <Link
        href={href}
        className="bg-secondary-coral group-hover:bg-secondary-peach block px-6 py-3 text-center font-medium text-white transition-colors"
      >
        읽기 →
      </Link>
    </article>
  );
};

const Blog: React.FC = async () => {
  const blogs = getVisibleBlogs();

  return (
    <section id="blog" className="section">
      <div className="section-container">
        <div className="mb-16">
          <h2 className="text-text-primary mb-4 text-4xl font-bold md:text-5xl">
            개발 블로그
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg">
            개발하면서 배운 것들과 인사이트를 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.path}
              title={blog.title || blog.path}
              description={blog.description}
              category={blog.category}
              path={blog.path}
              featured={blog.featured}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="btn btn-secondary">
            모든 포스트 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
