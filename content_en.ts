interface Basics {
	name: string;
	label: string;
	summary: string;
	summary2: string;
	picture: string;
	email: string;
	url: string;
	domain: string;
	phone: string;
	x: string;
	linkedin: string;
	github: string;
}

interface WorkExperience {
	name: string;
	position: string;
	url: string;
	startDate: string;
	endDate: string | null;
	summary: string;
	highlights: string[];
}

interface Education {
	institution: string;
	url?: string;
	area: string;
  areaCurrent?: string;
  area2?: string;
  area3?: string;
  area4?: string;
  area5?: string;
  area6?: string;
	studyType?: string;
	location?: string;
	startDate: string;
	endDate: string | null;
	courses?: string[];
}

interface Skill {
	name: string;
}

interface Language {
	language: string;
	fluency: string;
}

interface Project {
	name: string;
	isActive: boolean;
	description: string;
	highlights: string[];
	github?: string;
	url?: string;
	img?: string;
	youtube?: string;
}

interface Content {
	basics: Basics;
	work: WorkExperience[];
	education: Education[];
	skills: Skill[];
	languages: Language[];
	projects: Project[];
}

export const content: Content = {
	basics: {
		name: "Raul Cano",
		label: "IS A DEVELOPER",
		summary:
			"Junior Full Stack Developer at WidgiLabs, where I create WordPress plugins that empower clients to customize their websites directly through the CMS. My work involves developing features with PHP and React, and designing frontend previews with CSS, HTML, PHP, and JavaScript.",
		summary2:
			"My mother says that I developed this love for programming because when I was a child, I always played with Legos, and this is like digital Legos for adults, maybe she's right.",
		picture: "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
		email: "rawraul@outlook.com",
		url: "https://raulcano.dev",
		domain: "raulcano.dev",
		phone: "+34 666 666 666",
		x: "https://x.com/raulcanodev",
		linkedin: "https://www.linkedin.com/in/raulcano-in/",
		github: "https://github.com/raulcanodev",
	},
	work: [
		{
			name: "WidgiLabs",
			position: "Junior Full Stack Developer",
			url: "https://www.widgilabs.com/",
			startDate: "2024-05-02",
			endDate: null,
			summary:
				"I develop WordPress plugins that enable end clients to independently edit the visual aspects of their websites through the CMS. My role involves programming internal features using PHP and React, and creating visual previews for the frontend using CSS, HTML, PHP, and JavaScript.",
			highlights: ["Started the company"],
		},
		{
			name: "Accenture",
			position: "Content Analyst",
			url: "https://www.accenture.com/gb-en",
			startDate: "2023-10-30",
			endDate: "2024-04-27",
			summary:
				"Responsible for reviewing, classifying, and removing content on the most popular social network. Utilized specific tools and channels while adhering to client guidelines. Maintained a comprehensive understanding of constantly evolving client policies and guidelines. Investigated, resolved, and communicated complex content issues to the Security team.",
			highlights: ["Started the company"],
		},
		{
			name: "Teleperformance (Adobe)",
			position: "Technical Support",
			url: "https://helpx.adobe.com/contact.html",
			startDate: "2022-07-08",
			endDate: "2023-10-30",
			summary:
				"Technical Support for Adobe, providing support through chat and phone for technical issues and billing inquiries related to Adobe applications. Key role in training new agents and contributing to service improvement by reporting issues in JIRA.",
			highlights: ["Started the company"],
		},
		{
			name: "BTC Mining Spain",
			position: "Sales Manager & Customer Support",
			url: "https://btcminingspain.com/",
			startDate: "2022-01-30",
			endDate: "2022-05-01",
			summary:
				"Sales manager, customer support, and ASIC MINER supplier, I led sales operations, provided personalized assistance to customers during the purchase and installation process, managed the website, coordinated the sales funnel with an external marketing team, and established relationships with manufacturers in China to manage orders.",
			highlights: ["Started the company"],
		},
		{
			name: "My Doctor Phone",
			position: "Mobile Repair Technician",
			url: "https://www.linkedin.com/posts/raulcano-in_this-was-my-old-lab-where-i-started-with-activity-7089021352673779712-KJju?utm_source=share&utm_medium=member_desktop",
			startDate: "2020-11-15",
			endDate: "2021-05-01",
			summary:
				"Started my own repair business, specializing in mobile device repairs. Mainly focused on iPhone micro-soldering to provide excellent service and ensure customer satisfaction.",
			highlights: ["Started the company"],
		},
		{
			name: "Mas Korte",
			position: "CNC Controller",
			url: "#",
			startDate: "2016-12-15",
			endDate: "2022-03-01",
			summary:
				"Operated and maintained CNC cutting machines at Mas Korte to ensure efficient production according to client orders.",
			highlights: ["Started the company"],
		},
	],
	education: [
		{
			institution: "4Geeks Academy",
			url: "https://www.4geeksacademy.co/",
			area: "Full Stack Development",
			studyType: "Bootcamp",
			startDate: "2023-10-30",
			endDate: "2024-03-25",
			courses: [
				"React",
				"Flask",
				"Python",
				"Javascript",
				"SQL",
				"Bootstrap",
			],
		},
		{
			institution: "Udemy",
			areaCurrent: "NextJS & OpenAI",
			area: "The Ultimate React",
			area2: "Master in Advanced CSS3",
			area3: "JavaScript Total",
			area4: "Python and Django",
			area5: "Python Django The Practical Guide",
			area6: "Bootstrap 5",
			location: "Madrid, Spain",
			startDate: "2022",
			endDate: null,
		},
		{
			institution: "Expertos IT",
			area: "L2 Micro-soldering of iPhone motherboards",
			location: "Madrid, Spain",
			startDate: "2019-12-01",
			endDate: "2019-12-31",
		},
	],
	skills: [
		{ name: "HTML" },
		{ name: "CSS" },
		{ name: "JavaScript" },
		{ name: "React" },
		{ name: "Wordpress" },
		{ name: "PHP" },
		{ name: "Astro" },
		{ name: "Next.js" },
		{ name: "Python" },
	],
	languages: [
		{ language: "Spanish", fluency: "Native speaker" },
		{ language: "English", fluency: "Professional working proficiency" },
		{ language: "Portuguese", fluency: "Elementary proficiency" },
	],
	projects: [
		{
			name: "Best Template Chrome Extension",
			isActive: false,
			description:"Effortlessly organize and manage your templates with our intuitive extension.",
			highlights: ["React", "Chrome Extension"],
			img: "/images/projects/best-template.jpg",
			url: "https://chromewebstore.google.com/detail/best-template/dfdmabpbgnnmhldhmlpikbklcicaekoh",
			github: "https://github.com/raulcanodev/best-template-chrome-extension",
		},
		{
			name: "Generate Blog AI",
			isActive: false,
			description:"Next.js app with OpenAI's GPT-3 to generate blog posts.",
			highlights: ["Next.js", "OpenAI", "Stripe", "Tailwind CSS"],
			img: "/images/projects/blogai.png",
			github: "https://github.com/raulcanodev/openai-api-nextjs-to-generate-blogs?tab=readme-ov-file",
		},
		{
			name: "ForoGeeks (Forum)",
			isActive: false,
			description:
				"Forum based in Reddit. Users can create threads, comment, like, report threads, and much more.",
			highlights: ["React", "Flask", "SQLAlchemy"],
			img: "/images/projects/forogeeks.png",
			github: "https://github.com/4GeeksAcademy/forogeeks",
			youtube: "https://www.youtube.com/watch?v=WEHCkBbcg8o&t=129s",
		},
		{
			name: "Instagram Bot",
			isActive: false,
			description:
				"Automatically sends direct messages on Instagram from a .csv file.",
			highlights: ["Python", "Selenium"],
			github: "https://github.com/raulcanodev/InstagramBot-AutoDM",
			img: "/images/projects/instagram-bot.jpg",
		},
		{
			name: "Gaming News",
			isActive: true,
			description: "Web layout without external frameworks or libraries.",
			highlights: ["HTML5", "CSS3", "JS"],
			url: "https://css3-gaming-news.vercel.app/",
			img: "/images/projects/gaming-news.png",
		},
		{
			name: "Marketing Agency",
			isActive: true,
			description: "Web layout without external frameworks or libraries.",
			highlights: ["HTML5", "CSS3", "JS"],
			url: "https://marketing-agency-web.vercel.app/",
			img: "/images/projects/marketing-agency.png",
		},
	],
};
