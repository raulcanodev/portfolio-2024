import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"","summary":"","pubDate":"2024-07-19T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/blog/example.webp","tags":[""],"slug":"day2","category":"example"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog-archived/day-2-waredev.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n\r\n\r\n";
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
