!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([,,function(e,t,n){},function(t,n,o){"use strict";o.r(n);o(2);function r(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function a(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function s(e){return e instanceof i(e).Element||e instanceof Element}function c(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function p(e){return e?(e.nodeName||"").toLowerCase():null}function f(e){return((s(e)?e.ownerDocument:e.document)||window.document).documentElement}function u(e){return r(f(e)).left+a(e).scrollLeft}function d(e){return i(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function h(e,t,n){void 0===n&&(n=!1);var o,s,d=f(t),h=r(e),m=c(t),v={scrollLeft:0,scrollTop:0},b={x:0,y:0};return(m||!m&&!n)&&(("body"!==p(t)||l(d))&&(v=(o=t)!==i(o)&&c(o)?{scrollLeft:(s=o).scrollLeft,scrollTop:s.scrollTop}:a(o)),c(t)?((b=r(t)).x+=t.clientLeft,b.y+=t.clientTop):d&&(b.x=u(d))),{x:h.left+v.scrollLeft-b.x,y:h.top+v.scrollTop-b.y,width:h.width,height:h.height}}function m(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function v(e){return"html"===p(e)?e:e.assignedSlot||e.parentNode||e.host||f(e)}function b(e,t){void 0===t&&(t=[]);var n=function e(t){return["html","body","#document"].indexOf(p(t))>=0?t.ownerDocument.body:c(t)&&l(t)?t:e(v(t))}(e),o="body"===p(n),r=i(n),a=o?[r].concat(r.visualViewport||[],l(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(b(v(a)))}function g(e){return["table","td","th"].indexOf(p(e))>=0}function y(e){if(!c(e)||"fixed"===d(e).position)return null;var t=e.offsetParent;if(t){var n=f(t);if("body"===p(t)&&"static"===d(t).position&&"static"!==d(n).position)return n}return t}function O(e){for(var t=i(e),n=y(e);n&&g(n)&&"static"===d(n).position;)n=y(n);return n&&"body"===p(n)&&"static"===d(n).position?t:n||function(e){for(var t=v(e);c(t)&&["html","body"].indexOf(p(t))<0;){var n=d(t);if("none"!==n.transform||"none"!==n.perspective||n.willChange&&"auto"!==n.willChange)return t;t=t.parentNode}return null}(e)||t}var w="top",x="bottom",j="right",D="left",E=[w,x,j,D],M=E.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),P=[].concat(E,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),k=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function T(e){var t=new Map,n=new Set,o=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(r){n.add(r.name),[].concat(r.requires||[],r.requiresIfExists||[]).forEach((function(o){if(!n.has(o)){var r=t.get(o);r&&e(r)}})),o.push(r)}(e)})),o}var C={placement:"bottom",modifiers:[],strategy:"absolute"};function L(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function S(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,r=t.defaultOptions,i=void 0===r?C:r;return function(e,t,n){void 0===n&&(n=i);var r,a,c={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},C),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},p=[],f=!1,u={state:c,setOptions:function(n){d(),c.options=Object.assign(Object.assign(Object.assign({},i),c.options),n),c.scrollParents={reference:s(e)?b(e):e.contextElement?b(e.contextElement):[],popper:b(t)};var r=function(e){var t=T(e);return k.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(o,c.options.modifiers)));return c.orderedModifiers=r.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:c,name:t,instance:u,options:o});p.push(i||function(){})}})),u.update()},forceUpdate:function(){if(!f){var e=c.elements,t=e.reference,n=e.popper;if(L(t,n)){c.rects={reference:h(t,O(n),"fixed"===c.options.strategy),popper:m(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<c.orderedModifiers.length;o++)if(!0!==c.reset){var r=c.orderedModifiers[o],i=r.fn,a=r.options,s=void 0===a?{}:a,p=r.name;"function"==typeof i&&(c=i({state:c,options:s,name:p,instance:u})||c)}else c.reset=!1,o=-1}}},update:(r=function(){return new Promise((function(e){u.forceUpdate(),e(c)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(r())}))}))),a}),destroy:function(){d(),f=!0}};if(!L(e,t))return u;function d(){p.forEach((function(e){return e()})),p=[]}return u.setOptions(n).then((function(e){!f&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var A={passive:!0};function B(e){return e.split("-")[0]}function W(e){return e.split("-")[1]}function H(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function R(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?B(r):null,a=r?W(r):null,s=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(i){case w:t={x:s,y:n.y-o.height};break;case x:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:c};break;case D:t={x:n.x-o.width,y:c};break;default:t={x:n.x,y:n.y}}var p=i?H(i):null;if(null!=p){var f="y"===p?"height":"width";switch(a){case"start":t[p]=Math.floor(t[p])-Math.floor(n[f]/2-o[f]/2);break;case"end":t[p]=Math.floor(t[p])+Math.ceil(n[f]/2-o[f]/2)}}return t}var q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function N(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.offsets,s=e.position,c=e.gpuAcceleration,p=e.adaptive,u=function(e){var t=e.x,n=e.y,o=window.devicePixelRatio||1;return{x:Math.round(t*o)/o||0,y:Math.round(n*o)/o||0}}(a),d=u.x,l=u.y,h=a.hasOwnProperty("x"),m=a.hasOwnProperty("y"),v=D,b=w,g=window;if(p){var y=O(n);y===i(n)&&(y=f(n)),r===w&&(b=x,l-=y.clientHeight-o.height,l*=c?1:-1),r===D&&(v=j,d-=y.clientWidth-o.width,d*=c?1:-1)}var E,M=Object.assign({position:s},p&&q);return c?Object.assign(Object.assign({},M),{},((E={})[b]=m?"0":"",E[v]=h?"0":"",E.transform=(g.devicePixelRatio||1)<2?"translate("+d+"px, "+l+"px)":"translate3d("+d+"px, "+l+"px, 0)",E)):Object.assign(Object.assign({},M),{},((t={})[b]=m?l+"px":"",t[v]=h?d+"px":"",t.transform="",t))}var _={left:"right",right:"left",bottom:"top",top:"bottom"};function I(e){return e.replace(/left|right|bottom|top/g,(function(e){return _[e]}))}var V={start:"end",end:"start"};function U(e){return e.replace(/start|end/g,(function(e){return V[e]}))}function z(e,t){var n,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if((n=o)instanceof i(n).ShadowRoot||n instanceof ShadowRoot){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function F(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Q(e,t){return"viewport"===t?F(function(e){var t=i(e),n=f(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,s=0,c=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,c=o.offsetTop)),{width:r,height:a,x:s+u(e),y:c}}(e)):c(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):F(function(e){var t=f(e),n=a(e),o=e.ownerDocument.body,r=Math.max(t.scrollWidth,t.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+u(e),c=-n.scrollTop;return"rtl"===d(o||t).direction&&(s+=Math.max(t.clientWidth,o?o.clientWidth:0)-r),{width:r,height:i,x:s,y:c}}(f(e)))}function X(e,t,n){var o="clippingParents"===t?function(e){var t=b(v(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&c(e)?O(e):e;return s(n)?t.filter((function(e){return s(e)&&z(e,n)&&"body"!==p(e)})):[]}(e):[].concat(t),r=[].concat(o,[n]),i=r[0],a=r.reduce((function(t,n){var o=Q(e,n);return t.top=Math.max(o.top,t.top),t.right=Math.min(o.right,t.right),t.bottom=Math.min(o.bottom,t.bottom),t.left=Math.max(o.left,t.left),t}),Q(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Y(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function G(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function J(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,a=n.boundary,c=void 0===a?"clippingParents":a,p=n.rootBoundary,u=void 0===p?"viewport":p,d=n.elementContext,l=void 0===d?"popper":d,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,b=void 0===v?0:v,g=Y("number"!=typeof b?b:G(b,E)),y="popper"===l?"reference":"popper",O=e.elements.reference,D=e.rects.popper,M=e.elements[m?y:l],P=X(s(M)?M:M.contextElement||f(e.elements.popper),c,u),k=r(O),T=R({reference:k,element:D,strategy:"absolute",placement:i}),C=F(Object.assign(Object.assign({},D),T)),L="popper"===l?C:k,S={top:P.top-L.top+g.top,bottom:L.bottom-P.bottom+g.bottom,left:P.left-L.left+g.left,right:L.right-P.right+g.right},A=e.modifiersData.offset;if("popper"===l&&A){var B=A[i];Object.keys(S).forEach((function(e){var t=[j,x].indexOf(e)>=0?1:-1,n=[w,x].indexOf(e)>=0?"y":"x";S[e]+=B[n]*t}))}return S}function K(e,t,n){return Math.max(e,Math.min(t,n))}function Z(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function $(e){return[w,j,x,D].some((function(t){return e[t]>=0}))}var ee,te,ne,oe=S({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=void 0===r||r,s=o.resize,c=void 0===s||s,p=i(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach((function(e){e.addEventListener("scroll",n.update,A)})),c&&p.addEventListener("resize",n.update,A),function(){a&&f.forEach((function(e){e.removeEventListener("scroll",n.update,A)})),c&&p.removeEventListener("resize",n.update,A)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=R({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,a=void 0===i||i,s={placement:B(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),N(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),N(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];c(r)&&p(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});c(o)&&p(o)&&(Object.assign(o.style,i),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,a=P.reduce((function(e,n){return e[n]=function(e,t,n){var o=B(e),r=[D,w].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign(Object.assign({},t),{},{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[D,j].indexOf(o)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,p=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=p),t.modifiersData[o]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,p=n.padding,f=n.boundary,u=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,h=void 0===l||l,m=n.allowedAutoPlacements,v=t.options.placement,b=B(v),g=c||(b===v||!h?[I(v)]:function(e){if("auto"===B(e))return[];var t=I(e);return[U(e),t,U(t)]}(v)),y=[v].concat(g).reduce((function(e,n){return e.concat("auto"===B(n)?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?P:c,f=W(o),u=f?s?M:M.filter((function(e){return W(e)===f})):E,d=u.filter((function(e){return p.indexOf(e)>=0}));0===d.length&&(d=u);var l=d.reduce((function(t,n){return t[n]=J(e,{placement:n,boundary:r,rootBoundary:i,padding:a})[B(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:f,rootBoundary:u,padding:p,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),O=t.rects.reference,k=t.rects.popper,T=new Map,C=!0,L=y[0],S=0;S<y.length;S++){var A=y[S],H=B(A),R="start"===W(A),q=[w,x].indexOf(H)>=0,N=q?"width":"height",_=J(t,{placement:A,boundary:f,rootBoundary:u,altBoundary:d,padding:p}),V=q?R?j:D:R?x:w;O[N]>k[N]&&(V=I(V));var z=I(V),F=[];if(i&&F.push(_[H]<=0),s&&F.push(_[V]<=0,_[z]<=0),F.every((function(e){return e}))){L=A,C=!1;break}T.set(A,F)}if(C)for(var Q=function(e){var t=y.find((function(t){var n=T.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return L=t,"break"},X=h?3:1;X>0;X--){if("break"===Q(X))break}t.placement!==L&&(t.modifiersData[o]._skip=!0,t.placement=L,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,p=n.rootBoundary,f=n.altBoundary,u=n.padding,d=n.tether,l=void 0===d||d,h=n.tetherOffset,v=void 0===h?0:h,b=J(t,{boundary:c,rootBoundary:p,padding:u,altBoundary:f}),g=B(t.placement),y=W(t.placement),E=!y,M=H(g),P="x"===M?"y":"x",k=t.modifiersData.popperOffsets,T=t.rects.reference,C=t.rects.popper,L="function"==typeof v?v(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):v,S={x:0,y:0};if(k){if(i){var A="y"===M?w:D,R="y"===M?x:j,q="y"===M?"height":"width",N=k[M],_=k[M]+b[A],I=k[M]-b[R],V=l?-C[q]/2:0,U="start"===y?T[q]:C[q],z="start"===y?-C[q]:-T[q],F=t.elements.arrow,Q=l&&F?m(F):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Y=X[A],G=X[R],Z=K(0,T[q],Q[q]),$=E?T[q]/2-V-Z-Y-L:U-Z-Y-L,ee=E?-T[q]/2+V+Z+G+L:z+Z+G+L,te=t.elements.arrow&&O(t.elements.arrow),ne=te?"y"===M?te.clientTop||0:te.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][M]:0,re=k[M]+$-oe-ne,ie=k[M]+ee-oe,ae=K(l?Math.min(_,re):_,N,l?Math.max(I,ie):I);k[M]=ae,S[M]=ae-N}if(s){var se="x"===M?w:D,ce="x"===M?x:j,pe=k[P],fe=K(pe+b[se],pe,pe-b[ce]);k[P]=fe,S[P]=fe-pe}t.modifiersData[o]=S}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=n.elements.arrow,i=n.modifiersData.popperOffsets,a=B(n.placement),s=H(a),c=[D,j].indexOf(a)>=0?"height":"width";if(r&&i){var p=n.modifiersData[o+"#persistent"].padding,f=m(r),u="y"===s?w:D,d="y"===s?x:j,l=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],h=i[s]-n.rects.reference[s],v=O(r),b=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,g=l/2-h/2,y=p[u],E=b-f[c]-p[d],M=b/2-f[c]/2+g,P=K(y,M,E),k=s;n.modifiersData[o]=((t={})[k]=P,t.centerOffset=P-M,t)}},effect:function(e){var t=e.state,n=e.options,o=e.name,r=n.element,i=void 0===r?"[data-popper-arrow]":r,a=n.padding,s=void 0===a?0:a;null!=i&&("string"!=typeof i||(i=t.elements.popper.querySelector(i)))&&z(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[o+"#persistent"]={padding:Y("number"!=typeof s?s:G(s,E))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=J(t,{elementContext:"reference"}),s=J(t,{altBoundary:!0}),c=Z(a,o),p=Z(s,r,i),f=$(c),u=$(p);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:u},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":f,"data-popper-escaped":u})}}]});function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ae(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}ee=jQuery,te=function e(t){return ee(t).map((function(){return this instanceof Array?e(this).toArray():this instanceof jQuery?this.toArray():this instanceof String?ee(this.toString()).toArray():this}))},ne={noClass:[]},ee.fn.expander=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.each((function(){var n=this;if(!ee(this).hasClass("expander-inited")){ee(this).addClass("expander-inited");var o={};Object.keys(ee.fn.expander.defaults).forEach((function(e){if(void 0!==ee(n).attr("data-"+e))switch(o[e]=ee(n).attr("data-"+e),isNaN(o[e])||(o[e]=Number(o[e])),o[e]){case"true":o[e]=!0;break;case"false":o[e]=!1}}));var r=ee.extend({},ee.fn.expander.defaults,o,t);switch(r.body=te(r.body).add(ee(this).find("*[data-body]")),r.toggle=te(r.toggle).add(ee(this).find("*[data-toggle]")),r.open=te(r.open).add(ee(this).find("*[data-open]")),r.close=te(r.close).add(ee(this).find("*[data-close]")),ee(this).data("expander")){case"opened":!1!==t.opened&&(r.opened=!0);break;case"closed":!0!==t.opened&&(r.opened=!1);break;default:t.class||(r.class=ee(this).data("expander")||!1),!0!==t.opened&&!0!==o.opened&&(r.opened=!1)}var i={wrapper:this,options:r,open:function(e){var t=e.event;if(e.force,this.options.class&&ne[this.options.class].forEach((function(e){return e!==i&&e.close({force:!0})})),this.options.dropdown){if(this.destroyTimeout&&(clearTimeout(this.destroyTimeout),this.destroyTimeout=null),!this.popper){var n=this.dropdown,o=n.tooltip,r=n.btn;ee(o).css("display","block");var a=ie({placement:this.options.dropdown},this.options.popper);this.popper=oe(r,o,a)}}else ee(this.options.body).stop().slideDown(this.options.animationDuration);this.options.opened=!0,ee(this.wrapper).addClass("opened"),this.options.onOpen&&this.options.onOpen(t,this)},close:function(e){var t=this,n=e.event,o=void 0===n?null:n,r=e.force,i=void 0!==r&&r;(this.options.closeable||i)&&(this.options.opened=!1,this.options.dropdown?this.popper&&(this.destroyTimeout=setTimeout((function(){t.popper.destroy(),t.popper=null,ee(t.dropdown.tooltip).css("display","none")}),300)):ee(this.options.body).stop().slideUp(this.options.animationDuration),ee(this.wrapper).removeClass("opened"),this.options.onClose&&this.options.onClose(o,this))},toggle:function(e){var t=e.event,n=e.force,o=void 0!==n&&n;this.options.opened?this.close({event:t,force:o}):this.open({event:t,force:o}),this.options.onToggle&&this.options.onToggle(t,this)}};i.options.class?ne[i.options.class]?ne[i.options.class].push(i):(!1!==t.opened&&!1!==o.opened&&(i.options.opened=!0),ne[i.options.class]=[i]):ne.noClass.push(i);var a=i.options,s=a.body,c=a.toggle,p=a.open,f=a.close,u=a.dropdown,d=a.dropdownHoverable;if(u){ee(this).addClass("mode-dropdown"),ee(s).wrap('<div class="expander-dropdown"></div>');var l,h,m=s.parent().get(0),v=c.get(0);i.dropdown={tooltip:m,btn:v};var b=[v];d&&b.push(m),ee(te(b)).on("click",(function(e){h||e.preventDefault()})).on("mouseenter",(function(e){l=setTimeout((function(){return h=!0}),50),i.open({event:e})})).on("mouseleave",(function(e){l&&(clearTimeout(l),h=!1),i.close({event:e})}))}else ee(this).addClass("mode-accordion"),ee(c).on("click",(function(e){r.preventDefault&&e.preventDefault(),i.toggle({event:e})})),ee(p).on("click",(function(t){r.preventDefault&&e.preventDefault(),i.open({event:t})})),ee(f).on("click",(function(t){r.preventDefault&&e.preventDefault(),i.close({event:t})}));i.options.opened?i.open({force:!0}):i.close({force:!0}),i.options.onInit&&i.options.onInit(i)}}))},ee.fn.expander.defaults={opened:!1,class:!1,closeable:!0,preventDefault:!0,onOpen:!1,onClose:!1,onToggle:!1,onInit:!1,animationDuration:300,body:[],toggle:[],open:[],close:[],dropdown:!1,dropdownHoverable:!0,popper:{}},ee(window).one("load",(function(){ee("*[data-expander]").expander()}))}]);