import { A as AstroError, M as MissingLocale, d as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate, e as renderSlot, r as renderComponent, f as addAttribute, g as renderScript, s as spreadAttributes, h as Fragment, i as defineStyleVars, a as AstroUserError, j as renderHead } from './astro/server_CIm_2tw6.mjs';
import { p as printHref } from './_id_.9abe6309_aNXS0I6L.mjs';
import { $ as $$Icon, c as $$LinkButton, d as $$Badge } from './Code_BKjdNvdG.mjs';
import { a as starlightConfig, b as stripTrailingSlash, c as stripLeadingSlash, e as ensureHtmlExtension, d as stripHtmlExtension, f as ensureTrailingSlash, p as project, B as BuiltInDefaultLocale, g as getCollectionPathFromRoot, h as pickLang, s as stripLeadingAndTrailingSlashes, i as ensureLeadingSlash, j as stripExtension, u as useTranslations } from './translations_DqOMRW0j.mjs';
import { Base64 } from 'js-base64';
import { c as config } from './config_D58fiqnm.mjs';
import { a as appendForwardSlash, j as joinPaths, g as getCollection, b as getEntry } from './_astro_content_DkB4wZrj.mjs';
import { $ as $$Image } from './_astro_assets_CL8UVPhX.mjs';
import { f as arrayType, o as objectType, s as stringType, r as recordType, u as unionType, b as booleanType, a as undefinedType, e as enumType } from './types_DZQNl0rU.mjs';

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  let relativePath;
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    relativePath = appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    relativePath = joinPaths(...pathsToJoin);
  }
  if (relativePath === "") {
    return "/";
  }
  return relativePath;
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

const $$Astro$v = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Banner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Banner;
  const { banner } = Astro2.locals.starlightRoute.entry.data;
  return renderTemplate`${banner && renderTemplate`${maybeRenderHead()}<div class="sl-banner astro-qntt5xxb">${unescapeHTML(banner.content)}</div>`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Banner.astro", void 0);

const $$ContentPanel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="content-panel astro-szfai3o7"> <div class="sl-container astro-szfai3o7">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/ContentPanel.astro", void 0);

const $$Astro$u = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$ContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$ContentNotice;
  const { icon, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="sl-flex astro-zhigemde"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1.5em", "color": "var(--sl-color-orange-high)", "class": "astro-zhigemde" })} <span class="astro-zhigemde">${label}</span> </p> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/ContentNotice.astro", void 0);

const $$Astro$t = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$FallbackContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$FallbackContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("i18n.untranslatedContent") })}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/FallbackContentNotice.astro", void 0);

const $$Astro$s = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$DraftContentNotice = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$DraftContentNotice;
  return renderTemplate`${renderComponent($$result, "ContentNotice", $$ContentNotice, { "icon": "warning", "label": Astro2.locals.t("page.draft") })}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/DraftContentNotice.astro", void 0);

function localizedUrl(url, locale, trailingSlash) {
  url = new URL(url);
  if (!starlightConfig.locales) {
    return url;
  }
  if (locale === "root") locale = "";
  const base = stripTrailingSlash("/sorycode-1");
  const hasBase = url.pathname.startsWith(base);
  if (hasBase) url.pathname = url.pathname.replace(base, "");
  const [_leadingSlash, baseSegment] = url.pathname.split("/");
  const htmlExt = ".html";
  const isRootHtml = baseSegment?.endsWith(htmlExt);
  const baseSlug = isRootHtml ? baseSegment?.slice(0, -1 * htmlExt.length) : baseSegment;
  if (baseSlug && baseSlug in starlightConfig.locales) {
    if (locale) {
      url.pathname = url.pathname.replace(baseSlug, locale);
    } else if (isRootHtml) {
      url.pathname = "/index.html";
    } else {
      url.pathname = url.pathname.replace("/" + baseSlug, "");
    }
  } else if (locale) {
    if (baseSegment === "index.html") {
      url.pathname = "/" + locale + ".html";
    } else {
      url.pathname = "/" + locale + url.pathname;
    }
  }
  if (hasBase) url.pathname = base + url.pathname;
  return url;
}

