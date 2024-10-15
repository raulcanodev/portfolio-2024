import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as createAstro } from './astro/server_BPQAMZWl.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getEntry } from './Navbar_BKh9kW_G.mjs';
/* empty css                         */

const $$Astro = createAstro();
const $$PreviewBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PreviewBlog;
  const { title, slug, image, category, pubDate, author, linkAuthor, summary } = Astro2.props;
  const entry = await getEntry("blog", slug);
  if (!slug) {
    throw new Error("No slug provided");
  }
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  entry.body;
  const previewText = summary.length > 160 ? summary.substring(0, 160) + "..." : summary;
  const date = new Date(pubDate);
  function formatDate(date2) {
    const options = {
      weekday: "short",
      day: "2-digit",
      month: "short",
      year: "numeric"
    };
    return new Intl.DateTimeFormat("en-GB", options).format(date2);
  }
  const formattedDate = formatDate(date);
  return renderTemplate`${maybeRenderHead()}<article class="mb-5 pb-5 border-b border-gray-700 overflow-hidden" data-astro-cid-iq3gcqr6> <div class="" data-astro-cid-iq3gcqr6> <div class="flex justify-between items-center text-sm mb-2 text-customGray" data-astro-cid-iq3gcqr6> <div class="flex gap-5" data-astro-cid-iq3gcqr6> <time data-astro-cid-iq3gcqr6>${formattedDate}</time> </div> <span class="bg-green-500 capitalize text-black text-bold px-2 py-1" data-astro-cid-iq3gcqr6>${category}</span> </div> <h2 class="md:pr-20 text-2xl uppercase font-bold mb-2" data-astro-cid-iq3gcqr6> <a${addAttribute(`/blog/${slug}`, "href")} class="hover:underline dark:text-green-500 text-green-500" data-astro-cid-iq3gcqr6>${title}</a> </h2> <p class="md:pr-20 text-customGray" data-astro-cid-iq3gcqr6> ${previewText} </p> </div> </article> `;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/components/blog/PreviewBlog.astro", void 0);

const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="flex items-center mt-4 mb-10" id="search-form" action="/blog/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="text" id="query" name="query" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5" placeholder="Search articles..." required> </div> <button type="submit" class="p-[0.8rem] ms-2 text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form>`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/components/blog/SearchForm.astro", void 0);

export { $$SearchForm as $, $$PreviewBlog as a };
