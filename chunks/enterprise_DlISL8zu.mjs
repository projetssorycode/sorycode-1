import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';
import { c as config } from './config_D58fiqnm.mjs';

const frontmatter = {
  "title": "企业版",
  "description": "在您的组织中安全地使用 SoryCode。"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "试用",
    "text": "试用"
  }, {
    "depth": 3,
    "slug": "数据处理",
    "text": "数据处理"
  }, {
    "depth": 4,
    "slug": "分享对话",
    "text": "分享对话"
  }, {
    "depth": 3,
    "slug": "代码所有权",
    "text": "代码所有权"
  }, {
    "depth": 2,
    "slug": "定价",
    "text": "定价"
  }, {
    "depth": 2,
    "slug": "部署",
    "text": "部署"
  }, {
    "depth": 3,
    "slug": "集中式配置",
    "text": "集中式配置"
  }, {
    "depth": 3,
    "slug": "sso-集成",
    "text": "SSO 集成"
  }, {
    "depth": 3,
    "slug": "内部-ai-网关",
    "text": "内部 AI 网关"
  }, {
    "depth": 3,
    "slug": "自托管",
    "text": "自托管"
  }, {
    "depth": 2,
    "slug": "常见问题",
    "text": "常见问题"
  }];
}
const email = `mailto:${config.email}`;
function _createMdxContent(props) {
  const _components = {
    details: "details",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    summary: "summary",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>SoryCode 企业版面向希望确保代码和数据始终留在自有基础设施内的组织。它通过集中式配置与您的 SSO 和内部 AI 网关集成来实现这一目标。</p>\n<aside aria-label=\"注意\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>注意</p><div class=\"starlight-aside__content\"><p>SoryCode 不会存储您的任何代码或上下文数据。</p></div></aside>\n<p>开始使用 SoryCode 企业版：</p>\n"
    }), createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "在团队内部进行试用。"
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode("a", {
            href: email,
            "set:html": "联系我们"
          })
        }), "，讨论定价和实施方案。"]
      }), "\n"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"试用\"><a href=\"#试用\">试用</a></h2>\n<p>SoryCode 是开源的，不会存储您的任何代码或上下文数据，因此您的开发人员可以直接<a href=\"/docs/\">开始使用</a>并进行试用。</p>\n<hr>\n<h3 id=\"数据处理\"><a href=\"#数据处理\">数据处理</a></h3>\n<p>**SoryCode 不会存储您的代码或上下文数据。**所有处理均在本地完成，或通过直接 API 调用发送至您的 AI 提供商。</p>\n<p>这意味着，只要您使用的是信任的提供商或内部 AI 网关，就可以安全地使用 SoryCode。</p>\n<p>唯一需要注意的是可选的 <code dir=\"auto\">/share</code> 功能。</p>\n<hr>\n<h4 id=\"分享对话\"><a href=\"#分享对话\">分享对话</a></h4>\n<p>如果用户启用了 <code dir=\"auto\">/share</code> 功能，对话及其关联数据将被发送到我们用于在 sorycode.ai 上托管共享页面的服务。</p>\n<p>数据目前通过我们 CDN 的边缘网络提供服务，并缓存在靠近用户的边缘节点上。</p>\n<p>我们建议您在试用期间禁用此功能。</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p><a href=\"/docs/share\">了解更多关于分享的信息</a>。</p>\n<hr>\n<h3 id=\"代码所有权\"><a href=\"#代码所有权\">代码所有权</a></h3>\n<p>**您拥有 SoryCode 生成的所有代码。**不存在任何许可限制或所有权声明。</p>\n<hr>\n<h2 id=\"定价\"><a href=\"#定价\">定价</a></h2>\n"
    }), createVNode(_components.p, {
      children: ["SoryCode 企业版采用按席位定价模型。如果您拥有自己的 LLM 网关，我们不会对使用的 Token 收取费用。有关定价和实施方案的更多详情，请**", createVNode("a", {
        href: email,
        "set:html": "联系我们"
      }), "**。"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"部署\"><a href=\"#部署\">部署</a></h2>\n"
    }), createVNode(_components.p, {
      children: ["完成试用并准备好在组织中使用 SoryCode 后，您可以**", createVNode("a", {
        href: email,
        "set:html": "联系我们"
      }), "**，讨论定价和实施方案。"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"集中式配置\"><a href=\"#集中式配置\">集中式配置</a></h3>\n<p>我们可以为您的整个组织设置 SoryCode 的统一集中式配置。</p>\n<p>该集中式配置可与您的 SSO 提供商集成，确保所有用户仅访问您的内部 AI 网关。</p>\n<hr>\n<h3 id=\"sso-集成\"><a href=\"#sso-集成\">SSO 集成</a></h3>\n<p>通过集中式配置，SoryCode 可以与您组织的 SSO 提供商集成进行身份验证。</p>\n<p>这使得 SoryCode 能够通过您现有的身份管理系统获取内部 AI 网关的凭据。</p>\n<hr>\n<h3 id=\"内部-ai-网关\"><a href=\"#内部-ai-网关\">内部 AI 网关</a></h3>\n<p>通过集中式配置，SoryCode 还可以被配置为仅使用您的内部 AI 网关。</p>\n<p>您还可以禁用所有其他 AI 提供商，确保所有请求都经过组织批准的基础设施。</p>\n<hr>\n<h3 id=\"自托管\"><a href=\"#自托管\">自托管</a></h3>\n<p>虽然我们建议禁用共享页面以确保您的数据始终不会离开组织，但我们也可以帮助您在自己的基础设施上自行托管这些页面。</p>\n"
    }), createVNode(_components.p, {
      children: ["此功能目前已列入我们的路线图。如果您感兴趣，请**", createVNode("a", {
        href: email,
        "set:html": "告诉我们"
      }), "**。"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"常见问题\"><a href=\"#常见问题\">常见问题</a></h2>\n<details><summary>什么是 SoryCode 企业版？</summary><p>SoryCode 企业版面向希望确保代码和数据始终留在自有基础设施内的组织。它通过集中式配置与您的 SSO 和内部 AI 网关集成来实现这一目标。</p></details>\n"
    }), createVNode(_components.details, {
      children: [createVNode(_components.summary, {
        children: "如何开始使用 SoryCode 企业版？"
      }), createVNode(_components.p, {
        children: "只需在团队内部开始试用即可。SoryCode 默认不存储您的代码或上下文数据，因此可以轻松上手。"
      }), createVNode(_components.p, {
        children: ["然后**", createVNode("a", {
          href: email,
          "set:html": "联系我们"
        }), "**，讨论定价和实施方案。"]
      })]
    }), "\n", createVNode(_components.details, {
      children: [createVNode(_components.summary, {
        children: "企业版定价如何运作？"
      }), createVNode(_components.p, {
        children: ["我们提供按席位的企业版定价。如果您拥有自己的 LLM 网关，我们不会对使用的 Token 收取费用。如需了解更多详情，请**", createVNode("a", {
          href: email,
          "set:html": "联系我们"
        }), "**，获取根据您组织需求定制的报价。"]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<details><summary>我的数据在 SoryCode 企业版中是否安全？</summary><p>是的。SoryCode 不会存储您的代码或上下文数据。所有处理均在本地完成，或通过直接 API 调用发送至您的 AI 提供商。通过集中式配置和 SSO 集成，您的数据将安全地保留在组织的基础设施内。</p></details>\n<details><summary>我们可以使用自己的私有 NPM 注册表吗？</summary><p>SoryCode 通过 Bun 原生的 <code dir=\"auto\">.npmrc</code> 文件支持来支持私有 npm 注册表。如果您的组织使用私有注册表（例如 JFrog Artifactory、Nexus 或类似产品），请确保开发人员在运行 SoryCode 之前已完成身份验证。</p><p>要设置私有注册表的身份验证：</p><div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">npm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--registry=https://your-company.jfrog.io/api/npm/npm-virtual/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"npm login --registry=https://your-company.jfrog.io/api/npm/npm-virtual/\"><div></div></button></div></figure></div><p>这会创建包含身份验证信息的 <code dir=\"auto\">~/.npmrc</code> 文件。SoryCode 会自动识别并使用它。</p><aside aria-label=\"警告\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>警告</p><div class=\"starlight-aside__content\"><p>在运行 SoryCode 之前，您必须先登录私有注册表。</p></div></aside><p>或者，您也可以手动配置 <code dir=\"auto\">.npmrc</code> 文件：</p><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">~/.npmrc</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">registry</span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#032F62;--1:#9ECBFF\">https://your-company.jfrog.io/api/npm/npm-virtual/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">//your-company.jfrog.io/api/npm/npm-virtual/:_authToken</span><span style=\"--0:#032F62;--1:#9ECBFF\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\">${NPM_AUTH_TOKEN}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"registry=https://your-company.jfrog.io/api/npm/npm-virtual///your-company.jfrog.io/api/npm/npm-virtual/:_authToken=${NPM_AUTH_TOKEN}\"><div></div></button></div></figure></div><p>开发人员必须在运行 SoryCode 之前登录私有注册表，以确保能够从您的企业注册表安装软件包。</p></details>"
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

const url = "src/content/docs/zh-cn/enterprise.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/zh-cn/enterprise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/zh-cn/enterprise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, email, file, frontmatter, getHeadings, url };
