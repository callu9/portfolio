import type { Project } from "@/types";

export const projects: Project[] = [
	{
		id: "1",
		title: "프로젝트 1: 이커머스 플랫폼",
		description: "Next.js와 TypeScript로 구축한 현대적인 이커머스 플랫폼",
		longDescription:
			"성능과 사용자 경험을 중심으로 개발한 풀스택 이커머스 플랫폼입니다. 서버사이드 렌더링, 최적화된 이미지 처리, 그리고 반응형 디자인이 특징입니다.",
		image: "/images/project-1.png",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe"],
		links: {
			github: "https://github.com/example/ecommerce",
			live: "https://ecommerce-demo.com",
			blog: "/blog/ecommerce-project",
		},
		startDate: "2023-06",
		endDate: "2023-12",
		featured: true,
	},
	{
		id: "2",
		title: "프로젝트 2: 실시간 협업 도구",
		description: "WebSocket 기반 실시간 협업 문서 편집 도구",
		longDescription:
			"React와 Firebase를 사용한 실시간 협업 플랫폼으로, 여러 사용자가 동시에 문서를 편집할 수 있습니다.",
		image: "/images/project-2.png",
		technologies: ["React", "Firebase", "WebSocket", "Redux"],
		links: {
			github: "https://github.com/example/collab-tool",
			live: "https://collab-tool-demo.com",
		},
		startDate: "2023-01",
		endDate: "2023-05",
		featured: true,
	},
	{
		id: "3",
		title: "프로젝트 3: 데이터 시각화 대시보드",
		description: "D3.js와 React를 활용한 고급 데이터 시각화 대시보드",
		longDescription: "복잡한 데이터를 시각화하여 인사이트를 제공하는 인터랙티브 대시보드입니다.",
		image: "/images/project-3.png",
		technologies: ["React", "D3.js", "TypeScript", "Recharts"],
		links: {
			github: "https://github.com/example/dashboard",
			live: "https://dashboard-demo.com",
		},
		startDate: "2022-09",
		endDate: "2022-12",
		featured: false,
	},
];
