import { m as createComponent, n as renderTemplate, o as maybeRenderHead, p as addAttribute, t as renderComponent, z as renderHead, u as renderSlot, q as createAstro } from './astro/server_Cmaf0c94.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const content = {
  basics: {
    name: "Raul Cano",
    label: "IS A DEVELOPER",
    summary: "Junior Full Stack Developer at WidgiLabs, where I create WordPress plugins that empower clients to customize their websites directly through the CMS. My work involves developing features with PHP and React, and designing frontend previews with CSS, HTML, PHP, and JavaScript.",
    summary2: "My mother says that I developed this love for programming because when I was a child, I always played with Legos, and this is like digital Legos for adults, maybe she's right.",
    picture: "https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg",
    email: "rawraul@outlook.com",
    url: "https://raulcano.dev",
    domain: "raulcano.dev",
    phone: "+34 666 666 666",
    x: "https://x.com/raulcanodev",
    linkedin: "https://www.linkedin.com/in/raulcano-in/",
    github: "https://github.com/raulcanodev"
  },
  work: [
    {
      name: "WidgiLabs",
      position: "Junior Full Stack Developer",
      url: "https://www.widgilabs.com/",
      startDate: "2024-05-02",
      endDate: null,
      summary: "I develop WordPress plugins that enable end clients to independently edit the visual aspects of their websites through the CMS. My role involves programming internal features using PHP and React, and creating visual previews for the frontend using CSS, HTML, PHP, and JavaScript.",
      highlights: ["Started the company"]
    },
    {
      name: "Accenture",
      position: "Content Analyst",
      url: "https://www.accenture.com/gb-en",
      startDate: "2023-10-30",
      endDate: "2024-04-27",
      summary: "Responsible for reviewing, classifying, and removing content on the most popular social network. Utilized specific tools and channels while adhering to client guidelines. Maintained a comprehensive understanding of constantly evolving client policies and guidelines. Investigated, resolved, and communicated complex content issues to the Security team.",
      highlights: ["Started the company"]
    },
    {
      name: "Teleperformance (Adobe)",
      position: "Technical Support",
      url: "https://helpx.adobe.com/contact.html",
      startDate: "2022-07-08",
      endDate: "2023-10-30",
      summary: "Technical Support for Adobe, providing support through chat and phone for technical issues and billing inquiries related to Adobe applications. Key role in training new agents and contributing to service improvement by reporting issues in JIRA.",
      highlights: ["Started the company"]
    },
    {
      name: "BTC Mining Spain",
      position: "Sales Manager & Customer Support",
      url: "https://btcminingspain.com/",
      startDate: "2022-01-30",
      endDate: "2022-05-01",
      summary: "Sales manager, customer support, and ASIC MINER supplier, I led sales operations, provided personalized assistance to customers during the purchase and installation process, managed the website, coordinated the sales funnel with an external marketing team, and established relationships with manufacturers in China to manage orders.",
      highlights: ["Started the company"]
    },
    {
      name: "My Doctor Phone",
      position: "Mobile Repair Technician",
      url: "https://www.linkedin.com/posts/raulcano-in_this-was-my-old-lab-where-i-started-with-activity-7089021352673779712-KJju?utm_source=share&utm_medium=member_desktop",
      startDate: "2020-11-15",
      endDate: "2021-05-01",
      summary: "Started my own repair business, specializing in mobile device repairs. Mainly focused on iPhone micro-soldering to provide excellent service and ensure customer satisfaction.",
      highlights: ["Started the company"]
    },
    {
      name: "Mas Korte",
      position: "CNC Controller",
      url: "#",
      startDate: "2016-12-15",
      endDate: "2022-03-01",
      summary: "Operated and maintained CNC cutting machines at Mas Korte to ensure efficient production according to client orders.",
      highlights: ["Started the company"]
    }
  ],
  education: [
    {
      institution: "4Geeks Academy",
      url: "https://www.4geeksacademy.co/",
      area: "Full Stack Development",
      studyType: "Bootcamp",
      startDate: "2023-10-30",
      endDate: "2024-03-25",
      courses: ["React", "Flask", "Python", "Javascript", "SQL", "Bootstrap"]
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
      endDate: null
    },
    {
      institution: "Expertos IT",
      area: "L2 Micro-soldering of iPhone motherboards",
      location: "Madrid, Spain",
      startDate: "2019-12-01",
      endDate: "2019-12-31"
    }
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
    { name: "MongoDB" },
    { name: "Python" }
  ],
  languages: [
    { language: "Spanish", fluency: "Native speaker" },
    { language: "English", fluency: "Professional working proficiency" },
    { language: "Portuguese", fluency: "Elementary proficiency" }
  ],
  projects: [
    {
      name: "Best Template - Chrome Extension",
      isActive: false,
      description: "Effortlessly organize and manage your templates with our intuitive extension.",
      highlights: ["React", "Chrome Extension"],
      img: "/images/projects/best-template.jpg",
      url: "https://chromewebstore.google.com/detail/best-template/dfdmabpbgnnmhldhmlpikbklcicaekoh",
      github: "https://github.com/raulcanodev/best-template-chrome-extension"
    },
    {
      name: "Generate BlogAI - OpenAI",
      isActive: false,
      description: "Next.js app with OpenAI's GPT-3 to generate blog posts.",
      highlights: ["Next.js", "OpenAI", "Stripe", "Tailwind CSS"],
      img: "/images/projects/blogai.png",
      github: "https://github.com/raulcanodev/openai-api-nextjs-to-generate-blogs?tab=readme-ov-file",
      youtube: "https://youtu.be/Mhe_9a4pd60"
    },
    {
      name: "Forum 'ForoGeeks'",
      isActive: false,
      description: "Forum based in Reddit. Users can create threads, comment, like, report threads, and much more.",
      highlights: ["React", "Flask", "SQLAlchemy"],
      img: "/images/projects/forogeeks.png",
      github: "https://github.com/4GeeksAcademy/forogeeks",
      youtube: "https://www.youtube.com/watch?v=WEHCkBbcg8o&t=129s"
    },
    {
      name: "Instagram Bot",
      isActive: false,
      description: "Automatically sends direct messages on Instagram from a .csv file.",
      highlights: ["Python", "Selenium"],
      github: "https://github.com/raulcanodev/InstagramBot-AutoDM",
      img: "/images/projects/instagram-bot.jpg"
    },
    {
      name: "Gaming News - Web Layout",
      isActive: true,
      description: "Web layout without external frameworks or libraries.",
      highlights: ["HTML5", "CSS3", "JS"],
      url: "https://css3-gaming-news.vercel.app/",
      img: "/images/projects/gaming-news.png"
    }
  ]
};

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/icons/GitHub.astro", void 0);

