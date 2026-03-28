import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Teilen",
  "description": "Teile SoryCode-Unterhaltungen per oeffentlichem Link."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "funktionsweise",
    "text": "Funktionsweise"
  }, {
    "depth": 2,
    "slug": "teilen",
    "text": "Teilen"
  }, {
    "depth": 3,
    "slug": "manuell-standard",
    "text": "Manuell (Standard)"
  }, {
    "depth": 3,
    "slug": "auto-share",
    "text": "Auto-Share"
  }, {
    "depth": 3,
    "slug": "deaktiviert",
    "text": "Deaktiviert"
  }, {
    "depth": 2,
    "slug": "teilen-aufheben",
    "text": "Teilen aufheben"
  }, {
    "depth": 2,
    "slug": "datenschutz",
    "text": "Datenschutz"
  }, {
    "depth": 3,
    "slug": "datenaufbewahrung",
    "text": "Datenaufbewahrung"
  }, {
    "depth": 3,
    "slug": "empfehlungen",
    "text": "Empfehlungen"
  }, {
    "depth": 2,
    "slug": "für-unternehmen",
    "text": "Für Unternehmen"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Mit der Share-Funktion erstellst du oeffentliche Links zu SoryCode-Unterhaltungen.\r\nSo kannst du einfacher mit dem Team zusammenarbeiten oder Hilfe einholen.</p>\n<aside aria-label=\"Hinweis\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Hinweis</p><div class=\"starlight-aside__content\"><p>Geteilte Unterhaltungen sind fuer alle mit dem Link oeffentlich zugaenglich.</p></div></aside>\n<hr>\n<h2 id=\"funktionsweise\"><a href=\"#funktionsweise\">Funktionsweise</a></h2>\n<p>Wenn du eine Unterhaltung teilst, macht SoryCode Folgendes:</p>\n<ol>\n<li>Erstellt eine eindeutige oeffentliche URL fuer deine Sitzung</li>\n<li>Synchronisiert den Verlauf auf unsere Server</li>\n<li>Stellt die Unterhaltung unter <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code> bereit</li>\n</ol>\n<hr>\n<h2 id=\"teilen\"><a href=\"#teilen\">Teilen</a></h2>\n<p>SoryCode hat drei Modi, die das Teilen steuern:</p>\n<hr>\n<h3 id=\"manuell-standard\"><a href=\"#manuell-standard\">Manuell (Standard)</a></h3>\n<p>Standardmaessig nutzt SoryCode den manuellen Modus.\r\nSitzungen werden nicht automatisch geteilt, du kannst sie aber mit <code dir=\"auto\">/share</code> veroeffentlichen:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Dabei wird eine eindeutige URL erzeugt und in die Zwischenablage kopiert.</p>\n<p>Um den manuellen Modus explizit in der <a href=\"/docs/config\">Konfiguration</a> zu setzen:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auto-share\"><a href=\"#auto-share\">Auto-Share</a></h3>\n<p>Du kannst automatisches Teilen fuer neue Unterhaltungen aktivieren, indem du in der <a href=\"/docs/config\">Konfiguration</a> <code dir=\"auto\">share</code> auf <code dir=\"auto\">\"auto\"</code> setzt:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Mit aktiviertem Auto-Share wird jede neue Unterhaltung automatisch geteilt und ein Link erstellt.</p>\n<hr>\n<h3 id=\"deaktiviert\"><a href=\"#deaktiviert\">Deaktiviert</a></h3>\n<p>Du kannst Teilen komplett deaktivieren, indem du in der <a href=\"/docs/config\">Konfiguration</a> <code dir=\"auto\">share</code> auf <code dir=\"auto\">\"disabled\"</code> setzt:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Wenn das fuer ein Projekt teamweit gelten soll, lege es in der Projekt-<code dir=\"auto\">sorycode.json</code> fest und committe die Datei.</p>\n<hr>\n<h2 id=\"teilen-aufheben\"><a href=\"#teilen-aufheben\">Teilen aufheben</a></h2>\n<p>Um das Teilen zu beenden und den oeffentlichen Zugriff zu entfernen:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"In die Zwischenablage kopieren\" data-copied=\"Kopiert!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Dadurch wird der Share-Link entfernt und die zugehoerigen Daten werden geloescht.</p>\n<hr>\n<h2 id=\"datenschutz\"><a href=\"#datenschutz\">Datenschutz</a></h2>\n<p>Beim Teilen solltest du ein paar Punkte beachten.</p>\n<hr>\n<h3 id=\"datenaufbewahrung\"><a href=\"#datenaufbewahrung\">Datenaufbewahrung</a></h3>\n<p>Geteilte Unterhaltungen bleiben veroeffentlicht, bis du sie explizit aufhebst.\r\nDas umfasst:</p>\n<ul>\n<li>Vollstaendigen Unterhaltungsverlauf</li>\n<li>Alle Nachrichten und Antworten</li>\n<li>Sitzungsmetadaten</li>\n</ul>\n<hr>\n<h3 id=\"empfehlungen\"><a href=\"#empfehlungen\">Empfehlungen</a></h3>\n<ul>\n<li>Teile nur Unterhaltungen ohne sensible Informationen.</li>\n<li>Pruefe Inhalte vor dem Teilen.</li>\n<li>Hebe das Teilen wieder auf, wenn die Zusammenarbeit beendet ist.</li>\n<li>Teile keine proprietaeren Codes oder vertraulichen Daten.</li>\n<li>Deaktiviere Teilen komplett bei sensiblen Projekten.</li>\n</ul>\n<hr>\n<h2 id=\"für-unternehmen\"><a href=\"#für-unternehmen\">Für Unternehmen</a></h2>\n<p>In Enterprise-Umgebungen kann die Share-Funktion:</p>\n<ul>\n<li><strong>Deaktiviert</strong> werden, um Compliance-Vorgaben einzuhalten</li>\n<li>Auf <strong>SSO-authentifizierte</strong> Nutzer eingeschraenkt werden</li>\n<li><strong>Self-hosted</strong> auf eigener Infrastruktur betrieben werden</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Mehr dazu</a>, wie du sorycode in deiner Organisation einsetzt.</p>"
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
const url = "src/content/docs/de/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/de/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