const $$Astro$r = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Select = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$Select;
  return renderTemplate`${maybeRenderHead()}<label${addAttribute(`--sl-select-width: ${Astro2.props.width}`, "style")} class="astro-75guwdyu"> <span class="sr-only astro-75guwdyu">${Astro2.props.label}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": Astro2.props.icon, "class": "icon label-icon astro-75guwdyu" })} <select${addAttribute(Astro2.props.value, "value")} autocomplete="off" class="astro-75guwdyu"> ${Astro2.props.options.map(({ value, selected, label }) => renderTemplate`<option${addAttribute(value, "value")}${addAttribute(selected, "selected")} class="astro-75guwdyu">${unescapeHTML(label)}</option>`)} </select> ${renderComponent($$result, "Icon", $$Icon, { "name": "down-caret", "class": "icon caret astro-75guwdyu" })} </label> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Select.astro", void 0);

const $$Astro$q = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$LanguageSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LanguageSelect;
  function localizedPathname(locale) {
    return localizedUrl(Astro2.url, locale).pathname;
  }
  return renderTemplate`${renderTemplate`${renderComponent($$result, "starlight-lang-select", "starlight-lang-select", {}, { "default": () => renderTemplate`${renderComponent($$result, "Select", $$Select, { "icon": "translate", "label": Astro2.locals.t("languageSelect.accessibleLabel"), "value": localizedPathname(Astro2.locals.starlightRoute.locale), "options": Object.entries(starlightConfig.locales).map(([code, locale]) => ({
    value: localizedPathname(code),
    selected: code === Astro2.locals.starlightRoute.locale,
    label: locale.label
  })), "width": "7em" })}` })}`}${renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/LanguageSelect.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/LanguageSelect.astro", void 0);

const $$Astro$p = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Footer;
  const { lang, editUrl, lastUpdated, entry } = Astro2.locals.starlightRoute;
  const template = entry.data.template;
  const issueLink = Astro2.locals.t("app.footer.issueLink", "Found a bug? Open an issue");
  const discordLink = Astro2.locals.t("app.footer.discordLink", "Join our Discord community");
  const github = starlightConfig.social?.find((item) => item.icon === "github");
  const discord = starlightConfig.social?.find((item) => item.icon === "discord");
  return renderTemplate`${template === "doc" && renderTemplate`${maybeRenderHead()}<footer class="doc astro-sz7xmlte"><div class="meta sl-flex astro-sz7xmlte"><div class="astro-sz7xmlte">${editUrl && renderTemplate`<a${addAttribute(editUrl, "href")} target="_blank" rel="noopener noreferrer" class="sl-flex astro-sz7xmlte">${renderComponent($$result, "Icon", $$Icon, { "name": "pencil", "size": "1em", "class": "astro-sz7xmlte" })}${Astro2.locals.t("page.editLink")}</a>`}${github && renderTemplate`<a${addAttribute(`${github.href}/issues/new`, "href")} target="_blank" rel="noopener noreferrer" class="sl-flex astro-sz7xmlte">${renderComponent($$result, "Icon", $$Icon, { "name": github.icon, "size": "1em", "class": "astro-sz7xmlte" })}${issueLink}</a>`}${discord && renderTemplate`<a${addAttribute(discord.href, "href")} target="_blank" rel="noopener noreferrer" class="sl-flex astro-sz7xmlte">${renderComponent($$result, "Icon", $$Icon, { "name": discord.icon, "size": "1em", "class": "astro-sz7xmlte" })}${discordLink}</a>`}${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-sz7xmlte" })}</div><div class="astro-sz7xmlte"><p class="astro-sz7xmlte">&copy; <a target="_blank" rel="noopener noreferrer" href="https://github.com/projetssorycode" class="astro-sz7xmlte">ProjetSoryCode</a></p><p${addAttribute(Astro2.locals.t("page.lastUpdated"), "title")} class="astro-sz7xmlte">${Astro2.locals.t("page.lastUpdated")}${" "}${lastUpdated ? renderTemplate`<time${addAttribute(lastUpdated.toISOString(), "datetime")} class="astro-sz7xmlte">${lastUpdated.toLocaleDateString(lang, { dateStyle: "medium", timeZone: "UTC" })}</time>` : "-"}</p></div></div></footer>`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Footer.astro", void 0);

const $$Astro$o = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Head$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$Head$1;
  const { head } = Astro2.locals.starlightRoute;
  return renderTemplate`${head.map(({ tag: Tag, attrs, content }) => renderTemplate`${renderComponent($$result, "Tag", Tag, { ...attrs }, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`)}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Head.astro", void 0);

const $$Astro$n = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$Head;
  const base = "/sorycode-1".replace(/^\//, "").replace(/\/$/, "");
  const slug = Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "");
  const {
    entry: {
      data: { title, description }
    }
  } = Astro2.locals.starlightRoute;
  const isDocs = base === "" ? true : slug === base || slug.startsWith(`${base}/`);
  const t = Astro2.locals.t;
  const titleSuffix = t("app.head.titleSuffix");
  const shareSlug = base === "" ? "s" : `${base}/s`;
  const isShare = slug === shareSlug || slug.startsWith(`${shareSlug}/`);
  const isHome = slug === "" || slug === base;
  let encodedTitle = "";
  let ogImage = `${config.url}/social-share.png`;
  let truncatedDesc = "";
  if (isDocs) {
    encodedTitle = encodeURIComponent(
      Base64.encode(
        // Convert to ASCII
        encodeURIComponent(
          // Truncate to fit S3's max key size
          title.substring(0, 700)
        )
      )
    );
    if (description) {
      truncatedDesc = encodeURIComponent(description.substring(0, 400));
    }
    ogImage = `${config.socialCard}/sorycode-docs/${encodedTitle}.png?desc=${truncatedDesc}`;
  }
  return renderTemplate`${isHome && renderTemplate`<title>${title} | ${titleSuffix}</title>`}${renderComponent($$result, "Default", $$Head$1, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}${!isShare && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>
  <meta property="twitter:image"${addAttribute(ogImage, "content")}>`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Head.astro", void 0);

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: [{ codes: ["en"], path: "en" }, { codes: ["ar"], path: "ar" }, { codes: ["bs-BA"], path: "bs" }, { codes: ["da-DK"], path: "da" }, { codes: ["de-DE"], path: "de" }, { codes: ["es-ES"], path: "es" }, { codes: ["fr-FR"], path: "fr" }, { codes: ["it-IT"], path: "it" }, { codes: ["ja-JP"], path: "ja" }, { codes: ["ko-KR"], path: "ko" }, { codes: ["nb-NO"], path: "nb" }, { codes: ["pl-PL"], path: "pl" }, { codes: ["pt-BR"], path: "pt-br" }, { codes: ["ru-RU"], path: "ru" }, { codes: ["th-TH"], path: "th" }, { codes: ["tr-TR"], path: "tr" }, { codes: ["zh-CN"], path: "zh-cn" }, { codes: ["zh-TW"], path: "zh-tw" }], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base$1 = "/sorycode-1";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base: base$1,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$Astro$m = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Search;
  const pagefindTranslations = {
    placeholder: Astro2.locals.t("search.label"),
    ...Object.fromEntries(
      Object.entries(Astro2.locals.t.all()).filter(([key]) => key.startsWith("pagefind.")).map(([key, value]) => [key.replace("pagefind.", ""), value])
    )
  };
  const dataAttributes = { "data-translations": JSON.stringify(pagefindTranslations) };
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "  <script>\n	(() => {\n		const openBtn = document.querySelector('button[data-open-modal]');\n		const shortcut = openBtn?.querySelector('kbd');\n		if (!openBtn || !(shortcut instanceof HTMLElement)) return;\n		const platformKey = shortcut.querySelector('kbd');\n		if (platformKey && /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {\n			platformKey.textContent = '⌘';\n			openBtn.setAttribute('aria-keyshortcuts', 'Meta+K');\n		}\n		shortcut.style.display = '';\n	})();\n</script> ", "  "])), renderComponent($$result, "site-search", "site-search", { "class": (Astro2.props.class ?? "") + " astro-lqvg2uzs", ...dataAttributes }, { "default": () => renderTemplate` ${maybeRenderHead()}<button data-open-modal disabled${addAttribute(Astro2.locals.t("search.label"), "aria-label")} aria-keyshortcuts="Control+K" class="astro-lqvg2uzs"> ${renderComponent($$result, "Icon", $$Icon, { "name": "magnifier", "class": "astro-lqvg2uzs" })} <span class="sl-hidden md:sl-block astro-lqvg2uzs" aria-hidden="true">${Astro2.locals.t("search.label")}</span> <kbd class="sl-hidden md:sl-flex astro-lqvg2uzs" style="display: none;"> <kbd class="astro-lqvg2uzs">${Astro2.locals.t("search.ctrlKey")}</kbd><kbd class="astro-lqvg2uzs">K</kbd> </kbd> </button> <dialog style="padding:0"${addAttribute(Astro2.locals.t("search.label"), "aria-label")} class="astro-lqvg2uzs"> <div class="dialog-frame sl-flex astro-lqvg2uzs">  <button data-close-modal class="sl-flex md:sl-hidden astro-lqvg2uzs"> ${Astro2.locals.t("search.cancelLabel")} </button> ${renderTemplate`<div class="search-container astro-lqvg2uzs"> <div id="starlight__search" class="astro-lqvg2uzs"></div> </div>`} </div> </dialog> ` }), renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Search.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Search.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const dark = createSvgComponent({"meta":{"src":"/sorycode-1/_astro/logo-dark.DOStV66V.svg","width":234,"height":42,"format":"svg"},"attributes":{"width":"234","height":"42","viewBox":"0 0 234 42","fill":"none"},"children":"\n<path d=\"M18 30H6V18H18V30Z\" fill=\"#4B4646\" />\n<path d=\"M18 12H6V30H18V12ZM24 36H0V6H24V36Z\" fill=\"#B7B1B1\" />\n<path d=\"M48 30H36V18H48V30Z\" fill=\"#4B4646\" />\n<path d=\"M36 30H48V12H36V30ZM54 36H36V42H30V6H54V36Z\" fill=\"#B7B1B1\" />\n<path d=\"M84 24V30H66V24H84Z\" fill=\"#4B4646\" />\n<path d=\"M84 24H66V30H84V36H60V6H84V24ZM66 18H78V12H66V18Z\" fill=\"#B7B1B1\" />\n<path d=\"M108 36H96V18H108V36Z\" fill=\"#4B4646\" />\n<path d=\"M108 12H96V36H90V6H108V12ZM114 36H108V12H114V36Z\" fill=\"#B7B1B1\" />\n<path d=\"M144 30H126V18H144V30Z\" fill=\"#4B4646\" />\n<path d=\"M144 12H126V30H144V36H120V6H144V12Z\" fill=\"#F1ECEC\" />\n<path d=\"M168 30H156V18H168V30Z\" fill=\"#4B4646\" />\n<path d=\"M168 12H156V30H168V12ZM174 36H150V6H174V36Z\" fill=\"#F1ECEC\" />\n<path d=\"M198 30H186V18H198V30Z\" fill=\"#4B4646\" />\n<path d=\"M198 12H186V30H198V12ZM204 36H180V6H198V0H204V36Z\" fill=\"#F1ECEC\" />\n<path d=\"M234 24V30H216V24H234Z\" fill=\"#4B4646\" />\n<path d=\"M216 12V18H228V12H216ZM234 24H216V30H234V36H210V6H234V24Z\" fill=\"#F1ECEC\" />\n"});

const light = createSvgComponent({"meta":{"src":"/sorycode-1/_astro/logo-light.B0yzR0O5.svg","width":234,"height":42,"format":"svg"},"attributes":{"width":"234","height":"42","viewBox":"0 0 234 42","fill":"none"},"children":"\n<path d=\"M18 30H6V18H18V30Z\" fill=\"#CFCECD\" />\n<path d=\"M18 12H6V30H18V12ZM24 36H0V6H24V36Z\" fill=\"#656363\" />\n<path d=\"M48 30H36V18H48V30Z\" fill=\"#CFCECD\" />\n<path d=\"M36 30H48V12H36V30ZM54 36H36V42H30V6H54V36Z\" fill=\"#656363\" />\n<path d=\"M84 24V30H66V24H84Z\" fill=\"#CFCECD\" />\n<path d=\"M84 24H66V30H84V36H60V6H84V24ZM66 18H78V12H66V18Z\" fill=\"#656363\" />\n<path d=\"M108 36H96V18H108V36Z\" fill=\"#CFCECD\" />\n<path d=\"M108 12H96V36H90V6H108V12ZM114 36H108V12H114V36Z\" fill=\"#656363\" />\n<path d=\"M144 30H126V18H144V30Z\" fill=\"#CFCECD\" />\n<path d=\"M144 12H126V30H144V36H120V6H144V12Z\" fill=\"#211E1E\" />\n<path d=\"M168 30H156V18H168V30Z\" fill=\"#CFCECD\" />\n<path d=\"M168 12H156V30H168V12ZM174 36H150V6H174V36Z\" fill=\"#211E1E\" />\n<path d=\"M198 30H186V18H198V30Z\" fill=\"#CFCECD\" />\n<path d=\"M198 12H186V30H198V12ZM204 36H180V6H198V0H204V36Z\" fill=\"#211E1E\" />\n<path d=\"M234 24V30H216V24H234Z\" fill=\"#CFCECD\" />\n<path d=\"M216 12V18H228V12H216ZM234 24H216V30H234V36H210V6H234V24Z\" fill=\"#211E1E\" />\n"});

const logos = { dark, light };

const $$Astro$l = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SiteTitle$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$SiteTitle$1;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-idrpryed"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-idrpryed" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-idrpryed"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-idrpryed"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-idrpryed"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/SiteTitle.astro", void 0);

const $$HeaderLinks = createComponent(($$result, $$props, $$slots) => {
  const { headerLinks } = globalThis.toolbeamDocsThemeConfig ?? {};
  return renderTemplate`${headerLinks?.map(({ name, url }) => renderTemplate`${maybeRenderHead()}<a class="links astro-3tq4xnmb"${addAttribute(url, "href")}>${name}</a>`)}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/toolbeam-docs-theme@0.4.8+48b0bbb44acd2d59/node_modules/toolbeam-docs-theme/src/components/HeaderLinks.astro", void 0);

const $$Astro$k = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Header$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Header$1;
  const shouldRenderSearch = starlightConfig.pagefind || starlightConfig.components.Search !== "@astrojs/starlight/components/Search.astro";
  const links = starlightConfig.social || [];
  return renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-2i2yjcqi"> <div class="title-wrapper sl-flex astro-2i2yjcqi"> ${renderComponent($$result, "SiteTitle", $$SiteTitle$1, { ...Astro2.props, "class": "astro-2i2yjcqi" })} </div> <div class="middle-group sl-flex astro-2i2yjcqi"> ${renderComponent($$result, "HeaderLinks", $$HeaderLinks, { ...Astro2.props, "class": "astro-2i2yjcqi" })} </div> <div class="sl-hidden md:sl-flex right-group astro-2i2yjcqi"> ${links.length > 0 && renderTemplate`<div class="sl-flex social-icons astro-2i2yjcqi"> ${links.map(({ href, icon }) => renderTemplate`<a${addAttribute(href, "href")} rel="me" target="_blank" class="astro-2i2yjcqi"> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1rem", "class": "astro-2i2yjcqi" })} </a>`)} </div>`} ${shouldRenderSearch && renderTemplate`${renderComponent($$result, "Search", $$Search, { ...Astro2.props, "class": "astro-2i2yjcqi" })}`} </div> </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/toolbeam-docs-theme@0.4.8+48b0bbb44acd2d59/node_modules/toolbeam-docs-theme/src/overrides/Header.astro", void 0);

const $$Astro$j = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SiteTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$SiteTitle;
  const { siteTitle, siteTitleHref } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(siteTitleHref, "href")} class="site-title sl-flex astro-exdk3yhe"> ${starlightConfig.logo && logos.dark && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-exdk3yhe" }, { "default": ($$result2) => renderTemplate` <img${addAttribute([{ "light:sl-hidden print:hidden": !("src" in starlightConfig.logo) }, "astro-exdk3yhe"], "class:list")}${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.dark.src, "src")}${addAttribute(logos.dark.width, "width")}${addAttribute(logos.dark.height, "height")}> ${!("src" in starlightConfig.logo) && renderTemplate`<img class="dark:sl-hidden print:block astro-exdk3yhe"${addAttribute(starlightConfig.logo.alt, "alt")}${addAttribute(logos.light?.src, "src")}${addAttribute(logos.light?.width, "width")}${addAttribute(logos.light?.height, "height")}>`}` })}`} <span${addAttribute([{ "sr-only": starlightConfig.logo?.replacesTitle }, "astro-exdk3yhe"], "class:list")} translate="no"> ${siteTitle} </span> </a> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SiteTitle.astro", void 0);

const $$Astro$i = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Header;
  const path = Astro2.url.pathname;
  const locale = Astro2.currentLocale || "root";
  const route = Astro2.locals.starlightRoute;
  const t = Astro2.locals.t;
  const links = starlightConfig.social || [];
  const headerLinks = config.headerLinks;
  const sharePath = /\/s(\/|$)/.test(path);
  function href(url) {
    if (url === "/" || url === "/docs" || url === "/docs/") {
      return getRelativeLocaleUrl(locale, "");
    }
    return url;
  }
  return renderTemplate`${sharePath ? renderTemplate`${maybeRenderHead()}<div class="header sl-flex astro-3ef6ksr2"><div class="title-wrapper sl-flex astro-3ef6ksr2">${renderComponent($$result, "SiteTitle", $$SiteTitle, { ...route, "class": "astro-3ef6ksr2" })}</div><div class="middle-group sl-flex astro-3ef6ksr2">${headerLinks?.map(({ name, url }) => renderTemplate`<a class="links astro-3ef6ksr2"${addAttribute(href(url), "href")}>${t(name)}</a>`)}</div><div class="sl-hidden md:sl-flex right-group astro-3ef6ksr2">${links.length > 0 && renderTemplate`<div class="sl-flex social-icons astro-3ef6ksr2">${links.map(({ href: href2, icon }) => renderTemplate`<a${addAttribute(href2, "href")} rel="me" target="_blank" class="astro-3ef6ksr2">${renderComponent($$result, "Icon", $$Icon, { "name": icon, "size": "1rem", "class": "astro-3ef6ksr2" })}</a>`)}</div>`}</div></div>` : renderTemplate`${renderComponent($$result, "Default", $$Header$1, { ...route, "class": "astro-3ef6ksr2" })}`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Header.astro", void 0);

const PAGE_TITLE_ID = "_top";

const $$Astro$h = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Hero$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Hero$1;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    height: 400,
    alt: image?.alt || ""
  };
  let darkImage;
  let lightImage;
  let rawHtml;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      rawHtml = image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-ij22bx75"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-ij22bx75"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-ij22bx75" })}`} ${rawHtml && renderTemplate`<div class="hero-html sl-flex astro-ij22bx75">${unescapeHTML(rawHtml)}</div>`} <div class="sl-flex stack astro-ij22bx75"> <div class="sl-flex copy astro-ij22bx75"> <h1${addAttribute(PAGE_TITLE_ID, "id")} data-page-title class="astro-ij22bx75">${unescapeHTML(title)}</h1> ${tagline && renderTemplate`<div class="tagline astro-ij22bx75">${unescapeHTML(tagline)}</div>`} </div> ${actions.length > 0 && renderTemplate`<div class="sl-flex actions astro-ij22bx75"> ${actions.map(
    ({ attrs: { class: className, ...attrs } = {}, icon, link: href, text, variant }) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": href, "variant": variant, "icon": icon?.name, "class:list": [[className], "astro-ij22bx75"], ...attrs }, { "default": ($$result2) => renderTemplate`${text}${icon?.html && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(icon.html)}` })}`}` })}`
  )} </div>`} </div> </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Hero.astro", void 0);

const CopyIcon = createSvgComponent({"meta":{"src":"/sorycode-1/_astro/copy.Bh8cKImQ.svg","width":32,"height":32,"format":"svg"},"attributes":{"width":"32","height":"32","viewBox":"0 0 512 512"},"children":"<rect width=\"336\" height=\"336\" x=\"128\" y=\"128\" fill=\"none\" stroke=\"currentColor\" stroke-linejoin=\"round\" stroke-width=\"32\" rx=\"57\" ry=\"57\" /><path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"32\" d=\"m383.5 128l.5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24\" />"});

const CheckIcon = createSvgComponent({"meta":{"src":"/sorycode-1/_astro/check.BCIIkoau.svg","width":24,"height":24,"format":"svg"},"attributes":{"viewBox":"0 0 24 24"},"children":"<path fill=\"currentColor\" d=\"M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z\" />"});

const TuiScreenshot = new Proxy({"src":"/sorycode-1/_astro/screenshot-splash.7LkGL_JS.png","width":1824,"height":1488,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-splash.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-splash.png");
							return target[name];
						}
					});

const VscodeScreenshot = new Proxy({"src":"/sorycode-1/_astro/screenshot-vscode.ErS25NLc.png","width":2690,"height":1790,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-vscode.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-vscode.png");
							return target[name];
						}
					});

const GithubScreenshot = new Proxy({"src":"/sorycode-1/_astro/screenshot-github.9kn9Fspv.png","width":2614,"height":1784,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-github.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/keita/Desktop/sory/sorycode/packages/web/src/assets/lander/screenshot-github.png");
							return target[name];
						}
					});

const $$Astro$g = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Lander = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Lander;
  const { data } = Astro2.locals.starlightRoute.entry;
  const { title = data.title, tagline, image, actions = [] } = data.hero || {};
  const imageAttrs = {
    loading: "eager",
    decoding: "async",
    width: 400,
    alt: image?.alt || ""
  };
  const github = (starlightConfig.social || []).filter((s) => s.icon === "github")[0];
  const discord = (starlightConfig.social || []).filter((s) => s.icon === "discord")[0];
  const locale = Astro2.currentLocale || "root";
  const t = Astro2.locals.t;
  const docsHref = getRelativeLocaleUrl(locale, "");
  const docsCliHref = getRelativeLocaleUrl(locale, "cli");
  const docsIdeHref = getRelativeLocaleUrl(locale, "ide");
  const docsGithubHref = getRelativeLocaleUrl(locale, "github");
  const repo = "projetssorycode/sorycode-1";
  let darkImage;
  let lightImage;
  if (image) {
    if ("file" in image) {
      darkImage = image.file;
    } else if ("dark" in image) {
      darkImage = image.dark;
      lightImage = image.light;
    } else {
      image.html;
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="hero astro-holooh5h"> <section class="top astro-holooh5h"> <div class="logo astro-holooh5h"> ${darkImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": darkImage, ...imageAttrs, "class:list": [{ "light:sl-hidden": Boolean(lightImage) }, "astro-holooh5h"] })}`} ${lightImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": lightImage, ...imageAttrs, "class": "dark:sl-hidden astro-holooh5h" })}`} </div> <h1 class="astro-holooh5h">${t("app.lander.hero.title")}</h1> </section> <section class="cta astro-holooh5h"> <div class="col1 astro-holooh5h"> <a${addAttribute(docsHref, "href")} class="astro-holooh5h">${t("app.lander.cta.getStarted")}</a> </div> <div class="col2 astro-holooh5h"> <button class="download astro-holooh5h"${addAttribute(repo, "data-repo")}${addAttribute(`https://github.com/${repo}/releases/latest`, "data-release")}> <span class="label astro-holooh5h">Download latest desktop app</span> <span class="meta astro-holooh5h">Detecting your platform…</span> </button> </div> </section> <section class="content astro-holooh5h"> <ul class="astro-holooh5h"> <li class="astro-holooh5h"><b class="astro-holooh5h">${t("app.lander.features.native_tui.title")}</b>: ${t("app.lander.features.native_tui.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">${t("app.lander.features.lsp_enabled.title")}</b>: ${t("app.lander.features.lsp_enabled.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">${t("app.lander.features.multi_session.title")}</b>: ${t("app.lander.features.multi_session.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">${t("app.lander.features.shareable_links.title")}</b>: ${t("app.lander.features.shareable_links.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">GitHub Copilot</b>: ${t("app.lander.features.github_copilot.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">ChatGPT Plus/Pro</b>: ${t("app.lander.features.chatgpt_plus_pro.description")}</li> <li class="astro-holooh5h"><b class="astro-holooh5h">${t("app.lander.features.use_any_model.title")}</b>: ${t("app.lander.features.use_any_model.prefix")} <a href="https://models.dev" class="astro-holooh5h">Models.dev</a>, ${t("app.lander.features.use_any_model.suffix")}</li> </ul> </section> <section class="alternatives astro-holooh5h"> <div class="col1 astro-holooh5h"> <h3 class="astro-holooh5h">npm</h3> <button class="command astro-holooh5h" data-command="npm install -g sorycode-ai"> <code class="astro-holooh5h"> <span class="astro-holooh5h">npm install -g</span> <span class="highlight astro-holooh5h">sorycode-ai</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col2 astro-holooh5h"> <h3 class="astro-holooh5h">Bun</h3> <button class="command astro-holooh5h" data-command="bun install -g sorycode-ai"> <code class="astro-holooh5h"> <span class="astro-holooh5h">bun install -g</span> <span class="highlight astro-holooh5h">sorycode-ai</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col3 astro-holooh5h"> <h3 class="astro-holooh5h">Homebrew</h3> <button class="command astro-holooh5h" data-command="brew install sorycode"> <code class="astro-holooh5h"> <span class="astro-holooh5h">brew install</span> <span class="highlight astro-holooh5h">sorycode</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col4 astro-holooh5h"> <h3 class="astro-holooh5h">Paru</h3> <button class="command astro-holooh5h" data-command="paru -S sorycode-bin"> <code class="astro-holooh5h"> <span class="astro-holooh5h">paru -S</span> <span class="highlight astro-holooh5h">sorycode-bin</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> <div class="col4 astro-holooh5h"> <h3 class="astro-holooh5h">Mise</h3> <button class="command astro-holooh5h" data-command="mise use -g github:projetssorycode/sorycode-1"> <code class="astro-holooh5h"> <span class="astro-holooh5h">mise use -g</span> <span class="highlight astro-holooh5h">github:projetssorycode/sorycode-1</span> </code> <span class="copy astro-holooh5h"> ${renderComponent($$result, "CopyIcon", CopyIcon, { "class": "astro-holooh5h" })} ${renderComponent($$result, "CheckIcon", CheckIcon, { "class": "astro-holooh5h" })} </span> </button> </div> </section> <section class="images astro-holooh5h"> <div class="left astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">${t("app.lander.images.tui.caption")}</figcaption> <a${addAttribute(docsCliHref, "href")} class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": TuiScreenshot, "alt": t("app.lander.images.tui.alt"), "class": "astro-holooh5h" })} </a> </figure> </div> <div class="right astro-holooh5h"> <div class="row1 astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">${t("app.lander.images.vscode.caption")}</figcaption> <a${addAttribute(docsIdeHref, "href")} class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": VscodeScreenshot, "alt": t("app.lander.images.vscode.alt"), "class": "astro-holooh5h" })} </a> </figure> </div> <div class="row2 astro-holooh5h"> <figure class="astro-holooh5h"> <figcaption class="astro-holooh5h">${t("app.lander.images.github.caption")}</figcaption> <a${addAttribute(docsGithubHref, "href")} class="astro-holooh5h"> ${renderComponent($$result, "Image", $$Image, { "src": GithubScreenshot, "alt": t("app.lander.images.github.alt"), "class": "astro-holooh5h" })} </a> </figure> </div> </div> </section> <section class="footer astro-holooh5h"> <div class="col1 astro-holooh5h"> <a${addAttribute(github.href, "href")} target="_blank" rel="noopener noreferrer" class="astro-holooh5h">GitHub</a> </div> <div class="col2 astro-holooh5h"> ${discord?.href ? renderTemplate`<a${addAttribute(discord.href, "href")} target="_blank" rel="noopener noreferrer" class="astro-holooh5h">Discord</a>` : renderTemplate`<a${addAttribute(`${github.href}/issues`, "href")} target="_blank" rel="noopener noreferrer" class="astro-holooh5h">Issues</a>`} </div> <div class="col3 astro-holooh5h"> <span class="astro-holooh5h">&copy;2025 <a href="https://github.com/projetssorycode" target="_blank" rel="noopener noreferrer" class="astro-holooh5h">ProjetSoryCode</a></span> </div> </section> </div>   ${renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Lander.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Lander.astro", void 0);

const $$Astro$f = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Hero;
  const { slug } = Astro2.locals.starlightRoute.entry;
  return renderTemplate`${slug === "" ? renderTemplate`${renderComponent($$result, "Lander", $$Lander, { ...Astro2.props })}` : renderTemplate`${renderComponent($$result, "Default", $$Hero$1, { ...Astro2.props }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/components/Hero.astro", void 0);

const $$MarkdownContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sl-markdown-content">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MarkdownContent.astro", void 0);

const $$Astro$e = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$MobileMenuToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$MobileMenuToggle;
  return renderTemplate`${renderComponent($$result, "starlight-menu-button", "starlight-menu-button", { "class": "print:hidden astro-w6hq3dqx" }, { "default": () => renderTemplate` ${maybeRenderHead()}<button aria-expanded="false"${addAttribute(Astro2.locals.t("menuButton.accessibleLabel"), "aria-label")} aria-controls="starlight__sidebar" class="sl-flex md:sl-hidden astro-w6hq3dqx"> ${renderComponent($$result, "Icon", $$Icon, { "name": "bars", "class": "open-menu astro-w6hq3dqx" })} ${renderComponent($$result, "Icon", $$Icon, { "name": "close", "class": "close-menu astro-w6hq3dqx" })} </button> ` })} ${renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro?astro&type=script&index=0&lang.ts")}  `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MobileMenuToggle.astro", void 0);

const $$Astro$d = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$PageFrame = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$PageFrame;
  const { hasSidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${maybeRenderHead()}<div class="page sl-flex astro-nroaebro"> <header class="header astro-nroaebro">${renderSlot($$result, $$slots["header"])}</header> ${hasSidebar && renderTemplate`<nav class="sidebar print:hidden astro-nroaebro"${addAttribute(Astro2.locals.t("sidebarNav.accessibleLabel"), "aria-label")}> ${renderComponent($$result, "MobileMenuToggle", $$MobileMenuToggle, { "class": "astro-nroaebro" })} <div id="starlight__sidebar" class="sidebar-pane astro-nroaebro"> <div class="sidebar-content sl-flex astro-nroaebro"> ${renderSlot($$result, $$slots["sidebar"])} </div> </div> </nav>`} <div class="main-frame astro-nroaebro">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/PageFrame.astro", void 0);

const $$Astro$c = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$TableOfContentsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$TableOfContentsList;
  const { toc, isMobile = false, depth = 0 } = Astro2.props;
  const $$definedVars = defineStyleVars([{ depth }]);
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ isMobile }, "astro-76fmbr6m"], "class:list")}${addAttribute($$definedVars, "style")}> ${toc.map((heading) => renderTemplate`<li class="astro-76fmbr6m"${addAttribute($$definedVars, "style")}> <a${addAttribute("#" + heading.slug, "href")} class="astro-76fmbr6m"${addAttribute($$definedVars, "style")}> <span class="astro-76fmbr6m"${addAttribute($$definedVars, "style")}>${heading.text}</span> </a> ${heading.children.length > 0 && renderTemplate`${renderComponent($$result, "Astro.self", Astro2.self, { "toc": heading.children, "depth": depth + 1, "isMobile": isMobile, "class": "astro-76fmbr6m" })}`} </li>`)} </ul> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/TableOfContents/TableOfContentsList.astro", void 0);

