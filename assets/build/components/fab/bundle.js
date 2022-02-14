var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function i(t){t.forEach(n)}function a(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,n,o,i){return t[1]&&i?e(o.ctx.slice(),t[1](i(n))):o.ctx}function r(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function $(){return d(" ")}function h(){return d("")}function g(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:b(t,o,e[o])}function y(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}function v(t,e,n){t.classList[n?"add":"remove"](e)}class k{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)p(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(u)}}let w;function x(t){w=t}function A(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const N=[],I=[],B=[],L=[],P=Promise.resolve();let T=!1;function E(t){B.push(t)}const j=new Set;let D=0;function F(){const t=w;do{for(;D<N.length;){const t=N[D];D++,x(t),G(t.$$)}for(x(null),N.length=0,D=0;I.length;)I.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];j.has(e)||(j.add(e),e())}B.length=0}while(N.length);for(;L.length;)L.pop()();T=!1,j.clear(),x(t)}function G(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const O=new Set;let U;function q(){U={r:0,c:[],p:U}}function M(){U.r||i(U.c),U=U.p}function S(t,e){t&&t.i&&(O.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(O.has(t))return;O.add(t),U.c.push((()=>{O.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const C="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function H(t){t&&t.c()}function X(t,e,o,l){const{fragment:s,on_mount:r,on_destroy:c,after_update:p}=t.$$;s&&s.m(e,o),l||E((()=>{const e=r.map(n).filter(a);c?c.push(...e):i(e),t.$$.on_mount=[]})),p.forEach(E)}function Y(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(N.push(t),T||(T=!0,P.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,n,a,l,s,r,c,p=[-1]){const f=w;x(e);const m=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:p,skip_bound:!1,root:n.target||f.$$.root};c&&c(m.root);let d=!1;if(m.ctx=a?a(e,n.props||{},((t,n,...o)=>{const i=o.length?o[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=i)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](i),d&&J(e,t)),n})):[],m.update(),d=!0,i(m.before_update),m.fragment=!!l&&l(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();n.intro&&S(e.$$.fragment),X(e,n.target,n.anchor,n.customElement),F()}x(f)}class Q{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t){let n,o,i,a,l,r,f,d,h=t[7]()+"";const b=t[15].default,y=function(t,e,n,o){if(t){const i=s(t,e,n,o);return t[0](i)}}(b,t,t[14],null);let w=[{id:t[3]},{class:a=t[1]+" "+t[5]},{style:l=t[2]+" "+t[6]},t[0]],x={};for(let t=0;t<w.length;t+=1)x=e(x,w[t]);return{c(){n=m("div"),o=new k,i=$(),y&&y.c(),o.a=i,_(n,x),v(n,"fab-rotate-animation",t[4]),v(n,"svelte-11z2u68",!0)},m(e,a){p(e,n,a),o.m(h,n),c(n,i),y&&y.m(n,null),r=!0,f||(d=g(n,"click",t[16]),f=!0)},p(t,[e]){y&&y.p&&(!r||16384&e)&&function(t,e,n,o,i,a){if(i){const l=s(e,n,o,a);t.p(l,i)}}(y,b,t,t[14],r?function(t,e,n,o){if(t[2]&&o){const i=t[2](o(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|i[o];return t}return e.dirty|i}return e.dirty}(b,t[14],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[14]),null),_(n,x=function(t,e){const n={},o={},i={$$scope:1};let a=t.length;for(;a--;){const l=t[a],s=e[a];if(s){for(const t in l)t in s||(o[t]=1);for(const t in s)i[t]||(n[t]=s[t],i[t]=1);t[a]=s}else for(const t in l)i[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(w,[(!r||8&e)&&{id:t[3]},(!r||34&e&&a!==(a=t[1]+" "+t[5]))&&{class:a},(!r||68&e&&l!==(l=t[2]+" "+t[6]))&&{style:l},1&e&&t[0]])),v(n,"fab-rotate-animation",t[4]),v(n,"svelte-11z2u68",!0)},i(t){r||(S(y,t),r=!0)},o(t){z(y,t),r=!1},d(t){t&&u(n),y&&y.d(t),f=!1,d()}}}function V(t,e,n){let{$$slots:o={},$$scope:i}=e,{id:a=null}=e,{fab:l={}}=e,{data:s={}}=e,{animation:r={}}=e,{shape:c=""}=e,{display:p=!0}=e,{rippleAnimation:u=!1}=e,{rotateAnimation:f=!1}=e,{classNames:m="fab cursor-pointer"}=e,{style:d=""}=e,{fab_design:$}=window.FAB_PLUGIN.options,h="",g=!1,b=!1;r.in=r.in?r.in:"",r.out=r.out?r.out:"",r.timeout=r.timeout?r.timeout:250,m+=" animate__animated",m+="shape"===$.template.name&&c?` fab-template-shape-${c}`:"","shape"!==$.template.name&&(d+=`background: ${l.template&&l.template.color?l.template.color:$.template.color}; `);return s&&(s=Object.keys(s).reduce((function(t,e){return t[`data-${e}`]=s[e],t}),{})),t.$$set=t=>{"id"in t&&n(3,a=t.id),"fab"in t&&n(9,l=t.fab),"data"in t&&n(0,s=t.data),"animation"in t&&n(8,r=t.animation),"shape"in t&&n(10,c=t.shape),"display"in t&&n(11,p=t.display),"rippleAnimation"in t&&n(12,u=t.rippleAnimation),"rotateAnimation"in t&&n(4,f=t.rotateAnimation),"classNames"in t&&n(1,m=t.classNames),"style"in t&&n(2,d=t.style),"$$scope"in t&&n(14,i=t.$$scope)},t.$$.update=()=>{10496&t.$$.dirty&&(p?(n(5,h=` animate__${r.in} `),n(6,g="display: flex;")):b&&r.out?n(5,h=` animate__${r.out} `):(n(6,g="display: none;"),n(13,b=!0)))},[s,m,d,a,f,h,g,()=>{let t=l.template?l.template.color:$.template.color;return"ripple"===r.in&&u?`\n            <div class="animation-ripple" style="background: ${t};"></div>\n            <div class="animation-ripple" style="background: ${t}; animation-delay: 0.6s;"></div>\n        `:""},r,l,c,p,u,b,i,o,function(e){A.call(this,t,e)}]}class W extends Q{constructor(t){super(),K(this,t,V,R,l,{id:3,fab:9,data:0,animation:8,shape:10,display:11,rippleAnimation:12,rotateAnimation:4,classNames:1,style:2})}}const{window:Z}=C;function tt(t){let e,n,o;return{c(){e=m("em"),n=$(),o=m("div"),b(e,"class",t[4].icon_class?t[4].icon_class:"fas fa-chevron-up"),y(e,"color",t[1].icon.color),b(o,"class","bg-shape"),y(o,"background",t[1].button.color)},m(t,i){p(t,e,i),p(t,n,i),p(t,o,i)},p(t,n){2&n&&y(e,"color",t[1].icon.color),2&n&&y(o,"background",t[1].button.color)},d(t){t&&u(e),t&&u(n),t&&u(o)}}}function et(t){let e,n,o,i,a,l=!1,s=()=>{l=!1};E(t[5]);let r=t[4]&&function(t){let e,n;return e=new W({props:{id:"fab-link-"+t[4].ID,data:{id:t[4].ID},display:t[2],rippleAnimation:!1,classNames:"fab cursor-pointer fab-standalone fab-scroll-to-top fab-links",animation:{in:t[4].module.options.animation.children.in.value,out:t[4].module.options.animation.children.out.value,timeout:t[4].module.options.animation.children.duration.value},shape:t[4].template.shape?t[4].template.shape:t[3].template.shape,style:`\n            --animate-duration: ${t[4].module.options.animation.children.duration.value/1e3}s;\n         `,$$slots:{default:[tt]},$$scope:{ctx:t}}}),e.$on("click",t[6]),{c(){H(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.display=t[2]),258&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}(t);return{c(){r&&r.c(),n=h()},m(c,u){r&&r.m(c,u),p(c,n,u),o=!0,i||(a=g(Z,"scroll",(()=>{l=!0,clearTimeout(e),e=setTimeout(s,100),t[5]()})),i=!0)},p(t,[n]){1&n&&!l&&(l=!0,clearTimeout(e),scrollTo(Z.pageXOffset,t[0]),e=setTimeout(s,100)),t[4]&&r.p(t,n)},i(t){o||(S(r),o=!0)},o(t){z(r),o=!1},d(t){r&&r.d(t),t&&u(n),i=!1,a()}}}function nt(t,e,n){let o,i,{fab_design:a}=window.FAB_PLUGIN.options,l=window.FAB_PLUGIN.to_display.find((t=>"scrolltotop"===t.type)),s={},r=l?l.module.options.offset.value:0;l&&(s={button:{color:l.template.color?l.template.color:a.template.color},icon:{color:l.template.icon.color?l.template.icon.color:a.template.icon.color},animation:{in:`animate__${l.module.options.animation.children.in.value}`,out:`animate__${l.module.options.animation.children.out.value}`,class:""}});return t.$$.update=()=>{1&t.$$.dirty&&n(2,i=o>r)},[o,s,i,a,l,function(){n(0,o=Z.pageYOffset)},()=>{window.FAB_PLUGIN.modules.button.scrollTo(document.documentElement,0,l.module.options.duration.value)}]}class ot extends Q{constructor(t){super(),K(this,t,nt,et,l,{})}}function it(t){let e,n,o,i,a,l,s,f,d,h,g,_;return{c(){e=m("a"),n=m("em"),i=$(),a=m("div"),b(n,"class",o=r(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-1e8leas"),y(n,"color",t[2].icon.color),b(a,"class","bg-shape svelte-1e8leas"),y(a,"--background-color",t[2].button.color),v(a,"fab-bg-shape-active","shape"===t[5].template.name),b(e,"id",l=`fab-link-${t[0].ID}`),b(e,"title",s=t[0].title),b(e,"href",f=t[4].includes(t[0].type)?t[0].link:void 0),b(e,"target",d="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0),b(e,"data-id",h=t[0].ID?t[0].ID:void 0),b(e,"class",g=t[1]+" "+`fab-link-type-${t[0].type} `+t[3]+" "+t[2].button.shape+" svelte-1e8leas"),y(e,"--simtip-color",t[2].tooltip.color),b(e,"data-tooltip",_=t[2].tooltip.label),b(e,"role","tooltip"),v(e,"simptip-position-right","left"===t[5].layout.position),v(e,"simptip-position-left","left"!==t[5].layout.position)},m(t,o){p(t,e,o),c(e,n),c(e,i),c(e,a)},p(t,i){1&i&&o!==(o=r(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-1e8leas")&&b(n,"class",o),4&i&&y(n,"color",t[2].icon.color),4&i&&y(a,"--background-color",t[2].button.color),1&i&&l!==(l=`fab-link-${t[0].ID}`)&&b(e,"id",l),1&i&&s!==(s=t[0].title)&&b(e,"title",s),1&i&&f!==(f=t[4].includes(t[0].type)?t[0].link:void 0)&&b(e,"href",f),1&i&&d!==(d="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0)&&b(e,"target",d),1&i&&h!==(h=t[0].ID?t[0].ID:void 0)&&b(e,"data-id",h),15&i&&g!==(g=t[1]+" "+`fab-link-type-${t[0].type} `+t[3]+" "+t[2].button.shape+" svelte-1e8leas")&&b(e,"class",g),4&i&&y(e,"--simtip-color",t[2].tooltip.color),4&i&&_!==(_=t[2].tooltip.label)&&b(e,"data-tooltip",_),47&i&&v(e,"simptip-position-right","left"===t[5].layout.position),47&i&&v(e,"simptip-position-left","left"!==t[5].layout.position)},d(t){t&&u(e)}}}function at(e){let n,o=e[0]&&it(e);return{c(){o&&o.c(),n=h()},m(t,e){o&&o.m(t,e),p(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=it(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&u(n)}}}function lt(t,e,n){let{fab_item:o={}}=e,{classNames:i="fab-links cursor-pointer flex"}=e,{fab_design:a}=window.FAB_PLUGIN.options,l={},s="";return o&&(l={button:{color:o.template.color?o.template.color:a.template.color},icon:{color:o.template.icon.color?o.template.icon.color:a.template.icon.color},tooltip:{label:a.tooltip.enable?o.title:void 0,color:o.tooltip.color?o.tooltip.color:a.template.color,font:{color:o.tooltip.font.color?o.tooltip.font.color:a.template.icon.color}}},"classic"===a.template.name?(l.icon.color=void 0,l.button.shape=""):"shape"===a.template.name&&(l.button.shape="none"!=o.template.shape?o.template.shape:a.template.shape,l.button.shape=`fab-template-shape-${l.button.shape}`),s=o.responsive.device.mobile?"flex ":"hidden ",s+=o.responsive.device.tablet?"sm:flex ":"sm:hidden ",s+=o.responsive.device.desktop?"lg:flex ":"lg:hidden "),t.$$set=t=>{"fab_item"in t&&n(0,o=t.fab_item),"classNames"in t&&n(1,i=t.classNames)},[o,i,l,s,["link","latest_post_link"],a]}class st extends Q{constructor(t){super(),K(this,t,lt,at,l,{fab_item:0,classNames:1})}}function rt(t,e,n){const o=t.slice();return o[7]=e[n],o}function ct(t,e,n){const o=t.slice();return o[7]=e[n],o}function pt(t){let e,n,o,i,a,l=t[0],s=[];for(let e=0;e<l.length;e+=1)s[e]=ft(ct(t,l,e));const r=t=>z(s[t],1,1,(()=>{s[t]=null}));return i=new W({props:{rippleAnimation:!0,rotateAnimation:t[1],shape:t[4].template.shape,animation:{in:t[3].elements.fab},$$slots:{default:[mt]},$$scope:{ctx:t}}}),i.$on("click",t[6]),{c(){e=m("div");for(let t=0;t<s.length;t+=1)s[t].c();o=$(),H(i.$$.fragment),b(e,"class",n="fac animate__animated "+t[2].animation.class+" svelte-q7ujgw"),y(e,"display",t[1]?"flex":"none")},m(t,n){p(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);p(t,o,n),X(i,t,n),a=!0},p(t,o){if(1&o){let n;for(l=t[0],n=0;n<l.length;n+=1){const i=ct(t,l,n);s[n]?(s[n].p(i,o),S(s[n],1)):(s[n]=ft(i),s[n].c(),S(s[n],1),s[n].m(e,null))}for(q(),n=l.length;n<s.length;n+=1)r(n);M()}(!a||4&o&&n!==(n="fac animate__animated "+t[2].animation.class+" svelte-q7ujgw"))&&b(e,"class",n),(!a||2&o)&&y(e,"display",t[1]?"flex":"none");const c={};2&o&&(c.rotateAnimation=t[1]),4096&o&&(c.$$scope={dirty:o,ctx:t}),i.$set(c)},i(t){if(!a){for(let t=0;t<l.length;t+=1)S(s[t]);S(i.$$.fragment,t),a=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)z(s[t]);z(i.$$.fragment,t),a=!1},d(t){t&&u(e),f(s,t),t&&u(o),Y(i,t)}}}function ut(t){let e,n;return e=new W({props:{rippleAnimation:!0,fab:t[0][0],shape:t[0][0].template.shape?t[0][0].template.shape:t[4].template.shape,animation:{in:t[3].elements.fab},$$slots:{default:[dt]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.fab=t[0][0]),1&n&&(o.shape=t[0][0].template.shape?t[0][0].template.shape:t[4].template.shape),4097&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function ft(t){let e,n;return e=new st({props:{fab_item:t[7]}}),{c(){H(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.fab_item=t[7]),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function mt(e){let n,o,i;return{c(){n=m("em"),o=$(),i=m("div"),b(n,"class",r(e[4].template.icon.class)+" svelte-q7ujgw"),y(n,"color",e[4].template.icon.color),b(i,"class","bg-shape svelte-q7ujgw"),y(i,"--background-color",e[4].template.color),v(i,"fab-bg-shape-active","shape"===e[4].template.name)},m(t,e){p(t,n,e),p(t,o,e),p(t,i,e)},p:t,d(t){t&&u(n),t&&u(o),t&&u(i)}}}function dt(t){let e,n;return e=new st({props:{fab_item:t[0][0],classNames:"fab-links cursor-pointer flex fab-single-collection"}}),{c(){H(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.fab_item=t[0][0]),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function $t(e){let n,o,i;return n=new st({props:{fab_item:e[7],classNames:"fab-links cursor-pointer flex fab-single-collection"}}),{c(){H(n.$$.fragment),o=$()},m(t,e){X(n,t,e),p(t,o,e),i=!0},p:t,i(t){i||(S(n.$$.fragment,t),i=!0)},o(t){z(n.$$.fragment,t),i=!1},d(t){Y(n,t),t&&u(o)}}}function ht(t){let e,n;return e=new W({props:{id:"fab-standalone-link-"+t[7].ID,rippleAnimation:!1,fab:t[7],classNames:"fab cursor-pointer fab-standalone",shape:t[7].template.shape?t[7].template.shape:t[4].template.shape,animation:{in:t[3].elements.fab},$$slots:{default:[$t]},$$scope:{ctx:t}}}),{c(){H(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},p(t,n){const o={};4096&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function gt(t){let e,n,o,i,a;const l=[ut,pt],s=[];function r(t,e){return 1===t[0].length?0:t[0].length>=1?1:-1}~(e=r(t))&&(n=s[e]=l[e](t));let c=t[5],m=[];for(let e=0;e<c.length;e+=1)m[e]=ht(rt(t,c,e));const d=t=>z(m[t],1,1,(()=>{m[t]=null}));return{c(){n&&n.c(),o=$();for(let t=0;t<m.length;t+=1)m[t].c();i=h()},m(t,n){~e&&s[e].m(t,n),p(t,o,n);for(let e=0;e<m.length;e+=1)m[e].m(t,n);p(t,i,n),a=!0},p(t,[a]){let p=e;if(e=r(t),e===p?~e&&s[e].p(t,a):(n&&(q(),z(s[p],1,1,(()=>{s[p]=null})),M()),~e?(n=s[e],n?n.p(t,a):(n=s[e]=l[e](t),n.c()),S(n,1),n.m(o.parentNode,o)):n=null),56&a){let e;for(c=t[5],e=0;e<c.length;e+=1){const n=rt(t,c,e);m[e]?(m[e].p(n,a),S(m[e],1)):(m[e]=ht(n),m[e].c(),S(m[e],1),m[e].m(i.parentNode,i))}for(q(),e=c.length;e<m.length;e+=1)d(e);M()}},i(t){if(!a){S(n);for(let t=0;t<c.length;t+=1)S(m[t]);a=!0}},o(t){z(n),m=m.filter(Boolean);for(let t=0;t<m.length;t+=1)z(m[t]);a=!1},d(t){~e&&s[e].d(t),t&&u(o),f(m,t),t&&u(i)}}}function bt(t,e,n){let{fab_animation:o,fab_design:i}=window.FAB_PLUGIN.options,{to_display:a}=window.FAB_PLUGIN,l=[];a=a.filter((t=>!["readingbar","scrolltotop"].includes(t.type))),a=a.filter((t=>(t.standalone&&l.push(t),!t.standalone)));let s=!1,r={animation:{in:`animate__${o.elements.fab_active}`,out:`animate__${o.elements.fab_inactive}`,class:""}};return[a,s,r,o,i,l,()=>{s?(n(2,r.animation.class=r.animation.out,r),setTimeout((function(){n(1,s=!s)}),500)):(n(1,s=!s),n(2,r.animation.class=r.animation.in,r))}]}class _t extends Q{constructor(t){super(),K(this,t,bt,gt,l,{})}}function yt(e){let n,o,i,a,l;return o=new ot({}),a=new _t({}),{c(){n=m("div"),H(o.$$.fragment),i=$(),H(a.$$.fragment),b(n,"class","fab-floating-button fab-template-"+e[0].fab_design.template.name+" "+(e[0].fab_design.template.shape?`fab-template-shape-container-${e[0].fab_design.template.shape}`:"")+" fab-position-"+e[0].fab_design.layout.position)},m(t,e){p(t,n,e),X(o,n,null),c(n,i),X(a,n,null),l=!0},p:t,i(t){l||(S(o.$$.fragment,t),S(a.$$.fragment,t),l=!0)},o(t){z(o.$$.fragment,t),z(a.$$.fragment,t),l=!1},d(t){t&&u(n),Y(o),Y(a)}}}function vt(t){return[window.FAB_PLUGIN.options]}return app=new class extends Q{constructor(t){super(),K(this,t,vt,yt,l,{})}}({target:document.querySelector("#fab-dom")})}();
