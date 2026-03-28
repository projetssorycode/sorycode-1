import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';
import { c as config } from './config_D58fiqnm.mjs';

const frontmatter = {
  "title": "SDK",
  "description": "Type-safe JS klijent za sorycode server."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "instalacija",
    "text": "Instalacija"
  }, {
    "depth": 2,
    "slug": "kreiranje-klijenta",
    "text": "Kreiranje klijenta"
  }, {
    "depth": 4,
    "slug": "opcije",
    "text": "Opcije"
  }, {
    "depth": 2,
    "slug": "konfiguracija",
    "text": "Konfiguracija"
  }, {
    "depth": 2,
    "slug": "samo-klijent",
    "text": "Samo klijent"
  }, {
    "depth": 4,
    "slug": "opcije-1",
    "text": "Opcije"
  }, {
    "depth": 2,
    "slug": "tipovi",
    "text": "Tipovi"
  }, {
    "depth": 2,
    "slug": "greške",
    "text": "Greške"
  }, {
    "depth": 2,
    "slug": "strukturirani-izlaz",
    "text": "Strukturirani izlaz"
  }, {
    "depth": 3,
    "slug": "osnovna-upotreba",
    "text": "Osnovna upotreba"
  }, {
    "depth": 3,
    "slug": "tipovi-formata-izlaza",
    "text": "Tipovi formata izlaza"
  }, {
    "depth": 3,
    "slug": "format-json-šeme",
    "text": "Format JSON šeme"
  }, {
    "depth": 3,
    "slug": "rukovanje-greškama",
    "text": "Rukovanje greškama"
  }, {
    "depth": 3,
    "slug": "najbolje-prakse",
    "text": "Najbolje prakse"
  }, {
    "depth": 2,
    "slug": "api-ji",
    "text": "API-ji"
  }, {
    "depth": 3,
    "slug": "global",
    "text": "Global"
  }, {
    "depth": 4,
    "slug": "primjeri",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "app",
    "text": "App"
  }, {
    "depth": 4,
    "slug": "primjeri-1",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "project",
    "text": "Project"
  }, {
    "depth": 4,
    "slug": "primjeri-2",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "path",
    "text": "Path"
  }, {
    "depth": 4,
    "slug": "primjeri-3",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "konfiguracija-1",
    "text": "Konfiguracija"
  }, {
    "depth": 4,
    "slug": "primjeri-4",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "sesije",
    "text": "Sesije"
  }, {
    "depth": 4,
    "slug": "primjeri-5",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "datoteke",
    "text": "Datoteke"
  }, {
    "depth": 4,
    "slug": "primjeri-6",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "tui",
    "text": "TUI"
  }, {
    "depth": 4,
    "slug": "primjeri-7",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "auth",
    "text": "Auth"
  }, {
    "depth": 4,
    "slug": "primjeri-8",
    "text": "Primjeri"
  }, {
    "depth": 3,
    "slug": "događaji",
    "text": "Događaji"
  }, {
    "depth": 4,
    "slug": "primjeri-9",
    "text": "Primjeri"
  }];
}
const typesUrl = `${config.github}/blob/dev/packages/sdk/js/src/gen/types.gen.ts`;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>sorycode JS/TS SDK pruza type-safe klijent za interakciju sa serverom.\r\nKoristite ga za izradu integracija i programsko upravljanje sorycode-om.</p>\n<p><a href=\"/docs/server\">Saznajte vise</a> kako server radi. Za primjere pogledajte <a href=\"/docs/ecosystem#projects\">projects</a> koje je napravila zajednica.</p>\n<hr>\n<h2 id=\"instalacija\"><a href=\"#instalacija\">Instalacija</a></h2>\n<p>Instalirajte SDK sa npm-a:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">npm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">@sorycode-ai/sdk</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm install @sorycode-ai/sdk\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"kreiranje-klijenta\"><a href=\"#kreiranje-klijenta\">Kreiranje klijenta</a></h2>\n<p>Kreirajte instancu sorycode:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencode } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { </span><span style=\"--0:#005CC5;--1:#79B8FF\">client</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencode</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { createOpencode } from &#x22;@sorycode-ai/sdk&#x22;const { client } = await createOpencode()\"><div></div></button></div></figure></div>\n<p>Ovo pokrece i server i klijent</p>\n<h4 id=\"opcije\"><a href=\"#opcije\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Opcija</th><th>Tip</th><th>Opis</th><th>Default</th></tr></thead><tbody><tr><td><code dir=\"auto\">hostname</code></td><td><code dir=\"auto\">string</code></td><td>Hostname servera</td><td><code dir=\"auto\">127.0.0.1</code></td></tr><tr><td><code dir=\"auto\">port</code></td><td><code dir=\"auto\">number</code></td><td>Port servera</td><td><code dir=\"auto\">4096</code></td></tr><tr><td><code dir=\"auto\">signal</code></td><td><code dir=\"auto\">AbortSignal</code></td><td>Abort signal za otkazivanje</td><td><code dir=\"auto\">undefined</code></td></tr><tr><td><code dir=\"auto\">timeout</code></td><td><code dir=\"auto\">number</code></td><td>Timeout u ms za start servera</td><td><code dir=\"auto\">5000</code></td></tr><tr><td><code dir=\"auto\">config</code></td><td><code dir=\"auto\">Config</code></td><td>Konfiguracijski objekat</td><td><code dir=\"auto\">{}</code></td></tr></tbody></table>\n<hr>\n<h2 id=\"konfiguracija\"><a href=\"#konfiguracija\">Konfiguracija</a></h2>\n<p>Mozete proslijediti konfiguracijski objekat za prilagodavanje ponasanja. Instanca i dalje ucitava <code dir=\"auto\">sorycode.json</code>, ali konfiguraciju mozete nadjacati ili dodati inline:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencode } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">sorycode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencode</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">hostname: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"127.0.0.1\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">port: </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">config: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">model: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic/claude-3-5-sonnet-20241022\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">`Server running at ${</span><span style=\"--0:#24292E;--1:#E1E4E8\">sorycode</span><span style=\"--0:#032F62;--1:#9ECBFF\">.</span><span style=\"--0:#24292E;--1:#E1E4E8\">server</span><span style=\"--0:#032F62;--1:#9ECBFF\">.</span><span style=\"--0:#24292E;--1:#E1E4E8\">url</span><span style=\"--0:#032F62;--1:#9ECBFF\">}`</span><span style=\"--0:#24292E;--1:#E1E4E8\">)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">sorycode.server.</span><span style=\"--0:#6F42C1;--1:#B392F0\">close</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { createOpencode } from &#x22;@sorycode-ai/sdk&#x22;const sorycode = await createOpencode({  hostname: &#x22;127.0.0.1&#x22;,  port: 4096,  config: {    model: &#x22;anthropic/claude-3-5-sonnet-20241022&#x22;,  },})console.log(&#x60;Server running at ${sorycode.server.url}&#x60;)sorycode.server.close()\"><div></div></button></div></figure></div>\n<h2 id=\"samo-klijent\"><a href=\"#samo-klijent\">Samo klijent</a></h2>\n<p>Ako vec imate pokrenutu sorycode instancu, mozete napraviti klijentsku instancu i povezati se na nju:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencodeClient } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">client</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencodeClient</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">baseUrl: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"http://localhost:4096\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import { createOpencodeClient } from &#x22;@sorycode-ai/sdk&#x22;const client = createOpencodeClient({  baseUrl: &#x22;http://localhost:4096&#x22;,})\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-1\"><a href=\"#opcije-1\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Opcija</th><th>Tip</th><th>Opis</th><th>Default</th></tr></thead><tbody><tr><td><code dir=\"auto\">baseUrl</code></td><td><code dir=\"auto\">string</code></td><td>URL servera</td><td><code dir=\"auto\">http://localhost:4096</code></td></tr><tr><td><code dir=\"auto\">fetch</code></td><td><code dir=\"auto\">function</code></td><td>Prilagodena fetch implementacija</td><td><code dir=\"auto\">globalThis.fetch</code></td></tr><tr><td><code dir=\"auto\">parseAs</code></td><td><code dir=\"auto\">string</code></td><td>Metoda parsiranja odgovora</td><td><code dir=\"auto\">auto</code></td></tr><tr><td><code dir=\"auto\">responseStyle</code></td><td><code dir=\"auto\">string</code></td><td>Stil povrata: <code dir=\"auto\">data</code> ili <code dir=\"auto\">fields</code></td><td><code dir=\"auto\">fields</code></td></tr><tr><td><code dir=\"auto\">throwOnError</code></td><td><code dir=\"auto\">boolean</code></td><td>Baci greske umjesto povrata</td><td><code dir=\"auto\">false</code></td></tr></tbody></table>\n<hr>\n<h2 id=\"tipovi\"><a href=\"#tipovi\">Tipovi</a></h2>\n<p>SDK ukljucuje TypeScript definicije za sve API tipove. Uvezite ih direktno:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">type</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { Session, Message, Part } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import type { Session, Message, Part } from &#x22;@sorycode-ai/sdk&#x22;\"><div></div></button></div></figure></div>\n"
    }), createVNode(_components.p, {
      children: ["Svi tipovi su generisani iz OpenAPI specifikacije servera i dostupni u ", createVNode("a", {
        href: typesUrl,
        "set:html": "types datoteci"
      }), "."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"greške\"><a href=\"#greške\">Greške</a></h2>\n<p>SDK moze baciti greske koje mozete uhvatiti i obraditi:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">try</span><span style=\"--0:#24292E;--1:#E1E4E8\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">({ path: { id: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"invalid-id\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } })</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">} </span><span style=\"--0:#BF3441;--1:#F97583\">catch</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (error) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Failed to get session:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, (error </span><span style=\"--0:#BF3441;--1:#F97583\">as</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">Error</span><span style=\"--0:#24292E;--1:#E1E4E8\">).message)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"try {  await client.session.get({ path: { id: &#x22;invalid-id&#x22; } })} catch (error) {  console.error(&#x22;Failed to get session:&#x22;, (error as Error).message)}\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"strukturirani-izlaz\"><a href=\"#strukturirani-izlaz\">Strukturirani izlaz</a></h2>\n<p>Možete zatražiti strukturirani JSON izlaz od modela specificiranjem <code dir=\"auto\">format</code> sa JSON šemom. Model će koristiti <code dir=\"auto\">StructuredOutput</code> alat da vrati validirani JSON koji odgovara vašoj šemi.</p>\n<h3 id=\"osnovna-upotreba\"><a href=\"#osnovna-upotreba\">Osnovna upotreba</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">result</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: sessionId },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Research Anthropic and provide company info\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">format: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"json_schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">schema: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"object\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">properties: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">company: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"string\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Company name\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">founded: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"number\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Year founded\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">products: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"array\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">items: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"string\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Main products\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">required: [</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"company\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"founded\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Access the structured output</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(result.data.info.structured_output)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// { company: \"Anthropic\", founded: 2021, products: [\"Claude\", \"Claude API\"] }</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const result = await client.session.prompt({  path: { id: sessionId },  body: {    parts: [{ type: &#x22;text&#x22;, text: &#x22;Research Anthropic and provide company info&#x22; }],    format: {      type: &#x22;json_schema&#x22;,      schema: {        type: &#x22;object&#x22;,        properties: {          company: { type: &#x22;string&#x22;, description: &#x22;Company name&#x22; },          founded: { type: &#x22;number&#x22;, description: &#x22;Year founded&#x22; },          products: {            type: &#x22;array&#x22;,            items: { type: &#x22;string&#x22; },            description: &#x22;Main products&#x22;,          },        },        required: [&#x22;company&#x22;, &#x22;founded&#x22;],      },    },  },})// Access the structured outputconsole.log(result.data.info.structured_output)// { company: &#x22;Anthropic&#x22;, founded: 2021, products: [&#x22;Claude&#x22;, &#x22;Claude API&#x22;] }\"><div></div></button></div></figure></div>\n<h3 id=\"tipovi-formata-izlaza\"><a href=\"#tipovi-formata-izlaza\">Tipovi formata izlaza</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Tip</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">text</code></td><td>Default. Standardni tekstualni odgovor (nema strukturiranog izlaza)</td></tr><tr><td><code dir=\"auto\">json_schema</code></td><td>Vraća validirani JSON koji odgovara pruženoj šemi</td></tr></tbody></table>\n<h3 id=\"format-json-šeme\"><a href=\"#format-json-šeme\">Format JSON šeme</a></h3>\n<p>Kada koristite <code dir=\"auto\">type: 'json_schema'</code>, navedite:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Polje</th><th>Tip</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">type</code></td><td><code dir=\"auto\">'json_schema'</code></td><td>Obavezno. Određuje JSON schema način rada</td></tr><tr><td><code dir=\"auto\">schema</code></td><td><code dir=\"auto\">object</code></td><td>Obavezno. JSON Schema objekt koji definira strukturu izlaza</td></tr><tr><td><code dir=\"auto\">retryCount</code></td><td><code dir=\"auto\">number</code></td><td>Opcionalno. Broj ponovnih pokušaja validacije (default: 2)</td></tr></tbody></table>\n<h3 id=\"rukovanje-greškama\"><a href=\"#rukovanje-greškama\">Rukovanje greškama</a></h3>\n<p>Ako model ne uspije proizvesti validan strukturirani izlaz nakon svih ponovnih pokušaja, odgovor će uključivati <code dir=\"auto\">StructuredOutputError</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">if</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (result.data.info.error?.name </span><span style=\"--0:#BF3441;--1:#F97583\">===</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"StructuredOutputError\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Failed to produce structured output:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, result.data.info.error.message)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Attempts:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, result.data.info.error.retries)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"if (result.data.info.error?.name === &#x22;StructuredOutputError&#x22;) {  console.error(&#x22;Failed to produce structured output:&#x22;, result.data.info.error.message)  console.error(&#x22;Attempts:&#x22;, result.data.info.error.retries)}\"><div></div></button></div></figure></div>\n<h3 id=\"najbolje-prakse\"><a href=\"#najbolje-prakse\">Najbolje prakse</a></h3>\n<ol>\n<li><strong>Navedite jasne opise</strong> u svojstvima vaše šeme kako biste pomogli modelu da razumije koje podatke treba izdvojiti</li>\n<li><strong>Koristite <code dir=\"auto\">required</code></strong> da odredite koja polja moraju biti prisutna</li>\n<li><strong>Držite šeme fokusiranim</strong> - složene ugniježđene šeme modelu mogu biti teže za ispravno popunjavanje</li>\n<li><strong>Postavite odgovarajući <code dir=\"auto\">retryCount</code></strong> - povećajte za složene šeme, smanjite za jednostavne</li>\n</ol>\n<hr>\n<h2 id=\"api-ji\"><a href=\"#api-ji\">API-ji</a></h2>\n<p>SDK izlaže sve server API-je kroz type-safe klijent.</p>\n<hr>\n<h3 id=\"global\"><a href=\"#global\">Global</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Metoda</th><th>Opis</th><th>Odgovor</th></tr></thead><tbody><tr><td><code dir=\"auto\">global.health()</code></td><td>Provjera zdravlja i verzije</td><td><code dir=\"auto\">{ healthy: true, version: string }</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"primjeri\"><a href=\"#primjeri\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">health</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.global.</span><span style=\"--0:#6F42C1;--1:#B392F0\">health</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(health.data.version)</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const health = await client.global.health()console.log(health.data.version)\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"app\"><a href=\"#app\">App</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Odgovor"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "app.log()"
            })
          }), createVNode(_components.td, {
            children: "Upis log zapisa"
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "boolean"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "app.agents()"
            })
          }), createVNode(_components.td, {
            children: "Lista dostupnih agenata"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Agent[]</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"primjeri-1\"><a href=\"#primjeri-1\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Write a log entry</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.app.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">service: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"my-app\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">level: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"info\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">message: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Operation completed\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// List available agents</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">agents</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.app.</span><span style=\"--0:#6F42C1;--1:#B392F0\">agents</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Write a log entryawait client.app.log({  body: {    service: &#x22;my-app&#x22;,    level: &#x22;info&#x22;,    message: &#x22;Operation completed&#x22;,  },})// List available agentsconst agents = await client.app.agents()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"project\"><a href=\"#project\">Project</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Odgovor"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "project.list()"
            })
          }), createVNode(_components.td, {
            children: "Lista svih projekata"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Project[]</code>"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "project.current()"
            })
          }), createVNode(_components.td, {
            children: "Trenutni projekat"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Project</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"primjeri-2\"><a href=\"#primjeri-2\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// List all projects</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">projects</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.project.</span><span style=\"--0:#6F42C1;--1:#B392F0\">list</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Get current project</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">currentProject</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.project.</span><span style=\"--0:#6F42C1;--1:#B392F0\">current</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// List all projectsconst projects = await client.project.list()// Get current projectconst currentProject = await client.project.current()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"path\"><a href=\"#path\">Path</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Odgovor"
          })]
        })
      }), createVNode(_components.tbody, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "path.get()"
            })
          }), createVNode(_components.td, {
            children: "Trenutna putanja"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Path</code>"
            })
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"primjeri-3\"><a href=\"#primjeri-3\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Get current path information</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">pathInfo</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.path.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Get current path informationconst pathInfo = await client.path.get()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"konfiguracija-1\"><a href=\"#konfiguracija-1\">Konfiguracija</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Odgovor"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "config.get()"
            })
          }), createVNode(_components.td, {
            children: "Info o konfiguraciji"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Config</code>"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "config.providers()"
            })
          }), createVNode(_components.td, {
            children: "Lista provajdera i default modela"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "{ providers: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Provider[]</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": ", default: { [key: string]: string } }"
            })]
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"primjeri-4\"><a href=\"#primjeri-4\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">config</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.config.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { </span><span style=\"--0:#005CC5;--1:#79B8FF\">providers</span><span style=\"--0:#24292E;--1:#E1E4E8\">, </span><span style=\"--0:#AE4B07;--1:#FFAB70\">default</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">defaults</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.config.</span><span style=\"--0:#6F42C1;--1:#B392F0\">providers</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"const config = await client.config.get()const { providers, default: defaults } = await client.config.providers()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"sesije\"><a href=\"#sesije\">Sesije</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Napomene"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.list()"
            })
          }), createVNode(_components.td, {
            children: "List sessions"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session[]</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.get({ path })"
            })
          }), createVNode(_components.td, {
            children: "Get session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.children({ path })"
            })
          }), createVNode(_components.td, {
            children: "List child sessions"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session[]</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.create({ body })"
            })
          }), createVNode(_components.td, {
            children: "Create session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">session.delete({ path })</code></td><td>Delete session</td><td>Returns <code dir=\"auto\">boolean</code></td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.update({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Update session properties"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(Fragment$1, {
          "set:html": "<tr><td><code dir=\"auto\">session.init({ path, body })</code></td><td>Analyze app and create <code dir=\"auto\">AGENTS.md</code></td><td>Returns <code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">session.abort({ path })</code></td><td>Abort a running session</td><td>Returns <code dir=\"auto\">boolean</code></td></tr>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.share({ path })"
            })
          }), createVNode(_components.td, {
            children: "Share session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.unshare({ path })"
            })
          }), createVNode(_components.td, {
            children: "Unshare session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">session.summarize({ path, body })</code></td><td>Summarize session</td><td>Returns <code dir=\"auto\">boolean</code></td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.messages({ path })"
            })
          }), createVNode(_components.td, {
            children: "List messages in a session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode(_components.code, {
              dir: "auto",
              children: "{ info: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Message</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": ", parts: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Part[]</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": "}[]"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.message({ path })"
            })
          }), createVNode(_components.td, {
            children: "Get message details"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode(_components.code, {
              dir: "auto",
              children: "{ info: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Message</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": ", parts: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Part[]</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": "}"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.prompt({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Send prompt message"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "body.noReply: true"
            }), " returns UserMessage (context only). Default returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>AssistantMessage</code>"
            }), " with AI response. Supports ", createVNode(Fragment$1, {
              "set:html": "<code dir=\"auto\">body.outputFormat</code> for <a href=\"#strukturirani-izlaz\">structured output</a>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.command({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Send command to session"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode(_components.code, {
              dir: "auto",
              children: "{ info: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>AssistantMessage</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": ", parts: "
            }), createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Part[]</code>"
            }), createVNode(_components.code, {
              dir: "auto",
              "set:html": "}"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.shell({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Run a shell command"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>AssistantMessage</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.revert({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Revert a message"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.unrevert({ path })"
            })
          }), createVNode(_components.td, {
            children: "Restore reverted messages"
          }), createVNode(_components.td, {
            children: ["Returns ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            })]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">postSessionByIdPermissionsByPermissionId({ path, body })</code></td><td>Respond to a permission request</td><td>Returns <code dir=\"auto\">boolean</code></td>"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"primjeri-5\"><a href=\"#primjeri-5\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Create and manage sessions</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">create</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { title: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"My session\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">sessions</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">list</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Send a prompt message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">result</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: session.id },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">model: { providerID: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, modelID: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"claude-3-5-sonnet-20241022\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Hello!\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Inject context without triggering AI response (useful for plugins)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: session.id },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">noReply: </span><span style=\"--0:#005CC5;--1:#79B8FF\">true</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"You are a helpful assistant.\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Create and manage sessionsconst session = await client.session.create({  body: { title: &#x22;My session&#x22; },})const sessions = await client.session.list()// Send a prompt messageconst result = await client.session.prompt({  path: { id: session.id },  body: {    model: { providerID: &#x22;anthropic&#x22;, modelID: &#x22;claude-3-5-sonnet-20241022&#x22; },    parts: [{ type: &#x22;text&#x22;, text: &#x22;Hello!&#x22; }],  },})// Inject context without triggering AI response (useful for plugins)await client.session.prompt({  path: { id: session.id },  body: {    noReply: true,    parts: [{ type: &#x22;text&#x22;, text: &#x22;You are a helpful assistant.&#x22; }],  },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"datoteke\"><a href=\"#datoteke\">Datoteke</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Metoda"
          }), createVNode(_components.th, {
            children: "Opis"
          }), createVNode(_components.th, {
            children: "Odgovor"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "find.text({ query })"
            })
          }), createVNode(_components.td, {
            children: "Search for text in files"
          }), createVNode(_components.td, {
            children: ["Array of match objects with ", createVNode(_components.code, {
              dir: "auto",
              children: "path"
            }), ", ", createVNode(_components.code, {
              dir: "auto",
              children: "lines"
            }), ", ", createVNode(_components.code, {
              dir: "auto",
              children: "line_number"
            }), ", ", createVNode(_components.code, {
              dir: "auto",
              children: "absolute_offset"
            }), ", ", createVNode(_components.code, {
              dir: "auto",
              children: "submatches"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "find.files({ query })"
            })
          }), createVNode(_components.td, {
            children: "Find files and directories by name"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "string[]"
            }), " (paths)"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "find.symbols({ query })"
            })
          }), createVNode(_components.td, {
            children: "Find workspace symbols"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Symbol[]</code>"
            })
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">file.read({ query })</code></td><td>Read a file</td><td><code dir=\"auto\">{ type: \"raw\" | \"patch\", content: string }</code></td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "file.status({ query? })"
            })
          }), createVNode(_components.td, {
            children: "Get status for tracked files"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>File[]</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">find.files</code> supports a few optional query fields:</p>\n<ul>\n<li><code dir=\"auto\">type</code>: <code dir=\"auto\">\"file\"</code> or <code dir=\"auto\">\"directory\"</code></li>\n<li><code dir=\"auto\">directory</code>: override the project root for the search</li>\n<li><code dir=\"auto\">limit</code>: max results (1–200)</li>\n</ul>\n<hr>\n<h4 id=\"primjeri-6\"><a href=\"#primjeri-6\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Search and read files</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">textResults</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">text</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { pattern: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"function.*sorycode\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { query: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"*.ts\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"file\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">directories</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { query: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"packages\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"directory\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, limit: </span><span style=\"--0:#005CC5;--1:#79B8FF\">20</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">content</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.file.</span><span style=\"--0:#6F42C1;--1:#B392F0\">read</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { path: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"src/index.ts\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Search and read filesconst textResults = await client.find.text({  query: { pattern: &#x22;function.*sorycode&#x22; },})const files = await client.find.files({  query: { query: &#x22;*.ts&#x22;, type: &#x22;file&#x22; },})const directories = await client.find.files({  query: { query: &#x22;packages&#x22;, type: &#x22;directory&#x22;, limit: 20 },})const content = await client.file.read({  query: { path: &#x22;src/index.ts&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">TUI</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Metoda</th><th>Opis</th><th>Odgovor</th></tr></thead><tbody><tr><td><code dir=\"auto\">tui.appendPrompt({ body })</code></td><td>Append text to the prompt</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openHelp()</code></td><td>Open the help dialog</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openSessions()</code></td><td>Open the session selector</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openThemes()</code></td><td>Open the theme selector</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openModels()</code></td><td>Open the model selector</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.submitPrompt()</code></td><td>Submit the current prompt</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.clearPrompt()</code></td><td>Clear the prompt</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.executeCommand({ body })</code></td><td>Execute a command</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.showToast({ body })</code></td><td>Show toast notification</td><td><code dir=\"auto\">boolean</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"primjeri-7\"><a href=\"#primjeri-7\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Control TUI interface</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.tui.</span><span style=\"--0:#6F42C1;--1:#B392F0\">appendPrompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Add this to prompt\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.tui.</span><span style=\"--0:#6F42C1;--1:#B392F0\">showToast</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { message: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Task completed\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, variant: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"success\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Control TUI interfaceawait client.tui.appendPrompt({  body: { text: &#x22;Add this to prompt&#x22; },})await client.tui.showToast({  body: { message: &#x22;Task completed&#x22;, variant: &#x22;success&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">Auth</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Metoda</th><th>Opis</th><th>Odgovor</th></tr></thead><tbody><tr><td><code dir=\"auto\">auth.set({ ... })</code></td><td>Set authentication credentials</td><td><code dir=\"auto\">boolean</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"primjeri-8\"><a href=\"#primjeri-8\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.auth.</span><span style=\"--0:#6F42C1;--1:#B392F0\">set</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"api\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, key: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"your-api-key\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"await client.auth.set({  path: { id: &#x22;anthropic&#x22; },  body: { type: &#x22;api&#x22;, key: &#x22;your-api-key&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"događaji\"><a href=\"#događaji\">Događaji</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Metoda</th><th>Opis</th><th>Odgovor</th></tr></thead><tbody><tr><td><code dir=\"auto\">event.subscribe()</code></td><td>Server-sent events stream</td><td>Server-sent events stream</td></tr></tbody></table>\n<hr>\n<h4 id=\"primjeri-9\"><a href=\"#primjeri-9\">Primjeri</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Listen to real-time events</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">events</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.event.</span><span style=\"--0:#6F42C1;--1:#B392F0\">subscribe</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">for</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (</span><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">event</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> events.stream) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Event:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, event.type, event.properties)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Listen to real-time eventsconst events = await client.event.subscribe()for await (const event of events.stream) {  console.log(&#x22;Event:&#x22;, event.type, event.properties)}\"><div></div></button></div></figure></div>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/bs/sdk.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/bs/sdk.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/bs/sdk.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, typesUrl, url };