const $$Astro$b = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$MobileTableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MobileTableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "mobile-starlight-toc", "mobile-starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel, "class": "astro-vecwbjhp" }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page--mobile" class="astro-vecwbjhp"><details id="starlight__mobile-toc" class="astro-vecwbjhp"><summary id="starlight__on-this-page--mobile" class="sl-flex astro-vecwbjhp"><div class="toggle sl-flex astro-vecwbjhp">${Astro2.locals.t("tableOfContents.onThisPage")}${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-vecwbjhp", "size": "1rem" })}</div><span class="display-current astro-vecwbjhp"></span></summary><div class="dropdown astro-vecwbjhp">${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items, "isMobile": true, "class": "astro-vecwbjhp" })}</div></details></nav>` })}`}${renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MobileTableOfContents.astro", void 0);

const $$Astro$a = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { toc } = Astro2.locals.starlightRoute;
  return renderTemplate`${toc && renderTemplate`${renderComponent($$result, "starlight-toc", "starlight-toc", { "data-min-h": toc.minHeadingLevel, "data-max-h": toc.maxHeadingLevel }, { "default": () => renderTemplate`${maybeRenderHead()}<nav aria-labelledby="starlight__on-this-page"><h2 id="starlight__on-this-page">${Astro2.locals.t("tableOfContents.onThisPage")}</h2>${renderComponent($$result, "TableOfContentsList", $$TableOfContentsList, { "toc": toc.items })}</nav>` })}`}${renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/TableOfContents.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/TableOfContents.astro", void 0);

const $$Astro$9 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$PageSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$PageSidebar;
  return renderTemplate`${Astro2.locals.starlightRoute.toc && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-57ryi75m" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="lg:sl-hidden astro-57ryi75m">${renderComponent($$result2, "MobileTableOfContents", $$MobileTableOfContents, { "class": "astro-57ryi75m" })}</div><div class="right-sidebar-panel sl-hidden lg:sl-block astro-57ryi75m"><div class="sl-container astro-57ryi75m">${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "class": "astro-57ryi75m" })}</div></div>` })}`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/PageSidebar.astro", void 0);

const $$Astro$8 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$PageTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$PageTitle;
  const {
    entry: {
      data: { title, description }
    }
  } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1 id="_top" class="astro-qk3gpza6">${title}</h1>${description && renderTemplate`<p class="page-description astro-qk3gpza6">${description}</p>`}` })}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/toolbeam-docs-theme@0.4.8+48b0bbb44acd2d59/node_modules/toolbeam-docs-theme/src/overrides/PageTitle.astro", void 0);

const $$SocialIcons = createComponent(($$result, $$props, $$slots) => {
  const links = starlightConfig.social || [];
  return renderTemplate`${links.length > 0 && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "class": "astro-rdl5marq" }, { "default": ($$result2) => renderTemplate`${links.map(({ label, href, icon }) => renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} rel="me" class="sl-flex astro-rdl5marq"><span class="sr-only astro-rdl5marq">${label}</span>${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "astro-rdl5marq" })}</a>`)}` })}`}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SocialIcons.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$7 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$ThemeSelect = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ThemeSelect;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "  <script>\n	StarlightThemeProvider.updatePickers();\n<\/script> ", ""])), renderComponent($$result, "starlight-theme-select", "starlight-theme-select", {}, { "default": () => renderTemplate`  ${renderComponent($$result, "Select", $$Select, { "icon": "laptop", "label": Astro2.locals.t("themeSelect.accessibleLabel"), "value": "auto", "options": [
    { label: Astro2.locals.t("themeSelect.dark"), selected: false, value: "dark" },
    { label: Astro2.locals.t("themeSelect.light"), selected: false, value: "light" },
    { label: Astro2.locals.t("themeSelect.auto"), selected: true, value: "auto" }
  ], "width": "6.25em" })} ` }), renderScript($$result, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/ThemeSelect.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/ThemeSelect.astro", void 0);

const $$MobileMenuFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mobile-preferences sl-flex astro-4n4adad7"> <div class="social-icons astro-4n4adad7"> ${renderComponent($$result, "SocialIcons", $$SocialIcons, { "class": "astro-4n4adad7" })} </div> ${renderComponent($$result, "ThemeSelect", $$ThemeSelect, { "class": "astro-4n4adad7" })} ${renderComponent($$result, "LanguageSelect", $$LanguageSelect, { "class": "astro-4n4adad7" })} </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/MobileMenuFooter.astro", void 0);

const base = stripTrailingSlash("/sorycode-1");
function pathWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base + "/";
}
function fileWithBase(path) {
  path = stripLeadingSlash(path);
  return path ? base + "/" + path : base;
}

const defaultFormatStrategy = {
  addBase: pathWithBase,
  handleExtension: (href) => stripHtmlExtension(href)
};
const formatStrategies = {
  file: {
    addBase: fileWithBase,
    handleExtension: (href) => ensureHtmlExtension(href)
  },
  directory: defaultFormatStrategy,
  preserve: defaultFormatStrategy
};
const trailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: (href) => href
};
function formatPath$1(href, { format = "directory", trailingSlash = "ignore" }) {
  const formatStrategy = formatStrategies[format];
  const trailingSlashStrategy = trailingSlashStrategies[trailingSlash];
  href = formatStrategy.handleExtension(href);
  href = formatStrategy.addBase(href);
  if (format === "file") return href;
  href = href === "/" ? href : trailingSlashStrategy(href);
  return href;
}
function createPathFormatter(opts) {
  return (href) => formatPath$1(href, opts);
}

const formatPath = createPathFormatter({
  format: project.build.format,
  trailingSlash: project.trailingSlash
});

function slugToLocale$1(slug, config) {
  const localesConfig = config.locales ?? {};
  const baseSegment = slug?.split("/")[0];
  if (baseSegment && localesConfig[baseSegment]) return baseSegment;
  if (!localesConfig.root) return config.defaultLocale.locale;
  return void 0;
}

function slugToLocale(slug) {
  return slugToLocale$1(slug, starlightConfig);
}
function slugToLocaleData(slug) {
  const locale = slugToLocale(slug);
  return { dir: localeToDir(locale), lang: localeToLang(locale), locale };
}
function localeToLang(locale) {
  const lang = locale ? starlightConfig.locales?.[locale]?.lang : starlightConfig.locales?.root?.lang;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function localeToDir(locale) {
  const dir = locale ? starlightConfig.locales?.[locale]?.dir : starlightConfig.locales?.root?.dir;
  return dir || starlightConfig.defaultLocale.dir;
}
function slugToParam(slug) {
  return slug === "index" || slug === "" ? void 0 : slug.endsWith("/index") ? slug.slice(0, -6) : slug;
}
function slugToPathname(slug) {
  const param = slugToParam(slug);
  return param ? "/" + param + "/" : "/";
}
function localizedSlug(slug, locale) {
  const slugLocale = slugToLocale(slug);
  if (slugLocale === locale) return slug;
  locale = locale || "";
  if (slugLocale === slug) return locale;
  if (slugLocale) {
    return stripTrailingSlash(slug.replace(slugLocale + "/", locale ? locale + "/" : ""));
  }
  return slug ? locale + "/" + slug : locale;
}
function localizedId(id, locale) {
  const idLocale = slugToLocale(id);
  if (idLocale) {
    return id.replace(idLocale + "/", locale ? locale + "/" : "");
  } else if (locale) {
    return locale + "/" + id;
  } else {
    return id;
  }
}
function urlToSlug(url) {
  let pathname = url.pathname;
  const base = stripTrailingSlash("/sorycode-1");
  if (pathname.startsWith(base)) pathname = pathname.replace(base, "");
  const segments = pathname.split("/");
  const htmlExt = ".html";
  if (segments.at(-1) === "index.html") {
    segments.pop();
  } else if (segments.at(-1)?.endsWith(htmlExt)) {
    const last = segments.pop();
    if (last) segments.push(last.slice(0, -1 * htmlExt.length));
  }
  return segments.filter(Boolean).join("/");
}

function validateLogoImports() {
  if (starlightConfig.logo) {
    let err;
    if ("src" in starlightConfig.logo) {
      if (!logos.dark || !logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.src}" (logo.src)`;
      }
    } else {
      if (!logos.dark) {
        err = `Could not resolve logo import for "${starlightConfig.logo.dark}" (logo.dark)`;
      } else if (!logos.light) {
        err = `Could not resolve logo import for "${starlightConfig.logo.light}" (logo.light)`;
      }
    }
    if (err) throw new Error(err);
  }
}

