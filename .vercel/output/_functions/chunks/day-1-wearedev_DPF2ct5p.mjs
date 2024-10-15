import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>1- Github copilot</p>\n<ul>\n<li>\n<p>You can mention the file you want by using #</p>\n</li>\n<li>\n<p>Shortcut to switch btween GC answer</p>\n</li>\n<li>\n<p>Refactor the code</p>\n</li>\n</ul>\n<p>2- Chatgpt prompt engineering</p>\n<ul>\n<li>Clear != short</li>\n<li>Use delimiters like backsticks</li>\n<li>Provide examples</li>\n<li>Write in your prompt ‘Let’s think step by step (Force prompting)</li>\n<li>Assing a role ‘Act as’</li>\n<li>Set a temperature ‘temperature 0.0 …’ (Force prompting, manipulate the ChatGpt backend)\r\nCode generation = 0.2\r\nCode comment generation = 0.3\r\nDefault = 0.5\r\nCreativity = 0.7</li>\n</ul>";

				const frontmatter = {"title":"","summary":"","pubDate":"2024-07-19T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/blog/example.webp","tags":[""],"slug":"day1","category":"example"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog-archived/day-1-wearedev.md";
				const url = undefined;
				function rawContent() {
					return "1- Github copilot\r\n  - You can mention the file you want by using #\r\n  - Shortcut to switch btween GC answer\r\n\r\n  - Refactor the code\r\n\r\n2- Chatgpt prompt engineering\r\n  - Clear != short\r\n  - Use delimiters like backsticks\r\n  - Provide examples\r\n  - Write in your prompt 'Let's think step by step (Force prompting)\r\n  - Assing a role 'Act as'\r\n  - Set a temperature 'temperature 0.0 ...' (Force prompting, manipulate the ChatGpt backend)\r\n      Code generation = 0.2\r\n      Code comment generation = 0.3\r\n      Default = 0.5\r\n      Creativity = 0.7\r\n\r\n\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
