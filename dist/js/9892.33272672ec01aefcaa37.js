(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[9892,6526,2688],{34607:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"}},3840:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(n=r(54434))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},54434:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(67294)),i=n(r(34607)),l=n(r(92074)),c=function(e,t){return a.createElement(l.default,Object.assign({},e,{ref:t,icon:i.default}))};c.displayName="QuestionCircleOutlined";var s=a.forwardRef(c);t.default=s},34046:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(63497),o=r.n(n),a=r(9830),i=r.n(a),l=r(30695),c=r.n(l),s=r(83507),u=r.n(s),f=r(69024),d=r.n(f),p=r(600),m=r.n(p),v=r(67294);var h=function(e){u()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!o())return!1;if(o().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(o()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=m()(t);if(r){var a=m()(this).constructor;e=o()(n,arguments,a)}else e=n.apply(this,arguments);return d()(this,e)});function a(){return i()(this,a),n.apply(this,arguments)}return c()(a,[{key:"render",value:function(){var e=this.props,t=e.visible,r=e.children,n=t?r:null;return v.createElement(v.Fragment,null,n)}}]),a}(v.PureComponent)},18181:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(67294),o=r(45697),a=r.n(o);function i(e){return n.createElement("div",{className:"form-item-label"},n.createElement("span",{className:"form-item-label-title"},e.title),n.createElement("span",{className:"form-item-label-desc"},e.desc))}i.propTypes={title:a().string,desc:a().string},i.defaultProps={title:"",desc:""};const l=i},89241:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(67294),o=r(45697),a=r.n(o),i=r(32478),l=r(14617),c=r(9676),s=r(34046),u=r(18181);function f(e){return n.createElement(i.Z,{layout:"vertical",labelAlign:"right",name:"customInput",onValuesChange:e.updateComponentForm,ref:e.formRef,className:"custom-tmpl-formlayer",onFinish:function(){return e.onFormFinish("success")},onFinishFailed:function(){return e.onFormFinish("error")}},n.createElement(s.Z,{visible:!e.hideTitle},n.createElement(i.Z.Item,{label:n.createElement(u.default,{title:"标题",desc:"最多6个字"}),style:{marginTop:5},name:"label",rules:[{required:!0,whitespace:!0,message:"请输入标题"}]},n.createElement(l.Z,{placeholder:"请输入标题",maxLength:6}))),e.children,n.createElement(i.Z.Item,{label:"其他"},n.createElement(i.Z.Item,{name:"required",valuePropName:"checked",style:{marginBottom:0,transform:"translateY(-5px)"}},n.createElement(c.Z,{disabled:e.currentComponent.required_fixed},"必填")),n.createElement(i.Z.Item,{name:"print",valuePropName:"checked",style:{transform:"translateY(-9px)"}},n.createElement(c.Z,{disabled:e.currentComponent.print_fixed},"参与打印"))))}f.propTypes={updateComponentForm:a().func,hideTitle:a().bool},f.defaultProps={updateComponentForm:function(){},hideTitle:!1};const d=f},83905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(67294),o=r(32478),a=r(14617),i=r(47933),l=r(18181),c=r(89241);const s=function(e){return console.log(e),n.createElement(c.default,e,n.createElement(n.Fragment,null,n.createElement(o.Z.Item,{label:n.createElement(l.default,{title:"提示性文字",desc:"最多20字"}),name:"tip",rules:[{required:!0,whitespace:!0,message:"请输入提示性文字"}]},n.createElement(a.Z,{placeholder:"请输入提示性文字",maxLength:20})),n.createElement(o.Z.Item,{name:"default_type",label:n.createElement(l.default,{title:"默认值"})},n.createElement(i.ZP.Group,null,n.createElement(i.ZP,{value:"commiter"},"提单人"))),n.createElement(o.Z.Item,{name:"source",label:n.createElement(l.default,{title:"取值范围"})},n.createElement(i.ZP.Group,null,n.createElement(i.ZP,{value:"commiter"},"提单人"),n.createElement(i.ZP,{value:"proxy_range"},"代理范围")))))}},50132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(22122),o=r(81253),a=r(96156),i=r(6610),l=r(5991),c=r(65255),s=r(46070),u=r(77608),f=r(67294),d=r(94184),p=r.n(d);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){(0,c.Z)(m,e);var t,r,d=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var o=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;(0,i.Z)(this,m),(t=d.call(this,e)).handleChange=function(e){var r=t.props,n=r.disabled,o=r.onChange;n||("checked"in t.props||t.setState({checked:e.target.checked}),o&&o({target:v(v({},t.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},t.saveInput=function(e){t.input=e};var r="checked"in e?e.checked:e.defaultChecked;return t.state={checked:r},t}return(0,l.Z)(m,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,r=t.prefixCls,i=t.className,l=t.style,c=t.name,s=t.id,u=t.type,d=t.disabled,m=t.readOnly,v=t.tabIndex,h=t.onClick,y=t.onFocus,b=t.onBlur,g=t.autoFocus,w=t.value,C=t.required,E=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),O=Object.keys(E).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=E[t]),e}),{}),k=this.state.checked,Z=p()(r,i,(e={},(0,a.Z)(e,"".concat(r,"-checked"),k),(0,a.Z)(e,"".concat(r,"-disabled"),d),e));return f.createElement("span",{className:Z,style:l},f.createElement("input",(0,n.Z)({name:c,id:s,type:u,required:C,readOnly:m,disabled:d,tabIndex:v,className:"".concat(r,"-input"),checked:!!k,onClick:h,onFocus:y,onBlur:b,onChange:this.handleChange,autoFocus:g,ref:this.saveInput,value:w},O)),f.createElement("span",{className:"".concat(r,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?v(v({},t),{},{checked:e.checked}):null}}]),m}(f.Component);h.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};const y=h},51472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(90484),o=r(28991),a=r(81253),i=r(67294),l=r(63533),c=r(43159);const s=function(e){var t=e.overlay,r=e.prefixCls,n=e.id,o=e.overlayInnerStyle;return i.createElement("div",{className:"".concat(r,"-inner"),id:n,role:"tooltip",style:o},"function"==typeof t?t():t)},u=(0,i.forwardRef)((function(e,t){var r=e.overlayClassName,u=e.trigger,f=void 0===u?["hover"]:u,d=e.mouseEnterDelay,p=void 0===d?0:d,m=e.mouseLeaveDelay,v=void 0===m?.1:m,h=e.overlayStyle,y=e.prefixCls,b=void 0===y?"rc-tooltip":y,g=e.children,w=e.onVisibleChange,C=e.afterVisibleChange,E=e.transitionName,O=e.animation,k=e.placement,Z=void 0===k?"right":k,P=e.align,x=void 0===P?{}:P,j=e.destroyTooltipOnHide,I=void 0!==j&&j,S=e.defaultVisible,D=e.getTooltipContainer,N=e.overlayInnerStyle,F=(0,a.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),V=(0,i.useRef)(null);(0,i.useImperativeHandle)(t,(function(){return V.current}));var T=(0,o.Z)({},F);"visible"in e&&(T.popupVisible=e.visible);var R=!1,M=!1;if("boolean"==typeof I)R=I;else if(I&&"object"===(0,n.Z)(I)){var H=I.keepParent;R=!0===H,M=!1===H}return i.createElement(l.Z,Object.assign({popupClassName:r,prefixCls:b,popup:function(){var t=e.arrowContent,r=void 0===t?null:t,n=e.overlay,o=e.id;return[i.createElement("div",{className:"".concat(b,"-arrow"),key:"arrow"},r),i.createElement(s,{key:"content",prefixCls:b,id:o,overlay:n,overlayInnerStyle:N})]},action:f,builtinPlacements:c.C,popupPlacement:Z,ref:V,popupAlign:x,getPopupContainer:D,onPopupVisibleChange:w,afterPopupVisibleChange:C,popupTransitionName:E,popupAnimation:O,defaultPopupVisible:S,destroyPopupOnHide:R,autoDestroy:M,mouseLeaveDelay:v,popupStyle:h,mouseEnterDelay:p},T),g)}))},43159:(e,t,r)=>{"use strict";r.d(t,{C:()=>a});var n={adjustX:1,adjustY:1},o=[0,0],a={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:o},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:o},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:o},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:o},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:o},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:o},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:o},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:o},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:o},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:o},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:o},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:o}}},56982:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(67294);function o(e,t,r){var o=n.useRef({});return"value"in o.current&&!r(o.current.condition,t)||(o.current.value=e(),o.current.condition=t),o.current.value}},21770:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){var r,a,i=t||{},l=i.defaultValue,c=i.value,s=i.onChange,u=i.postState,f=(r=n.useState((function(){return void 0!==c?c:void 0!==l?"function"==typeof l?l():l:"function"==typeof e?e():e})),a=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==l.return||l.return()}finally{if(o)throw a}}return r}}(r,a)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(r,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=f[0],p=f[1],m=void 0!==c?c:d;u&&(m=u(m));var v=n.useRef(!0);return n.useEffect((function(){v.current?v.current=!1:void 0===c&&p(c)}),[c]),[m,function(e){p(e),m!==e&&s&&s(e,m)}]}},64239:(e,t,r)=>{"use strict";function n(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function i(e,t,r,n,o,a,i,l){return a<e&&i>t||a>e&&i<t?0:a<=e&&l<=r||i>=t&&l>=r?a-e-n:i>t&&l<r||a<e&&l>r?i-t+o:0}function l(e,t){var r=window,o=t.scrollMode,l=t.block,c=t.inline,s=t.boundary,u=t.skipOverflowHiddenElements,f="function"==typeof s?s:function(e){return e!==s};if(!n(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,p=[],m=e;n(m)&&f(m);){if((m=m.parentNode)===d){p.push(m);break}m===document.body&&a(m)&&!a(document.documentElement)||a(m,u)&&p.push(m)}for(var v=r.visualViewport?r.visualViewport.width:innerWidth,h=r.visualViewport?r.visualViewport.height:innerHeight,y=window.scrollX||pageXOffset,b=window.scrollY||pageYOffset,g=e.getBoundingClientRect(),w=g.height,C=g.width,E=g.top,O=g.right,k=g.bottom,Z=g.left,P="start"===l||"nearest"===l?E:"end"===l?k:E+w/2,x="center"===c?Z+C/2:"end"===c?O:Z,j=[],I=0;I<p.length;I++){var S=p[I],D=S.getBoundingClientRect(),N=D.height,F=D.width,V=D.top,T=D.right,R=D.bottom,M=D.left;if("if-needed"===o&&E>=0&&Z>=0&&k<=h&&O<=v&&E>=V&&k<=R&&Z>=M&&O<=T)return j;var H=getComputedStyle(S),_=parseInt(H.borderLeftWidth,10),W=parseInt(H.borderTopWidth,10),B=parseInt(H.borderRightWidth,10),L=parseInt(H.borderBottomWidth,10),A=0,q=0,Y="offsetWidth"in S?S.offsetWidth-S.clientWidth-_-B:0,z="offsetHeight"in S?S.offsetHeight-S.clientHeight-W-L:0;if(d===S)A="start"===l?P:"end"===l?P-h:"nearest"===l?i(b,b+h,h,W,L,b+P,b+P+w,w):P-h/2,q="start"===c?x:"center"===c?x-v/2:"end"===c?x-v:i(y,y+v,v,_,B,y+x,y+x+C,C),A=Math.max(0,A+b),q=Math.max(0,q+y);else{A="start"===l?P-V-W:"end"===l?P-R+L+z:"nearest"===l?i(V,R,N,W,L+z,P,P+w,w):P-(V+N/2)+z/2,q="start"===c?x-M-_:"center"===c?x-(M+F/2)+Y/2:"end"===c?x-T+B+Y:i(M,T,F,_,B+Y,x,x+C,C);var X=S.scrollLeft,G=S.scrollTop;P+=G-(A=Math.max(0,Math.min(G+A,S.scrollHeight-N+z))),x+=X-(q=Math.max(0,Math.min(X+q,S.scrollWidth-F+Y)))}j.push({el:S,top:A,left:q})}return j}function c(e){return e===Object(e)&&0!==Object.keys(e).length}r.d(t,{Z:()=>s});const s=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(c(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:l(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(l(e,n),n.behavior)}}}}]);