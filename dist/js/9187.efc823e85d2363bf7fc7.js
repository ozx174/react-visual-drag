(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[9187,6526],{34607:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"}},3840:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(n=r(54434))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},54434:(e,t,r)=>{"use strict";var n=r(95318),o=r(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(67294)),l=n(r(34607)),i=n(r(92074)),c=function(e,t){return a.createElement(i.default,Object.assign({},e,{ref:t,icon:l.default}))};c.displayName="QuestionCircleOutlined";var s=a.forwardRef(c);t.default=s},14284:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var n=(0,r(67294).createContext)()},18181:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(67294),o=r(45697),a=r.n(o);function l(e){return n.createElement("div",{className:"form-item-label"},n.createElement("span",{className:"form-item-label-title"},e.title),n.createElement("span",{className:"form-item-label-desc"},e.desc))}l.propTypes={title:a().string,desc:a().string},l.defaultProps={title:"",desc:""};const i=l},8576:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d}),r(23010);var n=r(67294),o=r(34041),a=r(32478),l=r(14617),i=r(47933),c=r(9676),s=r(18181),u=r(14284),f=o.Z.Option;const d=function(e){return(0,n.useContext)(u.I),n.createElement(a.Z,{layout:"vertical",labelAlign:"right",name:"customInput",onValuesChange:e.updateComponentForm,ref:e.formRef,onFinish:function(){return e.onFormFinish("success")},onFinishFailed:function(){return e.onFormFinish("error")}},n.createElement(a.Z.Item,{label:n.createElement(s.default,{title:"标题1",desc:"最多20字"}),name:"start_time_label",rules:[{required:!0,whitespace:!0,message:"请输入标题1"}]},n.createElement(l.Z,{placeholder:"请输入标题1",maxLength:20})),n.createElement(a.Z.Item,{label:n.createElement(s.default,{title:"标题2",desc:"最多20字"}),name:"end_time_label",rules:[{required:!0,whitespace:!0,message:"请输入标题2"}]},n.createElement(l.Z,{placeholder:"请输入标题2",maxLength:20})),n.createElement(a.Z.Item,{label:n.createElement(s.default,{title:"提示性文字",desc:"最多20字"}),name:"tip",rules:[{required:!0,whitespace:!0,message:"请输入提示性文字"}]},n.createElement(l.Z,{placeholder:"请输入提示性文字",maxLength:20})),n.createElement(a.Z.Item,{name:"date_type",label:n.createElement(s.default,{title:"日期类型"})},n.createElement(o.Z,null,n.createElement(f,{value:"YY-MM-DD-hh-mm"},"年-月-日-时-分"),n.createElement(f,{value:"YY-MM-DD"},"年-月-日"))),n.createElement(a.Z.Item,{name:"default_type",label:n.createElement(s.default,{title:"默认值"})},n.createElement(i.ZP.Group,null,n.createElement(i.ZP,{value:"empty"},"无"),n.createElement("br",null),n.createElement(i.ZP,{value:"today"},"默认填充当前日期"),n.createElement("br",null),n.createElement(i.ZP,{value:"relation_form"},"默认共享关联单据时长字段数据"))),n.createElement(a.Z.Item,{label:"其他"},n.createElement(a.Z.Item,{name:"required",valuePropName:"checked",style:{marginBottom:0,transform:"translateY(-7px)"}},n.createElement(c.Z,null,"必填")),n.createElement(a.Z.Item,{name:"print",valuePropName:"checked",style:{transform:"translateY(-7px)"}},n.createElement(c.Z,null,"参与打印"))))}},50132:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(22122),o=r(81253),a=r(96156),l=r(6610),i=r(5991),c=r(65255),s=r(46070),u=r(77608),f=r(67294),d=r(94184),p=r.n(d);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=function(e){(0,c.Z)(m,e);var t,r,d=(t=m,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,u.Z)(t);if(r){var o=(0,u.Z)(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return(0,s.Z)(this,e)});function m(e){var t;(0,l.Z)(this,m),(t=d.call(this,e)).handleChange=function(e){var r=t.props,n=r.disabled,o=r.onChange;n||("checked"in t.props||t.setState({checked:e.target.checked}),o&&o({target:h(h({},t.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},t.saveInput=function(e){t.input=e};var r="checked"in e?e.checked:e.defaultChecked;return t.state={checked:r},t}return(0,i.Z)(m,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,r=t.prefixCls,l=t.className,i=t.style,c=t.name,s=t.id,u=t.type,d=t.disabled,m=t.readOnly,h=t.tabIndex,v=t.onClick,b=t.onFocus,g=t.onBlur,y=t.autoFocus,w=t.value,E=t.required,C=(0,o.Z)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","autoFocus","value","required"]),O=Object.keys(C).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=C[t]),e}),{}),k=this.state.checked,Z=p()(r,l,(e={},(0,a.Z)(e,"".concat(r,"-checked"),k),(0,a.Z)(e,"".concat(r,"-disabled"),d),e));return f.createElement("span",{className:Z,style:i},f.createElement("input",(0,n.Z)({name:c,id:s,type:u,required:E,readOnly:m,disabled:d,tabIndex:h,className:"".concat(r,"-input"),checked:!!k,onClick:v,onFocus:b,onBlur:g,onChange:this.handleChange,autoFocus:y,ref:this.saveInput,value:w},O)),f.createElement("span",{className:"".concat(r,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?h(h({},t),{},{checked:e.checked}):null}}]),m}(f.Component);v.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}};const b=v},51472:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(90484),o=r(28991),a=r(81253),l=r(67294),i=r(63533),c=r(43159);const s=function(e){var t=e.overlay,r=e.prefixCls,n=e.id,o=e.overlayInnerStyle;return l.createElement("div",{className:"".concat(r,"-inner"),id:n,role:"tooltip",style:o},"function"==typeof t?t():t)},u=(0,l.forwardRef)((function(e,t){var r=e.overlayClassName,u=e.trigger,f=void 0===u?["hover"]:u,d=e.mouseEnterDelay,p=void 0===d?0:d,m=e.mouseLeaveDelay,h=void 0===m?.1:m,v=e.overlayStyle,b=e.prefixCls,g=void 0===b?"rc-tooltip":b,y=e.children,w=e.onVisibleChange,E=e.afterVisibleChange,C=e.transitionName,O=e.animation,k=e.placement,Z=void 0===k?"right":k,P=e.align,x=void 0===P?{}:P,I=e.destroyTooltipOnHide,D=void 0!==I&&I,j=e.defaultVisible,N=e.getTooltipContainer,V=e.overlayInnerStyle,M=(0,a.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),_=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,(function(){return _.current}));var F=(0,o.Z)({},M);"visible"in e&&(F.popupVisible=e.visible);var S=!1,H=!1;if("boolean"==typeof D)S=D;else if(D&&"object"===(0,n.Z)(D)){var R=D.keepParent;S=!0===R,H=!1===R}return l.createElement(i.Z,Object.assign({popupClassName:r,prefixCls:g,popup:function(){var t=e.arrowContent,r=void 0===t?null:t,n=e.overlay,o=e.id;return[l.createElement("div",{className:"".concat(g,"-arrow"),key:"arrow"},r),l.createElement(s,{key:"content",prefixCls:g,id:o,overlay:n,overlayInnerStyle:V})]},action:f,builtinPlacements:c.C,popupPlacement:Z,ref:_,popupAlign:x,getPopupContainer:N,onPopupVisibleChange:w,afterPopupVisibleChange:E,popupTransitionName:C,popupAnimation:O,defaultPopupVisible:j,destroyPopupOnHide:S,autoDestroy:H,mouseLeaveDelay:h,popupStyle:v,mouseEnterDelay:p},F),y)}))},43159:(e,t,r)=>{"use strict";r.d(t,{C:()=>a});var n={adjustX:1,adjustY:1},o=[0,0],a={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:o},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:o},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:o},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:o},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:o},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:o},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:o},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:o},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:o},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:o},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:o},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:o}}},64239:(e,t,r)=>{"use strict";function n(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function o(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function a(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var r=getComputedStyle(e,null);return o(r.overflowY,t)||o(r.overflowX,t)||function(e){var t=function(e){if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch(e){return null}}(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)}(e)}return!1}function l(e,t,r,n,o,a,l,i){return a<e&&l>t||a>e&&l<t?0:a<=e&&i<=r||l>=t&&i>=r?a-e-n:l>t&&i<r||a<e&&i>r?l-t+o:0}function i(e,t){var r=window,o=t.scrollMode,i=t.block,c=t.inline,s=t.boundary,u=t.skipOverflowHiddenElements,f="function"==typeof s?s:function(e){return e!==s};if(!n(e))throw new TypeError("Invalid target");for(var d=document.scrollingElement||document.documentElement,p=[],m=e;n(m)&&f(m);){if((m=m.parentNode)===d){p.push(m);break}m===document.body&&a(m)&&!a(document.documentElement)||a(m,u)&&p.push(m)}for(var h=r.visualViewport?r.visualViewport.width:innerWidth,v=r.visualViewport?r.visualViewport.height:innerHeight,b=window.scrollX||pageXOffset,g=window.scrollY||pageYOffset,y=e.getBoundingClientRect(),w=y.height,E=y.width,C=y.top,O=y.right,k=y.bottom,Z=y.left,P="start"===i||"nearest"===i?C:"end"===i?k:C+w/2,x="center"===c?Z+E/2:"end"===c?O:Z,I=[],D=0;D<p.length;D++){var j=p[D],N=j.getBoundingClientRect(),V=N.height,M=N.width,_=N.top,F=N.right,S=N.bottom,H=N.left;if("if-needed"===o&&C>=0&&Z>=0&&k<=v&&O<=h&&C>=_&&k<=S&&Z>=H&&O<=F)return I;var R=getComputedStyle(j),T=parseInt(R.borderLeftWidth,10),W=parseInt(R.borderTopWidth,10),B=parseInt(R.borderRightWidth,10),L=parseInt(R.borderBottomWidth,10),Y=0,q=0,z="offsetWidth"in j?j.offsetWidth-j.clientWidth-T-B:0,X="offsetHeight"in j?j.offsetHeight-j.clientHeight-W-L:0;if(d===j)Y="start"===i?P:"end"===i?P-v:"nearest"===i?l(g,g+v,v,W,L,g+P,g+P+w,w):P-v/2,q="start"===c?x:"center"===c?x-h/2:"end"===c?x-h:l(b,b+h,h,T,B,b+x,b+x+E,E),Y=Math.max(0,Y+g),q=Math.max(0,q+b);else{Y="start"===i?P-_-W:"end"===i?P-S+L+X:"nearest"===i?l(_,S,V,W,L+X,P,P+w,w):P-(_+V/2)+X/2,q="start"===c?x-H-T:"center"===c?x-(H+M/2)+z/2:"end"===c?x-F+B+z:l(H,F,M,T,B+z,x,x+E,E);var A=j.scrollLeft,G=j.scrollTop;P+=G-(Y=Math.max(0,Math.min(G+Y,j.scrollHeight-V+X))),x+=A-(q=Math.max(0,Math.min(A+q,j.scrollWidth-M+z)))}I.push({el:j,top:Y,left:q})}return I}function c(e){return e===Object(e)&&0!==Object.keys(e).length}r.d(t,{Z:()=>s});const s=function(e,t){var r=!e.ownerDocument.documentElement.contains(e);if(c(t)&&"function"==typeof t.behavior)return t.behavior(r?[]:i(e,t));if(!r){var n=function(e){return!1===e?{block:"end",inline:"nearest"}:c(e)?e:{block:"start",inline:"nearest"}}(t);return function(e,t){void 0===t&&(t="auto");var r="scrollBehavior"in document.body.style;e.forEach((function(e){var n=e.el,o=e.top,a=e.left;n.scroll&&r?n.scroll({top:o,left:a,behavior:t}):(n.scrollTop=o,n.scrollLeft=a)}))}(i(e,n),n.behavior)}}}}]);