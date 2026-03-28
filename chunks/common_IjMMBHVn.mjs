import { d as createAstro, c as createComponent, r as renderComponent, b as renderTemplate } from './astro/server_CIm_2tw6.mjs';
import { r as renderEntry } from './_astro_content_DkB4wZrj.mjs';
import { i as getRoute, h as attachRouteDataAndRunMiddleware, j as useRouteData, $ as $$Page } from './middleware_DsWbm0-W.mjs';

const $$Astro = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Common = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Common;
  const route = await getRoute(Astro2);
  const renderResult = await renderEntry(route.entry);
  await attachRouteDataAndRunMiddleware(Astro2, await useRouteData(Astro2, route, renderResult));
  const { Content, entry } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${Content && renderTemplate`${renderComponent($$result2, "Content", Content, { "frontmatter": entry.data })}`}` })}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/routes/common.astro", void 0);

export { $$Common as $ };
