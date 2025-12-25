# Next.js 14 App Router로 시작하기

Next.js 14의 새로운 App Router는 React의 최신 기능을 활용하여 더욱 강력하고 유연한 웹 애플리케이션을 만들 수 있게 합니다.

## App Router의 주요 특징

### 1. 파일 기반 라우팅

App 디렉토리 구조가 곧 URL 경로가 됩니다.

### 2. 서버 컴포넌트

기본적으로 모든 컴포넌트가 서버 컴포넌트이므로 번들 크기가 줄어듭니다.

### 3. 향상된 데이터 페칭

`fetch`를 사용한 데이터 페칭이 더욱 간단해졌습니다.

## 실제 예제

```typescript
export default function Page() {
	return <h1>Hello World</h1>;
}
```

이렇게 간단하게 시작할 수 있습니다!
