# 포트폴리오 사이트 🎨

프론트엔드 개발자를 위한 통합 포트폴리오 사이트입니다. VS Code Agent 사용 및 Next.js 14, TypeScript, Tailwind CSS로 구축되었습니다.

## 🎨 기능

- ✨ **자기소개**: 개발자 프로필 및 주요 경력 소개
- 📈 **경력 & 경험**: 타임라인 형식의 경력 정보
- 💼 **프로젝트**: 주요 프로젝트 소개 및 상세 정보
- ⭐ **피어 리뷰**: 동료의 평가 및 추천글
- 📝 **개발 블로그**: 기술 관련 글 및 인사이트 공유
- 📱 **반응형 디자인**: 모든 디바이스에 최적화
- 🌈 **파스텔 컬러 테마**: 부드럽고 따뜻한 디자인

## 🚀 기술 스택

- **Framework**: Next.js 16.0.10 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS
- **Animation**: Framer Motion
- **Font**: Pretendard (한글 최적화 폰트)
- **Deployment**: GitHub Pages

## 📦 설치 및 실행

### 1️⃣ 개발 환경 실행

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하세요.

### 2️⃣ 빌드

```bash
npm run build
```

### 3️⃣ GitHub Pages 배포

**방법 1: GitHub Actions 자동 배포 (권장)**

1. GitHub에 저장소 생성: `USERNAME.github.io`
2. 코드를 `main` 브랜치로 push
3. 자동으로 배포됩니다 ✨

**방법 2: 수동 배포**

```bash
npm run build
# out 폴더의 내용을 GitHub Pages에 배포
```

## 📁 프로젝트 구조

```
portfolio2025/
├── src/
│   ├── app/              # Next.js App Router 페이지
│   │   ├── layout.tsx    # 루트 레이아웃
│   │   ├── page.tsx      # 홈 페이지
│   │   ├── blog/         # 블로그 페이지
│   │   └── blog/[slug]/  # 블로그 상세 페이지
│   ├── components/       # React 컴포넌트
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Reviews.tsx
│   │   ├── Blog.tsx
│   │   ├── Footer.tsx
│   │   └── BlurredDots.tsx
│   ├── data/            # 정적 데이터
│   │   ├── about.ts
│   │   ├── projects.ts
│   │   └── reviews.ts
│   ├── types/           # TypeScript 타입
│   ├── lib/             # 유틸리티 함수
│   └── styles/          # 글로벌 CSS
├── content/             # 블로그 마크다운
│   └── blog/
├── public/              # 정적 자산
├── .github/workflows/   # GitHub Actions
├── tailwind.config.ts
├── next.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 디자인 시스템

### 색상 팔레트

| 색상       | HEX     | 용도        | 설명            |
| ---------- | ------- | ----------- | --------------- |
| 배경       | #FCF9BE | 주요 배경   | 따뜻한 크림색   |
| 민트       | #E8F3D6 | 서브 배경   | 연한 초록색     |
| 피치       | #FFDCA9 | 서브 배경   | 연한 주황색     |
| 세이지     | #CAE59F | 서브 배경   | 부드러운 초록색 |
| 코랄       | #FAAB78 | 강조 & CTA  | 따뜻한 산호색   |
| 하이라이트 | #FFE5A7 | 텍스트 강조 | 밝은 황색       |

### 타이포그래피

- **폰트**: Pretendard (한글 최적화)
- **헤딩**: 굵음(Bold)
- **본문**: 일반(Regular)
- **강조**: 하이라이트 색상 배경

## 📝 사용자 정의하기

### 1️⃣ 자신의 정보 추가

#### 자기소개 및 경력

`src/data/about.ts`를 수정하세요:

```typescript
export const aboutData: About = {
  name: "당신의 이름",
  title: "프론트엔드 개발자",
  bio: "당신의 소개",
  highlights: ["항목1", "항목2"],
  location: "도시, 국가",
  email: "your-email@example.com",
  social: {
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/...",
  },
};
```

#### 프로젝트

`src/data/projects.ts`를 수정하세요:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "프로젝트 제목",
    description: "짧은 설명",
    longDescription: "긴 설명",
    image: "/images/project.png",
    technologies: ["React", "TypeScript", "Tailwind"],
    links: {
      github: "https://github.com/...",
      live: "https://project.com",
    },
    startDate: "2024-06",
    endDate: "2024-12",
    featured: true,
  },
];
```

