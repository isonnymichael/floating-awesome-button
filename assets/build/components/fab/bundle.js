var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function a(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function l(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function s(t){return null==t?"":t}function r(t,n){t.appendChild(n)}function c(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function d(){return m(" ")}function u(){return m("")}function $(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function b(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}function g(t,n,e){t.classList[e?"add":"remove"](n)}class h{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){this.e||(this.e=p(n.nodeName),this.t=n,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)c(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(f)}}let _;function y(t){_=t}function v(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t.call(this,n)))}const k=[],w=[],x=[],A=[],N=Promise.resolve();let I=!1;function L(t){x.push(t)}const B=new Set;let E=0;function P(){const t=_;do{for(;E<k.length;){const t=k[E];E++,y(t),S(t.$$)}for(y(null),k.length=0,E=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];B.has(n)||(B.add(n),n())}x.length=0}while(k.length);for(;A.length;)A.pop()();I=!1,B.clear(),y(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}const j=new Set;let D;function F(){D={r:0,c:[],p:D}}function G(){D.r||o(D.c),D=D.p}function U(t,n){t&&t.i&&(j.delete(t),t.i(n))}function q(t,n,e,o){if(t&&t.o){if(j.has(t))return;j.add(t),D.c.push((()=>{j.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function T(t){t&&t.c()}function M(t,e,i,l){const{fragment:s,on_mount:r,on_destroy:c,after_update:f}=t.$$;s&&s.m(e,i),l||L((()=>{const e=r.map(n).filter(a);c?c.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(L)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function z(t,n){-1===t.$$.dirty[0]&&(k.push(t),I||(I=!0,N.then(P)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function C(n,a,i,l,s,r,c,p=[-1]){const m=_;y(n);const d=n.$$={fragment:null,ctx:null,props:r,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:e(),dirty:p,skip_bound:!1,root:a.target||m.$$.root};c&&c(d.root);let u=!1;if(d.ctx=i?i(n,a.props||{},((t,e,...o)=>{const a=o.length?o[0]:e;return d.ctx&&s(d.ctx[t],d.ctx[t]=a)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](a),u&&z(n,t)),e})):[],d.update(),u=!0,o(d.before_update),d.fragment=!!l&&l(d.ctx),a.target){if(a.hydrate){const t=function(t){return Array.from(t.childNodes)}(a.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();a.intro&&U(n.$$.fragment),M(n,a.target,a.anchor,a.customElement),P()}y(m)}class H{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t){let n,e,o,a,i,m,u,b,_,y=t[3]()+"";const v=t[5].default,k=function(t,n,e,o){if(t){const a=l(t,n,e,o);return t[0](a)}}(v,t,t[4],null);return{c(){n=p("div"),e=new h,o=d(),k&&k.c(),e.a=o,$(n,"id",t[0]),$(n,"class",a=s(t[2].classNames)+" svelte-11z2u68"),$(n,"style",i=t[2].varStyles),$(n,"data-id",m=t[1].id?t[1].id:void 0),g(n,"fab-rotate-animation",t[2].rotateAnimation)},m(a,i){var l,s,f,p;c(a,n,i),e.m(y,n),r(n,o),k&&k.m(n,null),u=!0,b||(l=n,s="click",f=t[6],l.addEventListener(s,f,p),_=()=>l.removeEventListener(s,f,p),b=!0)},p(t,[e]){k&&k.p&&(!u||16&e)&&function(t,n,e,o,a,i){if(a){const s=l(n,e,o,i);t.p(s,a)}}(k,v,t,t[4],u?function(t,n,e,o){if(t[2]&&o){const a=t[2](o(e));if(void 0===n.dirty)return a;if("object"==typeof a){const t=[],e=Math.max(n.dirty.length,a.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|a[o];return t}return n.dirty|a}return n.dirty}(v,t[4],e,null):function(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}(t[4]),null),(!u||1&e)&&$(n,"id",t[0]),(!u||4&e&&a!==(a=s(t[2].classNames)+" svelte-11z2u68"))&&$(n,"class",a),(!u||4&e&&i!==(i=t[2].varStyles))&&$(n,"style",i),(!u||2&e&&m!==(m=t[1].id?t[1].id:void 0))&&$(n,"data-id",m),4&e&&g(n,"fab-rotate-animation",t[2].rotateAnimation)},i(t){u||(U(k,t),u=!0)},o(t){q(k,t),u=!1},d(t){t&&f(n),k&&k.d(t),b=!1,_()}}}function J(t,n,e){let{$$slots:o={},$$scope:a}=n,{id:i=null}=n,{data:l={}}=n,s=window.FAB_PLUGIN.options,{styles:r={}}=n;return t.$$set=t=>{"id"in t&&e(0,i=t.id),"data"in t&&e(1,l=t.data),"styles"in t&&e(2,r=t.styles),"$$scope"in t&&e(4,a=t.$$scope)},[i,l,r,()=>"ripple"===s.fab_animation.elements.fab&&r.rippleAnimation?`\n            <div class="animation-ripple" style="background: ${s.fab_design.template.color};"></div>\n            <div class="animation-ripple" style="background: ${s.fab_design.template.color}; animation-delay: 0.6s;"></div>\n        `:"",a,o,function(n){v.call(this,t,n)}]}class K extends H{constructor(t){super(),C(this,t,J,Q,i,{id:0,data:1,styles:2})}}function R(t){let n,e,o;return{c(){n=p("em"),e=d(),o=p("div"),$(n,"class",t[3].icon_class?t[3].icon_class:"fas fa-chevron-up"),b(n,"color",t[1].icon.color),$(o,"class","bg-shape"),b(o,"background",t[1].button.color)},m(t,a){c(t,n,a),c(t,e,a),c(t,o,a)},p(t,e){2&e&&b(n,"color",t[1].icon.color),2&e&&b(o,"background",t[1].button.color)},d(t){t&&f(n),t&&f(e),t&&f(o)}}}function V(t){let n,e,o=t[3]&&function(t){let n,e;return n=new K({props:{id:"fab-link-"+t[3].ID,data:{id:t[3].ID},styles:{rippleAnimation:!1,classNames:`\n                fab fab-standalone fab-scroll-to-top fab-links cursor-pointer animate__animated\n                ${t[2].fab_design.template.shape?`fab-template-shape-${t[2].fab_design.template.shape}`:""}\n                ${t[1].animation.class}\n             `,varStyles:`\n                display: ${t[0]?"flex":"none"};\n                background: ${t[1].button.color};\n                --animate-duration: ${t[3].module.options.animation.children.duration.value/1e3}s }\n            `},$$slots:{default:[R]},$$scope:{ctx:t}}}),n.$on("click",t[4]),{c(){T(n.$$.fragment)},m(t,o){M(n,t,o),e=!0},p(t,e){const o={};3&e&&(o.styles={rippleAnimation:!1,classNames:`\n                fab fab-standalone fab-scroll-to-top fab-links cursor-pointer animate__animated\n                ${t[2].fab_design.template.shape?`fab-template-shape-${t[2].fab_design.template.shape}`:""}\n                ${t[1].animation.class}\n             `,varStyles:`\n                display: ${t[0]?"flex":"none"};\n                background: ${t[1].button.color};\n                --animate-duration: ${t[3].module.options.animation.children.duration.value/1e3}s }\n            `}),66&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}(t);return{c(){o&&o.c(),n=u()},m(t,a){o&&o.m(t,a),c(t,n,a),e=!0},p(t,[n]){t[3]&&o.p(t,n)},i(t){e||(U(o),e=!0)},o(t){q(o),e=!1},d(t){o&&o.d(t),t&&f(n)}}}function W(t,n,e){let o=!1,a=window.FAB_PLUGIN.options,i=window.FAB_PLUGIN.to_display.find((t=>"scrolltotop"===t.type)),l={};const s=()=>{jQuery(window).scrollTop()<i.module.options.offset.value?l.animation.class.includes(l.animation.in)&&(e(1,l.animation.class=l.animation.out,l),setTimeout((()=>{e(0,o=!1)}),i.module.options.animation.children.duration.value)):(e(0,o=!0),e(1,l.animation.class=l.animation.in,l))};i&&(l={button:{color:i.template.color?i.template.color:a.fab_design.template.color},icon:{color:i.template.icon.color?i.template.icon.color:a.fab_design.template.icon.color},animation:{in:`animate__${i.module.options.animation.children.in.value}`,out:`animate__${i.module.options.animation.children.out.value}`,class:""}},window.addEventListener("scroll",s));return[o,l,a,i,()=>{window.FAB_PLUGIN.modules.button.scrollTo(document.documentElement,0,i.module.options.duration.value)}]}class X extends H{constructor(t){super(),C(this,t,W,V,i,{})}}function Y(t){let n,e,o,a,i,l,m,u,h,_,y,v;return{c(){n=p("a"),e=p("em"),a=d(),i=p("div"),$(e,"class",o=s(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-1o14wk8"),b(e,"color",t[1].icon.color),$(i,"class","bg-shape svelte-1o14wk8"),b(i,"--background-color",t[1].button.color),g(i,"fab-bg-shape-active","shape"===t[4].fab_design.template.name),$(n,"id",l=`fab-link-${t[0].ID}`),$(n,"title",m=t[0].title),$(n,"href",u=t[3].includes(t[0].type)?t[0].link:void 0),$(n,"target",h="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0),$(n,"data-id",_=t[0].ID?t[0].ID:void 0),$(n,"class",y=`fab-links cursor-pointer fab-link-type-${t[0].type} `+t[2]+" "+("none"!=t[0].template.shape?`fab-template-shape-${t[0].template.shape}`:t[4].fab_design.template.shape)+" svelte-1o14wk8"),b(n,"--simtip-color",t[1].tooltip.color),$(n,"data-tooltip",v=t[1].tooltip.label),$(n,"role","tooltip"),g(n,"simptip-position-right","left"===t[4].fab_design.layout.position),g(n,"simptip-position-left","left"!==t[4].fab_design.layout.position)},m(t,o){c(t,n,o),r(n,e),r(n,a),r(n,i)},p(t,a){1&a&&o!==(o=s(t[0].icon_class?t[0].icon_class:"fas fa-chevron-up")+" svelte-1o14wk8")&&$(e,"class",o),2&a&&b(e,"color",t[1].icon.color),2&a&&b(i,"--background-color",t[1].button.color),1&a&&l!==(l=`fab-link-${t[0].ID}`)&&$(n,"id",l),1&a&&m!==(m=t[0].title)&&$(n,"title",m),1&a&&u!==(u=t[3].includes(t[0].type)?t[0].link:void 0)&&$(n,"href",u),1&a&&h!==(h="link"===t[0].type&&t[0].linkBehavior?"_blank":void 0)&&$(n,"target",h),1&a&&_!==(_=t[0].ID?t[0].ID:void 0)&&$(n,"data-id",_),5&a&&y!==(y=`fab-links cursor-pointer fab-link-type-${t[0].type} `+t[2]+" "+("none"!=t[0].template.shape?`fab-template-shape-${t[0].template.shape}`:t[4].fab_design.template.shape)+" svelte-1o14wk8")&&$(n,"class",y),2&a&&b(n,"--simtip-color",t[1].tooltip.color),2&a&&v!==(v=t[1].tooltip.label)&&$(n,"data-tooltip",v),21&a&&g(n,"simptip-position-right","left"===t[4].fab_design.layout.position),21&a&&g(n,"simptip-position-left","left"!==t[4].fab_design.layout.position)},d(t){t&&f(n)}}}function Z(n){let e,o=n[0]&&Y(n);return{c(){o&&o.c(),e=u()},m(t,n){o&&o.m(t,n),c(t,e,n)},p(t,[n]){t[0]?o?o.p(t,n):(o=Y(t),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&f(e)}}}function tt(t,n,e){let{fab_item:o={}}=n,a=window.FAB_PLUGIN.options,i={},l="";return o&&(i={button:{color:o.template.color?o.template.color:a.fab_design.template.color},icon:{color:o.template.icon.color?o.template.icon.color:a.fab_design.template.icon.color},tooltip:{label:o.title,color:o.tooltip.color?o.tooltip.color:a.fab_design.template.color,font:{color:o.tooltip.font.color?o.tooltip.font.color:a.fab_design.template.icon.color}}},"classic"===a.fab_design.template.name&&(i.icon.color=void 0),l=o.responsive.device.mobile?"flex ":"hidden ",l+=o.responsive.device.tablet?"sm:flex ":"sm:hidden ",l+=o.responsive.device.desktop?"lg:flex ":"lg:hidden "),t.$$set=t=>{"fab_item"in t&&e(0,o=t.fab_item)},[o,i,l,["link","latest_post_link"],a]}class nt extends H{constructor(t){super(),C(this,t,tt,Z,i,{fab_item:0})}}function et(t,n,e){const o=t.slice();return o[5]=n[e],o}function ot(t){let n,e,o,a,i,l=t[0],s=[];for(let n=0;n<l.length;n+=1)s[n]=it(et(t,l,n));const r=t=>q(s[t],1,1,(()=>{s[t]=null}));return a=new K({props:{styles:{rippleAnimation:!0,rotateAnimation:t[1],classNames:`\n                fab cursor-pointer\n                ${"ripple"!==t[3].fab_animation.elements.fab?`animate__animated animate__${t[3].fab_animation.elements.fab}`:""}\n            `,varStyles:`\n                display: flex;\n                background: ${t[3].fab_design.template.color};\n            `},$$slots:{default:[lt]},$$scope:{ctx:t}}}),a.$on("click",t[4]),{c(){n=p("div");for(let t=0;t<s.length;t+=1)s[t].c();o=d(),T(a.$$.fragment),$(n,"class",e="fac mt-6 animate__animated "+t[2].animation.class+" svelte-q7ujgw"),b(n,"display",t[1]?"flex":"none")},m(t,e){c(t,n,e);for(let t=0;t<s.length;t+=1)s[t].m(n,null);c(t,o,e),M(a,t,e),i=!0},p(t,o){if(1&o){let e;for(l=t[0],e=0;e<l.length;e+=1){const a=et(t,l,e);s[e]?(s[e].p(a,o),U(s[e],1)):(s[e]=it(a),s[e].c(),U(s[e],1),s[e].m(n,null))}for(F(),e=l.length;e<s.length;e+=1)r(e);G()}(!i||4&o&&e!==(e="fac mt-6 animate__animated "+t[2].animation.class+" svelte-q7ujgw"))&&$(n,"class",e),(!i||2&o)&&b(n,"display",t[1]?"flex":"none");const c={};2&o&&(c.styles={rippleAnimation:!0,rotateAnimation:t[1],classNames:`\n                fab cursor-pointer\n                ${"ripple"!==t[3].fab_animation.elements.fab?`animate__animated animate__${t[3].fab_animation.elements.fab}`:""}\n            `,varStyles:`\n                display: flex;\n                background: ${t[3].fab_design.template.color};\n            `}),256&o&&(c.$$scope={dirty:o,ctx:t}),a.$set(c)},i(t){if(!i){for(let t=0;t<l.length;t+=1)U(s[t]);U(a.$$.fragment,t),i=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)q(s[t]);q(a.$$.fragment,t),i=!1},d(t){t&&f(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(s,t),t&&f(o),O(a,t)}}}function at(t){let n,e;return n=new K({props:{styles:{rippleAnimation:!0,classNames:`\n            fab cursor-pointer\n            ${"ripple"!==t[3].fab_animation.elements.fab?`animate__animated animate__${t[3].fab_animation.elements.fab}`:""}\n        `,varStyles:`\n            display: flex;\n            background: ${t[0][0].template.color?t[0][0].template.color:t[3].fab_design.template.color};\n        `},$$slots:{default:[st]},$$scope:{ctx:t}}}),{c(){T(n.$$.fragment)},m(t,o){M(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.styles={rippleAnimation:!0,classNames:`\n            fab cursor-pointer\n            ${"ripple"!==t[3].fab_animation.elements.fab?`animate__animated animate__${t[3].fab_animation.elements.fab}`:""}\n        `,varStyles:`\n            display: flex;\n            background: ${t[0][0].template.color?t[0][0].template.color:t[3].fab_design.template.color};\n        `}),257&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function it(t){let n,e;return n=new nt({props:{fab_item:t[5]}}),{c(){T(n.$$.fragment)},m(t,o){M(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.fab_item=t[5]),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function lt(n){let e,o,a;return{c(){e=p("em"),o=d(),a=p("div"),$(e,"class",s(n[3].fab_design.template.icon.class)+" svelte-q7ujgw"),b(e,"color",n[3].fab_design.template.icon.color),$(a,"class","bg-shape svelte-q7ujgw"),b(a,"--background-color",n[3].fab_design.template.color),g(a,"fab-bg-shape-active","shape"===n[3].fab_design.template.name)},m(t,n){c(t,e,n),c(t,o,n),c(t,a,n)},p:t,d(t){t&&f(e),t&&f(o),t&&f(a)}}}function st(t){let n,e;return n=new nt({props:{fab_item:t[0][0]}}),{c(){T(n.$$.fragment)},m(t,o){M(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.fab_item=t[0][0]),n.$set(o)},i(t){e||(U(n.$$.fragment,t),e=!0)},o(t){q(n.$$.fragment,t),e=!1},d(t){O(n,t)}}}function rt(t){let n,e,o,a;const i=[at,ot],l=[];function s(t,n){return 1===t[0].length?0:t[0].length>=1?1:-1}return~(n=s(t))&&(e=l[n]=i[n](t)),{c(){e&&e.c(),o=u()},m(t,e){~n&&l[n].m(t,e),c(t,o,e),a=!0},p(t,[a]){let r=n;n=s(t),n===r?~n&&l[n].p(t,a):(e&&(F(),q(l[r],1,1,(()=>{l[r]=null})),G()),~n?(e=l[n],e?e.p(t,a):(e=l[n]=i[n](t),e.c()),U(e,1),e.m(o.parentNode,o)):e=null)},i(t){a||(U(e),a=!0)},o(t){q(e),a=!1},d(t){~n&&l[n].d(t),t&&f(o)}}}function ct(t,n,e){let o=window.FAB_PLUGIN.options,a=window.FAB_PLUGIN.to_display;a=a.filter((t=>!["readingbar","scrolltotop"].includes(t.type)));let i=!1,l={animation:{in:`animate__${o.fab_animation.elements.fab_active}`,out:`animate__${o.fab_animation.elements.fab_inactive}`,class:""}};return[a,i,l,o,()=>{i?(e(2,l.animation.class=l.animation.out,l),setTimeout((function(){e(1,i=!i)}),500)):(e(1,i=!i),e(2,l.animation.class=l.animation.in,l))}]}class ft extends H{constructor(t){super(),C(this,t,ct,rt,i,{})}}function pt(n){let e,o,a,i,l;return o=new X({}),i=new ft({}),{c(){e=p("div"),T(o.$$.fragment),a=d(),T(i.$$.fragment),$(e,"class","fab-floating-button fab-template-"+n[0].fab_design.template.name+" "+(n[0].fab_design.template.shape?`fab-template-shape-container-${n[0].fab_design.template.shape}`:"")+" fab-position-"+n[0].fab_design.layout.position)},m(t,n){c(t,e,n),M(o,e,null),r(e,a),M(i,e,null),l=!0},p:t,i(t){l||(U(o.$$.fragment,t),U(i.$$.fragment,t),l=!0)},o(t){q(o.$$.fragment,t),q(i.$$.fragment,t),l=!1},d(t){t&&f(e),O(o),O(i)}}}function mt(t){return[window.FAB_PLUGIN.options]}return app=new class extends H{constructor(t){super(),C(this,t,mt,pt,i,{})}}({target:document.querySelector("#fab-dom")})}();