const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/icons/LinkedIn.astro", void 0);

const $$X = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/icons/X.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const { name, domain, x, github, linkedin } = content.basics;
  const actualYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-[4rem]"> <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"> <div class="sm:flex sm:items-center sm:justify-between"> <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"> <span class="self-center text-green-500 text-2xl hidden md:block hover:text-green-500 hover:underline font-semibold whitespace-nowrap dark:text-green-500">${domain}</span> </a> <ul class="flex flex-wrap gap-2 mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"> <li class="flex items-center"> <a${addAttribute(github, "href")} target="_blank" class="hover:underline me-4 md:me-2 hover:text-green-500"> ${renderComponent($$result, "GitHub", $$GitHub, {})} </a> </li> <li class="flex items-center"> <a${addAttribute(linkedin, "href")} target="_blank" class="hover:underline hover:text-green-500 me-4 md:me-2"> ${renderComponent($$result, "LinkedIn", $$LinkedIn, {})} </a> </li> <li class="flex items-center"> <a${addAttribute(x, "href")} target="_blank" class="hover:underline me-4 md:me-2 hover:text-green-500"> ${renderComponent($$result, "X", $$X, {})} </a> </li> </ul> </div> <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"> <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© ${actualYear} <a${addAttribute(linkedin, "href")} class="hover:underline hover:text-green-500">${name}</a>. All Rights Reserved.</span> </div> </footer>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Raul Cano",
    description = "Raul Cano's blog portfolio.",
    image = ""
  } = Astro2.props;
  new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/round_profile.png"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><meta name="author" content="Raul Cano"><title>${title}</title><!-- Open Graph metadata --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta property="og:url"${addAttribute(Astro2.url, "content")}>${renderHead()}</head> <body class="dark:bg-customBlack bg-customBlack"> ${renderSlot($$result, $$slots["default"])} <div class="cursor"></div>  </body> ${renderComponent($$result, "Footer", $$Footer, {})}  </html>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$GitHub as a, content as c };
