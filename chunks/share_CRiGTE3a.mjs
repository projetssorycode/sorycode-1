import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';

const frontmatter = {
  "title": "공유",
  "description": "SoryCode 대화를 공유하세요."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "작동-방식",
    "text": "작동 방식"
  }, {
    "depth": 2,
    "slug": "공유",
    "text": "공유"
  }, {
    "depth": 2,
    "slug": "수동-기본",
    "text": "수동 (기본)"
  }, {
    "depth": 2,
    "slug": "자동-공유",
    "text": "자동 공유"
  }, {
    "depth": 4,
    "slug": "비활성화",
    "text": "비활성화"
  }, {
    "depth": 2,
    "slug": "공유-취소",
    "text": "공유 취소"
  }, {
    "depth": 2,
    "slug": "개인-정보",
    "text": "개인 정보"
  }, {
    "depth": 2,
    "slug": "데이터-보유",
    "text": "데이터 보유"
  }, {
    "depth": 3,
    "slug": "추천",
    "text": "추천"
  }, {
    "depth": 2,
    "slug": "기업용",
    "text": "기업용"
  }];
}
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>sorycode의 공유 기능은 sorycode 대화에 대한 공개 링크를 만들 수 있으므로 Teammates와 협업하거나 다른 곳에서 도움을받을 수 있습니다.</p>\n<aside aria-label=\"참고\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>참고</p><div class=\"starlight-aside__content\"><p>공유 대화는 링크를 통해 누구나 쉽게 접근할 수 있습니다.</p></div></aside>\n<hr>\n<h2 id=\"작동-방식\"><a href=\"#작동-방식\">작동 방식</a></h2>\n<p>대화를 공유할 때, sorycode:</p>\n<ol>\n<li>세션에 대한 독특한 공개 URL 만들기</li>\n<li>우리의 서버에 대화 기록 동기화</li>\n<li>공유 가능한 링크를 통해 접근 할 수있는 대화 만들기 — <code dir=\"auto\">opncd.ai/s/&#x3C;share-id></code></li>\n</ol>\n<hr>\n<h2 id=\"공유\"><a href=\"#공유\">공유</a></h2>\n<p>sorycode는 대화가 공유되는 방법을 제어하는 세 가지 공유 모드를 지원합니다.</p>\n<hr>\n<h2 id=\"수동-기본\"><a href=\"#수동-기본\">수동 (기본)</a></h2>\n<p>기본적으로 sorycode는 수동 공유 모드를 사용합니다. 세션은 자동으로 공유되지 않지만 <code dir=\"auto\">/share</code> 명령을 사용하여 수동으로 공유 할 수 있습니다.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/share</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/share\"><div></div></button></div></figure></div>\n<p>클립보드에 복사할 수 있는 독특한 URL을 생성합니다.</p>\n<p><a href=\"/docs/config\">config 파일</a>에서 수동 모드를 명시적으로 설정하려면:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"manual\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;manual&#x22;}\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"자동-공유\"><a href=\"#자동-공유\">자동 공유</a></h2>\n<p><code dir=\"auto\">share</code> 옵션을 설정하여 모든 새로운 대화에 대한 자동 공유를 활성화 할 수 있습니다 <code dir=\"auto\">\"auto\"</code> 당신의 <a href=\"/docs/config\">config 파일</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"auto\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;auto&#x22;}\"><div></div></button></div></figure></div>\n<p>자동 공유 활성화로 모든 새로운 대화는 자동으로 공유되고 링크가 생성됩니다.</p>\n<hr>\n<h4 id=\"비활성화\"><a href=\"#비활성화\">비활성화</a></h4>\n<p><code dir=\"auto\">share</code> 옵션을 설정하여 완전히 공유할 수 있습니다. <code dir=\"auto\">\"disabled\"</code>에 <a href=\"/docs/config\">config file</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p>주어진 프로젝트를 위해 팀 전반에 걸쳐 이것을 시행하려면 프로젝트에 <code dir=\"auto\">sorycode.json</code>에 추가하고 Git로 확인하십시오.</p>\n<hr>\n<h2 id=\"공유-취소\"><a href=\"#공유-취소\">공유 취소</a></h2>\n<p>대화를 중지하고 공공 액세스에서 제거 :</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">/unshare</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"/unshare\"><div></div></button></div></figure></div>\n<p>이 공유 링크를 제거하고 대화와 관련된 데이터를 삭제합니다.</p>\n<hr>\n<h2 id=\"개인-정보\"><a href=\"#개인-정보\">개인 정보</a></h2>\n<p>대화를 나누면 마음이 유지되는 몇 가지가 있습니다.</p>\n<hr>\n<h2 id=\"데이터-보유\"><a href=\"#데이터-보유\">데이터 보유</a></h2>\n<p>공유 대화는 명시적으로 그들을 공유 할 때까지 접근 할 수 있습니다. 이름 *\r\n다음:</p>\n<ul>\n<li>전체 대화 기록</li>\n<li>모든 메시지 및 응답</li>\n<li>세션 메타데이터</li>\n</ul>\n<hr>\n<h3 id=\"추천\"><a href=\"#추천\">추천</a></h3>\n<ul>\n<li>민감한 정보를 포함하지 않는 대화 만 공유합니다.</li>\n<li>공유하기 전에 대화 내용을 검토하십시오.</li>\n<li>협업이 완료되면 Unshare 대화.</li>\n<li>독점 코드 또는 기밀 데이터와 대화를 공유하지 마십시오.</li>\n<li>민감한 프로젝트를 위해, 완전히 공유할 수 있습니다.</li>\n</ul>\n<hr>\n<h2 id=\"기업용\"><a href=\"#기업용\">기업용</a></h2>\n<p>기업 배포를 위해, 공유 기능은:</p>\n<ul>\n<li>** 보안 준수를 위해 완전히 비활성화 **</li>\n<li>**SSO를 통해 인증된 사용자에 대한 제한 **</li>\n<li>** 자체 인프라 **</li>\n</ul>\n<p><a href=\"/docs/enterprise\">Learn more</a> 귀하의 조직에서 sorycode를 사용하여.</p>"
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
const url = "src/content/docs/ko/share.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/ko/share.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/ko/share.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
