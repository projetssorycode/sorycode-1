import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';
import { c as config } from './config_D58fiqnm.mjs';

const frontmatter = {
  "title": "SDK",
  "description": "Typsicherer JS-Client fuer den sorycode-Server."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "installation",
    "text": "Installation"
  }, {
    "depth": 2,
    "slug": "client-erstellen",
    "text": "Client erstellen"
  }, {
    "depth": 4,
    "slug": "optionen",
    "text": "Optionen"
  }, {
    "depth": 2,
    "slug": "config",
    "text": "Config"
  }, {
    "depth": 2,
    "slug": "nur-client",
    "text": "Nur Client"
  }, {
    "depth": 4,
    "slug": "optionen-1",
    "text": "Optionen"
  }, {
    "depth": 2,
    "slug": "typen",
    "text": "Typen"
  }, {
    "depth": 2,
    "slug": "fehler",
    "text": "Fehler"
  }, {
    "depth": 2,
    "slug": "structured-output",
    "text": "Structured Output"
  }, {
    "depth": 3,
    "slug": "grundlegende-verwendung",
    "text": "Grundlegende Verwendung"
  }, {
    "depth": 3,
    "slug": "ausgabeformate",
    "text": "Ausgabeformate"
  }, {
    "depth": 3,
    "slug": "json-schema-format",
    "text": "JSON-Schema-Format"
  }, {
    "depth": 3,
    "slug": "fehlerbehandlung",
    "text": "Fehlerbehandlung"
  }, {
    "depth": 3,
    "slug": "best-practices",
    "text": "Best Practices"
  }, {
    "depth": 2,
    "slug": "apis",
    "text": "APIs"
  }, {
    "depth": 3,
    "slug": "global",
    "text": "Global"
  }, {
    "depth": 4,
    "slug": "beispiele",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "app",
    "text": "App"
  }, {
    "depth": 4,
    "slug": "beispiele-1",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "project",
    "text": "Project"
  }, {
    "depth": 4,
    "slug": "beispiele-2",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "path",
    "text": "Path"
  }, {
    "depth": 4,
    "slug": "beispiele-3",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "config-1",
    "text": "Config"
  }, {
    "depth": 4,
    "slug": "beispiele-4",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "sessions",
    "text": "Sessions"
  }, {
    "depth": 4,
    "slug": "beispiele-5",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "files",
    "text": "Files"
  }, {
    "depth": 4,
    "slug": "beispiele-6",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "tui",
    "text": "TUI"
  }, {
    "depth": 4,
    "slug": "beispiele-7",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "auth",
    "text": "Auth"
  }, {
    "depth": 4,
    "slug": "beispiele-8",
    "text": "Beispiele"
  }, {
    "depth": 3,
    "slug": "events",
    "text": "Events"
  }, {
    "depth": 4,
    "slug": "beispiele-9",
    "text": "Beispiele"
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
      "set:html": "<p>Das sorycode JS/TS SDK bietet einen typsicheren Client fuer die Server-API.\r\nDamit kannst du Integrationen bauen und sorycode programmatisch steuern.</p>\n<p><a href=\"/docs/server\">Mehr zum Server</a>. Beispiele findest du in den <a href=\"/docs/ecosystem#projects\">Community-Projekten</a>.</p>\n<hr>\n<h2 id=\"installation\"><a href=\"#installation\">Installation</a></h2>\n<p>Installiere das SDK ueber npm:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal-Fenster</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">npm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">@sorycode-ai/sdk</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"npm install @sorycode-ai/sdk\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"client-erstellen\"><a href=\"#client-erstellen\">Client erstellen</a></h2>\n<p>Erstelle eine sorycode-Instanz:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencode } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { </span><span style=\"--0:#005CC5;--1:#79B8FF\">client</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencode</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"import { createOpencode } from &#x22;@sorycode-ai/sdk&#x22;const { client } = await createOpencode()\"><div></div></button></div></figure></div>\n<p>Das startet Server und Client.</p>\n<h4 id=\"optionen\"><a href=\"#optionen\">Optionen</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Option</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code dir=\"auto\">hostname</code></td><td><code dir=\"auto\">string</code></td><td>Server hostname</td><td><code dir=\"auto\">127.0.0.1</code></td></tr><tr><td><code dir=\"auto\">port</code></td><td><code dir=\"auto\">number</code></td><td>Server port</td><td><code dir=\"auto\">4096</code></td></tr><tr><td><code dir=\"auto\">signal</code></td><td><code dir=\"auto\">AbortSignal</code></td><td>Abort signal for cancellation</td><td><code dir=\"auto\">undefined</code></td></tr><tr><td><code dir=\"auto\">timeout</code></td><td><code dir=\"auto\">number</code></td><td>Timeout in ms for server start</td><td><code dir=\"auto\">5000</code></td></tr><tr><td><code dir=\"auto\">config</code></td><td><code dir=\"auto\">Config</code></td><td>Configuration object</td><td><code dir=\"auto\">{}</code></td></tr></tbody></table>\n<hr>\n<h2 id=\"config\"><a href=\"#config\">Config</a></h2>\n<p>Du kannst ein Konfigurationsobjekt uebergeben, um das Verhalten anzupassen.\r\n<code dir=\"auto\">sorycode.json</code> wird weiterhin geladen, kann aber inline ueberschrieben oder erweitert werden:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencode } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">sorycode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencode</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">hostname: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"127.0.0.1\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">port: </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">config: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">model: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic/claude-3-5-sonnet-20241022\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">`Server running at ${</span><span style=\"--0:#24292E;--1:#E1E4E8\">sorycode</span><span style=\"--0:#032F62;--1:#9ECBFF\">.</span><span style=\"--0:#24292E;--1:#E1E4E8\">server</span><span style=\"--0:#032F62;--1:#9ECBFF\">.</span><span style=\"--0:#24292E;--1:#E1E4E8\">url</span><span style=\"--0:#032F62;--1:#9ECBFF\">}`</span><span style=\"--0:#24292E;--1:#E1E4E8\">)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">sorycode.server.</span><span style=\"--0:#6F42C1;--1:#B392F0\">close</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"import { createOpencode } from &#x22;@sorycode-ai/sdk&#x22;const sorycode = await createOpencode({  hostname: &#x22;127.0.0.1&#x22;,  port: 4096,  config: {    model: &#x22;anthropic/claude-3-5-sonnet-20241022&#x22;,  },})console.log(&#x60;Server running at ${sorycode.server.url}&#x60;)sorycode.server.close()\"><div></div></button></div></figure></div>\n<h2 id=\"nur-client\"><a href=\"#nur-client\">Nur Client</a></h2>\n<p>Wenn sorycode bereits laeuft, kannst du nur einen Client erstellen und verbinden:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { createOpencodeClient } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">client</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">createOpencodeClient</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">baseUrl: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"http://localhost:4096\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"import { createOpencodeClient } from &#x22;@sorycode-ai/sdk&#x22;const client = createOpencodeClient({  baseUrl: &#x22;http://localhost:4096&#x22;,})\"><div></div></button></div></figure></div>\n<h4 id=\"optionen-1\"><a href=\"#optionen-1\">Optionen</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Option</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code dir=\"auto\">baseUrl</code></td><td><code dir=\"auto\">string</code></td><td>URL of the server</td><td><code dir=\"auto\">http://localhost:4096</code></td></tr><tr><td><code dir=\"auto\">fetch</code></td><td><code dir=\"auto\">function</code></td><td>Custom fetch implementation</td><td><code dir=\"auto\">globalThis.fetch</code></td></tr><tr><td><code dir=\"auto\">parseAs</code></td><td><code dir=\"auto\">string</code></td><td>Response parsing method</td><td><code dir=\"auto\">auto</code></td></tr><tr><td><code dir=\"auto\">responseStyle</code></td><td><code dir=\"auto\">string</code></td><td>Return style: <code dir=\"auto\">data</code> or <code dir=\"auto\">fields</code></td><td><code dir=\"auto\">fields</code></td></tr><tr><td><code dir=\"auto\">throwOnError</code></td><td><code dir=\"auto\">boolean</code></td><td>Throw errors instead of return</td><td><code dir=\"auto\">false</code></td></tr></tbody></table>\n<hr>\n<h2 id=\"typen\"><a href=\"#typen\">Typen</a></h2>\n<p>Das SDK bringt TypeScript-Definitionen fuer alle API-Typen mit.\r\nDu kannst sie direkt importieren:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">type</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { Session, Message, Part } </span><span style=\"--0:#BF3441;--1:#F97583\">from</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"@sorycode-ai/sdk\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"import type { Session, Message, Part } from &#x22;@sorycode-ai/sdk&#x22;\"><div></div></button></div></figure></div>\n"
    }), createVNode(_components.p, {
      children: ["Alle Typen werden aus der OpenAPI-Spezifikation des Servers generiert und sind in der ", createVNode("a", {
        href: typesUrl,
        "set:html": "Typdatei"
      }), " verfuegbar."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"fehler\"><a href=\"#fehler\">Fehler</a></h2>\n<p>Das SDK kann Fehler werfen, die du abfangen und behandeln kannst:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">try</span><span style=\"--0:#24292E;--1:#E1E4E8\"> {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">({ path: { id: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"invalid-id\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } })</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">} </span><span style=\"--0:#BF3441;--1:#F97583\">catch</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (error) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Failed to get session:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, (error </span><span style=\"--0:#BF3441;--1:#F97583\">as</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#6F42C1;--1:#B392F0\">Error</span><span style=\"--0:#24292E;--1:#E1E4E8\">).message)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"try {  await client.session.get({ path: { id: &#x22;invalid-id&#x22; } })} catch (error) {  console.error(&#x22;Failed to get session:&#x22;, (error as Error).message)}\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"structured-output\"><a href=\"#structured-output\">Structured Output</a></h2>\n<p>Du kannst eine strukturierte JSON-Ausgabe vom Modell anfordern, indem du ein <code dir=\"auto\">format</code> mit einem JSON-Schema angibst. Das Modell verwendet dann ein <code dir=\"auto\">StructuredOutput</code>-Tool, um validiertes JSON zurueckzugeben, das deinem Schema entspricht.</p>\n<h3 id=\"grundlegende-verwendung\"><a href=\"#grundlegende-verwendung\">Grundlegende Verwendung</a></h3>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">result</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: sessionId },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Recherchiere Anthropic und gib Firmeninfos zurueck\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">format: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"json_schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">schema: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"object\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">properties: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">company: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"string\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Firmenname\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">founded: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"number\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Gruendungsjahr\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">products: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"array\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">items: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"string\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">            </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">description: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Hauptprodukte\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">          </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">        </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">required: [</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"company\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"founded\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">      </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Zugriff auf die strukturierte Ausgabe</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(result.data.info.structured_output)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// { company: \"Anthropic\", founded: 2021, products: [\"Claude\", \"Claude API\"] }</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"const result = await client.session.prompt({  path: { id: sessionId },  body: {    parts: [{ type: &#x22;text&#x22;, text: &#x22;Recherchiere Anthropic und gib Firmeninfos zurueck&#x22; }],    format: {      type: &#x22;json_schema&#x22;,      schema: {        type: &#x22;object&#x22;,        properties: {          company: { type: &#x22;string&#x22;, description: &#x22;Firmenname&#x22; },          founded: { type: &#x22;number&#x22;, description: &#x22;Gruendungsjahr&#x22; },          products: {            type: &#x22;array&#x22;,            items: { type: &#x22;string&#x22; },            description: &#x22;Hauptprodukte&#x22;,          },        },        required: [&#x22;company&#x22;, &#x22;founded&#x22;],      },    },  },})// Zugriff auf die strukturierte Ausgabeconsole.log(result.data.info.structured_output)// { company: &#x22;Anthropic&#x22;, founded: 2021, products: [&#x22;Claude&#x22;, &#x22;Claude API&#x22;] }\"><div></div></button></div></figure></div>\n<h3 id=\"ausgabeformate\"><a href=\"#ausgabeformate\">Ausgabeformate</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir=\"auto\">text</code></td><td>Standard. Normale Textantwort (keine strukturierte Ausgabe)</td></tr><tr><td><code dir=\"auto\">json_schema</code></td><td>Gibt validiertes JSON zurueck, das dem Schema entspricht</td></tr></tbody></table>\n<h3 id=\"json-schema-format\"><a href=\"#json-schema-format\">JSON-Schema-Format</a></h3>\n<p>Bei Verwendung von <code dir=\"auto\">type: 'json_schema'</code> musst du Folgendes angeben:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code dir=\"auto\">type</code></td><td><code dir=\"auto\">'json_schema'</code></td><td>Erforderlich. Gibt den JSON-Schema-Modus an</td></tr><tr><td><code dir=\"auto\">schema</code></td><td><code dir=\"auto\">object</code></td><td>Erforderlich. JSON-Schema-Objekt, das die Struktur definiert</td></tr><tr><td><code dir=\"auto\">retryCount</code></td><td><code dir=\"auto\">number</code></td><td>Optional. Anzahl der Validierungswiederholungen (Standard: 2)</td></tr></tbody></table>\n<h3 id=\"fehlerbehandlung\"><a href=\"#fehlerbehandlung\">Fehlerbehandlung</a></h3>\n<p>Wenn das Modell nach allen Wiederholungen keine valide strukturierte Ausgabe liefert, enthaelt die Antwort einen <code dir=\"auto\">StructuredOutputError</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"typescript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">if</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (result.data.info.error?.name </span><span style=\"--0:#BF3441;--1:#F97583\">===</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"StructuredOutputError\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Strukturierte Ausgabe fehlgeschlagen:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, result.data.info.error.message)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">error</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Versuche:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, result.data.info.error.retries)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"if (result.data.info.error?.name === &#x22;StructuredOutputError&#x22;) {  console.error(&#x22;Strukturierte Ausgabe fehlgeschlagen:&#x22;, result.data.info.error.message)  console.error(&#x22;Versuche:&#x22;, result.data.info.error.retries)}\"><div></div></button></div></figure></div>\n<h3 id=\"best-practices\"><a href=\"#best-practices\">Best Practices</a></h3>\n<ol>\n<li><strong>Klare Beschreibungen</strong>: Gib in deinen Schema-Properties klare Beschreibungen an, damit das Modell versteht, welche Daten extrahiert werden sollen.</li>\n<li><strong><code dir=\"auto\">required</code> nutzen</strong>: Definiere, welche Felder zwingend vorhanden sein muessen.</li>\n<li><strong>Schemas einfach halten</strong>: Komplexe verschachtelte Schemas sind fuer das Modell schwerer korrekt auszufuellen.</li>\n<li><strong><code dir=\"auto\">retryCount</code> anpassen</strong>: Erhoehe den Wert bei komplexen Schemas, verringere ihn bei einfachen.</li>\n</ol>\n<hr>\n<h2 id=\"apis\"><a href=\"#apis\">APIs</a></h2>\n<p>Das SDK stellt alle Server-APIs ueber einen typsicheren Client bereit.</p>\n<hr>\n<h3 id=\"global\"><a href=\"#global\">Global</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Method</th><th>Description</th><th>Response</th></tr></thead><tbody><tr><td><code dir=\"auto\">global.health()</code></td><td>Prueft Server-Status und Version</td><td><code dir=\"auto\">{ healthy: true, version: string }</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"beispiele\"><a href=\"#beispiele\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">health</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.global.</span><span style=\"--0:#6F42C1;--1:#B392F0\">health</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(health.data.version)</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"const health = await client.global.health()console.log(health.data.version)\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"app\"><a href=\"#app\">App</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Response"
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
            children: "Schreibt einen Log-Eintrag"
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
            children: "Listet alle verfuegbaren Agenten"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Agent[]</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"beispiele-1\"><a href=\"#beispiele-1\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Write a log entry</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.app.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">service: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"my-app\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">level: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"info\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">message: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Operation completed\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// List available agents</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">agents</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.app.</span><span style=\"--0:#6F42C1;--1:#B392F0\">agents</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Write a log entryawait client.app.log({  body: {    service: &#x22;my-app&#x22;,    level: &#x22;info&#x22;,    message: &#x22;Operation completed&#x22;,  },})// List available agentsconst agents = await client.app.agents()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"project\"><a href=\"#project\">Project</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Response"
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
            children: "Listet alle Projekte"
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
            children: "Ruft das aktuelle Projekt ab"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Project</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"beispiele-2\"><a href=\"#beispiele-2\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// List all projects</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">projects</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.project.</span><span style=\"--0:#6F42C1;--1:#B392F0\">list</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Get current project</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">currentProject</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.project.</span><span style=\"--0:#6F42C1;--1:#B392F0\">current</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// List all projectsconst projects = await client.project.list()// Get current projectconst currentProject = await client.project.current()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"path\"><a href=\"#path\">Path</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Response"
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
            children: "Ruft den aktuellen Pfad ab"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Path</code>"
            })
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"beispiele-3\"><a href=\"#beispiele-3\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Get current path information</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">pathInfo</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.path.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Get current path informationconst pathInfo = await client.path.get()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"config-1\"><a href=\"#config-1\">Config</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Response"
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
            children: "Ruft Konfigurationsinfos ab"
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
            children: "Listet Provider und Standard-Modelle"
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
      "set:html": "<hr>\n<h4 id=\"beispiele-4\"><a href=\"#beispiele-4\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">config</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.config.</span><span style=\"--0:#6F42C1;--1:#B392F0\">get</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> { </span><span style=\"--0:#005CC5;--1:#79B8FF\">providers</span><span style=\"--0:#24292E;--1:#E1E4E8\">, </span><span style=\"--0:#AE4B07;--1:#FFAB70\">default</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#005CC5;--1:#79B8FF\">defaults</span><span style=\"--0:#24292E;--1:#E1E4E8\"> } </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.config.</span><span style=\"--0:#6F42C1;--1:#B392F0\">providers</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"const config = await client.config.get()const { providers, default: defaults } = await client.config.providers()\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"sessions\"><a href=\"#sessions\">Sessions</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Notes"
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
            children: "Listet Sessions"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session[]</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.get({ path })"
            })
          }), createVNode(_components.td, {
            children: "Ruft Session ab"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.children({ path })"
            })
          }), createVNode(_components.td, {
            children: "Listet Kind-Sessions"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session[]</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.create({ body })"
            })
          }), createVNode(_components.td, {
            children: "Erstellt Session"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">session.delete({ path })</code></td><td>Loescht Session</td><td>Gibt <code dir=\"auto\">boolean</code> zurueck</td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.update({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Aktualisiert Session-Eigenschaften"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(Fragment$1, {
          "set:html": "<tr><td><code dir=\"auto\">session.init({ path, body })</code></td><td>Analysiert App und erstellt <code dir=\"auto\">AGENTS.md</code></td><td>Gibt <code dir=\"auto\">boolean</code> zurueck</td></tr><tr><td><code dir=\"auto\">session.abort({ path })</code></td><td>Bricht eine laufende Session ab</td><td>Gibt <code dir=\"auto\">boolean</code> zurueck</td></tr>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.share({ path })"
            })
          }), createVNode(_components.td, {
            children: "Teilt Session"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.unshare({ path })"
            })
          }), createVNode(_components.td, {
            children: "Hebt Teilen der Session auf"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">session.summarize({ path, body })</code></td><td>Fasst Session zusammen</td><td>Gibt <code dir=\"auto\">boolean</code> zurueck</td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.messages({ path })"
            })
          }), createVNode(_components.td, {
            children: "Listet Nachrichten einer Session"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode(_components.code, {
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
            }), createVNode(Fragment$1, {
              "set:html": "<code dir=\"auto\">}[]</code> zurueck"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.message({ path })"
            })
          }), createVNode(_components.td, {
            children: "Ruft Nachrichtendetails ab"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode(_components.code, {
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
            }), createVNode(Fragment$1, {
              "set:html": "<code dir=\"auto\">}</code> zurueck"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.prompt({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Sendet Prompt-Nachricht"
          }), createVNode(_components.td, {
            children: [createVNode(_components.code, {
              dir: "auto",
              children: "body.noReply: true"
            }), " gibt UserMessage (nur Kontext) zurueck. Standard gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>AssistantMessage</code>"
            }), " mit AI-Antwort zurueck. Unterstuetzt ", createVNode(Fragment$1, {
              "set:html": "<code dir=\"auto\">body.outputFormat</code> fuer <a href=\"#structured-output\">strukturierte Ausgabe</a>"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.command({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Sendet Befehl an Session"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode(_components.code, {
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
            }), createVNode(Fragment$1, {
              "set:html": "<code dir=\"auto\">}</code> zurueck"
            })]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.shell({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Fuehrt Shell-Befehl aus"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>AssistantMessage</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.revert({ path, body })"
            })
          }), createVNode(_components.td, {
            children: "Setzt Nachricht zurueck"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "session.unrevert({ path })"
            })
          }), createVNode(_components.td, {
            children: "Stellt zurueckgesetzte Nachrichten wieder her"
          }), createVNode(_components.td, {
            children: ["Gibt ", createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Session</code>"
            }), " zurueck"]
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">postSessionByIdPermissionsByPermissionId({ path, body })</code></td><td>Antwortet auf eine Berechtigungsanfrage</td><td>Gibt <code dir=\"auto\">boolean</code> zurueck</td>"
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"beispiele-5\"><a href=\"#beispiele-5\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Create and manage sessions</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">create</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { title: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"My session\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">sessions</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">list</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Send a prompt message</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">result</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: session.id },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">model: { providerID: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, modelID: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"claude-3-5-sonnet-20241022\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Hello!\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Inject context without triggering AI response (useful for plugins)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.session.</span><span style=\"--0:#6F42C1;--1:#B392F0\">prompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: session.id },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">noReply: </span><span style=\"--0:#005CC5;--1:#79B8FF\">true</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">    </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">parts: [{ type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"text\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"You are a helpful assistant.\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> }],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">},</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Create and manage sessionsconst session = await client.session.create({  body: { title: &#x22;My session&#x22; },})const sessions = await client.session.list()// Send a prompt messageconst result = await client.session.prompt({  path: { id: session.id },  body: {    model: { providerID: &#x22;anthropic&#x22;, modelID: &#x22;claude-3-5-sonnet-20241022&#x22; },    parts: [{ type: &#x22;text&#x22;, text: &#x22;Hello!&#x22; }],  },})// Inject context without triggering AI response (useful for plugins)await client.session.prompt({  path: { id: session.id },  body: {    noReply: true,    parts: [{ type: &#x22;text&#x22;, text: &#x22;You are a helpful assistant.&#x22; }],  },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"files\"><a href=\"#files\">Files</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Method"
          }), createVNode(_components.th, {
            children: "Description"
          }), createVNode(_components.th, {
            children: "Response"
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
            children: "Sucht Text in Dateien"
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
            children: "Findet Dateien und Verzeichnisse nach Namen"
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
            children: "Findet Workspace-Symbole"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>Symbol[]</code>"
            })
          })]
        }), createVNode(_components.tr, {
          "set:html": "<td><code dir=\"auto\">file.read({ query })</code></td><td>Liest eine Datei</td><td><code dir=\"auto\">{ type: \"raw\" | \"patch\", content: string }</code></td>"
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.code, {
              dir: "auto",
              children: "file.status({ query? })"
            })
          }), createVNode(_components.td, {
            children: "Ruft Status fuer getrackte Dateien ab"
          }), createVNode(_components.td, {
            children: createVNode("a", {
              href: typesUrl,
              "set:html": "<code>File[]</code>"
            })
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p><code dir=\"auto\">find.files</code> unterstuetzt einige optionale Query-Felder:</p>\n<ul>\n<li><code dir=\"auto\">type</code>: <code dir=\"auto\">\"file\"</code> oder <code dir=\"auto\">\"directory\"</code></li>\n<li><code dir=\"auto\">directory</code>: Ueberschreibt das Projekt-Root fuer die Suche</li>\n<li><code dir=\"auto\">limit</code>: Maximale Ergebnisse (1–200)</li>\n</ul>\n<hr>\n<h4 id=\"beispiele-6\"><a href=\"#beispiele-6\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Search and read files</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">textResults</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">text</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { pattern: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"function.*sorycode\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { query: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"*.ts\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"file\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">directories</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.find.</span><span style=\"--0:#6F42C1;--1:#B392F0\">files</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { query: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"packages\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"directory\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, limit: </span><span style=\"--0:#005CC5;--1:#79B8FF\">20</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">content</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.file.</span><span style=\"--0:#6F42C1;--1:#B392F0\">read</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">query: { path: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"src/index.ts\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Search and read filesconst textResults = await client.find.text({  query: { pattern: &#x22;function.*sorycode&#x22; },})const files = await client.find.files({  query: { query: &#x22;*.ts&#x22;, type: &#x22;file&#x22; },})const directories = await client.find.files({  query: { query: &#x22;packages&#x22;, type: &#x22;directory&#x22;, limit: 20 },})const content = await client.file.read({  query: { path: &#x22;src/index.ts&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">TUI</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Method</th><th>Description</th><th>Response</th></tr></thead><tbody><tr><td><code dir=\"auto\">tui.appendPrompt({ body })</code></td><td>Haengt Text an den Prompt an</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openHelp()</code></td><td>Oeffnet den Hilfedialog</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openSessions()</code></td><td>Oeffnet die Session-Auswahl</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openThemes()</code></td><td>Oeffnet die Theme-Auswahl</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.openModels()</code></td><td>Oeffnet die Modell-Auswahl</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.submitPrompt()</code></td><td>Sendet den aktuellen Prompt ab</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.clearPrompt()</code></td><td>Leert den Prompt</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.executeCommand({ body })</code></td><td>Fuehrt einen Befehl aus</td><td><code dir=\"auto\">boolean</code></td></tr><tr><td><code dir=\"auto\">tui.showToast({ body })</code></td><td>Zeigt Toast-Benachrichtigung</td><td><code dir=\"auto\">boolean</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"beispiele-7\"><a href=\"#beispiele-7\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Control TUI interface</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.tui.</span><span style=\"--0:#6F42C1;--1:#B392F0\">appendPrompt</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { text: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Add this to prompt\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.tui.</span><span style=\"--0:#6F42C1;--1:#B392F0\">showToast</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { message: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Task completed\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, variant: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"success\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Control TUI interfaceawait client.tui.appendPrompt({  body: { text: &#x22;Add this to prompt&#x22; },})await client.tui.showToast({  body: { message: &#x22;Task completed&#x22;, variant: &#x22;success&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">Auth</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Method</th><th>Description</th><th>Response</th></tr></thead><tbody><tr><td><code dir=\"auto\">auth.set({ ... })</code></td><td>Setzt Authentifizierungsdaten</td><td><code dir=\"auto\">boolean</code></td></tr></tbody></table>\n<hr>\n<h4 id=\"beispiele-8\"><a href=\"#beispiele-8\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.auth.</span><span style=\"--0:#6F42C1;--1:#B392F0\">set</span><span style=\"--0:#24292E;--1:#E1E4E8\">({</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">path: { id: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"anthropic\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">body: { type: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"api\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, key: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"your-api-key\"</span><span style=\"--0:#24292E;--1:#E1E4E8\"> },</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">})</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"await client.auth.set({  path: { id: &#x22;anthropic&#x22; },  body: { type: &#x22;api&#x22;, key: &#x22;your-api-key&#x22; },})\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"events\"><a href=\"#events\">Events</a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Method</th><th>Description</th><th>Response</th></tr></thead><tbody><tr><td><code dir=\"auto\">event.subscribe()</code></td><td>Server-Sent Events Stream</td><td>Server-sent events stream</td></tr></tbody></table>\n<hr>\n<h4 id=\"beispiele-9\"><a href=\"#beispiele-9\">Beispiele</a></h4>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"javascript\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\">// Listen to real-time events</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">events</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> client.event.</span><span style=\"--0:#6F42C1;--1:#B392F0\">subscribe</span><span style=\"--0:#24292E;--1:#E1E4E8\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#BF3441;--1:#F97583\">for</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">await</span><span style=\"--0:#24292E;--1:#E1E4E8\"> (</span><span style=\"--0:#BF3441;--1:#F97583\">const</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">event</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#BF3441;--1:#F97583\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> events.stream) {</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#24292E;--1:#E1E4E8\">  </span></span><span style=\"--0:#24292E;--1:#E1E4E8\">console.</span><span style=\"--0:#6F42C1;--1:#B392F0\">log</span><span style=\"--0:#24292E;--1:#E1E4E8\">(</span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Event:\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">, event.type, event.properties)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"// Listen to real-time eventsconst events = await client.event.subscribe()for await (const event of events.stream) {  console.log(&#x22;Event:&#x22;, event.type, event.properties)}\"><div></div></button></div></figure></div>"
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

const url = "src/content/docs/de/sdk.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/sdk.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/sdk.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, typesUrl, url };
