(self.webpackChunkreact_webpack=self.webpackChunkreact_webpack||[]).push([[471],{85907:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>C});var n,r=o(63497),a=o.n(r),l=o(9830),i=o.n(l),s=o(30695),c=o.n(s),f=o(83507),p=o.n(f),m=o(69024),u=o.n(m),v=o(600),g=o.n(v),b=o(67294),d=o(57016),y=o(71577),h=o(31097);var C=(0,o(16550).EN)(n=function(e){p()(r,e);var t,o,n=(t=r,o=function(){if("undefined"==typeof Reflect||!a())return!1;if(a().sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(a()(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=g()(t);if(o){var r=g()(this).constructor;e=a()(n,arguments,r)}else e=n.apply(this,arguments);return u()(this,e)});function r(){var e;i()(this,r);for(var t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return(e=n.call.apply(n,[this].concat(o))).onDelete=function(t,o){t&&t.stopPropagation(),e.props.onDelete(o)},e.linkRolePage=function(t){t.preventDefault(),t.stopPropagation(),d.Z.confirm({title:"提示",content:"设置用户组不会保存当前审批流，确认要去设置用户组吗",cancelText:"取消",okText:"去设置",zIndex:2e3,onOk:function(){e.props.history.replace("/company/roles/index")}})},e.generateMemberEl=function(t,o){if(t.is_empty){var n=b.createElement("div",null,"该用户组下没有成员,",b.createElement(y.Z,{style:{padding:0},type:"link",onClick:e.linkRolePage},"前往设置"));return b.createElement(h.Z,{key:o,placement:"top",title:n},b.createElement("div",{className:"member-box quit"},b.createElement("span",{className:"img-box"},t.uname.substr(0,1)),b.createElement("span",{className:"member-name"},"".concat(t.uname).concat(t.leave?"(已离职)":"").concat(t.is_del?"(已删除)":"")),b.createElement("span",{className:"member-tip-icon"},b.createElement("img",{src:"https://apg-1258944054.cos.ap-guangzhou.myqcloud.com/apg/pc-micro-reimburse/common/%21.png",alt:""})),b.createElement("i",{className:"member-delete",onClick:function(t){e.onDelete(t,o)}})))}return b.createElement("div",{key:o,className:"member-box ".concat(t.leave||t.is_del?"quit":"")},b.createElement("span",{className:"img-box"},t.uname.substr(0,1)),b.createElement("span",{className:"member-name"},"".concat(t.uname).concat(t.leave?"(已离职)":"").concat(t.is_del?"(已删除)":"")),b.createElement("i",{className:"member-delete",onClick:function(t){e.onDelete(t,o)}}))},e}return c()(r,[{key:"render",value:function(){var e=this,t=this.props.members;return b.createElement("div",{className:"selected-member-wrapper",onClick:function(){e.props.showSelector&&e.props.showSelector()}},t.map((function(t,o){return e.generateMemberEl(t,o)})))}}]),r}(b.Component))||n},51472:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(90484),r=o(28991),a=o(81253),l=o(67294),i=o(63533),s=o(43159);const c=function(e){var t=e.overlay,o=e.prefixCls,n=e.id,r=e.overlayInnerStyle;return l.createElement("div",{className:"".concat(o,"-inner"),id:n,role:"tooltip",style:r},"function"==typeof t?t():t)},f=(0,l.forwardRef)((function(e,t){var o=e.overlayClassName,f=e.trigger,p=void 0===f?["hover"]:f,m=e.mouseEnterDelay,u=void 0===m?0:m,v=e.mouseLeaveDelay,g=void 0===v?.1:v,b=e.overlayStyle,d=e.prefixCls,y=void 0===d?"rc-tooltip":d,h=e.children,C=e.onVisibleChange,w=e.afterVisibleChange,E=e.transitionName,k=e.animation,N=e.placement,O=void 0===N?"right":N,x=e.align,D=void 0===x?{}:x,P=e.destroyTooltipOnHide,S=void 0!==P&&P,V=e.defaultVisible,T=e.getTooltipContainer,Z=e.overlayInnerStyle,R=(0,a.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),I=(0,l.useRef)(null);(0,l.useImperativeHandle)(t,(function(){return I.current}));var _=(0,r.Z)({},R);"visible"in e&&(_.popupVisible=e.visible);var L=!1,j=!1;if("boolean"==typeof S)L=S;else if(S&&"object"===(0,n.Z)(S)){var H=S.keepParent;L=!0===H,j=!1===H}return l.createElement(i.Z,Object.assign({popupClassName:o,prefixCls:y,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,n=e.overlay,r=e.id;return[l.createElement("div",{className:"".concat(y,"-arrow"),key:"arrow"},o),l.createElement(c,{key:"content",prefixCls:y,id:r,overlay:n,overlayInnerStyle:Z})]},action:p,builtinPlacements:s.C,popupPlacement:O,ref:I,popupAlign:D,getPopupContainer:T,onPopupVisibleChange:C,afterPopupVisibleChange:w,popupTransitionName:E,popupAnimation:k,defaultPopupVisible:V,destroyPopupOnHide:L,autoDestroy:j,mouseLeaveDelay:g,popupStyle:b,mouseEnterDelay:u},_),h)}))},43159:(e,t,o)=>{"use strict";o.d(t,{C:()=>a});var n={adjustX:1,adjustY:1},r=[0,0],a={left:{points:["cr","cl"],overflow:n,offset:[-4,0],targetOffset:r},right:{points:["cl","cr"],overflow:n,offset:[4,0],targetOffset:r},top:{points:["bc","tc"],overflow:n,offset:[0,-4],targetOffset:r},bottom:{points:["tc","bc"],overflow:n,offset:[0,4],targetOffset:r},topLeft:{points:["bl","tl"],overflow:n,offset:[0,-4],targetOffset:r},leftTop:{points:["tr","tl"],overflow:n,offset:[-4,0],targetOffset:r},topRight:{points:["br","tr"],overflow:n,offset:[0,-4],targetOffset:r},rightTop:{points:["tl","tr"],overflow:n,offset:[4,0],targetOffset:r},bottomRight:{points:["tr","br"],overflow:n,offset:[0,4],targetOffset:r},rightBottom:{points:["bl","br"],overflow:n,offset:[4,0],targetOffset:r},bottomLeft:{points:["tl","bl"],overflow:n,offset:[0,4],targetOffset:r},leftBottom:{points:["br","bl"],overflow:n,offset:[-4,0],targetOffset:r}}}}]);