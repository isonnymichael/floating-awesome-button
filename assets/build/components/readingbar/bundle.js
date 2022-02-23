var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(){return t="",document.createTextNode(t);var t}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function s(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}let p;function h(t){p=t}const m=[],f=[],g=[],b=[],$=Promise.resolve();let y=!1;function v(t){g.push(t)}const _=new Set;let x=0;function k(){const t=p;do{for(;x<m.length;){const t=m[x];x++,h(t),w(t.$$)}for(h(null),m.length=0,x=0;f.length;)f.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while(m.length);for(;b.length;)b.pop()();y=!1,_.clear(),h(t)}function w(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const E=new Set;function j(t,e){-1===t.$$.dirty[0]&&(m.push(t),y||(y=!0,$.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(i,l,c,u,d,s,m,f=[-1]){const g=p;h(i);const b=i.$$={fragment:null,ctx:null,props:s,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:l.target||g.$$.root};m&&m(b.root);let $=!1;if(b.ctx=c?c(i,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return b.ctx&&d(b.ctx[t],b.ctx[t]=o)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](o),$&&j(i,t)),e})):[],b.update(),$=!0,o(b.before_update),b.fragment=!!u&&u(b.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);b.fragment&&b.fragment.l(t),t.forEach(a)}else b.fragment&&b.fragment.c();l.intro&&((y=i.$$.fragment)&&y.i&&(E.delete(y),y.i(_))),function(t,n,i,l){const{fragment:a,on_mount:c,on_destroy:u,after_update:d}=t.$$;a&&a.m(n,i),l||v((()=>{const n=c.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),d.forEach(v)}(i,l.target,l.anchor,l.customElement),k()}var y,_;h(g)}function N(t){let e,n;return{c(){e=c("div"),n=c("div"),d(n,"class","fab-readingbar-progress"),s(n,"height",t[0].module.options.template.children.height.value),s(n,"max-height",t[0].module.options.template.children.height.value),s(n,"background",t[0].template.color?t[0].template.color:t[0].module.options.template.children.foreground_color.value),s(n,"transition","width "+t[0].module.options.template.children.transition.value),s(n,"width",t[1]+"%"),d(e,"id","fab-readingbar"),s(e,"height",t[0].module.options.template.children.height.value),s(e,"max-height",t[0].module.options.template.children.height.value),s(e,"background",t[0].module.options.template.children.background_color.value)},m(t,o){l(t,e,o),function(t,e){t.appendChild(e)}(e,n)},p(t,o){1&o&&s(n,"height",t[0].module.options.template.children.height.value),1&o&&s(n,"max-height",t[0].module.options.template.children.height.value),1&o&&s(n,"background",t[0].template.color?t[0].template.color:t[0].module.options.template.children.foreground_color.value),1&o&&s(n,"transition","width "+t[0].module.options.template.children.transition.value),2&o&&s(n,"width",t[1]+"%"),1&o&&s(e,"height",t[0].module.options.template.children.height.value),1&o&&s(e,"max-height",t[0].module.options.template.children.height.value),1&o&&s(e,"background",t[0].module.options.template.children.background_color.value)},d(t){t&&a(e)}}}function P(e){let n,o=e[0]&&N(e);return{c(){o&&o.c(),n=u()},m(t,e){o&&o.m(t,e),l(t,n,e)},p(t,[e]){t[0]?o?o.p(t,e):(o=N(t),o.c(),o.m(n.parentNode,n)):o&&(o.d(1),o=null)},i:t,o:t,d(t){o&&o.d(t),t&&a(n)}}}function O(t,e,n){let{readingbar:o={}}=e,r=0;const i=()=>{let t=()=>document.documentElement||document.body;return t().scrollTop/(t().scrollHeight-t().clientHeight)*100};return o&&(r=i(),window.addEventListener("scroll",(()=>{n(1,r=i())}))),t.$$set=t=>{"readingbar"in t&&n(0,o=t.readingbar)},[o,r]}let S=window.FAB_PLUGIN.to_display.find((t=>"readingbar"===t.type));if(S){let t='<div id="fab-readingbar-container" class="fab-container"></div>';"body"===S.module.options.target.value?jQuery("body").prepend(t):jQuery(S.module.options.target.value).append(t)}return app=!!S&&new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,O,P,i,{readingbar:0})}}({target:document.querySelector("#fab-readingbar-container"),props:{readingbar:S}})}();
//# sourceMappingURL=bundle.js.map
