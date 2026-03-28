import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "分享",
  "description": "分享您的 SoryCode 对话。"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "工作原理",
    "text": "工作原理"
  }, {
    "depth": 2,
    "slug": "分享模式",
    "text": "分享模式"
  }, {
    "depth": 3,
    "slug": "手动模式默认",
    "text": "手动模式（默认）"
  }, {
    "depth": 3,
    "slug": "自动分享",
    "text": "自动分享"
  }, {
    "depth": 3,
    "slug": "禁用",
    "text": "禁用"
  }, {
    "depth": 2,
    "slug": "取消分享",
    "text": "取消分享"
  }, {
    "depth": 2,
    "slug": "隐私",
    "text": "隐私"
  }, {
    "depth": 3,
    "slug": "数据留存",
    "text": "数据留存"
  }, {
    "depth": 3,
    "slug": "建议",
    "text": "建议"
  }, {
    "depth": 2,
    "slug": "企业版",
    "text": "企业版"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>SoryCode 的分享功能允许您创建指向 SoryCode 对话的公开链接，方便与团队成员协作或向他人寻求帮助。</p>\n<aside aria-label=\"注意\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>注意</p><div class=\"starlight-aside__content\"><p>共享的对话对任何拥有链接的人都是公开可访问的。</p></div></aside>\n<hr>\n<h2 id=\"工作原理\"><a href=\"#工作原理\">工作原理</a></h2>\n<p>当您分享一段对话时，SoryCode 会：</p>\n<ol>\n<li>为您的会话创建一个唯一的公开 URL</li>\n<li>将您的对话历史同步到我们的服务器</li>\n<li>通过可分享的链接使对话可访问 — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"分享模式\"><a href=\"#分享模式\">分享模式</a></h2>\n<p>SoryCode 支持三种分享模式，用于控制对话的共享方式：</p>\n<hr>\n<h3 id=\"手动模式默认\"><a href=\"#手动模式默认\">手动模式（默认）</a></h3>\n<p>默认情况下，SoryCode 使用手动分享模式。会话不会自动共享，但您可以使用 <code dir=\"auto\">/share</code> 命令手动分享：</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>这将生成一个唯一的 URL 并复制到您的剪贴板。</p>\n<p>要在<a href=\"/docs/config\">配置文件</a>中显式设置手动模式：</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"自动分享\"><a href=\"#自动分享\">自动分享</a></h3>\n<p>您可以在<a href=\"/docs/config\">配置文件</a>中将 <code dir=\"auto\">share</code> 选项设置为 <code dir=\"auto\">\"auto\"</code>，为所有新对话启用自动分享：</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>启用自动分享后，每个新对话都会自动共享并生成链接。</p>\n<hr>\n<h3 id=\"禁用\"><a href=\"#禁用\">禁用</a></h3>\n<p>您可以在<a href=\"/docs/config\">配置文件</a>中将 <code dir=\"auto\">share</code> 选项设置为 <code dir=\"auto\">\"disabled\"</code>，完全禁用分享功能：</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>要在团队中对特定项目强制执行此设置，请将其添加到项目的 <code dir=\"auto\">sorycode.json</code> 文件中并提交到 Git。</p>\n<hr>\n<h2 id=\"取消分享\"><a href=\"#取消分享\">取消分享</a></h2>\n<p>要停止分享对话并将其从公开访问中移除：</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>这将移除分享链接并删除与该对话相关的数据。</p>\n<hr>\n<h2 id=\"隐私\"><a href=\"#隐私\">隐私</a></h2>\n<p>分享对话时需要注意以下几点。</p>\n<hr>\n<h3 id=\"数据留存\"><a href=\"#数据留存\">数据留存</a></h3>\n<p>共享的对话在您明确取消分享之前将一直保持可访问状态。这包括：</p>\n<ul>\n<li>完整的对话历史</li>\n<li>所有消息和回复</li>\n<li>会话元数据</li>\n</ul>\n<hr>\n<h3 id=\"建议\"><a href=\"#建议\">建议</a></h3>\n<ul>\n<li>仅分享不包含敏感信息的对话。</li>\n<li>分享前请检查对话内容。</li>\n<li>协作完成后请取消分享。</li>\n<li>避免分享包含专有代码或机密数据的对话。</li>\n<li>对于敏感项目，请完全禁用分享功能。</li>\n</ul>\n<hr>\n<h2 id=\"企业版\"><a href=\"#企业版\">企业版</a></h2>\n<p>对于企业部署，分享功能可以：</p>\n<ul>\n<li>出于安全合规考虑<strong>完全禁用</strong></li>\n<li><strong>限制</strong>为仅通过 SSO 身份验证的用户可用</li>\n<li><strong>自托管</strong>在您自己的基础设施上</li>\n</ul>\n<p><a href=\"/docs/enterprise\">了解更多</a>关于在您的组织中使用 SoryCode 的信息。</p>"
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
const url = "src/content/docs/zh-cn/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/zh-cn/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/zh-cn/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
