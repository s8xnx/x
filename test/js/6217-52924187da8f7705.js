"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6217],{15587:(e,t,n)=>{n.d(t,{Eq:()=>l});var r=new WeakMap,o=new WeakMap,a={},i=0,u=function(e){return e&&(e.host||u(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=u(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var s=a[n],d=[],f=new Set,v=new Set(l),p=function(e){!e||f.has(e)||(f.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))m(e);else try{var t=e.getAttribute(c),a=null!==t&&"false"!==t,i=(r.get(e)||0)+1,u=(s.get(e)||0)+1;r.set(e,i),s.set(e,u),d.push(e),1===i&&a&&o.set(e,!0),1===u&&e.setAttribute(n,"true"),a||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return m(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,a=s.get(e)-1;r.set(e,t),s.set(e,a),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),a||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r,o=Array.from(Array.isArray(e)?e:[e]),a=t||(r=e,"undefined"==typeof document?null:(Array.isArray(r)?r[0]:r).ownerDocument.body);return a?(o.push.apply(o,Array.from(a.querySelectorAll("[aria-live]"))),c(o,a,n,"aria-hidden")):function(){return null}}},95714:(e,t,n)=>{n.d(t,{E9:()=>a,Mi:()=>r,pN:()=>o,xi:()=>i});var r="right-scroll-bar-position",o="width-before-scroll-bar",a="with-scroll-bars-hidden",i="--removed-body-scroll-bar-size"},10101:(e,t,n)=>{n.d(t,{jp:()=>m});var r=n(12115),o=n(75219),a=n(95714),i={left:0,top:0,right:0,gap:0},u=function(e){return parseInt(e||"",10)||0},c=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[u(n),u(r),u(o)]},l=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return i;var t=c(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},s=(0,o.T0)(),d="data-scroll-locked",f=function(e,t,n,r){var o=e.left,i=e.top,u=e.right,c=e.gap;return void 0===n&&(n="margin"),"\n  .".concat(a.E9," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body[").concat(d,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(u,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(a.Mi," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(a.pN," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(a.Mi," .").concat(a.Mi," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(a.pN," .").concat(a.pN," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(d,"] {\n    ").concat(a.xi,": ").concat(c,"px;\n  }\n")},v=function(){var e=parseInt(document.body.getAttribute(d)||"0",10);return isFinite(e)?e:0},p=function(){r.useEffect(function(){return document.body.setAttribute(d,(v()+1).toString()),function(){var e=v()-1;e<=0?document.body.removeAttribute(d):document.body.setAttribute(d,e.toString())}},[])},m=function(e){var t=e.noRelative,n=e.noImportant,o=e.gapMode,a=void 0===o?"margin":o;p();var i=r.useMemo(function(){return l(a)},[a]);return r.createElement(s,{styles:f(i,!t,a,n?"":"!important")})}},74073:(e,t,n)=>{n.d(t,{A:()=>T});var r=n(6476),o=n(12115),a=n(95714),i=n(42607),u=(0,n(44577).f)(),c=function(){},l=o.forwardRef(function(e,t){var n=o.useRef(null),a=o.useState({onScrollCapture:c,onWheelCapture:c,onTouchMoveCapture:c}),l=a[0],s=a[1],d=e.forwardProps,f=e.children,v=e.className,p=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=e.gapMode,N=(0,r.Tt)(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(0,i.S)([n,t]),S=(0,r.Cl)((0,r.Cl)({},N),l);return o.createElement(o.Fragment,null,m&&o.createElement(g,{sideCar:u,removeScrollBar:p,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:n,gapMode:C}),d?o.cloneElement(o.Children.only(f),(0,r.Cl)((0,r.Cl)({},S),{ref:x})):o.createElement(void 0===w?"div":w,(0,r.Cl)({},S,{className:v,ref:x}),f))});l.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},l.classNames={fullWidth:a.pN,zeroRight:a.Mi};var s=n(66377),d=n(10101),f=n(75219),v=!1;if("undefined"!=typeof window)try{var p=Object.defineProperty({},"passive",{get:function(){return v=!0,!0}});window.addEventListener("test",p,p),window.removeEventListener("test",p,p)}catch(e){v=!1}var m=!!v&&{passive:!1},h=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},g=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),y(e,r)){var o=E(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},y=function(e,t){return"v"===e?h(t,"overflowY"):h(t,"overflowX")},E=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},b=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,c=n.target,l=t.contains(c),s=!1,d=u>0,f=0,v=0;do{var p=E(e,c),m=p[0],h=p[1]-p[2]-i*m;(m||h)&&y(e,c)&&(f+=h,v+=m),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-u>v)&&(s=!0),s},w=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},C=function(e){return[e.deltaX,e.deltaY]},N=function(e){return e&&"current"in e?e.current:e},x=0,S=[];let O=(0,s.m)(u,function(e){var t=o.useRef([]),n=o.useRef([0,0]),a=o.useRef(),i=o.useState(x++)[0],u=o.useState(f.T0)[0],c=o.useRef(e);o.useEffect(function(){c.current=e},[e]),o.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var t=(0,r.fX)([e.lockRef.current],(e.shards||[]).map(N),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=o.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!c.current.allowPinchZoom;var r,o=w(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-o[0],l="deltaY"in e?e.deltaY:i[1]-o[1],s=e.target,d=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=g(d,s);if(!f)return!0;if(f?r=d:(r="v"===d?"h":"v",f=g(d,s)),!f)return!1;if(!a.current&&"changedTouches"in e&&(u||l)&&(a.current=r),!r)return!0;var v=a.current||r;return b(v,t,e,"h"===v?u:l,!0)},[]),s=o.useCallback(function(e){if(S.length&&S[S.length-1]===u){var n="deltaY"in e?C(e):w(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(N).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),v=o.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),p=o.useCallback(function(e){n.current=w(e),a.current=void 0},[]),h=o.useCallback(function(t){v(t.type,C(t),t.target,l(t,e.lockRef.current))},[]),y=o.useCallback(function(t){v(t.type,w(t),t.target,l(t,e.lockRef.current))},[]);o.useEffect(function(){return S.push(u),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:y}),document.addEventListener("wheel",s,m),document.addEventListener("touchmove",s,m),document.addEventListener("touchstart",p,m),function(){S=S.filter(function(e){return e!==u}),document.removeEventListener("wheel",s,m),document.removeEventListener("touchmove",s,m),document.removeEventListener("touchstart",p,m)}},[]);var E=e.removeScrollBar,O=e.inert;return o.createElement(o.Fragment,null,O?o.createElement(u,{styles:"\n  .block-interactivity-".concat(i," {pointer-events: none;}\n  .allow-interactivity-").concat(i," {pointer-events: all;}\n")}):null,E?o.createElement(d.jp,{gapMode:e.gapMode}):null)});var R=o.forwardRef(function(e,t){return o.createElement(l,(0,r.Cl)({},e,{ref:t,sideCar:O}))});R.classNames=l.classNames;let T=R},75219:(e,t,n)=>{n.d(t,{T0:()=>u});var r,o=n(12115),a=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},i=function(){var e=a();return function(t,n){o.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},u=function(){var e=i();return function(t){return e(t.styles,t.dynamic),null}}},42607:(e,t,n)=>{n.d(t,{S:()=>u});var r=n(12115);function o(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var a="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,i=new WeakMap;function u(e,t){var n,u,c,l=(n=t||null,u=function(t){return e.forEach(function(e){return o(e,t)})},(c=(0,r.useState)(function(){return{value:n,callback:u,facade:{get current(){return c.value},set current(value){var e=c.value;e!==value&&(c.value=value,c.callback(value,e))}}}})[0]).callback=u,c.facade);return a(function(){var t=i.get(l);if(t){var n=new Set(t),r=new Set(e),a=l.current;n.forEach(function(e){r.has(e)||o(e,null)}),r.forEach(function(e){n.has(e)||o(e,a)})}i.set(l,e)},[e]),l}},66377:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(6476),o=n(12115),a=function(e){var t=e.sideCar,n=(0,r.Tt)(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw Error("Sidecar medium not found");return o.createElement(a,(0,r.Cl)({},n))};function i(e,t){return e.useMedium(t),a}a.isSideCarExport=!0},44577:(e,t,n)=>{n.d(t,{f:()=>a});var r=n(6476);function o(e){return e}function a(e){void 0===e&&(e={});var t,n,a,i=(void 0===t&&(t=o),n=[],a=!1,{read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:null},useMedium:function(e){var r=t(e,a);return n.push(r),function(){n=n.filter(function(e){return e!==r})}},assignSyncMedium:function(e){for(a=!0;n.length;){var t=n;n=[],t.forEach(e)}n={push:function(t){return e(t)},filter:function(){return n}}},assignMedium:function(e){a=!0;var t=[];if(n.length){var r=n;n=[],r.forEach(e),t=n}var o=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(o)};i(),n={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),n}}}});return i.options=(0,r.Cl)({async:!0,ssr:!1},e),i}},93610:(e,t,n)=>{n.d(t,{m:()=>r});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},18166:(e,t,n)=>{n.d(t,{A:()=>i,q:()=>a});var r=n(12115),o=n(95155);function a(e,t){let n=r.createContext(t),a=e=>{let{children:t,...a}=e,i=r.useMemo(()=>a,Object.values(a));return(0,o.jsx)(n.Provider,{value:i,children:t})};return a.displayName=e+"Provider",[a,function(o){let a=r.useContext(n);if(a)return a;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],a=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return a.scopeName=e,[function(t,a){let i=r.createContext(a),u=n.length;n=[...n,a];let c=t=>{let{scope:n,children:a,...c}=t,l=n?.[e]?.[u]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:a})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[u]||i,l=r.useContext(c);if(l)return l;if(void 0!==a)return a;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(a,...t)]}},66217:(e,t,n)=>{n.d(t,{G$:()=>Y,Hs:()=>w,UC:()=>et,VY:()=>er,ZL:()=>Q,bL:()=>V,bm:()=>eo,hE:()=>en,hJ:()=>ee,l9:()=>J});var r=n(12115),o=n(93610),a=n(88068),i=n(18166),u=n(67668),c=n(1488),l=n(59674),s=n(20196),d=n(17323),f=n(17028),v=n(23360),p=n(62292),m=n(74073),h=n(15587),g=n(12317),y=n(95155),E="Dialog",[b,w]=(0,i.A)(E),[C,N]=b(E),x=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:l=!0}=e,s=r.useRef(null),d=r.useRef(null),[f=!1,v]=(0,c.i)({prop:o,defaultProp:a,onChange:i});return(0,y.jsx)(C,{scope:t,triggerRef:s,contentRef:d,contentId:(0,u.B)(),titleId:(0,u.B)(),descriptionId:(0,u.B)(),open:f,onOpenChange:v,onOpenToggle:r.useCallback(()=>v(e=>!e),[v]),modal:l,children:n})};x.displayName=E;var S="DialogTrigger",O=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=N(S,n),u=(0,a.s)(t,i.triggerRef);return(0,y.jsx)(v.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":X(i.open),...r,ref:u,onClick:(0,o.m)(e.onClick,i.onOpenToggle)})});O.displayName=S;var R="DialogPortal",[T,M]=b(R,{forceMount:void 0}),D=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=N(R,t);return(0,y.jsx)(T,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,y.jsx)(f.C,{present:n||i.open,children:(0,y.jsx)(d.Z,{asChild:!0,container:a,children:e})}))})};D.displayName=R;var P="DialogOverlay",L=r.forwardRef((e,t)=>{let n=M(P,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=N(P,e.__scopeDialog);return a.modal?(0,y.jsx)(f.C,{present:r||a.open,children:(0,y.jsx)(A,{...o,ref:t})}):null});L.displayName=P;var A=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=N(P,n);return(0,y.jsx)(m.A,{as:g.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,y.jsx)(v.sG.div,{"data-state":X(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),k="DialogContent",j=r.forwardRef((e,t)=>{let n=M(k,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=N(k,e.__scopeDialog);return(0,y.jsx)(f.C,{present:r||a.open,children:a.modal?(0,y.jsx)(I,{...o,ref:t}):(0,y.jsx)(F,{...o,ref:t})})});j.displayName=k;var I=r.forwardRef((e,t)=>{let n=N(k,e.__scopeDialog),i=r.useRef(null),u=(0,a.s)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,h.Eq)(e)},[]),(0,y.jsx)(W,{...e,ref:u,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.m)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.m)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.m)(e.onFocusOutside,e=>e.preventDefault())})}),F=r.forwardRef((e,t)=>{let n=N(k,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,y.jsx)(W,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),W=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:u,...c}=e,d=N(k,n),f=r.useRef(null),v=(0,a.s)(t,f);return(0,p.Oh)(),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.n,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:u,children:(0,y.jsx)(l.qW,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":X(d.open),...c,ref:v,onDismiss:()=>d.onOpenChange(!1)})}),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(H,{titleId:d.titleId}),(0,y.jsx)(z,{contentRef:f,descriptionId:d.descriptionId})]})]})}),_="DialogTitle",B=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=N(_,n);return(0,y.jsx)(v.sG.h2,{id:o.titleId,...r,ref:t})});B.displayName=_;var U="DialogDescription",q=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=N(U,n);return(0,y.jsx)(v.sG.p,{id:o.descriptionId,...r,ref:t})});q.displayName=U;var G="DialogClose",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=N(G,n);return(0,y.jsx)(v.sG.button,{type:"button",...r,ref:t,onClick:(0,o.m)(e.onClick,()=>a.onOpenChange(!1))})});function X(e){return e?"open":"closed"}K.displayName=G;var $="DialogTitleWarning",[Y,Z]=(0,i.q)($,{contentName:k,titleName:_,docsSlug:"dialog"}),H=e=>{let{titleId:t}=e,n=Z($),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},z=e=>{let{contentRef:t,descriptionId:n}=e,o=Z("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},V=x,J=O,Q=D,ee=L,et=j,en=B,er=q,eo=K},59674:(e,t,n)=>{n.d(t,{qW:()=>f});var r,o=n(12115),a=n(93610),i=n(23360),u=n(88068),c=n(41524),l=n(95155),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:m=!1,onEscapeKeyDown:h,onPointerDownOutside:g,onFocusOutside:y,onInteractOutside:E,onDismiss:b,...w}=e,C=o.useContext(d),[N,x]=o.useState(null),S=null!==(f=null==N?void 0:N.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,O]=o.useState({}),R=(0,u.s)(t,e=>x(e)),T=Array.from(C.layers),[M]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),D=T.indexOf(M),P=N?T.indexOf(N):-1,L=C.layersWithOutsidePointerEventsDisabled.size>0,A=P>=D,k=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.c)(e),a=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!a.current){let t=function(){p("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);a.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>a.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!A||n||(null==g||g(e),null==E||E(e),e.defaultPrevented||null==b||b())},S),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.c)(e),a=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!a.current&&p("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==y||y(e),null==E||E(e),e.defaultPrevented||null==b||b())},S);return!function(e,t=globalThis?.document){let n=(0,c.c)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==C.layers.size-1||(null==h||h(e),!e.defaultPrevented&&b&&(e.preventDefault(),b()))},S),o.useEffect(()=>{if(N)return m&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(N)),C.layers.add(N),v(),()=>{m&&1===C.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=r)}},[N,S,m,C]),o.useEffect(()=>()=>{N&&(C.layers.delete(N),C.layersWithOutsidePointerEventsDisabled.delete(N),v())},[N,C]),o.useEffect(()=>{let e=()=>O({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(i.sG.div,{...w,ref:R,style:{pointerEvents:L?A?"auto":"none":void 0,...e.style},onFocusCapture:(0,a.m)(e.onFocusCapture,j.onFocusCapture),onBlurCapture:(0,a.m)(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:(0,a.m)(e.onPointerDownCapture,k.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function p(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,i.hO)(a,u):a.dispatchEvent(u)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),a=(0,u.s)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.sG.div,{...e,ref:a})}).displayName="DismissableLayerBranch"},62292:(e,t,n)=>{n.d(t,{Oh:()=>a});var r=n(12115),o=0;function a(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},20196:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(12115),o=n(88068),a=n(23360),i=n(41524),u=n(95155),c="focusScope.autoFocusOnMount",l="focusScope.autoFocusOnUnmount",s={bubbles:!1,cancelable:!0},d=r.forwardRef((e,t)=>{let{loop:n=!1,trapped:d=!1,onMountAutoFocus:h,onUnmountAutoFocus:g,...y}=e,[E,b]=r.useState(null),w=(0,i.c)(h),C=(0,i.c)(g),N=r.useRef(null),x=(0,o.s)(t,e=>b(e)),S=r.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;r.useEffect(()=>{if(d){let e=function(e){if(S.paused||!E)return;let t=e.target;E.contains(t)?N.current=t:p(N.current,{select:!0})},t=function(e){if(S.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||p(N.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[d,E,S.paused]),r.useEffect(()=>{if(E){m.add(S);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(c,s);E.addEventListener(c,w),E.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(f(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(E))}return()=>{E.removeEventListener(c,w),setTimeout(()=>{let t=new CustomEvent(l,s);E.addEventListener(l,C),E.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),E.removeEventListener(l,C),m.remove(S)},0)}}},[E,w,C,S]);let O=r.useCallback(e=>{if(!n&&!d||S.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,r=document.activeElement;if(t&&r){let t=e.currentTarget,[o,a]=function(e){let t=f(e);return[v(t,e),v(t.reverse(),e)]}(t);o&&a?e.shiftKey||r!==a?e.shiftKey&&r===o&&(e.preventDefault(),n&&p(a,{select:!0})):(e.preventDefault(),n&&p(o,{select:!0})):r===t&&e.preventDefault()}},[n,d,S.paused]);return(0,u.jsx)(a.sG.div,{tabIndex:-1,...y,ref:x,onKeyDown:O})});function f(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function v(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}d.displayName="FocusScope";var m=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=h(e,t)).unshift(t)},remove(t){var n;null===(n=(e=h(e,t))[0])||void 0===n||n.resume()}}}();function h(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},67668:(e,t,n)=>{n.d(t,{B:()=>c});var r,o=n(12115),a=n(46611),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),u=0;function c(e){let[t,n]=o.useState(i());return(0,a.N)(()=>{e||n(e=>e??String(u++))},[e]),e||(t?`radix-${t}`:"")}},17323:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(12115),o=n(47650),a=n(23360),i=n(46611),u=n(95155),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,i.N)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,u.jsx)(a.sG.div,{...s,ref:t}),v):null});c.displayName="Portal"},17028:(e,t,n)=>{n.d(t,{C:()=>i});var r=n(12115),o=n(88068),a=n(46611),i=e=>{let{present:t,children:n}=e,i=function(e){var t,n;let[o,i]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=u(c.current);s.current="mounted"===d?e:"none"},[d]),(0,a.N)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=u(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,a.N)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=u(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},a=e=>{e.target===o&&(s.current=u(c.current))};return o.addEventListener("animationstart",a),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",a),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(t),c="function"==typeof n?n({present:i.isPresent}):r.Children.only(n),l=(0,o.s)(i.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(c));return"function"==typeof n||i.isPresent?r.cloneElement(c,{ref:l}):null};function u(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},41524:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(12115);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1488:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(12115),o=n(41524);function a({prop:e,defaultProp:t,onChange:n=()=>{}}){let[a,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[a]=n,i=r.useRef(a),u=(0,o.c)(t);return r.useEffect(()=>{i.current!==a&&(u(a),i.current=a)},[a,i,u]),n}({defaultProp:t,onChange:n}),u=void 0!==e,c=u?e:a,l=(0,o.c)(n);return[c,r.useCallback(t=>{if(u){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[u,e,i,l])]}},46611:(e,t,n)=>{n.d(t,{N:()=>o});var r=n(12115),o=globalThis?.document?r.useLayoutEffect:()=>{}},6476:(e,t,n)=>{n.d(t,{Cl:()=>r,Tt:()=>o,fX:()=>i,sH:()=>a});var r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}function a(e,t,n,r){return new(n||(n=Promise))(function(o,a){function i(e){try{c(r.next(e))}catch(e){a(e)}}function u(e){try{c(r.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,u)}c((r=r.apply(e,t||[])).next())})}function i(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError}}]);