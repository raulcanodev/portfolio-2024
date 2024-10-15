import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { r as removeBase, i as isRemotePath, V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError, p as prependForwardSlash } from './astro/assets-service_-9cM45Xr.mjs';
import { c as createComponent, f as renderUniqueStylesheet, g as renderScriptElement, h as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML, m as maybeRenderHead, d as addAttribute, b as createAstro } from './astro/server_C0avBOm-.mjs';
import 'kleur/colors';
import * as devalue from 'devalue';
import 'clsx';
import { c as content } from './Layout_CGmzFhol.mjs';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_BcEe_9wP.mjs');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
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
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
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
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
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
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
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
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./_astro_asset-imports_D9aVaOQr.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(`The collection ${JSON.stringify(collection)} does not exist.`);
      return void 0;
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
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
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
lookupMap = {"blog":{"type":"content","entries":{"add-block-to-navigation":"/src/content/blog/add-block-to-navigation.md","from-factory-worker-to-developer":"/src/content/blog/from-factory-worker-to-developer.md","add-your-folder-path-to-your-file-in-visual-studio-code":"/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md","resetting-the-full-site-editor-in-wordpress":"/src/content/blog/full-side-editor-wordpress.md","bootstrap-5-classes":"/src/content/blog/bootstrap-5-classes.md","my-favorite-dev-tools":"/src/content/blog/my-favorite-dev-tools.md","remove-optgroup-in-safari":"/src/content/blog/remove-optgroup-in-safari.md","hooks-in-wordpress":"/src/content/blog/hooks-in-wordpress.md","big-o-notation":"/src/content/blog/big-o.md","why-you-should-refactor-your-code":"/src/content/blog/refactoring-code-good-practices.md","run-mongodb-locally-in-nextjs":"/src/content/blog/run-mongodb-locally-in-nextjs.md","wordpress-custom-field-to-query-by-weekly-views":"/src/content/blog/wordpress-custom-field-to-query-by-weekly-views.md","should-i-go-to-a-tech-event-if-im-junior":"/src/content/blog/wearedevelopers.md"}},"blog-archived":{"type":"content","entries":{"what-is-xss":"/src/content/blog-archived/data-management-nosql.md","day1":"/src/content/blog-archived/day-1-wearedev.md","day2":"/src/content/blog-archived/day-2-waredev.md","day3":"/src/content/blog-archived/day-3-waredev.md","example":"/src/content/blog-archived/example.md","validate-checkout-in-multistep-woocommerce-checkout":"/src/content/blog-archived/validate-checkout-multistep.md","what-is-xss-delete":"/src/content/blog-archived/what-is-xss.md"}}};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/blog-archived/data-management-nosql.md": () => import('./data-management-nosql_Dndd2X0H.mjs'),"/src/content/blog-archived/day-1-wearedev.md": () => import('./day-1-wearedev_CgIYhViN.mjs'),"/src/content/blog-archived/day-2-waredev.md": () => import('./day-2-waredev_j7LZJphF.mjs'),"/src/content/blog-archived/day-3-waredev.md": () => import('./day-3-waredev_DobEN4i9.mjs'),"/src/content/blog-archived/example.md": () => import('./example_CfE_Q7jt.mjs'),"/src/content/blog-archived/validate-checkout-multistep.md": () => import('./validate-checkout-multistep_RzBkt2cs.mjs'),"/src/content/blog-archived/what-is-xss.md": () => import('./what-is-xss_CaaTAxpW.mjs'),"/src/content/blog/add-block-to-navigation.md": () => import('./add-block-to-navigation_q4uYCw8j.mjs'),"/src/content/blog/add-your-folder-path-to-your-file-in-visual-studio-code.md": () => import('./add-your-folder-path-to-your-file-in-visual-studio-code_Cs_-mRof.mjs'),"/src/content/blog/big-o.md": () => import('./big-o_Dn_VgF35.mjs'),"/src/content/blog/bootstrap-5-classes.md": () => import('./bootstrap-5-classes_bD-cE6Ma.mjs'),"/src/content/blog/from-factory-worker-to-developer.md": () => import('./from-factory-worker-to-developer_C2SCXOwJ.mjs'),"/src/content/blog/full-side-editor-wordpress.md": () => import('./full-side-editor-wordpress_CdgR8mhx.mjs'),"/src/content/blog/hooks-in-wordpress.md": () => import('./hooks-in-wordpress_q482B2Y_.mjs'),"/src/content/blog/my-favorite-dev-tools.md": () => import('./my-favorite-dev-tools_Dp30_r10.mjs'),"/src/content/blog/refactoring-code-good-practices.md": () => import('./refactoring-code-good-practices_BB2rrSxW.mjs'),"/src/content/blog/remove-optgroup-in-safari.md": () => import('./remove-optgroup-in-safari_BKIM69yG.mjs'),"/src/content/blog/run-mongodb-locally-in-nextjs.md": () => import('./run-mongodb-locally-in-nextjs_Daj70F96.mjs'),"/src/content/blog/wearedevelopers.md": () => import('./wearedevelopers_D-UUYyGf.mjs'),"/src/content/blog/wordpress-custom-field-to-query-by-weekly-views.md": () => import('./wordpress-custom-field-to-query-by-weekly-views_D4KF1XCJ.mjs')});
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
	collectionNames,
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
