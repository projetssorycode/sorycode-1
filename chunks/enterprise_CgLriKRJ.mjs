import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';
import { c as config } from './config_D58fiqnm.mjs';

const frontmatter = {
  "title": "Empresa",
  "description": "Usar SoryCode de forma segura en su organización."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "prueba",
    "text": "Prueba"
  }, {
    "depth": 3,
    "slug": "manejo-de-datos",
    "text": "Manejo de datos"
  }, {
    "depth": 4,
    "slug": "compartir-conversaciones",
    "text": "Compartir conversaciones"
  }, {
    "depth": 3,
    "slug": "propiedad-del-código",
    "text": "Propiedad del código"
  }, {
    "depth": 2,
    "slug": "precios",
    "text": "Precios"
  }, {
    "depth": 2,
    "slug": "implementación",
    "text": "Implementación"
  }, {
    "depth": 3,
    "slug": "configuración-central",
    "text": "Configuración central"
  }, {
    "depth": 3,
    "slug": "integración-sso",
    "text": "Integración SSO"
  }, {
    "depth": 3,
    "slug": "puerta-de-enlace-interna-de-ia",
    "text": "Puerta de enlace interna de IA"
  }, {
    "depth": 3,
    "slug": "autohospedaje",
    "text": "Autohospedaje"
  }, {
    "depth": 2,
    "slug": "preguntas-frecuentes",
    "text": "Preguntas frecuentes"
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
      "set:html": "<p>SoryCode Enterprise es para organizaciones que desean garantizar que su código y sus datos nunca abandonen su infraestructura. Puede hacerlo mediante el uso de una configuración centralizada que se integra con su SSO y su puerta de enlace AI interna.</p>\n<aside aria-label=\"Nota\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Nota</p><div class=\"starlight-aside__content\"><p>SoryCode no almacena ningún código ni datos de contexto.</p></div></aside>\n<p>Para comenzar con SoryCode Enterprise:</p>\n"
    }), createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "Haz una prueba interna con tu equipo."
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: createVNode("a", {
            href: email,
            "set:html": "Contáctenos"
          })
        }), " para analizar los precios y las opciones de implementación."]
      }), "\n"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"prueba\"><a href=\"#prueba\">Prueba</a></h2>\n<p>SoryCode es de código abierto y no almacena ningún código ni datos de contexto, por lo que sus desarrolladores pueden simplemente <a href=\"/docs/\">comenzar</a> y realizar una prueba.</p>\n<hr>\n<h3 id=\"manejo-de-datos\"><a href=\"#manejo-de-datos\">Manejo de datos</a></h3>\n<p><strong>SoryCode no almacena su código ni datos de contexto.</strong> Todo el procesamiento se realiza localmente o mediante llamadas directas API a su proveedor de IA.</p>\n<p>Esto significa que, siempre que uses un proveedor de confianza o un\r\nAI gateway interno, puedes usar SoryCode de forma segura.</p>\n<p>La única advertencia aquí es la característica opcional <code dir=\"auto\">/share</code>.</p>\n<hr>\n<h4 id=\"compartir-conversaciones\"><a href=\"#compartir-conversaciones\">Compartir conversaciones</a></h4>\n<p>Si un usuario habilita la función <code dir=\"auto\">/share</code>, la conversación y los datos asociados con ella se envían al servicio que utilizamos para alojar estas páginas compartidas en sorycode.ai.</p>\n<p>Actualmente, los datos se entregan a través de la red perimetral de nuestra CDN y se almacenan en caché en el perímetro cerca de sus usuarios.</p>\n<p>Le recomendamos que desactive esto para su prueba.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/sorycode-1/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/sorycode-1/_astro/ec.0vx5m.js\"></script><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">sorycode.json</span></figcaption><pre data-language=\"json\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"$schema\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"https://opencode.ai/config.json\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">,</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#005CC5;--1:#79B8FF\">\"share\"</span><span style=\"--0:#24292E;--1:#E1E4E8\">: </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"disabled\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copiar al portapapeles\" data-copied=\"¡Copiado!\" data-code=\"{  &#x22;$schema&#x22;: &#x22;https://opencode.ai/config.json&#x22;,  &#x22;share&#x22;: &#x22;disabled&#x22;}\"><div></div></button></div></figure></div>\n<p><a href=\"/docs/share\">Más información sobre cómo compartir</a>.</p>\n<hr>\n<h3 id=\"propiedad-del-código\"><a href=\"#propiedad-del-código\">Propiedad del código</a></h3>\n<p><strong>Eres propietario de todo el código producido por SoryCode.</strong> No existen restricciones de licencia ni reclamaciones de propiedad.</p>\n<hr>\n<h2 id=\"precios\"><a href=\"#precios\">Precios</a></h2>\n"
    }), createVNode(_components.p, {
      children: ["Usamos un modelo por puesto para SoryCode Enterprise. Si tiene su propia puerta de enlace LLM, no cobramos por los tokens utilizados. Para obtener más detalles sobre precios y opciones de implementación, ", createVNode(_components.strong, {
        children: createVNode("a", {
          href: email,
          "set:html": "contáctenos"
        })
      }), "."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"implementación\"><a href=\"#implementación\">Implementación</a></h2>\n"
    }), createVNode(_components.p, {
      children: ["Una vez que haya completado su prueba y esté listo para usar SoryCode en\r\nsu organización, puede ", createVNode(_components.strong, {
        children: createVNode("a", {
          href: email,
          "set:html": "contáctenos"
        })
      }), " para discutir\r\nopciones de fijación de precios y de implementación."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"configuración-central\"><a href=\"#configuración-central\">Configuración central</a></h3>\n<p>Podemos configurar SoryCode para usar una única configuración central para toda su organización.</p>\n<p>Esta configuración centralizada puede integrarse con su proveedor de SSO y garantiza que todos los usuarios accedan únicamente a su puerta de enlace de IA interna.</p>\n<hr>\n<h3 id=\"integración-sso\"><a href=\"#integración-sso\">Integración SSO</a></h3>\n<p>A través de la configuración central, SoryCode puede integrarse con el proveedor de SSO de su organización para la autenticación.</p>\n<p>Esto permite a SoryCode obtener credenciales para su puerta de enlace interna de IA a través de su sistema de gestión de identidad existente.</p>\n<hr>\n<h3 id=\"puerta-de-enlace-interna-de-ia\"><a href=\"#puerta-de-enlace-interna-de-ia\">Puerta de enlace interna de IA</a></h3>\n<p>Con la configuración central, SoryCode también se puede configurar para usar solo su puerta de enlace AI interna.</p>\n<p>También puede desactivar todos los demás proveedores de IA, asegurándose de que todas las solicitudes pasen por la infraestructura aprobada de su organización.</p>\n<hr>\n<h3 id=\"autohospedaje\"><a href=\"#autohospedaje\">Autohospedaje</a></h3>\n<p>Si bien recomendamos desactivar las páginas para compartir para garantizar que sus datos nunca abandonen\r\nsu organización, también podemos ayudarle a autohospedarlos en su infraestructura.</p>\n"
    }), createVNode(_components.p, {
      children: ["Esto se encuentra actualmente en nuestra hoja de ruta. Si está interesado, ", createVNode(_components.strong, {
        children: createVNode("a", {
          href: email,
          "set:html": "háganoslo saber"
        })
      }), "."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"preguntas-frecuentes\"><a href=\"#preguntas-frecuentes\">Preguntas frecuentes</a></h2>\n<details><summary>¿Qué es SoryCode Enterprise?</summary><p>SoryCode Enterprise es para organizaciones que desean garantizar que su código y sus datos nunca abandonen su infraestructura. Puede hacerlo mediante el uso de una configuración centralizada que se integra con su SSO y su puerta de enlace AI interna.</p></details>\n"
    }), createVNode(_components.details, {
      children: [createVNode(_components.summary, {
        children: "¿Cómo empiezo con SoryCode Enterprise?"
      }), createVNode(_components.p, {
        children: "Simplemente comience con una prueba interna con su equipo. SoryCode de forma predeterminada no almacena su código ni datos de contexto, lo que facilita el inicio."
      }), createVNode(_components.p, {
        children: ["Luego ", createVNode(_components.strong, {
          children: createVNode("a", {
            href: email,
            "set:html": "contáctenos"
          })
        }), " para analizar los precios y las opciones de implementación."]
      })]
    }), "\n", createVNode(_components.details, {
      children: [createVNode(_components.summary, {
        children: "¿Cómo funcionan los precios empresariales?"
      }), createVNode(_components.p, {
        children: ["Ofrecemos precios empresariales por asiento. Si tiene su propia puerta de enlace LLM, no cobramos por los tokens utilizados. Para obtener más detalles, ", createVNode(_components.strong, {
          children: createVNode("a", {
            href: email,
            "set:html": "contáctenos"
          })
        }), " para obtener una cotización personalizada basada en las necesidades de su organización."]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<details><summary>¿Están mis datos seguros con SoryCode Enterprise?</summary><p>Sí. SoryCode no almacena su código ni datos de contexto. Todo el procesamiento se realiza localmente o mediante llamadas directas API a su proveedor de IA. Con la configuración central y la integración de SSO, sus datos permanecen seguros dentro de la infraestructura de su organización.</p></details>\n<details><summary>¿Podemos utilizar nuestro propio registro privado de NPM?</summary><p>SoryCode admite registros privados npm a través del soporte de archivos <code dir=\"auto\">.npmrc</code> nativo de Bun. Si su organización utiliza un registro privado, como JFrog Artifactory, Nexus o similar, asegúrese de que los desarrolladores estén autenticados antes de ejecutar SoryCode.</p><p>Para configurar la autenticación con su registro privado:</p><div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Ventana de terminal</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">npm</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--registry=https://your-company.jfrog.io/api/npm/npm-virtual/</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copiar al portapapeles\" data-copied=\"¡Copiado!\" data-code=\"npm login --registry=https://your-company.jfrog.io/api/npm/npm-virtual/\"><div></div></button></div></figure></div><p>Esto crea <code dir=\"auto\">~/.npmrc</code> con detalles de autenticación. SoryCode automáticamente\r\nrecoge esto.</p><aside aria-label=\"Precaución\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Precaución</p><div class=\"starlight-aside__content\"><p>Debe iniciar sesión en el registro privado antes de ejecutar SoryCode.</p></div></aside><p>Alternativamente, puede configurar manualmente un archivo <code dir=\"auto\">.npmrc</code>:</p><div class=\"expressive-code\"><figure class=\"frame has-title not-content\"><figcaption class=\"header\"><span class=\"title\">~/.npmrc</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292E;--1:#E1E4E8\">registry</span><span style=\"--0:#BF3441;--1:#F97583\">=</span><span style=\"--0:#032F62;--1:#9ECBFF\">https://your-company.jfrog.io/api/npm/npm-virtual/</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">//your-company.jfrog.io/api/npm/npm-virtual/:_authToken</span><span style=\"--0:#032F62;--1:#9ECBFF\">=</span><span style=\"--0:#24292E;--1:#E1E4E8\">${NPM_AUTH_TOKEN}</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copiar al portapapeles\" data-copied=\"¡Copiado!\" data-code=\"registry=https://your-company.jfrog.io/api/npm/npm-virtual///your-company.jfrog.io/api/npm/npm-virtual/:_authToken=${NPM_AUTH_TOKEN}\"><div></div></button></div></figure></div><p>Los desarrolladores deben iniciar sesión en el registro privado antes de ejecutar SoryCode para garantizar que los paquetes se puedan instalar desde su registro empresarial.</p></details>"
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

const url = "src/content/docs/es/enterprise.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/es/enterprise.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/es/enterprise.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, email, file, frontmatter, getHeadings, url };
