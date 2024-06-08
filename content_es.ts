interface Basics {
	name: string;
	label: string;
	summary: string;
	summary2: string;
	picture: string;
	email: string;
	url: string;
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
		label: "Desarrollador Full Stack",
		summary:
			"Desarrollador Full Stack Junior en WidgiLabs, donde creo plugins de WordPress que permiten a los clientes personalizar sus sitios web directamente a través del CMS. Mi trabajo implica desarrollar funciones con PHP y React, y diseñar vistas previas del frontend con CSS, HTML, PHP y JavaScript.",
		summary2:
			"Siempre estoy aprendiendo nuevas tecnologías y mejorando mis habilidades actuales. Esto me ayuda a adaptarme fácilmente a diferentes stacks tecnológicos y ser una parte útil de cualquier equipo.",
		picture: "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
		email: "rawraul@outlook.com",
		url: "https://raulcano.dev",
	},
	work: [
		{
			name: "WidgiLabs",
			position: "Desarrollador Full Stack Junior",
			url: "https://www.widgilabs.com/",
			startDate: "2024-05-02",
			endDate: null,
			summary:
				"Desarrollo plugins de WordPress que permiten a los clientes finales editar independientemente los aspectos visuales de sus sitios web a través del CMS. Mi rol implica programar funciones internas usando PHP y React, y crear vistas previas visuales para el frontend usando CSS, HTML, PHP y JavaScript.",
			highlights: ["Comencé en la empresa"],
		},
		{
			name: "Accenture",
			position: "Analista de Contenido",
			url: "https://www.accenture.com/gb-en",
			startDate: "2023-10-30",
			endDate: "2024-04-27",
			summary:
				"Responsable de revisar, clasificar y eliminar contenido en la red social más popular. Utilicé herramientas y canales específicos mientras seguía las directrices del cliente. Mantengo una comprensión integral de las políticas y directrices del cliente en constante evolución. Investigué, resolví y comuniqué problemas complejos de contenido al equipo de Seguridad.",
			highlights: ["Comencé en la empresa"],
		},
		{
			name: "Teleperformance (Adobe)",
			position: "Soporte Técnico",
			url: "https://helpx.adobe.com/contact.html",
			startDate: "2022-07-08",
			endDate: "2023-10-30",
			summary:
				"Soporte Técnico para Adobe, proporcionando soporte a través de chat y teléfono para problemas técnicos y consultas de facturación relacionadas con aplicaciones de Adobe. Papel clave en la capacitación de nuevos agentes y contribución a la mejora del servicio reportando problemas en JIRA.",
			highlights: ["Comencé en la empresa"],
		},
		{
			name: "BTC Mining Spain",
			position: "Gerente de Ventas y Soporte al Cliente",
			url: "https://btcminingspain.com/",
			startDate: "2022-01-30",
			endDate: "2022-05-01",
			summary:
				"Gerente de ventas, soporte al cliente y proveedor de ASIC MINER, lideré operaciones de ventas, brindé asistencia personalizada a los clientes durante el proceso de compra e instalación, gestioné el sitio web, coordiné el embudo de ventas con un equipo de marketing externo y establecí relaciones con fabricantes en China para gestionar pedidos.",
			highlights: ["Comencé en la empresa"],
		},
		{
			name: "My Doctor Phone",
			position: "Técnico de Reparación de Móviles",
			url: "https://www.linkedin.com/posts/raulcano-in_this-was-my-old-lab-where-i-started-with-activity-7089021352673779712-KJju?utm_source=share&utm_medium=member_desktop",
			startDate: "2020-11-15",
			endDate: "2021-05-01",
			summary:
				"Comencé mi propio negocio de reparación, especializándome en reparaciones de dispositivos móviles. Principalmente me enfoqué en micro-soldadura de iPhones para proporcionar un excelente servicio y asegurar la satisfacción del cliente.",
			highlights: ["Comencé en la empresa"],
		},
		{
			name: "Mas Korte",
			position: "Controlador CNC",
			url: "#",
			startDate: "2016-12-15",
			endDate: "2022-03-01",
			summary:
				"Operé y mantuve máquinas de corte CNC en Mas Korte para asegurar una producción eficiente según los pedidos de los clientes.",
			highlights: ["Comencé en la empresa"],
		},
	],
	education: [
		{
			institution: "4Geeks Academy",
			url: "https://www.4geeksacademy.co/",
			area: "Desarrollo Full Stack",
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
			area: "React Definitivo",
			area2: "Master en CSS3 Avanzado",
			area3: "JavaScript Total",
			area4: "Python y Django",
			area5: "Python Django La Guía Práctica",
			area6: "Bootstrap 5",
			location: "Madrid, España",
			startDate: "2022",
			endDate: null,
		},
		{
			institution: "Expertos IT",
			area: "Micro-soldadura L2 de placas base de iPhone",
			location: "Madrid, España",
			startDate: "2019-12-01",
			endDate: "2019-12-31",
		},
	],
	skills: [
		{ name: "HTML" },
		{ name: "CSS" },
		{ name: "JavaScript" },
		{ name: "React" },
		{ name: "Python" },
	],
	languages: [
		{ language: "Español", fluency: "Nativo" },
		{ language: "Inglés", fluency: "Competencia profesional" },
		{ language: "Portugués", fluency: "Competencia elemental" },
	],
	projects: [
		{
			name: "ForoGeeks (Foro)",
			isActive: false,
			description:
				"Foro basado en Reddit. Los usuarios pueden crear hilos, comentar, dar me gusta, reportar hilos, y mucho más.",
			highlights: [
				"React",
				"Flask",
				"SQLAlchemy",
				"Bootstrap",
				"SASS",
				"Render",
				"Firebase",
			],
			github: "https://github.com/4GeeksAcademy/forogeeks",
			url: "https://github.com/4GeeksAcademy/forogeeks",
		},
		{
			name: "Bot de Instagram",
			isActive: false,
			description:
				"Envía automáticamente mensajes directos en Instagram desde un archivo .csv",
			highlights: ["Python", "Selenium"],
			github: "https://github.com/raulcanodev/InstagramBot-AutoDM",
			url: "https://github.com/raulcanodev/InstagramBot-AutoDM",
		},
		{
			name: "Noticias de Videojuegos",
			isActive: true,
			description: "Diseño web sin frameworks o bibliotecas externas",
			highlights: ["DummyWeb", "HTML5", "CSS3", "JavaScript puro"],
			url: "https://css3-gaming-news.vercel.app/",
		},
		{
			name: "Agencia de Marketing",
			isActive: true,
			description: "Diseño web sin frameworks o bibliotecas externas",
			highlights: ["DummyWeb", "HTML5", "CSS3", "JavaScript puro"],
			url: "https://marketing-agency-web.vercel.app/",
		},
	],
};
