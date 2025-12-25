# 웹 성능 최적화 완벽 가이드

웹 성능은 사용자 경험의 핵심입니다. 이 가이드에서는 성능 최적화의 주요 기법들을 알아봅니다.

## 1. 이미지 최적화

Next.js의 Image 컴포넌트를 사용하면 자동으로 이미지를 최적화합니다.

```typescript
import Image from "next/image";

export default function Hero() {
	return <Image src="/hero.jpg" alt="Hero Image" width={1200} height={600} priority />;
}
```

## 2. 코드 스플리팅

동적 import를 사용하면 필요한 시점에만 코드를 로드합니다.

```typescript
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("@/components/Heavy"), {
	loading: () => <p>Loading...</p>,
});
```

## 3. 폰트 최적화

Google Fonts를 최적화된 방식으로 로드합니다.

## 성능 측정

Lighthouse와 WebPageTest를 활용하여 성능을 측정하세요.
