/**
 * Blog configuration
 * Define metadata for blog posts including category, description, and visibility
 */

export type BlogConfig = {
  path: string; // Repo path (e.g., "javascript-deep-dive/05_expression_and_statement")
  category: string;
  description: string;
  title?: string;
  featured?: boolean; // Show at top of listing
  visible?: boolean; // Show in listing (default: true)
};

export const blogConfigs: BlogConfig[] = [
  // Featured posts
  {
    path: "codeit-sprint-fe14/daily-paper/250215_react_reconciliation",
    title: "React 재조정 알고리즘",
    category: "React",
    description: "React의 reconciliation 알고리즘과 Virtual DOM의 작동 원리",
    featured: true,
  },

  // JavaScript Deep Dive
  {
    path: "javascript-deep-dive/05_expression_and_statement",
    category: "JavaScript",
    title: "표현식과 문",
    description: "표현식과 문의 차이와 개념 이해",
  },
  {
    path: "javascript-deep-dive/12_function",
    category: "JavaScript",
    title: "함수",
    description: "함수의 정의, 호출, 스코프 및 클로저",
  },
  {
    path: "javascript-deep-dive/14_problems_of_global_variable",
    category: "JavaScript",
    title: "전역 변수 문제",
    description: "전역 변수의 문제점과 해결 방안",
  },
  {
    path: "javascript-deep-dive/16_property_attribute",
    category: "JavaScript",
    title: "프로퍼티 어트리뷰트",
    description: "객체의 프로퍼티 어트리뷰트와 디스크립터",
  },

  // Codeit Sprint
  {
    path: "codeit-sprint-fe14/README",
    category: "Frontend",
    title: "Codeit Sprint 개요",
    description: "Codeit Sprint FE14 학습 자료 및 과제",
  },
  {
    path: "codeit-sprint-fe14/weekly-paper/week13_typescript",
    category: "TypeScript",
    title: "TypeScript 소개",
    description: "TypeScript의 기본 개념과 타입 시스템 이해",
  },

  // React Deep Dive
  {
    path: "react-deep-dive/12_core_web_vital",
    category: "Performance",
    title: "Core Web Vitals",
    description: "핵심 웹 지표(Core Web Vitals) 최적화 전략",
  },
];

/**
 * Get blog config by path
 */
export function getBlogConfig(path: string): BlogConfig | undefined {
  return blogConfigs.find((config) => config.path === path);
}

/**
 * Filter visible blogs and sort by featured
 */
export function getVisibleBlogs(): BlogConfig[] {
  return blogConfigs
    .filter((config) => config.visible !== false)
    .sort((a, b) => {
      // Featured posts first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
}

/**
 * Get blogs by category
 */
export function getBlogsByCategory(category: string): BlogConfig[] {
  return blogConfigs
    .filter(
      (config) => config.category === category && config.visible !== false,
    )
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
}

/**
 * Get unique categories
 */
export function getCategories(): string[] {
  const categories = new Set(
    blogConfigs
      .filter((config) => config.visible !== false)
      .map((config) => config.category),
  );
  return Array.from(categories).sort();
}
