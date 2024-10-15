/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro, a as renderComponent } from '../chunks/astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_RHmzSoKb.mjs';
import { $ as $$SearchForm, a as $$PreviewBlog } from '../chunks/SearchForm_DexeA_Iy.mjs';
import { g as getCollection, $ as $$Navbar } from '../chunks/Navbar_BKh9kW_G.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pagination;
  const {
    currentPage,
    totalPages,
    disablePrevious,
    disableNext,
    currentCategory
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between mt-10"> <div class="flex-grow"> ${!disablePrevious && renderTemplate`<a${addAttribute(`/blog?page=${currentPage - 1}&category=${currentCategory}`, "href")} class="inline-block px-3 py-2 hover:text-green-500 hover:underline rounded-lg">
Previous
</a>`} </div> <div class="flex-grow text-right"> ${!disableNext && renderTemplate`<a${addAttribute(`/blog?page=${currentPage + 1}&category=${currentCategory}`, "href")} class="inline-block px-3 py-2 hover:text-green-500 hover:underline rounded-lg">
Next
</a>`} </div> </div>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/components/blog/Pagination.astro", void 0);

const POSTS_PER_PAGE = 10;

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const currentPage = +Astro2.url.searchParams.get("page") || 1;
  const selectedCategory = Astro2.url.searchParams.get("category") || "all";
  const allBlog = await getCollection("blog");
  const allCategories = Array.from(
    new Set(allBlog.map((post) => post.data.category))
  );
  let filteredBlogs = allBlog;
  if (selectedCategory && selectedCategory !== "all") {
    filteredBlogs = allBlog.filter(
      (post) => post.data.category === selectedCategory
    );
  }
  const sortPostsByDate = filteredBlogs.sort((a, b) => {
    const dateA = a.data.pubDate;
    const dateB = b.data.pubDate;
    return dateB - dateA;
  });
  const blogsForPage = sortPostsByDate.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  if (currentPage > totalPages) {
    return Astro2.redirect(`/blog?page=1&category=${selectedCategory}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Raul Cano", "description": "Raul Cano's Blog page", "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-5tznm7mj": true })} ${maybeRenderHead()}<div class="blogs-container md:mt-10" data-astro-cid-5tznm7mj> <form class="mb-3" id="category-form" method="get" action="/blog" data-astro-cid-5tznm7mj> <input type="hidden" name="page"${addAttribute(currentPage, "value")} data-astro-cid-5tznm7mj> <select class="text-gray-600 p-1" id="category-select" name="category" onchange="document.getElementById('category-form').submit()" data-astro-cid-5tznm7mj> <option value="all" data-astro-cid-5tznm7mj>All</option> ${allCategories.map((category) => renderTemplate`<option${addAttribute(category, "value")}${addAttribute(category === selectedCategory, "selected")} data-astro-cid-5tznm7mj> ${category} </option>`)} </select> </form> ${renderComponent($$result2, "SearchForm", $$SearchForm, { "data-astro-cid-5tznm7mj": true })} ${blogsForPage.map((post) => renderTemplate`${renderComponent($$result2, "PreviewImagen", $$PreviewBlog, { "image": post.data.image, "summary": post.data.summary, "category": post.data.category, "title": post.data.title, "pubDate": post.data.pubDate, "slug": post.data.slug, "author": post.data.author, "linkAuthor": post.data.linkAuthor, "data-astro-cid-5tznm7mj": true })}`)} </div> ${renderComponent($$result2, "Pagination", $$Pagination, { "currentCategory": selectedCategory, "currentPage": currentPage > totalPages ? 1 : currentPage, "totalPages": totalPages, "disableNext": currentPage === totalPages, "disablePrevious": currentPage === 1, "data-astro-cid-5tznm7mj": true })} ` })} `;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/index.astro", void 0);

const $$file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
