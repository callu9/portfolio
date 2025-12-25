import React from "react";

export interface BlurredDotsProps {
	count?: number;
	speed?: number;
}

export const BlurredDots: React.FC<BlurredDotsProps> = ({ count = 8 }) => {
	const colors = ["dot-mint", "dot-peach", "dot-sage", "dot-coral"];

	const generateDots = () => {
		return Array.from({ length: count }).map((_, i) => ({
			id: i,
			left: Math.random() * 100,
			top: Math.random() * 100,
			size: Math.random() * 300 + 200,
			color: colors[Math.floor(Math.random() * colors.length)],
			duration: Math.random() * 5 + 15,
		}));
	};

	const dots = generateDots();

	return (
		<div className="blurred-dots">
			{dots.map((dot) => (
				<div
					key={dot.id}
					className={`dot ${dot.color}`}
					style={{
						left: `${dot.left}%`,
						top: `${dot.top}%`,
						width: `${dot.size}px`,
						height: `${dot.size}px`,
						animation: `float ${dot.duration}s ease-in-out infinite`,
						animationDelay: `${Math.random() * dot.duration}s`,
					}}
				/>
			))}
		</div>
	);
};

export default BlurredDots;
