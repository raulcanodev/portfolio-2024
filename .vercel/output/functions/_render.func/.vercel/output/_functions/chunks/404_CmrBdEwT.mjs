/* empty css                          */
import { m as createComponent, n as renderTemplate, t as renderComponent, o as maybeRenderHead } from './astro/server_Cmaf0c94.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_BfBcB-iD.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Oops!", "description": "404 When you're drunk, going home is sometimes the best option..." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="h-screen flex items-center justify-center flex-col"> <h1 class="text-6xl text-white">404</h1> <p class="mt-4 max-w-md text-center">
When you're drunk, going <a href="/" class="underline hover:text-green-500 cursor-pointer">home</a>
is sometimes the best option...
</p> </div> ` })}`;
}, "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/404.astro", void 0);

const $$file = "/Users/rawraul/Dev/raul-cano/portfolio-2024/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
