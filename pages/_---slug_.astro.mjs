import { c as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_CIm_2tw6.mjs';
import { p as paths } from '../chunks/middleware_DsWbm0-W.mjs';
import { $ as $$Common } from '../chunks/common_IjMMBHVn.mjs';
export { renderers } from '../renderers.mjs';

const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, {})}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
