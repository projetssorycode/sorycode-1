import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Dijeljenje",
  "description": "Dijelite SoryCode razgovore javnim linkovima."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "kako-radi",
    "text": "Kako radi"
  }, {
    "depth": 2,
    "slug": "dijeljenje",
    "text": "Dijeljenje"
  }, {
    "depth": 3,
    "slug": "ručno-zadano",
    "text": "Ručno (zadano)"
  }, {
    "depth": 3,
    "slug": "automatsko-dijeljenje",
    "text": "Automatsko dijeljenje"
  }, {
    "depth": 3,
    "slug": "onemogućeno",
    "text": "Onemogućeno"
  }, {
    "depth": 2,
    "slug": "uklanjanje-dijeljenja",
    "text": "Uklanjanje dijeljenja"
  }, {
    "depth": 2,
    "slug": "privatnost",
    "text": "Privatnost"
  }, {
    "depth": 3,
    "slug": "čuvanje-podataka",
    "text": "Čuvanje podataka"
  }, {
    "depth": 3,
    "slug": "preporuke",
    "text": "Preporuke"
  }, {
    "depth": 2,
    "slug": "za-enterprise",
    "text": "Za enterprise"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>SoryCode opcija dijeljenja vam omogucava da kreirate javne linkove za razgovore. Tako lakse saradujete s timom ili trazite pomoc od drugih.</p>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><div class=\"starlight-aside__content\"><p>Dijeljeni razgovori su javno dostupni svakome ko ima link.</p></div></aside>\n<hr>\n<h2 id=\"kako-radi\"><a href=\"#kako-radi\">Kako radi</a></h2>\n<p>Kada podijelite razgovor, SoryCode:</p>\n<ol>\n<li>Kreira jedinstveni javni URL za vasu sesiju</li>\n<li>Sinhronizuje historiju razgovora na nase servere</li>\n<li>Cini razgovor dostupnim preko linka za dijeljenje — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"dijeljenje\"><a href=\"#dijeljenje\">Dijeljenje</a></h2>\n<p>SoryCode podrzava tri nacina dijeljenja koji odreduju kako se razgovori dijele:</p>\n<hr>\n<h3 id=\"ručno-zadano\"><a href=\"#ručno-zadano\">Ručno (zadano)</a></h3>\n<p>Po defaultu, SoryCode koristi rucni nacin dijeljenja. Sesije se ne dijele automatski, ali ih mozete rucno podijeliti komandom <code dir=\"auto\">/share</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Ovo ce generisati jedinstveni URL i kopirati ga u clipboard.</p>\n<p>Da eksplicitno postavite rucni nacin u <a href=\"/docs/config\">config datoteci</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"automatsko-dijeljenje\"><a href=\"#automatsko-dijeljenje\">Automatsko dijeljenje</a></h3>\n<p>Mozete ukljuciti automatsko dijeljenje za sve nove razgovore tako sto <code dir=\"auto\">share</code> postavite na <code dir=\"auto\">\"auto\"</code> u <a href=\"/docs/config\">config datoteci</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Kada je auto-share ukljucen, svaki novi razgovor se automatski dijeli i kreira se link.</p>\n<hr>\n<h3 id=\"onemogućeno\"><a href=\"#onemogućeno\">Onemogućeno</a></h3>\n<p>Dijeljenje mozete potpuno iskljuciti tako sto <code dir=\"auto\">share</code> postavite na <code dir=\"auto\">\"disabled\"</code> u <a href=\"/docs/config\">config datoteci</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Da ovo vazi za cijeli tim u odredenom projektu, dodajte postavku u projektni <code dir=\"auto\">sorycode.json</code> i commitujte u Git.</p>\n<hr>\n<h2 id=\"uklanjanje-dijeljenja\"><a href=\"#uklanjanje-dijeljenja\">Uklanjanje dijeljenja</a></h2>\n<p>Da prestanete dijeliti razgovor i uklonite javni pristup:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Ovo uklanja link za dijeljenje i brise podatke povezane s razgovorom.</p>\n<hr>\n<h2 id=\"privatnost\"><a href=\"#privatnost\">Privatnost</a></h2>\n<p>Imajte na umu nekoliko stvari prije dijeljenja razgovora.</p>\n<hr>\n<h3 id=\"čuvanje-podataka\"><a href=\"#čuvanje-podataka\">Čuvanje podataka</a></h3>\n<p>Dijeljeni razgovori ostaju dostupni dok ih eksplicitno ne uklonite iz dijeljenja. Ovo ukljucuje:</p>\n<ul>\n<li>Kompletnu historiju razgovora</li>\n<li>Sve poruke i odgovore</li>\n<li>Metapodatke sesije</li>\n</ul>\n<hr>\n<h3 id=\"preporuke\"><a href=\"#preporuke\">Preporuke</a></h3>\n<ul>\n<li>Dijelite samo razgovore koji ne sadrze osjetljive informacije.</li>\n<li>Pregledajte sadrzaj razgovora prije dijeljenja.</li>\n<li>Uklonite dijeljenje kad saradnja zavrsi.</li>\n<li>Izbjegavajte dijeljenje razgovora s vlasnickim kodom ili povjerljivim podacima.</li>\n<li>Za osjetljive projekte potpuno iskljucite dijeljenje.</li>\n</ul>\n<hr>\n<h2 id=\"za-enterprise\"><a href=\"#za-enterprise\">Za enterprise</a></h2>\n<p>Za enterprise okruzenja, opcija dijeljenja moze biti:</p>\n<ul>\n<li><strong>Iskljucena</strong> u potpunosti radi sigurnosne uskladenosti</li>\n<li><strong>Ogranicena</strong> samo na korisnike autentifikovane kroz SSO</li>\n<li><strong>Self-hosted</strong> na vasoj infrastrukturi</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Saznajte vise</a> o koristenju sorycode u organizaciji.</p>"
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
const url = "src/content/docs/bs/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/bs/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/bs/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
