/* empty css                                     */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C0avBOm-.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CGmzFhol.mjs';
import { a as getEntry, $ as $$Navbar } from '../../chunks/Navbar_64jSG4wF.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

function formatDate(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString(void 0, options);
}

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (!slug) {
    throw new Error("No slug provided");
  }
  const entry = await getEntry("blog", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  return renderTemplate` ${renderComponent($$result, "Layout", $$Layout, { "title": entry.data.title, "description": entry.data.summary, "image": entry.data.image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="copy-alert" class="fixed top-0 left-0 w-full bg-green-500 text-white text-center py-2 hidden z-50">
Copied!
</div> ${renderComponent($$result2, "Navbar", $$Navbar, {})} <article class="blog mx-auto md:px-0 md:mt-7"> <div class="flex md:flex-nowrap flex-wrap items-center justify-between md:gap-4"> <h1 class="text-4xl my-6 font-bold dark:text-green-500 md:order-1 order-2"> ${entry.data.title} </h1> ${entry.data.image && renderTemplate`<img${addAttribute(`/images/${entry.data.image}`, "src")} alt="Article Image" class="w-16 h-16 object-cover order-1 md:order-2 aling-center">`} </div> <p class="mb-4">${entry.data.summary}</p> <span class="text-gray-400 text-sm"> ${entry.data.author} on ${formatDate(entry.data.pubDate)} </span> <div class="prose max-w-full"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> ` })} `;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
