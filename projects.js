(()=>{"use strict";var e={277:(e,t,o)=>{o.d(t,{Z:()=>n});var a=o(81),i=o.n(a),r=o(645),s=o.n(r)()(i());s.push([e.id,'#filters{display:flex;flex-wrap:wrap}#filters fieldset{flex-grow:1}#filters h2{width:100%}#filters #tags{width:70%}#projects-list{align-items:stretch;display:flex;flex-wrap:wrap;gap:16px;list-style:none}#projects-list:not(:has(:nth-child(1)))::after{content:"Nenhum projeto possui todas as tags selecionadas.";transition:opacity 250ms ease}@starting-style{#projects-list:not(:has(:nth-child(1)))::after{opacity:0}}#tags{display:flex;flex-wrap:wrap;gap:1ch}',""]);const n=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",a=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),a&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),a&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,a,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var n=0;n<this.length;n++){var c=this[n][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),o&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=o):l[2]=o),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,a=0;a<t.length;a++)if(t[a].identifier===e){o=a;break}return o}function a(e,a){for(var r={},s=[],n=0;n<e.length;n++){var c=e[n],d=a.base?c[0]+a.base:c[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=o(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var f=i(m,a);a.byIndex=n,t.splice(n,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function i(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,i){var r=a(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var n=o(r[s]);t[n].references--}for(var c=a(e,i),d=0;d<r.length;d++){var l=o(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},569:e=>{var t={};e.exports=function(e,o){var a=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var a="";o.supports&&(a+="@supports (".concat(o.supports,") {")),o.media&&(a+="@media ".concat(o.media," {"));var i=void 0!==o.layer;i&&(a+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),a+=o.css,i&&(a+="}"),o.media&&(a+="}"),o.supports&&(a+="}");var r=o.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function o(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,o),r.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nc=void 0,(()=>{function e(e,...t){const o=t.map(String);return o.push(""),e.map(((e,t)=>e+o[t])).reduce(((e,t)=>e+t))}const t=[{name:"Blink: Ultimate Teleportation",description:"Instalado por mais de 32 mil usuários diferentes, Blink é um mod feito em Lua para o jogo Teardown.",details:e`
      <p>
        Blink: Ultimate Teleportation é um mod para
        <a href="https://teardowngame.com/">Teardown</a> que te permite desafiar
        a física e percorrer distâncias em um piscar de olhos.
      </p>
      <p>
        Tipagens via
        <a href="https://github.com/LuaLS/lua-language-server"
          >lua-language-server</a
        >
        foram amplamente utilizadas.<br />
        Embora eu não seja experiente em Lua e não seja fã de suas
        particularidades, o mod rapidamente ficou em alta na Oficina Steam.
      </p>
    `,tags:["GitHub","Lua","Mod","Python"],url:"https://steamcommunity.com/sharedfiles/filedetails/?id=2875792342",repository:"https://github.com/luizffgv/blink-mod-teardown",image:"Blink Ultimate Teleportation"},{name:"codinStruct",description:"Uma organização feita como projeto de faculdade, visando ajudar estudantes a aprender C, JavaScript e Python.  Trabalhei principalmente na organização, no Sass e no conteúdo de C.",details:e`
      <p>
        codinStruct é um projeto com o intuito de disponibilizar conteúdo para
        auxiliar no aprendizado de C, JavaScript e Python.
      </p>
      <p>
        Eu escrevi o conteúdo sobre C (2641 linhas no momento em que isso foi
        escrito) e trabalhei nos estilos Sass utilizados nas páginas de
        conteúdo, e parte do HTML e workflows.
      </p>
      <h3>Como funciona o projeto?</h3>
      <p>A organização até o momento possui três repositórios públicos:</p>
      <ul class="raiar-list-text">
        <li>
          <a href="https://github.com/codinStruct/codinStruct"
            ><strong>codinStruct</strong></a
          >&mdash;contém o código para criar uma imagem Docker para servir o
          website.
        </li>
        <li>
          <a href="https://github.com/codinStruct/codinStruct-Content"
            ><strong>codinstruct-Content</strong></a
          >&mdash;contém o conteúdo disponibilizado no website, com a licença CC
          BY-SA 4.0.<br />
          Esse repositório também hospeda o conteúdo diretamente via mdBook e
          GitHub Pages, acessível
          <a href="https://codinStruct.github.io/codinStruct-content/">aqui</a>.
        </li>
        <li>
          <a href="https://github.com/codinStruct/md2html"
            ><strong>md2html</strong></a
          >&mdash;Contém um script Python para converter Markdown para HTML.
        </li>
      </ul>
      <p>
        Todo o conteúdo é escrito em Markdown, que é automaticamente processado
        pelo servidor e se torna HTML que por sua vez é servido e estilizado com
        Sass.
      </p>
    `,tags:["Bash","Docker","Express.js","GitHub","GitHub Actions","HTML","JavaScript","Markdown","mdBook","Node.js","Organização","Python","Sass","Site","TypeScript","Webpack"],url:"https://github.com/codinStruct",image:"codinStruct"},{name:"codinStruct Next",description:"Front-end em Next.js feito para o projeto codinStruct.",tags:["GitHub","GitHub Actions","HTML","Next.js","Node.js","React","TypeScript"],url:"https://codinstruct.luizf.dev",repository:"https://github.com/luizffgv/codinStruct-next"},{name:"ExpTL",description:"Biblioteca de C++ de uso geral, pretendendo complementar a biblioteca padrão.",tags:["Biblioteca","C++","C++20","Doxygen","GitHub","GitHub Actions"],license:"MIT License",url:"https://exptl.luizf.dev/modules.html",repository:"https://github.com/luizffgv/exptl"},{name:"Figment",description:"Uma classe em C++ que permite controle preciso da vida útil de objetos de qualquer tipo. Semelhante a std::optional, mas não contém informações sobre o objeto contido.",tags:["Biblioteca","C++","C++17","C++20","Doxygen","GitHub Actions","GitHub"],license:"Unlicense",url:"https://figment.luizf.dev",repository:"https://github.com/luizffgv/Figment"},{name:"Globe",description:"Um site com um globo giratório formado por pontos, te permitindo usar suas próprias imagens como texturas.",tags:["GitHub Actions","GitHub","HTML","JavaScript","Node.js","Sass","Site","Three.js","TypeScript","Webpack"],details:e`
      <p>
        Globe utiliza Three.js para exibir um globo giratório de pontos com
        efeitos de bloom e ondulação.
      </p>
      <p>
        É possível escolher uma imagem para ser exibida no globo, mas ela deve
        seguir um padrão específico.
      </p>
      <p>
        A movimentação de cada ponto no globo é determinada via JavaScript, mas
        é também factível implementar via shaders para melhor desempenho.
      </p>
    `,license:"MIT License",url:"https://globe.luizf.dev",repository:"https://github.com/luizffgv/globe",image:"Globe"},{name:"HTilesML",description:"Jogo experimental utilizando elementos HTML e transformações CSS 3D.",details:e`
      <p>
        HTilesML é um pequeno experimento que serve como prova de conceito da
        possibilidade de criar um jogo 3D sem canvas&mdash;utilizando apenas
        elementos HTML.
      </p>
      <p>
        O visual do jogo é feito utilizando ortoedros formados por faces
        posicionadas com transformações CSS 3D.
      </p>
      <p>
        Admitidamente não é um bom jogo sob nenhum padrão e realmente só deve
        ser visto como experimento.
      </p>
    `,tags:["GitHub","HTML","JavaScript","Site"],license:"MIT License",url:"https://htilesml.luizf.dev",repository:"https://github.com/luizffgv/htilesml"},{name:"livro-c",description:"Livro virtual gratuito que pretende trazer uma fonte moderna, confiável e completa para o aprendizado de C.",tags:["C","GitHub","Livro","mdBook"],license:"CC BY-SA 4.0",url:"https://luizffgv.github.io/livro-c/",repository:"https://github.com/luizffgv/livro-c"},{name:"Modern C Sorting Algorithms",description:"Coleção de algoritmos de ordenação genéricos utilizando o padrão C18 extensivamente, feita para facilitar meus trabalhos de C na faculdade.",details:e`
      <p>Uma coleção de algoritmos de ordenação utilizando o padrão C18.</p>
      <h3>Pontos notáveis</h3>
      <ul class="raiar-list-text">
        <li>
          Uso de macros em definições e implementações de funções, reduzindo
          drasticamente o número de linhas de código.
        </li>
        <li>
          Combinação de <code>_Generic</code> e <code>static_assert</code> para
          asseguração de interfaces.
        </li>
        <li>
          Uso de <code>_Generic</code> para determinar automaticamente qual
          função executar baseado nos tipos dos argumentos.
        </li>
      </ul>
    `,tags:["Biblioteca","C","C18","GitHub"],license:"GNU General Public License v3.0",repository:"https://github.com/luizffgv/modern-c-sorting-algorithms"},{name:"Raiar",description:"Um pequeno framework web front-end fornecendo web components JS e estilos Sass configuráveis.",details:e`
      Raiar é um pequeno framework de Sass e web components JS, criado para meus
      projetos com a intenção de acelerar o desenvolvimento e manter
      consistência entre eles.<br /><br />Raiar não é muito portável pois
      utiliza várias funcionalidades relativamente novas no CSS, portanto não é
      recomendado para todos os tipos de projetos.
      <h3>Funcionalidades</h3>
      <ul class="raiar-list-text">
        <li>
          <strong>
            Raiar utiliza tanto variáveis Sass quanto variáveis CSS</strong
          >, permitindo alterações nos estilos via JavaScript mesmo após a
          compilação.
        </li>
        <li>
          <strong
            >Raiar fornece um equilíbrio entre shadow DOM e light DOM</strong
          >&mdash;web components só são utilizados quando há a necessidade de
          executar JavaScript no funcionamento de um elemento.
        </li>
        <li>
          <strong>Raiar infere o significado dos elementos por contexto</strong
          >&mdash;o uso das pseudo-classes <code>:has</code> e
          <code>:is</code> permite que elementos sejam estilizados corretamente
          sem o uso classes.
        </li>
      </ul>
    `,tags:["GitHub","HTML","Framework","JavaScript","Sass"],license:"MIT License",repository:"https://github.com/luizffgv/raiar"},{name:"Shader Site",description:"Um site que te ajuda a encontrar o shaderpack de Minecraft ideal para você.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Lit","Node.js","Sass","Site","TypeScript","Webpack"],license:"MIT License",repository:"https://github.com/luizffgv/shader-site",url:"https://shadersite.luizf.dev",image:"Shader Site"},{name:"SoR-pt-BR",description:"Tradução não oficial para o jogo Streets of Rogue, com melhorias—algumas subjetivas—em relação à versão oficial.",tags:["GitHub","Python"],license:"Unlicense",repository:"https://github.com/luizffgv/SoR-pt-BR"},{name:"Spirit Box",description:"Bot para Discord que gera um diário de anotações do jogo Phasmophobia, para auxiliar na identificação de fantasmas e no compartilhamento de pistas com sua equipe.",details:e`
      <p>
        Bot para Discord com o intuito de compartilhar pistas e facilitar a
        identificação de fantasmas no jogo Phasmophobia.
      </p>
      <p>
        Spirit Box utiliza TypeScript extensivamente e possui um
        <a
          href="https://github.com/luizffgv/Spirit-Box/blob/b0734c85de03127fca33b9408b4f2b229366df6d/src/commands/journal.ts#L148-L202"
          >algoritmo</a
        >
        <strong>compacto</strong> e <strong>genérico</strong> para a
        identificação de fantasmas, com um modelo que o torna aplicável, sem
        alterações, a todos os fantasmas e dificuldades.
      </p>
      <h3>Passos do algoritmo</h3>
      <ul class="raiar-list-text">
        <li>
          Descartar fantasmas que não possuem alguma das evidências encontradas,
          ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que apresentam mais evidências do que a
          dificuldade permite, ignorando evidências falsas.
        </li>
        <li>
          Descartar fantasmas que possuem mais evidências ausentes do que
          evidências desabilitadas pela dificuldade.
        </li>
        <li>
          Descartar fantasmas cuja evidência garantida está ausente ou
          inobtível.
        </li>
        <li>Descartar fantasmas cuja evidência falsa está ausente.</li>
      </ul>
    `,tags:["Discord App","GitHub","JavaScript","Node.js","TypeScript"],license:"MIT License",repository:"https://github.com/luizffgv/spirit-box",image:"Spirit Box"},{name:"TS Conversions",description:"Biblioteca e pacote NPM fornecendo utilitários para realizar conversões seguras ou inseguras e diminuir código boilerplate no TypeScript. Também é utilizada nesse site.",tags:["Biblioteca","GitHub Actions","GitHub","JavaScript","Node.js","Pacote NPM","TypeScript"],license:"MIT License",url:"https://www.npmjs.com/package/@luizffgv/ts-conversions",repository:"https://github.com/luizffgv/ts-conversions"},{name:"Viewport-Based Scaling",description:"Site que gera CSS para definir o valor de uma propriedade baseado na largura do viewport, realizando interpolação linear entre vários pares de pontos.",tags:["GitHub","GitHub Actions","HTML","JavaScript","Node.js","Site","TypeScript","Webpack"],license:"MIT License",url:"https://vbs.luizf.dev",repository:"https://github.com/luizffgv/viewport-based-rescaling"}];function a(e,t){if(e instanceof t)return e;throw TypeError("trySpecify failed, from is not an instance of To")}function i(e){if(null==e)throw TypeError("throwIfNull received null value");return e}var r=function(e,t,o,a){if("a"===o&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?a:"a"===o?a.call(e):a?a.value:t.get(e)};function s(e,...t){const o=t.map(String);return o.push(""),e.map(((e,t)=>e+o[t])).reduce(((e,t)=>e+t))}function n(e,...t){return s(e,...t)}var c,d,l=function(e,t,o,a,i){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(e,o):i?i.value=o:t.set(e,o),o},p=function(e,t,o,a){if("a"===o&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===o?a:"a"===o?a.call(e):a?a.value:t.get(e)};class u extends(function(e){var t,o,a;return t=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open",slotAssignment:e.imperativeSlotting?"manual":"named"}),this.shadowRoot.innerHTML=r(t,t,"f",a),this.shadowRoot.adoptedStyleSheets.push(r(t,t,"f",o))}},o={value:new CSSStyleSheet},r(t,t,"f",o).replaceSync(e.styles??""),a={value:e.template??""},t}({template:s`<!---->
    <div id="project">
      <div id="top">
        <span id="name"></span>
        <p id="description"></p>
      </div>
      <div id="bottom">
        <div id="buttons">
          <a id="view" target="_blank">Ver</a>
          <a id="repository" target="_blank">Repositório</a>
        </div>
      </div>
    </div>`,styles:n`
    @keyframes project {
      0% {
        translate: 0 50px;
      }

      15%,
      85% {
        translate: none;
      }

      100% {
        translate: 0 -50px;
      }
    }

    #project {
      @starting-style {
        opacity: 0;
      }

      border: 1px solid var(--color-fg);
      box-sizing: border-box;
      contain: content;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      max-width: 35ch;
      padding: 8px 16px;
      transition: opacity 250ms ease;

      animation: project linear;
      animation-timeline: view();
      animation-range: cover;

      #name {
        font-size: 1.2em;
        font-weight: bold;
      }

      #buttons {
        margin-top: auto;
        display: flex;
        gap: 2ch;
        justify-content: space-between;

        #view,
        #repository {
          color: inherit;
          cursor: none;
          font-weight: bold;
          opacity: 0;
          transition: opacity 250ms ease;

          #project:hover & {
            opacity: 1;
          }
        }
      }
    }
  `,imperativeSlotting:!1})){constructor(){super(),c.set(this,void 0),d.set(this,void 0),l(this,c,{name:i(this.shadowRoot.getElementById("name")),description:i(this.shadowRoot.getElementById("description")),view:i(this.shadowRoot.getElementById("view")),repository:i(this.shadowRoot.getElementById("repository"))},"f")}setProject(e){return l(this,d,e,"f"),p(this,c,"f").name.textContent=e.name,p(this,c,"f").description.textContent=e.description,p(this,c,"f").view.style.visibility=e.url?"visible":"hidden",p(this,c,"f").view.setAttribute("href",e.url??""),p(this,c,"f").repository.style.visibility=e.repository?"visible":"hidden",p(this,c,"f").repository.setAttribute("href",e.repository??""),this}get raw(){if(null!=p(this,d,"f"))return{...p(this,d,"f")}}}c=new WeakMap,d=new WeakMap;const m=u;customElements.define("x-project",u);var f=o(379),h=o.n(f),g=o(795),v=o.n(g),b=o(569),y=o.n(b),S=o(565),w=o.n(S),x=o(216),T=o.n(x),j=o(589),z=o.n(j),C=o(277),L={};function M(e,t){return e.tags?.filter((e=>t.has(e))).length??0}function H(e,t){return e.toLocaleLowerCase().localeCompare(t.toLocaleLowerCase())}function E(e){const t=e.map((e=>{const t=document.createElement("li");return t.appendChild(e),t}));k.projectsList.replaceChildren(...t)}function B(e,t,o){e=[...e],t.size>0&&(e=e.filter((({raw:e})=>M(i(e),t)>0))),e.sort((({raw:e},{raw:o})=>M(i(o),t)-M(i(e),t))),"every"==o&&(e=e.filter((({raw:e})=>{const o=i(e?.tags);for(const e of t)if(!o.includes(e))return!1;return!0}))),E(e)}L.styleTagTransform=z(),L.setAttributes=w(),L.insert=y().bind(null,"head"),L.domAPI=v(),L.insertStyleElement=T(),h()(C.Z,L),C.Z&&C.Z.locals&&C.Z.locals;const k={projectsList:i(document.getElementById("projects-list")),tags:i(document.getElementById("tags")),logics:i(document.getElementById("logics"))},G=t.sort((({name:e},{name:t})=>H(e,t))).map((e=>(new m).setProject(e))),q=new Set,I=new Set(t.flatMap((e=>e.tags)).sort(H));let P="best-match";k.tags.append(...[...I].map((e=>function(e){const t=document.createElement("input");t.type="checkbox",t.value=e;const o=document.createElement("label");return o.append(t,document.createTextNode(e)),o}(e)))),k.tags.addEventListener("input",(({target:e})=>{const{checked:t,value:o}=a(e,HTMLInputElement);t?q.add(o):q.delete(o),B(G,q,P)})),k.logics.addEventListener("input",(({target:e})=>{const{value:t}=a(e,HTMLInputElement);P=t,B(G,q,P)})),E(G)})()})();