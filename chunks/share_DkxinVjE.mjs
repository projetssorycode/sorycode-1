import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Udostępnianie",
  "description": "Udostępnij swoje rozmowy dotyczące sorycode."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "jak-to-działa",
    "text": "Jak to działa"
  }, {
    "depth": 2,
    "slug": "udostępnianie",
    "text": "Udostępnianie"
  }, {
    "depth": 3,
    "slug": "ręczne-domyślne",
    "text": "Ręczne (domyślne)"
  }, {
    "depth": 3,
    "slug": "automatyczne-udostępnianie",
    "text": "Automatyczne udostępnianie"
  }, {
    "depth": 3,
    "slug": "wyłączone",
    "text": "Wyłączone"
  }, {
    "depth": 2,
    "slug": "cofnięcie-udostępnienia",
    "text": "Cofnięcie udostępnienia"
  }, {
    "depth": 2,
    "slug": "prywatność",
    "text": "Prywatność"
  }, {
    "depth": 3,
    "slug": "przechowywanie-danych",
    "text": "Przechowywanie danych"
  }, {
    "depth": 3,
    "slug": "zalecenia",
    "text": "Zalecenia"
  }, {
    "depth": 2,
    "slug": "dla-przedsiębiorstw",
    "text": "Dla przedsiębiorstw"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Funkcja udostępniania sorycode umożliwia tworzenie publicznych linków do konwersacji sorycode, dzięki czemu możesz współpracować z członkami zespołu lub uzyskać pomoc od innych.</p>\n<aside aria-label=\"Notatka\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Notatka</p><div class=\"starlight-aside__content\"><p>Udostępnione konwersacje są publicznie dostępne dla każdej osoby mającej link.</p></div></aside>\n<hr>\n<h2 id=\"jak-to-działa\"><a href=\"#jak-to-działa\">Jak to działa</a></h2>\n<p>Kiedy udostępniasz rozmowę, sorycode:</p>\n<ol>\n<li>Tworzy unikalny publiczny adres URL sesji</li>\n<li>Synchronizuje historię rozmów z naszymi serwerami</li>\n<li>Udostępnia rozmowę za pośrednictwem łącza do udostępniania — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"udostępnianie\"><a href=\"#udostępnianie\">Udostępnianie</a></h2>\n<p>sorycode obsługuje trzy tryby udostępniania, które kontrolują sposób udostępniania rozmów:</p>\n<hr>\n<h3 id=\"ręczne-domyślne\"><a href=\"#ręczne-domyślne\">Ręczne (domyślne)</a></h3>\n<p>Domyślnie sorycode korzysta z ręcznego trybu udostępniania. Sesje nie są udostępniane automatycznie, ale możesz je udostępnić ręcznie za pomocą polecenia <code dir=\"auto\">/share</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Spowoduje to wygenerowanie unikalnego adresu URL, który zostanie skopiowany do schowka.</p>\n<p>Aby jawnie ustawić tryb ręczny w [pliku konfiguracyjnym] (./config):</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"automatyczne-udostępnianie\"><a href=\"#automatyczne-udostępnianie\">Automatyczne udostępnianie</a></h3>\n<p>Możesz włączyć automatyczne udostępnianie dla wszystkich nowych rozmów, ustawiając opcję <code dir=\"auto\">share</code> na <code dir=\"auto\">\"auto\"</code> w [pliku konfiguracyjnym] (./config):</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Po włączeniu automatycznego udostępniania każda nowa rozmowa będzie automatycznie udostępniana i generowany będzie link.</p>\n<hr>\n<h3 id=\"wyłączone\"><a href=\"#wyłączone\">Wyłączone</a></h3>\n<p>Możesz całkowicie wyłączyć udostępnianie, ustawiając opcję <code dir=\"auto\">share</code> na <code dir=\"auto\">\"disabled\"</code> w [pliku konfiguracyjnym] (./config):</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Aby wymusić to w całym zespole dla danego projektu, dodaj go do <code dir=\"auto\">sorycode.json</code> w swoim projekcie i sprawdź w Git.</p>\n<hr>\n<h2 id=\"cofnięcie-udostępnienia\"><a href=\"#cofnięcie-udostępnienia\">Cofnięcie udostępnienia</a></h2>\n<p>Aby zatrzymać udostępnianie rozmowy i usunąć ją z dostępu publicznego:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Spowoduje to usunięcie łącza udostępniania i danych związanych z rozmową.</p>\n<hr>\n<h2 id=\"prywatność\"><a href=\"#prywatność\">Prywatność</a></h2>\n<p>Podczas udostępniania rozmowy należy pamiętać o kilku rzeczach.</p>\n<hr>\n<h3 id=\"przechowywanie-danych\"><a href=\"#przechowywanie-danych\">Przechowywanie danych</a></h3>\n<p>Udostępnione rozmowy pozostają dostępne, dopóki wyraźnie ich nie udostępnisz. Ten\r\nincludes:</p>\n<ul>\n<li>Pełna historia rozmów</li>\n<li>Wszystkie wiadomości i odpowiedzi</li>\n<li>Metadane sesji</li>\n</ul>\n<hr>\n<h3 id=\"zalecenia\"><a href=\"#zalecenia\">Zalecenia</a></h3>\n<ul>\n<li>Udostępniaj tylko rozmowy, które nie zawierają poufnych informacji.</li>\n<li>Przejrzyj treść rozmowy przed udostępnieniem.</li>\n<li>Cofnij udostępnianie rozmów po zakończeniu współpracy.</li>\n<li>Unikaj udostępniania rozmów zawierających zastrzeżony kod lub poufne dane.</li>\n<li>W przypadku wrażliwych projektów całkowicie wyłącz udostępnianie.</li>\n</ul>\n<hr>\n<h2 id=\"dla-przedsiębiorstw\"><a href=\"#dla-przedsiębiorstw\">Dla przedsiębiorstw</a></h2>\n<p>W przypadku wdrożeń korporacyjnych funkcją udostępniania może być:</p>\n<ul>\n<li><strong>Wyłączone</strong> całkowicie ze względu na bezpieczeństwo</li>\n<li><strong>Restricted</strong> to users authenticated through SSO only</li>\n<li><strong>Własny hosting</strong> na własnej infrastrukturze</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Dowiedz się więcej</a> o używaniu sorycode w Twojej organizacji.</p>"
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
const url = "src/content/docs/pl/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pl/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pl/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
