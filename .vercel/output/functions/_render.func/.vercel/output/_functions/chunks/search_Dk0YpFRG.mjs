/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, q as createAstro, o as maybeRenderHead } from './astro/server_Cmaf0c94.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BfBcB-iD.mjs';
import { $ as $$SearchForm, a as $$PreviewBlog } from './SearchForm_Bpc5SuBc.mjs';
import { g as getCollection, $ as $$Navbar } from './Navbar_Cvm8krtb.mjs';

const $$Astro = createAstro();
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query") || "";
  const allBlog = await getCollection("blog");
  const searchResults = allBlog.filter((post) => {
    const titleMatch = post.data.title.toLowerCase().includes(query.toLowerCase());
    const contentMatch = post.body.toLowerCase().includes(query.toLowerCase());
    const slugMatch = post.slug.toLowerCase().includes(query.toLowerCase());
    return titleMatch || contentMatch || slugMatch;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} ${maybeRenderHead()}<h1 class="text-2xl pb-3 my-6 text-customGray">Result for: <strong class="text-green-500">${query}</strong></h1> ${searchResults.length === 0 ? renderTemplate`<p class="text-lg text-white">No results found</p>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"> ${searchResults.map((post) => renderTemplate`${renderComponent($$result2, "PreviewBlog", $$PreviewBlog, { "title": post.data.title, "image": post.data.image, "slug": post.slug, "summary": post.data.summary, "pubDate": post.data.pubDate, "category": post.data.category, "author": post.data.author, "linkAuthor": post.data.linkAuthor })}`)} </div>`}` })}`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/search.astro", void 0);

const $$file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/search.astro";
const $$url = "/blog/search";

export { $$Search as default, $$file as file, $$url as url };
