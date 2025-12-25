# TypeScript로 안전한 React 컴포넌트 작성하기

TypeScript는 React 개발에서 타입 안전성을 제공하여 런타임 오류를 사전에 방지할 수 있습니다.

## Props 타입 정의하기

```typescript
interface ButtonProps {
	label: string;
	onClick: () => void;
	variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
	return (
		<button className={`btn btn-${variant}`} onClick={onClick}>
			{label}
		</button>
	);
};
```

## 제네릭 컴포넌트

```typescript
interface ListProps<T> {
	items: T[];
	renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
	return (
		<ul>
			{items.map((item, i) => (
				<li key={i}>{renderItem(item)}</li>
			))}
		</ul>
	);
}
```

## 마무리

TypeScript를 사용하면 코드의 품질이 높아지고 유지보수가 더 쉬워집니다.
