import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Compartilhar",
  "description": "Compartilhe suas conversas do sorycode."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "como-funciona",
    "text": "Como funciona"
  }, {
    "depth": 2,
    "slug": "compartilhamento",
    "text": "Compartilhamento"
  }, {
    "depth": 3,
    "slug": "manual-padrão",
    "text": "Manual (padrão)"
  }, {
    "depth": 3,
    "slug": "compartilhamento-automático",
    "text": "Compartilhamento automático"
  }, {
    "depth": 3,
    "slug": "desativado",
    "text": "Desativado"
  }, {
    "depth": 2,
    "slug": "cancelar-compartilhamento",
    "text": "Cancelar compartilhamento"
  }, {
    "depth": 2,
    "slug": "privacidade",
    "text": "Privacidade"
  }, {
    "depth": 3,
    "slug": "retenção-de-dados",
    "text": "Retenção de dados"
  }, {
    "depth": 3,
    "slug": "recomendações",
    "text": "Recomendações"
  }, {
    "depth": 2,
    "slug": "para-empresas",
    "text": "Para empresas"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>O recurso de compartilhamento do sorycode permite que você crie links públicos para suas conversas do sorycode, para que você possa colaborar com colegas de equipe ou obter ajuda de outros.</p>\n<aside aria-label=\"Nota\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Nota</p><div class=\"starlight-aside__content\"><p>Conversas compartilhadas são acessíveis publicamente para qualquer pessoa com o link.</p></div></aside>\n<hr>\n<h2 id=\"como-funciona\"><a href=\"#como-funciona\">Como funciona</a></h2>\n<p>Quando você compartilha uma conversa, o sorycode:</p>\n<ol>\n<li>Cria uma URL pública única para sua sessão</li>\n<li>Sincroniza seu histórico de conversas com nossos servidores</li>\n<li>Torna a conversa acessível através do link compartilhável — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"compartilhamento\"><a href=\"#compartilhamento\">Compartilhamento</a></h2>\n<p>O sorycode suporta três modos de compartilhamento que controlam como as conversas são compartilhadas:</p>\n<hr>\n<h3 id=\"manual-padrão\"><a href=\"#manual-padrão\">Manual (padrão)</a></h3>\n<p>Por padrão, o sorycode usa o modo de compartilhamento manual. As sessões não são compartilhadas automaticamente, mas você pode compartilhá-las manualmente usando o comando <code dir=\"auto\">/share</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Isso gerará uma URL única que será copiada para sua área de transferência.</p>\n<p>Para definir explicitamente o modo manual em seu <a href=\"/docs/config\">arquivo de configuração</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"compartilhamento-automático\"><a href=\"#compartilhamento-automático\">Compartilhamento automático</a></h3>\n<p>Você pode habilitar o compartilhamento automático para todas as novas conversas definindo a opção <code dir=\"auto\">share</code> como <code dir=\"auto\">\"auto\"</code> em seu <a href=\"/docs/config\">arquivo de configuração</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Com o compartilhamento automático habilitado, cada nova conversa será compartilhada automaticamente e um link será gerado.</p>\n<hr>\n<h3 id=\"desativado\"><a href=\"#desativado\">Desativado</a></h3>\n<p>Você pode desativar o compartilhamento completamente definindo a opção <code dir=\"auto\">share</code> como <code dir=\"auto\">\"disabled\"</code> em seu <a href=\"/docs/config\">arquivo de configuração</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Para impor isso em sua equipe para um determinado projeto, adicione-o ao <code dir=\"auto\">sorycode.json</code> em seu projeto e faça o check-in no Git.</p>\n<hr>\n<h2 id=\"cancelar-compartilhamento\"><a href=\"#cancelar-compartilhamento\">Cancelar compartilhamento</a></h2>\n<p>Para parar de compartilhar uma conversa e removê-la do acesso público:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Isso removerá o link de compartilhamento e excluirá os dados relacionados à conversa.</p>\n<hr>\n<h2 id=\"privacidade\"><a href=\"#privacidade\">Privacidade</a></h2>\n<p>Há algumas coisas a serem lembradas ao compartilhar uma conversa.</p>\n<hr>\n<h3 id=\"retenção-de-dados\"><a href=\"#retenção-de-dados\">Retenção de dados</a></h3>\n<p>Conversas compartilhadas permanecem acessíveis até que você as descompartilhe explicitamente. Isso inclui:</p>\n<ul>\n<li>Histórico completo da conversa</li>\n<li>Todas as mensagens e respostas</li>\n<li>Metadados da sessão</li>\n</ul>\n<hr>\n<h3 id=\"recomendações\"><a href=\"#recomendações\">Recomendações</a></h3>\n<ul>\n<li>Compartilhe apenas conversas que não contenham informações sensíveis.</li>\n<li>Revise o conteúdo da conversa antes de compartilhar.</li>\n<li>Descompartilhe conversas quando a colaboração estiver completa.</li>\n<li>Evite compartilhar conversas com código proprietário ou dados confidenciais.</li>\n<li>Para projetos sensíveis, desative o compartilhamento completamente.</li>\n</ul>\n<hr>\n<h2 id=\"para-empresas\"><a href=\"#para-empresas\">Para empresas</a></h2>\n<p>Para implantações empresariais, o recurso de compartilhamento pode ser:</p>\n<ul>\n<li><strong>Desativado</strong> completamente para conformidade de segurança</li>\n<li><strong>Restrito</strong> a usuários autenticados apenas através de SSO</li>\n<li><strong>Auto-hospedado</strong> em sua própria infraestrutura</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Saiba mais</a> sobre como usar o sorycode em sua organização.</p>"
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
const url = "src/content/docs/pt-br/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pt-br/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pt-br/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