#### 피어 리뷰

`src/data/reviews.ts`를 수정하세요:

```typescript
export const reviews: Review[] = [
  {
    id: "1",
    name: "리뷰어 이름",
    title: "직책",
    company: "회사명",
    content: "평가 내용",
    highlights: ["핵심 키워드"],
    skills: ["기술", "스킬"],
  },
];
```

#### 블로그 포스트

`content/blog/` 폴더에 `.md` 파일을 추가하세요.

### 2️⃣ 이미지 추가

1. 이미지를 `public/images/` 폴더에 저장
2. 컴포넌트에서 다음과 같이 사용:

```typescript
import Image from "next/image";

<Image src="/images/my-image.png" alt="설명" width={1200} height={600} priority />;
```

### 3️⃣ 스타일 커스터마이징

#### Tailwind 색상 변경

`tailwind.config.ts`에서 색상을 수정하세요:

```typescript
colors: {
  primary: {
    light: '#FCF9BE',
  },
  secondary: {
    mint: '#E8F3D6',
    // ... 다른 색상
  },
}
```

#### 글로벌 스타일 변경

`src/styles/globals.css`를 수정하세요.

## 🎯 주요 기능 상세

### 자기소개 섹션 (Hero)

- 개발자 프로필 소개
- 주요 경력 하이라이트
- CTA 버튼 (프로젝트 보기, 이력서 다운로드)
- 소셜 링크

### 경력 섹션

- 타임라인 형식
- 직급, 회사, 기간, 설명
- 주요 성과
- 기술스택 태그

### 프로젝트 섹션

- 주요 프로젝트 (Grid 레이아웃)
- 기타 프로젝트 (카드 레이아웃)
- 프로젝트 이미지, 설명, 기술스택
- GitHub/Live Demo 링크

### 리뷰 섹션

- 동료의 평가
- 리뷰어 정보 (이름, 직급, 회사)
- 강조 키워드
- 관련 스킬 태그

### 블로그 섹션

- 블로그 목록 페이지
- 개별 포스트 페이지
- 마크다운 지원
- 카테고리, 태그, 읽기 시간

## 🚀 배포 관련

### GitHub Pages URL

- 개인 페이지: `https://USERNAME.github.io`
- 프로젝트 페이지: `https://USERNAME.github.io/repository-name`

### 커스텀 도메인

`.github/workflows/deploy.yml`에서 `cname` 설정:

```yaml
cname: your-domain.com
```

### GitHub Actions 배포 자동화

`.github/workflows/deploy.yml`이 설정되어 있습니다.
Push하면 자동으로 배포됩니다!

## 📱 반응형 디자인

Tailwind CSS 반응형 클래스:

- `sm:` - 640px 이상
- `md:` - 768px 이상
- `lg:` - 1024px 이상
- `xl:` - 1280px 이상

## ⚡ 성능 최적화

- ✅ **이미지 최적화**: Next.js Image 컴포넌트
- ✅ **폰트 최적화**: Pretendard 웹폰트
- ✅ **코드 스플리팅**: 동적 import
- ✅ **Blurred Dots**: CSS 필터 기반 시각 효과

## 🔧 개발 팁

### 새로운 섹션 추가

1. `src/components/YourSection.tsx` 생성
2. `src/app/page.tsx`에 import
3. 네비게이션에 링크 추가

### 색상 강조 적용

```html
<span class="highlight">강조할 텍스트</span>
```

### 버튼 스타일

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
```

## 📚 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [React 공식 문서](https://react.dev)
- [TypeScript 문서](https://www.typescriptlang.org/docs)

## 🤝 기여

이 템플릿을 개선하고 싶으신가요? 자유롭게 수정하고 배포하세요!

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포할 수 있습니다.

---

**포트폴리오 사이트가 준비되었습니다! 🎉**

행운을 빕니다! 궁금한 점이 있으면 언제든지 물어봐주세요.
