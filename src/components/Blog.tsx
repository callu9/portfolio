import React from "react";

interface BlogPost {
	id: string;
	title: string;
	description: string;
	date: string;
	category: string;
	readingTime: number;
	slug: string;
}

const Blog: React.FC = () => {
	// 임시 블로그 데이터
	const blogPosts: BlogPost[] = [
		{
			id: "1",
			title: "Next.js 14 App Router로 시작하기",
			description:
				"Next.js 14의 새로운 App Router를 활용하여 모던한 웹 애플리케이션을 구축하는 방법을 알아봅니다.",
			date: "2024-12-10",
			category: "Next.js",
			readingTime: 8,
			slug: "nextjs-14-app-router",
		},
		{
			id: "2",
			title: "TypeScript로 안전한 React 컴포넌트 작성하기",
			description:
				"TypeScript를 사용하여 타입 안전성이 높은 React 컴포넌트를 작성하는 베스트 프랙티스입니다.",
			date: "2024-12-05",
			category: "React",
			readingTime: 10,
			slug: "typescript-react-components",
		},
		{
			id: "3",
			title: "웹 성능 최적화 완벽 가이드",
			description:
				"이미지 최적화, 코드 스플리팅, 캐싱 전략 등 웹 성능을 개선하는 실전 팁들을 소개합니다.",
			date: "2024-11-28",
			category: "Performance",
			readingTime: 12,
			slug: "web-performance-guide",
		},
	];

	return (
		<section id="blog" className="section">
			<div className="section-container">
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">개발 블로그</h2>
					<p className="text-lg text-text-secondary max-w-2xl">
						개발하면서 배운 것들과 인사이트를 공유합니다.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{blogPosts.map((post) => (
						<article
							key={post.id}
							className="group card bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-all">
							{/* Category Badge */}
							<div className="p-6 pb-4">
								<span className="inline-block px-3 py-1 bg-secondary-peach/50 text-text-primary text-xs rounded-full font-semibold mb-3">
									{post.category}
								</span>

								<h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-secondary-coral transition-colors">
									<a href={`/blog/${post.slug}`}>{post.title}</a>
								</h3>

								<p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.description}</p>

								{/* Meta */}
								<div className="flex items-center justify-between text-xs text-text-light pt-4 border-t border-secondary-peach/20">
									<span>{post.date}</span>
									<span>{post.readingTime}분 읽기</span>
								</div>
							</div>

							{/* Hover CTA */}
							<a
								href={`/blog/${post.slug}`}
								className="block px-6 py-3 bg-secondary-coral text-white font-medium text-center group-hover:bg-secondary-peach transition-colors">
								읽기 →
							</a>
						</article>
					))}
				</div>

				{/* View All Button */}
				<div className="mt-12 text-center">
					<a href="/blog" className="btn btn-secondary">
						모든 포스트 보기
					</a>
				</div>
			</div>
		</section>
	);
};

export default Blog;