validateLogoImports();
const normalizeIndexSlug = (slug) => slug === "index" ? "" : slug;
function normalizeCollectionEntry(entry) {
  const slug = normalizeIndexSlug(entry.slug ?? entry.id);
  return {
    ...entry,
    // In a collection with a loader, the `id` is a slug and should be normalized.
    id: entry.slug ? entry.id : slug,
    // In a legacy collection, the `filePath` property doesn't exist.
    filePath: entry.filePath ?? `${getCollectionPathFromRoot("docs", project)}/${entry.id}`,
    // In a collection with a loader, the `slug` property is replaced by the `id`.
    slug: normalizeIndexSlug(entry.slug ?? entry.id)
  };
}
const docs = (await getCollection("docs", ({ data }) => {
  return data.draft === false;
}) ?? []).map(normalizeCollectionEntry);
function getRoutes() {
  const routes2 = docs.map((entry) => ({
    entry,
    slug: entry.slug,
    id: entry.id,
    entryMeta: slugToLocaleData(entry.slug),
    ...slugToLocaleData(entry.slug)
  }));
  {
    const defaultLocaleDocs = getLocaleDocs(
      starlightConfig.defaultLocale?.locale === "root" ? void 0 : starlightConfig.defaultLocale?.locale
    );
    for (const key in starlightConfig.locales) {
      if (key === starlightConfig.defaultLocale.locale) continue;
      const localeConfig = starlightConfig.locales[key];
      if (!localeConfig) continue;
      const locale = key === "root" ? void 0 : key;
      const localeDocs = getLocaleDocs(locale);
      for (const fallback of defaultLocaleDocs) {
        const slug = localizedSlug(fallback.slug, locale);
        const id = slug;
        const doesNotNeedFallback = localeDocs.some((doc) => doc.slug === slug);
        if (doesNotNeedFallback) continue;
        routes2.push({
          entry: fallback,
          slug,
          id,
          isFallback: true,
          lang: localeConfig.lang || BuiltInDefaultLocale.lang,
          locale,
          dir: localeConfig.dir,
          entryMeta: slugToLocaleData(fallback.slug)
        });
      }
    }
  }
  return routes2;
}
const routes = getRoutes();
function getParamRouteMapping() {
  const map = /* @__PURE__ */ new Map();
  for (const route of routes) {
    map.set(slugToParam(route.slug), route);
  }
  return map;
}
const routesBySlugParam = getParamRouteMapping();
function getRouteBySlugParam(slugParam) {
  return routesBySlugParam.get(slugParam?.replace(/\/$/, "") || void 0);
}
function getPaths() {
  return routes.map((route) => ({
    params: { slug: slugToParam(route.slug) },
    props: route
  }));
}
const paths = getPaths();
function getLocaleRoutes(locale) {
  return filterByLocale(routes, locale);
}
function getLocaleDocs(locale) {
  return filterByLocale(docs, locale);
}
function filterByLocale(items, locale) {
  if (starlightConfig.locales) {
    if (locale && locale in starlightConfig.locales) {
      return items.filter((i) => i.slug === locale || i.slug.startsWith(locale + "/"));
    } else if (starlightConfig.locales.root) {
      const langKeys = Object.keys(starlightConfig.locales).filter((k) => k !== "root");
      const isLangIndex = new RegExp(`^(${langKeys.join("|")})$`);
      const isLangDir = new RegExp(`^(${langKeys.join("|")})/`);
      return items.filter((i) => !isLangIndex.test(i.slug) && !isLangDir.test(i.slug));
    }
  }
  return items;
}

