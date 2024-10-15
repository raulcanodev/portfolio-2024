import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C0avBOm-.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"attending-wearedevelopers-2024\">Attending WeAreDevelopers 2024</h2>\n<p>There I was, sitting in a chair in one of the talks at WeAreDevelopers 2024. I didn’t understand anything. But nothing at all, and next to me there was another guy:</p>\n<p>Me: Hey! What’s your name?</p>\n<p>Him: Hey, I’m Valerio, and you?</p>\n<p>[…]</p>\n<p>Him: Wait, what? Just two months of work experience and you’re here listening to a talk about architecture?</p>\n<p>Me: I’m curious hahah\r\n<br><br></p>\n<p>Even though I could think I have wasted the money as I didn’t understand pretty much everything, I prefer to think that attending the event is forcing me to raise my level of expertise, to achieve the knowledge that many of the people there have.</p>\n<p>Not only that, which is true, but also retaining a bunch of unknown terms that I had no idea about until now. Now I just know that new term, that new technology. So when I arrive home, my lover ChatGPT is ready to answer tons of questions until I feel comfortable with the meaning of this new word.</p>\n<p>Starting is hard, we all know. I remember the first day I heard “GitHub”. What was that? Why was everyone always using that word? Is it so important?</p>\n<p>Well, I remember I spent the whole afternoon asking ChatGPT and searching on Google about this black cat.</p>\n<p>I’m not saying that you should go to every event you see, but if you have the opportunity to attend one, don’t hesitate. You will learn a lot, even if you don’t understand everything. You will be forced to learn, and that’s the best way to do it.</p>\n<br>\n<img src=\"/images/blog/people/raul-wearedevelopers-2024.jpeg\" style=\"margin: 0 auto; width: 500px\">\n```";

				const frontmatter = {"title":"Should I go to a tech event if I'm junior?: WeAreDevelopers 2024","summary":"I remember the first day I heard 'GitHub'. What was that? Why was everyone always using that word? Is it so important?","pubDate":"2024-07-20T00:00:00.000Z","emoji":"💻","author":"Raul Cano","linkAuthor":"https://x.com/raulcanodev","image":"/thumbnails/mindset.webp","tags":[""],"slug":"should-i-go-to-a-tech-event-if-im-junior","category":"mindset"};
				const file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/content/blog/wearedevelopers.md";
				const url = undefined;
				function rawContent() {
					return "\r\n## Attending WeAreDevelopers 2024\r\n\r\nThere I was, sitting in a chair in one of the talks at WeAreDevelopers 2024. I didn’t understand anything. But nothing at all, and next to me there was another guy:\r\n\r\nMe: Hey! What’s your name?\r\n\r\nHim: Hey, I’m Valerio, and you?\r\n\r\n[...]\r\n\r\nHim: Wait, what? Just two months of work experience and you’re here listening to a talk about architecture?\r\n\r\nMe: I’m curious hahah\r\n<br><br>\r\n\r\nEven though I could think I have wasted the money as I didn’t understand pretty much everything, I prefer to think that attending the event is forcing me to raise my level of expertise, to achieve the knowledge that many of the people there have.\r\n\r\nNot only that, which is true, but also retaining a bunch of unknown terms that I had no idea about until now. Now I just know that new term, that new technology. So when I arrive home, my lover ChatGPT is ready to answer tons of questions until I feel comfortable with the meaning of this new word.\r\n\r\nStarting is hard, we all know. I remember the first day I heard “GitHub”. What was that? Why was everyone always using that word? Is it so important?\r\n\r\nWell, I remember I spent the whole afternoon asking ChatGPT and searching on Google about this black cat.\r\n\r\nI’m not saying that you should go to every event you see, but if you have the opportunity to attend one, don’t hesitate. You will learn a lot, even if you don’t understand everything. You will be forced to learn, and that’s the best way to do it.\r\n\r\n<br>\r\n<img src=\"/images/blog/people/raul-wearedevelopers-2024.jpeg\" style=\"margin: 0 auto; width: 500px\" />\r\n```\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"attending-wearedevelopers-2024","text":"Attending WeAreDevelopers 2024"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
