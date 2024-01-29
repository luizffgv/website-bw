(()=>{"use strict";var t={816:(t,e,i)=>{i.d(e,{Z:()=>s});var r=i(81),n=i.n(r),o=i(645),a=i.n(o)()(n());a.push([t.id,'.icon-emoji{font-size:inherit}#mbti-meters{text-align-last:justify;max-width:25ch}#section-links,#section-random{display:flex;flex-wrap:wrap}#section-links>h2,#section-random>h2{width:100%}#section-links>:is(a,button),#section-random>:is(a,button){flex:1 0 0}#section-programming{column-gap:2em;display:flex;flex-wrap:wrap}#section-programming h2{width:100%}#section-programming p{text-align:justify}@keyframes mbti-meter{0%{scale:0 1}50%,90%{scale:1}100%{scale:0 1}}#mbti-meters>*{position:relative;padding:0 .5ch}#mbti-meters>*::after{background:var(--color-fg);content:" ";height:100%;left:-5px;mix-blend-mode:difference;position:absolute;animation:mbti-meter ease both;animation-range:contain;animation-timeline:view(block);transform-origin:left}#mbti-meters #mbti-meter-energy::after{width:61%}#mbti-meters #mbti-meter-mind::after{width:60%}#mbti-meters #mbti-meter-nature::after{width:67%}#mbti-meters #mbti-meter-tactics::after{width:86%}',""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",r=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),r&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),r&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,r,n,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);r&&a[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),i&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=i):p[2]=i),n&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=n):p[4]="".concat(n)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function i(t){for(var i=-1,r=0;r<e.length;r++)if(e[r].identifier===t){i=r;break}return i}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var l=t[s],c=r.base?l[0]+r.base:l[0],p=o[c]||0,u="".concat(c," ").concat(p);o[c]=p+1;var f=i(u),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(d);else{var m=n(d,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var o=r(t=t||[],n=n||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=i(o[a]);e[s].references--}for(var l=r(t,n),c=0;c<o.length;c++){var p=i(o[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=l}}},569:t=>{var e={};t.exports=function(t,i){var r=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,i)=>{t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var r="";i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,n&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}");var o=i.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.nc=void 0,(()=>{function t(t,e){if(t instanceof e)return t;throw TypeError("trySpecify failed, from is not an instance of To")}const e=[{title:"Amsterdam",artists:["Super Monkeys"],spotifyID:"1QQGSjRQCznet9gpmelgjV"},{title:"Close To The Sun",artists:["TheFatRat","Anjulie"],spotifyID:"7CQjnYsGLdtcrsp95oBpCv"},{title:"Inferno",artists:["CPX","HUX"],spotifyID:"4jRXeFRViCC6oe0yK3btGt"},{title:"Mahala",artists:["Misha Miller","Sasha Lopez"],spotifyID:"00PT9Iwb5tKVXCXBRavvIW"},{title:"Meant for You",artists:["OMFG"],spotifyID:"7Aja4tskn9P5iXw4h4Y1p8"},{title:"Nightlight",artists:["ILLENIUM","Annika Wells"],spotifyID:"7ksAGloyLZyKThB86rErvT"},{title:"No Fun",artists:["Armin van Buuren","The Stickmen Project"],spotifyID:"1q3qh7hEJrPmPH7uOteYSr"},{title:"Only Love Can Hurt Like This",artists:["Paloma Faith"],spotifyID:"62ke5zFUJN6RvtXZgVH0F8"},{title:"PLAY",artists:["Alan Walker","K-391","Tungevaag","Mangoo"],spotifyID:"4jp4Z02kzzg8gK0NmDGgml"},{title:"Pretty Ugly",artists:["TIMMS"],spotifyID:"4qs8lh1gD7DbxC62wmoS62"},{title:"Serotonin Killer",artists:["TIMMS"],spotifyID:"4MxxwUfOuM3aVO2hJsiE7q"},{title:"Sunday Night",artists:["Holy Molly","LIZOT"],spotifyID:"7IAFfnLZEm7zPyTBNjjdYb"},{title:"Sweet Boi",artists:["Chevy"],spotifyID:"2Y5elCs4h7qQ37fbVuGHrY"},{title:"Take My Breath Away",artists:["Berlin"],spotifyID:"3Z9Belc04X390cxHd0NC7G"},{title:"Take You To Hell",artists:["Ava Max"],spotifyID:"0TxOB9JSgYXjPVR6uWAyfM"},{title:"Tempo",artists:["Margaret"],spotifyID:"0yeg0NZmcZu6y6G9sdJliL"},{title:"The Calling",artists:["TheFatRat","Laura Brehm"],spotifyID:"2k1bFfcPIRTMeCGO48F0OE"},{title:"Those Eyes",artists:["New West"],spotifyID:"2psRActEWsTlYYd7EDoyVR"},{title:"Tokyo Drift",artists:["EMDI"],spotifyID:"0A8rvkDkZRTH3UgYGWxFnp"},{title:"When The Sun Loves The Moon",artists:["Reinaeiry"],spotifyID:"01TvX9axSgLAg7MEmk9npe"}];t(document.getElementById("new-song-button"),HTMLButtonElement).addEventListener("click",(()=>{const t=e[Math.floor(Math.random()*e.length)]?.spotifyID;window.open(`https://open.spotify.com/track/${t}`,"_blank")}));const r=[{url:"https://en.wikipedia.org/wiki/River_(typography)"},{url:"https://pt.wikipedia.org/wiki/Depress%C3%A3o_cortical_alastrante"},{url:"https://pt.wikipedia.org/wiki/Pangrama"},{url:"https://pt.wikipedia.org/wiki/Alimento_b%C3%A1sico"},{url:"https://pt.wikipedia.org/wiki/Engrama"},{url:"https://pt.wikipedia.org/wiki/For%C3%A7a_eletromotriz_inversa"},{url:"https://pt.wikipedia.org/wiki/Pampsiquismo"},{url:"https://pt.wikipedia.org/wiki/Carta-bomba"},{url:"https://pt.wikipedia.org/wiki/Hilaridade_fatal"},{url:"https://pt.wikipedia.org/wiki/Labilidade_emocional"}];t(document.getElementById("random-article-button"),HTMLButtonElement).addEventListener("click",(()=>{const t=r[Math.floor(Math.random()*r.length)]?.url;window.open(t,"_blank")}));var n=i(379),o=i.n(n),a=i(795),s=i.n(a),l=i(569),c=i.n(l),p=i(565),u=i.n(p),f=i(216),d=i.n(f),m=i(589),h=i.n(m),y=i(816),g={};g.styleTagTransform=h(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),o()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals,function(t){const e=function(){const t=Date.now()-+new Date(2001,6,1);return Math.floor(t/3154e7)}();for(const t of document.querySelectorAll("#my-age"))t.textContent=e.toString()}()})()})();