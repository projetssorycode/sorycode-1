import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "Делиться",
  "description": "Поделитесь своими разговорами об sorycode."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "как-это-работает",
    "text": "Как это работает"
  }, {
    "depth": 2,
    "slug": "совместное-использование",
    "text": "Совместное использование"
  }, {
    "depth": 3,
    "slug": "ручной-по-умолчанию",
    "text": "Ручной (по умолчанию)"
  }, {
    "depth": 3,
    "slug": "автоматическая-публикация",
    "text": "Автоматическая публикация"
  }, {
    "depth": 3,
    "slug": "отключено",
    "text": "Отключено"
  }, {
    "depth": 2,
    "slug": "отменить-совместное-использование",
    "text": "Отменить совместное использование"
  }, {
    "depth": 2,
    "slug": "конфиденциальность",
    "text": "Конфиденциальность"
  }, {
    "depth": 3,
    "slug": "хранение-данных",
    "text": "Хранение данных"
  }, {
    "depth": 3,
    "slug": "рекомендации",
    "text": "Рекомендации"
  }, {
    "depth": 2,
    "slug": "для-предприятий",
    "text": "Для предприятий"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>Функция общего доступа sorycode позволяет вам создавать общедоступные ссылки на ваши беседы sorycode, чтобы вы могли сотрудничать с товарищами по команде или получать помощь от других.</p>\n<aside aria-label=\"Заметка\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Заметка</p><div class=\"starlight-aside__content\"><p>Общие беседы общедоступны для всех, у кого есть ссылка.</p></div></aside>\n<hr>\n<h2 id=\"как-это-работает\"><a href=\"#как-это-работает\">Как это работает</a></h2>\n<p>Когда вы делитесь беседой, sorycode:</p>\n<ol>\n<li>Создает уникальный общедоступный URL-адрес для вашего сеанса.</li>\n<li>Синхронизирует историю ваших разговоров с нашими серверами</li>\n<li>Делает беседу доступной по общей ссылке — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code>.</li>\n</ol>\n<hr>\n<h2 id=\"совместное-использование\"><a href=\"#совместное-использование\">Совместное использование</a></h2>\n<p>sorycode поддерживает три режима общего доступа, которые контролируют общий доступ к разговорам:</p>\n<hr>\n<h3 id=\"ручной-по-умолчанию\"><a href=\"#ручной-по-умолчанию\">Ручной (по умолчанию)</a></h3>\n<p>По умолчанию sorycode использует режим совместного использования вручную. Сессии не передаются автоматически, но вы можете поделиться ими вручную с помощью команды <code dir=\"auto\">/share</code>:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>Это создаст уникальный URL-адрес, который будет скопирован в буфер обмена.</p>\n<p>Чтобы явно установить ручной режим в вашем <a href=\"/docs/config\">файле конфигурации</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"автоматическая-публикация\"><a href=\"#автоматическая-публикация\">Автоматическая публикация</a></h3>\n<p>Вы можете включить автоматический общий доступ для всех новых разговоров, установив для параметра <code dir=\"auto\">share</code> значение <code dir=\"auto\">\"auto\"</code> в вашем <a href=\"/docs/config\">файле конфигурации</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>Если функция автоматического обмена включена, каждый новый разговор будет автоматически опубликован и будет создана ссылка.</p>\n<hr>\n<h3 id=\"отключено\"><a href=\"#отключено\">Отключено</a></h3>\n<p>Вы можете полностью отключить общий доступ, установив для параметра <code dir=\"auto\">share</code> значение <code dir=\"auto\">\"disabled\"</code> в вашем <a href=\"/docs/config\">файле конфигурации</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>Чтобы обеспечить соблюдение этого правила для всей вашей команды в конкретном проекте, добавьте его в <code dir=\"auto\">sorycode.json</code> вашего проекта и зарегистрируйтесь в Git.</p>\n<hr>\n<h2 id=\"отменить-совместное-использование\"><a href=\"#отменить-совместное-использование\">Отменить совместное использование</a></h2>\n<p>Чтобы прекратить делиться беседой и удалить ее из общего доступа:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>Это приведет к удалению ссылки общего доступа и удалению данных, связанных с разговором.</p>\n<hr>\n<h2 id=\"конфиденциальность\"><a href=\"#конфиденциальность\">Конфиденциальность</a></h2>\n<p>Есть несколько вещей, которые следует учитывать при общении.</p>\n<hr>\n<h3 id=\"хранение-данных\"><a href=\"#хранение-данных\">Хранение данных</a></h3>\n<p>Общие разговоры остаются доступными до тех пор, пока вы явно не отмените общий доступ к ним. Этот\r\nвключает в себя:</p>\n<ul>\n<li>Полная история разговоров</li>\n<li>Все сообщения и ответы</li>\n<li>Метаданные сеанса</li>\n</ul>\n<hr>\n<h3 id=\"рекомендации\"><a href=\"#рекомендации\">Рекомендации</a></h3>\n<ul>\n<li>Делитесь только разговорами, которые не содержат конфиденциальной информации.</li>\n<li>Прежде чем поделиться, просмотрите содержимое разговора.</li>\n<li>Отмените общий доступ к разговорам после завершения сотрудничества.</li>\n<li>Избегайте обмена разговорами с проприетарным кодом или конфиденциальными данными.</li>\n<li>Для конфиденциальных проектов полностью отключите общий доступ.</li>\n</ul>\n<hr>\n<h2 id=\"для-предприятий\"><a href=\"#для-предприятий\">Для предприятий</a></h2>\n<p>Для корпоративных развертываний функция общего доступа может быть:</p>\n<ul>\n<li><strong>Отключено</strong> полностью из соображений безопасности.</li>\n<li><strong>Доступно только</strong> для пользователей, прошедших аутентификацию посредством единого входа.</li>\n<li><strong>Автономное размещение</strong> в вашей собственной инфраструктуре</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Узнайте больше</a> об использовании sorycode в вашей организации.</p>"
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
const url = "src/content/docs/ru/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/ru/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/ru/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
