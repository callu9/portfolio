export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	technologies: string[];
	links: {
		github?: string;
		live?: string;
		blog?: string;
	};
	startDate: string;
	endDate: string;
	featured: boolean;
}

export interface Review {
	id: string;
	name: string;
	title: string;
	company: string;
	content: string;
	highlights: string[];
	avatar?: string;
}

export interface BlogPost {
	id: string;
	title: string;
	description: string;
	content: string;
	date: string;
	updatedDate?: string;
	category: string;
	tags: string[];
	readingTime: number;
	featured: boolean;
	slug: string;
}

export interface Experience {
	id: string;
	company: string;
	position: string;
	period: string;
	description: string;
	skills: string[];
	achievements: string[];
}

export interface About {
	name: string;
	title: string;
	bio: string;
	highlights: string[];
	location: string;
	email: string;
	social: {
		github?: string;
		linkedin?: string;
		twitter?: string;
		blog?: string;
	};
}
