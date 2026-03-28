import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Paylasim",
  "description": "sorycode konusmalarini genel baglantilarla paylasin."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "nasil-calisir",
    "text": "Nasil calisir"
  }, {
    "depth": 2,
    "slug": "paylasim",
    "text": "Paylasim"
  }, {
    "depth": 3,
    "slug": "manuel-varsayilan",
    "text": "Manuel (varsayilan)"
  }, {
    "depth": 3,
    "slug": "otomatik-paylasim",
    "text": "Otomatik paylasim"
  }, {
    "depth": 3,
    "slug": "devre-disi",
    "text": "Devre disi"
  }, {
    "depth": 2,
    "slug": "paylasimi-kaldirma",
    "text": "Paylasimi kaldirma"
  }, {
    "depth": 2,
    "slug": "gizlilik",
    "text": "Gizlilik"
  }, {
    "depth": 3,
    "slug": "veri-saklama",
    "text": "Veri saklama"
  }, {
    "depth": 3,
    "slug": "oneriler",
    "text": "Oneriler"
  }, {
    "depth": 2,
    "slug": "kurumsal-kullanim",
    "text": "Kurumsal kullanim"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>sorycode’un paylasim ozelligi, konusmalariniz icin genel baglantilar olusturmanizi saglar. Boylece ekip arkadaslarinizla birlikte calisabilir veya diger kisilerden yardim alabilirsiniz.</p>\n<aside aria-label=\"Not\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Not</p><div class=\"starlight-aside__content\"><p>Paylasilan konusmalar, baglantiya sahip herkes tarafindan gorulebilir.</p></div></aside>\n<hr>\n<h2 id=\"nasil-calisir\"><a href=\"#nasil-calisir\">Nasil calisir</a></h2>\n<p>Bir konusmayi paylastiginizda sorycode:</p>\n<ol>\n<li>Oturumunuz icin benzersiz bir genel URL olusturur</li>\n<li>Konusma gecmisinizi sunucularimiza senkronize eder</li>\n<li>Konusmayi paylasim baglantisiyla erisilebilir hale getirir - <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"paylasim\"><a href=\"#paylasim\">Paylasim</a></h2>\n<p>sorycode, konusmalarin nasil paylasilacagini kontrol eden uc farkli paylasim modu sunar:</p>\n<hr>\n<h3 id=\"manuel-varsayilan\"><a href=\"#manuel-varsayilan\">Manuel (varsayilan)</a></h3>\n<p>Varsayilan olarak sorycode manuel paylasim modunu kullanir. Oturumlar otomatik paylasilmaz, ancak <code dir=\"auto\">/share</code> komutuyla manuel olarak paylasabilirsiniz:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Bu komut benzersiz bir URL uretir ve panoya kopyalar.</p>\n<p>Manuel modu acikca ayarlamak icin <a href=\"/docs/config\">config dosyaniza</a> sunu ekleyin:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"otomatik-paylasim\"><a href=\"#otomatik-paylasim\">Otomatik paylasim</a></h3>\n<p>Tum yeni konusmalar icin otomatik paylasimi acmak isterseniz, <a href=\"/docs/config\">config dosyanizda</a> <code dir=\"auto\">share</code> degerini <code dir=\"auto\">\"auto\"</code> yapin:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Otomatik paylasim acikken her yeni konusma otomatik olarak paylasilir ve bir baglanti olusturulur.</p>\n<hr>\n<h3 id=\"devre-disi\"><a href=\"#devre-disi\">Devre disi</a></h3>\n<p>Paylasimi tamamen kapatmak icin <a href=\"/docs/config\">config dosyanizda</a> <code dir=\"auto\">share</code> degerini <code dir=\"auto\">\"disabled\"</code> yapin:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Bunu belirli bir projede tum ekip icin zorunlu kilmak icin proje icindeki <code dir=\"auto\">sorycode.json</code> dosyasina ekleyip Git’e commit edin.</p>\n<hr>\n<h2 id=\"paylasimi-kaldirma\"><a href=\"#paylasimi-kaldirma\">Paylasimi kaldirma</a></h2>\n<p>Bir konusmanin paylasimini durdurmak ve genel erisimi kaldirmak icin:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Bu komut paylasim baglantisini kaldirir ve konusmaya ait verileri siler.</p>\n<hr>\n<h2 id=\"gizlilik\"><a href=\"#gizlilik\">Gizlilik</a></h2>\n<p>Bir konusmayi paylasirken akilda tutulmasi gereken bazi noktalar vardir.</p>\n<hr>\n<h3 id=\"veri-saklama\"><a href=\"#veri-saklama\">Veri saklama</a></h3>\n<p>Paylasilan konusmalar, siz acikca paylasimi kaldirana kadar erisilebilir kalir. Buna sunlar dahildir:</p>\n<ul>\n<li>Tum konusma gecmisi</li>\n<li>Tum mesajlar ve yanitlar</li>\n<li>Oturum metaverisi</li>\n</ul>\n<hr>\n<h3 id=\"oneriler\"><a href=\"#oneriler\">Oneriler</a></h3>\n<ul>\n<li>Hassas bilgi icermeyen konusmalari paylasin.</li>\n<li>Paylasmadan once konusma icerigini gozden gecirin.</li>\n<li>Is birligi bittiginde paylasimi kaldirin.</li>\n<li>Tescilli kod veya gizli veri iceren konusmalari paylasmayin.</li>\n<li>Hassas projelerde paylasimi tamamen kapatin.</li>\n</ul>\n<hr>\n<h2 id=\"kurumsal-kullanim\"><a href=\"#kurumsal-kullanim\">Kurumsal kullanim</a></h2>\n<p>Kurumsal kurulumlarda paylasim ozelligi su sekillerde yapilandirilabilir:</p>\n<ul>\n<li>Guvenlik uyumu icin tamamen <strong>devre disi</strong> birakilabilir</li>\n<li>Sadece SSO ile dogrulanan kullanicilarla <strong>sinirlandirilabilir</strong></li>\n<li>Kendi altyapinizda <strong>self-hosted</strong> olarak calistirilabilir</li>\n</ul>\n<p>Kurulusunuzda sorycode kullanimi icin <a href=\"/docs/enterprise\">daha fazla bilgi alin</a>.</p>"
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
const url = "src/content/docs/tr/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/tr/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/tr/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
