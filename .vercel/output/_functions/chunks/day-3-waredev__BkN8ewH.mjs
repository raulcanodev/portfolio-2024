import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>NoSQL\r\nTypes of NoSql databases\r\n- Key-value pairs: ej, calculated values\r\n- binary objects: ej files, unstructured large object size, if we dont know whats inside\r\n- object data: transactional data</p>\n<p>Storages</p>\n<ul>\n<li>Redis: cache and message-queue</li>\n<li>Amazon s3: file and object-store</li>\n<li>Mongo Db: structured objects and documents</li>\n</ul>\n<p>Ventajas contra SQL\r\nSi quieres añadir el cumpleaños pero no es una propiedad obligatoria de la DB, en SQL siempre vas a tener ese espacio reservado para almacenar el cumpleaños.\r\nPor caso contrario en NoSQL el cumpleaños se añade de forma individual al objeto en aquellas que si añadieron este campo</p>\n<p>Diferents API, REST, GraphQL, gRPC</p>";

				const frontmatter = {"title":"","summary":"","pubDate":"2024-07-19T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/blog/example.webp","tags":[""],"slug":"day3","category":"example"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog-archived/day-3-waredev.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nNoSQL\r\n  Types of NoSql databases\r\n    - Key-value pairs: ej, calculated values \r\n    - binary objects: ej files, unstructured large object size, if we dont know whats inside\r\n    - object data: transactional data\r\n\r\n  Storages\r\n   - Redis: cache and message-queue\r\n   - Amazon s3: file and object-store\r\n   - Mongo Db: structured objects and documents\r\n\r\n  Ventajas contra SQL\r\n    Si quieres añadir el cumpleaños pero no es una propiedad obligatoria de la DB, en SQL siempre vas a tener ese espacio reservado para almacenar el cumpleaños.\r\n    Por caso contrario en NoSQL el cumpleaños se añade de forma individual al objeto en aquellas que si añadieron este campo\r\n\r\nDiferents API, REST, GraphQL, gRPC\r\n\r\n\r\n";
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
