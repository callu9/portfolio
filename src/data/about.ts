import type { About } from "@/types";

export const aboutData: About = {
  name: "LEE SUJEONG",
  title: "프론트엔드 개발자",
  bio: "사용자와 조직에 모두 가치를 전달하고자 하는 프론트엔드 개발자입니다.",
  highlights: [
    "React.js 기반 백오피스 프로젝트 경험 보유",
    "TypeScript로 안전한 코드 작성",
    "디자인 시스템 구축 경험으로 협업 효율성 향상",
    "CSS-in-JS와 Tailwind CSS로 스타일링",
  ],
  location: "대한민국, 서울",
  email: "callu_9ine@naver.com",
  social: {
    github: "https://github.com/callu9",
    // linkedin: "https://linkedin.com",
    // twitter: "https://twitter.com",
    // blog: "https://blog.example.com",
  },
};

export const experiences = [
  {
    id: "1",
    company: "코드잇 스프린트 : 프론트엔드 단기심화 11기",
    position: "프론트엔드 개발 교육",
    period: "2025.09 - 2025.11 | 수료",
    description: "프론트엔드 개발 심화 기술 학습 및 멘토링, 팀 프로젝트 진행",
    skills: [
      "TailwindCSS",
      "Framer Motion",
      "Jest",
      "React Testing Library",
      "CI/CD",
    ],
    achievements: [
      "Jest, React Testing Library로 컴포넌트 단위 테스트 작성 경험",
      "GitHub Actions 기반 CI/CD 파이프라인 구축 실습",
      "fetch, zod 활용한 API Core 설계 및 구현",
    ],
  },
  {
    id: "2",
    company: "코드잇 스프린트 : 프론트엔드 부트캠프 14기",
    position: "프론트엔드 개발 교육",
    period: "2024.12 - 2025.06 | 수료",
    description: "프론트엔드 개발 기술 학습 및 멘토링, 팀 프로젝트 진행",
    skills: [
      "React",
      "JavaScript",
      "Typescript",
      "Next.js",
      "Styled Components",
      "REST API",
    ],
    achievements: [
      "TanStack React-Query를 활용한 API Core 설계 및 구현",
      "CCP(Compound Component Pattern) 활용한 커스텀 Dropdown 구현",
      "모바일 반응형 구현",
    ],
  },
  {
    id: "3",
    company: "롯데이노베이트(주)",
    position: "Frontend Developer",
    period: "2021.10 - 2025.04 | 퇴사 (3년 6개월)",
    description:
      "마트 백오피스 시스템 프론트엔드 개발 및 운영, 리테일 SI 프로젝트 개발 수행 (Javascript, Java, Kotlin, C#)",
    skills: ["React", "JavaScript", "Typescript", "SCSS", "REST API"],
    achievements: [
      "디자인 시스템 구축으로, 커뮤니케이션 체계 확립 및 협업 효율성 향상",
      "WebView in App 개발로 비효율적 업무 프로세스 개선",
      "사용자 만족도조사 “기존 대비 사용하기 쉽고 빠르다” 항목 “매우 만족” 응답비율 95% 달성",
      "재사용성·개발 생산성 향상으로 개발 속도 2배 증가",
    ],
  },
  {
    id: "4",
    company: "SSAFY 5th (삼성 청년 SW 아카데미)",
    position: "웹 개발 교육",
    period: "2021.01 - 2021.10 | 수료",
    description:
      "전공자반(Java반) 수료 및 알고리즘 학습, 웹 개발 기초 지식 수강, 팀 프로젝트 진행",
    skills: ["Java", "JavaScript", "RDBMS", "SCSS", "REST API", "Vue.js"],
    achievements: [],
  },
];
