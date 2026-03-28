import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Condivisione",
  "description": "Condividi le tue conversazioni SoryCode."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "come-funziona",
    "text": "Come funziona"
  }, {
    "depth": 2,
    "slug": "condivisione",
    "text": "Condivisione"
  }, {
    "depth": 3,
    "slug": "manuale-predefinito",
    "text": "Manuale (predefinito)"
  }, {
    "depth": 3,
    "slug": "automatico",
    "text": "Automatico"
  }, {
    "depth": 3,
    "slug": "disabilitato",
    "text": "Disabilitato"
  }, {
    "depth": 2,
    "slug": "annullare-la-condivisione",
    "text": "Annullare la condivisione"
  }, {
    "depth": 2,
    "slug": "privacy",
    "text": "Privacy"
  }, {
    "depth": 3,
    "slug": "conservazione-dati",
    "text": "Conservazione dati"
  }, {
    "depth": 3,
    "slug": "raccomandazioni",
    "text": "Raccomandazioni"
  }, {
    "depth": 2,
    "slug": "per-le-aziende",
    "text": "Per le aziende"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>La funzione di condivisione di SoryCode ti permette di creare link pubblici alle tue conversazioni, cosi puoi collaborare con i colleghi o chiedere aiuto ad altre persone.</p>\n<aside aria-label=\"Nota\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Nota</p><div class=\"starlight-aside__content\"><p>Le conversazioni condivise sono accessibili pubblicamente a chiunque abbia il link.</p></div></aside>\n<hr>\n<h2 id=\"come-funziona\"><a href=\"#come-funziona\">Come funziona</a></h2>\n<p>Quando condividi una conversazione, SoryCode:</p>\n<ol>\n<li>Crea un URL pubblico univoco per la sessione</li>\n<li>Sincronizza la cronologia della conversazione sui nostri server</li>\n<li>Rende la conversazione accessibile tramite il link condivisibile: <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"condivisione\"><a href=\"#condivisione\">Condivisione</a></h2>\n<p>SoryCode supporta tre modalita di condivisione che controllano come vengono condivise le conversazioni:</p>\n<hr>\n<h3 id=\"manuale-predefinito\"><a href=\"#manuale-predefinito\">Manuale (predefinito)</a></h3>\n<p>Per impostazione predefinita, SoryCode usa la condivisione manuale. Le sessioni non vengono condivise automaticamente, ma puoi condividerle manualmente con il comando <code dir=\"auto\">/share</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Questo genera un URL univoco che viene copiato negli appunti.</p>\n<p>Per impostare esplicitamente la modalita manuale nel tuo <a href=\"/docs/config\">file di config</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"automatico\"><a href=\"#automatico\">Automatico</a></h3>\n<p>Puoi abilitare la condivisione automatica per tutte le nuove conversazioni impostando l’opzione <code dir=\"auto\">share</code> su <code dir=\"auto\">\"auto\"</code> nel tuo <a href=\"/docs/config\">file di config</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Con la condivisione automatica attiva, ogni nuova conversazione verra condivisa automaticamente e verra generato un link.</p>\n<hr>\n<h3 id=\"disabilitato\"><a href=\"#disabilitato\">Disabilitato</a></h3>\n<p>Puoi disabilitare completamente la condivisione impostando l’opzione <code dir=\"auto\">share</code> su <code dir=\"auto\">\"disabled\"</code> nel tuo <a href=\"/docs/config\">file di config</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Per applicarlo al tuo team in un progetto specifico, aggiungilo a <code dir=\"auto\">sorycode.json</code> nel progetto e versionalo su Git.</p>\n<hr>\n<h2 id=\"annullare-la-condivisione\"><a href=\"#annullare-la-condivisione\">Annullare la condivisione</a></h2>\n<p>Per smettere di condividere una conversazione e rimuoverla dall’accesso pubblico:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Questo rimuove il link di condivisione ed elimina i dati associati alla conversazione.</p>\n<hr>\n<h2 id=\"privacy\"><a href=\"#privacy\">Privacy</a></h2>\n<p>Ci sono alcune cose da tenere a mente quando condividi una conversazione.</p>\n<hr>\n<h3 id=\"conservazione-dati\"><a href=\"#conservazione-dati\">Conservazione dati</a></h3>\n<p>Le conversazioni condivise restano accessibili finche non le annulli esplicitamente. Questo include:</p>\n<ul>\n<li>La cronologia completa della conversazione</li>\n<li>Tutti i messaggi e le risposte</li>\n<li>I metadati della sessione</li>\n</ul>\n<hr>\n<h3 id=\"raccomandazioni\"><a href=\"#raccomandazioni\">Raccomandazioni</a></h3>\n<ul>\n<li>Condividi solo conversazioni che non contengono informazioni sensibili.</li>\n<li>Rivedi il contenuto della conversazione prima di condividerla.</li>\n<li>Annulla la condivisione quando la collaborazione e conclusa.</li>\n<li>Evita di condividere conversazioni con codice proprietario o dati riservati.</li>\n<li>Per progetti sensibili, disabilita completamente la condivisione.</li>\n</ul>\n<hr>\n<h2 id=\"per-le-aziende\"><a href=\"#per-le-aziende\">Per le aziende</a></h2>\n<p>Per deploy enterprise, la condivisione puo essere:</p>\n<ul>\n<li><strong>Disabilitata</strong> completamente per requisiti di conformita e sicurezza</li>\n<li><strong>Limitata</strong> ai soli utenti autenticati tramite SSO</li>\n<li><strong>Self-hosted</strong> sulla tua infrastruttura</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Scopri di piu</a> su come usare sorycode nella tua organizzazione.</p>"
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
const url = "src/content/docs/it/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/it/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/it/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
