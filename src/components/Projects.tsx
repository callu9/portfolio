import React from "react";
import { projects } from "@/data/projects";

const Projects: React.FC = () => {
	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<section id="projects" className="section">
			<div className="section-container">
				<div className="mb-16">
					<h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">주요 프로젝트</h2>
					<p className="text-lg text-text-secondary max-w-2xl">
						제가 진행한 프로젝트들입니다. 각 프로젝트에서 기술적 도전과 해결 방법을 경험했습니다.
					</p>
				</div>

				{/* Featured Projects */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
					{featuredProjects.map((project) => (
						<div
							key={project.id}
							className="group card bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-xl transition-all">
							{/* Image Placeholder */}
							<div className="relative w-full h-48 bg-gradient-to-br from-secondary-mint to-secondary-peach overflow-hidden">
								<div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
									<div className="text-center">
										<div className="text-4xl mb-2">🖼️</div>
										<p className="text-text-secondary text-sm">프로젝트 이미지</p>
									</div>
								</div>
							</div>

							<div className="p-6">
								<h3 className="text-2xl font-bold text-text-primary mb-2">{project.title}</h3>
								<p className="text-text-secondary mb-4">{project.description}</p>

								{/* Technologies */}
								<div className="flex flex-wrap gap-2 mb-6">
									{project.technologies.slice(0, 3).map((tech) => (
										<span
											key={tech}
											className="inline-block px-3 py-1 bg-secondary-peach/50 text-text-primary text-xs rounded-full font-medium">
											{tech}
										</span>
									))}
									{project.technologies.length > 3 && (
										<span className="text-text-light text-xs pt-1">
											+{project.technologies.length - 3}
										</span>
									)}
								</div>

								{/* Period */}
								<p className="text-sm text-text-light mb-4">
									{project.startDate} ~ {project.endDate}
								</p>

								{/* Links */}
								<div className="flex gap-3">
									{project.links.github && (
										<a
											href={project.links.github}
											className="flex-1 px-4 py-2 bg-text-primary text-white rounded-lg text-center font-medium hover:opacity-80 transition-opacity text-sm">
											GitHub
										</a>
									)}
									{project.links.live && (
										<a
											href={project.links.live}
											className="flex-1 px-4 py-2 bg-secondary-coral text-white rounded-lg text-center font-medium hover:opacity-80 transition-opacity text-sm">
											Live Demo
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Other Projects */}
				{otherProjects.length > 0 && (
					<div>
						<h3 className="text-2xl font-bold text-text-primary mb-6">기타 프로젝트</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{otherProjects.map((project) => (
								<div
									key={project.id}
									className="card bg-white/40 backdrop-blur-sm p-6 hover:shadow-lg transition-all">
									<h4 className="text-lg font-bold text-text-primary mb-2">{project.title}</h4>
									<p className="text-text-secondary text-sm mb-4">{project.description}</p>

									<div className="flex flex-wrap gap-1 mb-4">
										{project.technologies.slice(0, 2).map((tech) => (
											<span key={tech} className="text-xs text-secondary-coral font-medium">
												#{tech}
											</span>
										))}
									</div>

									{project.links.github && (
										<a
											href={project.links.github}
											className="text-secondary-coral hover:text-secondary-peach font-medium text-sm">
											→ GitHub
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Projects;
