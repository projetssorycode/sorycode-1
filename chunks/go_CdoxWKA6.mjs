import { l as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_CIm_2tw6.mjs';
import { c as config } from './config_D58fiqnm.mjs';

const frontmatter = {
  "title": "Go",
  "description": "Assinatura de baixo custo para modelos de codificação abertos."
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "contexto",
    "text": "Contexto"
  }, {
    "depth": 2,
    "slug": "como-funciona",
    "text": "Como funciona"
  }, {
    "depth": 2,
    "slug": "limites-de-uso",
    "text": "Limites de uso"
  }, {
    "depth": 3,
    "slug": "preços",
    "text": "Preços"
  }, {
    "depth": 3,
    "slug": "uso-além-dos-limites",
    "text": "Uso além dos limites"
  }, {
    "depth": 2,
    "slug": "endpoints",
    "text": "Endpoints"
  }, {
    "depth": 2,
    "slug": "privacidade",
    "text": "Privacidade"
  }, {
    "depth": 2,
    "slug": "objetivos",
    "text": "Objetivos"
  }];
}
const console = config.console;
const email = `mailto:${config.email}`;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>O SoryCode Go é uma assinatura de baixo custo de <strong>$10/mês</strong> que oferece acesso confiável a modelos de codificação abertos populares.</p>\n<aside aria-label=\"Nota\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Nota</p><div class=\"starlight-aside__content\"><p>O SoryCode Go está atualmente em beta.</p></div></aside>\n<p>O Go funciona como qualquer outro provedor no SoryCode. Você assina o SoryCode Go e obtém sua chave de API. É <strong>totalmente opcional</strong> e você não precisa usá-lo para usar o SoryCode.</p>\n<p>Ele é projetado principalmente para usuários internacionais, com modelos hospedados nos EUA, UE e Singapura para acesso global estável.</p>\n<hr>\n<h2 id=\"contexto\"><a href=\"#contexto\">Contexto</a></h2>\n<p>Modelos abertos ficaram realmente bons. Eles agora alcançam desempenho próximo aos modelos proprietários para tarefas de codificação. E como muitos provedores podem servi-los competitivamente, eles geralmente são muito mais baratos.</p>\n<p>No entanto, obter acesso confiável e de baixa latência a eles pode ser difícil. Os provedores variam em qualidade e disponibilidade.</p>\n<aside aria-label=\"Dica\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Dica</p><div class=\"starlight-aside__content\"><p>Testamos um grupo selecionado de modelos e provedores que funcionam bem com o SoryCode.</p></div></aside>\n<p>Para corrigir isso, fizemos algumas coisas:</p>\n<ol>\n<li>Testamos um grupo selecionado de modelos abertos e conversamos com suas equipes sobre a melhor forma de executá-los.</li>\n<li>Trabalhamos com alguns provedores para garantir que eles estivessem sendo servidos corretamente.</li>\n<li>Finalmente, fizemos benchmarks da combinação modelo/provedor e chegamos a uma lista que nos sentimos bem em recomendar.</li>\n</ol>\n<p>O SoryCode Go oferece acesso a esses modelos por <strong>$10/mês</strong>.</p>\n<hr>\n<h2 id=\"como-funciona\"><a href=\"#como-funciona\">Como funciona</a></h2>\n<p>O SoryCode Go funciona como qualquer outro provedor no SoryCode.</p>\n"
    }), createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Você faz login no ", createVNode(_components.strong, {
          children: createVNode("a", {
            href: console,
            "set:html": "SoryCode Zen"
          })
        }), ", assina o Go e copia sua chave de API."]
      }), "\n", createVNode(Fragment$1, {
        "set:html": "<li>Você executa o comando <code dir=\"auto\">/connect</code> na TUI, seleciona <code dir=\"auto\">SoryCode Go</code> e cola sua chave de API.</li>\n<li>Execute <code dir=\"auto\">/models</code> na TUI para ver a lista de modelos disponíveis através do Go.</li>\n"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Nota\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Nota</p><div class=\"starlight-aside__content\"><p>Apenas um membro por workspace pode assinar o SoryCode Go.</p></div></aside>\n<p>A lista atual de modelos inclui:</p>\n<ul>\n<li><strong>GLM-5</strong></li>\n<li><strong>Kimi K2.5</strong></li>\n<li><strong>MiniMax M2.5</strong></li>\n</ul>\n<p>A lista de modelos pode mudar conforme testamos e adicionamos novos.</p>\n<hr>\n<h2 id=\"limites-de-uso\"><a href=\"#limites-de-uso\">Limites de uso</a></h2>\n<p>O SoryCode Go inclui os seguintes limites:</p>\n<ul>\n<li><strong>Limite de 5 horas</strong> — $12 de uso</li>\n<li><strong>Limite semanal</strong> — $30 de uso</li>\n<li><strong>Limite mensal</strong> — $60 de uso</li>\n</ul>\n<p>Os limites são definidos em valor monetário. Isso significa que sua contagem real de requisições depende do modelo que você usa. Modelos mais baratos como o MiniMax M2.5 permitem mais requisições, enquanto modelos de custo mais alto como o GLM-5 permitem menos.</p>\n<p>A tabela abaixo fornece uma estimativa de contagem de requisições baseada em padrões típicos de uso do Go:</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>GLM-5</th><th>Kimi K2.5</th><th>MiniMax M2.5</th></tr></thead><tbody><tr><td>requisições por 5 horas</td><td>1.150</td><td>1.850</td><td>30.000</td></tr><tr><td>requisições por semana</td><td>2.880</td><td>4.630</td><td>75.000</td></tr><tr><td>requisições por mês</td><td>5.750</td><td>9.250</td><td>150.000</td></tr></tbody></table>\n<p>As estimativas são baseadas em padrões médios de requisição observados:</p>\n<ul>\n<li>GLM-5 — 700 tokens de entrada, 52.000 em cache, 150 tokens de saída por requisição</li>\n<li>Kimi K2.5 — 870 tokens de entrada, 55.000 em cache, 200 tokens de saída por requisição</li>\n<li>MiniMax M2.5 — 300 tokens de entrada, 55.000 em cache, 125 tokens de saída por requisição</li>\n</ul>\n"
    }), createVNode(_components.p, {
      children: ["Você pode acompanhar seu uso atual no ", createVNode(_components.strong, {
        children: createVNode("a", {
          href: console,
          "set:html": "console"
        })
      }), "."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Dica\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>Dica</p><div class=\"starlight-aside__content\"><p>Se você atingir o limite de uso, pode continuar usando os modelos gratuitos.</p></div></aside>\n<p>Os limites de uso podem mudar conforme aprendemos com o uso inicial e feedback.</p>\n<hr>\n<h3 id=\"preços\"><a href=\"#preços\">Preços</a></h3>\n<p>O SoryCode Go é um plano de assinatura de <strong>$10/mês</strong>. Abaixo estão os preços <strong>por 1M de tokens</strong>.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Modelo</th><th>Entrada</th><th>Saída</th><th>Leitura em Cache</th></tr></thead><tbody><tr><td>GLM-5</td><td>$1.00</td><td>$3.20</td><td>$0.20</td></tr><tr><td>Kimi K2.5</td><td>$0.60</td><td>$3.00</td><td>$0.10</td></tr><tr><td>MiniMax M2.5</td><td>$0.30</td><td>$1.20</td><td>$0.03</td></tr></tbody></table>\n<hr>\n<h3 id=\"uso-além-dos-limites\"><a href=\"#uso-além-dos-limites\">Uso além dos limites</a></h3>\n<p>Se você também tiver créditos em seu saldo Zen, pode ativar a opção <strong>Use balance</strong> (Usar saldo) no console. Quando ativada, o Go recorrerá ao seu saldo Zen depois que você atingir seus limites de uso, em vez de bloquear as requisições.</p>\n<hr>\n<h2 id=\"endpoints\"><a href=\"#endpoints\">Endpoints</a></h2>\n<p>Você também pode acessar os modelos Go através dos seguintes endpoints de API.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Modelo</th><th>ID do Modelo</th><th>Endpoint</th><th>Pacote AI SDK</th></tr></thead><tbody><tr><td>GLM-5</td><td>glm-5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>Kimi K2.5</td><td>kimi-k2.5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>MiniMax M2.5</td><td>minimax-m2.5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/messages</code></td><td><code dir=\"auto\">@ai-sdk/anthropic</code></td></tr></tbody></table>\n<p>O <a href=\"/docs/config/#models\">model id</a> (ID do modelo) na sua configuração do SoryCode usa o formato <code dir=\"auto\">sorycode-go/&#x3C;model-id></code>. Por exemplo, para o Kimi K2.5, você usaria <code dir=\"auto\">sorycode-go/kimi-k2.5</code> na sua configuração.</p>\n<hr>\n<h2 id=\"privacidade\"><a href=\"#privacidade\">Privacidade</a></h2>\n<p>O plano é projetado principalmente para usuários internacionais, com modelos hospedados nos EUA, UE e Singapura para acesso global estável.</p>\n"
    }), createVNode(_components.p, {
      children: [createVNode("a", {
        href: email,
        "set:html": "Entre em contato conosco"
      }), " se tiver alguma dúvida."]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"objetivos\"><a href=\"#objetivos\">Objetivos</a></h2>\n<p>Criamos o SoryCode Go para:</p>\n<ol>\n<li>Tornar a IA de codificação <strong>acessível</strong> a mais pessoas com uma assinatura de baixo custo.</li>\n<li>Fornecer acesso <strong>confiável</strong> aos melhores modelos de codificação abertos.</li>\n<li>Curar modelos que são <strong>testados e avaliados</strong> para uso em agentes de codificação.</li>\n<li>Não ter <strong>nenhum bloqueio (lock-in)</strong>, permitindo que você use qualquer outro provedor com o SoryCode também.</li>\n</ol>"
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

const url = "src/content/docs/pt-br/go.mdx";
const file = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pt-br/go.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/keita/Desktop/sory/sorycode/packages/web/src/content/docs/pt-br/go.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, console, Content as default, email, file, frontmatter, getHeadings, url };
