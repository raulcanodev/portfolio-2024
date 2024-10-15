import pLimit from 'p-limit';
import { A as AstroError, Z as UnknownContentCollectionError, x as prependForwardSlash } from './astro/assets-service_Ct4Wxbuy.mjs';
import { m as createComponent, v as renderUniqueStylesheet, w as renderScriptElement, x as createHeadAndContent, n as renderTemplate, t as renderComponent, y as unescapeHTML, o as maybeRenderHead, p as addAttribute, q as createAstro } from './astro/server_Cmaf0c94.mjs';
import 'kleur/colors';
import 'clsx';
import { c as content } from './Layout_BfBcB-iD.mjs';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog-archived/data-management-nosql.md": () => import('./data-management-nosql_YQ6ngCLW.mjs'),"/src/content/blog-archived/day-1-wearedev.md": () => import('./day-1-wearedev_-pDoPyh-.mjs'),"/src/content/blog-archived/day-2-waredev.md": () => import('./day-2-waredev_CWUg0axi.mjs'),"/src/content/blog-archived/day-3-waredev.md": () => import('./day-3-waredev_BUPOHnit.mjs'),"/src/content/blog-archived/example.md": () => import('./example_TmPML702.mjs'),"/src/content/blog-archived/validate-checkout-multistep.md": () => import('./validate-checkout-multistep_RGFZbqSJ.mjs'),"/src/content/blog-archived/what-is-xss.md": () => import('./what-is-xss_Cne6KAUh.mjs'),"/src/content/blog/add-block-to-navigation.md": () => import('./add-block-to-navigation_C5SbQ3Vv.mjs'),"/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md": () => import('./add-your-folder-path-to-your-file-in-visual-studio-code_BQD79xnM.mjs'),"/src/content/blog/big-o.md": () => import('./big-o_DyZrs9Hb.mjs'),"/src/content/blog/bootstrap-5-classes.md": () => import('./bootstrap-5-classes_DDXuLr-e.mjs'),"/src/content/blog/from-factory-worker-to-developer.md": () => import('./from-factory-worker-to-developer_EYDfZVlj.mjs'),"/src/content/blog/full-side-editor-wordpress.md": () => import('./full-side-editor-wordpress_CAvT_uJz.mjs'),"/src/content/blog/hooks-in-wordpress.md": () => import('./hooks-in-wordpress_DJQTVQ9a.mjs'),"/src/content/blog/my-favorite-dev-tools.md": () => import('./my-favorite-dev-tools_C4Z3y5Sp.mjs'),"/src/content/blog/refactoring-code-good-practices.md": () => import('./refactoring-code-good-practices_CXqvuf6I.mjs'),"/src/content/blog/remove-optgroup-in-safari.md": () => import('./remove-optgroup-in-safari_Be4x4Me0.mjs'),"/src/content/blog/run-mongodb-locally-in-nextjs.md": () => import('./run-mongodb-locally-in-nextjs_CXGjT7bD.mjs'),"/src/content/blog/wearedevelopers.md": () => import('./wearedevelopers_CQBUqGis.mjs'),"/src/content/blog/wordpress-custom-field-to-query-by-weekly-views.md": () => import('./wordpress-custom-field-to-query-by-weekly-views_CVkJczKy.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"blog-archived":{"type":"content","entries":{"day1":"/src/content/blog-archived/day-1-wearedev.md","day2":"/src/content/blog-archived/day-2-waredev.md","example":"/src/content/blog-archived/example.md","what-is-xss":"/src/content/blog-archived/data-management-nosql.md","what-is-xss-delete":"/src/content/blog-archived/what-is-xss.md","validate-checkout-in-multistep-woocommerce-checkout":"/src/content/blog-archived/validate-checkout-multistep.md","day3":"/src/content/blog-archived/day-3-waredev.md"}},"blog":{"type":"content","entries":{"add-block-to-navigation":"/src/content/blog/add-block-to-navigation.md","add-your-folder-path-to-your-file-in-visual-studio-code":"/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md","big-o-notation":"/src/content/blog/big-o.md","bootstrap-5-classes":"/src/content/blog/bootstrap-5-classes.md","from-factory-worker-to-developer":"/src/content/blog/from-factory-worker-to-developer.md","resetting-the-full-site-editor-in-wordpress":"/src/content/blog/full-side-editor-wordpress.md","hooks-in-wordpress":"/src/content/blog/hooks-in-wordpress.md","why-you-should-refactor-your-code":"/src/content/blog/refactoring-code-good-practices.md","remove-optgroup-in-safari":"/src/content/blog/remove-optgroup-in-safari.md","run-mongodb-locally-in-nextjs":"/src/content/blog/run-mongodb-locally-in-nextjs.md","my-favorite-dev-tools":"/src/content/blog/my-favorite-dev-tools.md","should-i-go-to-a-tech-event-if-im-junior":"/src/content/blog/wearedevelopers.md","wordpress-custom-field-to-query-by-weekly-views":"/src/content/blog/wordpress-custom-field-to-query-by-weekly-views.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog-archived/data-management-nosql.md": () => import('./data-management-nosql_6gdDbSZ9.mjs'),"/src/content/blog-archived/day-1-wearedev.md": () => import('./day-1-wearedev_DMH8XDuc.mjs'),"/src/content/blog-archived/day-2-waredev.md": () => import('./day-2-waredev_1r44a6Ib.mjs'),"/src/content/blog-archived/day-3-waredev.md": () => import('./day-3-waredev_DzcED2pq.mjs'),"/src/content/blog-archived/example.md": () => import('./example_Bce9Dp4_.mjs'),"/src/content/blog-archived/validate-checkout-multistep.md": () => import('./validate-checkout-multistep_CRpZ__ot.mjs'),"/src/content/blog-archived/what-is-xss.md": () => import('./what-is-xss_CWzZ4_e-.mjs'),"/src/content/blog/add-block-to-navigation.md": () => import('./add-block-to-navigation_k9f9KAnt.mjs'),"/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md": () => import('./add-your-folder-path-to-your-file-in-visual-studio-code_1irhZfJQ.mjs'),"/src/content/blog/big-o.md": () => import('./big-o_CH9Pjt6o.mjs'),"/src/content/blog/bootstrap-5-classes.md": () => import('./bootstrap-5-classes_NXOaMXBf.mjs'),"/src/content/blog/from-factory-worker-to-developer.md": () => import('./from-factory-worker-to-developer_C6UPAARy.mjs'),"/src/content/blog/full-side-editor-wordpress.md": () => import('./full-side-editor-wordpress_8g7uHKJf.mjs'),"/src/content/blog/hooks-in-wordpress.md": () => import('./hooks-in-wordpress_O4TlqEDv.mjs'),"/src/content/blog/my-favorite-dev-tools.md": () => import('./my-favorite-dev-tools_D2SSi3CB.mjs'),"/src/content/blog/refactoring-code-good-practices.md": () => import('./refactoring-code-good-practices_C-XWSOKZ.mjs'),"/src/content/blog/remove-optgroup-in-safari.md": () => import('./remove-optgroup-in-safari_C1ZCWD-f.mjs'),"/src/content/blog/run-mongodb-locally-in-nextjs.md": () => import('./run-mongodb-locally-in-nextjs_DvglxtnO.mjs'),"/src/content/blog/wearedevelopers.md": () => import('./wearedevelopers_DiNgh1sp.mjs'),"/src/content/blog/wordpress-custom-field-to-query-by-weekly-views.md": () => import('./wordpress-custom-field-to-query-by-weekly-views_CDC_xuHP.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { domain } = content.basics;
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-customBlack py-6 dark:bg-customBlack"> <div class="container flex flex-wrap justify-between items-center mx-auto"> <a href="/" class="flex items-center"> <span${addAttribute(`${currentPath === "/" ? "dark:text-green-500 underline underline-offset-8" : ""} self-center uppercase font-bold whitespace-nowrap text-green-500 hover:text-green-500 hover:underline underline-offset-8 font-sans md:text-xl`, "class")}>${currentPath === "/" ? "" : domain}</span> </a> <div class="flex items-center"> <button id="menu-toggle" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 focus:outline-none dark:text-gray-400 dark:hover:bg-customBlack md:hidden"> <span class="sr-only">Open main menu</span> <!-- Hamburger icon --> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <div class="w-full md:block md:w-auto hidden" id="mobile-menu"> <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"> <li> <a href="/blog"${addAttribute(`block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 font-sans font-bold md:text-xl 
            ${currentPath === "/blog" ? "dark:text-white text-white md:underline underline-offset-8 bg-green-500" : "dark:text-white"} 
            md:bg-transparent md:hover:underline underline-offset-8 md:hover:bg-transparent 
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 
            md:dark:hover:text-green-500 uppercase text-white`, "class")}>
blog
</a> </li> <li> <a href="/#contact"${addAttribute(`block py-2 pr-4 pl-3 border-b border-gray-100 md:border-0 md:p-0 font-sans font-bold md:text-xl 
            ${currentPath === "#contact" ? "dark:text-white text-white md:underline underline-offset-8 bg-green-500" : "dark:text-white"} 
            md:bg-transparent md:hover:underline underline-offset-8 md:hover:bg-transparent 
            dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 
            md:dark:hover:text-green-500 uppercase text-white`, "class")}>
contact
</a> </li> </ul> </div> </div> </nav> `;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/components/Navbar.astro", void 0);

export { $$Navbar as $, getEntry as a, getCollection as g };
