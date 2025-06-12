import{r as reactExports,c as reactDomExports,e as commonjsGlobal,g as getDefaultExportFromCjs,R as React,L as Link,B as BrowserRouter}from"./react-a5af9912.js";import{B as Button,S as Switch,D as Drawer,M as Menu,n as notification,a as MailOutlined,b as Divider,G as GithubOutlined,I as InstagramOutlined,L as LinkedinOutlined,W as WechatOutlined,T as Typography,t as theme,R as Row,C as Col,A as Avatar,c as Badge,d as Timeline,F as Form,e as Modal,f as Input,g as Card,h as Image,i as Space,j as DownloadOutlined,k as Carousel,l as Tooltip,E as EyeOutlined,V as VerticalAlignMiddleOutlined,Q as QuestionCircleOutlined,m as ConfigProvider,o as Layout,p as FloatButton,q as VerticalAlignTopOutlined}from"./antd-a086d95a.js";/* empty css                */(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))M(C);new MutationObserver(C=>{for(const j of C)if(j.type==="childList")for(const R of j.addedNodes)R.tagName==="LINK"&&R.rel==="modulepreload"&&M(R)}).observe(document,{childList:!0,subtree:!0});function A(C){const j={};return C.integrity&&(j.integrity=C.integrity),C.referrerPolicy&&(j.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?j.credentials="include":C.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function M(C){if(C.ep)return;C.ep=!0;const j=A(C);fetch(C.href,j)}})();var jsxRuntime={exports:{}},reactJsxRuntime_production_min={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f$1=reactExports,k=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$2=Object.prototype.hasOwnProperty,n=f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$2={key:!0,ref:!0,__self:!0,__source:!0};function q(r,_,A){var M,C={},j=null,R=null;A!==void 0&&(j=""+A),_.key!==void 0&&(j=""+_.key),_.ref!==void 0&&(R=_.ref);for(M in _)m$2.call(_,M)&&!p$2.hasOwnProperty(M)&&(C[M]=_[M]);if(r&&r.defaultProps)for(M in _=r.defaultProps,_)C[M]===void 0&&(C[M]=_[M]);return{$$typeof:k,type:r,key:j,ref:R,props:C,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;jsxRuntime.exports=reactJsxRuntime_production_min;var jsxRuntimeExports=jsxRuntime.exports,client={},m$1=reactDomExports;client.createRoot=m$1.createRoot,client.hydrateRoot=m$1.hydrateRoot;const scriptRel="modulepreload",assetsURL=function(r){return"/"+r},seen={},__vitePreload=function(_,A,M){if(!A||A.length===0)return _();const C=document.getElementsByTagName("link");return Promise.all(A.map(j=>{if(j=assetsURL(j),j in seen)return;seen[j]=!0;const R=j.endsWith(".css"),D=R?'[rel="stylesheet"]':"";if(!!M)for(let N=C.length-1;N>=0;N--){const H=C[N];if(H.href===j&&(!R||H.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${j}"]${D}`))return;const B=document.createElement("link");if(B.rel=R?"stylesheet":scriptRel,R||(B.as="script",B.crossOrigin=""),B.href=j,document.head.appendChild(B),R)return new Promise((N,H)=>{B.addEventListener("load",N),B.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${j}`)))})})).then(()=>_()).catch(j=>{const R=new Event("vite:preloadError",{cancelable:!0});if(R.payload=j,window.dispatchEvent(R),!R.defaultPrevented)throw j})},reportWebVitals=r=>{r&&r instanceof Function&&__vitePreload(()=>import("./web-vitals-60d3425a.js"),[]).then(({getCLS:_,getFID:A,getFCP:M,getLCP:C,getTTFB:j})=>{_(r),A(r),M(r),C(r),j(r)})};var reactResponsive={exports:{}};(function(r,_){(function(M,C){r.exports=C(reactExports)})(commonjsGlobal,A=>(()=>{var M={"./node_modules/css-mediaquery/index.js":(D,O)=>{O.match=Y,O.parse=Z;var B=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,N=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,H=/^(?:(min|max)-)?(.+)/,$=/(em|rem|px|cm|mm|in|pt|pc)?$/,Q=/(dpi|dpcm|dppx)?$/;function Y(oe,te){return Z(oe).some(function(se){var ge=se.inverse,o=se.type==="all"||te.type===se.type;if(o&&ge||!(o||ge))return!1;var Te=se.expressions.every(function(X){var _e=X.feature,ye=X.modifier,Ae=X.value,ie=te[_e];if(!ie)return!1;switch(_e){case"orientation":case"scan":return ie.toLowerCase()===Ae.toLowerCase();case"width":case"height":case"device-width":case"device-height":Ae=ee(Ae),ie=ee(ie);break;case"resolution":Ae=G(Ae),ie=G(ie);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":Ae=re(Ae),ie=re(ie);break;case"grid":case"color":case"color-index":case"monochrome":Ae=parseInt(Ae,10)||1,ie=parseInt(ie,10)||0;break}switch(ye){case"min":return ie>=Ae;case"max":return ie<=Ae;default:return ie===Ae}});return Te&&!ge||!Te&&ge})}function Z(oe){return oe.split(",").map(function(te){te=te.trim();var se=te.match(B),ge=se[1],o=se[2],Te=se[3]||"",X={};return X.inverse=!!ge&&ge.toLowerCase()==="not",X.type=o?o.toLowerCase():"all",Te=Te.match(/\([^\)]+\)/g)||[],X.expressions=Te.map(function(_e){var ye=_e.match(N),Ae=ye[1].toLowerCase().match(H);return{modifier:Ae[1],feature:Ae[2],value:ye[2]}}),X})}function re(oe){var te=Number(oe),se;return te||(se=oe.match(/^(\d+)\s*\/\s*(\d+)$/),te=se[1]/se[2]),te}function G(oe){var te=parseFloat(oe),se=String(oe).match(Q)[1];switch(se){case"dpcm":return te/2.54;case"dppx":return te*96;default:return te}}function ee(oe){var te=parseFloat(oe),se=String(oe).match($)[1];switch(se){case"em":return te*16;case"rem":return te*16;case"cm":return te*96/2.54;case"mm":return te*96/2.54/10;case"in":return te*96;case"pt":return te*72;case"pc":return te*72/12;default:return te}}},"./node_modules/hyphenate-style-name/index.js":(D,O,B)=>{B.r(O),B.d(O,{default:()=>Z});var N=/[A-Z]/g,H=/^ms-/,$={};function Q(re){return"-"+re.toLowerCase()}function Y(re){if($.hasOwnProperty(re))return $[re];var G=re.replace(N,Q);return $[re]=H.test(G)?"-"+G:G}const Z=Y},"./node_modules/matchmediaquery/index.js":(D,O,B)=>{var N=B("./node_modules/css-mediaquery/index.js").match,H=typeof window<"u"?window.matchMedia:null;function $(Y,Z,re){var G=this;if(H&&!re){var ee=H.call(window,Y);this.matches=ee.matches,this.media=ee.media,ee.addListener(se)}else this.matches=N(Y,Z),this.media=Y;this.addListener=oe,this.removeListener=te,this.dispose=ge;function oe(o){ee&&ee.addListener(o)}function te(o){ee&&ee.removeListener(o)}function se(o){G.matches=o.matches,G.media=o.media}function ge(){ee&&ee.removeListener(se)}}function Q(Y,Z,re){return new $(Y,Z,re)}D.exports=Q},"./node_modules/object-assign/index.js":D=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var O=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;function H(Q){if(Q==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(Q)}function $(){try{if(!Object.assign)return!1;var Q=new String("abc");if(Q[5]="de",Object.getOwnPropertyNames(Q)[0]==="5")return!1;for(var Y={},Z=0;Z<10;Z++)Y["_"+String.fromCharCode(Z)]=Z;var re=Object.getOwnPropertyNames(Y).map(function(ee){return Y[ee]});if(re.join("")!=="0123456789")return!1;var G={};return"abcdefghijklmnopqrst".split("").forEach(function(ee){G[ee]=ee}),Object.keys(Object.assign({},G)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}D.exports=$()?Object.assign:function(Q,Y){for(var Z,re=H(Q),G,ee=1;ee<arguments.length;ee++){Z=Object(arguments[ee]);for(var oe in Z)B.call(Z,oe)&&(re[oe]=Z[oe]);if(O){G=O(Z);for(var te=0;te<G.length;te++)N.call(Z,G[te])&&(re[G[te]]=Z[G[te]])}}return re}},"./node_modules/prop-types/checkPropTypes.js":(D,O,B)=>{var N=function(){};{var H=B("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),$={},Q=B("./node_modules/prop-types/lib/has.js");N=function(Z){var re="Warning: "+Z;typeof console<"u"&&console.error(re);try{throw new Error(re)}catch{}}}function Y(Z,re,G,ee,oe){for(var te in Z)if(Q(Z,te)){var se;try{if(typeof Z[te]!="function"){var ge=Error((ee||"React class")+": "+G+" type `"+te+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof Z[te]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw ge.name="Invariant Violation",ge}se=Z[te](re,te,ee,G,null,H)}catch(Te){se=Te}if(se&&!(se instanceof Error)&&N((ee||"React class")+": type specification of "+G+" `"+te+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof se+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),se instanceof Error&&!(se.message in $)){$[se.message]=!0;var o=oe?oe():"";N("Failed "+G+" type: "+se.message+(o??""))}}}Y.resetWarningCache=function(){$={}},D.exports=Y},"./node_modules/prop-types/factoryWithTypeCheckers.js":(D,O,B)=>{var N=B("./node_modules/react-is/index.js"),H=B("./node_modules/object-assign/index.js"),$=B("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),Q=B("./node_modules/prop-types/lib/has.js"),Y=B("./node_modules/prop-types/checkPropTypes.js"),Z=function(){};Z=function(G){var ee="Warning: "+G;typeof console<"u"&&console.error(ee);try{throw new Error(ee)}catch{}};function re(){return null}D.exports=function(G,ee){var oe=typeof Symbol=="function"&&Symbol.iterator,te="@@iterator";function se(ne){var pe=ne&&(oe&&ne[oe]||ne[te]);if(typeof pe=="function")return pe}var ge="<<anonymous>>",o={array:ye("array"),bigint:ye("bigint"),bool:ye("boolean"),func:ye("function"),number:ye("number"),object:ye("object"),string:ye("string"),symbol:ye("symbol"),any:Ae(),arrayOf:ie,element:qe(),elementType:Ze(),instanceOf:$e,node:Pe(),objectOf:bn,oneOf:Xe,oneOfType:sn,shape:Ge,exact:Ve};function Te(ne,pe){return ne===pe?ne!==0||1/ne===1/pe:ne!==ne&&pe!==pe}function X(ne,pe){this.message=ne,this.data=pe&&typeof pe=="object"?pe:{},this.stack=""}X.prototype=Error.prototype;function _e(ne){var pe={},Me=0;function Se(De,Ce,ke,we,Ue,Le,fe){if(we=we||ge,Le=Le||ke,fe!==$){if(ee){var Fe=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Fe.name="Invariant Violation",Fe}else if(typeof console<"u"){var Je=we+":"+ke;!pe[Je]&&Me<3&&(Z("You are manually calling a React.PropTypes validation function for the `"+Le+"` prop on `"+we+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),pe[Je]=!0,Me++)}}return Ce[ke]==null?De?Ce[ke]===null?new X("The "+Ue+" `"+Le+"` is marked as required "+("in `"+we+"`, but its value is `null`.")):new X("The "+Ue+" `"+Le+"` is marked as required in "+("`"+we+"`, but its value is `undefined`.")):null:ne(Ce,ke,we,Ue,Le)}var Ee=Se.bind(null,!1);return Ee.isRequired=Se.bind(null,!0),Ee}function ye(ne){function pe(Me,Se,Ee,De,Ce,ke){var we=Me[Se],Ue=cn(we);if(Ue!==ne){var Le=hn(we);return new X("Invalid "+De+" `"+Ce+"` of type "+("`"+Le+"` supplied to `"+Ee+"`, expected ")+("`"+ne+"`."),{expectedType:ne})}return null}return _e(pe)}function Ae(){return _e(re)}function ie(ne){function pe(Me,Se,Ee,De,Ce){if(typeof ne!="function")return new X("Property `"+Ce+"` of component `"+Ee+"` has invalid PropType notation inside arrayOf.");var ke=Me[Se];if(!Array.isArray(ke)){var we=cn(ke);return new X("Invalid "+De+" `"+Ce+"` of type "+("`"+we+"` supplied to `"+Ee+"`, expected an array."))}for(var Ue=0;Ue<ke.length;Ue++){var Le=ne(ke,Ue,Ee,De,Ce+"["+Ue+"]",$);if(Le instanceof Error)return Le}return null}return _e(pe)}function qe(){function ne(pe,Me,Se,Ee,De){var Ce=pe[Me];if(!G(Ce)){var ke=cn(Ce);return new X("Invalid "+Ee+" `"+De+"` of type "+("`"+ke+"` supplied to `"+Se+"`, expected a single ReactElement."))}return null}return _e(ne)}function Ze(){function ne(pe,Me,Se,Ee,De){var Ce=pe[Me];if(!N.isValidElementType(Ce)){var ke=cn(Ce);return new X("Invalid "+Ee+" `"+De+"` of type "+("`"+ke+"` supplied to `"+Se+"`, expected a single ReactElement type."))}return null}return _e(ne)}function $e(ne){function pe(Me,Se,Ee,De,Ce){if(!(Me[Se]instanceof ne)){var ke=ne.name||ge,we=jn(Me[Se]);return new X("Invalid "+De+" `"+Ce+"` of type "+("`"+we+"` supplied to `"+Ee+"`, expected ")+("instance of `"+ke+"`."))}return null}return _e(pe)}function Xe(ne){if(!Array.isArray(ne))return arguments.length>1?Z("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):Z("Invalid argument supplied to oneOf, expected an array."),re;function pe(Me,Se,Ee,De,Ce){for(var ke=Me[Se],we=0;we<ne.length;we++)if(Te(ke,ne[we]))return null;var Ue=JSON.stringify(ne,function(fe,Fe){var Je=hn(Fe);return Je==="symbol"?String(Fe):Fe});return new X("Invalid "+De+" `"+Ce+"` of value `"+String(ke)+"` "+("supplied to `"+Ee+"`, expected one of "+Ue+"."))}return _e(pe)}function bn(ne){function pe(Me,Se,Ee,De,Ce){if(typeof ne!="function")return new X("Property `"+Ce+"` of component `"+Ee+"` has invalid PropType notation inside objectOf.");var ke=Me[Se],we=cn(ke);if(we!=="object")return new X("Invalid "+De+" `"+Ce+"` of type "+("`"+we+"` supplied to `"+Ee+"`, expected an object."));for(var Ue in ke)if(Q(ke,Ue)){var Le=ne(ke,Ue,Ee,De,Ce+"."+Ue,$);if(Le instanceof Error)return Le}return null}return _e(pe)}function sn(ne){if(!Array.isArray(ne))return Z("Invalid argument supplied to oneOfType, expected an instance of array."),re;for(var pe=0;pe<ne.length;pe++){var Me=ne[pe];if(typeof Me!="function")return Z("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+Yn(Me)+" at index "+pe+"."),re}function Se(Ee,De,Ce,ke,we){for(var Ue=[],Le=0;Le<ne.length;Le++){var fe=ne[Le],Fe=fe(Ee,De,Ce,ke,we,$);if(Fe==null)return null;Fe.data&&Q(Fe.data,"expectedType")&&Ue.push(Fe.data.expectedType)}var Je=Ue.length>0?", expected one of type ["+Ue.join(", ")+"]":"";return new X("Invalid "+ke+" `"+we+"` supplied to "+("`"+Ce+"`"+Je+"."))}return _e(Se)}function Pe(){function ne(pe,Me,Se,Ee,De){return en(pe[Me])?null:new X("Invalid "+Ee+" `"+De+"` supplied to "+("`"+Se+"`, expected a ReactNode."))}return _e(ne)}function He(ne,pe,Me,Se,Ee){return new X((ne||"React class")+": "+pe+" type `"+Me+"."+Se+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+Ee+"`.")}function Ge(ne){function pe(Me,Se,Ee,De,Ce){var ke=Me[Se],we=cn(ke);if(we!=="object")return new X("Invalid "+De+" `"+Ce+"` of type `"+we+"` "+("supplied to `"+Ee+"`, expected `object`."));for(var Ue in ne){var Le=ne[Ue];if(typeof Le!="function")return He(Ee,De,Ce,Ue,hn(Le));var fe=Le(ke,Ue,Ee,De,Ce+"."+Ue,$);if(fe)return fe}return null}return _e(pe)}function Ve(ne){function pe(Me,Se,Ee,De,Ce){var ke=Me[Se],we=cn(ke);if(we!=="object")return new X("Invalid "+De+" `"+Ce+"` of type `"+we+"` "+("supplied to `"+Ee+"`, expected `object`."));var Ue=H({},Me[Se],ne);for(var Le in Ue){var fe=ne[Le];if(Q(ne,Le)&&typeof fe!="function")return He(Ee,De,Ce,Le,hn(fe));if(!fe)return new X("Invalid "+De+" `"+Ce+"` key `"+Le+"` supplied to `"+Ee+"`.\nBad object: "+JSON.stringify(Me[Se],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(ne),null,"  "));var Fe=fe(ke,Le,Ee,De,Ce+"."+Le,$);if(Fe)return Fe}return null}return _e(pe)}function en(ne){switch(typeof ne){case"number":case"string":case"undefined":return!0;case"boolean":return!ne;case"object":if(Array.isArray(ne))return ne.every(en);if(ne===null||G(ne))return!0;var pe=se(ne);if(pe){var Me=pe.call(ne),Se;if(pe!==ne.entries){for(;!(Se=Me.next()).done;)if(!en(Se.value))return!1}else for(;!(Se=Me.next()).done;){var Ee=Se.value;if(Ee&&!en(Ee[1]))return!1}}else return!1;return!0;default:return!1}}function Kn(ne,pe){return ne==="symbol"?!0:pe?pe["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&pe instanceof Symbol:!1}function cn(ne){var pe=typeof ne;return Array.isArray(ne)?"array":ne instanceof RegExp?"object":Kn(pe,ne)?"symbol":pe}function hn(ne){if(typeof ne>"u"||ne===null)return""+ne;var pe=cn(ne);if(pe==="object"){if(ne instanceof Date)return"date";if(ne instanceof RegExp)return"regexp"}return pe}function Yn(ne){var pe=hn(ne);switch(pe){case"array":case"object":return"an "+pe;case"boolean":case"date":case"regexp":return"a "+pe;default:return pe}}function jn(ne){return!ne.constructor||!ne.constructor.name?ge:ne.constructor.name}return o.checkPropTypes=Y,o.resetWarningCache=Y.resetWarningCache,o.PropTypes=o,o}},"./node_modules/prop-types/index.js":(D,O,B)=>{{var N=B("./node_modules/react-is/index.js"),H=!0;D.exports=B("./node_modules/prop-types/factoryWithTypeCheckers.js")(N.isElement,H)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":D=>{var O="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";D.exports=O},"./node_modules/prop-types/lib/has.js":D=>{D.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(D,O)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var B=typeof Symbol=="function"&&Symbol.for,N=B?Symbol.for("react.element"):60103,H=B?Symbol.for("react.portal"):60106,$=B?Symbol.for("react.fragment"):60107,Q=B?Symbol.for("react.strict_mode"):60108,Y=B?Symbol.for("react.profiler"):60114,Z=B?Symbol.for("react.provider"):60109,re=B?Symbol.for("react.context"):60110,G=B?Symbol.for("react.async_mode"):60111,ee=B?Symbol.for("react.concurrent_mode"):60111,oe=B?Symbol.for("react.forward_ref"):60112,te=B?Symbol.for("react.suspense"):60113,se=B?Symbol.for("react.suspense_list"):60120,ge=B?Symbol.for("react.memo"):60115,o=B?Symbol.for("react.lazy"):60116,Te=B?Symbol.for("react.block"):60121,X=B?Symbol.for("react.fundamental"):60117,_e=B?Symbol.for("react.responder"):60118,ye=B?Symbol.for("react.scope"):60119;function Ae(fe){return typeof fe=="string"||typeof fe=="function"||fe===$||fe===ee||fe===Y||fe===Q||fe===te||fe===se||typeof fe=="object"&&fe!==null&&(fe.$$typeof===o||fe.$$typeof===ge||fe.$$typeof===Z||fe.$$typeof===re||fe.$$typeof===oe||fe.$$typeof===X||fe.$$typeof===_e||fe.$$typeof===ye||fe.$$typeof===Te)}function ie(fe){if(typeof fe=="object"&&fe!==null){var Fe=fe.$$typeof;switch(Fe){case N:var Je=fe.type;switch(Je){case G:case ee:case $:case Y:case Q:case te:return Je;default:var wn=Je&&Je.$$typeof;switch(wn){case re:case oe:case o:case ge:case Z:return wn;default:return Fe}}case H:return Fe}}}var qe=G,Ze=ee,$e=re,Xe=Z,bn=N,sn=oe,Pe=$,He=o,Ge=ge,Ve=H,en=Y,Kn=Q,cn=te,hn=!1;function Yn(fe){return hn||(hn=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),jn(fe)||ie(fe)===G}function jn(fe){return ie(fe)===ee}function ne(fe){return ie(fe)===re}function pe(fe){return ie(fe)===Z}function Me(fe){return typeof fe=="object"&&fe!==null&&fe.$$typeof===N}function Se(fe){return ie(fe)===oe}function Ee(fe){return ie(fe)===$}function De(fe){return ie(fe)===o}function Ce(fe){return ie(fe)===ge}function ke(fe){return ie(fe)===H}function we(fe){return ie(fe)===Y}function Ue(fe){return ie(fe)===Q}function Le(fe){return ie(fe)===te}O.AsyncMode=qe,O.ConcurrentMode=Ze,O.ContextConsumer=$e,O.ContextProvider=Xe,O.Element=bn,O.ForwardRef=sn,O.Fragment=Pe,O.Lazy=He,O.Memo=Ge,O.Portal=Ve,O.Profiler=en,O.StrictMode=Kn,O.Suspense=cn,O.isAsyncMode=Yn,O.isConcurrentMode=jn,O.isContextConsumer=ne,O.isContextProvider=pe,O.isElement=Me,O.isForwardRef=Se,O.isFragment=Ee,O.isLazy=De,O.isMemo=Ce,O.isPortal=ke,O.isProfiler=we,O.isStrictMode=Ue,O.isSuspense=Le,O.isValidElementType=Ae,O.typeOf=ie})()},"./node_modules/react-is/index.js":(D,O,B)=>{D.exports=B("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(D,O,B)=>{B.r(O),B.d(O,{shallowEqualArrays:()=>H,shallowEqualObjects:()=>N});function N($,Q){if($===Q)return!0;if(!$||!Q)return!1;var Y=Object.keys($),Z=Object.keys(Q),re=Y.length;if(Z.length!==re)return!1;for(var G=0;G<re;G++){var ee=Y[G];if($[ee]!==Q[ee]||!Object.prototype.hasOwnProperty.call(Q,ee))return!1}return!0}function H($,Q){if($===Q)return!0;if(!$||!Q)return!1;var Y=$.length;if(Q.length!==Y)return!1;for(var Z=0;Z<Y;Z++)if($[Z]!==Q[Z])return!1;return!0}},"./src/Component.ts":function(D,O,B){var N=this&&this.__rest||function(Y,Z){var re={};for(var G in Y)Object.prototype.hasOwnProperty.call(Y,G)&&Z.indexOf(G)<0&&(re[G]=Y[G]);if(Y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var ee=0,G=Object.getOwnPropertySymbols(Y);ee<G.length;ee++)Z.indexOf(G[ee])<0&&Object.prototype.propertyIsEnumerable.call(Y,G[ee])&&(re[G[ee]]=Y[G[ee]]);return re},H=this&&this.__importDefault||function(Y){return Y&&Y.__esModule?Y:{default:Y}};Object.defineProperty(O,"__esModule",{value:!0});var $=H(B("./src/useMediaQuery.ts")),Q=function(Y){var Z=Y.children,re=Y.device,G=Y.onChange,ee=N(Y,["children","device","onChange"]),oe=(0,$.default)(ee,re,G);return typeof Z=="function"?Z(oe):oe?Z:null};O.default=Q},"./src/Context.ts":(D,O,B)=>{Object.defineProperty(O,"__esModule",{value:!0});var N=B("react"),H=(0,N.createContext)(void 0);O.default=H},"./src/index.ts":function(D,O,B){var N=this&&this.__importDefault||function(Z){return Z&&Z.__esModule?Z:{default:Z}};Object.defineProperty(O,"__esModule",{value:!0}),O.Context=O.toQuery=O.useMediaQuery=O.default=void 0;var H=N(B("./src/useMediaQuery.ts"));O.useMediaQuery=H.default;var $=N(B("./src/Component.ts"));O.default=$.default;var Q=N(B("./src/toQuery.ts"));O.toQuery=Q.default;var Y=N(B("./src/Context.ts"));O.Context=Y.default},"./src/mediaQuery.ts":function(D,O,B){var N=this&&this.__assign||function(){return N=Object.assign||function(te){for(var se,ge=1,o=arguments.length;ge<o;ge++){se=arguments[ge];for(var Te in se)Object.prototype.hasOwnProperty.call(se,Te)&&(te[Te]=se[Te])}return te},N.apply(this,arguments)},H=this&&this.__rest||function(te,se){var ge={};for(var o in te)Object.prototype.hasOwnProperty.call(te,o)&&se.indexOf(o)<0&&(ge[o]=te[o]);if(te!=null&&typeof Object.getOwnPropertySymbols=="function")for(var Te=0,o=Object.getOwnPropertySymbols(te);Te<o.length;Te++)se.indexOf(o[Te])<0&&Object.prototype.propertyIsEnumerable.call(te,o[Te])&&(ge[o[Te]]=te[o[Te]]);return ge},$=this&&this.__importDefault||function(te){return te&&te.__esModule?te:{default:te}};Object.defineProperty(O,"__esModule",{value:!0});var Q=$(B("./node_modules/prop-types/index.js")),Y=Q.default.oneOfType([Q.default.string,Q.default.number]),Z={all:Q.default.bool,grid:Q.default.bool,aural:Q.default.bool,braille:Q.default.bool,handheld:Q.default.bool,print:Q.default.bool,projection:Q.default.bool,screen:Q.default.bool,tty:Q.default.bool,tv:Q.default.bool,embossed:Q.default.bool},re={orientation:Q.default.oneOf(["portrait","landscape"]),scan:Q.default.oneOf(["progressive","interlace"]),aspectRatio:Q.default.string,deviceAspectRatio:Q.default.string,height:Y,deviceHeight:Y,width:Y,deviceWidth:Y,color:Q.default.bool,colorIndex:Q.default.bool,monochrome:Q.default.bool,resolution:Y,type:Object.keys(Z)};re.type;var G=H(re,["type"]),ee=N({minAspectRatio:Q.default.string,maxAspectRatio:Q.default.string,minDeviceAspectRatio:Q.default.string,maxDeviceAspectRatio:Q.default.string,minHeight:Y,maxHeight:Y,minDeviceHeight:Y,maxDeviceHeight:Y,minWidth:Y,maxWidth:Y,minDeviceWidth:Y,maxDeviceWidth:Y,minColor:Q.default.number,maxColor:Q.default.number,minColorIndex:Q.default.number,maxColorIndex:Q.default.number,minMonochrome:Q.default.number,maxMonochrome:Q.default.number,minResolution:Y,maxResolution:Y},G),oe=N(N({},Z),ee);O.default={all:oe,types:Z,matchers:re,features:ee}},"./src/toQuery.ts":function(D,O,B){var N=this&&this.__importDefault||function(G){return G&&G.__esModule?G:{default:G}};Object.defineProperty(O,"__esModule",{value:!0});var H=N(B("./node_modules/hyphenate-style-name/index.js")),$=N(B("./src/mediaQuery.ts")),Q=function(G){return"not ".concat(G)},Y=function(G,ee){var oe=(0,H.default)(G);return typeof ee=="number"&&(ee="".concat(ee,"px")),ee===!0?oe:ee===!1?Q(oe):"(".concat(oe,": ").concat(ee,")")},Z=function(G){return G.join(" and ")},re=function(G){var ee=[];return Object.keys($.default.all).forEach(function(oe){var te=G[oe];te!=null&&ee.push(Y(oe,te))}),Z(ee)};O.default=re},"./src/useMediaQuery.ts":function(D,O,B){var N=this&&this.__importDefault||function(X){return X&&X.__esModule?X:{default:X}};Object.defineProperty(O,"__esModule",{value:!0});var H=B("react"),$=N(B("./node_modules/matchmediaquery/index.js")),Q=N(B("./node_modules/hyphenate-style-name/index.js")),Y=B("./node_modules/shallow-equal/dist/index.esm.js"),Z=N(B("./src/toQuery.ts")),re=N(B("./src/Context.ts")),G=function(X){return X.query||(0,Z.default)(X)},ee=function(X){if(X){var _e=Object.keys(X);return _e.reduce(function(ye,Ae){return ye[(0,Q.default)(Ae)]=X[Ae],ye},{})}},oe=function(){var X=(0,H.useRef)(!1);return(0,H.useEffect)(function(){X.current=!0},[]),X.current},te=function(X){var _e=(0,H.useContext)(re.default),ye=function(){return ee(X)||ee(_e)},Ae=(0,H.useState)(ye),ie=Ae[0],qe=Ae[1];return(0,H.useEffect)(function(){var Ze=ye();(0,Y.shallowEqualObjects)(ie,Ze)||qe(Ze)},[X,_e]),ie},se=function(X){var _e=function(){return G(X)},ye=(0,H.useState)(_e),Ae=ye[0],ie=ye[1];return(0,H.useEffect)(function(){var qe=_e();Ae!==qe&&ie(qe)},[X]),Ae},ge=function(X,_e){var ye=function(){return(0,$.default)(X,_e||{},!!_e)},Ae=(0,H.useState)(ye),ie=Ae[0],qe=Ae[1],Ze=oe();return(0,H.useEffect)(function(){if(Ze){var $e=ye();return qe($e),function(){$e&&$e.dispose()}}},[X,_e]),ie},o=function(X){var _e=(0,H.useState)(X.matches),ye=_e[0],Ae=_e[1];return(0,H.useEffect)(function(){var ie=function(qe){Ae(qe.matches)};return X.addListener(ie),Ae(X.matches),function(){X.removeListener(ie)}},[X]),ye},Te=function(X,_e,ye){var Ae=te(_e),ie=se(X);if(!ie)throw new Error("Invalid or missing MediaQuery!");var qe=ge(ie,Ae),Ze=o(qe),$e=oe();return(0,H.useEffect)(function(){$e&&ye&&ye(Ze)},[Ze]),(0,H.useEffect)(function(){return function(){qe&&qe.dispose()}},[]),Ze};O.default=Te},react:D=>{D.exports=A}},C={};function j(D){var O=C[D];if(O!==void 0)return O.exports;var B=C[D]={exports:{}};return M[D].call(B.exports,B,B.exports,j),B.exports}j.d=(D,O)=>{for(var B in O)j.o(O,B)&&!j.o(D,B)&&Object.defineProperty(D,B,{enumerable:!0,get:O[B]})},j.o=(D,O)=>Object.prototype.hasOwnProperty.call(D,O),j.r=D=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(D,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(D,"__esModule",{value:!0})};var R=j("./src/index.ts");return R})())})(reactResponsive);var reactResponsiveExports=reactResponsive.exports;function ownKeys$1(r,_){var A=Object.keys(r);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(r);_&&(M=M.filter(function(C){return Object.getOwnPropertyDescriptor(r,C).enumerable})),A.push.apply(A,M)}return A}function _objectSpread2$1(r){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?ownKeys$1(Object(A),!0).forEach(function(M){_defineProperty$1(r,M,A[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(A)):ownKeys$1(Object(A)).forEach(function(M){Object.defineProperty(r,M,Object.getOwnPropertyDescriptor(A,M))})}return r}function _typeof$1(r){"@babel/helpers - typeof";return _typeof$1=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},_typeof$1(r)}function _classCallCheck(r,_){if(!(r instanceof _))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,_){for(var A=0;A<_.length;A++){var M=_[A];M.enumerable=M.enumerable||!1,M.configurable=!0,"value"in M&&(M.writable=!0),Object.defineProperty(r,M.key,M)}}function _createClass(r,_,A){return _&&_defineProperties(r.prototype,_),A&&_defineProperties(r,A),Object.defineProperty(r,"prototype",{writable:!1}),r}function _defineProperty$1(r,_,A){return _ in r?Object.defineProperty(r,_,{value:A,enumerable:!0,configurable:!0,writable:!0}):r[_]=A,r}function _slicedToArray(r,_){return _arrayWithHoles(r)||_iterableToArrayLimit(r,_)||_unsupportedIterableToArray$1(r,_)||_nonIterableRest()}function _toConsumableArray$1(r){return _arrayWithoutHoles$1(r)||_iterableToArray$1(r)||_unsupportedIterableToArray$1(r)||_nonIterableSpread$1()}function _arrayWithoutHoles$1(r){if(Array.isArray(r))return _arrayLikeToArray$1(r)}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArray$1(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _iterableToArrayLimit(r,_){var A=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(A!=null){var M=[],C=!0,j=!1,R,D;try{for(A=A.call(r);!(C=(R=A.next()).done)&&(M.push(R.value),!(_&&M.length===_));C=!0);}catch(O){j=!0,D=O}finally{try{!C&&A.return!=null&&A.return()}finally{if(j)throw D}}return M}}function _unsupportedIterableToArray$1(r,_){if(r){if(typeof r=="string")return _arrayLikeToArray$1(r,_);var A=Object.prototype.toString.call(r).slice(8,-1);if(A==="Object"&&r.constructor&&(A=r.constructor.name),A==="Map"||A==="Set")return Array.from(r);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return _arrayLikeToArray$1(r,_)}}function _arrayLikeToArray$1(r,_){(_==null||_>r.length)&&(_=r.length);for(var A=0,M=new Array(_);A<_;A++)M[A]=r[A];return M}function _nonIterableSpread$1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _nonIterableRest(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var noop=function(){},_WINDOW={},_DOCUMENT={},_MUTATION_OBSERVER=null,_PERFORMANCE={mark:noop,measure:noop};try{typeof window<"u"&&(_WINDOW=window),typeof document<"u"&&(_DOCUMENT=document),typeof MutationObserver<"u"&&(_MUTATION_OBSERVER=MutationObserver),typeof performance<"u"&&(_PERFORMANCE=performance)}catch{}var _ref=_WINDOW.navigator||{},_ref$userAgent=_ref.userAgent,userAgent=_ref$userAgent===void 0?"":_ref$userAgent,WINDOW=_WINDOW,DOCUMENT=_DOCUMENT,MUTATION_OBSERVER=_MUTATION_OBSERVER,PERFORMANCE=_PERFORMANCE;WINDOW.document;var IS_DOM=!!DOCUMENT.documentElement&&!!DOCUMENT.head&&typeof DOCUMENT.addEventListener=="function"&&typeof DOCUMENT.createElement=="function",IS_IE=~userAgent.indexOf("MSIE")||~userAgent.indexOf("Trident/"),_familyProxy,_familyProxy2,_familyProxy3,_familyProxy4,_familyProxy5,NAMESPACE_IDENTIFIER="___FONT_AWESOME___",UNITS_IN_GRID=16,DEFAULT_CSS_PREFIX="fa",DEFAULT_REPLACEMENT_CLASS="svg-inline--fa",DATA_FA_I2SVG="data-fa-i2svg",DATA_FA_PSEUDO_ELEMENT="data-fa-pseudo-element",DATA_FA_PSEUDO_ELEMENT_PENDING="data-fa-pseudo-element-pending",DATA_PREFIX="data-prefix",DATA_ICON="data-icon",HTML_CLASS_I2SVG_BASE_CLASS="fontawesome-i2svg",MUTATION_APPROACH_ASYNC="async",TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS=["HTML","HEAD","STYLE","SCRIPT"],PRODUCTION$1=function(){try{return!0}catch{return!1}}(),FAMILY_CLASSIC="classic",FAMILY_SHARP="sharp",FAMILIES=[FAMILY_CLASSIC,FAMILY_SHARP];function familyProxy(r){return new Proxy(r,{get:function(A,M){return M in A?A[M]:A[FAMILY_CLASSIC]}})}var PREFIX_TO_STYLE=familyProxy((_familyProxy={},_defineProperty$1(_familyProxy,FAMILY_CLASSIC,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_defineProperty$1(_familyProxy,FAMILY_SHARP,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),_familyProxy)),STYLE_TO_PREFIX=familyProxy((_familyProxy2={},_defineProperty$1(_familyProxy2,FAMILY_CLASSIC,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_defineProperty$1(_familyProxy2,FAMILY_SHARP,{solid:"fass",regular:"fasr",light:"fasl"}),_familyProxy2)),PREFIX_TO_LONG_STYLE=familyProxy((_familyProxy3={},_defineProperty$1(_familyProxy3,FAMILY_CLASSIC,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_defineProperty$1(_familyProxy3,FAMILY_SHARP,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_familyProxy3)),LONG_STYLE_TO_PREFIX=familyProxy((_familyProxy4={},_defineProperty$1(_familyProxy4,FAMILY_CLASSIC,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_defineProperty$1(_familyProxy4,FAMILY_SHARP,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_familyProxy4)),ICON_SELECTION_SYNTAX_PATTERN=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,LAYERS_TEXT_CLASSNAME="fa-layers-text",FONT_FAMILY_PATTERN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,FONT_WEIGHT_TO_PREFIX=familyProxy((_familyProxy5={},_defineProperty$1(_familyProxy5,FAMILY_CLASSIC,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_defineProperty$1(_familyProxy5,FAMILY_SHARP,{900:"fass",400:"fasr",300:"fasl"}),_familyProxy5)),oneToTen=[1,2,3,4,5,6,7,8,9,10],oneToTwenty=oneToTen.concat([11,12,13,14,15,16,17,18,19,20]),ATTRIBUTES_WATCHED_FOR_MUTATION=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],DUOTONE_CLASSES={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},prefixes=new Set;Object.keys(STYLE_TO_PREFIX[FAMILY_CLASSIC]).map(prefixes.add.bind(prefixes));Object.keys(STYLE_TO_PREFIX[FAMILY_SHARP]).map(prefixes.add.bind(prefixes));var RESERVED_CLASSES=[].concat(FAMILIES,_toConsumableArray$1(prefixes),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",DUOTONE_CLASSES.GROUP,DUOTONE_CLASSES.SWAP_OPACITY,DUOTONE_CLASSES.PRIMARY,DUOTONE_CLASSES.SECONDARY]).concat(oneToTen.map(function(r){return"".concat(r,"x")})).concat(oneToTwenty.map(function(r){return"w-".concat(r)})),initial=WINDOW.FontAwesomeConfig||{};function getAttrConfig(r){var _=DOCUMENT.querySelector("script["+r+"]");if(_)return _.getAttribute(r)}function coerce(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(DOCUMENT&&typeof DOCUMENT.querySelector=="function"){var attrs=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];attrs.forEach(function(r){var _=_slicedToArray(r,2),A=_[0],M=_[1],C=coerce(getAttrConfig(A));C!=null&&(initial[M]=C)})}var _default={styleDefault:"solid",familyDefault:"classic",cssPrefix:DEFAULT_CSS_PREFIX,replacementClass:DEFAULT_REPLACEMENT_CLASS,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};initial.familyPrefix&&(initial.cssPrefix=initial.familyPrefix);var _config=_objectSpread2$1(_objectSpread2$1({},_default),initial);_config.autoReplaceSvg||(_config.observeMutations=!1);var config={};Object.keys(_default).forEach(function(r){Object.defineProperty(config,r,{enumerable:!0,set:function(A){_config[r]=A,_onChangeCb.forEach(function(M){return M(config)})},get:function(){return _config[r]}})});Object.defineProperty(config,"familyPrefix",{enumerable:!0,set:function(_){_config.cssPrefix=_,_onChangeCb.forEach(function(A){return A(config)})},get:function(){return _config.cssPrefix}});WINDOW.FontAwesomeConfig=config;var _onChangeCb=[];function onChange(r){return _onChangeCb.push(r),function(){_onChangeCb.splice(_onChangeCb.indexOf(r),1)}}var d$1=UNITS_IN_GRID,meaninglessTransform={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function insertCss(r){if(!(!r||!IS_DOM)){var _=DOCUMENT.createElement("style");_.setAttribute("type","text/css"),_.innerHTML=r;for(var A=DOCUMENT.head.childNodes,M=null,C=A.length-1;C>-1;C--){var j=A[C],R=(j.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(R)>-1&&(M=j)}return DOCUMENT.head.insertBefore(_,M),r}}var idPool="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nextUniqueId(){for(var r=12,_="";r-- >0;)_+=idPool[Math.random()*62|0];return _}function toArray(r){for(var _=[],A=(r||[]).length>>>0;A--;)_[A]=r[A];return _}function classArray(r){return r.classList?toArray(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(_){return _})}function htmlEscape(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function joinAttributes(r){return Object.keys(r||{}).reduce(function(_,A){return _+"".concat(A,'="').concat(htmlEscape(r[A]),'" ')},"").trim()}function joinStyles(r){return Object.keys(r||{}).reduce(function(_,A){return _+"".concat(A,": ").concat(r[A].trim(),";")},"")}function transformIsMeaningful(r){return r.size!==meaninglessTransform.size||r.x!==meaninglessTransform.x||r.y!==meaninglessTransform.y||r.rotate!==meaninglessTransform.rotate||r.flipX||r.flipY}function transformForSvg(r){var _=r.transform,A=r.containerWidth,M=r.iconWidth,C={transform:"translate(".concat(A/2," 256)")},j="translate(".concat(_.x*32,", ").concat(_.y*32,") "),R="scale(".concat(_.size/16*(_.flipX?-1:1),", ").concat(_.size/16*(_.flipY?-1:1),") "),D="rotate(".concat(_.rotate," 0 0)"),O={transform:"".concat(j," ").concat(R," ").concat(D)},B={transform:"translate(".concat(M/2*-1," -256)")};return{outer:C,inner:O,path:B}}function transformForCss(r){var _=r.transform,A=r.width,M=A===void 0?UNITS_IN_GRID:A,C=r.height,j=C===void 0?UNITS_IN_GRID:C,R=r.startCentered,D=R===void 0?!1:R,O="";return D&&IS_IE?O+="translate(".concat(_.x/d$1-M/2,"em, ").concat(_.y/d$1-j/2,"em) "):D?O+="translate(calc(-50% + ".concat(_.x/d$1,"em), calc(-50% + ").concat(_.y/d$1,"em)) "):O+="translate(".concat(_.x/d$1,"em, ").concat(_.y/d$1,"em) "),O+="scale(".concat(_.size/d$1*(_.flipX?-1:1),", ").concat(_.size/d$1*(_.flipY?-1:1),") "),O+="rotate(".concat(_.rotate,"deg) "),O}var baseStyles=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function css(){var r=DEFAULT_CSS_PREFIX,_=DEFAULT_REPLACEMENT_CLASS,A=config.cssPrefix,M=config.replacementClass,C=baseStyles;if(A!==r||M!==_){var j=new RegExp("\\.".concat(r,"\\-"),"g"),R=new RegExp("\\--".concat(r,"\\-"),"g"),D=new RegExp("\\.".concat(_),"g");C=C.replace(j,".".concat(A,"-")).replace(R,"--".concat(A,"-")).replace(D,".".concat(M))}return C}var _cssInserted=!1;function ensureCss(){config.autoAddCss&&!_cssInserted&&(insertCss(css()),_cssInserted=!0)}var InjectCSS={mixout:function(){return{dom:{css,insertCss:ensureCss}}},hooks:function(){return{beforeDOMElementCreation:function(){ensureCss()},beforeI2svg:function(){ensureCss()}}}},w=WINDOW||{};w[NAMESPACE_IDENTIFIER]||(w[NAMESPACE_IDENTIFIER]={});w[NAMESPACE_IDENTIFIER].styles||(w[NAMESPACE_IDENTIFIER].styles={});w[NAMESPACE_IDENTIFIER].hooks||(w[NAMESPACE_IDENTIFIER].hooks={});w[NAMESPACE_IDENTIFIER].shims||(w[NAMESPACE_IDENTIFIER].shims=[]);var namespace=w[NAMESPACE_IDENTIFIER],functions=[],listener=function r(){DOCUMENT.removeEventListener("DOMContentLoaded",r),loaded=1,functions.map(function(_){return _()})},loaded=!1;IS_DOM&&(loaded=(DOCUMENT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(DOCUMENT.readyState),loaded||DOCUMENT.addEventListener("DOMContentLoaded",listener));function domready(r){IS_DOM&&(loaded?setTimeout(r,0):functions.push(r))}function toHtml(r){var _=r.tag,A=r.attributes,M=A===void 0?{}:A,C=r.children,j=C===void 0?[]:C;return typeof r=="string"?htmlEscape(r):"<".concat(_," ").concat(joinAttributes(M),">").concat(j.map(toHtml).join(""),"</").concat(_,">")}function iconFromMapping(r,_,A){if(r&&r[_]&&r[_][A])return{prefix:_,iconName:A,icon:r[_][A]}}var bindInternal4=function(_,A){return function(M,C,j,R){return _.call(A,M,C,j,R)}},reduce=function(_,A,M,C){var j=Object.keys(_),R=j.length,D=C!==void 0?bindInternal4(A,C):A,O,B,N;for(M===void 0?(O=1,N=_[j[0]]):(O=0,N=M);O<R;O++)B=j[O],N=D(N,_[B],B,_);return N};function ucs2decode(r){for(var _=[],A=0,M=r.length;A<M;){var C=r.charCodeAt(A++);if(C>=55296&&C<=56319&&A<M){var j=r.charCodeAt(A++);(j&64512)==56320?_.push(((C&1023)<<10)+(j&1023)+65536):(_.push(C),A--)}else _.push(C)}return _}function toHex(r){var _=ucs2decode(r);return _.length===1?_[0].toString(16):null}function codePointAt(r,_){var A=r.length,M=r.charCodeAt(_),C;return M>=55296&&M<=56319&&A>_+1&&(C=r.charCodeAt(_+1),C>=56320&&C<=57343)?(M-55296)*1024+C-56320+65536:M}function normalizeIcons(r){return Object.keys(r).reduce(function(_,A){var M=r[A],C=!!M.icon;return C?_[M.iconName]=M.icon:_[A]=M,_},{})}function defineIcons(r,_){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},M=A.skipHooks,C=M===void 0?!1:M,j=normalizeIcons(_);typeof namespace.hooks.addPack=="function"&&!C?namespace.hooks.addPack(r,normalizeIcons(_)):namespace.styles[r]=_objectSpread2$1(_objectSpread2$1({},namespace.styles[r]||{}),j),r==="fas"&&defineIcons("fa",_)}var _LONG_STYLE,_PREFIXES,_PREFIXES_FOR_FAMILY,styles$8=namespace.styles,shims=namespace.shims,LONG_STYLE=(_LONG_STYLE={},_defineProperty$1(_LONG_STYLE,FAMILY_CLASSIC,Object.values(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])),_defineProperty$1(_LONG_STYLE,FAMILY_SHARP,Object.values(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])),_LONG_STYLE),_defaultUsablePrefix=null,_byUnicode={},_byLigature={},_byOldName={},_byOldUnicode={},_byAlias={},PREFIXES=(_PREFIXES={},_defineProperty$1(_PREFIXES,FAMILY_CLASSIC,Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC])),_defineProperty$1(_PREFIXES,FAMILY_SHARP,Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP])),_PREFIXES);function isReserved(r){return~RESERVED_CLASSES.indexOf(r)}function getIconName(r,_){var A=_.split("-"),M=A[0],C=A.slice(1).join("-");return M===r&&C!==""&&!isReserved(C)?C:null}var build=function(){var _=function(j){return reduce(styles$8,function(R,D,O){return R[O]=reduce(D,j,{}),R},{})};_byUnicode=_(function(C,j,R){if(j[3]&&(C[j[3]]=R),j[2]){var D=j[2].filter(function(O){return typeof O=="number"});D.forEach(function(O){C[O.toString(16)]=R})}return C}),_byLigature=_(function(C,j,R){if(C[R]=R,j[2]){var D=j[2].filter(function(O){return typeof O=="string"});D.forEach(function(O){C[O]=R})}return C}),_byAlias=_(function(C,j,R){var D=j[2];return C[R]=R,D.forEach(function(O){C[O]=R}),C});var A="far"in styles$8||config.autoFetchSvg,M=reduce(shims,function(C,j){var R=j[0],D=j[1],O=j[2];return D==="far"&&!A&&(D="fas"),typeof R=="string"&&(C.names[R]={prefix:D,iconName:O}),typeof R=="number"&&(C.unicodes[R.toString(16)]={prefix:D,iconName:O}),C},{names:{},unicodes:{}});_byOldName=M.names,_byOldUnicode=M.unicodes,_defaultUsablePrefix=getCanonicalPrefix(config.styleDefault,{family:config.familyDefault})};onChange(function(r){_defaultUsablePrefix=getCanonicalPrefix(r.styleDefault,{family:config.familyDefault})});build();function byUnicode(r,_){return(_byUnicode[r]||{})[_]}function byLigature(r,_){return(_byLigature[r]||{})[_]}function byAlias(r,_){return(_byAlias[r]||{})[_]}function byOldName(r){return _byOldName[r]||{prefix:null,iconName:null}}function byOldUnicode(r){var _=_byOldUnicode[r],A=byUnicode("fas",r);return _||(A?{prefix:"fas",iconName:A}:null)||{prefix:null,iconName:null}}function getDefaultUsablePrefix(){return _defaultUsablePrefix}var emptyCanonicalIcon=function(){return{prefix:null,iconName:null,rest:[]}};function getCanonicalPrefix(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=_.family,M=A===void 0?FAMILY_CLASSIC:A,C=PREFIX_TO_STYLE[M][r],j=STYLE_TO_PREFIX[M][r]||STYLE_TO_PREFIX[M][C],R=r in namespace.styles?r:null;return j||R||null}var PREFIXES_FOR_FAMILY=(_PREFIXES_FOR_FAMILY={},_defineProperty$1(_PREFIXES_FOR_FAMILY,FAMILY_CLASSIC,Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC])),_defineProperty$1(_PREFIXES_FOR_FAMILY,FAMILY_SHARP,Object.keys(PREFIX_TO_LONG_STYLE[FAMILY_SHARP])),_PREFIXES_FOR_FAMILY);function getCanonicalIcon(r){var _,A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},M=A.skipLookups,C=M===void 0?!1:M,j=(_={},_defineProperty$1(_,FAMILY_CLASSIC,"".concat(config.cssPrefix,"-").concat(FAMILY_CLASSIC)),_defineProperty$1(_,FAMILY_SHARP,"".concat(config.cssPrefix,"-").concat(FAMILY_SHARP)),_),R=null,D=FAMILY_CLASSIC;(r.includes(j[FAMILY_CLASSIC])||r.some(function(B){return PREFIXES_FOR_FAMILY[FAMILY_CLASSIC].includes(B)}))&&(D=FAMILY_CLASSIC),(r.includes(j[FAMILY_SHARP])||r.some(function(B){return PREFIXES_FOR_FAMILY[FAMILY_SHARP].includes(B)}))&&(D=FAMILY_SHARP);var O=r.reduce(function(B,N){var H=getIconName(config.cssPrefix,N);if(styles$8[N]?(N=LONG_STYLE[D].includes(N)?LONG_STYLE_TO_PREFIX[D][N]:N,R=N,B.prefix=N):PREFIXES[D].indexOf(N)>-1?(R=N,B.prefix=getCanonicalPrefix(N,{family:D})):H?B.iconName=H:N!==config.replacementClass&&N!==j[FAMILY_CLASSIC]&&N!==j[FAMILY_SHARP]&&B.rest.push(N),!C&&B.prefix&&B.iconName){var $=R==="fa"?byOldName(B.iconName):{},Q=byAlias(B.prefix,B.iconName);$.prefix&&(R=null),B.iconName=$.iconName||Q||B.iconName,B.prefix=$.prefix||B.prefix,B.prefix==="far"&&!styles$8.far&&styles$8.fas&&!config.autoFetchSvg&&(B.prefix="fas")}return B},emptyCanonicalIcon());return(r.includes("fa-brands")||r.includes("fab"))&&(O.prefix="fab"),(r.includes("fa-duotone")||r.includes("fad"))&&(O.prefix="fad"),!O.prefix&&D===FAMILY_SHARP&&(styles$8.fass||config.autoFetchSvg)&&(O.prefix="fass",O.iconName=byAlias(O.prefix,O.iconName)||O.iconName),(O.prefix==="fa"||R==="fa")&&(O.prefix=getDefaultUsablePrefix()||"fas"),O}var Library=function(){function r(){_classCallCheck(this,r),this.definitions={}}return _createClass(r,[{key:"add",value:function(){for(var A=this,M=arguments.length,C=new Array(M),j=0;j<M;j++)C[j]=arguments[j];var R=C.reduce(this._pullDefinitions,{});Object.keys(R).forEach(function(D){A.definitions[D]=_objectSpread2$1(_objectSpread2$1({},A.definitions[D]||{}),R[D]),defineIcons(D,R[D]);var O=PREFIX_TO_LONG_STYLE[FAMILY_CLASSIC][D];O&&defineIcons(O,R[D]),build()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(A,M){var C=M.prefix&&M.iconName&&M.icon?{0:M}:M;return Object.keys(C).map(function(j){var R=C[j],D=R.prefix,O=R.iconName,B=R.icon,N=B[2];A[D]||(A[D]={}),N.length>0&&N.forEach(function(H){typeof H=="string"&&(A[D][H]=B)}),A[D][O]=B}),A}}]),r}(),_plugins=[],_hooks={},providers={},defaultProviderKeys=Object.keys(providers);function registerPlugins(r,_){var A=_.mixoutsTo;return _plugins=r,_hooks={},Object.keys(providers).forEach(function(M){defaultProviderKeys.indexOf(M)===-1&&delete providers[M]}),_plugins.forEach(function(M){var C=M.mixout?M.mixout():{};if(Object.keys(C).forEach(function(R){typeof C[R]=="function"&&(A[R]=C[R]),_typeof$1(C[R])==="object"&&Object.keys(C[R]).forEach(function(D){A[R]||(A[R]={}),A[R][D]=C[R][D]})}),M.hooks){var j=M.hooks();Object.keys(j).forEach(function(R){_hooks[R]||(_hooks[R]=[]),_hooks[R].push(j[R])})}M.provides&&M.provides(providers)}),A}function chainHooks(r,_){for(var A=arguments.length,M=new Array(A>2?A-2:0),C=2;C<A;C++)M[C-2]=arguments[C];var j=_hooks[r]||[];return j.forEach(function(R){_=R.apply(null,[_].concat(M))}),_}function callHooks(r){for(var _=arguments.length,A=new Array(_>1?_-1:0),M=1;M<_;M++)A[M-1]=arguments[M];var C=_hooks[r]||[];C.forEach(function(j){j.apply(null,A)})}function callProvided(){var r=arguments[0],_=Array.prototype.slice.call(arguments,1);return providers[r]?providers[r].apply(null,_):void 0}function findIconDefinition(r){r.prefix==="fa"&&(r.prefix="fas");var _=r.iconName,A=r.prefix||getDefaultUsablePrefix();if(_)return _=byAlias(A,_)||_,iconFromMapping(library.definitions,A,_)||iconFromMapping(namespace.styles,A,_)}var library=new Library,noAuto=function(){config.autoReplaceSvg=!1,config.observeMutations=!1,callHooks("noAuto")},dom={i2svg:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return IS_DOM?(callHooks("beforeI2svg",_),callProvided("pseudoElements2svg",_),callProvided("i2svg",_)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=_.autoReplaceSvgRoot;config.autoReplaceSvg===!1&&(config.autoReplaceSvg=!0),config.observeMutations=!0,domready(function(){autoReplace({autoReplaceSvgRoot:A}),callHooks("watch",_)})}},parse={icon:function(_){if(_===null)return null;if(_typeof$1(_)==="object"&&_.prefix&&_.iconName)return{prefix:_.prefix,iconName:byAlias(_.prefix,_.iconName)||_.iconName};if(Array.isArray(_)&&_.length===2){var A=_[1].indexOf("fa-")===0?_[1].slice(3):_[1],M=getCanonicalPrefix(_[0]);return{prefix:M,iconName:byAlias(M,A)||A}}if(typeof _=="string"&&(_.indexOf("".concat(config.cssPrefix,"-"))>-1||_.match(ICON_SELECTION_SYNTAX_PATTERN))){var C=getCanonicalIcon(_.split(" "),{skipLookups:!0});return{prefix:C.prefix||getDefaultUsablePrefix(),iconName:byAlias(C.prefix,C.iconName)||C.iconName}}if(typeof _=="string"){var j=getDefaultUsablePrefix();return{prefix:j,iconName:byAlias(j,_)||_}}}},api={noAuto,config,dom,parse,library,findIconDefinition,toHtml},autoReplace=function(){var _=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=_.autoReplaceSvgRoot,M=A===void 0?DOCUMENT:A;(Object.keys(namespace.styles).length>0||config.autoFetchSvg)&&IS_DOM&&config.autoReplaceSvg&&api.dom.i2svg({node:M})};function domVariants(r,_){return Object.defineProperty(r,"abstract",{get:_}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(M){return toHtml(M)})}}),Object.defineProperty(r,"node",{get:function(){if(IS_DOM){var M=DOCUMENT.createElement("div");return M.innerHTML=r.html,M.children}}}),r}function asIcon(r){var _=r.children,A=r.main,M=r.mask,C=r.attributes,j=r.styles,R=r.transform;if(transformIsMeaningful(R)&&A.found&&!M.found){var D=A.width,O=A.height,B={x:D/O/2,y:.5};C.style=joinStyles(_objectSpread2$1(_objectSpread2$1({},j),{},{"transform-origin":"".concat(B.x+R.x/16,"em ").concat(B.y+R.y/16,"em")}))}return[{tag:"svg",attributes:C,children:_}]}function asSymbol(r){var _=r.prefix,A=r.iconName,M=r.children,C=r.attributes,j=r.symbol,R=j===!0?"".concat(_,"-").concat(config.cssPrefix,"-").concat(A):j;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_objectSpread2$1(_objectSpread2$1({},C),{},{id:R}),children:M}]}]}function makeInlineSvgAbstract(r){var _=r.icons,A=_.main,M=_.mask,C=r.prefix,j=r.iconName,R=r.transform,D=r.symbol,O=r.title,B=r.maskId,N=r.titleId,H=r.extra,$=r.watchable,Q=$===void 0?!1:$,Y=M.found?M:A,Z=Y.width,re=Y.height,G=C==="fak",ee=[config.replacementClass,j?"".concat(config.cssPrefix,"-").concat(j):""].filter(function(X){return H.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(H.classes).join(" "),oe={children:[],attributes:_objectSpread2$1(_objectSpread2$1({},H.attributes),{},{"data-prefix":C,"data-icon":j,class:ee,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(Z," ").concat(re)})},te=G&&!~H.classes.indexOf("fa-fw")?{width:"".concat(Z/re*16*.0625,"em")}:{};Q&&(oe.attributes[DATA_FA_I2SVG]=""),O&&(oe.children.push({tag:"title",attributes:{id:oe.attributes["aria-labelledby"]||"title-".concat(N||nextUniqueId())},children:[O]}),delete oe.attributes.title);var se=_objectSpread2$1(_objectSpread2$1({},oe),{},{prefix:C,iconName:j,main:A,mask:M,maskId:B,transform:R,symbol:D,styles:_objectSpread2$1(_objectSpread2$1({},te),H.styles)}),ge=M.found&&A.found?callProvided("generateAbstractMask",se)||{children:[],attributes:{}}:callProvided("generateAbstractIcon",se)||{children:[],attributes:{}},o=ge.children,Te=ge.attributes;return se.children=o,se.attributes=Te,D?asSymbol(se):asIcon(se)}function makeLayersTextAbstract(r){var _=r.content,A=r.width,M=r.height,C=r.transform,j=r.title,R=r.extra,D=r.watchable,O=D===void 0?!1:D,B=_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({},R.attributes),j?{title:j}:{}),{},{class:R.classes.join(" ")});O&&(B[DATA_FA_I2SVG]="");var N=_objectSpread2$1({},R.styles);transformIsMeaningful(C)&&(N.transform=transformForCss({transform:C,startCentered:!0,width:A,height:M}),N["-webkit-transform"]=N.transform);var H=joinStyles(N);H.length>0&&(B.style=H);var $=[];return $.push({tag:"span",attributes:B,children:[_]}),j&&$.push({tag:"span",attributes:{class:"sr-only"},children:[j]}),$}function makeLayersCounterAbstract(r){var _=r.content,A=r.title,M=r.extra,C=_objectSpread2$1(_objectSpread2$1(_objectSpread2$1({},M.attributes),A?{title:A}:{}),{},{class:M.classes.join(" ")}),j=joinStyles(M.styles);j.length>0&&(C.style=j);var R=[];return R.push({tag:"span",attributes:C,children:[_]}),A&&R.push({tag:"span",attributes:{class:"sr-only"},children:[A]}),R}var styles$1$1=namespace.styles;function asFoundIcon(r){var _=r[0],A=r[1],M=r.slice(4),C=_slicedToArray(M,1),j=C[0],R=null;return Array.isArray(j)?R={tag:"g",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.GROUP)},children:[{tag:"path",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.SECONDARY),fill:"currentColor",d:j[0]}},{tag:"path",attributes:{class:"".concat(config.cssPrefix,"-").concat(DUOTONE_CLASSES.PRIMARY),fill:"currentColor",d:j[1]}}]}:R={tag:"path",attributes:{fill:"currentColor",d:j}},{found:!0,width:_,height:A,icon:R}}var missingIconResolutionMixin={found:!1,width:512,height:512};function maybeNotifyMissing(r,_){!PRODUCTION$1&&!config.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(_,'" is missing.'))}function findIcon(r,_){var A=_;return _==="fa"&&config.styleDefault!==null&&(_=getDefaultUsablePrefix()),new Promise(function(M,C){if(callProvided("missingIconAbstract"),A==="fa"){var j=byOldName(r)||{};r=j.iconName||r,_=j.prefix||_}if(r&&_&&styles$1$1[_]&&styles$1$1[_][r]){var R=styles$1$1[_][r];return M(asFoundIcon(R))}maybeNotifyMissing(r,_),M(_objectSpread2$1(_objectSpread2$1({},missingIconResolutionMixin),{},{icon:config.showMissingIcons&&r?callProvided("missingIconAbstract")||{}:{}}))})}var noop$1=function(){},p$1=config.measurePerformance&&PERFORMANCE&&PERFORMANCE.mark&&PERFORMANCE.measure?PERFORMANCE:{mark:noop$1,measure:noop$1},preamble='FA "6.4.2"',begin=function(_){return p$1.mark("".concat(preamble," ").concat(_," begins")),function(){return end(_)}},end=function(_){p$1.mark("".concat(preamble," ").concat(_," ends")),p$1.measure("".concat(preamble," ").concat(_),"".concat(preamble," ").concat(_," begins"),"".concat(preamble," ").concat(_," ends"))},perf={begin,end},noop$2=function(){};function isWatched(r){var _=r.getAttribute?r.getAttribute(DATA_FA_I2SVG):null;return typeof _=="string"}function hasPrefixAndIcon(r){var _=r.getAttribute?r.getAttribute(DATA_PREFIX):null,A=r.getAttribute?r.getAttribute(DATA_ICON):null;return _&&A}function hasBeenReplaced(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(config.replacementClass)}function getMutator(){if(config.autoReplaceSvg===!0)return mutators.replace;var r=mutators[config.autoReplaceSvg];return r||mutators.replace}function createElementNS(r){return DOCUMENT.createElementNS("http://www.w3.org/2000/svg",r)}function createElement(r){return DOCUMENT.createElement(r)}function convertSVG(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},A=_.ceFn,M=A===void 0?r.tag==="svg"?createElementNS:createElement:A;if(typeof r=="string")return DOCUMENT.createTextNode(r);var C=M(r.tag);Object.keys(r.attributes||[]).forEach(function(R){C.setAttribute(R,r.attributes[R])});var j=r.children||[];return j.forEach(function(R){C.appendChild(convertSVG(R,{ceFn:M}))}),C}function nodeAsComment(r){var _=" ".concat(r.outerHTML," ");return _="".concat(_,"Font Awesome fontawesome.com "),_}var mutators={replace:function(_){var A=_[0];if(A.parentNode)if(_[1].forEach(function(C){A.parentNode.insertBefore(convertSVG(C),A)}),A.getAttribute(DATA_FA_I2SVG)===null&&config.keepOriginalSource){var M=DOCUMENT.createComment(nodeAsComment(A));A.parentNode.replaceChild(M,A)}else A.remove()},nest:function(_){var A=_[0],M=_[1];if(~classArray(A).indexOf(config.replacementClass))return mutators.replace(_);var C=new RegExp("".concat(config.cssPrefix,"-.*"));if(delete M[0].attributes.id,M[0].attributes.class){var j=M[0].attributes.class.split(" ").reduce(function(D,O){return O===config.replacementClass||O.match(C)?D.toSvg.push(O):D.toNode.push(O),D},{toNode:[],toSvg:[]});M[0].attributes.class=j.toSvg.join(" "),j.toNode.length===0?A.removeAttribute("class"):A.setAttribute("class",j.toNode.join(" "))}var R=M.map(function(D){return toHtml(D)}).join(`
`);A.setAttribute(DATA_FA_I2SVG,""),A.innerHTML=R}};function performOperationSync(r){r()}function perform(r,_){var A=typeof _=="function"?_:noop$2;if(r.length===0)A();else{var M=performOperationSync;config.mutateApproach===MUTATION_APPROACH_ASYNC&&(M=WINDOW.requestAnimationFrame||performOperationSync),M(function(){var C=getMutator(),j=perf.begin("mutate");r.map(C),j(),A()})}}var disabled=!1;function disableObservation(){disabled=!0}function enableObservation(){disabled=!1}var mo=null;function observe(r){if(MUTATION_OBSERVER&&config.observeMutations){var _=r.treeCallback,A=_===void 0?noop$2:_,M=r.nodeCallback,C=M===void 0?noop$2:M,j=r.pseudoElementsCallback,R=j===void 0?noop$2:j,D=r.observeMutationsRoot,O=D===void 0?DOCUMENT:D;mo=new MUTATION_OBSERVER(function(B){if(!disabled){var N=getDefaultUsablePrefix();toArray(B).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!isWatched(H.addedNodes[0])&&(config.searchPseudoElements&&R(H.target),A(H.target)),H.type==="attributes"&&H.target.parentNode&&config.searchPseudoElements&&R(H.target.parentNode),H.type==="attributes"&&isWatched(H.target)&&~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(H.attributeName))if(H.attributeName==="class"&&hasPrefixAndIcon(H.target)){var $=getCanonicalIcon(classArray(H.target)),Q=$.prefix,Y=$.iconName;H.target.setAttribute(DATA_PREFIX,Q||N),Y&&H.target.setAttribute(DATA_ICON,Y)}else hasBeenReplaced(H.target)&&C(H.target)})}}),IS_DOM&&mo.observe(O,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function disconnect(){mo&&mo.disconnect()}function styleParser(r){var _=r.getAttribute("style"),A=[];return _&&(A=_.split(";").reduce(function(M,C){var j=C.split(":"),R=j[0],D=j.slice(1);return R&&D.length>0&&(M[R]=D.join(":").trim()),M},{})),A}function classParser(r){var _=r.getAttribute("data-prefix"),A=r.getAttribute("data-icon"),M=r.innerText!==void 0?r.innerText.trim():"",C=getCanonicalIcon(classArray(r));return C.prefix||(C.prefix=getDefaultUsablePrefix()),_&&A&&(C.prefix=_,C.iconName=A),C.iconName&&C.prefix||(C.prefix&&M.length>0&&(C.iconName=byLigature(C.prefix,r.innerText)||byUnicode(C.prefix,toHex(r.innerText))),!C.iconName&&config.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(C.iconName=r.firstChild.data)),C}function attributesParser(r){var _=toArray(r.attributes).reduce(function(C,j){return C.name!=="class"&&C.name!=="style"&&(C[j.name]=j.value),C},{}),A=r.getAttribute("title"),M=r.getAttribute("data-fa-title-id");return config.autoA11y&&(A?_["aria-labelledby"]="".concat(config.replacementClass,"-title-").concat(M||nextUniqueId()):(_["aria-hidden"]="true",_.focusable="false")),_}function blankMeta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:meaninglessTransform,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function parseMeta(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},A=classParser(r),M=A.iconName,C=A.prefix,j=A.rest,R=attributesParser(r),D=chainHooks("parseNodeAttributes",{},r),O=_.styleParser?styleParser(r):[];return _objectSpread2$1({iconName:M,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:C,transform:meaninglessTransform,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:j,styles:O,attributes:R}},D)}var styles$2$1=namespace.styles;function generateMutation(r){var _=config.autoReplaceSvg==="nest"?parseMeta(r,{styleParser:!1}):parseMeta(r);return~_.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)?callProvided("generateLayersText",r,_):callProvided("generateSvgReplacementMutation",r,_)}var knownPrefixes=new Set;FAMILIES.map(function(r){knownPrefixes.add("fa-".concat(r))});Object.keys(PREFIX_TO_STYLE[FAMILY_CLASSIC]).map(knownPrefixes.add.bind(knownPrefixes));Object.keys(PREFIX_TO_STYLE[FAMILY_SHARP]).map(knownPrefixes.add.bind(knownPrefixes));knownPrefixes=_toConsumableArray$1(knownPrefixes);function onTree(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!IS_DOM)return Promise.resolve();var A=DOCUMENT.documentElement.classList,M=function(H){return A.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS,"-").concat(H))},C=function(H){return A.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS,"-").concat(H))},j=config.autoFetchSvg?knownPrefixes:FAMILIES.map(function(N){return"fa-".concat(N)}).concat(Object.keys(styles$2$1));j.includes("fa")||j.push("fa");var R=[".".concat(LAYERS_TEXT_CLASSNAME,":not([").concat(DATA_FA_I2SVG,"])")].concat(j.map(function(N){return".".concat(N,":not([").concat(DATA_FA_I2SVG,"])")})).join(", ");if(R.length===0)return Promise.resolve();var D=[];try{D=toArray(r.querySelectorAll(R))}catch{}if(D.length>0)M("pending"),C("complete");else return Promise.resolve();var O=perf.begin("onTree"),B=D.reduce(function(N,H){try{var $=generateMutation(H);$&&N.push($)}catch(Q){PRODUCTION$1||Q.name==="MissingIcon"&&console.error(Q)}return N},[]);return new Promise(function(N,H){Promise.all(B).then(function($){perform($,function(){M("active"),M("complete"),C("pending"),typeof _=="function"&&_(),O(),N()})}).catch(function($){O(),H($)})})}function onNode(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;generateMutation(r).then(function(A){A&&perform([A],_)})}function resolveIcons(r){return function(_){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},M=(_||{}).icon?_:findIconDefinition(_||{}),C=A.mask;return C&&(C=(C||{}).icon?C:findIconDefinition(C||{})),r(M,_objectSpread2$1(_objectSpread2$1({},A),{},{mask:C}))}}var render=function(_){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},M=A.transform,C=M===void 0?meaninglessTransform:M,j=A.symbol,R=j===void 0?!1:j,D=A.mask,O=D===void 0?null:D,B=A.maskId,N=B===void 0?null:B,H=A.title,$=H===void 0?null:H,Q=A.titleId,Y=Q===void 0?null:Q,Z=A.classes,re=Z===void 0?[]:Z,G=A.attributes,ee=G===void 0?{}:G,oe=A.styles,te=oe===void 0?{}:oe;if(_){var se=_.prefix,ge=_.iconName,o=_.icon;return domVariants(_objectSpread2$1({type:"icon"},_),function(){return callHooks("beforeDOMElementCreation",{iconDefinition:_,params:A}),config.autoA11y&&($?ee["aria-labelledby"]="".concat(config.replacementClass,"-title-").concat(Y||nextUniqueId()):(ee["aria-hidden"]="true",ee.focusable="false")),makeInlineSvgAbstract({icons:{main:asFoundIcon(o),mask:O?asFoundIcon(O.icon):{found:!1,width:null,height:null,icon:{}}},prefix:se,iconName:ge,transform:_objectSpread2$1(_objectSpread2$1({},meaninglessTransform),C),symbol:R,title:$,maskId:N,titleId:Y,extra:{attributes:ee,styles:te,classes:re}})})}},ReplaceElements={mixout:function(){return{icon:resolveIcons(render)}},hooks:function(){return{mutationObserverCallbacks:function(A){return A.treeCallback=onTree,A.nodeCallback=onNode,A}}},provides:function(_){_.i2svg=function(A){var M=A.node,C=M===void 0?DOCUMENT:M,j=A.callback,R=j===void 0?function(){}:j;return onTree(C,R)},_.generateSvgReplacementMutation=function(A,M){var C=M.iconName,j=M.title,R=M.titleId,D=M.prefix,O=M.transform,B=M.symbol,N=M.mask,H=M.maskId,$=M.extra;return new Promise(function(Q,Y){Promise.all([findIcon(C,D),N.iconName?findIcon(N.iconName,N.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(Z){var re=_slicedToArray(Z,2),G=re[0],ee=re[1];Q([A,makeInlineSvgAbstract({icons:{main:G,mask:ee},prefix:D,iconName:C,transform:O,symbol:B,maskId:H,title:j,titleId:R,extra:$,watchable:!0})])}).catch(Y)})},_.generateAbstractIcon=function(A){var M=A.children,C=A.attributes,j=A.main,R=A.transform,D=A.styles,O=joinStyles(D);O.length>0&&(C.style=O);var B;return transformIsMeaningful(R)&&(B=callProvided("generateAbstractTransformGrouping",{main:j,transform:R,containerWidth:j.width,iconWidth:j.width})),M.push(B||j.icon),{children:M,attributes:C}}}},Layers={mixout:function(){return{layer:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=M.classes,j=C===void 0?[]:C;return domVariants({type:"layer"},function(){callHooks("beforeDOMElementCreation",{assembler:A,params:M});var R=[];return A(function(D){Array.isArray(D)?D.map(function(O){R=R.concat(O.abstract)}):R=R.concat(D.abstract)}),[{tag:"span",attributes:{class:["".concat(config.cssPrefix,"-layers")].concat(_toConsumableArray$1(j)).join(" ")},children:R}]})}}}},LayersCounter={mixout:function(){return{counter:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=M.title,j=C===void 0?null:C,R=M.classes,D=R===void 0?[]:R,O=M.attributes,B=O===void 0?{}:O,N=M.styles,H=N===void 0?{}:N;return domVariants({type:"counter",content:A},function(){return callHooks("beforeDOMElementCreation",{content:A,params:M}),makeLayersCounterAbstract({content:A.toString(),title:j,extra:{attributes:B,styles:H,classes:["".concat(config.cssPrefix,"-layers-counter")].concat(_toConsumableArray$1(D))}})})}}}},LayersText={mixout:function(){return{text:function(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=M.transform,j=C===void 0?meaninglessTransform:C,R=M.title,D=R===void 0?null:R,O=M.classes,B=O===void 0?[]:O,N=M.attributes,H=N===void 0?{}:N,$=M.styles,Q=$===void 0?{}:$;return domVariants({type:"text",content:A},function(){return callHooks("beforeDOMElementCreation",{content:A,params:M}),makeLayersTextAbstract({content:A,transform:_objectSpread2$1(_objectSpread2$1({},meaninglessTransform),j),title:D,extra:{attributes:H,styles:Q,classes:["".concat(config.cssPrefix,"-layers-text")].concat(_toConsumableArray$1(B))}})})}}},provides:function(_){_.generateLayersText=function(A,M){var C=M.title,j=M.transform,R=M.extra,D=null,O=null;if(IS_IE){var B=parseInt(getComputedStyle(A).fontSize,10),N=A.getBoundingClientRect();D=N.width/B,O=N.height/B}return config.autoA11y&&!C&&(R.attributes["aria-hidden"]="true"),Promise.resolve([A,makeLayersTextAbstract({content:A.innerHTML,width:D,height:O,transform:j,title:C,extra:R,watchable:!0})])}}},CLEAN_CONTENT_PATTERN=new RegExp('"',"ug"),SECONDARY_UNICODE_RANGE=[1105920,1112319];function hexValueFromContent(r){var _=r.replace(CLEAN_CONTENT_PATTERN,""),A=codePointAt(_,0),M=A>=SECONDARY_UNICODE_RANGE[0]&&A<=SECONDARY_UNICODE_RANGE[1],C=_.length===2?_[0]===_[1]:!1;return{value:toHex(C?_[0]:_),isSecondary:M||C}}function replaceForPosition(r,_){var A="".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(_.replace(":","-"));return new Promise(function(M,C){if(r.getAttribute(A)!==null)return M();var j=toArray(r.children),R=j.filter(function(o){return o.getAttribute(DATA_FA_PSEUDO_ELEMENT)===_})[0],D=WINDOW.getComputedStyle(r,_),O=D.getPropertyValue("font-family").match(FONT_FAMILY_PATTERN),B=D.getPropertyValue("font-weight"),N=D.getPropertyValue("content");if(R&&!O)return r.removeChild(R),M();if(O&&N!=="none"&&N!==""){var H=D.getPropertyValue("content"),$=~["Sharp"].indexOf(O[2])?FAMILY_SHARP:FAMILY_CLASSIC,Q=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(O[2])?STYLE_TO_PREFIX[$][O[2].toLowerCase()]:FONT_WEIGHT_TO_PREFIX[$][B],Y=hexValueFromContent(H),Z=Y.value,re=Y.isSecondary,G=O[0].startsWith("FontAwesome"),ee=byUnicode(Q,Z),oe=ee;if(G){var te=byOldUnicode(Z);te.iconName&&te.prefix&&(ee=te.iconName,Q=te.prefix)}if(ee&&!re&&(!R||R.getAttribute(DATA_PREFIX)!==Q||R.getAttribute(DATA_ICON)!==oe)){r.setAttribute(A,oe),R&&r.removeChild(R);var se=blankMeta(),ge=se.extra;ge.attributes[DATA_FA_PSEUDO_ELEMENT]=_,findIcon(ee,Q).then(function(o){var Te=makeInlineSvgAbstract(_objectSpread2$1(_objectSpread2$1({},se),{},{icons:{main:o,mask:emptyCanonicalIcon()},prefix:Q,iconName:oe,extra:ge,watchable:!0})),X=DOCUMENT.createElementNS("http://www.w3.org/2000/svg","svg");_==="::before"?r.insertBefore(X,r.firstChild):r.appendChild(X),X.outerHTML=Te.map(function(_e){return toHtml(_e)}).join(`
`),r.removeAttribute(A),M()}).catch(C)}else M()}else M()})}function replace(r){return Promise.all([replaceForPosition(r,"::before"),replaceForPosition(r,"::after")])}function processable(r){return r.parentNode!==document.head&&!~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(r.tagName.toUpperCase())&&!r.getAttribute(DATA_FA_PSEUDO_ELEMENT)&&(!r.parentNode||r.parentNode.tagName!=="svg")}function searchPseudoElements(r){if(IS_DOM)return new Promise(function(_,A){var M=toArray(r.querySelectorAll("*")).filter(processable).map(replace),C=perf.begin("searchPseudoElements");disableObservation(),Promise.all(M).then(function(){C(),enableObservation(),_()}).catch(function(){C(),enableObservation(),A()})})}var PseudoElements={hooks:function(){return{mutationObserverCallbacks:function(A){return A.pseudoElementsCallback=searchPseudoElements,A}}},provides:function(_){_.pseudoElements2svg=function(A){var M=A.node,C=M===void 0?DOCUMENT:M;config.searchPseudoElements&&searchPseudoElements(C)}}},_unwatched=!1,MutationObserver$1={mixout:function(){return{dom:{unwatch:function(){disableObservation(),_unwatched=!0}}}},hooks:function(){return{bootstrap:function(){observe(chainHooks("mutationObserverCallbacks",{}))},noAuto:function(){disconnect()},watch:function(A){var M=A.observeMutationsRoot;_unwatched?enableObservation():observe(chainHooks("mutationObserverCallbacks",{observeMutationsRoot:M}))}}}},parseTransformString=function(_){var A={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return _.toLowerCase().split(" ").reduce(function(M,C){var j=C.toLowerCase().split("-"),R=j[0],D=j.slice(1).join("-");if(R&&D==="h")return M.flipX=!0,M;if(R&&D==="v")return M.flipY=!0,M;if(D=parseFloat(D),isNaN(D))return M;switch(R){case"grow":M.size=M.size+D;break;case"shrink":M.size=M.size-D;break;case"left":M.x=M.x-D;break;case"right":M.x=M.x+D;break;case"up":M.y=M.y-D;break;case"down":M.y=M.y+D;break;case"rotate":M.rotate=M.rotate+D;break}return M},A)},PowerTransforms={mixout:function(){return{parse:{transform:function(A){return parseTransformString(A)}}}},hooks:function(){return{parseNodeAttributes:function(A,M){var C=M.getAttribute("data-fa-transform");return C&&(A.transform=parseTransformString(C)),A}}},provides:function(_){_.generateAbstractTransformGrouping=function(A){var M=A.main,C=A.transform,j=A.containerWidth,R=A.iconWidth,D={transform:"translate(".concat(j/2," 256)")},O="translate(".concat(C.x*32,", ").concat(C.y*32,") "),B="scale(".concat(C.size/16*(C.flipX?-1:1),", ").concat(C.size/16*(C.flipY?-1:1),") "),N="rotate(".concat(C.rotate," 0 0)"),H={transform:"".concat(O," ").concat(B," ").concat(N)},$={transform:"translate(".concat(R/2*-1," -256)")},Q={outer:D,inner:H,path:$};return{tag:"g",attributes:_objectSpread2$1({},Q.outer),children:[{tag:"g",attributes:_objectSpread2$1({},Q.inner),children:[{tag:M.icon.tag,children:M.icon.children,attributes:_objectSpread2$1(_objectSpread2$1({},M.icon.attributes),Q.path)}]}]}}}},ALL_SPACE={x:0,y:0,width:"100%",height:"100%"};function fillBlack(r){var _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r.attributes&&(r.attributes.fill||_)&&(r.attributes.fill="black"),r}function deGroup(r){return r.tag==="g"?r.children:[r]}var Masks={hooks:function(){return{parseNodeAttributes:function(A,M){var C=M.getAttribute("data-fa-mask"),j=C?getCanonicalIcon(C.split(" ").map(function(R){return R.trim()})):emptyCanonicalIcon();return j.prefix||(j.prefix=getDefaultUsablePrefix()),A.mask=j,A.maskId=M.getAttribute("data-fa-mask-id"),A}}},provides:function(_){_.generateAbstractMask=function(A){var M=A.children,C=A.attributes,j=A.main,R=A.mask,D=A.maskId,O=A.transform,B=j.width,N=j.icon,H=R.width,$=R.icon,Q=transformForSvg({transform:O,containerWidth:H,iconWidth:B}),Y={tag:"rect",attributes:_objectSpread2$1(_objectSpread2$1({},ALL_SPACE),{},{fill:"white"})},Z=N.children?{children:N.children.map(fillBlack)}:{},re={tag:"g",attributes:_objectSpread2$1({},Q.inner),children:[fillBlack(_objectSpread2$1({tag:N.tag,attributes:_objectSpread2$1(_objectSpread2$1({},N.attributes),Q.path)},Z))]},G={tag:"g",attributes:_objectSpread2$1({},Q.outer),children:[re]},ee="mask-".concat(D||nextUniqueId()),oe="clip-".concat(D||nextUniqueId()),te={tag:"mask",attributes:_objectSpread2$1(_objectSpread2$1({},ALL_SPACE),{},{id:ee,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[Y,G]},se={tag:"defs",children:[{tag:"clipPath",attributes:{id:oe},children:deGroup($)},te]};return M.push(se,{tag:"rect",attributes:_objectSpread2$1({fill:"currentColor","clip-path":"url(#".concat(oe,")"),mask:"url(#".concat(ee,")")},ALL_SPACE)}),{children:M,attributes:C}}}},MissingIconIndicator={provides:function(_){var A=!1;WINDOW.matchMedia&&(A=WINDOW.matchMedia("(prefers-reduced-motion: reduce)").matches),_.missingIconAbstract=function(){var M=[],C={fill:"currentColor"},j={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};M.push({tag:"path",attributes:_objectSpread2$1(_objectSpread2$1({},C),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var R=_objectSpread2$1(_objectSpread2$1({},j),{},{attributeName:"opacity"}),D={tag:"circle",attributes:_objectSpread2$1(_objectSpread2$1({},C),{},{cx:"256",cy:"364",r:"28"}),children:[]};return A||D.children.push({tag:"animate",attributes:_objectSpread2$1(_objectSpread2$1({},j),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_objectSpread2$1(_objectSpread2$1({},R),{},{values:"1;0;1;1;0;1;"})}),M.push(D),M.push({tag:"path",attributes:_objectSpread2$1(_objectSpread2$1({},C),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:A?[]:[{tag:"animate",attributes:_objectSpread2$1(_objectSpread2$1({},R),{},{values:"1;0;0;0;0;1;"})}]}),A||M.push({tag:"path",attributes:_objectSpread2$1(_objectSpread2$1({},C),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_objectSpread2$1(_objectSpread2$1({},R),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:M}}}},SvgSymbols={hooks:function(){return{parseNodeAttributes:function(A,M){var C=M.getAttribute("data-fa-symbol"),j=C===null?!1:C===""?!0:C;return A.symbol=j,A}}}},plugins=[InjectCSS,ReplaceElements,Layers,LayersCounter,LayersText,PseudoElements,MutationObserver$1,PowerTransforms,Masks,MissingIconIndicator,SvgSymbols];registerPlugins(plugins,{mixoutsTo:api});api.noAuto;api.config;api.library;api.dom;var parse$1=api.parse;api.findIconDefinition;api.toHtml;var icon=api.icon;api.layer;api.text;api.counter;var propTypes={exports:{}},ReactPropTypesSecret$1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret$1,ReactPropTypesSecret=ReactPropTypesSecret_1;function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;var factoryWithThrowingShims=function(){function r(M,C,j,R,D,O){if(O!==ReactPropTypesSecret){var B=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw B.name="Invariant Violation",B}}r.isRequired=r;function _(){return r}var A={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:_,element:r,elementType:r,instanceOf:_,node:r,objectOf:_,oneOf:_,oneOfType:_,shape:_,exact:_,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return A.PropTypes=A,A};propTypes.exports=factoryWithThrowingShims();var propTypesExports=propTypes.exports;const PropTypes=getDefaultExportFromCjs(propTypesExports);function ownKeys(r,_){var A=Object.keys(r);if(Object.getOwnPropertySymbols){var M=Object.getOwnPropertySymbols(r);_&&(M=M.filter(function(C){return Object.getOwnPropertyDescriptor(r,C).enumerable})),A.push.apply(A,M)}return A}function _objectSpread2(r){for(var _=1;_<arguments.length;_++){var A=arguments[_]!=null?arguments[_]:{};_%2?ownKeys(Object(A),!0).forEach(function(M){_defineProperty(r,M,A[M])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(A)):ownKeys(Object(A)).forEach(function(M){Object.defineProperty(r,M,Object.getOwnPropertyDescriptor(A,M))})}return r}function _typeof(r){"@babel/helpers - typeof";return _typeof=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(_){return typeof _}:function(_){return _&&typeof Symbol=="function"&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},_typeof(r)}function _defineProperty(r,_,A){return _ in r?Object.defineProperty(r,_,{value:A,enumerable:!0,configurable:!0,writable:!0}):r[_]=A,r}function _objectWithoutPropertiesLoose$1(r,_){if(r==null)return{};var A={},M=Object.keys(r),C,j;for(j=0;j<M.length;j++)C=M[j],!(_.indexOf(C)>=0)&&(A[C]=r[C]);return A}function _objectWithoutProperties(r,_){if(r==null)return{};var A=_objectWithoutPropertiesLoose$1(r,_),M,C;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(r);for(C=0;C<j.length;C++)M=j[C],!(_.indexOf(M)>=0)&&Object.prototype.propertyIsEnumerable.call(r,M)&&(A[M]=r[M])}return A}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _iterableToArray(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function _unsupportedIterableToArray(r,_){if(r){if(typeof r=="string")return _arrayLikeToArray(r,_);var A=Object.prototype.toString.call(r).slice(8,-1);if(A==="Object"&&r.constructor&&(A=r.constructor.name),A==="Map"||A==="Set")return Array.from(r);if(A==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A))return _arrayLikeToArray(r,_)}}function _arrayLikeToArray(r,_){(_==null||_>r.length)&&(_=r.length);for(var A=0,M=new Array(_);A<_;A++)M[A]=r[A];return M}function _nonIterableSpread(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function classList(r){var _,A=r.beat,M=r.fade,C=r.beatFade,j=r.bounce,R=r.shake,D=r.flash,O=r.spin,B=r.spinPulse,N=r.spinReverse,H=r.pulse,$=r.fixedWidth,Q=r.inverse,Y=r.border,Z=r.listItem,re=r.flip,G=r.size,ee=r.rotation,oe=r.pull,te=(_={"fa-beat":A,"fa-fade":M,"fa-beat-fade":C,"fa-bounce":j,"fa-shake":R,"fa-flash":D,"fa-spin":O,"fa-spin-reverse":N,"fa-spin-pulse":B,"fa-pulse":H,"fa-fw":$,"fa-inverse":Q,"fa-border":Y,"fa-li":Z,"fa-flip":re===!0,"fa-flip-horizontal":re==="horizontal"||re==="both","fa-flip-vertical":re==="vertical"||re==="both"},_defineProperty(_,"fa-".concat(G),typeof G<"u"&&G!==null),_defineProperty(_,"fa-rotate-".concat(ee),typeof ee<"u"&&ee!==null&&ee!==0),_defineProperty(_,"fa-pull-".concat(oe),typeof oe<"u"&&oe!==null),_defineProperty(_,"fa-swap-opacity",r.swapOpacity),_);return Object.keys(te).map(function(se){return te[se]?se:null}).filter(function(se){return se})}function _isNumerical(r){return r=r-0,r===r}function camelize(r){return _isNumerical(r)?r:(r=r.replace(/[\-_\s]+(.)?/g,function(_,A){return A?A.toUpperCase():""}),r.substr(0,1).toLowerCase()+r.substr(1))}var _excluded$1=["style"];function capitalize(r){return r.charAt(0).toUpperCase()+r.slice(1)}function styleToObject(r){return r.split(";").map(function(_){return _.trim()}).filter(function(_){return _}).reduce(function(_,A){var M=A.indexOf(":"),C=camelize(A.slice(0,M)),j=A.slice(M+1).trim();return C.startsWith("webkit")?_[capitalize(C)]=j:_[C]=j,_},{})}function convert(r,_){var A=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof _=="string")return _;var M=(_.children||[]).map(function(O){return convert(r,O)}),C=Object.keys(_.attributes||{}).reduce(function(O,B){var N=_.attributes[B];switch(B){case"class":O.attrs.className=N,delete _.attributes.class;break;case"style":O.attrs.style=styleToObject(N);break;default:B.indexOf("aria-")===0||B.indexOf("data-")===0?O.attrs[B.toLowerCase()]=N:O.attrs[camelize(B)]=N}return O},{attrs:{}}),j=A.style,R=j===void 0?{}:j,D=_objectWithoutProperties(A,_excluded$1);return C.attrs.style=_objectSpread2(_objectSpread2({},C.attrs.style),R),r.apply(void 0,[_.tag,_objectSpread2(_objectSpread2({},C.attrs),D)].concat(_toConsumableArray(M)))}var PRODUCTION=!1;try{PRODUCTION=!0}catch{}function log(){if(!PRODUCTION&&console&&typeof console.error=="function"){var r;(r=console).error.apply(r,arguments)}}function normalizeIconArgs(r){if(r&&_typeof(r)==="object"&&r.prefix&&r.iconName&&r.icon)return r;if(parse$1.icon)return parse$1.icon(r);if(r===null)return null;if(r&&_typeof(r)==="object"&&r.prefix&&r.iconName)return r;if(Array.isArray(r)&&r.length===2)return{prefix:r[0],iconName:r[1]};if(typeof r=="string")return{prefix:"fas",iconName:r}}function objectWithKey(r,_){return Array.isArray(_)&&_.length>0||!Array.isArray(_)&&_?_defineProperty({},r,_):{}}var FontAwesomeIcon=React.forwardRef(function(r,_){var A=r.icon,M=r.mask,C=r.symbol,j=r.className,R=r.title,D=r.titleId,O=r.maskId,B=normalizeIconArgs(A),N=objectWithKey("classes",[].concat(_toConsumableArray(classList(r)),_toConsumableArray(j.split(" ")))),H=objectWithKey("transform",typeof r.transform=="string"?parse$1.transform(r.transform):r.transform),$=objectWithKey("mask",normalizeIconArgs(M)),Q=icon(B,_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},N),H),$),{},{symbol:C,title:R,titleId:D,maskId:O}));if(!Q)return log("Could not find icon",B),null;var Y=Q.abstract,Z={ref:_};return Object.keys(r).forEach(function(re){FontAwesomeIcon.defaultProps.hasOwnProperty(re)||(Z[re]=r[re])}),convertCurry(Y[0],Z)});FontAwesomeIcon.displayName="FontAwesomeIcon";FontAwesomeIcon.propTypes={beat:PropTypes.bool,border:PropTypes.bool,beatFade:PropTypes.bool,bounce:PropTypes.bool,className:PropTypes.string,fade:PropTypes.bool,flash:PropTypes.bool,mask:PropTypes.oneOfType([PropTypes.object,PropTypes.array,PropTypes.string]),maskId:PropTypes.string,fixedWidth:PropTypes.bool,inverse:PropTypes.bool,flip:PropTypes.oneOf([!0,!1,"horizontal","vertical","both"]),icon:PropTypes.oneOfType([PropTypes.object,PropTypes.array,PropTypes.string]),listItem:PropTypes.bool,pull:PropTypes.oneOf(["right","left"]),pulse:PropTypes.bool,rotation:PropTypes.oneOf([0,90,180,270]),shake:PropTypes.bool,size:PropTypes.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:PropTypes.bool,spinPulse:PropTypes.bool,spinReverse:PropTypes.bool,symbol:PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),title:PropTypes.string,titleId:PropTypes.string,transform:PropTypes.oneOfType([PropTypes.string,PropTypes.object]),swapOpacity:PropTypes.bool};FontAwesomeIcon.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var convertCurry=convert.bind(null,React.createElement),faBars={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},faArrowLeft={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};const styles$7="",Header=r=>{const _=reactResponsiveExports.useMediaQuery({query:"(max-width: 767px)"}),[A,M]=reactExports.useState(!1),C=()=>{M(!0)},j=D=>()=>{M(!1),D&&R(D)},R=D=>{var O;(O=document.getElementById(D))==null||O.scrollIntoView({behavior:"smooth"})};return jsxRuntimeExports.jsxs("header",{children:[_&&jsxRuntimeExports.jsx("div",{className:"mobile-header",children:jsxRuntimeExports.jsx(Button,{type:"primary",onClick:C,className:"custom-button",icon:jsxRuntimeExports.jsx(FontAwesomeIcon,{icon:faBars})})}),jsxRuntimeExports.jsxs("div",{className:"logo",children:["🍊",jsxRuntimeExports.jsx(Switch,{checkedChildren:"Dark",unCheckedChildren:"Light",className:"switch",defaultChecked:!0,onChange:r.onChange})]}),_?jsxRuntimeExports.jsx(Drawer,{placement:"left",closable:!0,onClose:j(""),open:A,width:"55%",closeIcon:jsxRuntimeExports.jsx(FontAwesomeIcon,{icon:faArrowLeft}),children:jsxRuntimeExports.jsxs(Menu,{mode:"vertical",children:[jsxRuntimeExports.jsx(Menu.Item,{onClick:j("aboutme"),children:"About Me"},"about"),jsxRuntimeExports.jsx(Menu.Item,{onClick:j("skills"),children:"Skills"},"skills"),jsxRuntimeExports.jsx(Menu.Item,{onClick:j("experience"),children:"Experience"},"experience"),jsxRuntimeExports.jsx(Menu.Item,{onClick:j("projects"),children:"Projects"},"projects")]})}):jsxRuntimeExports.jsxs(Menu,{mode:"horizontal",className:"horizontal-menu",children:[jsxRuntimeExports.jsx(Menu.Item,{onClick:()=>R("aboutme"),children:"About Me"},"about"),jsxRuntimeExports.jsx(Menu.Item,{onClick:()=>R("skills"),children:"Skills"},"skills"),jsxRuntimeExports.jsx(Menu.Item,{onClick:()=>R("experience"),children:"Experience"},"experience"),jsxRuntimeExports.jsx(Menu.Item,{onClick:()=>R("projects"),children:"Projects"},"projects")]})]})},styles$6="",{Paragraph:Paragraph$3}=Typography,Footer=()=>{const[r,_]=notification.useNotification(),A=D=>{r.info({message:"Well, for WeChat wise...",description:"Please reach out to me on Instagram or LinkedIn first! Thank you :)",placement:D,icon:jsxRuntimeExports.jsx(WechatOutlined,{})})},{useToken:M}=theme,{token:C}=M(),j={color:C.colorPrimary},R={color:C.colorText};return jsxRuntimeExports.jsxs("footer",{className:"footer",id:"footer",children:[jsxRuntimeExports.jsxs("div",{className:"upper-section",children:[jsxRuntimeExports.jsx("div",{className:"contact-info",children:jsxRuntimeExports.jsxs("a",{style:R,className:"contact-item",href:"mailto:raoyuchenom@gmail.com",children:[jsxRuntimeExports.jsx(MailOutlined,{style:j}),jsxRuntimeExports.jsx(Paragraph$3,{className:"contact-text",style:{marginTop:8},children:"raoyuchenom@gmail.com"})]})}),jsxRuntimeExports.jsx(Divider,{className:"footer-divider",type:"vertical",style:{height:"5em"}}),jsxRuntimeExports.jsxs("div",{className:"social-icons",children:[jsxRuntimeExports.jsx("a",{href:"https://github.com/ycrao573",target:"_blank",rel:"noopener noreferrer",children:jsxRuntimeExports.jsx(GithubOutlined,{style:j})}),jsxRuntimeExports.jsx("a",{href:"https://www.instagram.com/ycrao573/",target:"_blank",rel:"noopener noreferrer",children:jsxRuntimeExports.jsx(InstagramOutlined,{style:j})}),jsxRuntimeExports.jsx("a",{href:"https://www.linkedin.com/in/yuchen-rao-a249b6180/",target:"_blank",rel:"noopener noreferrer",children:jsxRuntimeExports.jsx(LinkedinOutlined,{style:j})}),_,jsxRuntimeExports.jsx(WechatOutlined,{style:j,onClick:()=>{A("topRight")}})]})]}),jsxRuntimeExports.jsx("div",{className:"copyright",children:jsxRuntimeExports.jsx(Paragraph$3,{children:"© RYC, 2025"})})]})},styles$5="";function i(r,_,A,M){return new(A||(A=Promise))(function(C,j){function R(B){try{O(M.next(B))}catch(N){j(N)}}function D(B){try{O(M.throw(B))}catch(N){j(N)}}function O(B){var N;B.done?C(B.value):(N=B.value,N instanceof A?N:new A(function(H){H(N)})).then(R,D)}O((M=M.apply(r,_||[])).next())})}function u(r,_){var A,M,C,j,R={label:0,sent:function(){if(1&C[0])throw C[1];return C[1]},trys:[],ops:[]};return j={next:D(0),throw:D(1),return:D(2)},typeof Symbol=="function"&&(j[Symbol.iterator]=function(){return this}),j;function D(O){return function(B){return function(N){if(A)throw new TypeError("Generator is already executing.");for(;R;)try{if(A=1,M&&(C=2&N[0]?M.return:N[0]?M.throw||((C=M.return)&&C.call(M),0):M.next)&&!(C=C.call(M,N[1])).done)return C;switch(M=0,C&&(N=[2&N[0],C.value]),N[0]){case 0:case 1:C=N;break;case 4:return R.label++,{value:N[1],done:!1};case 5:R.label++,M=N[1],N=[0];continue;case 7:N=R.ops.pop(),R.trys.pop();continue;default:if(C=R.trys,!((C=C.length>0&&C[C.length-1])||N[0]!==6&&N[0]!==2)){R=0;continue}if(N[0]===3&&(!C||N[1]>C[0]&&N[1]<C[3])){R.label=N[1];break}if(N[0]===6&&R.label<C[1]){R.label=C[1],C=N;break}if(C&&R.label<C[2]){R.label=C[2],R.ops.push(N);break}C[2]&&R.ops.pop(),R.trys.pop();continue}N=_.call(r,R)}catch(H){N=[6,H],M=0}finally{A=C=0}if(5&N[0])throw N[1];return{value:N[0]?N[1]:void 0,done:!0}}([O,B])}}}function c(r){var _=typeof Symbol=="function"&&Symbol.iterator,A=_&&r[_],M=0;if(A)return A.call(r);if(r&&typeof r.length=="number")return{next:function(){return r&&M>=r.length&&(r=void 0),{value:r&&r[M++],done:!r}}};throw new TypeError(_?"Object is not iterable.":"Symbol.iterator is not defined.")}function l(r,_){var A=typeof Symbol=="function"&&r[Symbol.iterator];if(!A)return r;var M,C,j=A.call(r),R=[];try{for(;(_===void 0||_-- >0)&&!(M=j.next()).done;)R.push(M.value)}catch(D){C={error:D}}finally{try{M&&!M.done&&(A=j.return)&&A.call(j)}finally{if(C)throw C.error}}return R}function s(r,_,A){if(A||arguments.length===2)for(var M,C=0,j=_.length;C<j;C++)!M&&C in _||(M||(M=Array.prototype.slice.call(_,0,C)),M[C]=_[C]);return r.concat(M||Array.prototype.slice.call(_))}function f(r,_,A,M,C){for(var j=[],R=5;R<arguments.length;R++)j[R-5]=arguments[R];return i(this,void 0,void 0,function(){var D,O,B,N,H,$;return u(this,function(Q){switch(Q.label){case 0:Q.trys.push([0,12,13,14]),D=c(j),O=D.next(),Q.label=1;case 1:if(O.done)return[3,11];switch(B=O.value,typeof B){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,d(r,_,B,A,M,C)];case 3:return Q.sent(),[3,10];case 4:return[4,p(B)];case 5:return Q.sent(),[3,10];case 6:return[4,B.apply(void 0,s([r,_,A,M,C],l(j),!1))];case 7:return Q.sent(),[3,10];case 8:return[4,B];case 9:Q.sent(),Q.label=10;case 10:return O=D.next(),[3,1];case 11:return[3,14];case 12:return N=Q.sent(),H={error:N},[3,14];case 13:try{O&&!O.done&&($=D.return)&&$.call(D)}finally{if(H)throw H.error}return[7];case 14:return[2]}})})}function d(r,_,A,M,C,j){return i(this,void 0,void 0,function(){var R,D;return u(this,function(O){switch(O.label){case 0:return R=r.textContent||"",D=function(B,N){var H=l(N).slice(0);return s(s([],l(B),!1),[NaN],!1).findIndex(function($,Q){return H[Q]!==$})}(R,A),[4,h(r,s(s([],l(v(R,_,D)),!1),l(y(A,_,D)),!1),M,C,j)];case 1:return O.sent(),[2]}})})}function p(r){return i(this,void 0,void 0,function(){return u(this,function(_){switch(_.label){case 0:return[4,new Promise(function(A){return setTimeout(A,r)})];case 1:return _.sent(),[2]}})})}function h(r,_,A,M,C){return i(this,void 0,void 0,function(){var j,R,D,O,B,N,H,$,Q,Y,Z,re,G;return u(this,function(ee){switch(ee.label){case 0:if(j=_,C){for(R=0,D=1;D<_.length;D++)if(O=l([_[D-1],_[D]],2),B=O[0],(N=O[1]).length>B.length||N===""){R=D;break}j=_.slice(R,_.length)}ee.label=1;case 1:ee.trys.push([1,6,7,8]),H=c(function(oe){var te,se,ge,o,Te,X,_e;return u(this,function(ye){switch(ye.label){case 0:te=function(Ae){return u(this,function(ie){switch(ie.label){case 0:return[4,{op:function(qe){return requestAnimationFrame(function(){return qe.textContent=Ae})},opCode:function(qe){var Ze=qe.textContent||"";return Ae===""||Ze.length>Ae.length?"DELETE":"WRITING"}}];case 1:return ie.sent(),[2]}})},ye.label=1;case 1:ye.trys.push([1,6,7,8]),se=c(oe),ge=se.next(),ye.label=2;case 2:return ge.done?[3,5]:(o=ge.value,[5,te(o)]);case 3:ye.sent(),ye.label=4;case 4:return ge=se.next(),[3,2];case 5:return[3,8];case 6:return Te=ye.sent(),X={error:Te},[3,8];case 7:try{ge&&!ge.done&&(_e=se.return)&&_e.call(se)}finally{if(X)throw X.error}return[7];case 8:return[2]}})}(j)),$=H.next(),ee.label=2;case 2:return $.done?[3,5]:(Q=$.value,Y=Q.opCode(r)==="WRITING"?A+A*(Math.random()-.5):M+M*(Math.random()-.5),Q.op(r),[4,p(Y)]);case 3:ee.sent(),ee.label=4;case 4:return $=H.next(),[3,2];case 5:return[3,8];case 6:return Z=ee.sent(),re={error:Z},[3,8];case 7:try{$&&!$.done&&(G=H.return)&&G.call(H)}finally{if(re)throw re.error}return[7];case 8:return[2]}})})}function y(r,_,A){var M,C;return A===void 0&&(A=0),u(this,function(j){switch(j.label){case 0:M=_(r),C=M.length,j.label=1;case 1:return A<C?[4,M.slice(0,++A).join("")]:[3,3];case 2:return j.sent(),[3,1];case 3:return[2]}})}function v(r,_,A){var M,C;return A===void 0&&(A=0),u(this,function(j){switch(j.label){case 0:M=_(r),C=M.length,j.label=1;case 1:return C>A?[4,M.slice(0,--C).join("")]:[3,3];case 2:return j.sent(),[3,1];case 3:return[2]}})}var b="index-module_type__E-SaG";(function(r,_){_===void 0&&(_={});var A=_.insertAt;if(r&&typeof document<"u"){var M=document.head||document.getElementsByTagName("head")[0],C=document.createElement("style");C.type="text/css",A==="top"&&M.firstChild?M.insertBefore(C,M.firstChild):M.appendChild(C),C.styleSheet?C.styleSheet.cssText=r:C.appendChild(document.createTextNode(r))}})(`.index-module_type__E-SaG::after {
  content: '|';
  animation: index-module_cursor__PQg0P 1.1s infinite step-start;
}

@keyframes index-module_cursor__PQg0P {
  50% {
    opacity: 0;
  }
}
`);var m=reactExports.memo(reactExports.forwardRef(function(r,_){var A=r.sequence,M=r.repeat,C=r.className,j=r.speed,R=j===void 0?40:j,D=r.deletionSpeed,O=r.omitDeletionAnimation,B=O!==void 0&&O,N=r.preRenderFirstString,H=N!==void 0&&N,$=r.wrapper,Q=$===void 0?"span":$,Y=r.splitter,Z=Y===void 0?function(Pe){return s([],l(Pe),!1)}:Y,re=r.cursor,G=re===void 0||re,ee=r.style,oe=function(Pe,He){var Ge={};for(var Ve in Pe)Object.prototype.hasOwnProperty.call(Pe,Ve)&&He.indexOf(Ve)<0&&(Ge[Ve]=Pe[Ve]);if(Pe!=null&&typeof Object.getOwnPropertySymbols=="function"){var en=0;for(Ve=Object.getOwnPropertySymbols(Pe);en<Ve.length;en++)He.indexOf(Ve[en])<0&&Object.prototype.propertyIsEnumerable.call(Pe,Ve[en])&&(Ge[Ve[en]]=Pe[Ve[en]])}return Ge}(r,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),te=oe["aria-label"],se=oe["aria-hidden"],ge=oe.role;D||(D=R);var o=new Array(2).fill(40);[R,D].forEach(function(Pe,He){switch(typeof Pe){case"number":o[He]=Math.abs(Pe-100);break;case"object":var Ge=Pe.type,Ve=Pe.value;if(typeof Ve!="number")break;Ge==="keyStrokeDelayInMs"&&(o[He]=Ve)}});var Te,X,_e,ye,Ae,ie,qe=o[0],Ze=o[1],$e=function(Pe,He){He===void 0&&(He=null);var Ge=reactExports.useRef(He);return reactExports.useEffect(function(){Pe&&(typeof Pe=="function"?Pe(Ge.current):Pe.current=Ge.current)},[Pe]),Ge}(_),Xe=b;Te=C?"".concat(G?Xe+" ":"").concat(C):G?Xe:"",X=reactExports.useRef(function(){var Pe,He=A;M===1/0?Pe=f:typeof M=="number"&&(He=Array(1+M).fill(A).flat());var Ge=Pe?s(s([],l(He),!1),[Pe],!1):s([],l(He),!1);return f.apply(void 0,s([$e.current,Z,qe,Ze,B],l(Ge),!1)),function(){$e.current}}),_e=reactExports.useRef(),ye=reactExports.useRef(!1),Ae=reactExports.useRef(!1),ie=l(reactExports.useState(0),2)[1],ye.current&&(Ae.current=!0),reactExports.useEffect(function(){return ye.current||(_e.current=X.current(),ye.current=!0),ie(function(Pe){return Pe+1}),function(){Ae.current&&_e.current&&_e.current()}},[]);var bn=Q,sn=H?A.find(function(Pe){return typeof Pe=="string"})||"":null;return React.createElement(bn,{"aria-hidden":se,"aria-label":te,role:ge,style:ee,className:Te,children:te?React.createElement("span",{"aria-hidden":"true",ref:$e,children:sn}):sn,ref:te?void 0:$e})}),function(r,_){return!0});const{Title:Title$7,Paragraph:Paragraph$2}=Typography,Hero=()=>{const{useToken:r}=theme,{token:_}=r(),A=reactExports.useContext(ThemeContext);return jsxRuntimeExports.jsx("div",{className:A==="dark"?"hero hero-dark":"hero",id:"hero",style:{backgroundBlendMode:"multiply",backgroundColor:A==="dark"?"#00000008":"#FFFFFF04"},children:jsxRuntimeExports.jsxs("div",{className:"hero-content",style:{background:A==="dark"?_.colorBgMask:"rgba(255, 255, 255, 0.75)"},children:[jsxRuntimeExports.jsx(Title$7,{level:1,children:jsxRuntimeExports.jsx(m,{sequence:["Rao Yuchen",2e3,"饶宇晨",1500,"Ryan",1500,"饒宇晨",1500],speed:20,repeat:1/0})}),jsxRuntimeExports.jsx(Paragraph$2,{children:"Bridging Creativity and Technology!"}),jsxRuntimeExports.jsx(Button,{className:"gradient-btn",type:"primary",onClick:()=>{var M;return(M=document.getElementById("footer"))==null?void 0:M.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},children:"Contact Me"})]})})};var dist={exports:{}},jquery={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var hasRequiredJquery;function requireJquery(){return hasRequiredJquery||(hasRequiredJquery=1,function(r){(function(_,A){r.exports=_.document?A(_,!0):function(M){if(!M.document)throw new Error("jQuery requires a window with a document");return A(M)}})(typeof window<"u"?window:commonjsGlobal,function(_,A){var M=[],C=Object.getPrototypeOf,j=M.slice,R=M.flat?function(e){return M.flat.call(e)}:function(e){return M.concat.apply([],e)},D=M.push,O=M.indexOf,B={},N=B.toString,H=B.hasOwnProperty,$=H.toString,Q=$.call(Object),Y={},Z=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},re=function(t){return t!=null&&t===t.window},G=_.document,ee={type:!0,src:!0,nonce:!0,noModule:!0};function oe(e,t,a){a=a||G;var g,x,E=a.createElement("script");if(E.text=e,t)for(g in ee)x=t[g]||t.getAttribute&&t.getAttribute(g),x&&E.setAttribute(g,x);a.head.appendChild(E).parentNode.removeChild(E)}function te(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?B[N.call(e)]||"object":typeof e}var se="3.7.1",ge=/HTML$/i,o=function(e,t){return new o.fn.init(e,t)};o.fn=o.prototype={jquery:se,constructor:o,length:0,toArray:function(){return j.call(this)},get:function(e){return e==null?j.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=o.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return o.each(this,e)},map:function(e){return this.pushStack(o.map(this,function(t,a){return e.call(t,a,t)}))},slice:function(){return this.pushStack(j.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(o.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(o.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,a=+e+(e<0?t:0);return this.pushStack(a>=0&&a<t?[this[a]]:[])},end:function(){return this.prevObject||this.constructor()},push:D,sort:M.sort,splice:M.splice},o.extend=o.fn.extend=function(){var e,t,a,g,x,E,S=arguments[0]||{},P=1,I=arguments.length,U=!1;for(typeof S=="boolean"&&(U=S,S=arguments[P]||{},P++),typeof S!="object"&&!Z(S)&&(S={}),P===I&&(S=this,P--);P<I;P++)if((e=arguments[P])!=null)for(t in e)g=e[t],!(t==="__proto__"||S===g)&&(U&&g&&(o.isPlainObject(g)||(x=Array.isArray(g)))?(a=S[t],x&&!Array.isArray(a)?E=[]:!x&&!o.isPlainObject(a)?E={}:E=a,x=!1,S[t]=o.extend(U,E,g)):g!==void 0&&(S[t]=g));return S},o.extend({expando:"jQuery"+(se+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,a;return!e||N.call(e)!=="[object Object]"?!1:(t=C(e),t?(a=H.call(t,"constructor")&&t.constructor,typeof a=="function"&&$.call(a)===Q):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,a){oe(e,{nonce:t&&t.nonce},a)},each:function(e,t){var a,g=0;if(Te(e))for(a=e.length;g<a&&t.call(e[g],g,e[g])!==!1;g++);else for(g in e)if(t.call(e[g],g,e[g])===!1)break;return e},text:function(e){var t,a="",g=0,x=e.nodeType;if(!x)for(;t=e[g++];)a+=o.text(t);return x===1||x===11?e.textContent:x===9?e.documentElement.textContent:x===3||x===4?e.nodeValue:a},makeArray:function(e,t){var a=t||[];return e!=null&&(Te(Object(e))?o.merge(a,typeof e=="string"?[e]:e):D.call(a,e)),a},inArray:function(e,t,a){return t==null?-1:O.call(t,e,a)},isXMLDoc:function(e){var t=e&&e.namespaceURI,a=e&&(e.ownerDocument||e).documentElement;return!ge.test(t||a&&a.nodeName||"HTML")},merge:function(e,t){for(var a=+t.length,g=0,x=e.length;g<a;g++)e[x++]=t[g];return e.length=x,e},grep:function(e,t,a){for(var g,x=[],E=0,S=e.length,P=!a;E<S;E++)g=!t(e[E],E),g!==P&&x.push(e[E]);return x},map:function(e,t,a){var g,x,E=0,S=[];if(Te(e))for(g=e.length;E<g;E++)x=t(e[E],E,a),x!=null&&S.push(x);else for(E in e)x=t(e[E],E,a),x!=null&&S.push(x);return R(S)},guid:1,support:Y}),typeof Symbol=="function"&&(o.fn[Symbol.iterator]=M[Symbol.iterator]),o.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){B["[object "+t+"]"]=t.toLowerCase()});function Te(e){var t=!!e&&"length"in e&&e.length,a=te(e);return Z(e)||re(e)?!1:a==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function X(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var _e=M.pop,ye=M.sort,Ae=M.splice,ie="[\\x20\\t\\r\\n\\f]",qe=new RegExp("^"+ie+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ie+"+$","g");o.contains=function(e,t){var a=t&&t.parentNode;return e===a||!!(a&&a.nodeType===1&&(e.contains?e.contains(a):e.compareDocumentPosition&&e.compareDocumentPosition(a)&16))};var Ze=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function $e(e,t){return t?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}o.escapeSelector=function(e){return(e+"").replace(Ze,$e)};var Xe=G,bn=D;(function(){var e,t,a,g,x,E=bn,S,P,I,U,V,z=o.expando,W=0,le=0,be=at(),Be=at(),je=at(),ze=at(),Qe=function(T,L){return T===L&&(x=!0),0},gn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",_n="(?:\\\\[\\da-fA-F]{1,6}"+ie+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",Oe="\\["+ie+"*("+_n+")(?:"+ie+"*([*^$|!~]?=)"+ie+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+_n+"))|)"+ie+"*\\]",On=":("+_n+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+Oe+")*)|.*)\\)|)",Ne=new RegExp(ie+"+","g"),Ye=new RegExp("^"+ie+"*,"+ie+"*"),zn=new RegExp("^"+ie+"*([>+~]|"+ie+")"+ie+"*"),Et=new RegExp(ie+"|>"),vn=new RegExp(On),$n=new RegExp("^"+_n+"$"),yn={ID:new RegExp("^#("+_n+")"),CLASS:new RegExp("^\\.("+_n+")"),TAG:new RegExp("^("+_n+"|[*])"),ATTR:new RegExp("^"+Oe),PSEUDO:new RegExp("^"+On),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ie+"*(even|odd|(([+-]|)(\\d*)n|)"+ie+"*(?:([+-]|)"+ie+"*(\\d+)|))"+ie+"*\\)|)","i"),bool:new RegExp("^(?:"+gn+")$","i"),needsContext:new RegExp("^"+ie+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ie+"*((?:-\\d)?\\d*)"+ie+"*\\)|)(?=[^-]|$)","i")},Sn=/^(?:input|select|textarea|button)$/i,Cn=/^h\d$/i,fn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Mt=/[+~]/,En=new RegExp("\\\\[\\da-fA-F]{1,6}"+ie+"?|\\\\([^\\r\\n\\f])","g"),Mn=function(T,L){var F="0x"+T.slice(1)-65536;return L||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},Gl=function(){kn()},Jl=ot(function(T){return T.disabled===!0&&X(T,"fieldset")},{dir:"parentNode",next:"legend"});function zl(){try{return S.activeElement}catch{}}try{E.apply(M=j.call(Xe.childNodes),Xe.childNodes),M[Xe.childNodes.length].nodeType}catch{E={apply:function(L,F){bn.apply(L,j.call(F))},call:function(L){bn.apply(L,j.call(arguments,1))}}}function We(T,L,F,K){var J,ae,ce,de,ue,Ie,ve,xe=L&&L.ownerDocument,Re=L?L.nodeType:9;if(F=F||[],typeof T!="string"||!T||Re!==1&&Re!==9&&Re!==11)return F;if(!K&&(kn(L),L=L||S,I)){if(Re!==11&&(ue=fn.exec(T)))if(J=ue[1]){if(Re===9)if(ce=L.getElementById(J)){if(ce.id===J)return E.call(F,ce),F}else return F;else if(xe&&(ce=xe.getElementById(J))&&We.contains(L,ce)&&ce.id===J)return E.call(F,ce),F}else{if(ue[2])return E.apply(F,L.getElementsByTagName(T)),F;if((J=ue[3])&&L.getElementsByClassName)return E.apply(F,L.getElementsByClassName(J)),F}if(!ze[T+" "]&&(!U||!U.test(T))){if(ve=T,xe=L,Re===1&&(Et.test(T)||zn.test(T))){for(xe=Mt.test(T)&&wt(L.parentNode)||L,(xe!=L||!Y.scope)&&((de=L.getAttribute("id"))?de=o.escapeSelector(de):L.setAttribute("id",de=z)),Ie=Xn(T),ae=Ie.length;ae--;)Ie[ae]=(de?"#"+de:":scope")+" "+it(Ie[ae]);ve=Ie.join(",")}try{return E.apply(F,xe.querySelectorAll(ve)),F}catch{ze(T,!0)}finally{de===z&&L.removeAttribute("id")}}}return cl(T.replace(qe,"$1"),L,F,K)}function at(){var T=[];function L(F,K){return T.push(F+" ")>t.cacheLength&&delete L[T.shift()],L[F+" "]=K}return L}function mn(T){return T[z]=!0,T}function Wn(T){var L=S.createElement("fieldset");try{return!!T(L)}catch{return!1}finally{L.parentNode&&L.parentNode.removeChild(L),L=null}}function $l(T){return function(L){return X(L,"input")&&L.type===T}}function Xl(T){return function(L){return(X(L,"input")||X(L,"button"))&&L.type===T}}function ol(T){return function(L){return"form"in L?L.parentNode&&L.disabled===!1?"label"in L?"label"in L.parentNode?L.parentNode.disabled===T:L.disabled===T:L.isDisabled===T||L.isDisabled!==!T&&Jl(L)===T:L.disabled===T:"label"in L?L.disabled===T:!1}}function Pn(T){return mn(function(L){return L=+L,mn(function(F,K){for(var J,ae=T([],F.length,L),ce=ae.length;ce--;)F[J=ae[ce]]&&(F[J]=!(K[J]=F[J]))})})}function wt(T){return T&&typeof T.getElementsByTagName<"u"&&T}function kn(T){var L,F=T?T.ownerDocument||T:Xe;return F==S||F.nodeType!==9||!F.documentElement||(S=F,P=S.documentElement,I=!o.isXMLDoc(S),V=P.matches||P.webkitMatchesSelector||P.msMatchesSelector,P.msMatchesSelector&&Xe!=S&&(L=S.defaultView)&&L.top!==L&&L.addEventListener("unload",Gl),Y.getById=Wn(function(K){return P.appendChild(K).id=o.expando,!S.getElementsByName||!S.getElementsByName(o.expando).length}),Y.disconnectedMatch=Wn(function(K){return V.call(K,"*")}),Y.scope=Wn(function(){return S.querySelectorAll(":scope")}),Y.cssHas=Wn(function(){try{return S.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),Y.getById?(t.filter.ID=function(K){var J=K.replace(En,Mn);return function(ae){return ae.getAttribute("id")===J}},t.find.ID=function(K,J){if(typeof J.getElementById<"u"&&I){var ae=J.getElementById(K);return ae?[ae]:[]}}):(t.filter.ID=function(K){var J=K.replace(En,Mn);return function(ae){var ce=typeof ae.getAttributeNode<"u"&&ae.getAttributeNode("id");return ce&&ce.value===J}},t.find.ID=function(K,J){if(typeof J.getElementById<"u"&&I){var ae,ce,de,ue=J.getElementById(K);if(ue){if(ae=ue.getAttributeNode("id"),ae&&ae.value===K)return[ue];for(de=J.getElementsByName(K),ce=0;ue=de[ce++];)if(ae=ue.getAttributeNode("id"),ae&&ae.value===K)return[ue]}return[]}}),t.find.TAG=function(K,J){return typeof J.getElementsByTagName<"u"?J.getElementsByTagName(K):J.querySelectorAll(K)},t.find.CLASS=function(K,J){if(typeof J.getElementsByClassName<"u"&&I)return J.getElementsByClassName(K)},U=[],Wn(function(K){var J;P.appendChild(K).innerHTML="<a id='"+z+"' href='' disabled='disabled'></a><select id='"+z+"-\r\\' disabled='disabled'><option selected=''></option></select>",K.querySelectorAll("[selected]").length||U.push("\\["+ie+"*(?:value|"+gn+")"),K.querySelectorAll("[id~="+z+"-]").length||U.push("~="),K.querySelectorAll("a#"+z+"+*").length||U.push(".#.+[+~]"),K.querySelectorAll(":checked").length||U.push(":checked"),J=S.createElement("input"),J.setAttribute("type","hidden"),K.appendChild(J).setAttribute("name","D"),P.appendChild(K).disabled=!0,K.querySelectorAll(":disabled").length!==2&&U.push(":enabled",":disabled"),J=S.createElement("input"),J.setAttribute("name",""),K.appendChild(J),K.querySelectorAll("[name='']").length||U.push("\\["+ie+"*name"+ie+"*="+ie+`*(?:''|"")`)}),Y.cssHas||U.push(":has"),U=U.length&&new RegExp(U.join("|")),Qe=function(K,J){if(K===J)return x=!0,0;var ae=!K.compareDocumentPosition-!J.compareDocumentPosition;return ae||(ae=(K.ownerDocument||K)==(J.ownerDocument||J)?K.compareDocumentPosition(J):1,ae&1||!Y.sortDetached&&J.compareDocumentPosition(K)===ae?K===S||K.ownerDocument==Xe&&We.contains(Xe,K)?-1:J===S||J.ownerDocument==Xe&&We.contains(Xe,J)?1:g?O.call(g,K)-O.call(g,J):0:ae&4?-1:1)}),S}We.matches=function(T,L){return We(T,null,null,L)},We.matchesSelector=function(T,L){if(kn(T),I&&!ze[L+" "]&&(!U||!U.test(L)))try{var F=V.call(T,L);if(F||Y.disconnectedMatch||T.document&&T.document.nodeType!==11)return F}catch{ze(L,!0)}return We(L,S,null,[T]).length>0},We.contains=function(T,L){return(T.ownerDocument||T)!=S&&kn(T),o.contains(T,L)},We.attr=function(T,L){(T.ownerDocument||T)!=S&&kn(T);var F=t.attrHandle[L.toLowerCase()],K=F&&H.call(t.attrHandle,L.toLowerCase())?F(T,L,!I):void 0;return K!==void 0?K:T.getAttribute(L)},We.error=function(T){throw new Error("Syntax error, unrecognized expression: "+T)},o.uniqueSort=function(T){var L,F=[],K=0,J=0;if(x=!Y.sortStable,g=!Y.sortStable&&j.call(T,0),ye.call(T,Qe),x){for(;L=T[J++];)L===T[J]&&(K=F.push(J));for(;K--;)Ae.call(T,F[K],1)}return g=null,T},o.fn.uniqueSort=function(){return this.pushStack(o.uniqueSort(j.apply(this)))},t=o.expr={cacheLength:50,createPseudo:mn,match:yn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(T){return T[1]=T[1].replace(En,Mn),T[3]=(T[3]||T[4]||T[5]||"").replace(En,Mn),T[2]==="~="&&(T[3]=" "+T[3]+" "),T.slice(0,4)},CHILD:function(T){return T[1]=T[1].toLowerCase(),T[1].slice(0,3)==="nth"?(T[3]||We.error(T[0]),T[4]=+(T[4]?T[5]+(T[6]||1):2*(T[3]==="even"||T[3]==="odd")),T[5]=+(T[7]+T[8]||T[3]==="odd")):T[3]&&We.error(T[0]),T},PSEUDO:function(T){var L,F=!T[6]&&T[2];return yn.CHILD.test(T[0])?null:(T[3]?T[2]=T[4]||T[5]||"":F&&vn.test(F)&&(L=Xn(F,!0))&&(L=F.indexOf(")",F.length-L)-F.length)&&(T[0]=T[0].slice(0,L),T[2]=F.slice(0,L)),T.slice(0,3))}},filter:{TAG:function(T){var L=T.replace(En,Mn).toLowerCase();return T==="*"?function(){return!0}:function(F){return X(F,L)}},CLASS:function(T){var L=be[T+" "];return L||(L=new RegExp("(^|"+ie+")"+T+"("+ie+"|$)"))&&be(T,function(F){return L.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(T,L,F){return function(K){var J=We.attr(K,T);return J==null?L==="!=":L?(J+="",L==="="?J===F:L==="!="?J!==F:L==="^="?F&&J.indexOf(F)===0:L==="*="?F&&J.indexOf(F)>-1:L==="$="?F&&J.slice(-F.length)===F:L==="~="?(" "+J.replace(Ne," ")+" ").indexOf(F)>-1:L==="|="?J===F||J.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(T,L,F,K,J){var ae=T.slice(0,3)!=="nth",ce=T.slice(-4)!=="last",de=L==="of-type";return K===1&&J===0?function(ue){return!!ue.parentNode}:function(ue,Ie,ve){var xe,Re,he,Ke,on,nn=ae!==ce?"nextSibling":"previousSibling",pn=ue.parentNode,An=de&&ue.nodeName.toLowerCase(),qn=!ve&&!de,tn=!1;if(pn){if(ae){for(;nn;){for(he=ue;he=he[nn];)if(de?X(he,An):he.nodeType===1)return!1;on=nn=T==="only"&&!on&&"nextSibling"}return!0}if(on=[ce?pn.firstChild:pn.lastChild],ce&&qn){for(Re=pn[z]||(pn[z]={}),xe=Re[T]||[],Ke=xe[0]===W&&xe[1],tn=Ke&&xe[2],he=Ke&&pn.childNodes[Ke];he=++Ke&&he&&he[nn]||(tn=Ke=0)||on.pop();)if(he.nodeType===1&&++tn&&he===ue){Re[T]=[W,Ke,tn];break}}else if(qn&&(Re=ue[z]||(ue[z]={}),xe=Re[T]||[],Ke=xe[0]===W&&xe[1],tn=Ke),tn===!1)for(;(he=++Ke&&he&&he[nn]||(tn=Ke=0)||on.pop())&&!((de?X(he,An):he.nodeType===1)&&++tn&&(qn&&(Re=he[z]||(he[z]={}),Re[T]=[W,tn]),he===ue)););return tn-=J,tn===K||tn%K===0&&tn/K>=0}}},PSEUDO:function(T,L){var F,K=t.pseudos[T]||t.setFilters[T.toLowerCase()]||We.error("unsupported pseudo: "+T);return K[z]?K(L):K.length>1?(F=[T,T,"",L],t.setFilters.hasOwnProperty(T.toLowerCase())?mn(function(J,ae){for(var ce,de=K(J,L),ue=de.length;ue--;)ce=O.call(J,de[ue]),J[ce]=!(ae[ce]=de[ue])}):function(J){return K(J,0,F)}):K}},pseudos:{not:mn(function(T){var L=[],F=[],K=jt(T.replace(qe,"$1"));return K[z]?mn(function(J,ae,ce,de){for(var ue,Ie=K(J,null,de,[]),ve=J.length;ve--;)(ue=Ie[ve])&&(J[ve]=!(ae[ve]=ue))}):function(J,ae,ce){return L[0]=J,K(L,null,ce,F),L[0]=null,!F.pop()}}),has:mn(function(T){return function(L){return We(T,L).length>0}}),contains:mn(function(T){return T=T.replace(En,Mn),function(L){return(L.textContent||o.text(L)).indexOf(T)>-1}}),lang:mn(function(T){return $n.test(T||"")||We.error("unsupported lang: "+T),T=T.replace(En,Mn).toLowerCase(),function(L){var F;do if(F=I?L.lang:L.getAttribute("xml:lang")||L.getAttribute("lang"))return F=F.toLowerCase(),F===T||F.indexOf(T+"-")===0;while((L=L.parentNode)&&L.nodeType===1);return!1}}),target:function(T){var L=_.location&&_.location.hash;return L&&L.slice(1)===T.id},root:function(T){return T===P},focus:function(T){return T===zl()&&S.hasFocus()&&!!(T.type||T.href||~T.tabIndex)},enabled:ol(!1),disabled:ol(!0),checked:function(T){return X(T,"input")&&!!T.checked||X(T,"option")&&!!T.selected},selected:function(T){return T.parentNode&&T.parentNode.selectedIndex,T.selected===!0},empty:function(T){for(T=T.firstChild;T;T=T.nextSibling)if(T.nodeType<6)return!1;return!0},parent:function(T){return!t.pseudos.empty(T)},header:function(T){return Cn.test(T.nodeName)},input:function(T){return Sn.test(T.nodeName)},button:function(T){return X(T,"input")&&T.type==="button"||X(T,"button")},text:function(T){var L;return X(T,"input")&&T.type==="text"&&((L=T.getAttribute("type"))==null||L.toLowerCase()==="text")},first:Pn(function(){return[0]}),last:Pn(function(T,L){return[L-1]}),eq:Pn(function(T,L,F){return[F<0?F+L:F]}),even:Pn(function(T,L){for(var F=0;F<L;F+=2)T.push(F);return T}),odd:Pn(function(T,L){for(var F=1;F<L;F+=2)T.push(F);return T}),lt:Pn(function(T,L,F){var K;for(F<0?K=F+L:F>L?K=L:K=F;--K>=0;)T.push(K);return T}),gt:Pn(function(T,L,F){for(var K=F<0?F+L:F;++K<L;)T.push(K);return T})}},t.pseudos.nth=t.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=$l(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=Xl(e);function sl(){}sl.prototype=t.filters=t.pseudos,t.setFilters=new sl;function Xn(T,L){var F,K,J,ae,ce,de,ue,Ie=Be[T+" "];if(Ie)return L?0:Ie.slice(0);for(ce=T,de=[],ue=t.preFilter;ce;){(!F||(K=Ye.exec(ce)))&&(K&&(ce=ce.slice(K[0].length)||ce),de.push(J=[])),F=!1,(K=zn.exec(ce))&&(F=K.shift(),J.push({value:F,type:K[0].replace(qe," ")}),ce=ce.slice(F.length));for(ae in t.filter)(K=yn[ae].exec(ce))&&(!ue[ae]||(K=ue[ae](K)))&&(F=K.shift(),J.push({value:F,type:ae,matches:K}),ce=ce.slice(F.length));if(!F)break}return L?ce.length:ce?We.error(T):Be(T,de).slice(0)}function it(T){for(var L=0,F=T.length,K="";L<F;L++)K+=T[L].value;return K}function ot(T,L,F){var K=L.dir,J=L.next,ae=J||K,ce=F&&ae==="parentNode",de=le++;return L.first?function(ue,Ie,ve){for(;ue=ue[K];)if(ue.nodeType===1||ce)return T(ue,Ie,ve);return!1}:function(ue,Ie,ve){var xe,Re,he=[W,de];if(ve){for(;ue=ue[K];)if((ue.nodeType===1||ce)&&T(ue,Ie,ve))return!0}else for(;ue=ue[K];)if(ue.nodeType===1||ce)if(Re=ue[z]||(ue[z]={}),J&&X(ue,J))ue=ue[K]||ue;else{if((xe=Re[ae])&&xe[0]===W&&xe[1]===de)return he[2]=xe[2];if(Re[ae]=he,he[2]=T(ue,Ie,ve))return!0}return!1}}function St(T){return T.length>1?function(L,F,K){for(var J=T.length;J--;)if(!T[J](L,F,K))return!1;return!0}:T[0]}function er(T,L,F){for(var K=0,J=L.length;K<J;K++)We(T,L[K],F);return F}function st(T,L,F,K,J){for(var ae,ce=[],de=0,ue=T.length,Ie=L!=null;de<ue;de++)(ae=T[de])&&(!F||F(ae,K,J))&&(ce.push(ae),Ie&&L.push(de));return ce}function Ct(T,L,F,K,J,ae){return K&&!K[z]&&(K=Ct(K)),J&&!J[z]&&(J=Ct(J,ae)),mn(function(ce,de,ue,Ie){var ve,xe,Re,he,Ke=[],on=[],nn=de.length,pn=ce||er(L||"*",ue.nodeType?[ue]:ue,[]),An=T&&(ce||!L)?st(pn,Ke,T,ue,Ie):pn;if(F?(he=J||(ce?T:nn||K)?[]:de,F(An,he,ue,Ie)):he=An,K)for(ve=st(he,on),K(ve,[],ue,Ie),xe=ve.length;xe--;)(Re=ve[xe])&&(he[on[xe]]=!(An[on[xe]]=Re));if(ce){if(J||T){if(J){for(ve=[],xe=he.length;xe--;)(Re=he[xe])&&ve.push(An[xe]=Re);J(null,he=[],ve,Ie)}for(xe=he.length;xe--;)(Re=he[xe])&&(ve=J?O.call(ce,Re):Ke[xe])>-1&&(ce[ve]=!(de[ve]=Re))}}else he=st(he===de?he.splice(nn,he.length):he),J?J(null,de,he,Ie):E.apply(de,he)})}function kt(T){for(var L,F,K,J=T.length,ae=t.relative[T[0].type],ce=ae||t.relative[" "],de=ae?1:0,ue=ot(function(xe){return xe===L},ce,!0),Ie=ot(function(xe){return O.call(L,xe)>-1},ce,!0),ve=[function(xe,Re,he){var Ke=!ae&&(he||Re!=a)||((L=Re).nodeType?ue(xe,Re,he):Ie(xe,Re,he));return L=null,Ke}];de<J;de++)if(F=t.relative[T[de].type])ve=[ot(St(ve),F)];else{if(F=t.filter[T[de].type].apply(null,T[de].matches),F[z]){for(K=++de;K<J&&!t.relative[T[K].type];K++);return Ct(de>1&&St(ve),de>1&&it(T.slice(0,de-1).concat({value:T[de-2].type===" "?"*":""})).replace(qe,"$1"),F,de<K&&kt(T.slice(de,K)),K<J&&kt(T=T.slice(K)),K<J&&it(T))}ve.push(F)}return St(ve)}function nr(T,L){var F=L.length>0,K=T.length>0,J=function(ae,ce,de,ue,Ie){var ve,xe,Re,he=0,Ke="0",on=ae&&[],nn=[],pn=a,An=ae||K&&t.find.TAG("*",Ie),qn=W+=pn==null?1:Math.random()||.1,tn=An.length;for(Ie&&(a=ce==S||ce||Ie);Ke!==tn&&(ve=An[Ke])!=null;Ke++){if(K&&ve){for(xe=0,!ce&&ve.ownerDocument!=S&&(kn(ve),de=!I);Re=T[xe++];)if(Re(ve,ce||S,de)){E.call(ue,ve);break}Ie&&(W=qn)}F&&((ve=!Re&&ve)&&he--,ae&&on.push(ve))}if(he+=Ke,F&&Ke!==he){for(xe=0;Re=L[xe++];)Re(on,nn,ce,de);if(ae){if(he>0)for(;Ke--;)on[Ke]||nn[Ke]||(nn[Ke]=_e.call(ue));nn=st(nn)}E.apply(ue,nn),Ie&&!ae&&nn.length>0&&he+L.length>1&&o.uniqueSort(ue)}return Ie&&(W=qn,a=pn),on};return F?mn(J):J}function jt(T,L){var F,K=[],J=[],ae=je[T+" "];if(!ae){for(L||(L=Xn(T)),F=L.length;F--;)ae=kt(L[F]),ae[z]?K.push(ae):J.push(ae);ae=je(T,nr(J,K)),ae.selector=T}return ae}function cl(T,L,F,K){var J,ae,ce,de,ue,Ie=typeof T=="function"&&T,ve=!K&&Xn(T=Ie.selector||T);if(F=F||[],ve.length===1){if(ae=ve[0]=ve[0].slice(0),ae.length>2&&(ce=ae[0]).type==="ID"&&L.nodeType===9&&I&&t.relative[ae[1].type]){if(L=(t.find.ID(ce.matches[0].replace(En,Mn),L)||[])[0],L)Ie&&(L=L.parentNode);else return F;T=T.slice(ae.shift().value.length)}for(J=yn.needsContext.test(T)?0:ae.length;J--&&(ce=ae[J],!t.relative[de=ce.type]);)if((ue=t.find[de])&&(K=ue(ce.matches[0].replace(En,Mn),Mt.test(ae[0].type)&&wt(L.parentNode)||L))){if(ae.splice(J,1),T=K.length&&it(ae),!T)return E.apply(F,K),F;break}}return(Ie||jt(T,ve))(K,L,!I,F,!L||Mt.test(T)&&wt(L.parentNode)||L),F}Y.sortStable=z.split("").sort(Qe).join("")===z,kn(),Y.sortDetached=Wn(function(T){return T.compareDocumentPosition(S.createElement("fieldset"))&1}),o.find=We,o.expr[":"]=o.expr.pseudos,o.unique=o.uniqueSort,We.compile=jt,We.select=cl,We.setDocument=kn,We.tokenize=Xn,We.escape=o.escapeSelector,We.getText=o.text,We.isXML=o.isXMLDoc,We.selectors=o.expr,We.support=o.support,We.uniqueSort=o.uniqueSort})();var sn=function(e,t,a){for(var g=[],x=a!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(x&&o(e).is(a))break;g.push(e)}return g},Pe=function(e,t){for(var a=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&a.push(e);return a},He=o.expr.match.needsContext,Ge=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ve(e,t,a){return Z(t)?o.grep(e,function(g,x){return!!t.call(g,x,g)!==a}):t.nodeType?o.grep(e,function(g){return g===t!==a}):typeof t!="string"?o.grep(e,function(g){return O.call(t,g)>-1!==a}):o.filter(t,e,a)}o.filter=function(e,t,a){var g=t[0];return a&&(e=":not("+e+")"),t.length===1&&g.nodeType===1?o.find.matchesSelector(g,e)?[g]:[]:o.find.matches(e,o.grep(t,function(x){return x.nodeType===1}))},o.fn.extend({find:function(e){var t,a,g=this.length,x=this;if(typeof e!="string")return this.pushStack(o(e).filter(function(){for(t=0;t<g;t++)if(o.contains(x[t],this))return!0}));for(a=this.pushStack([]),t=0;t<g;t++)o.find(e,x[t],a);return g>1?o.uniqueSort(a):a},filter:function(e){return this.pushStack(Ve(this,e||[],!1))},not:function(e){return this.pushStack(Ve(this,e||[],!0))},is:function(e){return!!Ve(this,typeof e=="string"&&He.test(e)?o(e):e||[],!1).length}});var en,Kn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,cn=o.fn.init=function(e,t,a){var g,x;if(!e)return this;if(a=a||en,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?g=[null,e,null]:g=Kn.exec(e),g&&(g[1]||!t))if(g[1]){if(t=t instanceof o?t[0]:t,o.merge(this,o.parseHTML(g[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),Ge.test(g[1])&&o.isPlainObject(t))for(g in t)Z(this[g])?this[g](t[g]):this.attr(g,t[g]);return this}else return x=G.getElementById(g[2]),x&&(this[0]=x,this.length=1),this;else return!t||t.jquery?(t||a).find(e):this.constructor(t).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(Z(e))return a.ready!==void 0?a.ready(e):e(o)}return o.makeArray(e,this)};cn.prototype=o.fn,en=o(G);var hn=/^(?:parents|prev(?:Until|All))/,Yn={children:!0,contents:!0,next:!0,prev:!0};o.fn.extend({has:function(e){var t=o(e,this),a=t.length;return this.filter(function(){for(var g=0;g<a;g++)if(o.contains(this,t[g]))return!0})},closest:function(e,t){var a,g=0,x=this.length,E=[],S=typeof e!="string"&&o(e);if(!He.test(e)){for(;g<x;g++)for(a=this[g];a&&a!==t;a=a.parentNode)if(a.nodeType<11&&(S?S.index(a)>-1:a.nodeType===1&&o.find.matchesSelector(a,e))){E.push(a);break}}return this.pushStack(E.length>1?o.uniqueSort(E):E)},index:function(e){return e?typeof e=="string"?O.call(o(e),this[0]):O.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(o.uniqueSort(o.merge(this.get(),o(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function jn(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}o.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return sn(e,"parentNode")},parentsUntil:function(e,t,a){return sn(e,"parentNode",a)},next:function(e){return jn(e,"nextSibling")},prev:function(e){return jn(e,"previousSibling")},nextAll:function(e){return sn(e,"nextSibling")},prevAll:function(e){return sn(e,"previousSibling")},nextUntil:function(e,t,a){return sn(e,"nextSibling",a)},prevUntil:function(e,t,a){return sn(e,"previousSibling",a)},siblings:function(e){return Pe((e.parentNode||{}).firstChild,e)},children:function(e){return Pe(e.firstChild)},contents:function(e){return e.contentDocument!=null&&C(e.contentDocument)?e.contentDocument:(X(e,"template")&&(e=e.content||e),o.merge([],e.childNodes))}},function(e,t){o.fn[e]=function(a,g){var x=o.map(this,t,a);return e.slice(-5)!=="Until"&&(g=a),g&&typeof g=="string"&&(x=o.filter(g,x)),this.length>1&&(Yn[e]||o.uniqueSort(x),hn.test(e)&&x.reverse()),this.pushStack(x)}});var ne=/[^\x20\t\r\n\f]+/g;function pe(e){var t={};return o.each(e.match(ne)||[],function(a,g){t[g]=!0}),t}o.Callbacks=function(e){e=typeof e=="string"?pe(e):o.extend({},e);var t,a,g,x,E=[],S=[],P=-1,I=function(){for(x=x||e.once,g=t=!0;S.length;P=-1)for(a=S.shift();++P<E.length;)E[P].apply(a[0],a[1])===!1&&e.stopOnFalse&&(P=E.length,a=!1);e.memory||(a=!1),t=!1,x&&(a?E=[]:E="")},U={add:function(){return E&&(a&&!t&&(P=E.length-1,S.push(a)),function V(z){o.each(z,function(W,le){Z(le)?(!e.unique||!U.has(le))&&E.push(le):le&&le.length&&te(le)!=="string"&&V(le)})}(arguments),a&&!t&&I()),this},remove:function(){return o.each(arguments,function(V,z){for(var W;(W=o.inArray(z,E,W))>-1;)E.splice(W,1),W<=P&&P--}),this},has:function(V){return V?o.inArray(V,E)>-1:E.length>0},empty:function(){return E&&(E=[]),this},disable:function(){return x=S=[],E=a="",this},disabled:function(){return!E},lock:function(){return x=S=[],!a&&!t&&(E=a=""),this},locked:function(){return!!x},fireWith:function(V,z){return x||(z=z||[],z=[V,z.slice?z.slice():z],S.push(z),t||I()),this},fire:function(){return U.fireWith(this,arguments),this},fired:function(){return!!g}};return U};function Me(e){return e}function Se(e){throw e}function Ee(e,t,a,g){var x;try{e&&Z(x=e.promise)?x.call(e).done(t).fail(a):e&&Z(x=e.then)?x.call(e,t,a):t.apply(void 0,[e].slice(g))}catch(E){a.apply(void 0,[E])}}o.extend({Deferred:function(e){var t=[["notify","progress",o.Callbacks("memory"),o.Callbacks("memory"),2],["resolve","done",o.Callbacks("once memory"),o.Callbacks("once memory"),0,"resolved"],["reject","fail",o.Callbacks("once memory"),o.Callbacks("once memory"),1,"rejected"]],a="pending",g={state:function(){return a},always:function(){return x.done(arguments).fail(arguments),this},catch:function(E){return g.then(null,E)},pipe:function(){var E=arguments;return o.Deferred(function(S){o.each(t,function(P,I){var U=Z(E[I[4]])&&E[I[4]];x[I[1]](function(){var V=U&&U.apply(this,arguments);V&&Z(V.promise)?V.promise().progress(S.notify).done(S.resolve).fail(S.reject):S[I[0]+"With"](this,U?[V]:arguments)})}),E=null}).promise()},then:function(E,S,P){var I=0;function U(V,z,W,le){return function(){var be=this,Be=arguments,je=function(){var Qe,gn;if(!(V<I)){if(Qe=W.apply(be,Be),Qe===z.promise())throw new TypeError("Thenable self-resolution");gn=Qe&&(typeof Qe=="object"||typeof Qe=="function")&&Qe.then,Z(gn)?le?gn.call(Qe,U(I,z,Me,le),U(I,z,Se,le)):(I++,gn.call(Qe,U(I,z,Me,le),U(I,z,Se,le),U(I,z,Me,z.notifyWith))):(W!==Me&&(be=void 0,Be=[Qe]),(le||z.resolveWith)(be,Be))}},ze=le?je:function(){try{je()}catch(Qe){o.Deferred.exceptionHook&&o.Deferred.exceptionHook(Qe,ze.error),V+1>=I&&(W!==Se&&(be=void 0,Be=[Qe]),z.rejectWith(be,Be))}};V?ze():(o.Deferred.getErrorHook?ze.error=o.Deferred.getErrorHook():o.Deferred.getStackHook&&(ze.error=o.Deferred.getStackHook()),_.setTimeout(ze))}}return o.Deferred(function(V){t[0][3].add(U(0,V,Z(P)?P:Me,V.notifyWith)),t[1][3].add(U(0,V,Z(E)?E:Me)),t[2][3].add(U(0,V,Z(S)?S:Se))}).promise()},promise:function(E){return E!=null?o.extend(E,g):g}},x={};return o.each(t,function(E,S){var P=S[2],I=S[5];g[S[1]]=P.add,I&&P.add(function(){a=I},t[3-E][2].disable,t[3-E][3].disable,t[0][2].lock,t[0][3].lock),P.add(S[3].fire),x[S[0]]=function(){return x[S[0]+"With"](this===x?void 0:this,arguments),this},x[S[0]+"With"]=P.fireWith}),g.promise(x),e&&e.call(x,x),x},when:function(e){var t=arguments.length,a=t,g=Array(a),x=j.call(arguments),E=o.Deferred(),S=function(P){return function(I){g[P]=this,x[P]=arguments.length>1?j.call(arguments):I,--t||E.resolveWith(g,x)}};if(t<=1&&(Ee(e,E.done(S(a)).resolve,E.reject,!t),E.state()==="pending"||Z(x[a]&&x[a].then)))return E.then();for(;a--;)Ee(x[a],S(a),E.reject);return E.promise()}});var De=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;o.Deferred.exceptionHook=function(e,t){_.console&&_.console.warn&&e&&De.test(e.name)&&_.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},o.readyException=function(e){_.setTimeout(function(){throw e})};var Ce=o.Deferred();o.fn.ready=function(e){return Ce.then(e).catch(function(t){o.readyException(t)}),this},o.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--o.readyWait:o.isReady)||(o.isReady=!0,!(e!==!0&&--o.readyWait>0)&&Ce.resolveWith(G,[o]))}}),o.ready.then=Ce.then;function ke(){G.removeEventListener("DOMContentLoaded",ke),_.removeEventListener("load",ke),o.ready()}G.readyState==="complete"||G.readyState!=="loading"&&!G.documentElement.doScroll?_.setTimeout(o.ready):(G.addEventListener("DOMContentLoaded",ke),_.addEventListener("load",ke));var we=function(e,t,a,g,x,E,S){var P=0,I=e.length,U=a==null;if(te(a)==="object"){x=!0;for(P in a)we(e,t,P,a[P],!0,E,S)}else if(g!==void 0&&(x=!0,Z(g)||(S=!0),U&&(S?(t.call(e,g),t=null):(U=t,t=function(V,z,W){return U.call(o(V),W)})),t))for(;P<I;P++)t(e[P],a,S?g:g.call(e[P],P,t(e[P],a)));return x?e:U?t.call(e):I?t(e[0],a):E},Ue=/^-ms-/,Le=/-([a-z])/g;function fe(e,t){return t.toUpperCase()}function Fe(e){return e.replace(Ue,"ms-").replace(Le,fe)}var Je=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function wn(){this.expando=o.expando+wn.uid++}wn.uid=1,wn.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Je(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,a){var g,x=this.cache(e);if(typeof t=="string")x[Fe(t)]=a;else for(g in t)x[Fe(g)]=t[g];return x},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Fe(t)]},access:function(e,t,a){return t===void 0||t&&typeof t=="string"&&a===void 0?this.get(e,t):(this.set(e,t,a),a!==void 0?a:t)},remove:function(e,t){var a,g=e[this.expando];if(g!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Fe):(t=Fe(t),t=t in g?[t]:t.match(ne)||[]),a=t.length;a--;)delete g[t[a]];(t===void 0||o.isEmptyObject(g))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!o.isEmptyObject(t)}};var me=new wn,ln=new wn,ul=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,fl=/[A-Z]/g;function pl(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:ul.test(e)?JSON.parse(e):e}function Tt(e,t,a){var g;if(a===void 0&&e.nodeType===1)if(g="data-"+t.replace(fl,"-$&").toLowerCase(),a=e.getAttribute(g),typeof a=="string"){try{a=pl(a)}catch{}ln.set(e,t,a)}else a=void 0;return a}o.extend({hasData:function(e){return ln.hasData(e)||me.hasData(e)},data:function(e,t,a){return ln.access(e,t,a)},removeData:function(e,t){ln.remove(e,t)},_data:function(e,t,a){return me.access(e,t,a)},_removeData:function(e,t){me.remove(e,t)}}),o.fn.extend({data:function(e,t){var a,g,x,E=this[0],S=E&&E.attributes;if(e===void 0){if(this.length&&(x=ln.get(E),E.nodeType===1&&!me.get(E,"hasDataAttrs"))){for(a=S.length;a--;)S[a]&&(g=S[a].name,g.indexOf("data-")===0&&(g=Fe(g.slice(5)),Tt(E,g,x[g])));me.set(E,"hasDataAttrs",!0)}return x}return typeof e=="object"?this.each(function(){ln.set(this,e)}):we(this,function(P){var I;if(E&&P===void 0)return I=ln.get(E,e),I!==void 0||(I=Tt(E,e),I!==void 0)?I:void 0;this.each(function(){ln.set(this,e,P)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ln.remove(this,e)})}}),o.extend({queue:function(e,t,a){var g;if(e)return t=(t||"fx")+"queue",g=me.get(e,t),a&&(!g||Array.isArray(a)?g=me.access(e,t,o.makeArray(a)):g.push(a)),g||[]},dequeue:function(e,t){t=t||"fx";var a=o.queue(e,t),g=a.length,x=a.shift(),E=o._queueHooks(e,t),S=function(){o.dequeue(e,t)};x==="inprogress"&&(x=a.shift(),g--),x&&(t==="fx"&&a.unshift("inprogress"),delete E.stop,x.call(e,S,E)),!g&&E&&E.empty.fire()},_queueHooks:function(e,t){var a=t+"queueHooks";return me.get(e,a)||me.access(e,a,{empty:o.Callbacks("once memory").add(function(){me.remove(e,[t+"queue",a])})})}}),o.fn.extend({queue:function(e,t){var a=2;return typeof e!="string"&&(t=e,e="fx",a--),arguments.length<a?o.queue(this[0],e):t===void 0?this:this.each(function(){var g=o.queue(this,e,t);o._queueHooks(this,e),e==="fx"&&g[0]!=="inprogress"&&o.dequeue(this,e)})},dequeue:function(e){return this.each(function(){o.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var a,g=1,x=o.Deferred(),E=this,S=this.length,P=function(){--g||x.resolveWith(E,[E])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";S--;)a=me.get(E[S],e+"queueHooks"),a&&a.empty&&(g++,a.empty.add(P));return P(),x.promise(t)}});var It=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Hn=new RegExp("^(?:([+-])=|)("+It+")([a-z%]*)$","i"),xn=["Top","Right","Bottom","Left"],Tn=G.documentElement,Dn=function(e){return o.contains(e.ownerDocument,e)},dl={composed:!0};Tn.getRootNode&&(Dn=function(e){return o.contains(e.ownerDocument,e)||e.getRootNode(dl)===e.ownerDocument});var et=function(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&Dn(e)&&o.css(e,"display")==="none"};function Rt(e,t,a,g){var x,E,S=20,P=g?function(){return g.cur()}:function(){return o.css(e,t,"")},I=P(),U=a&&a[3]||(o.cssNumber[t]?"":"px"),V=e.nodeType&&(o.cssNumber[t]||U!=="px"&&+I)&&Hn.exec(o.css(e,t));if(V&&V[3]!==U){for(I=I/2,U=U||V[3],V=+I||1;S--;)o.style(e,t,V+U),(1-E)*(1-(E=P()/I||.5))<=0&&(S=0),V=V/E;V=V*2,o.style(e,t,V+U),a=a||[]}return a&&(V=+V||+I||0,x=a[1]?V+(a[1]+1)*a[2]:+a[2],g&&(g.unit=U,g.start=V,g.end=x)),x}var Ot={};function ml(e){var t,a=e.ownerDocument,g=e.nodeName,x=Ot[g];return x||(t=a.body.appendChild(a.createElement(g)),x=o.css(t,"display"),t.parentNode.removeChild(t),x==="none"&&(x="block"),Ot[g]=x,x)}function Ln(e,t){for(var a,g,x=[],E=0,S=e.length;E<S;E++)g=e[E],g.style&&(a=g.style.display,t?(a==="none"&&(x[E]=me.get(g,"display")||null,x[E]||(g.style.display="")),g.style.display===""&&et(g)&&(x[E]=ml(g))):a!=="none"&&(x[E]="none",me.set(g,"display",a)));for(E=0;E<S;E++)x[E]!=null&&(e[E].style.display=x[E]);return e}o.fn.extend({show:function(){return Ln(this,!0)},hide:function(){return Ln(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){et(this)?o(this).show():o(this).hide()})}});var Vn=/^(?:checkbox|radio)$/i,Pt=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Dt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),a=G.createElement("input");a.setAttribute("type","radio"),a.setAttribute("checked","checked"),a.setAttribute("name","t"),t.appendChild(a),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",Y.option=!!t.lastChild})();var un={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};un.tbody=un.tfoot=un.colgroup=un.caption=un.thead,un.th=un.td,Y.option||(un.optgroup=un.option=[1,"<select multiple='multiple'>","</select>"]);function rn(e,t){var a;return typeof e.getElementsByTagName<"u"?a=e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?a=e.querySelectorAll(t||"*"):a=[],t===void 0||t&&X(e,t)?o.merge([e],a):a}function ct(e,t){for(var a=0,g=e.length;a<g;a++)me.set(e[a],"globalEval",!t||me.get(t[a],"globalEval"))}var hl=/<|&#?\w+;/;function Lt(e,t,a,g,x){for(var E,S,P,I,U,V,z=t.createDocumentFragment(),W=[],le=0,be=e.length;le<be;le++)if(E=e[le],E||E===0)if(te(E)==="object")o.merge(W,E.nodeType?[E]:E);else if(!hl.test(E))W.push(t.createTextNode(E));else{for(S=S||z.appendChild(t.createElement("div")),P=(Pt.exec(E)||["",""])[1].toLowerCase(),I=un[P]||un._default,S.innerHTML=I[1]+o.htmlPrefilter(E)+I[2],V=I[0];V--;)S=S.lastChild;o.merge(W,S.childNodes),S=z.firstChild,S.textContent=""}for(z.textContent="",le=0;E=W[le++];){if(g&&o.inArray(E,g)>-1){x&&x.push(E);continue}if(U=Dn(E),S=rn(z.appendChild(E),"script"),U&&ct(S),a)for(V=0;E=S[V++];)Dt.test(E.type||"")&&a.push(E)}return z}var Bt=/^([^.]*)(?:\.(.+)|)/;function Bn(){return!0}function Nn(){return!1}function ut(e,t,a,g,x,E){var S,P;if(typeof t=="object"){typeof a!="string"&&(g=g||a,a=void 0);for(P in t)ut(e,P,a,g,t[P],E);return e}if(g==null&&x==null?(x=a,g=a=void 0):x==null&&(typeof a=="string"?(x=g,g=void 0):(x=g,g=a,a=void 0)),x===!1)x=Nn;else if(!x)return e;return E===1&&(S=x,x=function(I){return o().off(I),S.apply(this,arguments)},x.guid=S.guid||(S.guid=o.guid++)),e.each(function(){o.event.add(this,t,x,g,a)})}o.event={global:{},add:function(e,t,a,g,x){var E,S,P,I,U,V,z,W,le,be,Be,je=me.get(e);if(Je(e))for(a.handler&&(E=a,a=E.handler,x=E.selector),x&&o.find.matchesSelector(Tn,x),a.guid||(a.guid=o.guid++),(I=je.events)||(I=je.events=Object.create(null)),(S=je.handle)||(S=je.handle=function(ze){return typeof o<"u"&&o.event.triggered!==ze.type?o.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ne)||[""],U=t.length;U--;)P=Bt.exec(t[U])||[],le=Be=P[1],be=(P[2]||"").split(".").sort(),le&&(z=o.event.special[le]||{},le=(x?z.delegateType:z.bindType)||le,z=o.event.special[le]||{},V=o.extend({type:le,origType:Be,data:g,handler:a,guid:a.guid,selector:x,needsContext:x&&o.expr.match.needsContext.test(x),namespace:be.join(".")},E),(W=I[le])||(W=I[le]=[],W.delegateCount=0,(!z.setup||z.setup.call(e,g,be,S)===!1)&&e.addEventListener&&e.addEventListener(le,S)),z.add&&(z.add.call(e,V),V.handler.guid||(V.handler.guid=a.guid)),x?W.splice(W.delegateCount++,0,V):W.push(V),o.event.global[le]=!0)},remove:function(e,t,a,g,x){var E,S,P,I,U,V,z,W,le,be,Be,je=me.hasData(e)&&me.get(e);if(!(!je||!(I=je.events))){for(t=(t||"").match(ne)||[""],U=t.length;U--;){if(P=Bt.exec(t[U])||[],le=Be=P[1],be=(P[2]||"").split(".").sort(),!le){for(le in I)o.event.remove(e,le+t[U],a,g,!0);continue}for(z=o.event.special[le]||{},le=(g?z.delegateType:z.bindType)||le,W=I[le]||[],P=P[2]&&new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"),S=E=W.length;E--;)V=W[E],(x||Be===V.origType)&&(!a||a.guid===V.guid)&&(!P||P.test(V.namespace))&&(!g||g===V.selector||g==="**"&&V.selector)&&(W.splice(E,1),V.selector&&W.delegateCount--,z.remove&&z.remove.call(e,V));S&&!W.length&&((!z.teardown||z.teardown.call(e,be,je.handle)===!1)&&o.removeEvent(e,le,je.handle),delete I[le])}o.isEmptyObject(I)&&me.remove(e,"handle events")}},dispatch:function(e){var t,a,g,x,E,S,P=new Array(arguments.length),I=o.event.fix(e),U=(me.get(this,"events")||Object.create(null))[I.type]||[],V=o.event.special[I.type]||{};for(P[0]=I,t=1;t<arguments.length;t++)P[t]=arguments[t];if(I.delegateTarget=this,!(V.preDispatch&&V.preDispatch.call(this,I)===!1)){for(S=o.event.handlers.call(this,I,U),t=0;(x=S[t++])&&!I.isPropagationStopped();)for(I.currentTarget=x.elem,a=0;(E=x.handlers[a++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||E.namespace===!1||I.rnamespace.test(E.namespace))&&(I.handleObj=E,I.data=E.data,g=((o.event.special[E.origType]||{}).handle||E.handler).apply(x.elem,P),g!==void 0&&(I.result=g)===!1&&(I.preventDefault(),I.stopPropagation()));return V.postDispatch&&V.postDispatch.call(this,I),I.result}},handlers:function(e,t){var a,g,x,E,S,P=[],I=t.delegateCount,U=e.target;if(I&&U.nodeType&&!(e.type==="click"&&e.button>=1)){for(;U!==this;U=U.parentNode||this)if(U.nodeType===1&&!(e.type==="click"&&U.disabled===!0)){for(E=[],S={},a=0;a<I;a++)g=t[a],x=g.selector+" ",S[x]===void 0&&(S[x]=g.needsContext?o(x,this).index(U)>-1:o.find(x,this,null,[U]).length),S[x]&&E.push(g);E.length&&P.push({elem:U,handlers:E})}}return U=this,I<t.length&&P.push({elem:U,handlers:t.slice(I)}),P},addProp:function(e,t){Object.defineProperty(o.Event.prototype,e,{enumerable:!0,configurable:!0,get:Z(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(a){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:a})}})},fix:function(e){return e[o.expando]?e:new o.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Vn.test(t.type)&&t.click&&X(t,"input")&&nt(t,"click",!0),!1},trigger:function(e){var t=this||e;return Vn.test(t.type)&&t.click&&X(t,"input")&&nt(t,"click"),!0},_default:function(e){var t=e.target;return Vn.test(t.type)&&t.click&&X(t,"input")&&me.get(t,"click")||X(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function nt(e,t,a){if(!a){me.get(e,t)===void 0&&o.event.add(e,t,Bn);return}me.set(e,t,!1),o.event.add(e,t,{namespace:!1,handler:function(g){var x,E=me.get(this,t);if(g.isTrigger&1&&this[t]){if(E)(o.event.special[t]||{}).delegateType&&g.stopPropagation();else if(E=j.call(arguments),me.set(this,t,E),this[t](),x=me.get(this,t),me.set(this,t,!1),E!==x)return g.stopImmediatePropagation(),g.preventDefault(),x}else E&&(me.set(this,t,o.event.trigger(E[0],E.slice(1),this)),g.stopPropagation(),g.isImmediatePropagationStopped=Bn)}})}o.removeEvent=function(e,t,a){e.removeEventListener&&e.removeEventListener(t,a)},o.Event=function(e,t){if(!(this instanceof o.Event))return new o.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Bn:Nn,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&o.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[o.expando]=!0},o.Event.prototype={constructor:o.Event,isDefaultPrevented:Nn,isPropagationStopped:Nn,isImmediatePropagationStopped:Nn,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Bn,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Bn,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Bn,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},o.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},o.event.addProp),o.each({focus:"focusin",blur:"focusout"},function(e,t){function a(g){if(G.documentMode){var x=me.get(this,"handle"),E=o.event.fix(g);E.type=g.type==="focusin"?"focus":"blur",E.isSimulated=!0,x(g),E.target===E.currentTarget&&x(E)}else o.event.simulate(t,g.target,o.event.fix(g))}o.event.special[e]={setup:function(){var g;if(nt(this,e,!0),G.documentMode)g=me.get(this,t),g||this.addEventListener(t,a),me.set(this,t,(g||0)+1);else return!1},trigger:function(){return nt(this,e),!0},teardown:function(){var g;if(G.documentMode)g=me.get(this,t)-1,g?me.set(this,t,g):(this.removeEventListener(t,a),me.remove(this,t));else return!1},_default:function(g){return me.get(g.target,e)},delegateType:t},o.event.special[t]={setup:function(){var g=this.ownerDocument||this.document||this,x=G.documentMode?this:g,E=me.get(x,t);E||(G.documentMode?this.addEventListener(t,a):g.addEventListener(e,a,!0)),me.set(x,t,(E||0)+1)},teardown:function(){var g=this.ownerDocument||this.document||this,x=G.documentMode?this:g,E=me.get(x,t)-1;E?me.set(x,t,E):(G.documentMode?this.removeEventListener(t,a):g.removeEventListener(e,a,!0),me.remove(x,t))}}}),o.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){o.event.special[e]={delegateType:t,bindType:t,handle:function(a){var g,x=this,E=a.relatedTarget,S=a.handleObj;return(!E||E!==x&&!o.contains(x,E))&&(a.type=S.origType,g=S.handler.apply(this,arguments),a.type=t),g}}}),o.fn.extend({on:function(e,t,a,g){return ut(this,e,t,a,g)},one:function(e,t,a,g){return ut(this,e,t,a,g,1)},off:function(e,t,a){var g,x;if(e&&e.preventDefault&&e.handleObj)return g=e.handleObj,o(e.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if(typeof e=="object"){for(x in e)this.off(x,t,e[x]);return this}return(t===!1||typeof t=="function")&&(a=t,t=void 0),a===!1&&(a=Nn),this.each(function(){o.event.remove(this,e,a,t)})}});var gl=/<script|<style|<link/i,_l=/checked\s*(?:[^=]|=\s*.checked.)/i,vl=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Nt(e,t){return X(e,"table")&&X(t.nodeType!==11?t:t.firstChild,"tr")&&o(e).children("tbody")[0]||e}function yl(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function Al(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Ut(e,t){var a,g,x,E,S,P,I;if(t.nodeType===1){if(me.hasData(e)&&(E=me.get(e),I=E.events,I)){me.remove(t,"handle events");for(x in I)for(a=0,g=I[x].length;a<g;a++)o.event.add(t,x,I[x][a])}ln.hasData(e)&&(S=ln.access(e),P=o.extend({},S),ln.set(t,P))}}function bl(e,t){var a=t.nodeName.toLowerCase();a==="input"&&Vn.test(e.type)?t.checked=e.checked:(a==="input"||a==="textarea")&&(t.defaultValue=e.defaultValue)}function Un(e,t,a,g){t=R(t);var x,E,S,P,I,U,V=0,z=e.length,W=z-1,le=t[0],be=Z(le);if(be||z>1&&typeof le=="string"&&!Y.checkClone&&_l.test(le))return e.each(function(Be){var je=e.eq(Be);be&&(t[0]=le.call(this,Be,je.html())),Un(je,t,a,g)});if(z&&(x=Lt(t,e[0].ownerDocument,!1,e,g),E=x.firstChild,x.childNodes.length===1&&(x=E),E||g)){for(S=o.map(rn(x,"script"),yl),P=S.length;V<z;V++)I=x,V!==W&&(I=o.clone(I,!0,!0),P&&o.merge(S,rn(I,"script"))),a.call(e[V],I,V);if(P)for(U=S[S.length-1].ownerDocument,o.map(S,Al),V=0;V<P;V++)I=S[V],Dt.test(I.type||"")&&!me.access(I,"globalEval")&&o.contains(U,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?o._evalUrl&&!I.noModule&&o._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},U):oe(I.textContent.replace(vl,""),I,U))}return e}function Ft(e,t,a){for(var g,x=t?o.filter(t,e):e,E=0;(g=x[E])!=null;E++)!a&&g.nodeType===1&&o.cleanData(rn(g)),g.parentNode&&(a&&Dn(g)&&ct(rn(g,"script")),g.parentNode.removeChild(g));return e}o.extend({htmlPrefilter:function(e){return e},clone:function(e,t,a){var g,x,E,S,P=e.cloneNode(!0),I=Dn(e);if(!Y.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!o.isXMLDoc(e))for(S=rn(P),E=rn(e),g=0,x=E.length;g<x;g++)bl(E[g],S[g]);if(t)if(a)for(E=E||rn(e),S=S||rn(P),g=0,x=E.length;g<x;g++)Ut(E[g],S[g]);else Ut(e,P);return S=rn(P,"script"),S.length>0&&ct(S,!I&&rn(e,"script")),P},cleanData:function(e){for(var t,a,g,x=o.event.special,E=0;(a=e[E])!==void 0;E++)if(Je(a)){if(t=a[me.expando]){if(t.events)for(g in t.events)x[g]?o.event.remove(a,g):o.removeEvent(a,g,t.handle);a[me.expando]=void 0}a[ln.expando]&&(a[ln.expando]=void 0)}}}),o.fn.extend({detach:function(e){return Ft(this,e,!0)},remove:function(e){return Ft(this,e)},text:function(e){return we(this,function(t){return t===void 0?o.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return Un(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Nt(this,e);t.appendChild(e)}})},prepend:function(){return Un(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Nt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Un(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Un(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(o.cleanData(rn(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return o.clone(this,e,t)})},html:function(e){return we(this,function(t){var a=this[0]||{},g=0,x=this.length;if(t===void 0&&a.nodeType===1)return a.innerHTML;if(typeof t=="string"&&!gl.test(t)&&!un[(Pt.exec(t)||["",""])[1].toLowerCase()]){t=o.htmlPrefilter(t);try{for(;g<x;g++)a=this[g]||{},a.nodeType===1&&(o.cleanData(rn(a,!1)),a.innerHTML=t);a=0}catch{}}a&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Un(this,arguments,function(t){var a=this.parentNode;o.inArray(this,e)<0&&(o.cleanData(rn(this)),a&&a.replaceChild(t,this))},e)}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){o.fn[e]=function(a){for(var g,x=[],E=o(a),S=E.length-1,P=0;P<=S;P++)g=P===S?this:this.clone(!0),o(E[P])[t](g),D.apply(x,g.get());return this.pushStack(x)}});var ft=new RegExp("^("+It+")(?!px)[a-z%]+$","i"),pt=/^--/,tt=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=_),t.getComputedStyle(e)},Wt=function(e,t,a){var g,x,E={};for(x in t)E[x]=e.style[x],e.style[x]=t[x];g=a.call(e);for(x in t)e.style[x]=E[x];return g},xl=new RegExp(xn.join("|"),"i");(function(){function e(){if(U){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",U.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Tn.appendChild(I).appendChild(U);var V=_.getComputedStyle(U);a=V.top!=="1%",P=t(V.marginLeft)===12,U.style.right="60%",E=t(V.right)===36,g=t(V.width)===36,U.style.position="absolute",x=t(U.offsetWidth/3)===12,Tn.removeChild(I),U=null}}function t(V){return Math.round(parseFloat(V))}var a,g,x,E,S,P,I=G.createElement("div"),U=G.createElement("div");U.style&&(U.style.backgroundClip="content-box",U.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle=U.style.backgroundClip==="content-box",o.extend(Y,{boxSizingReliable:function(){return e(),g},pixelBoxStyles:function(){return e(),E},pixelPosition:function(){return e(),a},reliableMarginLeft:function(){return e(),P},scrollboxSize:function(){return e(),x},reliableTrDimensions:function(){var V,z,W,le;return S==null&&(V=G.createElement("table"),z=G.createElement("tr"),W=G.createElement("div"),V.style.cssText="position:absolute;left:-11111px;border-collapse:separate",z.style.cssText="box-sizing:content-box;border:1px solid",z.style.height="1px",W.style.height="9px",W.style.display="block",Tn.appendChild(V).appendChild(z).appendChild(W),le=_.getComputedStyle(z),S=parseInt(le.height,10)+parseInt(le.borderTopWidth,10)+parseInt(le.borderBottomWidth,10)===z.offsetHeight,Tn.removeChild(V)),S}}))})();function Qn(e,t,a){var g,x,E,S,P=pt.test(t),I=e.style;return a=a||tt(e),a&&(S=a.getPropertyValue(t)||a[t],P&&S&&(S=S.replace(qe,"$1")||void 0),S===""&&!Dn(e)&&(S=o.style(e,t)),!Y.pixelBoxStyles()&&ft.test(S)&&xl.test(t)&&(g=I.width,x=I.minWidth,E=I.maxWidth,I.minWidth=I.maxWidth=I.width=S,S=a.width,I.width=g,I.minWidth=x,I.maxWidth=E)),S!==void 0?S+"":S}function qt(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var Kt=["Webkit","Moz","ms"],Yt=G.createElement("div").style,Ht={};function El(e){for(var t=e[0].toUpperCase()+e.slice(1),a=Kt.length;a--;)if(e=Kt[a]+t,e in Yt)return e}function dt(e){var t=o.cssProps[e]||Ht[e];return t||(e in Yt?e:Ht[e]=El(e)||e)}var Ml=/^(none|table(?!-c[ea]).+)/,wl={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:"0",fontWeight:"400"};function Qt(e,t,a){var g=Hn.exec(t);return g?Math.max(0,g[2]-(a||0))+(g[3]||"px"):t}function mt(e,t,a,g,x,E){var S=t==="width"?1:0,P=0,I=0,U=0;if(a===(g?"border":"content"))return 0;for(;S<4;S+=2)a==="margin"&&(U+=o.css(e,a+xn[S],!0,x)),g?(a==="content"&&(I-=o.css(e,"padding"+xn[S],!0,x)),a!=="margin"&&(I-=o.css(e,"border"+xn[S]+"Width",!0,x))):(I+=o.css(e,"padding"+xn[S],!0,x),a!=="padding"?I+=o.css(e,"border"+xn[S]+"Width",!0,x):P+=o.css(e,"border"+xn[S]+"Width",!0,x));return!g&&E>=0&&(I+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-E-I-P-.5))||0),I+U}function Zt(e,t,a){var g=tt(e),x=!Y.boxSizingReliable()||a,E=x&&o.css(e,"boxSizing",!1,g)==="border-box",S=E,P=Qn(e,t,g),I="offset"+t[0].toUpperCase()+t.slice(1);if(ft.test(P)){if(!a)return P;P="auto"}return(!Y.boxSizingReliable()&&E||!Y.reliableTrDimensions()&&X(e,"tr")||P==="auto"||!parseFloat(P)&&o.css(e,"display",!1,g)==="inline")&&e.getClientRects().length&&(E=o.css(e,"boxSizing",!1,g)==="border-box",S=I in e,S&&(P=e[I])),P=parseFloat(P)||0,P+mt(e,t,a||(E?"border":"content"),S,g,P)+"px"}o.extend({cssHooks:{opacity:{get:function(e,t){if(t){var a=Qn(e,"opacity");return a===""?"1":a}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,a,g){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var x,E,S,P=Fe(t),I=pt.test(t),U=e.style;if(I||(t=dt(P)),S=o.cssHooks[t]||o.cssHooks[P],a!==void 0){if(E=typeof a,E==="string"&&(x=Hn.exec(a))&&x[1]&&(a=Rt(e,t,x),E="number"),a==null||a!==a)return;E==="number"&&!I&&(a+=x&&x[3]||(o.cssNumber[P]?"":"px")),!Y.clearCloneStyle&&a===""&&t.indexOf("background")===0&&(U[t]="inherit"),(!S||!("set"in S)||(a=S.set(e,a,g))!==void 0)&&(I?U.setProperty(t,a):U[t]=a)}else return S&&"get"in S&&(x=S.get(e,!1,g))!==void 0?x:U[t]}},css:function(e,t,a,g){var x,E,S,P=Fe(t),I=pt.test(t);return I||(t=dt(P)),S=o.cssHooks[t]||o.cssHooks[P],S&&"get"in S&&(x=S.get(e,!0,a)),x===void 0&&(x=Qn(e,t,g)),x==="normal"&&t in Vt&&(x=Vt[t]),a===""||a?(E=parseFloat(x),a===!0||isFinite(E)?E||0:x):x}}),o.each(["height","width"],function(e,t){o.cssHooks[t]={get:function(a,g,x){if(g)return Ml.test(o.css(a,"display"))&&(!a.getClientRects().length||!a.getBoundingClientRect().width)?Wt(a,wl,function(){return Zt(a,t,x)}):Zt(a,t,x)},set:function(a,g,x){var E,S=tt(a),P=!Y.scrollboxSize()&&S.position==="absolute",I=P||x,U=I&&o.css(a,"boxSizing",!1,S)==="border-box",V=x?mt(a,t,x,U,S):0;return U&&P&&(V-=Math.ceil(a["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(S[t])-mt(a,t,"border",!1,S)-.5)),V&&(E=Hn.exec(g))&&(E[3]||"px")!=="px"&&(a.style[t]=g,g=o.css(a,t)),Qt(a,g,V)}}}),o.cssHooks.marginLeft=qt(Y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Qn(e,"marginLeft"))||e.getBoundingClientRect().left-Wt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),o.each({margin:"",padding:"",border:"Width"},function(e,t){o.cssHooks[e+t]={expand:function(a){for(var g=0,x={},E=typeof a=="string"?a.split(" "):[a];g<4;g++)x[e+xn[g]+t]=E[g]||E[g-2]||E[0];return x}},e!=="margin"&&(o.cssHooks[e+t].set=Qt)}),o.fn.extend({css:function(e,t){return we(this,function(a,g,x){var E,S,P={},I=0;if(Array.isArray(g)){for(E=tt(a),S=g.length;I<S;I++)P[g[I]]=o.css(a,g[I],!1,E);return P}return x!==void 0?o.style(a,g,x):o.css(a,g)},e,t,arguments.length>1)}});function an(e,t,a,g,x){return new an.prototype.init(e,t,a,g,x)}o.Tween=an,an.prototype={constructor:an,init:function(e,t,a,g,x,E){this.elem=e,this.prop=a,this.easing=x||o.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=g,this.unit=E||(o.cssNumber[a]?"":"px")},cur:function(){var e=an.propHooks[this.prop];return e&&e.get?e.get(this):an.propHooks._default.get(this)},run:function(e){var t,a=an.propHooks[this.prop];return this.options.duration?this.pos=t=o.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),a&&a.set?a.set(this):an.propHooks._default.set(this),this}},an.prototype.init.prototype=an.prototype,an.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=o.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){o.fx.step[e.prop]?o.fx.step[e.prop](e):e.elem.nodeType===1&&(o.cssHooks[e.prop]||e.elem.style[dt(e.prop)]!=null)?o.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},an.propHooks.scrollTop=an.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},o.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},o.fx=an.prototype.init,o.fx.step={};var Fn,lt,Sl=/^(?:toggle|show|hide)$/,Cl=/queueHooks$/;function ht(){lt&&(G.hidden===!1&&_.requestAnimationFrame?_.requestAnimationFrame(ht):_.setTimeout(ht,o.fx.interval),o.fx.tick())}function Gt(){return _.setTimeout(function(){Fn=void 0}),Fn=Date.now()}function rt(e,t){var a,g=0,x={height:e};for(t=t?1:0;g<4;g+=2-t)a=xn[g],x["margin"+a]=x["padding"+a]=e;return t&&(x.opacity=x.width=e),x}function Jt(e,t,a){for(var g,x=(dn.tweeners[t]||[]).concat(dn.tweeners["*"]),E=0,S=x.length;E<S;E++)if(g=x[E].call(a,t,e))return g}function kl(e,t,a){var g,x,E,S,P,I,U,V,z="width"in t||"height"in t,W=this,le={},be=e.style,Be=e.nodeType&&et(e),je=me.get(e,"fxshow");a.queue||(S=o._queueHooks(e,"fx"),S.unqueued==null&&(S.unqueued=0,P=S.empty.fire,S.empty.fire=function(){S.unqueued||P()}),S.unqueued++,W.always(function(){W.always(function(){S.unqueued--,o.queue(e,"fx").length||S.empty.fire()})}));for(g in t)if(x=t[g],Sl.test(x)){if(delete t[g],E=E||x==="toggle",x===(Be?"hide":"show"))if(x==="show"&&je&&je[g]!==void 0)Be=!0;else continue;le[g]=je&&je[g]||o.style(e,g)}if(I=!o.isEmptyObject(t),!(!I&&o.isEmptyObject(le))){z&&e.nodeType===1&&(a.overflow=[be.overflow,be.overflowX,be.overflowY],U=je&&je.display,U==null&&(U=me.get(e,"display")),V=o.css(e,"display"),V==="none"&&(U?V=U:(Ln([e],!0),U=e.style.display||U,V=o.css(e,"display"),Ln([e]))),(V==="inline"||V==="inline-block"&&U!=null)&&o.css(e,"float")==="none"&&(I||(W.done(function(){be.display=U}),U==null&&(V=be.display,U=V==="none"?"":V)),be.display="inline-block")),a.overflow&&(be.overflow="hidden",W.always(function(){be.overflow=a.overflow[0],be.overflowX=a.overflow[1],be.overflowY=a.overflow[2]})),I=!1;for(g in le)I||(je?"hidden"in je&&(Be=je.hidden):je=me.access(e,"fxshow",{display:U}),E&&(je.hidden=!Be),Be&&Ln([e],!0),W.done(function(){Be||Ln([e]),me.remove(e,"fxshow");for(g in le)o.style(e,g,le[g])})),I=Jt(Be?je[g]:0,g,W),g in je||(je[g]=I.start,Be&&(I.end=I.start,I.start=0))}}function jl(e,t){var a,g,x,E,S;for(a in e)if(g=Fe(a),x=t[g],E=e[a],Array.isArray(E)&&(x=E[1],E=e[a]=E[0]),a!==g&&(e[g]=E,delete e[a]),S=o.cssHooks[g],S&&"expand"in S){E=S.expand(E),delete e[g];for(a in E)a in e||(e[a]=E[a],t[a]=x)}else t[g]=x}function dn(e,t,a){var g,x,E=0,S=dn.prefilters.length,P=o.Deferred().always(function(){delete I.elem}),I=function(){if(x)return!1;for(var z=Fn||Gt(),W=Math.max(0,U.startTime+U.duration-z),le=W/U.duration||0,be=1-le,Be=0,je=U.tweens.length;Be<je;Be++)U.tweens[Be].run(be);return P.notifyWith(e,[U,be,W]),be<1&&je?W:(je||P.notifyWith(e,[U,1,0]),P.resolveWith(e,[U]),!1)},U=P.promise({elem:e,props:o.extend({},t),opts:o.extend(!0,{specialEasing:{},easing:o.easing._default},a),originalProperties:t,originalOptions:a,startTime:Fn||Gt(),duration:a.duration,tweens:[],createTween:function(z,W){var le=o.Tween(e,U.opts,z,W,U.opts.specialEasing[z]||U.opts.easing);return U.tweens.push(le),le},stop:function(z){var W=0,le=z?U.tweens.length:0;if(x)return this;for(x=!0;W<le;W++)U.tweens[W].run(1);return z?(P.notifyWith(e,[U,1,0]),P.resolveWith(e,[U,z])):P.rejectWith(e,[U,z]),this}}),V=U.props;for(jl(V,U.opts.specialEasing);E<S;E++)if(g=dn.prefilters[E].call(U,e,V,U.opts),g)return Z(g.stop)&&(o._queueHooks(U.elem,U.opts.queue).stop=g.stop.bind(g)),g;return o.map(V,Jt,U),Z(U.opts.start)&&U.opts.start.call(e,U),U.progress(U.opts.progress).done(U.opts.done,U.opts.complete).fail(U.opts.fail).always(U.opts.always),o.fx.timer(o.extend(I,{elem:e,anim:U,queue:U.opts.queue})),U}o.Animation=o.extend(dn,{tweeners:{"*":[function(e,t){var a=this.createTween(e,t);return Rt(a.elem,e,Hn.exec(t),a),a}]},tweener:function(e,t){Z(e)?(t=e,e=["*"]):e=e.match(ne);for(var a,g=0,x=e.length;g<x;g++)a=e[g],dn.tweeners[a]=dn.tweeners[a]||[],dn.tweeners[a].unshift(t)},prefilters:[kl],prefilter:function(e,t){t?dn.prefilters.unshift(e):dn.prefilters.push(e)}}),o.speed=function(e,t,a){var g=e&&typeof e=="object"?o.extend({},e):{complete:a||!a&&t||Z(e)&&e,duration:e,easing:a&&t||t&&!Z(t)&&t};return o.fx.off?g.duration=0:typeof g.duration!="number"&&(g.duration in o.fx.speeds?g.duration=o.fx.speeds[g.duration]:g.duration=o.fx.speeds._default),(g.queue==null||g.queue===!0)&&(g.queue="fx"),g.old=g.complete,g.complete=function(){Z(g.old)&&g.old.call(this),g.queue&&o.dequeue(this,g.queue)},g},o.fn.extend({fadeTo:function(e,t,a,g){return this.filter(et).css("opacity",0).show().end().animate({opacity:t},e,a,g)},animate:function(e,t,a,g){var x=o.isEmptyObject(e),E=o.speed(t,a,g),S=function(){var P=dn(this,o.extend({},e),E);(x||me.get(this,"finish"))&&P.stop(!0)};return S.finish=S,x||E.queue===!1?this.each(S):this.queue(E.queue,S)},stop:function(e,t,a){var g=function(x){var E=x.stop;delete x.stop,E(a)};return typeof e!="string"&&(a=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var x=!0,E=e!=null&&e+"queueHooks",S=o.timers,P=me.get(this);if(E)P[E]&&P[E].stop&&g(P[E]);else for(E in P)P[E]&&P[E].stop&&Cl.test(E)&&g(P[E]);for(E=S.length;E--;)S[E].elem===this&&(e==null||S[E].queue===e)&&(S[E].anim.stop(a),x=!1,S.splice(E,1));(x||!a)&&o.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,a=me.get(this),g=a[e+"queue"],x=a[e+"queueHooks"],E=o.timers,S=g?g.length:0;for(a.finish=!0,o.queue(this,e,[]),x&&x.stop&&x.stop.call(this,!0),t=E.length;t--;)E[t].elem===this&&E[t].queue===e&&(E[t].anim.stop(!0),E.splice(t,1));for(t=0;t<S;t++)g[t]&&g[t].finish&&g[t].finish.call(this);delete a.finish})}}),o.each(["toggle","show","hide"],function(e,t){var a=o.fn[t];o.fn[t]=function(g,x,E){return g==null||typeof g=="boolean"?a.apply(this,arguments):this.animate(rt(t,!0),g,x,E)}}),o.each({slideDown:rt("show"),slideUp:rt("hide"),slideToggle:rt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){o.fn[e]=function(a,g,x){return this.animate(t,a,g,x)}}),o.timers=[],o.fx.tick=function(){var e,t=0,a=o.timers;for(Fn=Date.now();t<a.length;t++)e=a[t],!e()&&a[t]===e&&a.splice(t--,1);a.length||o.fx.stop(),Fn=void 0},o.fx.timer=function(e){o.timers.push(e),o.fx.start()},o.fx.interval=13,o.fx.start=function(){lt||(lt=!0,ht())},o.fx.stop=function(){lt=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(e,t){return e=o.fx&&o.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(a,g){var x=_.setTimeout(a,e);g.stop=function(){_.clearTimeout(x)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),a=t.appendChild(G.createElement("option"));e.type="checkbox",Y.checkOn=e.value!=="",Y.optSelected=a.selected,e=G.createElement("input"),e.value="t",e.type="radio",Y.radioValue=e.value==="t"}();var zt,Zn=o.expr.attrHandle;o.fn.extend({attr:function(e,t){return we(this,o.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){o.removeAttr(this,e)})}}),o.extend({attr:function(e,t,a){var g,x,E=e.nodeType;if(!(E===3||E===8||E===2)){if(typeof e.getAttribute>"u")return o.prop(e,t,a);if((E!==1||!o.isXMLDoc(e))&&(x=o.attrHooks[t.toLowerCase()]||(o.expr.match.bool.test(t)?zt:void 0)),a!==void 0){if(a===null){o.removeAttr(e,t);return}return x&&"set"in x&&(g=x.set(e,a,t))!==void 0?g:(e.setAttribute(t,a+""),a)}return x&&"get"in x&&(g=x.get(e,t))!==null?g:(g=o.find.attr(e,t),g??void 0)}},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&t==="radio"&&X(e,"input")){var a=e.value;return e.setAttribute("type",t),a&&(e.value=a),t}}}},removeAttr:function(e,t){var a,g=0,x=t&&t.match(ne);if(x&&e.nodeType===1)for(;a=x[g++];)e.removeAttribute(a)}}),zt={set:function(e,t,a){return t===!1?o.removeAttr(e,a):e.setAttribute(a,a),a}},o.each(o.expr.match.bool.source.match(/\w+/g),function(e,t){var a=Zn[t]||o.find.attr;Zn[t]=function(g,x,E){var S,P,I=x.toLowerCase();return E||(P=Zn[I],Zn[I]=S,S=a(g,x,E)!=null?I:null,Zn[I]=P),S}});var Tl=/^(?:input|select|textarea|button)$/i,Il=/^(?:a|area)$/i;o.fn.extend({prop:function(e,t){return we(this,o.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[o.propFix[e]||e]})}}),o.extend({prop:function(e,t,a){var g,x,E=e.nodeType;if(!(E===3||E===8||E===2))return(E!==1||!o.isXMLDoc(e))&&(t=o.propFix[t]||t,x=o.propHooks[t]),a!==void 0?x&&"set"in x&&(g=x.set(e,a,t))!==void 0?g:e[t]=a:x&&"get"in x&&(g=x.get(e,t))!==null?g:e[t]},propHooks:{tabIndex:{get:function(e){var t=o.find.attr(e,"tabindex");return t?parseInt(t,10):Tl.test(e.nodeName)||Il.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Y.optSelected||(o.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});function In(e){var t=e.match(ne)||[];return t.join(" ")}function Rn(e){return e.getAttribute&&e.getAttribute("class")||""}function gt(e){return Array.isArray(e)?e:typeof e=="string"?e.match(ne)||[]:[]}o.fn.extend({addClass:function(e){var t,a,g,x,E,S;return Z(e)?this.each(function(P){o(this).addClass(e.call(this,P,Rn(this)))}):(t=gt(e),t.length?this.each(function(){if(g=Rn(this),a=this.nodeType===1&&" "+In(g)+" ",a){for(E=0;E<t.length;E++)x=t[E],a.indexOf(" "+x+" ")<0&&(a+=x+" ");S=In(a),g!==S&&this.setAttribute("class",S)}}):this)},removeClass:function(e){var t,a,g,x,E,S;return Z(e)?this.each(function(P){o(this).removeClass(e.call(this,P,Rn(this)))}):arguments.length?(t=gt(e),t.length?this.each(function(){if(g=Rn(this),a=this.nodeType===1&&" "+In(g)+" ",a){for(E=0;E<t.length;E++)for(x=t[E];a.indexOf(" "+x+" ")>-1;)a=a.replace(" "+x+" "," ");S=In(a),g!==S&&this.setAttribute("class",S)}}):this):this.attr("class","")},toggleClass:function(e,t){var a,g,x,E,S=typeof e,P=S==="string"||Array.isArray(e);return Z(e)?this.each(function(I){o(this).toggleClass(e.call(this,I,Rn(this),t),t)}):typeof t=="boolean"&&P?t?this.addClass(e):this.removeClass(e):(a=gt(e),this.each(function(){if(P)for(E=o(this),x=0;x<a.length;x++)g=a[x],E.hasClass(g)?E.removeClass(g):E.addClass(g);else(e===void 0||S==="boolean")&&(g=Rn(this),g&&me.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||e===!1?"":me.get(this,"__className__")||""))}))},hasClass:function(e){var t,a,g=0;for(t=" "+e+" ";a=this[g++];)if(a.nodeType===1&&(" "+In(Rn(a))+" ").indexOf(t)>-1)return!0;return!1}});var Rl=/\r/g;o.fn.extend({val:function(e){var t,a,g,x=this[0];return arguments.length?(g=Z(e),this.each(function(E){var S;this.nodeType===1&&(g?S=e.call(this,E,o(this).val()):S=e,S==null?S="":typeof S=="number"?S+="":Array.isArray(S)&&(S=o.map(S,function(P){return P==null?"":P+""})),t=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,S,"value")===void 0)&&(this.value=S))})):x?(t=o.valHooks[x.type]||o.valHooks[x.nodeName.toLowerCase()],t&&"get"in t&&(a=t.get(x,"value"))!==void 0?a:(a=x.value,typeof a=="string"?a.replace(Rl,""):a??"")):void 0}}),o.extend({valHooks:{option:{get:function(e){var t=o.find.attr(e,"value");return t??In(o.text(e))}},select:{get:function(e){var t,a,g,x=e.options,E=e.selectedIndex,S=e.type==="select-one",P=S?null:[],I=S?E+1:x.length;for(E<0?g=I:g=S?E:0;g<I;g++)if(a=x[g],(a.selected||g===E)&&!a.disabled&&(!a.parentNode.disabled||!X(a.parentNode,"optgroup"))){if(t=o(a).val(),S)return t;P.push(t)}return P},set:function(e,t){for(var a,g,x=e.options,E=o.makeArray(t),S=x.length;S--;)g=x[S],(g.selected=o.inArray(o.valHooks.option.get(g),E)>-1)&&(a=!0);return a||(e.selectedIndex=-1),E}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=o.inArray(o(e).val(),t)>-1}},Y.checkOn||(o.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var Gn=_.location,$t={guid:Date.now()},_t=/\?/;o.parseXML=function(e){var t,a;if(!e||typeof e!="string")return null;try{t=new _.DOMParser().parseFromString(e,"text/xml")}catch{}return a=t&&t.getElementsByTagName("parsererror")[0],(!t||a)&&o.error("Invalid XML: "+(a?o.map(a.childNodes,function(g){return g.textContent}).join(`
`):e)),t};var Xt=/^(?:focusinfocus|focusoutblur)$/,el=function(e){e.stopPropagation()};o.extend(o.event,{trigger:function(e,t,a,g){var x,E,S,P,I,U,V,z,W=[a||G],le=H.call(e,"type")?e.type:e,be=H.call(e,"namespace")?e.namespace.split("."):[];if(E=z=S=a=a||G,!(a.nodeType===3||a.nodeType===8)&&!Xt.test(le+o.event.triggered)&&(le.indexOf(".")>-1&&(be=le.split("."),le=be.shift(),be.sort()),I=le.indexOf(":")<0&&"on"+le,e=e[o.expando]?e:new o.Event(le,typeof e=="object"&&e),e.isTrigger=g?2:3,e.namespace=be.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+be.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=a),t=t==null?[e]:o.makeArray(t,[e]),V=o.event.special[le]||{},!(!g&&V.trigger&&V.trigger.apply(a,t)===!1))){if(!g&&!V.noBubble&&!re(a)){for(P=V.delegateType||le,Xt.test(P+le)||(E=E.parentNode);E;E=E.parentNode)W.push(E),S=E;S===(a.ownerDocument||G)&&W.push(S.defaultView||S.parentWindow||_)}for(x=0;(E=W[x++])&&!e.isPropagationStopped();)z=E,e.type=x>1?P:V.bindType||le,U=(me.get(E,"events")||Object.create(null))[e.type]&&me.get(E,"handle"),U&&U.apply(E,t),U=I&&E[I],U&&U.apply&&Je(E)&&(e.result=U.apply(E,t),e.result===!1&&e.preventDefault());return e.type=le,!g&&!e.isDefaultPrevented()&&(!V._default||V._default.apply(W.pop(),t)===!1)&&Je(a)&&I&&Z(a[le])&&!re(a)&&(S=a[I],S&&(a[I]=null),o.event.triggered=le,e.isPropagationStopped()&&z.addEventListener(le,el),a[le](),e.isPropagationStopped()&&z.removeEventListener(le,el),o.event.triggered=void 0,S&&(a[I]=S)),e.result}},simulate:function(e,t,a){var g=o.extend(new o.Event,a,{type:e,isSimulated:!0});o.event.trigger(g,null,t)}}),o.fn.extend({trigger:function(e,t){return this.each(function(){o.event.trigger(e,t,this)})},triggerHandler:function(e,t){var a=this[0];if(a)return o.event.trigger(e,t,a,!0)}});var Ol=/\[\]$/,nl=/\r?\n/g,Pl=/^(?:submit|button|image|reset|file)$/i,Dl=/^(?:input|select|textarea|keygen)/i;function vt(e,t,a,g){var x;if(Array.isArray(t))o.each(t,function(E,S){a||Ol.test(e)?g(e,S):vt(e+"["+(typeof S=="object"&&S!=null?E:"")+"]",S,a,g)});else if(!a&&te(t)==="object")for(x in t)vt(e+"["+x+"]",t[x],a,g);else g(e,t)}o.param=function(e,t){var a,g=[],x=function(E,S){var P=Z(S)?S():S;g[g.length]=encodeURIComponent(E)+"="+encodeURIComponent(P??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!o.isPlainObject(e))o.each(e,function(){x(this.name,this.value)});else for(a in e)vt(a,e[a],t,x);return g.join("&")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=o.prop(this,"elements");return e?o.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!o(this).is(":disabled")&&Dl.test(this.nodeName)&&!Pl.test(e)&&(this.checked||!Vn.test(e))}).map(function(e,t){var a=o(this).val();return a==null?null:Array.isArray(a)?o.map(a,function(g){return{name:t.name,value:g.replace(nl,`\r
`)}}):{name:t.name,value:a.replace(nl,`\r
`)}}).get()}});var Ll=/%20/g,Bl=/#.*$/,Nl=/([?&])_=[^&]*/,Ul=/^(.*?):[ \t]*([^\r\n]*)$/mg,Fl=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wl=/^(?:GET|HEAD)$/,ql=/^\/\//,tl={},yt={},ll="*/".concat("*"),At=G.createElement("a");At.href=Gn.href;function rl(e){return function(t,a){typeof t!="string"&&(a=t,t="*");var g,x=0,E=t.toLowerCase().match(ne)||[];if(Z(a))for(;g=E[x++];)g[0]==="+"?(g=g.slice(1)||"*",(e[g]=e[g]||[]).unshift(a)):(e[g]=e[g]||[]).push(a)}}function al(e,t,a,g){var x={},E=e===yt;function S(P){var I;return x[P]=!0,o.each(e[P]||[],function(U,V){var z=V(t,a,g);if(typeof z=="string"&&!E&&!x[z])return t.dataTypes.unshift(z),S(z),!1;if(E)return!(I=z)}),I}return S(t.dataTypes[0])||!x["*"]&&S("*")}function bt(e,t){var a,g,x=o.ajaxSettings.flatOptions||{};for(a in t)t[a]!==void 0&&((x[a]?e:g||(g={}))[a]=t[a]);return g&&o.extend(!0,e,g),e}function Kl(e,t,a){for(var g,x,E,S,P=e.contents,I=e.dataTypes;I[0]==="*";)I.shift(),g===void 0&&(g=e.mimeType||t.getResponseHeader("Content-Type"));if(g){for(x in P)if(P[x]&&P[x].test(g)){I.unshift(x);break}}if(I[0]in a)E=I[0];else{for(x in a){if(!I[0]||e.converters[x+" "+I[0]]){E=x;break}S||(S=x)}E=E||S}if(E)return E!==I[0]&&I.unshift(E),a[E]}function Yl(e,t,a,g){var x,E,S,P,I,U={},V=e.dataTypes.slice();if(V[1])for(S in e.converters)U[S.toLowerCase()]=e.converters[S];for(E=V.shift();E;)if(e.responseFields[E]&&(a[e.responseFields[E]]=t),!I&&g&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),I=E,E=V.shift(),E){if(E==="*")E=I;else if(I!=="*"&&I!==E){if(S=U[I+" "+E]||U["* "+E],!S){for(x in U)if(P=x.split(" "),P[1]===E&&(S=U[I+" "+P[0]]||U["* "+P[0]],S)){S===!0?S=U[x]:U[x]!==!0&&(E=P[0],V.unshift(P[1]));break}}if(S!==!0)if(S&&e.throws)t=S(t);else try{t=S(t)}catch(z){return{state:"parsererror",error:S?z:"No conversion from "+I+" to "+E}}}}return{state:"success",data:t}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Gn.href,type:"GET",isLocal:Fl.test(Gn.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ll,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?bt(bt(e,o.ajaxSettings),t):bt(o.ajaxSettings,e)},ajaxPrefilter:rl(tl),ajaxTransport:rl(yt),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var a,g,x,E,S,P,I,U,V,z,W=o.ajaxSetup({},t),le=W.context||W,be=W.context&&(le.nodeType||le.jquery)?o(le):o.event,Be=o.Deferred(),je=o.Callbacks("once memory"),ze=W.statusCode||{},Qe={},gn={},_n="canceled",Oe={readyState:0,getResponseHeader:function(Ne){var Ye;if(I){if(!E)for(E={};Ye=Ul.exec(x);)E[Ye[1].toLowerCase()+" "]=(E[Ye[1].toLowerCase()+" "]||[]).concat(Ye[2]);Ye=E[Ne.toLowerCase()+" "]}return Ye==null?null:Ye.join(", ")},getAllResponseHeaders:function(){return I?x:null},setRequestHeader:function(Ne,Ye){return I==null&&(Ne=gn[Ne.toLowerCase()]=gn[Ne.toLowerCase()]||Ne,Qe[Ne]=Ye),this},overrideMimeType:function(Ne){return I==null&&(W.mimeType=Ne),this},statusCode:function(Ne){var Ye;if(Ne)if(I)Oe.always(Ne[Oe.status]);else for(Ye in Ne)ze[Ye]=[ze[Ye],Ne[Ye]];return this},abort:function(Ne){var Ye=Ne||_n;return a&&a.abort(Ye),On(0,Ye),this}};if(Be.promise(Oe),W.url=((e||W.url||Gn.href)+"").replace(ql,Gn.protocol+"//"),W.type=t.method||t.type||W.method||W.type,W.dataTypes=(W.dataType||"*").toLowerCase().match(ne)||[""],W.crossDomain==null){P=G.createElement("a");try{P.href=W.url,P.href=P.href,W.crossDomain=At.protocol+"//"+At.host!=P.protocol+"//"+P.host}catch{W.crossDomain=!0}}if(W.data&&W.processData&&typeof W.data!="string"&&(W.data=o.param(W.data,W.traditional)),al(tl,W,t,Oe),I)return Oe;U=o.event&&W.global,U&&o.active++===0&&o.event.trigger("ajaxStart"),W.type=W.type.toUpperCase(),W.hasContent=!Wl.test(W.type),g=W.url.replace(Bl,""),W.hasContent?W.data&&W.processData&&(W.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(W.data=W.data.replace(Ll,"+")):(z=W.url.slice(g.length),W.data&&(W.processData||typeof W.data=="string")&&(g+=(_t.test(g)?"&":"?")+W.data,delete W.data),W.cache===!1&&(g=g.replace(Nl,"$1"),z=(_t.test(g)?"&":"?")+"_="+$t.guid+++z),W.url=g+z),W.ifModified&&(o.lastModified[g]&&Oe.setRequestHeader("If-Modified-Since",o.lastModified[g]),o.etag[g]&&Oe.setRequestHeader("If-None-Match",o.etag[g])),(W.data&&W.hasContent&&W.contentType!==!1||t.contentType)&&Oe.setRequestHeader("Content-Type",W.contentType),Oe.setRequestHeader("Accept",W.dataTypes[0]&&W.accepts[W.dataTypes[0]]?W.accepts[W.dataTypes[0]]+(W.dataTypes[0]!=="*"?", "+ll+"; q=0.01":""):W.accepts["*"]);for(V in W.headers)Oe.setRequestHeader(V,W.headers[V]);if(W.beforeSend&&(W.beforeSend.call(le,Oe,W)===!1||I))return Oe.abort();if(_n="abort",je.add(W.complete),Oe.done(W.success),Oe.fail(W.error),a=al(yt,W,t,Oe),!a)On(-1,"No Transport");else{if(Oe.readyState=1,U&&be.trigger("ajaxSend",[Oe,W]),I)return Oe;W.async&&W.timeout>0&&(S=_.setTimeout(function(){Oe.abort("timeout")},W.timeout));try{I=!1,a.send(Qe,On)}catch(Ne){if(I)throw Ne;On(-1,Ne)}}function On(Ne,Ye,zn,Et){var vn,$n,yn,Sn,Cn,fn=Ye;I||(I=!0,S&&_.clearTimeout(S),a=void 0,x=Et||"",Oe.readyState=Ne>0?4:0,vn=Ne>=200&&Ne<300||Ne===304,zn&&(Sn=Kl(W,Oe,zn)),!vn&&o.inArray("script",W.dataTypes)>-1&&o.inArray("json",W.dataTypes)<0&&(W.converters["text script"]=function(){}),Sn=Yl(W,Sn,Oe,vn),vn?(W.ifModified&&(Cn=Oe.getResponseHeader("Last-Modified"),Cn&&(o.lastModified[g]=Cn),Cn=Oe.getResponseHeader("etag"),Cn&&(o.etag[g]=Cn)),Ne===204||W.type==="HEAD"?fn="nocontent":Ne===304?fn="notmodified":(fn=Sn.state,$n=Sn.data,yn=Sn.error,vn=!yn)):(yn=fn,(Ne||!fn)&&(fn="error",Ne<0&&(Ne=0))),Oe.status=Ne,Oe.statusText=(Ye||fn)+"",vn?Be.resolveWith(le,[$n,fn,Oe]):Be.rejectWith(le,[Oe,fn,yn]),Oe.statusCode(ze),ze=void 0,U&&be.trigger(vn?"ajaxSuccess":"ajaxError",[Oe,W,vn?$n:yn]),je.fireWith(le,[Oe,fn]),U&&(be.trigger("ajaxComplete",[Oe,W]),--o.active||o.event.trigger("ajaxStop")))}return Oe},getJSON:function(e,t,a){return o.get(e,t,a,"json")},getScript:function(e,t){return o.get(e,void 0,t,"script")}}),o.each(["get","post"],function(e,t){o[t]=function(a,g,x,E){return Z(g)&&(E=E||x,x=g,g=void 0),o.ajax(o.extend({url:a,type:t,dataType:E,data:g,success:x},o.isPlainObject(a)&&a))}}),o.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),o._evalUrl=function(e,t,a){return o.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(g){o.globalEval(g,t,a)}})},o.fn.extend({wrapAll:function(e){var t;return this[0]&&(Z(e)&&(e=e.call(this[0])),t=o(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(e){return Z(e)?this.each(function(t){o(this).wrapInner(e.call(this,t))}):this.each(function(){var t=o(this),a=t.contents();a.length?a.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z(e);return this.each(function(a){o(this).wrapAll(t?e.call(this,a):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){o(this).replaceWith(this.childNodes)}),this}}),o.expr.pseudos.hidden=function(e){return!o.expr.pseudos.visible(e)},o.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},o.ajaxSettings.xhr=function(){try{return new _.XMLHttpRequest}catch{}};var Hl={0:200,1223:204},Jn=o.ajaxSettings.xhr();Y.cors=!!Jn&&"withCredentials"in Jn,Y.ajax=Jn=!!Jn,o.ajaxTransport(function(e){var t,a;if(Y.cors||Jn&&!e.crossDomain)return{send:function(g,x){var E,S=e.xhr();if(S.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(E in e.xhrFields)S[E]=e.xhrFields[E];e.mimeType&&S.overrideMimeType&&S.overrideMimeType(e.mimeType),!e.crossDomain&&!g["X-Requested-With"]&&(g["X-Requested-With"]="XMLHttpRequest");for(E in g)S.setRequestHeader(E,g[E]);t=function(P){return function(){t&&(t=a=S.onload=S.onerror=S.onabort=S.ontimeout=S.onreadystatechange=null,P==="abort"?S.abort():P==="error"?typeof S.status!="number"?x(0,"error"):x(S.status,S.statusText):x(Hl[S.status]||S.status,S.statusText,(S.responseType||"text")!=="text"||typeof S.responseText!="string"?{binary:S.response}:{text:S.responseText},S.getAllResponseHeaders()))}},S.onload=t(),a=S.onerror=S.ontimeout=t("error"),S.onabort!==void 0?S.onabort=a:S.onreadystatechange=function(){S.readyState===4&&_.setTimeout(function(){t&&a()})},t=t("abort");try{S.send(e.hasContent&&e.data||null)}catch(P){if(t)throw P}},abort:function(){t&&t()}}}),o.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return o.globalEval(e),e}}}),o.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),o.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,a;return{send:function(g,x){t=o("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",a=function(E){t.remove(),a=null,E&&x(E.type==="error"?404:200,E.type)}),G.head.appendChild(t[0])},abort:function(){a&&a()}}}});var il=[],xt=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=il.pop()||o.expando+"_"+$t.guid++;return this[e]=!0,e}}),o.ajaxPrefilter("json jsonp",function(e,t,a){var g,x,E,S=e.jsonp!==!1&&(xt.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&xt.test(e.data)&&"data");if(S||e.dataTypes[0]==="jsonp")return g=e.jsonpCallback=Z(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,S?e[S]=e[S].replace(xt,"$1"+g):e.jsonp!==!1&&(e.url+=(_t.test(e.url)?"&":"?")+e.jsonp+"="+g),e.converters["script json"]=function(){return E||o.error(g+" was not called"),E[0]},e.dataTypes[0]="json",x=_[g],_[g]=function(){E=arguments},a.always(function(){x===void 0?o(_).removeProp(g):_[g]=x,e[g]&&(e.jsonpCallback=t.jsonpCallback,il.push(g)),E&&Z(x)&&x(E[0]),E=x=void 0}),"script"}),Y.createHTMLDocument=function(){var e=G.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),o.parseHTML=function(e,t,a){if(typeof e!="string")return[];typeof t=="boolean"&&(a=t,t=!1);var g,x,E;return t||(Y.createHTMLDocument?(t=G.implementation.createHTMLDocument(""),g=t.createElement("base"),g.href=G.location.href,t.head.appendChild(g)):t=G),x=Ge.exec(e),E=!a&&[],x?[t.createElement(x[1])]:(x=Lt([e],t,E),E&&E.length&&o(E).remove(),o.merge([],x.childNodes))},o.fn.load=function(e,t,a){var g,x,E,S=this,P=e.indexOf(" ");return P>-1&&(g=In(e.slice(P)),e=e.slice(0,P)),Z(t)?(a=t,t=void 0):t&&typeof t=="object"&&(x="POST"),S.length>0&&o.ajax({url:e,type:x||"GET",dataType:"html",data:t}).done(function(I){E=arguments,S.html(g?o("<div>").append(o.parseHTML(I)).find(g):I)}).always(a&&function(I,U){S.each(function(){a.apply(this,E||[I.responseText,U,I])})}),this},o.expr.pseudos.animated=function(e){return o.grep(o.timers,function(t){return e===t.elem}).length},o.offset={setOffset:function(e,t,a){var g,x,E,S,P,I,U,V=o.css(e,"position"),z=o(e),W={};V==="static"&&(e.style.position="relative"),P=z.offset(),E=o.css(e,"top"),I=o.css(e,"left"),U=(V==="absolute"||V==="fixed")&&(E+I).indexOf("auto")>-1,U?(g=z.position(),S=g.top,x=g.left):(S=parseFloat(E)||0,x=parseFloat(I)||0),Z(t)&&(t=t.call(e,a,o.extend({},P))),t.top!=null&&(W.top=t.top-P.top+S),t.left!=null&&(W.left=t.left-P.left+x),"using"in t?t.using.call(e,W):z.css(W)}},o.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(x){o.offset.setOffset(this,e,x)});var t,a,g=this[0];if(g)return g.getClientRects().length?(t=g.getBoundingClientRect(),a=g.ownerDocument.defaultView,{top:t.top+a.pageYOffset,left:t.left+a.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,a,g=this[0],x={top:0,left:0};if(o.css(g,"position")==="fixed")t=g.getBoundingClientRect();else{for(t=this.offset(),a=g.ownerDocument,e=g.offsetParent||a.documentElement;e&&(e===a.body||e===a.documentElement)&&o.css(e,"position")==="static";)e=e.parentNode;e&&e!==g&&e.nodeType===1&&(x=o(e).offset(),x.top+=o.css(e,"borderTopWidth",!0),x.left+=o.css(e,"borderLeftWidth",!0))}return{top:t.top-x.top-o.css(g,"marginTop",!0),left:t.left-x.left-o.css(g,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&o.css(e,"position")==="static";)e=e.offsetParent;return e||Tn})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var a=t==="pageYOffset";o.fn[e]=function(g){return we(this,function(x,E,S){var P;if(re(x)?P=x:x.nodeType===9&&(P=x.defaultView),S===void 0)return P?P[t]:x[E];P?P.scrollTo(a?P.pageXOffset:S,a?S:P.pageYOffset):x[E]=S},e,g,arguments.length)}}),o.each(["top","left"],function(e,t){o.cssHooks[t]=qt(Y.pixelPosition,function(a,g){if(g)return g=Qn(a,t),ft.test(g)?o(a).position()[t]+"px":g})}),o.each({Height:"height",Width:"width"},function(e,t){o.each({padding:"inner"+e,content:t,"":"outer"+e},function(a,g){o.fn[g]=function(x,E){var S=arguments.length&&(a||typeof x!="boolean"),P=a||(x===!0||E===!0?"margin":"border");return we(this,function(I,U,V){var z;return re(I)?g.indexOf("outer")===0?I["inner"+e]:I.document.documentElement["client"+e]:I.nodeType===9?(z=I.documentElement,Math.max(I.body["scroll"+e],z["scroll"+e],I.body["offset"+e],z["offset"+e],z["client"+e])):V===void 0?o.css(I,U,P):o.style(I,U,V,P)},t,S?x:void 0,S)}})}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){o.fn[t]=function(a){return this.on(t,a)}}),o.fn.extend({bind:function(e,t,a){return this.on(e,null,t,a)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,a,g){return this.on(t,e,a,g)},undelegate:function(e,t,a){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",a)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),o.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){o.fn[t]=function(a,g){return arguments.length>0?this.on(t,null,a,g):this.trigger(t)}});var Vl=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;o.proxy=function(e,t){var a,g,x;if(typeof t=="string"&&(a=e[t],t=e,e=a),!!Z(e))return g=j.call(arguments,2),x=function(){return e.apply(t||this,g.concat(j.call(arguments)))},x.guid=e.guid=e.guid||o.guid++,x},o.holdReady=function(e){e?o.readyWait++:o.ready(!0)},o.isArray=Array.isArray,o.parseJSON=JSON.parse,o.nodeName=X,o.isFunction=Z,o.isWindow=re,o.camelCase=Fe,o.type=te,o.now=Date.now,o.isNumeric=function(e){var t=o.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},o.trim=function(e){return e==null?"":(e+"").replace(Vl,"$1")};var Ql=_.jQuery,Zl=_.$;return o.noConflict=function(e){return _.$===o&&(_.$=Zl),e&&_.jQuery===o&&(_.jQuery=Ql),o},typeof A>"u"&&(_.jQuery=_.$=o),o})}(jquery)),jquery.exports}(function(module,exports){(function(_,A){module.exports=A(requireJquery(),reactExports)})(self,function(__WEBPACK_EXTERNAL_MODULE_jquery__,__WEBPACK_EXTERNAL_MODULE_react__){return(()=>{var __webpack_modules__={"./src/components/MapContainer/MapContainer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* binding */ MapContainer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/MapContainer/styles.module.scss");



const MapContainer = ({
  containerRef,
  className,
  style
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  style: style,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_styles_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].root, className),
  ref: containerRef
});

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/MapContainer.tsx?`)},"./src/components/MapContainer/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapContainer": () => (/* reexport safe */ _MapContainer__WEBPACK_IMPORTED_MODULE_0__.MapContainer)
/* harmony export */ });
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MapContainer */ "./src/components/MapContainer/MapContainer.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/index.ts?`)},"./src/components/MultiMap/MultiMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* binding */ MultiMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const MultiMap = ({
  mapRef,
  style,
  className,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;
    const {
      main,
      ...rest
    } = props;
    const {
      map: {
        name,
        content
      },
      ...restMain
    } = main;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).multiMap({
        main: { ...restMain,
          map: name
        },
        ...rest
      });
    }
  }, [mapRef, props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    style: style,
    className: className,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/MultiMap.tsx?`)},"./src/components/MultiMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_0__.MultiMap)
/* harmony export */ });
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/MultiMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MultiMap/index.ts?`)},"./src/components/VectorMap/VectorMap.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* binding */ VectorMap)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapContainer */ "./src/components/MapContainer/index.ts");



const VectorMap = ({
  map,
  mapRef,
  style,
  className,
  series,
  ...props
}) => {
  const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    const mapContainer = containerRef.current;

    if (!map) {
      console.error("[react-jvectormap]: no map was loaded!");
    }

    const {
      name,
      content
    } = map;
    jquery__WEBPACK_IMPORTED_MODULE_1___default().fn.vectorMap("addMap", name, content);

    if (mapContainer) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap({
        map: name,
        series,
        ...props
      });

      if (map && (mapRef === null || mapRef === void 0 ? void 0 : mapRef.current) === null) {
        mapRef.current = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      }
    }
  }, [map, mapRef, props, series]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const mapContainer = containerRef.current;

    if (series && mapContainer) {
      const map = jquery__WEBPACK_IMPORTED_MODULE_1___default()(mapContainer).vectorMap("get", "mapObject");
      const {
        markers = [],
        regions = []
      } = series;
      regions.forEach(({
        values
      }, index) => {
        var _map$series;

        if (values && (_map$series = map.series) !== null && _map$series !== void 0 && _map$series.regions) {
          var _map$series2, _map$series2$regions$;

          (_map$series2 = map.series) === null || _map$series2 === void 0 ? void 0 : (_map$series2$regions$ = _map$series2.regions[index]) === null || _map$series2$regions$ === void 0 ? void 0 : _map$series2$regions$.clearAndSet(values);
        }
      });
      markers.forEach(({
        values
      }, index) => {
        var _map$series3;

        if (values && (_map$series3 = map.series) !== null && _map$series3 !== void 0 && _map$series3.markers) {
          var _map$series4, _map$series4$markers$;

          (_map$series4 = map.series) === null || _map$series4 === void 0 ? void 0 : (_map$series4$markers$ = _map$series4.markers[index]) === null || _map$series4$markers$ === void 0 ? void 0 : _map$series4$markers$.clearAndSet(values);
        }
      });
    }
  }, [series]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
    className: className,
    style: style,
    containerRef: containerRef
  });
};

//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/VectorMap.tsx?`)},"./src/components/VectorMap/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/VectorMap.tsx");


//# sourceURL=webpack://@react-jvectormap/core/./src/components/VectorMap/index.ts?`)},"./src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMap": () => (/* reexport safe */ _VectorMap__WEBPACK_IMPORTED_MODULE_0__.VectorMap),
/* harmony export */   "MultiMap": () => (/* reexport safe */ _MultiMap__WEBPACK_IMPORTED_MODULE_1__.MultiMap)
/* harmony export */ });
/* harmony import */ var _VectorMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMap */ "./src/components/VectorMap/index.ts");
/* harmony import */ var _MultiMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiMap */ "./src/components/MultiMap/index.ts");



//# sourceURL=webpack://@react-jvectormap/core/./src/components/index.ts?`)},"./src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.MultiMap),
/* harmony export */   "VectorMap": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_2__.VectorMap),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_3__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/lib */ "../jvectormap/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");




(0,_react_jvectormap_lib__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)((jquery__WEBPACK_IMPORTED_MODULE_1___default()));

//# sourceURL=webpack://@react-jvectormap/core/./src/index.ts?`)},"./src/utils/builders/AttributeSeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* binding */ AttributeSeriesBuilder)
/* harmony export */ });
class AttributeSeriesBuilder {
  constructor(attribute) {
    this.attribute = attribute;
  }
  /**
   *
   * @param value
   */


  setAttribute(value) {
    this.attribute = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setScale(value) {
    this.scale = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setValues(value) {
    this.values = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setNormalizeFunction(value) {
    this.normalizeFunction = value;
    return this;
  }

  build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/AttributeSeriesBuilder.ts?`)},"./src/utils/builders/LabelsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsBuilder": () => (/* binding */ LabelsBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class LabelsBuilder {
  /**
   *
   * @param values
   */
  addMarkersLabelProps(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsLabelProps(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsBuilder.ts?`)},"./src/utils/builders/LabelsPropsBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelsPropsBuilder": () => (/* binding */ LabelsPropsBuilder)
/* harmony export */ });
class LabelsPropsBuilder {
  constructor(render, offsets) {
    this.render = render;
    this.offsets = offsets;
  }
  /**
   *
   * @param render
   */


  setRender(render) {
    this.render = render;
    return this;
  }
  /**
   *
   * @param offsets
   */


  setOffsets(offsets) {
    this.offsets = offsets;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      render: this.render,
      offsets: this.offsets
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/LabelsPropsBuilder.ts?`)},"./src/utils/builders/MarkerBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarkerBuilder": () => (/* binding */ MarkerBuilder)
/* harmony export */ });
class MarkerBuilder {
  constructor(value) {
    this.name = value;
  }
  /**
   *
   * @param value
   */


  setName(value) {
    this.name = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setCoords(value) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setLatLng(value) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setStyle(value) {
    this.style = value;
    return this;
  }
  /**
   *
   */


  build() {
    const commonProps = {
      name: this.name,
      style: this.style
    };

    if (this.coords) {
      return { ...commonProps,
        coords: this.coords
      };
    } else if (this.latLng) {
      return { ...commonProps,
        latLng: this.latLng
      };
    }

    return { ...commonProps,
      latLng: [0, 0]
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MarkerBuilder.ts?`)},"./src/utils/builders/MultiMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiMapBuilder": () => (/* binding */ MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class MultiMapBuilder {
  constructor(mainMap, maxLevel = 1) {
    this.main = {
      map: mainMap
    };
    this.maxLevel = maxLevel;
  }
  /**
   *
   * @param value
   */


  setMainMap(value) {
    this.main.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMaxLevel(value) {
    this.maxLevel = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMapNameByCode(value) {
    this.mapNameByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setUrlByCode(value) {
    this.mapUrlByCode = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setGetDrillDownMap(value) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel
    };
    return { ...baseProps,
      ...(0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap
      })
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/MultiMapBuilder.ts?`)},"./src/utils/builders/SeriesBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeriesBuilder": () => (/* binding */ SeriesBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class SeriesBuilder {
  /**
   *
   * @param values
   */
  addMarkersSeries(...values) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(...values);
    return this;
  }
  /**
   *
   * @param values
   */


  addRegionsSeries(...values) {
    if (!this.regions) {
      this.regions = [];
    }

    this.regions.push(...values);
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      markers: this.markers,
      regions: this.regions
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/SeriesBuilder.ts?`)},"./src/utils/builders/StyleBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleBuilder": () => (/* binding */ StyleBuilder)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils/builders/utils.ts");

class StyleBuilder {
  /**
   *
   * @param value
   */
  setInitial(value) {
    this.initial = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelected(value) {
    this.selected = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setHover(value) {
    this.hover = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedHover(value) {
    this.selectedHover = value;
    return this;
  }

  build() {
    return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.stripUndefinedValues)({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial
    });
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/StyleBuilder.ts?`)},"./src/utils/builders/VectorMapBuilder.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* binding */ VectorMapBuilder)
/* harmony export */ });
class VectorMapBuilder {
  selectedRegions = [];

  constructor(map) {
    this.map = map;
  }
  /**
   *
   * @param value
   */


  setMap(value) {
    this.map = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setBackgroundColor(value) {
    this.backgroundColor = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMin(value) {
    this.zoomMin = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setZoomMax(value) {
    this.zoomMax = value;
    return this;
  }
  /**
   *
   * @param marker
   */


  addMarker(marker) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push(marker);
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkerStyle(value) {
    this.markerStyle = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setRegionStyle(value) {
    this.regionStyle = value;
    return this;
  }
  /**
   *
   * @param value
   * @private
   */


  setMarkersSelectable(value) {
    this.markersSelectable = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setMarkers(value) {
    this.markers = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setRegionsSelectable(value) {
    this.regionsSelectable = value;
    return this;
  }
  /**
   *
   * @private
   * @param value
   */


  setOnRegionTipShow(value) {
    this.onRegionTipShow = value;
    return this;
  }
  /**
   *
   * @param value
   */


  setSeries(value) {
    this.series = value;
    return this;
  }
  /**
   *
   * @param values
   */


  setLabels(values) {
    this.labels = values;
    return this;
  }
  /**
   *
   * @param value
   */


  setSelectedRegions(value) {
    this.selectedRegions = value;
    return this;
  }
  /**
   *
   */


  build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions
    };
  }

}

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/VectorMapBuilder.ts?`)},"./src/utils/builders/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__.MarkerBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__.StyleBuilder),
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__.AttributeSeriesBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__.SeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__.LabelsPropsBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__.MultiMapBuilder)
/* harmony export */ });
/* harmony import */ var _VectorMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VectorMapBuilder */ "./src/utils/builders/VectorMapBuilder.ts");
/* harmony import */ var _MarkerBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkerBuilder */ "./src/utils/builders/MarkerBuilder.ts");
/* harmony import */ var _StyleBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StyleBuilder */ "./src/utils/builders/StyleBuilder.ts");
/* harmony import */ var _AttributeSeriesBuilder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AttributeSeriesBuilder */ "./src/utils/builders/AttributeSeriesBuilder.ts");
/* harmony import */ var _SeriesBuilder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeriesBuilder */ "./src/utils/builders/SeriesBuilder.ts");
/* harmony import */ var _LabelsBuilder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LabelsBuilder */ "./src/utils/builders/LabelsBuilder.ts");
/* harmony import */ var _LabelsPropsBuilder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabelsPropsBuilder */ "./src/utils/builders/LabelsPropsBuilder.ts");
/* harmony import */ var _MultiMapBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MultiMapBuilder */ "./src/utils/builders/MultiMapBuilder.ts");









//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/index.ts?`)},"./src/utils/builders/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stripUndefinedValues": () => (/* binding */ stripUndefinedValues)
/* harmony export */ });
/**
 * remove undefined values from object
 * @param object
 */
const stripUndefinedValues = object => Object.fromEntries(Object.entries(object).filter(entry => entry[1] !== undefined));

//# sourceURL=webpack://@react-jvectormap/core/./src/utils/builders/utils.ts?`)},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AttributeSeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.AttributeSeriesBuilder),
/* harmony export */   "LabelsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsBuilder),
/* harmony export */   "LabelsPropsBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.LabelsPropsBuilder),
/* harmony export */   "MarkerBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MarkerBuilder),
/* harmony export */   "MultiMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.MultiMapBuilder),
/* harmony export */   "SeriesBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.SeriesBuilder),
/* harmony export */   "StyleBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.StyleBuilder),
/* harmony export */   "VectorMapBuilder": () => (/* reexport safe */ _builders__WEBPACK_IMPORTED_MODULE_0__.VectorMapBuilder)
/* harmony export */ });
/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ "./src/utils/builders/index.ts");


//# sourceURL=webpack://@react-jvectormap/core/./src/utils/index.ts?`)},"../../node_modules/classnames/index.js":(module,exports)=>{eval(`var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/classnames/index.js?`)},"../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss":(module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "../../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/gif;base64,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 */ "data:image/gif;base64,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"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".jvectormap-tip {\\n  position: absolute;\\n  display: none;\\n  border: solid 1px #cdcdcd;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  font-family: sans-serif, Verdana;\\n  font-size: smaller;\\n  padding: 3px;\\n}\\n\\n._u5cITtZnGk9D_6uoElx {\\n  height: 100%;\\n  width: 100%;\\n}\\n._u5cITtZnGk9D_6uoElx svg {\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-container {\\n  width: 100%;\\n  height: 100%;\\n  position: relative;\\n  overflow: hidden;\\n  touch-action: none;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomin {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 10px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-zoomout {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  padding: 3px;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  width: 10px;\\n  height: 10px;\\n  top: 30px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-goback {\\n  position: absolute;\\n  left: 10px;\\n  border-radius: 3px;\\n  background: #292929;\\n  color: white;\\n  cursor: pointer;\\n  line-height: 10px;\\n  text-align: center;\\n  box-sizing: content-box;\\n  bottom: 10px;\\n  z-index: 1000;\\n  padding: 6px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-spinner {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background: center no-repeat url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-title {\\n  font-weight: bold;\\n  font-size: 14px;\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt {\\n  position: absolute;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h {\\n  bottom: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend {\\n  float: left;\\n  margin: 0 10px 10px 0;\\n  padding: 3px 3px 1px 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend .jvectormap-legend-tick {\\n  float: left;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick {\\n  width: 40px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-sample {\\n  height: 15px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-h .jvectormap-legend-tick-text {\\n  text-align: center;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v {\\n  top: 0;\\n  right: 0;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend {\\n  margin: 10px 10px 0 0;\\n  padding: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-sample {\\n  height: 20px;\\n  width: 20px;\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-cnt-v .jvectormap-legend-tick-text {\\n  display: inline-block;\\n  vertical-align: middle;\\n  line-height: 20px;\\n  padding-left: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend {\\n  background: black;\\n  color: white;\\n  border-radius: 3px;\\n}\\n._u5cITtZnGk9D_6uoElx .jvectormap-legend-tick-text {\\n  font-size: 12px;\\n}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"root": "_u5cITtZnGk9D_6uoElx"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js`)},"../../node_modules/css-loader/dist/runtime/api.js":module=>{eval(`

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/api.js?`)},"../../node_modules/css-loader/dist/runtime/getUrl.js":module=>{eval(`

module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {
    return "\\"".concat(url.replace(/"/g, '\\\\"').replace(/\\n/g, "\\\\n"), "\\"");
  }

  return url;
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/getUrl.js?`)},"../../node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{eval(`

module.exports = function (i) {
  return i[1];
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?`)},"./src/components/MapContainer/styles.module.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js!./styles.module.scss */ "../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./src/components/MapContainer/styles.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


//# sourceURL=webpack://@react-jvectormap/core/./src/components/MapContainer/styles.module.scss?`)},"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{eval(`

var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?`)},"../../node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{eval(`

var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertBySelector.js?`)},"../../node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{eval(`

/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?`)},"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval(`

/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?`)},"../../node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{eval(`

/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?`)},"../../node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{eval(`

/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

//# sourceURL=webpack://@react-jvectormap/core/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?`)},"../jquery-mousewheel/jquery.mousewheel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJQueryMouseWheel": () => (/* binding */ loadJQueryMouseWheel)
/* harmony export */ });
/*!
 * jQuery Mousewheel 3.1.13
 * Copyright OpenJS Foundation and other contributors
 */

const loadJQueryMouseWheel = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    var toFix = [
        "wheel",
        "mousewheel",
        "DOMMouseScroll",
        "MozMousePixelScroll",
      ],
      toBind =
        "onwheel" in window.document || window.document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      slice = Array.prototype.slice,
      nullLowestDeltaTimeout,
      lowestDelta;

    if ($.event.fixHooks) {
      for (var i = toFix.length; i; ) {
        $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
      }
    }

    var special = ($.event.special.mousewheel = {
      version: "3.1.12",

      setup: function () {
        if (this.addEventListener) {
          for (var i = toBind.length; i; ) {
            this.addEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = handler;
        }

        // Store the line height and page height for this particular element
        $.data(this, "mousewheel-line-height", special.getLineHeight(this));
        $.data(this, "mousewheel-page-height", special.getPageHeight(this));
      },

      teardown: function () {
        if (this.removeEventListener) {
          for (var i = toBind.length; i; ) {
            this.removeEventListener(toBind[--i], handler, false);
          }
        } else {
          this.onmousewheel = null;
        }

        // Clean up the data we added to the element
        $.removeData(this, "mousewheel-line-height");
        $.removeData(this, "mousewheel-page-height");
      },

      getLineHeight: function (elem) {
        var $elem = $(elem),
          $parent = $elem["offsetParent" in $.fn ? "offsetParent" : "parent"]();
        if (!$parent.length) {
          $parent = $("body");
        }
        return (
          parseInt($parent.css("fontSize"), 10) ||
          parseInt($elem.css("fontSize"), 10) ||
          16
        );
      },

      getPageHeight: function (elem) {
        return $(elem).height();
      },

      settings: {
        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
        normalizeOffset: true, // calls getBoundingClientRect for each event
      },
    });

    $.fn.extend({
      mousewheel: function (fn) {
        return fn ? this.on("mousewheel", fn) : this.trigger("mousewheel");
      },

      unmousewheel: function (fn) {
        return this.off("mousewheel", fn);
      },
    });

    function handler(event) {
      var orgEvent = event || window.event,
        args = slice.call(arguments, 1),
        delta = 0,
        deltaX = 0,
        deltaY = 0,
        absDelta = 0;
      event = $.event.fix(orgEvent);
      event.type = "mousewheel";

      // Old school scrollwheel delta
      if ("detail" in orgEvent) {
        deltaY = orgEvent.detail * -1;
      }
      if ("wheelDelta" in orgEvent) {
        deltaY = orgEvent.wheelDelta;
      }
      if ("wheelDeltaY" in orgEvent) {
        deltaY = orgEvent.wheelDeltaY;
      }
      if ("wheelDeltaX" in orgEvent) {
        deltaX = orgEvent.wheelDeltaX * -1;
      }

      // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
      if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
        deltaX = deltaY * -1;
        deltaY = 0;
      }

      // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
      delta = deltaY === 0 ? deltaX : deltaY;

      // New school wheel delta (wheel event)
      if ("deltaY" in orgEvent) {
        deltaY = orgEvent.deltaY * -1;
        delta = deltaY;
      }
      if ("deltaX" in orgEvent) {
        deltaX = orgEvent.deltaX;
        if (deltaY === 0) {
          delta = deltaX * -1;
        }
      }

      // No change actually happened, no reason to go any further
      if (deltaY === 0 && deltaX === 0) {
        return;
      }

      // Need to convert lines and pages to pixels if we aren't already in pixels
      // There are three delta modes:
      //   * deltaMode 0 is by pixels, nothing to do
      //   * deltaMode 1 is by lines
      //   * deltaMode 2 is by pages
      if (orgEvent.deltaMode === 1) {
        var lineHeight = $.data(this, "mousewheel-line-height");
        delta *= lineHeight;
        deltaY *= lineHeight;
        deltaX *= lineHeight;
      } else if (orgEvent.deltaMode === 2) {
        var pageHeight = $.data(this, "mousewheel-page-height");
        delta *= pageHeight;
        deltaY *= pageHeight;
        deltaX *= pageHeight;
      }

      // Store lowest absolute delta to normalize the delta values
      absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

      if (!lowestDelta || absDelta < lowestDelta) {
        lowestDelta = absDelta;

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
          lowestDelta /= 40;
        }
      }

      // Adjust older deltas if necessary
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        // Divide all the things by 40!
        delta /= 40;
        deltaX /= 40;
        deltaY /= 40;
      }

      // Get a whole, normalized value for the deltas
      delta = Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta);
      deltaX = Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta);
      deltaY = Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta);

      // Normalise offsetX and offsetY properties
      if (special.settings.normalizeOffset && this.getBoundingClientRect) {
        var boundingRect = this.getBoundingClientRect();
        event.offsetX = event.clientX - boundingRect.left;
        event.offsetY = event.clientY - boundingRect.top;
      }

      // Add information to the event object
      event.deltaX = deltaX;
      event.deltaY = deltaY;
      event.deltaFactor = lowestDelta;

      // Go ahead and set deltaMode to 0 since we converted to pixels
      // Although this is a little odd since we overwrite the deltaX/Y
      // properties with normalized deltas.
      event.deltaMode = 0;

      // Add event and delta to the front of the arguments
      args.unshift(event, delta, deltaX, deltaY);

      // Clearout lowestDelta after sometime to better
      // handle multiple device types that give different
      // a different lowestDelta
      // Ex: trackpad = 3 and mouse wheel = 120
      if (nullLowestDeltaTimeout) {
        window.clearTimeout(nullLowestDeltaTimeout);
      }
      nullLowestDeltaTimeout = window.setTimeout(nullLowestDelta, 200);

      return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
      lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
      // If this is an older event and the delta is divisable by 120,
      // then we are assuming that the browser is treating this as an
      // older mouse wheel event and that we should divide the deltas
      // by 40 to try and get a more usable deltaFactor.
      // Side note, this actually impacts the reported scroll distance
      // in older browsers and can cause scrolling to be slower than native.
      // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
      return (
        special.settings.adjustOldDeltas &&
        orgEvent.type === "mousewheel" &&
        absDelta % 120 === 0
      );
    }
  });


//# sourceURL=webpack://@react-jvectormap/core/../jquery-mousewheel/jquery.mousewheel.js?`)},"../jvectormap/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* reexport safe */ _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__.loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _jquery_jvectormap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.jvectormap.min */ "../jvectormap/jquery.jvectormap.min.js");



//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/index.js?`)},"../jvectormap/jquery.jvectormap.min.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval(`__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadJVectorMap": () => (/* binding */ loadJVectorMap)
/* harmony export */ });
/* harmony import */ var _react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-jvectormap/jquery-mousewheel */ "../jquery-mousewheel/jquery.mousewheel.js");


/**
 * jVectorMap version 2.0.5
 *
 * Copyright 2011-2014, Kirill Lebedev
 *
 * inspired from: https://github.com/alex-pex/jvectormap/blob/master/jvectormap-next/src/jquery-jvectormap.js
 */
const loadJVectorMap = ($) =>
  (function (factory) {
    factory($);
  })(function ($) {
    (0,_react_jvectormap_jquery_mousewheel__WEBPACK_IMPORTED_MODULE_0__.loadJQueryMouseWheel)($);
    jvm.$ = $;
    window.jvm = jvm;

    const apiParams = {
      set: {
        colors: 1,
        values: 1,
        backgroundColor: 1,
        scaleColors: 1,
        normalizeFunction: 1,
        focus: 1,
      },
      get: {
        selectedRegions: 1,
        selectedMarkers: 1,
        mapObject: 1,
        regionName: 1,
      },
    };

    $.fn.multiMap = function (options) {
      options.container = this;
      new jvm.MultiMap(options);
      return this;
    };

    $.fn.vectorMap = function (options) {
      let map, methodName;
      map = this.children(".jvectormap-container").data("mapObject");
      if (options === "remove") {
        this.remove();
      } else if (options === "addMap") {
        jvm.Map.maps[arguments[1]] = arguments[2];
      } else if (
        (options === "set" || options === "get") &&
        apiParams[options][arguments[1]]
      ) {
        methodName =
          arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1);
        return map[options + methodName].apply(
          map,
          Array.prototype.slice.call(arguments, 2),
        );
      } else if (!map) {
        options = options || {};
        options.container = this;
        map = new jvm.Map(options);
      }

      return this;
    };
  });
/**
 * @namespace jvm Holds core methods and classes used by jVectorMap.
 */
var jvm = {
  /**
   * Inherits child's prototype from the parent's one.
   * @param {Function} child
   * @param {Function} parent
   */
  inherits: function (child, parent) {
    function temp() {}
    temp.prototype = parent.prototype;
    child.prototype = new temp();
    child.prototype.constructor = child;
    child.parentClass = parent;
  },

  /**
   * Mixes in methods from the source constructor to the target one.
   * @param {Function} target
   * @param {Function} source
   */
  mixin: function (target, source) {
    var prop;

    for (prop in source.prototype) {
      if (source.prototype.hasOwnProperty(prop)) {
        target.prototype[prop] = source.prototype[prop];
      }
    }
  },

  min: function (values) {
    var min = Number.MAX_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] < min) {
          min = values[i];
        }
      }
    }
    return min;
  },

  max: function (values) {
    var max = Number.MIN_VALUE,
      i;

    if (values instanceof Array) {
      for (i = 0; i < values.length; i++) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    } else {
      for (i in values) {
        if (values[i] > max) {
          max = values[i];
        }
      }
    }
    return max;
  },

  keys: function (object) {
    var keys = [],
      key;

    for (key in object) {
      keys.push(key);
    }
    return keys;
  },

  values: function (object) {
    var values = [],
      key,
      i;

    for (i = 0; i < arguments.length; i++) {
      object = arguments[i];
      for (key in object) {
        values.push(object[key]);
      }
    }
    return values;
  },

  whenImageLoaded: function (url) {
    var deferred = new jvm.$.Deferred(),
      img = jvm.$("<img/>");

    img
      .on("error", function () {
        deferred.reject();
      })
      .on("load", function () {
        deferred.resolve(img);
      });
    img.attr("src", url);

    return deferred;
  },

  isImageUrl: function (s) {
    return /\\.\\w{3,4}$/.test(s);
  },
};

/**
 * indexOf polyfill for IE < 9
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 */
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement, fromIndex) {
    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
/**
 * Basic wrapper for DOM element.
 * @constructor
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */
jvm.AbstractElement = function(name, config){
  /**
   * Underlying DOM element
   * @type {DOMElement}
   * @private
   */
  this.node = this.createElement(name);

  /**
   * Name of underlying element
   * @type {String}
   * @private
   */
  this.name = name;

  /**
   * Internal store of attributes
   * @type {Object}
   * @private
   */
  this.properties = {};

  if (config) {
    this.set(config);
  }
};

/**
 * Set attribute of the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Set of parameters to initialize element with
 */
jvm.AbstractElement.prototype.set = function(property, value){
  var key;

  if (typeof property === 'object') {
    for (key in property) {
      this.properties[key] = property[key];
      this.applyAttr(key, property[key]);
    }
  } else {
    this.properties[property] = value;
    this.applyAttr(property, value);
  }
};

/**
 * Returns value of attribute.
 * @param {String} name Name of attribute
 */
jvm.AbstractElement.prototype.get = function(property){
  return this.properties[property];
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.AbstractElement.prototype.applyAttr = function(property, value){
  if (!Number.isNaN(value)) {
    this.node.setAttribute(property, value);
  }
};

jvm.AbstractElement.prototype.remove = function(){
  jvm.$(this.node).remove();
};/**
 * Implements abstract vector canvas.
 * @constructor
 * @param {HTMLElement} container Container to put element to.
 * @param {Number} width Width of canvas.
 * @param {Number} height Height of canvas.
 */
jvm.AbstractCanvasElement = function(container, width, height){
  this.container = container;
  this.setSize(width, height);
  this.rootElement = new jvm[this.classPrefix+'GroupElement']();
  this.node.appendChild( this.rootElement.node );
  this.container.appendChild(this.node);
}

/**
 * Add element to the certain group inside of the canvas.
 * @param {HTMLElement} element Element to add to canvas.
 * @param {HTMLElement} group Group to add element into or into root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.add = function(element, group){
  group = group || this.rootElement;
  group.add(element);
  element.canvas = this;
}

/**
 * Create path and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add path into.
 */
jvm.AbstractCanvasElement.prototype.addPath = function(config, style, group){
  var el = new jvm[this.classPrefix+'PathElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addCircle = function(config, style, group){
  var el = new jvm[this.classPrefix+'CircleElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create circle and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addImage = function(config, style, group){
  var el = new jvm[this.classPrefix+'ImageElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Create text and add it to the canvas.
 * @param {Object} config Parameters of path to create.
 * @param {Object} style Styles of the path to create.
 * @param {HTMLElement} group Group to add circle into.
 */
jvm.AbstractCanvasElement.prototype.addText = function(config, style, group){
  var el = new jvm[this.classPrefix+'TextElement'](config, style);

  this.add(el, group);
  return el;
};

/**
 * Add group to the another group inside of the canvas.
 * @param {HTMLElement} group Group to add circle into or root group if not provided.
 */
jvm.AbstractCanvasElement.prototype.addGroup = function(parentGroup){
  var el = new jvm[this.classPrefix+'GroupElement']();

  if (parentGroup) {
    parentGroup.node.appendChild(el.node);
  } else {
    this.node.appendChild(el.node);
  }
  el.canvas = this;
  return el;
};/**
 * Abstract shape element. Shape element represents some visual vector or raster object.
 * @constructor
 * @param {String} name Tag name of the element.
 * @param {Object} config Set of parameters to initialize element with.
 * @param {Object} style Object with styles to set on element initialization.
 */
jvm.AbstractShapeElement = function(name, config, style){
  this.style = style || {};
  this.style.current = this.style.current || {};
  this.isHovered = false;
  this.isSelected = false;
  this.updateStyle();
};

/**
 * Set element's style.
 * @param {Object|String} property Could be string to set only one property or object to set several style properties at once.
 * @param {String} value Value to set in case only one property should be set.
 */
jvm.AbstractShapeElement.prototype.setStyle = function(property, value){
  var styles = {};

  if (typeof property === 'object') {
    styles = property;
  } else {
    styles[property] = value;
  }
  jvm.$.extend(this.style.current, styles);
  this.updateStyle();
};


jvm.AbstractShapeElement.prototype.updateStyle = function(){
  var attrs = {};

  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.initial);
  jvm.AbstractShapeElement.mergeStyles(attrs, this.style.current);
  if (this.isHovered) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.hover);
  }
  if (this.isSelected) {
    jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selected);
    if (this.isHovered) {
      jvm.AbstractShapeElement.mergeStyles(attrs, this.style.selectedHover);
    }
  }
  this.set(attrs);
};

jvm.AbstractShapeElement.mergeStyles = function(styles, newStyles){
  var key;

  newStyles = newStyles || {};
  for (key in newStyles) {
    if (newStyles[key] === null) {
      delete styles[key];
    } else {
      styles[key] = newStyles[key];
    }
  }
}/**
 * Wrapper for SVG element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.SVGElement = function(name, config){
  jvm.SVGElement.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.SVGElement, jvm.AbstractElement);

jvm.SVGElement.svgns = "http://www.w3.org/2000/svg";

/**
 * Creates DOM element.
 * @param {String} tagName Name of element
 * @private
 * @returns DOMElement
 */
jvm.SVGElement.prototype.createElement = function( tagName ){
  return document.createElementNS( jvm.SVGElement.svgns, tagName );
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.SVGElement.prototype.addClass = function( className ){
  this.node.setAttribute('class', className);
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.SVGElement.prototype.getElementCtr = function( ctr ){
  return jvm['SVG'+ctr];
};

jvm.SVGElement.prototype.getBBox = function(){
  return this.node.getBBox();
};jvm.SVGGroupElement = function(){
  jvm.SVGGroupElement.parentClass.call(this, 'g');
}

jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement);

jvm.SVGGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.SVGCanvasElement = function (container, width, height) {
  this.classPrefix = "SVG";
  jvm.SVGCanvasElement.parentClass.call(this, "svg");

  this.defsElement = new jvm.SVGElement("defs");
  this.node.appendChild(this.defsElement.node);

  jvm.AbstractCanvasElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement);
jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement);

jvm.SVGCanvasElement.prototype.setSize = function (width, height) {
  this.width = width;
  this.height = height;
  this.node.setAttribute("width", width);
  this.node.setAttribute("height", height);
};

jvm.SVGCanvasElement.prototype.applyTransformParams = function (
  scale,
  transX,
  transY,
) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  if (!isNaN(transX) && !isNaN(transY) && !isNaN(scale)) {
    this.rootElement.node.setAttribute(
      "transform",
      "scale(" + scale + ") translate(" + transX + ", " + transY + ")",
    );
  }
};
jvm.SVGShapeElement = function(name, config, style){
  jvm.SVGShapeElement.parentClass.call(this, name, config);
  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement);
jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement);

jvm.SVGShapeElement.prototype.applyAttr = function(attr, value){
  var patternEl,
      imageEl,
      that = this;

  if (attr === 'fill' && jvm.isImageUrl(value)) {
    if (!jvm.SVGShapeElement.images[value]) {
      jvm.whenImageLoaded(value).then(function(img){
        imageEl = new jvm.SVGElement('image');
        imageEl.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
        imageEl.applyAttr('x', '0');
        imageEl.applyAttr('y', '0');
        imageEl.applyAttr('width', img[0].width);
        imageEl.applyAttr('height', img[0].height);

        patternEl = new jvm.SVGElement('pattern');
        patternEl.applyAttr('id', 'image'+jvm.SVGShapeElement.imageCounter);
        patternEl.applyAttr('x', 0);
        patternEl.applyAttr('y', 0);
        patternEl.applyAttr('width', img[0].width / 2);
        patternEl.applyAttr('height', img[0].height / 2);
        patternEl.applyAttr('viewBox', '0 0 '+img[0].width+' '+img[0].height);
        patternEl.applyAttr('patternUnits', 'userSpaceOnUse');
        patternEl.node.appendChild( imageEl.node );

        that.canvas.defsElement.node.appendChild( patternEl.node );

        jvm.SVGShapeElement.images[value] = jvm.SVGShapeElement.imageCounter++;

        that.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
      });
    } else {
      this.applyAttr('fill', 'url(#image'+jvm.SVGShapeElement.images[value]+')');
    }
  } else {
    jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};

jvm.SVGShapeElement.imageCounter = 1;
jvm.SVGShapeElement.images = {};jvm.SVGPathElement = function(config, style){
  jvm.SVGPathElement.parentClass.call(this, 'path', config, style);
  this.node.setAttribute('fill-rule', 'evenodd');
}

jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement);jvm.SVGCircleElement = function(config, style){
  jvm.SVGCircleElement.parentClass.call(this, 'circle', config, style);
};

jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement);jvm.SVGImageElement = function(config, style){
  jvm.SVGImageElement.parentClass.call(this, 'image', config, style);
};

jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement);

jvm.SVGImageElement.prototype.applyAttr = function(attr, value){
  var that = this,
      imageOffset,
      imageUrl;

  if (attr == 'image') {
    if (typeof value == 'object') {
      imageUrl = value.url;
      this.offset = value.offset;
    } else {
      imageUrl = value;
      this.offset = [0, 0];
    }

    jvm.whenImageLoaded(imageUrl).then(function(img){
      that.node.setAttributeNS('http://www.w3.org/1999/xlink', 'href', imageUrl);
      that.width = img[0].width;
      that.height = img[0].height;
      that.applyAttr('width', that.width);
      that.applyAttr('height', that.height);

      that.applyAttr('x', that.cx - that.width / 2 + that.offset[0]);
      that.applyAttr('y', that.cy - that.height / 2 + that.offset[1]);

      jvm.$(that.node).trigger('imageloaded', [img]);
    });
  } else if(attr == 'cx') {
    this.cx = value;
    if (this.width) {
      this.applyAttr('x', value - this.width / 2 + this.offset[0]);
    }
  } else if(attr == 'cy') {
    this.cy = value;
    if (this.height) {
      this.applyAttr('y', value - this.height / 2 + this.offset[1]);
    }
  } else {
    jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.SVGTextElement = function(config, style){
  jvm.SVGTextElement.parentClass.call(this, 'text', config, style);
}

jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement);

jvm.SVGTextElement.prototype.applyAttr = function(attr, value){
  if (attr === 'text') {
    this.node.textContent = value;
  } else {
    jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};/**
 * Wrapper for VML element.
 * @constructor
 * @extends jvm.AbstractElement
 * @param {String} name Tag name of the element
 * @param {Object} config Set of parameters to initialize element with
 */

jvm.VMLElement = function(name, config){
  if (!jvm.VMLElement.VMLInitialized) {
    jvm.VMLElement.initializeVML();
  }

  jvm.VMLElement.parentClass.apply(this, arguments);
};

jvm.inherits(jvm.VMLElement, jvm.AbstractElement);

/**
 * Shows if VML was already initialized for the current document or not.
 * @static
 * @private
 * @type {Boolean}
 */
jvm.VMLElement.VMLInitialized = false;

/**
 * Initializes VML handling before creating the first element
 * (adds CSS class and creates namespace). Adds one of two forms
 * of createElement method depending of support by browser.
 * @static
 * @private
 */

 // The following method of VML handling is borrowed from the
 // Raphael library by Dmitry Baranovsky.

jvm.VMLElement.initializeVML = function(){
  try {
    if (!document.namespaces.rvml) {
      document.namespaces.add("rvml","urn:schemas-microsoft-com:vml");
    }
    /**
     * Creates DOM element.
     * @param {String} tagName Name of element
     * @private
     * @returns DOMElement
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<rvml:' + tagName + ' class="rvml">');
    };
  } catch (e) {
    /**
     * @private
     */
    jvm.VMLElement.prototype.createElement = function (tagName) {
      return document.createElement('<' + tagName + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
    };
  }
  document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
  jvm.VMLElement.VMLInitialized = true;
};

/**
 * Returns constructor for element by name prefixed with 'VML'.
 * @param {String} ctr Name of basic constructor to return
 * proper implementation for.
 * @returns Function
 * @private
 */
jvm.VMLElement.prototype.getElementCtr = function( ctr ){
  return jvm['VML'+ctr];
};

/**
 * Adds CSS class for underlying DOM element.
 * @param {String} className Name of CSS class name
 */
jvm.VMLElement.prototype.addClass = function( className ){
  jvm.$(this.node).addClass(className);
};

/**
 * Applies attribute value to the underlying DOM element.
 * @param {String} name Name of attribute
 * @param {Number|String} config Value of attribute to apply
 * @private
 */
jvm.VMLElement.prototype.applyAttr = function( attr, value ){
  this.node[attr] = value;
};

/**
 * Returns boundary box for the element.
 * @returns {Object} Boundary box with numeric fields: x, y, width, height
 * @override
 */
jvm.VMLElement.prototype.getBBox = function(){
  var node = jvm.$(this.node);

  return {
    x: node.position().left / this.canvas.scale,
    y: node.position().top / this.canvas.scale,
    width: node.width() / this.canvas.scale,
    height: node.height() / this.canvas.scale
  };
};jvm.VMLGroupElement = function(){
  jvm.VMLGroupElement.parentClass.call(this, 'group');

  this.node.style.left = '0px';
  this.node.style.top = '0px';
  this.node.coordorigin = "0 0";
};

jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement);

jvm.VMLGroupElement.prototype.add = function(element){
  this.node.appendChild( element.node );
};jvm.VMLCanvasElement = function(container, width, height){
  this.classPrefix = 'VML';
  jvm.VMLCanvasElement.parentClass.call(this, 'group');
  jvm.AbstractCanvasElement.apply(this, arguments);
  this.node.style.position = 'absolute';
};

jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement);
jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement);

jvm.VMLCanvasElement.prototype.setSize = function(width, height){
  var paths,
      groups,
      i,
      l;

  this.width = width;
  this.height = height;
  this.node.style.width = width + "px";
  this.node.style.height = height + "px";
  this.node.coordsize = width+' '+height;
  this.node.coordorigin = "0 0";
  if (this.rootElement) {
    paths = this.rootElement.node.getElementsByTagName('shape');
    for(i = 0, l = paths.length; i < l; i++) {
      paths[i].coordsize = width+' '+height;
      paths[i].style.width = width+'px';
      paths[i].style.height = height+'px';
    }
    groups = this.node.getElementsByTagName('group');
    for(i = 0, l = groups.length; i < l; i++) {
      groups[i].coordsize = width+' '+height;
      groups[i].style.width = width+'px';
      groups[i].style.height = height+'px';
    }
  }
};

jvm.VMLCanvasElement.prototype.applyTransformParams = function(scale, transX, transY) {
  this.scale = scale;
  this.transX = transX;
  this.transY = transY;
  this.rootElement.node.coordorigin = (this.width-transX-this.width/100)+','+(this.height-transY-this.height/100);
  this.rootElement.node.coordsize = this.width/scale+','+this.height/scale;
};jvm.VMLShapeElement = function(name, config){
  jvm.VMLShapeElement.parentClass.call(this, name, config);

  this.fillElement = new jvm.VMLElement('fill');
  this.strokeElement = new jvm.VMLElement('stroke');
  this.node.appendChild(this.fillElement.node);
  this.node.appendChild(this.strokeElement.node);
  this.node.stroked = false;

  jvm.AbstractShapeElement.apply(this, arguments);
};

jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement);
jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement);

jvm.VMLShapeElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'fill':
      this.node.fillcolor = value;
      break;
    case 'fill-opacity':
      this.fillElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke':
      if (value === 'none') {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokecolor = value;
      break;
    case 'stroke-opacity':
      this.strokeElement.node.opacity = Math.round(value*100)+'%';
      break;
    case 'stroke-width':
      if (parseInt(value, 10) === 0) {
        this.node.stroked = false;
      } else {
        this.node.stroked = true;
      }
      this.node.strokeweight = value;
      break;
    case 'd':
      this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
      break;
    default:
      jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments);
  }
};jvm.VMLPathElement = function(config, style){
  var scale = new jvm.VMLElement('skew');

  jvm.VMLPathElement.parentClass.call(this, 'shape', config, style);

  this.node.coordorigin = "0 0";

  scale.node.on = true;
  scale.node.matrix = '0.01,0,0,0.01,0,0';
  scale.node.offset = '0,0';

  this.node.appendChild(scale.node);
};

jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement);

jvm.VMLPathElement.prototype.applyAttr = function(attr, value){
  if (attr === 'd') {
    this.node.path = jvm.VMLPathElement.pathSvgToVml(value);
  } else {
    jvm.VMLShapeElement.prototype.applyAttr.call(this, attr, value);
  }
};

jvm.VMLPathElement.pathSvgToVml = function(path) {
  var cx = 0, cy = 0, ctrlx, ctrly;

  path = path.replace(/(-?\\d+)e(-?\\d+)/g, '0');
  return path.replace(/([MmLlHhVvCcSs])\\s*((?:-?\\d*(?:\\.\\d+)?\\s*,?\\s*)+)/g, function(segment, letter, coords, index){
    coords = coords.replace(/(\\d)-/g, '$1,-')
            .replace(/^\\s+/g, '')
            .replace(/\\s+$/g, '')
            .replace(/\\s+/g, ',').split(',');
    if (!coords[0]) coords.shift();
    for (var i=0, l=coords.length; i<l; i++) {
      coords[i] = Math.round(100*coords[i]);
    }
    switch (letter) {
      case 'm':
        cx += coords[0];
        cy += coords[1];
        return 't'+coords.join(',');
      case 'M':
        cx = coords[0];
        cy = coords[1];
        return 'm'+coords.join(',');
      case 'l':
        cx += coords[0];
        cy += coords[1];
        return 'r'+coords.join(',');
      case 'L':
        cx = coords[0];
        cy = coords[1];
        return 'l'+coords.join(',');
      case 'h':
        cx += coords[0];
        return 'r'+coords[0]+',0';
      case 'H':
        cx = coords[0];
        return 'l'+cx+','+cy;
      case 'v':
        cy += coords[0];
        return 'r0,'+coords[0];
      case 'V':
        cy = coords[0];
        return 'l'+cx+','+cy;
      case 'c':
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'C':
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
      case 's':
        coords.unshift(cy-ctrly);
        coords.unshift(cx-ctrlx);
        ctrlx = cx + coords[coords.length-4];
        ctrly = cy + coords[coords.length-3];
        cx += coords[coords.length-2];
        cy += coords[coords.length-1];
        return 'v'+coords.join(',');
      case 'S':
        coords.unshift(cy+cy-ctrly);
        coords.unshift(cx+cx-ctrlx);
        ctrlx = coords[coords.length-4];
        ctrly = coords[coords.length-3];
        cx = coords[coords.length-2];
        cy = coords[coords.length-1];
        return 'c'+coords.join(',');
    }
    return '';
  }).replace(/z/g, 'e');
};jvm.VMLCircleElement = function(config, style){
  jvm.VMLCircleElement.parentClass.call(this, 'oval', config, style);
};

jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement);

jvm.VMLCircleElement.prototype.applyAttr = function(attr, value){
  switch (attr) {
    case 'r':
      this.node.style.width = value*2+'px';
      this.node.style.height = value*2+'px';
      this.applyAttr('cx', this.get('cx') || 0);
      this.applyAttr('cy', this.get('cy') || 0);
      break;
    case 'cx':
      if (!value) return;
      this.node.style.left = value - (this.get('r') || 0) + 'px';
      break;
    case 'cy':
      if (!value) return;
      this.node.style.top = value - (this.get('r') || 0) + 'px';
      break;
    default:
      jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, attr, value);
  }
};/**
 * Class for vector images manipulations.
 * @constructor
 * @param {DOMElement} container to place canvas to
 * @param {Number} width
 * @param {Number} height
 */
jvm.VectorCanvas = function(container, width, height) {
  this.mode = window.SVGAngle ? 'svg' : 'vml';

  if (this.mode == 'svg') {
    this.impl = new jvm.SVGCanvasElement(container, width, height);
  } else {
    this.impl = new jvm.VMLCanvasElement(container, width, height);
  }
  this.impl.mode = this.mode;
  return this.impl;
};jvm.SimpleScale = function(scale){
  this.scale = scale;
};

jvm.SimpleScale.prototype.getValue = function(value){
  return value;
};jvm.OrdinalScale = function(scale){
  this.scale = scale;
};

jvm.OrdinalScale.prototype.getValue = function(value){
  return this.scale[value];
};

jvm.OrdinalScale.prototype.getTicks = function(){
  var ticks = [],
      key;

  for (key in this.scale) {
    ticks.push({
      label: key,
      value: this.scale[key]
    });
  }

  return ticks;
};jvm.NumericScale = function(scale, normalizeFunction, minValue, maxValue) {
  this.scale = [];

  normalizeFunction = normalizeFunction || 'linear';

  if (scale) this.setScale(scale);
  if (normalizeFunction) this.setNormalizeFunction(normalizeFunction);
  if (typeof minValue !== 'undefined' ) this.setMin(minValue);
  if (typeof maxValue !== 'undefined' ) this.setMax(maxValue);
};

jvm.NumericScale.prototype = {
  setMin: function(min) {
    this.clearMinValue = min;
    if (typeof this.normalize === 'function') {
      this.minValue = this.normalize(min);
    } else {
      this.minValue = min;
    }
  },

  setMax: function(max) {
    this.clearMaxValue = max;
    if (typeof this.normalize === 'function') {
      this.maxValue = this.normalize(max);
    } else {
      this.maxValue = max;
    }
  },

  setScale: function(scale) {
    var i;

    this.scale = [];
    for (i = 0; i < scale.length; i++) {
      this.scale[i] = [scale[i]];
    }
  },

  setNormalizeFunction: function(f) {
    if (f === 'polynomial') {
      this.normalize = function(value) {
        return Math.pow(value, 0.2);
      }
    } else if (f === 'linear') {
      delete this.normalize;
    } else {
      this.normalize = f;
    }
    this.setMin(this.clearMinValue);
    this.setMax(this.clearMaxValue);
  },

  getValue: function(value) {
    var lengthes = [],
        fullLength = 0,
        l,
        i = 0,
        c;

    if (typeof this.normalize === 'function') {
      value = this.normalize(value);
    }
    for (i = 0; i < this.scale.length-1; i++) {
      l = this.vectorLength(this.vectorSubtract(this.scale[i+1], this.scale[i]));
      lengthes.push(l);
      fullLength += l;
    }

    c = (this.maxValue - this.minValue) / fullLength;
    for (i=0; i<lengthes.length; i++) {
      lengthes[i] *= c;
    }

    i = 0;
    value -= this.minValue;
    while (value - lengthes[i] >= 0) {
      value -= lengthes[i];
      i++;
    }

    if (i == this.scale.length - 1) {
      value = this.vectorToNum(this.scale[i])
    } else {
      value = (
        this.vectorToNum(
          this.vectorAdd(this.scale[i],
            this.vectorMult(
              this.vectorSubtract(this.scale[i+1], this.scale[i]),
              (value) / (lengthes[i])
            )
          )
        )
      );
    }

    return value;
  },

  vectorToNum: function(vector) {
    var num = 0,
        i;

    for (i = 0; i < vector.length; i++) {
      num += Math.round(vector[i])*Math.pow(256, vector.length-i-1);
    }
    return num;
  },

  vectorSubtract: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] - vector2[i];
    }
    return vector;
  },

  vectorAdd: function(vector1, vector2) {
    var vector = [],
        i;

    for (i = 0; i < vector1.length; i++) {
      vector[i] = vector1[i] + vector2[i];
    }
    return vector;
  },

  vectorMult: function(vector, num) {
    var result = [],
        i;

    for (i = 0; i < vector.length; i++) {
      result[i] = vector[i] * num;
    }
    return result;
  },

  vectorLength: function(vector) {
    var result = 0,
        i;
    for (i = 0; i < vector.length; i++) {
      result += vector[i] * vector[i];
    }
    return Math.sqrt(result);
  },

  /* Derived from d3 implementation https://github.com/mbostock/d3/blob/master/src/scale/linear.js#L94 */
  getTicks: function(){
    var m = 5,
        extent = [this.clearMinValue, this.clearMaxValue],
        span = extent[1] - extent[0],
        step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)),
        err = m / span * step,
        ticks = [],
        tick,
        v;

    if (err <= .15) step *= 10;
    else if (err <= .35) step *= 5;
    else if (err <= .75) step *= 2;

    extent[0] = Math.floor(extent[0] / step) * step;
    extent[1] = Math.ceil(extent[1] / step) * step;

    tick = extent[0];
    while (tick <= extent[1]) {
      if (tick == extent[0]) {
        v = this.clearMinValue;
      } else if (tick == extent[1]) {
        v = this.clearMaxValue;
      } else {
        v = tick;
      }
      ticks.push({
        label: tick,
        value: this.getValue(v)
      });
      tick += step;
    }

    return ticks;
  }
};
jvm.ColorScale = function(colors, normalizeFunction, minValue, maxValue) {
  jvm.ColorScale.parentClass.apply(this, arguments);
}

jvm.inherits(jvm.ColorScale, jvm.NumericScale);

jvm.ColorScale.prototype.setScale = function(scale) {
  var i;

  for (i = 0; i < scale.length; i++) {
    this.scale[i] = jvm.ColorScale.rgbToArray(scale[i]);
  }
};

jvm.ColorScale.prototype.getValue = function(value) {
  return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, value));
};

jvm.ColorScale.arrayToRgb = function(ar) {
  var rgb = '#',
      d,
      i;

  for (i = 0; i < ar.length; i++) {
    d = ar[i].toString(16);
    rgb += d.length == 1 ? '0'+d : d;
  }
  return rgb;
};

jvm.ColorScale.numToRgb = function(num) {
  num = num.toString(16);

  while (num.length < 6) {
    num = '0' + num;
  }

  return '#'+num;
};

jvm.ColorScale.rgbToArray = function(rgb) {
  rgb = rgb.substr(1);
  return [parseInt(rgb.substr(0, 2), 16), parseInt(rgb.substr(2, 2), 16), parseInt(rgb.substr(4, 2), 16)];
};/**
 * Represents map legend.
 * @constructor
 * @param {Object} params Configuration parameters.
 * @param {String} params.cssClass Additional CSS class to apply to legend element.
 * @param {Boolean} params.vertical If <code>true</code> legend will be rendered as vertical.
 * @param {String} params.title Legend title.
 * @param {Function} params.labelRender Method to convert series values to legend labels.
 */
jvm.Legend = function(params) {
  this.params = params || {};
  this.map = this.params.map;
  this.series = this.params.series;
  this.body = jvm.$('<div/>');
  this.body.addClass('jvectormap-legend');
  if (this.params.cssClass) {
    this.body.addClass(this.params.cssClass);
  }

  if (params.vertical) {
    this.map.legendCntVertical.append( this.body );
  } else {
    this.map.legendCntHorizontal.append( this.body );
  }

  this.render();
}

jvm.Legend.prototype.render = function(){
  var ticks = this.series.scale.getTicks(),
      i,
      inner = jvm.$('<div/>').addClass('jvectormap-legend-inner'),
      tick,
      sample,
      label;

  this.body.html('');
  if (this.params.title) {
    this.body.append(
      jvm.$('<div/>').addClass('jvectormap-legend-title').html(this.params.title)
    );
  }
  this.body.append(inner);

  for (i = 0; i < ticks.length; i++) {
    tick = jvm.$('<div/>').addClass('jvectormap-legend-tick');
    sample = jvm.$('<div/>').addClass('jvectormap-legend-tick-sample');

    switch (this.series.params.attribute) {
      case 'fill':
        if (jvm.isImageUrl(ticks[i].value)) {
          sample.css('background', 'url('+ticks[i].value+')');
        } else {
          sample.css('background', ticks[i].value);
        }
        break;
      case 'stroke':
        sample.css('background', ticks[i].value);
        break;
      case 'image':
        sample.css('background', 'url('+(typeof ticks[i].value === 'object' ? ticks[i].value.url : ticks[i].value)+') no-repeat center center');
        break;
      case 'r':
        jvm.$('<div/>').css({
          'border-radius': ticks[i].value,
          border: this.map.params.markerStyle.initial['stroke-width']+'px '+
                  this.map.params.markerStyle.initial['stroke']+' solid',
          width: ticks[i].value * 2 + 'px',
          height: ticks[i].value * 2 + 'px',
          background: this.map.params.markerStyle.initial['fill']
        }).appendTo(sample);
        break;
    }
    tick.append( sample );
    label = ticks[i].label;
    if (this.params.labelRender) {
      label = this.params.labelRender(label);
    }
    tick.append( jvm.$('<div>'+label+' </div>').addClass('jvectormap-legend-tick-text') );
    inner.append(tick);
  }
  inner.append( jvm.$('<div/>').css('clear', 'both') );
}/**
 * Creates data series.
 * @constructor
 * @param {Object} params Parameters to initialize series with.
 * @param {Array} params.values The data set to visualize.
 * @param {String} params.attribute Numeric, color or image attribute to use for data visualization. This could be: <code>fill</code>, <code>stroke</code>, <code>fill-opacity</code>, <code>stroke-opacity</code> for markers and regions and <code>r</code> (radius) or <code>image</code> for markers only.
 * @param {Array} params.scale Values used to map a dimension of data to a visual representation. The first value sets visualization for minimum value from the data set and the last value sets visualization for the maximum value. There also could be intermidiate values. Default value is <code>['#C8EEFF', '#0071A4']</code>.
 * @param {Function|String} params.normalizeFunction The function used to map input values to the provided scale. This parameter could be provided as function or one of the strings: <code>'linear'</code> or <code>'polynomial'</code>, while <code>'linear'</code> is used by default. The function provided takes value from the data set as an input and returns corresponding value from the scale.
 * @param {Number} params.min Minimum value of the data set. Could be calculated automatically if not provided.
 * @param {Number} params.max Maximum value of the data set. Could be calculated automatically if not provided.
 */
jvm.DataSeries = function (params, elements, map) {
  var scaleConstructor;

  params = params || {};
  params.attribute = params.attribute || "fill";

  this.elements = elements;
  this.params = params;
  this.map = map;

  if (params.attributes) {
    this.setAttributes(params.attributes);
  }

  if (jvm.$.isArray(params.scale)) {
    scaleConstructor =
      params.attribute === "fill" || params.attribute === "stroke"
        ? jvm.ColorScale
        : jvm.NumericScale;
    this.scale = new scaleConstructor(
      params.scale,
      params.normalizeFunction,
      params.min,
      params.max,
    );
  } else if (params.scale) {
    this.scale = new jvm.OrdinalScale(params.scale);
  } else {
    this.scale = new jvm.SimpleScale(params.scale);
  }

  this.values = params.values || {};
  this.setValues(this.values);

  if (this.params.legend) {
    this.legend = new jvm.Legend(
      jvm.$.extend(
        {
          map: this.map,
          series: this,
        },
        this.params.legend,
      ),
    );
  }
};

jvm.DataSeries.prototype = {
  setAttributes: function (key, attr) {
    var attrs = key,
      code;

    if (typeof key == "string") {
      if (this.elements[key]) {
        this.elements[key].setStyle(this.params.attribute, attr);
      }
    } else {
      for (code in attrs) {
        if (this.elements[code]) {
          this.elements[code].element.setStyle(
            this.params.attribute,
            attrs[code],
          );
        }
      }
    }
  },

  /**
   * Set values for the data set.
   * @param {Object} values Object which maps codes of regions or markers to values.
   */
  setValues: function (values) {
    var max = -Number.MAX_VALUE,
      min = Number.MAX_VALUE,
      val,
      cc,
      attrs = {};

    if (
      !(this.scale instanceof jvm.OrdinalScale) &&
      !(this.scale instanceof jvm.SimpleScale)
    ) {
      // we have a color scale as an array
      if (
        typeof this.params.min === "undefined" ||
        typeof this.params.max === "undefined"
      ) {
        // min and/or max are not defined, so calculate them
        for (cc in values) {
          val = parseFloat(values[cc]);
          if (val > max) max = val;
          if (val < min) min = val;
        }
      }

      if (typeof this.params.min === "undefined") {
        this.scale.setMin(min);
        this.params.min = min;
      } else {
        this.scale.setMin(this.params.min);
      }

      if (typeof this.params.max === "undefined") {
        this.scale.setMax(max);
        this.params.max = max;
      } else {
        this.scale.setMax(this.params.max);
      }

      for (cc in values) {
        if (cc != "indexOf") {
          val = parseFloat(values[cc]);
          if (!isNaN(val)) {
            attrs[cc] = this.scale.getValue(val);
          } else {
            attrs[cc] =
              this.elements[cc].element.style.initial[this.params.attribute];
          }
        }
      }
    } else {
      for (cc in values) {
        if (values[cc]) {
          attrs[cc] = this.scale.getValue(values[cc]);
        } else {
          attrs[cc] =
            this.elements[cc].element.style.initial[this.params.attribute];
        }
      }
    }

    this.setAttributes(attrs);
    jvm.$.extend(this.values, values);
  },

  clear: function () {
    var key,
      attrs = {};

    for (key in this.values) {
      if (this.elements[key]) {
        attrs[key] =
          this.elements[key].element.shape.style.initial[this.params.attribute];
      }
    }
    this.setAttributes(attrs);
    this.values = {};
  },

  clearAndSet: function (values) {
    this.clear();
    this.setValues(values);
  },

  /**
   * Set scale of the data series.
   * @param {Array} scale Values representing scale.
   */
  setScale: function (scale) {
    this.scale.setScale(scale);
    if (this.values) {
      this.setValues(this.values);
    }
  },

  /**
   * Set normalize function of the data series.
   * @param {Function|String} f Normalize function.
   */
  setNormalizeFunction: function (f) {
    this.scale.setNormalizeFunction(f);
    if (this.values) {
      this.setValues(this.values);
    }
  },
};
/**
 * Contains methods for transforming point on sphere to
 * Cartesian coordinates using various projections.
 * @class
 */
jvm.Proj = {
  degRad: 180 / Math.PI,
  radDeg: Math.PI / 180,
  radius: 6381372,

  sgn: function(n){
    if (n > 0) {
      return 1;
    } else if (n < 0) {
      return -1;
    } else {
      return n;
    }
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Miller projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  mill: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan((45 + 0.4 * lat) * this.radDeg)) / 0.8
    };
  },

  /**
   * Inverse function of mill()
   * Converts Cartesian coordinates to point on sphere using Miller projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  mill_inv: function(x, y, c){
    return {
      lat: (2.5 * Math.atan(Math.exp(0.8 * y / this.radius)) - 5 * Math.PI / 8) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Mercator projection
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  merc: function(lat, lng, c){
    return {
      x: this.radius * (lng - c) * this.radDeg,
      y: - this.radius * Math.log(Math.tan(Math.PI / 4 + lat * Math.PI / 360))
    };
  },

  /**
   * Inverse function of merc()
   * Converts Cartesian coordinates to point on sphere using Mercator projection
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  merc_inv: function(x, y, c){
    return {
      lat: (2 * Math.atan(Math.exp(y / this.radius)) - Math.PI / 2) * this.degRad,
      lng: (c * this.radDeg + x / this.radius) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  aea: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        fi = lat * this.radDeg,
        lambda = lng * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        theta = n*(lambda-lambda0),
        ro = Math.sqrt(C-2*n*Math.sin(fi))/n,
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n;

    return {
      x: ro * Math.sin(theta) * this.radius,
      y: - (ro0 - ro * Math.cos(theta)) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Albers Equal-Area Conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/AlbersEqual-AreaConicProjection.html">Albers Equal-Area Conic projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  aea_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 29.5 * this.radDeg,
        fi2 = 45.5 * this.radDeg,
        n = (Math.sin(fi1)+Math.sin(fi2)) / 2,
        C = Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),
        ro0 = Math.sqrt(C-2*n*Math.sin(fi0))/n,
        ro = Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (Math.asin((C - ro * ro * n * n) / (2 * n))) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  },

  /**
   * Converts point on sphere to the Cartesian coordinates using Lambert conformal
   * conic projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} lat Latitude in degrees
   * @param {Number} lng Longitude in degrees
   * @param {Number} c Central meridian in degrees
   */
  lcc: function(lat, lng, c){
    var fi0 = 0,
        lambda0 = c * this.radDeg,
        lambda = lng * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        fi = lat * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi / 2 ), n ),
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n );

    return {
      x: ro * Math.sin( n * (lambda - lambda0) ) * this.radius,
      y: - (ro0 - ro * Math.cos( n * (lambda - lambda0) ) ) * this.radius
    };
  },

  /**
   * Converts Cartesian coordinates to the point on sphere using Lambert conformal conic
   * projection
   * @see <a href="http://mathworld.wolfram.com/LambertConformalConicProjection.html">Lambert Conformal Conic Projection</a>
   * @param {Number} x X of point in Cartesian system as integer
   * @param {Number} y Y of point in Cartesian system as integer
   * @param {Number} c Central meridian in degrees
   */
  lcc_inv: function(xCoord, yCoord, c){
    var x = xCoord / this.radius,
        y = yCoord / this.radius,
        fi0 = 0,
        lambda0 = c * this.radDeg,
        fi1 = 33 * this.radDeg,
        fi2 = 45 * this.radDeg,
        n = Math.log( Math.cos(fi1) * (1 / Math.cos(fi2)) ) / Math.log( Math.tan( Math.PI / 4 + fi2 / 2) * (1 / Math.tan( Math.PI / 4 + fi1 / 2) ) ),
        F = ( Math.cos(fi1) * Math.pow( Math.tan( Math.PI / 4 + fi1 / 2 ), n ) ) / n,
        ro0 = F * Math.pow( 1 / Math.tan( Math.PI / 4 + fi0 / 2 ), n ),
        ro = this.sgn(n) * Math.sqrt(x*x+(ro0-y)*(ro0-y)),
        theta = Math.atan( x / (ro0 - y) );

    return {
      lat: (2 * Math.atan(Math.pow(F/ro, 1/n)) - Math.PI / 2) * this.degRad,
      lng: (lambda0 + theta / n) * this.degRad
    };
  }
};jvm.MapObject = function(config){};

jvm.MapObject.prototype.getLabelText = function(key){
  var text;

  if (this.config.label) {
    if (typeof this.config.label.render === 'function') {
      text = this.config.label.render(key);
    } else {
      text = key;
    }
  } else {
    text = null;
  }
  return text;
}

jvm.MapObject.prototype.getLabelOffsets = function(key){
  var offsets;

  if (this.config.label) {
    if (typeof this.config.label.offsets === 'function') {
      offsets = this.config.label.offsets(key);
    } else if (typeof this.config.label.offsets === 'object') {
      offsets = this.config.label.offsets[key];
    }
  }
  return offsets || [0, 0];
}

/**
 * Set hovered state to the element. Hovered state means mouse cursor is over element. Styles will be updates respectively.
 * @param {Boolean} isHovered <code>true</code> to make element hovered, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setHovered = function(isHovered){
  if (this.isHovered !== isHovered) {
    this.isHovered = isHovered;
    this.shape.isHovered = isHovered;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isHovered = isHovered;
      this.label.updateStyle();
    }
  }
};

/**
 * Set selected state to the element. Styles will be updates respectively.
 * @param {Boolean} isSelected <code>true</code> to make element selected, <code>false</code> otherwise.
 */
jvm.MapObject.prototype.setSelected = function(isSelected){
  if (this.isSelected !== isSelected) {
    this.isSelected = isSelected;
    this.shape.isSelected = isSelected;
    this.shape.updateStyle();
    if (this.label) {
      this.label.isSelected = isSelected;
      this.label.updateStyle();
    }
    jvm.$(this.shape).trigger('selected', [isSelected]);
  }
};

jvm.MapObject.prototype.setStyle = function(){
	this.shape.setStyle.apply(this.shape, arguments);
};

jvm.MapObject.prototype.remove = function(){
  this.shape.remove();
  if (this.label) {
    this.label.remove();
  }
};jvm.Region = function(config){
  var bbox,
      text,
      offsets,
      labelDx,
      labelDy;

  this.config = config;
  this.map = this.config.map;

  this.shape = config.canvas.addPath({
    d: config.path,
    'data-code': config.code
  }, config.style, config.canvas.rootElement);
  this.shape.addClass('jvectormap-region jvectormap-element');

  bbox = this.shape.getBBox();

  text = this.getLabelText(config.code);
  if (this.config.label && text) {
    offsets = this.getLabelOffsets(config.code);
    this.labelX = bbox.x + bbox.width / 2 + offsets[0];
    this.labelY = bbox.y + bbox.height / 2 + offsets[1];
    this.label = config.canvas.addText({
      text: text,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      x: this.labelX,
      y: this.labelY,
      'data-code': config.code
    }, config.labelStyle, config.labelsGroup);
    this.label.addClass('jvectormap-region jvectormap-element');
  }
};

jvm.inherits(jvm.Region, jvm.MapObject);

jvm.Region.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    });
  }
};jvm.Marker = function(config){
  var text,
      offsets;

  this.config = config;
  this.map = this.config.map;

  this.isImage = !!this.config.style.initial.image;
  this.createShape();

  text = this.getLabelText(config.index);
  if (this.config.label && text) {
    this.offsets = this.getLabelOffsets(config.index);
    this.labelX = config.cx / this.map.scale - this.map.transX;
    this.labelY = config.cy / this.map.scale - this.map.transY;
    this.label = config.canvas.addText({
      text: text,
      'data-index': config.index,
      dy: "0.6ex",
      x: this.labelX,
      y: this.labelY
    }, config.labelStyle, config.labelsGroup);

    this.label.addClass('jvectormap-marker jvectormap-element');
  }
};

jvm.inherits(jvm.Marker, jvm.MapObject);

jvm.Marker.prototype.createShape = function(){
  var that = this;

  if (this.shape) {
    this.shape.remove();
  }
  this.shape = this.config.canvas[this.isImage ? 'addImage' : 'addCircle']({
    "data-index": this.config.index,
    cx: this.config.cx,
    cy: this.config.cy
  }, this.config.style, this.config.group);

  this.shape.addClass('jvectormap-marker jvectormap-element');

  if (this.isImage) {
    jvm.$(this.shape.node).on('imageloaded', function(){
      that.updateLabelPosition();
    });
  }
};

jvm.Marker.prototype.updateLabelPosition = function(){
  if (this.label) {
    this.label.set({
      x: this.labelX * this.map.scale + this.offsets[0] +
         this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
      y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    });
  }
};

jvm.Marker.prototype.setStyle = function(property, value){
  var isImage;

  jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments);

  if (property === 'r') {
    this.updateLabelPosition();
  }

  isImage = !!this.shape.get('image');
  if (isImage != this.isImage) {
    this.isImage = isImage;
    this.config.style = jvm.$.extend(true, {}, this.shape.style);
    this.createShape();
  }
};/**
 * Creates map, draws paths, binds events.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {String} params.map Name of the map in the format <code>territory_proj_lang</code> where <code>territory</code> is a unique code or name of the territory which the map represents (ISO 3166 standard is used where possible), <code>proj</code> is a name of projection used to generate representation of the map on the plane (projections are named according to the conventions of proj4 utility) and <code>lang</code> is a code of the language, used for the names of regions.
 * @param {String} params.backgroundColor Background color of the map in CSS format.
 * @param {Boolean} params.zoomOnScroll When set to true map could be zoomed using mouse scroll. Default value is <code>true</code>.
 * @param {Number} params.zoomOnScrollSpeed Mouse scroll speed. Number from 1 to 10. Default value is <code>3</code>.
 * @param {Boolean} params.panOnDrag When set to true, the map pans when being dragged. Default value is <code>true</code>.
 * @param {Number} params.zoomMax Indicates the maximum zoom ratio which could be reached zooming the map. Default value is <code>8</code>.
 * @param {Number} params.zoomMin Indicates the minimum zoom ratio which could be reached zooming the map. Default value is <code>1</code>.
 * @param {Number} params.zoomStep Indicates the multiplier used to zoom map with +/- buttons. Default value is <code>1.6</code>.
 * @param {Boolean} params.zoomAnimate Indicates whether or not to animate changing of map zoom with zoom buttons.
 * @param {Boolean} params.regionsSelectable When set to true regions of the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.regionsSelectableOne Allow only one region to be selected at the moment. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectable When set to true markers on the map could be selected. Default value is <code>false</code>.
 * @param {Boolean} params.markersSelectableOne Allow only one marker to be selected at the moment. Default value is <code>false</code>.
 * @param {Object} params.regionStyle Set the styles for the map's regions. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'white',
    "fill-opacity": 1,
    stroke: 'none',
    "stroke-width": 0,
    "stroke-opacity": 1
  },
  hover: {
    "fill-opacity": 0.8,
    cursor: 'pointer'
  },
  selected: {
    fill: 'yellow'
  },
  selectedHover: {
  }
}</pre>
* @param {Object} params.regionLabelStyle Set the styles for the regions' labels. Each region or marker has four states: <code>initial</code> (default state), <code>hover</code> (when the mouse cursor is over the region or marker), <code>selected</code> (when region or marker is selected), <code>selectedHover</code> (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object} params.markerStyle Set the styles for the map's markers. Any parameter suitable for <code>regionStyle</code> could be used as well as numeric parameter <code>r</code> to set the marker's radius. Default value for that parameter is:
<pre>{
  initial: {
    fill: 'grey',
    stroke: '#505050',
    "fill-opacity": 1,
    "stroke-width": 1,
    "stroke-opacity": 1,
    r: 5
  },
  hover: {
    stroke: 'black',
    "stroke-width": 2,
    cursor: 'pointer'
  },
  selected: {
    fill: 'blue'
  },
  selectedHover: {
  }
}</pre>
You can also use <code>image</code> style attribute for markers. By default marker images are centered with the target point on map. To supply a custom offset please use the following format:
<pre>{
  url: 'image/url',
  offset: [-10, 5]
}</pre>
 * @param {Object} params.markerLabelStyle Set the styles for the markers' labels. Default value for that parameter is:
<pre>{
  initial: {
    'font-family': 'Verdana',
    'font-size': '12',
    'font-weight': 'bold',
    cursor: 'default',
    fill: 'black'
  },
  hover: {
    cursor: 'pointer'
  }
}</pre>
 * @param {Object|Array} params.markers Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by <code>latLng</code> (array of two numeric values), <code>name</code> (string which will be show on marker's tip) and any marker styles.
 * @param {Object} params.series Object with two keys: <code>markers</code> and <code>regions</code>. Each of which is an array of series configs to be applied to the respective map elements. See <a href="jvm.DataSeries.html">DataSeries</a> description for a list of parameters available.
 * @param {Object|String} params.focusOn This parameter sets the initial position and scale of the map viewport. See <code>setFocus</code> docuemntation for possible parameters.
 * @param {Object} params.labels Defines parameters for rendering static labels. Object could contain two keys: <code>regions</code> and <code>markers</code>. Each key value defines configuration object with the following possible options:
<ul>
  <li><code>render {Function}</code> - defines method for converting region code or marker index to actual label value.</li>
  <li><code>offsets {Object|Function}</code> - provides method or object which could be used to define label offset by region code or marker index.</li>
</ul>
<b>Plase note: static labels feature is not supported in Internet Explorer 8 and below.</b>
 * @param {Array|Object|String} params.selectedRegions Set initially selected regions.
 * @param {Array|Object|String} params.selectedMarkers Set initially selected markers.
 * @param {Function} params.onRegionTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the region tip is going to be shown.
 * @param {Function} params.onRegionOver <code>(Event e, String code)</code> Will be called on region mouse over event.
 * @param {Function} params.onRegionOut <code>(Event e, String code)</code> Will be called on region mouse out event.
 * @param {Function} params.onRegionClick <code>(Event e, String code)</code> Will be called on region click event.
 * @param {Function} params.onRegionSelected <code>(Event e, String code, Boolean isSelected, Array selectedRegions)</code> Will be called when region is (de)selected. <code>isSelected</code> parameter of the callback indicates whether region is selected or not. <code>selectedRegions</code> contains codes of all currently selected regions.
 * @param {Function} params.onMarkerTipShow <code>(Event e, Object tip, String code)</code> Will be called right before the marker tip is going to be shown.
 * @param {Function} params.onMarkerOver <code>(Event e, String code)</code> Will be called on marker mouse over event.
 * @param {Function} params.onMarkerOut <code>(Event e, String code)</code> Will be called on marker mouse out event.
 * @param {Function} params.onMarkerClick <code>(Event e, String code)</code> Will be called on marker click event.
 * @param {Function} params.onMarkerSelected <code>(Event e, String code, Boolean isSelected, Array selectedMarkers)</code> Will be called when marker is (de)selected. <code>isSelected</code> parameter of the callback indicates whether marker is selected or not. <code>selectedMarkers</code> contains codes of all currently selected markers.
 * @param {Function} params.onViewportChange <code>(Event e, Number scale)</code> Triggered when the map's viewport is changed (map was panned or zoomed).
 */
jvm.Map = function (params) {
  var map = this,
    e;

  this.params = jvm.$.extend(true, {}, jvm.Map.defaultParams, params);

  if (!jvm.Map.maps[this.params.map]) {
    throw new Error(
      "Attempt to use map which was not loaded: " + this.params.map,
    );
  }

  this.mapData = jvm.Map.maps[this.params.map];
  this.markers = {};
  this.regions = {};
  this.regionsColors = {};
  this.regionsData = {};

  this.container = jvm.$("<div>").addClass("jvectormap-container");
  if (this.params.container) {
    this.params.container.append(this.container);
  }
  this.container.data("mapObject", this);

  this.defaultWidth = this.mapData.width;
  this.defaultHeight = this.mapData.height;

  this.setBackgroundColor(this.params.backgroundColor);

  this.onResize = function () {
    map.updateSize();
  };
  jvm.$(window).resize(this.onResize);

  for (e in jvm.Map.apiEvents) {
    if (this.params[e]) {
      this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    }
  }

  this.canvas = new jvm.VectorCanvas(
    this.container[0],
    this.width,
    this.height,
  );

  if (this.params.bindTouchEvents) {
    if (
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch)
    ) {
      this.bindContainerTouchEvents();
    } else if (window.MSGesture) {
      this.bindContainerPointerEvents();
    }
  }
  this.bindContainerEvents();
  this.bindElementEvents();
  this.createTip();
  if (this.params.zoomButtons) {
    this.bindZoomButtons();
  }

  this.createRegions();
  this.createMarkers(this.params.markers || {});

  this.updateSize();

  if (this.params.focusOn) {
    if (typeof this.params.focusOn === "string") {
      this.params.focusOn = { region: this.params.focusOn };
    } else if (jvm.$.isArray(this.params.focusOn)) {
      this.params.focusOn = { regions: this.params.focusOn };
    }
    this.setFocus(this.params.focusOn);
  }

  if (this.params.selectedRegions) {
    this.setSelectedRegions(this.params.selectedRegions);
  }
  if (this.params.selectedMarkers) {
    this.setSelectedMarkers(this.params.selectedMarkers);
  }

  this.legendCntHorizontal = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h");
  this.legendCntVertical = jvm
    .$("<div/>")
    .addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v");
  this.container.append(this.legendCntHorizontal);
  this.container.append(this.legendCntVertical);

  if (this.params.series) {
    this.createSeries();
  }
};

jvm.Map.prototype = {
  transX: 0,
  transY: 0,
  scale: 1,
  baseTransX: 0,
  baseTransY: 0,
  baseScale: 1,

  width: 0,
  height: 0,

  /**
   * Set background color of the map.
   * @param {String} backgroundColor Background color in CSS format.
   */
  setBackgroundColor: function (backgroundColor) {
    this.container.css("background-color", backgroundColor);
  },

  resize: function () {
    var curBaseScale = this.baseScale;
    if (this.width / this.height > this.defaultWidth / this.defaultHeight) {
      this.baseScale = this.height / this.defaultHeight;
      this.baseTransX =
        Math.abs(this.width - this.defaultWidth * this.baseScale) /
        (2 * this.baseScale);
    } else {
      this.baseScale = this.width / this.defaultWidth;
      this.baseTransY =
        Math.abs(this.height - this.defaultHeight * this.baseScale) /
        (2 * this.baseScale);
    }
    this.scale *= this.baseScale / curBaseScale;
    this.transX *= this.baseScale / curBaseScale;
    this.transY *= this.baseScale / curBaseScale;
  },

  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: function () {
    this.width = this.container.width();
    this.height = this.container.height();
    this.resize();
    this.canvas.setSize(this.width, this.height);
    this.applyTransform();
  },

  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: function () {
    var key, i;

    for (key in this.series) {
      for (i = 0; i < this.series[key].length; i++) {
        this.series[key][i].clear();
      }
    }
    this.scale = this.baseScale;
    this.transX = this.baseTransX;
    this.transY = this.baseTransY;
    this.applyTransform();
  },

  applyTransform: function () {
    var maxTransX, maxTransY, minTransX, minTransY;

    if (this.defaultWidth * this.scale <= this.width) {
      maxTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
      minTransX =
        (this.width - this.defaultWidth * this.scale) / (2 * this.scale);
    } else {
      maxTransX = 0;
      minTransX = (this.width - this.defaultWidth * this.scale) / this.scale;
    }

    if (this.defaultHeight * this.scale <= this.height) {
      maxTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
      minTransY =
        (this.height - this.defaultHeight * this.scale) / (2 * this.scale);
    } else {
      maxTransY = 0;
      minTransY = (this.height - this.defaultHeight * this.scale) / this.scale;
    }

    if (this.transY > maxTransY) {
      this.transY = maxTransY;
    } else if (this.transY < minTransY) {
      this.transY = minTransY;
    }
    if (this.transX > maxTransX) {
      this.transX = maxTransX;
    } else if (this.transX < minTransX) {
      this.transX = minTransX;
    }

    this.canvas.applyTransformParams(this.scale, this.transX, this.transY);

    if (this.markers) {
      this.repositionMarkers();
    }

    this.repositionLabels();

    this.container.trigger("viewportChange", [
      this.scale / this.baseScale,
      this.transX,
      this.transY,
    ]);
  },

  bindContainerEvents: function () {
    var mouseDown = false,
      oldPageX,
      oldPageY,
      map = this;

    if (this.params.panOnDrag) {
      this.container
        .mousemove(function (e) {
          if (mouseDown) {
            map.transX -= (oldPageX - e.pageX) / map.scale;
            map.transY -= (oldPageY - e.pageY) / map.scale;

            map.applyTransform();

            oldPageX = e.pageX;
            oldPageY = e.pageY;
          }
          return false;
        })
        .mousedown(function (e) {
          mouseDown = true;
          oldPageX = e.pageX;
          oldPageY = e.pageY;
          return false;
        });

      this.onContainerMouseUp = function () {
        mouseDown = false;
      };
      jvm.$("body").mouseup(this.onContainerMouseUp);
    }

    if (this.params.zoomOnScroll) {
      this.container.mousewheel(function (event, delta, deltaX, deltaY) {
        var offset = jvm.$(map.container).offset(),
          centerX = event.pageX - offset.left,
          centerY = event.pageY - offset.top,
          zoomStep = Math.pow(
            1 + map.params.zoomOnScrollSpeed / 1000,
            event.deltaFactor * event.deltaY,
          );

        map.tip.hide();

        map.setScale(map.scale * zoomStep, centerX, centerY);
        event.preventDefault();
      });
    }
  },

  bindContainerTouchEvents: function () {
    var touchStartScale,
      touchStartDistance,
      map = this,
      touchX,
      touchY,
      centerTouchX,
      centerTouchY,
      lastTouchesLength,
      handleTouchEvent = function (e) {
        var touches = e.originalEvent.touches,
          offset,
          scale,
          transXOld,
          transYOld;

        if (e.type == "touchstart") {
          lastTouchesLength = 0;
        }

        if (touches.length == 1) {
          if (lastTouchesLength == 1) {
            transXOld = map.transX;
            transYOld = map.transY;
            map.transX -= (touchX - touches[0].pageX) / map.scale;
            map.transY -= (touchY - touches[0].pageY) / map.scale;
            map.applyTransform();
            map.tip.hide();
            if (transXOld != map.transX || transYOld != map.transY) {
              e.preventDefault();
            }
          }
          touchX = touches[0].pageX;
          touchY = touches[0].pageY;
        } else if (touches.length == 2) {
          if (lastTouchesLength == 2) {
            scale =
              Math.sqrt(
                Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                  Math.pow(touches[0].pageY - touches[1].pageY, 2),
              ) / touchStartDistance;
            map.setScale(touchStartScale * scale, centerTouchX, centerTouchY);
            map.tip.hide();
            e.preventDefault();
          } else {
            offset = jvm.$(map.container).offset();
            if (touches[0].pageX > touches[1].pageX) {
              centerTouchX =
                touches[1].pageX + (touches[0].pageX - touches[1].pageX) / 2;
            } else {
              centerTouchX =
                touches[0].pageX + (touches[1].pageX - touches[0].pageX) / 2;
            }
            if (touches[0].pageY > touches[1].pageY) {
              centerTouchY =
                touches[1].pageY + (touches[0].pageY - touches[1].pageY) / 2;
            } else {
              centerTouchY =
                touches[0].pageY + (touches[1].pageY - touches[0].pageY) / 2;
            }
            centerTouchX -= offset.left;
            centerTouchY -= offset.top;
            touchStartScale = map.scale;
            touchStartDistance = Math.sqrt(
              Math.pow(touches[0].pageX - touches[1].pageX, 2) +
                Math.pow(touches[0].pageY - touches[1].pageY, 2),
            );
          }
        }

        lastTouchesLength = touches.length;
      };

    jvm.$(this.container).bind("touchstart", handleTouchEvent);
    jvm.$(this.container).bind("touchmove", handleTouchEvent);
  },

  bindContainerPointerEvents: function () {
    var map = this,
      gesture = new MSGesture(),
      element = this.container[0],
      handlePointerDownEvent = function (e) {
        gesture.addPointer(e.pointerId);
      },
      handleGestureEvent = function (e) {
        var offset, scale, transXOld, transYOld;

        if (e.translationX != 0 || e.translationY != 0) {
          transXOld = map.transX;
          transYOld = map.transY;
          map.transX += e.translationX / map.scale;
          map.transY += e.translationY / map.scale;
          map.applyTransform();
          map.tip.hide();
          if (transXOld != map.transX || transYOld != map.transY) {
            e.preventDefault();
          }
        }
        if (e.scale != 1) {
          map.setScale(map.scale * e.scale, e.offsetX, e.offsetY);
          map.tip.hide();
          e.preventDefault();
        }
      };

    gesture.target = element;
    element.addEventListener("MSGestureChange", handleGestureEvent, false);
    element.addEventListener("pointerdown", handlePointerDownEvent, false);
  },

  bindElementEvents: function () {
    var map = this,
      pageX,
      pageY,
      mouseMoved;

    this.container.mousemove(function (e) {
      if (Math.abs(pageX - e.pageX) + Math.abs(pageY - e.pageY) > 2) {
        mouseMoved = true;
      }
    });

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseover mouseout",
      function (e) {
        var baseVal =
            jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element,
          tipText =
            type == "region"
              ? map.mapData.paths[code].name
              : map.markers[code].config.name || "",
          tipShowEvent = jvm.$.Event(type + "TipShow.jvectormap"),
          overEvent = jvm.$.Event(type + "Over.jvectormap");

        if (e.type == "mouseover") {
          map.container.trigger(overEvent, [code]);
          if (!overEvent.isDefaultPrevented()) {
            element.setHovered(true);
          }

          map.tip.text(tipText);
          map.container.trigger(tipShowEvent, [map.tip, code]);
          if (!tipShowEvent.isDefaultPrevented()) {
            map.tip.show();
            map.tipWidth = map.tip.width();
            map.tipHeight = map.tip.height();
          }
        } else {
          element.setHovered(false);
          map.tip.hide();
          map.container.trigger(type + "Out.jvectormap", [code]);
        }
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mousedown",
      function (e) {
        pageX = e.pageX;
        pageY = e.pageY;
        mouseMoved = false;
      },
    );

    /* Can not use common class selectors here because of the bug in jQuery
       SVG handling, use with caution. */
    this.container.delegate(
      "[class~='jvectormap-element']",
      "mouseup",
      function () {
        var baseVal = jvm.$(this).attr("class").baseVal
            ? jvm.$(this).attr("class").baseVal
            : jvm.$(this).attr("class"),
          type =
            baseVal.indexOf("jvectormap-region") === -1 ? "marker" : "region",
          code =
            type == "region"
              ? jvm.$(this).attr("data-code")
              : jvm.$(this).attr("data-index"),
          clickEvent = jvm.$.Event(type + "Click.jvectormap"),
          element =
            type == "region"
              ? map.regions[code].element
              : map.markers[code].element;

        if (!mouseMoved) {
          map.container.trigger(clickEvent, [code]);
          if (
            (type === "region" && map.params.regionsSelectable) ||
            (type === "marker" && map.params.markersSelectable)
          ) {
            if (!clickEvent.isDefaultPrevented()) {
              if (map.params[type + "sSelectableOne"]) {
                map.clearSelected(type + "s");
              }
              element.setSelected(!element.isSelected);
            }
          }
        }
      },
    );
  },

  bindZoomButtons: function () {
    var map = this;

    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomin")
      .text("+")
      .appendTo(this.container);
    jvm
      .$("<div/>")
      .addClass("jvectormap-zoomout")
      .html("&#x2212;")
      .appendTo(this.container);

    this.container.find(".jvectormap-zoomin").click(function () {
      map.setScale(
        map.scale * map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
    this.container.find(".jvectormap-zoomout").click(function () {
      map.setScale(
        map.scale / map.params.zoomStep,
        map.width / 2,
        map.height / 2,
        false,
        map.params.zoomAnimate,
      );
    });
  },

  createTip: function () {
    var map = this;

    this.tip = jvm
      .$("<div/>")
      .addClass("jvectormap-tip")
      .appendTo(jvm.$("body"));

    this.container.mousemove(function (e) {
      var left = e.pageX - 15 - map.tipWidth,
        top = e.pageY - 15 - map.tipHeight;

      if (left < 5) {
        left = e.pageX + 15;
      }
      if (top < 5) {
        top = e.pageY + 15;
      }

      map.tip.css({
        left: left,
        top: top,
      });
    });
  },

  setScale: function (scale, anchorX, anchorY, isCentered, animate) {
    var viewportChangeEvent = jvm.$.Event("zoom.jvectormap"),
      interval,
      that = this,
      i = 0,
      count = Math.abs(
        Math.round(((scale - this.scale) * 60) / Math.max(scale, this.scale)),
      ),
      scaleStart,
      scaleDiff,
      transXStart,
      transXDiff,
      transYStart,
      transYDiff,
      transX,
      transY,
      deferred = new jvm.$.Deferred();

    if (scale > this.params.zoomMax * this.baseScale) {
      scale = this.params.zoomMax * this.baseScale;
    } else if (scale < this.params.zoomMin * this.baseScale) {
      scale = this.params.zoomMin * this.baseScale;
    }

    if (typeof anchorX != "undefined" && typeof anchorY != "undefined") {
      const zoomStep = scale / this.scale;
      if (isCentered) {
        transX =
          anchorX +
          (this.defaultWidth * (this.width / (this.defaultWidth * scale))) / 2;
        transY =
          anchorY +
          (this.defaultHeight * (this.height / (this.defaultHeight * scale))) /
            2;
      } else {
        transX = this.transX - ((zoomStep - 1) / scale) * anchorX;
        transY = this.transY - ((zoomStep - 1) / scale) * anchorY;
      }
    }

    if (animate && count > 0) {
      scaleStart = this.scale;
      scaleDiff = (scale - scaleStart) / count;
      transXStart = this.transX * this.scale;
      transYStart = this.transY * this.scale;
      transXDiff = (transX * scale - transXStart) / count;
      transYDiff = (transY * scale - transYStart) / count;
      interval = setInterval(function () {
        i += 1;
        that.scale = scaleStart + scaleDiff * i;
        that.transX = (transXStart + transXDiff * i) / that.scale;
        that.transY = (transYStart + transYDiff * i) / that.scale;
        that.applyTransform();
        if (i == count) {
          clearInterval(interval);
          that.container.trigger(viewportChangeEvent, [scale / that.baseScale]);
          deferred.resolve();
        }
      }, 10);
    } else {
      this.transX = transX;
      this.transY = transY;
      this.scale = scale;
      this.applyTransform();
      this.container.trigger(viewportChangeEvent, [scale / this.baseScale]);
      deferred.resolve();
    }

    return deferred;
  },

  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   * @param This method takes a configuration object as the single argument. The options passed to it are the following:
   * @param {Array} params.regions Array of region codes to zoom to.
   * @param {String} params.region Region code to zoom to.
   * @param {Number} params.scale Map scale to set.
   * @param {Number} params.lat Latitude to set viewport to.
   * @param {Number} params.lng Longitude to set viewport to.
   * @param {Number} params.x Number from 0 to 1 specifying the horizontal coordinate of the central point of the viewport.
   * @param {Number} params.y Number from 0 to 1 specifying the vertical coordinate of the central point of the viewport.
   * @param {Boolean} params.animate Indicates whether or not to animate the scale change and transition.
   */
  setFocus: function (config) {
    var bbox, itemBbox, newBbox, codes, i, point;

    config = config || {};

    if (config.region) {
      codes = [config.region];
    } else if (config.regions) {
      codes = config.regions;
    }

    if (codes) {
      for (i = 0; i < codes.length; i++) {
        if (this.regions[codes[i]]) {
          itemBbox = this.regions[codes[i]].element.shape.getBBox();
          if (itemBbox) {
            if (typeof bbox == "undefined") {
              bbox = itemBbox;
            } else {
              newBbox = {
                x: Math.min(bbox.x, itemBbox.x),
                y: Math.min(bbox.y, itemBbox.y),
                width:
                  Math.max(bbox.x + bbox.width, itemBbox.x + itemBbox.width) -
                  Math.min(bbox.x, itemBbox.x),
                height:
                  Math.max(bbox.y + bbox.height, itemBbox.y + itemBbox.height) -
                  Math.min(bbox.y, itemBbox.y),
              };
              bbox = newBbox;
            }
          }
        }
      }
      return this.setScale(
        Math.min(this.width / bbox.width, this.height / bbox.height),
        -(bbox.x + bbox.width / 2),
        -(bbox.y + bbox.height / 2),
        true,
        config.animate,
      );
    } else {
      if (config.lat !== undefined && config.lng !== undefined) {
        point = this.latLngToPoint(config.lat, config.lng);
        config.x = this.transX - point.x / this.scale;
        config.y = this.transY - point.y / this.scale;
      } else if (config.x && config.y) {
        config.x *= -this.defaultWidth;
        config.y *= -this.defaultHeight;
      }
      return this.setScale(
        config.scale * this.baseScale,
        config.x,
        config.y,
        true,
        config.animate,
      );
    }
  },

  getSelected: function (type) {
    var key,
      selected = [];

    for (key in this[type]) {
      if (this[type][key].element.isSelected) {
        selected.push(key);
      }
    }
    return selected;
  },

  /**
   * Return the codes of currently selected regions.
   * @returns {Array}
   */
  getSelectedRegions: function () {
    return this.getSelected("regions");
  },

  /**
   * Return the codes of currently selected markers.
   * @returns {Array}
   */
  getSelectedMarkers: function () {
    return this.getSelected("markers");
  },

  setSelected: function (type, keys) {
    var i;

    if (typeof keys != "object") {
      keys = [keys];
    }

    if (jvm.$.isArray(keys)) {
      for (i = 0; i < keys.length; i++) {
        this[type][keys[i]].element.setSelected(true);
      }
    } else {
      for (i in keys) {
        this[type][i].element.setSelected(!!keys[i]);
      }
    }
  },

  /**
   * Set or remove selected state for the regions.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the region(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of regions, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedRegions: function (keys) {
    this.setSelected("regions", keys);
  },

  /**
   * Set or remove selected state for the markers.
   * @param {String|Array|Object} keys If <code>String</code> or <code>Array</code> the marker(s) with the corresponding code(s) will be selected. If <code>Object</code> was provided its keys are  codes of markers, state of which should be changed. Selected state will be set if value is true, removed otherwise.
   */
  setSelectedMarkers: function (keys) {
    this.setSelected("markers", keys);
  },

  clearSelected: function (type) {
    var select = {},
      selected = this.getSelected(type),
      i;

    for (i = 0; i < selected.length; i++) {
      select[selected[i]] = false;
    }

    this.setSelected(type, select);
  },

  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: function () {
    this.clearSelected("regions");
  },

  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: function () {
    this.clearSelected("markers");
  },

  /**
   * Return the instance of Map. Useful when instantiated as a jQuery plug-in.
   * @returns {Map}
   */
  getMapObject: function () {
    return this;
  },

  /**
   * Return the name of the region by region code.
   * @returns {String}
   */
  getRegionName: function (code) {
    return this.mapData.paths[code].name;
  },

  createRegions: function () {
    var key,
      region,
      map = this;

    this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup();

    for (key in this.mapData.paths) {
      const regionStyle =
        typeof this.params.regionStyle === "function"
          ? {
              ...jvm.Map.defaultParams.regionStyle,
              ...this.params.regionStyle(key),
            }
          : this.params.regionStyle;
      region = new jvm.Region({
        map: this,
        path: this.mapData.paths[key].path,
        code: key,
        style: jvm.$.extend(true, {}, regionStyle),
        labelStyle: jvm.$.extend(true, {}, this.params.regionLabelStyle),
        canvas: this.canvas,
        labelsGroup: this.regionLabelsGroup,
        label:
          this.canvas.mode != "vml"
            ? this.params.labels && this.params.labels.regions
            : null,
      });

      jvm.$(region.shape).bind("selected", function (e, isSelected) {
        map.container.trigger("regionSelected.jvectormap", [
          jvm.$(this.node).attr("data-code"),
          isSelected,
          map.getSelectedRegions(),
        ]);
      });
      this.regions[key] = {
        element: region,
        config: this.mapData.paths[key],
      };
    }
  },

  createMarkers: function (markers) {
    var i,
      marker,
      point,
      markerConfig,
      markersArray,
      map = this;

    this.markersGroup = this.markersGroup || this.canvas.addGroup();
    this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup();

    if (jvm.$.isArray(markers)) {
      markersArray = markers.slice();
      markers = {};
      for (i = 0; i < markersArray.length; i++) {
        markers[i] = markersArray[i];
      }
    }

    for (i in markers) {
      markerConfig =
        markers[i] instanceof Array ? { latLng: markers[i] } : markers[i];
      point = this.getMarkerPosition(markerConfig);

      if (point !== false) {
        marker = new jvm.Marker({
          map: this,
          style: jvm.$.extend(true, {}, this.params.markerStyle, {
            initial: markerConfig.style || {},
          }),
          labelStyle: jvm.$.extend(true, {}, this.params.markerLabelStyle),
          index: i,
          cx: point.x,
          cy: point.y,
          group: this.markersGroup,
          canvas: this.canvas,
          labelsGroup: this.markerLabelsGroup,
          label:
            this.canvas.mode != "vml"
              ? this.params.labels && this.params.labels.markers
              : null,
        });

        jvm.$(marker.shape).bind("selected", function (e, isSelected) {
          map.container.trigger("markerSelected.jvectormap", [
            jvm.$(this.node).attr("data-index"),
            isSelected,
            map.getSelectedMarkers(),
          ]);
        });
        if (this.markers[i]) {
          this.removeMarkers([i]);
        }
        this.markers[i] = { element: marker, config: markerConfig };
      }
    }
  },

  repositionMarkers: function () {
    var i, point;

    for (i in this.markers) {
      point = this.getMarkerPosition(this.markers[i].config);
      if (point !== false) {
        this.markers[i].element.setStyle({ cx: point.x, cy: point.y });
      }
    }
  },

  repositionLabels: function () {
    var key;

    for (key in this.regions) {
      this.regions[key].element.updateLabelPosition();
    }

    for (key in this.markers) {
      this.markers[key].element.updateLabelPosition();
    }
  },

  getMarkerPosition: function (markerConfig) {
    if (jvm.Map.maps[this.params.map].projection) {
      return this.latLngToPoint.apply(this, markerConfig.latLng || [0, 0]);
    } else {
      return {
        x: markerConfig.coords[0] * this.scale + this.transX * this.scale,
        y: markerConfig.coords[1] * this.scale + this.transY * this.scale,
      };
    }
  },

  /**
   * Add one marker to the map.
   * @param {String} key Marker unique code.
   * @param {Object} marker Marker configuration parameters.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarker: function (key, marker, seriesData) {
    var markers = {},
      data = [],
      values,
      i,
      seriesData = seriesData || [];

    markers[key] = marker;

    for (i = 0; i < seriesData.length; i++) {
      values = {};
      if (typeof seriesData[i] !== "undefined") {
        values[key] = seriesData[i];
      }
      data.push(values);
    }
    this.addMarkers(markers, data);
  },

  /**
   * Add set of marker to the map.
   * @param {Object|Array} markers Markers to add to the map. In case of array is provided, codes of markers will be set as string representations of array indexes.
   * @param {Array} seriesData Values to add to the data series.
   */
  addMarkers: function (markers, seriesData) {
    var i;

    seriesData = seriesData || [];

    this.createMarkers(markers);
    for (i = 0; i < seriesData.length; i++) {
      this.series.markers[i].setValues(seriesData[i] || {});
    }
  },

  /**
   * Remove some markers from the map.
   * @param {Array} markers Array of marker codes to be removed.
   */
  removeMarkers: function (markers) {
    var i;

    for (i = 0; i < markers.length; i++) {
      this.markers[markers[i]].element.remove();
      delete this.markers[markers[i]];
    }
  },

  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: function () {
    var i,
      markers = [];

    for (i in this.markers) {
      markers.push(i);
    }
    this.removeMarkers(markers);
  },

  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   * @param {Number} lat Latitide of point in degrees.
   * @param {Number} lng Longitude of point in degrees.
   */
  latLngToPoint: function (lat, lng) {
    var point,
      proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      inset,
      bbox;

    if (lng < -180 + centralMeridian) {
      lng += 360;
    }

    point = jvm.Proj[proj.type](lat, lng, centralMeridian);

    inset = this.getInsetForPoint(point.x, point.y);
    if (inset) {
      bbox = inset.bbox;

      point.x =
        ((point.x - bbox[0].x) / (bbox[1].x - bbox[0].x)) *
        inset.width *
        this.scale;
      point.y =
        ((point.y - bbox[0].y) / (bbox[1].y - bbox[0].y)) *
        inset.height *
        this.scale;

      return {
        x: point.x + this.transX * this.scale + inset.left * this.scale,
        y: point.y + this.transY * this.scale + inset.top * this.scale,
      };
    } else {
      return false;
    }
  },

  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   * @param {Number} x X-axis of point on map in pixels.
   * @param {Number} y Y-axis of point on map in pixels.
   */
  pointToLatLng: function (x, y) {
    var proj = jvm.Map.maps[this.params.map].projection,
      centralMeridian = proj.centralMeridian,
      insets = jvm.Map.maps[this.params.map].insets,
      i,
      inset,
      bbox,
      nx,
      ny;

    for (i = 0; i < insets.length; i++) {
      inset = insets[i];
      bbox = inset.bbox;

      nx = x - (this.transX * this.scale + inset.left * this.scale);
      ny = y - (this.transY * this.scale + inset.top * this.scale);

      nx =
        (nx / (inset.width * this.scale)) * (bbox[1].x - bbox[0].x) + bbox[0].x;
      ny =
        (ny / (inset.height * this.scale)) * (bbox[1].y - bbox[0].y) +
        bbox[0].y;

      if (
        nx > bbox[0].x &&
        nx < bbox[1].x &&
        ny > bbox[0].y &&
        ny < bbox[1].y
      ) {
        return jvm.Proj[proj.type + "_inv"](nx, -ny, centralMeridian);
      }
    }

    return false;
  },

  getInsetForPoint: function (x, y) {
    var insets = jvm.Map.maps[this.params.map].insets,
      i,
      bbox;

    for (i = 0; i < insets.length; i++) {
      bbox = insets[i].bbox;
      if (x > bbox[0].x && x < bbox[1].x && y > bbox[0].y && y < bbox[1].y) {
        return insets[i];
      }
    }
  },

  createSeries: function () {
    var i, key;

    this.series = {
      markers: [],
      regions: [],
    };

    for (key in this.params.series) {
      for (i = 0; i < this.params.series[key].length; i++) {
        this.series[key][i] = new jvm.DataSeries(
          this.params.series[key][i],
          this[key],
          this,
        );
      }
    }
  },

  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: function () {
    this.tip.remove();
    this.container.remove();
    jvm.$(window).unbind("resize", this.onResize);
    jvm.$("body").unbind("mouseup", this.onContainerMouseUp);
  },
};

jvm.Map.maps = {};
jvm.Map.defaultParams = {
  map: "world_mill_en",
  backgroundColor: "#505050",
  zoomButtons: true,
  zoomOnScroll: true,
  zoomOnScrollSpeed: 3,
  panOnDrag: true,
  zoomMax: 8,
  zoomMin: 1,
  zoomStep: 1.6,
  zoomAnimate: true,
  regionsSelectable: false,
  markersSelectable: false,
  bindTouchEvents: true,
  regionStyle: {
    initial: {
      fill: "white",
      "fill-opacity": 1,
      stroke: "none",
      "stroke-width": 0,
      "stroke-opacity": 1,
    },
    hover: {
      "fill-opacity": 0.8,
      cursor: "pointer",
    },
    selected: {
      fill: "yellow",
    },
    selectedHover: {},
  },
  regionLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
  markerStyle: {
    initial: {
      fill: "grey",
      stroke: "#505050",
      "fill-opacity": 1,
      "stroke-width": 1,
      "stroke-opacity": 1,
      r: 5,
    },
    hover: {
      stroke: "black",
      "stroke-width": 2,
      cursor: "pointer",
    },
    selected: {
      fill: "blue",
    },
    selectedHover: {},
  },
  markerLabelStyle: {
    initial: {
      "font-family": "Verdana",
      "font-size": "12",
      "font-weight": "bold",
      cursor: "default",
      fill: "black",
    },
    hover: {
      cursor: "pointer",
    },
  },
};
jvm.Map.apiEvents = {
  onRegionTipShow: "regionTipShow",
  onRegionOver: "regionOver",
  onRegionOut: "regionOut",
  onRegionClick: "regionClick",
  onRegionSelected: "regionSelected",
  onMarkerTipShow: "markerTipShow",
  onMarkerOver: "markerOver",
  onMarkerOut: "markerOut",
  onMarkerClick: "markerClick",
  onMarkerSelected: "markerSelected",
  onViewportChange: "viewportChange",
};
/**
 * Creates map with drill-down functionality.
 * @constructor
 * @param {Object} params Parameters to initialize map with.
 * @param {Number} params.maxLevel Maximum number of levels user can go through
 * @param {Object} params.main Config of the main map. See <a href="./jvm-map/">jvm.Map</a> for more information.
 * @param {Function} params.mapNameByCode Function to generate map name by region code. Default value is:
<pre>
function(code, multiMap) {
  return code.toLowerCase()+'_'+
         multiMap.defaultProjection+'_en';
}
</pre>
 * @param {Function} params.mapUrlByCode Function to generate map url by region code. Default value is:
<pre>
function(code, multiMap){
  return 'jquery-jvectormap-data-'+
         code.toLowerCase()+'-'+
         multiMap.defaultProjection+'-en.js';
}
</pre>
 */
jvm.MultiMap = function (params) {
  var that = this;

  this.maps = {};
  this.params = jvm.$.extend(true, {}, jvm.MultiMap.defaultParams, params);
  this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE;
  this.params.main = this.params.main || {};
  this.params.main.multiMapLevel = 0;
  this.history = [this.addMap(this.params.main.map, this.params.main)];
  this.defaultProjection = this.history[0].mapData.projection.type;
  this.mapsLoaded = {};
  this.mapsLoadedData = {};

  this.params.container.css({ position: "relative" });
  this.backButton = jvm
    .$("<div/>")
    .addClass("jvectormap-goback")
    .text("Back")
    .appendTo(this.params.container);
  this.backButton.hide();
  this.backButton.click(function () {
    that.goBack();
  });

  this.spinner = jvm
    .$("<div/>")
    .addClass("jvectormap-spinner")
    .appendTo(this.params.container);
  this.spinner.hide();
};

jvm.MultiMap.prototype = {
  addMap: function (name, config) {
    var cnt = jvm.$("<div/>").css({
      width: "100%",
      height: "100%",
    });

    this.params.container.append(cnt);

    this.maps[name] = new jvm.Map(jvm.$.extend(config, { container: cnt }));
    if (this.params.maxLevel > config.multiMapLevel) {
      this.maps[name].container.on(
        "regionClick.jvectormap",
        { scope: this },
        function (e, code) {
          var multimap = e.data.scope,
            mapName = multimap.params.mapNameByCode(code, multimap);

          if (
            !multimap.drillDownPromise ||
            multimap.drillDownPromise.state() !== "pending"
          ) {
            multimap.drillDown(mapName, code);
          }
        },
      );
    }

    return this.maps[name];
  },

  downloadMap: function (code) {
    var that = this,
      deferred = jvm.$.Deferred();
    const { getDrillDownMap } = this.params;

    const handleMapData = function (data) {
      that.mapsLoaded[code] = true;
      that.mapsLoadedData[code] = data;
      deferred.resolve();
    };

    if (!this.mapsLoaded[code]) {
      if (getDrillDownMap && typeof getDrillDownMap === "function") {
        const result = getDrillDownMap(code);
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              handleMapData(data);
            })
            .catch(() => {
              deferred.reject();
            });
        } else {
          handleMapData(result);
        }
        return deferred;
      }
      jvm.$.get(this.params.mapUrlByCode(code, this)).then(
        function (data) {
          handleMapData(data);
        },
        function () {
          deferred.reject();
        },
      );
    } else {
      deferred.resolve();
    }
    return deferred;
  },

  drillDown: function (name, code) {
    var currentMap = this.history[this.history.length - 1],
      that = this,
      focusPromise = currentMap.setFocus({ region: code, animate: true }),
      downloadPromise = this.downloadMap(code);

    focusPromise.then(function () {
      if (downloadPromise.state() === "pending") {
        that.spinner.show();
      }
    });
    downloadPromise.always(function () {
      that.spinner.hide();
    });
    this.drillDownPromise = jvm.$.when(downloadPromise, focusPromise);
    this.drillDownPromise.then(function () {
      const { content } = that.mapsLoadedData[code];
      currentMap.params.container.hide();
      if (!that.maps[name]) {
        jvm.$.fn.vectorMap("addMap", name, content);
        that.addMap(name, {
          map: name,
          multiMapLevel: currentMap.params.multiMapLevel + 1,
        });
      } else {
        that.maps[name].params.container.show();
      }
      that.history.push(that.maps[name]);
      that.backButton.show();
    });
  },

  goBack: function () {
    var currentMap = this.history.pop(),
      prevMap = this.history[this.history.length - 1],
      that = this;

    currentMap
      .setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true })
      .then(function () {
        currentMap.params.container.hide();
        prevMap.params.container.show();
        prevMap.updateSize();
        if (that.history.length === 1) {
          that.backButton.hide();
        }
        prevMap.setFocus({ scale: 1, x: 0.5, y: 0.5, animate: true });
      });
  },
};

jvm.MultiMap.defaultParams = {
  mapNameByCode: function (code, multiMap) {
    return code.toLowerCase() + "_" + multiMap.defaultProjection + "_en";
  },
  mapUrlByCode: function (code, multiMap) {
    return (
      "jquery-jvectormap-data-" +
      code.toLowerCase() +
      "-" +
      multiMap.defaultProjection +
      "-en.js"
    );
  },
};


//# sourceURL=webpack://@react-jvectormap/core/../jvectormap/jquery.jvectormap.min.js?`)},"data:image/gif;base64,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":module=>{eval(`module.exports = "data:image/gif;base64,R0lGODlhIAAgAPMAAP///wAAAMbGxoSEhLa2tpqamjY2NlZWVtjY2OTk5Ly8vB4eHgQEBAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAIAAgAAAE5xDISWlhperN52JLhSSdRgwVo1ICQZRUsiwHpTJT4iowNS8vyW2icCF6k8HMMBkCEDskxTBDAZwuAkkqIfxIQyhBQBFvAQSDITM5VDW6XNE4KagNh6Bgwe60smQUB3d4Rz1ZBApnFASDd0hihh12BkE9kjAJVlycXIg7CQIFA6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YJvpJivxNaGmLHT0VnOgSYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHRLYKhKP1oZmADdEAAAh+QQJCgAAACwAAAAAIAAgAAAE6hDISWlZpOrNp1lGNRSdRpDUolIGw5RUYhhHukqFu8DsrEyqnWThGvAmhVlteBvojpTDDBUEIFwMFBRAmBkSgOrBFZogCASwBDEY/CZSg7GSE0gSCjQBMVG023xWBhklAnoEdhQEfyNqMIcKjhRsjEdnezB+A4k8gTwJhFuiW4dokXiloUepBAp5qaKpp6+Ho7aWW54wl7obvEe0kRuoplCGepwSx2jJvqHEmGt6whJpGpfJCHmOoNHKaHx61WiSR92E4lbFoq+B6QDtuetcaBPnW6+O7wDHpIiK9SaVK5GgV543tzjgGcghAgAh+QQJCgAAACwAAAAAIAAgAAAE7hDISSkxpOrN5zFHNWRdhSiVoVLHspRUMoyUakyEe8PTPCATW9A14E0UvuAKMNAZKYUZCiBMuBakSQKG8G2FzUWox2AUtAQFcBKlVQoLgQReZhQlCIJesQXI5B0CBnUMOxMCenoCfTCEWBsJColTMANldx15BGs8B5wlCZ9Po6OJkwmRpnqkqnuSrayqfKmqpLajoiW5HJq7FL1Gr2mMMcKUMIiJgIemy7xZtJsTmsM4xHiKv5KMCXqfyUCJEonXPN2rAOIAmsfB3uPoAK++G+w48edZPK+M6hLJpQg484enXIdQFSS1u6UhksENEQAAIfkECQoAAAAsAAAAACAAIAAABOcQyEmpGKLqzWcZRVUQnZYg1aBSh2GUVEIQ2aQOE+G+cD4ntpWkZQj1JIiZIogDFFyHI0UxQwFugMSOFIPJftfVAEoZLBbcLEFhlQiqGp1Vd140AUklUN3eCA51C1EWMzMCezCBBmkxVIVHBWd3HHl9JQOIJSdSnJ0TDKChCwUJjoWMPaGqDKannasMo6WnM562R5YluZRwur0wpgqZE7NKUm+FNRPIhjBJxKZteWuIBMN4zRMIVIhffcgojwCF117i4nlLnY5ztRLsnOk+aV+oJY7V7m76PdkS4trKcdg0Zc0tTcKkRAAAIfkECQoAAAAsAAAAACAAIAAABO4QyEkpKqjqzScpRaVkXZWQEximw1BSCUEIlDohrft6cpKCk5xid5MNJTaAIkekKGQkWyKHkvhKsR7ARmitkAYDYRIbUQRQjWBwJRzChi9CRlBcY1UN4g0/VNB0AlcvcAYHRyZPdEQFYV8ccwR5HWxEJ02YmRMLnJ1xCYp0Y5idpQuhopmmC2KgojKasUQDk5BNAwwMOh2RtRq5uQuPZKGIJQIGwAwGf6I0JXMpC8C7kXWDBINFMxS4DKMAWVWAGYsAdNqW5uaRxkSKJOZKaU3tPOBZ4DuK2LATgJhkPJMgTwKCdFjyPHEnKxFCDhEAACH5BAkKAAAALAAAAAAgACAAAATzEMhJaVKp6s2nIkolIJ2WkBShpkVRWqqQrhLSEu9MZJKK9y1ZrqYK9WiClmvoUaF8gIQSNeF1Er4MNFn4SRSDARWroAIETg1iVwuHjYB1kYc1mwruwXKC9gmsJXliGxc+XiUCby9ydh1sOSdMkpMTBpaXBzsfhoc5l58Gm5yToAaZhaOUqjkDgCWNHAULCwOLaTmzswadEqggQwgHuQsHIoZCHQMMQgQGubVEcxOPFAcMDAYUA85eWARmfSRQCdcMe0zeP1AAygwLlJtPNAAL19DARdPzBOWSm1brJBi45soRAWQAAkrQIykShQ9wVhHCwCQCACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiRMDjI0Fd30/iI2UA5GSS5UDj2l6NoqgOgN4gksEBgYFf0FDqKgHnyZ9OX8HrgYHdHpcHQULXAS2qKpENRg7eAMLC7kTBaixUYFkKAzWAAnLC7FLVxLWDBLKCwaKTULgEwbLA4hJtOkSBNqITT3xEgfLpBtzE/jiuL04RGEBgwWhShRgQExHBAAh+QQJCgAAACwAAAAAIAAgAAAE7xDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfZiCqGk5dTESJeaOAlClzsJsqwiJwiqnFrb2nS9kmIcgEsjQydLiIlHehhpejaIjzh9eomSjZR+ipslWIRLAgMDOR2DOqKogTB9pCUJBagDBXR6XB0EBkIIsaRsGGMMAxoDBgYHTKJiUYEGDAzHC9EACcUGkIgFzgwZ0QsSBcXHiQvOwgDdEwfFs0sDzt4S6BK4xYjkDOzn0unFeBzOBijIm1Dgmg5YFQwsCMjp1oJ8LyIAACH5BAkKAAAALAAAAAAgACAAAATwEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GGl6NoiPOH16iZKNlH6KmyWFOggHhEEvAwwMA0N9GBsEC6amhnVcEwavDAazGwIDaH1ipaYLBUTCGgQDA8NdHz0FpqgTBwsLqAbWAAnIA4FWKdMLGdYGEgraigbT0OITBcg5QwPT4xLrROZL6AuQAPUS7bxLpoWidY0JtxLHKhwwMJBTHgPKdEQAACH5BAkKAAAALAAAAAAgACAAAATrEMhJaVKp6s2nIkqFZF2VIBWhUsJaTokqUCoBq+E71SRQeyqUToLA7VxF0JDyIQh/MVVPMt1ECZlfcjZJ9mIKoaTl1MRIl5o4CUKXOwmyrCInCKqcWtvadL2SYhyASyNDJ0uIiUd6GAULDJCRiXo1CpGXDJOUjY+Yip9DhToJA4RBLwMLCwVDfRgbBAaqqoZ1XBMHswsHtxtFaH1iqaoGNgAIxRpbFAgfPQSqpbgGBqUD1wBXeCYp1AYZ19JJOYgH1KwA4UBvQwXUBxPqVD9L3sbp2BNk2xvvFPJd+MFCN6HAAIKgNggY0KtEBAAh+QQJCgAAACwAAAAAIAAgAAAE6BDISWlSqerNpyJKhWRdlSAVoVLCWk6JKlAqAavhO9UkUHsqlE6CwO1cRdCQ8iEIfzFVTzLdRAmZX3I2SfYIDMaAFdTESJeaEDAIMxYFqrOUaNW4E4ObYcCXaiBVEgULe0NJaxxtYksjh2NLkZISgDgJhHthkpU4mW6blRiYmZOlh4JWkDqILwUGBnE6TYEbCgevr0N1gH4At7gHiRpFaLNrrq8HNgAJA70AWxQIH1+vsYMDAzZQPC9VCNkDWUhGkuE5PxJNwiUK4UfLzOlD4WvzAHaoG9nxPi5d+jYUqfAhhykOFwJWiAAAIfkECQoAAAAsAAAAACAAIAAABPAQyElpUqnqzaciSoVkXVUMFaFSwlpOCcMYlErAavhOMnNLNo8KsZsMZItJEIDIFSkLGQoQTNhIsFehRww2CQLKF0tYGKYSg+ygsZIuNqJksKgbfgIGepNo2cIUB3V1B3IvNiBYNQaDSTtfhhx0CwVPI0UJe0+bm4g5VgcGoqOcnjmjqDSdnhgEoamcsZuXO1aWQy8KAwOAuTYYGwi7w5h+Kr0SJ8MFihpNbx+4Erq7BYBuzsdiH1jCAzoSfl0rVirNbRXlBBlLX+BP0XJLAPGzTkAuAOqb0WT5AH7OcdCm5B8TgRwSRKIHQtaLCwg1RAAAOwAAAAAAAAAAAA==";

//# sourceURL=webpack://@react-jvectormap/core/data:image/gif;base64,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?`)},jquery:r=>{r.exports=__WEBPACK_EXTERNAL_MODULE_jquery__},react:r=>{r.exports=__WEBPACK_EXTERNAL_MODULE_react__}},__webpack_module_cache__={};function __webpack_require__(r){var _=__webpack_module_cache__[r];if(_!==void 0)return _.exports;var A=__webpack_module_cache__[r]={id:r,exports:{}};return __webpack_modules__[r](A,A.exports,__webpack_require__),A.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.n=r=>{var _=r&&r.__esModule?()=>r.default:()=>r;return __webpack_require__.d(_,{a:_}),_},__webpack_require__.d=(r,_)=>{for(var A in _)__webpack_require__.o(_,A)&&!__webpack_require__.o(r,A)&&Object.defineProperty(r,A,{enumerable:!0,get:_[A]})},__webpack_require__.o=(r,_)=>Object.prototype.hasOwnProperty.call(r,_),__webpack_require__.r=r=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},__webpack_require__.b=document.baseURI||self.location.href;var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})()})})(dist);var distExports=dist.exports;const name$1="world_mill",content={insets:[{width:900,top:0,height:440.7063107441331,bbox:[{y:-12671671123330014e-9,x:-20004297151525836e-9},{y:6930392025135122e-9,x:20026572394749384e-9}],left:0}],paths:{BD:{path:"M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",name:"Bangladesh"},BE:{path:"M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",name:"Belgium"},BF:{path:"M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",name:"Burkina Faso"},BG:{path:"M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",name:"Bulgaria"},BA:{path:"M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",name:"Bosnia and Herz."},BN:{path:"M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",name:"Brunei"},BO:{path:"M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",name:"Bolivia"},JP:{path:"M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",name:"Japan"},BI:{path:"M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",name:"Burundi"},BJ:{path:"M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",name:"Benin"},BT:{path:"M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",name:"Bhutan"},JM:{path:"M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",name:"Jamaica"},BW:{path:"M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",name:"Botswana"},BR:{path:"M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",name:"Brazil"},BS:{path:"M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",name:"Bahamas"},BY:{path:"M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",name:"Belarus"},BZ:{path:"M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",name:"Belize"},RU:{path:"M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",name:"Russia"},RW:{path:"M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",name:"Rwanda"},RS:{path:"M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",name:"Serbia"},TL:{path:"M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",name:"Timor-Leste"},TM:{path:"M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",name:"Turkmenistan"},TJ:{path:"M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",name:"Tajikistan"},RO:{path:"M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",name:"Romania"},GW:{path:"M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",name:"Guinea-Bissau"},GT:{path:"M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",name:"Guatemala"},GR:{path:"M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",name:"Greece"},GQ:{path:"M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",name:"Eq. Guinea"},GY:{path:"M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",name:"Guyana"},GE:{path:"M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",name:"Georgia"},GB:{path:"M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",name:"United Kingdom"},GA:{path:"M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",name:"Gabon"},GN:{path:"M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",name:"Guinea"},GM:{path:"M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",name:"Gambia"},GL:{path:"M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",name:"Greenland"},GH:{path:"M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",name:"Ghana"},OM:{path:"M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",name:"Oman"},TN:{path:"M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",name:"Tunisia"},JO:{path:"M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",name:"Jordan"},HR:{path:"M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",name:"Croatia"},HT:{path:"M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",name:"Haiti"},HU:{path:"M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",name:"Hungary"},HN:{path:"M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",name:"Honduras"},PR:{path:"M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",name:"Puerto Rico"},PS:{path:"M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",name:"Palestine"},PT:{path:"M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",name:"Portugal"},PY:{path:"M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",name:"Paraguay"},PA:{path:"M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",name:"Panama"},PG:{path:"M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",name:"Papua New Guinea"},PE:{path:"M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",name:"Peru"},PK:{path:"M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",name:"Pakistan"},PH:{path:"M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",name:"Philippines"},PL:{path:"M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",name:"Poland"},ZM:{path:"M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",name:"Zambia"},EH:{path:"M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",name:"W. Sahara"},EE:{path:"M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",name:"Estonia"},EG:{path:"M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",name:"Egypt"},ZA:{path:"M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",name:"South Africa"},EC:{path:"M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",name:"Ecuador"},IT:{path:"M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",name:"Italy"},VN:{path:"M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",name:"Vietnam"},SB:{path:"M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",name:"Solomon Is."},ET:{path:"M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",name:"Ethiopia"},SO:{path:"M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",name:"Somalia"},ZW:{path:"M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",name:"Zimbabwe"},ES:{path:"M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",name:"Spain"},ER:{path:"M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",name:"Eritrea"},ME:{path:"M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",name:"Montenegro"},MD:{path:"M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",name:"Moldova"},MG:{path:"M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",name:"Madagascar"},MA:{path:"M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",name:"Morocco"},UZ:{path:"M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",name:"Uzbekistan"},MM:{path:"M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",name:"Myanmar"},ML:{path:"M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",name:"Mali"},MN:{path:"M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",name:"Mongolia"},MK:{path:"M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",name:"Macedonia"},MW:{path:"M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",name:"Malawi"},MR:{path:"M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",name:"Mauritania"},UG:{path:"M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",name:"Uganda"},MY:{path:"M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",name:"Malaysia"},MX:{path:"M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",name:"Mexico"},IL:{path:"M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",name:"Israel"},FR:{path:"M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",name:"France"},XS:{path:"M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",name:"Somaliland"},FI:{path:"M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",name:"Finland"},FJ:{path:"M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",name:"Fiji"},FK:{path:"M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",name:"Falkland Is."},NI:{path:"M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",name:"Nicaragua"},NL:{path:"M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",name:"Netherlands"},NO:{path:"M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",name:"Norway"},NA:{path:"M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",name:"Namibia"},VU:{path:"M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",name:"Vanuatu"},NC:{path:"M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",name:"New Caledonia"},NE:{path:"M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",name:"Niger"},NG:{path:"M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",name:"Nigeria"},NZ:{path:"M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",name:"New Zealand"},NP:{path:"M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",name:"Nepal"},XK:{path:"M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",name:"Kosovo"},CI:{path:"M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",name:"Côte d'Ivoire"},CH:{path:"M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",name:"Switzerland"},CO:{path:"M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",name:"Colombia"},CN:{path:"M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",name:"China"},CM:{path:"M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",name:"Cameroon"},CL:{path:"M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",name:"Chile"},XC:{path:"M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",name:"N. Cyprus"},CA:{path:"M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",name:"Canada"},CG:{path:"M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",name:"Congo"},CF:{path:"M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",name:"Central African Rep."},CD:{path:"M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",name:"Dem. Rep. Congo"},CZ:{path:"M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",name:"Czech Rep."},CY:{path:"M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",name:"Cyprus"},CR:{path:"M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",name:"Costa Rica"},CU:{path:"M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",name:"Cuba"},SZ:{path:"M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",name:"Swaziland"},SY:{path:"M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",name:"Syria"},KG:{path:"M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",name:"Kyrgyzstan"},KE:{path:"M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",name:"Kenya"},SS:{path:"M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",name:"S. Sudan"},SR:{path:"M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",name:"Suriname"},KH:{path:"M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",name:"Cambodia"},SV:{path:"M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",name:"El Salvador"},SK:{path:"M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",name:"Slovakia"},KR:{path:"M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",name:"Korea"},SI:{path:"M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",name:"Slovenia"},KP:{path:"M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",name:"Dem. Rep. Korea"},KW:{path:"M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",name:"Kuwait"},SN:{path:"M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",name:"Senegal"},SL:{path:"M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",name:"Sierra Leone"},KZ:{path:"M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",name:"Kazakhstan"},SA:{path:"M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",name:"Saudi Arabia"},SE:{path:"M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",name:"Sweden"},SD:{path:"M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",name:"Sudan"},DO:{path:"M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",name:"Dominican Rep."},DJ:{path:"M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",name:"Djibouti"},DK:{path:"M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",name:"Denmark"},DE:{path:"M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",name:"Germany"},YE:{path:"M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",name:"Yemen"},DZ:{path:"M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",name:"Algeria"},US:{path:"M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",name:"United States"},UY:{path:"M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",name:"Uruguay"},LB:{path:"M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",name:"Lebanon"},LA:{path:"M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",name:"Lao PDR"},TW:{path:"M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",name:"Taiwan"},TT:{path:"M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",name:"Trinidad and Tobago"},TR:{path:"M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",name:"Turkey"},LK:{path:"M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",name:"Sri Lanka"},LV:{path:"M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",name:"Latvia"},LT:{path:"M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",name:"Lithuania"},LU:{path:"M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",name:"Luxembourg"},LR:{path:"M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",name:"Liberia"},LS:{path:"M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",name:"Lesotho"},TH:{path:"M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",name:"Thailand"},TF:{path:"M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",name:"Fr. S. Antarctic Lands"},TG:{path:"M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",name:"Togo"},TD:{path:"M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",name:"Chad"},LY:{path:"M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",name:"Libya"},AE:{path:"M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",name:"United Arab Emirates"},VE:{path:"M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",name:"Venezuela"},AF:{path:"M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",name:"Afghanistan"},IQ:{path:"M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",name:"Iraq"},IS:{path:"M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",name:"Iceland"},IR:{path:"M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",name:"Iran"},AM:{path:"M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",name:"Armenia"},AL:{path:"M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",name:"Albania"},AO:{path:"M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",name:"Angola"},AR:{path:"M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",name:"Argentina"},AU:{path:"M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",name:"Australia"},AT:{path:"M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",name:"Austria"},IN:{path:"M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",name:"India"},TZ:{path:"M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",name:"Tanzania"},AZ:{path:"M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",name:"Azerbaijan"},IE:{path:"M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",name:"Ireland"},ID:{path:"M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",name:"Indonesia"},UA:{path:"M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",name:"Ukraine"},QA:{path:"M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",name:"Qatar"},MZ:{path:"M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",name:"Mozambique"}},height:440.7063107441331,projection:{type:"mill",centralMeridian:11.5},width:900},worldMill={name:name$1,content};function _extends(){return _extends=Object.assign?Object.assign.bind():function(r){for(var _=1;_<arguments.length;_++){var A=arguments[_];for(var M in A)Object.prototype.hasOwnProperty.call(A,M)&&(r[M]=A[M])}return r},_extends.apply(this,arguments)}function _objectWithoutPropertiesLoose(r,_){if(r==null)return{};var A={},M=Object.keys(r),C,j;for(j=0;j<M.length;j++)C=M[j],!(_.indexOf(C)>=0)&&(A[C]=r[C]);return A}var _excluded=["cdnSuffix","cdnUrl","countryCode","style","svg"],DEFAULT_CDN_URL="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/",DEFAULT_CDN_SUFFIX="svg",OFFSET=127397,ReactCountryFlag=function r(_){var A=_.cdnSuffix,M=A===void 0?DEFAULT_CDN_SUFFIX:A,C=_.cdnUrl,j=C===void 0?DEFAULT_CDN_URL:C,R=_.countryCode,D=_.style,O=_.svg,B=O===void 0?!1:O,N=_objectWithoutPropertiesLoose(_,_excluded);if(typeof R!="string")return null;if(B){var H=""+j+R.toLowerCase()+"."+M;return reactExports.createElement("img",Object.assign({},N,{src:H,style:_extends({display:"inline-block",width:"1em",height:"1em",verticalAlign:"middle"},D)}))}var $=R.toUpperCase().replace(/./g,function(Q){return String.fromCodePoint(Q.charCodeAt(0)+OFFSET)});return reactExports.createElement("span",Object.assign({role:"img"},N,{style:_extends({display:"inline-block",fontSize:"1em",lineHeight:"1em",verticalAlign:"middle"},D)}),$)};const visitedPlaces=["CN","SG","TH","MY","HK","MO","KR","JP","QA","GB","FR","NL","IT","VA","IS","AE","DE","AT","PT","CH","ID","AU","TR","VN"],visitedCountries=["CN","KR","JP","MY","GB","FR","DE","ID","NL","TH","IT","IS","AT","PT","CH","AU","AE","QA","TR","TW","VN"],extraMarkers=[{latLng:[41.9,12.45],name:"Vatican City"},{latLng:[1.3,103.8],name:"Singapore"},{latLng:[22.2,113.54],name:"Macau"},{latLng:[22.32,114.17],name:"Hong Kong"}],styles$4="",{Title:Title$6,Paragraph:Paragraph$1}=Typography,Map=()=>{const{useToken:r}=theme,{token:_}=r();return jsxRuntimeExports.jsxs("div",{className:"map-container",id:"map",children:[jsxRuntimeExports.jsx(Title$6,{level:3,children:"My Travel Map"}),jsxRuntimeExports.jsx("div",{className:"map",children:jsxRuntimeExports.jsx(distExports.VectorMap,{map:worldMill,backgroundColor:_.colorInfoBg,zoomOnScroll:!0,zoomAnimate:!0,zoomMax:7,zoomMin:1,focusOn:{scale:2,x:0,y:0,lat:1.35,lng:103.82},style:{width:"100%",height:"55vh"},regionStyle:{initial:{fill:_.colorInfoBgHover,stroke:"none"},hover:{fill:_.colorInfoHover,cursor:"pointer"},selected:{fill:"#09B1EC"},selectedHover:{fill:"#65C2F5"}},selectedRegions:visitedCountries,markers:extraMarkers,markerStyle:{initial:{fill:"#09B1EC",stroke:"#383f47"},hover:{fill:"#65C2F5",cursor:"pointer"}}},_.colorBgContainer)}),jsxRuntimeExports.jsxs("div",{className:"flag-container",children:[jsxRuntimeExports.jsx(Paragraph$1,{children:jsxRuntimeExports.jsx(m,{sequence:["Here are the places I have visited and I'm excited to explore more!",3e3,"Life is short, and the world is wide.",1500,"Once a year, go someplace you've never been before.",2e3],speed:40,repeat:1/0})}),jsxRuntimeExports.jsx(Row,{gutter:4,children:visitedPlaces.map(A=>jsxRuntimeExports.jsx(Col,{xs:4,sm:3,md:2,lg:1,children:jsxRuntimeExports.jsx("div",{className:"flag",children:jsxRuntimeExports.jsx(ReactCountryFlag,{countryCode:A,svg:!0,style:{width:"2em",height:"2em"}})})},A))})]})]})},styles$3="",{Title:Title$5,Paragraph,Text}=Typography,timelineItems=[{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Korea_University_Global_Symbol.svg/1200px-Korea_University_Global_Symbol.svg.png",alt:"KU"})}),children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"Korea University, Seoul (International Summer Campus)"}),jsxRuntimeExports.jsx(Paragraph,{children:"Jun 2019 - Aug 2019"})]}),color:"red"},{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Strathclyde_Coat_of_Arms.svg/1200px-University_of_Strathclyde_Coat_of_Arms.svg.png",alt:"USG"})}),children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"University of Strathclyde, Glasgow (Overseas Exchange)"}),jsxRuntimeExports.jsx(Paragraph,{children:"Jan 2020 - May 2020"})]}),color:"#005eb8"},{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://media.licdn.com/dms/image/v2/D560BAQGrSi2UOCdL5g/company-logo_200_200/company-logo_200_200/0/1719952472030/autodesk_logo?e=2147483647&v=beta&t=s_xK8MO7Uwf3KgN6lDll8-3vxPQQn3pzpt_RpGAhHHE",alt:"ADSK"})}),children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"Autodesk Asia Pte Ltd"}),jsxRuntimeExports.jsx(Paragraph,{children:jsxRuntimeExports.jsx(Text,{strong:!0,children:"Software Engineer Intern (Identity Access Management)"})}),jsxRuntimeExports.jsx(Paragraph,{children:jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsx("li",{children:"Collaborated on developing and optimizing identity processes for Autodesk's web products."}),jsxRuntimeExports.jsx("li",{children:"Migrated admin SSO app (.NET) with AWS secret manager to enhance codebase security"}),jsxRuntimeExports.jsx("li",{children:"Automated and optimized frontend CI/CD process for an account management website (React), streamlining UI visualization in staging through Jenkins and Docker."})]})}),jsxRuntimeExports.jsx(Paragraph,{children:"Jan 2021 - Dec 2021"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"ASP.NET"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"C#"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"React"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"Jenkins"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"Docker"}),jsxRuntimeExports.jsx(Badge,{color:"grey",count:"LookerML"})]}),color:"grey"},{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/1200px-Nanyang_Technological_University_coat_of_arms_vector.svg.png",alt:"NTU"})}),children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"Nanyang Technological University, Singapore"}),jsxRuntimeExports.jsxs(Paragraph,{children:[jsxRuntimeExports.jsx(Text,{strong:!0,children:"Bachelor of Information Engineering & Media"}),jsxRuntimeExports.jsx("br",{}),jsxRuntimeExports.jsx(Text,{children:"Honours (Highest Distinction) CGPA: 4.66 / 5.00"})]}),jsxRuntimeExports.jsx(Paragraph,{}),jsxRuntimeExports.jsx(Paragraph,{children:"Aug 2018 - May 2022"}),jsxRuntimeExports.jsx(Badge,{color:"darkorange",count:"NTU S&E Scholarship"}),jsxRuntimeExports.jsx(Badge,{color:"darkorange",count:"MOE SM2 Scholarship"})]})},{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://www.leceipt.com/wp-content/uploads/2021/11/lazada-logo.jpg",alt:"LZD"})}),children:jsxRuntimeExports.jsxs("div",{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"Lazada South East Asia Pte Ltd"}),jsxRuntimeExports.jsx(Paragraph,{children:jsxRuntimeExports.jsx(Text,{strong:!0,children:"Frontend Engineer (RedMart)"})}),jsxRuntimeExports.jsx(Paragraph,{children:jsxRuntimeExports.jsxs("ul",{children:[jsxRuntimeExports.jsxs("li",{children:["Contributed to cross-platform front-end development (React) for Lazada's ",jsxRuntimeExports.jsx(Link,{to:"https://redmart.lazada.sg/",children:"RedMart"}),", delivering major projects like RedMart+ Membership, B2B (Corporate Pantry), and Group Buy."]}),jsxRuntimeExports.jsx("li",{children:"Designed and implemented a multi-functional popup component with cross-platform support, enabling targeted user alerts, promotions, and voucher distribution across RedMart."}),jsxRuntimeExports.jsxs("li",{children:["Integrated"," ",jsxRuntimeExports.jsx(Link,{to:"https://wpk.ucweb.com/product/web",children:"iTrace"})," for front-end monitoring, enabling real-time performance metrics, custom error reporting, and automated alerts to enhance issue detection and resolution."]}),jsxRuntimeExports.jsx("li",{children:"Collaborated in constructing an internal business data platform using a low-code approach, facilitating A/B experiments and user behavior analysis, and providing customizable dashboards for departmental operations."})]})}),jsxRuntimeExports.jsx(Paragraph,{children:"Jul 2022 - Sep 2024"}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"React"}),jsxRuntimeExports.jsx(Link,{to:"https://github.com/alibaba/ice",children:jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"IceJS",style:{textDecoration:"underline",color:"white"}})}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"TS/JS"}),jsxRuntimeExports.jsx(Link,{to:"https://github.com/alibaba/rax",children:jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"Rax",style:{textDecoration:"underline",color:"white"}})}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"CSS/SCSS"})]}),color:"#ee4054"},{dot:jsxRuntimeExports.jsx(Avatar,{icon:jsxRuntimeExports.jsx("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I6DyRWMyQTiHQmn4GH5ATOFQlBNE5QPKpQ&s",alt:"SEA"})}),children:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$5,{level:5,children:"Sea Limited"}),jsxRuntimeExports.jsx(Paragraph,{children:jsxRuntimeExports.jsx(Text,{strong:!0,children:"Frontend Engineer"})}),jsxRuntimeExports.jsx(Paragraph,{children:"Sep 2024 - current"}),jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"React"}),jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"TS/JS"}),jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"Rush"}),jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"Antd"}),jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"React Native"}),jsxRuntimeExports.jsx(Link,{to:"https://module-federation.io/",children:jsxRuntimeExports.jsx(Badge,{color:"#468ef7",count:"Module Federation",style:{textDecoration:"underline",color:"white"}})})]}),color:"#468ef7"}],{Title:Title$4}=Typography;function Experience(){return jsxRuntimeExports.jsxs("div",{className:"experience-container",id:"experience",children:[jsxRuntimeExports.jsx(Title$4,{level:3,className:"header",children:"My Experience"}),jsxRuntimeExports.jsx(Timeline,{className:"timeline-container",mode:"left",items:timelineItems,style:{maxWidth:800},reverse:!0})]})}const styles$2="",DownloadPopup=({visible:r,onClose:_})=>{const A=()=>{const D="https://raw.githubusercontent.com/ycrao573/ycrao573.github.io/master/src/assets/Rao_Yuchen_Resume.pdf";window.open(D,"_blank")},[M]=Form.useForm(),[C,j]=reactExports.useState(!1),R=D=>{j(!0),setTimeout(()=>{j(!1),A(),_()},2e3)};return jsxRuntimeExports.jsxs(Modal,{title:"Please enter your email 📧 for resume download access 🔒*",open:r,onCancel:_,footer:null,children:[jsxRuntimeExports.jsxs(Form,{form:M,onFinish:R,children:[jsxRuntimeExports.jsx(Form.Item,{name:"email",rules:[{required:!0,type:"email",message:"Come on, be serious please!"}],children:jsxRuntimeExports.jsx(Input,{placeholder:"Email"})}),jsxRuntimeExports.jsx(Form.Item,{style:{marginBottom:12},children:jsxRuntimeExports.jsx(Button,{type:"primary",className:"gradient-btn",htmlType:"submit",loading:C,children:"Download"})})]}),jsxRuntimeExports.jsx("p",{style:{fontSize:11},children:"* To ensure I'm connecting with genuine visitors, kindly provide your email address below for verification. Your information will be kept private and never shared. Thank you for your understanding and support!"})]})},name="Rao Yuchen",position="Frontend Engineer in Sea, Singapore",introduction={title:"Hey 👋!",message:"I'm Yuchen 🍊, a passionate frontend software engineer with 3 year of experience. I've been in Singapore for over 7 enriching years. I'm a programmer 💻, a traveller ✈️, a foodie 🍝, and a musician 🎹. Thanks for dropping by! 🧡"},aboutMeInfo={name,position,introduction},{Meta:Meta$1}=Card,{Title:Title$3}=Typography;function AboutMe(){const{name:r,position:_,introduction:A}=aboutMeInfo,{title:M,message:C}=A,[j,R]=reactExports.useState(!1),D=()=>{R(!0)},O=()=>{R(!1)};return jsxRuntimeExports.jsxs("div",{className:"aboutme-container",id:"aboutme",children:[jsxRuntimeExports.jsx(Title$3,{level:3,className:"header",children:"About Me"}),jsxRuntimeExports.jsx("div",{className:"content",children:jsxRuntimeExports.jsxs(Row,{gutter:16,style:{maxWidth:980},children:[jsxRuntimeExports.jsx(Col,{xs:0,sm:0,md:6,lg:6,xl:6,children:jsxRuntimeExports.jsx(Card,{hoverable:!0,style:{height:"auto"},cover:jsxRuntimeExports.jsx(Image,{width:"100%",src:new URL("/assets/profile-cdcb853a.jpg",self.location).href,fallback:"data:image/png;base64,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"}),children:jsxRuntimeExports.jsx(Meta$1,{title:r,description:_})})}),jsxRuntimeExports.jsx(Col,{xs:24,sm:24,md:18,lg:18,xl:18,children:jsxRuntimeExports.jsx(Card,{type:"inner",hoverable:!0,style:{height:"100%",fontSize:15,lineHeight:1.7},title:jsxRuntimeExports.jsx(Title$3,{level:4,style:{margin:0},children:M}),children:jsxRuntimeExports.jsxs(Space,{direction:"vertical",children:[C,jsxRuntimeExports.jsx(Button,{className:"gradient-btn",type:"primary",onClick:D,icon:jsxRuntimeExports.jsx(DownloadOutlined,{}),style:{float:"right"},children:"Download Resume"})]})})})]})}),jsxRuntimeExports.jsx(DownloadPopup,{visible:j,onClose:O})]})}const styles$1="",skillsData=[{icon:"react",title:"React",proficiency:"Advanced"},{icon:"html5",title:"HTML5",proficiency:"Advanced"},{icon:"javascript",title:"JavaScript",proficiency:"Advanced"},{icon:"typescript",title:"TypeScript",proficiency:"Advanced"},{icon:"python",title:"Python",proficiency:"Advanced"},{icon:"css3",title:"CSS3",proficiency:"Advanced"},{icon:"nodejs",title:"NodeJS",proficiency:"Advanced"},{icon:"webpack",title:"Webpack",proficiency:"Intermediate"},{icon:"amazonwebservices",title:"AWS",proficiency:"AWS Certified Cloud Practitioner",jumpUrl:"https://www.credly.com/badges/00a02495-e272-4c59-ae66-fbf6ea79d788?source=linked_in_profile"},{icon:"java",title:"Java",proficiency:"Intermediate"},{icon:"cplusplus",title:"C++",proficiency:"Intermediate"},{icon:"c",title:"C",proficiency:"Intermediate"},{icon:"mysql",title:"MySQL",proficiency:"Intermediate"},{icon:"flutter",title:"Flutter",proficiency:"Intermediate"},{icon:"go",title:"Go",proficiency:"Beginner"},{icon:"docker",title:"Docker",proficiency:"Beginner"},{icon:"csharp",title:"C#",proficiency:"Beginner"},{icon:"php",title:"PHP",proficiency:"Beginner"},{icon:"photoshop",title:"PhotoShop",proficiency:"Beginner"},{icon:"premierepro",title:"PremierePro",proficiency:"Beginner"}],{Title:Title$2}=Typography,Skills=()=>jsxRuntimeExports.jsxs("div",{className:"skills-container",id:"skills",children:[jsxRuntimeExports.jsx(Title$2,{level:3,className:"header",children:"My Skills"}),jsxRuntimeExports.jsx(Carousel,{className:"skills-carousel",dots:!1,infinite:!0,speed:2500,autoplay:!0,autoplaySpeed:2500,slidesToShow:8,pauseOnHover:!0,children:skillsData.map((r,_)=>jsxRuntimeExports.jsxs("div",{className:"skill-item",children:[jsxRuntimeExports.jsx(Tooltip,{placement:"top",title:r.proficiency,children:jsxRuntimeExports.jsx("a",{href:r.jumpUrl,style:{cursor:r.jumpUrl?"pointer":"default"},children:jsxRuntimeExports.jsx("i",{className:`devicon-${r.icon}-plain colored`,style:{fontSize:"250%"}})})}),jsxRuntimeExports.jsx(Title$2,{className:"skill-name",level:5,children:r.title})]},_))})]}),{Title:Title$1}=Typography,{Meta}=Card,ProjectCard=r=>{const[_,A]=reactExports.useState(!1),{imgUrl:M,githubLink:C,title:j,description:R,extraStyles:D,prodLink:O,badges:B}=r,N=[];return C&&N.push(jsxRuntimeExports.jsx(GithubOutlined,{onClick:()=>window.open(C,"_blank")},"github")),O&&N.push(jsxRuntimeExports.jsx(EyeOutlined,{onClick:()=>window.open(O,"_blank")},"eye")),N.push(_?jsxRuntimeExports.jsx(VerticalAlignMiddleOutlined,{onClick:()=>A(!1)},"more"):jsxRuntimeExports.jsx(QuestionCircleOutlined,{onClick:()=>A(!0)},"more")),jsxRuntimeExports.jsx(Card,{style:{width:300,margin:12},cover:jsxRuntimeExports.jsx(Image,{src:M,style:{width:300,height:170,objectFit:"scale-down",...D}}),actions:N,children:jsxRuntimeExports.jsx(Meta,{title:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Title$1,{level:5,children:j}),B]}),description:_?R:""})})},styles="",{Title}=Typography,Projects=()=>jsxRuntimeExports.jsxs("div",{className:"projects",id:"projects",children:[jsxRuntimeExports.jsx(Title,{level:3,className:"header",children:"Projects"}),jsxRuntimeExports.jsxs("div",{className:"projects-list",children:[jsxRuntimeExports.jsx(ProjectCard,{imgUrl:"https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png_.webp",extraStyles:{padding:"15%"},prodLink:"https://redmart.lazada.sg/",title:"RedMart by Lazada",badges:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"React"}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"TypeScript"}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"CSS/SCSS"}),jsxRuntimeExports.jsx(Badge,{color:"#ee4054",count:"Rax"})]}),description:""}),jsxRuntimeExports.jsx(ProjectCard,{imgUrl:"https://github.com/ycrao573/ar-tour-guide-fyp/raw/master/assets/images/banner.png",githubLink:"https://github.com/ycrao573/ar-tour-guide-fyp",title:"Final Year Project: Travelee",description:"This final year project involves developing a mobile app using Flutter and Firebase, employing advanced technologies like Google's geolocation, image recognition, and Wikitude AR SDK. It aims to improve the experience of travelers when navigating local tourist attractions, providing them with seamless and intuitive guidance",badges:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Badge,{color:"aqua",count:"Flutter"}),jsxRuntimeExports.jsx(Badge,{color:"aqua",count:"Android"}),jsxRuntimeExports.jsx(Badge,{color:"aqua",count:"Firebase"}),jsxRuntimeExports.jsx(Badge,{color:"aqua",count:"JavaScript"})]})}),jsxRuntimeExports.jsx(ProjectCard,{imgUrl:"https://github.com/NTU-AY2020-DIP-Group-8/gogogoals/raw/master/resources/Poster.jpeg",githubLink:"https://github.com/NTU-AY2020-DIP-Group-8/gogogoals",title:"Year 3 DIP: GoGoGoals",description:"A group project for building an mobile app for tracking goals and manage personal productivity. It allow users to easily manage and view goals by category, with intelligent recommendation of to-dos.",badges:jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment,{children:[jsxRuntimeExports.jsx(Badge,{color:"orange",count:"Flutter"}),jsxRuntimeExports.jsx(Badge,{color:"orange",count:"Node.js"}),jsxRuntimeExports.jsx(Badge,{color:"orange",count:"Firebase"})]})})]})]}),ThemeContext=reactExports.createContext(null),HomePage=()=>{const[r,_]=reactExports.useState(!0);return jsxRuntimeExports.jsx(ConfigProvider,{theme:{...r?{algorithm:theme.darkAlgorithm}:{},token:{colorPrimary:r?"#3A9D7A":"#5BB98C",borderRadius:6}},children:jsxRuntimeExports.jsx(ThemeContext.Provider,{value:r?"dark":"light",children:jsxRuntimeExports.jsxs(Layout,{children:[jsxRuntimeExports.jsx(Header,{onChange:()=>_(!r)}),jsxRuntimeExports.jsx(Hero,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(AboutMe,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(Skills,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(Experience,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(Projects,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(Map,{}),jsxRuntimeExports.jsx(Divider,{}),jsxRuntimeExports.jsx(Footer,{}),jsxRuntimeExports.jsx(FloatButton,{shape:"circle",type:"primary",style:{right:30},onClick:()=>{var A;return(A=document.getElementById("hero"))==null?void 0:A.scrollIntoView({behavior:"smooth"})},icon:jsxRuntimeExports.jsx(VerticalAlignTopOutlined,{})})]})})})};function App(){return jsxRuntimeExports.jsx(BrowserRouter,{children:jsxRuntimeExports.jsx(HomePage,{})})}const index="";client.createRoot(document.getElementById("root")).render(jsxRuntimeExports.jsx(React.StrictMode,{children:jsxRuntimeExports.jsx(App,{})}));reportWebVitals(console.log);