const DirKey = Symbol("DirKey");
const SlugKey = Symbol("SlugKey");
const neverPathFormatter = createPathFormatter({ trailingSlash: "never" });
const docsCollectionPathFromRoot = getCollectionPathFromRoot("docs", project);
function makeDir(slug) {
  const dir = {};
  Object.defineProperty(dir, DirKey, { enumerable: false });
  Object.defineProperty(dir, SlugKey, { value: slug, enumerable: false });
  return dir;
}
function isDir(data) {
  return DirKey in data;
}
function configItemToEntry(item, currentPathname, locale, routes2) {
  if ("link" in item) {
    return linkFromSidebarLinkItem(item, locale);
  } else if ("autogenerate" in item) {
    return groupFromAutogenerateConfig(item, locale, routes2, currentPathname);
  } else if ("slug" in item) {
    return linkFromInternalSidebarLinkItem(item, locale);
  } else {
    const label = pickLang(item.translations, localeToLang(locale)) || item.label;
    return {
      type: "group",
      label,
      entries: item.items.map((i) => configItemToEntry(i, currentPathname, locale, routes2)),
      collapsed: item.collapsed,
      badge: getSidebarBadge(item.badge, locale, label)
    };
  }
}
function groupFromAutogenerateConfig(item, locale, routes2, currentPathname) {
  const { collapsed: subgroupCollapsed, directory } = item.autogenerate;
  const localeDir = locale ? locale + "/" + directory : directory;
  const dirDocs = routes2.filter((doc) => {
    const filePathFromContentDir = getRoutePathRelativeToCollectionRoot(doc, locale);
    return (
      // Match against `foo.md` or `foo/index.md`.
      stripExtension(filePathFromContentDir) === localeDir || // Match against `foo/anything/else.md`.
      filePathFromContentDir.startsWith(localeDir + "/")
    );
  });
  const tree = treeify(dirDocs, locale, localeDir);
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return {
    type: "group",
    label,
    entries: sidebarFromDir(tree, currentPathname, locale, subgroupCollapsed ?? item.collapsed),
    collapsed: item.collapsed,
    badge: getSidebarBadge(item.badge, locale, label)
  };
}
const isAbsolute = (link) => /^https?:\/\//.test(link);
function linkFromSidebarLinkItem(item, locale) {
  let href = item.link;
  if (!isAbsolute(href)) {
    href = ensureLeadingSlash(href);
    if (locale) href = "/" + locale + href;
  }
  const label = pickLang(item.translations, localeToLang(locale)) || item.label;
  return makeSidebarLink(href, label, getSidebarBadge(item.badge, locale, label), item.attrs);
}
function linkFromInternalSidebarLinkItem(item, locale) {
  const slug = item.slug === "index" ? "" : item.slug;
  const localizedSlug = locale ? slug ? locale + "/" + slug : locale : slug;
  const route = routes.find((entry) => localizedSlug === entry.slug);
  if (!route) {
    const hasExternalSlashes = item.slug.at(0) === "/" || item.slug.at(-1) === "/";
    if (hasExternalSlashes) {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config must not start or end with a slash.`,
        `Please try updating \`"${item.slug}"\` to \`"${stripLeadingAndTrailingSlashes(item.slug)}"\`.`
      );
    } else {
      throw new AstroUserError(
        `The slug \`"${item.slug}"\` specified in the Starlight sidebar config does not exist.`,
        "Update the Starlight config to reference a valid entry slug in the docs content collection.\nLearn more about Astro content collection slugs at https://docs.astro.build/en/reference/modules/astro-content/#getentry"
      );
    }
  }
  const frontmatter = route.entry.data;
  const label = pickLang(item.translations, localeToLang(locale)) || item.label || frontmatter.sidebar?.label || frontmatter.title;
  const badge = item.badge ?? frontmatter.sidebar?.badge;
  const attrs = { ...frontmatter.sidebar?.attrs, ...item.attrs };
  return makeSidebarLink(
    slugToPathname(route.slug),
    label,
    getSidebarBadge(badge, locale, label),
    attrs
  );
}
function makeSidebarLink(href, label, badge, attrs) {
  if (!isAbsolute(href)) {
    href = formatPath(href);
  }
  return makeLink({ label, href, badge, attrs });
}
function makeLink({
  attrs = {},
  badge = void 0,
  ...opts
}) {
  return { type: "link", ...opts, badge, isCurrent: false, attrs };
}
function pathsMatch(pathA, pathB) {
  return neverPathFormatter(pathA) === neverPathFormatter(pathB);
}
function getBreadcrumbs(path, baseDir) {
  const pathWithoutExt = stripExtension(path);
  if (pathWithoutExt === baseDir) return [];
  baseDir = ensureTrailingSlash(baseDir);
  const relativePath = pathWithoutExt.startsWith(baseDir) ? pathWithoutExt.replace(baseDir, "") : pathWithoutExt;
  return relativePath.split("/");
}
function getRoutePathRelativeToCollectionRoot(route, locale) {
  return (        localizedId(route.entry.filePath.replace(`${docsCollectionPathFromRoot}/`, ""), locale)
  );
}
function treeify(routes2, locale, baseDir) {
  const treeRoot = makeDir(baseDir);
  routes2.filter((doc) => !doc.entry.data.sidebar.hidden).map((doc) => [getRoutePathRelativeToCollectionRoot(doc, locale), doc]).sort(([a], [b]) => b.split("/").length - a.split("/").length).forEach(([filePathFromContentDir, doc]) => {
    const parts = getBreadcrumbs(filePathFromContentDir, baseDir);
    let currentNode = treeRoot;
    parts.forEach((part, index) => {
      const isLeaf = index === parts.length - 1;
      if (isLeaf && currentNode.hasOwnProperty(part)) {
        currentNode = currentNode[part];
        part = "index";
      }
      if (!isLeaf) {
        const path = currentNode[SlugKey];
        currentNode[part] ||= makeDir(stripLeadingAndTrailingSlashes(path + "/" + part));
        currentNode = currentNode[part];
      } else {
        currentNode[part] = doc;
      }
    });
  });
  return treeRoot;
}
function linkFromRoute(route) {
  return makeSidebarLink(
    slugToPathname(route.slug),
    route.entry.data.sidebar.label || route.entry.data.title,
    route.entry.data.sidebar.badge,
    route.entry.data.sidebar.attrs
  );
}
function getOrder(routeOrDir) {
  return isDir(routeOrDir) ? Math.min(...Object.values(routeOrDir).flatMap(getOrder)) : (
    // If no order value is found, set it to the largest number possible.
    routeOrDir.entry.data.sidebar.order ?? Number.MAX_VALUE
  );
}
function sortDirEntries(dir) {
  const collator = new Intl.Collator(localeToLang(void 0));
  return dir.sort(([_keyA, a], [_keyB, b]) => {
    const [aOrder, bOrder] = [getOrder(a), getOrder(b)];
    if (aOrder !== bOrder) return aOrder < bOrder ? -1 : 1;
    return collator.compare(isDir(a) ? a[SlugKey] : a.slug, isDir(b) ? b[SlugKey] : b.slug);
  });
}
function groupFromDir(dir, fullPath, dirName, currentPathname, locale, collapsed) {
  const entries = sortDirEntries(Object.entries(dir)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, `${fullPath}/${key}`, key, currentPathname, locale, collapsed)
  );
  return {
    type: "group",
    label: dirName,
    entries,
    collapsed,
    badge: void 0
  };
}
function dirToItem(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) {
  return isDir(dirOrRoute) ? groupFromDir(dirOrRoute, fullPath, dirName, currentPathname, locale, collapsed) : linkFromRoute(dirOrRoute);
}
function sidebarFromDir(tree, currentPathname, locale, collapsed) {
  return sortDirEntries(Object.entries(tree)).map(
    ([key, dirOrRoute]) => dirToItem(dirOrRoute, key, key, currentPathname, locale, collapsed)
  );
}
const intermediateSidebars = /* @__PURE__ */ new Map();
function getSidebar(pathname, locale) {
  let intermediateSidebar = intermediateSidebars.get(locale);
  if (!intermediateSidebar) {
    intermediateSidebar = getIntermediateSidebarFromConfig(starlightConfig.sidebar, pathname, locale);
    intermediateSidebars.set(locale, intermediateSidebar);
  }
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getSidebarFromConfig(sidebarConfig, pathname, locale) {
  const intermediateSidebar = getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale);
  return getSidebarFromIntermediateSidebar(intermediateSidebar, pathname);
}
function getIntermediateSidebarFromConfig(sidebarConfig, pathname, locale) {
  const routes2 = getLocaleRoutes(locale);
  if (sidebarConfig) {
    return sidebarConfig.map((group) => configItemToEntry(group, pathname, locale, routes2));
  } else {
    const tree = treeify(routes2, locale, locale || "");
    return sidebarFromDir(tree, pathname, locale, false);
  }
}
function getSidebarFromIntermediateSidebar(intermediateSidebar, pathname) {
  const sidebar = structuredClone(intermediateSidebar);
  setIntermediateSidebarCurrentEntry(sidebar, pathname);
  return sidebar;
}
function setIntermediateSidebarCurrentEntry(intermediateSidebar, pathname) {
  for (const entry of intermediateSidebar) {
    if (entry.type === "link" && pathsMatch(encodeURI(entry.href), pathname)) {
      entry.isCurrent = true;
      return true;
    }
    if (entry.type === "group" && setIntermediateSidebarCurrentEntry(entry.entries, pathname)) {
      return true;
    }
  }
  return false;
}
function getSidebarHash(sidebar) {
  let hash = 0;
  const sidebarIdentity = recursivelyBuildSidebarIdentity(sidebar);
  for (let i = 0; i < sidebarIdentity.length; i++) {
    const char = sidebarIdentity.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }
  return (hash >>> 0).toString(36).padStart(7, "0");
}
function recursivelyBuildSidebarIdentity(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? entry.label + recursivelyBuildSidebarIdentity(entry.entries) : entry.label + entry.href
  ).join("");
}
function flattenSidebar(sidebar) {
  return sidebar.flatMap(
    (entry) => entry.type === "group" ? flattenSidebar(entry.entries) : entry
  );
}
function getPrevNextLinks(sidebar, paginationEnabled, config2) {
  const entries = flattenSidebar(sidebar);
  const currentIndex = entries.findIndex((entry) => entry.isCurrent);
  const prev = applyPrevNextLinkConfig(entries[currentIndex - 1], paginationEnabled, config2.prev);
  const next = applyPrevNextLinkConfig(
    currentIndex > -1 ? entries[currentIndex + 1] : void 0,
    paginationEnabled,
    config2.next
  );
  return { prev, next };
}
function applyPrevNextLinkConfig(link, paginationEnabled, config2) {
  if (config2 === false) return void 0;
  else if (config2 === true) return link;
  else if (typeof config2 === "string" && link) {
    return { ...link, label: config2 };
  } else if (typeof config2 === "object") {
    if (link) {
      return {
        ...link,
        label: config2.label ?? link.label,
        href: config2.link ?? link.href,
        // Explicitly remove sidebar link attributes for prev/next links.
        attrs: {}
      };
    } else if (config2.link && config2.label) {
      return makeLink({ href: config2.link, label: config2.label });
    }
  }
  return paginationEnabled ? link : void 0;
}
function getSidebarBadge(config2, locale, itemLabel) {
  if (!config2) return;
  if (typeof config2 === "string") {
    return { variant: "default", text: config2 };
  }
  return { ...config2, text: getSidebarBadgeText(config2.text, locale, itemLabel) };
}
function getSidebarBadgeText(text, locale, itemLabel) {
  if (typeof text === "string") return text;
  const defaultLang = starlightConfig.defaultLocale?.lang || starlightConfig.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const defaultText = text[defaultLang];
  if (!defaultText) {
    throw new AstroUserError(
      `The badge text for "${itemLabel}" must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a badge text for the default language.\nLearn more about sidebar badges internationalization at https://starlight.astro.build/guides/sidebar/#internationalization-with-badges"
    );
  }
  return pickLang(text, localeToLang(locale)) || defaultText;
}

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$6 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SidebarPersister = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SidebarPersister;
  const hash = getSidebarHash(Astro2.locals.starlightRoute.sidebar);
  return renderTemplate`${renderComponent($$result, "sl-sidebar-state-persist", "sl-sidebar-state-persist", { "data-hash": hash, "class": "astro-m62j53ay" }, { "default": () => renderTemplate(_a$1 || (_a$1 = __template$1([` <script aria-hidden="true">
		(() => {
			try {
				if (!matchMedia('(min-width: 50em)').matches) return;
				/** @type {HTMLElement | null} */
				const target = document.querySelector('sl-sidebar-state-persist');
				const state = JSON.parse(sessionStorage.getItem('sl-sidebar-state') || '0');
				if (!target || !state || target.dataset.hash !== state.hash) return;
				window._starlightScrollRestore = state.scroll;
				customElements.define(
					'sl-sidebar-restore',
					class SidebarRestore extends HTMLElement {
						connectedCallback() {
							try {
								const idx = parseInt(this.dataset.index || '');
								const details = this.closest('details');
								if (details && typeof state.open[idx] === 'boolean') details.open = state.open[idx];
							} catch {}
						}
					}
				);
			} catch {}
		})();
	<\/script> `, ` <script aria-hidden="true">
		(() => {
			const scroller = document.getElementById('starlight__sidebar');
			if (!window._starlightScrollRestore || !scroller) return;
			scroller.scrollTop = window._starlightScrollRestore;
			delete window._starlightScrollRestore;
		})();
	<\/script> `])), renderSlot($$result, $$slots["default"])) })} `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SidebarPersister.astro", void 0);

const $$Astro$5 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SidebarRestorePoint = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SidebarRestorePoint;
  const currentGroupIndexSymbol = Symbol.for("starlight-sidebar-group-index");
  const locals = Astro2.locals;
  const index = locals[currentGroupIndexSymbol] || 0;
  locals[currentGroupIndexSymbol] = index + 1;
  return renderTemplate`${renderComponent($$result, "sl-sidebar-restore", "sl-sidebar-restore", { "data-index": index })}`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SidebarRestorePoint.astro", void 0);

const $$Astro$4 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SidebarSublist = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SidebarSublist;
  const { sublist, nested } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([{ "top-level": !nested }, "astro-ijdriqe6"], "class:list")}> ${sublist.map((entry) => renderTemplate`<li class="astro-ijdriqe6"> ${entry.type === "link" ? renderTemplate`<a${addAttribute(entry.href, "href")}${addAttribute(entry.isCurrent && "page", "aria-current")}${addAttribute([[{ large: !nested }, entry.attrs.class], "astro-ijdriqe6"], "class:list")}${spreadAttributes(entry.attrs)}> <span class="astro-ijdriqe6">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-ijdriqe6", "text": entry.badge.text })}`} </a>` : renderTemplate`<details${addAttribute(flattenSidebar(entry.entries).some((i) => i.isCurrent) || !entry.collapsed, "open")} class="astro-ijdriqe6"> ${renderComponent($$result, "SidebarRestorePoint", $$SidebarRestorePoint, { "class": "astro-ijdriqe6" })} <summary class="astro-ijdriqe6"> <div class="group-label astro-ijdriqe6"> <span class="large astro-ijdriqe6">${entry.label}</span> ${entry.badge && renderTemplate`${renderComponent($$result, "Badge", $$Badge, { "variant": entry.badge.variant, "class": (entry.badge.class ?? "") + " astro-ijdriqe6", "text": entry.badge.text })}`} </div> ${renderComponent($$result, "Icon", $$Icon, { "name": "right-caret", "class": "caret astro-ijdriqe6", "size": "1.25rem" })} </summary> ${renderComponent($$result, "Astro.self", Astro2.self, { "sublist": entry.entries, "nested": true, "class": "astro-ijdriqe6" })} </details>`} </li>`)} </ul> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SidebarSublist.astro", void 0);

const $$Astro$3 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Sidebar;
  const { sidebar } = Astro2.locals.starlightRoute;
  return renderTemplate`${renderComponent($$result, "SidebarPersister", $$SidebarPersister, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SidebarSublist", $$SidebarSublist, { "sublist": sidebar })} ` })} ${maybeRenderHead()}<div class="md:sl-hidden"> ${renderComponent($$result, "MobileMenuFooter", $$MobileMenuFooter, {})} </div>`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Sidebar.astro", void 0);

const $$Astro$2 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SkipLink;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${PAGE_TITLE_ID}`, "href")} class="astro-cppv5xs5">${Astro2.locals.t("skipLink.label")}</a> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/SkipLink.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$ThemeProvider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(`#theme-icons`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"], ["<script>\n	window.StarlightThemeProvider = (() => {\n		const storedTheme =\n			typeof localStorage !== 'undefined' && localStorage.getItem('starlight-theme');\n		const theme =\n			storedTheme ||\n			(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');\n		document.documentElement.dataset.theme = theme === 'light' ? 'light' : 'dark';\n		return {\n			updatePickers(theme = storedTheme || 'auto') {\n				document.querySelectorAll('starlight-theme-select').forEach((picker) => {\n					const select = picker.querySelector('select');\n					if (select) select.value = theme;\n					/** @type {HTMLTemplateElement | null} */\n					const tmpl = document.querySelector(\\`#theme-icons\\`);\n					const newIcon = tmpl && tmpl.content.querySelector('.' + theme);\n					if (newIcon) {\n						const oldIcon = picker.querySelector('svg.label-icon');\n						if (oldIcon) {\n							oldIcon.replaceChildren(...newIcon.cloneNode(true).childNodes);\n						}\n					}\n				});\n			},\n		};\n	})();\n<\/script><template id=\"theme-icons\">", "", "", "</template>"])), renderComponent($$result, "Icon", $$Icon, { "name": "sun", "class": "light" }), renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "dark" }), renderComponent($$result, "Icon", $$Icon, { "name": "laptop", "class": "auto" }));
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$TwoColumnContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TwoColumnContent;
  return renderTemplate`${maybeRenderHead()}<div class="lg:sl-flex astro-kma77afg"> ${Astro2.locals.starlightRoute.toc && renderTemplate`<aside class="right-sidebar-container print:hidden astro-kma77afg"> <div class="right-sidebar astro-kma77afg"> ${renderSlot($$result, $$slots["right-sidebar"])} </div> </aside>`} <div class="main-pane astro-kma77afg">${renderSlot($$result, $$slots["default"])}</div> </div> `;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/TwoColumnContent.astro", void 0);

const $$Astro = createAstro("https://projetssorycode.github.io/sorycode-1");
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const { starlightRoute } = Astro2.locals;
  const pagefindEnabled = starlightRoute.entry.slug !== "404" && !starlightRoute.entry.slug.endsWith("/404") && starlightRoute.entry.data.pagefind !== false;
  const htmlDataAttributes = { "data-theme": "dark" };
  if (Boolean(starlightRoute.toc)) htmlDataAttributes["data-has-toc"] = "";
  if (starlightRoute.hasSidebar) htmlDataAttributes["data-has-sidebar"] = "";
  if (Boolean(starlightRoute.entry.data.hero)) htmlDataAttributes["data-has-hero"] = "";
  const mainDataAttributes = {};
  if (pagefindEnabled) mainDataAttributes["data-pagefind-body"] = "";
  return renderTemplate`<html${addAttribute(starlightRoute.lang, "lang")}${addAttribute(starlightRoute.dir, "dir")}${spreadAttributes(htmlDataAttributes, void 0, { "class": "astro-qk7jqan6" })}> <head>${renderComponent($$result, "Head", $$Head, { "class": "astro-qk7jqan6" })}${renderComponent($$result, "ThemeProvider", $$ThemeProvider, { "class": "astro-qk7jqan6" })}<link rel="stylesheet"${addAttribute(printHref, "href")} media="print">${renderHead()}</head> <body class="astro-qk7jqan6"> ${renderComponent($$result, "SkipLink", $$SkipLink, { "class": "astro-qk7jqan6" })} ${renderComponent($$result, "PageFrame", $$PageFrame, { "class": "astro-qk7jqan6" }, { "default": ($$result2) => renderTemplate`  ${renderScript($$result2, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Page.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result2, "TwoColumnContent", $$TwoColumnContent, { "class": "astro-qk7jqan6" }, { "default": ($$result3) => renderTemplate`  <main${spreadAttributes(mainDataAttributes, void 0, { "class": "astro-qk7jqan6" })}${addAttribute(starlightRoute.entryMeta.lang, "lang")}${addAttribute(starlightRoute.entryMeta.dir, "dir")}>  ${renderComponent($$result3, "Banner", $$Banner, { "class": "astro-qk7jqan6" })} ${starlightRoute.entry.data.hero ? renderTemplate`${renderComponent($$result3, "ContentPanel", $$ContentPanel, { "class": "astro-qk7jqan6" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Hero", $$Hero, { "class": "astro-qk7jqan6" })} ${renderComponent($$result4, "MarkdownContent", $$MarkdownContent, { "class": "astro-qk7jqan6" }, { "default": ($$result5) => renderTemplate` ${renderSlot($$result5, $$slots["default"])} ` })} ${renderComponent($$result4, "Footer", $$Footer, { "class": "astro-qk7jqan6" })} ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-qk7jqan6" }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-qk7jqan6" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "PageTitle", $$PageTitle, { "class": "astro-qk7jqan6" })} ${starlightRoute.entry.data.draft && renderTemplate`${renderComponent($$result5, "DraftContentNotice", $$DraftContentNotice, { "class": "astro-qk7jqan6" })}`}${starlightRoute.isFallback && renderTemplate`${renderComponent($$result5, "FallbackContentNotice", $$FallbackContentNotice, { "class": "astro-qk7jqan6" })}`}` })} ${renderComponent($$result4, "ContentPanel", $$ContentPanel, { "class": "astro-qk7jqan6" }, { "default": ($$result5) => renderTemplate` ${renderComponent($$result5, "MarkdownContent", $$MarkdownContent, { "class": "astro-qk7jqan6" }, { "default": ($$result6) => renderTemplate` ${renderSlot($$result6, $$slots["default"])} ` })} ${renderComponent($$result5, "Footer", $$Footer, { "class": "astro-qk7jqan6" })} ` })} ` })}`} </main> `, "right-sidebar": ($$result3) => renderTemplate`${renderComponent($$result3, "PageSidebar", $$PageSidebar, { "slot": "right-sidebar", "class": "astro-qk7jqan6" })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Header", $$Header, { "slot": "header", "class": "astro-qk7jqan6" })}`, "sidebar": ($$result2) => renderTemplate`${starlightRoute.hasSidebar && renderTemplate`${renderComponent($$result2, "Sidebar", $$Sidebar, { "slot": "sidebar", "class": "astro-qk7jqan6" })}`}` })} </body></html>`;
}, "C:/Users/keita/Desktop/sory/sorycode/node_modules/.bun/@astrojs+starlight@0.34.3+53c1c0175f5fc11b/node_modules/@astrojs/starlight/components/Page.astro", void 0);

function generateToC(headings, { minHeadingLevel, maxHeadingLevel, title }) {
  headings = headings.filter(({ depth }) => depth >= minHeadingLevel && depth <= maxHeadingLevel);
  const toc = [{ depth: 2, slug: PAGE_TITLE_ID, text: title, children: [] }];
  for (const heading of headings) injectChild(toc, { ...heading, children: [] });
  return toc;
}
function injectChild(items, item) {
  const lastItem = items.at(-1);
  if (!lastItem || lastItem.depth >= item.depth) {
    items.push(item);
  } else {
    return injectChild(lastItem.children, item);
  }
}

const makeAPI = (data) => {
  const trackedDocsFiles = new Map(data);
  return {
    getNewestCommitDate: (file) => {
      const timestamp = trackedDocsFiles.get(file);
      if (!timestamp) throw new Error(`Failed to retrieve the git history for file "${file}"`);
      return new Date(timestamp);
    }
  };
};

const api = makeAPI([["src/content/docs/acp.mdx",1774631139000],["src/content/docs/agents.mdx",1774631139000],["src/content/docs/ar/acp.mdx",1774631139000],["src/content/docs/ar/agents.mdx",1774631139000],["src/content/docs/ar/cli.mdx",1774631139000],["src/content/docs/ar/commands.mdx",1774631139000],["src/content/docs/ar/config.mdx",1774631139000],["src/content/docs/ar/custom-tools.mdx",1774631139000],["src/content/docs/ar/ecosystem.mdx",1774631139000],["src/content/docs/ar/enterprise.mdx",1774631139000],["src/content/docs/ar/formatters.mdx",1774631139000],["src/content/docs/ar/github.mdx",1774631139000],["src/content/docs/ar/gitlab.mdx",1774631139000],["src/content/docs/ar/go.mdx",1774631139000],["src/content/docs/ar/ide.mdx",1774631139000],["src/content/docs/ar/index.mdx",1774631139000],["src/content/docs/ar/keybinds.mdx",1774631139000],["src/content/docs/ar/lsp.mdx",1774631139000],["src/content/docs/ar/mcp-servers.mdx",1774631139000],["src/content/docs/ar/models.mdx",1774631139000],["src/content/docs/ar/modes.mdx",1774631139000],["src/content/docs/ar/network.mdx",1774631139000],["src/content/docs/ar/permissions.mdx",1774631139000],["src/content/docs/ar/plugins.mdx",1774631139000],["src/content/docs/ar/providers.mdx",1774631139000],["src/content/docs/ar/rules.mdx",1774631139000],["src/content/docs/ar/sdk.mdx",1774631139000],["src/content/docs/ar/server.mdx",1774631139000],["src/content/docs/ar/share.mdx",1774631139000],["src/content/docs/ar/skills.mdx",1774631139000],["src/content/docs/ar/themes.mdx",1774631139000],["src/content/docs/ar/tools.mdx",1774631139000],["src/content/docs/ar/troubleshooting.mdx",1774631139000],["src/content/docs/ar/tui.mdx",1774631139000],["src/content/docs/ar/web.mdx",1774631139000],["src/content/docs/ar/windows-wsl.mdx",1774631139000],["src/content/docs/ar/zen.mdx",1774631139000],["src/content/docs/bs/acp.mdx",1774631139000],["src/content/docs/bs/agents.mdx",1774631139000],["src/content/docs/bs/cli.mdx",1774631139000],["src/content/docs/bs/commands.mdx",1774631139000],["src/content/docs/bs/config.mdx",1774631139000],["src/content/docs/bs/custom-tools.mdx",1774631139000],["src/content/docs/bs/ecosystem.mdx",1774631139000],["src/content/docs/bs/enterprise.mdx",1774631139000],["src/content/docs/bs/formatters.mdx",1774631139000],["src/content/docs/bs/github.mdx",1774631139000],["src/content/docs/bs/gitlab.mdx",1774631139000],["src/content/docs/bs/go.mdx",1774631139000],["src/content/docs/bs/ide.mdx",1774631139000],["src/content/docs/bs/index.mdx",1774631139000],["src/content/docs/bs/keybinds.mdx",1774631139000],["src/content/docs/bs/lsp.mdx",1774631139000],["src/content/docs/bs/mcp-servers.mdx",1774631139000],["src/content/docs/bs/models.mdx",1774631139000],["src/content/docs/bs/modes.mdx",1774631139000],["src/content/docs/bs/network.mdx",1774631139000],["src/content/docs/bs/permissions.mdx",1774631139000],["src/content/docs/bs/plugins.mdx",1774631139000],["src/content/docs/bs/providers.mdx",1774631139000],["src/content/docs/bs/rules.mdx",1774631139000],["src/content/docs/bs/sdk.mdx",1774631139000],["src/content/docs/bs/server.mdx",1774631139000],["src/content/docs/bs/share.mdx",1774631139000],["src/content/docs/bs/skills.mdx",1774631139000],["src/content/docs/bs/themes.mdx",1774631139000],["src/content/docs/bs/tools.mdx",1774631139000],["src/content/docs/bs/troubleshooting.mdx",1774631139000],["src/content/docs/bs/tui.mdx",1774631139000],["src/content/docs/bs/web.mdx",1774631139000],["src/content/docs/bs/windows-wsl.mdx",1774631139000],["src/content/docs/bs/zen.mdx",1774631139000],["src/content/docs/cli.mdx",1774631139000],["src/content/docs/commands.mdx",1774631139000],["src/content/docs/config.mdx",1774631139000],["src/content/docs/custom-tools.mdx",1774631139000],["src/content/docs/da/acp.mdx",1774631139000],["src/content/docs/da/agents.mdx",1774631139000],["src/content/docs/da/cli.mdx",1774631139000],["src/content/docs/da/commands.mdx",1774631139000],["src/content/docs/da/config.mdx",1774631139000],["src/content/docs/da/custom-tools.mdx",1774631139000],["src/content/docs/da/ecosystem.mdx",1774631139000],["src/content/docs/da/enterprise.mdx",1774631139000],["src/content/docs/da/formatters.mdx",1774631139000],["src/content/docs/da/github.mdx",1774631139000],["src/content/docs/da/gitlab.mdx",1774631139000],["src/content/docs/da/go.mdx",1774631139000],["src/content/docs/da/ide.mdx",1774631139000],["src/content/docs/da/index.mdx",1774631139000],["src/content/docs/da/keybinds.mdx",1774631139000],["src/content/docs/da/lsp.mdx",1774631139000],["src/content/docs/da/mcp-servers.mdx",1774631139000],["src/content/docs/da/models.mdx",1774631139000],["src/content/docs/da/modes.mdx",1774631139000],["src/content/docs/da/network.mdx",1774631139000],["src/content/docs/da/permissions.mdx",1774631139000],["src/content/docs/da/plugins.mdx",1774631139000],["src/content/docs/da/providers.mdx",1774631139000],["src/content/docs/da/rules.mdx",1774631139000],["src/content/docs/da/sdk.mdx",1774631139000],["src/content/docs/da/server.mdx",1774631139000],["src/content/docs/da/share.mdx",1774631139000],["src/content/docs/da/skills.mdx",1774631139000],["src/content/docs/da/themes.mdx",1774631139000],["src/content/docs/da/tools.mdx",1774631139000],["src/content/docs/da/troubleshooting.mdx",1774631139000],["src/content/docs/da/tui.mdx",1774631139000],["src/content/docs/da/web.mdx",1774631139000],["src/content/docs/da/windows-wsl.mdx",1774631139000],["src/content/docs/da/zen.mdx",1774631139000],["src/content/docs/de/acp.mdx",1774631139000],["src/content/docs/de/agents.mdx",1774631139000],["src/content/docs/de/cli.mdx",1774631139000],["src/content/docs/de/commands.mdx",1774631139000],["src/content/docs/de/config.mdx",1774631139000],["src/content/docs/de/custom-tools.mdx",1774631139000],["src/content/docs/de/ecosystem.mdx",1774631139000],["src/content/docs/de/enterprise.mdx",1774631139000],["src/content/docs/de/formatters.mdx",1774631139000],["src/content/docs/de/github.mdx",1774631139000],["src/content/docs/de/gitlab.mdx",1774631139000],["src/content/docs/de/go.mdx",1774631139000],["src/content/docs/de/ide.mdx",1774631139000],["src/content/docs/de/index.mdx",1774631139000],["src/content/docs/de/keybinds.mdx",1774631139000],["src/content/docs/de/lsp.mdx",1774631139000],["src/content/docs/de/mcp-servers.mdx",1774631139000],["src/content/docs/de/models.mdx",1774631139000],["src/content/docs/de/modes.mdx",1774631139000],["src/content/docs/de/network.mdx",1774631139000],["src/content/docs/de/permissions.mdx",1774631139000],["src/content/docs/de/plugins.mdx",1774631139000],["src/content/docs/de/providers.mdx",1774631139000],["src/content/docs/de/rules.mdx",1774631139000],["src/content/docs/de/sdk.mdx",1774631139000],["src/content/docs/de/server.mdx",1774631139000],["src/content/docs/de/share.mdx",1774631139000],["src/content/docs/de/skills.mdx",1774631139000],["src/content/docs/de/themes.mdx",1774631139000],["src/content/docs/de/tools.mdx",1774631139000],["src/content/docs/de/troubleshooting.mdx",1774631139000],["src/content/docs/de/tui.mdx",1774631139000],["src/content/docs/de/web.mdx",1774631139000],["src/content/docs/de/windows-wsl.mdx",1774631139000],["src/content/docs/de/zen.mdx",1774631139000],["src/content/docs/ecosystem.mdx",1774631139000],["src/content/docs/enterprise.mdx",1774631139000],["src/content/docs/es/acp.mdx",1774631139000],["src/content/docs/es/agents.mdx",1774631139000],["src/content/docs/es/cli.mdx",1774631139000],["src/content/docs/es/commands.mdx",1774631139000],["src/content/docs/es/config.mdx",1774631139000],["src/content/docs/es/custom-tools.mdx",1774631139000],["src/content/docs/es/ecosystem.mdx",1774631139000],["src/content/docs/es/enterprise.mdx",1774631139000],["src/content/docs/es/formatters.mdx",1774631139000],["src/content/docs/es/github.mdx",1774631139000],["src/content/docs/es/gitlab.mdx",1774631139000],["src/content/docs/es/go.mdx",1774631139000],["src/content/docs/es/ide.mdx",1774631139000],["src/content/docs/es/index.mdx",1774631139000],["src/content/docs/es/keybinds.mdx",1774631139000],["src/content/docs/es/lsp.mdx",1774631139000],["src/content/docs/es/mcp-servers.mdx",1774631139000],["src/content/docs/es/models.mdx",1774631139000],["src/content/docs/es/modes.mdx",1774631139000],["src/content/docs/es/network.mdx",1774631139000],["src/content/docs/es/permissions.mdx",1774631139000],["src/content/docs/es/plugins.mdx",1774631139000],["src/content/docs/es/providers.mdx",1774631139000],["src/content/docs/es/rules.mdx",1774631139000],["src/content/docs/es/sdk.mdx",1774631139000],["src/content/docs/es/server.mdx",1774631139000],["src/content/docs/es/share.mdx",1774631139000],["src/content/docs/es/skills.mdx",1774631139000],["src/content/docs/es/themes.mdx",1774631139000],["src/content/docs/es/tools.mdx",1774631139000],["src/content/docs/es/troubleshooting.mdx",1774631139000],["src/content/docs/es/tui.mdx",1774631139000],["src/content/docs/es/web.mdx",1774631139000],["src/content/docs/es/windows-wsl.mdx",1774631139000],["src/content/docs/es/zen.mdx",1774631139000],["src/content/docs/formatters.mdx",1774631139000],["src/content/docs/fr/acp.mdx",1774631139000],["src/content/docs/fr/agents.mdx",1774631139000],["src/content/docs/fr/cli.mdx",1774631139000],["src/content/docs/fr/commands.mdx",1774631139000],["src/content/docs/fr/config.mdx",1774631139000],["src/content/docs/fr/custom-tools.mdx",1774631139000],["src/content/docs/fr/ecosystem.mdx",1774631139000],["src/content/docs/fr/enterprise.mdx",1774631139000],["src/content/docs/fr/formatters.mdx",1774631139000],["src/content/docs/fr/github.mdx",1774631139000],["src/content/docs/fr/gitlab.mdx",1774631139000],["src/content/docs/fr/go.mdx",1774631139000],["src/content/docs/fr/ide.mdx",1774631139000],["src/content/docs/fr/index.mdx",1774631139000],["src/content/docs/fr/keybinds.mdx",1774631139000],["src/content/docs/fr/lsp.mdx",1774631139000],["src/content/docs/fr/mcp-servers.mdx",1774631139000],["src/content/docs/fr/models.mdx",1774631139000],["src/content/docs/fr/modes.mdx",1774631139000],["src/content/docs/fr/network.mdx",1774631139000],["src/content/docs/fr/permissions.mdx",1774631139000],["src/content/docs/fr/plugins.mdx",1774631139000],["src/content/docs/fr/providers.mdx",1774631139000],["src/content/docs/fr/rules.mdx",1774631139000],["src/content/docs/fr/sdk.mdx",1774631139000],["src/content/docs/fr/server.mdx",1774631139000],["src/content/docs/fr/share.mdx",1774631139000],["src/content/docs/fr/skills.mdx",1774631139000],["src/content/docs/fr/themes.mdx",1774631139000],["src/content/docs/fr/tools.mdx",1774631139000],["src/content/docs/fr/troubleshooting.mdx",1774631139000],["src/content/docs/fr/tui.mdx",1774631139000],["src/content/docs/fr/web.mdx",1774631139000],["src/content/docs/fr/windows-wsl.mdx",1774631139000],["src/content/docs/fr/zen.mdx",1774631139000],["src/content/docs/github.mdx",1774631139000],["src/content/docs/gitlab.mdx",1774631139000],["src/content/docs/go.mdx",1774631139000],["src/content/docs/ide.mdx",1774631139000],["src/content/docs/index.mdx",1774631139000],["src/content/docs/it/acp.mdx",1774631139000],["src/content/docs/it/agents.mdx",1774631139000],["src/content/docs/it/cli.mdx",1774631139000],["src/content/docs/it/commands.mdx",1774631139000],["src/content/docs/it/config.mdx",1774631139000],["src/content/docs/it/custom-tools.mdx",1774631139000],["src/content/docs/it/ecosystem.mdx",1774631139000],["src/content/docs/it/enterprise.mdx",1774631139000],["src/content/docs/it/formatters.mdx",1774631139000],["src/content/docs/it/github.mdx",1774631139000],["src/content/docs/it/gitlab.mdx",1774631139000],["src/content/docs/it/go.mdx",1774631139000],["src/content/docs/it/ide.mdx",1774631139000],["src/content/docs/it/index.mdx",1774631139000],["src/content/docs/it/keybinds.mdx",1774631139000],["src/content/docs/it/lsp.mdx",1774631139000],["src/content/docs/it/mcp-servers.mdx",1774631139000],["src/content/docs/it/models.mdx",1774631139000],["src/content/docs/it/modes.mdx",1774631139000],["src/content/docs/it/network.mdx",1774631139000],["src/content/docs/it/permissions.mdx",1774631139000],["src/content/docs/it/plugins.mdx",1774631139000],["src/content/docs/it/providers.mdx",1774631139000],["src/content/docs/it/rules.mdx",1774631139000],["src/content/docs/it/sdk.mdx",1774631139000],["src/content/docs/it/server.mdx",1774631139000],["src/content/docs/it/share.mdx",1774631139000],["src/content/docs/it/skills.mdx",1774631139000],["src/content/docs/it/themes.mdx",1774631139000],["src/content/docs/it/tools.mdx",1774631139000],["src/content/docs/it/troubleshooting.mdx",1774631139000],["src/content/docs/it/tui.mdx",1774631139000],["src/content/docs/it/web.mdx",1774631139000],["src/content/docs/it/windows-wsl.mdx",1774631139000],["src/content/docs/it/zen.mdx",1774631139000],["src/content/docs/ja/acp.mdx",1774631139000],["src/content/docs/ja/agents.mdx",1774631139000],["src/content/docs/ja/cli.mdx",1774631139000],["src/content/docs/ja/commands.mdx",1774631139000],["src/content/docs/ja/config.mdx",1774631139000],["src/content/docs/ja/custom-tools.mdx",1774631139000],["src/content/docs/ja/ecosystem.mdx",1774631139000],["src/content/docs/ja/enterprise.mdx",1774631139000],["src/content/docs/ja/formatters.mdx",1774631139000],["src/content/docs/ja/github.mdx",1774631139000],["src/content/docs/ja/gitlab.mdx",1774631139000],["src/content/docs/ja/go.mdx",1774631139000],["src/content/docs/ja/ide.mdx",1774631139000],["src/content/docs/ja/index.mdx",1774631139000],["src/content/docs/ja/keybinds.mdx",1774631139000],["src/content/docs/ja/lsp.mdx",1774631139000],["src/content/docs/ja/mcp-servers.mdx",1774631139000],["src/content/docs/ja/models.mdx",1774631139000],["src/content/docs/ja/modes.mdx",1774631139000],["src/content/docs/ja/network.mdx",1774631139000],["src/content/docs/ja/permissions.mdx",1774631139000],["src/content/docs/ja/plugins.mdx",1774631139000],["src/content/docs/ja/providers.mdx",1774631139000],["src/content/docs/ja/rules.mdx",1774631139000],["src/content/docs/ja/sdk.mdx",1774631139000],["src/content/docs/ja/server.mdx",1774631139000],["src/content/docs/ja/share.mdx",1774631139000],["src/content/docs/ja/skills.mdx",1774631139000],["src/content/docs/ja/themes.mdx",1774631139000],["src/content/docs/ja/tools.mdx",1774631139000],["src/content/docs/ja/troubleshooting.mdx",1774631139000],["src/content/docs/ja/tui.mdx",1774631139000],["src/content/docs/ja/web.mdx",1774631139000],["src/content/docs/ja/windows-wsl.mdx",1774631139000],["src/content/docs/ja/zen.mdx",1774631139000],["src/content/docs/keybinds.mdx",1774631139000],["src/content/docs/ko/acp.mdx",1774631139000],["src/content/docs/ko/agents.mdx",1774631139000],["src/content/docs/ko/cli.mdx",1774631139000],["src/content/docs/ko/commands.mdx",1774631139000],["src/content/docs/ko/config.mdx",1774631139000],["src/content/docs/ko/custom-tools.mdx",1774631139000],["src/content/docs/ko/ecosystem.mdx",1774631139000],["src/content/docs/ko/enterprise.mdx",1774631139000],["src/content/docs/ko/formatters.mdx",1774631139000],["src/content/docs/ko/github.mdx",1774631139000],["src/content/docs/ko/gitlab.mdx",1774631139000],["src/content/docs/ko/go.mdx",1774631139000],["src/content/docs/ko/ide.mdx",1774631139000],["src/content/docs/ko/index.mdx",1774631139000],["src/content/docs/ko/keybinds.mdx",1774631139000],["src/content/docs/ko/lsp.mdx",1774631139000],["src/content/docs/ko/mcp-servers.mdx",1774631139000],["src/content/docs/ko/models.mdx",1774631139000],["src/content/docs/ko/modes.mdx",1774631139000],["src/content/docs/ko/network.mdx",1774631139000],["src/content/docs/ko/permissions.mdx",1774631139000],["src/content/docs/ko/plugins.mdx",1774631139000],["src/content/docs/ko/providers.mdx",1774631139000],["src/content/docs/ko/rules.mdx",1774631139000],["src/content/docs/ko/sdk.mdx",1774631139000],["src/content/docs/ko/server.mdx",1774631139000],["src/content/docs/ko/share.mdx",1774631139000],["src/content/docs/ko/skills.mdx",1774631139000],["src/content/docs/ko/themes.mdx",1774631139000],["src/content/docs/ko/tools.mdx",1774631139000],["src/content/docs/ko/troubleshooting.mdx",1774631139000],["src/content/docs/ko/tui.mdx",1774631139000],["src/content/docs/ko/web.mdx",1774631139000],["src/content/docs/ko/windows-wsl.mdx",1774631139000],["src/content/docs/ko/zen.mdx",1774631139000],["src/content/docs/lsp.mdx",1774631139000],["src/content/docs/mcp-servers.mdx",1774631139000],["src/content/docs/models.mdx",1774631139000],["src/content/docs/modes.mdx",1774631139000],["src/content/docs/nb/acp.mdx",1774631139000],["src/content/docs/nb/agents.mdx",1774631139000],["src/content/docs/nb/cli.mdx",1774631139000],["src/content/docs/nb/commands.mdx",1774631139000],["src/content/docs/nb/config.mdx",1774631139000],["src/content/docs/nb/custom-tools.mdx",1774631139000],["src/content/docs/nb/ecosystem.mdx",1774631139000],["src/content/docs/nb/enterprise.mdx",1774631139000],["src/content/docs/nb/formatters.mdx",1774631139000],["src/content/docs/nb/github.mdx",1774631139000],["src/content/docs/nb/gitlab.mdx",1774631139000],["src/content/docs/nb/go.mdx",1774631139000],["src/content/docs/nb/ide.mdx",1774631139000],["src/content/docs/nb/index.mdx",1774631139000],["src/content/docs/nb/keybinds.mdx",1774631139000],["src/content/docs/nb/lsp.mdx",1774631139000],["src/content/docs/nb/mcp-servers.mdx",1774631139000],["src/content/docs/nb/models.mdx",1774631139000],["src/content/docs/nb/modes.mdx",1774631139000],["src/content/docs/nb/network.mdx",1774631139000],["src/content/docs/nb/permissions.mdx",1774631139000],["src/content/docs/nb/plugins.mdx",1774631139000],["src/content/docs/nb/providers.mdx",1774631139000],["src/content/docs/nb/rules.mdx",1774631139000],["src/content/docs/nb/sdk.mdx",1774631139000],["src/content/docs/nb/server.mdx",1774631139000],["src/content/docs/nb/share.mdx",1774631139000],["src/content/docs/nb/skills.mdx",1774631139000],["src/content/docs/nb/themes.mdx",1774631139000],["src/content/docs/nb/tools.mdx",1774631139000],["src/content/docs/nb/troubleshooting.mdx",1774631139000],["src/content/docs/nb/tui.mdx",1774631139000],["src/content/docs/nb/web.mdx",1774631139000],["src/content/docs/nb/windows-wsl.mdx",1774631139000],["src/content/docs/nb/zen.mdx",1774631139000],["src/content/docs/network.mdx",1774631139000],["src/content/docs/permissions.mdx",1774631139000],["src/content/docs/pl/acp.mdx",1774631139000],["src/content/docs/pl/agents.mdx",1774631139000],["src/content/docs/pl/cli.mdx",1774631139000],["src/content/docs/pl/commands.mdx",1774631139000],["src/content/docs/pl/config.mdx",1774631139000],["src/content/docs/pl/custom-tools.mdx",1774631139000],["src/content/docs/pl/ecosystem.mdx",1774631139000],["src/content/docs/pl/enterprise.mdx",1774631139000],["src/content/docs/pl/formatters.mdx",1774631139000],["src/content/docs/pl/github.mdx",1774631139000],["src/content/docs/pl/gitlab.mdx",1774631139000],["src/content/docs/pl/go.mdx",1774631139000],["src/content/docs/pl/ide.mdx",1774631139000],["src/content/docs/pl/index.mdx",1774631139000],["src/content/docs/pl/keybinds.mdx",1774631139000],["src/content/docs/pl/lsp.mdx",1774631139000],["src/content/docs/pl/mcp-servers.mdx",1774631139000],["src/content/docs/pl/models.mdx",1774631139000],["src/content/docs/pl/modes.mdx",1774631139000],["src/content/docs/pl/network.mdx",1774631139000],["src/content/docs/pl/permissions.mdx",1774631139000],["src/content/docs/pl/plugins.mdx",1774631139000],["src/content/docs/pl/providers.mdx",1774631139000],["src/content/docs/pl/rules.mdx",1774631139000],["src/content/docs/pl/sdk.mdx",1774631139000],["src/content/docs/pl/server.mdx",1774631139000],["src/content/docs/pl/share.mdx",1774631139000],["src/content/docs/pl/skills.mdx",1774631139000],["src/content/docs/pl/themes.mdx",1774631139000],["src/content/docs/pl/tools.mdx",1774631139000],["src/content/docs/pl/troubleshooting.mdx",1774631139000],["src/content/docs/pl/tui.mdx",1774631139000],["src/content/docs/pl/web.mdx",1774631139000],["src/content/docs/pl/windows-wsl.mdx",1774631139000],["src/content/docs/pl/zen.mdx",1774631139000],["src/content/docs/plugins.mdx",1774631139000],["src/content/docs/providers.mdx",1774631139000],["src/content/docs/pt-br/acp.mdx",1774631139000],["src/content/docs/pt-br/agents.mdx",1774631139000],["src/content/docs/pt-br/cli.mdx",1774631139000],["src/content/docs/pt-br/commands.mdx",1774631139000],["src/content/docs/pt-br/config.mdx",1774631139000],["src/content/docs/pt-br/custom-tools.mdx",1774631139000],["src/content/docs/pt-br/ecosystem.mdx",1774631139000],["src/content/docs/pt-br/enterprise.mdx",1774631139000],["src/content/docs/pt-br/formatters.mdx",1774631139000],["src/content/docs/pt-br/github.mdx",1774631139000],["src/content/docs/pt-br/gitlab.mdx",1774631139000],["src/content/docs/pt-br/go.mdx",1774631139000],["src/content/docs/pt-br/ide.mdx",1774631139000],["src/content/docs/pt-br/index.mdx",1774631139000],["src/content/docs/pt-br/keybinds.mdx",1774631139000],["src/content/docs/pt-br/lsp.mdx",1774631139000],["src/content/docs/pt-br/mcp-servers.mdx",1774631139000],["src/content/docs/pt-br/models.mdx",1774631139000],["src/content/docs/pt-br/modes.mdx",1774631139000],["src/content/docs/pt-br/network.mdx",1774631139000],["src/content/docs/pt-br/permissions.mdx",1774631139000],["src/content/docs/pt-br/plugins.mdx",1774631139000],["src/content/docs/pt-br/providers.mdx",1774631139000],["src/content/docs/pt-br/rules.mdx",1774631139000],["src/content/docs/pt-br/sdk.mdx",1774631139000],["src/content/docs/pt-br/server.mdx",1774631139000],["src/content/docs/pt-br/share.mdx",1774631139000],["src/content/docs/pt-br/skills.mdx",1774631139000],["src/content/docs/pt-br/themes.mdx",1774631139000],["src/content/docs/pt-br/tools.mdx",1774631139000],["src/content/docs/pt-br/troubleshooting.mdx",1774631139000],["src/content/docs/pt-br/tui.mdx",1774631139000],["src/content/docs/pt-br/web.mdx",1774631139000],["src/content/docs/pt-br/windows-wsl.mdx",1774631139000],["src/content/docs/pt-br/zen.mdx",1774631139000],["src/content/docs/ru/acp.mdx",1774631139000],["src/content/docs/ru/agents.mdx",1774631139000],["src/content/docs/ru/cli.mdx",1774631139000],["src/content/docs/ru/commands.mdx",1774631139000],["src/content/docs/ru/config.mdx",1774631139000],["src/content/docs/ru/custom-tools.mdx",1774631139000],["src/content/docs/ru/ecosystem.mdx",1774631139000],["src/content/docs/ru/enterprise.mdx",1774631139000],["src/content/docs/ru/formatters.mdx",1774631139000],["src/content/docs/ru/github.mdx",1774631139000],["src/content/docs/ru/gitlab.mdx",1774631139000],["src/content/docs/ru/go.mdx",1774631139000],["src/content/docs/ru/ide.mdx",1774631139000],["src/content/docs/ru/index.mdx",1774631139000],["src/content/docs/ru/keybinds.mdx",1774631139000],["src/content/docs/ru/lsp.mdx",1774631139000],["src/content/docs/ru/mcp-servers.mdx",1774631139000],["src/content/docs/ru/models.mdx",1774631139000],["src/content/docs/ru/modes.mdx",1774631139000],["src/content/docs/ru/network.mdx",1774631139000],["src/content/docs/ru/permissions.mdx",1774631139000],["src/content/docs/ru/plugins.mdx",1774631139000],["src/content/docs/ru/providers.mdx",1774631139000],["src/content/docs/ru/rules.mdx",1774631139000],["src/content/docs/ru/sdk.mdx",1774631139000],["src/content/docs/ru/server.mdx",1774631139000],["src/content/docs/ru/share.mdx",1774631139000],["src/content/docs/ru/skills.mdx",1774631139000],["src/content/docs/ru/themes.mdx",1774631139000],["src/content/docs/ru/tools.mdx",1774631139000],["src/content/docs/ru/troubleshooting.mdx",1774631139000],["src/content/docs/ru/tui.mdx",1774631139000],["src/content/docs/ru/web.mdx",1774631139000],["src/content/docs/ru/windows-wsl.mdx",1774631139000],["src/content/docs/ru/zen.mdx",1774631139000],["src/content/docs/rules.mdx",1774631139000],["src/content/docs/sdk.mdx",1774631139000],["src/content/docs/server.mdx",1774631139000],["src/content/docs/share.mdx",1774631139000],["src/content/docs/skills.mdx",1774631139000],["src/content/docs/th/acp.mdx",1774631139000],["src/content/docs/th/agents.mdx",1774631139000],["src/content/docs/th/cli.mdx",1774631139000],["src/content/docs/th/commands.mdx",1774631139000],["src/content/docs/th/config.mdx",1774631139000],["src/content/docs/th/custom-tools.mdx",1774631139000],["src/content/docs/th/ecosystem.mdx",1774631139000],["src/content/docs/th/enterprise.mdx",1774631139000],["src/content/docs/th/formatters.mdx",1774631139000],["src/content/docs/th/github.mdx",1774631139000],["src/content/docs/th/gitlab.mdx",1774631139000],["src/content/docs/th/go.mdx",1774631139000],["src/content/docs/th/ide.mdx",1774631139000],["src/content/docs/th/index.mdx",1774631139000],["src/content/docs/th/keybinds.mdx",1774631139000],["src/content/docs/th/lsp.mdx",1774631139000],["src/content/docs/th/mcp-servers.mdx",1774631139000],["src/content/docs/th/models.mdx",1774631139000],["src/content/docs/th/modes.mdx",1774631139000],["src/content/docs/th/network.mdx",1774631139000],["src/content/docs/th/permissions.mdx",1774631139000],["src/content/docs/th/plugins.mdx",1774631139000],["src/content/docs/th/providers.mdx",1774631139000],["src/content/docs/th/rules.mdx",1774631139000],["src/content/docs/th/sdk.mdx",1774631139000],["src/content/docs/th/server.mdx",1774631139000],["src/content/docs/th/share.mdx",1774631139000],["src/content/docs/th/skills.mdx",1774631139000],["src/content/docs/th/themes.mdx",1774631139000],["src/content/docs/th/tools.mdx",1774631139000],["src/content/docs/th/troubleshooting.mdx",1774631139000],["src/content/docs/th/tui.mdx",1774631139000],["src/content/docs/th/web.mdx",1774631139000],["src/content/docs/th/windows-wsl.mdx",1774631139000],["src/content/docs/th/zen.mdx",1774631139000],["src/content/docs/themes.mdx",1774631139000],["src/content/docs/tools.mdx",1774631139000],["src/content/docs/tr/acp.mdx",1774631139000],["src/content/docs/tr/agents.mdx",1774631139000],["src/content/docs/tr/cli.mdx",1774631139000],["src/content/docs/tr/commands.mdx",1774631139000],["src/content/docs/tr/config.mdx",1774631139000],["src/content/docs/tr/custom-tools.mdx",1774631139000],["src/content/docs/tr/ecosystem.mdx",1774631139000],["src/content/docs/tr/enterprise.mdx",1774631139000],["src/content/docs/tr/formatters.mdx",1774631139000],["src/content/docs/tr/github.mdx",1774631139000],["src/content/docs/tr/gitlab.mdx",1774631139000],["src/content/docs/tr/go.mdx",1774631139000],["src/content/docs/tr/ide.mdx",1774631139000],["src/content/docs/tr/index.mdx",1774631139000],["src/content/docs/tr/keybinds.mdx",1774631139000],["src/content/docs/tr/lsp.mdx",1774631139000],["src/content/docs/tr/mcp-servers.mdx",1774631139000],["src/content/docs/tr/models.mdx",1774631139000],["src/content/docs/tr/modes.mdx",1774631139000],["src/content/docs/tr/network.mdx",1774631139000],["src/content/docs/tr/permissions.mdx",1774631139000],["src/content/docs/tr/plugins.mdx",1774631139000],["src/content/docs/tr/providers.mdx",1774631139000],["src/content/docs/tr/rules.mdx",1774631139000],["src/content/docs/tr/sdk.mdx",1774631139000],["src/content/docs/tr/server.mdx",1774631139000],["src/content/docs/tr/share.mdx",1774631139000],["src/content/docs/tr/skills.mdx",1774631139000],["src/content/docs/tr/themes.mdx",1774631139000],["src/content/docs/tr/tools.mdx",1774631139000],["src/content/docs/tr/troubleshooting.mdx",1774631139000],["src/content/docs/tr/tui.mdx",1774631139000],["src/content/docs/tr/web.mdx",1774631139000],["src/content/docs/tr/windows-wsl.mdx",1774631139000],["src/content/docs/tr/zen.mdx",1774631139000],["src/content/docs/troubleshooting.mdx",1774631139000],["src/content/docs/tui.mdx",1774631139000],["src/content/docs/web.mdx",1774631139000],["src/content/docs/windows-wsl.mdx",1774631139000],["src/content/docs/zen.mdx",1774631139000],["src/content/docs/zh-cn/acp.mdx",1774631139000],["src/content/docs/zh-cn/agents.mdx",1774631139000],["src/content/docs/zh-cn/cli.mdx",1774631139000],["src/content/docs/zh-cn/commands.mdx",1774631139000],["src/content/docs/zh-cn/config.mdx",1774631139000],["src/content/docs/zh-cn/custom-tools.mdx",1774631139000],["src/content/docs/zh-cn/ecosystem.mdx",1774631139000],["src/content/docs/zh-cn/enterprise.mdx",1774631139000],["src/content/docs/zh-cn/formatters.mdx",1774631139000],["src/content/docs/zh-cn/github.mdx",1774631139000],["src/content/docs/zh-cn/gitlab.mdx",1774631139000],["src/content/docs/zh-cn/go.mdx",1774631139000],["src/content/docs/zh-cn/ide.mdx",1774631139000],["src/content/docs/zh-cn/index.mdx",1774631139000],["src/content/docs/zh-cn/keybinds.mdx",1774631139000],["src/content/docs/zh-cn/lsp.mdx",1774631139000],["src/content/docs/zh-cn/mcp-servers.mdx",1774631139000],["src/content/docs/zh-cn/models.mdx",1774631139000],["src/content/docs/zh-cn/modes.mdx",1774631139000],["src/content/docs/zh-cn/network.mdx",1774631139000],["src/content/docs/zh-cn/permissions.mdx",1774631139000],["src/content/docs/zh-cn/plugins.mdx",1774631139000],["src/content/docs/zh-cn/providers.mdx",1774631139000],["src/content/docs/zh-cn/rules.mdx",1774631139000],["src/content/docs/zh-cn/sdk.mdx",1774631139000],["src/content/docs/zh-cn/server.mdx",1774631139000],["src/content/docs/zh-cn/share.mdx",1774631139000],["src/content/docs/zh-cn/skills.mdx",1774631139000],["src/content/docs/zh-cn/themes.mdx",1774631139000],["src/content/docs/zh-cn/tools.mdx",1774631139000],["src/content/docs/zh-cn/troubleshooting.mdx",1774631139000],["src/content/docs/zh-cn/tui.mdx",1774631139000],["src/content/docs/zh-cn/web.mdx",1774631139000],["src/content/docs/zh-cn/windows-wsl.mdx",1774631139000],["src/content/docs/zh-cn/zen.mdx",1774631139000],["src/content/docs/zh-tw/acp.mdx",1774631139000],["src/content/docs/zh-tw/agents.mdx",1774631139000],["src/content/docs/zh-tw/cli.mdx",1774631139000],["src/content/docs/zh-tw/commands.mdx",1774631139000],["src/content/docs/zh-tw/config.mdx",1774631139000],["src/content/docs/zh-tw/custom-tools.mdx",1774631139000],["src/content/docs/zh-tw/ecosystem.mdx",1774631139000],["src/content/docs/zh-tw/enterprise.mdx",1774631139000],["src/content/docs/zh-tw/formatters.mdx",1774631139000],["src/content/docs/zh-tw/github.mdx",1774631139000],["src/content/docs/zh-tw/gitlab.mdx",1774631139000],["src/content/docs/zh-tw/go.mdx",1774631139000],["src/content/docs/zh-tw/ide.mdx",1774631139000],["src/content/docs/zh-tw/index.mdx",1774631139000],["src/content/docs/zh-tw/keybinds.mdx",1774631139000],["src/content/docs/zh-tw/lsp.mdx",1774631139000],["src/content/docs/zh-tw/mcp-servers.mdx",1774631139000],["src/content/docs/zh-tw/models.mdx",1774631139000],["src/content/docs/zh-tw/modes.mdx",1774631139000],["src/content/docs/zh-tw/network.mdx",1774631139000],["src/content/docs/zh-tw/permissions.mdx",1774631139000],["src/content/docs/zh-tw/plugins.mdx",1774631139000],["src/content/docs/zh-tw/providers.mdx",1774631139000],["src/content/docs/zh-tw/rules.mdx",1774631139000],["src/content/docs/zh-tw/sdk.mdx",1774631139000],["src/content/docs/zh-tw/server.mdx",1774631139000],["src/content/docs/zh-tw/share.mdx",1774631139000],["src/content/docs/zh-tw/skills.mdx",1774631139000],["src/content/docs/zh-tw/themes.mdx",1774631139000],["src/content/docs/zh-tw/tools.mdx",1774631139000],["src/content/docs/zh-tw/troubleshooting.mdx",1774631139000],["src/content/docs/zh-tw/tui.mdx",1774631139000],["src/content/docs/zh-tw/web.mdx",1774631139000],["src/content/docs/zh-tw/windows-wsl.mdx",1774631139000],["src/content/docs/zh-tw/zen.mdx",1774631139000]]);const getNewestCommitDate = api.getNewestCommitDate;

const version = "0.34.3";

const HeadConfigSchema = () => arrayType(
  objectType({
    /** Name of the HTML tag to add to `<head>`, e.g. `'meta'`, `'link'`, or `'script'`. */
    tag: enumType(["title", "base", "link", "style", "meta", "script", "noscript", "template"]),
    /** Attributes to set on the tag, e.g. `{ rel: 'stylesheet', href: '/custom.css' }`. */
    attrs: recordType(unionType([stringType(), booleanType(), undefinedType()])).optional(),
    /** Content to place inside the tag (optional). */
    content: stringType().optional()
  })
).default([]);

const canonicalTrailingSlashStrategies = {
  always: ensureTrailingSlash,
  never: stripTrailingSlash,
  ignore: ensureTrailingSlash
};
function formatCanonical(href, opts) {
  return canonicalTrailingSlashStrategies[opts.trailingSlash](href);
}

const HeadSchema = HeadConfigSchema();
function getHead({ entry, lang }, context, siteTitle) {
  const { data } = entry;
  const canonical = context.site ? new URL(context.url.pathname, context.site) : void 0;
  const canonicalHref = canonical?.href ? formatCanonical(canonical.href, {
    trailingSlash: project.trailingSlash
  }) : void 0;
  const description = data.description || starlightConfig.description;
  const headDefaults = [
    { tag: "meta", attrs: { charset: "utf-8" } },
    {
      tag: "meta",
      attrs: { name: "viewport", content: "width=device-width, initial-scale=1" }
    },
    { tag: "title", content: `${data.title} ${starlightConfig.titleDelimiter} ${siteTitle}` },
    { tag: "link", attrs: { rel: "canonical", href: canonicalHref } },
    { tag: "meta", attrs: { name: "generator", content: context.generator } },
    {
      tag: "meta",
      attrs: { name: "generator", content: `Starlight v${version}` }
    },
    // Favicon
    {
      tag: "link",
      attrs: {
        rel: "shortcut icon",
        href: fileWithBase(starlightConfig.favicon.href),
        type: starlightConfig.favicon.type
      }
    },
    // OpenGraph Tags
    { tag: "meta", attrs: { property: "og:title", content: data.title } },
    { tag: "meta", attrs: { property: "og:type", content: "article" } },
    { tag: "meta", attrs: { property: "og:url", content: canonicalHref } },
    { tag: "meta", attrs: { property: "og:locale", content: lang } },
    { tag: "meta", attrs: { property: "og:description", content: description } },
    { tag: "meta", attrs: { property: "og:site_name", content: siteTitle } },
    // Twitter Tags
    {
      tag: "meta",
      attrs: { name: "twitter:card", content: "summary_large_image" }
    }
  ];
  if (description)
    headDefaults.push({
      tag: "meta",
      attrs: { name: "description", content: description }
    });
  if (canonical && starlightConfig.isMultilingual) {
    for (const locale in starlightConfig.locales) {
      const localeOpts = starlightConfig.locales[locale];
      if (!localeOpts) continue;
      headDefaults.push({
        tag: "link",
        attrs: {
          rel: "alternate",
          hreflang: localeOpts.lang,
          href: localizedUrl(canonical, locale).href
        }
      });
    }
  }
  if (context.site) {
    headDefaults.push({
      tag: "link",
      attrs: {
        rel: "sitemap",
        href: fileWithBase("/sitemap-index.xml")
      }
    });
  }
  const twitterLink = starlightConfig.social?.find(({ icon }) => icon === "twitter" || icon === "x.com");
  if (twitterLink) {
    headDefaults.push({
      tag: "meta",
      attrs: {
        name: "twitter:site",
        content: new URL(twitterLink.href).pathname.replace("/", "@")
      }
    });
  }
  return createHead(headDefaults, starlightConfig.head, data.head);
}
function createHead(defaults, ...heads) {
  let head = HeadSchema.parse(defaults);
  for (const next of heads) {
    head = mergeHead(head, next);
  }
  return sortHead(head);
}
function hasTag(head, entry) {
  switch (entry.tag) {
    case "title":
      return head.some(({ tag }) => tag === "title");
    case "meta":
      return hasOneOf(head, entry, ["name", "property", "http-equiv"]);
    case "link":
      return head.some(
        ({ attrs }) => entry.attrs?.rel === "canonical" && attrs?.rel === "canonical"
      );
    default:
      return false;
  }
}
function hasOneOf(head, entry, keys) {
  const attr = getAttr(keys, entry);
  if (!attr) return false;
  const [key, val] = attr;
  return head.some(({ tag, attrs }) => tag === entry.tag && attrs?.[key] === val);
}
function getAttr(keys, entry) {
  let attr;
  for (const key of keys) {
    const val = entry.attrs?.[key];
    if (val) {
      attr = [key, val];
      break;
    }
  }
  return attr;
}
function mergeHead(oldHead, newHead) {
  return [...oldHead.filter((tag) => !hasTag(newHead, tag)), ...newHead];
}
function sortHead(head) {
  return head.sort((a, b) => {
    const aImportance = getImportance(a);
    const bImportance = getImportance(b);
    return aImportance > bImportance ? -1 : bImportance > aImportance ? 1 : 0;
  });
}
function getImportance(entry) {
  if (entry.tag === "meta" && entry.attrs && ("charset" in entry.attrs || "http-equiv" in entry.attrs || entry.attrs.name === "viewport")) {
    return 100;
  }
  if (entry.tag === "title") return 90;
  if (entry.tag !== "meta") {
    if (entry.tag === "link" && entry.attrs && "rel" in entry.attrs && entry.attrs.rel === "shortcut icon") {
      return 70;
    }
    return 80;
  }
  return 0;
}

async function getRoute(context) {
  return "slug" in context.params && getRouteBySlugParam(context.params.slug) || await get404Route(context.locals);
}
async function useRouteData(context, route, { Content, headings }) {
  const routeData = generateRouteData({ props: { ...route, headings }, context });
  return { ...routeData, Content };
}
function generateRouteData({
  props,
  context
}) {
  const { entry, locale, lang } = props;
  const sidebar = getSidebar(context.url.pathname, locale);
  const siteTitle = getSiteTitle(lang);
  return {
    ...props,
    siteTitle,
    siteTitleHref: getSiteTitleHref(locale),
    sidebar,
    hasSidebar: entry.data.template !== "splash",
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    toc: getToC(props),
    lastUpdated: getLastUpdated(props),
    editUrl: getEditUrl(props),
    head: getHead(props, context, siteTitle)
  };
}
function getToC({ entry, lang, headings }) {
  const tocConfig = entry.data.template === "splash" ? false : entry.data.tableOfContents !== void 0 ? entry.data.tableOfContents : starlightConfig.tableOfContents;
  if (!tocConfig) return;
  const t = useTranslations(lang);
  return {
    ...tocConfig,
    items: generateToC(headings, { ...tocConfig, title: t("tableOfContents.overview") })
  };
}
function getLastUpdated({ entry }) {
  const { lastUpdated: frontmatterLastUpdated } = entry.data;
  const { lastUpdated: configLastUpdated } = starlightConfig;
  if (frontmatterLastUpdated ?? configLastUpdated) {
    try {
      return frontmatterLastUpdated instanceof Date ? frontmatterLastUpdated : getNewestCommitDate(entry.filePath);
    } catch {
      return void 0;
    }
  }
  return void 0;
}
function getEditUrl({ entry }) {
  const { editUrl } = entry.data;
  if (editUrl === false) return;
  let url;
  if (typeof editUrl === "string") {
    url = editUrl;
  } else {
    url = ensureTrailingSlash(starlightConfig.editLink.baseUrl) + entry.filePath;
  }
  return url ? new URL(url) : void 0;
}
function getSiteTitle(lang) {
  const defaultLang = starlightConfig.defaultLocale.lang;
  if (lang && starlightConfig.title[lang]) {
    return starlightConfig.title[lang];
  }
  return starlightConfig.title[defaultLang];
}
function getSiteTitleHref(locale) {
  return formatPath(locale || "/");
}
async function get404Route(locals) {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const fallbackEntry = {
    slug: "404",
    id: "404",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: locals.t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    filePath: `${getCollectionPathFromRoot("docs", project)}/404.md`
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry ? normalizeCollectionEntry(userEntry) : fallbackEntry;
  return { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	return x;
}

const routeMiddleware = [
];

async function attachRouteDataAndRunMiddleware(context, routeData) {
  context.locals.starlightRoute = klona(routeData);
  const runner = new MiddlewareRunner(context, routeMiddleware);
  await runner.run();
}
class MiddlewareRunnerStep {
  #callback;
  constructor(callback) {
    this.#callback = callback;
  }
  async run(context, next) {
    if (this.#callback) {
      await this.#callback(context, next);
      this.#callback = null;
    }
  }
}
class MiddlewareRunner {
  #context;
  #steps;
  constructor(context, stack = []) {
    this.#context = context;
    this.#steps = stack.map((callback) => new MiddlewareRunnerStep(callback));
  }
  async #stepThrough(steps) {
    let currentStep;
    while (steps.length > 0) {
      [currentStep, ...steps] = steps;
      await currentStep.run(this.#context, async () => this.#stepThrough(steps));
    }
  }
  async run() {
    await this.#stepThrough(this.#steps);
  }
}

export { $$Page as $, HeadConfigSchema as H, getSidebar as a, getSiteTitle as b, getToC as c, getSiteTitleHref as d, getPrevNextLinks as e, getHead as f, getSidebarFromConfig as g, attachRouteDataAndRunMiddleware as h, getRoute as i, useRouteData as j, slugToLocale$1 as k, paths as p, slugToLocaleData as s, urlToSlug as u };
