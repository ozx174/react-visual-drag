(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[2603],{29530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},r={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},i=[],a=[];function c(e,t,n){e.addEventListener(t,n,!1)}function s(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];for(var i in r)if(i in e){n.push(r[i]);break}}}"AnimationEvent"in window||(delete o.animationstart.animation,delete r.animationend.animation),"TransitionEvent"in window||(delete o.transitionstart.transition,delete r.transitionend.transition),t(o,i),t(r,a)}();const l={startEvents:i,addStartEventListener:function(e,t){0!==i.length?i.forEach((function(n){c(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==i.length&&i.forEach((function(n){s(e,n,t)}))},endEvents:a,addEndEventListener:function(e,t){0!==a.length?a.forEach((function(n){c(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==a.length&&a.forEach((function(n){s(e,n,t)}))}}},85907:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o,r=n(63497),i=n.n(r),a=n(9830),c=n.n(a),s=n(30695),l=n.n(s),u=n(83507),f=n.n(u),m=n(69024),d=n.n(m),p=n(600),v=n.n(p),E=n(67294),y=n(57016),h=n(71577),b=n(31097);var g=(0,n(16550).EN)(o=function(e){f()(r,e);var t,n,o=(t=r,n=function(){if("undefined"==typeof Reflect||!i())return!1;if(i().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(i()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,o=v()(t);if(n){var r=v()(this).constructor;e=i()(o,arguments,r)}else e=o.apply(this,arguments);return d()(this,e)});function r(){var e;c()(this,r);for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return(e=o.call.apply(o,[this].concat(n))).onDelete=function(t,n){t&&t.stopPropagation(),e.props.onDelete(n)},e.linkRolePage=function(t){t.preventDefault(),t.stopPropagation(),y.Z.confirm({title:"提示",content:"设置用户组不会保存当前审批流，确认要去设置用户组吗",cancelText:"取消",okText:"去设置",zIndex:2e3,onOk:function(){e.props.history.replace("/company/roles/index")}})},e.generateMemberEl=function(t,n){if(t.is_empty){var o=E.createElement("div",null,"该用户组下没有成员,",E.createElement(h.Z,{style:{padding:0},type:"link",onClick:e.linkRolePage},"前往设置"));return E.createElement(b.Z,{key:n,placement:"top",title:o},E.createElement("div",{className:"member-box quit"},E.createElement("span",{className:"img-box"},t.uname.substr(0,1)),E.createElement("span",{className:"member-name"},"".concat(t.uname).concat(t.leave?"(已离职)":"").concat(t.is_del?"(已删除)":"")),E.createElement("span",{className:"member-tip-icon"},E.createElement("img",{src:"https://apg-1258944054.cos.ap-guangzhou.myqcloud.com/apg/pc-micro-reimburse/common/%21.png",alt:""})),E.createElement("i",{className:"member-delete",onClick:function(t){e.onDelete(t,n)}})))}return E.createElement("div",{key:n,className:"member-box ".concat(t.leave||t.is_del?"quit":"")},E.createElement("span",{className:"img-box"},t.uname.substr(0,1)),E.createElement("span",{className:"member-name"},"".concat(t.uname).concat(t.leave?"(已离职)":"").concat(t.is_del?"(已删除)":"")),E.createElement("i",{className:"member-delete",onClick:function(t){e.onDelete(t,n)}}))},e}return l()(r,[{key:"render",value:function(){var e=this,t=this.props.members;return E.createElement("div",{className:"selected-member-wrapper",onClick:function(){e.props.showSelector&&e.props.showSelector()}},t.map((function(t,n){return e.generateMemberEl(t,n)})))}}]),r}(E.Component))||o},75:function(e){(function(){var t,n,o,r,i,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-i)/1e6},n=process.hrtime,r=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),a=1e9*process.uptime(),i=r-a):Date.now?(e.exports=function(){return Date.now()-o},o=Date.now()):(e.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)},54087:(e,t,n)=>{for(var o=n(75),r="undefined"==typeof window?n.g:window,i=["moz","webkit"],a="AnimationFrame",c=r["request"+a],s=r["cancel"+a]||r["cancelRequest"+a],l=0;!c&&l<i.length;l++)c=r[i[l]+"Request"+a],s=r[i[l]+"Cancel"+a]||r[i[l]+"CancelRequest"+a];if(!c||!s){var u=0,f=0,m=[];c=function(e){if(0===m.length){var t=o(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return m.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}e.exports=function(e){return c.call(r,e)},e.exports.cancel=function(){s.apply(r,arguments)},e.exports.polyfill=function(e){e||(e=r),e.requestAnimationFrame=c,e.cancelAnimationFrame=s}},71506:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(28481),r=n(67294),i=n(72944),a=n(28991),c=n(94184),s=n.n(c),l=n(15105),u=n(94999),f=n(60444);function m(e){var t=e.prefixCls,n=e.style,o=e.visible,i=e.maskProps,c=e.motionName;return r.createElement(f.Z,{key:"mask",visible:o,motionName:c,leavedClassName:"".concat(t,"-mask-hidden")},(function(e){var o=e.className,c=e.style;return r.createElement("div",Object.assign({style:(0,a.Z)((0,a.Z)({},c),n),className:s()("".concat(t,"-mask"),o)},i))}))}function d(e,t,n){var o=t;return!o&&n&&(o="".concat(e,"-").concat(n)),o}var p=-1;function v(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o])}return n}var E={width:0,height:0,overflow:"hidden",outline:"none"},y=r.forwardRef((function(e,t){var n=e.closable,i=e.prefixCls,c=e.width,l=e.height,u=e.footer,m=e.title,d=e.closeIcon,p=e.style,y=e.className,h=e.visible,b=e.forceRender,g=e.bodyStyle,C=e.bodyProps,N=e.children,S=e.destroyOnClose,O=e.modalRender,w=e.motionName,T=e.ariaId,A=e.onClose,R=e.onVisibleChanged,_=e.onClick,P=e.mousePosition,M=(0,r.useRef)(),I=(0,r.useRef)(),k=(0,r.useRef)();r.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=M.current)||void 0===e||e.focus()},getDOM:function(){return k.current},changeActive:function(e){var t=document.activeElement;e&&t===I.current?M.current.focus():e||t!==M.current||I.current.focus()}}}));var U,x,D,L=r.useState(),Z=(0,o.Z)(L,2),F=Z[0],H=Z[1],W={};function K(){var e,t,n,o,r,i=(n={left:(t=(e=k.current).getBoundingClientRect()).left,top:t.top},r=(o=e.ownerDocument).defaultView||o.parentWindow,n.left+=v(r),n.top+=v(r,!0),n);H(P?"".concat(P.x-i.left,"px ").concat(P.y-i.top,"px"):"")}void 0!==c&&(W.width=c),void 0!==l&&(W.height=l),F&&(W.transformOrigin=F),u&&(U=r.createElement("div",{className:"".concat(i,"-footer")},u)),m&&(x=r.createElement("div",{className:"".concat(i,"-header")},r.createElement("div",{className:"".concat(i,"-title"),id:T},m))),n&&(D=r.createElement("button",{type:"button",onClick:A,"aria-label":"Close",className:"".concat(i,"-close")},d||r.createElement("span",{className:"".concat(i,"-close-x")})));var V=r.createElement("div",{className:"".concat(i,"-content")},D,x,r.createElement("div",Object.assign({className:"".concat(i,"-body"),style:g},C),N),U);return r.createElement(f.Z,{visible:h,onVisibleChanged:R,onAppearPrepare:K,onEnterPrepare:K,forceRender:b,motionName:w,removeOnLeave:S,ref:k},(function(e,t){var n=e.className,o=e.style;return r.createElement("div",{key:"dialog-element",role:"document",ref:t,style:(0,a.Z)((0,a.Z)((0,a.Z)({},o),p),W),className:s()(i,y,n),onClick:_},r.createElement("div",{tabIndex:0,ref:M,style:E,"aria-hidden":"true"}),O?O(V):V,r.createElement("div",{tabIndex:0,ref:I,style:E,"aria-hidden":"true"}))}))}));y.displayName="Content";const h=y;function b(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,i=e.zIndex,c=e.visible,f=void 0!==c&&c,v=e.keyboard,E=void 0===v||v,y=e.focusTriggerAfterClose,b=void 0===y||y,g=e.switchScrollingEffect,C=void 0===g?function(){}:g,N=e.title,S=e.wrapStyle,O=e.wrapClassName,w=e.wrapProps,T=e.onClose,A=e.afterClose,R=e.transitionName,_=e.animation,P=e.closable,M=void 0===P||P,I=e.mask,k=void 0===I||I,U=e.maskTransitionName,x=e.maskAnimation,D=e.maskClosable,L=void 0===D||D,Z=e.maskStyle,F=e.maskProps,H=(0,r.useRef)(),W=(0,r.useRef)(),K=(0,r.useRef)(),V=r.useState(f),j=(0,o.Z)(V,2),z=j[0],B=j[1],G=(0,r.useRef)();function Q(e){null==T||T(e)}G.current||(G.current="rcDialogTitle".concat(p+=1));var Y=(0,r.useRef)(!1),q=(0,r.useRef)(),X=null;return L&&(X=function(e){Y.current||(0,u.Z)(K.current.getDOM(),e.target)||Q(e)}),(0,r.useEffect)((function(){f&&(B(!0),C())}),[f]),(0,r.useEffect)((function(){return function(){C(),clearTimeout(q.current)}}),[]),r.createElement("div",{className:"".concat(n,"-root")},r.createElement(m,{prefixCls:n,visible:k&&f,motionName:d(n,U,x),style:(0,a.Z)({zIndex:i},Z),maskProps:F}),r.createElement("div",Object.assign({tabIndex:-1,onKeyDown:function(e){if(E&&e.keyCode===l.Z.ESC)return e.stopPropagation(),void Q(e);f&&e.keyCode===l.Z.TAB&&K.current.changeActive(!e.shiftKey)},className:s()("".concat(n,"-wrap"),O),ref:W,onClick:X,role:"dialog","aria-labelledby":N?G.current:null,style:(0,a.Z)((0,a.Z)({zIndex:i},S),{},{display:z?null:"none"})},w),r.createElement(h,Object.assign({},e,{onClick:function(){clearTimeout(q.current),Y.current=!0,q.current=setTimeout((function(){Y.current=!1}))},ref:K,closable:M,ariaId:G.current,prefixCls:n,visible:f,onClose:Q,onVisibleChanged:function(e){if(e){var t;(0,u.Z)(W.current,document.activeElement)||(H.current=document.activeElement,null===(t=K.current)||void 0===t||t.focus())}else{if(B(!1),C(),k&&H.current&&b){try{H.current.focus({preventScroll:!0})}catch(e){}H.current=null}null==A||A()}},motionName:d(n,R,_)}))))}var g=function(e){var t=e.visible,n=e.getContainer,a=e.forceRender,c=e.destroyOnClose,s=void 0!==c&&c,l=e.afterClose,u=r.useState(t),f=(0,o.Z)(u,2),m=f[0],d=f[1];return r.useEffect((function(){t&&d(!0)}),[t]),!1===n?r.createElement(b,Object.assign({},e,{getOpenCount:function(){return 2}})):a||!s||m?r.createElement(i.Z,{visible:t,forceRender:a,getContainer:n},(function(t){return r.createElement(b,Object.assign({},e,{destroyOnClose:s,afterClose:function(){null==l||l(),d(!1)}},t))})):null};g.displayName="Dialog";const C=g},51472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var o=n(90484),r=n(28991),i=n(81253),a=n(67294),c=n(63533),s=n(43159);const l=function(e){var t=e.overlay,n=e.prefixCls,o=e.id,r=e.overlayInnerStyle;return a.createElement("div",{className:"".concat(n,"-inner"),id:o,role:"tooltip",style:r},"function"==typeof t?t():t)},u=(0,a.forwardRef)((function(e,t){var n=e.overlayClassName,u=e.trigger,f=void 0===u?["hover"]:u,m=e.mouseEnterDelay,d=void 0===m?0:m,p=e.mouseLeaveDelay,v=void 0===p?.1:p,E=e.overlayStyle,y=e.prefixCls,h=void 0===y?"rc-tooltip":y,b=e.children,g=e.onVisibleChange,C=e.afterVisibleChange,N=e.transitionName,S=e.animation,O=e.placement,w=void 0===O?"right":O,T=e.align,A=void 0===T?{}:T,R=e.destroyTooltipOnHide,_=void 0!==R&&R,P=e.defaultVisible,M=e.getTooltipContainer,I=e.overlayInnerStyle,k=(0,i.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),U=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(function(){return U.current}));var x=(0,r.Z)({},k);"visible"in e&&(x.popupVisible=e.visible);var D=!1,L=!1;if("boolean"==typeof _)D=_;else if(_&&"object"===(0,o.Z)(_)){var Z=_.keepParent;D=!0===Z,L=!1===Z}return a.createElement(c.Z,Object.assign({popupClassName:n,prefixCls:h,popup:function(){var t=e.arrowContent,n=void 0===t?null:t,o=e.overlay,r=e.id;return[a.createElement("div",{className:"".concat(h,"-arrow"),key:"arrow"},n),a.createElement(l,{key:"content",prefixCls:h,id:r,overlay:o,overlayInnerStyle:I})]},action:f,builtinPlacements:s.C,popupPlacement:w,ref:U,popupAlign:A,getPopupContainer:M,onPopupVisibleChange:g,afterPopupVisibleChange:C,popupTransitionName:N,popupAnimation:S,defaultPopupVisible:P,destroyPopupOnHide:D,autoDestroy:L,mouseLeaveDelay:v,popupStyle:E,mouseEnterDelay:d},x),b)}))},43159:(e,t,n)=>{"use strict";n.d(t,{C:()=>i});var o={adjustX:1,adjustY:1},r=[0,0],i={left:{points:["cr","cl"],overflow:o,offset:[-4,0],targetOffset:r},right:{points:["cl","cr"],overflow:o,offset:[4,0],targetOffset:r},top:{points:["bc","tc"],overflow:o,offset:[0,-4],targetOffset:r},bottom:{points:["tc","bc"],overflow:o,offset:[0,4],targetOffset:r},topLeft:{points:["bl","tl"],overflow:o,offset:[0,-4],targetOffset:r},leftTop:{points:["tr","tl"],overflow:o,offset:[-4,0],targetOffset:r},topRight:{points:["br","tr"],overflow:o,offset:[0,-4],targetOffset:r},rightTop:{points:["tl","tr"],overflow:o,offset:[4,0],targetOffset:r},bottomRight:{points:["tr","br"],overflow:o,offset:[0,4],targetOffset:r},rightBottom:{points:["bl","br"],overflow:o,offset:[4,0],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:o,offset:[0,4],targetOffset:r},leftBottom:{points:["br","bl"],overflow:o,offset:[-4,0],targetOffset:r}}},15105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var o={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=o.F1&&t<=o.F12)return!1;switch(t){case o.ALT:case o.CAPS_LOCK:case o.CONTEXT_MENU:case o.CTRL:case o.DOWN:case o.END:case o.ESC:case o.HOME:case o.INSERT:case o.LEFT:case o.MAC_FF_META:case o.META:case o.NUMLOCK:case o.NUM_CENTER:case o.PAGE_DOWN:case o.PAGE_UP:case o.PAUSE:case o.PRINT_SCREEN:case o.RIGHT:case o.SHIFT:case o.UP:case o.WIN_KEY:case o.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=o.ZERO&&e<=o.NINE)return!0;if(e>=o.NUM_ZERO&&e<=o.NUM_MULTIPLY)return!0;if(e>=o.A&&e<=o.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case o.SPACE:case o.QUESTION_MARK:case o.NUM_PLUS:case o.NUM_MINUS:case o.NUM_PERIOD:case o.NUM_DIVISION:case o.SEMICOLON:case o.DASH:case o.EQUALS:case o.COMMA:case o.PERIOD:case o.SLASH:case o.APOSTROPHE:case o.SINGLE_QUOTE:case o.OPEN_SQUARE_BRACKET:case o.BACKSLASH:case o.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const r=o},72944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var o=n(67294),r=n(75164),i=n(59015),a=n(74204);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.element,o=void 0===n?document.body:n,r={},i=Object.keys(e);return i.forEach((function(e){r[e]=o.style[e]})),i.forEach((function(t){o.style[t]=e[t]})),r};var s={};const l=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),o=document.body.className;if(e){if(!n.test(o))return;return c(s),s={},void(document.body.className=o.replace(n,"").trim())}var r=(0,a.Z)();if(r&&(s=c({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!n.test(o))){var i="".concat(o," ").concat(t);document.body.className=i.trim()}}};var u=n(98924);function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var y=0,h=(0,u.Z)(),b={},g=function(e){if(!h)return null;if(e){if("string"==typeof e)return document.querySelectorAll(e)[0];if("function"==typeof e)return e();if("object"===E(e)&&e instanceof window.HTMLElement)return e}return document.body};const C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(C,e);var t,n,a,s,u,E=(s=C,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(s);if(u){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return d(this,e)});function C(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,C),(t=E.call(this,e)).componentRef=o.createRef(),t.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||t.container&&!t.container.parentNode){var n=g(t.props.getContainer);return!!n&&(n.appendChild(t.container),!0)}return!0},t.getContainer=function(){return h?(t.container||(t.container=document.createElement("div"),t.attachToParent(!0)),t.setWrapperClassName(),t.container):null},t.setWrapperClassName=function(){var e=t.props.wrapperClassName;t.container&&e&&e!==t.container.className&&(t.container.className=e)},t.removeCurrentContainer=function(){var e,n;null===(e=t.container)||void 0===e||null===(n=e.parentNode)||void 0===n||n.removeChild(t.container)},t.switchScrollingEffect=function(){1!==y||Object.keys(b).length?y||(c(b),b={},l(!0)):(l(),b=c({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))};var n=e.visible,r=e.getContainer;return h&&g(r)===document.body&&(y=n?y+1:y),t.state={_self:p(t)},t}return t=C,a=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,o=t._self,r=e.visible,i=e.getContainer;if(n){var a=n.visible,c=n.getContainer;r!==a&&h&&g(i)===document.body&&(y=r&&!a?y+1:y-1),("function"==typeof i&&"function"==typeof c?i.toString()!==c.toString():i!==c)&&o.removeCurrentContainer()}return{prevProps:e}}}],(n=[{key:"componentDidMount",value:function(){var e=this;this.attachToParent()||(this.rafId=(0,r.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(){this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;h&&g(n)===document.body&&(y=t&&y?y-1:y),this.removeCurrentContainer(),r.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,r=e.visible,a=null,c={getOpenCount:function(){return y},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect};return(n||r||this.componentRef.current)&&(a=o.createElement(i.Z,{getContainer:this.getContainer,ref:this.componentRef},t(c))),a}}])&&f(t.prototype,n),a&&f(t,a),C}(o.Component)},74204:(e,t,n)=>{"use strict";var o;function r(e){if("undefined"==typeof document)return 0;if(e||void 0===o){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),r=n.style;r.position="absolute",r.top=0,r.left=0,r.pointerEvents="none",r.visibility="hidden",r.width="200px",r.height="150px",r.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var i=t.offsetWidth;n.style.overflow="scroll";var a=t.offsetWidth;i===a&&(a=n.clientWidth),document.body.removeChild(n),o=i-a}return o}n.d(t,{Z:()=>r})}}]);