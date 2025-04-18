(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var Wg={exports:{}},mc={},Xg={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ha=Symbol.for("react.element"),k_=Symbol.for("react.portal"),z_=Symbol.for("react.fragment"),B_=Symbol.for("react.strict_mode"),H_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),G_=Symbol.for("react.context"),j_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),X_=Symbol.for("react.memo"),$_=Symbol.for("react.lazy"),Uh=Symbol.iterator;function q_(t){return t===null||typeof t!="object"?null:(t=Uh&&t[Uh]||t["@@iterator"],typeof t=="function"?t:null)}var $g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qg=Object.assign,Yg={};function so(t,e,n){this.props=t,this.context=e,this.refs=Yg,this.updater=n||$g}so.prototype.isReactComponent={};so.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};so.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Kg(){}Kg.prototype=so.prototype;function mf(t,e,n){this.props=t,this.context=e,this.refs=Yg,this.updater=n||$g}var gf=mf.prototype=new Kg;gf.constructor=mf;qg(gf,so.prototype);gf.isPureReactComponent=!0;var Ih=Array.isArray,Zg=Object.prototype.hasOwnProperty,xf={current:null},Jg={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Zg.call(e,i)&&!Jg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ha,type:t,key:s,ref:o,props:r,_owner:xf.current}}function Y_(t,e){return{$$typeof:ha,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function vf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ha}function K_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Oh=/\/+/g;function qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K_(""+t.key):e.toString(36)}function gl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ha:case k_:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+qc(o,0):i,Ih(r)?(n="",t!=null&&(n=t.replace(Oh,"$&/")+"/"),gl(r,e,n,"",function(c){return c})):r!=null&&(vf(r)&&(r=Y_(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Oh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ih(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+qc(s,a);o+=gl(s,e,n,l,r)}else if(l=q_(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+qc(s,a++),o+=gl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ra(t,e,n){if(t==null)return t;var i=[],r=0;return gl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var on={current:null},xl={transition:null},J_={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:xl,ReactCurrentOwner:xf};function e0(){throw Error("act(...) is not supported in production builds of React.")}qe.Children={map:Ra,forEach:function(t,e,n){Ra(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ra(t,function(){e++}),e},toArray:function(t){return Ra(t,function(e){return e})||[]},only:function(t){if(!vf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};qe.Component=so;qe.Fragment=z_;qe.Profiler=H_;qe.PureComponent=mf;qe.StrictMode=B_;qe.Suspense=W_;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J_;qe.act=e0;qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=qg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Zg.call(e,l)&&!Jg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ha,type:t.type,key:r,ref:s,props:i,_owner:o}};qe.createContext=function(t){return t={$$typeof:G_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V_,_context:t},t.Consumer=t};qe.createElement=Qg;qe.createFactory=function(t){var e=Qg.bind(null,t);return e.type=t,e};qe.createRef=function(){return{current:null}};qe.forwardRef=function(t){return{$$typeof:j_,render:t}};qe.isValidElement=vf;qe.lazy=function(t){return{$$typeof:$_,_payload:{_status:-1,_result:t},_init:Z_}};qe.memo=function(t,e){return{$$typeof:X_,type:t,compare:e===void 0?null:e}};qe.startTransition=function(t){var e=xl.transition;xl.transition={};try{t()}finally{xl.transition=e}};qe.unstable_act=e0;qe.useCallback=function(t,e){return on.current.useCallback(t,e)};qe.useContext=function(t){return on.current.useContext(t)};qe.useDebugValue=function(){};qe.useDeferredValue=function(t){return on.current.useDeferredValue(t)};qe.useEffect=function(t,e){return on.current.useEffect(t,e)};qe.useId=function(){return on.current.useId()};qe.useImperativeHandle=function(t,e,n){return on.current.useImperativeHandle(t,e,n)};qe.useInsertionEffect=function(t,e){return on.current.useInsertionEffect(t,e)};qe.useLayoutEffect=function(t,e){return on.current.useLayoutEffect(t,e)};qe.useMemo=function(t,e){return on.current.useMemo(t,e)};qe.useReducer=function(t,e,n){return on.current.useReducer(t,e,n)};qe.useRef=function(t){return on.current.useRef(t)};qe.useState=function(t){return on.current.useState(t)};qe.useSyncExternalStore=function(t,e,n){return on.current.useSyncExternalStore(t,e,n)};qe.useTransition=function(){return on.current.useTransition()};qe.version="18.3.1";Xg.exports=qe;var F=Xg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=F,ey=Symbol.for("react.element"),ty=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,iy=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ry={key:!0,ref:!0,__self:!0,__source:!0};function t0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)ny.call(e,i)&&!ry.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ey,type:t,key:s,ref:o,props:r,_owner:iy.current}}mc.Fragment=ty;mc.jsx=t0;mc.jsxs=t0;Wg.exports=mc;var x=Wg.exports,n0={exports:{}},An={},i0={exports:{}},r0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var I=U.length;U.push(H);e:for(;0<I;){var K=I-1>>>1,J=U[K];if(0<r(J,H))U[K]=H,U[I]=J,I=K;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],I=U.pop();if(I!==H){U[0]=I;e:for(var K=0,J=U.length,ge=J>>>1;K<ge;){var B=2*(K+1)-1,te=U[B],de=B+1,Ee=U[de];if(0>r(te,I))de<J&&0>r(Ee,te)?(U[K]=Ee,U[de]=I,K=de):(U[K]=te,U[B]=I,K=B);else if(de<J&&0>r(Ee,I))U[K]=Ee,U[de]=I,K=de;else break e}}return H}function r(U,H){var I=U.sortIndex-H.sortIndex;return I!==0?I:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,m=!1,_=!1,y=!1,p=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var H=n(c);H!==null;){if(H.callback===null)i(c);else if(H.startTime<=U)i(c),H.sortIndex=H.expirationTime,e(l,H);else break;H=n(c)}}function E(U){if(y=!1,g(U),!_)if(n(l)!==null)_=!0,G(R);else{var H=n(c);H!==null&&Q(E,H.startTime-U)}}function R(U,H){_=!1,y&&(y=!1,d(D),D=-1),m=!0;var I=h;try{for(g(H),f=n(l);f!==null&&(!(f.expirationTime>H)||U&&!P());){var K=f.callback;if(typeof K=="function"){f.callback=null,h=f.priorityLevel;var J=K(f.expirationTime<=H);H=t.unstable_now(),typeof J=="function"?f.callback=J:f===n(l)&&i(l),g(H)}else i(l);f=n(l)}if(f!==null)var ge=!0;else{var B=n(c);B!==null&&Q(E,B.startTime-H),ge=!1}return ge}finally{f=null,h=I,m=!1}}var A=!1,w=null,D=-1,$=5,S=-1;function P(){return!(t.unstable_now()-S<$)}function Z(){if(w!==null){var U=t.unstable_now();S=U;var H=!0;try{H=w(!0,U)}finally{H?ee():(A=!1,w=null)}}else A=!1}var ee;if(typeof v=="function")ee=function(){v(Z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,q=L.port2;L.port1.onmessage=Z,ee=function(){q.postMessage(null)}}else ee=function(){p(Z,0)};function G(U){w=U,A||(A=!0,ee())}function Q(U,H){D=p(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,G(R))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(h){case 1:case 2:case 3:var H=3;break;default:H=h}var I=h;h=H;try{return U()}finally{h=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var I=h;h=U;try{return H()}finally{h=I}},t.unstable_scheduleCallback=function(U,H,I){var K=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?K+I:K):I=K,U){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=I+J,U={id:u++,callback:H,priorityLevel:U,startTime:I,expirationTime:J,sortIndex:-1},I>K?(U.sortIndex=I,e(c,U),n(l)===null&&U===n(c)&&(y?(d(D),D=-1):y=!0,Q(E,I-K))):(U.sortIndex=J,e(l,U),_||m||(_=!0,G(R))),U},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(U){var H=h;return function(){var I=h;h=H;try{return U.apply(this,arguments)}finally{h=I}}}})(r0);i0.exports=r0;var sy=i0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=F,Tn=sy;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s0=new Set,Wo={};function Qr(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Wo[t]=e,t=0;t<e.length;t++)s0.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nd=Object.prototype.hasOwnProperty,ay=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fh={},kh={};function ly(t){return nd.call(kh,t)?!0:nd.call(Fh,t)?!1:ay.test(t)?kh[t]=!0:(Fh[t]=!0,!1)}function cy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function uy(t,e,n,i){if(e===null||typeof e>"u"||cy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ht[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ht[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ht[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ht[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ht[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ht[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ht[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ht[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ht[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function yf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,yf);Ht[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,yf);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,yf);Ht[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ht[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(uy(e,n,r,i)&&(n=null),i||r===null?ly(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ii=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ca=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Ef=Symbol.for("react.strict_mode"),id=Symbol.for("react.profiler"),o0=Symbol.for("react.provider"),a0=Symbol.for("react.context"),Mf=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),sd=Symbol.for("react.suspense_list"),wf=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),l0=Symbol.for("react.offscreen"),zh=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Yc;function No(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var Kc=!1;function Zc(t,e){if(!t||Kc)return"";Kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?No(t):""}function dy(t){switch(t.tag){case 5:return No(t.type);case 16:return No("Lazy");case 13:return No("Suspense");case 19:return No("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function od(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case Ss:return"Portal";case id:return"Profiler";case Ef:return"StrictMode";case rd:return"Suspense";case sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case a0:return(t.displayName||"Context")+".Consumer";case o0:return(t._context.displayName||"Context")+".Provider";case Mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wf:return e=t.displayName||null,e!==null?e:od(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return od(t(e))}catch{}}return null}function fy(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return od(e);case 8:return e===Ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function c0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hy(t){var e=c0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pa(t){t._valueTracker||(t._valueTracker=hy(t))}function u0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=c0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ad(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function d0(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function ld(t,e){d0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?cd(t,e.type,n):e.hasOwnProperty("defaultValue")&&cd(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function cd(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Lo=Array.isArray;function Is(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ud(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(Lo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function f0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Na,p0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Na=Na||document.createElement("div"),Na.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Na.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},py=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){py.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function m0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function g0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=m0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var my=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fd(t,e){if(e){if(my[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function hd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pd=null;function Tf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var md=null,Os=null,Fs=null;function jh(t){if(t=ga(t)){if(typeof md!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=yc(e),md(t.stateNode,t.type,e))}}function x0(t){Os?Fs?Fs.push(t):Fs=[t]:Os=t}function v0(){if(Os){var t=Os,e=Fs;if(Fs=Os=null,jh(t),e)for(t=0;t<e.length;t++)jh(e[t])}}function _0(t,e){return t(e)}function y0(){}var Jc=!1;function S0(t,e,n){if(Jc)return t(e,n);Jc=!0;try{return _0(t,e,n)}finally{Jc=!1,(Os!==null||Fs!==null)&&(y0(),v0())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=yc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var gd=!1;if(Ri)try{var go={};Object.defineProperty(go,"passive",{get:function(){gd=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{gd=!1}function gy(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Fo=!1,Ol=null,Fl=!1,xd=null,xy={onError:function(t){Fo=!0,Ol=t}};function vy(t,e,n,i,r,s,o,a,l){Fo=!1,Ol=null,gy.apply(xy,arguments)}function _y(t,e,n,i,r,s,o,a,l){if(vy.apply(this,arguments),Fo){if(Fo){var c=Ol;Fo=!1,Ol=null}else throw Error(oe(198));Fl||(Fl=!0,xd=c)}}function es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Wh(t){if(es(t)!==t)throw Error(oe(188))}function yy(t){var e=t.alternate;if(!e){if(e=es(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Wh(r),t;if(s===i)return Wh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function M0(t){return t=yy(t),t!==null?w0(t):null}function w0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=w0(t);if(e!==null)return e;t=t.sibling}return null}var T0=Tn.unstable_scheduleCallback,Xh=Tn.unstable_cancelCallback,Sy=Tn.unstable_shouldYield,Ey=Tn.unstable_requestPaint,Et=Tn.unstable_now,My=Tn.unstable_getCurrentPriorityLevel,Af=Tn.unstable_ImmediatePriority,A0=Tn.unstable_UserBlockingPriority,kl=Tn.unstable_NormalPriority,wy=Tn.unstable_LowPriority,b0=Tn.unstable_IdlePriority,gc=null,si=null;function Ty(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(gc,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:Ry,Ay=Math.log,by=Math.LN2;function Ry(t){return t>>>=0,t===0?32:31-(Ay(t)/by|0)|0}var La=64,Da=4194304;function Do(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=n&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function Cy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Py(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Cy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function R0(){var t=La;return La<<=1,!(La&4194240)&&(La=64),t}function Qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function Ny(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function bf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function C0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P0,Rf,N0,L0,D0,_d=!1,Ua=[],Zi=null,Ji=null,Qi=null,qo=new Map,Yo=new Map,Xi=[],Ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $h(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function xo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Rf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dy(t,e,n,i,r){switch(e){case"focusin":return Zi=xo(Zi,t,e,n,i,r),!0;case"dragenter":return Ji=xo(Ji,t,e,n,i,r),!0;case"mouseover":return Qi=xo(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qo.set(s,xo(qo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,xo(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function U0(t){var e=Ur(t.target);if(e!==null){var n=es(e);if(n!==null){if(e=n.tag,e===13){if(e=E0(n),e!==null){t.blockedOn=e,D0(t.priority,function(){N0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);pd=i,n.target.dispatchEvent(i),pd=null}else return e=ga(n),e!==null&&Rf(e),t.blockedOn=n,!1;e.shift()}return!0}function qh(t,e,n){vl(t)&&n.delete(e)}function Uy(){_d=!1,Zi!==null&&vl(Zi)&&(Zi=null),Ji!==null&&vl(Ji)&&(Ji=null),Qi!==null&&vl(Qi)&&(Qi=null),qo.forEach(qh),Yo.forEach(qh)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,_d||(_d=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,Uy)))}function Ko(t){function e(r){return vo(r,t)}if(0<Ua.length){vo(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&vo(Zi,t),Ji!==null&&vo(Ji,t),Qi!==null&&vo(Qi,t),qo.forEach(e),Yo.forEach(e),n=0;n<Xi.length;n++)i=Xi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Xi.length&&(n=Xi[0],n.blockedOn===null);)U0(n),n.blockedOn===null&&Xi.shift()}var ks=Ii.ReactCurrentBatchConfig,Bl=!0;function Iy(t,e,n,i){var r=nt,s=ks.transition;ks.transition=null;try{nt=1,Cf(t,e,n,i)}finally{nt=r,ks.transition=s}}function Oy(t,e,n,i){var r=nt,s=ks.transition;ks.transition=null;try{nt=4,Cf(t,e,n,i)}finally{nt=r,ks.transition=s}}function Cf(t,e,n,i){if(Bl){var r=yd(t,e,n,i);if(r===null)cu(t,e,i,Hl,n),$h(t,i);else if(Dy(r,t,e,n,i))i.stopPropagation();else if($h(t,i),e&4&&-1<Ly.indexOf(t)){for(;r!==null;){var s=ga(r);if(s!==null&&P0(s),s=yd(t,e,n,i),s===null&&cu(t,e,i,Hl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else cu(t,e,i,null,n)}}var Hl=null;function yd(t,e,n,i){if(Hl=null,t=Tf(i),t=Ur(t),t!==null)if(e=es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hl=t,null}function I0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(My()){case Af:return 1;case A0:return 4;case kl:case wy:return 16;case b0:return 536870912;default:return 16}default:return 16}}var qi=null,Pf=null,_l=null;function O0(){if(_l)return _l;var t,e=Pf,n=e.length,i,r="value"in qi?qi.value:qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _l=r.slice(t,1<i?1-i:void 0)}function yl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ia(){return!0}function Yh(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ia:Yh,this.isPropagationStopped=Yh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ia)},persist:function(){},isPersistent:Ia}),e}var oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Nf=bn(oo),ma=gt({},oo,{view:0,detail:0}),Fy=bn(ma),eu,tu,_o,xc=gt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(eu=t.screenX-_o.screenX,tu=t.screenY-_o.screenY):tu=eu=0,_o=t),eu)},movementY:function(t){return"movementY"in t?t.movementY:tu}}),Kh=bn(xc),ky=gt({},xc,{dataTransfer:0}),zy=bn(ky),By=gt({},ma,{relatedTarget:0}),nu=bn(By),Hy=gt({},oo,{animationName:0,elapsedTime:0,pseudoElement:0}),Vy=bn(Hy),Gy=gt({},oo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jy=bn(Gy),Wy=gt({},oo,{data:0}),Zh=bn(Wy),Xy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$y={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=qy[t])?!!e[t]:!1}function Lf(){return Yy}var Ky=gt({},ma,{key:function(t){if(t.key){var e=Xy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$y[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?yl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zy=bn(Ky),Jy=gt({},xc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=bn(Jy),Qy=gt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),eS=bn(Qy),tS=gt({},oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=bn(tS),iS=gt({},xc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rS=bn(iS),sS=[9,13,27,32],Df=Ri&&"CompositionEvent"in window,ko=null;Ri&&"documentMode"in document&&(ko=document.documentMode);var oS=Ri&&"TextEvent"in window&&!ko,F0=Ri&&(!Df||ko&&8<ko&&11>=ko),Qh=" ",ep=!1;function k0(t,e){switch(t){case"keyup":return sS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function z0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ms=!1;function aS(t,e){switch(t){case"compositionend":return z0(e);case"keypress":return e.which!==32?null:(ep=!0,Qh);case"textInput":return t=e.data,t===Qh&&ep?null:t;default:return null}}function lS(t,e){if(Ms)return t==="compositionend"||!Df&&k0(t,e)?(t=O0(),_l=Pf=qi=null,Ms=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return F0&&e.locale!=="ko"?null:e.data;default:return null}}var cS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cS[t.type]:e==="textarea"}function B0(t,e,n,i){x0(i),e=Vl(e,"onChange"),0<e.length&&(n=new Nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zo=null,Zo=null;function uS(t){Z0(t,0)}function vc(t){var e=As(t);if(u0(e))return t}function dS(t,e){if(t==="change")return e}var H0=!1;if(Ri){var iu;if(Ri){var ru="oninput"in document;if(!ru){var np=document.createElement("div");np.setAttribute("oninput","return;"),ru=typeof np.oninput=="function"}iu=ru}else iu=!1;H0=iu&&(!document.documentMode||9<document.documentMode)}function ip(){zo&&(zo.detachEvent("onpropertychange",V0),Zo=zo=null)}function V0(t){if(t.propertyName==="value"&&vc(Zo)){var e=[];B0(e,Zo,t,Tf(t)),S0(uS,e)}}function fS(t,e,n){t==="focusin"?(ip(),zo=e,Zo=n,zo.attachEvent("onpropertychange",V0)):t==="focusout"&&ip()}function hS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vc(Zo)}function pS(t,e){if(t==="click")return vc(e)}function mS(t,e){if(t==="input"||t==="change")return vc(e)}function gS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:gS;function Jo(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!nd.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function rp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sp(t,e){var n=rp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function G0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?G0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j0(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function xS(t){var e=j0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&G0(n.ownerDocument.documentElement,n)){if(i!==null&&Uf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=sp(n,s);var o=sp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var vS=Ri&&"documentMode"in document&&11>=document.documentMode,ws=null,Sd=null,Bo=null,Ed=!1;function op(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ed||ws==null||ws!==Il(i)||(i=ws,"selectionStart"in i&&Uf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Bo&&Jo(Bo,i)||(Bo=i,i=Vl(Sd,"onSelect"),0<i.length&&(e=new Nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ws)))}function Oa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ts={animationend:Oa("Animation","AnimationEnd"),animationiteration:Oa("Animation","AnimationIteration"),animationstart:Oa("Animation","AnimationStart"),transitionend:Oa("Transition","TransitionEnd")},su={},W0={};Ri&&(W0=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function _c(t){if(su[t])return su[t];if(!Ts[t])return t;var e=Ts[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in W0)return su[t]=e[n];return t}var X0=_c("animationend"),$0=_c("animationiteration"),q0=_c("animationstart"),Y0=_c("transitionend"),K0=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){K0.set(t,e),Qr(e,[t])}for(var ou=0;ou<ap.length;ou++){var au=ap[ou],_S=au.toLowerCase(),yS=au[0].toUpperCase()+au.slice(1);fr(_S,"on"+yS)}fr(X0,"onAnimationEnd");fr($0,"onAnimationIteration");fr(q0,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Y0,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);Qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Uo));function lp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_y(i,e,void 0,t),t.currentTarget=null}function Z0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;lp(r,a,c),s=l}}}if(Fl)throw t=xd,Fl=!1,xd=null,t}function lt(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var i=t+"__bubble";n.has(i)||(J0(e,t,2,!1),n.add(i))}function lu(t,e,n){var i=0;e&&(i|=4),J0(n,t,i,e)}var Fa="_reactListening"+Math.random().toString(36).slice(2);function Qo(t){if(!t[Fa]){t[Fa]=!0,s0.forEach(function(n){n!=="selectionchange"&&(SS.has(n)||lu(n,!1,t),lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fa]||(e[Fa]=!0,lu("selectionchange",!1,e))}}function J0(t,e,n,i){switch(I0(e)){case 1:var r=Iy;break;case 4:r=Oy;break;default:r=Cf}n=r.bind(null,e,n,t),r=void 0,!gd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function cu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}S0(function(){var c=s,u=Tf(n),f=[];e:{var h=K0.get(t);if(h!==void 0){var m=Nf,_=t;switch(t){case"keypress":if(yl(n)===0)break e;case"keydown":case"keyup":m=Zy;break;case"focusin":_="focus",m=nu;break;case"focusout":_="blur",m=nu;break;case"beforeblur":case"afterblur":m=nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=eS;break;case X0:case $0:case q0:m=Vy;break;case Y0:m=nS;break;case"scroll":m=Fy;break;case"wheel":m=rS;break;case"copy":case"cut":case"paste":m=jy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jh}var y=(e&4)!==0,p=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=c,g;v!==null;){g=v;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,d!==null&&(E=$o(v,d),E!=null&&y.push(ea(v,E,g)))),p)break;v=v.return}0<y.length&&(h=new m(h,_,null,n,u),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==pd&&(_=n.relatedTarget||n.fromElement)&&(Ur(_)||_[Ci]))break e;if((m||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Ur(_):null,_!==null&&(p=es(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(y=Kh,E="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=Jh,E="onPointerLeave",d="onPointerEnter",v="pointer"),p=m==null?h:As(m),g=_==null?h:As(_),h=new y(E,v+"leave",m,n,u),h.target=p,h.relatedTarget=g,E=null,Ur(u)===c&&(y=new y(d,v+"enter",_,n,u),y.target=g,y.relatedTarget=p,E=y),p=E,m&&_)t:{for(y=m,d=_,v=0,g=y;g;g=ns(g))v++;for(g=0,E=d;E;E=ns(E))g++;for(;0<v-g;)y=ns(y),v--;for(;0<g-v;)d=ns(d),g--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=ns(y),d=ns(d)}y=null}else y=null;m!==null&&cp(f,h,m,y,!1),_!==null&&p!==null&&cp(f,p,_,y,!0)}}e:{if(h=c?As(c):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var R=dS;else if(tp(h))if(H0)R=mS;else{R=hS;var A=fS}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=pS);if(R&&(R=R(t,c))){B0(f,R,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&cd(h,"number",h.value)}switch(A=c?As(c):window,t){case"focusin":(tp(A)||A.contentEditable==="true")&&(ws=A,Sd=c,Bo=null);break;case"focusout":Bo=Sd=ws=null;break;case"mousedown":Ed=!0;break;case"contextmenu":case"mouseup":case"dragend":Ed=!1,op(f,n,u);break;case"selectionchange":if(vS)break;case"keydown":case"keyup":op(f,n,u)}var w;if(Df)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else Ms?k0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(F0&&n.locale!=="ko"&&(Ms||D!=="onCompositionStart"?D==="onCompositionEnd"&&Ms&&(w=O0()):(qi=u,Pf="value"in qi?qi.value:qi.textContent,Ms=!0)),A=Vl(c,D),0<A.length&&(D=new Zh(D,t,null,n,u),f.push({event:D,listeners:A}),w?D.data=w:(w=z0(n),w!==null&&(D.data=w)))),(w=oS?aS(t,n):lS(t,n))&&(c=Vl(c,"onBeforeInput"),0<c.length&&(u=new Zh("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}Z0(f,e)})}function ea(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=$o(t,n),s!=null&&i.unshift(ea(t,s,r)),s=$o(t,e),s!=null&&i.push(ea(t,s,r))),t=t.return}return i}function ns(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=$o(n,s),l!=null&&o.unshift(ea(n,l,a))):r||(l=$o(n,s),l!=null&&o.push(ea(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ES=/\r\n?/g,MS=/\u0000|\uFFFD/g;function up(t){return(typeof t=="string"?t:""+t).replace(ES,`
`).replace(MS,"")}function ka(t,e,n){if(e=up(e),up(t)!==e&&n)throw Error(oe(425))}function Gl(){}var Md=null,wd=null;function Td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ad=typeof setTimeout=="function"?setTimeout:void 0,wS=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(t){return dp.resolve(null).then(t).catch(AS)}:Ad;function AS(t){setTimeout(function(){throw t})}function uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ko(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ko(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ao=Math.random().toString(36).slice(2),ti="__reactFiber$"+ao,ta="__reactProps$"+ao,Ci="__reactContainer$"+ao,bd="__reactEvents$"+ao,bS="__reactListeners$"+ao,RS="__reactHandles$"+ao;function Ur(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fp(t);t!==null;){if(n=t[ti])return n;t=fp(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[ti]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function As(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function yc(t){return t[ta]||null}var Rd=[],bs=-1;function hr(t){return{current:t}}function ut(t){0>bs||(t.current=Rd[bs],Rd[bs]=null,bs--)}function ot(t,e){bs++,Rd[bs]=t.current,t.current=e}var cr={},Zt=hr(cr),dn=hr(!1),Wr=cr;function Ws(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function jl(){ut(dn),ut(Zt)}function hp(t,e,n){if(Zt.current!==cr)throw Error(oe(168));ot(Zt,e),ot(dn,n)}function Q0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,fy(t)||"Unknown",r));return gt({},n,i)}function Wl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Wr=Zt.current,ot(Zt,t),ot(dn,dn.current),!0}function pp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Q0(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,ut(dn),ut(Zt),ot(Zt,t)):ut(dn),ot(dn,n)}var Si=null,Sc=!1,du=!1;function ex(t){Si===null?Si=[t]:Si.push(t)}function CS(t){Sc=!0,ex(t)}function pr(){if(!du&&Si!==null){du=!0;var t=0,e=nt;try{var n=Si;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,Sc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),T0(Af,pr),r}finally{nt=e,du=!1}}return null}var Rs=[],Cs=0,Xl=null,$l=0,Pn=[],Nn=0,Xr=null,Mi=1,wi="";function Rr(t,e){Rs[Cs++]=$l,Rs[Cs++]=Xl,Xl=t,$l=e}function tx(t,e,n){Pn[Nn++]=Mi,Pn[Nn++]=wi,Pn[Nn++]=Xr,Xr=t;var i=Mi;t=wi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Mi=1<<32-Xn(e)+r|n<<r|i,wi=s+t}else Mi=1<<s|n<<r|i,wi=t}function If(t){t.return!==null&&(Rr(t,1),tx(t,1,0))}function Of(t){for(;t===Xl;)Xl=Rs[--Cs],Rs[Cs]=null,$l=Rs[--Cs],Rs[Cs]=null;for(;t===Xr;)Xr=Pn[--Nn],Pn[Nn]=null,wi=Pn[--Nn],Pn[Nn]=null,Mi=Pn[--Nn],Pn[Nn]=null}var Mn=null,En=null,dt=!1,Gn=null;function nx(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mn=t,En=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Xr!==null?{id:Mi,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mn=t,En=null,!0):!1;default:return!1}}function Cd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Pd(t){if(dt){var e=En;if(e){var n=e;if(!mp(t,e)){if(Cd(t))throw Error(oe(418));e=er(n.nextSibling);var i=Mn;e&&mp(t,e)?nx(i,n):(t.flags=t.flags&-4097|2,dt=!1,Mn=t)}}else{if(Cd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,dt=!1,Mn=t}}}function gp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mn=t}function za(t){if(t!==Mn)return!1;if(!dt)return gp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Td(t.type,t.memoizedProps)),e&&(e=En)){if(Cd(t))throw ix(),Error(oe(418));for(;e;)nx(t,e),e=er(e.nextSibling)}if(gp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Mn?er(t.stateNode.nextSibling):null;return!0}function ix(){for(var t=En;t;)t=er(t.nextSibling)}function Xs(){En=Mn=null,dt=!1}function Ff(t){Gn===null?Gn=[t]:Gn.push(t)}var PS=Ii.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function Ba(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function xp(t){var e=t._init;return e(t._payload)}function rx(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=rr(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,g,E){return v===null||v.tag!==6?(v=vu(g,d.mode,E),v.return=d,v):(v=r(v,g),v.return=d,v)}function l(d,v,g,E){var R=g.type;return R===Es?u(d,v,g.props.children,E,g.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&xp(R)===v.type)?(E=r(v,g.props),E.ref=yo(d,v,g),E.return=d,E):(E=bl(g.type,g.key,g.props,null,d.mode,E),E.ref=yo(d,v,g),E.return=d,E)}function c(d,v,g,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=_u(g,d.mode,E),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function u(d,v,g,E,R){return v===null||v.tag!==7?(v=Br(g,d.mode,E,R),v.return=d,v):(v=r(v,g),v.return=d,v)}function f(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=vu(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ca:return g=bl(v.type,v.key,v.props,null,d.mode,g),g.ref=yo(d,null,v),g.return=d,g;case Ss:return v=_u(v,d.mode,g),v.return=d,v;case Gi:var E=v._init;return f(d,E(v._payload),g)}if(Lo(v)||mo(v))return v=Br(v,d.mode,g,null),v.return=d,v;Ba(d,v)}return null}function h(d,v,g,E){var R=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(d,v,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:return g.key===R?l(d,v,g,E):null;case Ss:return g.key===R?c(d,v,g,E):null;case Gi:return R=g._init,h(d,v,R(g._payload),E)}if(Lo(g)||mo(g))return R!==null?null:u(d,v,g,E,null);Ba(d,g)}return null}function m(d,v,g,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return d=d.get(g)||null,a(v,d,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ca:return d=d.get(E.key===null?g:E.key)||null,l(v,d,E,R);case Ss:return d=d.get(E.key===null?g:E.key)||null,c(v,d,E,R);case Gi:var A=E._init;return m(d,v,g,A(E._payload),R)}if(Lo(E)||mo(E))return d=d.get(g)||null,u(v,d,E,R,null);Ba(v,E)}return null}function _(d,v,g,E){for(var R=null,A=null,w=v,D=v=0,$=null;w!==null&&D<g.length;D++){w.index>D?($=w,w=null):$=w.sibling;var S=h(d,w,g[D],E);if(S===null){w===null&&(w=$);break}t&&w&&S.alternate===null&&e(d,w),v=s(S,v,D),A===null?R=S:A.sibling=S,A=S,w=$}if(D===g.length)return n(d,w),dt&&Rr(d,D),R;if(w===null){for(;D<g.length;D++)w=f(d,g[D],E),w!==null&&(v=s(w,v,D),A===null?R=w:A.sibling=w,A=w);return dt&&Rr(d,D),R}for(w=i(d,w);D<g.length;D++)$=m(w,d,D,g[D],E),$!==null&&(t&&$.alternate!==null&&w.delete($.key===null?D:$.key),v=s($,v,D),A===null?R=$:A.sibling=$,A=$);return t&&w.forEach(function(P){return e(d,P)}),dt&&Rr(d,D),R}function y(d,v,g,E){var R=mo(g);if(typeof R!="function")throw Error(oe(150));if(g=R.call(g),g==null)throw Error(oe(151));for(var A=R=null,w=v,D=v=0,$=null,S=g.next();w!==null&&!S.done;D++,S=g.next()){w.index>D?($=w,w=null):$=w.sibling;var P=h(d,w,S.value,E);if(P===null){w===null&&(w=$);break}t&&w&&P.alternate===null&&e(d,w),v=s(P,v,D),A===null?R=P:A.sibling=P,A=P,w=$}if(S.done)return n(d,w),dt&&Rr(d,D),R;if(w===null){for(;!S.done;D++,S=g.next())S=f(d,S.value,E),S!==null&&(v=s(S,v,D),A===null?R=S:A.sibling=S,A=S);return dt&&Rr(d,D),R}for(w=i(d,w);!S.done;D++,S=g.next())S=m(w,d,D,S.value,E),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),v=s(S,v,D),A===null?R=S:A.sibling=S,A=S);return t&&w.forEach(function(Z){return e(d,Z)}),dt&&Rr(d,D),R}function p(d,v,g,E){if(typeof g=="object"&&g!==null&&g.type===Es&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ca:e:{for(var R=g.key,A=v;A!==null;){if(A.key===R){if(R=g.type,R===Es){if(A.tag===7){n(d,A.sibling),v=r(A,g.props.children),v.return=d,d=v;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Gi&&xp(R)===A.type){n(d,A.sibling),v=r(A,g.props),v.ref=yo(d,A,g),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}g.type===Es?(v=Br(g.props.children,d.mode,E,g.key),v.return=d,d=v):(E=bl(g.type,g.key,g.props,null,d.mode,E),E.ref=yo(d,v,g),E.return=d,d=E)}return o(d);case Ss:e:{for(A=g.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=_u(g,d.mode,E),v.return=d,d=v}return o(d);case Gi:return A=g._init,p(d,v,A(g._payload),E)}if(Lo(g))return _(d,v,g,E);if(mo(g))return y(d,v,g,E);Ba(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=vu(g,d.mode,E),v.return=d,d=v),o(d)):n(d,v)}return p}var $s=rx(!0),sx=rx(!1),ql=hr(null),Yl=null,Ps=null,kf=null;function zf(){kf=Ps=Yl=null}function Bf(t){var e=ql.current;ut(ql),t._currentValue=e}function Nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function zs(t,e){Yl=t,kf=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(kf!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Yl===null)throw Error(oe(308));Ps=t,Yl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var Ir=null;function Hf(t){Ir===null?Ir=[t]:Ir.push(t)}function ox(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function Vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ax(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}function vp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Kl(t,e,n,i){var r=t.updateQueue;ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,m=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(h=e,m=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(m,f,h);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,h=typeof _=="function"?_.call(m,f,h):_,h==null)break e;f=gt({},f,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else m={eventTime:m,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=f):u=u.next=m,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=f}}function _p(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var xa={},oi=hr(xa),na=hr(xa),ia=hr(xa);function Or(t){if(t===xa)throw Error(oe(174));return t}function Gf(t,e){switch(ot(ia,e),ot(na,t),ot(oi,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dd(e,t)}ut(oi),ot(oi,e)}function qs(){ut(oi),ut(na),ut(ia)}function lx(t){Or(ia.current);var e=Or(oi.current),n=dd(e,t.type);e!==n&&(ot(na,t),ot(oi,n))}function jf(t){na.current===t&&(ut(oi),ut(na))}var ht=hr(0);function Zl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fu=[];function Wf(){for(var t=0;t<fu.length;t++)fu[t]._workInProgressVersionPrimary=null;fu.length=0}var El=Ii.ReactCurrentDispatcher,hu=Ii.ReactCurrentBatchConfig,$r=0,pt=null,At=null,Dt=null,Jl=!1,Ho=!1,ra=0,NS=0;function Gt(){throw Error(oe(321))}function Xf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function $f(t,e,n,i,r,s){if($r=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,El.current=t===null||t.memoizedState===null?IS:OS,t=n(i,r),Ho){s=0;do{if(Ho=!1,ra=0,25<=s)throw Error(oe(301));s+=1,Dt=At=null,e.updateQueue=null,El.current=FS,t=n(i,r)}while(Ho)}if(El.current=Ql,e=At!==null&&At.next!==null,$r=0,Dt=At=pt=null,Jl=!1,e)throw Error(oe(300));return t}function qf(){var t=ra!==0;return ra=0,t}function Qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function On(){if(At===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?pt.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(oe(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?pt.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function sa(t,e){return typeof e=="function"?e(t):e}function pu(t){var e=On(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if(($r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=u,qr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,qn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,qr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mu(t){var e=On(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);qn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function cx(){}function ux(t,e){var n=pt,i=On(),r=e(),s=!qn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Yf(hx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,oa(9,fx.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(oe(349));$r&30||dx(n,e,r)}return r}function dx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fx(t,e,n,i){e.value=n,e.getSnapshot=i,px(e)&&mx(t)}function hx(t,e,n){return n(function(){px(e)&&mx(t)})}function px(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function mx(t){var e=Pi(t,1);e!==null&&$n(e,t,1,-1)}function yp(t){var e=Qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:t},e.queue=t,t=t.dispatch=US.bind(null,pt,t),[e.memoizedState,t]}function oa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function gx(){return On().memoizedState}function Ml(t,e,n,i){var r=Qn();pt.flags|=t,r.memoizedState=oa(1|e,n,void 0,i===void 0?null:i)}function Ec(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Xf(i,o.deps)){r.memoizedState=oa(e,n,s,i);return}}pt.flags|=t,r.memoizedState=oa(1|e,n,s,i)}function Sp(t,e){return Ml(8390656,8,t,e)}function Yf(t,e){return Ec(2048,8,t,e)}function xx(t,e){return Ec(4,2,t,e)}function vx(t,e){return Ec(4,4,t,e)}function _x(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yx(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,_x.bind(null,e,t),n)}function Kf(){}function Sx(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ex(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Mx(t,e,n){return $r&21?(qn(n,e)||(n=R0(),pt.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function LS(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=hu.transition;hu.transition={};try{t(!1),e()}finally{nt=n,hu.transition=i}}function wx(){return On().memoizedState}function DS(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Tx(t))Ax(e,n);else if(n=ox(t,e,n,i),n!==null){var r=rn();$n(n,t,i,r),bx(n,e,i)}}function US(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tx(t))Ax(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,qn(a,o)){var l=e.interleaved;l===null?(r.next=r,Hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ox(t,e,r,i),n!==null&&(r=rn(),$n(n,t,i,r),bx(n,e,i))}}function Tx(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function Ax(t,e){Ho=Jl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function bx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bf(t,n)}}var Ql={readContext:In,useCallback:Gt,useContext:Gt,useEffect:Gt,useImperativeHandle:Gt,useInsertionEffect:Gt,useLayoutEffect:Gt,useMemo:Gt,useReducer:Gt,useRef:Gt,useState:Gt,useDebugValue:Gt,useDeferredValue:Gt,useTransition:Gt,useMutableSource:Gt,useSyncExternalStore:Gt,useId:Gt,unstable_isNewReconciler:!1},IS={readContext:In,useCallback:function(t,e){return Qn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Sp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ml(4194308,4,_x.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ml(4,2,t,e)},useMemo:function(t,e){var n=Qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=DS.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Qn();return t={current:t},e.memoizedState=t},useState:yp,useDebugValue:Kf,useDeferredValue:function(t){return Qn().memoizedState=t},useTransition:function(){var t=yp(!1),e=t[0];return t=LS.bind(null,t[1]),Qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Qn();if(dt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Ut===null)throw Error(oe(349));$r&30||dx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Sp(hx.bind(null,i,s,t),[t]),i.flags|=2048,oa(9,fx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Qn(),e=Ut.identifierPrefix;if(dt){var n=wi,i=Mi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OS={readContext:In,useCallback:Sx,useContext:In,useEffect:Yf,useImperativeHandle:yx,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Ex,useReducer:pu,useRef:gx,useState:function(){return pu(sa)},useDebugValue:Kf,useDeferredValue:function(t){var e=On();return Mx(e,At.memoizedState,t)},useTransition:function(){var t=pu(sa)[0],e=On().memoizedState;return[t,e]},useMutableSource:cx,useSyncExternalStore:ux,useId:wx,unstable_isNewReconciler:!1},FS={readContext:In,useCallback:Sx,useContext:In,useEffect:Yf,useImperativeHandle:yx,useInsertionEffect:xx,useLayoutEffect:vx,useMemo:Ex,useReducer:mu,useRef:gx,useState:function(){return mu(sa)},useDebugValue:Kf,useDeferredValue:function(t){var e=On();return At===null?e.memoizedState=t:Mx(e,At.memoizedState,t)},useTransition:function(){var t=mu(sa)[0],e=On().memoizedState;return[t,e]},useMutableSource:cx,useSyncExternalStore:ux,useId:wx,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Mc={isMounted:function(t){return(t=t._reactInternals)?es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ir(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&($n(e,t,r,i),Sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=ir(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&($n(e,t,r,i),Sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=ir(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&($n(e,t,i,n),Sl(e,t,i))}};function Ep(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,i)||!Jo(r,s):!0}function Rx(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=fn(e)?Wr:Zt.current,i=e.contextTypes,s=(i=i!=null)?Ws(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Mc.enqueueReplaceState(e,e.state,null)}function Dd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=fn(e)?Wr:Zt.current,r.context=Ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Mc.enqueueReplaceState(r,r.state,null),Kl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ys(t,e){try{var n="",i=e;do n+=dy(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function gu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kS=typeof WeakMap=="function"?WeakMap:Map;function Cx(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){tc||(tc=!0,jd=i),Ud(t,e)},n}function Px(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ud(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new kS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=JS.bind(null,t,e,n),e.then(t,t))}function Tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var zS=Ii.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?sx(e,null,n,i):$s(e,t.child,n,i)}function bp(t,e,n,i,r){n=n.render;var s=e.ref;return zs(e,r),i=$f(t,e,n,i,s,r),n=qf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(dt&&n&&If(e),e.flags|=1,en(t,e,i,r),e.child)}function Rp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!rh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nx(t,e,s,i,r)):(t=bl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,i)&&t.ref===e.ref)return Ni(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Nx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Jo(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ni(t,e,r)}return Id(t,e,n,i,r)}function Lx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ls,_n),_n|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(Ls,_n),_n|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(Ls,_n),_n|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(Ls,_n),_n|=i;return en(t,e,r,n),e.child}function Dx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,i,r){var s=fn(n)?Wr:Zt.current;return s=Ws(e,s),zs(e,r),n=$f(t,e,n,i,s,r),i=qf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ni(t,e,r)):(dt&&i&&If(e),e.flags|=1,en(t,e,n,r),e.child)}function Cp(t,e,n,i,r){if(fn(n)){var s=!0;Wl(e)}else s=!1;if(zs(e,r),e.stateNode===null)wl(t,e),Rx(e,n,i),Dd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=fn(n)?Wr:Zt.current,c=Ws(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Mp(e,o,i,c),ji=!1;var h=e.memoizedState;o.state=h,Kl(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||ji?(typeof u=="function"&&(Ld(e,n,u,i),l=e.memoizedState),(a=ji||Ep(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ax(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=fn(n)?Wr:Zt.current,l=Ws(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Mp(e,o,i,l),ji=!1,h=e.memoizedState,o.state=h,Kl(e,i,o,r);var _=e.memoizedState;a!==f||h!==_||dn.current||ji?(typeof m=="function"&&(Ld(e,n,m,i),_=e.memoizedState),(c=ji||Ep(e,n,c,i,h,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Od(t,e,n,i,s,r)}function Od(t,e,n,i,r,s){Dx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&pp(e,n,!1),Ni(t,e,s);i=e.stateNode,zS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=$s(e,t.child,null,s),e.child=$s(e,null,a,s)):en(t,e,a,s),e.memoizedState=i.state,r&&pp(e,n,!0),e.child}function Ux(t){var e=t.stateNode;e.pendingContext?hp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hp(t,e.context,!1),Gf(t,e.containerInfo)}function Pp(t,e,n,i,r){return Xs(),Ff(r),e.flags|=256,en(t,e,n,i),e.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function kd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ix(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(ht,r&1),t===null)return Pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ac(o,i,0,null),t=Br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=kd(n),e.memoizedState=Fd,t):Zf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return BS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?kd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Fd,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zf(t,e){return e=Ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ha(t,e,n,i){return i!==null&&Ff(i),$s(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function BS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=gu(Error(oe(422))),Ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ac({mode:"visible",children:i.children},r,0,null),s=Br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&$s(e,t.child,null,o),e.child.memoizedState=kd(o),e.memoizedState=Fd,s);if(!(e.mode&1))return Ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=gu(s,i,void 0),Ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Ut,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),$n(i,t,r,-1))}return ih(),i=gu(Error(oe(421))),Ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=QS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=er(r.nextSibling),Mn=e,dt=!0,Gn=null,t!==null&&(Pn[Nn++]=Mi,Pn[Nn++]=wi,Pn[Nn++]=Xr,Mi=t.id,wi=t.overflow,Xr=e),e=Zf(e,i.children),e.flags|=4096,e)}function Np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nd(t.return,e,n)}function xu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Ox(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Np(t,n,e);else if(t.tag===19)Np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Zl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Zl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xu(e,!0,n,null,s);break;case"together":xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function wl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ni(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HS(t,e,n){switch(e.tag){case 3:Ux(e),Xs();break;case 5:lx(e);break;case 1:fn(e.type)&&Wl(e);break;case 4:Gf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(ql,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?Ix(t,e,n):(ot(ht,ht.current&1),t=Ni(t,e,n),t!==null?t.sibling:null);ot(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ox(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Lx(t,e,n)}return Ni(t,e,n)}var Fx,zd,kx,zx;Fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zd=function(){};kx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(oi.current);var s=null;switch(n){case"input":r=ad(t,r),i=ad(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=ud(t,r),i=ud(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Gl)}fd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&lt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};zx=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function jt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function VS(t,e,n){var i=e.pendingProps;switch(Of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return fn(e.type)&&jl(),jt(e),null;case 3:return i=e.stateNode,qs(),ut(dn),ut(Zt),Wf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&($d(Gn),Gn=null))),zd(t,e),jt(e),null;case 5:jf(e);var r=Or(ia.current);if(n=e.type,t!==null&&e.stateNode!=null)kx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return jt(e),null}if(t=Or(oi.current),za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[ta]=s,t=(e.mode&1)!==0,n){case"dialog":lt("cancel",i),lt("close",i);break;case"iframe":case"object":case"embed":lt("load",i);break;case"video":case"audio":for(r=0;r<Uo.length;r++)lt(Uo[r],i);break;case"source":lt("error",i);break;case"img":case"image":case"link":lt("error",i),lt("load",i);break;case"details":lt("toggle",i);break;case"input":Bh(i,s),lt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},lt("invalid",i);break;case"textarea":Vh(i,s),lt("invalid",i)}fd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ka(i.textContent,a,t),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&lt("scroll",i)}switch(n){case"input":Pa(i),Hh(i,s,!0);break;case"textarea":Pa(i),Gh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[ta]=i,Fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=hd(n,i),n){case"dialog":lt("cancel",t),lt("close",t),r=i;break;case"iframe":case"object":case"embed":lt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Uo.length;r++)lt(Uo[r],t);r=i;break;case"source":lt("error",t),r=i;break;case"img":case"image":case"link":lt("error",t),lt("load",t),r=i;break;case"details":lt("toggle",t),r=i;break;case"input":Bh(t,i),r=ad(t,i),lt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),lt("invalid",t);break;case"textarea":Vh(t,i),r=ud(t,i),lt("invalid",t);break;default:r=i}fd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&p0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Xo(t,l):typeof l=="number"&&Xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&lt("scroll",t):l!=null&&Sf(t,s,l,o))}switch(n){case"input":Pa(t),Hh(t,i,!1);break;case"textarea":Pa(t),Gh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Is(t,!!i.multiple,s,!1):i.defaultValue!=null&&Is(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(t&&e.stateNode!=null)zx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Or(ia.current),Or(oi.current),za(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=Mn,t!==null))switch(t.tag){case 3:ka(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return jt(e),null;case 13:if(ut(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&En!==null&&e.mode&1&&!(e.flags&128))ix(),Xs(),e.flags|=98560,s=!1;else if(s=za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ti]=e}else Xs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else Gn!==null&&($d(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Rt===0&&(Rt=3):ih())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return qs(),zd(t,e),t===null&&Qo(e.stateNode.containerInfo),jt(e),null;case 10:return Bf(e.type._context),jt(e),null;case 17:return fn(e.type)&&jl(),jt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zl(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&Et()>Ks&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=Zl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return jt(e),null}else 2*Et()-s.renderingStartTime>Ks&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,n=ht.current,ot(ht,i?n&1|2:n&1),e):(jt(e),null);case 22:case 23:return nh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?_n&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function GS(t,e){switch(Of(e),e.tag){case 1:return fn(e.type)&&jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),ut(dn),ut(Zt),Wf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jf(e),null;case 13:if(ut(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Xs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ut(ht),null;case 4:return qs(),null;case 10:return Bf(e.type._context),null;case 22:case 23:return nh(),null;case 24:return null;default:return null}}var Va=!1,qt=!1,jS=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){_t(t,e,i)}else n.current=null}function Bd(t,e,n){try{n()}catch(i){_t(t,e,i)}}var Lp=!1;function WS(t,e){if(Md=Bl,t=j0(),Uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)h=f,f=m;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(m=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},Bl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,p=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:Hn(e.type,y),p);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(E){_t(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=Lp,Lp=!1,_}function Vo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Bd(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Bx(t){var e=t.alternate;e!==null&&(t.alternate=null,Bx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ta],delete e[bd],delete e[bS],delete e[RS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hx(t){return t.tag===5||t.tag===3||t.tag===4}function Dp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Gl));else if(i!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Gd(t,e,n),t=t.sibling;t!==null;)Gd(t,e,n),t=t.sibling}var Ft=null,Vn=!1;function Oi(t,e,n){for(n=n.child;n!==null;)Vx(t,e,n),n=n.sibling}function Vx(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(gc,n)}catch{}switch(n.tag){case 5:qt||Ns(n,e);case 6:var i=Ft,r=Vn;Ft=null,Oi(t,e,n),Ft=i,Vn=r,Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Vn?(t=Ft,n=n.stateNode,t.nodeType===8?uu(t.parentNode,n):t.nodeType===1&&uu(t,n),Ko(t)):uu(Ft,n.stateNode));break;case 4:i=Ft,r=Vn,Ft=n.stateNode.containerInfo,Vn=!0,Oi(t,e,n),Ft=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Bd(n,e,o),r=r.next}while(r!==i)}Oi(t,e,n);break;case 1:if(!qt&&(Ns(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){_t(n,e,a)}Oi(t,e,n);break;case 21:Oi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Oi(t,e,n),qt=i):Oi(t,e,n);break;default:Oi(t,e,n)}}function Up(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jS),e.forEach(function(i){var r=eE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Vn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Vn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Ft===null)throw Error(oe(160));Vx(s,o,r),Ft=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){_t(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gx(e,t),e=e.sibling}function Gx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{Vo(3,t,t.return),wc(3,t)}catch(y){_t(t,t.return,y)}try{Vo(5,t,t.return)}catch(y){_t(t,t.return,y)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&Ns(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&Ns(n,n.return),t.flags&32){var r=t.stateNode;try{Xo(r,"")}catch(y){_t(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&d0(r,s),hd(a,o);var c=hd(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?g0(r,f):u==="dangerouslySetInnerHTML"?p0(r,f):u==="children"?Xo(r,f):Sf(r,u,f,c)}switch(a){case"input":ld(r,s);break;case"textarea":f0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Is(r,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Is(r,!!s.multiple,s.defaultValue,!0):Is(r,!!s.multiple,s.multiple?[]:"",!1))}r[ta]=s}catch(y){_t(t,t.return,y)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){_t(t,t.return,y)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(e.containerInfo)}catch(y){_t(t,t.return,y)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(eh=Et())),i&4&&Up(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||u,Fn(e,t),qt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(xe=t,u=t.child;u!==null;){for(f=xe=u;xe!==null;){switch(h=xe,m=h.child,h.tag){case 0:case 11:case 14:case 15:Vo(4,h,h.return);break;case 1:Ns(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){_t(i,n,y)}}break;case 5:Ns(h,h.return);break;case 22:if(h.memoizedState!==null){Op(f);continue}}m!==null?(m.return=h,xe=m):Op(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=m0("display",o))}catch(y){_t(t,t.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){_t(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Up(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Hx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Xo(r,""),i.flags&=-33);var s=Dp(t);Gd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Dp(t);Vd(t,a,o);break;default:throw Error(oe(161))}}catch(l){_t(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function XS(t,e,n){xe=t,jx(t)}function jx(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Va;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Va;var c=qt;if(Va=o,(qt=l)&&!c)for(xe=r;xe!==null;)o=xe,l=o.child,o.tag===22&&o.memoizedState!==null?Fp(r):l!==null?(l.return=o,xe=l):Fp(r);for(;s!==null;)xe=s,jx(s),s=s.sibling;xe=r,Va=a,qt=c}Ip(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Ip(t)}}function Ip(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_p(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_p(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&Ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}qt||e.flags&512&&Hd(e)}catch(h){_t(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Op(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Fp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){_t(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){_t(e,r,l)}}var s=e.return;try{Hd(e)}catch(l){_t(e,s,l)}break;case 5:var o=e.return;try{Hd(e)}catch(l){_t(e,o,l)}}}catch(l){_t(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var $S=Math.ceil,ec=Ii.ReactCurrentDispatcher,Jf=Ii.ReactCurrentOwner,Un=Ii.ReactCurrentBatchConfig,Ze=0,Ut=null,wt=null,Bt=0,_n=0,Ls=hr(0),Rt=0,aa=null,qr=0,Tc=0,Qf=0,Go=null,cn=null,eh=0,Ks=1/0,yi=null,tc=!1,jd=null,nr=null,Ga=!1,Yi=null,nc=0,jo=0,Wd=null,Tl=-1,Al=0;function rn(){return Ze&6?Et():Tl!==-1?Tl:Tl=Et()}function ir(t){return t.mode&1?Ze&2&&Bt!==0?Bt&-Bt:PS.transition!==null?(Al===0&&(Al=R0()),Al):(t=nt,t!==0||(t=window.event,t=t===void 0?16:I0(t.type)),t):1}function $n(t,e,n,i){if(50<jo)throw jo=0,Wd=null,Error(oe(185));pa(t,n,i),(!(Ze&2)||t!==Ut)&&(t===Ut&&(!(Ze&2)&&(Tc|=n),Rt===4&&$i(t,Bt)),hn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ks=Et()+500,Sc&&pr()))}function hn(t,e){var n=t.callbackNode;Py(t,e);var i=zl(t,t===Ut?Bt:0);if(i===0)n!==null&&Xh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Xh(n),e===1)t.tag===0?CS(kp.bind(null,t)):ex(kp.bind(null,t)),TS(function(){!(Ze&6)&&pr()}),n=null;else{switch(C0(i)){case 1:n=Af;break;case 4:n=A0;break;case 16:n=kl;break;case 536870912:n=b0;break;default:n=kl}n=Jx(n,Wx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Wx(t,e){if(Tl=-1,Al=0,Ze&6)throw Error(oe(327));var n=t.callbackNode;if(Bs()&&t.callbackNode!==n)return null;var i=zl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ic(t,i);else{e=i;var r=Ze;Ze|=2;var s=$x();(Ut!==t||Bt!==e)&&(yi=null,Ks=Et()+500,zr(t,e));do try{KS();break}catch(a){Xx(t,a)}while(!0);zf(),ec.current=s,Ze=r,wt!==null?e=0:(Ut=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=vd(t),r!==0&&(i=r,e=Xd(t,r))),e===1)throw n=aa,zr(t,0),$i(t,i),hn(t,Et()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!qS(r)&&(e=ic(t,i),e===2&&(s=vd(t),s!==0&&(i=s,e=Xd(t,s))),e===1))throw n=aa,zr(t,0),$i(t,i),hn(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Cr(t,cn,yi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=eh+500-Et(),10<e)){if(zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ad(Cr.bind(null,t,cn,yi),e);break}Cr(t,cn,yi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$S(i/1960))-i,10<i){t.timeoutHandle=Ad(Cr.bind(null,t,cn,yi),i);break}Cr(t,cn,yi);break;case 5:Cr(t,cn,yi);break;default:throw Error(oe(329))}}}return hn(t,Et()),t.callbackNode===n?Wx.bind(null,t):null}function Xd(t,e){var n=Go;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=ic(t,e),t!==2&&(e=cn,cn=n,e!==null&&$d(e)),t}function $d(t){cn===null?cn=t:cn.push.apply(cn,t)}function qS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Qf,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function kp(t){if(Ze&6)throw Error(oe(327));Bs();var e=zl(t,0);if(!(e&1))return hn(t,Et()),null;var n=ic(t,e);if(t.tag!==0&&n===2){var i=vd(t);i!==0&&(e=i,n=Xd(t,i))}if(n===1)throw n=aa,zr(t,0),$i(t,e),hn(t,Et()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Cr(t,cn,yi),hn(t,Et()),null}function th(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ks=Et()+500,Sc&&pr())}}function Yr(t){Yi!==null&&Yi.tag===0&&!(Ze&6)&&Bs();var e=Ze;Ze|=1;var n=Un.transition,i=nt;try{if(Un.transition=null,nt=1,t)return t()}finally{nt=i,Un.transition=n,Ze=e,!(Ze&6)&&pr()}}function nh(){_n=Ls.current,ut(Ls)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wS(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&jl();break;case 3:qs(),ut(dn),ut(Zt),Wf();break;case 5:jf(i);break;case 4:qs();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:Bf(i.type._context);break;case 22:case 23:nh()}n=n.return}if(Ut=t,wt=t=rr(t.current,null),Bt=_n=e,Rt=0,aa=null,Qf=Tc=qr=0,cn=Go=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ir=null}return t}function Xx(t,e){do{var n=wt;try{if(zf(),El.current=Ql,Jl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jl=!1}if($r=0,Dt=At=pt=null,Ho=!1,ra=0,Jf.current=null,n===null||n.return===null){Rt=1,aa=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Tp(o);if(m!==null){m.flags&=-257,Ap(m,o,a,s,e),m.mode&1&&wp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){wp(s,c,e),ih();break e}l=Error(oe(426))}}else if(dt&&a.mode&1){var p=Tp(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Ap(p,o,a,s,e),Ff(Ys(l,a));break e}}s=l=Ys(l,a),Rt!==4&&(Rt=2),Go===null?Go=[s]:Go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Cx(s,l,e);vp(s,d);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nr===null||!nr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Px(s,a,e);vp(s,E);break e}}s=s.return}while(s!==null)}Yx(n)}catch(R){e=R,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function $x(){var t=ec.current;return ec.current=Ql,t===null?Ql:t}function ih(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ut===null||!(qr&268435455)&&!(Tc&268435455)||$i(Ut,Bt)}function ic(t,e){var n=Ze;Ze|=2;var i=$x();(Ut!==t||Bt!==e)&&(yi=null,zr(t,e));do try{YS();break}catch(r){Xx(t,r)}while(!0);if(zf(),Ze=n,ec.current=i,wt!==null)throw Error(oe(261));return Ut=null,Bt=0,Rt}function YS(){for(;wt!==null;)qx(wt)}function KS(){for(;wt!==null&&!Sy();)qx(wt)}function qx(t){var e=Zx(t.alternate,t,_n);t.memoizedProps=t.pendingProps,e===null?Yx(t):wt=e,Jf.current=null}function Yx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GS(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=VS(n,e,_n),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function Cr(t,e,n){var i=nt,r=Un.transition;try{Un.transition=null,nt=1,ZS(t,e,n,i)}finally{Un.transition=r,nt=i}return null}function ZS(t,e,n,i){do Bs();while(Yi!==null);if(Ze&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Ny(t,s),t===Ut&&(wt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ga||(Ga=!0,Jx(kl,function(){return Bs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var o=nt;nt=1;var a=Ze;Ze|=4,Jf.current=null,WS(t,n),Gx(n,t),xS(wd),Bl=!!Md,wd=Md=null,t.current=n,XS(n),Ey(),Ze=a,nt=o,Un.transition=s}else t.current=n;if(Ga&&(Ga=!1,Yi=t,nc=r),s=t.pendingLanes,s===0&&(nr=null),Ty(n.stateNode),hn(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(tc)throw tc=!1,t=jd,jd=null,t;return nc&1&&t.tag!==0&&Bs(),s=t.pendingLanes,s&1?t===Wd?jo++:(jo=0,Wd=t):jo=0,pr(),null}function Bs(){if(Yi!==null){var t=C0(nc),e=Un.transition,n=nt;try{if(Un.transition=null,nt=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,nc=0,Ze&6)throw Error(oe(331));var r=Ze;for(Ze|=4,xe=t.current;xe!==null;){var s=xe,o=s.child;if(xe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(xe=c;xe!==null;){var u=xe;switch(u.tag){case 0:case 11:case 15:Vo(8,u,s)}var f=u.child;if(f!==null)f.return=u,xe=f;else for(;xe!==null;){u=xe;var h=u.sibling,m=u.return;if(Bx(u),u===c){xe=null;break}if(h!==null){h.return=m,xe=h;break}xe=m}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var p=y.sibling;y.sibling=null,y=p}while(y!==null)}}xe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,xe=o;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Vo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){o=xe;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,xe=g;else e:for(o=v;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(R){_t(a,a.return,R)}if(a===o){xe=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,xe=E;break e}xe=a.return}}if(Ze=r,pr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(gc,t)}catch{}i=!0}return i}finally{nt=n,Un.transition=e}}return!1}function zp(t,e,n){e=Ys(n,e),e=Cx(t,e,1),t=tr(t,e,1),e=rn(),t!==null&&(pa(t,1,e),hn(t,e))}function _t(t,e,n){if(t.tag===3)zp(t,t,n);else for(;e!==null;){if(e.tag===3){zp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Ys(n,t),t=Px(e,t,1),e=tr(e,t,1),t=rn(),e!==null&&(pa(e,1,t),hn(e,t));break}}e=e.return}}function JS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>Et()-eh?zr(t,0):Qf|=n),hn(t,e)}function Kx(t,e){e===0&&(t.mode&1?(e=Da,Da<<=1,!(Da&130023424)&&(Da=4194304)):e=1);var n=rn();t=Pi(t,e),t!==null&&(pa(t,e,n),hn(t,n))}function QS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kx(t,n)}function eE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Kx(t,n)}var Zx;Zx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,HS(t,e,n);un=!!(t.flags&131072)}else un=!1,dt&&e.flags&1048576&&tx(e,$l,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;wl(t,e),t=e.pendingProps;var r=Ws(e,Zt.current);zs(e,n),r=$f(null,e,i,t,r,n);var s=qf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Wl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vf(e),r.updater=Mc,e.stateNode=r,r._reactInternals=e,Dd(e,i,t,n),e=Od(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&If(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(wl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nE(i),t=Hn(i,t),r){case 0:e=Id(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=bp(null,e,i,t,n);break e;case 14:e=Rp(null,e,i,Hn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Cp(t,e,i,r,n);case 3:e:{if(Ux(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ax(t,e),Kl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ys(Error(oe(423)),e),e=Pp(t,e,i,n,r);break e}else if(i!==r){r=Ys(Error(oe(424)),e),e=Pp(t,e,i,n,r);break e}else for(En=er(e.stateNode.containerInfo.firstChild),Mn=e,dt=!0,Gn=null,n=sx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Xs(),i===r){e=Ni(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return lx(e),t===null&&Pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Td(i,r)?o=null:s!==null&&Td(i,s)&&(e.flags|=32),Dx(t,e),en(t,e,o,n),e.child;case 6:return t===null&&Pd(e),null;case 13:return Ix(t,e,n);case 4:return Gf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=$s(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),bp(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(ql,i._currentValue),i._currentValue=o,s!==null)if(qn(s.value,o)){if(s.children===r.children&&!dn.current){e=Ni(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Nd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,n),r=In(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Rp(t,e,i,r,n);case 15:return Nx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),wl(t,e),e.tag=1,fn(i)?(t=!0,Wl(e)):t=!1,zs(e,n),Rx(e,i,r),Dd(e,i,r,n),Od(null,e,i,!0,t,n);case 19:return Ox(t,e,n);case 22:return Lx(t,e,n)}throw Error(oe(156,e.tag))};function Jx(t,e){return T0(t,e)}function tE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new tE(t,e,n,i)}function rh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nE(t){if(typeof t=="function")return rh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Mf)return 11;if(t===wf)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")rh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Br(n.children,r,s,e);case Ef:o=8,r|=8;break;case id:return t=Dn(12,n,e,r|2),t.elementType=id,t.lanes=s,t;case rd:return t=Dn(13,n,e,r),t.elementType=rd,t.lanes=s,t;case sd:return t=Dn(19,n,e,r),t.elementType=sd,t.lanes=s,t;case l0:return Ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case o0:o=10;break e;case a0:o=9;break e;case Mf:o=11;break e;case wf:o=14;break e;case Gi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Dn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Br(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function Ac(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=l0,t.lanes=n,t.stateNode={isHidden:!1},t}function vu(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function _u(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qc(0),this.expirationTimes=Qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sh(t,e,n,i,r,s,o,a,l){return t=new iE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vf(s),t}function rE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Qx(t){if(!t)return cr;t=t._reactInternals;e:{if(es(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(fn(n))return Q0(t,n,e)}return e}function ev(t,e,n,i,r,s,o,a,l){return t=sh(n,i,!0,t,r,s,o,a,l),t.context=Qx(null),n=t.current,i=rn(),r=ir(n),s=Ai(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,pa(t,r,i),hn(t,i),t}function bc(t,e,n,i){var r=e.current,s=rn(),o=ir(r);return n=Qx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&($n(t,r,o,s),Sl(t,r,o)),o}function rc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function oh(t,e){Bp(t,e),(t=t.alternate)&&Bp(t,e)}function sE(){return null}var tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ah(t){this._internalRoot=t}Rc.prototype.render=ah.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));bc(t,e,null,null)};Rc.prototype.unmount=ah.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){bc(null,t,null,null)}),e[Ci]=null}};function Rc(t){this._internalRoot=t}Rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=L0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xi.length&&e!==0&&e<Xi[n].priority;n++);Xi.splice(n,0,t),n===0&&U0(t)}};function lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function oE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=rc(o);s.call(c)}}var o=ev(e,i,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[Ci]=o.current,Qo(t.nodeType===8?t.parentNode:t),Yr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=rc(l);a.call(c)}}var l=sh(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[Ci]=l.current,Qo(t.nodeType===8?t.parentNode:t),Yr(function(){bc(e,l,n,i)}),l}function Pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=rc(o);a.call(l)}}bc(e,o,t,r)}else o=oE(n,e,t,r,i);return rc(o)}P0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Do(e.pendingLanes);n!==0&&(bf(e,n|1),hn(e,Et()),!(Ze&6)&&(Ks=Et()+500,pr()))}break;case 13:Yr(function(){var i=Pi(t,1);if(i!==null){var r=rn();$n(i,t,1,r)}}),oh(t,1)}};Rf=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=rn();$n(e,t,134217728,n)}oh(t,134217728)}};N0=function(t){if(t.tag===13){var e=ir(t),n=Pi(t,e);if(n!==null){var i=rn();$n(n,t,e,i)}oh(t,e)}};L0=function(){return nt};D0=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};md=function(t,e,n){switch(e){case"input":if(ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yc(i);if(!r)throw Error(oe(90));u0(i),ld(i,r)}}}break;case"textarea":f0(t,n);break;case"select":e=n.value,e!=null&&Is(t,!!n.multiple,e,!1)}};_0=th;y0=Yr;var aE={usingClientEntryPoint:!1,Events:[ga,As,yc,x0,v0,th]},Eo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lE={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ii.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=M0(t),t===null?null:t.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||sE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{gc=ja.inject(lE),si=ja}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aE;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lh(e))throw Error(oe(200));return rE(t,e,null,n)};An.createRoot=function(t,e){if(!lh(t))throw Error(oe(299));var n=!1,i="",r=tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sh(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,Qo(t.nodeType===8?t.parentNode:t),new ah(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=M0(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Yr(t)};An.hydrate=function(t,e,n){if(!Cc(e))throw Error(oe(200));return Pc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!lh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=ev(e,null,t,1,n??null,r,!1,s,o),t[Ci]=e.current,Qo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rc(e)};An.render=function(t,e,n){if(!Cc(e))throw Error(oe(200));return Pc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(oe(40));return t._reactRootContainer?(Yr(function(){Pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};An.unstable_batchedUpdates=th;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Pc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nv)}catch(t){console.error(t)}}nv(),n0.exports=An;var cE=n0.exports,iv,Vp=cE;iv=Vp.createRoot,Vp.hydrateRoot;var ch={};Object.defineProperty(ch,"__esModule",{value:!0});ch.parse=gE;ch.serialize=xE;const uE=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,dE=/^[\u0021-\u003A\u003C-\u007E]*$/,fE=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,hE=/^[\u0020-\u003A\u003D-\u007E]*$/,pE=Object.prototype.toString,mE=(()=>{const t=function(){};return t.prototype=Object.create(null),t})();function gE(t,e){const n=new mE,i=t.length;if(i<2)return n;const r=(e==null?void 0:e.decode)||vE;let s=0;do{const o=t.indexOf("=",s);if(o===-1)break;const a=t.indexOf(";",s),l=a===-1?i:a;if(o>l){s=t.lastIndexOf(";",o-1)+1;continue}const c=Gp(t,s,o),u=jp(t,o,c),f=t.slice(c,u);if(n[f]===void 0){let h=Gp(t,o+1,l),m=jp(t,l,h);const _=r(t.slice(h,m));n[f]=_}s=l+1}while(s<i);return n}function Gp(t,e,n){do{const i=t.charCodeAt(e);if(i!==32&&i!==9)return e}while(++e<n);return n}function jp(t,e,n){for(;e>n;){const i=t.charCodeAt(--e);if(i!==32&&i!==9)return e+1}return n}function xE(t,e,n){const i=(n==null?void 0:n.encode)||encodeURIComponent;if(!uE.test(t))throw new TypeError(`argument name is invalid: ${t}`);const r=i(e);if(!dE.test(r))throw new TypeError(`argument val is invalid: ${e}`);let s=t+"="+r;if(!n)return s;if(n.maxAge!==void 0){if(!Number.isInteger(n.maxAge))throw new TypeError(`option maxAge is invalid: ${n.maxAge}`);s+="; Max-Age="+n.maxAge}if(n.domain){if(!fE.test(n.domain))throw new TypeError(`option domain is invalid: ${n.domain}`);s+="; Domain="+n.domain}if(n.path){if(!hE.test(n.path))throw new TypeError(`option path is invalid: ${n.path}`);s+="; Path="+n.path}if(n.expires){if(!_E(n.expires)||!Number.isFinite(n.expires.valueOf()))throw new TypeError(`option expires is invalid: ${n.expires}`);s+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.partitioned&&(s+="; Partitioned"),n.priority)switch(typeof n.priority=="string"?n.priority.toLowerCase():void 0){case"low":s+="; Priority=Low";break;case"medium":s+="; Priority=Medium";break;case"high":s+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${n.priority}`)}if(n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"none":s+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${n.sameSite}`)}return s}function vE(t){if(t.indexOf("%")===-1)return t;try{return decodeURIComponent(t)}catch{return t}}function _E(t){return pE.call(t)==="[object Date]"}/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Wp="popstate";function yE(t={}){function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return qd("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:la(r)}return EE(e,n,null,t)}function mt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ci(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SE(){return Math.random().toString(36).substring(2,10)}function Xp(t,e){return{usr:t.state,key:t.key,idx:e}}function qd(t,e,n=null,i){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?lo(e):e,state:n,key:e&&e.key||i||SE()}}function la({pathname:t="/",search:e="",hash:n=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function lo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substring(n),t=t.substring(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function EE(t,e,n,i={}){let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a="POP",l=null,c=u();c==null&&(c=0,o.replaceState({...o.state,idx:c},""));function u(){return(o.state||{idx:null}).idx}function f(){a="POP";let p=u(),d=p==null?null:p-c;c=p,l&&l({action:a,location:y.location,delta:d})}function h(p,d){a="PUSH";let v=qd(y.location,p,d);c=u()+1;let g=Xp(v,c),E=y.createHref(v);try{o.pushState(g,"",E)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;r.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function m(p,d){a="REPLACE";let v=qd(y.location,p,d);c=u();let g=Xp(v,c),E=y.createHref(v);o.replaceState(g,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function _(p){let d=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof p=="string"?p:la(p);return v=v.replace(/ $/,"%20"),mt(d,`No window.location.(origin|href) available to create URL for href: ${v}`),new URL(v,d)}let y={get action(){return a},get location(){return t(r,o)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wp,f),l=p,()=>{r.removeEventListener(Wp,f),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let d=_(p);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:h,replace:m,go(p){return o.go(p)}};return y}function rv(t,e,n="/"){return ME(t,e,n,!1)}function ME(t,e,n,i){let r=typeof e=="string"?lo(e):e,s=Li(r.pathname||"/",n);if(s==null)return null;let o=sv(t);wE(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=IE(s);a=DE(o[l],c,i)}return a}function sv(t,e=[],n=[],i=""){let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(mt(l.relativePath.startsWith(i),`Absolute route path "${l.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(i.length));let c=bi([i,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(mt(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${c}".`),sv(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:NE(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of ov(s.path))r(s,o,l)}),e}function ov(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=ov(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wE(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:LE(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var TE=/^:[\w-]+$/,AE=3,bE=2,RE=1,CE=10,PE=-2,$p=t=>t==="*";function NE(t,e){let n=t.split("/"),i=n.length;return n.some($p)&&(i+=PE),e&&(i+=bE),n.filter(r=>!$p(r)).reduce((r,s)=>r+(TE.test(s)?AE:s===""?RE:CE),i)}function LE(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function DE(t,e,n=!1){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],c=a===i.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=sc({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),h=l.route;if(!f&&c&&n&&!i[i.length-1].route.index&&(f=sc({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:bi([s,f.pathname]),pathnameBase:zE(bi([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=bi([s,f.pathnameBase]))}return o}function sc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=UE(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((c,{paramName:u,isOptional:f},h)=>{if(u==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[h];return f&&!m?c[u]=void 0:c[u]=(m||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function UE(t,e=!1,n=!0){ci(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function IE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ci(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function Li(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function OE(t,e="/"){let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?lo(t):t;return{pathname:n?n.startsWith("/")?n:FE(n,e):e,search:BE(i),hash:HE(r)}}function FE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function yu(t,e,n,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function kE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function av(t){let e=kE(t);return e.map((n,i)=>i===e.length-1?n.pathname:n.pathnameBase)}function lv(t,e,n,i=!1){let r;typeof t=="string"?r=lo(t):(r={...t},mt(!r.pathname||!r.pathname.includes("?"),yu("?","pathname","search",r)),mt(!r.pathname||!r.pathname.includes("#"),yu("#","pathname","hash",r)),mt(!r.search||!r.search.includes("#"),yu("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!i&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;r.pathname=h.join("/")}a=f>=0?e[f]:"/"}let l=OE(r,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}var bi=t=>t.join("/").replace(/\/\/+/g,"/"),zE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),BE=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,HE=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function VE(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}var cv=["POST","PUT","PATCH","DELETE"];new Set(cv);var GE=["GET",...cv];new Set(GE);var co=F.createContext(null);co.displayName="DataRouter";var Nc=F.createContext(null);Nc.displayName="DataRouterState";var uv=F.createContext({isTransitioning:!1});uv.displayName="ViewTransition";var jE=F.createContext(new Map);jE.displayName="Fetchers";var WE=F.createContext(null);WE.displayName="Await";var ui=F.createContext(null);ui.displayName="Navigation";var va=F.createContext(null);va.displayName="Location";var di=F.createContext({outlet:null,matches:[],isDataRoute:!1});di.displayName="Route";var uh=F.createContext(null);uh.displayName="RouteError";function XE(t,{relative:e}={}){mt(_a(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=F.useContext(ui),{hash:r,pathname:s,search:o}=ya(t,{relative:e}),a=s;return n!=="/"&&(a=s==="/"?n:bi([n,s])),i.createHref({pathname:a,search:o,hash:r})}function _a(){return F.useContext(va)!=null}function mr(){return mt(_a(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(va).location}var dv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fv(t){F.useContext(ui).static||F.useLayoutEffect(t)}function hv(){let{isDataRoute:t}=F.useContext(di);return t?sM():$E()}function $E(){mt(_a(),"useNavigate() may be used only in the context of a <Router> component.");let t=F.useContext(co),{basename:e,navigator:n}=F.useContext(ui),{matches:i}=F.useContext(di),{pathname:r}=mr(),s=JSON.stringify(av(i)),o=F.useRef(!1);return fv(()=>{o.current=!0}),F.useCallback((l,c={})=>{if(ci(o.current,dv),!o.current)return;if(typeof l=="number"){n.go(l);return}let u=lv(l,JSON.parse(s),r,c.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:bi([e,u.pathname])),(c.replace?n.replace:n.push)(u,c.state,c)},[e,n,s,r,t])}F.createContext(null);function dh(){let{matches:t}=F.useContext(di),e=t[t.length-1];return e?e.params:{}}function ya(t,{relative:e}={}){let{matches:n}=F.useContext(di),{pathname:i}=mr(),r=JSON.stringify(av(n));return F.useMemo(()=>lv(t,JSON.parse(r),i,e==="path"),[t,r,i,e])}function qE(t,e){return pv(t,e)}function pv(t,e,n,i){var v;mt(_a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r,static:s}=F.useContext(ui),{matches:o}=F.useContext(di),a=o[o.length-1],l=a?a.params:{},c=a?a.pathname:"/",u=a?a.pathnameBase:"/",f=a&&a.route;{let g=f&&f.path||"";mv(c,!f||g.endsWith("*")||g.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${c}" (under <Route path="${g}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${g}"> to <Route path="${g==="/"?"*":`${g}/*`}">.`)}let h=mr(),m;if(e){let g=typeof e=="string"?lo(e):e;mt(u==="/"||((v=g.pathname)==null?void 0:v.startsWith(u)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${u}" but pathname "${g.pathname}" was given in the \`location\` prop.`),m=g}else m=h;let _=m.pathname||"/",y=_;if(u!=="/"){let g=u.replace(/^\//,"").split("/");y="/"+_.replace(/^\//,"").split("/").slice(g.length).join("/")}let p=!s&&n&&n.matches&&n.matches.length>0?n.matches:rv(t,{pathname:y});ci(f||p!=null,`No routes matched location "${m.pathname}${m.search}${m.hash}" `),ci(p==null||p[p.length-1].route.element!==void 0||p[p.length-1].route.Component!==void 0||p[p.length-1].route.lazy!==void 0,`Matched leaf route at location "${m.pathname}${m.search}${m.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let d=QE(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},l,g.params),pathname:bi([u,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?u:bi([u,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),o,n,i);return e&&d?F.createElement(va.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...m},navigationType:"POP"}},d):d}function YE(){let t=rM(),e=VE(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",r={padding:"0.5rem",backgroundColor:i},s={padding:"2px 4px",backgroundColor:i},o=null;return console.error("Error handled by React Router default ErrorBoundary:",t),o=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:s},"ErrorBoundary")," or"," ",F.createElement("code",{style:s},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,o)}var KE=F.createElement(YE,null),ZE=class extends F.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){console.error("React Router caught the following error during render",t,e)}render(){return this.state.error!==void 0?F.createElement(di.Provider,{value:this.props.routeContext},F.createElement(uh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function JE({routeContext:t,match:e,children:n}){let i=F.useContext(co);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(di.Provider,{value:t},n)}function QE(t,e=[],n=null,i=null){if(t==null){if(!n)return null;if(n.errors)t=n.matches;else if(e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let r=t,s=n==null?void 0:n.errors;if(s!=null){let l=r.findIndex(c=>c.route.id&&(s==null?void 0:s[c.route.id])!==void 0);mt(l>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),r=r.slice(0,Math.min(r.length,l+1))}let o=!1,a=-1;if(n)for(let l=0;l<r.length;l++){let c=r[l];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(a=l),c.route.id){let{loaderData:u,errors:f}=n,h=c.route.loader&&!u.hasOwnProperty(c.route.id)&&(!f||f[c.route.id]===void 0);if(c.route.lazy||h){o=!0,a>=0?r=r.slice(0,a+1):r=[r[0]];break}}}return r.reduceRight((l,c,u)=>{let f,h=!1,m=null,_=null;n&&(f=s&&c.route.id?s[c.route.id]:void 0,m=c.route.errorElement||KE,o&&(a<0&&u===0?(mv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),h=!0,_=null):a===u&&(h=!0,_=c.route.hydrateFallbackElement||null)));let y=e.concat(r.slice(0,u+1)),p=()=>{let d;return f?d=m:h?d=_:c.route.Component?d=F.createElement(c.route.Component,null):c.route.element?d=c.route.element:d=l,F.createElement(JE,{match:c,routeContext:{outlet:l,matches:y,isDataRoute:n!=null},children:d})};return n&&(c.route.ErrorBoundary||c.route.errorElement||u===0)?F.createElement(ZE,{location:n.location,revalidation:n.revalidation,component:m,error:f,children:p(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):p()},null)}function fh(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eM(t){let e=F.useContext(co);return mt(e,fh(t)),e}function tM(t){let e=F.useContext(Nc);return mt(e,fh(t)),e}function nM(t){let e=F.useContext(di);return mt(e,fh(t)),e}function hh(t){let e=nM(t),n=e.matches[e.matches.length-1];return mt(n.route.id,`${t} can only be used on routes that contain a unique "id"`),n.route.id}function iM(){return hh("useRouteId")}function rM(){var i;let t=F.useContext(uh),e=tM("useRouteError"),n=hh("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[n]}function sM(){let{router:t}=eM("useNavigate"),e=hh("useNavigate"),n=F.useRef(!1);return fv(()=>{n.current=!0}),F.useCallback(async(r,s={})=>{ci(n.current,dv),n.current&&(typeof r=="number"?t.navigate(r):await t.navigate(r,{fromRouteId:e,...s}))},[t,e])}var qp={};function mv(t,e,n){!e&&!qp[t]&&(qp[t]=!0,ci(!1,n))}F.memo(oM);function oM({routes:t,future:e,state:n}){return pv(t,void 0,n,e)}function Jn(t){mt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function aM({basename:t="/",children:e=null,location:n,navigationType:i="POP",navigator:r,static:s=!1}){mt(!_a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=t.replace(/^\/*/,"/"),a=F.useMemo(()=>({basename:o,navigator:r,static:s,future:{}}),[o,r,s]);typeof n=="string"&&(n=lo(n));let{pathname:l="/",search:c="",hash:u="",state:f=null,key:h="default"}=n,m=F.useMemo(()=>{let _=Li(l,o);return _==null?null:{location:{pathname:_,search:c,hash:u,state:f,key:h},navigationType:i}},[o,l,c,u,f,h,i]);return ci(m!=null,`<Router basename="${o}"> is not able to match the URL "${l}${c}${u}" because it does not start with the basename, so the <Router> won't render anything.`),m==null?null:F.createElement(ui.Provider,{value:a},F.createElement(va.Provider,{children:e,value:m}))}function lM({children:t,location:e}){return qE(Yd(t),e)}function Yd(t,e=[]){let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,Yd(i.props.children,s));return}mt(i.type===Jn,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),mt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Yd(i.props.children,s)),n.push(o)}),n}var Rl="get",Cl="application/x-www-form-urlencoded";function Lc(t){return t!=null&&typeof t.tagName=="string"}function cM(t){return Lc(t)&&t.tagName.toLowerCase()==="button"}function uM(t){return Lc(t)&&t.tagName.toLowerCase()==="form"}function dM(t){return Lc(t)&&t.tagName.toLowerCase()==="input"}function fM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function hM(t,e){return t.button===0&&(!e||e==="_self")&&!fM(t)}var Wa=null;function pM(){if(Wa===null)try{new FormData(document.createElement("form"),0),Wa=!1}catch{Wa=!0}return Wa}var mM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Su(t){return t!=null&&!mM.has(t)?(ci(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Cl}"`),null):t}function gM(t,e){let n,i,r,s,o;if(uM(t)){let a=t.getAttribute("action");i=a?Li(a,e):null,n=t.getAttribute("method")||Rl,r=Su(t.getAttribute("enctype"))||Cl,s=new FormData(t)}else if(cM(t)||dM(t)&&(t.type==="submit"||t.type==="image")){let a=t.form;if(a==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=t.getAttribute("formaction")||a.getAttribute("action");if(i=l?Li(l,e):null,n=t.getAttribute("formmethod")||a.getAttribute("method")||Rl,r=Su(t.getAttribute("formenctype"))||Su(a.getAttribute("enctype"))||Cl,s=new FormData(a,t),!pM()){let{name:c,type:u,value:f}=t;if(u==="image"){let h=c?`${c}.`:"";s.append(`${h}x`,"0"),s.append(`${h}y`,"0")}else c&&s.append(c,f)}}else{if(Lc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Rl,i=null,r=Cl,o=t}return s&&r==="text/plain"&&(o=s,s=void 0),{action:i,method:n.toLowerCase(),encType:r,formData:s,body:o}}function ph(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}async function xM(t,e){if(t.id in e)return e[t.id];try{let n=await import(t.module);return e[t.id]=n,n}catch(n){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function vM(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function _M(t,e,n){let i=await Promise.all(t.map(async r=>{let s=e.routes[r.route.id];if(s){let o=await xM(s,n);return o.links?o.links():[]}return[]}));return MM(i.flat(1).filter(vM).filter(r=>r.rel==="stylesheet"||r.rel==="preload").map(r=>r.rel==="stylesheet"?{...r,rel:"prefetch",as:"style"}:{...r,rel:"prefetch"}))}function Yp(t,e,n,i,r,s){let o=(l,c)=>n[c]?l.route.id!==n[c].route.id:!0,a=(l,c)=>{var u;return n[c].pathname!==l.pathname||((u=n[c].route.path)==null?void 0:u.endsWith("*"))&&n[c].params["*"]!==l.params["*"]};return s==="assets"?e.filter((l,c)=>o(l,c)||a(l,c)):s==="data"?e.filter((l,c)=>{var f;let u=i.routes[l.route.id];if(!u||!u.hasLoader)return!1;if(o(l,c)||a(l,c))return!0;if(l.route.shouldRevalidate){let h=l.route.shouldRevalidate({currentUrl:new URL(r.pathname+r.search+r.hash,window.origin),currentParams:((f=n[0])==null?void 0:f.params)||{},nextUrl:new URL(t,window.origin),nextParams:l.params,defaultShouldRevalidate:!0});if(typeof h=="boolean")return h}return!0}):[]}function yM(t,e,{includeHydrateFallback:n}={}){return SM(t.map(i=>{let r=e.routes[i.route.id];if(!r)return[];let s=[r.module];return r.clientActionModule&&(s=s.concat(r.clientActionModule)),r.clientLoaderModule&&(s=s.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(s=s.concat(r.hydrateFallbackModule)),r.imports&&(s=s.concat(r.imports)),s}).flat(1))}function SM(t){return[...new Set(t)]}function EM(t){let e={},n=Object.keys(t).sort();for(let i of n)e[i]=t[i];return e}function MM(t,e){let n=new Set;return new Set(e),t.reduce((i,r)=>{let s=JSON.stringify(EM(r));return n.has(s)||(n.add(s),i.push({key:s,link:r})),i},[])}var wM=new Set([100,101,204,205]);function TM(t,e){let n=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return n.pathname==="/"?n.pathname="_root.data":e&&Li(n.pathname,e)==="/"?n.pathname=`${e.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function gv(){let t=F.useContext(co);return ph(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function AM(){let t=F.useContext(Nc);return ph(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var mh=F.createContext(void 0);mh.displayName="FrameworkContext";function xv(){let t=F.useContext(mh);return ph(t,"You must render this element inside a <HydratedRouter> element"),t}function bM(t,e){let n=F.useContext(mh),[i,r]=F.useState(!1),[s,o]=F.useState(!1),{onFocus:a,onBlur:l,onMouseEnter:c,onMouseLeave:u,onTouchStart:f}=e,h=F.useRef(null);F.useEffect(()=>{if(t==="render"&&o(!0),t==="viewport"){let y=d=>{d.forEach(v=>{o(v.isIntersecting)})},p=new IntersectionObserver(y,{threshold:.5});return h.current&&p.observe(h.current),()=>{p.disconnect()}}},[t]),F.useEffect(()=>{if(i){let y=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(y)}}},[i]);let m=()=>{r(!0)},_=()=>{r(!1),o(!1)};return n?t!=="intent"?[s,h,{}]:[s,h,{onFocus:Mo(a,m),onBlur:Mo(l,_),onMouseEnter:Mo(c,m),onMouseLeave:Mo(u,_),onTouchStart:Mo(f,m)}]:[!1,h,{}]}function Mo(t,e){return n=>{t&&t(n),n.defaultPrevented||e(n)}}function RM({page:t,...e}){let{router:n}=gv(),i=F.useMemo(()=>rv(n.routes,t,n.basename),[n.routes,t,n.basename]);return i?F.createElement(PM,{page:t,matches:i,...e}):null}function CM(t){let{manifest:e,routeModules:n}=xv(),[i,r]=F.useState([]);return F.useEffect(()=>{let s=!1;return _M(t,e,n).then(o=>{s||r(o)}),()=>{s=!0}},[t,e,n]),i}function PM({page:t,matches:e,...n}){let i=mr(),{manifest:r,routeModules:s}=xv(),{basename:o}=gv(),{loaderData:a,matches:l}=AM(),c=F.useMemo(()=>Yp(t,e,l,r,i,"data"),[t,e,l,r,i]),u=F.useMemo(()=>Yp(t,e,l,r,i,"assets"),[t,e,l,r,i]),f=F.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let _=new Set,y=!1;if(e.forEach(d=>{var g;let v=r.routes[d.route.id];!v||!v.hasLoader||(!c.some(E=>E.route.id===d.route.id)&&d.route.id in a&&((g=s[d.route.id])!=null&&g.shouldRevalidate)||v.hasClientLoader?y=!0:_.add(d.route.id))}),_.size===0)return[];let p=TM(t,o);return y&&_.size>0&&p.searchParams.set("_routes",e.filter(d=>_.has(d.route.id)).map(d=>d.route.id).join(",")),[p.pathname+p.search]},[o,a,i,r,c,e,t,s]),h=F.useMemo(()=>yM(u,r),[u,r]),m=CM(u);return F.createElement(F.Fragment,null,f.map(_=>F.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...n})),h.map(_=>F.createElement("link",{key:_,rel:"modulepreload",href:_,...n})),m.map(({key:_,link:y})=>F.createElement("link",{key:_,...y})))}function NM(...t){return e=>{t.forEach(n=>{typeof n=="function"?n(e):n!=null&&(n.current=e)})}}var vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vv&&(window.__reactRouterVersion="7.5.1")}catch{}function LM({basename:t,children:e,window:n}){let i=F.useRef();i.current==null&&(i.current=yE({window:n,v5Compat:!0}));let r=i.current,[s,o]=F.useState({action:r.action,location:r.location}),a=F.useCallback(l=>{F.startTransition(()=>o(l))},[o]);return F.useLayoutEffect(()=>r.listen(a),[r,a]),F.createElement(aM,{basename:t,children:e,location:s.location,navigationType:s.action,navigator:r})}var _v=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sn=F.forwardRef(function({onClick:e,discover:n="render",prefetch:i="none",relative:r,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f,...h},m){let{basename:_}=F.useContext(ui),y=typeof c=="string"&&_v.test(c),p,d=!1;if(typeof c=="string"&&y&&(p=c,vv))try{let $=new URL(window.location.href),S=c.startsWith("//")?new URL($.protocol+c):new URL(c),P=Li(S.pathname,_);S.origin===$.origin&&P!=null?c=P+S.search+S.hash:d=!0}catch{ci(!1,`<Link to="${c}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let v=XE(c,{relative:r}),[g,E,R]=bM(i,h),A=OM(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:r,viewTransition:f});function w($){e&&e($),$.defaultPrevented||A($)}let D=F.createElement("a",{...h,...R,href:p||v,onClick:d||s?e:w,ref:NM(m,E),target:l,"data-discover":!y&&n==="render"?"true":void 0});return g&&!y?F.createElement(F.Fragment,null,D,F.createElement(RM,{page:v})):D});Sn.displayName="Link";var DM=F.forwardRef(function({"aria-current":e="page",caseSensitive:n=!1,className:i="",end:r=!1,style:s,to:o,viewTransition:a,children:l,...c},u){let f=ya(o,{relative:c.relative}),h=mr(),m=F.useContext(Nc),{navigator:_,basename:y}=F.useContext(ui),p=m!=null&&HM(f)&&a===!0,d=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=h.pathname,g=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;n||(v=v.toLowerCase(),g=g?g.toLowerCase():null,d=d.toLowerCase()),g&&y&&(g=Li(g,y)||g);const E=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let R=v===d||!r&&v.startsWith(d)&&v.charAt(E)==="/",A=g!=null&&(g===d||!r&&g.startsWith(d)&&g.charAt(d.length)==="/"),w={isActive:R,isPending:A,isTransitioning:p},D=R?e:void 0,$;typeof i=="function"?$=i(w):$=[i,R?"active":null,A?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let S=typeof s=="function"?s(w):s;return F.createElement(Sn,{...c,"aria-current":D,className:$,ref:u,style:S,to:o,viewTransition:a},typeof l=="function"?l(w):l)});DM.displayName="NavLink";var UM=F.forwardRef(({discover:t="render",fetcherKey:e,navigate:n,reloadDocument:i,replace:r,state:s,method:o=Rl,action:a,onSubmit:l,relative:c,preventScrollReset:u,viewTransition:f,...h},m)=>{let _=zM(),y=BM(a,{relative:c}),p=o.toLowerCase()==="get"?"get":"post",d=typeof a=="string"&&_v.test(a),v=g=>{if(l&&l(g),g.defaultPrevented)return;g.preventDefault();let E=g.nativeEvent.submitter,R=(E==null?void 0:E.getAttribute("formmethod"))||o;_(E||g.currentTarget,{fetcherKey:e,method:R,navigate:n,replace:r,state:s,relative:c,preventScrollReset:u,viewTransition:f})};return F.createElement("form",{ref:m,method:p,action:y,onSubmit:i?l:v,...h,"data-discover":!d&&t==="render"?"true":void 0})});UM.displayName="Form";function IM(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yv(t){let e=F.useContext(co);return mt(e,IM(t)),e}function OM(t,{target:e,replace:n,state:i,preventScrollReset:r,relative:s,viewTransition:o}={}){let a=hv(),l=mr(),c=ya(t,{relative:s});return F.useCallback(u=>{if(hM(u,e)){u.preventDefault();let f=n!==void 0?n:la(l)===la(c);a(t,{replace:f,state:i,preventScrollReset:r,relative:s,viewTransition:o})}},[l,a,c,n,i,e,t,r,s,o])}var FM=0,kM=()=>`__${String(++FM)}__`;function zM(){let{router:t}=yv("useSubmit"),{basename:e}=F.useContext(ui),n=iM();return F.useCallback(async(i,r={})=>{let{action:s,method:o,encType:a,formData:l,body:c}=gM(i,e);if(r.navigate===!1){let u=r.fetcherKey||kM();await t.fetch(u,n,r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||a,flushSync:r.flushSync})}else await t.navigate(r.action||s,{preventScrollReset:r.preventScrollReset,formData:l,body:c,formMethod:r.method||o,formEncType:r.encType||a,replace:r.replace,state:r.state,fromRouteId:n,flushSync:r.flushSync,viewTransition:r.viewTransition})},[t,e,n])}function BM(t,{relative:e}={}){let{basename:n}=F.useContext(ui),i=F.useContext(di);mt(i,"useFormAction must be used inside a RouteContext");let[r]=i.matches.slice(-1),s={...ya(t||".",{relative:e})},o=mr();if(t==null){s.search=o.search;let a=new URLSearchParams(s.search),l=a.getAll("index");if(l.some(u=>u==="")){a.delete("index"),l.filter(f=>f).forEach(f=>a.append("index",f));let u=a.toString();s.search=u?`?${u}`:""}}return(!t||t===".")&&r.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(s.pathname=s.pathname==="/"?n:bi([n,s.pathname])),la(s)}function HM(t,e={}){let n=F.useContext(uv);mt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=yv("useViewTransitionState"),r=ya(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Li(n.currentLocation.pathname,i)||n.currentLocation.pathname,o=Li(n.nextLocation.pathname,i)||n.nextLocation.pathname;return sc(r.pathname,o)!=null||sc(r.pathname,s)!=null}new TextEncoder;[...wM];/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),GM=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),Kp=t=>{const e=GM(t);return e.charAt(0).toUpperCase()+e.slice(1)},Sv=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),jM=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var WM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>F.createElement("svg",{ref:l,...WM,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Sv("lucide",r),...!s&&!jM(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,u])=>F.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(t,e)=>{const n=F.forwardRef(({className:i,...r},s)=>F.createElement(XM,{ref:s,iconNode:e,className:Sv(`lucide-${VM(Kp(t))}`,`lucide-${t}`,i),...r}));return n.displayName=Kp(t),n};/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Zp=tt("arrow-left",$M);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Jp=tt("arrow-right",qM);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ev=tt("book-open",YM);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],ZM=tt("box",KM);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],QM=tt("calendar",JM);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],oc=tt("camera",ew);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],nw=tt("chevron-left",tw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],rw=tt("chevron-right",iw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Mv=tt("clock",sw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],aw=tt("earth",ow);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],wv=tt("funnel",lw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ca=tt("globe",cw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],dw=tt("heart",uw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],hw=tt("house",fw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],mw=tt("image",pw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xw=tt("info",gw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],_w=tt("mail",vw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Dc=tt("map-pin",yw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]],Ew=tt("map",Sw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],ww=tt("menu",Mw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]],Aw=tt("message-square",Tw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Tv=tt("phone",bw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Av=tt("search",Rw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Pw=tt("share-2",Cw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Lw=tt("star",Nw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Kd=tt("users",Dw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uw=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],Iw=tt("video",Uw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Fw=tt("volume-2",Ow);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],zw=tt("volume-x",kw);/**
 * @license lucide-react v0.501.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],gh=tt("x",Bw);function bv(t,e){return function(){return t.apply(e,arguments)}}const{toString:Hw}=Object.prototype,{getPrototypeOf:xh}=Object,Uc=(t=>e=>{const n=Hw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>Uc(e)===t),Ic=t=>e=>typeof e===t,{isArray:uo}=Array,ua=Ic("undefined");function Vw(t){return t!==null&&!ua(t)&&t.constructor!==null&&!ua(t.constructor)&&wn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Rv=Yn("ArrayBuffer");function Gw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Rv(t.buffer),e}const jw=Ic("string"),wn=Ic("function"),Cv=Ic("number"),Oc=t=>t!==null&&typeof t=="object",Ww=t=>t===!0||t===!1,Pl=t=>{if(Uc(t)!=="object")return!1;const e=xh(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Xw=Yn("Date"),$w=Yn("File"),qw=Yn("Blob"),Yw=Yn("FileList"),Kw=t=>Oc(t)&&wn(t.pipe),Zw=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||wn(t.append)&&((e=Uc(t))==="formdata"||e==="object"&&wn(t.toString)&&t.toString()==="[object FormData]"))},Jw=Yn("URLSearchParams"),[Qw,e1,t1,n1]=["ReadableStream","Request","Response","Headers"].map(Yn),i1=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Sa(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),uo(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Pv(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Fr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Nv=t=>!ua(t)&&t!==Fr;function Zd(){const{caseless:t}=Nv(this)&&this||{},e={},n=(i,r)=>{const s=t&&Pv(e,r)||r;Pl(e[s])&&Pl(i)?e[s]=Zd(e[s],i):Pl(i)?e[s]=Zd({},i):uo(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Sa(arguments[i],n);return e}const r1=(t,e,n,{allOwnKeys:i}={})=>(Sa(e,(r,s)=>{n&&wn(r)?t[s]=bv(r,n):t[s]=r},{allOwnKeys:i}),t),s1=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),o1=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},a1=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&xh(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},l1=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},c1=t=>{if(!t)return null;if(uo(t))return t;let e=t.length;if(!Cv(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},u1=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&xh(Uint8Array)),d1=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},f1=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},h1=Yn("HTMLFormElement"),p1=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Qp=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),m1=Yn("RegExp"),Lv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Sa(n,(r,s)=>{let o;(o=e(r,s,t))!==!1&&(i[s]=o||r)}),Object.defineProperties(t,i)},g1=t=>{Lv(t,(e,n)=>{if(wn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(wn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},x1=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return uo(t)?i(t):i(String(t).split(e)),n},v1=()=>{},_1=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function y1(t){return!!(t&&wn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const S1=t=>{const e=new Array(10),n=(i,r)=>{if(Oc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=uo(i)?[]:{};return Sa(i,(o,a)=>{const l=n(o,r+1);!ua(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},E1=Yn("AsyncFunction"),M1=t=>t&&(Oc(t)||wn(t))&&wn(t.then)&&wn(t.catch),Dv=((t,e)=>t?setImmediate:e?((n,i)=>(Fr.addEventListener("message",({source:r,data:s})=>{r===Fr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Fr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",wn(Fr.postMessage)),w1=typeof queueMicrotask<"u"?queueMicrotask.bind(Fr):typeof process<"u"&&process.nextTick||Dv,Y={isArray:uo,isArrayBuffer:Rv,isBuffer:Vw,isFormData:Zw,isArrayBufferView:Gw,isString:jw,isNumber:Cv,isBoolean:Ww,isObject:Oc,isPlainObject:Pl,isReadableStream:Qw,isRequest:e1,isResponse:t1,isHeaders:n1,isUndefined:ua,isDate:Xw,isFile:$w,isBlob:qw,isRegExp:m1,isFunction:wn,isStream:Kw,isURLSearchParams:Jw,isTypedArray:u1,isFileList:Yw,forEach:Sa,merge:Zd,extend:r1,trim:i1,stripBOM:s1,inherits:o1,toFlatObject:a1,kindOf:Uc,kindOfTest:Yn,endsWith:l1,toArray:c1,forEachEntry:d1,matchAll:f1,isHTMLForm:h1,hasOwnProperty:Qp,hasOwnProp:Qp,reduceDescriptors:Lv,freezeMethods:g1,toObjectSet:x1,toCamelCase:p1,noop:v1,toFiniteNumber:_1,findKey:Pv,global:Fr,isContextDefined:Nv,isSpecCompliantForm:y1,toJSONObject:S1,isAsyncFn:E1,isThenable:M1,setImmediate:Dv,asap:w1};function Be(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r,this.status=r.status?r.status:null)}Y.inherits(Be,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:Y.toJSONObject(this.config),code:this.code,status:this.status}}});const Uv=Be.prototype,Iv={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Iv[t]={value:t}});Object.defineProperties(Be,Iv);Object.defineProperty(Uv,"isAxiosError",{value:!0});Be.from=(t,e,n,i,r,s)=>{const o=Object.create(Uv);return Y.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),Be.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const T1=null;function Jd(t){return Y.isPlainObject(t)||Y.isArray(t)}function Ov(t){return Y.endsWith(t,"[]")?t.slice(0,-2):t}function em(t,e,n){return t?t.concat(e).map(function(r,s){return r=Ov(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function A1(t){return Y.isArray(t)&&!t.some(Jd)}const b1=Y.toFlatObject(Y,{},null,function(e){return/^is[A-Z]/.test(e)});function Fc(t,e,n){if(!Y.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=Y.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,p){return!Y.isUndefined(p[y])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&Y.isSpecCompliantForm(e);if(!Y.isFunction(r))throw new TypeError("visitor must be a function");function c(_){if(_===null)return"";if(Y.isDate(_))return _.toISOString();if(!l&&Y.isBlob(_))throw new Be("Blob is not supported. Use a Buffer instead.");return Y.isArrayBuffer(_)||Y.isTypedArray(_)?l&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function u(_,y,p){let d=_;if(_&&!p&&typeof _=="object"){if(Y.endsWith(y,"{}"))y=i?y:y.slice(0,-2),_=JSON.stringify(_);else if(Y.isArray(_)&&A1(_)||(Y.isFileList(_)||Y.endsWith(y,"[]"))&&(d=Y.toArray(_)))return y=Ov(y),d.forEach(function(g,E){!(Y.isUndefined(g)||g===null)&&e.append(o===!0?em([y],E,s):o===null?y:y+"[]",c(g))}),!1}return Jd(_)?!0:(e.append(em(p,y,s),c(_)),!1)}const f=[],h=Object.assign(b1,{defaultVisitor:u,convertValue:c,isVisitable:Jd});function m(_,y){if(!Y.isUndefined(_)){if(f.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(_),Y.forEach(_,function(d,v){(!(Y.isUndefined(d)||d===null)&&r.call(e,d,Y.isString(v)?v.trim():v,y,h))===!0&&m(d,y?y.concat(v):[v])}),f.pop()}}if(!Y.isObject(t))throw new TypeError("data must be an object");return m(t),e}function tm(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function vh(t,e){this._pairs=[],t&&Fc(t,this,e)}const Fv=vh.prototype;Fv.append=function(e,n){this._pairs.push([e,n])};Fv.toString=function(e){const n=e?function(i){return e.call(this,i,tm)}:tm;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function R1(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kv(t,e,n){if(!e)return t;const i=n&&n.encode||R1;Y.isFunction(n)&&(n={serialize:n});const r=n&&n.serialize;let s;if(r?s=r(e,n):s=Y.isURLSearchParams(e)?e.toString():new vh(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class nm{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){Y.forEach(this.handlers,function(i){i!==null&&e(i)})}}const zv={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},C1=typeof URLSearchParams<"u"?URLSearchParams:vh,P1=typeof FormData<"u"?FormData:null,N1=typeof Blob<"u"?Blob:null,L1={isBrowser:!0,classes:{URLSearchParams:C1,FormData:P1,Blob:N1},protocols:["http","https","file","blob","url","data"]},_h=typeof window<"u"&&typeof document<"u",Qd=typeof navigator=="object"&&navigator||void 0,D1=_h&&(!Qd||["ReactNative","NativeScript","NS"].indexOf(Qd.product)<0),U1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",I1=_h&&window.location.href||"http://localhost",O1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:_h,hasStandardBrowserEnv:D1,hasStandardBrowserWebWorkerEnv:U1,navigator:Qd,origin:I1},Symbol.toStringTag,{value:"Module"})),Yt={...O1,...L1};function F1(t,e){return Fc(t,new Yt.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return Yt.isNode&&Y.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function k1(t){return Y.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function z1(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Bv(t){function e(n,i,r,s){let o=n[s++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&Y.isArray(r)?r.length:o,l?(Y.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!Y.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&Y.isArray(r[o])&&(r[o]=z1(r[o])),!a)}if(Y.isFormData(t)&&Y.isFunction(t.entries)){const n={};return Y.forEachEntry(t,(i,r)=>{e(k1(i),r,n,0)}),n}return null}function B1(t,e,n){if(Y.isString(t))try{return(e||JSON.parse)(t),Y.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Ea={transitional:zv,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=Y.isObject(e);if(s&&Y.isHTMLForm(e)&&(e=new FormData(e)),Y.isFormData(e))return r?JSON.stringify(Bv(e)):e;if(Y.isArrayBuffer(e)||Y.isBuffer(e)||Y.isStream(e)||Y.isFile(e)||Y.isBlob(e)||Y.isReadableStream(e))return e;if(Y.isArrayBufferView(e))return e.buffer;if(Y.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return F1(e,this.formSerializer).toString();if((a=Y.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Fc(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),B1(e)):e}],transformResponse:[function(e){const n=this.transitional||Ea.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(Y.isResponse(e)||Y.isReadableStream(e))return e;if(e&&Y.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?Be.from(a,Be.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Yt.classes.FormData,Blob:Yt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};Y.forEach(["delete","get","head","post","put","patch"],t=>{Ea.headers[t]={}});const H1=Y.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),V1=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&H1[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},im=Symbol("internals");function wo(t){return t&&String(t).trim().toLowerCase()}function Nl(t){return t===!1||t==null?t:Y.isArray(t)?t.map(Nl):String(t)}function G1(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const j1=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Eu(t,e,n,i,r){if(Y.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!Y.isString(e)){if(Y.isString(i))return e.indexOf(i)!==-1;if(Y.isRegExp(i))return i.test(e)}}function W1(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function X1(t,e){const n=Y.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}let pn=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=wo(l);if(!u)throw new Error("header name must be a non-empty string");const f=Y.findKey(r,u);(!f||r[f]===void 0||c===!0||c===void 0&&r[f]!==!1)&&(r[f||l]=Nl(a))}const o=(a,l)=>Y.forEach(a,(c,u)=>s(c,u,l));if(Y.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(Y.isString(e)&&(e=e.trim())&&!j1(e))o(V1(e),n);else if(Y.isHeaders(e))for(const[a,l]of e.entries())s(l,a,i);else e!=null&&s(n,e,i);return this}get(e,n){if(e=wo(e),e){const i=Y.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return G1(r);if(Y.isFunction(n))return n.call(this,r,i);if(Y.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=wo(e),e){const i=Y.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Eu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=wo(o),o){const a=Y.findKey(i,o);a&&(!n||Eu(i,i[a],a,n))&&(delete i[a],r=!0)}}return Y.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Eu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return Y.forEach(this,(r,s)=>{const o=Y.findKey(i,s);if(o){n[o]=Nl(r),delete n[s];return}const a=e?W1(s):String(s).trim();a!==s&&delete n[s],n[a]=Nl(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return Y.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&Y.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[im]=this[im]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=wo(o);i[a]||(X1(r,o),i[a]=!0)}return Y.isArray(e)?e.forEach(s):s(e),this}};pn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);Y.reduceDescriptors(pn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});Y.freezeMethods(pn);function Mu(t,e){const n=this||Ea,i=e||n,r=pn.from(i.headers);let s=i.data;return Y.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Hv(t){return!!(t&&t.__CANCEL__)}function fo(t,e,n){Be.call(this,t??"canceled",Be.ERR_CANCELED,e,n),this.name="CanceledError"}Y.inherits(fo,Be,{__CANCEL__:!0});function Vv(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Be("Request failed with status code "+n.status,[Be.ERR_BAD_REQUEST,Be.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function $1(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function q1(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let f=s,h=0;for(;f!==r;)h+=n[f++],f=f%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const m=u&&c-u;return m?Math.round(h*1e3/m):void 0}}function Y1(t,e){let n=0,i=1e3/e,r,s;const o=(c,u=Date.now())=>{n=u,r=null,s&&(clearTimeout(s),s=null),t.apply(null,c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(r=c,s||(s=setTimeout(()=>{s=null,o(r)},i-f)))},()=>r&&o(r)]}const ac=(t,e,n=3)=>{let i=0;const r=q1(50,250);return Y1(s=>{const o=s.loaded,a=s.lengthComputable?s.total:void 0,l=o-i,c=r(l),u=o<=a;i=o;const f={loaded:o,total:a,progress:a?o/a:void 0,bytes:l,rate:c||void 0,estimated:c&&a&&u?(a-o)/c:void 0,event:s,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},rm=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},sm=t=>(...e)=>Y.asap(()=>t(...e)),K1=Yt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Yt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Yt.origin),Yt.navigator&&/(msie|trident)/i.test(Yt.navigator.userAgent)):()=>!0,Z1=Yt.hasStandardBrowserEnv?{write(t,e,n,i,r,s){const o=[t+"="+encodeURIComponent(e)];Y.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),Y.isString(i)&&o.push("path="+i),Y.isString(r)&&o.push("domain="+r),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function J1(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Q1(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Gv(t,e,n){let i=!J1(e);return t&&(i||n==!1)?Q1(t,e):e}const om=t=>t instanceof pn?{...t}:t;function Kr(t,e){e=e||{};const n={};function i(c,u,f,h){return Y.isPlainObject(c)&&Y.isPlainObject(u)?Y.merge.call({caseless:h},c,u):Y.isPlainObject(u)?Y.merge({},u):Y.isArray(u)?u.slice():u}function r(c,u,f,h){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c,f,h)}else return i(c,u,f,h)}function s(c,u){if(!Y.isUndefined(u))return i(void 0,u)}function o(c,u){if(Y.isUndefined(u)){if(!Y.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(f in e)return i(c,u);if(f in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>r(om(c),om(u),f,!0)};return Y.forEach(Object.keys(Object.assign({},t,e)),function(u){const f=l[u]||r,h=f(t[u],e[u],u);Y.isUndefined(h)&&f!==a||(n[u]=h)}),n}const jv=t=>{const e=Kr({},t);let{data:n,withXSRFToken:i,xsrfHeaderName:r,xsrfCookieName:s,headers:o,auth:a}=e;e.headers=o=pn.from(o),e.url=kv(Gv(e.baseURL,e.url,e.allowAbsoluteUrls),t.params,t.paramsSerializer),a&&o.set("Authorization","Basic "+btoa((a.username||"")+":"+(a.password?unescape(encodeURIComponent(a.password)):"")));let l;if(Y.isFormData(n)){if(Yt.hasStandardBrowserEnv||Yt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[c,...u]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([c||"multipart/form-data",...u].join("; "))}}if(Yt.hasStandardBrowserEnv&&(i&&Y.isFunction(i)&&(i=i(e)),i||i!==!1&&K1(e.url))){const c=r&&s&&Z1.read(s);c&&o.set(r,c)}return e},eT=typeof XMLHttpRequest<"u",tT=eT&&function(t){return new Promise(function(n,i){const r=jv(t);let s=r.data;const o=pn.from(r.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=r,u,f,h,m,_;function y(){m&&m(),_&&_(),r.cancelToken&&r.cancelToken.unsubscribe(u),r.signal&&r.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(r.method.toUpperCase(),r.url,!0),p.timeout=r.timeout;function d(){if(!p)return;const g=pn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),R={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:g,config:t,request:p};Vv(function(w){n(w),y()},function(w){i(w),y()},R),p=null}"onloadend"in p?p.onloadend=d:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.indexOf("file:")===0)||setTimeout(d)},p.onabort=function(){p&&(i(new Be("Request aborted",Be.ECONNABORTED,t,p)),p=null)},p.onerror=function(){i(new Be("Network Error",Be.ERR_NETWORK,t,p)),p=null},p.ontimeout=function(){let E=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const R=r.transitional||zv;r.timeoutErrorMessage&&(E=r.timeoutErrorMessage),i(new Be(E,R.clarifyTimeoutError?Be.ETIMEDOUT:Be.ECONNABORTED,t,p)),p=null},s===void 0&&o.setContentType(null),"setRequestHeader"in p&&Y.forEach(o.toJSON(),function(E,R){p.setRequestHeader(R,E)}),Y.isUndefined(r.withCredentials)||(p.withCredentials=!!r.withCredentials),a&&a!=="json"&&(p.responseType=r.responseType),c&&([h,_]=ac(c,!0),p.addEventListener("progress",h)),l&&p.upload&&([f,m]=ac(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(u=g=>{p&&(i(!g||g.type?new fo(null,t,p):g),p.abort(),p=null)},r.cancelToken&&r.cancelToken.subscribe(u),r.signal&&(r.signal.aborted?u():r.signal.addEventListener("abort",u)));const v=$1(r.url);if(v&&Yt.protocols.indexOf(v)===-1){i(new Be("Unsupported protocol "+v+":",Be.ERR_BAD_REQUEST,t));return}p.send(s||null)})},nT=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let i=new AbortController,r;const s=function(c){if(!r){r=!0,a();const u=c instanceof Error?c:this.reason;i.abort(u instanceof Be?u:new fo(u instanceof Error?u.message:u))}};let o=e&&setTimeout(()=>{o=null,s(new Be(`timeout ${e} of ms exceeded`,Be.ETIMEDOUT))},e);const a=()=>{t&&(o&&clearTimeout(o),o=null,t.forEach(c=>{c.unsubscribe?c.unsubscribe(s):c.removeEventListener("abort",s)}),t=null)};t.forEach(c=>c.addEventListener("abort",s));const{signal:l}=i;return l.unsubscribe=()=>Y.asap(a),l}},iT=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},rT=async function*(t,e){for await(const n of sT(t))yield*iT(n,e)},sT=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},am=(t,e,n,i)=>{const r=rT(t,e);let s=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await r.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let h=s+=f;n(h)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),r.return()}},{highWaterMark:2})},kc=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Wv=kc&&typeof ReadableStream=="function",oT=kc&&(typeof TextEncoder=="function"?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Xv=(t,...e)=>{try{return!!t(...e)}catch{return!1}},aT=Wv&&Xv(()=>{let t=!1;const e=new Request(Yt.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e}),lm=64*1024,ef=Wv&&Xv(()=>Y.isReadableStream(new Response("").body)),lc={stream:ef&&(t=>t.body)};kc&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach(e=>{!lc[e]&&(lc[e]=Y.isFunction(t[e])?n=>n[e]():(n,i)=>{throw new Be(`Response type '${e}' is not supported`,Be.ERR_NOT_SUPPORT,i)})})})(new Response);const lT=async t=>{if(t==null)return 0;if(Y.isBlob(t))return t.size;if(Y.isSpecCompliantForm(t))return(await new Request(Yt.origin,{method:"POST",body:t}).arrayBuffer()).byteLength;if(Y.isArrayBufferView(t)||Y.isArrayBuffer(t))return t.byteLength;if(Y.isURLSearchParams(t)&&(t=t+""),Y.isString(t))return(await oT(t)).byteLength},cT=async(t,e)=>{const n=Y.toFiniteNumber(t.getContentLength());return n??lT(e)},uT=kc&&(async t=>{let{url:e,method:n,data:i,signal:r,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:l,responseType:c,headers:u,withCredentials:f="same-origin",fetchOptions:h}=jv(t);c=c?(c+"").toLowerCase():"text";let m=nT([r,s&&s.toAbortSignal()],o),_;const y=m&&m.unsubscribe&&(()=>{m.unsubscribe()});let p;try{if(l&&aT&&n!=="get"&&n!=="head"&&(p=await cT(u,i))!==0){let R=new Request(e,{method:"POST",body:i,duplex:"half"}),A;if(Y.isFormData(i)&&(A=R.headers.get("content-type"))&&u.setContentType(A),R.body){const[w,D]=rm(p,ac(sm(l)));i=am(R.body,lm,w,D)}}Y.isString(f)||(f=f?"include":"omit");const d="credentials"in Request.prototype;_=new Request(e,{...h,signal:m,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:i,duplex:"half",credentials:d?f:void 0});let v=await fetch(_);const g=ef&&(c==="stream"||c==="response");if(ef&&(a||g&&y)){const R={};["status","statusText","headers"].forEach($=>{R[$]=v[$]});const A=Y.toFiniteNumber(v.headers.get("content-length")),[w,D]=a&&rm(A,ac(sm(a),!0))||[];v=new Response(am(v.body,lm,w,()=>{D&&D(),y&&y()}),R)}c=c||"text";let E=await lc[Y.findKey(lc,c)||"text"](v,t);return!g&&y&&y(),await new Promise((R,A)=>{Vv(R,A,{data:E,headers:pn.from(v.headers),status:v.status,statusText:v.statusText,config:t,request:_})})}catch(d){throw y&&y(),d&&d.name==="TypeError"&&/fetch/i.test(d.message)?Object.assign(new Be("Network Error",Be.ERR_NETWORK,t,_),{cause:d.cause||d}):Be.from(d,d&&d.code,t,_)}}),tf={http:T1,xhr:tT,fetch:uT};Y.forEach(tf,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const cm=t=>`- ${t}`,dT=t=>Y.isFunction(t)||t===null||t===!1,$v={getAdapter:t=>{t=Y.isArray(t)?t:[t];const{length:e}=t;let n,i;const r={};for(let s=0;s<e;s++){n=t[s];let o;if(i=n,!dT(n)&&(i=tf[(o=String(n)).toLowerCase()],i===void 0))throw new Be(`Unknown adapter '${o}'`);if(i)break;r[o||"#"+s]=i}if(!i){const s=Object.entries(r).map(([a,l])=>`adapter ${a} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(cm).join(`
`):" "+cm(s[0]):"as no adapter specified";throw new Be("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return i},adapters:tf};function wu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new fo(null,t)}function um(t){return wu(t),t.headers=pn.from(t.headers),t.data=Mu.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),$v.getAdapter(t.adapter||Ea.adapter)(t).then(function(i){return wu(t),i.data=Mu.call(t,t.transformResponse,i),i.headers=pn.from(i.headers),i},function(i){return Hv(i)||(wu(t),i&&i.response&&(i.response.data=Mu.call(t,t.transformResponse,i.response),i.response.headers=pn.from(i.response.headers))),Promise.reject(i)})}const qv="1.8.4",zc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{zc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const dm={};zc.transitional=function(e,n,i){function r(s,o){return"[Axios v"+qv+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new Be(r(o," has been removed"+(n?" in "+n:"")),Be.ERR_DEPRECATED);return n&&!dm[o]&&(dm[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};zc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function fT(t,e,n){if(typeof t!="object")throw new Be("options must be an object",Be.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new Be("option "+s+" must be "+l,Be.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Be("Unknown option "+s,Be.ERR_BAD_OPTION)}}const Ll={assertOptions:fT,validators:zc},Zn=Ll.validators;let Hr=class{constructor(e){this.defaults=e,this.interceptors={request:new nm,response:new nm}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack?r.stack.replace(/^.+\n/,""):"";try{i.stack?s&&!String(i.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+s):i.stack=s}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Kr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ll.assertOptions(i,{silentJSONParsing:Zn.transitional(Zn.boolean),forcedJSONParsing:Zn.transitional(Zn.boolean),clarifyTimeoutError:Zn.transitional(Zn.boolean)},!1),r!=null&&(Y.isFunction(r)?n.paramsSerializer={serialize:r}:Ll.assertOptions(r,{encode:Zn.function,serialize:Zn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ll.assertOptions(n,{baseUrl:Zn.spelling("baseURL"),withXsrfToken:Zn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&Y.merge(s.common,s[n.method]);s&&Y.forEach(["delete","get","head","post","put","patch","common"],_=>{delete s[_]}),n.headers=pn.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let u,f=0,h;if(!l){const _=[um.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,c),h=_.length,u=Promise.resolve(n);f<h;)u=u.then(_[f++],_[f++]);return u}h=a.length;let m=n;for(f=0;f<h;){const _=a[f++],y=a[f++];try{m=_(m)}catch(p){y.call(this,p);break}}try{u=um.call(this,m)}catch(_){return Promise.reject(_)}for(f=0,h=c.length;f<h;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=Kr(this.defaults,e);const n=Gv(e.baseURL,e.url,e.allowAbsoluteUrls);return kv(n,e.params,e.paramsSerializer)}};Y.forEach(["delete","get","head","options"],function(e){Hr.prototype[e]=function(n,i){return this.request(Kr(i||{},{method:e,url:n,data:(i||{}).data}))}});Y.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Kr(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Hr.prototype[e]=n(),Hr.prototype[e+"Form"]=n(!0)});let hT=class Yv{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new fo(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new Yv(function(r){e=r}),cancel:e}}};function pT(t){return function(n){return t.apply(null,n)}}function mT(t){return Y.isObject(t)&&t.isAxiosError===!0}const nf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(nf).forEach(([t,e])=>{nf[e]=t});function Kv(t){const e=new Hr(t),n=bv(Hr.prototype.request,e);return Y.extend(n,Hr.prototype,e,{allOwnKeys:!0}),Y.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Kv(Kr(t,r))},n}const xt=Kv(Ea);xt.Axios=Hr;xt.CanceledError=fo;xt.CancelToken=hT;xt.isCancel=Hv;xt.VERSION=qv;xt.toFormData=Fc;xt.AxiosError=Be;xt.Cancel=xt.CanceledError;xt.all=function(e){return Promise.all(e)};xt.spread=pT;xt.isAxiosError=mT;xt.mergeConfig=Kr;xt.AxiosHeaders=pn;xt.formToJSON=t=>Bv(Y.isHTMLForm(t)?new FormData(t):t);xt.getAdapter=$v.getAdapter;xt.HttpStatusCode=nf;xt.default=xt;const{Axios:gN,AxiosError:xN,CanceledError:vN,isCancel:_N,CancelToken:yN,VERSION:SN,all:EN,Cancel:MN,isAxiosError:wN,spread:TN,toFormData:AN,AxiosHeaders:bN,HttpStatusCode:RN,formToJSON:CN,getAdapter:PN,mergeConfig:NN}=xt,gT="ERjJoT94jnvKTwIsR1QUv1hWGXGVFN9bRSD2rXAfylYigCxrYPe6y3Zb",xT="https://api.pexels.com/v1",vT=xt.create({baseURL:xT,headers:{Authorization:gT}}),_T=async(t,e=1,n=15)=>{try{return(await vT.get("/search",{params:{query:t,page:e,per_page:n}})).data}catch(i){throw console.error("Error searching photos:",i),i}},yT=({query:t="heritage",perPage:e=12})=>{const[n,i]=F.useState([]),[r,s]=F.useState(!0),[o,a]=F.useState(null);return F.useEffect(()=>{(async()=>{try{s(!0);const c=await _T(t,1,e);i(c.photos),a(null)}catch(c){a("Failed to load photos. Please try again later."),console.error(c)}finally{s(!1)}})()},[t,e]),r?x.jsx("div",{className:"flex justify-center items-center h-64",children:x.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):o?x.jsx("div",{className:"text-center text-red-500 p-4",children:o}):x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",children:n.map(l=>x.jsxs("div",{className:"relative group",children:[x.jsx("img",{src:l.src.medium,alt:l.alt,className:"w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"}),x.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-lg",children:x.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300",children:[x.jsx("p",{className:"text-sm font-medium",children:"Photo by"}),x.jsx("a",{href:l.photographer_url,target:"_blank",rel:"noopener noreferrer",className:"text-sm hover:underline",children:l.photographer})]})})]},l.id))})},ST=()=>{const t=[{id:1,title:"Taj Mahal",location:"Agra, India",image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",category:"UNESCO World Heritage"},{id:2,title:"Petra",location:"Ma'an, Jordan",image:"https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",category:"World Wonder"},{id:3,title:"Machu Picchu",location:"Cusco, Peru",image:"https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",category:"Archaeological Site"}];return x.jsxs("div",{className:"min-h-screen bg-gray-50",children:[x.jsxs("div",{className:"relative h-[60vh] bg-gray-900",children:[x.jsx("div",{className:"absolute inset-0 bg-black/50 z-10"}),x.jsxs("div",{className:"absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-4",children:[x.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 text-center",children:"Explore Cultural Heritage"}),x.jsx("p",{className:"text-xl md:text-2xl mb-8 text-center max-w-2xl",children:"Discover and experience the world's most fascinating cultural sites through immersive virtual tours"}),x.jsx(Sn,{to:"/heritage-sites",className:"bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors",children:"Start Exploring"})]})]}),x.jsxs("div",{className:"max-w-7xl mx-auto px-4 py-12",children:[x.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-8 text-center",children:"Featured Cultural Sites"}),x.jsx(yT,{query:"cultural heritage site",perPage:8})]}),x.jsx("div",{className:"bg-white py-16",children:x.jsx("div",{className:"max-w-7xl mx-auto px-4",children:x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"text-center p-6",children:[x.jsx("div",{className:"text-4xl mb-4",children:"🌍"}),x.jsx("h3",{className:"text-xl font-bold mb-2",children:"Global Access"}),x.jsx("p",{className:"text-gray-600",children:"Explore cultural sites from around the world without leaving your home"})]}),x.jsxs("div",{className:"text-center p-6",children:[x.jsx("div",{className:"text-4xl mb-4",children:"🎯"}),x.jsx("h3",{className:"text-xl font-bold mb-2",children:"Interactive Tours"}),x.jsx("p",{className:"text-gray-600",children:"Navigate through sites with interactive hotspots and audio guides"})]}),x.jsxs("div",{className:"text-center p-6",children:[x.jsx("div",{className:"text-4xl mb-4",children:"🎮"}),x.jsx("h3",{className:"text-xl font-bold mb-2",children:"VR Ready"}),x.jsx("p",{className:"text-gray-600",children:"Experience sites in virtual reality for an immersive journey"})]})]})})}),x.jsx("div",{className:"bg-white py-16 sm:py-24",children:x.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"text-center mb-12",children:[x.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-4",children:"Experience Heritage Like Never Before"}),x.jsx("p",{className:"text-lg text-gray-600 max-w-3xl mx-auto",children:"Immerse yourself in cultural heritage through our interactive platform"})]}),x.jsxs("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4",children:[x.jsxs("div",{className:"relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200",children:[x.jsx("div",{className:"absolute top-6 right-6",children:x.jsx(ca,{className:"h-8 w-8 text-blue-600"})}),x.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-900",children:"Virtual Tours"}),x.jsx("p",{className:"mt-2 text-gray-600",children:"Explore cultural sites through immersive 360° virtual tours"})]}),x.jsxs("div",{className:"relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200",children:[x.jsx("div",{className:"absolute top-6 right-6",children:x.jsx(Ev,{className:"h-8 w-8 text-blue-600"})}),x.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-900",children:"Heritage Sites"}),x.jsx("p",{className:"mt-2 text-gray-600",children:"Discover historical landmarks and cultural monuments"})]}),x.jsxs("div",{className:"relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200",children:[x.jsx("div",{className:"absolute top-6 right-6",children:x.jsx(oc,{className:"h-8 w-8 text-blue-600"})}),x.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-900",children:"Interactive Content"}),x.jsx("p",{className:"mt-2 text-gray-600",children:"Engage with multimedia content and virtual exhibits"})]}),x.jsxs("div",{className:"relative p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200",children:[x.jsx("div",{className:"absolute top-6 right-6",children:x.jsx(Kd,{className:"h-8 w-8 text-blue-600"})}),x.jsx("h3",{className:"mt-8 text-xl font-semibold text-gray-900",children:"Community"}),x.jsx("p",{className:"mt-2 text-gray-600",children:"Connect with heritage enthusiasts and share experiences"})]})]})]})}),x.jsx("div",{className:"bg-gray-50 py-16 sm:py-24",children:x.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[x.jsxs("div",{className:"flex justify-between items-center mb-12",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-gray-900 mb-4",children:"Featured Heritage Sites"}),x.jsx("p",{className:"text-lg text-gray-600",children:"Explore some of the world's most remarkable cultural sites"})]}),x.jsxs(Sn,{to:"/heritage-sites",className:"hidden sm:flex items-center text-blue-600 hover:text-blue-700 font-semibold",children:["View All Sites",x.jsx(Jp,{className:"ml-2 h-5 w-5"})]})]}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(e=>x.jsxs("div",{className:"bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200",children:[x.jsxs("div",{className:"relative h-48 sm:h-64",children:[x.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover",loading:"lazy"}),x.jsx("div",{className:"absolute top-4 left-4",children:x.jsx("span",{className:"bg-white/90 backdrop-blur-sm text-blue-600 text-sm font-medium px-3 py-1 rounded-full",children:e.category})})]}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:e.title}),x.jsxs("div",{className:"flex items-center text-gray-600 mb-4",children:[x.jsx(Dc,{className:"h-5 w-5 mr-2"}),x.jsx("span",{children:e.location})]}),x.jsxs(Sn,{to:`/heritage-sites/${e.id}`,className:"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium",children:["Explore Site",x.jsx(Jp,{className:"ml-2 h-5 w-5"})]})]})]},e.id))}),x.jsx("div",{className:"mt-8 text-center sm:hidden",children:x.jsx(Sn,{to:"/heritage-sites",className:"inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-200",children:"View All Sites"})})]})}),x.jsx("div",{className:"bg-blue-600",children:x.jsx("div",{className:"mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8",children:x.jsxs("div",{className:"text-center",children:[x.jsx("h2",{className:"text-3xl sm:text-4xl font-bold text-white mb-6",children:"Ready to Start Your Cultural Journey?"}),x.jsx("p",{className:"text-lg text-blue-100 mb-8 max-w-2xl mx-auto",children:"Join our community of heritage enthusiasts and start exploring cultural sites from around the world"}),x.jsx(Sn,{to:"/virtual-tours",className:"inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg hover:shadow-xl",children:"Begin Your Adventure"})]})})})]})};function ET(){return x.jsx("div",{className:"min-h-screen bg-gray-50 py-16",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"About Culture Sphere"}),x.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We're dedicated to preserving and sharing cultural heritage through immersive virtual experiences."})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 mb-16",children:[x.jsxs("div",{children:[x.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Mission"}),x.jsx("p",{className:"text-gray-600 mb-6",children:"Culture Sphere aims to make cultural heritage accessible to everyone, everywhere. Through our innovative 360° virtual tours, we bring historical sites, museums, and cultural landmarks to life, allowing people to explore and learn about different cultures from the comfort of their homes."}),x.jsx("p",{className:"text-gray-600",children:"We work closely with cultural institutions, historians, and local communities to create accurate and engaging virtual experiences that preserve and share the stories of our shared human heritage."})]}),x.jsxs("div",{children:[x.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Our Technology"}),x.jsx("p",{className:"text-gray-600 mb-6",children:"Using cutting-edge 360° photography and virtual reality technology, we create immersive experiences that allow users to explore cultural sites in unprecedented detail. Our platform features:"}),x.jsxs("ul",{className:"space-y-3 text-gray-600",children:[x.jsxs("li",{className:"flex items-start",children:[x.jsx("span",{className:"text-indigo-600 mr-2",children:"•"}),"High-resolution 360° panoramas"]}),x.jsxs("li",{className:"flex items-start",children:[x.jsx("span",{className:"text-indigo-600 mr-2",children:"•"}),"Interactive hotspots with detailed information"]}),x.jsxs("li",{className:"flex items-start",children:[x.jsx("span",{className:"text-indigo-600 mr-2",children:"•"}),"Audio guides and expert commentary"]}),x.jsxs("li",{className:"flex items-start",children:[x.jsx("span",{className:"text-indigo-600 mr-2",children:"•"}),"Responsive design for all devices"]})]})]})]}),x.jsxs("div",{className:"bg-white rounded-lg shadow-lg p-8",children:[x.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-6",children:"Our Team"}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"}),x.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Sarah Johnson"}),x.jsx("p",{className:"text-gray-600",children:"Cultural Heritage Specialist"})]}),x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"}),x.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Michael Chen"}),x.jsx("p",{className:"text-gray-600",children:"Technical Director"})]}),x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"}),x.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:"Emma Rodriguez"}),x.jsx("p",{className:"text-gray-600",children:"Content Curator"})]})]})]})]})})}function MT(){return x.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-16",children:x.jsxs("div",{className:"container mx-auto px-4 max-w-6xl",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Get in Touch"}),x.jsx("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"Have questions about cultural heritage? We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16",children:[x.jsxs("div",{className:"space-y-8",children:[x.jsx("div",{className:"bg-white p-8 rounded-2xl shadow-lg",children:x.jsxs("div",{className:"space-y-8",children:[x.jsxs("div",{className:"flex items-start group",children:[x.jsx("div",{className:"flex-shrink-0",children:x.jsx("div",{className:"p-4 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors",children:x.jsx(_w,{className:"w-6 h-6 text-blue-600"})})}),x.jsxs("div",{className:"ml-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-1",children:"Email Us"}),x.jsx("p",{className:"text-gray-600",children:"info@culturesphere.com"}),x.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"We'll respond within 24 hours"})]})]}),x.jsxs("div",{className:"flex items-start group",children:[x.jsx("div",{className:"flex-shrink-0",children:x.jsx("div",{className:"p-4 bg-green-100 rounded-xl group-hover:bg-green-200 transition-colors",children:x.jsx(Tv,{className:"w-6 h-6 text-green-600"})})}),x.jsxs("div",{className:"ml-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-1",children:"Call Us"}),x.jsx("p",{className:"text-gray-600",children:"+1 (555) 123-4567"}),x.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Mon-Fri from 9am to 6pm"})]})]}),x.jsxs("div",{className:"flex items-start group",children:[x.jsx("div",{className:"flex-shrink-0",children:x.jsx("div",{className:"p-4 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors",children:x.jsx(Dc,{className:"w-6 h-6 text-purple-600"})})}),x.jsxs("div",{className:"ml-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-1",children:"Visit Us"}),x.jsxs("p",{className:"text-gray-600",children:["123 Cultural Heritage Street",x.jsx("br",{}),"Heritage City, HC 12345",x.jsx("br",{}),"United States"]})]})]})]})}),x.jsx("div",{className:"bg-white p-8 rounded-2xl shadow-lg",children:x.jsxs("div",{className:"grid grid-cols-2 gap-6",children:[x.jsxs("div",{className:"flex items-center space-x-3",children:[x.jsx("div",{className:"p-3 bg-amber-100 rounded-lg",children:x.jsx(ca,{className:"w-5 h-5 text-amber-600"})}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-medium text-gray-900",children:"Global"}),x.jsx("p",{className:"text-sm text-gray-500",children:"Worldwide Support"})]})]}),x.jsxs("div",{className:"flex items-center space-x-3",children:[x.jsx("div",{className:"p-3 bg-rose-100 rounded-lg",children:x.jsx(Mv,{className:"w-5 h-5 text-rose-600"})}),x.jsxs("div",{children:[x.jsx("h4",{className:"font-medium text-gray-900",children:"24/7"}),x.jsx("p",{className:"text-sm text-gray-500",children:"Online Support"})]})]})]})})]}),x.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-lg",children:[x.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-8",children:"Send us a Message"}),x.jsxs("form",{className:"space-y-6",children:[x.jsxs("div",{children:[x.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),x.jsx("input",{type:"text",id:"name",name:"name",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow",placeholder:"John Doe",required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),x.jsx("input",{type:"email",id:"email",name:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow",placeholder:"john@example.com",required:!0})]}),x.jsxs("div",{children:[x.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Your Message"}),x.jsx("textarea",{id:"message",name:"message",rows:6,className:"w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow",placeholder:"Tell us how we can help you...",required:!0})]}),x.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all hover:shadow-lg",children:"Send Message"})]})]})]})]})})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yh="161",is={ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},wT=0,fm=1,TT=2,Zv=1,AT=2,_i=3,ur=0,mn=1,ni=2,sr=0,Hs=1,hm=2,pm=3,mm=4,bT=5,Lr=100,RT=101,CT=102,gm=103,xm=104,PT=200,NT=201,LT=202,DT=203,rf=204,sf=205,UT=206,IT=207,OT=208,FT=209,kT=210,zT=211,BT=212,HT=213,VT=214,GT=0,jT=1,WT=2,cc=3,XT=4,$T=5,qT=6,YT=7,Jv=0,KT=1,ZT=2,or=0,JT=1,QT=2,eA=3,tA=4,nA=5,iA=6,Qv=300,Zs=301,Js=302,of=303,af=304,Bc=306,lf=1e3,jn=1001,cf=1002,tn=1003,vm=1004,To=1005,$t=1006,Tu=1007,kr=1008,ar=1009,rA=1010,sA=1011,Sh=1012,e_=1013,Ki=1014,Ei=1015,da=1016,t_=1017,n_=1018,Vr=1020,oA=1021,Wn=1023,aA=1024,lA=1025,Gr=1026,Qs=1027,cA=1028,i_=1029,uA=1030,r_=1031,s_=1033,Au=33776,bu=33777,Ru=33778,Cu=33779,_m=35840,ym=35841,Sm=35842,Em=35843,o_=36196,Mm=37492,wm=37496,Tm=37808,Am=37809,bm=37810,Rm=37811,Cm=37812,Pm=37813,Nm=37814,Lm=37815,Dm=37816,Um=37817,Im=37818,Om=37819,Fm=37820,km=37821,Pu=36492,zm=36494,Bm=36495,dA=36283,Hm=36284,Vm=36285,Gm=36286,a_=3e3,jr=3001,fA=3200,hA=3201,pA=0,mA=1,Ln="",kt="srgb",Di="srgb-linear",Eh="display-p3",Hc="display-p3-linear",uc="linear",ct="srgb",dc="rec709",fc="p3",ss=7680,jm=519,gA=512,xA=513,vA=514,l_=515,_A=516,yA=517,SA=518,EA=519,Wm=35044,Xm="300 es",uf=1035,Ti=2e3,hc=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dl=Math.PI/180,df=180/Math.PI;function Ma(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function MA(t,e){return(t%e+e)%e}function Nu(t,e,n){return(1-n)*t+n*e}function $m(t){return(t&t-1)===0&&t!==0}function ff(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ao(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const wA={DEG2RAD:Dl};class ze{constructor(e=0,n=0){ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $e{constructor(e,n,i,r,s,o,a,l,c){$e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],y=r[0],p=r[3],d=r[6],v=r[1],g=r[4],E=r[7],R=r[2],A=r[5],w=r[8];return s[0]=o*y+a*v+l*R,s[3]=o*p+a*g+l*A,s[6]=o*d+a*E+l*w,s[1]=c*y+u*v+f*R,s[4]=c*p+u*g+f*A,s[7]=c*d+u*E+f*w,s[2]=h*y+m*v+_*R,s[5]=h*p+m*g+_*A,s[8]=h*d+m*E+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,m=c*s-o*l,_=n*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lu.makeScale(e,n)),this}rotate(e){return this.premultiply(Lu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lu=new $e;function c_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function TA(){const t=fa("canvas");return t.style.display="block",t}const qm={};function Vs(t){t in qm||(qm[t]=!0,console.warn(t))}const Ym=new $e().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Km=new $e().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xa={[Di]:{transfer:uc,primaries:dc,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:ct,primaries:dc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Hc]:{transfer:uc,primaries:fc,toReference:t=>t.applyMatrix3(Km),fromReference:t=>t.applyMatrix3(Ym)},[Eh]:{transfer:ct,primaries:fc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Km),fromReference:t=>t.applyMatrix3(Ym).convertLinearToSRGB()}},AA=new Set([Di,Hc]),it={enabled:!0,_workingColorSpace:Di,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!AA.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Xa[e].toReference,r=Xa[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Xa[t].primaries},getTransfer:function(t){return t===Ln?uc:Xa[t].transfer}};function Gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class u_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=fa("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gs(n[i]/255)*255):n[i]=Gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bA=0;class d_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bA++}),this.uuid=Ma(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uu(r[o].image)):s.push(Uu(r[o]))}else s=Uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?u_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RA=0;class Kt extends ts{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=jn,r=jn,s=$t,o=kr,a=Wn,l=ar,c=Kt.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=Ma(),this.name="",this.source=new d_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===jr?kt:Ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lf:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case cf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lf:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case cf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?jr:a_}set encoding(e){Vs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===jr?kt:Ln}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=Qv;Kt.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],y=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,E=(m+1)/2,R=(d+1)/2,A=(u+h)/4,w=(f+y)/4,D=(_+p)/4;return g>E&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):E>R?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=w/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(f-y)/v,this.z=(h-u)/v,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CA extends ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Vs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===jr?kt:Ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new d_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends CA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class f_ extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PA extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ui{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=y;return}if(f!==y||l!==h||c!==m||u!==_){let p=1-a;const d=l*h+c*m+u*_+f*y,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,d*v);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const E=a*v;if(l=l*p+h*E,c=c*p+m*E,u=u*p+_*E,f=f*p+y*E,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],m=s[o+2],_=s[o+3];return e[n]=a*_+u*f+l*m-c*h,e[n+1]=l*_+u*h+c*f-a*m,e[n+2]=c*_+u*m+a*h-l*f,e[n+3]=u*_-a*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>f){const m=2*Math.sqrt(1+i-a-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>f){const m=2*Math.sqrt(1+a-i-f);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-n;return this._w=m*o+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Iu.copy(this).projectOnVector(e),this.sub(Iu)}reflect(e){return this.sub(Iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Iu=new O,Zm=new Ui;class wa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),qa.subVectors(this.max,bo),as.subVectors(e.a,bo),ls.subVectors(e.b,bo),cs.subVectors(e.c,bo),Fi.subVectors(ls,as),ki.subVectors(cs,ls),_r.subVectors(as,cs);let n=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-_r.z,_r.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,_r.z,0,-_r.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-_r.y,_r.x,0];return!Ou(n,as,ls,cs,qa)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,as,ls,cs,qa))?!1:(Ya.crossVectors(Fi,ki),n=[Ya.x,Ya.y,Ya.z],Ou(n,as,ls,cs,qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const hi=[new O,new O,new O,new O,new O,new O,new O,new O],kn=new O,$a=new wa,as=new O,ls=new O,cs=new O,Fi=new O,ki=new O,_r=new O,bo=new O,qa=new O,Ya=new O,yr=new O;function Ou(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){yr.fromArray(t,s);const a=r.x*Math.abs(yr.x)+r.y*Math.abs(yr.y)+r.z*Math.abs(yr.z),l=e.dot(yr),c=n.dot(yr),u=i.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const NA=new wa,Ro=new O,Fu=new O;class Mh{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):NA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const n=Ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Fu)),this.expandByPoint(Ro.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new O,ku=new O,Ka=new O,zi=new O,zu=new O,Za=new O,Bu=new O;class wh{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=pi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,n),pi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ku.copy(e).add(n).multiplyScalar(.5),Ka.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(ku);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Ka),a=zi.dot(this.direction),l=-zi.dot(Ka),c=zi.lengthSq(),u=Math.abs(1-o*o);let f,h,m,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const y=1/u;f*=y,h*=y,m=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ku).addScaledVector(Ka,h),m}intersectSphere(e,n){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),r=pi.dot(pi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,n,i,r,s){zu.subVectors(n,e),Za.subVectors(i,e),Bu.crossVectors(zu,Za);let o=this.direction.dot(Bu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=a*this.direction.dot(Za.crossVectors(zi,Za));if(l<0)return null;const c=a*this.direction.dot(zu.cross(zi));if(c<0||l+c>o)return null;const u=-a*zi.dot(Bu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,r,s,o,a,l,c,u,f,h,m,_,y,p){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,m,_,y,p)}set(e,n,i,r,s,o,a,l,c,u,f,h,m,_,y,p){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=_,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,m=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=m+_*c,n[5]=h-y*c,n[9]=-a*l,n[2]=y-h*c,n[6]=_+m*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,y=c*f;n[0]=h+y*a,n[4]=_*a-m,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=m*a-_,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,y=c*f;n[0]=h-y*a,n[4]=-o*f,n[8]=_+m*a,n[1]=m+_*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,m=o*f,_=a*u,y=a*f;n[0]=l*u,n[4]=_*c-m,n[8]=h*c+y,n[1]=l*f,n[5]=y*c+h,n[9]=m*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-h*f,n[8]=_*f+m,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=m*f+_,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,m=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+y,n[5]=o*u,n[9]=m*f-_,n[2]=_*f-m,n[6]=a*u,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LA,e,DA)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Bi.crossVectors(i,xn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Bi.crossVectors(i,xn)),Bi.normalize(),Ja.crossVectors(xn,Bi),r[0]=Bi.x,r[4]=Ja.x,r[8]=xn.x,r[1]=Bi.y,r[5]=Ja.y,r[9]=xn.y,r[2]=Bi.z,r[6]=Ja.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],y=i[6],p=i[10],d=i[14],v=i[3],g=i[7],E=i[11],R=i[15],A=r[0],w=r[4],D=r[8],$=r[12],S=r[1],P=r[5],Z=r[9],ee=r[13],L=r[2],q=r[6],G=r[10],Q=r[14],U=r[3],H=r[7],I=r[11],K=r[15];return s[0]=o*A+a*S+l*L+c*U,s[4]=o*w+a*P+l*q+c*H,s[8]=o*D+a*Z+l*G+c*I,s[12]=o*$+a*ee+l*Q+c*K,s[1]=u*A+f*S+h*L+m*U,s[5]=u*w+f*P+h*q+m*H,s[9]=u*D+f*Z+h*G+m*I,s[13]=u*$+f*ee+h*Q+m*K,s[2]=_*A+y*S+p*L+d*U,s[6]=_*w+y*P+p*q+d*H,s[10]=_*D+y*Z+p*G+d*I,s[14]=_*$+y*ee+p*Q+d*K,s[3]=v*A+g*S+E*L+R*U,s[7]=v*w+g*P+E*q+R*H,s[11]=v*D+g*Z+E*G+R*I,s[15]=v*$+g*ee+E*Q+R*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],y=e[7],p=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*m-i*l*m)+y*(+n*l*m-n*c*h+s*o*h-r*o*m+r*c*u-s*l*u)+p*(+n*c*f-n*a*m-s*o*f+i*o*m+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],y=e[13],p=e[14],d=e[15],v=f*p*c-y*h*c+y*l*m-a*p*m-f*l*d+a*h*d,g=_*h*c-u*p*c-_*l*m+o*p*m+u*l*d-o*h*d,E=u*y*c-_*f*c+_*a*m-o*y*m-u*a*d+o*f*d,R=_*f*l-u*y*l-_*a*h+o*y*h+u*a*p-o*f*p,A=n*v+i*g+r*E+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(y*h*s-f*p*s-y*r*m+i*p*m+f*r*d-i*h*d)*w,e[2]=(a*p*s-y*l*s+y*r*c-i*p*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*m-i*l*m)*w,e[4]=g*w,e[5]=(u*p*s-_*h*s+_*r*m-n*p*m-u*r*d+n*h*d)*w,e[6]=(_*l*s-o*p*s-_*r*c+n*p*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*m+n*l*m)*w,e[8]=E*w,e[9]=(_*f*s-u*y*s-_*i*m+n*y*m+u*i*d-n*f*d)*w,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*m-n*a*m)*w,e[12]=R*w,e[13]=(u*y*r-_*f*r+_*i*h-n*y*h-u*i*p+n*f*p)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*p-n*a*p)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,m=s*u,_=s*f,y=o*u,p=o*f,d=a*f,v=l*c,g=l*u,E=l*f,R=i.x,A=i.y,w=i.z;return r[0]=(1-(y+d))*R,r[1]=(m+E)*R,r[2]=(_-g)*R,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(h+d))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+g)*w,r[9]=(p-v)*w,r[10]=(1-(h+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,u=1/o,f=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ti){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let m,_;if(a===Ti)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===hc)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ti){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,m=(i+r)*u;let _,y;if(a===Ti)_=(o+s)*f,y=-2*f;else if(a===hc)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new O,zn=new It,LA=new O(0,0,0),DA=new O(1,1,1),Bi=new O,Ja=new O,xn=new O,Jm=new It,Qm=new Ui;class eo{constructor(e=0,n=0,i=0,r=eo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}eo.DEFAULT_ORDER="XYZ";class Th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let UA=0;const eg=new O,ds=new Ui,mi=new It,Qa=new O,Co=new O,IA=new O,OA=new Ui,tg=new O(1,0,0),ng=new O(0,1,0),ig=new O(0,0,1),FA={type:"added"},kA={type:"removed"};class sn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UA++}),this.uuid=Ma(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new O,n=new eo,i=new Ui,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new $e}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,n){return ds.setFromAxisAngle(e,n),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,n){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Co,Qa,this.up):mi.lookAt(Qa,Co,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),ds.setFromRotationMatrix(mi),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(FA)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(kA)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,IA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,OA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}sn.DEFAULT_UP=new O(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new O,gi=new O,Hu=new O,xi=new O,fs=new O,hs=new O,rg=new O,Vu=new O,Gu=new O,ju=new O;class ii{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),gi.subVectors(i,n),Hu.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(Hu),c=gi.dot(gi),u=gi.dot(Hu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),gi.subVectors(e,n),Bn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;fs.subVectors(r,i),hs.subVectors(s,i),Vu.subVectors(e,i);const l=fs.dot(Vu),c=hs.dot(Vu);if(l<=0&&c<=0)return n.copy(i);Gu.subVectors(e,r);const u=fs.dot(Gu),f=hs.dot(Gu);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(fs,o);ju.subVectors(e,s);const m=fs.dot(ju),_=hs.dot(ju);if(_>=0&&m<=_)return n.copy(s);const y=m*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(hs,a);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return rg.subVectors(s,r),a=(f-u)/(f-u+(m-_)),n.copy(r).addScaledVector(rg,a);const d=1/(p+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(fs,o).addScaledVector(hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const h_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},el={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=MA(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Wu(o,s,e+1/3),this.g=Wu(o,s,e),this.b=Wu(o,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=h_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return it.fromWorkingColorSpace(Xt.copy(this),e),Math.round(nn(Xt.r*255,0,255))*65536+Math.round(nn(Xt.g*255,0,255))*256+Math.round(nn(Xt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=kt){it.fromWorkingColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(el);const i=Nu(Hi.h,el.h,n),r=Nu(Hi.s,el.s,n),s=Nu(Hi.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new rt;rt.NAMES=h_;let zA=0;class Vc extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=Ma(),this.name="",this.type="Material",this.blending=Hs,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==sf&&(i.blendDst=this.blendDst),this.blendEquation!==Lr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends Vc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new O,tl=new ze;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Vs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix3(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyMatrix4(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.applyNormalMatrix(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Mt.fromBufferAttribute(this,n),Mt.transformDirection(e),this.setXYZ(n,Mt.x,Mt.y,Mt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ao(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wm&&(e.usage=this.usage),e}}class p_ extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class m_ extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class li extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let BA=0;const Cn=new It,Xu=new sn,ps=new O,vn=new wa,Po=new wa,Lt=new O;class gr extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BA++}),this.uuid=Ma(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(c_(e)?m_:p_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return Xu.lookAt(e),Xu.updateMatrix(),this.applyMatrix4(Xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Po.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(vn.min,Po.min),vn.expandByPoint(Lt),Lt.addVectors(vn.max,Po.max),vn.expandByPoint(Lt)):(vn.expandByPoint(Po.min),vn.expandByPoint(Po.max))}vn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(ps.fromBufferAttribute(e,c),Lt.add(ps)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<a;S++)c[S]=new O,u[S]=new O;const f=new O,h=new O,m=new O,_=new ze,y=new ze,p=new ze,d=new O,v=new O;function g(S,P,Z){f.fromArray(r,S*3),h.fromArray(r,P*3),m.fromArray(r,Z*3),_.fromArray(o,S*2),y.fromArray(o,P*2),p.fromArray(o,Z*2),h.sub(f),m.sub(f),y.sub(_),p.sub(_);const ee=1/(y.x*p.y-p.x*y.y);isFinite(ee)&&(d.copy(h).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(ee),v.copy(m).multiplyScalar(y.x).addScaledVector(h,-p.x).multiplyScalar(ee),c[S].add(d),c[P].add(d),c[Z].add(d),u[S].add(v),u[P].add(v),u[Z].add(v))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let S=0,P=E.length;S<P;++S){const Z=E[S],ee=Z.start,L=Z.count;for(let q=ee,G=ee+L;q<G;q+=3)g(i[q+0],i[q+1],i[q+2])}const R=new O,A=new O,w=new O,D=new O;function $(S){w.fromArray(s,S*3),D.copy(w);const P=c[S];R.copy(P),R.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(D,P);const ee=A.dot(u[S])<0?-1:1;l[S*4]=R.x,l[S*4+1]=R.y,l[S*4+2]=R.z,l[S*4+3]=ee}for(let S=0,P=E.length;S<P;++S){const Z=E[S],ee=Z.start,L=Z.count;for(let q=ee,G=ee+L;q<G;q+=3)$(i[q+0]),$(i[q+1]),$(i[q+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let y=0,p=l.length;y<p;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*u;for(let d=0;d<u;d++)h[_++]=c[m++]}return new ai(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new gr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sg=new It,Sr=new wh,nl=new Mh,og=new O,ms=new O,gs=new O,xs=new O,$u=new O,il=new O,rl=new ze,sl=new ze,ol=new ze,ag=new O,lg=new O,cg=new O,al=new O,ll=new O;class bt extends sn{constructor(e=new gr,n=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&($u.fromBufferAttribute(f,e),o?il.addScaledVector($u,u):il.addScaledVector($u.sub(n),u))}n.add(il)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),Sr.copy(e.ray).recast(e.near),!(nl.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(nl,og)===null||Sr.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(sg.copy(s).invert(),Sr.copy(e.ray).applyMatrix4(sg),!(i.boundingBox!==null&&Sr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Sr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,R=g;E<R;E+=3){const A=a.getX(E),w=a.getX(E+1),D=a.getX(E+2);r=cl(this,d,e,i,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const v=a.getX(p),g=a.getX(p+1),E=a.getX(p+2);r=cl(this,o,e,i,c,u,f,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=h.length;_<y;_++){const p=h[_],d=o[p.materialIndex],v=Math.max(p.start,m.start),g=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,R=g;E<R;E+=3){const A=E,w=E+1,D=E+2;r=cl(this,d,e,i,c,u,f,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const v=p,g=p+1,E=p+2;r=cl(this,o,e,i,c,u,f,v,g,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function HA(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ur,a),l===null)return null;ll.copy(a),ll.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ll);return c<n.near||c>n.far?null:{distance:c,point:ll.clone(),object:t}}function cl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,ms),t.getVertexPosition(l,gs),t.getVertexPosition(c,xs);const u=HA(t,e,n,i,ms,gs,xs,al);if(u){r&&(rl.fromBufferAttribute(r,a),sl.fromBufferAttribute(r,l),ol.fromBufferAttribute(r,c),u.uv=ii.getInterpolation(al,ms,gs,xs,rl,sl,ol,new ze)),s&&(rl.fromBufferAttribute(s,a),sl.fromBufferAttribute(s,l),ol.fromBufferAttribute(s,c),u.uv1=ii.getInterpolation(al,ms,gs,xs,rl,sl,ol,new ze),u.uv2=u.uv1),o&&(ag.fromBufferAttribute(o,a),lg.fromBufferAttribute(o,l),cg.fromBufferAttribute(o,c),u.normal=ii.getInterpolation(al,ms,gs,xs,ag,lg,cg,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new O,materialIndex:0};ii.getNormal(ms,gs,xs,f.normal),u.face=f}return u}class Jr extends gr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(f,2));function _(y,p,d,v,g,E,R,A,w,D,$){const S=E/w,P=R/D,Z=E/2,ee=R/2,L=A/2,q=w+1,G=D+1;let Q=0,U=0;const H=new O;for(let I=0;I<G;I++){const K=I*P-ee;for(let J=0;J<q;J++){const ge=J*S-Z;H[y]=ge*v,H[p]=K*g,H[d]=L,c.push(H.x,H.y,H.z),H[y]=0,H[p]=0,H[d]=A>0?1:-1,u.push(H.x,H.y,H.z),f.push(J/w),f.push(1-I/D),Q+=1}}for(let I=0;I<D;I++)for(let K=0;K<w;K++){const J=h+K+q*I,ge=h+K+q*(I+1),B=h+(K+1)+q*(I+1),te=h+(K+1)+q*I;l.push(J,ge,te),l.push(ge,B,te),U+=6}a.addGroup(m,U,$),m+=U,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function to(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=to(t[n]);for(const r in i)e[r]=i[r]}return e}function VA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g_(t){return t.getRenderTarget()===null?t.outputColorSpace:it.workingColorSpace}const GA={clone:to,merge:Qt};var jA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Vc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jA,this.fragmentShader=WA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=VA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class x_ extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new O,ug=new ze,dg=new ze;class yn extends x_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return df*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,ug,dg),n.subVectors(dg,ug)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const vs=-90,_s=1;class XA extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(vs,_s,e,n);r.layers=this.layers,this.add(r);const s=new yn(vs,_s,e,n);s.layers=this.layers,this.add(s);const o=new yn(vs,_s,e,n);o.layers=this.layers,this.add(o);const a=new yn(vs,_s,e,n);a.layers=this.layers,this.add(a);const l=new yn(vs,_s,e,n);l.layers=this.layers,this.add(l);const c=new yn(vs,_s,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class v_ extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Zs,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $A extends Zr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Vs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jr?kt:Ln),this.texture=new v_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$t}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jr(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:sr});s.uniforms.tEquirect.value=n;const o=new bt(r,s),a=n.minFilter;return n.minFilter===kr&&(n.minFilter=$t),new XA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const qu=new O,qA=new O,YA=new $e;class Wi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qu.subVectors(i,n).cross(qA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YA.getNormalMatrix(e),r=this.coplanarPoint(qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Mh,ul=new O;class __{constructor(e=new Wi,n=new Wi,i=new Wi,r=new Wi,s=new Wi,o=new Wi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],_=r[9],y=r[10],p=r[11],d=r[12],v=r[13],g=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,p-m,E-d).normalize(),i[1].setComponents(l+s,h+c,p+m,E+d).normalize(),i[2].setComponents(l+o,h+u,p+_,E+v).normalize(),i[3].setComponents(l-o,h-u,p-_,E-v).normalize(),i[4].setComponents(l-a,h-f,p-y,E-g).normalize(),n===Ti)i[5].setComponents(l+a,h+f,p+y,E+g).normalize();else if(n===hc)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function y_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function KA(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=f.byteLength,_=t.createBuffer();t.bindBuffer(u,_),t.bufferData(u,f,h),c.onUploadCallback();let y;if(f instanceof Float32Array)y=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=t.SHORT;else if(f instanceof Uint32Array)y=t.UNSIGNED_INT;else if(f instanceof Int32Array)y=t.INT;else if(f instanceof Int8Array)y=t.BYTE;else if(f instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,u,f){const h=u.array,m=u._updateRange,_=u.updateRanges;if(t.bindBuffer(f,c),m.count===-1&&_.length===0&&t.bufferSubData(f,0,h),_.length!==0){for(let y=0,p=_.length;y<p;y++){const d=_[y];n?t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):t.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):t.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);if(f===void 0)i.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class no extends gr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,m=[],_=[],y=[],p=[];for(let d=0;d<u;d++){const v=d*h-o;for(let g=0;g<c;g++){const E=g*f-s;_.push(E,-v,0),y.push(0,0,1),p.push(g/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const g=v+c*d,E=v+c*(d+1),R=v+1+c*(d+1),A=v+1+c*d;m.push(g,E,A),m.push(E,R,A)}this.setIndex(m),this.setAttribute("position",new li(_,3)),this.setAttribute("normal",new li(y,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ib=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sb=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ub=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,db=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_b=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Sb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ib=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ob=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Bb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$b=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tR=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aR=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,pR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mR=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ER=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,AR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,DR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,UR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,OR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,BR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,WR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,XR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,YR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,iC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_C=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,SC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,RC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:ZA,alphahash_pars_fragment:JA,alphamap_fragment:QA,alphamap_pars_fragment:eb,alphatest_fragment:tb,alphatest_pars_fragment:nb,aomap_fragment:ib,aomap_pars_fragment:rb,batching_pars_vertex:sb,batching_vertex:ob,begin_vertex:ab,beginnormal_vertex:lb,bsdfs:cb,iridescence_fragment:ub,bumpmap_pars_fragment:db,clipping_planes_fragment:fb,clipping_planes_pars_fragment:hb,clipping_planes_pars_vertex:pb,clipping_planes_vertex:mb,color_fragment:gb,color_pars_fragment:xb,color_pars_vertex:vb,color_vertex:_b,common:yb,cube_uv_reflection_fragment:Sb,defaultnormal_vertex:Eb,displacementmap_pars_vertex:Mb,displacementmap_vertex:wb,emissivemap_fragment:Tb,emissivemap_pars_fragment:Ab,colorspace_fragment:bb,colorspace_pars_fragment:Rb,envmap_fragment:Cb,envmap_common_pars_fragment:Pb,envmap_pars_fragment:Nb,envmap_pars_vertex:Lb,envmap_physical_pars_fragment:jb,envmap_vertex:Db,fog_vertex:Ub,fog_pars_vertex:Ib,fog_fragment:Ob,fog_pars_fragment:Fb,gradientmap_pars_fragment:kb,lightmap_fragment:zb,lightmap_pars_fragment:Bb,lights_lambert_fragment:Hb,lights_lambert_pars_fragment:Vb,lights_pars_begin:Gb,lights_toon_fragment:Wb,lights_toon_pars_fragment:Xb,lights_phong_fragment:$b,lights_phong_pars_fragment:qb,lights_physical_fragment:Yb,lights_physical_pars_fragment:Kb,lights_fragment_begin:Zb,lights_fragment_maps:Jb,lights_fragment_end:Qb,logdepthbuf_fragment:eR,logdepthbuf_pars_fragment:tR,logdepthbuf_pars_vertex:nR,logdepthbuf_vertex:iR,map_fragment:rR,map_pars_fragment:sR,map_particle_fragment:oR,map_particle_pars_fragment:aR,metalnessmap_fragment:lR,metalnessmap_pars_fragment:cR,morphcolor_vertex:uR,morphnormal_vertex:dR,morphtarget_pars_vertex:fR,morphtarget_vertex:hR,normal_fragment_begin:pR,normal_fragment_maps:mR,normal_pars_fragment:gR,normal_pars_vertex:xR,normal_vertex:vR,normalmap_pars_fragment:_R,clearcoat_normal_fragment_begin:yR,clearcoat_normal_fragment_maps:SR,clearcoat_pars_fragment:ER,iridescence_pars_fragment:MR,opaque_fragment:wR,packing:TR,premultiplied_alpha_fragment:AR,project_vertex:bR,dithering_fragment:RR,dithering_pars_fragment:CR,roughnessmap_fragment:PR,roughnessmap_pars_fragment:NR,shadowmap_pars_fragment:LR,shadowmap_pars_vertex:DR,shadowmap_vertex:UR,shadowmask_pars_fragment:IR,skinbase_vertex:OR,skinning_pars_vertex:FR,skinning_vertex:kR,skinnormal_vertex:zR,specularmap_fragment:BR,specularmap_pars_fragment:HR,tonemapping_fragment:VR,tonemapping_pars_fragment:GR,transmission_fragment:jR,transmission_pars_fragment:WR,uv_pars_fragment:XR,uv_pars_vertex:$R,uv_vertex:qR,worldpos_vertex:YR,background_vert:KR,background_frag:ZR,backgroundCube_vert:JR,backgroundCube_frag:QR,cube_vert:eC,cube_frag:tC,depth_vert:nC,depth_frag:iC,distanceRGBA_vert:rC,distanceRGBA_frag:sC,equirect_vert:oC,equirect_frag:aC,linedashed_vert:lC,linedashed_frag:cC,meshbasic_vert:uC,meshbasic_frag:dC,meshlambert_vert:fC,meshlambert_frag:hC,meshmatcap_vert:pC,meshmatcap_frag:mC,meshnormal_vert:gC,meshnormal_frag:xC,meshphong_vert:vC,meshphong_frag:_C,meshphysical_vert:yC,meshphysical_frag:SC,meshtoon_vert:EC,meshtoon_frag:MC,points_vert:wC,points_frag:TC,shadow_vert:AC,shadow_frag:bC,sprite_vert:RC,sprite_frag:CC},ue={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Qt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Qt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Qt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Qt([ue.points,ue.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Qt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Qt([ue.common,ue.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Qt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Qt([ue.sprite,ue.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Qt([ue.common,ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Qt([ue.lights,ue.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const dl={r:0,b:0,g:0};function PC(t,e,n,i,r,s,o){const a=new rt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Bc)?(u===void 0&&(u=new bt(new Jr(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:to(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=it.getTransfer(g.colorSpace)!==ct,(f!==g||h!==g.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new bt(new no(2,2),new dr({name:"BackgroundMaterial",uniforms:to(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(g.colorSpace)!==ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||h!==g.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,f=g,h=g.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,d){p.getRGB(dl,g_(t)),i.buffers.color.setClear(dl.r,dl.g,dl.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,y(a,l)},render:_}}function NC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(L,q,G,Q,U){let H=!1;if(o){const I=y(Q,G,q);c!==I&&(c=I,m(c.object)),H=d(L,Q,G,U),H&&v(L,Q,G,U)}else{const I=q.wireframe===!0;(c.geometry!==Q.id||c.program!==G.id||c.wireframe!==I)&&(c.geometry=Q.id,c.program=G.id,c.wireframe=I,H=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(H||u)&&(u=!1,D(L,q,G,Q),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,q,G){const Q=G.wireframe===!0;let U=a[L.id];U===void 0&&(U={},a[L.id]=U);let H=U[q.id];H===void 0&&(H={},U[q.id]=H);let I=H[Q];return I===void 0&&(I=p(h()),H[Q]=I),I}function p(L){const q=[],G=[],Q=[];for(let U=0;U<r;U++)q[U]=0,G[U]=0,Q[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:G,attributeDivisors:Q,object:L,attributes:{},index:null}}function d(L,q,G,Q){const U=c.attributes,H=q.attributes;let I=0;const K=G.getAttributes();for(const J in K)if(K[J].location>=0){const B=U[J];let te=H[J];if(te===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(te=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(te=L.instanceColor)),B===void 0||B.attribute!==te||te&&B.data!==te.data)return!0;I++}return c.attributesNum!==I||c.index!==Q}function v(L,q,G,Q){const U={},H=q.attributes;let I=0;const K=G.getAttributes();for(const J in K)if(K[J].location>=0){let B=H[J];B===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(B=L.instanceColor));const te={};te.attribute=B,B&&B.data&&(te.data=B.data),U[J]=te,I++}c.attributes=U,c.attributesNum=I,c.index=Q}function g(){const L=c.newAttributes;for(let q=0,G=L.length;q<G;q++)L[q]=0}function E(L){R(L,0)}function R(L,q){const G=c.newAttributes,Q=c.enabledAttributes,U=c.attributeDivisors;G[L]=1,Q[L]===0&&(t.enableVertexAttribArray(L),Q[L]=1),U[L]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,q),U[L]=q)}function A(){const L=c.newAttributes,q=c.enabledAttributes;for(let G=0,Q=q.length;G<Q;G++)q[G]!==L[G]&&(t.disableVertexAttribArray(G),q[G]=0)}function w(L,q,G,Q,U,H,I){I===!0?t.vertexAttribIPointer(L,q,G,U,H):t.vertexAttribPointer(L,q,G,Q,U,H)}function D(L,q,G,Q){if(i.isWebGL2===!1&&(L.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=Q.attributes,H=G.getAttributes(),I=q.defaultAttributeValues;for(const K in H){const J=H[K];if(J.location>=0){let ge=U[K];if(ge===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(ge=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(ge=L.instanceColor)),ge!==void 0){const B=ge.normalized,te=ge.itemSize,de=n.get(ge);if(de===void 0)continue;const Ee=de.buffer,Pe=de.type,_e=de.bytesPerElement,Ke=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||ge.gpuType===e_);if(ge.isInterleavedBufferAttribute){const Ie=ge.data,z=Ie.stride,Tt=ge.offset;if(Ie.isInstancedInterleavedBuffer){for(let be=0;be<J.locationSize;be++)R(J.location+be,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let be=0;be<J.locationSize;be++)E(J.location+be);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let be=0;be<J.locationSize;be++)w(J.location+be,te/J.locationSize,Pe,B,z*_e,(Tt+te/J.locationSize*be)*_e,Ke)}else{if(ge.isInstancedBufferAttribute){for(let Ie=0;Ie<J.locationSize;Ie++)R(J.location+Ie,ge.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Ie=0;Ie<J.locationSize;Ie++)E(J.location+Ie);t.bindBuffer(t.ARRAY_BUFFER,Ee);for(let Ie=0;Ie<J.locationSize;Ie++)w(J.location+Ie,te/J.locationSize,Pe,B,te*_e,te/J.locationSize*Ie*_e,Ke)}}else if(I!==void 0){const B=I[K];if(B!==void 0)switch(B.length){case 2:t.vertexAttrib2fv(J.location,B);break;case 3:t.vertexAttrib3fv(J.location,B);break;case 4:t.vertexAttrib4fv(J.location,B);break;default:t.vertexAttrib1fv(J.location,B)}}}}A()}function $(){Z();for(const L in a){const q=a[L];for(const G in q){const Q=q[G];for(const U in Q)_(Q[U].object),delete Q[U];delete q[G]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;const q=a[L.id];for(const G in q){const Q=q[G];for(const U in Q)_(Q[U].object),delete Q[U];delete q[G]}delete a[L.id]}function P(L){for(const q in a){const G=a[q];if(G[L.id]===void 0)continue;const Q=G[L.id];for(const U in Q)_(Q[U].object),delete Q[U];delete G[L.id]}}function Z(){ee(),u=!0,c!==l&&(c=l,m(c.object))}function ee(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Z,resetDefaultState:ee,dispose:$,releaseStatesOfGeometry:S,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:E,disableUnusedAttributes:A}}function LC(t,e,n,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,f){t.drawArrays(s,u,f),n.update(f,s,1)}function l(u,f,h){if(h===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,u,f,h),n.update(f,s,h)}function c(u,f,h){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{m.multiDrawArraysWEBGL(s,u,0,f,0,h);let _=0;for(let y=0;y<h;y++)_+=f[y];n.update(_,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function DC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=h>0,E=o||e.has("OES_texture_float"),R=g&&E,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:E,floatVertexTextures:R,maxSamples:A}}function UC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Wi,a=new $e,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,g=v*4;let E=d.clippingState||null;l.value=E,E=u(_,h,g,m);for(let R=0;R!==g;++R)E[R]=n[R];d.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const y=f!==null?f.length:0;let p=null;if(y!==0){if(p=l.value,_!==!0||p===null){const d=m+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,E=m;g!==y;++g,E+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function IC(t){let e=new WeakMap;function n(o,a){return a===of?o.mapping=Zs:a===af&&(o.mapping=Js),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===of||a===af)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $A(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class OC extends x_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ds=4,fg=[.125,.215,.35,.446,.526,.582],Dr=20,Yu=new OC,hg=new rt;let Ku=null,Zu=0,Ju=0;const Pr=(1+Math.sqrt(5))/2,ys=1/Pr,pg=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Pr,ys),new O(0,Pr,-ys),new O(ys,0,Pr),new O(-ys,0,Pr),new O(Pr,ys,0),new O(-Pr,ys,0)];class mg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Zu,Ju),e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zs||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$t,minFilter:$t,generateMipmaps:!1,type:da,format:Wn,colorSpace:Di,depthBuffer:!1},r=gg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gg(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FC(s)),this._blurMaterial=kC(s,e,n)}return r}_compileMaterial(e){const n=new bt(this._lodPlanes[0],e);this._renderer.compile(n,Yu)}_sceneToCubeUV(e,n,i,r){const a=new yn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(hg),u.toneMapping=or,u.autoClear=!1;const m=new ri({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new bt(new Jr,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(hg),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const g=this._cubeSize;fl(r,v*g,d>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zs||e.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;fl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pg[(r-1)%pg.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new bt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dr-1),y=s/_,p=isFinite(s)?1+Math.floor(u*y):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);const d=[];let v=0;for(let w=0;w<Dr;++w){const D=w/y,$=Math.exp(-D*D/2);d.push($),w===0?v+=$:w<p&&(v+=2*$)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=_,h.mipInt.value=g-i;const E=this._sizeLods[r],R=3*E*(r>g-Ds?r-g+Ds:0),A=4*(this._cubeSize-E);fl(n,R,A,3*E,2*E),l.setRenderTarget(n),l.render(f,Yu)}}function FC(t){const e=[],n=[],i=[];let r=t;const s=t-Ds+1+fg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ds?l=fg[o-t+Ds-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,y=3,p=2,d=1,v=new Float32Array(y*_*m),g=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,D=A>2?0:-1,$=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set($,y*_*A),g.set(h,p*_*A);const S=[A,A,A,A,A,A];E.set(S,d*_*A)}const R=new gr;R.setAttribute("position",new ai(v,y)),R.setAttribute("uv",new ai(g,p)),R.setAttribute("faceIndex",new ai(E,d)),e.push(R),r>Ds&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gg(t,e,n){const i=new Zr(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function kC(t,e,n){const i=new Float32Array(Dr),r=new O(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function xg(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function vg(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===of||l===af,u=l===Zs||l===Js;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new mg(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new mg(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function BC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function HC(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const y=h.morphAttributes[_];for(let p=0,d=y.length;p<d;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,d=y.length;p<d;p++)e.update(y[p],t.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let y=0;if(m!==null){const v=m.array;y=m.version;for(let g=0,E=v.length;g<E;g+=3){const R=v[g+0],A=v[g+1],w=v[g+2];h.push(R,A,A,w,w,R)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,E=v.length/3-1;g<E;g+=3){const R=g+0,A=g+1,w=g+2;h.push(R,A,A,w,w,R)}}else return;const p=new(c_(h)?m_:p_)(h,1);p.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VC(t,e,n,i){const r=i.isWebGL2;let s;function o(m){s=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){t.drawElements(s,_,a,m*l),n.update(_,s,1)}function f(m,_,y){if(y===0)return;let p,d;if(r)p=t,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](s,_,a,m*l,y),n.update(_,s,y)}function h(m,_,y){if(y===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<y;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(s,_,0,a,m,0,y);let d=0;for(let v=0;v<y;v++)d+=_[v];n.update(d,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function GC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jC(t,e){return t[0]-e[0]}function WC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function XC(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==y){let q=function(){ee.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var m=q;p!==void 0&&p.texture.dispose();const g=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let $=0;g===!0&&($=1),E===!0&&($=2),R===!0&&($=3);let S=u.attributes.position.count*$,P=1;S>e.maxTextureSize&&(P=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const Z=new Float32Array(S*P*4*y),ee=new f_(Z,S,P,y);ee.type=Ei,ee.needsUpdate=!0;const L=$*4;for(let G=0;G<y;G++){const Q=A[G],U=w[G],H=D[G],I=S*P*4*G;for(let K=0;K<Q.count;K++){const J=K*L;g===!0&&(o.fromBufferAttribute(Q,K),Z[I+J+0]=o.x,Z[I+J+1]=o.y,Z[I+J+2]=o.z,Z[I+J+3]=0),E===!0&&(o.fromBufferAttribute(U,K),Z[I+J+4]=o.x,Z[I+J+5]=o.y,Z[I+J+6]=o.z,Z[I+J+7]=0),R===!0&&(o.fromBufferAttribute(H,K),Z[I+J+8]=o.x,Z[I+J+9]=o.y,Z[I+J+10]=o.z,Z[I+J+11]=H.itemSize===4?o.w:1)}}p={count:y,texture:ee,size:new ze(S,P)},s.set(u,p),u.addEventListener("dispose",q)}let d=0;for(let g=0;g<h.length;g++)d+=h[g];const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(t,"morphTargetBaseInfluence",v),f.getUniforms().setValue(t,"morphTargetInfluences",h),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let y=i[u.id];if(y===void 0||y.length!==_){y=[];for(let E=0;E<_;E++)y[E]=[E,0];i[u.id]=y}for(let E=0;E<_;E++){const R=y[E];R[0]=E,R[1]=h[E]}y.sort(WC);for(let E=0;E<8;E++)E<_&&y[E][1]?(a[E][0]=y[E][0],a[E][1]=y[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(jC);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const R=a[E],A=R[0],w=R[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+E)!==p[A]&&u.setAttribute("morphTarget"+E,p[A]),d&&u.getAttribute("morphNormal"+E)!==d[A]&&u.setAttribute("morphNormal"+E,d[A]),r[E]=w,v+=w):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),r[E]=0)}const g=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(t,"morphTargetBaseInfluence",g),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function $C(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class S_ extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Gr,u!==Gr&&u!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Gr&&(i=Ki),i===void 0&&u===Qs&&(i=Vr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const E_=new Kt,M_=new S_(1,1);M_.compareFunction=l_;const w_=new f_,T_=new PA,A_=new v_,_g=[],yg=[],Sg=new Float32Array(16),Eg=new Float32Array(9),Mg=new Float32Array(4);function ho(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_g[r];if(s===void 0&&(s=new Float32Array(r),_g[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Gc(t,e){let n=yg[e];n===void 0&&(n=new Int32Array(e),yg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function qC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function YC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function KC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function ZC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function JC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Mg.set(i),t.uniformMatrix2fv(this.addr,!1,Mg),Pt(n,i)}}function QC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Eg.set(i),t.uniformMatrix3fv(this.addr,!1,Eg),Pt(n,i)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;Sg.set(i),t.uniformMatrix4fv(this.addr,!1,Sg),Pt(n,i)}}function t2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function n2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function s2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?M_:E_;n.setTexture2D(e||s,r)}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||T_,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||A_,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||w_,r)}function h2(t){switch(t){case 5126:return qC;case 35664:return YC;case 35665:return KC;case 35666:return ZC;case 35674:return JC;case 35675:return QC;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return f2}}function p2(t,e){t.uniform1fv(this.addr,e)}function m2(t,e){const n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function g2(t,e){const n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function x2(t,e){const n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function v2(t,e){const n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _2(t,e){const n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function y2(t,e){const n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function S2(t,e){t.uniform1iv(this.addr,e)}function E2(t,e){t.uniform2iv(this.addr,e)}function M2(t,e){t.uniform3iv(this.addr,e)}function w2(t,e){t.uniform4iv(this.addr,e)}function T2(t,e){t.uniform1uiv(this.addr,e)}function A2(t,e){t.uniform2uiv(this.addr,e)}function b2(t,e){t.uniform3uiv(this.addr,e)}function R2(t,e){t.uniform4uiv(this.addr,e)}function C2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||E_,s[o])}function P2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||T_,s[o])}function N2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||A_,s[o])}function L2(t,e,n){const i=this.cache,r=e.length,s=Gc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||w_,s[o])}function D2(t){switch(t){case 5126:return p2;case 35664:return m2;case 35665:return g2;case 35666:return x2;case 35674:return v2;case 35675:return _2;case 35676:return y2;case 5124:case 35670:return S2;case 35667:case 35671:return E2;case 35668:case 35672:return M2;case 35669:case 35673:return w2;case 5125:return T2;case 36294:return A2;case 36295:return b2;case 36296:return R2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return P2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return L2}}class U2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=h2(n.type)}}class I2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=D2(n.type)}}class O2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Qu=/(\w+)(\])?(\[|\.)?/g;function wg(t,e){t.seq.push(e),t.map[e.id]=e}function F2(t,e,n){const i=t.name,r=i.length;for(Qu.lastIndex=0;;){const s=Qu.exec(i),o=Qu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){wg(n,c===void 0?new U2(a,t,e):new I2(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new O2(a),wg(n,f)),n=f}}}class Ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);F2(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Tg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const k2=37297;let z2=0;function B2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function H2(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===fc&&n===dc?i="LinearDisplayP3ToLinearSRGB":e===dc&&n===fc&&(i="LinearSRGBToLinearDisplayP3"),t){case Di:case Hc:return[i,"LinearTransferOETF"];case kt:case Eh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+B2(t.getShaderSource(e),o)}else return r}function V2(t,e){const n=H2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function G2(t,e){let n;switch(e){case JT:n="Linear";break;case QT:n="Reinhard";break;case eA:n="OptimizedCineon";break;case tA:n="ACESFilmic";break;case iA:n="AgX";break;case nA:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function j2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Us).join(`
`)}function W2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function X2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function $2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Us(t){return t!==""}function bg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const q2=/^[ \t]*#include +<([\w\d./]+)>/gm;function hf(t){return t.replace(q2,K2)}const Y2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function K2(t,e){let n=Ge[e];if(n===void 0){const i=Y2.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hf(n)}const Z2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(t){return t.replace(Z2,J2)}function J2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Zv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===AT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function eP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zs:case Js:e="ENVMAP_TYPE_CUBE";break;case Bc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Js:e="ENVMAP_MODE_REFRACTION";break}return e}function nP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Jv:e="ENVMAP_BLENDING_MULTIPLY";break;case KT:e="ENVMAP_BLENDING_MIX";break;case ZT:e="ENVMAP_BLENDING_ADD";break}return e}function iP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function rP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Q2(n),c=eP(n),u=tP(n),f=nP(n),h=iP(n),m=n.isWebGL2?"":j2(n),_=W2(n),y=X2(s),p=r.createProgram();let d,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),d.length>0&&(d+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Us).join(`
`),v.length>0&&(v+=`
`)):(d=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),v=[m,Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ge.tonemapping_pars_fragment:"",n.toneMapping!==or?G2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,V2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Us).join(`
`)),o=hf(o),o=bg(o,n),o=Rg(o,n),a=hf(a),a=bg(a,n),a=Rg(a,n),o=Cg(o),a=Cg(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=g+d+o,R=g+v+a,A=Tg(r,r.VERTEX_SHADER,E),w=Tg(r,r.FRAGMENT_SHADER,R);r.attachShader(p,A),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(Z){if(t.debug.checkShaderErrors){const ee=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let G=!0,Q=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,w);else{const U=Ag(r,A,"vertex"),H=Ag(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+ee+`
`+U+`
`+H)}else ee!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ee):(L===""||q==="")&&(Q=!1);Q&&(Z.diagnostics={runnable:G,programLog:ee,vertexShader:{log:L,prefix:d},fragmentShader:{log:q,prefix:v}})}r.deleteShader(A),r.deleteShader(w),$=new Ul(r,p),S=$2(r,p)}let $;this.getUniforms=function(){return $===void 0&&D(this),$};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(p,k2)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let sP=0;class oP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aP(e),n.set(e,i)),i}}class aP{constructor(e){this.id=sP++,this.code=e,this.usedTimes=0}}function lP(t,e,n,i,r,s,o){const a=new Th,l=new oP,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function d(S,P,Z,ee,L){const q=ee.fog,G=L.geometry,Q=S.isMeshStandardMaterial?ee.environment:null,U=(S.isMeshStandardMaterial?n:e).get(S.envMap||Q),H=U&&U.mapping===Bc?U.image.height:null,I=y[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const K=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,J=K!==void 0?K.length:0;let ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let B,te,de,Ee;if(I){const Ye=ei[I];B=Ye.vertexShader,te=Ye.fragmentShader}else B=S.vertexShader,te=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),Ee=l.getFragmentShaderID(S);const Pe=t.getRenderTarget(),_e=L.isInstancedMesh===!0,Ke=L.isBatchedMesh===!0,Ie=!!S.map,z=!!S.matcap,Tt=!!U,be=!!S.aoMap,Le=!!S.lightMap,Me=!!S.bumpMap,at=!!S.normalMap,Oe=!!S.displacementMap,b=!!S.emissiveMap,M=!!S.metalnessMap,V=!!S.roughnessMap,le=S.anisotropy>0,ne=S.clearcoat>0,se=S.iridescence>0,ye=S.sheen>0,fe=S.transmission>0,ve=le&&!!S.anisotropyMap,Ce=ne&&!!S.clearcoatMap,Fe=ne&&!!S.clearcoatNormalMap,ie=ne&&!!S.clearcoatRoughnessMap,et=se&&!!S.iridescenceMap,je=se&&!!S.iridescenceThicknessMap,De=ye&&!!S.sheenColorMap,Te=ye&&!!S.sheenRoughnessMap,pe=!!S.specularMap,He=!!S.specularColorMap,N=!!S.specularIntensityMap,ce=fe&&!!S.transmissionMap,he=fe&&!!S.thicknessMap,Ae=!!S.gradientMap,C=!!S.alphaMap,ae=S.alphaTest>0,re=!!S.alphaHash,Se=!!S.extensions;let Re=or;S.toneMapped&&(Pe===null||Pe.isXRRenderTarget===!0)&&(Re=t.toneMapping);const Je={isWebGL2:f,shaderID:I,shaderType:S.type,shaderName:S.name,vertexShader:B,fragmentShader:te,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:Ee,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:Ke,instancing:_e,instancingColor:_e&&L.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Pe===null?t.outputColorSpace:Pe.isXRRenderTarget===!0?Pe.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:z,envMap:Tt,envMapMode:Tt&&U.mapping,envMapCubeUVHeight:H,aoMap:be,lightMap:Le,bumpMap:Me,normalMap:at,displacementMap:m&&Oe,emissiveMap:b,normalMapObjectSpace:at&&S.normalMapType===mA,normalMapTangentSpace:at&&S.normalMapType===pA,metalnessMap:M,roughnessMap:V,anisotropy:le,anisotropyMap:ve,clearcoat:ne,clearcoatMap:Ce,clearcoatNormalMap:Fe,clearcoatRoughnessMap:ie,iridescence:se,iridescenceMap:et,iridescenceThicknessMap:je,sheen:ye,sheenColorMap:De,sheenRoughnessMap:Te,specularMap:pe,specularColorMap:He,specularIntensityMap:N,transmission:fe,transmissionMap:ce,thicknessMap:he,gradientMap:Ae,opaque:S.transparent===!1&&S.blending===Hs&&S.alphaToCoverage===!1,alphaMap:C,alphaTest:ae,alphaHash:re,combine:S.combine,mapUv:Ie&&p(S.map.channel),aoMapUv:be&&p(S.aoMap.channel),lightMapUv:Le&&p(S.lightMap.channel),bumpMapUv:Me&&p(S.bumpMap.channel),normalMapUv:at&&p(S.normalMap.channel),displacementMapUv:Oe&&p(S.displacementMap.channel),emissiveMapUv:b&&p(S.emissiveMap.channel),metalnessMapUv:M&&p(S.metalnessMap.channel),roughnessMapUv:V&&p(S.roughnessMap.channel),anisotropyMapUv:ve&&p(S.anisotropyMap.channel),clearcoatMapUv:Ce&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:je&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:De&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(S.sheenRoughnessMap.channel),specularMapUv:pe&&p(S.specularMap.channel),specularColorMapUv:He&&p(S.specularColorMap.channel),specularIntensityMapUv:N&&p(S.specularIntensityMap.channel),transmissionMapUv:ce&&p(S.transmissionMap.channel),thicknessMapUv:he&&p(S.thicknessMap.channel),alphaMapUv:C&&p(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(at||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Ie||C),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ge,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&Z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Re,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ni,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:Se&&S.extensions.derivatives===!0,extensionFragDepth:Se&&S.extensions.fragDepth===!0,extensionDrawBuffers:Se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:Se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Se&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function v(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const Z in S.defines)P.push(Z),P.push(S.defines[Z]);return S.isRawShaderMaterial===!1&&(g(P,S),E(P,S),P.push(t.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function g(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function E(S,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),S.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.alphaToCoverage&&a.enable(20),S.push(a.mask)}function R(S){const P=y[S.type];let Z;if(P){const ee=ei[P];Z=GA.clone(ee.uniforms)}else Z=S.uniforms;return Z}function A(S,P){let Z;for(let ee=0,L=u.length;ee<L;ee++){const q=u[ee];if(q.cacheKey===P){Z=q,++Z.usedTimes;break}}return Z===void 0&&(Z=new rP(t,P,S,s),u.push(Z)),Z}function w(S){if(--S.usedTimes===0){const P=u.indexOf(S);u[P]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function $(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:R,acquireProgram:A,releaseProgram:w,releaseShaderCache:D,programs:u,dispose:$}}function cP(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function uP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ng(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,m,_,y,p){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:y,group:p},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=y,d.group=p),e++,d}function a(f,h,m,_,y,p){const d=o(f,h,m,_,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function l(f,h,m,_,y,p){const d=o(f,h,m,_,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||uP),i.length>1&&i.sort(h||Ng),r.length>1&&r.sort(h||Ng)}function u(){for(let f=e,h=t.length;f<h;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function dP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lg,t.set(i,[o])):r>=s.length?(o=new Lg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function fP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new rt};break;case"SpotLight":n={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function hP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pP=0;function mP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gP(t,e){const n=new fP,i=hP(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,o=new It,a=new It;function l(u,f){let h=0,m=0,_=0;for(let Z=0;Z<9;Z++)r.probe[Z].set(0,0,0);let y=0,p=0,d=0,v=0,g=0,E=0,R=0,A=0,w=0,D=0,$=0;u.sort(mP);const S=f===!0?Math.PI:1;for(let Z=0,ee=u.length;Z<ee;Z++){const L=u[Z],q=L.color,G=L.intensity,Q=L.distance,U=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=q.r*G*S,m+=q.g*G*S,_+=q.b*G*S;else if(L.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(L.sh.coefficients[H],G);$++}else if(L.isDirectionalLight){const H=n.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const I=L.shadow,K=i.get(L);K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=L.shadow.matrix,E++}r.directional[y]=H,y++}else if(L.isSpotLight){const H=n.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(q).multiplyScalar(G*S),H.distance=Q,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,r.spot[d]=H;const I=L.shadow;if(L.map&&(r.spotLightMap[w]=L.map,w++,I.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[d]=I.matrix,L.castShadow){const K=i.get(L);K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,r.spotShadow[d]=K,r.spotShadowMap[d]=U,A++}d++}else if(L.isRectAreaLight){const H=n.get(L);H.color.copy(q).multiplyScalar(G),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),r.rectArea[v]=H,v++}else if(L.isPointLight){const H=n.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*S),H.distance=L.distance,H.decay=L.decay,L.castShadow){const I=L.shadow,K=i.get(L);K.shadowBias=I.bias,K.shadowNormalBias=I.normalBias,K.shadowRadius=I.radius,K.shadowMapSize=I.mapSize,K.shadowCameraNear=I.camera.near,K.shadowCameraFar=I.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=U,r.pointShadowMatrix[p]=L.shadow.matrix,R++}r.point[p]=H,p++}else if(L.isHemisphereLight){const H=n.get(L);H.skyColor.copy(L.color).multiplyScalar(G*S),H.groundColor.copy(L.groundColor).multiplyScalar(G*S),r.hemi[g]=H,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const P=r.hash;(P.directionalLength!==y||P.pointLength!==p||P.spotLength!==d||P.rectAreaLength!==v||P.hemiLength!==g||P.numDirectionalShadows!==E||P.numPointShadows!==R||P.numSpotShadows!==A||P.numSpotMaps!==w||P.numLightProbes!==$)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=v,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=A+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=$,P.directionalLength=y,P.pointLength=p,P.spotLength=d,P.rectAreaLength=v,P.hemiLength=g,P.numDirectionalShadows=E,P.numPointShadows=R,P.numSpotShadows=A,P.numSpotMaps=w,P.numLightProbes=$,r.version=pP++)}function c(u,f){let h=0,m=0,_=0,y=0,p=0;const d=f.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const E=u[v];if(E.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),h++}else if(E.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const R=r.rectArea[y];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),R.halfWidth.set(E.width*.5,0,0),R.halfHeight.set(0,E.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(E.isPointLight){const R=r.point[m];R.position.setFromMatrixPosition(E.matrixWorld),R.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(E.matrixWorld),R.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:r}}function Dg(t,e){const n=new gP(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xP(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Dg(t,e),n.set(s,[l])):o>=a.length?(l=new Dg(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class vP extends Vc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _P extends Vc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EP(t,e,n){let i=new __;const r=new ze,s=new ze,o=new zt,a=new vP({depthPacking:hA}),l=new _P,c={},u=n.maxTextureSize,f={[ur]:mn,[mn]:ur,[ni]:ni},h=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:yP,fragmentShader:SP}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new gr;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zv;let d=this.type;this.render=function(A,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const $=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(sr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ee=d!==_i&&this.type===_i,L=d===_i&&this.type!==_i;for(let q=0,G=A.length;q<G;q++){const Q=A[q],U=Q.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const H=U.getFrameExtents();if(r.multiply(H),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,U.mapSize.y=s.y)),U.map===null||ee===!0||L===!0){const K=this.type!==_i?{minFilter:tn,magFilter:tn}:{};U.map!==null&&U.map.dispose(),U.map=new Zr(r.x,r.y,K),U.map.texture.name=Q.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const I=U.getViewportCount();for(let K=0;K<I;K++){const J=U.getViewport(K);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),Z.viewport(o),U.updateMatrices(Q,K),i=U.getFrustum(),E(w,D,U.camera,Q,this.type)}U.isPointLightShadow!==!0&&this.type===_i&&v(U,D),U.needsUpdate=!1}d=this.type,p.needsUpdate=!1,t.setRenderTarget($,S,P)};function v(A,w){const D=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,D,h,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,D,m,y,null)}function g(A,w,D,$){let S=null;const P=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const Z=S.uuid,ee=w.uuid;let L=c[Z];L===void 0&&(L={},c[Z]=L);let q=L[ee];q===void 0&&(q=S.clone(),L[ee]=q,w.addEventListener("dispose",R)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,$===_i?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const Z=t.properties.get(S);Z.light=D}return S}function E(A,w,D,$,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===_i)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const ee=e.update(A),L=A.material;if(Array.isArray(L)){const q=ee.groups;for(let G=0,Q=q.length;G<Q;G++){const U=q[G],H=L[U.materialIndex];if(H&&H.visible){const I=g(A,H,$,S);A.onBeforeShadow(t,A,w,D,ee,I,U),t.renderBufferDirect(D,null,ee,I,A,U),A.onAfterShadow(t,A,w,D,ee,I,U)}}}else if(L.visible){const q=g(A,L,$,S);A.onBeforeShadow(t,A,w,D,ee,q,null),t.renderBufferDirect(D,null,ee,q,A,null),A.onAfterShadow(t,A,w,D,ee,q,null)}}const Z=A.children;for(let ee=0,L=Z.length;ee<L;ee++)E(Z[ee],w,D,$,S)}function R(A){A.target.removeEventListener("dispose",R);for(const D in c){const $=c[D],S=A.target.uuid;S in $&&($[S].dispose(),delete $[S])}}}function MP(t,e,n){const i=n.isWebGL2;function r(){let C=!1;const ae=new zt;let re=null;const Se=new zt(0,0,0,0);return{setMask:function(Re){re!==Re&&!C&&(t.colorMask(Re,Re,Re,Re),re=Re)},setLocked:function(Re){C=Re},setClear:function(Re,Je,Ye,st,Ot){Ot===!0&&(Re*=st,Je*=st,Ye*=st),ae.set(Re,Je,Ye,st),Se.equals(ae)===!1&&(t.clearColor(Re,Je,Ye,st),Se.copy(ae))},reset:function(){C=!1,re=null,Se.set(-1,0,0,0)}}}function s(){let C=!1,ae=null,re=null,Se=null;return{setTest:function(Re){Re?_e(t.DEPTH_TEST):Ke(t.DEPTH_TEST)},setMask:function(Re){ae!==Re&&!C&&(t.depthMask(Re),ae=Re)},setFunc:function(Re){if(re!==Re){switch(Re){case GT:t.depthFunc(t.NEVER);break;case jT:t.depthFunc(t.ALWAYS);break;case WT:t.depthFunc(t.LESS);break;case cc:t.depthFunc(t.LEQUAL);break;case XT:t.depthFunc(t.EQUAL);break;case $T:t.depthFunc(t.GEQUAL);break;case qT:t.depthFunc(t.GREATER);break;case YT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}re=Re}},setLocked:function(Re){C=Re},setClear:function(Re){Se!==Re&&(t.clearDepth(Re),Se=Re)},reset:function(){C=!1,ae=null,re=null,Se=null}}}function o(){let C=!1,ae=null,re=null,Se=null,Re=null,Je=null,Ye=null,st=null,Ot=null;return{setTest:function(Qe){C||(Qe?_e(t.STENCIL_TEST):Ke(t.STENCIL_TEST))},setMask:function(Qe){ae!==Qe&&!C&&(t.stencilMask(Qe),ae=Qe)},setFunc:function(Qe,yt,Jt){(re!==Qe||Se!==yt||Re!==Jt)&&(t.stencilFunc(Qe,yt,Jt),re=Qe,Se=yt,Re=Jt)},setOp:function(Qe,yt,Jt){(Je!==Qe||Ye!==yt||st!==Jt)&&(t.stencilOp(Qe,yt,Jt),Je=Qe,Ye=yt,st=Jt)},setLocked:function(Qe){C=Qe},setClear:function(Qe){Ot!==Qe&&(t.clearStencil(Qe),Ot=Qe)},reset:function(){C=!1,ae=null,re=null,Se=null,Re=null,Je=null,Ye=null,st=null,Ot=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,y=[],p=null,d=!1,v=null,g=null,E=null,R=null,A=null,w=null,D=null,$=new rt(0,0,0),S=0,P=!1,Z=null,ee=null,L=null,q=null,G=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const I=t.getParameter(t.VERSION);I.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(I)[1]),U=H>=1):I.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(I)[1]),U=H>=2);let K=null,J={};const ge=t.getParameter(t.SCISSOR_BOX),B=t.getParameter(t.VIEWPORT),te=new zt().fromArray(ge),de=new zt().fromArray(B);function Ee(C,ae,re,Se){const Re=new Uint8Array(4),Je=t.createTexture();t.bindTexture(C,Je),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<re;Ye++)i&&(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,Re):t.texImage2D(ae+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Re);return Je}const Pe={};Pe[t.TEXTURE_2D]=Ee(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=Ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=Ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=Ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),_e(t.DEPTH_TEST),l.setFunc(cc),Oe(!1),b(fm),_e(t.CULL_FACE),Me(sr);function _e(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Ke(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Ie(C,ae){return m[C]!==ae?(t.bindFramebuffer(C,ae),m[C]=ae,i&&(C===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ae),C===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function z(C,ae){let re=y,Se=!1;if(C)if(re=_.get(ae),re===void 0&&(re=[],_.set(ae,re)),C.isWebGLMultipleRenderTargets){const Re=C.texture;if(re.length!==Re.length||re[0]!==t.COLOR_ATTACHMENT0){for(let Je=0,Ye=Re.length;Je<Ye;Je++)re[Je]=t.COLOR_ATTACHMENT0+Je;re.length=Re.length,Se=!0}}else re[0]!==t.COLOR_ATTACHMENT0&&(re[0]=t.COLOR_ATTACHMENT0,Se=!0);else re[0]!==t.BACK&&(re[0]=t.BACK,Se=!0);Se&&(n.isWebGL2?t.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function Tt(C){return p!==C?(t.useProgram(C),p=C,!0):!1}const be={[Lr]:t.FUNC_ADD,[RT]:t.FUNC_SUBTRACT,[CT]:t.FUNC_REVERSE_SUBTRACT};if(i)be[gm]=t.MIN,be[xm]=t.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(be[gm]=C.MIN_EXT,be[xm]=C.MAX_EXT)}const Le={[PT]:t.ZERO,[NT]:t.ONE,[LT]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[kT]:t.SRC_ALPHA_SATURATE,[OT]:t.DST_COLOR,[UT]:t.DST_ALPHA,[DT]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[FT]:t.ONE_MINUS_DST_COLOR,[IT]:t.ONE_MINUS_DST_ALPHA,[zT]:t.CONSTANT_COLOR,[BT]:t.ONE_MINUS_CONSTANT_COLOR,[HT]:t.CONSTANT_ALPHA,[VT]:t.ONE_MINUS_CONSTANT_ALPHA};function Me(C,ae,re,Se,Re,Je,Ye,st,Ot,Qe){if(C===sr){d===!0&&(Ke(t.BLEND),d=!1);return}if(d===!1&&(_e(t.BLEND),d=!0),C!==bT){if(C!==v||Qe!==P){if((g!==Lr||A!==Lr)&&(t.blendEquation(t.FUNC_ADD),g=Lr,A=Lr),Qe)switch(C){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}E=null,R=null,w=null,D=null,$.set(0,0,0),S=0,v=C,P=Qe}return}Re=Re||ae,Je=Je||re,Ye=Ye||Se,(ae!==g||Re!==A)&&(t.blendEquationSeparate(be[ae],be[Re]),g=ae,A=Re),(re!==E||Se!==R||Je!==w||Ye!==D)&&(t.blendFuncSeparate(Le[re],Le[Se],Le[Je],Le[Ye]),E=re,R=Se,w=Je,D=Ye),(st.equals($)===!1||Ot!==S)&&(t.blendColor(st.r,st.g,st.b,Ot),$.copy(st),S=Ot),v=C,P=!1}function at(C,ae){C.side===ni?Ke(t.CULL_FACE):_e(t.CULL_FACE);let re=C.side===mn;ae&&(re=!re),Oe(re),C.blending===Hs&&C.transparent===!1?Me(sr):Me(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);const Se=C.stencilWrite;c.setTest(Se),Se&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),V(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):Ke(t.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(C){Z!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),Z=C)}function b(C){C!==wT?(_e(t.CULL_FACE),C!==ee&&(C===fm?t.cullFace(t.BACK):C===TT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ke(t.CULL_FACE),ee=C}function M(C){C!==L&&(U&&t.lineWidth(C),L=C)}function V(C,ae,re){C?(_e(t.POLYGON_OFFSET_FILL),(q!==ae||G!==re)&&(t.polygonOffset(ae,re),q=ae,G=re)):Ke(t.POLYGON_OFFSET_FILL)}function le(C){C?_e(t.SCISSOR_TEST):Ke(t.SCISSOR_TEST)}function ne(C){C===void 0&&(C=t.TEXTURE0+Q-1),K!==C&&(t.activeTexture(C),K=C)}function se(C,ae,re){re===void 0&&(K===null?re=t.TEXTURE0+Q-1:re=K);let Se=J[re];Se===void 0&&(Se={type:void 0,texture:void 0},J[re]=Se),(Se.type!==C||Se.texture!==ae)&&(K!==re&&(t.activeTexture(re),K=re),t.bindTexture(C,ae||Pe[C]),Se.type=C,Se.texture=ae)}function ye(){const C=J[K];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function fe(){try{t.compressedTexImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ve(){try{t.compressedTexImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{t.texSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Fe(){try{t.texSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ie(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function et(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function je(){try{t.texStorage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{t.texStorage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{t.texImage3D.apply(t,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function He(C){te.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),te.copy(C))}function N(C){de.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),de.copy(C))}function ce(C,ae){let re=f.get(ae);re===void 0&&(re=new WeakMap,f.set(ae,re));let Se=re.get(C);Se===void 0&&(Se=t.getUniformBlockIndex(ae,C.name),re.set(C,Se))}function he(C,ae){const Se=f.get(ae).get(C);u.get(ae)!==Se&&(t.uniformBlockBinding(ae,Se,C.__bindingPointIndex),u.set(ae,Se))}function Ae(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,J={},m={},_=new WeakMap,y=[],p=null,d=!1,v=null,g=null,E=null,R=null,A=null,w=null,D=null,$=new rt(0,0,0),S=0,P=!1,Z=null,ee=null,L=null,q=null,G=null,te.set(0,0,t.canvas.width,t.canvas.height),de.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:_e,disable:Ke,bindFramebuffer:Ie,drawBuffers:z,useProgram:Tt,setBlending:Me,setMaterial:at,setFlipSided:Oe,setCullFace:b,setLineWidth:M,setPolygonOffset:V,setScissorTest:le,activeTexture:ne,bindTexture:se,unbindTexture:ye,compressedTexImage2D:fe,compressedTexImage3D:ve,texImage2D:Te,texImage3D:pe,updateUBOMapping:ce,uniformBlockBinding:he,texStorage2D:je,texStorage3D:De,texSubImage2D:Ce,texSubImage3D:Fe,compressedTexSubImage2D:ie,compressedTexSubImage3D:et,scissor:He,viewport:N,reset:Ae}}function wP(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return m?new OffscreenCanvas(b,M):fa("canvas")}function y(b,M,V,le){let ne=1;if((b.width>le||b.height>le)&&(ne=le/Math.max(b.width,b.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const se=M?ff:Math.floor,ye=se(ne*b.width),fe=se(ne*b.height);f===void 0&&(f=_(ye,fe));const ve=V?_(ye,fe):f;return ve.width=ye,ve.height=fe,ve.getContext("2d").drawImage(b,0,0,ye,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ye+"x"+fe+")."),ve}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return $m(b.width)&&$m(b.height)}function d(b){return a?!1:b.wrapS!==jn||b.wrapT!==jn||b.minFilter!==tn&&b.minFilter!==$t}function v(b,M){return b.generateMipmaps&&M&&b.minFilter!==tn&&b.minFilter!==$t}function g(b){t.generateMipmap(b)}function E(b,M,V,le,ne=!1){if(a===!1)return M;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=M;if(M===t.RED&&(V===t.FLOAT&&(se=t.R32F),V===t.HALF_FLOAT&&(se=t.R16F),V===t.UNSIGNED_BYTE&&(se=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(se=t.R8UI),V===t.UNSIGNED_SHORT&&(se=t.R16UI),V===t.UNSIGNED_INT&&(se=t.R32UI),V===t.BYTE&&(se=t.R8I),V===t.SHORT&&(se=t.R16I),V===t.INT&&(se=t.R32I)),M===t.RG&&(V===t.FLOAT&&(se=t.RG32F),V===t.HALF_FLOAT&&(se=t.RG16F),V===t.UNSIGNED_BYTE&&(se=t.RG8)),M===t.RGBA){const ye=ne?uc:it.getTransfer(le);V===t.FLOAT&&(se=t.RGBA32F),V===t.HALF_FLOAT&&(se=t.RGBA16F),V===t.UNSIGNED_BYTE&&(se=ye===ct?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(se=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(se=t.RGB5_A1)}return(se===t.R16F||se===t.R32F||se===t.RG16F||se===t.RG32F||se===t.RGBA16F||se===t.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(b,M,V){return v(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==$t?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){return b===tn||b===vm||b===To?t.NEAREST:t.LINEAR}function w(b){const M=b.target;M.removeEventListener("dispose",w),$(M),M.isVideoTexture&&u.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),P(M)}function $(b){const M=i.get(b);if(M.__webglInit===void 0)return;const V=b.source,le=h.get(V);if(le){const ne=le[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(b),Object.keys(le).length===0&&h.delete(V)}i.remove(b)}function S(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const V=b.source,le=h.get(V);delete le[M.__cacheKey],o.memory.textures--}function P(b){const M=b.texture,V=i.get(b),le=i.get(M);if(le.__webglTexture!==void 0&&(t.deleteTexture(le.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(V.__webglFramebuffer[ne]))for(let se=0;se<V.__webglFramebuffer[ne].length;se++)t.deleteFramebuffer(V.__webglFramebuffer[ne][se]);else t.deleteFramebuffer(V.__webglFramebuffer[ne]);V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ne])}else{if(Array.isArray(V.__webglFramebuffer))for(let ne=0;ne<V.__webglFramebuffer.length;ne++)t.deleteFramebuffer(V.__webglFramebuffer[ne]);else t.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ne=0;ne<V.__webglColorRenderbuffer.length;ne++)V.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ne]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let ne=0,se=M.length;ne<se;ne++){const ye=i.get(M[ne]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(M[ne])}i.remove(M),i.remove(b)}let Z=0;function ee(){Z=0}function L(){const b=Z;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),Z+=1,b}function q(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function G(b,M){const V=i.get(b);if(b.isVideoTexture&&at(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const le=b.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(V,b,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function Q(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){te(V,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function U(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){te(V,b,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function H(b,M){const V=i.get(b);if(b.version>0&&V.__version!==b.version){de(V,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const I={[lf]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[cf]:t.MIRRORED_REPEAT},K={[tn]:t.NEAREST,[vm]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[$t]:t.LINEAR,[Tu]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},J={[gA]:t.NEVER,[EA]:t.ALWAYS,[xA]:t.LESS,[l_]:t.LEQUAL,[vA]:t.EQUAL,[SA]:t.GEQUAL,[_A]:t.GREATER,[yA]:t.NOTEQUAL};function ge(b,M,V){if(M.type===Ei&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===$t||M.magFilter===Tu||M.magFilter===To||M.magFilter===kr||M.minFilter===$t||M.minFilter===Tu||M.minFilter===To||M.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(t.texParameteri(b,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,I[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==jn||M.wrapT!==jn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==tn&&M.minFilter!==$t&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===tn||M.minFilter!==To&&M.minFilter!==kr||M.type===Ei&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===da&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(b,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function B(b,M){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",w));const le=M.source;let ne=h.get(le);ne===void 0&&(ne={},h.set(le,ne));const se=q(M);if(se!==b.__cacheKey){ne[se]===void 0&&(ne[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ne[se].usedTimes++;const ye=ne[b.__cacheKey];ye!==void 0&&(ne[b.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),b.__cacheKey=se,b.__webglTexture=ne[se].texture}return V}function te(b,M,V){let le=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(le=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(le=t.TEXTURE_3D);const ne=B(b,M),se=M.source;n.bindTexture(le,b.__webglTexture,t.TEXTURE0+V);const ye=i.get(se);if(se.version!==ye.__version||ne===!0){n.activeTexture(t.TEXTURE0+V);const fe=it.getPrimaries(it.workingColorSpace),ve=M.colorSpace===Ln?null:it.getPrimaries(M.colorSpace),Ce=M.colorSpace===Ln||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Fe=d(M)&&p(M.image)===!1;let ie=y(M.image,Fe,!1,r.maxTextureSize);ie=Oe(M,ie);const et=p(ie)||a,je=s.convert(M.format,M.colorSpace);let De=s.convert(M.type),Te=E(M.internalFormat,je,De,M.colorSpace,M.isVideoTexture);ge(le,M,et);let pe;const He=M.mipmaps,N=a&&M.isVideoTexture!==!0&&Te!==o_,ce=ye.__version===void 0||ne===!0,he=se.dataReady,Ae=R(M,ie,et);if(M.isDepthTexture)Te=t.DEPTH_COMPONENT,a?M.type===Ei?Te=t.DEPTH_COMPONENT32F:M.type===Ki?Te=t.DEPTH_COMPONENT24:M.type===Vr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:M.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Gr&&Te===t.DEPTH_COMPONENT&&M.type!==Sh&&M.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ki,De=s.convert(M.type)),M.format===Qs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,M.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Vr,De=s.convert(M.type))),ce&&(N?n.texStorage2D(t.TEXTURE_2D,1,Te,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,je,De,null));else if(M.isDataTexture)if(He.length>0&&et){N&&ce&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,He[0].width,He[0].height);for(let C=0,ae=He.length;C<ae;C++)pe=He[C],N?he&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,pe.width,pe.height,je,De,pe.data):n.texImage2D(t.TEXTURE_2D,C,Te,pe.width,pe.height,0,je,De,pe.data);M.generateMipmaps=!1}else N?(ce&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,ie.width,ie.height),he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,je,De,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Te,ie.width,ie.height,0,je,De,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){N&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Te,He[0].width,He[0].height,ie.depth);for(let C=0,ae=He.length;C<ae;C++)pe=He[C],M.format!==Wn?je!==null?N?he&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,pe.width,pe.height,ie.depth,je,pe.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,C,Te,pe.width,pe.height,ie.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,C,0,0,0,pe.width,pe.height,ie.depth,je,De,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,C,Te,pe.width,pe.height,ie.depth,0,je,De,pe.data)}else{N&&ce&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,He[0].width,He[0].height);for(let C=0,ae=He.length;C<ae;C++)pe=He[C],M.format!==Wn?je!==null?N?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,C,0,0,pe.width,pe.height,je,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,C,Te,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?he&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,pe.width,pe.height,je,De,pe.data):n.texImage2D(t.TEXTURE_2D,C,Te,pe.width,pe.height,0,je,De,pe.data)}else if(M.isDataArrayTexture)N?(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ae,Te,ie.width,ie.height,ie.depth),he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,je,De,ie.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,je,De,ie.data);else if(M.isData3DTexture)N?(ce&&n.texStorage3D(t.TEXTURE_3D,Ae,Te,ie.width,ie.height,ie.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,je,De,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,je,De,ie.data);else if(M.isFramebufferTexture){if(ce)if(N)n.texStorage2D(t.TEXTURE_2D,Ae,Te,ie.width,ie.height);else{let C=ie.width,ae=ie.height;for(let re=0;re<Ae;re++)n.texImage2D(t.TEXTURE_2D,re,Te,C,ae,0,je,De,null),C>>=1,ae>>=1}}else if(He.length>0&&et){N&&ce&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,He[0].width,He[0].height);for(let C=0,ae=He.length;C<ae;C++)pe=He[C],N?he&&n.texSubImage2D(t.TEXTURE_2D,C,0,0,je,De,pe):n.texImage2D(t.TEXTURE_2D,C,Te,je,De,pe);M.generateMipmaps=!1}else N?(ce&&n.texStorage2D(t.TEXTURE_2D,Ae,Te,ie.width,ie.height),he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,De,ie)):n.texImage2D(t.TEXTURE_2D,0,Te,je,De,ie);v(M,et)&&g(le),ye.__version=se.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function de(b,M,V){if(M.image.length!==6)return;const le=B(b,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+V);const se=i.get(ne);if(ne.version!==se.__version||le===!0){n.activeTexture(t.TEXTURE0+V);const ye=it.getPrimaries(it.workingColorSpace),fe=M.colorSpace===Ln?null:it.getPrimaries(M.colorSpace),ve=M.colorSpace===Ln||ye===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,ie=[];for(let C=0;C<6;C++)!Ce&&!Fe?ie[C]=y(M.image[C],!1,!0,r.maxCubemapSize):ie[C]=Fe?M.image[C].image:M.image[C],ie[C]=Oe(M,ie[C]);const et=ie[0],je=p(et)||a,De=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),pe=E(M.internalFormat,De,Te,M.colorSpace),He=a&&M.isVideoTexture!==!0,N=se.__version===void 0||le===!0,ce=ne.dataReady;let he=R(M,et,je);ge(t.TEXTURE_CUBE_MAP,M,je);let Ae;if(Ce){He&&N&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,pe,et.width,et.height);for(let C=0;C<6;C++){Ae=ie[C].mipmaps;for(let ae=0;ae<Ae.length;ae++){const re=Ae[ae];M.format!==Wn?De!==null?He?ce&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae,0,0,re.width,re.height,De,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae,pe,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae,0,0,re.width,re.height,De,Te,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae,pe,re.width,re.height,0,De,Te,re.data)}}}else{Ae=M.mipmaps,He&&N&&(Ae.length>0&&he++,n.texStorage2D(t.TEXTURE_CUBE_MAP,he,pe,ie[0].width,ie[0].height));for(let C=0;C<6;C++)if(Fe){He?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,ie[C].width,ie[C].height,De,Te,ie[C].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,pe,ie[C].width,ie[C].height,0,De,Te,ie[C].data);for(let ae=0;ae<Ae.length;ae++){const Se=Ae[ae].image[C].image;He?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae+1,0,0,Se.width,Se.height,De,Te,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae+1,pe,Se.width,Se.height,0,De,Te,Se.data)}}else{He?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,De,Te,ie[C]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,pe,De,Te,ie[C]);for(let ae=0;ae<Ae.length;ae++){const re=Ae[ae];He?ce&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae+1,0,0,De,Te,re.image[C]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+C,ae+1,pe,De,Te,re.image[C])}}}v(M,je)&&g(t.TEXTURE_CUBE_MAP),se.__version=ne.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ee(b,M,V,le,ne,se){const ye=s.convert(V.format,V.colorSpace),fe=s.convert(V.type),ve=E(V.internalFormat,ye,fe,V.colorSpace);if(!i.get(M).__hasExternalTextures){const Fe=Math.max(1,M.width>>se),ie=Math.max(1,M.height>>se);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,se,ve,Fe,ie,M.depth,0,ye,fe,null):n.texImage2D(ne,se,ve,Fe,ie,0,ye,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Me(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,ne,i.get(V).__webglTexture,0,Le(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,le,ne,i.get(V).__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(b,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let le=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(V||Me(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===Ei?le=t.DEPTH_COMPONENT32F:ne.type===Ki&&(le=t.DEPTH_COMPONENT24));const se=Le(M);Me(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,se,le,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,se,le,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,le,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const le=Le(M);V&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):Me(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const le=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<le.length;ne++){const se=le[ne],ye=s.convert(se.format,se.colorSpace),fe=s.convert(se.type),ve=E(se.internalFormat,ye,fe,se.colorSpace),Ce=Le(M);V&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ve,M.width,M.height):Me(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function _e(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);const le=i.get(M.depthTexture).__webglTexture,ne=Le(M);if(M.depthTexture.format===Gr)Me(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,le,0);else if(M.depthTexture.format===Qs)Me(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ke(b){const M=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,b)}else if(V){M.__webglDepthbuffer=[];for(let le=0;le<6;le++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[le]),M.__webglDepthbuffer[le]=t.createRenderbuffer(),Pe(M.__webglDepthbuffer[le],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Pe(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ie(b,M,V){const le=i.get(b);M!==void 0&&Ee(le.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ke(b)}function z(b){const M=b.texture,V=i.get(b),le=i.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture()),le.__version=M.version,o.memory.textures++);const ne=b.isWebGLCubeRenderTarget===!0,se=b.isWebGLMultipleRenderTargets===!0,ye=p(b)||a;if(ne){V.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)V.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else V.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)V.__webglFramebuffer[fe]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(se)if(r.drawBuffers){const fe=b.texture;for(let ve=0,Ce=fe.length;ve<Ce;ve++){const Fe=i.get(fe[ve]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Me(b)===!1){const fe=se?M:[M];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ve=0;ve<fe.length;ve++){const Ce=fe[ve];V.__webglColorRenderbuffer[ve]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ve]);const Fe=s.convert(Ce.format,Ce.colorSpace),ie=s.convert(Ce.type),et=E(Ce.internalFormat,Fe,ie,Ce.colorSpace,b.isXRRenderTarget===!0),je=Le(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,et,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,V.__webglColorRenderbuffer[ve])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(V.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),ge(t.TEXTURE_CUBE_MAP,M,ye);for(let fe=0;fe<6;fe++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Ee(V.__webglFramebuffer[fe][ve],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else Ee(V.__webglFramebuffer[fe],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(M,ye)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(se){const fe=b.texture;for(let ve=0,Ce=fe.length;ve<Ce;ve++){const Fe=fe[ve],ie=i.get(Fe);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),ge(t.TEXTURE_2D,Fe,ye),Ee(V.__webglFramebuffer,b,Fe,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,0),v(Fe,ye)&&g(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,le.__webglTexture),ge(fe,M,ye),a&&M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)Ee(V.__webglFramebuffer[ve],b,M,t.COLOR_ATTACHMENT0,fe,ve);else Ee(V.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,fe,0);v(M,ye)&&g(fe),n.unbindTexture()}b.depthBuffer&&Ke(b)}function Tt(b){const M=p(b)||a,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let le=0,ne=V.length;le<ne;le++){const se=V[le];if(v(se,M)){const ye=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(se).__webglTexture;n.bindTexture(ye,fe),g(ye),n.unbindTexture()}}}function be(b){if(a&&b.samples>0&&Me(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,le=b.height;let ne=t.COLOR_BUFFER_BIT;const se=[],ye=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(b),ve=b.isWebGLMultipleRenderTargets===!0;if(ve)for(let Ce=0;Ce<M.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){se.push(t.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&se.push(ye);const Fe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Fe===!1&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),ve&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]),Fe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ye]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ye])),ve){const ie=i.get(M[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ie,0)}t.blitFramebuffer(0,0,V,le,0,0,V,le,ne,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ve)for(let Ce=0;Ce<M.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ce]);const Fe=i.get(M[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Le(b){return Math.min(r.maxSamples,b.samples)}function Me(b){const M=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(b){const M=o.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Oe(b,M){const V=b.colorSpace,le=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===uf||V!==Di&&V!==Ln&&(it.getTransfer(V)===ct?a===!1?e.has("EXT_sRGB")===!0&&le===Wn?(b.format=uf,b.minFilter=$t,b.generateMipmaps=!1):M=u_.sRGBToLinear(M):(le!==Wn||ne!==ar)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=L,this.resetTextureUnits=ee,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=U,this.setTextureCube=H,this.rebindTextures=Ie,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Ke,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=Me}function TP(t,e,n){const i=n.isWebGL2;function r(s,o=Ln){let a;const l=it.getTransfer(o);if(s===ar)return t.UNSIGNED_BYTE;if(s===t_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===n_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===rA)return t.BYTE;if(s===sA)return t.SHORT;if(s===Sh)return t.UNSIGNED_SHORT;if(s===e_)return t.INT;if(s===Ki)return t.UNSIGNED_INT;if(s===Ei)return t.FLOAT;if(s===da)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===oA)return t.ALPHA;if(s===Wn)return t.RGBA;if(s===aA)return t.LUMINANCE;if(s===lA)return t.LUMINANCE_ALPHA;if(s===Gr)return t.DEPTH_COMPONENT;if(s===Qs)return t.DEPTH_STENCIL;if(s===uf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===cA)return t.RED;if(s===i_)return t.RED_INTEGER;if(s===uA)return t.RG;if(s===r_)return t.RG_INTEGER;if(s===s_)return t.RGBA_INTEGER;if(s===Au||s===bu||s===Ru||s===Cu)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Au)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ru)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Au)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ru)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_m||s===ym||s===Sm||s===Em)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_m)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ym)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Em)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===o_)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Mm||s===wm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Mm)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===wm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tm||s===Am||s===bm||s===Rm||s===Cm||s===Pm||s===Nm||s===Lm||s===Dm||s===Um||s===Im||s===Om||s===Fm||s===km)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Am)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Um)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Im)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Om)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===km)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pu||s===zm||s===Bm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pu)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Bm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dA||s===Hm||s===Vm||s===Gm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Hm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Vm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Gm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class AP extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Io extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bP={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Io,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Io,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Io,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),d=this._getHandJoint(c,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Io;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const RP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class PP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new dr({extensions:{fragDepth:!0},vertexShader:RP,fragmentShader:CP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bt(new no(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class NP extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const y=new PP,p=n.getContextAttributes();let d=null,v=null;const g=[],E=[],R=new ze;let A=null;const w=new yn;w.layers.enable(1),w.viewport=new zt;const D=new yn;D.layers.enable(2),D.viewport=new zt;const $=[w,D],S=new AP;S.layers.enable(1),S.layers.enable(2);let P=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let te=g[B];return te===void 0&&(te=new ed,g[B]=te),te.getTargetRaySpace()},this.getControllerGrip=function(B){let te=g[B];return te===void 0&&(te=new ed,g[B]=te),te.getGripSpace()},this.getHand=function(B){let te=g[B];return te===void 0&&(te=new ed,g[B]=te),te.getHandSpace()};function ee(B){const te=E.indexOf(B.inputSource);if(te===-1)return;const de=g[te];de!==void 0&&(de.update(B.inputSource,B.frame,c||o),de.dispatchEvent({type:B.type,data:B.inputSource}))}function L(){r.removeEventListener("select",ee),r.removeEventListener("selectstart",ee),r.removeEventListener("selectend",ee),r.removeEventListener("squeeze",ee),r.removeEventListener("squeezestart",ee),r.removeEventListener("squeezeend",ee),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",q);for(let B=0;B<g.length;B++){const te=E[B];te!==null&&(E[B]=null,g[B].disconnect(te))}P=null,Z=null,y.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,v=null,ge.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",ee),r.addEventListener("selectstart",ee),r.addEventListener("selectend",ee),r.addEventListener("squeeze",ee),r.addEventListener("squeezestart",ee),r.addEventListener("squeezeend",ee),r.addEventListener("end",L),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Zr(m.framebufferWidth,m.framebufferHeight,{format:Wn,type:ar,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,de=null,Ee=null;p.depth&&(Ee=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=p.stencil?Qs:Gr,de=p.stencil?Vr:Ki);const Pe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Pe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Zr(h.textureWidth,h.textureHeight,{format:Wn,type:ar,depthTexture:new S_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const _e=e.properties.get(v);_e.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ge.setContext(r),ge.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(B){for(let te=0;te<B.removed.length;te++){const de=B.removed[te],Ee=E.indexOf(de);Ee>=0&&(E[Ee]=null,g[Ee].disconnect(de))}for(let te=0;te<B.added.length;te++){const de=B.added[te];let Ee=E.indexOf(de);if(Ee===-1){for(let _e=0;_e<g.length;_e++)if(_e>=E.length){E.push(de),Ee=_e;break}else if(E[_e]===null){E[_e]=de,Ee=_e;break}if(Ee===-1)break}const Pe=g[Ee];Pe&&Pe.connect(de)}}const G=new O,Q=new O;function U(B,te,de){G.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(de.matrixWorld);const Ee=G.distanceTo(Q),Pe=te.projectionMatrix.elements,_e=de.projectionMatrix.elements,Ke=Pe[14]/(Pe[10]-1),Ie=Pe[14]/(Pe[10]+1),z=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],be=(Pe[8]-1)/Pe[0],Le=(_e[8]+1)/_e[0],Me=Ke*be,at=Ke*Le,Oe=Ee/(-be+Le),b=Oe*-be;te.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(b),B.translateZ(Oe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const M=Ke+Oe,V=Ie+Oe,le=Me-b,ne=at+(Ee-b),se=z*Ie/V*M,ye=Tt*Ie/V*M;B.projectionMatrix.makePerspective(le,ne,se,ye,M,V),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function H(B,te){te===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(te.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;y.texture!==null&&(B.near=y.depthNear,B.far=y.depthFar),S.near=D.near=w.near=B.near,S.far=D.far=w.far=B.far,(P!==S.near||Z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,Z=S.far,w.near=P,w.far=Z,D.near=P,D.far=Z,w.updateProjectionMatrix(),D.updateProjectionMatrix(),B.updateProjectionMatrix());const te=B.parent,de=S.cameras;H(S,te);for(let Ee=0;Ee<de.length;Ee++)H(de[Ee],te);de.length===2?U(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),I(B,S,te)};function I(B,te,de){de===null?B.matrix.copy(te.matrixWorld):(B.matrix.copy(de.matrixWorld),B.matrix.invert(),B.matrix.multiply(te.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(te.projectionMatrix),B.projectionMatrixInverse.copy(te.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=df*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null};let K=null;function J(B,te){if(u=te.getViewerPose(c||o),_=te,u!==null){const de=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let Ee=!1;de.length!==S.cameras.length&&(S.cameras.length=0,Ee=!0);for(let _e=0;_e<de.length;_e++){const Ke=de[_e];let Ie=null;if(m!==null)Ie=m.getViewport(Ke);else{const Tt=f.getViewSubImage(h,Ke);Ie=Tt.viewport,_e===0&&(e.setRenderTargetTextures(v,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(v))}let z=$[_e];z===void 0&&(z=new yn,z.layers.enable(_e),z.viewport=new zt,$[_e]=z),z.matrix.fromArray(Ke.transform.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale),z.projectionMatrix.fromArray(Ke.projectionMatrix),z.projectionMatrixInverse.copy(z.projectionMatrix).invert(),z.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),_e===0&&(S.matrix.copy(z.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ee===!0&&S.cameras.push(z)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const _e=f.getDepthInformation(de[0]);_e&&_e.isValid&&_e.texture&&y.init(e,_e,r.renderState)}}for(let de=0;de<g.length;de++){const Ee=E[de],Pe=g[de];Ee!==null&&Pe!==void 0&&Pe.update(Ee,te,c||o)}y.render(e,S),K&&K(B,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const ge=new y_;ge.setAnimationLoop(J),this.setAnimationLoop=function(B){K=B},this.dispose=function(){}}}function LP(t,e){function n(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,g_(t)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,v,g,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,v,g):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,n(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===mn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,n(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===mn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,n(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,n(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const v=e.get(d).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const g=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g,n(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,v,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*v,p.scale.value=g*.5,d.map&&(p.map.value=d.map,n(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,n(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,n(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,v){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const v=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DP(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const E=g.program;i.uniformBlockBinding(v,E)}function c(v,g){let E=r[v.id];E===void 0&&(_(v),E=u(v),r[v.id]=E,v.addEventListener("dispose",p));const R=g.program;i.updateUBOMapping(v,R);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function u(v){const g=f();v.__bindingPointIndex=g;const E=t.createBuffer(),R=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,E),E}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const g=r[v.id],E=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=E.length;A<w;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let $=0,S=D.length;$<S;$++){const P=D[$];if(m(P,A,$,R)===!0){const Z=P.__offset,ee=Array.isArray(P.value)?P.value:[P.value];let L=0;for(let q=0;q<ee.length;q++){const G=ee[q],Q=y(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,Z+L,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,L),L+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,g,E,R){const A=v.value,w=g+"_"+E;if(R[w]===void 0)return typeof A=="number"||typeof A=="boolean"?R[w]=A:R[w]=A.clone(),!0;{const D=R[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return R[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(v){const g=v.uniforms;let E=0;const R=16;for(let w=0,D=g.length;w<D;w++){const $=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,P=$.length;S<P;S++){const Z=$[S],ee=Array.isArray(Z.value)?Z.value:[Z.value];for(let L=0,q=ee.length;L<q;L++){const G=ee[L],Q=y(G),U=E%R;U!==0&&R-U<Q.boundary&&(E+=R-U),Z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=Q.storage}}}const A=E%R;return A>0&&(E+=R-A),v.__size=E,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function p(v){const g=v.target;g.removeEventListener("dispose",p);const E=o.indexOf(g.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class bh{constructor(e={}){const{canvas:n=TA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=or,this.toneMappingExposure=1;const g=this;let E=!1,R=0,A=0,w=null,D=-1,$=null;const S=new zt,P=new zt;let Z=null;const ee=new rt(0);let L=0,q=n.width,G=n.height,Q=1,U=null,H=null;const I=new zt(0,0,q,G),K=new zt(0,0,q,G);let J=!1;const ge=new __;let B=!1,te=!1,de=null;const Ee=new It,Pe=new ze,_e=new O,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return w===null?Q:1}let z=i;function Tt(T,k){for(let W=0;W<T.length;W++){const X=T[W],j=n.getContext(X,k);if(j!==null)return j}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${yh}`),n.addEventListener("webglcontextlost",Ae,!1),n.addEventListener("webglcontextrestored",C,!1),n.addEventListener("webglcontextcreationerror",ae,!1),z===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),z=Tt(k,T),z===null)throw Tt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let be,Le,Me,at,Oe,b,M,V,le,ne,se,ye,fe,ve,Ce,Fe,ie,et,je,De,Te,pe,He,N;function ce(){be=new BC(z),Le=new DC(z,be,e),be.init(Le),pe=new TP(z,be,Le),Me=new MP(z,be,Le),at=new GC(z),Oe=new cP,b=new wP(z,be,Me,Oe,Le,pe,at),M=new IC(g),V=new zC(g),le=new KA(z,Le),He=new NC(z,be,le,Le),ne=new HC(z,le,at,He),se=new $C(z,ne,le,at),je=new XC(z,Le,b),Fe=new UC(Oe),ye=new lP(g,M,V,be,Le,He,Fe),fe=new LP(g,Oe),ve=new dP,Ce=new xP(be,Le),et=new PC(g,M,V,Me,se,h,l),ie=new EP(g,se,Le),N=new DP(z,at,Le,Me),De=new LC(z,be,at,Le),Te=new VC(z,be,at,Le),at.programs=ye.programs,g.capabilities=Le,g.extensions=be,g.properties=Oe,g.renderLists=ve,g.shadowMap=ie,g.state=Me,g.info=at}ce();const he=new NP(g,z);this.xr=he,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=be.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=be.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(q,G,!1))},this.getSize=function(T){return T.set(q,G)},this.setSize=function(T,k,W=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,G=k,n.width=Math.floor(T*Q),n.height=Math.floor(k*Q),W===!0&&(n.style.width=T+"px",n.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(q*Q,G*Q).floor()},this.setDrawingBufferSize=function(T,k,W){q=T,G=k,Q=W,n.width=Math.floor(T*W),n.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(I)},this.setViewport=function(T,k,W,X){T.isVector4?I.set(T.x,T.y,T.z,T.w):I.set(T,k,W,X),Me.viewport(S.copy(I).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,k,W,X){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,k,W,X),Me.scissor(P.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(T){Me.setScissorTest(J=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(T=!0,k=!0,W=!0){let X=0;if(T){let j=!1;if(w!==null){const me=w.texture.format;j=me===s_||me===r_||me===i_}if(j){const me=w.texture.type,we=me===ar||me===Ki||me===Sh||me===Vr||me===t_||me===n_,Ne=et.getClearColor(),Ue=et.getClearAlpha(),We=Ne.r,ke=Ne.g,Ve=Ne.b;we?(m[0]=We,m[1]=ke,m[2]=Ve,m[3]=Ue,z.clearBufferuiv(z.COLOR,0,m)):(_[0]=We,_[1]=ke,_[2]=Ve,_[3]=Ue,z.clearBufferiv(z.COLOR,0,_))}else X|=z.COLOR_BUFFER_BIT}k&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ae,!1),n.removeEventListener("webglcontextrestored",C,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ve.dispose(),Ce.dispose(),Oe.dispose(),M.dispose(),V.dispose(),se.dispose(),He.dispose(),N.dispose(),ye.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ot),he.removeEventListener("sessionend",Qe),de&&(de.dispose(),de=null),yt.stop()};function Ae(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=at.autoReset,k=ie.enabled,W=ie.autoUpdate,X=ie.needsUpdate,j=ie.type;ce(),at.autoReset=T,ie.enabled=k,ie.autoUpdate=W,ie.needsUpdate=X,ie.type=j}function ae(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function re(T){const k=T.target;k.removeEventListener("dispose",re),Se(k)}function Se(T){Re(T),Oe.remove(T)}function Re(T){const k=Oe.get(T).programs;k!==void 0&&(k.forEach(function(W){ye.releaseProgram(W)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,X,j,me){k===null&&(k=Ke);const we=j.isMesh&&j.matrixWorld.determinant()<0,Ne=U_(T,k,W,X,j);Me.setMaterial(X,we);let Ue=W.index,We=1;if(X.wireframe===!0){if(Ue=ne.getWireframeAttribute(W),Ue===void 0)return;We=2}const ke=W.drawRange,Ve=W.attributes.position;let St=ke.start*We,gn=(ke.start+ke.count)*We;me!==null&&(St=Math.max(St,me.start*We),gn=Math.min(gn,(me.start+me.count)*We)),Ue!==null?(St=Math.max(St,0),gn=Math.min(gn,Ue.count)):Ve!=null&&(St=Math.max(St,0),gn=Math.min(gn,Ve.count));const Nt=gn-St;if(Nt<0||Nt===1/0)return;He.setup(j,X,Ne,W,Ue);let fi,ft=De;if(Ue!==null&&(fi=le.get(Ue),ft=Te,ft.setIndex(fi)),j.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*Ie()),ft.setMode(z.LINES)):ft.setMode(z.TRIANGLES);else if(j.isLine){let Xe=X.linewidth;Xe===void 0&&(Xe=1),Me.setLineWidth(Xe*Ie()),j.isLineSegments?ft.setMode(z.LINES):j.isLineLoop?ft.setMode(z.LINE_LOOP):ft.setMode(z.LINE_STRIP)}else j.isPoints?ft.setMode(z.POINTS):j.isSprite&&ft.setMode(z.TRIANGLES);if(j.isBatchedMesh)ft.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ft.renderInstances(St,Nt,j.count);else if(W.isInstancedBufferGeometry){const Xe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,jc=Math.min(W.instanceCount,Xe);ft.renderInstances(St,Nt,jc)}else ft.render(St,Nt)};function Je(T,k,W){T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,ba(T,k,W),T.side=ur,T.needsUpdate=!0,ba(T,k,W),T.side=ni):ba(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),p=Ce.get(W),p.init(),v.push(p),W.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),T!==W&&T.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(p.pushLight(j),j.castShadow&&p.pushShadow(j))}),p.setupLights(g._useLegacyLights);const X=new Set;return T.traverse(function(j){const me=j.material;if(me)if(Array.isArray(me))for(let we=0;we<me.length;we++){const Ne=me[we];Je(Ne,W,j),X.add(Ne)}else Je(me,W,j),X.add(me)}),v.pop(),p=null,X},this.compileAsync=function(T,k,W=null){const X=this.compile(T,k,W);return new Promise(j=>{function me(){if(X.forEach(function(we){Oe.get(we).currentProgram.isReady()&&X.delete(we)}),X.size===0){j(T);return}setTimeout(me,10)}be.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ye=null;function st(T){Ye&&Ye(T)}function Ot(){yt.stop()}function Qe(){yt.start()}const yt=new y_;yt.setAnimationLoop(st),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(T){Ye=T,he.setAnimationLoop(T),T===null?yt.stop():yt.start()},he.addEventListener("sessionstart",Ot),he.addEventListener("sessionend",Qe),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(k),k=he.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,k,w),p=Ce.get(T,v.length),p.init(),v.push(p),Ee.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ge.setFromProjectionMatrix(Ee),te=this.localClippingEnabled,B=Fe.init(this.clippingPlanes,te),y=ve.get(T,d.length),y.init(),d.push(y),Jt(T,k,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(U,H),this.info.render.frame++,B===!0&&Fe.beginShadows();const W=p.state.shadowsArray;if(ie.render(W,T,k),B===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1)&&et.render(y,T),p.setupLights(g._useLegacyLights),k.isArrayCamera){const X=k.cameras;for(let j=0,me=X.length;j<me;j++){const we=X[j];Rh(y,T,we,we.viewport)}}else Rh(y,T,k);w!==null&&(b.updateMultisampleRenderTarget(w),b.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(g,T,k),He.resetDefaultState(),D=-1,$=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Jt(T,k,W,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ge.intersectsSprite(T)){X&&_e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const we=se.update(T),Ne=T.material;Ne.visible&&y.push(T,we,Ne,W,_e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ge.intersectsObject(T))){const we=se.update(T),Ne=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),_e.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(T.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ne)){const Ue=we.groups;for(let We=0,ke=Ue.length;We<ke;We++){const Ve=Ue[We],St=Ne[Ve.materialIndex];St&&St.visible&&y.push(T,we,St,W,_e.z,Ve)}}else Ne.visible&&y.push(T,we,Ne,W,_e.z,null)}}const me=T.children;for(let we=0,Ne=me.length;we<Ne;we++)Jt(me[we],k,W,X)}function Rh(T,k,W,X){const j=T.opaque,me=T.transmissive,we=T.transparent;p.setupLightsView(W),B===!0&&Fe.setGlobalState(g.clippingPlanes,W),me.length>0&&D_(j,me,k,W),X&&Me.viewport(S.copy(X)),j.length>0&&Aa(j,k,W),me.length>0&&Aa(me,k,W),we.length>0&&Aa(we,k,W),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function D_(T,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const me=Le.isWebGL2;de===null&&(de=new Zr(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?da:ar,minFilter:kr,samples:me?4:0})),g.getDrawingBufferSize(Pe),me?de.setSize(Pe.x,Pe.y):de.setSize(ff(Pe.x),ff(Pe.y));const we=g.getRenderTarget();g.setRenderTarget(de),g.getClearColor(ee),L=g.getClearAlpha(),L<1&&g.setClearColor(16777215,.5),g.clear();const Ne=g.toneMapping;g.toneMapping=or,Aa(T,W,X),b.updateMultisampleRenderTarget(de),b.updateRenderTargetMipmap(de);let Ue=!1;for(let We=0,ke=k.length;We<ke;We++){const Ve=k[We],St=Ve.object,gn=Ve.geometry,Nt=Ve.material,fi=Ve.group;if(Nt.side===ni&&St.layers.test(X.layers)){const ft=Nt.side;Nt.side=mn,Nt.needsUpdate=!0,Ch(St,W,X,gn,Nt,fi),Nt.side=ft,Nt.needsUpdate=!0,Ue=!0}}Ue===!0&&(b.updateMultisampleRenderTarget(de),b.updateRenderTargetMipmap(de)),g.setRenderTarget(we),g.setClearColor(ee,L),g.toneMapping=Ne}function Aa(T,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let j=0,me=T.length;j<me;j++){const we=T[j],Ne=we.object,Ue=we.geometry,We=X===null?we.material:X,ke=we.group;Ne.layers.test(W.layers)&&Ch(Ne,k,W,Ue,We,ke)}}function Ch(T,k,W,X,j,me){T.onBeforeRender(g,k,W,X,j,me),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),j.onBeforeRender(g,k,W,X,T,me),j.transparent===!0&&j.side===ni&&j.forceSinglePass===!1?(j.side=mn,j.needsUpdate=!0,g.renderBufferDirect(W,k,X,j,T,me),j.side=ur,j.needsUpdate=!0,g.renderBufferDirect(W,k,X,j,T,me),j.side=ni):g.renderBufferDirect(W,k,X,j,T,me),T.onAfterRender(g,k,W,X,j,me)}function ba(T,k,W){k.isScene!==!0&&(k=Ke);const X=Oe.get(T),j=p.state.lights,me=p.state.shadowsArray,we=j.state.version,Ne=ye.getParameters(T,j.state,me,k,W),Ue=ye.getProgramCacheKey(Ne);let We=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?V:M).get(T.envMap||X.environment),We===void 0&&(T.addEventListener("dispose",re),We=new Map,X.programs=We);let ke=We.get(Ue);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===we)return Nh(T,Ne),ke}else Ne.uniforms=ye.getUniforms(T),T.onBuild(W,Ne,g),T.onBeforeCompile(Ne,g),ke=ye.acquireProgram(Ne,Ue),We.set(Ue,ke),X.uniforms=Ne.uniforms;const Ve=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=Fe.uniform),Nh(T,Ne),X.needsLights=O_(T),X.lightsStateVersion=we,X.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.directionalShadowMap.value=j.state.directionalShadowMap,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotShadowMap.value=j.state.spotShadowMap,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMap.value=j.state.pointShadowMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Ph(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Ul.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function Nh(T,k){const W=Oe.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function U_(T,k,W,X,j){k.isScene!==!0&&(k=Ke),b.resetTextureUnits();const me=k.fog,we=X.isMeshStandardMaterial?k.environment:null,Ne=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Di,Ue=(X.isMeshStandardMaterial?V:M).get(X.envMap||we),We=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ve=!!W.morphAttributes.position,St=!!W.morphAttributes.normal,gn=!!W.morphAttributes.color;let Nt=or;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const fi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=fi!==void 0?fi.length:0,Xe=Oe.get(X),jc=p.state.lights;if(B===!0&&(te===!0||T!==$)){const Rn=T===$&&X.id===D;Fe.setState(X,T,Rn)}let vt=!1;X.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==jc.state.version||Xe.outputColorSpace!==Ne||j.isBatchedMesh&&Xe.batching===!1||!j.isBatchedMesh&&Xe.batching===!0||j.isInstancedMesh&&Xe.instancing===!1||!j.isInstancedMesh&&Xe.instancing===!0||j.isSkinnedMesh&&Xe.skinning===!1||!j.isSkinnedMesh&&Xe.skinning===!0||j.isInstancedMesh&&Xe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Xe.instancingColor===!1&&j.instanceColor!==null||Xe.envMap!==Ue||X.fog===!0&&Xe.fog!==me||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Fe.numPlanes||Xe.numIntersection!==Fe.numIntersection)||Xe.vertexAlphas!==We||Xe.vertexTangents!==ke||Xe.morphTargets!==Ve||Xe.morphNormals!==St||Xe.morphColors!==gn||Xe.toneMapping!==Nt||Le.isWebGL2===!0&&Xe.morphTargetsCount!==ft)&&(vt=!0):(vt=!0,Xe.__version=X.version);let xr=Xe.currentProgram;vt===!0&&(xr=ba(X,k,j));let Lh=!1,po=!1,Wc=!1;const Vt=xr.getUniforms(),vr=Xe.uniforms;if(Me.useProgram(xr.program)&&(Lh=!0,po=!0,Wc=!0),X.id!==D&&(D=X.id,po=!0),Lh||$!==T){Vt.setValue(z,"projectionMatrix",T.projectionMatrix),Vt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Rn=Vt.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,_e.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&Vt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Vt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,po=!0,Wc=!0)}if(j.isSkinnedMesh){Vt.setOptional(z,j,"bindMatrix"),Vt.setOptional(z,j,"bindMatrixInverse");const Rn=j.skeleton;Rn&&(Le.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),Vt.setValue(z,"boneTexture",Rn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Vt.setOptional(z,j,"batchingTexture"),Vt.setValue(z,"batchingTexture",j._matricesTexture,b));const Xc=W.morphAttributes;if((Xc.position!==void 0||Xc.normal!==void 0||Xc.color!==void 0&&Le.isWebGL2===!0)&&je.update(j,W,xr),(po||Xe.receiveShadow!==j.receiveShadow)&&(Xe.receiveShadow=j.receiveShadow,Vt.setValue(z,"receiveShadow",j.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vr.envMap.value=Ue,vr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),po&&(Vt.setValue(z,"toneMappingExposure",g.toneMappingExposure),Xe.needsLights&&I_(vr,Wc),me&&X.fog===!0&&fe.refreshFogUniforms(vr,me),fe.refreshMaterialUniforms(vr,X,Q,G,de),Ul.upload(z,Ph(Xe),vr,b)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ul.upload(z,Ph(Xe),vr,b),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Vt.setValue(z,"center",j.center),Vt.setValue(z,"modelViewMatrix",j.modelViewMatrix),Vt.setValue(z,"normalMatrix",j.normalMatrix),Vt.setValue(z,"modelMatrix",j.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Rn=X.uniformsGroups;for(let $c=0,F_=Rn.length;$c<F_;$c++)if(Le.isWebGL2){const Dh=Rn[$c];N.update(Dh,xr),N.bind(Dh,xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xr}function I_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function O_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,k,W){Oe.get(T.texture).__webglTexture=k,Oe.get(T.depthTexture).__webglTexture=W;const X=Oe.get(T);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,k){const W=Oe.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){w=T,R=k,A=W;let X=!0,j=null,me=!1,we=!1;if(T){const Ue=Oe.get(T);Ue.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(z.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ue.__hasExternalTextures&&b.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const ke=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?j=ke[k][W]:j=ke[k],me=!0):Le.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?j=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?j=ke[W]:j=ke,S.copy(T.viewport),P.copy(T.scissor),Z=T.scissorTest}else S.copy(I).multiplyScalar(Q).floor(),P.copy(K).multiplyScalar(Q).floor(),Z=J;if(Me.bindFramebuffer(z.FRAMEBUFFER,j)&&Le.drawBuffers&&X&&Me.drawBuffers(T,j),Me.viewport(S),Me.scissor(P),Me.setScissorTest(Z),me){const Ue=Oe.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ue.__webglTexture,W)}else if(we){const Ue=Oe.get(T.texture),We=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ue.__webglTexture,W||0,We)}D=-1},this.readRenderTargetPixels=function(T,k,W,X,j,me,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){Me.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Ue=T.texture,We=Ue.format,ke=Ue.type;if(We!==Wn&&pe.convert(We)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===da&&(be.has("EXT_color_buffer_half_float")||Le.isWebGL2&&be.has("EXT_color_buffer_float"));if(ke!==ar&&pe.convert(ke)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===Ei&&(Le.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&W>=0&&W<=T.height-j&&z.readPixels(k,W,X,j,pe.convert(We),pe.convert(ke),me)}finally{const Ue=w!==null?Oe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,k,W=0){const X=Math.pow(2,-W),j=Math.floor(k.image.width*X),me=Math.floor(k.image.height*X);b.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,T.x,T.y,j,me),Me.unbindTexture()},this.copyTextureToTexture=function(T,k,W,X=0){const j=k.image.width,me=k.image.height,we=pe.convert(W.format),Ne=pe.convert(W.type);b.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,X,T.x,T.y,j,me,we,Ne,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,X,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,we,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,X,T.x,T.y,we,Ne,k.image),X===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W,X,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=T.max.x-T.min.x+1,we=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Ue=pe.convert(X.format),We=pe.convert(X.type);let ke;if(X.isData3DTexture)b.setTexture3D(X,0),ke=z.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)b.setTexture2DArray(X,0),ke=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const Ve=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),gn=z.getParameter(z.UNPACK_SKIP_PIXELS),Nt=z.getParameter(z.UNPACK_SKIP_ROWS),fi=z.getParameter(z.UNPACK_SKIP_IMAGES),ft=W.isCompressedTexture?W.mipmaps[j]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(ke,j,k.x,k.y,k.z,me,we,Ne,Ue,We,ft.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(ke,j,k.x,k.y,k.z,me,we,Ne,Ue,ft.data)):z.texSubImage3D(ke,j,k.x,k.y,k.z,me,we,Ne,Ue,We,ft),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ve),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,fi),j===0&&X.generateMipmaps&&z.generateMipmap(ke),Me.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){R=0,A=0,w=null,Me.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Eh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===Hc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?jr:a_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===jr?kt:Di}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class UP extends bh{}UP.prototype.isWebGL1Renderer=!0;class b_ extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class IP extends Kt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:$t,this.magFilter=s!==void 0?s:$t,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class io extends gr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new O,h=new O,m=[],_=[],y=[],p=[];for(let d=0;d<=i;d++){const v=[],g=d/i;let E=0;d===0&&o===0?E=.5/n:d===i&&l===Math.PI&&(E=-.5/n);for(let R=0;R<=n;R++){const A=R/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+g*a),f.y=e*Math.cos(o+g*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+g*a),_.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),p.push(A+E,1-g),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const g=u[d][v+1],E=u[d][v],R=u[d+1][v],A=u[d+1][v+1];(d!==0||o>0)&&m.push(g,E,A),(d!==i-1||l<Math.PI)&&m.push(E,R,A)}this.setIndex(m),this.setAttribute("position",new li(_,3)),this.setAttribute("normal",new li(y,3)),this.setAttribute("uv",new li(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const pc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class R_{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const OP=new R_;class Ta{constructor(e){this.manager=e!==void 0?e:OP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";const vi={};class FP extends Error{constructor(e,n){super(e),this.response=n}}class kP extends Ta{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=pc.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(vi[e]!==void 0){vi[e].push({onLoad:n,onProgress:i,onError:r});return}vi[e]=[],vi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=vi[e],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=h?parseInt(h):0,_=m!==0;let y=0;const p=new ReadableStream({start(d){v();function v(){f.read().then(({done:g,value:E})=>{if(g)d.close();else{y+=E.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:m});for(let A=0,w=u.length;A<w;A++){const D=u[A];D.onProgress&&D.onProgress(R)}d.enqueue(E),v()}})}}});return new Response(p)}else throw new FP(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(h);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{pc.add(e,c);const u=vi[e];delete vi[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=vi[e];if(u===void 0)throw this.manager.itemError(e),c;delete vi[e];for(let f=0,h=u.length;f<h;f++){const m=u[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zP extends Ta{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=pc.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=fa("img");function l(){u(),pc.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class BP extends Ta{constructor(e){super(e)}load(e,n,i,r){const s=new Kt,o=new zP(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}let hl;class C_{static getContext(){return hl===void 0&&(hl=new(window.AudioContext||window.webkitAudioContext)),hl}static setContext(e){hl=e}}class HP extends Ta{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new kP(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const c=l.slice(0);C_.getContext().decodeAudioData(c,function(f){n(f)}).catch(a)}catch(c){a(c)}},i,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class VP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ug(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Ug();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Ug(){return(typeof performance>"u"?Date:performance).now()}const Mr=new O,Ig=new Ui,GP=new O,wr=new O;class jP extends sn{constructor(){super(),this.type="AudioListener",this.context=C_.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new VP}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const n=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Mr,Ig,GP),wr.set(0,0,-1).applyQuaternion(Ig),n.positionX){const r=this.context.currentTime+this.timeDelta;n.positionX.linearRampToValueAtTime(Mr.x,r),n.positionY.linearRampToValueAtTime(Mr.y,r),n.positionZ.linearRampToValueAtTime(Mr.z,r),n.forwardX.linearRampToValueAtTime(wr.x,r),n.forwardY.linearRampToValueAtTime(wr.y,r),n.forwardZ.linearRampToValueAtTime(wr.z,r),n.upX.linearRampToValueAtTime(i.x,r),n.upY.linearRampToValueAtTime(i.y,r),n.upZ.linearRampToValueAtTime(i.z,r)}else n.setPosition(Mr.x,Mr.y,Mr.z),n.setOrientation(wr.x,wr.y,wr.z,i.x,i.y,i.z)}}let WP=class extends sn{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const n=this.context.createBufferSource();return n.buffer=this.buffer,n.loop=this.loop,n.loopStart=this.loopStart,n.loopEnd=this.loopEnd,n.onended=this.onEnded.bind(this),n.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=n,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,n=this.filters.length;e<n;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}};const Tr=new O,Og=new Ui,XP=new O,Ar=new O;class $P extends WP{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,n,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=n,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Tr,Og,XP),Ar.set(0,0,1).applyQuaternion(Og);const n=this.panner;if(n.positionX){const i=this.context.currentTime+this.listener.timeDelta;n.positionX.linearRampToValueAtTime(Tr.x,i),n.positionY.linearRampToValueAtTime(Tr.y,i),n.positionZ.linearRampToValueAtTime(Tr.z,i),n.orientationX.linearRampToValueAtTime(Ar.x,i),n.orientationY.linearRampToValueAtTime(Ar.y,i),n.orientationZ.linearRampToValueAtTime(Ar.z,i)}else n.setPosition(Tr.x,Tr.y,Tr.z),n.setOrientation(Ar.x,Ar.y,Ar.z)}}class Fg{constructor(e,n,i=0,r=1/0){this.ray=new wh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}intersectObject(e,n=!0,i=[]){return pf(e,this,i,n),i.sort(kg),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)pf(e[r],this,i,n);return i.sort(kg),i}}function kg(t,e){return t.distance-e.distance}function pf(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,o=r.length;s<o;s++)pf(r[s],e,n,!0)}}class zg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);const Bg={type:"change"},td={type:"start"},Hg={type:"end"},pl=new wh,Vg=new Wi,qP=Math.cos(70*wA.DEG2RAD);class P_ extends ts{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",Ce),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ce),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Bg),i.update(),s=r.NONE},this.update=function(){const N=new O,ce=new Ui().setFromUnitVectors(e.up,new O(0,1,0)),he=ce.clone().invert(),Ae=new O,C=new Ui,ae=new O,re=2*Math.PI;return function(Re=null){const Je=i.object.position;N.copy(Je).sub(i.target),N.applyQuaternion(ce),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&Z(S(Re)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ye=i.minAzimuthAngle,st=i.maxAzimuthAngle;isFinite(Ye)&&isFinite(st)&&(Ye<-Math.PI?Ye+=re:Ye>Math.PI&&(Ye-=re),st<-Math.PI?st+=re:st>Math.PI&&(st-=re),Ye<=st?a.theta=Math.max(Ye,Math.min(st,a.theta)):a.theta=a.theta>(Ye+st)/2?Math.max(Ye,a.theta):Math.min(st,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&A||i.object.isOrthographicCamera?a.radius=I(a.radius):a.radius=I(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(he),Je.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Ot=!1;if(i.zoomToCursor&&A){let Qe=null;if(i.object.isPerspectiveCamera){const yt=N.length();Qe=I(yt*c);const Jt=yt-Qe;i.object.position.addScaledVector(E,Jt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const yt=new O(R.x,R.y,0);yt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Ot=!0;const Jt=new O(R.x,R.y,0);Jt.unproject(i.object),i.object.position.sub(Jt).add(yt),i.object.updateMatrixWorld(),Qe=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Qe!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Qe).add(i.object.position):(pl.origin.copy(i.object.position),pl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(pl.direction))<qP?e.lookAt(i.target):(Vg.setFromNormalAndCoplanarPoint(i.object.up,i.target),pl.intersectPlane(Vg,i.target))))}else i.object.isOrthographicCamera&&(Ot=c!==1,Ot&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix()));return c=1,A=!1,Ot||Ae.distanceToSquared(i.object.position)>o||8*(1-C.dot(i.object.quaternion))>o||ae.distanceToSquared(i.target)>0?(i.dispatchEvent(Bg),Ae.copy(i.object.position),C.copy(i.object.quaternion),ae.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",et),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",V),i.domElement.removeEventListener("wheel",se),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",V),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ce),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new zg,l=new zg;let c=1;const u=new O,f=new ze,h=new ze,m=new ze,_=new ze,y=new ze,p=new ze,d=new ze,v=new ze,g=new ze,E=new O,R=new ze;let A=!1;const w=[],D={};let $=!1;function S(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function P(N){const ce=Math.abs(N*.01);return Math.pow(.95,i.zoomSpeed*ce)}function Z(N){l.theta-=N}function ee(N){l.phi-=N}const L=function(){const N=new O;return function(he,Ae){N.setFromMatrixColumn(Ae,0),N.multiplyScalar(-he),u.add(N)}}(),q=function(){const N=new O;return function(he,Ae){i.screenSpacePanning===!0?N.setFromMatrixColumn(Ae,1):(N.setFromMatrixColumn(Ae,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(he),u.add(N)}}(),G=function(){const N=new O;return function(he,Ae){const C=i.domElement;if(i.object.isPerspectiveCamera){const ae=i.object.position;N.copy(ae).sub(i.target);let re=N.length();re*=Math.tan(i.object.fov/2*Math.PI/180),L(2*he*re/C.clientHeight,i.object.matrix),q(2*Ae*re/C.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(L(he*(i.object.right-i.object.left)/i.object.zoom/C.clientWidth,i.object.matrix),q(Ae*(i.object.top-i.object.bottom)/i.object.zoom/C.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Q(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function H(N,ce){if(!i.zoomToCursor)return;A=!0;const he=i.domElement.getBoundingClientRect(),Ae=N-he.left,C=ce-he.top,ae=he.width,re=he.height;R.x=Ae/ae*2-1,R.y=-(C/re)*2+1,E.set(R.x,R.y,1).unproject(i.object).sub(i.object.position).normalize()}function I(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function K(N){f.set(N.clientX,N.clientY)}function J(N){H(N.clientX,N.clientX),d.set(N.clientX,N.clientY)}function ge(N){_.set(N.clientX,N.clientY)}function B(N){h.set(N.clientX,N.clientY),m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Z(2*Math.PI*m.x/ce.clientHeight),ee(2*Math.PI*m.y/ce.clientHeight),f.copy(h),i.update()}function te(N){v.set(N.clientX,N.clientY),g.subVectors(v,d),g.y>0?Q(P(g.y)):g.y<0&&U(P(g.y)),d.copy(v),i.update()}function de(N){y.set(N.clientX,N.clientY),p.subVectors(y,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(y),i.update()}function Ee(N){H(N.clientX,N.clientY),N.deltaY<0?U(P(N.deltaY)):N.deltaY>0&&Q(P(N.deltaY)),i.update()}function Pe(N){let ce=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?ee(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ce=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?ee(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ce=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?Z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ce=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?Z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ce=!0;break}ce&&(N.preventDefault(),i.update())}function _e(N){if(w.length===1)f.set(N.pageX,N.pageY);else{const ce=pe(N),he=.5*(N.pageX+ce.x),Ae=.5*(N.pageY+ce.y);f.set(he,Ae)}}function Ke(N){if(w.length===1)_.set(N.pageX,N.pageY);else{const ce=pe(N),he=.5*(N.pageX+ce.x),Ae=.5*(N.pageY+ce.y);_.set(he,Ae)}}function Ie(N){const ce=pe(N),he=N.pageX-ce.x,Ae=N.pageY-ce.y,C=Math.sqrt(he*he+Ae*Ae);d.set(0,C)}function z(N){i.enableZoom&&Ie(N),i.enablePan&&Ke(N)}function Tt(N){i.enableZoom&&Ie(N),i.enableRotate&&_e(N)}function be(N){if(w.length==1)h.set(N.pageX,N.pageY);else{const he=pe(N),Ae=.5*(N.pageX+he.x),C=.5*(N.pageY+he.y);h.set(Ae,C)}m.subVectors(h,f).multiplyScalar(i.rotateSpeed);const ce=i.domElement;Z(2*Math.PI*m.x/ce.clientHeight),ee(2*Math.PI*m.y/ce.clientHeight),f.copy(h)}function Le(N){if(w.length===1)y.set(N.pageX,N.pageY);else{const ce=pe(N),he=.5*(N.pageX+ce.x),Ae=.5*(N.pageY+ce.y);y.set(he,Ae)}p.subVectors(y,_).multiplyScalar(i.panSpeed),G(p.x,p.y),_.copy(y)}function Me(N){const ce=pe(N),he=N.pageX-ce.x,Ae=N.pageY-ce.y,C=Math.sqrt(he*he+Ae*Ae);v.set(0,C),g.set(0,Math.pow(v.y/d.y,i.zoomSpeed)),Q(g.y),d.copy(v);const ae=(N.pageX+ce.x)*.5,re=(N.pageY+ce.y)*.5;H(ae,re)}function at(N){i.enableZoom&&Me(N),i.enablePan&&Le(N)}function Oe(N){i.enableZoom&&Me(N),i.enableRotate&&be(N)}function b(N){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",M),i.domElement.addEventListener("pointerup",V)),je(N),N.pointerType==="touch"?Fe(N):le(N))}function M(N){i.enabled!==!1&&(N.pointerType==="touch"?ie(N):ne(N))}function V(N){switch(De(N),w.length){case 0:i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",M),i.domElement.removeEventListener("pointerup",V),i.dispatchEvent(Hg),s=r.NONE;break;case 1:const ce=w[0],he=D[ce];Fe({pointerId:ce,pageX:he.x,pageY:he.y});break}}function le(N){let ce;switch(N.button){case 0:ce=i.mouseButtons.LEFT;break;case 1:ce=i.mouseButtons.MIDDLE;break;case 2:ce=i.mouseButtons.RIGHT;break;default:ce=-1}switch(ce){case is.DOLLY:if(i.enableZoom===!1)return;J(N),s=r.DOLLY;break;case is.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;ge(N),s=r.PAN}else{if(i.enableRotate===!1)return;K(N),s=r.ROTATE}break;case is.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;K(N),s=r.ROTATE}else{if(i.enablePan===!1)return;ge(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(td)}function ne(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;B(N);break;case r.DOLLY:if(i.enableZoom===!1)return;te(N);break;case r.PAN:if(i.enablePan===!1)return;de(N);break}}function se(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(td),Ee(ye(N)),i.dispatchEvent(Hg))}function ye(N){const ce=N.deltaMode,he={clientX:N.clientX,clientY:N.clientY,deltaY:N.deltaY};switch(ce){case 1:he.deltaY*=16;break;case 2:he.deltaY*=100;break}return N.ctrlKey&&!$&&(he.deltaY*=10),he}function fe(N){N.key==="Control"&&($=!0,i.domElement.getRootNode().addEventListener("keyup",ve,{passive:!0,capture:!0}))}function ve(N){N.key==="Control"&&($=!1,i.domElement.getRootNode().removeEventListener("keyup",ve,{passive:!0,capture:!0}))}function Ce(N){i.enabled===!1||i.enablePan===!1||Pe(N)}function Fe(N){switch(Te(N),w.length){case 1:switch(i.touches.ONE){case rs.ROTATE:if(i.enableRotate===!1)return;_e(N),s=r.TOUCH_ROTATE;break;case rs.PAN:if(i.enablePan===!1)return;Ke(N),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(N),s=r.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Tt(N),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(td)}function ie(N){switch(Te(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;be(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Le(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;at(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Oe(N),i.update();break;default:s=r.NONE}}function et(N){i.enabled!==!1&&N.preventDefault()}function je(N){w.push(N.pointerId)}function De(N){delete D[N.pointerId];for(let ce=0;ce<w.length;ce++)if(w[ce]==N.pointerId){w.splice(ce,1);return}}function Te(N){let ce=D[N.pointerId];ce===void 0&&(ce=new ze,D[N.pointerId]=ce),ce.set(N.pageX,N.pageY)}function pe(N){const ce=N.pointerId===w[0]?w[1]:w[0];return D[ce]}i.domElement.addEventListener("contextmenu",et),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",V),i.domElement.addEventListener("wheel",se,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",fe,{passive:!0,capture:!0}),this.update()}}class ro{static createButton(e){const n=document.createElement("button");function i(){let l=null;async function c(h){h.addEventListener("end",u),await e.xr.setSession(h),n.textContent="EXIT VR",l=h}function u(){l.removeEventListener("end",u),n.textContent="ENTER VR",l=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const f={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){l===null?navigator.xr.requestSession("immersive-vr",f).then(c):(l.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(c).catch(h=>{console.warn(h)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",f).then(c).catch(h=>{console.warn(h)})}function r(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function s(){r(),n.textContent="VR NOT SUPPORTED"}function o(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),n.textContent="VR NOT ALLOWED"}function a(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",a(n),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():s(),l&&ro.xrSessionIsGranted&&n.click()}).catch(o),n;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",a(l),l}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{ro.xrSessionIsGranted=!0})}}}ro.xrSessionIsGranted=!1;ro.registerSessionGrantedListener();function YP({progress:t,message:e="Loading panorama..."}){const[n,i]=F.useState("");return F.useEffect(()=>{const r=setInterval(()=>{i(s=>s.length>=3?"":s+".")},500);return()=>clearInterval(r)},[]),x.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50",children:x.jsx("div",{className:"bg-white rounded-lg p-8 max-w-md w-full mx-4",children:x.jsxs("div",{className:"text-center",children:[x.jsx("div",{className:"w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),x.jsxs("h2",{className:"text-xl font-semibold mt-4 text-gray-800",children:[e,n]}),x.jsxs("div",{className:"mt-4",children:[x.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2.5",children:x.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full transition-all duration-300",style:{width:`${t}%`}})}),x.jsxs("p",{className:"text-sm text-gray-600 mt-2",children:[Math.round(t),"%"]})]})]})})})}function KP({imageUrl:t,hotspots:e=[],onHotspotClick:n,onVRModeChange:i,className:r=""}){const s=F.useRef(null),o=F.useRef(null),a=F.useRef(null),l=F.useRef(null),c=F.useRef(null),[u,f]=F.useState(!0),[h,m]=F.useState(0),[_,y]=F.useState(null),[p,d]=F.useState(!1),[v,g]=F.useState(null),E=new HP,R=F.useRef(null),A=F.useRef(null);return F.useEffect(()=>{if(!s.current)return;try{R.current=new(window.AudioContext||window.webkitAudioContext),A.current=new jP}catch(I){console.warn("Audio context initialization failed:",I)}const w=new b_;o.current=w;const D=new yn(75,s.current.clientWidth/s.current.clientHeight,.1,1e3);D.position.set(0,1.6,0),a.current=D;const $=new bh({antialias:!0,alpha:!0,powerPreference:"high-performance"});$.setSize(s.current.clientWidth,s.current.clientHeight),$.setPixelRatio(window.devicePixelRatio),$.xr.enabled=!0,s.current.appendChild($.domElement),l.current=$;const S=ro.createButton($);s.current.appendChild(S);const P=new P_(D,$.domElement);P.enableDamping=!0,P.dampingFactor=.05,P.enableZoom=!1,c.current=P;const Z=new io(500,60,40);Z.scale(-1,1,1);const ee=new BP,L=new R_;L.onProgress=(I,K,J)=>{m(K/J*100)},L.onLoad=()=>{f(!1)},L.onError=I=>{console.error("Error loading:",I),y("Failed to load panorama"),f(!1)},ee.setCrossOrigin("anonymous"),ee.load(t,I=>{const K=new ri({map:I}),J=new bt(Z,K);w.add(J)},I=>{m(I.loaded/I.total*100)},I=>{console.error("Error loading panorama:",I),y("Failed to load panorama"),f(!1)});const q=[];e.forEach(I=>{const K=new io(5,32,32),J=new ri({color:16711680,transparent:!0,opacity:.8}),ge=new bt(K,J);if(ge.position.copy(I.position),ge.userData={hotspot:I},w.add(ge),q.push(ge),I.audioUrl&&A.current)try{const B=new $P(A.current);E.load(I.audioUrl,te=>{B.setBuffer(te),B.setRefDistance(20),B.setRolloffFactor(1),B.setDistanceModel("inverse"),ge.add(B)})}catch(B){console.warn("Failed to create audio for hotspot:",B)}}),$.xr.addEventListener("sessionstart",()=>{d(!0),i==null||i(!0);const I=$.xr.getController(0),K=$.xr.getController(1),J=new bt(new Jr(.02,.02,.1),new ri({color:4474111})),ge=new bt(new Jr(.02,.02,.1),new ri({color:4474111}));I.add(J),K.add(ge),w.add(I),w.add(K),I.addEventListener("selectstart",()=>{g(I),G(I)}),K.addEventListener("selectstart",()=>{g(K),G(K)})}),$.xr.addEventListener("sessionend",()=>{d(!1),i==null||i(!1),g(null)});const G=I=>{var B,te;const K=new It,J=new Fg;K.identity().extractRotation(I.matrixWorld),J.ray.origin.setFromMatrixPosition(I.matrixWorld),J.ray.direction.set(0,0,-1).applyMatrix4(K);const ge=J.intersectObjects(q);if(ge.length>0){const de=ge[0].object;de.userData.hotspot&&n&&(n(de.userData.hotspot),(te=(B=I.gamepad)==null?void 0:B.hapticActuators)!=null&&te[0]&&I.gamepad.hapticActuators[0].pulse(.5,100))}},Q=I=>{if(!D||!$)return;const K=new ze(I.clientX/window.innerWidth*2-1,-(I.clientY/window.innerHeight)*2+1),J=new Fg;J.setFromCamera(K,D);const ge=J.intersectObjects(q);if(ge.length>0){const B=ge[0].object;B.userData.hotspot&&n&&n(B.userData.hotspot)}};window.addEventListener("click",Q);const U=()=>{requestAnimationFrame(U),P.update(),$.render(w,D)};U();const H=()=>{!s.current||!D||!$||(D.aspect=s.current.clientWidth/s.current.clientHeight,D.updateProjectionMatrix(),$.setSize(s.current.clientWidth,s.current.clientHeight))};return window.addEventListener("resize",H),()=>{var I;window.removeEventListener("resize",H),window.removeEventListener("click",Q),(I=s.current)==null||I.removeChild($.domElement),w.traverse(K=>{K instanceof bt&&(K.geometry.dispose(),Array.isArray(K.material)?K.material.forEach(J=>J.dispose()):K.material.dispose())}),$.dispose(),R.current&&R.current.close()}},[t,e,n,i]),x.jsxs("div",{ref:s,className:`w-full h-full ${r}`,style:{minHeight:"400px"},children:[u&&x.jsx(YP,{progress:h,message:"Loading panorama..."}),_&&x.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",children:x.jsx("div",{className:"text-white text-center",children:x.jsx("p",{className:"text-red-500",children:_})})}),p&&x.jsx("div",{className:"absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg",children:"VR Mode Active"})]})}function Gg({position:t,rotation:e,scale:n=1,onClose:i,children:r}){const s=F.useRef(null),o=F.useRef(null);return F.useEffect(()=>{if(!s.current)return;const a=new Io;a.position.copy(t),a.rotation.copy(e),a.scale.set(n,n,n),o.current=a;const l=new no(2,1),c=new ri({color:0,transparent:!0,opacity:.8,side:ni}),u=new bt(l,c);if(u.position.z=-.01,a.add(u),i){const f=new no(.2,.2),h=new ri({color:16711680,transparent:!0,opacity:.8}),m=new bt(f,h);m.position.set(.9,.4,0),m.userData={onClick:i},a.add(m)}return()=>{a.traverse(f=>{f instanceof bt&&(f.geometry.dispose(),Array.isArray(f.material)?f.material.forEach(h=>h.dispose()):f.material.dispose())})}},[t,e,n,i]),x.jsx("div",{ref:s,className:"absolute inset-0 pointer-events-none",style:{transform:`translate3d(${t.x}px, ${t.y}px, ${t.z}px) rotateX(${e.x}rad) rotateY(${e.y}rad) rotateZ(${e.z}rad) scale(${n})`,transformStyle:"preserve-3d"},children:r})}function ZP({hotspot:t,onClose:e}){const[n,i]=F.useState(!1),r=F.useRef(null);F.useEffect(()=>(t.audioUrl&&(r.current=new Audio(t.audioUrl)),()=>{r.current&&(r.current.pause(),r.current=null)}),[t.audioUrl]);const s=()=>{r.current&&(n?r.current.pause():r.current.play(),i(!n))};return x.jsxs("div",{className:"fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-white rounded-lg shadow-xl p-4 z-50",children:[x.jsxs("div",{className:"flex justify-between items-start mb-4",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:t.title}),x.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700",children:x.jsx(gh,{className:"h-5 w-5"})})]}),x.jsx("p",{className:"text-gray-600 mb-4",children:t.description}),t.audioUrl&&x.jsx("button",{onClick:s,className:"flex items-center gap-2 text-indigo-600 hover:text-indigo-700",children:n?x.jsxs(x.Fragment,{children:[x.jsx(Fw,{className:"h-5 w-5"}),x.jsx("span",{children:"Pause Audio"})]}):x.jsxs(x.Fragment,{children:[x.jsx(zw,{className:"h-5 w-5"}),x.jsx("span",{children:"Play Audio"})]})})]})}const Nr=[{id:"venice",title:"Venice Sunset",description:"Experience the magical sunset over the canals of Venice",imageUrl:"/panoramas/venice_sunset_1k.hdr",hotspots:[{id:"grand-canal",position:new O(0,1.6,-10),title:"Grand Canal",description:"The main waterway of Venice, lined with historic buildings",audioUrl:"/audio/venice_canal.mp3"},{id:"gondola-station",position:new O(5,1.6,-8),title:"Gondola Station",description:"Traditional Venetian boats ready for a romantic ride",audioUrl:"/audio/venice_gondola.mp3"}]},{id:"grand-canyon",title:"Grand Canyon",description:"Marvel at the breathtaking views of the Grand Canyon",imageUrl:"/panoramas/grand_canyon_1k.hdr",hotspots:[{id:"south-rim",position:new O(0,1.6,-15),title:"South Rim",description:"The most popular viewpoint of the Grand Canyon",audioUrl:"/audio/grand_canyon_south_rim.mp3"},{id:"colorado-river",position:new O(-8,1.6,-12),title:"Colorado River",description:"The mighty river that carved this natural wonder",audioUrl:"/audio/grand_canyon_river.mp3"}]},{id:"temple-heaven",title:"Temple of Heaven",description:"Explore the ancient Chinese temple complex in Beijing",imageUrl:"/panoramas/temple_heaven_1k.hdr",hotspots:[{id:"hall-of-prayer",position:new O(0,1.6,-12),title:"Hall of Prayer",description:"The iconic circular building used for ceremonies",audioUrl:"/audio/temple_heaven_hall.mp3"},{id:"imperial-vault",position:new O(6,1.6,-10),title:"Imperial Vault",description:"A smaller circular building with intricate designs",audioUrl:"/audio/temple_heaven_vault.mp3"}]}];function JP(){const{tourId:t}=dh(),e=hv(),[n,i]=F.useState(null),[r,s]=F.useState(!1),o=Nr.find(y=>y.id===t)||Nr[0],a=Nr.findIndex(y=>y.id===t),l=a<Nr.length-1,c=a>0,u=y=>{i(y)},f=()=>{i(null)},h=()=>{l&&e(`/panorama/${Nr[a+1].id}`)},m=()=>{c&&e(`/panorama/${Nr[a-1].id}`)},_=y=>{s(y)};return x.jsx("div",{className:"min-h-screen bg-gray-100",children:x.jsxs("div",{className:"relative w-full h-screen",children:[x.jsx(KP,{imageUrl:o.imageUrl,hotspots:o.hotspots,onHotspotClick:u,onVRModeChange:_,className:"w-full h-full"}),n&&r?x.jsx(Gg,{position:new O(0,1.6,-2),rotation:new eo(0,0,0),scale:.5,onClose:f,children:x.jsxs("div",{className:"p-4 text-white",children:[x.jsx("h3",{className:"text-xl font-bold",children:n.title}),x.jsx("p",{className:"mt-2",children:n.description})]})}):n?x.jsx(ZP,{hotspot:n,onClose:f}):null,r?x.jsx(Gg,{position:new O(0,1.6,-1.5),rotation:new eo(0,0,0),scale:.3,children:x.jsxs("div",{className:"p-4 text-white",children:[x.jsx("h2",{className:"text-2xl font-bold",children:o.title}),x.jsx("p",{className:"mt-2",children:o.description}),x.jsxs("div",{className:"mt-4 flex space-x-4",children:[x.jsx("button",{onClick:m,disabled:!c,className:`px-4 py-2 rounded-lg ${c?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),x.jsx("button",{onClick:h,disabled:!l,className:`px-4 py-2 rounded-lg ${l?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})]})}):x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"absolute top-4 left-4 z-10 bg-white bg-opacity-90 rounded-lg p-4 shadow-lg",children:[x.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:o.title}),x.jsx("p",{className:"text-gray-600 mt-2",children:o.description})]}),x.jsxs("div",{className:"absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex space-x-4",children:[x.jsx("button",{onClick:m,disabled:!c,className:`px-4 py-2 rounded-lg ${c?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Previous"}),x.jsx("button",{onClick:h,disabled:!l,className:`px-4 py-2 rounded-lg ${l?"bg-blue-600 text-white hover:bg-blue-700":"bg-gray-300 text-gray-500 cursor-not-allowed"}`,children:"Next"})]})]})]})})}function QP(){const t=[{id:"all",name:"All Tours"},{id:"temples",name:"Temples"},{id:"museums",name:"Museums"},{id:"historical",name:"Historical Sites"},{id:"natural",name:"Natural Heritage"}];return x.jsx("div",{className:"min-h-screen bg-gray-50 py-16",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Virtual Tours"}),x.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Experience cultural heritage sites through immersive 360° virtual tours. Explore at your own pace and discover hidden details with interactive hotspots."})]}),x.jsx("div",{className:"mb-8",children:x.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-6",children:[x.jsxs("div",{className:"relative flex-grow",children:[x.jsx("input",{type:"text",placeholder:"Search virtual tours...",className:"w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),x.jsx(Av,{className:"absolute left-3 top-2.5 h-5 w-5 text-gray-400"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(wv,{className:"h-5 w-5 text-gray-600"}),x.jsx("select",{className:"px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:t.map(e=>x.jsx("option",{value:e.id,children:e.name},e.id))})]})]})}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[Nr.map(e=>x.jsx(Sn,{to:`/panorama/${e.id}`,className:"group",children:x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg transition-transform group-hover:scale-105",children:[x.jsxs("div",{className:"h-48 bg-blue-900 relative",children:[x.jsx("div",{className:"absolute inset-0 bg-black opacity-40"}),x.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:x.jsx(aw,{className:"h-12 w-12 text-white"})})]}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:e.title}),x.jsx("p",{className:"text-gray-600 mb-4 line-clamp-2",children:e.description}),x.jsxs("div",{className:"flex items-center justify-between",children:[x.jsx("span",{className:"text-indigo-600 font-semibold",children:"Start Tour →"}),x.jsxs("span",{className:"text-sm text-gray-500",children:[e.hotspots.length," points of interest"]})]})]})]})},e.id)),x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg",children:[x.jsx("div",{className:"h-48 bg-purple-900"}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Coming Soon"}),x.jsx("p",{className:"text-gray-600 mb-4",children:"More exciting virtual tours will be available soon."}),x.jsx("span",{className:"text-gray-400 font-semibold",children:"Stay Tuned"})]})]}),x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg",children:[x.jsx("div",{className:"h-48 bg-green-900"}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Coming Soon"}),x.jsx("p",{className:"text-gray-600 mb-4",children:"More exciting virtual tours will be available soon."}),x.jsx("span",{className:"text-gray-400 font-semibold",children:"Stay Tuned"})]})]})]})]})})}const eN=({video:t,hotspots:e=[]})=>{const n=F.useRef(null),[i,r]=F.useState(!1),[s,o]=F.useState(!1),[a,l]=F.useState(!1),c=F.useRef(null),u=F.useRef(null),f=F.useRef(null),h=F.useRef(null),m=F.useRef(null),_=F.useRef(null);F.useEffect(()=>{var ee;if(!n.current)return;"xr"in navigator&&((ee=navigator.xr)==null||ee.isSessionSupported("immersive-vr").then(L=>{r(L)}));const v=new b_;c.current=v;const g=new yn(75,window.innerWidth/window.innerHeight,.1,1e3);g.position.z=1,u.current=g;const E=new bh({antialias:!0});E.setSize(window.innerWidth,window.innerHeight),E.xr.enabled=!0,f.current=E,n.current.appendChild(E.domElement);const R=new P_(g,E.domElement);R.enableDamping=!0,R.dampingFactor=.05,h.current=R;const A=document.createElement("video");A.crossOrigin="anonymous",A.src=t.video_files[0].link,A.loop=!0,A.muted=!0,A.setAttribute("playsinline",""),m.current=A;const w=new IP(A);_.current=w;const D=new io(500,60,40);D.scale(-1,1,1);const $=new ri({map:w}),S=new bt(D,$);v.add(S),e.forEach(L=>{const q=new io(1,32,32),G=new ri({color:16711680}),Q=new bt(q,G);Q.position.copy(L.position),v.add(Q)});const P=()=>{!u.current||!f.current||(u.current.aspect=window.innerWidth/window.innerHeight,u.current.updateProjectionMatrix(),f.current.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",P);const Z=()=>{requestAnimationFrame(Z),h.current&&h.current.update(),f.current&&c.current&&u.current&&f.current.render(c.current,u.current)};return Z(),()=>{window.removeEventListener("resize",P),n.current&&f.current&&n.current.removeChild(f.current.domElement),m.current&&m.current.pause(),h.current&&h.current.dispose(),f.current&&f.current.dispose(),_.current&&_.current.dispose()}},[t,e]);const y=()=>{m.current&&(l(!a),a?m.current.pause():m.current.play().catch(v=>{console.error("Error playing video:",v)}))},p=async()=>{var v;if(!(!i||!f.current))try{const g=await((v=navigator.xr)==null?void 0:v.requestSession("immersive-vr"));g&&(o(!0),await f.current.xr.setSession(g))}catch(g){console.error("Failed to enter VR mode:",g)}},d=()=>{var v,g;(v=f.current)!=null&&v.xr.getSession()&&((g=f.current.xr.getSession())==null||g.end(),o(!1))};return x.jsx("div",{className:"relative w-full h-screen",ref:n,children:x.jsxs("div",{className:"absolute bottom-4 left-4 z-10 flex space-x-4",children:[x.jsx("button",{onClick:y,className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg",children:a?"Pause":"Play"}),i&&x.jsx("button",{onClick:s?d:p,className:"bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg",children:s?"Exit VR":"Enter VR"})]})})},N_="ERjJoT94jnvKTwIsR1QUv1hWGXGVFN9bRSD2rXAfylYigCxrYPe6y3Zb",tN="/api/pexels/v1/videos",L_=xt.create({baseURL:tN,headers:{Authorization:N_,"Content-Type":"application/json",Accept:"application/json"},withCredentials:!1}),nN=t=>{var n;return`/pexels-videos/${(n=t.split("/").pop())==null?void 0:n.split("?")[0]}`},iN=async()=>{var t,e,n;try{const i=await L_.get("/popular",{headers:{Authorization:N_}});return console.log("API Connection Test:",i.status,i.data),!0}catch(i){return console.error("API Connection Test Failed:",i),xt.isAxiosError(i)&&console.error("Error details:",{status:(t=i.response)==null?void 0:t.status,statusText:(e=i.response)==null?void 0:e.statusText,data:(n=i.response)==null?void 0:n.data}),!1}},rN=async t=>{try{const n=(await L_.get(`/videos/${t}`)).data;return n.video_files=n.video_files.map(i=>({...i,link:nN(i.link)})),n}catch(e){throw console.error("Error getting video:",e),e}},sN=[{position:new O(0,0,-10),title:"Main Entrance",description:"The grand entrance to the heritage site"},{position:new O(10,0,0),title:"Historical Artifact",description:"A significant artifact from the site's history"},{position:new O(-10,0,0),title:"Viewpoint",description:"A scenic viewpoint of the surrounding area"}],jg={TAJ_MAHAL:3150103,PETRA:4342563,MACHU_PICCHU:6635693},oN=()=>{const{id:t}=dh(),[e,n]=F.useState(null),[i,r]=F.useState(!0),[s,o]=F.useState(null);return F.useEffect(()=>{(async()=>{try{if(!await iN())throw new Error("Failed to connect to Pexels API");r(!0);const c=jg[t]||jg.TAJ_MAHAL,u=await rN(c);n(u),o(null)}catch(l){o("Failed to load the virtual tour. Please try again later."),console.error(l)}finally{r(!1)}})()},[t]),i?x.jsx("div",{className:"flex justify-center items-center h-screen",children:x.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"})}):s||!e?x.jsxs("div",{className:"flex flex-col items-center justify-center h-screen p-4",children:[x.jsx("h2",{className:"text-2xl font-bold text-red-500 mb-4",children:"Error"}),x.jsx("p",{className:"text-gray-600 text-center",children:s||"Video not found"}),x.jsx("button",{onClick:()=>window.history.back(),className:"mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg",children:"Go Back"})]}):x.jsx("div",{className:"min-h-screen bg-gray-900",children:x.jsx(eN,{video:e,hotspots:sN})})};function aN(){const[t,e]=F.useState(""),[n,i]=F.useState("all"),r=[{id:"all",name:"All Sites"},{id:"unesco",name:"UNESCO World Heritage"},{id:"national",name:"National Heritage"},{id:"religious",name:"Religious Sites"},{id:"archaeological",name:"Archaeological Sites"}],s=[{id:1,title:"Ancient Temple Complex",location:"Kathmandu, Nepal",category:"unesco",description:"A magnificent temple complex dating back to the 12th century, featuring intricate carvings and stunning architecture.",imageUrl:"/images/heritage/temple.jpg",year:"12th Century"},{id:2,title:"Royal Palace",location:"Bhaktapur, Nepal",category:"national",description:"Former royal residence showcasing traditional Newari architecture and historical artifacts.",imageUrl:"/images/heritage/palace.jpg",year:"15th Century"},{id:3,title:"Ancient Stupa",location:"Lalitpur, Nepal",category:"religious",description:"One of the oldest Buddhist stupas in the world, surrounded by prayer wheels and monasteries.",imageUrl:"/images/heritage/stupa.jpg",year:"3rd Century BCE"}],o=s.filter(a=>{const l=a.title.toLowerCase().includes(t.toLowerCase())||a.location.toLowerCase().includes(t.toLowerCase())||a.description.toLowerCase().includes(t.toLowerCase()),c=n==="all"||a.category===n;return l&&c});return x.jsx("div",{className:"min-h-screen bg-gray-50 py-16",children:x.jsxs("div",{className:"max-w-7xl mx-auto px-4",children:[x.jsxs("div",{className:"text-center mb-16",children:[x.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Heritage Sites"}),x.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Discover and explore our rich cultural heritage through these remarkable sites. Each location tells a unique story of our past and present."})]}),x.jsxs("div",{className:"mb-8",children:[x.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-6",children:[x.jsxs("div",{className:"relative flex-grow",children:[x.jsx("input",{type:"text",placeholder:"Search heritage sites...",value:t,onChange:a=>e(a.target.value),className:"w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"}),x.jsx(Av,{className:"absolute left-3 top-2.5 h-5 w-5 text-gray-400"})]}),x.jsxs("div",{className:"flex items-center gap-2",children:[x.jsx(wv,{className:"h-5 w-5 text-gray-600"}),x.jsx("select",{value:n,onChange:a=>i(a.target.value),className:"px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:r.map(a=>x.jsx("option",{value:a.id,children:a.name},a.id))})]})]}),x.jsxs("div",{className:"text-sm text-gray-500",children:["Showing ",o.length," of ",s.length," sites"]})]}),x.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:[o.map(a=>x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow",children:[x.jsxs("div",{className:"h-48 bg-gray-800 relative",children:[x.jsx("div",{className:"absolute inset-0 bg-black opacity-40"}),x.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:x.jsx(Ew,{className:"h-12 w-12 text-white"})})]}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:a.title}),x.jsxs("div",{className:"flex items-center text-gray-600 mb-2",children:[x.jsx(Dc,{className:"h-4 w-4 mr-1"}),x.jsx("span",{children:a.location})]}),x.jsxs("div",{className:"flex items-center text-gray-600 mb-4",children:[x.jsx(Mv,{className:"h-4 w-4 mr-1"}),x.jsx("span",{children:a.year})]}),x.jsx("p",{className:"text-gray-600 mb-4 line-clamp-2",children:a.description}),x.jsx(Sn,{to:`/heritage-sites/${a.id}`,className:"text-indigo-600 font-semibold hover:text-indigo-800",children:"Learn More →"})]})]},a.id)),o.length===0&&x.jsx("div",{className:"col-span-full text-center py-12",children:x.jsx("p",{className:"text-gray-500 text-lg",children:"No heritage sites found matching your search criteria."})}),o.length>0&&x.jsxs(x.Fragment,{children:[x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg",children:[x.jsx("div",{className:"h-48 bg-purple-900"}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Coming Soon"}),x.jsx("p",{className:"text-gray-600 mb-4",children:"More heritage sites will be added to our collection."}),x.jsx("span",{className:"text-gray-400 font-semibold",children:"Stay Tuned"})]})]}),x.jsxs("div",{className:"bg-white rounded-lg overflow-hidden shadow-lg",children:[x.jsx("div",{className:"h-48 bg-green-900"}),x.jsxs("div",{className:"p-6",children:[x.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Coming Soon"}),x.jsx("p",{className:"text-gray-600 mb-4",children:"More heritage sites will be added to our collection."}),x.jsx("span",{className:"text-gray-400 font-semibold",children:"Stay Tuned"})]})]})]})]})]})})}const lN=[{id:1,title:"Taj Mahal",location:"Agra, India",image:"https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800",category:"UNESCO World Heritage",description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, India. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",yearBuilt:"1632-1653",virtualTourAvailable:!0,additionalImages:["https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1572868349872-63aa43c6a082?auto=format&fit=crop&q=80&w=800"]},{id:2,title:"Petra",location:"Ma'an, Jordan",image:"https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800",category:"World Wonder",description:"Petra is a historic and archaeological city in southern Jordan. It is famous for its rock-cut architecture and water conduit system. It was established possibly as early as 312 BCE as the capital city of the Nabataean Kingdom.",yearBuilt:"312 BCE",virtualTourAvailable:!0,additionalImages:["https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1579606037885-46c0ee5d3696?auto=format&fit=crop&q=80&w=800"]},{id:3,title:"Machu Picchu",location:"Cusco, Peru",image:"https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800",category:"Archaeological Site",description:"Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar.",yearBuilt:"1450",virtualTourAvailable:!0,additionalImages:["https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800","https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800"]}];function cN(){const{id:t}=dh(),e=lN.find(n=>n.id===Number(t));return e?x.jsxs("div",{className:"min-h-screen bg-gray-50",children:[x.jsxs("div",{className:"relative h-[40vh] sm:h-[50vh] lg:h-[60vh]",children:[x.jsx("img",{src:e.image,alt:e.title,className:"w-full h-full object-cover"}),x.jsx("div",{className:"absolute inset-0 bg-black/40"}),x.jsx("div",{className:"absolute inset-0 flex items-center",children:x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",children:x.jsxs("div",{className:"max-w-3xl",children:[x.jsx("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4",children:e.title}),x.jsxs("div",{className:"flex items-center text-white/90 text-lg",children:[x.jsx(Dc,{className:"h-5 w-5 mr-2"}),x.jsx("span",{children:e.location})]})]})})})]}),x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:x.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[x.jsxs("div",{className:"lg:col-span-2",children:[x.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-8",children:[x.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"About"}),x.jsx("p",{className:"text-gray-600 mb-6",children:e.description}),x.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[x.jsxs("div",{className:"flex items-center text-gray-600",children:[x.jsx(QM,{className:"h-5 w-5 mr-2 text-blue-600"}),x.jsxs("span",{children:["Built: ",e.yearBuilt]})]}),x.jsxs("div",{className:"flex items-center text-gray-600",children:[x.jsx(ca,{className:"h-5 w-5 mr-2 text-blue-600"}),x.jsxs("span",{children:["Category: ",e.category]})]})]})]}),x.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[x.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Gallery"}),x.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:e.additionalImages.map((n,i)=>x.jsx("div",{className:"aspect-w-4 aspect-h-3 rounded-lg overflow-hidden",children:x.jsx("img",{src:n,alt:`${e.title} - Image ${i+1}`,className:"w-full h-full object-cover",loading:"lazy"})},i))})]})]}),x.jsxs("div",{className:"lg:col-span-1",children:[e.virtualTourAvailable&&x.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6 mb-6",children:[x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Virtual Tour"}),x.jsx(oc,{className:"h-5 w-5 text-blue-600"})]}),x.jsxs("p",{className:"text-gray-600 mb-4",children:["Experience ",e.title," through our immersive virtual tour."]}),x.jsx(Sn,{to:`/virtual-tours/${e.id}`,className:"w-full inline-block bg-blue-600 text-white text-center px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors",children:"Start Virtual Tour"})]}),x.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-6",children:[x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"Additional Information"}),x.jsx(xw,{className:"h-5 w-5 text-blue-600"})]}),x.jsxs("ul",{className:"space-y-3",children:[x.jsxs("li",{className:"flex items-center text-gray-600",children:[x.jsx("span",{className:"w-32",children:"Best Time to Visit"}),x.jsx("span",{className:"font-medium",children:"October - March"})]}),x.jsxs("li",{className:"flex items-center text-gray-600",children:[x.jsx("span",{className:"w-32",children:"Duration"}),x.jsx("span",{className:"font-medium",children:"2-3 hours"})]}),x.jsxs("li",{className:"flex items-center text-gray-600",children:[x.jsx("span",{className:"w-32",children:"Accessibility"}),x.jsx("span",{className:"font-medium",children:"Wheelchair accessible"})]})]})]})]})]})}),x.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12",children:x.jsxs(Sn,{to:"/heritage-sites",className:"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium",children:[x.jsx(Zp,{className:"mr-2 h-5 w-5"}),"Back to Heritage Sites"]})})]}):x.jsxs("div",{className:"min-h-screen bg-gray-50 px-4 py-16 flex flex-col items-center justify-center",children:[x.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-4",children:"Heritage Site Not Found"}),x.jsx("p",{className:"text-gray-600 mb-8",children:"The heritage site you're looking for doesn't exist."}),x.jsxs(Sn,{to:"/heritage-sites",className:"inline-flex items-center text-blue-600 hover:text-blue-700 font-medium",children:[x.jsx(Zp,{className:"mr-2 h-5 w-5"}),"Back to Heritage Sites"]})]})}function uN({type:t,content:e,gallery:n,onClose:i}){const[r,s]=F.useState(0),[o,a]=F.useState(!1),[l,c]=F.useState(0),[u,f]=F.useState(!1),[h,m]=F.useState(""),_=()=>{n&&r>0&&s(r-1)},y=()=>{n&&r<n.length-1&&s(r+1)},p=d=>{d.key==="Escape"&&i?i():d.key==="ArrowLeft"?_():d.key==="ArrowRight"&&y()};return x.jsx("div",{className:"fixed inset-0 bg-black/90 z-50 flex items-center justify-center",onKeyDown:p,tabIndex:0,children:x.jsxs("div",{className:"relative w-full h-full max-w-7xl mx-auto p-4",children:[x.jsx("button",{onClick:i,className:"absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none","aria-label":"Close viewer",children:x.jsx(gh,{className:"h-6 w-6"})}),x.jsxs("div",{className:"flex flex-col md:flex-row h-full gap-4",children:[x.jsxs("div",{className:"flex-1 flex items-center justify-center",children:[t==="image"&&x.jsx("img",{src:n?n[r]:e.url,alt:e.title,className:"max-h-full max-w-full object-contain"}),t==="3d"&&x.jsx("div",{className:"w-full h-full bg-gray-800 rounded-lg",children:x.jsx("div",{className:"w-full h-full flex items-center justify-center text-white",children:"3D Model Viewer Coming Soon"})}),t==="video"&&x.jsx("video",{src:e.url,controls:!0,className:"max-h-full max-w-full","aria-label":e.title})]}),x.jsxs("div",{className:"w-full md:w-80 bg-gray-900 text-white p-4 rounded-lg",children:[x.jsx("h2",{className:"text-xl font-bold mb-2",children:e.title}),e.description&&x.jsx("p",{className:"text-gray-300 mb-4",children:e.description}),n&&n.length>1&&x.jsxs("div",{className:"flex items-center justify-between mb-4",children:[x.jsx("button",{onClick:_,disabled:r===0,className:"p-2 text-white hover:text-gray-300 disabled:opacity-50","aria-label":"Previous image",children:x.jsx(nw,{className:"h-6 w-6"})}),x.jsxs("span",{className:"text-gray-300",children:[r+1," / ",n.length]}),x.jsx("button",{onClick:y,disabled:r===n.length-1,className:"p-2 text-white hover:text-gray-300 disabled:opacity-50","aria-label":"Next image",children:x.jsx(rw,{className:"h-6 w-6"})})]}),x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{className:"flex items-center space-x-2",children:[x.jsx("span",{className:"text-gray-300",children:"Rating:"}),x.jsx("div",{className:"flex",children:[1,2,3,4,5].map(d=>x.jsx("button",{onClick:()=>c(d),className:"text-yellow-400 hover:text-yellow-300 focus:outline-none","aria-label":`Rate ${d} star${d!==1?"s":""}`,children:x.jsx(Lw,{className:`h-5 w-5 ${d<=l?"fill-current":""}`})},d))})]}),x.jsxs("div",{className:"flex space-x-4",children:[x.jsxs("button",{onClick:()=>a(!o),className:`flex items-center space-x-1 ${o?"text-red-500":"text-gray-300"} hover:text-red-500`,"aria-label":o?"Remove from favorites":"Add to favorites",children:[x.jsx(dw,{className:"h-5 w-5"}),x.jsx("span",{children:"Favorite"})]}),x.jsxs("button",{onClick:()=>f(!u),className:"flex items-center space-x-1 text-gray-300 hover:text-white","aria-label":"View comments",children:[x.jsx(Aw,{className:"h-5 w-5"}),x.jsx("span",{children:"Comments"})]}),x.jsxs("button",{className:"flex items-center space-x-1 text-gray-300 hover:text-white","aria-label":"Share content",children:[x.jsx(Pw,{className:"h-5 w-5"}),x.jsx("span",{children:"Share"})]})]}),u&&x.jsx("div",{className:"mt-4",children:x.jsxs("div",{className:"space-y-4",children:[x.jsxs("div",{className:"bg-gray-800 p-3 rounded-lg",children:[x.jsx("p",{className:"text-sm text-gray-300",children:'"This is an amazing piece of cultural heritage!"'}),x.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"- User123"})]}),x.jsxs("div",{className:"space-y-2",children:[x.jsx("textarea",{value:h,onChange:d=>m(d.target.value),placeholder:"Add a comment...",className:"w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500",rows:3}),x.jsx("button",{className:"w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700",onClick:()=>{m("")},children:"Post Comment"})]})]})})]})]})]})]})})}const dN=[{type:"image",title:"Ancient Temple",description:"A magnificent temple from the 12th century, showcasing intricate carvings and architectural brilliance.",url:"/images/heritage/temple.jpg",gallery:["/images/heritage/temple.jpg","/images/heritage/temple-interior.jpg","/images/heritage/temple-detail.jpg"]},{type:"3d",title:"Historical Artifact",description:"A 3D model of an ancient artifact, allowing for detailed examination from all angles.",url:"/models/ancient-artifact.glb"},{type:"video",title:"Cultural Performance",description:"A traditional dance performance showcasing the rich cultural heritage of the region.",url:"/videos/cultural-performance.mp4"}];function fN(){const[t,e]=F.useState(null);return x.jsx("div",{className:"min-h-screen bg-gray-100 py-12 px-4",children:x.jsxs("div",{className:"max-w-7xl mx-auto",children:[x.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-8",children:"Content Viewer Demo"}),x.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:dN.map(n=>x.jsxs("div",{className:"bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow",onClick:()=>e(n),children:[x.jsxs("div",{className:"h-48 bg-gray-200 flex items-center justify-center",children:[n.type==="image"&&x.jsx(mw,{className:"h-12 w-12 text-gray-400"}),n.type==="3d"&&x.jsx(ZM,{className:"h-12 w-12 text-gray-400"}),n.type==="video"&&x.jsx(Iw,{className:"h-12 w-12 text-gray-400"})]}),x.jsxs("div",{className:"p-4",children:[x.jsx("h2",{className:"text-xl font-semibold text-gray-900 mb-2",children:n.title}),x.jsx("p",{className:"text-gray-600 line-clamp-2",children:n.description})]})]},n.title))}),t&&x.jsx(uN,{type:t.type,content:{url:t.url,title:t.title,description:t.description},gallery:t.gallery,onClose:()=>e(null)})]})})}function br({to:t,icon:e,children:n}){const r=mr().pathname===t;return x.jsxs(Sn,{to:t,className:`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group
        ${r?"bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md":"text-gray-700 hover:bg-blue-50"}`,children:[x.jsx("div",{className:`p-2 rounded-lg transition-colors duration-200
        ${r?"bg-white/20":"bg-blue-50 group-hover:bg-blue-100"}`,children:x.jsx(e,{className:`h-5 w-5 ${r?"text-white":"text-blue-600"}`})}),x.jsx("span",{className:"font-medium",children:n})]})}function ml({title:t,children:e}){return x.jsxs("div",{className:"mb-6",children:[x.jsx("h3",{className:"px-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider",children:t}),x.jsx("div",{className:"space-y-1",children:e})]})}function hN(){const[t,e]=F.useState(!1);return F.useEffect(()=>{e(!1)},[]),x.jsx(LM,{children:x.jsxs("div",{className:"min-h-screen bg-gray-50",children:[x.jsx("div",{className:"lg:hidden fixed top-4 right-4 z-50",children:x.jsx("button",{onClick:()=>e(!t),className:"p-3 rounded-xl bg-white shadow-lg hover:bg-gray-50 transition-colors","aria-label":t?"Close menu":"Open menu",children:t?x.jsx(gh,{className:"h-6 w-6 text-gray-900"}):x.jsx(ww,{className:"h-6 w-6 text-gray-900"})})}),x.jsx("div",{className:`fixed inset-y-0 left-0 w-72 bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 z-40 overflow-y-auto
          ${t?"translate-x-0":"-translate-x-full"}`,children:x.jsxs("div",{className:"h-full flex flex-col",children:[x.jsx("div",{className:"p-8",children:x.jsxs("div",{className:"flex items-center space-x-3",children:[x.jsx("div",{className:"p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl",children:x.jsx(ca,{className:"h-8 w-8 text-white"})}),x.jsxs("div",{children:[x.jsx("h1",{className:"text-2xl font-bold text-gray-900",children:"Culture Sphere"}),x.jsx("p",{className:"text-sm text-gray-500",children:"Explore Cultural Heritage"})]})]})}),x.jsxs("nav",{className:"flex-1 px-4",children:[x.jsxs(ml,{title:"Main",children:[x.jsx(br,{to:"/",icon:hw,children:"Home"}),x.jsx(br,{to:"/about",icon:Kd,children:"About"})]}),x.jsxs(ml,{title:"Explore",children:[x.jsx(br,{to:"/virtual-tours",icon:ca,children:"Virtual Tours"}),x.jsx(br,{to:"/heritage-sites",icon:oc,children:"Heritage Sites"}),x.jsx(br,{to:"/panorama/1",icon:oc,children:"Panorama Tour"})]}),x.jsx(ml,{title:"Interactive",children:x.jsx(br,{to:"/content-viewer",icon:Ev,children:"Content Viewer"})}),x.jsx(ml,{title:"Support",children:x.jsx(br,{to:"/contact",icon:Tv,children:"Contact"})})]}),x.jsx("div",{className:"p-6 border-t border-gray-100",children:x.jsxs("div",{className:"flex items-center space-x-3 px-4 py-3 bg-blue-50 rounded-xl",children:[x.jsx(Kd,{className:"h-5 w-5 text-blue-600"}),x.jsxs("div",{children:[x.jsx("p",{className:"text-sm font-medium text-gray-900",children:"Community"}),x.jsx("p",{className:"text-xs text-gray-500",children:"Join our community"})]})]})})]})}),t&&x.jsx("div",{className:"fixed inset-0 bg-black/20 z-30 lg:hidden",onClick:()=>e(!1)}),x.jsx("div",{className:"lg:ml-72",children:x.jsxs(lM,{children:[x.jsx(Jn,{path:"/",element:x.jsx(ST,{})}),x.jsx(Jn,{path:"/virtual-tours",element:x.jsx(QP,{})}),x.jsx(Jn,{path:"/virtual-tours/:id",element:x.jsx(oN,{})}),x.jsx(Jn,{path:"/heritage-sites",element:x.jsx(aN,{})}),x.jsx(Jn,{path:"/heritage-sites/:id",element:x.jsx(cN,{})}),x.jsx(Jn,{path:"/content-viewer",element:x.jsx(fN,{})}),x.jsx(Jn,{path:"/contact",element:x.jsx(MT,{})}),x.jsx(Jn,{path:"/about",element:x.jsx(ET,{})}),x.jsx(Jn,{path:"/panorama/:tourId",element:x.jsx(JP,{})})]})})]})})}iv(document.getElementById("root")).render(x.jsx(F.StrictMode,{children:x.jsx(hN,{})}));
