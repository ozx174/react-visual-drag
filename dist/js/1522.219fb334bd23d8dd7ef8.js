(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[1522],{29530:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},o={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},a=[],i=[];function c(e,t,n){e.addEventListener(t,n,!1)}function s(e,t,n){e.removeEventListener(t,n,!1)}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var r in t)if(t.hasOwnProperty(r)){var o=t[r];for(var a in o)if(a in e){n.push(o[a]);break}}}"AnimationEvent"in window||(delete r.animationstart.animation,delete o.animationend.animation),"TransitionEvent"in window||(delete r.transitionstart.transition,delete o.transitionend.transition),t(r,a),t(o,i)}();const l={startEvents:a,addStartEventListener:function(e,t){0!==a.length?a.forEach((function(n){c(e,n,t)})):window.setTimeout(t,0)},removeStartEventListener:function(e,t){0!==a.length&&a.forEach((function(n){s(e,n,t)}))},endEvents:i,addEndEventListener:function(e,t){0!==i.length?i.forEach((function(n){c(e,n,t)})):window.setTimeout(t,0)},removeEndEventListener:function(e,t){0!==i.length&&i.forEach((function(n){s(e,n,t)}))}}},24309:(e,t,n)=>{e.exports=n(4511)},33929:(e,t,n)=>{e.exports=n(98613)},71649:(e,t,n)=>{var r=n(66406);function o(){return e.exports=o=r||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}e.exports=o},11845:(e,t,n)=>{var r=n(24309),o=n(48541);e.exports=function(e,t){if(null==e)return{};var n,a,i=o(e,t);if(r){var c=r(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}},48541:(e,t,n)=>{var r=n(33929);e.exports=function(e,t){if(null==e)return{};var n,o,a={},i=r(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}},80411:e=>{function t(){var e={},n={},r="";function o(n){t.each(n.split(" "),(function(t){e[t]=!!t}))}return t.each([].slice.call(arguments),(function(e){switch(t.getType(e)){case"string":case"number":o(e);break;case"array":o(t.apply(null,e));break;case"element":o(t(e.className||""));break;case"nodelist":o(t.apply(null,[].slice.call(e)));break;case"jquery":o(t.apply(null,e.get()));break;case"object":n=t.extend(n,e)}})),e=t.extend(e,n),t.each(e,(function(e,t){e&&(r+=" "+t)})),r.substr(1)}t.setTo=function(e){var n=t.getType(e);return"element"===n&&(e=[e]),"jquery"===n&&(e=e.get()),"nodelist"===n&&(e=[].slice.call(e)),function(){var n=t.apply(null,arguments);t.each(e,(function(e){e.className=n}))}},t.each=function(e,n){var r=t.getType(e);if("array"===r)for(var o=0;o<e.length;o++)n(e[o],o);if("object"===r)for(var a in e)n(e[a],a)},t.getType=function(e){var t=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return"object"===t&&e.jquery?"jquery":t.indexOf("element")>1?"element":t},t.extend=function(e,n){var r={},o=[e,n];return t.each(o,(function(e){t.each(e,(function(t,n){e.hasOwnProperty(n)&&(r[n]=t)}))})),r},e.exports&&(e.exports=t)},4511:(e,t,n)=>{n(46840),e.exports=n(34579).Object.getOwnPropertySymbols},98613:(e,t,n)=>{n(40961),e.exports=n(34579).Object.keys},40961:(e,t,n)=>{var r=n(66530),o=n(46162);n(12584)("keys",(function(){return function(e){return o(r(e))}}))},23148:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var r=n(63497),o=n.n(r),a=n(9830),i=n.n(a),c=n(30695),s=n.n(c),l=n(83507),u=n.n(l),f=n(69024),p=n.n(f),m=n(600),d=n.n(m),v=n(67294),y=n(57016),E=n(71577),h=n(16550),g=n(71649),b=n.n(g),N=n(11845),C=n.n(N),O=n(19181),w=n(80411),T=n.n(w);var S,R=function(e){u()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=o()(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function a(){return i()(this,a),r.apply(this,arguments)}return s()(a,[{key:"render",value:function(){var e=this.props,t=(e.content,e.minHgWid),n=void 0===t?20:t,r=e.children,o=e.bgOpacity,a=void 0!==o&&o,i=C()(e,["content","minHgWid","children","bgOpacity"]),c=v.createElement("div",{className:"hover-tips-content"},r);return v.createElement(O.Z,b()({content:c,className:"hover-tips-popover"},i),v.createElement("div",{id:"hover-popover",className:T()({"bg-opacity":a}),style:{minHeight:n,minWidth:n}}))}}]),a}(v.Component);const A=(0,h.EN)(S=function(e){u()(a,e);var t,n,r=(t=a,n=function(){if("undefined"==typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=d()(t);if(n){var a=d()(this).constructor;e=o()(r,arguments,a)}else e=r.apply(this,arguments);return p()(this,e)});function a(){var e;i()(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))).linkRolePage=function(){y.Z.confirm({title:"提示",content:"设置用户组不会保存当前审批流，确认要去设置用户组吗",cancelText:"取消",okText:"去设置",zIndex:2e3,onOk:function(){e.props.history.replace("/company/roles/index")}})},e}return s()(a,[{key:"render",value:function(){return v.createElement(R,{placement:"bottomRight"},v.createElement("div",{className:"role-popover-container"},v.createElement("h1",{className:"role-popover-title"},"适用场景："),v.createElement("img",{className:"role-desc-img",src:"https://apg-1258944054.cos.ap-guangzhou.myqcloud.com/apg/pc-micro-reimburse/apply-flow/role_popover.png",alt:""}),v.createElement("h1",{className:"role-popover-title"},"用户组定义："),v.createElement("p",{className:"role-popover-content"},"将很多有相同审批职能的人设置为同一用户组，并将这个用户组添加为审批人，如部门总监"),v.createElement("h1",{className:"role-popover-title"},"用户组的管理范围："),v.createElement("p",{className:"role-popover-content"},"可以给用户组里的每成员指定管理的部门，这些部门的员工提交的单据就由该成员审批，默认管理所有人。"),v.createElement("h1",{className:"role-popover-title"},"如何设置："),v.createElement("div",{className:"role-popover-steps"},v.createElement("div",{className:"role-popover-step"},v.createElement("span",{className:"icon"},"1"),v.createElement("span",{className:"desc"},"进入组织架构设置用户组"),v.createElement("span",{className:"arrow"},v.createElement("img",{src:"https://apg-1258944054.cos.ap-guangzhou.myqcloud.com/apg/pc-micro-reimburse/apply-flow/role-popover-arrow.png",alt:""}))),v.createElement("div",{className:"role-popover-step"},v.createElement("span",{className:"icon"},"2"),v.createElement("span",{className:"desc"},"设置用户组的管理范围"),v.createElement("span",{className:"arrow"},v.createElement("img",{src:"https://apg-1258944054.cos.ap-guangzhou.myqcloud.com/apg/pc-micro-reimburse/apply-flow/role-popover-arrow.png",alt:""}))),v.createElement("div",{className:"role-popover-step"},v.createElement("span",{className:"icon"},"3"),v.createElement("span",{className:"desc"},"审批流里使用用户组"))),v.createElement(E.Z,{className:"set-role-btn",onClick:this.linkRolePage},"设置用户组")))}}]),a}(v.Component))||S},75:function(e){(function(){var t,n,r,o,a,i;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof process&&null!==process&&process.hrtime?(e.exports=function(){return(t()-a)/1e6},n=process.hrtime,o=(t=function(){var e;return 1e9*(e=n())[0]+e[1]})(),i=1e9*process.uptime(),a=o-i):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)},54087:(e,t,n)=>{for(var r=n(75),o="undefined"==typeof window?n.g:window,a=["moz","webkit"],i="AnimationFrame",c=o["request"+i],s=o["cancel"+i]||o["cancelRequest"+i],l=0;!c&&l<a.length;l++)c=o[a[l]+"Request"+i],s=o[a[l]+"Cancel"+i]||o[a[l]+"CancelRequest"+i];if(!c||!s){var u=0,f=0,p=[];c=function(e){if(0===p.length){var t=r(),n=Math.max(0,16.666666666666668-(t-u));u=n+t,setTimeout((function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout((function(){throw e}),0)}}),Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},s=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return c.call(o,e)},e.exports.cancel=function(){s.apply(o,arguments)},e.exports.polyfill=function(e){e||(e=o),e.requestAnimationFrame=c,e.cancelAnimationFrame=s}},71506:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(28481),o=n(67294),a=n(72944),i=n(28991),c=n(94184),s=n.n(c),l=n(15105),u=n(94999),f=n(60444);function p(e){var t=e.prefixCls,n=e.style,r=e.visible,a=e.maskProps,c=e.motionName;return o.createElement(f.Z,{key:"mask",visible:r,motionName:c,leavedClassName:"".concat(t,"-mask-hidden")},(function(e){var r=e.className,c=e.style;return o.createElement("div",Object.assign({style:(0,i.Z)((0,i.Z)({},c),n),className:s()("".concat(t,"-mask"),r)},a))}))}function m(e,t,n){var r=t;return!r&&n&&(r="".concat(e,"-").concat(n)),r}var d=-1;function v(e,t){var n=e["page".concat(t?"Y":"X","Offset")],r="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var o=e.document;"number"!=typeof(n=o.documentElement[r])&&(n=o.body[r])}return n}var y={width:0,height:0,overflow:"hidden",outline:"none"},E=o.forwardRef((function(e,t){var n=e.closable,a=e.prefixCls,c=e.width,l=e.height,u=e.footer,p=e.title,m=e.closeIcon,d=e.style,E=e.className,h=e.visible,g=e.forceRender,b=e.bodyStyle,N=e.bodyProps,C=e.children,O=e.destroyOnClose,w=e.modalRender,T=e.motionName,S=e.ariaId,R=e.onClose,A=e.onVisibleChanged,P=e.onClick,_=e.mousePosition,k=(0,o.useRef)(),I=(0,o.useRef)(),M=(0,o.useRef)();o.useImperativeHandle(t,(function(){return{focus:function(){var e;null===(e=k.current)||void 0===e||e.focus()},getDOM:function(){return M.current},changeActive:function(e){var t=document.activeElement;e&&t===I.current?k.current.focus():e||t!==k.current||I.current.focus()}}}));var x,U,L,D=o.useState(),Z=(0,r.Z)(D,2),H=Z[0],j=Z[1],F={};function W(){var e,t,n,r,o,a=(n={left:(t=(e=M.current).getBoundingClientRect()).left,top:t.top},o=(r=e.ownerDocument).defaultView||r.parentWindow,n.left+=v(o),n.top+=v(o,!0),n);j(_?"".concat(_.x-a.left,"px ").concat(_.y-a.top,"px"):"")}void 0!==c&&(F.width=c),void 0!==l&&(F.height=l),H&&(F.transformOrigin=H),u&&(x=o.createElement("div",{className:"".concat(a,"-footer")},u)),p&&(U=o.createElement("div",{className:"".concat(a,"-header")},o.createElement("div",{className:"".concat(a,"-title"),id:S},p))),n&&(L=o.createElement("button",{type:"button",onClick:R,"aria-label":"Close",className:"".concat(a,"-close")},m||o.createElement("span",{className:"".concat(a,"-close-x")})));var K=o.createElement("div",{className:"".concat(a,"-content")},L,U,o.createElement("div",Object.assign({className:"".concat(a,"-body"),style:b},N),C),x);return o.createElement(f.Z,{visible:h,onVisibleChanged:A,onAppearPrepare:W,onEnterPrepare:W,forceRender:g,motionName:T,removeOnLeave:O,ref:M},(function(e,t){var n=e.className,r=e.style;return o.createElement("div",{key:"dialog-element",role:"document",ref:t,style:(0,i.Z)((0,i.Z)((0,i.Z)({},r),d),F),className:s()(a,E,n),onClick:P},o.createElement("div",{tabIndex:0,ref:k,style:y,"aria-hidden":"true"}),w?w(K):K,o.createElement("div",{tabIndex:0,ref:I,style:y,"aria-hidden":"true"}))}))}));E.displayName="Content";const h=E;function g(e){var t=e.prefixCls,n=void 0===t?"rc-dialog":t,a=e.zIndex,c=e.visible,f=void 0!==c&&c,v=e.keyboard,y=void 0===v||v,E=e.focusTriggerAfterClose,g=void 0===E||E,b=e.switchScrollingEffect,N=void 0===b?function(){}:b,C=e.title,O=e.wrapStyle,w=e.wrapClassName,T=e.wrapProps,S=e.onClose,R=e.afterClose,A=e.transitionName,P=e.animation,_=e.closable,k=void 0===_||_,I=e.mask,M=void 0===I||I,x=e.maskTransitionName,U=e.maskAnimation,L=e.maskClosable,D=void 0===L||L,Z=e.maskStyle,H=e.maskProps,j=(0,o.useRef)(),F=(0,o.useRef)(),W=(0,o.useRef)(),K=o.useState(f),V=(0,r.Z)(K,2),z=V[0],q=V[1],B=(0,o.useRef)();function G(e){null==S||S(e)}B.current||(B.current="rcDialogTitle".concat(d+=1));var Q=(0,o.useRef)(!1),Y=(0,o.useRef)(),X=null;return D&&(X=function(e){Q.current||(0,u.Z)(W.current.getDOM(),e.target)||G(e)}),(0,o.useEffect)((function(){f&&(q(!0),N())}),[f]),(0,o.useEffect)((function(){return function(){N(),clearTimeout(Y.current)}}),[]),o.createElement("div",{className:"".concat(n,"-root")},o.createElement(p,{prefixCls:n,visible:M&&f,motionName:m(n,x,U),style:(0,i.Z)({zIndex:a},Z),maskProps:H}),o.createElement("div",Object.assign({tabIndex:-1,onKeyDown:function(e){if(y&&e.keyCode===l.Z.ESC)return e.stopPropagation(),void G(e);f&&e.keyCode===l.Z.TAB&&W.current.changeActive(!e.shiftKey)},className:s()("".concat(n,"-wrap"),w),ref:F,onClick:X,role:"dialog","aria-labelledby":C?B.current:null,style:(0,i.Z)((0,i.Z)({zIndex:a},O),{},{display:z?null:"none"})},T),o.createElement(h,Object.assign({},e,{onClick:function(){clearTimeout(Y.current),Q.current=!0,Y.current=setTimeout((function(){Q.current=!1}))},ref:W,closable:k,ariaId:B.current,prefixCls:n,visible:f,onClose:G,onVisibleChanged:function(e){if(e){var t;(0,u.Z)(F.current,document.activeElement)||(j.current=document.activeElement,null===(t=W.current)||void 0===t||t.focus())}else{if(q(!1),N(),M&&j.current&&g){try{j.current.focus({preventScroll:!0})}catch(e){}j.current=null}null==R||R()}},motionName:m(n,A,P)}))))}var b=function(e){var t=e.visible,n=e.getContainer,i=e.forceRender,c=e.destroyOnClose,s=void 0!==c&&c,l=e.afterClose,u=o.useState(t),f=(0,r.Z)(u,2),p=f[0],m=f[1];return o.useEffect((function(){t&&m(!0)}),[t]),!1===n?o.createElement(g,Object.assign({},e,{getOpenCount:function(){return 2}})):i||!s||p?o.createElement(a.Z,{visible:t,forceRender:i,getContainer:n},(function(t){return o.createElement(g,Object.assign({},e,{destroyOnClose:s,afterClose:function(){null==l||l(),m(!1)}},t))})):null};b.displayName="Dialog";const N=b},51472:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(90484),o=n(28991),a=n(81253),i=n(67294),c=n(63533),s=n(43159);const l=function(e){var t=e.overlay,n=e.prefixCls,r=e.id,o=e.overlayInnerStyle;return i.createElement("div",{className:"".concat(n,"-inner"),id:r,role:"tooltip",style:o},"function"==typeof t?t():t)},u=(0,i.forwardRef)((function(e,t){var n=e.overlayClassName,u=e.trigger,f=void 0===u?["hover"]:u,p=e.mouseEnterDelay,m=void 0===p?0:p,d=e.mouseLeaveDelay,v=void 0===d?.1:d,y=e.overlayStyle,E=e.prefixCls,h=void 0===E?"rc-tooltip":E,g=e.children,b=e.onVisibleChange,N=e.afterVisibleChange,C=e.transitionName,O=e.animation,w=e.placement,T=void 0===w?"right":w,S=e.align,R=void 0===S?{}:S,A=e.destroyTooltipOnHide,P=void 0!==A&&A,_=e.defaultVisible,k=e.getTooltipContainer,I=e.overlayInnerStyle,M=(0,a.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),x=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return x.current}));var U=(0,o.Z)({},M);"visible"in e&&(U.popupVisible=e.visible);var L=!1,D=!1;if("boolean"==typeof P)L=P;else if(P&&"object"===(0,r.Z)(P)){var Z=P.keepParent;L=!0===Z,D=!1===Z}return i.createElement(c.Z,Object.assign({popupClassName:n,prefixCls:h,popup:function(){var t=e.arrowContent,n=void 0===t?null:t,r=e.overlay,o=e.id;return[i.createElement("div",{className:"".concat(h,"-arrow"),key:"arrow"},n),i.createElement(l,{key:"content",prefixCls:h,id:o,overlay:r,overlayInnerStyle:I})]},action:f,builtinPlacements:s.C,popupPlacement:T,ref:x,popupAlign:R,getPopupContainer:k,onPopupVisibleChange:b,afterPopupVisibleChange:N,popupTransitionName:C,popupAnimation:O,defaultPopupVisible:_,destroyPopupOnHide:L,autoDestroy:D,mouseLeaveDelay:v,popupStyle:y,mouseEnterDelay:m},U),g)}))},43159:(e,t,n)=>{"use strict";n.d(t,{C:()=>a});var r={adjustX:1,adjustY:1},o=[0,0],a={left:{points:["cr","cl"],overflow:r,offset:[-4,0],targetOffset:o},right:{points:["cl","cr"],overflow:r,offset:[4,0],targetOffset:o},top:{points:["bc","tc"],overflow:r,offset:[0,-4],targetOffset:o},bottom:{points:["tc","bc"],overflow:r,offset:[0,4],targetOffset:o},topLeft:{points:["bl","tl"],overflow:r,offset:[0,-4],targetOffset:o},leftTop:{points:["tr","tl"],overflow:r,offset:[-4,0],targetOffset:o},topRight:{points:["br","tr"],overflow:r,offset:[0,-4],targetOffset:o},rightTop:{points:["tl","tr"],overflow:r,offset:[4,0],targetOffset:o},bottomRight:{points:["tr","br"],overflow:r,offset:[0,4],targetOffset:o},rightBottom:{points:["bl","br"],overflow:r,offset:[4,0],targetOffset:o},bottomLeft:{points:["tl","bl"],overflow:r,offset:[0,4],targetOffset:o},leftBottom:{points:["br","bl"],overflow:r,offset:[-4,0],targetOffset:o}}},15105:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=r.F1&&t<=r.F12)return!1;switch(t){case r.ALT:case r.CAPS_LOCK:case r.CONTEXT_MENU:case r.CTRL:case r.DOWN:case r.END:case r.ESC:case r.HOME:case r.INSERT:case r.LEFT:case r.MAC_FF_META:case r.META:case r.NUMLOCK:case r.NUM_CENTER:case r.PAGE_DOWN:case r.PAGE_UP:case r.PAUSE:case r.PRINT_SCREEN:case r.RIGHT:case r.SHIFT:case r.UP:case r.WIN_KEY:case r.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=r.ZERO&&e<=r.NINE)return!0;if(e>=r.NUM_ZERO&&e<=r.NUM_MULTIPLY)return!0;if(e>=r.A&&e<=r.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case r.SPACE:case r.QUESTION_MARK:case r.NUM_PLUS:case r.NUM_MINUS:case r.NUM_PERIOD:case r.NUM_DIVISION:case r.SEMICOLON:case r.DASH:case r.EQUALS:case r.COMMA:case r.PERIOD:case r.SLASH:case r.APOSTROPHE:case r.SINGLE_QUOTE:case r.OPEN_SQUARE_BRACKET:case r.BACKSLASH:case r.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const o=r},72944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var r=n(67294),o=n(75164),a=n(59015),i=n(74204);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.element,r=void 0===n?document.body:n,o={},a=Object.keys(e);return a.forEach((function(e){o[e]=r.style[e]})),a.forEach((function(t){r.style[t]=e[t]})),o};var s={};const l=function(e){if(document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth||e){var t="ant-scrolling-effect",n=new RegExp("".concat(t),"g"),r=document.body.className;if(e){if(!n.test(r))return;return c(s),s={},void(document.body.className=r.replace(n,"").trim())}var o=(0,i.Z)();if(o&&(s=c({position:"relative",width:"calc(100% - ".concat(o,"px)")}),!n.test(r))){var a="".concat(r," ").concat(t);document.body.className=a.trim()}}};var u=n(98924);function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var E=0,h=(0,u.Z)(),g={},b=function(e){if(!h)return null;if(e){if("string"==typeof e)return document.querySelectorAll(e)[0];if("function"==typeof e)return e();if("object"===y(e)&&e instanceof window.HTMLElement)return e}return document.body};const N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(N,e);var t,n,i,s,u,y=(s=N,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(s);if(u){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return m(this,e)});function N(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,N),(t=y.call(this,e)).componentRef=r.createRef(),t.attachToParent=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e||t.container&&!t.container.parentNode){var n=b(t.props.getContainer);return!!n&&(n.appendChild(t.container),!0)}return!0},t.getContainer=function(){return h?(t.container||(t.container=document.createElement("div"),t.attachToParent(!0)),t.setWrapperClassName(),t.container):null},t.setWrapperClassName=function(){var e=t.props.wrapperClassName;t.container&&e&&e!==t.container.className&&(t.container.className=e)},t.removeCurrentContainer=function(){var e,n;null===(e=t.container)||void 0===e||null===(n=e.parentNode)||void 0===n||n.removeChild(t.container)},t.switchScrollingEffect=function(){1!==E||Object.keys(g).length?E||(c(g),g={},l(!0)):(l(),g=c({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"}))};var n=e.visible,o=e.getContainer;return h&&b(o)===document.body&&(E=n?E+1:E),t.state={_self:d(t)},t}return t=N,i=[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevProps,r=t._self,o=e.visible,a=e.getContainer;if(n){var i=n.visible,c=n.getContainer;o!==i&&h&&b(a)===document.body&&(E=o&&!i?E+1:E-1),("function"==typeof a&&"function"==typeof c?a.toString()!==c.toString():a!==c)&&r.removeCurrentContainer()}return{prevProps:e}}}],(n=[{key:"componentDidMount",value:function(){var e=this;this.attachToParent()||(this.rafId=(0,o.Z)((function(){e.forceUpdate()})))}},{key:"componentDidUpdate",value:function(){this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.visible,n=e.getContainer;h&&b(n)===document.body&&(E=t&&E?E-1:E),this.removeCurrentContainer(),o.Z.cancel(this.rafId)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.forceRender,o=e.visible,i=null,c={getOpenCount:function(){return E},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect};return(n||o||this.componentRef.current)&&(i=r.createElement(a.Z,{getContainer:this.getContainer,ref:this.componentRef},t(c))),i}}])&&f(t.prototype,n),i&&f(t,i),N}(r.Component)},74204:(e,t,n)=>{"use strict";var r;function o(e){if("undefined"==typeof document)return 0;if(e||void 0===r){var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top=0,o.left=0,o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(t),document.body.appendChild(n);var a=t.offsetWidth;n.style.overflow="scroll";var i=t.offsetWidth;a===i&&(i=n.clientWidth),document.body.removeChild(n),r=a-i}return r}n.d(t,{Z:()=>o})}}]);