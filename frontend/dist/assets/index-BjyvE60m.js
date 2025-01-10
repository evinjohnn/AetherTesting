(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var mc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ss(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function dj(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function i(){return this instanceof i?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(i){var s=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(n,i,s.get?s:{enumerable:!0,get:function(){return e[i]}})}),n}var up={exports:{}},na={},fp={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function FC(){if(av)return Fe;av=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,k={};function _(O,U,Q){this.props=O,this.context=U,this.refs=k,this.updater=Q||j}_.prototype.isReactComponent={},_.prototype.setState=function(O,U){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,U,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function E(){}E.prototype=_.prototype;function N(O,U,Q){this.props=O,this.context=U,this.refs=k,this.updater=Q||j}var V=N.prototype=new E;V.constructor=N,C(V,_.prototype),V.isPureReactComponent=!0;var B=Array.isArray,M=Object.prototype.hasOwnProperty,F={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function R(O,U,Q){var ee,ie={},re=null,se=null;if(U!=null)for(ee in U.ref!==void 0&&(se=U.ref),U.key!==void 0&&(re=""+U.key),U)M.call(U,ee)&&!A.hasOwnProperty(ee)&&(ie[ee]=U[ee]);var de=arguments.length-2;if(de===1)ie.children=Q;else if(1<de){for(var fe=Array(de),ye=0;ye<de;ye++)fe[ye]=arguments[ye+2];ie.children=fe}if(O&&O.defaultProps)for(ee in de=O.defaultProps,de)ie[ee]===void 0&&(ie[ee]=de[ee]);return{$$typeof:e,type:O,key:re,ref:se,props:ie,_owner:F.current}}function T(O,U){return{$$typeof:e,type:O.type,key:U,ref:O.ref,props:O.props,_owner:O._owner}}function D(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function z(O){var U={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Q){return U[Q]})}var H=/\/+/g;function W(O,U){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):U.toString(36)}function Y(O,U,Q,ee,ie){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var se=!1;if(O===null)se=!0;else switch(re){case"string":case"number":se=!0;break;case"object":switch(O.$$typeof){case e:case t:se=!0}}if(se)return se=O,ie=ie(se),O=ee===""?"."+W(se,0):ee,B(ie)?(Q="",O!=null&&(Q=O.replace(H,"$&/")+"/"),Y(ie,U,Q,"",function(ye){return ye})):ie!=null&&(D(ie)&&(ie=T(ie,Q+(!ie.key||se&&se.key===ie.key?"":(""+ie.key).replace(H,"$&/")+"/")+O)),U.push(ie)),1;if(se=0,ee=ee===""?".":ee+":",B(O))for(var de=0;de<O.length;de++){re=O[de];var fe=ee+W(re,de);se+=Y(re,U,Q,fe,ie)}else if(fe=v(O),typeof fe=="function")for(O=fe.call(O),de=0;!(re=O.next()).done;)re=re.value,fe=ee+W(re,de++),se+=Y(re,U,Q,fe,ie);else if(re==="object")throw U=String(O),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return se}function G(O,U,Q){if(O==null)return O;var ee=[],ie=0;return Y(O,ee,"","",function(re){return U.call(Q,re,ie++)}),ee}function X(O){if(O._status===-1){var U=O._result;U=U(),U.then(function(Q){(O._status===0||O._status===-1)&&(O._status=1,O._result=Q)},function(Q){(O._status===0||O._status===-1)&&(O._status=2,O._result=Q)}),O._status===-1&&(O._status=0,O._result=U)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},J={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:J,ReactCurrentOwner:F};function P(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:G,forEach:function(O,U,Q){G(O,function(){U.apply(this,arguments)},Q)},count:function(O){var U=0;return G(O,function(){U++}),U},toArray:function(O){return G(O,function(U){return U})||[]},only:function(O){if(!D(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Fe.Component=_,Fe.Fragment=n,Fe.Profiler=s,Fe.PureComponent=N,Fe.StrictMode=i,Fe.Suspense=p,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,Fe.act=P,Fe.cloneElement=function(O,U,Q){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var ee=C({},O.props),ie=O.key,re=O.ref,se=O._owner;if(U!=null){if(U.ref!==void 0&&(re=U.ref,se=F.current),U.key!==void 0&&(ie=""+U.key),O.type&&O.type.defaultProps)var de=O.type.defaultProps;for(fe in U)M.call(U,fe)&&!A.hasOwnProperty(fe)&&(ee[fe]=U[fe]===void 0&&de!==void 0?de[fe]:U[fe])}var fe=arguments.length-2;if(fe===1)ee.children=Q;else if(1<fe){de=Array(fe);for(var ye=0;ye<fe;ye++)de[ye]=arguments[ye+2];ee.children=de}return{$$typeof:e,type:O.type,key:ie,ref:re,props:ee,_owner:se}},Fe.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Fe.createElement=R,Fe.createFactory=function(O){var U=R.bind(null,O);return U.type=O,U},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(O){return{$$typeof:f,render:O}},Fe.isValidElement=D,Fe.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:X}},Fe.memo=function(O,U){return{$$typeof:h,type:O,compare:U===void 0?null:U}},Fe.startTransition=function(O){var U=J.transition;J.transition={};try{O()}finally{J.transition=U}},Fe.unstable_act=P,Fe.useCallback=function(O,U){return $.current.useCallback(O,U)},Fe.useContext=function(O){return $.current.useContext(O)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(O){return $.current.useDeferredValue(O)},Fe.useEffect=function(O,U){return $.current.useEffect(O,U)},Fe.useId=function(){return $.current.useId()},Fe.useImperativeHandle=function(O,U,Q){return $.current.useImperativeHandle(O,U,Q)},Fe.useInsertionEffect=function(O,U){return $.current.useInsertionEffect(O,U)},Fe.useLayoutEffect=function(O,U){return $.current.useLayoutEffect(O,U)},Fe.useMemo=function(O,U){return $.current.useMemo(O,U)},Fe.useReducer=function(O,U,Q){return $.current.useReducer(O,U,Q)},Fe.useRef=function(O){return $.current.useRef(O)},Fe.useState=function(O){return $.current.useState(O)},Fe.useSyncExternalStore=function(O,U,Q){return $.current.useSyncExternalStore(O,U,Q)},Fe.useTransition=function(){return $.current.useTransition()},Fe.version="18.3.1",Fe}var lv;function Bn(){return lv||(lv=1,fp.exports=FC()),fp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function VC(){if(cv)return na;cv=1;var e=Bn(),t=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,h){var g,b={},v=null,j=null;h!==void 0&&(v=""+h),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(j=p.ref);for(g in p)i.call(p,g)&&!l.hasOwnProperty(g)&&(b[g]=p[g]);if(f&&f.defaultProps)for(g in p=f.defaultProps,p)b[g]===void 0&&(b[g]=p[g]);return{$$typeof:t,type:f,key:v,ref:j,props:b,_owner:s.current}}return na.Fragment=n,na.jsx=u,na.jsxs=u,na}var dv;function BC(){return dv||(dv=1,up.exports=VC()),up.exports}var r=BC(),x=Bn();const Pt=ss(x);var gc={},pp={exports:{}},an={},hp={exports:{}},mp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function HC(){return uv||(uv=1,function(e){function t(J,I){var P=J.length;J.push(I);e:for(;0<P;){var O=P-1>>>1,U=J[O];if(0<s(U,I))J[O]=I,J[P]=U,P=O;else break e}}function n(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var I=J[0],P=J.pop();if(P!==I){J[0]=P;e:for(var O=0,U=J.length,Q=U>>>1;O<Q;){var ee=2*(O+1)-1,ie=J[ee],re=ee+1,se=J[re];if(0>s(ie,P))re<U&&0>s(se,ie)?(J[O]=se,J[re]=P,O=re):(J[O]=ie,J[ee]=P,O=ee);else if(re<U&&0>s(se,P))J[O]=se,J[re]=P,O=re;else break e}}return I}function s(J,I){var P=J.sortIndex-I.sortIndex;return P!==0?P:J.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();e.unstable_now=function(){return u.now()-f}}var p=[],h=[],g=1,b=null,v=3,j=!1,C=!1,k=!1,_=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(J){for(var I=n(h);I!==null;){if(I.callback===null)i(h);else if(I.startTime<=J)i(h),I.sortIndex=I.expirationTime,t(p,I);else break;I=n(h)}}function B(J){if(k=!1,V(J),!C)if(n(p)!==null)C=!0,X(M);else{var I=n(h);I!==null&&$(B,I.startTime-J)}}function M(J,I){C=!1,k&&(k=!1,E(R),R=-1),j=!0;var P=v;try{for(V(I),b=n(p);b!==null&&(!(b.expirationTime>I)||J&&!z());){var O=b.callback;if(typeof O=="function"){b.callback=null,v=b.priorityLevel;var U=O(b.expirationTime<=I);I=e.unstable_now(),typeof U=="function"?b.callback=U:b===n(p)&&i(p),V(I)}else i(p);b=n(p)}if(b!==null)var Q=!0;else{var ee=n(h);ee!==null&&$(B,ee.startTime-I),Q=!1}return Q}finally{b=null,v=P,j=!1}}var F=!1,A=null,R=-1,T=5,D=-1;function z(){return!(e.unstable_now()-D<T)}function H(){if(A!==null){var J=e.unstable_now();D=J;var I=!0;try{I=A(!0,J)}finally{I?W():(F=!1,A=null)}}else F=!1}var W;if(typeof N=="function")W=function(){N(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,G=Y.port2;Y.port1.onmessage=H,W=function(){G.postMessage(null)}}else W=function(){_(H,0)};function X(J){A=J,F||(F=!0,W())}function $(J,I){R=_(function(){J(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(J){J.callback=null},e.unstable_continueExecution=function(){C||j||(C=!0,X(M))},e.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<J?Math.floor(1e3/J):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(p)},e.unstable_next=function(J){switch(v){case 1:case 2:case 3:var I=3;break;default:I=v}var P=v;v=I;try{return J()}finally{v=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(J,I){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var P=v;v=J;try{return I()}finally{v=P}},e.unstable_scheduleCallback=function(J,I,P){var O=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?O+P:O):P=O,J){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=P+U,J={id:g++,callback:I,priorityLevel:J,startTime:P,expirationTime:U,sortIndex:-1},P>O?(J.sortIndex=P,t(h,J),n(p)===null&&J===n(h)&&(k?(E(R),R=-1):k=!0,$(B,P-O))):(J.sortIndex=U,t(p,J),C||j||(C=!0,X(M))),J},e.unstable_shouldYield=z,e.unstable_wrapCallback=function(J){var I=v;return function(){var P=v;v=I;try{return J.apply(this,arguments)}finally{v=P}}}}(mp)),mp}var fv;function WC(){return fv||(fv=1,hp.exports=HC()),hp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function UC(){if(pv)return an;pv=1;var e=Bn(),t=WC();function n(o){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+o,c=1;c<arguments.length;c++)a+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+o+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function l(o,a){u(o,a),u(o+"Capture",a)}function u(o,a){for(s[o]=a,o=0;o<a.length;o++)i.add(a[o])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},b={};function v(o){return p.call(b,o)?!0:p.call(g,o)?!1:h.test(o)?b[o]=!0:(g[o]=!0,!1)}function j(o,a,c,m){if(c!==null&&c.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return m?!1:c!==null?!c.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function C(o,a,c,m){if(a===null||typeof a>"u"||j(o,a,c,m))return!0;if(m)return!1;if(c!==null)switch(c.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function k(o,a,c,m,w,S,L){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=m,this.attributeNamespace=w,this.mustUseProperty=c,this.propertyName=o,this.type=a,this.sanitizeURL=S,this.removeEmptyString=L}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){_[o]=new k(o,0,!1,o,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var a=o[0];_[a]=new k(a,1,!1,o[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(o){_[o]=new k(o,2,!1,o.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){_[o]=new k(o,2,!1,o,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){_[o]=new k(o,3,!1,o.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(o){_[o]=new k(o,3,!0,o,null,!1,!1)}),["capture","download"].forEach(function(o){_[o]=new k(o,4,!1,o,null,!1,!1)}),["cols","rows","size","span"].forEach(function(o){_[o]=new k(o,6,!1,o,null,!1,!1)}),["rowSpan","start"].forEach(function(o){_[o]=new k(o,5,!1,o.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function N(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var a=o.replace(E,N);_[a]=new k(a,1,!1,o,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var a=o.replace(E,N);_[a]=new k(a,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(o){var a=o.replace(E,N);_[a]=new k(a,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(o){_[o]=new k(o,1,!1,o.toLowerCase(),null,!1,!1)}),_.xlinkHref=new k("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(o){_[o]=new k(o,1,!1,o.toLowerCase(),null,!0,!0)});function V(o,a,c,m){var w=_.hasOwnProperty(a)?_[a]:null;(w!==null?w.type!==0:m||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(C(a,c,w,m)&&(c=null),m||w===null?v(a)&&(c===null?o.removeAttribute(a):o.setAttribute(a,""+c)):w.mustUseProperty?o[w.propertyName]=c===null?w.type===3?!1:"":c:(a=w.attributeName,m=w.attributeNamespace,c===null?o.removeAttribute(a):(w=w.type,c=w===3||w===4&&c===!0?"":""+c,m?o.setAttributeNS(m,a,c):o.setAttribute(a,c))))}var B=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),F=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),z=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),J=Symbol.iterator;function I(o){return o===null||typeof o!="object"?null:(o=J&&o[J]||o["@@iterator"],typeof o=="function"?o:null)}var P=Object.assign,O;function U(o){if(O===void 0)try{throw Error()}catch(c){var a=c.stack.trim().match(/\n( *(at )?)/);O=a&&a[1]||""}return`
`+O+o}var Q=!1;function ee(o,a){if(!o||Q)return"";Q=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(oe){var m=oe}Reflect.construct(o,[],a)}else{try{a.call()}catch(oe){m=oe}o.call(a.prototype)}else{try{throw Error()}catch(oe){m=oe}o()}}catch(oe){if(oe&&m&&typeof oe.stack=="string"){for(var w=oe.stack.split(`
`),S=m.stack.split(`
`),L=w.length-1,q=S.length-1;1<=L&&0<=q&&w[L]!==S[q];)q--;for(;1<=L&&0<=q;L--,q--)if(w[L]!==S[q]){if(L!==1||q!==1)do if(L--,q--,0>q||w[L]!==S[q]){var K=`
`+w[L].replace(" at new "," at ");return o.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",o.displayName)),K}while(1<=L&&0<=q);break}}}finally{Q=!1,Error.prepareStackTrace=c}return(o=o?o.displayName||o.name:"")?U(o):""}function ie(o){switch(o.tag){case 5:return U(o.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return o=ee(o.type,!1),o;case 11:return o=ee(o.type.render,!1),o;case 1:return o=ee(o.type,!0),o;default:return""}}function re(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case A:return"Fragment";case F:return"Portal";case T:return"Profiler";case R:return"StrictMode";case W:return"Suspense";case Y:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case z:return(o.displayName||"Context")+".Consumer";case D:return(o._context.displayName||"Context")+".Provider";case H:var a=o.render;return o=o.displayName,o||(o=a.displayName||a.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case G:return a=o.displayName||null,a!==null?a:re(o.type)||"Memo";case X:a=o._payload,o=o._init;try{return re(o(a))}catch{}}return null}function se(o){var a=o.type;switch(o.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=a.render,o=o.displayName||o.name||"",a.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(a);case 8:return a===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function de(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function fe(o){var a=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ye(o){var a=fe(o)?"checked":"value",c=Object.getOwnPropertyDescriptor(o.constructor.prototype,a),m=""+o[a];if(!o.hasOwnProperty(a)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var w=c.get,S=c.set;return Object.defineProperty(o,a,{configurable:!0,get:function(){return w.call(this)},set:function(L){m=""+L,S.call(this,L)}}),Object.defineProperty(o,a,{enumerable:c.enumerable}),{getValue:function(){return m},setValue:function(L){m=""+L},stopTracking:function(){o._valueTracker=null,delete o[a]}}}}function Pe(o){o._valueTracker||(o._valueTracker=ye(o))}function ke(o){if(!o)return!1;var a=o._valueTracker;if(!a)return!0;var c=a.getValue(),m="";return o&&(m=fe(o)?o.checked?"true":"false":o.value),o=m,o!==c?(a.setValue(o),!0):!1}function xe(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function me(o,a){var c=a.checked;return P({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??o._wrapperState.initialChecked})}function $e(o,a){var c=a.defaultValue==null?"":a.defaultValue,m=a.checked!=null?a.checked:a.defaultChecked;c=de(a.value!=null?a.value:c),o._wrapperState={initialChecked:m,initialValue:c,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function Le(o,a){a=a.checked,a!=null&&V(o,"checked",a,!1)}function Me(o,a){Le(o,a);var c=de(a.value),m=a.type;if(c!=null)m==="number"?(c===0&&o.value===""||o.value!=c)&&(o.value=""+c):o.value!==""+c&&(o.value=""+c);else if(m==="submit"||m==="reset"){o.removeAttribute("value");return}a.hasOwnProperty("value")?Je(o,a.type,c):a.hasOwnProperty("defaultValue")&&Je(o,a.type,de(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(o.defaultChecked=!!a.defaultChecked)}function Qe(o,a,c){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var m=a.type;if(!(m!=="submit"&&m!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+o._wrapperState.initialValue,c||a===o.value||(o.value=a),o.defaultValue=a}c=o.name,c!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,c!==""&&(o.name=c)}function Je(o,a,c){(a!=="number"||xe(o.ownerDocument)!==o)&&(c==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+c&&(o.defaultValue=""+c))}var et=Array.isArray;function gt(o,a,c,m){if(o=o.options,a){a={};for(var w=0;w<c.length;w++)a["$"+c[w]]=!0;for(c=0;c<o.length;c++)w=a.hasOwnProperty("$"+o[c].value),o[c].selected!==w&&(o[c].selected=w),w&&m&&(o[c].defaultSelected=!0)}else{for(c=""+de(c),a=null,w=0;w<o.length;w++){if(o[w].value===c){o[w].selected=!0,m&&(o[w].defaultSelected=!0);return}a!==null||o[w].disabled||(a=o[w])}a!==null&&(a.selected=!0)}}function un(o,a){if(a.dangerouslySetInnerHTML!=null)throw Error(n(91));return P({},a,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function qn(o,a){var c=a.value;if(c==null){if(c=a.children,a=a.defaultValue,c!=null){if(a!=null)throw Error(n(92));if(et(c)){if(1<c.length)throw Error(n(93));c=c[0]}a=c}a==null&&(a=""),c=a}o._wrapperState={initialValue:de(c)}}function yo(o,a){var c=de(a.value),m=de(a.defaultValue);c!=null&&(c=""+c,c!==o.value&&(o.value=c),a.defaultValue==null&&o.defaultValue!==c&&(o.defaultValue=c)),m!=null&&(o.defaultValue=""+m)}function Yn(o){var a=o.textContent;a===o._wrapperState.initialValue&&a!==""&&a!==null&&(o.value=a)}function si(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xt(o,a){return o==null||o==="http://www.w3.org/1999/xhtml"?si(a):o==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var jn,ai=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,c,m,w){MSApp.execUnsafeLocalFunction(function(){return o(a,c,m,w)})}:o}(function(o,a){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=a;else{for(jn=jn||document.createElement("div"),jn.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=jn.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;a.firstChild;)o.appendChild(a.firstChild)}});function _r(o,a){if(a){var c=o.firstChild;if(c&&c===o.lastChild&&c.nodeType===3){c.nodeValue=a;return}}o.textContent=a}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$u=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(o){$u.forEach(function(a){a=a+o.charAt(0).toUpperCase()+o.substring(1),Tr[a]=Tr[o]})});function bo(o,a,c){return a==null||typeof a=="boolean"||a===""?"":c||typeof a!="number"||a===0||Tr.hasOwnProperty(o)&&Tr[o]?(""+a).trim():a+"px"}function vs(o,a){o=o.style;for(var c in a)if(a.hasOwnProperty(c)){var m=c.indexOf("--")===0,w=bo(c,a[c],m);c==="float"&&(c="cssFloat"),m?o.setProperty(c,w):o[c]=w}}var Pu=P({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(o,a){if(a){if(Pu[o]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(n(137,o));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(n(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(n(61))}if(a.style!=null&&typeof a.style!="object")throw Error(n(62))}}function ci(o,a){if(o.indexOf("-")===-1)return typeof a.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wo=null;function ys(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var di=null,Dr=null,sr=null;function Nt(o){if(o=Vs(o)){if(typeof di!="function")throw Error(n(280));var a=o.stateNode;a&&(a=Tl(a),di(o.stateNode,o.type,a))}}function It(o){Dr?sr?sr.push(o):sr=[o]:Dr=o}function jo(){if(Dr){var o=Dr,a=sr;if(sr=Dr=null,Nt(o),a)for(o=0;o<a.length;o++)Nt(a[o])}}function Ze(o,a){return o(a)}function fn(){}var bs=!1;function ui(o,a,c){if(bs)return o(a,c);bs=!0;try{return Ze(o,a,c)}finally{bs=!1,(Dr!==null||sr!==null)&&(fn(),jo())}}function Or(o,a){var c=o.stateNode;if(c===null)return null;var m=Tl(c);if(m===null)return null;c=m[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(o=o.type,m=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!m;break e;default:o=!1}if(o)return null;if(c&&typeof c!="function")throw Error(n(231,a,typeof c));return c}var fi=!1;if(f)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){fi=!0}}),window.addEventListener("test",ar,ar),window.removeEventListener("test",ar,ar)}catch{fi=!1}function pi(o,a,c,m,w,S,L,q,K){var oe=Array.prototype.slice.call(arguments,3);try{a.apply(c,oe)}catch(pe){this.onError(pe)}}var lr=!1,Mr=null,Ar=!1,ws=null,js={onError:function(o){lr=!0,Mr=o}};function ll(o,a,c,m,w,S,L,q,K){lr=!1,Mr=null,pi.apply(js,arguments)}function Eu(o,a,c,m,w,S,L,q,K){if(ll.apply(this,arguments),lr){if(lr){var oe=Mr;lr=!1,Mr=null}else throw Error(n(198));Ar||(Ar=!0,ws=oe)}}function cr(o){var a=o,c=o;if(o.alternate)for(;a.return;)a=a.return;else{o=a;do a=o,a.flags&4098&&(c=a.return),o=a.return;while(o)}return a.tag===3?c:null}function Ie(o){if(o.tag===13){var a=o.memoizedState;if(a===null&&(o=o.alternate,o!==null&&(a=o.memoizedState)),a!==null)return a.dehydrated}return null}function tt(o){if(cr(o)!==o)throw Error(n(188))}function xt(o){var a=o.alternate;if(!a){if(a=cr(o),a===null)throw Error(n(188));return a!==o?null:o}for(var c=o,m=a;;){var w=c.return;if(w===null)break;var S=w.alternate;if(S===null){if(m=w.return,m!==null){c=m;continue}break}if(w.child===S.child){for(S=w.child;S;){if(S===c)return tt(w),o;if(S===m)return tt(w),a;S=S.sibling}throw Error(n(188))}if(c.return!==m.return)c=w,m=S;else{for(var L=!1,q=w.child;q;){if(q===c){L=!0,c=w,m=S;break}if(q===m){L=!0,m=w,c=S;break}q=q.sibling}if(!L){for(q=S.child;q;){if(q===c){L=!0,c=S,m=w;break}if(q===m){L=!0,m=S,c=w;break}q=q.sibling}if(!L)throw Error(n(189))}}if(c.alternate!==m)throw Error(n(190))}if(c.tag!==3)throw Error(n(188));return c.stateNode.current===c?o:a}function Jt(o){return o=xt(o),o!==null?en(o):null}function en(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var a=en(o);if(a!==null)return a;o=o.sibling}return null}var hi=t.unstable_scheduleCallback,cl=t.unstable_cancelCallback,_u=t.unstable_shouldYield,X4=t.unstable_requestPaint,wt=t.unstable_now,J4=t.unstable_getCurrentPriorityLevel,Tu=t.unstable_ImmediatePriority,z0=t.unstable_UserBlockingPriority,dl=t.unstable_NormalPriority,e3=t.unstable_LowPriority,R0=t.unstable_IdlePriority,ul=null,Gn=null;function t3(o){if(Gn&&typeof Gn.onCommitFiberRoot=="function")try{Gn.onCommitFiberRoot(ul,o,void 0,(o.current.flags&128)===128)}catch{}}var On=Math.clz32?Math.clz32:o3,n3=Math.log,r3=Math.LN2;function o3(o){return o>>>=0,o===0?32:31-(n3(o)/r3|0)|0}var fl=64,pl=4194304;function Ss(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function hl(o,a){var c=o.pendingLanes;if(c===0)return 0;var m=0,w=o.suspendedLanes,S=o.pingedLanes,L=c&268435455;if(L!==0){var q=L&~w;q!==0?m=Ss(q):(S&=L,S!==0&&(m=Ss(S)))}else L=c&~w,L!==0?m=Ss(L):S!==0&&(m=Ss(S));if(m===0)return 0;if(a!==0&&a!==m&&!(a&w)&&(w=m&-m,S=a&-a,w>=S||w===16&&(S&4194240)!==0))return a;if(m&4&&(m|=c&16),a=o.entangledLanes,a!==0)for(o=o.entanglements,a&=m;0<a;)c=31-On(a),w=1<<c,m|=o[c],a&=~w;return m}function i3(o,a){switch(o){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function s3(o,a){for(var c=o.suspendedLanes,m=o.pingedLanes,w=o.expirationTimes,S=o.pendingLanes;0<S;){var L=31-On(S),q=1<<L,K=w[L];K===-1?(!(q&c)||q&m)&&(w[L]=i3(q,a)):K<=a&&(o.expiredLanes|=q),S&=~q}}function Du(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function N0(){var o=fl;return fl<<=1,!(fl&4194240)&&(fl=64),o}function Ou(o){for(var a=[],c=0;31>c;c++)a.push(o);return a}function ks(o,a,c){o.pendingLanes|=a,a!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,a=31-On(a),o[a]=c}function a3(o,a){var c=o.pendingLanes&~a;o.pendingLanes=a,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=a,o.mutableReadLanes&=a,o.entangledLanes&=a,a=o.entanglements;var m=o.eventTimes;for(o=o.expirationTimes;0<c;){var w=31-On(c),S=1<<w;a[w]=0,m[w]=-1,o[w]=-1,c&=~S}}function Mu(o,a){var c=o.entangledLanes|=a;for(o=o.entanglements;c;){var m=31-On(c),w=1<<m;w&a|o[m]&a&&(o[m]|=a),c&=~w}}var Ye=0;function I0(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var F0,Au,V0,B0,H0,Lu=!1,ml=[],Lr=null,zr=null,Rr=null,Cs=new Map,$s=new Map,Nr=[],l3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function W0(o,a){switch(o){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Rr=null;break;case"pointerover":case"pointerout":Cs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":$s.delete(a.pointerId)}}function Ps(o,a,c,m,w,S){return o===null||o.nativeEvent!==S?(o={blockedOn:a,domEventName:c,eventSystemFlags:m,nativeEvent:S,targetContainers:[w]},a!==null&&(a=Vs(a),a!==null&&Au(a)),o):(o.eventSystemFlags|=m,a=o.targetContainers,w!==null&&a.indexOf(w)===-1&&a.push(w),o)}function c3(o,a,c,m,w){switch(a){case"focusin":return Lr=Ps(Lr,o,a,c,m,w),!0;case"dragenter":return zr=Ps(zr,o,a,c,m,w),!0;case"mouseover":return Rr=Ps(Rr,o,a,c,m,w),!0;case"pointerover":var S=w.pointerId;return Cs.set(S,Ps(Cs.get(S)||null,o,a,c,m,w)),!0;case"gotpointercapture":return S=w.pointerId,$s.set(S,Ps($s.get(S)||null,o,a,c,m,w)),!0}return!1}function U0(o){var a=So(o.target);if(a!==null){var c=cr(a);if(c!==null){if(a=c.tag,a===13){if(a=Ie(c),a!==null){o.blockedOn=a,H0(o.priority,function(){V0(c)});return}}else if(a===3&&c.stateNode.current.memoizedState.isDehydrated){o.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}o.blockedOn=null}function gl(o){if(o.blockedOn!==null)return!1;for(var a=o.targetContainers;0<a.length;){var c=Ru(o.domEventName,o.eventSystemFlags,a[0],o.nativeEvent);if(c===null){c=o.nativeEvent;var m=new c.constructor(c.type,c);wo=m,c.target.dispatchEvent(m),wo=null}else return a=Vs(c),a!==null&&Au(a),o.blockedOn=c,!1;a.shift()}return!0}function q0(o,a,c){gl(o)&&c.delete(a)}function d3(){Lu=!1,Lr!==null&&gl(Lr)&&(Lr=null),zr!==null&&gl(zr)&&(zr=null),Rr!==null&&gl(Rr)&&(Rr=null),Cs.forEach(q0),$s.forEach(q0)}function Es(o,a){o.blockedOn===a&&(o.blockedOn=null,Lu||(Lu=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,d3)))}function _s(o){function a(w){return Es(w,o)}if(0<ml.length){Es(ml[0],o);for(var c=1;c<ml.length;c++){var m=ml[c];m.blockedOn===o&&(m.blockedOn=null)}}for(Lr!==null&&Es(Lr,o),zr!==null&&Es(zr,o),Rr!==null&&Es(Rr,o),Cs.forEach(a),$s.forEach(a),c=0;c<Nr.length;c++)m=Nr[c],m.blockedOn===o&&(m.blockedOn=null);for(;0<Nr.length&&(c=Nr[0],c.blockedOn===null);)U0(c),c.blockedOn===null&&Nr.shift()}var mi=B.ReactCurrentBatchConfig,xl=!0;function u3(o,a,c,m){var w=Ye,S=mi.transition;mi.transition=null;try{Ye=1,zu(o,a,c,m)}finally{Ye=w,mi.transition=S}}function f3(o,a,c,m){var w=Ye,S=mi.transition;mi.transition=null;try{Ye=4,zu(o,a,c,m)}finally{Ye=w,mi.transition=S}}function zu(o,a,c,m){if(xl){var w=Ru(o,a,c,m);if(w===null)ef(o,a,m,vl,c),W0(o,m);else if(c3(w,o,a,c,m))m.stopPropagation();else if(W0(o,m),a&4&&-1<l3.indexOf(o)){for(;w!==null;){var S=Vs(w);if(S!==null&&F0(S),S=Ru(o,a,c,m),S===null&&ef(o,a,m,vl,c),S===w)break;w=S}w!==null&&m.stopPropagation()}else ef(o,a,m,null,c)}}var vl=null;function Ru(o,a,c,m){if(vl=null,o=ys(m),o=So(o),o!==null)if(a=cr(o),a===null)o=null;else if(c=a.tag,c===13){if(o=Ie(a),o!==null)return o;o=null}else if(c===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;o=null}else a!==o&&(o=null);return vl=o,null}function Y0(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(J4()){case Tu:return 1;case z0:return 4;case dl:case e3:return 16;case R0:return 536870912;default:return 16}default:return 16}}var Ir=null,Nu=null,yl=null;function G0(){if(yl)return yl;var o,a=Nu,c=a.length,m,w="value"in Ir?Ir.value:Ir.textContent,S=w.length;for(o=0;o<c&&a[o]===w[o];o++);var L=c-o;for(m=1;m<=L&&a[c-m]===w[S-m];m++);return yl=w.slice(o,1<m?1-m:void 0)}function bl(o){var a=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&a===13&&(o=13)):o=a,o===10&&(o=13),32<=o||o===13?o:0}function wl(){return!0}function K0(){return!1}function pn(o){function a(c,m,w,S,L){this._reactName=c,this._targetInst=w,this.type=m,this.nativeEvent=S,this.target=L,this.currentTarget=null;for(var q in o)o.hasOwnProperty(q)&&(c=o[q],this[q]=c?c(S):S[q]);return this.isDefaultPrevented=(S.defaultPrevented!=null?S.defaultPrevented:S.returnValue===!1)?wl:K0,this.isPropagationStopped=K0,this}return P(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),a}var gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Iu=pn(gi),Ts=P({},gi,{view:0,detail:0}),p3=pn(Ts),Fu,Vu,Ds,jl=P({},Ts,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==Ds&&(Ds&&o.type==="mousemove"?(Fu=o.screenX-Ds.screenX,Vu=o.screenY-Ds.screenY):Vu=Fu=0,Ds=o),Fu)},movementY:function(o){return"movementY"in o?o.movementY:Vu}}),Q0=pn(jl),h3=P({},jl,{dataTransfer:0}),m3=pn(h3),g3=P({},Ts,{relatedTarget:0}),Bu=pn(g3),x3=P({},gi,{animationName:0,elapsedTime:0,pseudoElement:0}),v3=pn(x3),y3=P({},gi,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),b3=pn(y3),w3=P({},gi,{data:0}),Z0=pn(w3),j3={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},S3={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k3={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C3(o){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(o):(o=k3[o])?!!a[o]:!1}function Hu(){return C3}var $3=P({},Ts,{key:function(o){if(o.key){var a=j3[o.key]||o.key;if(a!=="Unidentified")return a}return o.type==="keypress"?(o=bl(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?S3[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(o){return o.type==="keypress"?bl(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?bl(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),P3=pn($3),E3=P({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),X0=pn(E3),_3=P({},Ts,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),T3=pn(_3),D3=P({},gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),O3=pn(D3),M3=P({},jl,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),A3=pn(M3),L3=[9,13,27,32],Wu=f&&"CompositionEvent"in window,Os=null;f&&"documentMode"in document&&(Os=document.documentMode);var z3=f&&"TextEvent"in window&&!Os,J0=f&&(!Wu||Os&&8<Os&&11>=Os),ex=" ",tx=!1;function nx(o,a){switch(o){case"keyup":return L3.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rx(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var xi=!1;function R3(o,a){switch(o){case"compositionend":return rx(a);case"keypress":return a.which!==32?null:(tx=!0,ex);case"textInput":return o=a.data,o===ex&&tx?null:o;default:return null}}function N3(o,a){if(xi)return o==="compositionend"||!Wu&&nx(o,a)?(o=G0(),yl=Nu=Ir=null,xi=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return J0&&a.locale!=="ko"?null:a.data;default:return null}}var I3={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ox(o){var a=o&&o.nodeName&&o.nodeName.toLowerCase();return a==="input"?!!I3[o.type]:a==="textarea"}function ix(o,a,c,m){It(m),a=Pl(a,"onChange"),0<a.length&&(c=new Iu("onChange","change",null,c,m),o.push({event:c,listeners:a}))}var Ms=null,As=null;function F3(o){Sx(o,0)}function Sl(o){var a=ji(o);if(ke(a))return o}function V3(o,a){if(o==="change")return a}var sx=!1;if(f){var Uu;if(f){var qu="oninput"in document;if(!qu){var ax=document.createElement("div");ax.setAttribute("oninput","return;"),qu=typeof ax.oninput=="function"}Uu=qu}else Uu=!1;sx=Uu&&(!document.documentMode||9<document.documentMode)}function lx(){Ms&&(Ms.detachEvent("onpropertychange",cx),As=Ms=null)}function cx(o){if(o.propertyName==="value"&&Sl(As)){var a=[];ix(a,As,o,ys(o)),ui(F3,a)}}function B3(o,a,c){o==="focusin"?(lx(),Ms=a,As=c,Ms.attachEvent("onpropertychange",cx)):o==="focusout"&&lx()}function H3(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return Sl(As)}function W3(o,a){if(o==="click")return Sl(a)}function U3(o,a){if(o==="input"||o==="change")return Sl(a)}function q3(o,a){return o===a&&(o!==0||1/o===1/a)||o!==o&&a!==a}var Mn=typeof Object.is=="function"?Object.is:q3;function Ls(o,a){if(Mn(o,a))return!0;if(typeof o!="object"||o===null||typeof a!="object"||a===null)return!1;var c=Object.keys(o),m=Object.keys(a);if(c.length!==m.length)return!1;for(m=0;m<c.length;m++){var w=c[m];if(!p.call(a,w)||!Mn(o[w],a[w]))return!1}return!0}function dx(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function ux(o,a){var c=dx(o);o=0;for(var m;c;){if(c.nodeType===3){if(m=o+c.textContent.length,o<=a&&m>=a)return{node:c,offset:a-o};o=m}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=dx(c)}}function fx(o,a){return o&&a?o===a?!0:o&&o.nodeType===3?!1:a&&a.nodeType===3?fx(o,a.parentNode):"contains"in o?o.contains(a):o.compareDocumentPosition?!!(o.compareDocumentPosition(a)&16):!1:!1}function px(){for(var o=window,a=xe();a instanceof o.HTMLIFrameElement;){try{var c=typeof a.contentWindow.location.href=="string"}catch{c=!1}if(c)o=a.contentWindow;else break;a=xe(o.document)}return a}function Yu(o){var a=o&&o.nodeName&&o.nodeName.toLowerCase();return a&&(a==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||a==="textarea"||o.contentEditable==="true")}function Y3(o){var a=px(),c=o.focusedElem,m=o.selectionRange;if(a!==c&&c&&c.ownerDocument&&fx(c.ownerDocument.documentElement,c)){if(m!==null&&Yu(c)){if(a=m.start,o=m.end,o===void 0&&(o=a),"selectionStart"in c)c.selectionStart=a,c.selectionEnd=Math.min(o,c.value.length);else if(o=(a=c.ownerDocument||document)&&a.defaultView||window,o.getSelection){o=o.getSelection();var w=c.textContent.length,S=Math.min(m.start,w);m=m.end===void 0?S:Math.min(m.end,w),!o.extend&&S>m&&(w=m,m=S,S=w),w=ux(c,S);var L=ux(c,m);w&&L&&(o.rangeCount!==1||o.anchorNode!==w.node||o.anchorOffset!==w.offset||o.focusNode!==L.node||o.focusOffset!==L.offset)&&(a=a.createRange(),a.setStart(w.node,w.offset),o.removeAllRanges(),S>m?(o.addRange(a),o.extend(L.node,L.offset)):(a.setEnd(L.node,L.offset),o.addRange(a)))}}for(a=[],o=c;o=o.parentNode;)o.nodeType===1&&a.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<a.length;c++)o=a[c],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var G3=f&&"documentMode"in document&&11>=document.documentMode,vi=null,Gu=null,zs=null,Ku=!1;function hx(o,a,c){var m=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Ku||vi==null||vi!==xe(m)||(m=vi,"selectionStart"in m&&Yu(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),zs&&Ls(zs,m)||(zs=m,m=Pl(Gu,"onSelect"),0<m.length&&(a=new Iu("onSelect","select",null,a,c),o.push({event:a,listeners:m}),a.target=vi)))}function kl(o,a){var c={};return c[o.toLowerCase()]=a.toLowerCase(),c["Webkit"+o]="webkit"+a,c["Moz"+o]="moz"+a,c}var yi={animationend:kl("Animation","AnimationEnd"),animationiteration:kl("Animation","AnimationIteration"),animationstart:kl("Animation","AnimationStart"),transitionend:kl("Transition","TransitionEnd")},Qu={},mx={};f&&(mx=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function Cl(o){if(Qu[o])return Qu[o];if(!yi[o])return o;var a=yi[o],c;for(c in a)if(a.hasOwnProperty(c)&&c in mx)return Qu[o]=a[c];return o}var gx=Cl("animationend"),xx=Cl("animationiteration"),vx=Cl("animationstart"),yx=Cl("transitionend"),bx=new Map,wx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(o,a){bx.set(o,a),l(a,[o])}for(var Zu=0;Zu<wx.length;Zu++){var Xu=wx[Zu],K3=Xu.toLowerCase(),Q3=Xu[0].toUpperCase()+Xu.slice(1);Fr(K3,"on"+Q3)}Fr(gx,"onAnimationEnd"),Fr(xx,"onAnimationIteration"),Fr(vx,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(yx,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z3=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rs));function jx(o,a,c){var m=o.type||"unknown-event";o.currentTarget=c,Eu(m,a,void 0,o),o.currentTarget=null}function Sx(o,a){a=(a&4)!==0;for(var c=0;c<o.length;c++){var m=o[c],w=m.event;m=m.listeners;e:{var S=void 0;if(a)for(var L=m.length-1;0<=L;L--){var q=m[L],K=q.instance,oe=q.currentTarget;if(q=q.listener,K!==S&&w.isPropagationStopped())break e;jx(w,q,oe),S=K}else for(L=0;L<m.length;L++){if(q=m[L],K=q.instance,oe=q.currentTarget,q=q.listener,K!==S&&w.isPropagationStopped())break e;jx(w,q,oe),S=K}}}if(Ar)throw o=ws,Ar=!1,ws=null,o}function nt(o,a){var c=a[af];c===void 0&&(c=a[af]=new Set);var m=o+"__bubble";c.has(m)||(kx(a,o,2,!1),c.add(m))}function Ju(o,a,c){var m=0;a&&(m|=4),kx(c,o,m,a)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Ns(o){if(!o[$l]){o[$l]=!0,i.forEach(function(c){c!=="selectionchange"&&(Z3.has(c)||Ju(c,!1,o),Ju(c,!0,o))});var a=o.nodeType===9?o:o.ownerDocument;a===null||a[$l]||(a[$l]=!0,Ju("selectionchange",!1,a))}}function kx(o,a,c,m){switch(Y0(a)){case 1:var w=u3;break;case 4:w=f3;break;default:w=zu}c=w.bind(null,a,c,o),w=void 0,!fi||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(w=!0),m?w!==void 0?o.addEventListener(a,c,{capture:!0,passive:w}):o.addEventListener(a,c,!0):w!==void 0?o.addEventListener(a,c,{passive:w}):o.addEventListener(a,c,!1)}function ef(o,a,c,m,w){var S=m;if(!(a&1)&&!(a&2)&&m!==null)e:for(;;){if(m===null)return;var L=m.tag;if(L===3||L===4){var q=m.stateNode.containerInfo;if(q===w||q.nodeType===8&&q.parentNode===w)break;if(L===4)for(L=m.return;L!==null;){var K=L.tag;if((K===3||K===4)&&(K=L.stateNode.containerInfo,K===w||K.nodeType===8&&K.parentNode===w))return;L=L.return}for(;q!==null;){if(L=So(q),L===null)return;if(K=L.tag,K===5||K===6){m=S=L;continue e}q=q.parentNode}}m=m.return}ui(function(){var oe=S,pe=ys(c),he=[];e:{var ue=bx.get(o);if(ue!==void 0){var be=Iu,je=o;switch(o){case"keypress":if(bl(c)===0)break e;case"keydown":case"keyup":be=P3;break;case"focusin":je="focus",be=Bu;break;case"focusout":je="blur",be=Bu;break;case"beforeblur":case"afterblur":be=Bu;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=Q0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=m3;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=T3;break;case gx:case xx:case vx:be=v3;break;case yx:be=O3;break;case"scroll":be=p3;break;case"wheel":be=A3;break;case"copy":case"cut":case"paste":be=b3;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=X0}var Se=(a&4)!==0,jt=!Se&&o==="scroll",te=Se?ue!==null?ue+"Capture":null:ue;Se=[];for(var Z=oe,ne;Z!==null;){ne=Z;var ge=ne.stateNode;if(ne.tag===5&&ge!==null&&(ne=ge,te!==null&&(ge=Or(Z,te),ge!=null&&Se.push(Is(Z,ge,ne)))),jt)break;Z=Z.return}0<Se.length&&(ue=new be(ue,je,null,c,pe),he.push({event:ue,listeners:Se}))}}if(!(a&7)){e:{if(ue=o==="mouseover"||o==="pointerover",be=o==="mouseout"||o==="pointerout",ue&&c!==wo&&(je=c.relatedTarget||c.fromElement)&&(So(je)||je[dr]))break e;if((be||ue)&&(ue=pe.window===pe?pe:(ue=pe.ownerDocument)?ue.defaultView||ue.parentWindow:window,be?(je=c.relatedTarget||c.toElement,be=oe,je=je?So(je):null,je!==null&&(jt=cr(je),je!==jt||je.tag!==5&&je.tag!==6)&&(je=null)):(be=null,je=oe),be!==je)){if(Se=Q0,ge="onMouseLeave",te="onMouseEnter",Z="mouse",(o==="pointerout"||o==="pointerover")&&(Se=X0,ge="onPointerLeave",te="onPointerEnter",Z="pointer"),jt=be==null?ue:ji(be),ne=je==null?ue:ji(je),ue=new Se(ge,Z+"leave",be,c,pe),ue.target=jt,ue.relatedTarget=ne,ge=null,So(pe)===oe&&(Se=new Se(te,Z+"enter",je,c,pe),Se.target=ne,Se.relatedTarget=jt,ge=Se),jt=ge,be&&je)t:{for(Se=be,te=je,Z=0,ne=Se;ne;ne=bi(ne))Z++;for(ne=0,ge=te;ge;ge=bi(ge))ne++;for(;0<Z-ne;)Se=bi(Se),Z--;for(;0<ne-Z;)te=bi(te),ne--;for(;Z--;){if(Se===te||te!==null&&Se===te.alternate)break t;Se=bi(Se),te=bi(te)}Se=null}else Se=null;be!==null&&Cx(he,ue,be,Se,!1),je!==null&&jt!==null&&Cx(he,jt,je,Se,!0)}}e:{if(ue=oe?ji(oe):window,be=ue.nodeName&&ue.nodeName.toLowerCase(),be==="select"||be==="input"&&ue.type==="file")var Ce=V3;else if(ox(ue))if(sx)Ce=U3;else{Ce=H3;var _e=B3}else(be=ue.nodeName)&&be.toLowerCase()==="input"&&(ue.type==="checkbox"||ue.type==="radio")&&(Ce=W3);if(Ce&&(Ce=Ce(o,oe))){ix(he,Ce,c,pe);break e}_e&&_e(o,ue,oe),o==="focusout"&&(_e=ue._wrapperState)&&_e.controlled&&ue.type==="number"&&Je(ue,"number",ue.value)}switch(_e=oe?ji(oe):window,o){case"focusin":(ox(_e)||_e.contentEditable==="true")&&(vi=_e,Gu=oe,zs=null);break;case"focusout":zs=Gu=vi=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,hx(he,c,pe);break;case"selectionchange":if(G3)break;case"keydown":case"keyup":hx(he,c,pe)}var Te;if(Wu)e:{switch(o){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else xi?nx(o,c)&&(Ae="onCompositionEnd"):o==="keydown"&&c.keyCode===229&&(Ae="onCompositionStart");Ae&&(J0&&c.locale!=="ko"&&(xi||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&xi&&(Te=G0()):(Ir=pe,Nu="value"in Ir?Ir.value:Ir.textContent,xi=!0)),_e=Pl(oe,Ae),0<_e.length&&(Ae=new Z0(Ae,o,null,c,pe),he.push({event:Ae,listeners:_e}),Te?Ae.data=Te:(Te=rx(c),Te!==null&&(Ae.data=Te)))),(Te=z3?R3(o,c):N3(o,c))&&(oe=Pl(oe,"onBeforeInput"),0<oe.length&&(pe=new Z0("onBeforeInput","beforeinput",null,c,pe),he.push({event:pe,listeners:oe}),pe.data=Te))}Sx(he,a)})}function Is(o,a,c){return{instance:o,listener:a,currentTarget:c}}function Pl(o,a){for(var c=a+"Capture",m=[];o!==null;){var w=o,S=w.stateNode;w.tag===5&&S!==null&&(w=S,S=Or(o,c),S!=null&&m.unshift(Is(o,S,w)),S=Or(o,a),S!=null&&m.push(Is(o,S,w))),o=o.return}return m}function bi(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function Cx(o,a,c,m,w){for(var S=a._reactName,L=[];c!==null&&c!==m;){var q=c,K=q.alternate,oe=q.stateNode;if(K!==null&&K===m)break;q.tag===5&&oe!==null&&(q=oe,w?(K=Or(c,S),K!=null&&L.unshift(Is(c,K,q))):w||(K=Or(c,S),K!=null&&L.push(Is(c,K,q)))),c=c.return}L.length!==0&&o.push({event:a,listeners:L})}var X3=/\r\n?/g,J3=/\u0000|\uFFFD/g;function $x(o){return(typeof o=="string"?o:""+o).replace(X3,`
`).replace(J3,"")}function El(o,a,c){if(a=$x(a),$x(o)!==a&&c)throw Error(n(425))}function _l(){}var tf=null,nf=null;function rf(o,a){return o==="textarea"||o==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var of=typeof setTimeout=="function"?setTimeout:void 0,eC=typeof clearTimeout=="function"?clearTimeout:void 0,Px=typeof Promise=="function"?Promise:void 0,tC=typeof queueMicrotask=="function"?queueMicrotask:typeof Px<"u"?function(o){return Px.resolve(null).then(o).catch(nC)}:of;function nC(o){setTimeout(function(){throw o})}function sf(o,a){var c=a,m=0;do{var w=c.nextSibling;if(o.removeChild(c),w&&w.nodeType===8)if(c=w.data,c==="/$"){if(m===0){o.removeChild(w),_s(a);return}m--}else c!=="$"&&c!=="$?"&&c!=="$!"||m++;c=w}while(c);_s(a)}function Vr(o){for(;o!=null;o=o.nextSibling){var a=o.nodeType;if(a===1||a===3)break;if(a===8){if(a=o.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return o}function Ex(o){o=o.previousSibling;for(var a=0;o;){if(o.nodeType===8){var c=o.data;if(c==="$"||c==="$!"||c==="$?"){if(a===0)return o;a--}else c==="/$"&&a++}o=o.previousSibling}return null}var wi=Math.random().toString(36).slice(2),Kn="__reactFiber$"+wi,Fs="__reactProps$"+wi,dr="__reactContainer$"+wi,af="__reactEvents$"+wi,rC="__reactListeners$"+wi,oC="__reactHandles$"+wi;function So(o){var a=o[Kn];if(a)return a;for(var c=o.parentNode;c;){if(a=c[dr]||c[Kn]){if(c=a.alternate,a.child!==null||c!==null&&c.child!==null)for(o=Ex(o);o!==null;){if(c=o[Kn])return c;o=Ex(o)}return a}o=c,c=o.parentNode}return null}function Vs(o){return o=o[Kn]||o[dr],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function ji(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(n(33))}function Tl(o){return o[Fs]||null}var lf=[],Si=-1;function Br(o){return{current:o}}function rt(o){0>Si||(o.current=lf[Si],lf[Si]=null,Si--)}function Xe(o,a){Si++,lf[Si]=o.current,o.current=a}var Hr={},Ht=Br(Hr),tn=Br(!1),ko=Hr;function ki(o,a){var c=o.type.contextTypes;if(!c)return Hr;var m=o.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===a)return m.__reactInternalMemoizedMaskedChildContext;var w={},S;for(S in c)w[S]=a[S];return m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=a,o.__reactInternalMemoizedMaskedChildContext=w),w}function nn(o){return o=o.childContextTypes,o!=null}function Dl(){rt(tn),rt(Ht)}function _x(o,a,c){if(Ht.current!==Hr)throw Error(n(168));Xe(Ht,a),Xe(tn,c)}function Tx(o,a,c){var m=o.stateNode;if(a=a.childContextTypes,typeof m.getChildContext!="function")return c;m=m.getChildContext();for(var w in m)if(!(w in a))throw Error(n(108,se(o)||"Unknown",w));return P({},c,m)}function Ol(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Hr,ko=Ht.current,Xe(Ht,o),Xe(tn,tn.current),!0}function Dx(o,a,c){var m=o.stateNode;if(!m)throw Error(n(169));c?(o=Tx(o,a,ko),m.__reactInternalMemoizedMergedChildContext=o,rt(tn),rt(Ht),Xe(Ht,o)):rt(tn),Xe(tn,c)}var ur=null,Ml=!1,cf=!1;function Ox(o){ur===null?ur=[o]:ur.push(o)}function iC(o){Ml=!0,Ox(o)}function Wr(){if(!cf&&ur!==null){cf=!0;var o=0,a=Ye;try{var c=ur;for(Ye=1;o<c.length;o++){var m=c[o];do m=m(!0);while(m!==null)}ur=null,Ml=!1}catch(w){throw ur!==null&&(ur=ur.slice(o+1)),hi(Tu,Wr),w}finally{Ye=a,cf=!1}}return null}var Ci=[],$i=0,Al=null,Ll=0,Sn=[],kn=0,Co=null,fr=1,pr="";function $o(o,a){Ci[$i++]=Ll,Ci[$i++]=Al,Al=o,Ll=a}function Mx(o,a,c){Sn[kn++]=fr,Sn[kn++]=pr,Sn[kn++]=Co,Co=o;var m=fr;o=pr;var w=32-On(m)-1;m&=~(1<<w),c+=1;var S=32-On(a)+w;if(30<S){var L=w-w%5;S=(m&(1<<L)-1).toString(32),m>>=L,w-=L,fr=1<<32-On(a)+w|c<<w|m,pr=S+o}else fr=1<<S|c<<w|m,pr=o}function df(o){o.return!==null&&($o(o,1),Mx(o,1,0))}function uf(o){for(;o===Al;)Al=Ci[--$i],Ci[$i]=null,Ll=Ci[--$i],Ci[$i]=null;for(;o===Co;)Co=Sn[--kn],Sn[kn]=null,pr=Sn[--kn],Sn[kn]=null,fr=Sn[--kn],Sn[kn]=null}var hn=null,mn=null,at=!1,An=null;function Ax(o,a){var c=En(5,null,null,0);c.elementType="DELETED",c.stateNode=a,c.return=o,a=o.deletions,a===null?(o.deletions=[c],o.flags|=16):a.push(c)}function Lx(o,a){switch(o.tag){case 5:var c=o.type;return a=a.nodeType!==1||c.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(o.stateNode=a,hn=o,mn=Vr(a.firstChild),!0):!1;case 6:return a=o.pendingProps===""||a.nodeType!==3?null:a,a!==null?(o.stateNode=a,hn=o,mn=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(c=Co!==null?{id:fr,overflow:pr}:null,o.memoizedState={dehydrated:a,treeContext:c,retryLane:1073741824},c=En(18,null,null,0),c.stateNode=a,c.return=o,o.child=c,hn=o,mn=null,!0):!1;default:return!1}}function ff(o){return(o.mode&1)!==0&&(o.flags&128)===0}function pf(o){if(at){var a=mn;if(a){var c=a;if(!Lx(o,a)){if(ff(o))throw Error(n(418));a=Vr(c.nextSibling);var m=hn;a&&Lx(o,a)?Ax(m,c):(o.flags=o.flags&-4097|2,at=!1,hn=o)}}else{if(ff(o))throw Error(n(418));o.flags=o.flags&-4097|2,at=!1,hn=o}}}function zx(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;hn=o}function zl(o){if(o!==hn)return!1;if(!at)return zx(o),at=!0,!1;var a;if((a=o.tag!==3)&&!(a=o.tag!==5)&&(a=o.type,a=a!=="head"&&a!=="body"&&!rf(o.type,o.memoizedProps)),a&&(a=mn)){if(ff(o))throw Rx(),Error(n(418));for(;a;)Ax(o,a),a=Vr(a.nextSibling)}if(zx(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(n(317));e:{for(o=o.nextSibling,a=0;o;){if(o.nodeType===8){var c=o.data;if(c==="/$"){if(a===0){mn=Vr(o.nextSibling);break e}a--}else c!=="$"&&c!=="$!"&&c!=="$?"||a++}o=o.nextSibling}mn=null}}else mn=hn?Vr(o.stateNode.nextSibling):null;return!0}function Rx(){for(var o=mn;o;)o=Vr(o.nextSibling)}function Pi(){mn=hn=null,at=!1}function hf(o){An===null?An=[o]:An.push(o)}var sC=B.ReactCurrentBatchConfig;function Bs(o,a,c){if(o=c.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(n(309));var m=c.stateNode}if(!m)throw Error(n(147,o));var w=m,S=""+o;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===S?a.ref:(a=function(L){var q=w.refs;L===null?delete q[S]:q[S]=L},a._stringRef=S,a)}if(typeof o!="string")throw Error(n(284));if(!c._owner)throw Error(n(290,o))}return o}function Rl(o,a){throw o=Object.prototype.toString.call(a),Error(n(31,o==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":o))}function Nx(o){var a=o._init;return a(o._payload)}function Ix(o){function a(te,Z){if(o){var ne=te.deletions;ne===null?(te.deletions=[Z],te.flags|=16):ne.push(Z)}}function c(te,Z){if(!o)return null;for(;Z!==null;)a(te,Z),Z=Z.sibling;return null}function m(te,Z){for(te=new Map;Z!==null;)Z.key!==null?te.set(Z.key,Z):te.set(Z.index,Z),Z=Z.sibling;return te}function w(te,Z){return te=Xr(te,Z),te.index=0,te.sibling=null,te}function S(te,Z,ne){return te.index=ne,o?(ne=te.alternate,ne!==null?(ne=ne.index,ne<Z?(te.flags|=2,Z):ne):(te.flags|=2,Z)):(te.flags|=1048576,Z)}function L(te){return o&&te.alternate===null&&(te.flags|=2),te}function q(te,Z,ne,ge){return Z===null||Z.tag!==6?(Z=ip(ne,te.mode,ge),Z.return=te,Z):(Z=w(Z,ne),Z.return=te,Z)}function K(te,Z,ne,ge){var Ce=ne.type;return Ce===A?pe(te,Z,ne.props.children,ge,ne.key):Z!==null&&(Z.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===X&&Nx(Ce)===Z.type)?(ge=w(Z,ne.props),ge.ref=Bs(te,Z,ne),ge.return=te,ge):(ge=ac(ne.type,ne.key,ne.props,null,te.mode,ge),ge.ref=Bs(te,Z,ne),ge.return=te,ge)}function oe(te,Z,ne,ge){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==ne.containerInfo||Z.stateNode.implementation!==ne.implementation?(Z=sp(ne,te.mode,ge),Z.return=te,Z):(Z=w(Z,ne.children||[]),Z.return=te,Z)}function pe(te,Z,ne,ge,Ce){return Z===null||Z.tag!==7?(Z=Ao(ne,te.mode,ge,Ce),Z.return=te,Z):(Z=w(Z,ne),Z.return=te,Z)}function he(te,Z,ne){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=ip(""+Z,te.mode,ne),Z.return=te,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case M:return ne=ac(Z.type,Z.key,Z.props,null,te.mode,ne),ne.ref=Bs(te,null,Z),ne.return=te,ne;case F:return Z=sp(Z,te.mode,ne),Z.return=te,Z;case X:var ge=Z._init;return he(te,ge(Z._payload),ne)}if(et(Z)||I(Z))return Z=Ao(Z,te.mode,ne,null),Z.return=te,Z;Rl(te,Z)}return null}function ue(te,Z,ne,ge){var Ce=Z!==null?Z.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ce!==null?null:q(te,Z,""+ne,ge);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:return ne.key===Ce?K(te,Z,ne,ge):null;case F:return ne.key===Ce?oe(te,Z,ne,ge):null;case X:return Ce=ne._init,ue(te,Z,Ce(ne._payload),ge)}if(et(ne)||I(ne))return Ce!==null?null:pe(te,Z,ne,ge,null);Rl(te,ne)}return null}function be(te,Z,ne,ge,Ce){if(typeof ge=="string"&&ge!==""||typeof ge=="number")return te=te.get(ne)||null,q(Z,te,""+ge,Ce);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case M:return te=te.get(ge.key===null?ne:ge.key)||null,K(Z,te,ge,Ce);case F:return te=te.get(ge.key===null?ne:ge.key)||null,oe(Z,te,ge,Ce);case X:var _e=ge._init;return be(te,Z,ne,_e(ge._payload),Ce)}if(et(ge)||I(ge))return te=te.get(ne)||null,pe(Z,te,ge,Ce,null);Rl(Z,ge)}return null}function je(te,Z,ne,ge){for(var Ce=null,_e=null,Te=Z,Ae=Z=0,Mt=null;Te!==null&&Ae<ne.length;Ae++){Te.index>Ae?(Mt=Te,Te=null):Mt=Te.sibling;var Ue=ue(te,Te,ne[Ae],ge);if(Ue===null){Te===null&&(Te=Mt);break}o&&Te&&Ue.alternate===null&&a(te,Te),Z=S(Ue,Z,Ae),_e===null?Ce=Ue:_e.sibling=Ue,_e=Ue,Te=Mt}if(Ae===ne.length)return c(te,Te),at&&$o(te,Ae),Ce;if(Te===null){for(;Ae<ne.length;Ae++)Te=he(te,ne[Ae],ge),Te!==null&&(Z=S(Te,Z,Ae),_e===null?Ce=Te:_e.sibling=Te,_e=Te);return at&&$o(te,Ae),Ce}for(Te=m(te,Te);Ae<ne.length;Ae++)Mt=be(Te,te,Ae,ne[Ae],ge),Mt!==null&&(o&&Mt.alternate!==null&&Te.delete(Mt.key===null?Ae:Mt.key),Z=S(Mt,Z,Ae),_e===null?Ce=Mt:_e.sibling=Mt,_e=Mt);return o&&Te.forEach(function(Jr){return a(te,Jr)}),at&&$o(te,Ae),Ce}function Se(te,Z,ne,ge){var Ce=I(ne);if(typeof Ce!="function")throw Error(n(150));if(ne=Ce.call(ne),ne==null)throw Error(n(151));for(var _e=Ce=null,Te=Z,Ae=Z=0,Mt=null,Ue=ne.next();Te!==null&&!Ue.done;Ae++,Ue=ne.next()){Te.index>Ae?(Mt=Te,Te=null):Mt=Te.sibling;var Jr=ue(te,Te,Ue.value,ge);if(Jr===null){Te===null&&(Te=Mt);break}o&&Te&&Jr.alternate===null&&a(te,Te),Z=S(Jr,Z,Ae),_e===null?Ce=Jr:_e.sibling=Jr,_e=Jr,Te=Mt}if(Ue.done)return c(te,Te),at&&$o(te,Ae),Ce;if(Te===null){for(;!Ue.done;Ae++,Ue=ne.next())Ue=he(te,Ue.value,ge),Ue!==null&&(Z=S(Ue,Z,Ae),_e===null?Ce=Ue:_e.sibling=Ue,_e=Ue);return at&&$o(te,Ae),Ce}for(Te=m(te,Te);!Ue.done;Ae++,Ue=ne.next())Ue=be(Te,te,Ae,Ue.value,ge),Ue!==null&&(o&&Ue.alternate!==null&&Te.delete(Ue.key===null?Ae:Ue.key),Z=S(Ue,Z,Ae),_e===null?Ce=Ue:_e.sibling=Ue,_e=Ue);return o&&Te.forEach(function(IC){return a(te,IC)}),at&&$o(te,Ae),Ce}function jt(te,Z,ne,ge){if(typeof ne=="object"&&ne!==null&&ne.type===A&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case M:e:{for(var Ce=ne.key,_e=Z;_e!==null;){if(_e.key===Ce){if(Ce=ne.type,Ce===A){if(_e.tag===7){c(te,_e.sibling),Z=w(_e,ne.props.children),Z.return=te,te=Z;break e}}else if(_e.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===X&&Nx(Ce)===_e.type){c(te,_e.sibling),Z=w(_e,ne.props),Z.ref=Bs(te,_e,ne),Z.return=te,te=Z;break e}c(te,_e);break}else a(te,_e);_e=_e.sibling}ne.type===A?(Z=Ao(ne.props.children,te.mode,ge,ne.key),Z.return=te,te=Z):(ge=ac(ne.type,ne.key,ne.props,null,te.mode,ge),ge.ref=Bs(te,Z,ne),ge.return=te,te=ge)}return L(te);case F:e:{for(_e=ne.key;Z!==null;){if(Z.key===_e)if(Z.tag===4&&Z.stateNode.containerInfo===ne.containerInfo&&Z.stateNode.implementation===ne.implementation){c(te,Z.sibling),Z=w(Z,ne.children||[]),Z.return=te,te=Z;break e}else{c(te,Z);break}else a(te,Z);Z=Z.sibling}Z=sp(ne,te.mode,ge),Z.return=te,te=Z}return L(te);case X:return _e=ne._init,jt(te,Z,_e(ne._payload),ge)}if(et(ne))return je(te,Z,ne,ge);if(I(ne))return Se(te,Z,ne,ge);Rl(te,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,Z!==null&&Z.tag===6?(c(te,Z.sibling),Z=w(Z,ne),Z.return=te,te=Z):(c(te,Z),Z=ip(ne,te.mode,ge),Z.return=te,te=Z),L(te)):c(te,Z)}return jt}var Ei=Ix(!0),Fx=Ix(!1),Nl=Br(null),Il=null,_i=null,mf=null;function gf(){mf=_i=Il=null}function xf(o){var a=Nl.current;rt(Nl),o._currentValue=a}function vf(o,a,c){for(;o!==null;){var m=o.alternate;if((o.childLanes&a)!==a?(o.childLanes|=a,m!==null&&(m.childLanes|=a)):m!==null&&(m.childLanes&a)!==a&&(m.childLanes|=a),o===c)break;o=o.return}}function Ti(o,a){Il=o,mf=_i=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&a&&(rn=!0),o.firstContext=null)}function Cn(o){var a=o._currentValue;if(mf!==o)if(o={context:o,memoizedValue:a,next:null},_i===null){if(Il===null)throw Error(n(308));_i=o,Il.dependencies={lanes:0,firstContext:o}}else _i=_i.next=o;return a}var Po=null;function yf(o){Po===null?Po=[o]:Po.push(o)}function Vx(o,a,c,m){var w=a.interleaved;return w===null?(c.next=c,yf(a)):(c.next=w.next,w.next=c),a.interleaved=c,hr(o,m)}function hr(o,a){o.lanes|=a;var c=o.alternate;for(c!==null&&(c.lanes|=a),c=o,o=o.return;o!==null;)o.childLanes|=a,c=o.alternate,c!==null&&(c.childLanes|=a),c=o,o=o.return;return c.tag===3?c.stateNode:null}var Ur=!1;function bf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bx(o,a){o=o.updateQueue,a.updateQueue===o&&(a.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function mr(o,a){return{eventTime:o,lane:a,tag:0,payload:null,callback:null,next:null}}function qr(o,a,c){var m=o.updateQueue;if(m===null)return null;if(m=m.shared,He&2){var w=m.pending;return w===null?a.next=a:(a.next=w.next,w.next=a),m.pending=a,hr(o,c)}return w=m.interleaved,w===null?(a.next=a,yf(m)):(a.next=w.next,w.next=a),m.interleaved=a,hr(o,c)}function Fl(o,a,c){if(a=a.updateQueue,a!==null&&(a=a.shared,(c&4194240)!==0)){var m=a.lanes;m&=o.pendingLanes,c|=m,a.lanes=c,Mu(o,c)}}function Hx(o,a){var c=o.updateQueue,m=o.alternate;if(m!==null&&(m=m.updateQueue,c===m)){var w=null,S=null;if(c=c.firstBaseUpdate,c!==null){do{var L={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};S===null?w=S=L:S=S.next=L,c=c.next}while(c!==null);S===null?w=S=a:S=S.next=a}else w=S=a;c={baseState:m.baseState,firstBaseUpdate:w,lastBaseUpdate:S,shared:m.shared,effects:m.effects},o.updateQueue=c;return}o=c.lastBaseUpdate,o===null?c.firstBaseUpdate=a:o.next=a,c.lastBaseUpdate=a}function Vl(o,a,c,m){var w=o.updateQueue;Ur=!1;var S=w.firstBaseUpdate,L=w.lastBaseUpdate,q=w.shared.pending;if(q!==null){w.shared.pending=null;var K=q,oe=K.next;K.next=null,L===null?S=oe:L.next=oe,L=K;var pe=o.alternate;pe!==null&&(pe=pe.updateQueue,q=pe.lastBaseUpdate,q!==L&&(q===null?pe.firstBaseUpdate=oe:q.next=oe,pe.lastBaseUpdate=K))}if(S!==null){var he=w.baseState;L=0,pe=oe=K=null,q=S;do{var ue=q.lane,be=q.eventTime;if((m&ue)===ue){pe!==null&&(pe=pe.next={eventTime:be,lane:0,tag:q.tag,payload:q.payload,callback:q.callback,next:null});e:{var je=o,Se=q;switch(ue=a,be=c,Se.tag){case 1:if(je=Se.payload,typeof je=="function"){he=je.call(be,he,ue);break e}he=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Se.payload,ue=typeof je=="function"?je.call(be,he,ue):je,ue==null)break e;he=P({},he,ue);break e;case 2:Ur=!0}}q.callback!==null&&q.lane!==0&&(o.flags|=64,ue=w.effects,ue===null?w.effects=[q]:ue.push(q))}else be={eventTime:be,lane:ue,tag:q.tag,payload:q.payload,callback:q.callback,next:null},pe===null?(oe=pe=be,K=he):pe=pe.next=be,L|=ue;if(q=q.next,q===null){if(q=w.shared.pending,q===null)break;ue=q,q=ue.next,ue.next=null,w.lastBaseUpdate=ue,w.shared.pending=null}}while(!0);if(pe===null&&(K=he),w.baseState=K,w.firstBaseUpdate=oe,w.lastBaseUpdate=pe,a=w.shared.interleaved,a!==null){w=a;do L|=w.lane,w=w.next;while(w!==a)}else S===null&&(w.shared.lanes=0);To|=L,o.lanes=L,o.memoizedState=he}}function Wx(o,a,c){if(o=a.effects,a.effects=null,o!==null)for(a=0;a<o.length;a++){var m=o[a],w=m.callback;if(w!==null){if(m.callback=null,m=c,typeof w!="function")throw Error(n(191,w));w.call(m)}}}var Hs={},Qn=Br(Hs),Ws=Br(Hs),Us=Br(Hs);function Eo(o){if(o===Hs)throw Error(n(174));return o}function wf(o,a){switch(Xe(Us,a),Xe(Ws,o),Xe(Qn,Hs),o=a.nodeType,o){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:Xt(null,"");break;default:o=o===8?a.parentNode:a,a=o.namespaceURI||null,o=o.tagName,a=Xt(a,o)}rt(Qn),Xe(Qn,a)}function Di(){rt(Qn),rt(Ws),rt(Us)}function Ux(o){Eo(Us.current);var a=Eo(Qn.current),c=Xt(a,o.type);a!==c&&(Xe(Ws,o),Xe(Qn,c))}function jf(o){Ws.current===o&&(rt(Qn),rt(Ws))}var ft=Br(0);function Bl(o){for(var a=o;a!==null;){if(a.tag===13){var c=a.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if(a.flags&128)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Sf=[];function kf(){for(var o=0;o<Sf.length;o++)Sf[o]._workInProgressVersionPrimary=null;Sf.length=0}var Hl=B.ReactCurrentDispatcher,Cf=B.ReactCurrentBatchConfig,_o=0,pt=null,_t=null,Dt=null,Wl=!1,qs=!1,Ys=0,aC=0;function Wt(){throw Error(n(321))}function $f(o,a){if(a===null)return!1;for(var c=0;c<a.length&&c<o.length;c++)if(!Mn(o[c],a[c]))return!1;return!0}function Pf(o,a,c,m,w,S){if(_o=S,pt=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,Hl.current=o===null||o.memoizedState===null?uC:fC,o=c(m,w),qs){S=0;do{if(qs=!1,Ys=0,25<=S)throw Error(n(301));S+=1,Dt=_t=null,a.updateQueue=null,Hl.current=pC,o=c(m,w)}while(qs)}if(Hl.current=Yl,a=_t!==null&&_t.next!==null,_o=0,Dt=_t=pt=null,Wl=!1,a)throw Error(n(300));return o}function Ef(){var o=Ys!==0;return Ys=0,o}function Zn(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?pt.memoizedState=Dt=o:Dt=Dt.next=o,Dt}function $n(){if(_t===null){var o=pt.alternate;o=o!==null?o.memoizedState:null}else o=_t.next;var a=Dt===null?pt.memoizedState:Dt.next;if(a!==null)Dt=a,_t=o;else{if(o===null)throw Error(n(310));_t=o,o={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Dt===null?pt.memoizedState=Dt=o:Dt=Dt.next=o}return Dt}function Gs(o,a){return typeof a=="function"?a(o):a}function _f(o){var a=$n(),c=a.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var m=_t,w=m.baseQueue,S=c.pending;if(S!==null){if(w!==null){var L=w.next;w.next=S.next,S.next=L}m.baseQueue=w=S,c.pending=null}if(w!==null){S=w.next,m=m.baseState;var q=L=null,K=null,oe=S;do{var pe=oe.lane;if((_o&pe)===pe)K!==null&&(K=K.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),m=oe.hasEagerState?oe.eagerState:o(m,oe.action);else{var he={lane:pe,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};K===null?(q=K=he,L=m):K=K.next=he,pt.lanes|=pe,To|=pe}oe=oe.next}while(oe!==null&&oe!==S);K===null?L=m:K.next=q,Mn(m,a.memoizedState)||(rn=!0),a.memoizedState=m,a.baseState=L,a.baseQueue=K,c.lastRenderedState=m}if(o=c.interleaved,o!==null){w=o;do S=w.lane,pt.lanes|=S,To|=S,w=w.next;while(w!==o)}else w===null&&(c.lanes=0);return[a.memoizedState,c.dispatch]}function Tf(o){var a=$n(),c=a.queue;if(c===null)throw Error(n(311));c.lastRenderedReducer=o;var m=c.dispatch,w=c.pending,S=a.memoizedState;if(w!==null){c.pending=null;var L=w=w.next;do S=o(S,L.action),L=L.next;while(L!==w);Mn(S,a.memoizedState)||(rn=!0),a.memoizedState=S,a.baseQueue===null&&(a.baseState=S),c.lastRenderedState=S}return[S,m]}function qx(){}function Yx(o,a){var c=pt,m=$n(),w=a(),S=!Mn(m.memoizedState,w);if(S&&(m.memoizedState=w,rn=!0),m=m.queue,Df(Qx.bind(null,c,m,o),[o]),m.getSnapshot!==a||S||Dt!==null&&Dt.memoizedState.tag&1){if(c.flags|=2048,Ks(9,Kx.bind(null,c,m,w,a),void 0,null),Ot===null)throw Error(n(349));_o&30||Gx(c,a,w)}return w}function Gx(o,a,c){o.flags|=16384,o={getSnapshot:a,value:c},a=pt.updateQueue,a===null?(a={lastEffect:null,stores:null},pt.updateQueue=a,a.stores=[o]):(c=a.stores,c===null?a.stores=[o]:c.push(o))}function Kx(o,a,c,m){a.value=c,a.getSnapshot=m,Zx(a)&&Xx(o)}function Qx(o,a,c){return c(function(){Zx(a)&&Xx(o)})}function Zx(o){var a=o.getSnapshot;o=o.value;try{var c=a();return!Mn(o,c)}catch{return!0}}function Xx(o){var a=hr(o,1);a!==null&&Nn(a,o,1,-1)}function Jx(o){var a=Zn();return typeof o=="function"&&(o=o()),a.memoizedState=a.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gs,lastRenderedState:o},a.queue=o,o=o.dispatch=dC.bind(null,pt,o),[a.memoizedState,o]}function Ks(o,a,c,m){return o={tag:o,create:a,destroy:c,deps:m,next:null},a=pt.updateQueue,a===null?(a={lastEffect:null,stores:null},pt.updateQueue=a,a.lastEffect=o.next=o):(c=a.lastEffect,c===null?a.lastEffect=o.next=o:(m=c.next,c.next=o,o.next=m,a.lastEffect=o)),o}function e1(){return $n().memoizedState}function Ul(o,a,c,m){var w=Zn();pt.flags|=o,w.memoizedState=Ks(1|a,c,void 0,m===void 0?null:m)}function ql(o,a,c,m){var w=$n();m=m===void 0?null:m;var S=void 0;if(_t!==null){var L=_t.memoizedState;if(S=L.destroy,m!==null&&$f(m,L.deps)){w.memoizedState=Ks(a,c,S,m);return}}pt.flags|=o,w.memoizedState=Ks(1|a,c,S,m)}function t1(o,a){return Ul(8390656,8,o,a)}function Df(o,a){return ql(2048,8,o,a)}function n1(o,a){return ql(4,2,o,a)}function r1(o,a){return ql(4,4,o,a)}function o1(o,a){if(typeof a=="function")return o=o(),a(o),function(){a(null)};if(a!=null)return o=o(),a.current=o,function(){a.current=null}}function i1(o,a,c){return c=c!=null?c.concat([o]):null,ql(4,4,o1.bind(null,a,o),c)}function Of(){}function s1(o,a){var c=$n();a=a===void 0?null:a;var m=c.memoizedState;return m!==null&&a!==null&&$f(a,m[1])?m[0]:(c.memoizedState=[o,a],o)}function a1(o,a){var c=$n();a=a===void 0?null:a;var m=c.memoizedState;return m!==null&&a!==null&&$f(a,m[1])?m[0]:(o=o(),c.memoizedState=[o,a],o)}function l1(o,a,c){return _o&21?(Mn(c,a)||(c=N0(),pt.lanes|=c,To|=c,o.baseState=!0),a):(o.baseState&&(o.baseState=!1,rn=!0),o.memoizedState=c)}function lC(o,a){var c=Ye;Ye=c!==0&&4>c?c:4,o(!0);var m=Cf.transition;Cf.transition={};try{o(!1),a()}finally{Ye=c,Cf.transition=m}}function c1(){return $n().memoizedState}function cC(o,a,c){var m=Qr(o);if(c={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null},d1(o))u1(a,c);else if(c=Vx(o,a,c,m),c!==null){var w=Zt();Nn(c,o,m,w),f1(c,a,m)}}function dC(o,a,c){var m=Qr(o),w={lane:m,action:c,hasEagerState:!1,eagerState:null,next:null};if(d1(o))u1(a,w);else{var S=o.alternate;if(o.lanes===0&&(S===null||S.lanes===0)&&(S=a.lastRenderedReducer,S!==null))try{var L=a.lastRenderedState,q=S(L,c);if(w.hasEagerState=!0,w.eagerState=q,Mn(q,L)){var K=a.interleaved;K===null?(w.next=w,yf(a)):(w.next=K.next,K.next=w),a.interleaved=w;return}}catch{}finally{}c=Vx(o,a,w,m),c!==null&&(w=Zt(),Nn(c,o,m,w),f1(c,a,m))}}function d1(o){var a=o.alternate;return o===pt||a!==null&&a===pt}function u1(o,a){qs=Wl=!0;var c=o.pending;c===null?a.next=a:(a.next=c.next,c.next=a),o.pending=a}function f1(o,a,c){if(c&4194240){var m=a.lanes;m&=o.pendingLanes,c|=m,a.lanes=c,Mu(o,c)}}var Yl={readContext:Cn,useCallback:Wt,useContext:Wt,useEffect:Wt,useImperativeHandle:Wt,useInsertionEffect:Wt,useLayoutEffect:Wt,useMemo:Wt,useReducer:Wt,useRef:Wt,useState:Wt,useDebugValue:Wt,useDeferredValue:Wt,useTransition:Wt,useMutableSource:Wt,useSyncExternalStore:Wt,useId:Wt,unstable_isNewReconciler:!1},uC={readContext:Cn,useCallback:function(o,a){return Zn().memoizedState=[o,a===void 0?null:a],o},useContext:Cn,useEffect:t1,useImperativeHandle:function(o,a,c){return c=c!=null?c.concat([o]):null,Ul(4194308,4,o1.bind(null,a,o),c)},useLayoutEffect:function(o,a){return Ul(4194308,4,o,a)},useInsertionEffect:function(o,a){return Ul(4,2,o,a)},useMemo:function(o,a){var c=Zn();return a=a===void 0?null:a,o=o(),c.memoizedState=[o,a],o},useReducer:function(o,a,c){var m=Zn();return a=c!==void 0?c(a):a,m.memoizedState=m.baseState=a,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:a},m.queue=o,o=o.dispatch=cC.bind(null,pt,o),[m.memoizedState,o]},useRef:function(o){var a=Zn();return o={current:o},a.memoizedState=o},useState:Jx,useDebugValue:Of,useDeferredValue:function(o){return Zn().memoizedState=o},useTransition:function(){var o=Jx(!1),a=o[0];return o=lC.bind(null,o[1]),Zn().memoizedState=o,[a,o]},useMutableSource:function(){},useSyncExternalStore:function(o,a,c){var m=pt,w=Zn();if(at){if(c===void 0)throw Error(n(407));c=c()}else{if(c=a(),Ot===null)throw Error(n(349));_o&30||Gx(m,a,c)}w.memoizedState=c;var S={value:c,getSnapshot:a};return w.queue=S,t1(Qx.bind(null,m,S,o),[o]),m.flags|=2048,Ks(9,Kx.bind(null,m,S,c,a),void 0,null),c},useId:function(){var o=Zn(),a=Ot.identifierPrefix;if(at){var c=pr,m=fr;c=(m&~(1<<32-On(m)-1)).toString(32)+c,a=":"+a+"R"+c,c=Ys++,0<c&&(a+="H"+c.toString(32)),a+=":"}else c=aC++,a=":"+a+"r"+c.toString(32)+":";return o.memoizedState=a},unstable_isNewReconciler:!1},fC={readContext:Cn,useCallback:s1,useContext:Cn,useEffect:Df,useImperativeHandle:i1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:_f,useRef:e1,useState:function(){return _f(Gs)},useDebugValue:Of,useDeferredValue:function(o){var a=$n();return l1(a,_t.memoizedState,o)},useTransition:function(){var o=_f(Gs)[0],a=$n().memoizedState;return[o,a]},useMutableSource:qx,useSyncExternalStore:Yx,useId:c1,unstable_isNewReconciler:!1},pC={readContext:Cn,useCallback:s1,useContext:Cn,useEffect:Df,useImperativeHandle:i1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:a1,useReducer:Tf,useRef:e1,useState:function(){return Tf(Gs)},useDebugValue:Of,useDeferredValue:function(o){var a=$n();return _t===null?a.memoizedState=o:l1(a,_t.memoizedState,o)},useTransition:function(){var o=Tf(Gs)[0],a=$n().memoizedState;return[o,a]},useMutableSource:qx,useSyncExternalStore:Yx,useId:c1,unstable_isNewReconciler:!1};function Ln(o,a){if(o&&o.defaultProps){a=P({},a),o=o.defaultProps;for(var c in o)a[c]===void 0&&(a[c]=o[c]);return a}return a}function Mf(o,a,c,m){a=o.memoizedState,c=c(m,a),c=c==null?a:P({},a,c),o.memoizedState=c,o.lanes===0&&(o.updateQueue.baseState=c)}var Gl={isMounted:function(o){return(o=o._reactInternals)?cr(o)===o:!1},enqueueSetState:function(o,a,c){o=o._reactInternals;var m=Zt(),w=Qr(o),S=mr(m,w);S.payload=a,c!=null&&(S.callback=c),a=qr(o,S,w),a!==null&&(Nn(a,o,w,m),Fl(a,o,w))},enqueueReplaceState:function(o,a,c){o=o._reactInternals;var m=Zt(),w=Qr(o),S=mr(m,w);S.tag=1,S.payload=a,c!=null&&(S.callback=c),a=qr(o,S,w),a!==null&&(Nn(a,o,w,m),Fl(a,o,w))},enqueueForceUpdate:function(o,a){o=o._reactInternals;var c=Zt(),m=Qr(o),w=mr(c,m);w.tag=2,a!=null&&(w.callback=a),a=qr(o,w,m),a!==null&&(Nn(a,o,m,c),Fl(a,o,m))}};function p1(o,a,c,m,w,S,L){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(m,S,L):a.prototype&&a.prototype.isPureReactComponent?!Ls(c,m)||!Ls(w,S):!0}function h1(o,a,c){var m=!1,w=Hr,S=a.contextType;return typeof S=="object"&&S!==null?S=Cn(S):(w=nn(a)?ko:Ht.current,m=a.contextTypes,S=(m=m!=null)?ki(o,w):Hr),a=new a(c,S),o.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Gl,o.stateNode=a,a._reactInternals=o,m&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=w,o.__reactInternalMemoizedMaskedChildContext=S),a}function m1(o,a,c,m){o=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(c,m),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(c,m),a.state!==o&&Gl.enqueueReplaceState(a,a.state,null)}function Af(o,a,c,m){var w=o.stateNode;w.props=c,w.state=o.memoizedState,w.refs={},bf(o);var S=a.contextType;typeof S=="object"&&S!==null?w.context=Cn(S):(S=nn(a)?ko:Ht.current,w.context=ki(o,S)),w.state=o.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Mf(o,a,S,c),w.state=o.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof w.getSnapshotBeforeUpdate=="function"||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(a=w.state,typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount(),a!==w.state&&Gl.enqueueReplaceState(w,w.state,null),Vl(o,c,w,m),w.state=o.memoizedState),typeof w.componentDidMount=="function"&&(o.flags|=4194308)}function Oi(o,a){try{var c="",m=a;do c+=ie(m),m=m.return;while(m);var w=c}catch(S){w=`
Error generating stack: `+S.message+`
`+S.stack}return{value:o,source:a,stack:w,digest:null}}function Lf(o,a,c){return{value:o,source:null,stack:c??null,digest:a??null}}function zf(o,a){try{console.error(a.value)}catch(c){setTimeout(function(){throw c})}}var hC=typeof WeakMap=="function"?WeakMap:Map;function g1(o,a,c){c=mr(-1,c),c.tag=3,c.payload={element:null};var m=a.value;return c.callback=function(){tc||(tc=!0,Zf=m),zf(o,a)},c}function x1(o,a,c){c=mr(-1,c),c.tag=3;var m=o.type.getDerivedStateFromError;if(typeof m=="function"){var w=a.value;c.payload=function(){return m(w)},c.callback=function(){zf(o,a)}}var S=o.stateNode;return S!==null&&typeof S.componentDidCatch=="function"&&(c.callback=function(){zf(o,a),typeof m!="function"&&(Gr===null?Gr=new Set([this]):Gr.add(this));var L=a.stack;this.componentDidCatch(a.value,{componentStack:L!==null?L:""})}),c}function v1(o,a,c){var m=o.pingCache;if(m===null){m=o.pingCache=new hC;var w=new Set;m.set(a,w)}else w=m.get(a),w===void 0&&(w=new Set,m.set(a,w));w.has(c)||(w.add(c),o=EC.bind(null,o,a,c),a.then(o,o))}function y1(o){do{var a;if((a=o.tag===13)&&(a=o.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return o;o=o.return}while(o!==null);return null}function b1(o,a,c,m,w){return o.mode&1?(o.flags|=65536,o.lanes=w,o):(o===a?o.flags|=65536:(o.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(a=mr(-1,1),a.tag=2,qr(c,a,1))),c.lanes|=1),o)}var mC=B.ReactCurrentOwner,rn=!1;function Qt(o,a,c,m){a.child=o===null?Fx(a,null,c,m):Ei(a,o.child,c,m)}function w1(o,a,c,m,w){c=c.render;var S=a.ref;return Ti(a,w),m=Pf(o,a,c,m,S,w),c=Ef(),o!==null&&!rn?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~w,gr(o,a,w)):(at&&c&&df(a),a.flags|=1,Qt(o,a,m,w),a.child)}function j1(o,a,c,m,w){if(o===null){var S=c.type;return typeof S=="function"&&!op(S)&&S.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(a.tag=15,a.type=S,S1(o,a,S,m,w)):(o=ac(c.type,null,m,a,a.mode,w),o.ref=a.ref,o.return=a,a.child=o)}if(S=o.child,!(o.lanes&w)){var L=S.memoizedProps;if(c=c.compare,c=c!==null?c:Ls,c(L,m)&&o.ref===a.ref)return gr(o,a,w)}return a.flags|=1,o=Xr(S,m),o.ref=a.ref,o.return=a,a.child=o}function S1(o,a,c,m,w){if(o!==null){var S=o.memoizedProps;if(Ls(S,m)&&o.ref===a.ref)if(rn=!1,a.pendingProps=m=S,(o.lanes&w)!==0)o.flags&131072&&(rn=!0);else return a.lanes=o.lanes,gr(o,a,w)}return Rf(o,a,c,m,w)}function k1(o,a,c){var m=a.pendingProps,w=m.children,S=o!==null?o.memoizedState:null;if(m.mode==="hidden")if(!(a.mode&1))a.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(Ai,gn),gn|=c;else{if(!(c&1073741824))return o=S!==null?S.baseLanes|c:c,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:o,cachePool:null,transitions:null},a.updateQueue=null,Xe(Ai,gn),gn|=o,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=S!==null?S.baseLanes:c,Xe(Ai,gn),gn|=m}else S!==null?(m=S.baseLanes|c,a.memoizedState=null):m=c,Xe(Ai,gn),gn|=m;return Qt(o,a,w,c),a.child}function C1(o,a){var c=a.ref;(o===null&&c!==null||o!==null&&o.ref!==c)&&(a.flags|=512,a.flags|=2097152)}function Rf(o,a,c,m,w){var S=nn(c)?ko:Ht.current;return S=ki(a,S),Ti(a,w),c=Pf(o,a,c,m,S,w),m=Ef(),o!==null&&!rn?(a.updateQueue=o.updateQueue,a.flags&=-2053,o.lanes&=~w,gr(o,a,w)):(at&&m&&df(a),a.flags|=1,Qt(o,a,c,w),a.child)}function $1(o,a,c,m,w){if(nn(c)){var S=!0;Ol(a)}else S=!1;if(Ti(a,w),a.stateNode===null)Ql(o,a),h1(a,c,m),Af(a,c,m,w),m=!0;else if(o===null){var L=a.stateNode,q=a.memoizedProps;L.props=q;var K=L.context,oe=c.contextType;typeof oe=="object"&&oe!==null?oe=Cn(oe):(oe=nn(c)?ko:Ht.current,oe=ki(a,oe));var pe=c.getDerivedStateFromProps,he=typeof pe=="function"||typeof L.getSnapshotBeforeUpdate=="function";he||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(q!==m||K!==oe)&&m1(a,L,m,oe),Ur=!1;var ue=a.memoizedState;L.state=ue,Vl(a,m,L,w),K=a.memoizedState,q!==m||ue!==K||tn.current||Ur?(typeof pe=="function"&&(Mf(a,c,pe,m),K=a.memoizedState),(q=Ur||p1(a,c,q,m,ue,K,oe))?(he||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(a.flags|=4194308)):(typeof L.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=m,a.memoizedState=K),L.props=m,L.state=K,L.context=oe,m=q):(typeof L.componentDidMount=="function"&&(a.flags|=4194308),m=!1)}else{L=a.stateNode,Bx(o,a),q=a.memoizedProps,oe=a.type===a.elementType?q:Ln(a.type,q),L.props=oe,he=a.pendingProps,ue=L.context,K=c.contextType,typeof K=="object"&&K!==null?K=Cn(K):(K=nn(c)?ko:Ht.current,K=ki(a,K));var be=c.getDerivedStateFromProps;(pe=typeof be=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(q!==he||ue!==K)&&m1(a,L,m,K),Ur=!1,ue=a.memoizedState,L.state=ue,Vl(a,m,L,w);var je=a.memoizedState;q!==he||ue!==je||tn.current||Ur?(typeof be=="function"&&(Mf(a,c,be,m),je=a.memoizedState),(oe=Ur||p1(a,c,oe,m,ue,je,K)||!1)?(pe||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(m,je,K),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(m,je,K)),typeof L.componentDidUpdate=="function"&&(a.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof L.componentDidUpdate!="function"||q===o.memoizedProps&&ue===o.memoizedState||(a.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||q===o.memoizedProps&&ue===o.memoizedState||(a.flags|=1024),a.memoizedProps=m,a.memoizedState=je),L.props=m,L.state=je,L.context=K,m=oe):(typeof L.componentDidUpdate!="function"||q===o.memoizedProps&&ue===o.memoizedState||(a.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||q===o.memoizedProps&&ue===o.memoizedState||(a.flags|=1024),m=!1)}return Nf(o,a,c,m,S,w)}function Nf(o,a,c,m,w,S){C1(o,a);var L=(a.flags&128)!==0;if(!m&&!L)return w&&Dx(a,c,!1),gr(o,a,S);m=a.stateNode,mC.current=a;var q=L&&typeof c.getDerivedStateFromError!="function"?null:m.render();return a.flags|=1,o!==null&&L?(a.child=Ei(a,o.child,null,S),a.child=Ei(a,null,q,S)):Qt(o,a,q,S),a.memoizedState=m.state,w&&Dx(a,c,!0),a.child}function P1(o){var a=o.stateNode;a.pendingContext?_x(o,a.pendingContext,a.pendingContext!==a.context):a.context&&_x(o,a.context,!1),wf(o,a.containerInfo)}function E1(o,a,c,m,w){return Pi(),hf(w),a.flags|=256,Qt(o,a,c,m),a.child}var If={dehydrated:null,treeContext:null,retryLane:0};function Ff(o){return{baseLanes:o,cachePool:null,transitions:null}}function _1(o,a,c){var m=a.pendingProps,w=ft.current,S=!1,L=(a.flags&128)!==0,q;if((q=L)||(q=o!==null&&o.memoizedState===null?!1:(w&2)!==0),q?(S=!0,a.flags&=-129):(o===null||o.memoizedState!==null)&&(w|=1),Xe(ft,w&1),o===null)return pf(a),o=a.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(a.mode&1?o.data==="$!"?a.lanes=8:a.lanes=1073741824:a.lanes=1,null):(L=m.children,o=m.fallback,S?(m=a.mode,S=a.child,L={mode:"hidden",children:L},!(m&1)&&S!==null?(S.childLanes=0,S.pendingProps=L):S=lc(L,m,0,null),o=Ao(o,m,c,null),S.return=a,o.return=a,S.sibling=o,a.child=S,a.child.memoizedState=Ff(c),a.memoizedState=If,o):Vf(a,L));if(w=o.memoizedState,w!==null&&(q=w.dehydrated,q!==null))return gC(o,a,L,m,q,w,c);if(S){S=m.fallback,L=a.mode,w=o.child,q=w.sibling;var K={mode:"hidden",children:m.children};return!(L&1)&&a.child!==w?(m=a.child,m.childLanes=0,m.pendingProps=K,a.deletions=null):(m=Xr(w,K),m.subtreeFlags=w.subtreeFlags&14680064),q!==null?S=Xr(q,S):(S=Ao(S,L,c,null),S.flags|=2),S.return=a,m.return=a,m.sibling=S,a.child=m,m=S,S=a.child,L=o.child.memoizedState,L=L===null?Ff(c):{baseLanes:L.baseLanes|c,cachePool:null,transitions:L.transitions},S.memoizedState=L,S.childLanes=o.childLanes&~c,a.memoizedState=If,m}return S=o.child,o=S.sibling,m=Xr(S,{mode:"visible",children:m.children}),!(a.mode&1)&&(m.lanes=c),m.return=a,m.sibling=null,o!==null&&(c=a.deletions,c===null?(a.deletions=[o],a.flags|=16):c.push(o)),a.child=m,a.memoizedState=null,m}function Vf(o,a){return a=lc({mode:"visible",children:a},o.mode,0,null),a.return=o,o.child=a}function Kl(o,a,c,m){return m!==null&&hf(m),Ei(a,o.child,null,c),o=Vf(a,a.pendingProps.children),o.flags|=2,a.memoizedState=null,o}function gC(o,a,c,m,w,S,L){if(c)return a.flags&256?(a.flags&=-257,m=Lf(Error(n(422))),Kl(o,a,L,m)):a.memoizedState!==null?(a.child=o.child,a.flags|=128,null):(S=m.fallback,w=a.mode,m=lc({mode:"visible",children:m.children},w,0,null),S=Ao(S,w,L,null),S.flags|=2,m.return=a,S.return=a,m.sibling=S,a.child=m,a.mode&1&&Ei(a,o.child,null,L),a.child.memoizedState=Ff(L),a.memoizedState=If,S);if(!(a.mode&1))return Kl(o,a,L,null);if(w.data==="$!"){if(m=w.nextSibling&&w.nextSibling.dataset,m)var q=m.dgst;return m=q,S=Error(n(419)),m=Lf(S,m,void 0),Kl(o,a,L,m)}if(q=(L&o.childLanes)!==0,rn||q){if(m=Ot,m!==null){switch(L&-L){case 4:w=2;break;case 16:w=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:w=32;break;case 536870912:w=268435456;break;default:w=0}w=w&(m.suspendedLanes|L)?0:w,w!==0&&w!==S.retryLane&&(S.retryLane=w,hr(o,w),Nn(m,o,w,-1))}return rp(),m=Lf(Error(n(421))),Kl(o,a,L,m)}return w.data==="$?"?(a.flags|=128,a.child=o.child,a=_C.bind(null,o),w._reactRetry=a,null):(o=S.treeContext,mn=Vr(w.nextSibling),hn=a,at=!0,An=null,o!==null&&(Sn[kn++]=fr,Sn[kn++]=pr,Sn[kn++]=Co,fr=o.id,pr=o.overflow,Co=a),a=Vf(a,m.children),a.flags|=4096,a)}function T1(o,a,c){o.lanes|=a;var m=o.alternate;m!==null&&(m.lanes|=a),vf(o.return,a,c)}function Bf(o,a,c,m,w){var S=o.memoizedState;S===null?o.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:m,tail:c,tailMode:w}:(S.isBackwards=a,S.rendering=null,S.renderingStartTime=0,S.last=m,S.tail=c,S.tailMode=w)}function D1(o,a,c){var m=a.pendingProps,w=m.revealOrder,S=m.tail;if(Qt(o,a,m.children,c),m=ft.current,m&2)m=m&1|2,a.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=a.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&T1(o,c,a);else if(o.tag===19)T1(o,c,a);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===a)break e;for(;o.sibling===null;){if(o.return===null||o.return===a)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}m&=1}if(Xe(ft,m),!(a.mode&1))a.memoizedState=null;else switch(w){case"forwards":for(c=a.child,w=null;c!==null;)o=c.alternate,o!==null&&Bl(o)===null&&(w=c),c=c.sibling;c=w,c===null?(w=a.child,a.child=null):(w=c.sibling,c.sibling=null),Bf(a,!1,w,c,S);break;case"backwards":for(c=null,w=a.child,a.child=null;w!==null;){if(o=w.alternate,o!==null&&Bl(o)===null){a.child=w;break}o=w.sibling,w.sibling=c,c=w,w=o}Bf(a,!0,c,null,S);break;case"together":Bf(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ql(o,a){!(a.mode&1)&&o!==null&&(o.alternate=null,a.alternate=null,a.flags|=2)}function gr(o,a,c){if(o!==null&&(a.dependencies=o.dependencies),To|=a.lanes,!(c&a.childLanes))return null;if(o!==null&&a.child!==o.child)throw Error(n(153));if(a.child!==null){for(o=a.child,c=Xr(o,o.pendingProps),a.child=c,c.return=a;o.sibling!==null;)o=o.sibling,c=c.sibling=Xr(o,o.pendingProps),c.return=a;c.sibling=null}return a.child}function xC(o,a,c){switch(a.tag){case 3:P1(a),Pi();break;case 5:Ux(a);break;case 1:nn(a.type)&&Ol(a);break;case 4:wf(a,a.stateNode.containerInfo);break;case 10:var m=a.type._context,w=a.memoizedProps.value;Xe(Nl,m._currentValue),m._currentValue=w;break;case 13:if(m=a.memoizedState,m!==null)return m.dehydrated!==null?(Xe(ft,ft.current&1),a.flags|=128,null):c&a.child.childLanes?_1(o,a,c):(Xe(ft,ft.current&1),o=gr(o,a,c),o!==null?o.sibling:null);Xe(ft,ft.current&1);break;case 19:if(m=(c&a.childLanes)!==0,o.flags&128){if(m)return D1(o,a,c);a.flags|=128}if(w=a.memoizedState,w!==null&&(w.rendering=null,w.tail=null,w.lastEffect=null),Xe(ft,ft.current),m)break;return null;case 22:case 23:return a.lanes=0,k1(o,a,c)}return gr(o,a,c)}var O1,Hf,M1,A1;O1=function(o,a){for(var c=a.child;c!==null;){if(c.tag===5||c.tag===6)o.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===a)break;for(;c.sibling===null;){if(c.return===null||c.return===a)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Hf=function(){},M1=function(o,a,c,m){var w=o.memoizedProps;if(w!==m){o=a.stateNode,Eo(Qn.current);var S=null;switch(c){case"input":w=me(o,w),m=me(o,m),S=[];break;case"select":w=P({},w,{value:void 0}),m=P({},m,{value:void 0}),S=[];break;case"textarea":w=un(o,w),m=un(o,m),S=[];break;default:typeof w.onClick!="function"&&typeof m.onClick=="function"&&(o.onclick=_l)}li(c,m);var L;c=null;for(oe in w)if(!m.hasOwnProperty(oe)&&w.hasOwnProperty(oe)&&w[oe]!=null)if(oe==="style"){var q=w[oe];for(L in q)q.hasOwnProperty(L)&&(c||(c={}),c[L]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(s.hasOwnProperty(oe)?S||(S=[]):(S=S||[]).push(oe,null));for(oe in m){var K=m[oe];if(q=w!=null?w[oe]:void 0,m.hasOwnProperty(oe)&&K!==q&&(K!=null||q!=null))if(oe==="style")if(q){for(L in q)!q.hasOwnProperty(L)||K&&K.hasOwnProperty(L)||(c||(c={}),c[L]="");for(L in K)K.hasOwnProperty(L)&&q[L]!==K[L]&&(c||(c={}),c[L]=K[L])}else c||(S||(S=[]),S.push(oe,c)),c=K;else oe==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,q=q?q.__html:void 0,K!=null&&q!==K&&(S=S||[]).push(oe,K)):oe==="children"?typeof K!="string"&&typeof K!="number"||(S=S||[]).push(oe,""+K):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(s.hasOwnProperty(oe)?(K!=null&&oe==="onScroll"&&nt("scroll",o),S||q===K||(S=[])):(S=S||[]).push(oe,K))}c&&(S=S||[]).push("style",c);var oe=S;(a.updateQueue=oe)&&(a.flags|=4)}},A1=function(o,a,c,m){c!==m&&(a.flags|=4)};function Qs(o,a){if(!at)switch(o.tailMode){case"hidden":a=o.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?o.tail=null:c.sibling=null;break;case"collapsed":c=o.tail;for(var m=null;c!==null;)c.alternate!==null&&(m=c),c=c.sibling;m===null?a||o.tail===null?o.tail=null:o.tail.sibling=null:m.sibling=null}}function Ut(o){var a=o.alternate!==null&&o.alternate.child===o.child,c=0,m=0;if(a)for(var w=o.child;w!==null;)c|=w.lanes|w.childLanes,m|=w.subtreeFlags&14680064,m|=w.flags&14680064,w.return=o,w=w.sibling;else for(w=o.child;w!==null;)c|=w.lanes|w.childLanes,m|=w.subtreeFlags,m|=w.flags,w.return=o,w=w.sibling;return o.subtreeFlags|=m,o.childLanes=c,a}function vC(o,a,c){var m=a.pendingProps;switch(uf(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ut(a),null;case 1:return nn(a.type)&&Dl(),Ut(a),null;case 3:return m=a.stateNode,Di(),rt(tn),rt(Ht),kf(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(o===null||o.child===null)&&(zl(a)?a.flags|=4:o===null||o.memoizedState.isDehydrated&&!(a.flags&256)||(a.flags|=1024,An!==null&&(ep(An),An=null))),Hf(o,a),Ut(a),null;case 5:jf(a);var w=Eo(Us.current);if(c=a.type,o!==null&&a.stateNode!=null)M1(o,a,c,m,w),o.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!m){if(a.stateNode===null)throw Error(n(166));return Ut(a),null}if(o=Eo(Qn.current),zl(a)){m=a.stateNode,c=a.type;var S=a.memoizedProps;switch(m[Kn]=a,m[Fs]=S,o=(a.mode&1)!==0,c){case"dialog":nt("cancel",m),nt("close",m);break;case"iframe":case"object":case"embed":nt("load",m);break;case"video":case"audio":for(w=0;w<Rs.length;w++)nt(Rs[w],m);break;case"source":nt("error",m);break;case"img":case"image":case"link":nt("error",m),nt("load",m);break;case"details":nt("toggle",m);break;case"input":$e(m,S),nt("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!S.multiple},nt("invalid",m);break;case"textarea":qn(m,S),nt("invalid",m)}li(c,S),w=null;for(var L in S)if(S.hasOwnProperty(L)){var q=S[L];L==="children"?typeof q=="string"?m.textContent!==q&&(S.suppressHydrationWarning!==!0&&El(m.textContent,q,o),w=["children",q]):typeof q=="number"&&m.textContent!==""+q&&(S.suppressHydrationWarning!==!0&&El(m.textContent,q,o),w=["children",""+q]):s.hasOwnProperty(L)&&q!=null&&L==="onScroll"&&nt("scroll",m)}switch(c){case"input":Pe(m),Qe(m,S,!0);break;case"textarea":Pe(m),Yn(m);break;case"select":case"option":break;default:typeof S.onClick=="function"&&(m.onclick=_l)}m=w,a.updateQueue=m,m!==null&&(a.flags|=4)}else{L=w.nodeType===9?w:w.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=si(c)),o==="http://www.w3.org/1999/xhtml"?c==="script"?(o=L.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof m.is=="string"?o=L.createElement(c,{is:m.is}):(o=L.createElement(c),c==="select"&&(L=o,m.multiple?L.multiple=!0:m.size&&(L.size=m.size))):o=L.createElementNS(o,c),o[Kn]=a,o[Fs]=m,O1(o,a,!1,!1),a.stateNode=o;e:{switch(L=ci(c,m),c){case"dialog":nt("cancel",o),nt("close",o),w=m;break;case"iframe":case"object":case"embed":nt("load",o),w=m;break;case"video":case"audio":for(w=0;w<Rs.length;w++)nt(Rs[w],o);w=m;break;case"source":nt("error",o),w=m;break;case"img":case"image":case"link":nt("error",o),nt("load",o),w=m;break;case"details":nt("toggle",o),w=m;break;case"input":$e(o,m),w=me(o,m),nt("invalid",o);break;case"option":w=m;break;case"select":o._wrapperState={wasMultiple:!!m.multiple},w=P({},m,{value:void 0}),nt("invalid",o);break;case"textarea":qn(o,m),w=un(o,m),nt("invalid",o);break;default:w=m}li(c,w),q=w;for(S in q)if(q.hasOwnProperty(S)){var K=q[S];S==="style"?vs(o,K):S==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&ai(o,K)):S==="children"?typeof K=="string"?(c!=="textarea"||K!=="")&&_r(o,K):typeof K=="number"&&_r(o,""+K):S!=="suppressContentEditableWarning"&&S!=="suppressHydrationWarning"&&S!=="autoFocus"&&(s.hasOwnProperty(S)?K!=null&&S==="onScroll"&&nt("scroll",o):K!=null&&V(o,S,K,L))}switch(c){case"input":Pe(o),Qe(o,m,!1);break;case"textarea":Pe(o),Yn(o);break;case"option":m.value!=null&&o.setAttribute("value",""+de(m.value));break;case"select":o.multiple=!!m.multiple,S=m.value,S!=null?gt(o,!!m.multiple,S,!1):m.defaultValue!=null&&gt(o,!!m.multiple,m.defaultValue,!0);break;default:typeof w.onClick=="function"&&(o.onclick=_l)}switch(c){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return Ut(a),null;case 6:if(o&&a.stateNode!=null)A1(o,a,o.memoizedProps,m);else{if(typeof m!="string"&&a.stateNode===null)throw Error(n(166));if(c=Eo(Us.current),Eo(Qn.current),zl(a)){if(m=a.stateNode,c=a.memoizedProps,m[Kn]=a,(S=m.nodeValue!==c)&&(o=hn,o!==null))switch(o.tag){case 3:El(m.nodeValue,c,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&El(m.nodeValue,c,(o.mode&1)!==0)}S&&(a.flags|=4)}else m=(c.nodeType===9?c:c.ownerDocument).createTextNode(m),m[Kn]=a,a.stateNode=m}return Ut(a),null;case 13:if(rt(ft),m=a.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(at&&mn!==null&&a.mode&1&&!(a.flags&128))Rx(),Pi(),a.flags|=98560,S=!1;else if(S=zl(a),m!==null&&m.dehydrated!==null){if(o===null){if(!S)throw Error(n(318));if(S=a.memoizedState,S=S!==null?S.dehydrated:null,!S)throw Error(n(317));S[Kn]=a}else Pi(),!(a.flags&128)&&(a.memoizedState=null),a.flags|=4;Ut(a),S=!1}else An!==null&&(ep(An),An=null),S=!0;if(!S)return a.flags&65536?a:null}return a.flags&128?(a.lanes=c,a):(m=m!==null,m!==(o!==null&&o.memoizedState!==null)&&m&&(a.child.flags|=8192,a.mode&1&&(o===null||ft.current&1?Tt===0&&(Tt=3):rp())),a.updateQueue!==null&&(a.flags|=4),Ut(a),null);case 4:return Di(),Hf(o,a),o===null&&Ns(a.stateNode.containerInfo),Ut(a),null;case 10:return xf(a.type._context),Ut(a),null;case 17:return nn(a.type)&&Dl(),Ut(a),null;case 19:if(rt(ft),S=a.memoizedState,S===null)return Ut(a),null;if(m=(a.flags&128)!==0,L=S.rendering,L===null)if(m)Qs(S,!1);else{if(Tt!==0||o!==null&&o.flags&128)for(o=a.child;o!==null;){if(L=Bl(o),L!==null){for(a.flags|=128,Qs(S,!1),m=L.updateQueue,m!==null&&(a.updateQueue=m,a.flags|=4),a.subtreeFlags=0,m=c,c=a.child;c!==null;)S=c,o=m,S.flags&=14680066,L=S.alternate,L===null?(S.childLanes=0,S.lanes=o,S.child=null,S.subtreeFlags=0,S.memoizedProps=null,S.memoizedState=null,S.updateQueue=null,S.dependencies=null,S.stateNode=null):(S.childLanes=L.childLanes,S.lanes=L.lanes,S.child=L.child,S.subtreeFlags=0,S.deletions=null,S.memoizedProps=L.memoizedProps,S.memoizedState=L.memoizedState,S.updateQueue=L.updateQueue,S.type=L.type,o=L.dependencies,S.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),c=c.sibling;return Xe(ft,ft.current&1|2),a.child}o=o.sibling}S.tail!==null&&wt()>Li&&(a.flags|=128,m=!0,Qs(S,!1),a.lanes=4194304)}else{if(!m)if(o=Bl(L),o!==null){if(a.flags|=128,m=!0,c=o.updateQueue,c!==null&&(a.updateQueue=c,a.flags|=4),Qs(S,!0),S.tail===null&&S.tailMode==="hidden"&&!L.alternate&&!at)return Ut(a),null}else 2*wt()-S.renderingStartTime>Li&&c!==1073741824&&(a.flags|=128,m=!0,Qs(S,!1),a.lanes=4194304);S.isBackwards?(L.sibling=a.child,a.child=L):(c=S.last,c!==null?c.sibling=L:a.child=L,S.last=L)}return S.tail!==null?(a=S.tail,S.rendering=a,S.tail=a.sibling,S.renderingStartTime=wt(),a.sibling=null,c=ft.current,Xe(ft,m?c&1|2:c&1),a):(Ut(a),null);case 22:case 23:return np(),m=a.memoizedState!==null,o!==null&&o.memoizedState!==null!==m&&(a.flags|=8192),m&&a.mode&1?gn&1073741824&&(Ut(a),a.subtreeFlags&6&&(a.flags|=8192)):Ut(a),null;case 24:return null;case 25:return null}throw Error(n(156,a.tag))}function yC(o,a){switch(uf(a),a.tag){case 1:return nn(a.type)&&Dl(),o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 3:return Di(),rt(tn),rt(Ht),kf(),o=a.flags,o&65536&&!(o&128)?(a.flags=o&-65537|128,a):null;case 5:return jf(a),null;case 13:if(rt(ft),o=a.memoizedState,o!==null&&o.dehydrated!==null){if(a.alternate===null)throw Error(n(340));Pi()}return o=a.flags,o&65536?(a.flags=o&-65537|128,a):null;case 19:return rt(ft),null;case 4:return Di(),null;case 10:return xf(a.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Zl=!1,qt=!1,bC=typeof WeakSet=="function"?WeakSet:Set,we=null;function Mi(o,a){var c=o.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(m){vt(o,a,m)}else c.current=null}function Wf(o,a,c){try{c()}catch(m){vt(o,a,m)}}var L1=!1;function wC(o,a){if(tf=xl,o=px(),Yu(o)){if("selectionStart"in o)var c={start:o.selectionStart,end:o.selectionEnd};else e:{c=(c=o.ownerDocument)&&c.defaultView||window;var m=c.getSelection&&c.getSelection();if(m&&m.rangeCount!==0){c=m.anchorNode;var w=m.anchorOffset,S=m.focusNode;m=m.focusOffset;try{c.nodeType,S.nodeType}catch{c=null;break e}var L=0,q=-1,K=-1,oe=0,pe=0,he=o,ue=null;t:for(;;){for(var be;he!==c||w!==0&&he.nodeType!==3||(q=L+w),he!==S||m!==0&&he.nodeType!==3||(K=L+m),he.nodeType===3&&(L+=he.nodeValue.length),(be=he.firstChild)!==null;)ue=he,he=be;for(;;){if(he===o)break t;if(ue===c&&++oe===w&&(q=L),ue===S&&++pe===m&&(K=L),(be=he.nextSibling)!==null)break;he=ue,ue=he.parentNode}he=be}c=q===-1||K===-1?null:{start:q,end:K}}else c=null}c=c||{start:0,end:0}}else c=null;for(nf={focusedElem:o,selectionRange:c},xl=!1,we=a;we!==null;)if(a=we,o=a.child,(a.subtreeFlags&1028)!==0&&o!==null)o.return=a,we=o;else for(;we!==null;){a=we;try{var je=a.alternate;if(a.flags&1024)switch(a.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Se=je.memoizedProps,jt=je.memoizedState,te=a.stateNode,Z=te.getSnapshotBeforeUpdate(a.elementType===a.type?Se:Ln(a.type,Se),jt);te.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var ne=a.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(ge){vt(a,a.return,ge)}if(o=a.sibling,o!==null){o.return=a.return,we=o;break}we=a.return}return je=L1,L1=!1,je}function Zs(o,a,c){var m=a.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var w=m=m.next;do{if((w.tag&o)===o){var S=w.destroy;w.destroy=void 0,S!==void 0&&Wf(a,c,S)}w=w.next}while(w!==m)}}function Xl(o,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var c=a=a.next;do{if((c.tag&o)===o){var m=c.create;c.destroy=m()}c=c.next}while(c!==a)}}function Uf(o){var a=o.ref;if(a!==null){var c=o.stateNode;switch(o.tag){case 5:o=c;break;default:o=c}typeof a=="function"?a(o):a.current=o}}function z1(o){var a=o.alternate;a!==null&&(o.alternate=null,z1(a)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(a=o.stateNode,a!==null&&(delete a[Kn],delete a[Fs],delete a[af],delete a[rC],delete a[oC])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function R1(o){return o.tag===5||o.tag===3||o.tag===4}function N1(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||R1(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function qf(o,a,c){var m=o.tag;if(m===5||m===6)o=o.stateNode,a?c.nodeType===8?c.parentNode.insertBefore(o,a):c.insertBefore(o,a):(c.nodeType===8?(a=c.parentNode,a.insertBefore(o,c)):(a=c,a.appendChild(o)),c=c._reactRootContainer,c!=null||a.onclick!==null||(a.onclick=_l));else if(m!==4&&(o=o.child,o!==null))for(qf(o,a,c),o=o.sibling;o!==null;)qf(o,a,c),o=o.sibling}function Yf(o,a,c){var m=o.tag;if(m===5||m===6)o=o.stateNode,a?c.insertBefore(o,a):c.appendChild(o);else if(m!==4&&(o=o.child,o!==null))for(Yf(o,a,c),o=o.sibling;o!==null;)Yf(o,a,c),o=o.sibling}var Ft=null,zn=!1;function Yr(o,a,c){for(c=c.child;c!==null;)I1(o,a,c),c=c.sibling}function I1(o,a,c){if(Gn&&typeof Gn.onCommitFiberUnmount=="function")try{Gn.onCommitFiberUnmount(ul,c)}catch{}switch(c.tag){case 5:qt||Mi(c,a);case 6:var m=Ft,w=zn;Ft=null,Yr(o,a,c),Ft=m,zn=w,Ft!==null&&(zn?(o=Ft,c=c.stateNode,o.nodeType===8?o.parentNode.removeChild(c):o.removeChild(c)):Ft.removeChild(c.stateNode));break;case 18:Ft!==null&&(zn?(o=Ft,c=c.stateNode,o.nodeType===8?sf(o.parentNode,c):o.nodeType===1&&sf(o,c),_s(o)):sf(Ft,c.stateNode));break;case 4:m=Ft,w=zn,Ft=c.stateNode.containerInfo,zn=!0,Yr(o,a,c),Ft=m,zn=w;break;case 0:case 11:case 14:case 15:if(!qt&&(m=c.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){w=m=m.next;do{var S=w,L=S.destroy;S=S.tag,L!==void 0&&(S&2||S&4)&&Wf(c,a,L),w=w.next}while(w!==m)}Yr(o,a,c);break;case 1:if(!qt&&(Mi(c,a),m=c.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=c.memoizedProps,m.state=c.memoizedState,m.componentWillUnmount()}catch(q){vt(c,a,q)}Yr(o,a,c);break;case 21:Yr(o,a,c);break;case 22:c.mode&1?(qt=(m=qt)||c.memoizedState!==null,Yr(o,a,c),qt=m):Yr(o,a,c);break;default:Yr(o,a,c)}}function F1(o){var a=o.updateQueue;if(a!==null){o.updateQueue=null;var c=o.stateNode;c===null&&(c=o.stateNode=new bC),a.forEach(function(m){var w=TC.bind(null,o,m);c.has(m)||(c.add(m),m.then(w,w))})}}function Rn(o,a){var c=a.deletions;if(c!==null)for(var m=0;m<c.length;m++){var w=c[m];try{var S=o,L=a,q=L;e:for(;q!==null;){switch(q.tag){case 5:Ft=q.stateNode,zn=!1;break e;case 3:Ft=q.stateNode.containerInfo,zn=!0;break e;case 4:Ft=q.stateNode.containerInfo,zn=!0;break e}q=q.return}if(Ft===null)throw Error(n(160));I1(S,L,w),Ft=null,zn=!1;var K=w.alternate;K!==null&&(K.return=null),w.return=null}catch(oe){vt(w,a,oe)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)V1(a,o),a=a.sibling}function V1(o,a){var c=o.alternate,m=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(Rn(a,o),Xn(o),m&4){try{Zs(3,o,o.return),Xl(3,o)}catch(Se){vt(o,o.return,Se)}try{Zs(5,o,o.return)}catch(Se){vt(o,o.return,Se)}}break;case 1:Rn(a,o),Xn(o),m&512&&c!==null&&Mi(c,c.return);break;case 5:if(Rn(a,o),Xn(o),m&512&&c!==null&&Mi(c,c.return),o.flags&32){var w=o.stateNode;try{_r(w,"")}catch(Se){vt(o,o.return,Se)}}if(m&4&&(w=o.stateNode,w!=null)){var S=o.memoizedProps,L=c!==null?c.memoizedProps:S,q=o.type,K=o.updateQueue;if(o.updateQueue=null,K!==null)try{q==="input"&&S.type==="radio"&&S.name!=null&&Le(w,S),ci(q,L);var oe=ci(q,S);for(L=0;L<K.length;L+=2){var pe=K[L],he=K[L+1];pe==="style"?vs(w,he):pe==="dangerouslySetInnerHTML"?ai(w,he):pe==="children"?_r(w,he):V(w,pe,he,oe)}switch(q){case"input":Me(w,S);break;case"textarea":yo(w,S);break;case"select":var ue=w._wrapperState.wasMultiple;w._wrapperState.wasMultiple=!!S.multiple;var be=S.value;be!=null?gt(w,!!S.multiple,be,!1):ue!==!!S.multiple&&(S.defaultValue!=null?gt(w,!!S.multiple,S.defaultValue,!0):gt(w,!!S.multiple,S.multiple?[]:"",!1))}w[Fs]=S}catch(Se){vt(o,o.return,Se)}}break;case 6:if(Rn(a,o),Xn(o),m&4){if(o.stateNode===null)throw Error(n(162));w=o.stateNode,S=o.memoizedProps;try{w.nodeValue=S}catch(Se){vt(o,o.return,Se)}}break;case 3:if(Rn(a,o),Xn(o),m&4&&c!==null&&c.memoizedState.isDehydrated)try{_s(a.containerInfo)}catch(Se){vt(o,o.return,Se)}break;case 4:Rn(a,o),Xn(o);break;case 13:Rn(a,o),Xn(o),w=o.child,w.flags&8192&&(S=w.memoizedState!==null,w.stateNode.isHidden=S,!S||w.alternate!==null&&w.alternate.memoizedState!==null||(Qf=wt())),m&4&&F1(o);break;case 22:if(pe=c!==null&&c.memoizedState!==null,o.mode&1?(qt=(oe=qt)||pe,Rn(a,o),qt=oe):Rn(a,o),Xn(o),m&8192){if(oe=o.memoizedState!==null,(o.stateNode.isHidden=oe)&&!pe&&o.mode&1)for(we=o,pe=o.child;pe!==null;){for(he=we=pe;we!==null;){switch(ue=we,be=ue.child,ue.tag){case 0:case 11:case 14:case 15:Zs(4,ue,ue.return);break;case 1:Mi(ue,ue.return);var je=ue.stateNode;if(typeof je.componentWillUnmount=="function"){m=ue,c=ue.return;try{a=m,je.props=a.memoizedProps,je.state=a.memoizedState,je.componentWillUnmount()}catch(Se){vt(m,c,Se)}}break;case 5:Mi(ue,ue.return);break;case 22:if(ue.memoizedState!==null){W1(he);continue}}be!==null?(be.return=ue,we=be):W1(he)}pe=pe.sibling}e:for(pe=null,he=o;;){if(he.tag===5){if(pe===null){pe=he;try{w=he.stateNode,oe?(S=w.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none"):(q=he.stateNode,K=he.memoizedProps.style,L=K!=null&&K.hasOwnProperty("display")?K.display:null,q.style.display=bo("display",L))}catch(Se){vt(o,o.return,Se)}}}else if(he.tag===6){if(pe===null)try{he.stateNode.nodeValue=oe?"":he.memoizedProps}catch(Se){vt(o,o.return,Se)}}else if((he.tag!==22&&he.tag!==23||he.memoizedState===null||he===o)&&he.child!==null){he.child.return=he,he=he.child;continue}if(he===o)break e;for(;he.sibling===null;){if(he.return===null||he.return===o)break e;pe===he&&(pe=null),he=he.return}pe===he&&(pe=null),he.sibling.return=he.return,he=he.sibling}}break;case 19:Rn(a,o),Xn(o),m&4&&F1(o);break;case 21:break;default:Rn(a,o),Xn(o)}}function Xn(o){var a=o.flags;if(a&2){try{e:{for(var c=o.return;c!==null;){if(R1(c)){var m=c;break e}c=c.return}throw Error(n(160))}switch(m.tag){case 5:var w=m.stateNode;m.flags&32&&(_r(w,""),m.flags&=-33);var S=N1(o);Yf(o,S,w);break;case 3:case 4:var L=m.stateNode.containerInfo,q=N1(o);qf(o,q,L);break;default:throw Error(n(161))}}catch(K){vt(o,o.return,K)}o.flags&=-3}a&4096&&(o.flags&=-4097)}function jC(o,a,c){we=o,B1(o)}function B1(o,a,c){for(var m=(o.mode&1)!==0;we!==null;){var w=we,S=w.child;if(w.tag===22&&m){var L=w.memoizedState!==null||Zl;if(!L){var q=w.alternate,K=q!==null&&q.memoizedState!==null||qt;q=Zl;var oe=qt;if(Zl=L,(qt=K)&&!oe)for(we=w;we!==null;)L=we,K=L.child,L.tag===22&&L.memoizedState!==null?U1(w):K!==null?(K.return=L,we=K):U1(w);for(;S!==null;)we=S,B1(S),S=S.sibling;we=w,Zl=q,qt=oe}H1(o)}else w.subtreeFlags&8772&&S!==null?(S.return=w,we=S):H1(o)}}function H1(o){for(;we!==null;){var a=we;if(a.flags&8772){var c=a.alternate;try{if(a.flags&8772)switch(a.tag){case 0:case 11:case 15:qt||Xl(5,a);break;case 1:var m=a.stateNode;if(a.flags&4&&!qt)if(c===null)m.componentDidMount();else{var w=a.elementType===a.type?c.memoizedProps:Ln(a.type,c.memoizedProps);m.componentDidUpdate(w,c.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var S=a.updateQueue;S!==null&&Wx(a,S,m);break;case 3:var L=a.updateQueue;if(L!==null){if(c=null,a.child!==null)switch(a.child.tag){case 5:c=a.child.stateNode;break;case 1:c=a.child.stateNode}Wx(a,L,c)}break;case 5:var q=a.stateNode;if(c===null&&a.flags&4){c=q;var K=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&c.focus();break;case"img":K.src&&(c.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var oe=a.alternate;if(oe!==null){var pe=oe.memoizedState;if(pe!==null){var he=pe.dehydrated;he!==null&&_s(he)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}qt||a.flags&512&&Uf(a)}catch(ue){vt(a,a.return,ue)}}if(a===o){we=null;break}if(c=a.sibling,c!==null){c.return=a.return,we=c;break}we=a.return}}function W1(o){for(;we!==null;){var a=we;if(a===o){we=null;break}var c=a.sibling;if(c!==null){c.return=a.return,we=c;break}we=a.return}}function U1(o){for(;we!==null;){var a=we;try{switch(a.tag){case 0:case 11:case 15:var c=a.return;try{Xl(4,a)}catch(K){vt(a,c,K)}break;case 1:var m=a.stateNode;if(typeof m.componentDidMount=="function"){var w=a.return;try{m.componentDidMount()}catch(K){vt(a,w,K)}}var S=a.return;try{Uf(a)}catch(K){vt(a,S,K)}break;case 5:var L=a.return;try{Uf(a)}catch(K){vt(a,L,K)}}}catch(K){vt(a,a.return,K)}if(a===o){we=null;break}var q=a.sibling;if(q!==null){q.return=a.return,we=q;break}we=a.return}}var SC=Math.ceil,Jl=B.ReactCurrentDispatcher,Gf=B.ReactCurrentOwner,Pn=B.ReactCurrentBatchConfig,He=0,Ot=null,$t=null,Vt=0,gn=0,Ai=Br(0),Tt=0,Xs=null,To=0,ec=0,Kf=0,Js=null,on=null,Qf=0,Li=1/0,xr=null,tc=!1,Zf=null,Gr=null,nc=!1,Kr=null,rc=0,ea=0,Xf=null,oc=-1,ic=0;function Zt(){return He&6?wt():oc!==-1?oc:oc=wt()}function Qr(o){return o.mode&1?He&2&&Vt!==0?Vt&-Vt:sC.transition!==null?(ic===0&&(ic=N0()),ic):(o=Ye,o!==0||(o=window.event,o=o===void 0?16:Y0(o.type)),o):1}function Nn(o,a,c,m){if(50<ea)throw ea=0,Xf=null,Error(n(185));ks(o,c,m),(!(He&2)||o!==Ot)&&(o===Ot&&(!(He&2)&&(ec|=c),Tt===4&&Zr(o,Vt)),sn(o,m),c===1&&He===0&&!(a.mode&1)&&(Li=wt()+500,Ml&&Wr()))}function sn(o,a){var c=o.callbackNode;s3(o,a);var m=hl(o,o===Ot?Vt:0);if(m===0)c!==null&&cl(c),o.callbackNode=null,o.callbackPriority=0;else if(a=m&-m,o.callbackPriority!==a){if(c!=null&&cl(c),a===1)o.tag===0?iC(Y1.bind(null,o)):Ox(Y1.bind(null,o)),tC(function(){!(He&6)&&Wr()}),c=null;else{switch(I0(m)){case 1:c=Tu;break;case 4:c=z0;break;case 16:c=dl;break;case 536870912:c=R0;break;default:c=dl}c=tv(c,q1.bind(null,o))}o.callbackPriority=a,o.callbackNode=c}}function q1(o,a){if(oc=-1,ic=0,He&6)throw Error(n(327));var c=o.callbackNode;if(zi()&&o.callbackNode!==c)return null;var m=hl(o,o===Ot?Vt:0);if(m===0)return null;if(m&30||m&o.expiredLanes||a)a=sc(o,m);else{a=m;var w=He;He|=2;var S=K1();(Ot!==o||Vt!==a)&&(xr=null,Li=wt()+500,Oo(o,a));do try{$C();break}catch(q){G1(o,q)}while(!0);gf(),Jl.current=S,He=w,$t!==null?a=0:(Ot=null,Vt=0,a=Tt)}if(a!==0){if(a===2&&(w=Du(o),w!==0&&(m=w,a=Jf(o,w))),a===1)throw c=Xs,Oo(o,0),Zr(o,m),sn(o,wt()),c;if(a===6)Zr(o,m);else{if(w=o.current.alternate,!(m&30)&&!kC(w)&&(a=sc(o,m),a===2&&(S=Du(o),S!==0&&(m=S,a=Jf(o,S))),a===1))throw c=Xs,Oo(o,0),Zr(o,m),sn(o,wt()),c;switch(o.finishedWork=w,o.finishedLanes=m,a){case 0:case 1:throw Error(n(345));case 2:Mo(o,on,xr);break;case 3:if(Zr(o,m),(m&130023424)===m&&(a=Qf+500-wt(),10<a)){if(hl(o,0)!==0)break;if(w=o.suspendedLanes,(w&m)!==m){Zt(),o.pingedLanes|=o.suspendedLanes&w;break}o.timeoutHandle=of(Mo.bind(null,o,on,xr),a);break}Mo(o,on,xr);break;case 4:if(Zr(o,m),(m&4194240)===m)break;for(a=o.eventTimes,w=-1;0<m;){var L=31-On(m);S=1<<L,L=a[L],L>w&&(w=L),m&=~S}if(m=w,m=wt()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*SC(m/1960))-m,10<m){o.timeoutHandle=of(Mo.bind(null,o,on,xr),m);break}Mo(o,on,xr);break;case 5:Mo(o,on,xr);break;default:throw Error(n(329))}}}return sn(o,wt()),o.callbackNode===c?q1.bind(null,o):null}function Jf(o,a){var c=Js;return o.current.memoizedState.isDehydrated&&(Oo(o,a).flags|=256),o=sc(o,a),o!==2&&(a=on,on=c,a!==null&&ep(a)),o}function ep(o){on===null?on=o:on.push.apply(on,o)}function kC(o){for(var a=o;;){if(a.flags&16384){var c=a.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var m=0;m<c.length;m++){var w=c[m],S=w.getSnapshot;w=w.value;try{if(!Mn(S(),w))return!1}catch{return!1}}}if(c=a.child,a.subtreeFlags&16384&&c!==null)c.return=a,a=c;else{if(a===o)break;for(;a.sibling===null;){if(a.return===null||a.return===o)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Zr(o,a){for(a&=~Kf,a&=~ec,o.suspendedLanes|=a,o.pingedLanes&=~a,o=o.expirationTimes;0<a;){var c=31-On(a),m=1<<c;o[c]=-1,a&=~m}}function Y1(o){if(He&6)throw Error(n(327));zi();var a=hl(o,0);if(!(a&1))return sn(o,wt()),null;var c=sc(o,a);if(o.tag!==0&&c===2){var m=Du(o);m!==0&&(a=m,c=Jf(o,m))}if(c===1)throw c=Xs,Oo(o,0),Zr(o,a),sn(o,wt()),c;if(c===6)throw Error(n(345));return o.finishedWork=o.current.alternate,o.finishedLanes=a,Mo(o,on,xr),sn(o,wt()),null}function tp(o,a){var c=He;He|=1;try{return o(a)}finally{He=c,He===0&&(Li=wt()+500,Ml&&Wr())}}function Do(o){Kr!==null&&Kr.tag===0&&!(He&6)&&zi();var a=He;He|=1;var c=Pn.transition,m=Ye;try{if(Pn.transition=null,Ye=1,o)return o()}finally{Ye=m,Pn.transition=c,He=a,!(He&6)&&Wr()}}function np(){gn=Ai.current,rt(Ai)}function Oo(o,a){o.finishedWork=null,o.finishedLanes=0;var c=o.timeoutHandle;if(c!==-1&&(o.timeoutHandle=-1,eC(c)),$t!==null)for(c=$t.return;c!==null;){var m=c;switch(uf(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&Dl();break;case 3:Di(),rt(tn),rt(Ht),kf();break;case 5:jf(m);break;case 4:Di();break;case 13:rt(ft);break;case 19:rt(ft);break;case 10:xf(m.type._context);break;case 22:case 23:np()}c=c.return}if(Ot=o,$t=o=Xr(o.current,null),Vt=gn=a,Tt=0,Xs=null,Kf=ec=To=0,on=Js=null,Po!==null){for(a=0;a<Po.length;a++)if(c=Po[a],m=c.interleaved,m!==null){c.interleaved=null;var w=m.next,S=c.pending;if(S!==null){var L=S.next;S.next=w,m.next=L}c.pending=m}Po=null}return o}function G1(o,a){do{var c=$t;try{if(gf(),Hl.current=Yl,Wl){for(var m=pt.memoizedState;m!==null;){var w=m.queue;w!==null&&(w.pending=null),m=m.next}Wl=!1}if(_o=0,Dt=_t=pt=null,qs=!1,Ys=0,Gf.current=null,c===null||c.return===null){Tt=1,Xs=a,$t=null;break}e:{var S=o,L=c.return,q=c,K=a;if(a=Vt,q.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var oe=K,pe=q,he=pe.tag;if(!(pe.mode&1)&&(he===0||he===11||he===15)){var ue=pe.alternate;ue?(pe.updateQueue=ue.updateQueue,pe.memoizedState=ue.memoizedState,pe.lanes=ue.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var be=y1(L);if(be!==null){be.flags&=-257,b1(be,L,q,S,a),be.mode&1&&v1(S,oe,a),a=be,K=oe;var je=a.updateQueue;if(je===null){var Se=new Set;Se.add(K),a.updateQueue=Se}else je.add(K);break e}else{if(!(a&1)){v1(S,oe,a),rp();break e}K=Error(n(426))}}else if(at&&q.mode&1){var jt=y1(L);if(jt!==null){!(jt.flags&65536)&&(jt.flags|=256),b1(jt,L,q,S,a),hf(Oi(K,q));break e}}S=K=Oi(K,q),Tt!==4&&(Tt=2),Js===null?Js=[S]:Js.push(S),S=L;do{switch(S.tag){case 3:S.flags|=65536,a&=-a,S.lanes|=a;var te=g1(S,K,a);Hx(S,te);break e;case 1:q=K;var Z=S.type,ne=S.stateNode;if(!(S.flags&128)&&(typeof Z.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Gr===null||!Gr.has(ne)))){S.flags|=65536,a&=-a,S.lanes|=a;var ge=x1(S,q,a);Hx(S,ge);break e}}S=S.return}while(S!==null)}Z1(c)}catch(Ce){a=Ce,$t===c&&c!==null&&($t=c=c.return);continue}break}while(!0)}function K1(){var o=Jl.current;return Jl.current=Yl,o===null?Yl:o}function rp(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Ot===null||!(To&268435455)&&!(ec&268435455)||Zr(Ot,Vt)}function sc(o,a){var c=He;He|=2;var m=K1();(Ot!==o||Vt!==a)&&(xr=null,Oo(o,a));do try{CC();break}catch(w){G1(o,w)}while(!0);if(gf(),He=c,Jl.current=m,$t!==null)throw Error(n(261));return Ot=null,Vt=0,Tt}function CC(){for(;$t!==null;)Q1($t)}function $C(){for(;$t!==null&&!_u();)Q1($t)}function Q1(o){var a=ev(o.alternate,o,gn);o.memoizedProps=o.pendingProps,a===null?Z1(o):$t=a,Gf.current=null}function Z1(o){var a=o;do{var c=a.alternate;if(o=a.return,a.flags&32768){if(c=yC(c,a),c!==null){c.flags&=32767,$t=c;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{Tt=6,$t=null;return}}else if(c=vC(c,a,gn),c!==null){$t=c;return}if(a=a.sibling,a!==null){$t=a;return}$t=a=o}while(a!==null);Tt===0&&(Tt=5)}function Mo(o,a,c){var m=Ye,w=Pn.transition;try{Pn.transition=null,Ye=1,PC(o,a,c,m)}finally{Pn.transition=w,Ye=m}return null}function PC(o,a,c,m){do zi();while(Kr!==null);if(He&6)throw Error(n(327));c=o.finishedWork;var w=o.finishedLanes;if(c===null)return null;if(o.finishedWork=null,o.finishedLanes=0,c===o.current)throw Error(n(177));o.callbackNode=null,o.callbackPriority=0;var S=c.lanes|c.childLanes;if(a3(o,S),o===Ot&&($t=Ot=null,Vt=0),!(c.subtreeFlags&2064)&&!(c.flags&2064)||nc||(nc=!0,tv(dl,function(){return zi(),null})),S=(c.flags&15990)!==0,c.subtreeFlags&15990||S){S=Pn.transition,Pn.transition=null;var L=Ye;Ye=1;var q=He;He|=4,Gf.current=null,wC(o,c),V1(c,o),Y3(nf),xl=!!tf,nf=tf=null,o.current=c,jC(c),X4(),He=q,Ye=L,Pn.transition=S}else o.current=c;if(nc&&(nc=!1,Kr=o,rc=w),S=o.pendingLanes,S===0&&(Gr=null),t3(c.stateNode),sn(o,wt()),a!==null)for(m=o.onRecoverableError,c=0;c<a.length;c++)w=a[c],m(w.value,{componentStack:w.stack,digest:w.digest});if(tc)throw tc=!1,o=Zf,Zf=null,o;return rc&1&&o.tag!==0&&zi(),S=o.pendingLanes,S&1?o===Xf?ea++:(ea=0,Xf=o):ea=0,Wr(),null}function zi(){if(Kr!==null){var o=I0(rc),a=Pn.transition,c=Ye;try{if(Pn.transition=null,Ye=16>o?16:o,Kr===null)var m=!1;else{if(o=Kr,Kr=null,rc=0,He&6)throw Error(n(331));var w=He;for(He|=4,we=o.current;we!==null;){var S=we,L=S.child;if(we.flags&16){var q=S.deletions;if(q!==null){for(var K=0;K<q.length;K++){var oe=q[K];for(we=oe;we!==null;){var pe=we;switch(pe.tag){case 0:case 11:case 15:Zs(8,pe,S)}var he=pe.child;if(he!==null)he.return=pe,we=he;else for(;we!==null;){pe=we;var ue=pe.sibling,be=pe.return;if(z1(pe),pe===oe){we=null;break}if(ue!==null){ue.return=be,we=ue;break}we=be}}}var je=S.alternate;if(je!==null){var Se=je.child;if(Se!==null){je.child=null;do{var jt=Se.sibling;Se.sibling=null,Se=jt}while(Se!==null)}}we=S}}if(S.subtreeFlags&2064&&L!==null)L.return=S,we=L;else e:for(;we!==null;){if(S=we,S.flags&2048)switch(S.tag){case 0:case 11:case 15:Zs(9,S,S.return)}var te=S.sibling;if(te!==null){te.return=S.return,we=te;break e}we=S.return}}var Z=o.current;for(we=Z;we!==null;){L=we;var ne=L.child;if(L.subtreeFlags&2064&&ne!==null)ne.return=L,we=ne;else e:for(L=Z;we!==null;){if(q=we,q.flags&2048)try{switch(q.tag){case 0:case 11:case 15:Xl(9,q)}}catch(Ce){vt(q,q.return,Ce)}if(q===L){we=null;break e}var ge=q.sibling;if(ge!==null){ge.return=q.return,we=ge;break e}we=q.return}}if(He=w,Wr(),Gn&&typeof Gn.onPostCommitFiberRoot=="function")try{Gn.onPostCommitFiberRoot(ul,o)}catch{}m=!0}return m}finally{Ye=c,Pn.transition=a}}return!1}function X1(o,a,c){a=Oi(c,a),a=g1(o,a,1),o=qr(o,a,1),a=Zt(),o!==null&&(ks(o,1,a),sn(o,a))}function vt(o,a,c){if(o.tag===3)X1(o,o,c);else for(;a!==null;){if(a.tag===3){X1(a,o,c);break}else if(a.tag===1){var m=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(Gr===null||!Gr.has(m))){o=Oi(c,o),o=x1(a,o,1),a=qr(a,o,1),o=Zt(),a!==null&&(ks(a,1,o),sn(a,o));break}}a=a.return}}function EC(o,a,c){var m=o.pingCache;m!==null&&m.delete(a),a=Zt(),o.pingedLanes|=o.suspendedLanes&c,Ot===o&&(Vt&c)===c&&(Tt===4||Tt===3&&(Vt&130023424)===Vt&&500>wt()-Qf?Oo(o,0):Kf|=c),sn(o,a)}function J1(o,a){a===0&&(o.mode&1?(a=pl,pl<<=1,!(pl&130023424)&&(pl=4194304)):a=1);var c=Zt();o=hr(o,a),o!==null&&(ks(o,a,c),sn(o,c))}function _C(o){var a=o.memoizedState,c=0;a!==null&&(c=a.retryLane),J1(o,c)}function TC(o,a){var c=0;switch(o.tag){case 13:var m=o.stateNode,w=o.memoizedState;w!==null&&(c=w.retryLane);break;case 19:m=o.stateNode;break;default:throw Error(n(314))}m!==null&&m.delete(a),J1(o,c)}var ev;ev=function(o,a,c){if(o!==null)if(o.memoizedProps!==a.pendingProps||tn.current)rn=!0;else{if(!(o.lanes&c)&&!(a.flags&128))return rn=!1,xC(o,a,c);rn=!!(o.flags&131072)}else rn=!1,at&&a.flags&1048576&&Mx(a,Ll,a.index);switch(a.lanes=0,a.tag){case 2:var m=a.type;Ql(o,a),o=a.pendingProps;var w=ki(a,Ht.current);Ti(a,c),w=Pf(null,a,m,o,w,c);var S=Ef();return a.flags|=1,typeof w=="object"&&w!==null&&typeof w.render=="function"&&w.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,nn(m)?(S=!0,Ol(a)):S=!1,a.memoizedState=w.state!==null&&w.state!==void 0?w.state:null,bf(a),w.updater=Gl,a.stateNode=w,w._reactInternals=a,Af(a,m,o,c),a=Nf(null,a,m,!0,S,c)):(a.tag=0,at&&S&&df(a),Qt(null,a,w,c),a=a.child),a;case 16:m=a.elementType;e:{switch(Ql(o,a),o=a.pendingProps,w=m._init,m=w(m._payload),a.type=m,w=a.tag=OC(m),o=Ln(m,o),w){case 0:a=Rf(null,a,m,o,c);break e;case 1:a=$1(null,a,m,o,c);break e;case 11:a=w1(null,a,m,o,c);break e;case 14:a=j1(null,a,m,Ln(m.type,o),c);break e}throw Error(n(306,m,""))}return a;case 0:return m=a.type,w=a.pendingProps,w=a.elementType===m?w:Ln(m,w),Rf(o,a,m,w,c);case 1:return m=a.type,w=a.pendingProps,w=a.elementType===m?w:Ln(m,w),$1(o,a,m,w,c);case 3:e:{if(P1(a),o===null)throw Error(n(387));m=a.pendingProps,S=a.memoizedState,w=S.element,Bx(o,a),Vl(a,m,null,c);var L=a.memoizedState;if(m=L.element,S.isDehydrated)if(S={element:m,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},a.updateQueue.baseState=S,a.memoizedState=S,a.flags&256){w=Oi(Error(n(423)),a),a=E1(o,a,m,c,w);break e}else if(m!==w){w=Oi(Error(n(424)),a),a=E1(o,a,m,c,w);break e}else for(mn=Vr(a.stateNode.containerInfo.firstChild),hn=a,at=!0,An=null,c=Fx(a,null,m,c),a.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(Pi(),m===w){a=gr(o,a,c);break e}Qt(o,a,m,c)}a=a.child}return a;case 5:return Ux(a),o===null&&pf(a),m=a.type,w=a.pendingProps,S=o!==null?o.memoizedProps:null,L=w.children,rf(m,w)?L=null:S!==null&&rf(m,S)&&(a.flags|=32),C1(o,a),Qt(o,a,L,c),a.child;case 6:return o===null&&pf(a),null;case 13:return _1(o,a,c);case 4:return wf(a,a.stateNode.containerInfo),m=a.pendingProps,o===null?a.child=Ei(a,null,m,c):Qt(o,a,m,c),a.child;case 11:return m=a.type,w=a.pendingProps,w=a.elementType===m?w:Ln(m,w),w1(o,a,m,w,c);case 7:return Qt(o,a,a.pendingProps,c),a.child;case 8:return Qt(o,a,a.pendingProps.children,c),a.child;case 12:return Qt(o,a,a.pendingProps.children,c),a.child;case 10:e:{if(m=a.type._context,w=a.pendingProps,S=a.memoizedProps,L=w.value,Xe(Nl,m._currentValue),m._currentValue=L,S!==null)if(Mn(S.value,L)){if(S.children===w.children&&!tn.current){a=gr(o,a,c);break e}}else for(S=a.child,S!==null&&(S.return=a);S!==null;){var q=S.dependencies;if(q!==null){L=S.child;for(var K=q.firstContext;K!==null;){if(K.context===m){if(S.tag===1){K=mr(-1,c&-c),K.tag=2;var oe=S.updateQueue;if(oe!==null){oe=oe.shared;var pe=oe.pending;pe===null?K.next=K:(K.next=pe.next,pe.next=K),oe.pending=K}}S.lanes|=c,K=S.alternate,K!==null&&(K.lanes|=c),vf(S.return,c,a),q.lanes|=c;break}K=K.next}}else if(S.tag===10)L=S.type===a.type?null:S.child;else if(S.tag===18){if(L=S.return,L===null)throw Error(n(341));L.lanes|=c,q=L.alternate,q!==null&&(q.lanes|=c),vf(L,c,a),L=S.sibling}else L=S.child;if(L!==null)L.return=S;else for(L=S;L!==null;){if(L===a){L=null;break}if(S=L.sibling,S!==null){S.return=L.return,L=S;break}L=L.return}S=L}Qt(o,a,w.children,c),a=a.child}return a;case 9:return w=a.type,m=a.pendingProps.children,Ti(a,c),w=Cn(w),m=m(w),a.flags|=1,Qt(o,a,m,c),a.child;case 14:return m=a.type,w=Ln(m,a.pendingProps),w=Ln(m.type,w),j1(o,a,m,w,c);case 15:return S1(o,a,a.type,a.pendingProps,c);case 17:return m=a.type,w=a.pendingProps,w=a.elementType===m?w:Ln(m,w),Ql(o,a),a.tag=1,nn(m)?(o=!0,Ol(a)):o=!1,Ti(a,c),h1(a,m,w),Af(a,m,w,c),Nf(null,a,m,!0,o,c);case 19:return D1(o,a,c);case 22:return k1(o,a,c)}throw Error(n(156,a.tag))};function tv(o,a){return hi(o,a)}function DC(o,a,c,m){this.tag=o,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function En(o,a,c,m){return new DC(o,a,c,m)}function op(o){return o=o.prototype,!(!o||!o.isReactComponent)}function OC(o){if(typeof o=="function")return op(o)?1:0;if(o!=null){if(o=o.$$typeof,o===H)return 11;if(o===G)return 14}return 2}function Xr(o,a){var c=o.alternate;return c===null?(c=En(o.tag,a,o.key,o.mode),c.elementType=o.elementType,c.type=o.type,c.stateNode=o.stateNode,c.alternate=o,o.alternate=c):(c.pendingProps=a,c.type=o.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=o.flags&14680064,c.childLanes=o.childLanes,c.lanes=o.lanes,c.child=o.child,c.memoizedProps=o.memoizedProps,c.memoizedState=o.memoizedState,c.updateQueue=o.updateQueue,a=o.dependencies,c.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},c.sibling=o.sibling,c.index=o.index,c.ref=o.ref,c}function ac(o,a,c,m,w,S){var L=2;if(m=o,typeof o=="function")op(o)&&(L=1);else if(typeof o=="string")L=5;else e:switch(o){case A:return Ao(c.children,w,S,a);case R:L=8,w|=8;break;case T:return o=En(12,c,a,w|2),o.elementType=T,o.lanes=S,o;case W:return o=En(13,c,a,w),o.elementType=W,o.lanes=S,o;case Y:return o=En(19,c,a,w),o.elementType=Y,o.lanes=S,o;case $:return lc(c,w,S,a);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case D:L=10;break e;case z:L=9;break e;case H:L=11;break e;case G:L=14;break e;case X:L=16,m=null;break e}throw Error(n(130,o==null?o:typeof o,""))}return a=En(L,c,a,w),a.elementType=o,a.type=m,a.lanes=S,a}function Ao(o,a,c,m){return o=En(7,o,m,a),o.lanes=c,o}function lc(o,a,c,m){return o=En(22,o,m,a),o.elementType=$,o.lanes=c,o.stateNode={isHidden:!1},o}function ip(o,a,c){return o=En(6,o,null,a),o.lanes=c,o}function sp(o,a,c){return a=En(4,o.children!==null?o.children:[],o.key,a),a.lanes=c,a.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},a}function MC(o,a,c,m,w){this.tag=a,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ou(0),this.expirationTimes=Ou(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ou(0),this.identifierPrefix=m,this.onRecoverableError=w,this.mutableSourceEagerHydrationData=null}function ap(o,a,c,m,w,S,L,q,K){return o=new MC(o,a,c,q,K),a===1?(a=1,S===!0&&(a|=8)):a=0,S=En(3,null,null,a),o.current=S,S.stateNode=o,S.memoizedState={element:m,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(S),o}function AC(o,a,c){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:m==null?null:""+m,children:o,containerInfo:a,implementation:c}}function nv(o){if(!o)return Hr;o=o._reactInternals;e:{if(cr(o)!==o||o.tag!==1)throw Error(n(170));var a=o;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(nn(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(n(171))}if(o.tag===1){var c=o.type;if(nn(c))return Tx(o,c,a)}return a}function rv(o,a,c,m,w,S,L,q,K){return o=ap(c,m,!0,o,w,S,L,q,K),o.context=nv(null),c=o.current,m=Zt(),w=Qr(c),S=mr(m,w),S.callback=a??null,qr(c,S,w),o.current.lanes=w,ks(o,w,m),sn(o,m),o}function cc(o,a,c,m){var w=a.current,S=Zt(),L=Qr(w);return c=nv(c),a.context===null?a.context=c:a.pendingContext=c,a=mr(S,L),a.payload={element:o},m=m===void 0?null:m,m!==null&&(a.callback=m),o=qr(w,a,L),o!==null&&(Nn(o,w,L,S),Fl(o,w,L)),L}function dc(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function ov(o,a){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var c=o.retryLane;o.retryLane=c!==0&&c<a?c:a}}function lp(o,a){ov(o,a),(o=o.alternate)&&ov(o,a)}function LC(){return null}var iv=typeof reportError=="function"?reportError:function(o){console.error(o)};function cp(o){this._internalRoot=o}uc.prototype.render=cp.prototype.render=function(o){var a=this._internalRoot;if(a===null)throw Error(n(409));cc(o,a,null,null)},uc.prototype.unmount=cp.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var a=o.containerInfo;Do(function(){cc(null,o,null,null)}),a[dr]=null}};function uc(o){this._internalRoot=o}uc.prototype.unstable_scheduleHydration=function(o){if(o){var a=B0();o={blockedOn:null,target:o,priority:a};for(var c=0;c<Nr.length&&a!==0&&a<Nr[c].priority;c++);Nr.splice(c,0,o),c===0&&U0(o)}};function dp(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function fc(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function sv(){}function zC(o,a,c,m,w){if(w){if(typeof m=="function"){var S=m;m=function(){var oe=dc(L);S.call(oe)}}var L=rv(a,m,o,0,null,!1,!1,"",sv);return o._reactRootContainer=L,o[dr]=L.current,Ns(o.nodeType===8?o.parentNode:o),Do(),L}for(;w=o.lastChild;)o.removeChild(w);if(typeof m=="function"){var q=m;m=function(){var oe=dc(K);q.call(oe)}}var K=ap(o,0,!1,null,null,!1,!1,"",sv);return o._reactRootContainer=K,o[dr]=K.current,Ns(o.nodeType===8?o.parentNode:o),Do(function(){cc(a,K,c,m)}),K}function pc(o,a,c,m,w){var S=c._reactRootContainer;if(S){var L=S;if(typeof w=="function"){var q=w;w=function(){var K=dc(L);q.call(K)}}cc(a,L,o,w)}else L=zC(c,a,o,w,m);return dc(L)}F0=function(o){switch(o.tag){case 3:var a=o.stateNode;if(a.current.memoizedState.isDehydrated){var c=Ss(a.pendingLanes);c!==0&&(Mu(a,c|1),sn(a,wt()),!(He&6)&&(Li=wt()+500,Wr()))}break;case 13:Do(function(){var m=hr(o,1);if(m!==null){var w=Zt();Nn(m,o,1,w)}}),lp(o,1)}},Au=function(o){if(o.tag===13){var a=hr(o,134217728);if(a!==null){var c=Zt();Nn(a,o,134217728,c)}lp(o,134217728)}},V0=function(o){if(o.tag===13){var a=Qr(o),c=hr(o,a);if(c!==null){var m=Zt();Nn(c,o,a,m)}lp(o,a)}},B0=function(){return Ye},H0=function(o,a){var c=Ye;try{return Ye=o,a()}finally{Ye=c}},di=function(o,a,c){switch(a){case"input":if(Me(o,c),a=c.name,c.type==="radio"&&a!=null){for(c=o;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<c.length;a++){var m=c[a];if(m!==o&&m.form===o.form){var w=Tl(m);if(!w)throw Error(n(90));ke(m),Me(m,w)}}}break;case"textarea":yo(o,c);break;case"select":a=c.value,a!=null&&gt(o,!!c.multiple,a,!1)}},Ze=tp,fn=Do;var RC={usingClientEntryPoint:!1,Events:[Vs,ji,Tl,It,jo,tp]},ta={findFiberByHostInstance:So,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},NC={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:B.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=Jt(o),o===null?null:o.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||LC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{ul=hc.inject(NC),Gn=hc}catch{}}return an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RC,an.createPortal=function(o,a){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(a))throw Error(n(200));return AC(o,a,null,c)},an.createRoot=function(o,a){if(!dp(o))throw Error(n(299));var c=!1,m="",w=iv;return a!=null&&(a.unstable_strictMode===!0&&(c=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),a=ap(o,1,!1,null,null,c,!1,m,w),o[dr]=a.current,Ns(o.nodeType===8?o.parentNode:o),new cp(a)},an.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var a=o._reactInternals;if(a===void 0)throw typeof o.render=="function"?Error(n(188)):(o=Object.keys(o).join(","),Error(n(268,o)));return o=Jt(a),o=o===null?null:o.stateNode,o},an.flushSync=function(o){return Do(o)},an.hydrate=function(o,a,c){if(!fc(a))throw Error(n(200));return pc(null,o,a,!0,c)},an.hydrateRoot=function(o,a,c){if(!dp(o))throw Error(n(405));var m=c!=null&&c.hydratedSources||null,w=!1,S="",L=iv;if(c!=null&&(c.unstable_strictMode===!0&&(w=!0),c.identifierPrefix!==void 0&&(S=c.identifierPrefix),c.onRecoverableError!==void 0&&(L=c.onRecoverableError)),a=rv(a,null,o,1,c??null,w,!1,S,L),o[dr]=a.current,Ns(o),m)for(o=0;o<m.length;o++)c=m[o],w=c._getVersion,w=w(c._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[c,w]:a.mutableSourceEagerHydrationData.push(c,w);return new uc(a)},an.render=function(o,a,c){if(!fc(a))throw Error(n(200));return pc(null,o,a,!1,c)},an.unmountComponentAtNode=function(o){if(!fc(o))throw Error(n(40));return o._reactRootContainer?(Do(function(){pc(null,null,o,!1,function(){o._reactRootContainer=null,o[dr]=null})}),!0):!1},an.unstable_batchedUpdates=tp,an.unstable_renderSubtreeIntoContainer=function(o,a,c,m){if(!fc(c))throw Error(n(200));if(o==null||o._reactInternals===void 0)throw Error(n(38));return pc(o,a,c,!1,m)},an.version="18.3.1-next-f1338f8080-20240426",an}var hv;function qC(){if(hv)return pp.exports;hv=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),pp.exports=UC(),pp.exports}var mv;function YC(){if(mv)return gc;mv=1;var e=qC();return gc.createRoot=e.createRoot,gc.hydrateRoot=e.hydrateRoot,gc}var GC=YC();const KC=ss(GC);var ra={},gv;function QC(){if(gv)return ra;gv=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.parse=u,ra.serialize=h;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function u(v,j){const C=new l,k=v.length;if(k<2)return C;const _=(j==null?void 0:j.decode)||g;let E=0;do{const N=v.indexOf("=",E);if(N===-1)break;const V=v.indexOf(";",E),B=V===-1?k:V;if(N>B){E=v.lastIndexOf(";",N-1)+1;continue}const M=f(v,E,N),F=p(v,N,M),A=v.slice(M,F);if(C[A]===void 0){let R=f(v,N+1,B),T=p(v,B,R);const D=_(v.slice(R,T));C[A]=D}E=B+1}while(E<k);return C}function f(v,j,C){do{const k=v.charCodeAt(j);if(k!==32&&k!==9)return j}while(++j<C);return C}function p(v,j,C){for(;j>C;){const k=v.charCodeAt(--j);if(k!==32&&k!==9)return j+1}return C}function h(v,j,C){const k=(C==null?void 0:C.encode)||encodeURIComponent;if(!e.test(v))throw new TypeError(`argument name is invalid: ${v}`);const _=k(j);if(!t.test(_))throw new TypeError(`argument val is invalid: ${j}`);let E=v+"="+_;if(!C)return E;if(C.maxAge!==void 0){if(!Number.isInteger(C.maxAge))throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);E+="; Max-Age="+C.maxAge}if(C.domain){if(!n.test(C.domain))throw new TypeError(`option domain is invalid: ${C.domain}`);E+="; Domain="+C.domain}if(C.path){if(!i.test(C.path))throw new TypeError(`option path is invalid: ${C.path}`);E+="; Path="+C.path}if(C.expires){if(!b(C.expires)||!Number.isFinite(C.expires.valueOf()))throw new TypeError(`option expires is invalid: ${C.expires}`);E+="; Expires="+C.expires.toUTCString()}if(C.httpOnly&&(E+="; HttpOnly"),C.secure&&(E+="; Secure"),C.partitioned&&(E+="; Partitioned"),C.priority)switch(typeof C.priority=="string"?C.priority.toLowerCase():void 0){case"low":E+="; Priority=Low";break;case"medium":E+="; Priority=Medium";break;case"high":E+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${C.priority}`)}if(C.sameSite)switch(typeof C.sameSite=="string"?C.sameSite.toLowerCase():C.sameSite){case!0:case"strict":E+="; SameSite=Strict";break;case"lax":E+="; SameSite=Lax";break;case"none":E+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${C.sameSite}`)}return E}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function b(v){return s.call(v)==="[object Date]"}return ra}QC();/**
 * react-router v7.0.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var xv="popstate";function ZC(e={}){function t(i,s){let{pathname:l,search:u,hash:f}=i.location;return xm("",{pathname:l,search:u,hash:f},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){return typeof s=="string"?s:Oa(s)}return JC(t,n,null,e)}function lt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vn(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function XC(){return Math.random().toString(36).substring(2,10)}function vv(e,t){return{usr:e.state,key:e.key,idx:t}}function xm(e,t,n=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?as(t):t,state:n,key:t&&t.key||i||XC()}}function Oa({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function as(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let i=e.indexOf("?");i>=0&&(t.search=e.substring(i),e=e.substring(0,i)),e&&(t.pathname=e)}return t}function JC(e,t,n,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,u=s.history,f="POP",p=null,h=g();h==null&&(h=0,u.replaceState({...u.state,idx:h},""));function g(){return(u.state||{idx:null}).idx}function b(){f="POP";let _=g(),E=_==null?null:_-h;h=_,p&&p({action:f,location:k.location,delta:E})}function v(_,E){f="PUSH";let N=xm(k.location,_,E);h=g()+1;let V=vv(N,h),B=k.createHref(N);try{u.pushState(V,"",B)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(B)}l&&p&&p({action:f,location:k.location,delta:1})}function j(_,E){f="REPLACE";let N=xm(k.location,_,E);h=g();let V=vv(N,h),B=k.createHref(N);u.replaceState(V,"",B),l&&p&&p({action:f,location:k.location,delta:0})}function C(_){let E=s.location.origin!=="null"?s.location.origin:s.location.href,N=typeof _=="string"?_:Oa(_);return N=N.replace(/ $/,"%20"),lt(E,`No window.location.(origin|href) available to create URL for href: ${N}`),new URL(N,E)}let k={get action(){return f},get location(){return e(s,u)},listen(_){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(xv,b),p=_,()=>{s.removeEventListener(xv,b),p=null}},createHref(_){return t(s,_)},createURL:C,encodeLocation(_){let E=C(_);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:v,replace:j,go(_){return u.go(_)}};return k}function uj(e,t,n="/"){return e9(e,t,n,!1)}function e9(e,t,n,i){let s=typeof t=="string"?as(t):t,l=po(s.pathname||"/",n);if(l==null)return null;let u=fj(e);t9(u);let f=null;for(let p=0;f==null&&p<u.length;++p){let h=f9(l);f=d9(u[p],h,i)}return f}function fj(e,t=[],n=[],i=""){let s=(l,u,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(lt(p.relativePath.startsWith(i),`Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(i.length));let h=jr([i,p.relativePath]),g=n.concat(p);l.children&&l.children.length>0&&(lt(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),fj(l.children,t,g,h)),!(l.path==null&&!l.index)&&t.push({path:h,score:l9(h,l.index),routesMeta:g})};return e.forEach((l,u)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))s(l,u);else for(let p of pj(l.path))s(l,u,p)}),t}function pj(e){let t=e.split("/");if(t.length===0)return[];let[n,...i]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let u=pj(i.join("/")),f=[];return f.push(...u.map(p=>p===""?l:[l,p].join("/"))),s&&f.push(...u),f.map(p=>e.startsWith("/")&&p===""?"/":p)}function t9(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:c9(t.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}var n9=/^:[\w-]+$/,r9=3,o9=2,i9=1,s9=10,a9=-2,yv=e=>e==="*";function l9(e,t){let n=e.split("/"),i=n.length;return n.some(yv)&&(i+=a9),t&&(i+=o9),n.filter(s=>!yv(s)).reduce((s,l)=>s+(n9.test(l)?r9:l===""?i9:s9),i)}function c9(e,t){return e.length===t.length&&e.slice(0,-1).every((i,s)=>i===t[s])?e[e.length-1]-t[t.length-1]:0}function d9(e,t,n=!1){let{routesMeta:i}=e,s={},l="/",u=[];for(let f=0;f<i.length;++f){let p=i[f],h=f===i.length-1,g=l==="/"?t:t.slice(l.length)||"/",b=Ma({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},g),v=p.route;if(!b&&h&&n&&!i[i.length-1].route.index&&(b=Ma({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!b)return null;Object.assign(s,b.params),u.push({params:s,pathname:jr([l,b.pathname]),pathnameBase:g9(jr([l,b.pathnameBase])),route:v}),b.pathnameBase!=="/"&&(l=jr([l,b.pathnameBase]))}return u}function Ma(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=u9(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],u=l.replace(/(.)\/+$/,"$1"),f=s.slice(1);return{params:i.reduce((h,{paramName:g,isOptional:b},v)=>{if(g==="*"){let C=f[v]||"";u=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const j=f[v];return b&&!j?h[g]=void 0:h[g]=(j||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:u,pattern:e}}function u9(e,t=!1,n=!0){Vn(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,p)=>(i.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),i]}function f9(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vn(!1,`The URL path "${e}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function po(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,i=e.charAt(n);return i&&i!=="/"?null:e.slice(n)||"/"}function p9(e,t="/"){let{pathname:n,search:i="",hash:s=""}=typeof e=="string"?as(e):e;return{pathname:n?n.startsWith("/")?n:h9(n,t):t,search:x9(i),hash:v9(s)}}function h9(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function gp(e,t,n,i){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function m9(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Sg(e){let t=m9(e);return t.map((n,i)=>i===t.length-1?n.pathname:n.pathnameBase)}function kg(e,t,n,i=!1){let s;typeof e=="string"?s=as(e):(s={...e},lt(!s.pathname||!s.pathname.includes("?"),gp("?","pathname","search",s)),lt(!s.pathname||!s.pathname.includes("#"),gp("#","pathname","hash",s)),lt(!s.search||!s.search.includes("#"),gp("#","search","hash",s)));let l=e===""||s.pathname==="",u=l?"/":s.pathname,f;if(u==null)f=n;else{let b=t.length-1;if(!i&&u.startsWith("..")){let v=u.split("/");for(;v[0]==="..";)v.shift(),b-=1;s.pathname=v.join("/")}f=b>=0?t[b]:"/"}let p=p9(s,f),h=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(h||g)&&(p.pathname+="/"),p}var jr=e=>e.join("/").replace(/\/\/+/g,"/"),g9=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x9=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,v9=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function y9(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var hj=["POST","PUT","PATCH","DELETE"];new Set(hj);var b9=["GET",...hj];new Set(b9);var ls=x.createContext(null);ls.displayName="DataRouter";var qd=x.createContext(null);qd.displayName="DataRouterState";var mj=x.createContext({isTransitioning:!1});mj.displayName="ViewTransition";var w9=x.createContext(new Map);w9.displayName="Fetchers";var j9=x.createContext(null);j9.displayName="Await";var Hn=x.createContext(null);Hn.displayName="Navigation";var Ha=x.createContext(null);Ha.displayName="Location";var Wn=x.createContext({outlet:null,matches:[],isDataRoute:!1});Wn.displayName="Route";var Cg=x.createContext(null);Cg.displayName="RouteError";function S9(e,{relative:t}={}){lt(cs(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:i}=x.useContext(Hn),{hash:s,pathname:l,search:u}=Ua(e,{relative:t}),f=l;return n!=="/"&&(f=l==="/"?n:jr([n,l])),i.createHref({pathname:f,search:u,hash:s})}function cs(){return x.useContext(Ha)!=null}function wn(){return lt(cs(),"useLocation() may be used only in the context of a <Router> component."),x.useContext(Ha).location}var gj="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function xj(e){x.useContext(Hn).static||x.useLayoutEffect(e)}function Ke(){let{isDataRoute:e}=x.useContext(Wn);return e?z9():k9()}function k9(){lt(cs(),"useNavigate() may be used only in the context of a <Router> component.");let e=x.useContext(ls),{basename:t,navigator:n}=x.useContext(Hn),{matches:i}=x.useContext(Wn),{pathname:s}=wn(),l=JSON.stringify(Sg(i)),u=x.useRef(!1);return xj(()=>{u.current=!0}),x.useCallback((p,h={})=>{if(Vn(u.current,gj),!u.current)return;if(typeof p=="number"){n.go(p);return}let g=kg(p,JSON.parse(l),s,h.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:jr([t,g.pathname])),(h.replace?n.replace:n.push)(g,h.state,h)},[t,n,l,s,e])}x.createContext(null);function Wa(){let{matches:e}=x.useContext(Wn),t=e[e.length-1];return t?t.params:{}}function Ua(e,{relative:t}={}){let{matches:n}=x.useContext(Wn),{pathname:i}=wn(),s=JSON.stringify(Sg(n));return x.useMemo(()=>kg(e,JSON.parse(s),i,t==="path"),[e,s,i,t])}function C9(e,t){return vj(e,t)}function vj(e,t,n,i){var E;lt(cs(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s}=x.useContext(Hn),{matches:l}=x.useContext(Wn),u=l[l.length-1],f=u?u.params:{},p=u?u.pathname:"/",h=u?u.pathnameBase:"/",g=u&&u.route;{let N=g&&g.path||"";yj(p,!g||N.endsWith("*")||N.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N==="/"?"*":`${N}/*`}">.`)}let b=wn(),v;if(t){let N=typeof t=="string"?as(t):t;lt(h==="/"||((E=N.pathname)==null?void 0:E.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${N.pathname}" was given in the \`location\` prop.`),v=N}else v=b;let j=v.pathname||"/",C=j;if(h!=="/"){let N=h.replace(/^\//,"").split("/");C="/"+j.replace(/^\//,"").split("/").slice(N.length).join("/")}let k=uj(e,{pathname:C});Vn(g||k!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Vn(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=T9(k&&k.map(N=>Object.assign({},N,{params:Object.assign({},f,N.params),pathname:jr([h,s.encodeLocation?s.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?h:jr([h,s.encodeLocation?s.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,n,i);return t&&_?x.createElement(Ha.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},_):_}function $9(){let e=L9(),t=y9(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},u=null;return console.error("Error handled by React Router default ErrorBoundary:",e),u=x.createElement(x.Fragment,null,x.createElement("p",null,"💿 Hey developer 👋"),x.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",x.createElement("code",{style:l},"ErrorBoundary")," or"," ",x.createElement("code",{style:l},"errorElement")," prop on your route.")),x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},t),n?x.createElement("pre",{style:s},n):null,u)}var P9=x.createElement($9,null),E9=class extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?x.createElement(Wn.Provider,{value:this.props.routeContext},x.createElement(Cg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _9({routeContext:e,match:t,children:n}){let i=x.useContext(ls);return i&&i.static&&i.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=t.route.id),x.createElement(Wn.Provider,{value:e},n)}function T9(e,t=[],n=null,i=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=n==null?void 0:n.errors;if(l!=null){let p=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);lt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let u=!1,f=-1;if(n)for(let p=0;p<s.length;p++){let h=s[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(f=p),h.route.id){let{loaderData:g,errors:b}=n,v=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!b||b[h.route.id]===void 0);if(h.route.lazy||v){u=!0,f>=0?s=s.slice(0,f+1):s=[s[0]];break}}}return s.reduceRight((p,h,g)=>{let b,v=!1,j=null,C=null;n&&(b=l&&h.route.id?l[h.route.id]:void 0,j=h.route.errorElement||P9,u&&(f<0&&g===0?(yj("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,C=null):f===g&&(v=!0,C=h.route.hydrateFallbackElement||null)));let k=t.concat(s.slice(0,g+1)),_=()=>{let E;return b?E=j:v?E=C:h.route.Component?E=x.createElement(h.route.Component,null):h.route.element?E=h.route.element:E=p,x.createElement(_9,{match:h,routeContext:{outlet:p,matches:k,isDataRoute:n!=null},children:E})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?x.createElement(E9,{location:n.location,revalidation:n.revalidation,component:j,error:b,children:_(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):_()},null)}function $g(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function D9(e){let t=x.useContext(ls);return lt(t,$g(e)),t}function O9(e){let t=x.useContext(qd);return lt(t,$g(e)),t}function M9(e){let t=x.useContext(Wn);return lt(t,$g(e)),t}function Pg(e){let t=M9(e),n=t.matches[t.matches.length-1];return lt(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function A9(){return Pg("useRouteId")}function L9(){var i;let e=x.useContext(Cg),t=O9("useRouteError"),n=Pg("useRouteError");return e!==void 0?e:(i=t.errors)==null?void 0:i[n]}function z9(){let{router:e}=D9("useNavigate"),t=Pg("useNavigate"),n=x.useRef(!1);return xj(()=>{n.current=!0}),x.useCallback(async(s,l={})=>{Vn(n.current,gj),n.current&&(typeof s=="number"?e.navigate(s):await e.navigate(s,{fromRouteId:t,...l}))},[e,t])}var bv={};function yj(e,t,n){!t&&!bv[e]&&(bv[e]=!0,Vn(!1,n))}x.memo(R9);function R9({routes:e,future:t,state:n}){return vj(e,void 0,n,t)}function vm({to:e,replace:t,state:n,relative:i}){lt(cs(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=x.useContext(Hn);Vn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=x.useContext(Wn),{pathname:u}=wn(),f=Ke(),p=kg(e,Sg(l),u,i==="path"),h=JSON.stringify(p);return x.useEffect(()=>{f(JSON.parse(h),{replace:t,state:n,relative:i})},[f,h,i,t,n]),null}function De(e){lt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function N9({basename:e="/",children:t=null,location:n,navigationType:i="POP",navigator:s,static:l=!1}){lt(!cs(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=e.replace(/^\/*/,"/"),f=x.useMemo(()=>({basename:u,navigator:s,static:l,future:{}}),[u,s,l]);typeof n=="string"&&(n=as(n));let{pathname:p="/",search:h="",hash:g="",state:b=null,key:v="default"}=n,j=x.useMemo(()=>{let C=po(p,u);return C==null?null:{location:{pathname:C,search:h,hash:g,state:b,key:v},navigationType:i}},[u,p,h,g,b,v,i]);return Vn(j!=null,`<Router basename="${u}"> is not able to match the URL "${p}${h}${g}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:x.createElement(Hn.Provider,{value:f},x.createElement(Ha.Provider,{children:t,value:j}))}function ym({children:e,location:t}){return C9(bm(e),t)}function bm(e,t=[]){let n=[];return x.Children.forEach(e,(i,s)=>{if(!x.isValidElement(i))return;let l=[...t,s];if(i.type===x.Fragment){n.push.apply(n,bm(i.props.children,l));return}lt(i.type===De,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),lt(!i.props.index||!i.props.children,"An index route cannot have child routes.");let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=bm(i.props.children,l)),n.push(u)}),n}var id="get",sd="application/x-www-form-urlencoded";function Yd(e){return e!=null&&typeof e.tagName=="string"}function I9(e){return Yd(e)&&e.tagName.toLowerCase()==="button"}function F9(e){return Yd(e)&&e.tagName.toLowerCase()==="form"}function V9(e){return Yd(e)&&e.tagName.toLowerCase()==="input"}function B9(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H9(e,t){return e.button===0&&(!t||t==="_self")&&!B9(e)}var xc=null;function W9(){if(xc===null)try{new FormData(document.createElement("form"),0),xc=!1}catch{xc=!0}return xc}var U9=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function xp(e){return e!=null&&!U9.has(e)?(Vn(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sd}"`),null):e}function q9(e,t){let n,i,s,l,u;if(F9(e)){let f=e.getAttribute("action");i=f?po(f,t):null,n=e.getAttribute("method")||id,s=xp(e.getAttribute("enctype"))||sd,l=new FormData(e)}else if(I9(e)||V9(e)&&(e.type==="submit"||e.type==="image")){let f=e.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=e.getAttribute("formaction")||f.getAttribute("action");if(i=p?po(p,t):null,n=e.getAttribute("formmethod")||f.getAttribute("method")||id,s=xp(e.getAttribute("formenctype"))||xp(f.getAttribute("enctype"))||sd,l=new FormData(f,e),!W9()){let{name:h,type:g,value:b}=e;if(g==="image"){let v=h?`${h}.`:"";l.append(`${v}x`,"0"),l.append(`${v}y`,"0")}else h&&l.append(h,b)}}else{if(Yd(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=id,i=null,s=sd,u=e}return l&&s==="text/plain"&&(u=l,l=void 0),{action:i,method:n.toLowerCase(),encType:s,formData:l,body:u}}function Eg(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Y9(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function G9(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function K9(e,t,n){let i=await Promise.all(e.map(async s=>{let l=t.routes[s.route.id];if(l){let u=await Y9(l,n);return u.links?u.links():[]}return[]}));return J9(i.flat(1).filter(G9).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function wv(e,t,n,i,s,l){let u=(p,h)=>n[h]?p.route.id!==n[h].route.id:!0,f=(p,h)=>{var g;return n[h].pathname!==p.pathname||((g=n[h].route.path)==null?void 0:g.endsWith("*"))&&n[h].params["*"]!==p.params["*"]};return l==="assets"?t.filter((p,h)=>u(p,h)||f(p,h)):l==="data"?t.filter((p,h)=>{var b;let g=i.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(u(p,h)||f(p,h))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((b=n[0])==null?void 0:b.params)||{},nextUrl:new URL(e,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function Q9(e,t){return Z9(e.map(n=>{let i=t.routes[n.route.id];if(!i)return[];let s=[i.module];return i.imports&&(s=s.concat(i.imports)),s}).flat(1))}function Z9(e){return[...new Set(e)]}function X9(e){let t={},n=Object.keys(e).sort();for(let i of n)t[i]=e[i];return t}function J9(e,t){let n=new Set;return new Set(t),e.reduce((i,s)=>{let l=JSON.stringify(X9(s));return n.has(l)||(n.add(l),i.push({key:l,link:s})),i},[])}function e$(e){let t=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t.pathname==="/"?t.pathname="_root.data":t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function t$(){let e=x.useContext(ls);return Eg(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function n$(){let e=x.useContext(qd);return Eg(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var _g=x.createContext(void 0);_g.displayName="FrameworkContext";function bj(){let e=x.useContext(_g);return Eg(e,"You must render this element inside a <HydratedRouter> element"),e}function r$(e,t){let n=x.useContext(_g),[i,s]=x.useState(!1),[l,u]=x.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:h,onMouseLeave:g,onTouchStart:b}=t,v=x.useRef(null);x.useEffect(()=>{if(e==="render"&&u(!0),e==="viewport"){let k=E=>{E.forEach(N=>{u(N.isIntersecting)})},_=new IntersectionObserver(k,{threshold:.5});return v.current&&_.observe(v.current),()=>{_.disconnect()}}},[e]),x.useEffect(()=>{if(i){let k=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(k)}}},[i]);let j=()=>{s(!0)},C=()=>{s(!1),u(!1)};return n?e!=="intent"?[l,v,{}]:[l,v,{onFocus:oa(f,j),onBlur:oa(p,C),onMouseEnter:oa(h,j),onMouseLeave:oa(g,C),onTouchStart:oa(b,j)}]:[!1,v,{}]}function oa(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function o$({page:e,...t}){let{router:n}=t$(),i=x.useMemo(()=>uj(n.routes,e,n.basename),[n.routes,e,n.basename]);return i?x.createElement(s$,{page:e,matches:i,...t}):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function i$(e){let{manifest:t,routeModules:n}=bj(),[i,s]=x.useState([]);return x.useEffect(()=>{let l=!1;return K9(e,t,n).then(u=>{l||s(u)}),()=>{l=!0}},[e,t,n]),i}function s$({page:e,matches:t,...n}){let i=wn(),{manifest:s,routeModules:l}=bj(),{loaderData:u,matches:f}=n$(),p=x.useMemo(()=>wv(e,t,f,s,i,"data"),[e,t,f,s,i]),h=x.useMemo(()=>wv(e,t,f,s,i,"assets"),[e,t,f,s,i]),g=x.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let j=new Set,C=!1;if(t.forEach(_=>{var N;let E=s.routes[_.route.id];!E||!E.hasLoader||(!p.some(V=>V.route.id===_.route.id)&&_.route.id in u&&((N=l[_.route.id])!=null&&N.shouldRevalidate)||E.hasClientLoader?C=!0:j.add(_.route.id))}),j.size===0)return[];let k=e$(e);return C&&j.size>0&&k.searchParams.set("_routes",t.filter(_=>j.has(_.route.id)).map(_=>_.route.id).join(",")),[k.pathname+k.search]},[u,i,s,p,t,e,l]),b=x.useMemo(()=>Q9(h,s),[h,s]),v=i$(h);return x.createElement(x.Fragment,null,g.map(j=>x.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...n})),b.map(j=>x.createElement("link",{key:j,rel:"modulepreload",href:j,...n})),v.map(({key:j,link:C})=>x.createElement("link",{key:j,...C})))}function a$(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var wj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{wj&&(window.__reactRouterVersion="7.0.2")}catch{}function jj({basename:e,children:t,window:n}){let i=x.useRef();i.current==null&&(i.current=ZC({window:n,v5Compat:!0}));let s=i.current,[l,u]=x.useState({action:s.action,location:s.location}),f=x.useCallback(p=>{x.startTransition(()=>u(p))},[u]);return x.useLayoutEffect(()=>s.listen(f),[s,f]),x.createElement(N9,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:s})}var Sj=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ht=x.forwardRef(function({onClick:t,discover:n="render",prefetch:i="none",relative:s,reloadDocument:l,replace:u,state:f,target:p,to:h,preventScrollReset:g,viewTransition:b,...v},j){let{basename:C}=x.useContext(Hn),k=typeof h=="string"&&Sj.test(h),_,E=!1;if(typeof h=="string"&&k&&(_=h,wj))try{let T=new URL(window.location.href),D=h.startsWith("//")?new URL(T.protocol+h):new URL(h),z=po(D.pathname,C);D.origin===T.origin&&z!=null?h=z+D.search+D.hash:E=!0}catch{Vn(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let N=S9(h,{relative:s}),[V,B,M]=r$(i,v),F=u$(h,{replace:u,state:f,target:p,preventScrollReset:g,relative:s,viewTransition:b});function A(T){t&&t(T),T.defaultPrevented||F(T)}let R=x.createElement("a",{...v,...M,href:_||N,onClick:E||l?t:A,ref:a$(j,B),target:p,"data-discover":!k&&n==="render"?"true":void 0});return V&&!k?x.createElement(x.Fragment,null,R,x.createElement(o$,{page:N})):R});ht.displayName="Link";var l$=x.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:i="",end:s=!1,style:l,to:u,viewTransition:f,children:p,...h},g){let b=Ua(u,{relative:h.relative}),v=wn(),j=x.useContext(qd),{navigator:C,basename:k}=x.useContext(Hn),_=j!=null&&g$(b)&&f===!0,E=C.encodeLocation?C.encodeLocation(b).pathname:b.pathname,N=v.pathname,V=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(N=N.toLowerCase(),V=V?V.toLowerCase():null,E=E.toLowerCase()),V&&k&&(V=po(V,k)||V);const B=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let M=N===E||!s&&N.startsWith(E)&&N.charAt(B)==="/",F=V!=null&&(V===E||!s&&V.startsWith(E)&&V.charAt(E.length)==="/"),A={isActive:M,isPending:F,isTransitioning:_},R=M?t:void 0,T;typeof i=="function"?T=i(A):T=[i,M?"active":null,F?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let D=typeof l=="function"?l(A):l;return x.createElement(ht,{...h,"aria-current":R,className:T,ref:g,style:D,to:u,viewTransition:f},typeof p=="function"?p(A):p)});l$.displayName="NavLink";var c$=x.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:i,replace:s,state:l,method:u=id,action:f,onSubmit:p,relative:h,preventScrollReset:g,viewTransition:b,...v},j)=>{let C=h$(),k=m$(f,{relative:h}),_=u.toLowerCase()==="get"?"get":"post",E=typeof f=="string"&&Sj.test(f),N=V=>{if(p&&p(V),V.defaultPrevented)return;V.preventDefault();let B=V.nativeEvent.submitter,M=(B==null?void 0:B.getAttribute("formmethod"))||u;C(B||V.currentTarget,{fetcherKey:t,method:M,navigate:n,replace:s,state:l,relative:h,preventScrollReset:g,viewTransition:b})};return x.createElement("form",{ref:j,method:_,action:k,onSubmit:i?p:N,...v,"data-discover":!E&&e==="render"?"true":void 0})});c$.displayName="Form";function d$(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function kj(e){let t=x.useContext(ls);return lt(t,d$(e)),t}function u$(e,{target:t,replace:n,state:i,preventScrollReset:s,relative:l,viewTransition:u}={}){let f=Ke(),p=wn(),h=Ua(e,{relative:l});return x.useCallback(g=>{if(H9(g,t)){g.preventDefault();let b=n!==void 0?n:Oa(p)===Oa(h);f(e,{replace:b,state:i,preventScrollReset:s,relative:l,viewTransition:u})}},[p,f,h,n,i,t,e,s,l,u])}var f$=0,p$=()=>`__${String(++f$)}__`;function h$(){let{router:e}=kj("useSubmit"),{basename:t}=x.useContext(Hn),n=A9();return x.useCallback(async(i,s={})=>{let{action:l,method:u,encType:f,formData:p,body:h}=q9(i,t);if(s.navigate===!1){let g=s.fetcherKey||p$();await e.fetch(g,n,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||u,formEncType:s.encType||f,flushSync:s.flushSync})}else await e.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:h,formMethod:s.method||u,formEncType:s.encType||f,replace:s.replace,state:s.state,fromRouteId:n,flushSync:s.flushSync,viewTransition:s.viewTransition})},[e,t,n])}function m$(e,{relative:t}={}){let{basename:n}=x.useContext(Hn),i=x.useContext(Wn);lt(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...Ua(e||".",{relative:t})},u=wn();if(e==null){l.search=u.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(g=>g==="")){f.delete("index"),p.filter(b=>b).forEach(b=>f.append("index",b));let g=f.toString();l.search=g?`?${g}`:""}}return(!e||e===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(l.pathname=l.pathname==="/"?n:jr([n,l.pathname])),Oa(l)}function g$(e,t={}){let n=x.useContext(mj);lt(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=kj("useViewTransitionState"),s=Ua(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=po(n.currentLocation.pathname,i)||n.currentLocation.pathname,u=po(n.nextLocation.pathname,i)||n.nextLocation.pathname;return Ma(s.pathname,u)!=null||Ma(s.pathname,l)!=null}new TextEncoder;function x$(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...i)=>e(...i);return new Proxy(n,{get:(i,s)=>s==="create"?e:(t.has(s)||t.set(s,e(s)),t.get(s))})}function Gd(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const wm=e=>Array.isArray(e);function Cj(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}function Aa(e){return typeof e=="string"||Array.isArray(e)}function jv(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function Tg(e,t,n,i){if(typeof t=="function"){const[s,l]=jv(i);t=t(n!==void 0?n:e.custom,s,l)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,l]=jv(i);t=t(n!==void 0?n:e.custom,s,l)}return t}function Kd(e,t,n){const i=e.getProps();return Tg(i,t,n!==void 0?n:i.custom,e)}const Dg=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Og=["initial",...Dg],qa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ti=new Set(qa),Sr=e=>e*1e3,kr=e=>e/1e3,v$={type:"spring",stiffness:500,damping:25,restSpeed:10},y$=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),b$={type:"keyframes",duration:.8},w$={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},j$=(e,{keyframes:t})=>t.length>2?b$:ti.has(e)?e.startsWith("scale")?y$(t[1]):v$:w$;function Mg(e,t){return e?e[t]||e.default||e:void 0}const S$={skipAnimations:!1,useManualTiming:!1},k$=e=>e!==null;function Qd(e,{repeat:t,repeatType:n="loop"},i){const s=e.filter(k$),l=t&&n!=="loop"&&t%2===1?0:s.length-1;return!l||i===void 0?s[l]:i}const Rt=e=>e;let C$=Rt,jm=Rt;function $$(e){let t=new Set,n=new Set,i=!1,s=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function f(h){l.has(h)&&(p.schedule(h),e()),h(u)}const p={schedule:(h,g=!1,b=!1)=>{const j=b&&i?t:n;return g&&l.add(h),j.has(h)||j.add(h),h},cancel:h=>{n.delete(h),l.delete(h)},process:h=>{if(u=h,i){s=!0;return}i=!0,[t,n]=[n,t],n.clear(),t.forEach(f),i=!1,s&&(s=!1,p.process(h))}};return p}const vc=["read","resolveKeyframes","update","preRender","render","postRender"],P$=40;function $j(e,t){let n=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,u=vc.reduce((E,N)=>(E[N]=$$(l),E),{}),{read:f,resolveKeyframes:p,update:h,preRender:g,render:b,postRender:v}=u,j=()=>{const E=performance.now();n=!1,s.delta=i?1e3/60:Math.max(Math.min(E-s.timestamp,P$),1),s.timestamp=E,s.isProcessing=!0,f.process(s),p.process(s),h.process(s),g.process(s),b.process(s),v.process(s),s.isProcessing=!1,n&&t&&(i=!1,e(j))},C=()=>{n=!0,i=!0,s.isProcessing||e(j)};return{schedule:vc.reduce((E,N)=>{const V=u[N];return E[N]=(B,M=!1,F=!1)=>(n||C(),V.schedule(B,M,F)),E},{}),cancel:E=>{for(let N=0;N<vc.length;N++)u[vc[N]].cancel(E)},state:s,steps:u}}const{schedule:We,cancel:or,state:Lt,steps:vp}=$j(typeof requestAnimationFrame<"u"?requestAnimationFrame:Rt,!0),Pj=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,E$=1e-7,_$=12;function T$(e,t,n,i,s){let l,u,f=0;do u=t+(n-t)/2,l=Pj(u,i,s)-e,l>0?n=u:t=u;while(Math.abs(l)>E$&&++f<_$);return u}function Ya(e,t,n,i){if(e===t&&n===i)return Rt;const s=l=>T$(l,0,1,e,n);return l=>l===0||l===1?l:Pj(s(l),t,i)}const Ej=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,_j=e=>t=>1-e(1-t),Tj=Ya(.33,1.53,.69,.99),Ag=_j(Tj),Dj=Ej(Ag),Oj=e=>(e*=2)<1?.5*Ag(e):.5*(2-Math.pow(2,-10*(e-1))),Lg=e=>1-Math.sin(Math.acos(e)),Mj=_j(Lg),Aj=Ej(Lg),Lj=e=>/^0[^.\s]+$/u.test(e);function D$(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Lj(e):!0}const zj=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Rj=e=>t=>typeof t=="string"&&t.startsWith(e),Nj=Rj("--"),O$=Rj("var(--"),zg=e=>O$(e)?M$.test(e.split("/*")[0].trim()):!1,M$=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,A$=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function L$(e){const t=A$.exec(e);if(!t)return[,];const[,n,i,s]=t;return[`--${n??i}`,s]}function Ij(e,t,n=1){const[i,s]=L$(e);if(!i)return;const l=window.getComputedStyle(t).getPropertyValue(i);if(l){const u=l.trim();return zj(u)?parseFloat(u):u}return zg(s)?Ij(s,t,n+1):s}const Cr=(e,t,n)=>n>t?t:n<e?e:n,ds={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},La={...ds,transform:e=>Cr(0,1,e)},yc={...ds,default:1},Ga=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),so=Ga("deg"),nr=Ga("%"),Oe=Ga("px"),z$=Ga("vh"),R$=Ga("vw"),Sv={...nr,parse:e=>nr.parse(e)/100,transform:e=>nr.transform(e*100)},N$=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),kv=e=>e===ds||e===Oe,Cv=(e,t)=>parseFloat(e.split(", ")[t]),$v=(e,t)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const s=i.match(/^matrix3d\((.+)\)$/u);if(s)return Cv(s[1],t);{const l=i.match(/^matrix\((.+)\)$/u);return l?Cv(l[1],e):0}},I$=new Set(["x","y","z"]),F$=qa.filter(e=>!I$.has(e));function V$(e){const t=[];return F$.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const Xi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:$v(4,13),y:$v(5,14)};Xi.translateX=Xi.x;Xi.translateY=Xi.y;const Fj=e=>t=>t.test(e),B$={test:e=>e==="auto",parse:e=>e},Vj=[ds,Oe,nr,so,R$,z$,B$],Pv=e=>Vj.find(Fj(e)),Go=new Set;let Sm=!1,km=!1;function Bj(){if(km){const e=Array.from(Go).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const s=V$(i);s.length&&(n.set(i,s),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const s=n.get(i);s&&s.forEach(([l,u])=>{var f;(f=i.getValue(l))===null||f===void 0||f.set(u)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}km=!1,Sm=!1,Go.forEach(e=>e.complete()),Go.clear()}function Hj(){Go.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(km=!0)})}function H$(){Hj(),Bj()}class Rg{constructor(t,n,i,s,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=s,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Go.add(this),Sm||(Sm=!0,We.read(Hj),We.resolveKeyframes(Bj))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:s}=this;for(let l=0;l<t.length;l++)if(t[l]===null)if(l===0){const u=s==null?void 0:s.get(),f=t[t.length-1];if(u!==void 0)t[0]=u;else if(i&&n){const p=i.readValue(n,f);p!=null&&(t[0]=p)}t[0]===void 0&&(t[0]=f),s&&u===void 0&&s.set(t[0])}else t[l]=t[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Go.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Go.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Pa=e=>Math.round(e*1e5)/1e5,Ng=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function W$(e){return e==null}const U$=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Ig=(e,t)=>n=>!!(typeof n=="string"&&U$.test(n)&&n.startsWith(e)||t&&!W$(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wj=(e,t,n)=>i=>{if(typeof i!="string")return i;const[s,l,u,f]=i.match(Ng);return{[e]:parseFloat(s),[t]:parseFloat(l),[n]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},q$=e=>Cr(0,255,e),yp={...ds,transform:e=>Math.round(q$(e))},Uo={test:Ig("rgb","red"),parse:Wj("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+yp.transform(e)+", "+yp.transform(t)+", "+yp.transform(n)+", "+Pa(La.transform(i))+")"};function Y$(e){let t="",n="",i="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,i+=i,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Cm={test:Ig("#"),parse:Y$,transform:Uo.transform},Wi={test:Ig("hsl","hue"),parse:Wj("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+nr.transform(Pa(t))+", "+nr.transform(Pa(n))+", "+Pa(La.transform(i))+")"},Yt={test:e=>Uo.test(e)||Cm.test(e)||Wi.test(e),parse:e=>Uo.test(e)?Uo.parse(e):Wi.test(e)?Wi.parse(e):Cm.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Uo.transform(e):Wi.transform(e)},G$=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K$(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ng))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(G$))===null||n===void 0?void 0:n.length)||0)>0}const Uj="number",qj="color",Q$="var",Z$="var(",Ev="${}",X$=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function za(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},s=[];let l=0;const f=t.replace(X$,p=>(Yt.test(p)?(i.color.push(l),s.push(qj),n.push(Yt.parse(p))):p.startsWith(Z$)?(i.var.push(l),s.push(Q$),n.push(p)):(i.number.push(l),s.push(Uj),n.push(parseFloat(p))),++l,Ev)).split(Ev);return{values:n,split:f,indexes:i,types:s}}function Yj(e){return za(e).values}function Gj(e){const{split:t,types:n}=za(e),i=t.length;return s=>{let l="";for(let u=0;u<i;u++)if(l+=t[u],s[u]!==void 0){const f=n[u];f===Uj?l+=Pa(s[u]):f===qj?l+=Yt.transform(s[u]):l+=s[u]}return l}}const J$=e=>typeof e=="number"?0:e;function e6(e){const t=Yj(e);return Gj(e)(t.map(J$))}const ho={test:K$,parse:Yj,createTransformer:Gj,getAnimatableNone:e6},t6=new Set(["brightness","contrast","saturate","opacity"]);function n6(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Ng)||[];if(!i)return e;const s=n.replace(i,"");let l=t6.has(t)?1:0;return i!==n&&(l*=100),t+"("+l+s+")"}const r6=/\b([a-z-]*)\(.*?\)/gu,$m={...ho,getAnimatableNone:e=>{const t=e.match(r6);return t?t.map(n6).join(" "):e}},o6={borderWidth:Oe,borderTopWidth:Oe,borderRightWidth:Oe,borderBottomWidth:Oe,borderLeftWidth:Oe,borderRadius:Oe,radius:Oe,borderTopLeftRadius:Oe,borderTopRightRadius:Oe,borderBottomRightRadius:Oe,borderBottomLeftRadius:Oe,width:Oe,maxWidth:Oe,height:Oe,maxHeight:Oe,top:Oe,right:Oe,bottom:Oe,left:Oe,padding:Oe,paddingTop:Oe,paddingRight:Oe,paddingBottom:Oe,paddingLeft:Oe,margin:Oe,marginTop:Oe,marginRight:Oe,marginBottom:Oe,marginLeft:Oe,backgroundPositionX:Oe,backgroundPositionY:Oe},i6={rotate:so,rotateX:so,rotateY:so,rotateZ:so,scale:yc,scaleX:yc,scaleY:yc,scaleZ:yc,skew:so,skewX:so,skewY:so,distance:Oe,translateX:Oe,translateY:Oe,translateZ:Oe,x:Oe,y:Oe,z:Oe,perspective:Oe,transformPerspective:Oe,opacity:La,originX:Sv,originY:Sv,originZ:Oe},_v={...ds,transform:Math.round},Fg={...o6,...i6,zIndex:_v,size:Oe,fillOpacity:La,strokeOpacity:La,numOctaves:_v},s6={...Fg,color:Yt,backgroundColor:Yt,outlineColor:Yt,fill:Yt,stroke:Yt,borderColor:Yt,borderTopColor:Yt,borderRightColor:Yt,borderBottomColor:Yt,borderLeftColor:Yt,filter:$m,WebkitFilter:$m},Vg=e=>s6[e];function Kj(e,t){let n=Vg(e);return n!==$m&&(n=ho),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const a6=new Set(["auto","none","0"]);function l6(e,t,n){let i=0,s;for(;i<e.length&&!s;){const l=e[i];typeof l=="string"&&!a6.has(l)&&za(l).values.length&&(s=e[i]),i++}if(s&&n)for(const l of t)e[l]=Kj(n,s)}class Qj extends Rg{constructor(t,n,i,s,l){super(t,n,i,s,l,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let h=t[p];if(typeof h=="string"&&(h=h.trim(),zg(h))){const g=Ij(h,n.current);g!==void 0&&(t[p]=g),p===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!N$.has(i)||t.length!==2)return;const[s,l]=t,u=Pv(s),f=Pv(l);if(u!==f)if(kv(u)&&kv(f))for(let p=0;p<t.length;p++){const h=t[p];typeof h=="string"&&(t[p]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let s=0;s<t.length;s++)D$(t[s])&&i.push(s);i.length&&l6(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Xi[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(i,s).jump(s,!1)}measureEndState(){var t;const{element:n,name:i,unresolvedKeyframes:s}=this;if(!n||!n.current)return;const l=n.getValue(i);l&&l.jump(this.measuredOrigin,!1);const u=s.length-1,f=s[u];s[u]=Xi[i](n.measureViewportBox(),window.getComputedStyle(n.current)),f!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=f),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([p,h])=>{n.getValue(p).set(h)}),this.resolveNoneKeyframes()}}function Bg(e){return typeof e=="function"}let ad;function c6(){ad=void 0}const rr={now:()=>(ad===void 0&&rr.set(Lt.isProcessing||S$.useManualTiming?Lt.timestamp:performance.now()),ad),set:e=>{ad=e,queueMicrotask(c6)}},Tv=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ho.test(e)||e==="0")&&!e.startsWith("url("));function d6(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function u6(e,t,n,i){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const l=e[e.length-1],u=Tv(s,t),f=Tv(l,t);return!u||!f?!1:d6(e)||(n==="spring"||Bg(n))&&i}const f6=40;class Zj{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u="loop",...f}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=rr.now(),this.options={autoplay:t,delay:n,type:i,repeat:s,repeatDelay:l,repeatType:u,...f},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>f6?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&H$(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=rr.now(),this.hasAttemptedResolve=!0;const{name:i,type:s,velocity:l,delay:u,onComplete:f,onUpdate:p,isGenerator:h}=this.options;if(!h&&!u6(t,i,s,l))if(u)this.options.duration=0;else{p==null||p(Qd(t,this.options,n)),f==null||f(),this.resolveFinishedPromise();return}const g=this.initPlayback(t,n);g!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...g},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Jo=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i},Xj=(e,t,n=10)=>{let i="";const s=Math.max(Math.round(t/n),2);for(let l=0;l<s;l++)i+=e(Jo(0,s-1,l))+", ";return`linear(${i.substring(0,i.length-2)})`};function Hg(e,t){return t?e*(1e3/t):0}const p6=5;function Jj(e,t,n){const i=Math.max(t-p6,0);return Hg(n-e(i),t-i)}const yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},bp=.001;function h6({duration:e=yt.duration,bounce:t=yt.bounce,velocity:n=yt.velocity,mass:i=yt.mass}){let s,l,u=1-t;u=Cr(yt.minDamping,yt.maxDamping,u),e=Cr(yt.minDuration,yt.maxDuration,kr(e)),u<1?(s=h=>{const g=h*u,b=g*e,v=g-n,j=Pm(h,u),C=Math.exp(-b);return bp-v/j*C},l=h=>{const b=h*u*e,v=b*n+n,j=Math.pow(u,2)*Math.pow(h,2)*e,C=Math.exp(-b),k=Pm(Math.pow(h,2),u);return(-s(h)+bp>0?-1:1)*((v-j)*C)/k}):(s=h=>{const g=Math.exp(-h*e),b=(h-n)*e+1;return-bp+g*b},l=h=>{const g=Math.exp(-h*e),b=(n-h)*(e*e);return g*b});const f=5/e,p=g6(s,l,f);if(e=Sr(e),isNaN(p))return{stiffness:yt.stiffness,damping:yt.damping,duration:e};{const h=Math.pow(p,2)*i;return{stiffness:h,damping:u*2*Math.sqrt(i*h),duration:e}}}const m6=12;function g6(e,t,n){let i=n;for(let s=1;s<m6;s++)i=i-e(i)/t(i);return i}function Pm(e,t){return e*Math.sqrt(1-t*t)}const Em=2e4;function e5(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<Em;)t+=n,i=e.next(t);return t>=Em?1/0:t}const x6=["duration","bounce"],v6=["stiffness","damping","mass"];function Dv(e,t){return t.some(n=>e[n]!==void 0)}function y6(e){let t={velocity:yt.velocity,stiffness:yt.stiffness,damping:yt.damping,mass:yt.mass,isResolvedFromDuration:!1,...e};if(!Dv(e,v6)&&Dv(e,x6))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(n*1.2),s=i*i,l=2*Cr(.05,1,1-e.bounce)*Math.sqrt(s);t={...t,mass:yt.mass,stiffness:s,damping:l}}else{const n=h6(e);t={...t,...n,mass:yt.mass},t.isResolvedFromDuration=!0}return t}function t5(e=yt.visualDuration,t=yt.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:s}=n;const l=n.keyframes[0],u=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:p,damping:h,mass:g,duration:b,velocity:v,isResolvedFromDuration:j}=y6({...n,velocity:-kr(n.velocity||0)}),C=v||0,k=h/(2*Math.sqrt(p*g)),_=u-l,E=kr(Math.sqrt(p/g)),N=Math.abs(_)<5;i||(i=N?yt.restSpeed.granular:yt.restSpeed.default),s||(s=N?yt.restDelta.granular:yt.restDelta.default);let V;if(k<1){const M=Pm(E,k);V=F=>{const A=Math.exp(-k*E*F);return u-A*((C+k*E*_)/M*Math.sin(M*F)+_*Math.cos(M*F))}}else if(k===1)V=M=>u-Math.exp(-E*M)*(_+(C+E*_)*M);else{const M=E*Math.sqrt(k*k-1);V=F=>{const A=Math.exp(-k*E*F),R=Math.min(M*F,300);return u-A*((C+k*E*_)*Math.sinh(R)+M*_*Math.cosh(R))/M}}const B={calculatedDuration:j&&b||null,next:M=>{const F=V(M);if(j)f.done=M>=b;else{let A=0;k<1&&(A=M===0?Sr(C):Jj(V,M,F));const R=Math.abs(A)<=i,T=Math.abs(u-F)<=s;f.done=R&&T}return f.value=f.done?u:F,f},toString:()=>{const M=Math.min(e5(B),Em),F=Xj(A=>B.next(M*A).value,M,30);return M+"ms "+F}};return B}function Ov({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:u,min:f,max:p,restDelta:h=.5,restSpeed:g}){const b=e[0],v={done:!1,value:b},j=R=>f!==void 0&&R<f||p!==void 0&&R>p,C=R=>f===void 0?p:p===void 0||Math.abs(f-R)<Math.abs(p-R)?f:p;let k=n*t;const _=b+k,E=u===void 0?_:u(_);E!==_&&(k=E-b);const N=R=>-k*Math.exp(-R/i),V=R=>E+N(R),B=R=>{const T=N(R),D=V(R);v.done=Math.abs(T)<=h,v.value=v.done?E:D};let M,F;const A=R=>{j(v.value)&&(M=R,F=t5({keyframes:[v.value,C(v.value)],velocity:Jj(V,R,v.value),damping:s,stiffness:l,restDelta:h,restSpeed:g}))};return A(0),{calculatedDuration:null,next:R=>{let T=!1;return!F&&M===void 0&&(T=!0,B(R),A(R)),M!==void 0&&R>=M?F.next(R-M):(!T&&B(R),v)}}}const b6=Ya(.42,0,1,1),w6=Ya(0,0,.58,1),n5=Ya(.42,0,.58,1),j6=e=>Array.isArray(e)&&typeof e[0]!="number",Wg=e=>Array.isArray(e)&&typeof e[0]=="number",Mv={linear:Rt,easeIn:b6,easeInOut:n5,easeOut:w6,circIn:Lg,circInOut:Aj,circOut:Mj,backIn:Ag,backInOut:Dj,backOut:Tj,anticipate:Oj},Av=e=>{if(Wg(e)){jm(e.length===4);const[t,n,i,s]=e;return Ya(t,n,i,s)}else if(typeof e=="string")return jm(Mv[e]!==void 0),Mv[e];return e},S6=(e,t)=>n=>t(e(n)),uo=(...e)=>e.reduce(S6),mt=(e,t,n)=>e+(t-e)*n;function wp(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function k6({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let s=0,l=0,u=0;if(!t)s=l=u=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;s=wp(p,f,e+1/3),l=wp(p,f,e),u=wp(p,f,e-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:i}}function Pd(e,t){return n=>n>0?t:e}const jp=(e,t,n)=>{const i=e*e,s=n*(t*t-i)+i;return s<0?0:Math.sqrt(s)},C6=[Cm,Uo,Wi],$6=e=>C6.find(t=>t.test(e));function Lv(e){const t=$6(e);if(!t)return!1;let n=t.parse(e);return t===Wi&&(n=k6(n)),n}const zv=(e,t)=>{const n=Lv(e),i=Lv(t);if(!n||!i)return Pd(e,t);const s={...n};return l=>(s.red=jp(n.red,i.red,l),s.green=jp(n.green,i.green,l),s.blue=jp(n.blue,i.blue,l),s.alpha=mt(n.alpha,i.alpha,l),Uo.transform(s))},_m=new Set(["none","hidden"]);function P6(e,t){return _m.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function E6(e,t){return n=>mt(e,t,n)}function Ug(e){return typeof e=="number"?E6:typeof e=="string"?zg(e)?Pd:Yt.test(e)?zv:D6:Array.isArray(e)?r5:typeof e=="object"?Yt.test(e)?zv:_6:Pd}function r5(e,t){const n=[...e],i=n.length,s=e.map((l,u)=>Ug(l)(l,t[u]));return l=>{for(let u=0;u<i;u++)n[u]=s[u](l);return n}}function _6(e,t){const n={...e,...t},i={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(i[s]=Ug(e[s])(e[s],t[s]));return s=>{for(const l in i)n[l]=i[l](s);return n}}function T6(e,t){var n;const i=[],s={color:0,var:0,number:0};for(let l=0;l<t.values.length;l++){const u=t.types[l],f=e.indexes[u][s[u]],p=(n=e.values[f])!==null&&n!==void 0?n:0;i[l]=p,s[u]++}return i}const D6=(e,t)=>{const n=ho.createTransformer(t),i=za(e),s=za(t);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?_m.has(e)&&!s.values.length||_m.has(t)&&!i.values.length?P6(e,t):uo(r5(T6(i,s),s.values),n):Pd(e,t)};function o5(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?mt(e,t,n):Ug(e)(e,t)}function O6(e,t,n){const i=[],s=n||o5,l=e.length-1;for(let u=0;u<l;u++){let f=s(e[u],e[u+1]);if(t){const p=Array.isArray(t)?t[u]||Rt:t;f=uo(p,f)}i.push(f)}return i}function i5(e,t,{clamp:n=!0,ease:i,mixer:s}={}){const l=e.length;if(jm(l===t.length),l===1)return()=>t[0];if(l===2&&e[0]===e[1])return()=>t[1];e[0]>e[l-1]&&(e=[...e].reverse(),t=[...t].reverse());const u=O6(t,i,s),f=u.length,p=h=>{let g=0;if(f>1)for(;g<e.length-2&&!(h<e[g+1]);g++);const b=Jo(e[g],e[g+1],h);return u[g](b)};return n?h=>p(Cr(e[0],e[l-1],h)):p}function M6(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const s=Jo(0,t,i);e.push(mt(n,1,s))}}function s5(e){const t=[0];return M6(t,e.length-1),t}function A6(e,t){return e.map(n=>n*t)}function L6(e,t){return e.map(()=>t||n5).splice(0,e.length-1)}function Ed({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const s=j6(i)?i.map(Av):Av(i),l={done:!1,value:t[0]},u=A6(n&&n.length===t.length?n:s5(t),e),f=i5(u,t,{ease:Array.isArray(s)?s:L6(t,s)});return{calculatedDuration:e,next:p=>(l.value=f(p),l.done=p>=e,l)}}const z6=e=>{const t=({timestamp:n})=>e(n);return{start:()=>We.update(t,!0),stop:()=>or(t),now:()=>Lt.isProcessing?Lt.timestamp:rr.now()}},R6={decay:Ov,inertia:Ov,tween:Ed,keyframes:Ed,spring:t5},N6=e=>e/100;class qg extends Zj{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:p}=this.options;p&&p()};const{name:n,motionValue:i,element:s,keyframes:l}=this.options,u=(s==null?void 0:s.KeyframeResolver)||Rg,f=(p,h)=>this.onKeyframesResolved(p,h);this.resolver=new u(l,f,n,i,s),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:l,velocity:u=0}=this.options,f=Bg(n)?n:R6[n]||Ed;let p,h;f!==Ed&&typeof t[0]!="number"&&(p=uo(N6,o5(t[0],t[1])),t=[0,100]);const g=f({...this.options,keyframes:t});l==="mirror"&&(h=f({...this.options,keyframes:[...t].reverse(),velocity:-u})),g.calculatedDuration===null&&(g.calculatedDuration=e5(g));const{calculatedDuration:b}=g,v=b+s,j=v*(i+1)-s;return{generator:g,mirroredGenerator:h,mapPercentToKeyframes:p,calculatedDuration:b,resolvedDuration:v,totalDuration:j}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:i}=this;if(!i){const{keyframes:R}=this.options;return{done:!0,value:R[R.length-1]}}const{finalKeyframe:s,generator:l,mirroredGenerator:u,mapPercentToKeyframes:f,keyframes:p,calculatedDuration:h,totalDuration:g,resolvedDuration:b}=i;if(this.startTime===null)return l.next(0);const{delay:v,repeat:j,repeatType:C,repeatDelay:k,onUpdate:_}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-g/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const E=this.currentTime-v*(this.speed>=0?1:-1),N=this.speed>=0?E<0:E>g;this.currentTime=Math.max(E,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=g);let V=this.currentTime,B=l;if(j){const R=Math.min(this.currentTime,g)/b;let T=Math.floor(R),D=R%1;!D&&R>=1&&(D=1),D===1&&T--,T=Math.min(T,j+1),!!(T%2)&&(C==="reverse"?(D=1-D,k&&(D-=k/b)):C==="mirror"&&(B=u)),V=Cr(0,1,D)*b}const M=N?{done:!1,value:p[0]}:B.next(V);f&&(M.value=f(M.value));let{done:F}=M;!N&&h!==null&&(F=this.speed>=0?this.currentTime>=g:this.currentTime<=0);const A=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return A&&s!==void 0&&(M.value=Qd(p,this.options,s)),_&&_(M.value),A&&this.finish(),M}get duration(){const{resolved:t}=this;return t?kr(t.calculatedDuration):0}get time(){return kr(this.currentTime)}set time(t){t=Sr(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=kr(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=z6,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=t(l=>this.tick(l))),n&&n();const s=this.driver.now();this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=s):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const I6=new Set(["opacity","clipPath","filter","transform"]);function Yg(e){let t;return()=>(t===void 0&&(t=e()),t)}const F6={linearEasing:void 0};function V6(e,t){const n=Yg(e);return()=>{var i;return(i=F6[t])!==null&&i!==void 0?i:n()}}const _d=V6(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function a5(e){return!!(typeof e=="function"&&_d()||!e||typeof e=="string"&&(e in Tm||_d())||Wg(e)||Array.isArray(e)&&e.every(a5))}const ja=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,Tm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ja([0,.65,.55,1]),circOut:ja([.55,0,1,.45]),backIn:ja([.31,.01,.66,-.59]),backOut:ja([.33,1.53,.69,.99])};function l5(e,t){if(e)return typeof e=="function"&&_d()?Xj(e,t):Wg(e)?ja(e):Array.isArray(e)?e.map(n=>l5(n,t)||Tm.easeOut):Tm[e]}function B6(e,t,n,{delay:i=0,duration:s=300,repeat:l=0,repeatType:u="loop",ease:f="easeInOut",times:p}={}){const h={[t]:n};p&&(h.offset=p);const g=l5(f,s);return Array.isArray(g)&&(h.easing=g),e.animate(h,{delay:i,duration:s,easing:Array.isArray(g)?"linear":g,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}function Rv(e,t){e.timeline=t,e.onfinish=null}const H6=Yg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Td=10,W6=2e4;function U6(e){return Bg(e.type)||e.type==="spring"||!a5(e.ease)}function q6(e,t){const n=new qg({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:e[0]};const s=[];let l=0;for(;!i.done&&l<W6;)i=n.sample(l),s.push(i.value),l+=Td;return{times:void 0,keyframes:s,duration:l-Td,ease:"linear"}}const c5={anticipate:Oj,backInOut:Dj,circInOut:Aj};function Y6(e){return e in c5}class Nv extends Zj{constructor(t){super(t);const{name:n,motionValue:i,element:s,keyframes:l}=this.options;this.resolver=new Qj(l,(u,f)=>this.onKeyframesResolved(u,f),n,i,s),this.resolver.scheduleResolve()}initPlayback(t,n){var i;let{duration:s=300,times:l,ease:u,type:f,motionValue:p,name:h,startTime:g}=this.options;if(!(!((i=p.owner)===null||i===void 0)&&i.current))return!1;if(typeof u=="string"&&_d()&&Y6(u)&&(u=c5[u]),U6(this.options)){const{onComplete:v,onUpdate:j,motionValue:C,element:k,..._}=this.options,E=q6(t,_);t=E.keyframes,t.length===1&&(t[1]=t[0]),s=E.duration,l=E.times,u=E.ease,f="keyframes"}const b=B6(p.owner.current,h,t,{...this.options,duration:s,times:l,ease:u});return b.startTime=g??this.calcStartTime(),this.pendingTimeline?(Rv(b,this.pendingTimeline),this.pendingTimeline=void 0):b.onfinish=()=>{const{onComplete:v}=this.options;p.set(Qd(t,this.options,n)),v&&v(),this.cancel(),this.resolveFinishedPromise()},{animation:b,duration:s,times:l,type:f,ease:u,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return kr(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return kr(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Sr(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return Rt;const{animation:i}=n;Rv(i,t)}return Rt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:i,duration:s,type:l,ease:u,times:f}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:g,onComplete:b,element:v,...j}=this.options,C=new qg({...j,keyframes:i,duration:s,type:l,ease:u,times:f,isGenerator:!0}),k=Sr(this.time);h.setWithVelocity(C.sample(k-Td).value,C.sample(k).value,Td)}const{onStop:p}=this.options;p&&p(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:i,repeatDelay:s,repeatType:l,damping:u,type:f}=t;return H6()&&i&&I6.has(i)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!s&&l!=="mirror"&&u!==0&&f!=="inertia"}}const d5=Yg(()=>window.ScrollTimeline!==void 0);class G6{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,n){return Promise.all(this.animations).then(t).catch(n)}getAll(t){return this.animations[0][t]}setAll(t,n){for(let i=0;i<this.animations.length;i++)this.animations[i][t]=n}attachTimeline(t,n){const i=this.animations.map(s=>d5()&&s.attachTimeline?s.attachTimeline(t):n(s));return()=>{i.forEach((s,l)=>{s&&s(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function K6({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:s,repeat:l,repeatType:u,repeatDelay:f,from:p,elapsed:h,...g}){return!!Object.keys(g).length}const Gg=(e,t,n,i={},s,l)=>u=>{const f=Mg(i,e)||{},p=f.delay||i.delay||0;let{elapsed:h=0}=i;h=h-Sr(p);let g={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...f,delay:-h,onUpdate:v=>{t.set(v),f.onUpdate&&f.onUpdate(v)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:e,motionValue:t,element:l?void 0:s};K6(f)||(g={...g,...j$(e,g)}),g.duration&&(g.duration=Sr(g.duration)),g.repeatDelay&&(g.repeatDelay=Sr(g.repeatDelay)),g.from!==void 0&&(g.keyframes[0]=g.from);let b=!1;if((g.type===!1||g.duration===0&&!g.repeatDelay)&&(g.duration=0,g.delay===0&&(b=!0)),b&&!l&&t.get()!==void 0){const v=Qd(g.keyframes,f);if(v!==void 0)return We.update(()=>{g.onUpdate(v),g.onComplete()}),new G6([])}return!l&&Nv.supports(g)?new Nv(g):new qg(g)},Q6=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),Z6=e=>wm(e)?e[e.length-1]||0:e;function Kg(e,t){e.indexOf(t)===-1&&e.push(t)}function Qg(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Zg{constructor(){this.subscriptions=[]}add(t){return Kg(this.subscriptions,t),()=>Qg(this.subscriptions,t)}notify(t,n,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,i);else for(let l=0;l<s;l++){const u=this.subscriptions[l];u&&u(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Iv=30,X6=e=>!isNaN(parseFloat(e));class J6{constructor(t,n={}){this.version="11.13.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,s=!0)=>{const l=rr.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),s&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=rr.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=X6(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Zg);const i=this.events[t].add(n);return t==="change"?()=>{i(),We.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=rr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Iv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Iv);return Hg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function br(e,t){return new J6(e,t)}function e8(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,br(n))}function t8(e,t){const n=Kd(e,t);let{transitionEnd:i={},transition:s={},...l}=n||{};l={...l,...i};for(const u in l){const f=Z6(l[u]);e8(e,u,f)}}const Xg=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),n8="framerAppearId",u5="data-"+Xg(n8);function f5(e){return e.props[u5]}const Kt=e=>!!(e&&e.getVelocity);function r8(e){return!!(Kt(e)&&e.add)}function Dm(e,t){const n=e.getValue("willChange");if(r8(n))return n.add(t)}function o8({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function p5(e,t,{delay:n=0,transitionOverride:i,type:s}={}){var l;let{transition:u=e.getDefaultTransition(),transitionEnd:f,...p}=t;i&&(u=i);const h=[],g=s&&e.animationState&&e.animationState.getState()[s];for(const b in p){const v=e.getValue(b,(l=e.latestValues[b])!==null&&l!==void 0?l:null),j=p[b];if(j===void 0||g&&o8(g,b))continue;const C={delay:n,...Mg(u||{},b)};let k=!1;if(window.MotionHandoffAnimation){const E=f5(e);if(E){const N=window.MotionHandoffAnimation(E,b,We);N!==null&&(C.startTime=N,k=!0)}}Dm(e,b),v.start(Gg(b,v,j,e.shouldReduceMotion&&ti.has(b)?{type:!1}:C,e,k));const _=v.animation;_&&h.push(_)}return f&&Promise.all(h).then(()=>{We.update(()=>{f&&t8(e,f)})}),h}function Om(e,t,n={}){var i;const s=Kd(e,t,n.type==="exit"?(i=e.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(l=n.transitionOverride);const u=s?()=>Promise.all(p5(e,s,n)):()=>Promise.resolve(),f=e.variantChildren&&e.variantChildren.size?(h=0)=>{const{delayChildren:g=0,staggerChildren:b,staggerDirection:v}=l;return i8(e,t,g+h,b,v,n)}:()=>Promise.resolve(),{when:p}=l;if(p){const[h,g]=p==="beforeChildren"?[u,f]:[f,u];return h().then(()=>g())}else return Promise.all([u(),f(n.delay)])}function i8(e,t,n=0,i=0,s=1,l){const u=[],f=(e.variantChildren.size-1)*i,p=s===1?(h=0)=>h*i:(h=0)=>f-h*i;return Array.from(e.variantChildren).sort(s8).forEach((h,g)=>{h.notify("AnimationStart",t),u.push(Om(h,t,{...l,delay:n+p(g)}).then(()=>h.notify("AnimationComplete",t)))}),Promise.all(u)}function s8(e,t){return e.sortNodePosition(t)}function a8(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const s=t.map(l=>Om(e,l,n));i=Promise.all(s)}else if(typeof t=="string")i=Om(e,t,n);else{const s=typeof t=="function"?Kd(e,t,n.custom):t;i=Promise.all(p5(e,s,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}const l8=Og.length;function h5(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?h5(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<l8;n++){const i=Og[n],s=e.props[i];(Aa(s)||s===!1)&&(t[i]=s)}return t}const c8=[...Dg].reverse(),d8=Dg.length;function u8(e){return t=>Promise.all(t.map(({animation:n,options:i})=>a8(e,n,i)))}function f8(e){let t=u8(e),n=Fv(),i=!0;const s=p=>(h,g)=>{var b;const v=Kd(e,g,p==="exit"?(b=e.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(v){const{transition:j,transitionEnd:C,...k}=v;h={...h,...k,...C}}return h};function l(p){t=p(e)}function u(p){const{props:h}=e,g=h5(e.parent)||{},b=[],v=new Set;let j={},C=1/0;for(let _=0;_<d8;_++){const E=c8[_],N=n[E],V=h[E]!==void 0?h[E]:g[E],B=Aa(V),M=E===p?N.isActive:null;M===!1&&(C=_);let F=V===g[E]&&V!==h[E]&&B;if(F&&i&&e.manuallyAnimateOnMount&&(F=!1),N.protectedKeys={...j},!N.isActive&&M===null||!V&&!N.prevProp||Gd(V)||typeof V=="boolean")continue;const A=p8(N.prevProp,V);let R=A||E===p&&N.isActive&&!F&&B||_>C&&B,T=!1;const D=Array.isArray(V)?V:[V];let z=D.reduce(s(E),{});M===!1&&(z={});const{prevResolvedValues:H={}}=N,W={...H,...z},Y=$=>{R=!0,v.has($)&&(T=!0,v.delete($)),N.needsAnimating[$]=!0;const J=e.getValue($);J&&(J.liveStyle=!1)};for(const $ in W){const J=z[$],I=H[$];if(j.hasOwnProperty($))continue;let P=!1;wm(J)&&wm(I)?P=!Cj(J,I):P=J!==I,P?J!=null?Y($):v.add($):J!==void 0&&v.has($)?Y($):N.protectedKeys[$]=!0}N.prevProp=V,N.prevResolvedValues=z,N.isActive&&(j={...j,...z}),i&&e.blockInitialAnimation&&(R=!1),R&&(!(F&&A)||T)&&b.push(...D.map($=>({animation:$,options:{type:E}})))}if(v.size){const _={};v.forEach(E=>{const N=e.getBaseTarget(E),V=e.getValue(E);V&&(V.liveStyle=!0),_[E]=N??null}),b.push({animation:_})}let k=!!b.length;return i&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(k=!1),i=!1,k?t(b):Promise.resolve()}function f(p,h){var g;if(n[p].isActive===h)return Promise.resolve();(g=e.variantChildren)===null||g===void 0||g.forEach(v=>{var j;return(j=v.animationState)===null||j===void 0?void 0:j.setActive(p,h)}),n[p].isActive=h;const b=u(p);for(const v in n)n[v].protectedKeys={};return b}return{animateChanges:u,setActive:f,setAnimateFunction:l,getState:()=>n,reset:()=>{n=Fv(),i=!0}}}function p8(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Cj(t,e):!1}function Lo(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fv(){return{animate:Lo(!0),whileInView:Lo(),whileHover:Lo(),whileTap:Lo(),whileDrag:Lo(),whileFocus:Lo(),exit:Lo()}}class mo{constructor(t){this.isMounted=!1,this.node=t}update(){}}class h8 extends mo{constructor(t){super(t),t.animationState||(t.animationState=f8(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Gd(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let m8=0;class g8 extends mo{constructor(){super(...arguments),this.id=m8++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const x8={animation:{Feature:h8},exit:{Feature:g8}},In={x:!1,y:!1};function m5(){return In.x||In.y}function v8(e){return e==="x"||e==="y"?In[e]?null:(In[e]=!0,()=>{In[e]=!1}):In.x||In.y?null:(In.x=In.y=!0,()=>{In.x=In.y=!1})}const g5=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Ka(e){return{point:{x:e.pageX,y:e.pageY}}}const y8=e=>t=>g5(t)&&e(t,Ka(t));function wr(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function fo(e,t,n,i){return wr(e,t,y8(n),i)}const Vv=(e,t)=>Math.abs(e-t);function b8(e,t){const n=Vv(e.x,t.x),i=Vv(e.y,t.y);return Math.sqrt(n**2+i**2)}class x5{constructor(t,n,{transformPagePoint:i,contextWindow:s,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=kp(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,j=b8(b.offset,{x:0,y:0})>=3;if(!v&&!j)return;const{point:C}=b,{timestamp:k}=Lt;this.history.push({...C,timestamp:k});const{onStart:_,onMove:E}=this.handlers;v||(_&&_(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),E&&E(this.lastMoveEvent,b)},this.handlePointerMove=(b,v)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Sp(v,this.transformPagePoint),We.update(this.updatePoint,!0)},this.handlePointerUp=(b,v)=>{this.end();const{onEnd:j,onSessionEnd:C,resumeAnimation:k}=this.handlers;if(this.dragSnapToOrigin&&k&&k(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const _=kp(b.type==="pointercancel"?this.lastMoveEventInfo:Sp(v,this.transformPagePoint),this.history);this.startEvent&&j&&j(b,_),C&&C(b,_)},!g5(t))return;this.dragSnapToOrigin=l,this.handlers=n,this.transformPagePoint=i,this.contextWindow=s||window;const u=Ka(t),f=Sp(u,this.transformPagePoint),{point:p}=f,{timestamp:h}=Lt;this.history=[{...p,timestamp:h}];const{onSessionStart:g}=n;g&&g(t,kp(f,this.history)),this.removeListeners=uo(fo(this.contextWindow,"pointermove",this.handlePointerMove),fo(this.contextWindow,"pointerup",this.handlePointerUp),fo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),or(this.updatePoint)}}function Sp(e,t){return t?{point:t(e.point)}:e}function Bv(e,t){return{x:e.x-t.x,y:e.y-t.y}}function kp({point:e},t){return{point:e,delta:Bv(e,v5(t)),offset:Bv(e,w8(t)),velocity:j8(t,.1)}}function w8(e){return e[0]}function v5(e){return e[e.length-1]}function j8(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const s=v5(e);for(;n>=0&&(i=e[n],!(s.timestamp-i.timestamp>Sr(t)));)n--;if(!i)return{x:0,y:0};const l=kr(s.timestamp-i.timestamp);if(l===0)return{x:0,y:0};const u={x:(s.x-i.x)/l,y:(s.y-i.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function Ui(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}const y5=1e-4,S8=1-y5,k8=1+y5,b5=.01,C8=0-b5,$8=0+b5;function bn(e){return e.max-e.min}function P8(e,t,n){return Math.abs(e-t)<=n}function Hv(e,t,n,i=.5){e.origin=i,e.originPoint=mt(t.min,t.max,e.origin),e.scale=bn(n)/bn(t),e.translate=mt(n.min,n.max,e.origin)-e.originPoint,(e.scale>=S8&&e.scale<=k8||isNaN(e.scale))&&(e.scale=1),(e.translate>=C8&&e.translate<=$8||isNaN(e.translate))&&(e.translate=0)}function Ea(e,t,n,i){Hv(e.x,t.x,n.x,i?i.originX:void 0),Hv(e.y,t.y,n.y,i?i.originY:void 0)}function Wv(e,t,n){e.min=n.min+t.min,e.max=e.min+bn(t)}function E8(e,t,n){Wv(e.x,t.x,n.x),Wv(e.y,t.y,n.y)}function Uv(e,t,n){e.min=t.min-n.min,e.max=e.min+bn(t)}function _a(e,t,n){Uv(e.x,t.x,n.x),Uv(e.y,t.y,n.y)}function _8(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?mt(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?mt(n,e,i.max):Math.min(e,n)),e}function qv(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function T8(e,{top:t,left:n,bottom:i,right:s}){return{x:qv(e.x,n,s),y:qv(e.y,t,i)}}function Yv(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function D8(e,t){return{x:Yv(e.x,t.x),y:Yv(e.y,t.y)}}function O8(e,t){let n=.5;const i=bn(e),s=bn(t);return s>i?n=Jo(t.min,t.max-i,e.min):i>s&&(n=Jo(e.min,e.max-s,t.min)),Cr(0,1,n)}function M8(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Mm=.35;function A8(e=Mm){return e===!1?e=0:e===!0&&(e=Mm),{x:Gv(e,"left","right"),y:Gv(e,"top","bottom")}}function Gv(e,t,n){return{min:Kv(e,t),max:Kv(e,n)}}function Kv(e,t){return typeof e=="number"?e:e[t]||0}const Qv=()=>({translate:0,scale:1,origin:0,originPoint:0}),qi=()=>({x:Qv(),y:Qv()}),Zv=()=>({min:0,max:0}),St=()=>({x:Zv(),y:Zv()});function Tn(e){return[e("x"),e("y")]}function w5({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function L8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function z8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Cp(e){return e===void 0||e===1}function Am({scale:e,scaleX:t,scaleY:n}){return!Cp(e)||!Cp(t)||!Cp(n)}function Ho(e){return Am(e)||j5(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function j5(e){return Xv(e.x)||Xv(e.y)}function Xv(e){return e&&e!=="0%"}function Dd(e,t,n){const i=e-n,s=t*i;return n+s}function Jv(e,t,n,i,s){return s!==void 0&&(e=Dd(e,s,i)),Dd(e,n,i)+t}function Lm(e,t=0,n=1,i,s){e.min=Jv(e.min,t,n,i,s),e.max=Jv(e.max,t,n,i,s)}function S5(e,{x:t,y:n}){Lm(e.x,t.translate,t.scale,t.originPoint),Lm(e.y,n.translate,n.scale,n.originPoint)}const ey=.999999999999,ty=1.0000000000001;function R8(e,t,n,i=!1){const s=n.length;if(!s)return;t.x=t.y=1;let l,u;for(let f=0;f<s;f++){l=n[f],u=l.projectionDelta;const{visualElement:p}=l.options;p&&p.props.style&&p.props.style.display==="contents"||(i&&l.options.layoutScroll&&l.scroll&&l!==l.root&&Gi(e,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(t.x*=u.x.scale,t.y*=u.y.scale,S5(e,u)),i&&Ho(l.latestValues)&&Gi(e,l.latestValues))}t.x<ty&&t.x>ey&&(t.x=1),t.y<ty&&t.y>ey&&(t.y=1)}function Yi(e,t){e.min=e.min+t,e.max=e.max+t}function ny(e,t,n,i,s=.5){const l=mt(e.min,e.max,s);Lm(e,t,n,l,i)}function Gi(e,t){ny(e.x,t.x,t.scaleX,t.scale,t.originX),ny(e.y,t.y,t.scaleY,t.scale,t.originY)}function k5(e,t){return w5(z8(e.getBoundingClientRect(),t))}function N8(e,t,n){const i=k5(e,n),{scroll:s}=t;return s&&(Yi(i.x,s.offset.x),Yi(i.y,s.offset.y)),i}const C5=({current:e})=>e?e.ownerDocument.defaultView:null,I8=new WeakMap;class F8{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=St(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=g=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ka(g).point)},l=(g,b)=>{const{drag:v,dragPropagation:j,onDragStart:C}=this.getProps();if(v&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=v8(v),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tn(_=>{let E=this.getAxisMotionValue(_).get()||0;if(nr.test(E)){const{projection:N}=this.visualElement;if(N&&N.layout){const V=N.layout.layoutBox[_];V&&(E=bn(V)*(parseFloat(E)/100))}}this.originPoint[_]=E}),C&&We.postRender(()=>C(g,b)),Dm(this.visualElement,"transform");const{animationState:k}=this.visualElement;k&&k.setActive("whileDrag",!0)},u=(g,b)=>{const{dragPropagation:v,dragDirectionLock:j,onDirectionLock:C,onDrag:k}=this.getProps();if(!v&&!this.openDragLock)return;const{offset:_}=b;if(j&&this.currentDirection===null){this.currentDirection=V8(_),this.currentDirection!==null&&C&&C(this.currentDirection);return}this.updateAxis("x",b.point,_),this.updateAxis("y",b.point,_),this.visualElement.render(),k&&k(g,b)},f=(g,b)=>this.stop(g,b),p=()=>Tn(g=>{var b;return this.getAnimationState(g)==="paused"&&((b=this.getAxisMotionValue(g).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new x5(t,{onSessionStart:s,onStart:l,onMove:u,onSessionEnd:f,resumeAnimation:p},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:C5(this.visualElement)})}stop(t,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&We.postRender(()=>l(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:s}=this.getProps();if(!i||!bc(t,s,this.currentDirection))return;const l=this.getAxisMotionValue(t);let u=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(u=_8(u,this.constraints[t],this.elastic[t])),l.set(u)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,l=this.constraints;n&&Ui(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&s?this.constraints=T8(s.layoutBox,n):this.constraints=!1,this.elastic=A8(i),l!==this.constraints&&s&&this.constraints&&!this.hasMutatedConstraints&&Tn(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=M8(s.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Ui(t))return!1;const i=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const l=N8(i,s.root,this.visualElement.getTransformPagePoint());let u=D8(s.layout.layoutBox,l);if(n){const f=n(L8(u));this.hasMutatedConstraints=!!f,f&&(u=w5(f))}return u}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:s,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),p=this.constraints||{},h=Tn(g=>{if(!bc(g,n,this.currentDirection))return;let b=p&&p[g]||{};u&&(b={min:0,max:0});const v=s?200:1e6,j=s?40:1e7,C={type:"inertia",velocity:i?t[g]:0,bounceStiffness:v,bounceDamping:j,timeConstant:750,restDelta:1,restSpeed:10,...l,...b};return this.startAxisValueAnimation(g,C)});return Promise.all(h).then(f)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return Dm(this.visualElement,t),i.start(Gg(t,i,0,n,this.visualElement,!1))}stopAnimation(){Tn(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tn(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),s=i[n];return s||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){Tn(n=>{const{drag:i}=this.getProps();if(!bc(n,i,this.currentDirection))return;const{projection:s}=this.visualElement,l=this.getAxisMotionValue(n);if(s&&s.layout){const{min:u,max:f}=s.layout.layoutBox[n];l.set(t[n]-mt(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ui(n)||!i||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};Tn(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const p=f.get();s[u]=O8({min:p,max:p},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),Tn(u=>{if(!bc(u,t,null))return;const f=this.getAxisMotionValue(u),{min:p,max:h}=this.constraints[u];f.set(mt(p,h,s[u]))})}addListeners(){if(!this.visualElement.current)return;I8.set(this.visualElement,this);const t=this.visualElement.current,n=fo(t,"pointerdown",p=>{const{drag:h,dragListener:g=!0}=this.getProps();h&&g&&this.start(p)}),i=()=>{const{dragConstraints:p}=this.getProps();Ui(p)&&p.current&&(this.constraints=this.resolveRefConstraints())},{projection:s}=this.visualElement,l=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),We.read(i);const u=wr(window,"resize",()=>this.scalePositionWithinConstraints()),f=s.addEventListener("didUpdate",({delta:p,hasLayoutChanged:h})=>{this.isDragging&&h&&(Tn(g=>{const b=this.getAxisMotionValue(g);b&&(this.originPoint[g]+=p[g].translate,b.set(b.get()+p[g].translate))}),this.visualElement.render())});return()=>{u(),n(),l(),f&&f()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:s=!1,dragConstraints:l=!1,dragElastic:u=Mm,dragMomentum:f=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:s,dragConstraints:l,dragElastic:u,dragMomentum:f}}}function bc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function V8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class B8 extends mo{constructor(t){super(t),this.removeGroupControls=Rt,this.removeListeners=Rt,this.controls=new F8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Rt}unmount(){this.removeGroupControls(),this.removeListeners()}}const ry=e=>(t,n)=>{e&&We.postRender(()=>e(t,n))};class H8 extends mo{constructor(){super(...arguments),this.removePointerDownListener=Rt}onPointerDown(t){this.session=new x5(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:C5(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:s}=this.node.getProps();return{onSessionStart:ry(t),onStart:ry(n),onMove:i,onEnd:(l,u)=>{delete this.session,s&&We.postRender(()=>s(l,u))}}}mount(){this.removePointerDownListener=fo(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Zd=x.createContext(null);function W8(){const e=x.useContext(Zd);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:i}=e,s=x.useId();x.useEffect(()=>i(s),[]);const l=x.useCallback(()=>n&&n(s),[s,n]);return!t&&n?[!1,l]:[!0]}const Jg=x.createContext({}),$5=x.createContext({}),ld={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function oy(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ia={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(Oe.test(e))e=parseFloat(e);else return e;const n=oy(e,t.target.x),i=oy(e,t.target.y);return`${n}% ${i}%`}},U8={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,s=ho.parse(e);if(s.length>5)return i;const l=ho.createTransformer(e),u=typeof s[0]!="number"?1:0,f=n.x.scale*t.x,p=n.y.scale*t.y;s[0+u]/=f,s[1+u]/=p;const h=mt(f,p,.5);return typeof s[2+u]=="number"&&(s[2+u]/=h),typeof s[3+u]=="number"&&(s[3+u]/=h),l(s)}},Od={};function q8(e){Object.assign(Od,e)}const{schedule:e0,cancel:BX}=$j(queueMicrotask,!1);class Y8 extends x.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:s}=this.props,{projection:l}=t;q8(G8),l&&(n.group&&n.group.add(l),i&&i.register&&s&&i.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),ld.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:s,isPresent:l}=this.props,u=i.projection;return u&&(u.isPresent=l,s||t.layoutDependency!==n||n===void 0?u.willUpdate():this.safeToRemove(),t.isPresent!==l&&(l?u.promote():u.relegate()||We.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),e0.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:s}=t;s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),i&&i.deregister&&i.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function P5(e){const[t,n]=W8(),i=x.useContext(Jg);return r.jsx(Y8,{...e,layoutGroup:i,switchLayoutGroup:x.useContext($5),isPresent:t,safeToRemove:n})}const G8={borderRadius:{...ia,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ia,borderTopRightRadius:ia,borderBottomLeftRadius:ia,borderBottomRightRadius:ia,boxShadow:U8},E5=["TopLeft","TopRight","BottomLeft","BottomRight"],K8=E5.length,iy=e=>typeof e=="string"?parseFloat(e):e,sy=e=>typeof e=="number"||Oe.test(e);function Q8(e,t,n,i,s,l){s?(e.opacity=mt(0,n.opacity!==void 0?n.opacity:1,Z8(i)),e.opacityExit=mt(t.opacity!==void 0?t.opacity:1,0,X8(i))):l&&(e.opacity=mt(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let u=0;u<K8;u++){const f=`border${E5[u]}Radius`;let p=ay(t,f),h=ay(n,f);if(p===void 0&&h===void 0)continue;p||(p=0),h||(h=0),p===0||h===0||sy(p)===sy(h)?(e[f]=Math.max(mt(iy(p),iy(h),i),0),(nr.test(h)||nr.test(p))&&(e[f]+="%")):e[f]=h}(t.rotate||n.rotate)&&(e.rotate=mt(t.rotate||0,n.rotate||0,i))}function ay(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Z8=_5(0,.5,Mj),X8=_5(.5,.95,Rt);function _5(e,t,n){return i=>i<e?0:i>t?1:n(Jo(e,t,i))}function ly(e,t){e.min=t.min,e.max=t.max}function _n(e,t){ly(e.x,t.x),ly(e.y,t.y)}function cy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function dy(e,t,n,i,s){return e-=t,e=Dd(e,1/n,i),s!==void 0&&(e=Dd(e,1/s,i)),e}function J8(e,t=0,n=1,i=.5,s,l=e,u=e){if(nr.test(t)&&(t=parseFloat(t),t=mt(u.min,u.max,t/100)-u.min),typeof t!="number")return;let f=mt(l.min,l.max,i);e===l&&(f-=t),e.min=dy(e.min,t,n,f,s),e.max=dy(e.max,t,n,f,s)}function uy(e,t,[n,i,s],l,u){J8(e,t[n],t[i],t[s],t.scale,l,u)}const e7=["x","scaleX","originX"],t7=["y","scaleY","originY"];function fy(e,t,n,i){uy(e.x,t,e7,n?n.x:void 0,i?i.x:void 0),uy(e.y,t,t7,n?n.y:void 0,i?i.y:void 0)}function py(e){return e.translate===0&&e.scale===1}function T5(e){return py(e.x)&&py(e.y)}function hy(e,t){return e.min===t.min&&e.max===t.max}function n7(e,t){return hy(e.x,t.x)&&hy(e.y,t.y)}function my(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function D5(e,t){return my(e.x,t.x)&&my(e.y,t.y)}function gy(e){return bn(e.x)/bn(e.y)}function xy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class r7{constructor(){this.members=[]}add(t){Kg(this.members,t),t.scheduleRender()}remove(t){if(Qg(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(s=>t===s);if(n===0)return!1;let i;for(let s=n;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1){i=l;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:s}=t.options;s===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function o7(e,t,n){let i="";const s=e.x.translate/t.x,l=e.y.translate/t.y,u=(n==null?void 0:n.z)||0;if((s||l||u)&&(i=`translate3d(${s}px, ${l}px, ${u}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:h,rotate:g,rotateX:b,rotateY:v,skewX:j,skewY:C}=n;h&&(i=`perspective(${h}px) ${i}`),g&&(i+=`rotate(${g}deg) `),b&&(i+=`rotateX(${b}deg) `),v&&(i+=`rotateY(${v}deg) `),j&&(i+=`skewX(${j}deg) `),C&&(i+=`skewY(${C}deg) `)}const f=e.x.scale*t.x,p=e.y.scale*t.y;return(f!==1||p!==1)&&(i+=`scale(${f}, ${p})`),i||"none"}const i7=(e,t)=>e.depth-t.depth;class s7{constructor(){this.children=[],this.isDirty=!1}add(t){Kg(this.children,t),this.isDirty=!0}remove(t){Qg(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(i7),this.isDirty=!1,this.children.forEach(t)}}function cd(e){const t=Kt(e)?e.get():e;return Q6(t)?t.toValue():t}function a7(e,t){const n=rr.now(),i=({timestamp:s})=>{const l=s-n;l>=t&&(or(i),e(l-t))};return We.read(i,!0),()=>or(i)}function l7(e){return e instanceof SVGElement&&e.tagName!=="svg"}function c7(e,t,n){const i=Kt(e)?e:br(e);return i.start(Gg("",i,t,n)),i.animation}const Wo={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Sa=typeof window<"u"&&window.MotionDebug!==void 0,$p=["","X","Y","Z"],d7={visibility:"hidden"},vy=1e3;let u7=0;function Pp(e,t,n,i){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),i&&(i[e]=0))}function O5(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=f5(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:l}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",We,!(s||l))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&O5(i)}function M5({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:s}){return class{constructor(u={},f=t==null?void 0:t()){this.id=u7++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Sa&&(Wo.totalNodes=Wo.resolvedTargetDeltas=Wo.recalculatedProjection=0),this.nodes.forEach(h7),this.nodes.forEach(y7),this.nodes.forEach(b7),this.nodes.forEach(m7),Sa&&window.MotionDebug.record(Wo)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new s7)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Zg),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const p=this.eventHandlers.get(u);p&&p.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,f=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=l7(u),this.instance=u;const{layoutId:p,layout:h,visualElement:g}=this.options;if(g&&!g.current&&g.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),f&&(h||p)&&(this.isLayoutDirty=!0),e){let b;const v=()=>this.root.updateBlockedByResize=!1;e(u,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=a7(v,250),ld.hasAnimatedSinceResize&&(ld.hasAnimatedSinceResize=!1,this.nodes.forEach(by))})}p&&this.root.registerSharedNode(p,this),this.options.animate!==!1&&g&&(p||h)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:v,hasRelativeTargetChanged:j,layout:C})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const k=this.options.transition||g.getDefaultTransition()||C7,{onLayoutAnimationStart:_,onLayoutAnimationComplete:E}=g.getProps(),N=!this.targetLayout||!D5(this.targetLayout,C)||j,V=!v&&j;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||V||v&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,V);const B={...Mg(k,"layout"),onPlay:_,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(B.delay=0,B.type=!1),this.startAnimation(B)}else v||by(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=C})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,or(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(w7),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&O5(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let g=0;g<this.path.length;g++){const b=this.path[g];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:f,layout:p}=this.options;if(f===void 0&&!p)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(yy);return}this.isUpdating||this.nodes.forEach(x7),this.isUpdating=!1,this.nodes.forEach(v7),this.nodes.forEach(f7),this.nodes.forEach(p7),this.clearAllSnapshots();const f=rr.now();Lt.delta=Cr(0,1e3/60,f-Lt.timestamp),Lt.timestamp=f,Lt.isProcessing=!0,vp.update.process(Lt),vp.preRender.process(Lt),vp.render.process(Lt),Lt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,e0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(g7),this.sharedNodes.forEach(j7)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,We.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){We.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=St(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f){const p=i(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:p,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!s)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!T5(this.projectionDelta),p=this.getTransformTemplate(),h=p?p(this.latestValues,""):void 0,g=h!==this.prevTransformTemplateValue;u&&(f||Ho(this.latestValues)||g)&&(s(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let p=this.removeElementScroll(f);return u&&(p=this.removeTransform(p)),$7(p),{animationId:this.root.animationId,measuredBox:f,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:f}=this.options;if(!f)return St();const p=f.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(P7))){const{scroll:g}=this.root;g&&(Yi(p.x,g.offset.x),Yi(p.y,g.offset.y))}return p}removeElementScroll(u){var f;const p=St();if(_n(p,u),!((f=this.scroll)===null||f===void 0)&&f.wasRoot)return p;for(let h=0;h<this.path.length;h++){const g=this.path[h],{scroll:b,options:v}=g;g!==this.root&&b&&v.layoutScroll&&(b.wasRoot&&_n(p,u),Yi(p.x,b.offset.x),Yi(p.y,b.offset.y))}return p}applyTransform(u,f=!1){const p=St();_n(p,u);for(let h=0;h<this.path.length;h++){const g=this.path[h];!f&&g.options.layoutScroll&&g.scroll&&g!==g.root&&Gi(p,{x:-g.scroll.offset.x,y:-g.scroll.offset.y}),Ho(g.latestValues)&&Gi(p,g.latestValues)}return Ho(this.latestValues)&&Gi(p,this.latestValues),p}removeTransform(u){const f=St();_n(f,u);for(let p=0;p<this.path.length;p++){const h=this.path[p];if(!h.instance||!Ho(h.latestValues))continue;Am(h.latestValues)&&h.updateSnapshot();const g=St(),b=h.measurePageBox();_n(g,b),fy(f,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,g)}return Ho(this.latestValues)&&fy(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Lt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var f;const p=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=p.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=p.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=p.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==p;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:v}=this.options;if(!(!this.layout||!(b||v))){if(this.resolvedRelativeTargetAt=Lt.timestamp,!this.targetDelta&&!this.relativeTarget){const j=this.getClosestProjectingParent();j&&j.layout&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),_a(this.relativeTargetOrigin,this.layout.layoutBox,j.layout.layoutBox),_n(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=St(),this.targetWithTransforms=St()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),E8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):_n(this.target,this.layout.layoutBox),S5(this.target,this.targetDelta)):_n(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const j=this.getClosestProjectingParent();j&&!!j.resumingFrom==!!this.resumingFrom&&!j.options.layoutScroll&&j.target&&this.animationProgress!==1?(this.relativeParent=j,this.forceRelativeParentToResolveTarget(),this.relativeTarget=St(),this.relativeTargetOrigin=St(),_a(this.relativeTargetOrigin,this.target,j.target),_n(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Sa&&Wo.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Am(this.parent.latestValues)||j5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const f=this.getLead(),p=!!this.resumingFrom||this!==f;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),p&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===Lt.timestamp&&(h=!1),h)return;const{layout:g,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||b))return;_n(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,j=this.treeScale.y;R8(this.layoutCorrected,this.treeScale,this.path,p),f.layout&&!f.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(f.target=f.layout.layoutBox,f.targetWithTransforms=St());const{target:C}=f;if(!C){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(cy(this.prevProjectionDelta.x,this.projectionDelta.x),cy(this.prevProjectionDelta.y,this.projectionDelta.y)),Ea(this.projectionDelta,this.layoutCorrected,C,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==j||!xy(this.projectionDelta.x,this.prevProjectionDelta.x)||!xy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",C)),Sa&&Wo.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)===null||f===void 0||f.scheduleRender(),u){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=qi(),this.projectionDelta=qi(),this.projectionDeltaWithTransform=qi()}setAnimationOrigin(u,f=!1){const p=this.snapshot,h=p?p.latestValues:{},g={...this.latestValues},b=qi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const v=St(),j=p?p.source:void 0,C=this.layout?this.layout.source:void 0,k=j!==C,_=this.getStack(),E=!_||_.members.length<=1,N=!!(k&&!E&&this.options.crossfade===!0&&!this.path.some(k7));this.animationProgress=0;let V;this.mixTargetDelta=B=>{const M=B/1e3;wy(b.x,u.x,M),wy(b.y,u.y,M),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(_a(v,this.layout.layoutBox,this.relativeParent.layout.layoutBox),S7(this.relativeTarget,this.relativeTargetOrigin,v,M),V&&n7(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=St()),_n(V,this.relativeTarget)),k&&(this.animationValues=g,Q8(g,h,this.latestValues,M,N,E)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(or(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=We.update(()=>{ld.hasAnimatedSinceResize=!0,this.currentAnimation=c7(0,vy,{...u,onUpdate:f=>{this.mixTargetDelta(f),u.onUpdate&&u.onUpdate(f)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(vy),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:p,layout:h,latestValues:g}=u;if(!(!f||!p||!h)){if(this!==u&&this.layout&&h&&A5(this.options.animationType,this.layout.layoutBox,h.layoutBox)){p=this.target||St();const b=bn(this.layout.layoutBox.x);p.x.min=u.target.x.min,p.x.max=p.x.min+b;const v=bn(this.layout.layoutBox.y);p.y.min=u.target.y.min,p.y.max=p.y.min+v}_n(f,p),Gi(f,g),Ea(this.projectionDeltaWithTransform,this.layoutCorrected,f,g)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new r7),this.sharedNodes.get(u).add(f);const h=f.options.initialPromotionConfig;f.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:f}=this.options;return f?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:f}=this.options;return f?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:p}={}){const h=this.getStack();h&&h.promote(this,p),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:p}=u;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(f=!0),!f)return;const h={};p.z&&Pp("z",u,h,this.animationValues);for(let g=0;g<$p.length;g++)Pp(`rotate${$p[g]}`,u,h,this.animationValues),Pp(`skew${$p[g]}`,u,h,this.animationValues);u.render();for(const g in h)u.setStaticValue(g,h[g]),this.animationValues&&(this.animationValues[g]=h[g]);u.scheduleRender()}getProjectionStyles(u){var f,p;if(!this.instance||this.isSVG)return;if(!this.isVisible)return d7;const h={visibility:""},g=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=cd(u==null?void 0:u.pointerEvents)||"",h.transform=g?g(this.latestValues,""):"none",h;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=cd(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ho(this.latestValues)&&(k.transform=g?g({},""):"none",this.hasProjected=!1),k}const v=b.animationValues||b.latestValues;this.applyTransformsToTarget(),h.transform=o7(this.projectionDeltaWithTransform,this.treeScale,v),g&&(h.transform=g(v,h.transform));const{x:j,y:C}=this.projectionDelta;h.transformOrigin=`${j.origin*100}% ${C.origin*100}% 0`,b.animationValues?h.opacity=b===this?(p=(f=v.opacity)!==null&&f!==void 0?f:this.latestValues.opacity)!==null&&p!==void 0?p:1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:h.opacity=b===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const k in Od){if(v[k]===void 0)continue;const{correct:_,applyTo:E}=Od[k],N=h.transform==="none"?v[k]:_(v[k],b);if(E){const V=E.length;for(let B=0;B<V;B++)h[E[B]]=N}else h[k]=N}return this.options.layoutId&&(h.pointerEvents=b===this?cd(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)===null||f===void 0?void 0:f.stop()}),this.root.nodes.forEach(yy),this.root.sharedNodes.clear()}}}function f7(e){e.updateLayout()}function p7(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:s}=e.layout,{animationType:l}=e.options,u=n.source!==e.layout.source;l==="size"?Tn(b=>{const v=u?n.measuredBox[b]:n.layoutBox[b],j=bn(v);v.min=i[b].min,v.max=v.min+j}):A5(l,n.layoutBox,i)&&Tn(b=>{const v=u?n.measuredBox[b]:n.layoutBox[b],j=bn(i[b]);v.max=v.min+j,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[b].max=e.relativeTarget[b].min+j)});const f=qi();Ea(f,i,n.layoutBox);const p=qi();u?Ea(p,e.applyTransform(s,!0),n.measuredBox):Ea(p,i,n.layoutBox);const h=!T5(f);let g=!1;if(!e.resumeFrom){const b=e.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:v,layout:j}=b;if(v&&j){const C=St();_a(C,n.layoutBox,v.layoutBox);const k=St();_a(k,i,j.layoutBox),D5(C,k)||(g=!0),b.options.layoutRoot&&(e.relativeTarget=k,e.relativeTargetOrigin=C,e.relativeParent=b)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:p,layoutDelta:f,hasLayoutChanged:h,hasRelativeTargetChanged:g})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function h7(e){Sa&&Wo.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function m7(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function g7(e){e.clearSnapshot()}function yy(e){e.clearMeasurements()}function x7(e){e.isLayoutDirty=!1}function v7(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function by(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function y7(e){e.resolveTargetDelta()}function b7(e){e.calcProjection()}function w7(e){e.resetSkewAndRotation()}function j7(e){e.removeLeadSnapshot()}function wy(e,t,n){e.translate=mt(t.translate,0,n),e.scale=mt(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function jy(e,t,n,i){e.min=mt(t.min,n.min,i),e.max=mt(t.max,n.max,i)}function S7(e,t,n,i){jy(e.x,t.x,n.x,i),jy(e.y,t.y,n.y,i)}function k7(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const C7={duration:.45,ease:[.4,0,.1,1]},Sy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ky=Sy("applewebkit/")&&!Sy("chrome/")?Math.round:Rt;function Cy(e){e.min=ky(e.min),e.max=ky(e.max)}function $7(e){Cy(e.x),Cy(e.y)}function A5(e,t,n){return e==="position"||e==="preserve-aspect"&&!P8(gy(t),gy(n),.2)}function P7(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const E7=M5({attachResizeListener:(e,t)=>wr(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ep={current:void 0},L5=M5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ep.current){const e=new E7({});e.mount(window),e.setOptions({layoutScroll:!0}),Ep.current=e}return Ep.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),_7={pan:{Feature:H8},drag:{Feature:B8,ProjectionNode:L5,MeasureLayout:P5}};function z5(e,t,n){var i;if(e instanceof Element)return[e];if(typeof e=="string"){let s=document;const l=(i=void 0)!==null&&i!==void 0?i:s.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e)}function $y(e){return t=>{t.pointerType==="touch"||m5()||e(t)}}function T7(e,t,n={}){const i=new AbortController,s={passive:!0,...n,signal:i.signal},l=$y(u=>{const{target:f}=u,p=t(u);if(!p||!f)return;const h=$y(g=>{p(g),f.removeEventListener("pointerleave",h)});f.addEventListener("pointerleave",h,s)});return z5(e).forEach(u=>{u.addEventListener("pointerenter",l,s)}),()=>i.abort()}function Py(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,l=i[s];l&&We.postRender(()=>l(t,Ka(t)))}class D7 extends mo{mount(){const{current:t}=this.node;t&&(this.unmount=T7(t,n=>(Py(this.node,n,"Start"),i=>Py(this.node,i,"End"))))}unmount(){}}class O7 extends mo{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=uo(wr(this.node.current,"focus",()=>this.onFocus()),wr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const R5=(e,t)=>t?e===t?!0:R5(e,t.parentElement):!1;function _p(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Ka(n))}class M7 extends mo{constructor(){super(...arguments),this.removeStartListeners=Rt,this.removeEndListeners=Rt,this.removeAccessibleListeners=Rt,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const i=this.node.getProps(),l=fo(window,"pointerup",(f,p)=>{if(!this.checkPressEnd())return;const{onTap:h,onTapCancel:g,globalTapTarget:b}=this.node.getProps(),v=!b&&!R5(this.node.current,f.target)?g:h;v&&We.update(()=>v(f,p))},{passive:!(i.onTap||i.onPointerUp)}),u=fo(window,"pointercancel",(f,p)=>this.cancelPress(f,p),{passive:!(i.onTapCancel||i.onPointerCancel)});this.removeEndListeners=uo(l,u),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=l=>{if(l.key!=="Enter"||this.isPressing)return;const u=f=>{f.key!=="Enter"||!this.checkPressEnd()||_p("up",(p,h)=>{const{onTap:g}=this.node.getProps();g&&We.postRender(()=>g(p,h))})};this.removeEndListeners(),this.removeEndListeners=wr(this.node.current,"keyup",u),_p("down",(f,p)=>{this.startPress(f,p)})},n=wr(this.node.current,"keydown",t),i=()=>{this.isPressing&&_p("cancel",(l,u)=>this.cancelPress(l,u))},s=wr(this.node.current,"blur",i);this.removeAccessibleListeners=uo(n,s)}}startPress(t,n){this.isPressing=!0;const{onTapStart:i,whileTap:s}=this.node.getProps();s&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),i&&We.postRender(()=>i(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!m5()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:i}=this.node.getProps();i&&We.postRender(()=>i(t,n))}mount(){const t=this.node.getProps(),n=fo(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),i=wr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=uo(n,i)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const zm=new WeakMap,Tp=new WeakMap,A7=e=>{const t=zm.get(e.target);t&&t(e)},L7=e=>{e.forEach(A7)};function z7({root:e,...t}){const n=e||document;Tp.has(n)||Tp.set(n,{});const i=Tp.get(n),s=JSON.stringify(t);return i[s]||(i[s]=new IntersectionObserver(L7,{root:e,...t})),i[s]}function R7(e,t,n){const i=z7(t);return zm.set(e,n),i.observe(e),()=>{zm.delete(e),i.unobserve(e)}}const N7={some:0,all:1};class I7 extends mo{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:s="some",once:l}=t,u={root:n?n.current:void 0,rootMargin:i,threshold:typeof s=="number"?s:N7[s]},f=p=>{const{isIntersecting:h}=p;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:g,onViewportLeave:b}=this.node.getProps(),v=h?g:b;v&&v(p)};return R7(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(F7(t,n))&&this.startObserver()}unmount(){}}function F7({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const V7={inView:{Feature:I7},tap:{Feature:M7},focus:{Feature:O7},hover:{Feature:D7}},B7={layout:{ProjectionNode:L5,MeasureLayout:P5}},t0=x.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Xd=x.createContext({}),n0=typeof window<"u",r0=n0?x.useLayoutEffect:x.useEffect,N5=x.createContext({strict:!1});function H7(e,t,n,i,s){var l,u;const{visualElement:f}=x.useContext(Xd),p=x.useContext(N5),h=x.useContext(Zd),g=x.useContext(t0).reducedMotion,b=x.useRef(null);i=i||p.renderer,!b.current&&i&&(b.current=i(e,{visualState:t,parent:f,props:n,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:g}));const v=b.current,j=x.useContext($5);v&&!v.projection&&s&&(v.type==="html"||v.type==="svg")&&W7(b.current,n,s,j);const C=x.useRef(!1);x.useInsertionEffect(()=>{v&&C.current&&v.update(n,h)});const k=n[u5],_=x.useRef(!!k&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,k))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,k)));return r0(()=>{v&&(C.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),e0.render(v.render),_.current&&v.animationState&&v.animationState.animateChanges())}),x.useEffect(()=>{v&&(!_.current&&v.animationState&&v.animationState.animateChanges(),_.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)===null||E===void 0||E.call(window,k)}),_.current=!1))}),v}function W7(e,t,n,i){const{layoutId:s,layout:l,drag:u,dragConstraints:f,layoutScroll:p,layoutRoot:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:I5(e.parent)),e.projection.setOptions({layoutId:s,layout:l,alwaysMeasureLayout:!!u||f&&Ui(f),visualElement:e,animationType:typeof l=="string"?l:"both",initialPromotionConfig:i,layoutScroll:p,layoutRoot:h})}function I5(e){if(e)return e.options.allowProjection!==!1?e.projection:I5(e.parent)}function U7(e,t,n){return x.useCallback(i=>{i&&e.mount&&e.mount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):Ui(n)&&(n.current=i))},[t])}function Jd(e){return Gd(e.animate)||Og.some(t=>Aa(e[t]))}function F5(e){return!!(Jd(e)||e.variants)}function q7(e,t){if(Jd(e)){const{initial:n,animate:i}=e;return{initial:n===!1||Aa(n)?n:void 0,animate:Aa(i)?i:void 0}}return e.inherit!==!1?t:{}}function Y7(e){const{initial:t,animate:n}=q7(e,x.useContext(Xd));return x.useMemo(()=>({initial:t,animate:n}),[Ey(t),Ey(n)])}function Ey(e){return Array.isArray(e)?e.join(" "):e}const _y={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ji={};for(const e in _y)Ji[e]={isEnabled:t=>_y[e].some(n=>!!t[n])};function G7(e){for(const t in e)Ji[t]={...Ji[t],...e[t]}}const K7=Symbol.for("motionComponentSymbol");function Q7({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:i,Component:s}){e&&G7(e);function l(f,p){let h;const g={...x.useContext(t0),...f,layoutId:Z7(f)},{isStatic:b}=g,v=Y7(f),j=i(f,b);if(!b&&n0){X7();const C=J7(g);h=C.MeasureLayout,v.visualElement=H7(s,j,g,t,C.ProjectionNode)}return r.jsxs(Xd.Provider,{value:v,children:[h&&v.visualElement?r.jsx(h,{visualElement:v.visualElement,...g}):null,n(s,f,U7(j,v.visualElement,p),j,b,v.visualElement)]})}const u=x.forwardRef(l);return u[K7]=s,u}function Z7({layoutId:e}){const t=x.useContext(Jg).id;return t&&e!==void 0?t+"-"+e:e}function X7(e,t){x.useContext(N5).strict}function J7(e){const{drag:t,layout:n}=Ji;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const eP=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function o0(e){return typeof e!="string"||e.includes("-")?!1:!!(eP.indexOf(e)>-1||/[A-Z]/u.test(e))}function V5(e,{style:t,vars:n},i,s){Object.assign(e.style,t,s&&s.getProjectionStyles(i));for(const l in n)e.style.setProperty(l,n[l])}const B5=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function H5(e,t,n,i){V5(e,t,void 0,i);for(const s in t.attrs)e.setAttribute(B5.has(s)?s:Xg(s),t.attrs[s])}function W5(e,{layout:t,layoutId:n}){return ti.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Od[e]||e==="opacity")}function i0(e,t,n){var i;const{style:s}=e,l={};for(const u in s)(Kt(s[u])||t.style&&Kt(t.style[u])||W5(u,e)||((i=n==null?void 0:n.getValue(u))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(l[u]=s[u]);return l}function U5(e,t,n){const i=i0(e,t,n);for(const s in e)if(Kt(e[s])||Kt(t[s])){const l=qa.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;i[l]=e[s]}return i}function eu(e){const t=x.useRef(null);return t.current===null&&(t.current=e()),t.current}function tP({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},i,s,l){const u={latestValues:nP(i,s,l,e),renderState:t()};return n&&(u.mount=f=>n(i,f,u)),u}const q5=e=>(t,n)=>{const i=x.useContext(Xd),s=x.useContext(Zd),l=()=>tP(e,t,i,s);return n?l():eu(l)};function nP(e,t,n,i){const s={},l=i(e,{});for(const v in l)s[v]=cd(l[v]);let{initial:u,animate:f}=e;const p=Jd(e),h=F5(e);t&&h&&!p&&e.inherit!==!1&&(u===void 0&&(u=t.initial),f===void 0&&(f=t.animate));let g=n?n.initial===!1:!1;g=g||u===!1;const b=g?f:u;if(b&&typeof b!="boolean"&&!Gd(b)){const v=Array.isArray(b)?b:[b];for(let j=0;j<v.length;j++){const C=Tg(e,v[j]);if(C){const{transitionEnd:k,transition:_,...E}=C;for(const N in E){let V=E[N];if(Array.isArray(V)){const B=g?V.length-1:0;V=V[B]}V!==null&&(s[N]=V)}for(const N in k)s[N]=k[N]}}}return s}const s0=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),Y5=()=>({...s0(),attrs:{}}),G5=(e,t)=>t&&typeof e=="number"?t.transform(e):e,rP={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oP=qa.length;function iP(e,t,n){let i="",s=!0;for(let l=0;l<oP;l++){const u=qa[l],f=e[u];if(f===void 0)continue;let p=!0;if(typeof f=="number"?p=f===(u.startsWith("scale")?1:0):p=parseFloat(f)===0,!p||n){const h=G5(f,Fg[u]);if(!p){s=!1;const g=rP[u]||u;i+=`${g}(${h}) `}n&&(t[u]=h)}}return i=i.trim(),n?i=n(t,s?"":i):s&&(i="none"),i}function a0(e,t,n){const{style:i,vars:s,transformOrigin:l}=e;let u=!1,f=!1;for(const p in t){const h=t[p];if(ti.has(p)){u=!0;continue}else if(Nj(p)){s[p]=h;continue}else{const g=G5(h,Fg[p]);p.startsWith("origin")?(f=!0,l[p]=g):i[p]=g}}if(t.transform||(u||n?i.transform=iP(t,e.transform,n):i.transform&&(i.transform="none")),f){const{originX:p="50%",originY:h="50%",originZ:g=0}=l;i.transformOrigin=`${p} ${h} ${g}`}}function Ty(e,t,n){return typeof e=="string"?e:Oe.transform(t+n*e)}function sP(e,t,n){const i=Ty(t,e.x,e.width),s=Ty(n,e.y,e.height);return`${i} ${s}`}const aP={offset:"stroke-dashoffset",array:"stroke-dasharray"},lP={offset:"strokeDashoffset",array:"strokeDasharray"};function cP(e,t,n=1,i=0,s=!0){e.pathLength=1;const l=s?aP:lP;e[l.offset]=Oe.transform(-i);const u=Oe.transform(t),f=Oe.transform(n);e[l.array]=`${u} ${f}`}function l0(e,{attrX:t,attrY:n,attrScale:i,originX:s,originY:l,pathLength:u,pathSpacing:f=1,pathOffset:p=0,...h},g,b){if(a0(e,h,b),g){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:v,style:j,dimensions:C}=e;v.transform&&(C&&(j.transform=v.transform),delete v.transform),C&&(s!==void 0||l!==void 0||j.transform)&&(j.transformOrigin=sP(C,s!==void 0?s:.5,l!==void 0?l:.5)),t!==void 0&&(v.x=t),n!==void 0&&(v.y=n),i!==void 0&&(v.scale=i),u!==void 0&&cP(v,u,f,p,!1)}const c0=e=>typeof e=="string"&&e.toLowerCase()==="svg",dP={useVisualState:q5({scrapeMotionValuesFromProps:U5,createRenderState:Y5,onMount:(e,t,{renderState:n,latestValues:i})=>{We.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),We.render(()=>{l0(n,i,c0(t.tagName),e.transformTemplate),H5(t,n)})}})},uP={useVisualState:q5({scrapeMotionValuesFromProps:i0,createRenderState:s0})};function K5(e,t,n){for(const i in t)!Kt(t[i])&&!W5(i,n)&&(e[i]=t[i])}function fP({transformTemplate:e},t){return x.useMemo(()=>{const n=s0();return a0(n,t,e),Object.assign({},n.vars,n.style)},[t])}function pP(e,t){const n=e.style||{},i={};return K5(i,n,e),Object.assign(i,fP(e,t)),i}function hP(e,t){const n={},i=pP(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const mP=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Md(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||mP.has(e)}let Q5=e=>!Md(e);function gP(e){e&&(Q5=t=>t.startsWith("on")?!Md(t):e(t))}try{gP(require("@emotion/is-prop-valid").default)}catch{}function xP(e,t,n){const i={};for(const s in e)s==="values"&&typeof e.values=="object"||(Q5(s)||n===!0&&Md(s)||!t&&!Md(s)||e.draggable&&s.startsWith("onDrag"))&&(i[s]=e[s]);return i}function vP(e,t,n,i){const s=x.useMemo(()=>{const l=Y5();return l0(l,t,c0(i),e.transformTemplate),{...l.attrs,style:{...l.style}}},[t]);if(e.style){const l={};K5(l,e.style,e),s.style={...l,...s.style}}return s}function yP(e=!1){return(n,i,s,{latestValues:l},u)=>{const p=(o0(n)?vP:hP)(i,l,u,n),h=xP(i,typeof n=="string",e),g=n!==x.Fragment?{...h,...p,ref:s}:{},{children:b}=i,v=x.useMemo(()=>Kt(b)?b.get():b,[b]);return x.createElement(n,{...g,children:v})}}function bP(e,t){return function(i,{forwardMotionProps:s}={forwardMotionProps:!1}){const u={...o0(i)?dP:uP,preloadedFeatures:e,useRender:yP(s),createVisualElement:t,Component:i};return Q7(u)}}const Rm={current:null},Z5={current:!1};function wP(){if(Z5.current=!0,!!n0)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Rm.current=e.matches;e.addListener(t),t()}else Rm.current=!1}function jP(e,t,n){for(const i in t){const s=t[i],l=n[i];if(Kt(s))e.addValue(i,s);else if(Kt(l))e.addValue(i,br(s,{owner:e}));else if(l!==s)if(e.hasValue(i)){const u=e.getValue(i);u.liveStyle===!0?u.jump(s):u.hasAnimated||u.set(s)}else{const u=e.getStaticValue(i);e.addValue(i,br(u!==void 0?u:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Dy=new WeakMap,SP=[...Vj,Yt,ho],kP=e=>SP.find(Fj(e)),Oy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class CP{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:s,blockInitialAnimation:l,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rg,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=rr.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,We.render(this.render,!1,!0))};const{latestValues:p,renderState:h}=u;this.latestValues=p,this.baseTarget={...p},this.initialValues=n.initial?{...p}:{},this.renderState=h,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.options=f,this.blockInitialAnimation=!!l,this.isControllingVariants=Jd(n),this.isVariantNode=F5(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:g,...b}=this.scrapeMotionValuesFromProps(n,{},this);for(const v in b){const j=b[v];p[v]!==void 0&&Kt(j)&&j.set(p[v],!1)}}mount(t){this.current=t,Dy.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),Z5.current||wP(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Rm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Dy.delete(this.current),this.projection&&this.projection.unmount(),or(this.notifyUpdate),or(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=ti.has(t),s=n.on("change",f=>{this.latestValues[t]=f,this.props.onUpdate&&We.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),l=n.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),l(),u&&u(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ji){const n=Ji[t];if(!n)continue;const{isEnabled:i,Feature:s}=n;if(!this.features[t]&&s&&i(this.props)&&(this.features[t]=new s(this)),this.features[t]){const l=this.features[t];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):St()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Oy.length;i++){const s=Oy[i];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const l="on"+s,u=t[l];u&&(this.propEventSubscriptions[s]=this.on(s,u))}this.prevMotionValues=jP(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=br(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){var i;let s=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(i=this.getBaseTargetFromProps(this.props,t))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,t,this.options);return s!=null&&(typeof s=="string"&&(zj(s)||Lj(s))?s=parseFloat(s):!kP(s)&&ho.test(n)&&(s=Kj(t,n)),this.setBaseTarget(t,Kt(s)?s.get():s)),Kt(s)?s.get():s}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const u=Tg(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);u&&(s=u[t])}if(i&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,t);return l!==void 0&&!Kt(l)?l:this.initialValues[t]!==void 0&&s===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Zg),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class X5 extends CP{constructor(){super(...arguments),this.KeyframeResolver=Qj}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Kt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function $P(e){return window.getComputedStyle(e)}class PP extends X5{constructor(){super(...arguments),this.type="html",this.renderInstance=V5}readValueFromInstance(t,n){if(ti.has(n)){const i=Vg(n);return i&&i.default||0}else{const i=$P(t),s=(Nj(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return k5(t,n)}build(t,n,i){a0(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return i0(t,n,i)}}class EP extends X5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=St}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(ti.has(n)){const i=Vg(n);return i&&i.default||0}return n=B5.has(n)?n:Xg(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return U5(t,n,i)}build(t,n,i){l0(t,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,i,s){H5(t,n,i,s)}mount(t){this.isSVGTag=c0(t.tagName),super.mount(t)}}const _P=(e,t)=>o0(e)?new EP(t):new PP(t,{allowProjection:e!==x.Fragment}),TP=bP({...x8,...V7,..._7,...B7},_P),J5=x$(TP);class DP extends x.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function OP({children:e,isPresent:t}){const n=x.useId(),i=x.useRef(null),s=x.useRef({width:0,height:0,top:0,left:0}),{nonce:l}=x.useContext(t0);return x.useInsertionEffect(()=>{const{width:u,height:f,top:p,left:h}=s.current;if(t||!i.current||!u||!f)return;i.current.dataset.motionPopId=n;const g=document.createElement("style");return l&&(g.nonce=l),document.head.appendChild(g),g.sheet&&g.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${f}px !important;
            top: ${p}px !important;
            left: ${h}px !important;
          }
        `),()=>{document.head.removeChild(g)}},[t]),r.jsx(DP,{isPresent:t,childRef:i,sizeRef:s,children:x.cloneElement(e,{ref:i})})}const MP=({children:e,initial:t,isPresent:n,onExitComplete:i,custom:s,presenceAffectsLayout:l,mode:u})=>{const f=eu(AP),p=x.useId(),h=x.useCallback(b=>{f.set(b,!0);for(const v of f.values())if(!v)return;i&&i()},[f,i]),g=x.useMemo(()=>({id:p,initial:t,isPresent:n,custom:s,onExitComplete:h,register:b=>(f.set(b,!1),()=>f.delete(b))}),l?[Math.random(),h]:[n,h]);return x.useMemo(()=>{f.forEach((b,v)=>f.set(v,!1))},[n]),x.useEffect(()=>{!n&&!f.size&&i&&i()},[n]),u==="popLayout"&&(e=r.jsx(OP,{isPresent:n,children:e})),r.jsx(Zd.Provider,{value:g,children:e})};function AP(){return new Map}const wc=e=>e.key||"";function My(e){const t=[];return x.Children.forEach(e,n=>{x.isValidElement(n)&&t.push(n)}),t}const LP=({children:e,exitBeforeEnter:t,custom:n,initial:i=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:u="sync"})=>{const f=x.useMemo(()=>My(e),[e]),p=f.map(wc),h=x.useRef(!0),g=x.useRef(f),b=eu(()=>new Map),[v,j]=x.useState(f),[C,k]=x.useState(f);r0(()=>{h.current=!1,g.current=f;for(let N=0;N<C.length;N++){const V=wc(C[N]);p.includes(V)?b.delete(V):b.get(V)!==!0&&b.set(V,!1)}},[C,p.length,p.join("-")]);const _=[];if(f!==v){let N=[...f];for(let V=0;V<C.length;V++){const B=C[V],M=wc(B);p.includes(M)||(N.splice(V,0,B),_.push(B))}u==="wait"&&_.length&&(N=_),k(My(N)),j(f);return}const{forceRender:E}=x.useContext(Jg);return r.jsx(r.Fragment,{children:C.map(N=>{const V=wc(N),B=f===C||p.includes(V),M=()=>{if(b.has(V))b.set(V,!0);else return;let F=!0;b.forEach(A=>{A||(F=!1)}),F&&(E==null||E(),k(g.current),s&&s())};return r.jsx(MP,{isPresent:B,initial:!h.current||i?void 0:!1,custom:B?void 0:n,presenceAffectsLayout:l,mode:u,onExitComplete:B?void 0:M,children:N},V)})})},dd=new WeakMap;let ao;function zP(e,t){if(t){const{inlineSize:n,blockSize:i}=t[0];return{width:n,height:i}}else return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function RP({target:e,contentRect:t,borderBoxSize:n}){var i;(i=dd.get(e))===null||i===void 0||i.forEach(s=>{s({target:e,contentSize:t,get size(){return zP(e,n)}})})}function NP(e){e.forEach(RP)}function IP(){typeof ResizeObserver>"u"||(ao=new ResizeObserver(NP))}function FP(e,t){ao||IP();const n=z5(e);return n.forEach(i=>{let s=dd.get(i);s||(s=new Set,dd.set(i,s)),s.add(t),ao==null||ao.observe(i)}),()=>{n.forEach(i=>{const s=dd.get(i);s==null||s.delete(t),s!=null&&s.size||ao==null||ao.unobserve(i)})}}const ud=new Set;let Ta;function VP(){Ta=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};ud.forEach(n=>n(t))},window.addEventListener("resize",Ta)}function BP(e){return ud.add(e),Ta||VP(),()=>{ud.delete(e),!ud.size&&Ta&&(Ta=void 0)}}function HP(e,t){return typeof e=="function"?BP(e):FP(e,t)}const WP=50,Ay=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),UP=()=>({time:0,x:Ay(),y:Ay()}),qP={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function Ly(e,t,n,i){const s=n[t],{length:l,position:u}=qP[t],f=s.current,p=n.time;s.current=e[`scroll${u}`],s.scrollLength=e[`scroll${l}`]-e[`client${l}`],s.offset.length=0,s.offset[0]=0,s.offset[1]=s.scrollLength,s.progress=Jo(0,s.scrollLength,s.current);const h=i-p;s.velocity=h>WP?0:Hg(s.current-f,h)}function YP(e,t,n){Ly(e,"x",t,n),Ly(e,"y",t,n),t.time=n}function GP(e,t){const n={x:0,y:0};let i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const s=i.getBoundingClientRect();i=i.parentElement;const l=i.getBoundingClientRect();n.x+=s.left-l.left,n.y+=s.top-l.top}else if(i instanceof SVGGraphicsElement){const{x:s,y:l}=i.getBBox();n.x+=s,n.y+=l;let u=null,f=i.parentNode;for(;!u;)f.tagName==="svg"&&(u=f),f=i.parentNode;i=u}else break;return n}const KP={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},Nm={start:0,center:.5,end:1};function zy(e,t,n=0){let i=0;if(e in Nm&&(e=Nm[e]),typeof e=="string"){const s=parseFloat(e);e.endsWith("px")?i=s:e.endsWith("%")?e=s/100:e.endsWith("vw")?i=s/100*document.documentElement.clientWidth:e.endsWith("vh")?i=s/100*document.documentElement.clientHeight:e=s}return typeof e=="number"&&(i=t*e),n+i}const QP=[0,0];function ZP(e,t,n,i){let s=Array.isArray(e)?e:QP,l=0,u=0;return typeof e=="number"?s=[e,e]:typeof e=="string"&&(e=e.trim(),e.includes(" ")?s=e.split(" "):s=[e,Nm[e]?e:"0"]),l=zy(s[0],n,i),u=zy(s[1],t),l-u}const XP={x:0,y:0};function JP(e){return"getBBox"in e&&e.tagName!=="svg"?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}function eE(e,t,n){const{offset:i=KP.All}=n,{target:s=e,axis:l="y"}=n,u=l==="y"?"height":"width",f=s!==e?GP(s,e):XP,p=s===e?{width:e.scrollWidth,height:e.scrollHeight}:JP(s),h={width:e.clientWidth,height:e.clientHeight};t[l].offset.length=0;let g=!t[l].interpolate;const b=i.length;for(let v=0;v<b;v++){const j=ZP(i[v],h[u],p[u],f[l]);!g&&j!==t[l].interpolatorOffsets[v]&&(g=!0),t[l].offset[v]=j}g&&(t[l].interpolate=i5(t[l].offset,s5(i)),t[l].interpolatorOffsets=[...t[l].offset]),t[l].progress=t[l].interpolate(t[l].current)}function tE(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}function nE(e,t,n,i={}){return{measure:()=>tE(e,i.target,n),update:s=>{YP(e,n,s),(i.offset||i.target)&&eE(e,n,i)},notify:()=>t(n)}}const sa=new WeakMap,Ry=new WeakMap,Dp=new WeakMap,Ny=e=>e===document.documentElement?window:e;function d0(e,{container:t=document.documentElement,...n}={}){let i=Dp.get(t);i||(i=new Set,Dp.set(t,i));const s=UP(),l=nE(t,e,s,n);if(i.add(l),!sa.has(t)){const f=()=>{for(const v of i)v.measure()},p=()=>{for(const v of i)v.update(Lt.timestamp)},h=()=>{for(const v of i)v.notify()},g=()=>{We.read(f,!1,!0),We.read(p,!1,!0),We.update(h,!1,!0)};sa.set(t,g);const b=Ny(t);window.addEventListener("resize",g,{passive:!0}),t!==document.documentElement&&Ry.set(t,HP(t,g)),b.addEventListener("scroll",g,{passive:!0})}const u=sa.get(t);return We.read(u,!1,!0),()=>{var f;or(u);const p=Dp.get(t);if(!p||(p.delete(l),p.size))return;const h=sa.get(t);sa.delete(t),h&&(Ny(t).removeEventListener("scroll",h),(f=Ry.get(t))===null||f===void 0||f(),window.removeEventListener("resize",h))}}function eS(e,t){let n;const i=()=>{const{currentTime:s}=t,u=(s===null?0:s.value)/100;n!==u&&e(u),n=u};return We.update(i,!0),()=>or(i)}function rE({source:e,container:t,axis:n="y"}){e&&(t=e);const i={value:0},s=d0(l=>{i.value=l[n].progress*100},{container:t,axis:n});return{currentTime:i,cancel:s}}const Op=new Map;function tS({source:e,container:t=document.documentElement,axis:n="y"}={}){e&&(t=e),Op.has(t)||Op.set(t,{});const i=Op.get(t);return i[n]||(i[n]=d5()?new ScrollTimeline({source:t,axis:n}):rE({source:t,axis:n})),i[n]}function oE(e){return e.length===2}function nS(e){return e&&(e.target||e.offset)}function iE(e,t){return oE(e)||nS(t)?d0(n=>{e(n[t.axis].progress,n)},t):eS(e,tS(t))}function sE(e,t){if(e.flatten(),nS(t))return e.pause(),d0(n=>{e.time=e.duration*n[t.axis].progress},t);{const n=tS(t);return e.attachTimeline?e.attachTimeline(n,i=>(i.pause(),eS(s=>{i.time=i.duration*s},n))):Rt}}function aE(e,{axis:t="y",...n}={}){const i={axis:t,...n};return typeof e=="function"?iE(e,i):sE(e,i)}function Iy(e,t){C$(!!(!t||t.current))}const lE=()=>({scrollX:br(0),scrollY:br(0),scrollXProgress:br(0),scrollYProgress:br(0)});function cE({container:e,target:t,layoutEffect:n=!0,...i}={}){const s=eu(lE);return(n?r0:x.useEffect)(()=>(Iy("target",t),Iy("container",e),aE((u,{x:f,y:p})=>{s.scrollX.set(f.current),s.scrollXProgress.set(f.progress),s.scrollY.set(p.current),s.scrollYProgress.set(p.progress)},{...i,container:(e==null?void 0:e.current)||void 0,target:(t==null?void 0:t.current)||void 0})),[e,t,JSON.stringify(i.offset)]),s}var ln=function(){return ln=Object.assign||function(t){for(var n,i=1,s=arguments.length;i<s;i++){n=arguments[i];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},ln.apply(this,arguments)};function Ra(e,t,n){if(n||arguments.length===2)for(var i=0,s=t.length,l;i<s;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))}var ot="-ms-",Da="-moz-",qe="-webkit-",rS="comm",tu="rule",u0="decl",dE="@import",oS="@keyframes",uE="@layer",iS=Math.abs,f0=String.fromCharCode,Im=Object.assign;function fE(e,t){return zt(e,0)^45?(((t<<2^zt(e,0))<<2^zt(e,1))<<2^zt(e,2))<<2^zt(e,3):0}function sS(e){return e.trim()}function yr(e,t){return(e=t.exec(e))?e[0]:e}function Ne(e,t,n){return e.replace(t,n)}function fd(e,t,n){return e.indexOf(t,n)}function zt(e,t){return e.charCodeAt(t)|0}function es(e,t,n){return e.slice(t,n)}function tr(e){return e.length}function aS(e){return e.length}function ka(e,t){return t.push(e),e}function pE(e,t){return e.map(t).join("")}function Fy(e,t){return e.filter(function(n){return!yr(n,t)})}var nu=1,ts=1,lS=0,Dn=0,Et=0,us="";function ru(e,t,n,i,s,l,u,f){return{value:e,root:t,parent:n,type:i,props:s,children:l,line:nu,column:ts,length:u,return:"",siblings:f}}function lo(e,t){return Im(ru("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Ri(e){for(;e.root;)e=lo(e.root,{children:[e]});ka(e,e.siblings)}function hE(){return Et}function mE(){return Et=Dn>0?zt(us,--Dn):0,ts--,Et===10&&(ts=1,nu--),Et}function Fn(){return Et=Dn<lS?zt(us,Dn++):0,ts++,Et===10&&(ts=1,nu++),Et}function Ko(){return zt(us,Dn)}function pd(){return Dn}function ou(e,t){return es(us,e,t)}function Fm(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gE(e){return nu=ts=1,lS=tr(us=e),Dn=0,[]}function xE(e){return us="",e}function Mp(e){return sS(ou(Dn-1,Vm(e===91?e+2:e===40?e+1:e)))}function vE(e){for(;(Et=Ko())&&Et<33;)Fn();return Fm(e)>2||Fm(Et)>3?"":" "}function yE(e,t){for(;--t&&Fn()&&!(Et<48||Et>102||Et>57&&Et<65||Et>70&&Et<97););return ou(e,pd()+(t<6&&Ko()==32&&Fn()==32))}function Vm(e){for(;Fn();)switch(Et){case e:return Dn;case 34:case 39:e!==34&&e!==39&&Vm(Et);break;case 40:e===41&&Vm(e);break;case 92:Fn();break}return Dn}function bE(e,t){for(;Fn()&&e+Et!==57;)if(e+Et===84&&Ko()===47)break;return"/*"+ou(t,Dn-1)+"*"+f0(e===47?e:Fn())}function wE(e){for(;!Fm(Ko());)Fn();return ou(e,Dn)}function jE(e){return xE(hd("",null,null,null,[""],e=gE(e),0,[0],e))}function hd(e,t,n,i,s,l,u,f,p){for(var h=0,g=0,b=u,v=0,j=0,C=0,k=1,_=1,E=1,N=0,V="",B=s,M=l,F=i,A=V;_;)switch(C=N,N=Fn()){case 40:if(C!=108&&zt(A,b-1)==58){fd(A+=Ne(Mp(N),"&","&\f"),"&\f",iS(h?f[h-1]:0))!=-1&&(E=-1);break}case 34:case 39:case 91:A+=Mp(N);break;case 9:case 10:case 13:case 32:A+=vE(C);break;case 92:A+=yE(pd()-1,7);continue;case 47:switch(Ko()){case 42:case 47:ka(SE(bE(Fn(),pd()),t,n,p),p);break;default:A+="/"}break;case 123*k:f[h++]=tr(A)*E;case 125*k:case 59:case 0:switch(N){case 0:case 125:_=0;case 59+g:E==-1&&(A=Ne(A,/\f/g,"")),j>0&&tr(A)-b&&ka(j>32?By(A+";",i,n,b-1,p):By(Ne(A," ","")+";",i,n,b-2,p),p);break;case 59:A+=";";default:if(ka(F=Vy(A,t,n,h,g,s,f,V,B=[],M=[],b,l),l),N===123)if(g===0)hd(A,t,F,F,B,l,b,f,M);else switch(v===99&&zt(A,3)===110?100:v){case 100:case 108:case 109:case 115:hd(e,F,F,i&&ka(Vy(e,F,F,0,0,s,f,V,s,B=[],b,M),M),s,M,b,f,i?B:M);break;default:hd(A,F,F,F,[""],M,0,f,M)}}h=g=j=0,k=E=1,V=A="",b=u;break;case 58:b=1+tr(A),j=C;default:if(k<1){if(N==123)--k;else if(N==125&&k++==0&&mE()==125)continue}switch(A+=f0(N),N*k){case 38:E=g>0?1:(A+="\f",-1);break;case 44:f[h++]=(tr(A)-1)*E,E=1;break;case 64:Ko()===45&&(A+=Mp(Fn())),v=Ko(),g=b=tr(V=A+=wE(pd())),N++;break;case 45:C===45&&tr(A)==2&&(k=0)}}return l}function Vy(e,t,n,i,s,l,u,f,p,h,g,b){for(var v=s-1,j=s===0?l:[""],C=aS(j),k=0,_=0,E=0;k<i;++k)for(var N=0,V=es(e,v+1,v=iS(_=u[k])),B=e;N<C;++N)(B=sS(_>0?j[N]+" "+V:Ne(V,/&\f/g,j[N])))&&(p[E++]=B);return ru(e,t,n,s===0?tu:f,p,h,g,b)}function SE(e,t,n,i){return ru(e,t,n,rS,f0(hE()),es(e,2,-2),0,i)}function By(e,t,n,i,s){return ru(e,t,n,u0,es(e,0,i),es(e,i+1,-1),i,s)}function cS(e,t,n){switch(fE(e,t)){case 5103:return qe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return qe+e+e;case 4789:return Da+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return qe+e+Da+e+ot+e+e;case 5936:switch(zt(e,t+11)){case 114:return qe+e+ot+Ne(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return qe+e+ot+Ne(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return qe+e+ot+Ne(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return qe+e+ot+e+e;case 6165:return qe+e+ot+"flex-"+e+e;case 5187:return qe+e+Ne(e,/(\w+).+(:[^]+)/,qe+"box-$1$2"+ot+"flex-$1$2")+e;case 5443:return qe+e+ot+"flex-item-"+Ne(e,/flex-|-self/g,"")+(yr(e,/flex-|baseline/)?"":ot+"grid-row-"+Ne(e,/flex-|-self/g,""))+e;case 4675:return qe+e+ot+"flex-line-pack"+Ne(e,/align-content|flex-|-self/g,"")+e;case 5548:return qe+e+ot+Ne(e,"shrink","negative")+e;case 5292:return qe+e+ot+Ne(e,"basis","preferred-size")+e;case 6060:return qe+"box-"+Ne(e,"-grow","")+qe+e+ot+Ne(e,"grow","positive")+e;case 4554:return qe+Ne(e,/([^-])(transform)/g,"$1"+qe+"$2")+e;case 6187:return Ne(Ne(Ne(e,/(zoom-|grab)/,qe+"$1"),/(image-set)/,qe+"$1"),e,"")+e;case 5495:case 3959:return Ne(e,/(image-set\([^]*)/,qe+"$1$`$1");case 4968:return Ne(Ne(e,/(.+:)(flex-)?(.*)/,qe+"box-pack:$3"+ot+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+qe+e+e;case 4200:if(!yr(e,/flex-|baseline/))return ot+"grid-column-align"+es(e,t)+e;break;case 2592:case 3360:return ot+Ne(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,s){return t=s,yr(i.props,/grid-\w+-end/)})?~fd(e+(n=n[t].value),"span",0)?e:ot+Ne(e,"-start","")+e+ot+"grid-row-span:"+(~fd(n,"span",0)?yr(n,/\d+/):+yr(n,/\d+/)-+yr(e,/\d+/))+";":ot+Ne(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return yr(i.props,/grid-\w+-start/)})?e:ot+Ne(Ne(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ne(e,/(.+)-inline(.+)/,qe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(tr(e)-1-t>6)switch(zt(e,t+1)){case 109:if(zt(e,t+4)!==45)break;case 102:return Ne(e,/(.+:)(.+)-([^]+)/,"$1"+qe+"$2-$3$1"+Da+(zt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~fd(e,"stretch",0)?cS(Ne(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ne(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,s,l,u,f,p,h){return ot+s+":"+l+h+(u?ot+s+"-span:"+(f?p:+p-+l)+h:"")+e});case 4949:if(zt(e,t+6)===121)return Ne(e,":",":"+qe)+e;break;case 6444:switch(zt(e,zt(e,14)===45?18:11)){case 120:return Ne(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+qe+(zt(e,14)===45?"inline-":"")+"box$3$1"+qe+"$2$3$1"+ot+"$2box$3")+e;case 100:return Ne(e,":",":"+ot)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ne(e,"scroll-","scroll-snap-")+e}return e}function Ad(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function kE(e,t,n,i){switch(e.type){case uE:if(e.children.length)break;case dE:case u0:return e.return=e.return||e.value;case rS:return"";case oS:return e.return=e.value+"{"+Ad(e.children,i)+"}";case tu:if(!tr(e.value=e.props.join(",")))return""}return tr(n=Ad(e.children,i))?e.return=e.value+"{"+n+"}":""}function CE(e){var t=aS(e);return function(n,i,s,l){for(var u="",f=0;f<t;f++)u+=e[f](n,i,s,l)||"";return u}}function $E(e){return function(t){t.root||(t=t.return)&&e(t)}}function PE(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case u0:e.return=cS(e.value,e.length,n);return;case oS:return Ad([lo(e,{value:Ne(e.value,"@","@"+qe)})],i);case tu:if(e.length)return pE(n=e.props,function(s){switch(yr(s,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ri(lo(e,{props:[Ne(s,/:(read-\w+)/,":"+Da+"$1")]})),Ri(lo(e,{props:[s]})),Im(e,{props:Fy(n,i)});break;case"::placeholder":Ri(lo(e,{props:[Ne(s,/:(plac\w+)/,":"+qe+"input-$1")]})),Ri(lo(e,{props:[Ne(s,/:(plac\w+)/,":"+Da+"$1")]})),Ri(lo(e,{props:[Ne(s,/:(plac\w+)/,ot+"input-$1")]})),Ri(lo(e,{props:[s]})),Im(e,{props:Fy(n,i)});break}return""})}}var EE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xn={},ns=typeof process<"u"&&xn!==void 0&&(xn.REACT_APP_SC_ATTR||xn.SC_ATTR)||"data-styled",dS="active",uS="data-styled-version",iu="6.1.13",p0=`/*!sc*/
`,Ld=typeof window<"u"&&"HTMLElement"in window,_E=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&xn.REACT_APP_SC_DISABLE_SPEEDY!==""?xn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&xn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&xn!==void 0&&xn.SC_DISABLE_SPEEDY!==void 0&&xn.SC_DISABLE_SPEEDY!==""&&xn.SC_DISABLE_SPEEDY!=="false"&&xn.SC_DISABLE_SPEEDY),su=Object.freeze([]),rs=Object.freeze({});function TE(e,t,n){return n===void 0&&(n=rs),e.theme!==n.theme&&e.theme||t||n.theme}var fS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),DE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,OE=/(^-|-$)/g;function Hy(e){return e.replace(DE,"-").replace(OE,"")}var ME=/(a)(d)/gi,jc=52,Wy=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bm(e){var t,n="";for(t=Math.abs(e);t>jc;t=t/jc|0)n=Wy(t%jc)+n;return(Wy(t%jc)+n).replace(ME,"$1-$2")}var Ap,pS=5381,Ki=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hS=function(e){return Ki(pS,e)};function mS(e){return Bm(hS(e)>>>0)}function AE(e){return e.displayName||e.name||"Component"}function Lp(e){return typeof e=="string"&&!0}var gS=typeof Symbol=="function"&&Symbol.for,xS=gS?Symbol.for("react.memo"):60115,LE=gS?Symbol.for("react.forward_ref"):60112,zE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},RE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},vS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},NE=((Ap={})[LE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ap[xS]=vS,Ap);function Uy(e){return("type"in(t=e)&&t.type.$$typeof)===xS?vS:"$$typeof"in e?NE[e.$$typeof]:zE;var t}var IE=Object.defineProperty,FE=Object.getOwnPropertyNames,qy=Object.getOwnPropertySymbols,VE=Object.getOwnPropertyDescriptor,BE=Object.getPrototypeOf,Yy=Object.prototype;function yS(e,t,n){if(typeof t!="string"){if(Yy){var i=BE(t);i&&i!==Yy&&yS(e,i,n)}var s=FE(t);qy&&(s=s.concat(qy(t)));for(var l=Uy(e),u=Uy(t),f=0;f<s.length;++f){var p=s[f];if(!(p in RE||n&&n[p]||u&&p in u||l&&p in l)){var h=VE(t,p);try{IE(e,p,h)}catch{}}}}return e}function os(e){return typeof e=="function"}function h0(e){return typeof e=="object"&&"styledComponentId"in e}function qo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Hm(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=e[i];return n}function Na(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Wm(e,t,n){if(n===void 0&&(n=!1),!n&&!Na(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Wm(e[i],t[i]);else if(Na(t))for(var i in t)e[i]=Wm(e[i],t[i]);return e}function m0(e,t){Object.defineProperty(e,"toString",{value:t})}function Qa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var HE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,l=s;t>=l;)if((l<<=1)<0)throw Qa(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var u=s;u<l;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(t+1),p=(u=0,n.length);u<p;u++)this.tag.insertRule(f,n[u])&&(this.groupSizes[t]++,f++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),s=i+n;this.groupSizes[t]=0;for(var l=i;l<s;l++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],s=this.indexOfGroup(t),l=s+i,u=s;u<l;u++)n+="".concat(this.tag.getRule(u)).concat(p0);return n},e}(),md=new Map,zd=new Map,gd=1,Sc=function(e){if(md.has(e))return md.get(e);for(;zd.has(gd);)gd++;var t=gd++;return md.set(e,t),zd.set(t,e),t},WE=function(e,t){gd=t+1,md.set(e,t),zd.set(t,e)},UE="style[".concat(ns,"][").concat(uS,'="').concat(iu,'"]'),qE=new RegExp("^".concat(ns,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),YE=function(e,t,n){for(var i,s=n.split(","),l=0,u=s.length;l<u;l++)(i=s[l])&&e.registerName(t,i)},GE=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(p0),s=[],l=0,u=i.length;l<u;l++){var f=i[l].trim();if(f){var p=f.match(qE);if(p){var h=0|parseInt(p[1],10),g=p[2];h!==0&&(WE(g,h),YE(e,g,p[3]),e.getTag().insertRules(h,s)),s.length=0}else s.push(f)}}},Gy=function(e){for(var t=document.querySelectorAll(UE),n=0,i=t.length;n<i;n++){var s=t[n];s&&s.getAttribute(ns)!==dS&&(GE(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function KE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var bS=function(e){var t=document.head,n=e||t,i=document.createElement("style"),s=function(f){var p=Array.from(f.querySelectorAll("style[".concat(ns,"]")));return p[p.length-1]}(n),l=s!==void 0?s.nextSibling:null;i.setAttribute(ns,dS),i.setAttribute(uS,iu);var u=KE();return u&&i.setAttribute("nonce",u),n.insertBefore(i,l),i},QE=function(){function e(t){this.element=bS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,s=0,l=i.length;s<l;s++){var u=i[s];if(u.ownerNode===n)return u}throw Qa(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ZE=function(){function e(t){this.element=bS(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),XE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Ky=Ld,JE={isServer:!Ld,useCSSOMInjection:!_E},wS=function(){function e(t,n,i){t===void 0&&(t=rs),n===void 0&&(n={});var s=this;this.options=ln(ln({},JE),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Ld&&Ky&&(Ky=!1,Gy(this)),m0(this,function(){return function(l){for(var u=l.getTag(),f=u.length,p="",h=function(b){var v=function(E){return zd.get(E)}(b);if(v===void 0)return"continue";var j=l.names.get(v),C=u.getGroup(b);if(j===void 0||!j.size||C.length===0)return"continue";var k="".concat(ns,".g").concat(b,'[id="').concat(v,'"]'),_="";j!==void 0&&j.forEach(function(E){E.length>0&&(_+="".concat(E,","))}),p+="".concat(C).concat(k,'{content:"').concat(_,'"}').concat(p0)},g=0;g<f;g++)h(g);return p}(s)})}return e.registerId=function(t){return Sc(t)},e.prototype.rehydrate=function(){!this.server&&Ld&&Gy(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ln(ln({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,s=n.target;return n.isServer?new XE(s):i?new QE(s):new ZE(s)}(this.options),new HE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Sc(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(Sc(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Sc(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e_=/&/g,t_=/^\s*\/\/.*$/gm;function jS(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jS(n.children,t)),n})}function n_(e){var t,n,i,s=rs,l=s.options,u=l===void 0?rs:l,f=s.plugins,p=f===void 0?su:f,h=function(v,j,C){return C.startsWith(n)&&C.endsWith(n)&&C.replaceAll(n,"").length>0?".".concat(t):v},g=p.slice();g.push(function(v){v.type===tu&&v.value.includes("&")&&(v.props[0]=v.props[0].replace(e_,n).replace(i,h))}),u.prefix&&g.push(PE),g.push(kE);var b=function(v,j,C,k){j===void 0&&(j=""),C===void 0&&(C=""),k===void 0&&(k="&"),t=k,n=j,i=new RegExp("\\".concat(n,"\\b"),"g");var _=v.replace(t_,""),E=jE(C||j?"".concat(C," ").concat(j," { ").concat(_," }"):_);u.namespace&&(E=jS(E,u.namespace));var N=[];return Ad(E,CE(g.concat($E(function(V){return N.push(V)})))),N};return b.hash=p.length?p.reduce(function(v,j){return j.name||Qa(15),Ki(v,j.name)},pS).toString():"",b}var r_=new wS,Um=n_(),SS=Pt.createContext({shouldForwardProp:void 0,styleSheet:r_,stylis:Um});SS.Consumer;Pt.createContext(void 0);function Qy(){return x.useContext(SS)}var kS=function(){function e(t,n){var i=this;this.inject=function(s,l){l===void 0&&(l=Um);var u=i.name+l.hash;s.hasNameForId(i.id,u)||s.insertRules(i.id,u,l(i.rules,u,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,m0(this,function(){throw Qa(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Um),this.name+t.hash},e}(),o_=function(e){return e>="A"&&e<="Z"};function Zy(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;o_(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var CS=function(e){return e==null||e===!1||e===""},$S=function(e){var t,n,i=[];for(var s in e){var l=e[s];e.hasOwnProperty(s)&&!CS(l)&&(Array.isArray(l)&&l.isCss||os(l)?i.push("".concat(Zy(s),":"),l,";"):Na(l)?i.push.apply(i,Ra(Ra(["".concat(s," {")],$S(l),!1),["}"],!1)):i.push("".concat(Zy(s),": ").concat((t=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in EE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function Qo(e,t,n,i){if(CS(e))return[];if(h0(e))return[".".concat(e.styledComponentId)];if(os(e)){if(!os(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var s=e(t);return Qo(s,t,n,i)}var l;return e instanceof kS?n?(e.inject(n,i),[e.getName(i)]):[e]:Na(e)?$S(e):Array.isArray(e)?Array.prototype.concat.apply(su,e.map(function(u){return Qo(u,t,n,i)})):[e.toString()]}function i_(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(os(n)&&!h0(n))return!1}return!0}var s_=hS(iu),a_=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&i_(t),this.componentId=n,this.baseHash=Ki(s_,n),this.baseStyle=i,wS.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=qo(s,this.staticRulesId);else{var l=Hm(Qo(this.rules,t,n,i)),u=Bm(Ki(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,u)){var f=i(l,".".concat(u),void 0,this.componentId);n.insertRules(this.componentId,u,f)}s=qo(s,u),this.staticRulesId=u}else{for(var p=Ki(this.baseHash,i.hash),h="",g=0;g<this.rules.length;g++){var b=this.rules[g];if(typeof b=="string")h+=b;else if(b){var v=Hm(Qo(b,t,n,i));p=Ki(p,v+g),h+=v}}if(h){var j=Bm(p>>>0);n.hasNameForId(this.componentId,j)||n.insertRules(this.componentId,j,i(h,".".concat(j),void 0,this.componentId)),s=qo(s,j)}}return s},e}(),PS=Pt.createContext(void 0);PS.Consumer;var zp={};function l_(e,t,n){var i=h0(e),s=e,l=!Lp(e),u=t.attrs,f=u===void 0?su:u,p=t.componentId,h=p===void 0?function(B,M){var F=typeof B!="string"?"sc":Hy(B);zp[F]=(zp[F]||0)+1;var A="".concat(F,"-").concat(mS(iu+F+zp[F]));return M?"".concat(M,"-").concat(A):A}(t.displayName,t.parentComponentId):p,g=t.displayName,b=g===void 0?function(B){return Lp(B)?"styled.".concat(B):"Styled(".concat(AE(B),")")}(e):g,v=t.displayName&&t.componentId?"".concat(Hy(t.displayName),"-").concat(t.componentId):t.componentId||h,j=i&&s.attrs?s.attrs.concat(f).filter(Boolean):f,C=t.shouldForwardProp;if(i&&s.shouldForwardProp){var k=s.shouldForwardProp;if(t.shouldForwardProp){var _=t.shouldForwardProp;C=function(B,M){return k(B,M)&&_(B,M)}}else C=k}var E=new a_(n,v,i?s.componentStyle:void 0);function N(B,M){return function(F,A,R){var T=F.attrs,D=F.componentStyle,z=F.defaultProps,H=F.foldedComponentIds,W=F.styledComponentId,Y=F.target,G=Pt.useContext(PS),X=Qy(),$=F.shouldForwardProp||X.shouldForwardProp,J=TE(A,G,z)||rs,I=function(ie,re,se){for(var de,fe=ln(ln({},re),{className:void 0,theme:se}),ye=0;ye<ie.length;ye+=1){var Pe=os(de=ie[ye])?de(fe):de;for(var ke in Pe)fe[ke]=ke==="className"?qo(fe[ke],Pe[ke]):ke==="style"?ln(ln({},fe[ke]),Pe[ke]):Pe[ke]}return re.className&&(fe.className=qo(fe.className,re.className)),fe}(T,A,J),P=I.as||Y,O={};for(var U in I)I[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&I.theme===J||(U==="forwardedAs"?O.as=I.forwardedAs:$&&!$(U,P)||(O[U]=I[U]));var Q=function(ie,re){var se=Qy(),de=ie.generateAndInjectStyles(re,se.styleSheet,se.stylis);return de}(D,I),ee=qo(H,W);return Q&&(ee+=" "+Q),I.className&&(ee+=" "+I.className),O[Lp(P)&&!fS.has(P)?"class":"className"]=ee,O.ref=R,x.createElement(P,O)}(V,B,M)}N.displayName=b;var V=Pt.forwardRef(N);return V.attrs=j,V.componentStyle=E,V.displayName=b,V.shouldForwardProp=C,V.foldedComponentIds=i?qo(s.foldedComponentIds,s.styledComponentId):"",V.styledComponentId=v,V.target=i?s.target:e,Object.defineProperty(V,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(B){this._foldedDefaultProps=i?function(M){for(var F=[],A=1;A<arguments.length;A++)F[A-1]=arguments[A];for(var R=0,T=F;R<T.length;R++)Wm(M,T[R],!0);return M}({},s.defaultProps,B):B}}),m0(V,function(){return".".concat(V.styledComponentId)}),l&&yS(V,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),V}function Xy(e,t){for(var n=[e[0]],i=0,s=t.length;i<s;i+=1)n.push(t[i],e[i+1]);return n}var Jy=function(e){return Object.assign(e,{isCss:!0})};function ES(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(os(e)||Na(e))return Jy(Qo(Xy(su,Ra([e],t,!0))));var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Qo(i):Jy(Qo(Xy(i,t)))}function qm(e,t,n){if(n===void 0&&(n=rs),!t)throw Qa(1,t);var i=function(s){for(var l=[],u=1;u<arguments.length;u++)l[u-1]=arguments[u];return e(t,n,ES.apply(void 0,Ra([s],l,!1)))};return i.attrs=function(s){return qm(e,t,ln(ln({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},i.withConfig=function(s){return qm(e,t,ln(ln({},n),s))},i}var _S=function(e){return qm(l_,e)},d=_S;fS.forEach(function(e){d[e]=_S(e)});function Ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Hm(ES.apply(void 0,Ra([e],t,!1))),s=mS(i);return new kS(s,i)}const y={theme_red:"#FF2A00",black:"#000",background:"#040404",white:"#eeecec",grey_background:"#0E0E0E",grey_border:"#404040",edit:"#18acce",placeholder_text:"#9a9a9a",dark_background:"#171717",box_background:"#151515"},$r=({onClick:e=()=>console.log("clicked"),text:t,slide:n})=>r.jsx(c_,{onClick:e,slide:n,children:t}),c_=d.button`
  padding: 10px 18px;
  background-color: transparent;
  border: 1px solid transparent;
  font-size: 14px;
  color: ${y.white};
  position: relative;
  overflow: hidden;
  min-width: max-content;
  z-index: 3;
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background-color: ${y.theme_red};
    transition: all 0.6s linear;
    z-index: -1;
  }
  &:hover {
    &::after {
      width: 100%;
    }
    transform: ${({slide:e})=>e?"translate(80px)":"translate(0px)"};
    transition: ${({slide:e})=>e?"all 0.5s ease":"none"};
  }
`,d_="/assets/user-B8vbKWRN.png",u_="/assets/spotlightBg1-HH10AEcu.png",f_="/assets/spotlightBg2-aNduc-Ck.png",TS=({text:e,align:t})=>r.jsxs(h_,{children:[" ",r.jsx(m_,{align:t,dangerouslySetInnerHTML:{__html:e}})]}),p_=Ve`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 0% 50%;
  }
`,h_=d.div`
  font-size: 50px;
  font-weight: 700;
  text-transform: capitalize;
  background: linear-gradient(
    90deg,
    rgba(20, 106, 186, 1),
    rgba(29, 170, 153, 1),
    rgba(101, 22, 101, 1),
    rgba(180, 0, 7, 1),
    rgb(19, 132, 233),
    rgb(19, 132, 233),
    rgb(211, 141, 101)
  );
  background-size: 300% 300%; /* Makes the gradient larger for a flowing effect */
  background-clip: text;
  -webkit-background-clip: text; /* For WebKit-based browsers */
  color: transparent;
  animation: ${p_} 5s linear infinite; /* Adjust the duration as needed */
`,m_=d.h1`
  color: transparent;
  font-size: 50px;
  font-weight: 650;
  text-align: ${e=>e.align}; /* Use props to set text-align */
  text-transform: capitalize;
  @media screen and (max-width: 768px) {
    font-size: 43px;
  }
  @media screen and (max-width: 540px) {
    font-size: 36px;
  }
  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`,g_="/assets/blackbg-DrNb5Avy.jpg";var xd={exports:{}},x_=xd.exports,eb;function v_(){return eb||(eb=1,function(e,t){(function(n,i){e.exports=i()})(x_,function(){return function(n){function i(l){if(s[l])return s[l].exports;var u=s[l]={exports:{},id:l,loaded:!1};return n[l].call(u.exports,u,u.exports,i),u.loaded=!0,u.exports}var s={};return i.m=n,i.c=s,i.p="dist/",i(0)}([function(n,i,s){function l(Y){return Y&&Y.__esModule?Y:{default:Y}}var u=Object.assign||function(Y){for(var G=1;G<arguments.length;G++){var X=arguments[G];for(var $ in X)Object.prototype.hasOwnProperty.call(X,$)&&(Y[$]=X[$])}return Y},f=s(1),p=(l(f),s(6)),h=l(p),g=s(7),b=l(g),v=s(8),j=l(v),C=s(9),k=l(C),_=s(10),E=l(_),N=s(11),V=l(N),B=s(14),M=l(B),F=[],A=!1,R={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},T=function(){var Y=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(Y&&(A=!0),A)return F=(0,V.default)(F,R),(0,E.default)(F,R.once),F},D=function(){F=(0,M.default)(),T()},z=function(){F.forEach(function(Y,G){Y.node.removeAttribute("data-aos"),Y.node.removeAttribute("data-aos-easing"),Y.node.removeAttribute("data-aos-duration"),Y.node.removeAttribute("data-aos-delay")})},H=function(Y){return Y===!0||Y==="mobile"&&k.default.mobile()||Y==="phone"&&k.default.phone()||Y==="tablet"&&k.default.tablet()||typeof Y=="function"&&Y()===!0},W=function(Y){R=u(R,Y),F=(0,M.default)();var G=document.all&&!window.atob;return H(R.disable)||G?z():(R.disableMutationObserver||j.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),R.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",R.easing),document.querySelector("body").setAttribute("data-aos-duration",R.duration),document.querySelector("body").setAttribute("data-aos-delay",R.delay),R.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?T(!0):R.startEvent==="load"?window.addEventListener(R.startEvent,function(){T(!0)}):document.addEventListener(R.startEvent,function(){T(!0)}),window.addEventListener("resize",(0,b.default)(T,R.debounceDelay,!0)),window.addEventListener("orientationchange",(0,b.default)(T,R.debounceDelay,!0)),window.addEventListener("scroll",(0,h.default)(function(){(0,E.default)(F,R.once)},R.throttleDelay)),R.disableMutationObserver||j.default.ready("[data-aos]",D),F)};n.exports={init:W,refresh:T,refreshHard:D}},function(n,i){},,,,,function(n,i){(function(s){function l(H,W,Y){function G(me){var $e=ee,Le=ie;return ee=ie=void 0,ye=me,se=H.apply(Le,$e)}function X(me){return ye=me,de=setTimeout(I,W),Pe?G(me):se}function $(me){var $e=me-fe,Le=me-ye,Me=W-$e;return ke?D(Me,re-Le):Me}function J(me){var $e=me-fe,Le=me-ye;return fe===void 0||$e>=W||$e<0||ke&&Le>=re}function I(){var me=z();return J(me)?P(me):void(de=setTimeout(I,$(me)))}function P(me){return de=void 0,xe&&ee?G(me):(ee=ie=void 0,se)}function O(){de!==void 0&&clearTimeout(de),ye=0,ee=fe=ie=de=void 0}function U(){return de===void 0?se:P(z())}function Q(){var me=z(),$e=J(me);if(ee=arguments,ie=this,fe=me,$e){if(de===void 0)return X(fe);if(ke)return de=setTimeout(I,W),G(fe)}return de===void 0&&(de=setTimeout(I,W)),se}var ee,ie,re,se,de,fe,ye=0,Pe=!1,ke=!1,xe=!0;if(typeof H!="function")throw new TypeError(v);return W=g(W)||0,f(Y)&&(Pe=!!Y.leading,ke="maxWait"in Y,re=ke?T(g(Y.maxWait)||0,W):re,xe="trailing"in Y?!!Y.trailing:xe),Q.cancel=O,Q.flush=U,Q}function u(H,W,Y){var G=!0,X=!0;if(typeof H!="function")throw new TypeError(v);return f(Y)&&(G="leading"in Y?!!Y.leading:G,X="trailing"in Y?!!Y.trailing:X),l(H,W,{leading:G,maxWait:W,trailing:X})}function f(H){var W=typeof H>"u"?"undefined":b(H);return!!H&&(W=="object"||W=="function")}function p(H){return!!H&&(typeof H>"u"?"undefined":b(H))=="object"}function h(H){return(typeof H>"u"?"undefined":b(H))=="symbol"||p(H)&&R.call(H)==C}function g(H){if(typeof H=="number")return H;if(h(H))return j;if(f(H)){var W=typeof H.valueOf=="function"?H.valueOf():H;H=f(W)?W+"":W}if(typeof H!="string")return H===0?H:+H;H=H.replace(k,"");var Y=E.test(H);return Y||N.test(H)?V(H.slice(2),Y?2:8):_.test(H)?j:+H}var b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(H){return typeof H}:function(H){return H&&typeof Symbol=="function"&&H.constructor===Symbol&&H!==Symbol.prototype?"symbol":typeof H},v="Expected a function",j=NaN,C="[object Symbol]",k=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,V=parseInt,B=(typeof s>"u"?"undefined":b(s))=="object"&&s&&s.Object===Object&&s,M=(typeof self>"u"?"undefined":b(self))=="object"&&self&&self.Object===Object&&self,F=B||M||Function("return this")(),A=Object.prototype,R=A.toString,T=Math.max,D=Math.min,z=function(){return F.Date.now()};n.exports=u}).call(i,function(){return this}())},function(n,i){(function(s){function l(z,H,W){function Y(xe){var me=Q,$e=ee;return Q=ee=void 0,fe=xe,re=z.apply($e,me)}function G(xe){return fe=xe,se=setTimeout(J,H),ye?Y(xe):re}function X(xe){var me=xe-de,$e=xe-fe,Le=H-me;return Pe?T(Le,ie-$e):Le}function $(xe){var me=xe-de,$e=xe-fe;return de===void 0||me>=H||me<0||Pe&&$e>=ie}function J(){var xe=D();return $(xe)?I(xe):void(se=setTimeout(J,X(xe)))}function I(xe){return se=void 0,ke&&Q?Y(xe):(Q=ee=void 0,re)}function P(){se!==void 0&&clearTimeout(se),fe=0,Q=de=ee=se=void 0}function O(){return se===void 0?re:I(D())}function U(){var xe=D(),me=$(xe);if(Q=arguments,ee=this,de=xe,me){if(se===void 0)return G(de);if(Pe)return se=setTimeout(J,H),Y(de)}return se===void 0&&(se=setTimeout(J,H)),re}var Q,ee,ie,re,se,de,fe=0,ye=!1,Pe=!1,ke=!0;if(typeof z!="function")throw new TypeError(b);return H=h(H)||0,u(W)&&(ye=!!W.leading,Pe="maxWait"in W,ie=Pe?R(h(W.maxWait)||0,H):ie,ke="trailing"in W?!!W.trailing:ke),U.cancel=P,U.flush=O,U}function u(z){var H=typeof z>"u"?"undefined":g(z);return!!z&&(H=="object"||H=="function")}function f(z){return!!z&&(typeof z>"u"?"undefined":g(z))=="object"}function p(z){return(typeof z>"u"?"undefined":g(z))=="symbol"||f(z)&&A.call(z)==j}function h(z){if(typeof z=="number")return z;if(p(z))return v;if(u(z)){var H=typeof z.valueOf=="function"?z.valueOf():z;z=u(H)?H+"":H}if(typeof z!="string")return z===0?z:+z;z=z.replace(C,"");var W=_.test(z);return W||E.test(z)?N(z.slice(2),W?2:8):k.test(z)?v:+z}var g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},b="Expected a function",v=NaN,j="[object Symbol]",C=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,E=/^0o[0-7]+$/i,N=parseInt,V=(typeof s>"u"?"undefined":g(s))=="object"&&s&&s.Object===Object&&s,B=(typeof self>"u"?"undefined":g(self))=="object"&&self&&self.Object===Object&&self,M=V||B||Function("return this")(),F=Object.prototype,A=F.toString,R=Math.max,T=Math.min,D=function(){return M.Date.now()};n.exports=l}).call(i,function(){return this}())},function(n,i){function s(g){var b=void 0,v=void 0;for(b=0;b<g.length;b+=1)if(v=g[b],v.dataset&&v.dataset.aos||v.children&&s(v.children))return!0;return!1}function l(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function u(){return!!l()}function f(g,b){var v=window.document,j=l(),C=new j(p);h=b,C.observe(v.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function p(g){g&&g.forEach(function(b){var v=Array.prototype.slice.call(b.addedNodes),j=Array.prototype.slice.call(b.removedNodes),C=v.concat(j);if(s(C))return h()})}Object.defineProperty(i,"__esModule",{value:!0});var h=function(){};i.default={isSupported:u,ready:f}},function(n,i){function s(v,j){if(!(v instanceof j))throw new TypeError("Cannot call a class as a function")}function l(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){function v(j,C){for(var k=0;k<C.length;k++){var _=C[k];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(j,_.key,_)}}return function(j,C,k){return C&&v(j.prototype,C),k&&v(j,k),j}}(),f=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,p=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,h=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,g=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,b=function(){function v(){s(this,v)}return u(v,[{key:"phone",value:function(){var j=l();return!(!f.test(j)&&!p.test(j.substr(0,4)))}},{key:"mobile",value:function(){var j=l();return!(!h.test(j)&&!g.test(j.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),v}();i.default=new b},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(u,f,p){var h=u.node.getAttribute("data-aos-once");f>u.position?u.node.classList.add("aos-animate"):typeof h<"u"&&(h==="false"||!p&&h!=="true")&&u.node.classList.remove("aos-animate")},l=function(u,f){var p=window.pageYOffset,h=window.innerHeight;u.forEach(function(g,b){s(g,h+p,f)})};i.default=l},function(n,i,s){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(i,"__esModule",{value:!0});var u=s(12),f=l(u),p=function(h,g){return h.forEach(function(b,v){b.node.classList.add("aos-init"),b.position=(0,f.default)(b.node,g.offset)}),h};i.default=p},function(n,i,s){function l(h){return h&&h.__esModule?h:{default:h}}Object.defineProperty(i,"__esModule",{value:!0});var u=s(13),f=l(u),p=function(h,g){var b=0,v=0,j=window.innerHeight,C={offset:h.getAttribute("data-aos-offset"),anchor:h.getAttribute("data-aos-anchor"),anchorPlacement:h.getAttribute("data-aos-anchor-placement")};switch(C.offset&&!isNaN(C.offset)&&(v=parseInt(C.offset)),C.anchor&&document.querySelectorAll(C.anchor)&&(h=document.querySelectorAll(C.anchor)[0]),b=(0,f.default)(h).top,C.anchorPlacement){case"top-bottom":break;case"center-bottom":b+=h.offsetHeight/2;break;case"bottom-bottom":b+=h.offsetHeight;break;case"top-center":b+=j/2;break;case"bottom-center":b+=j/2+h.offsetHeight;break;case"center-center":b+=j/2+h.offsetHeight/2;break;case"top-top":b+=j;break;case"bottom-top":b+=h.offsetHeight+j;break;case"center-top":b+=h.offsetHeight/2+j}return C.anchorPlacement||C.offset||isNaN(g)||(v=g),b+v};i.default=p},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(l){for(var u=0,f=0;l&&!isNaN(l.offsetLeft)&&!isNaN(l.offsetTop);)u+=l.offsetLeft-(l.tagName!="BODY"?l.scrollLeft:0),f+=l.offsetTop-(l.tagName!="BODY"?l.scrollTop:0),l=l.offsetParent;return{top:f,left:u}};i.default=s},function(n,i){Object.defineProperty(i,"__esModule",{value:!0});var s=function(l){return l=l||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(l,function(u){return{node:u}})};i.default=s}])})}(xd)),xd.exports}var y_=v_();const bt=ss(y_);function DS(e,t){return function(){return e.apply(t,arguments)}}const{toString:b_}=Object.prototype,{getPrototypeOf:g0}=Object,au=(e=>t=>{const n=b_.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Un=e=>(e=e.toLowerCase(),t=>au(t)===e),lu=e=>t=>typeof t===e,{isArray:fs}=Array,Ia=lu("undefined");function w_(e){return e!==null&&!Ia(e)&&e.constructor!==null&&!Ia(e.constructor)&&yn(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const OS=Un("ArrayBuffer");function j_(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&OS(e.buffer),t}const S_=lu("string"),yn=lu("function"),MS=lu("number"),cu=e=>e!==null&&typeof e=="object",k_=e=>e===!0||e===!1,vd=e=>{if(au(e)!=="object")return!1;const t=g0(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},C_=Un("Date"),$_=Un("File"),P_=Un("Blob"),E_=Un("FileList"),__=e=>cu(e)&&yn(e.pipe),T_=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||yn(e.append)&&((t=au(e))==="formdata"||t==="object"&&yn(e.toString)&&e.toString()==="[object FormData]"))},D_=Un("URLSearchParams"),[O_,M_,A_,L_]=["ReadableStream","Request","Response","Headers"].map(Un),z_=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Za(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let i,s;if(typeof e!="object"&&(e=[e]),fs(e))for(i=0,s=e.length;i<s;i++)t.call(null,e[i],i,e);else{const l=n?Object.getOwnPropertyNames(e):Object.keys(e),u=l.length;let f;for(i=0;i<u;i++)f=l[i],t.call(null,e[f],f,e)}}function AS(e,t){t=t.toLowerCase();const n=Object.keys(e);let i=n.length,s;for(;i-- >0;)if(s=n[i],t===s.toLowerCase())return s;return null}const Yo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,LS=e=>!Ia(e)&&e!==Yo;function Ym(){const{caseless:e}=LS(this)&&this||{},t={},n=(i,s)=>{const l=e&&AS(t,s)||s;vd(t[l])&&vd(i)?t[l]=Ym(t[l],i):vd(i)?t[l]=Ym({},i):fs(i)?t[l]=i.slice():t[l]=i};for(let i=0,s=arguments.length;i<s;i++)arguments[i]&&Za(arguments[i],n);return t}const R_=(e,t,n,{allOwnKeys:i}={})=>(Za(t,(s,l)=>{n&&yn(s)?e[l]=DS(s,n):e[l]=s},{allOwnKeys:i}),e),N_=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),I_=(e,t,n,i)=>{e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},F_=(e,t,n,i)=>{let s,l,u;const f={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),l=s.length;l-- >0;)u=s[l],(!i||i(u,e,t))&&!f[u]&&(t[u]=e[u],f[u]=!0);e=n!==!1&&g0(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},V_=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const i=e.indexOf(t,n);return i!==-1&&i===n},B_=e=>{if(!e)return null;if(fs(e))return e;let t=e.length;if(!MS(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},H_=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&g0(Uint8Array)),W_=(e,t)=>{const i=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=i.next())&&!s.done;){const l=s.value;t.call(e,l[0],l[1])}},U_=(e,t)=>{let n;const i=[];for(;(n=e.exec(t))!==null;)i.push(n);return i},q_=Un("HTMLFormElement"),Y_=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),tb=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),G_=Un("RegExp"),zS=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),i={};Za(n,(s,l)=>{let u;(u=t(s,l,e))!==!1&&(i[l]=u||s)}),Object.defineProperties(e,i)},K_=e=>{zS(e,(t,n)=>{if(yn(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=e[n];if(yn(i)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Q_=(e,t)=>{const n={},i=s=>{s.forEach(l=>{n[l]=!0})};return fs(e)?i(e):i(String(e).split(t)),n},Z_=()=>{},X_=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Rp="abcdefghijklmnopqrstuvwxyz",nb="0123456789",RS={DIGIT:nb,ALPHA:Rp,ALPHA_DIGIT:Rp+Rp.toUpperCase()+nb},J_=(e=16,t=RS.ALPHA_DIGIT)=>{let n="";const{length:i}=t;for(;e--;)n+=t[Math.random()*i|0];return n};function eT(e){return!!(e&&yn(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const tT=e=>{const t=new Array(10),n=(i,s)=>{if(cu(i)){if(t.indexOf(i)>=0)return;if(!("toJSON"in i)){t[s]=i;const l=fs(i)?[]:{};return Za(i,(u,f)=>{const p=n(u,s+1);!Ia(p)&&(l[f]=p)}),t[s]=void 0,l}}return i};return n(e,0)},nT=Un("AsyncFunction"),rT=e=>e&&(cu(e)||yn(e))&&yn(e.then)&&yn(e.catch),NS=((e,t)=>e?setImmediate:t?((n,i)=>(Yo.addEventListener("message",({source:s,data:l})=>{s===Yo&&l===n&&i.length&&i.shift()()},!1),s=>{i.push(s),Yo.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",yn(Yo.postMessage)),oT=typeof queueMicrotask<"u"?queueMicrotask.bind(Yo):typeof process<"u"&&process.nextTick||NS,ae={isArray:fs,isArrayBuffer:OS,isBuffer:w_,isFormData:T_,isArrayBufferView:j_,isString:S_,isNumber:MS,isBoolean:k_,isObject:cu,isPlainObject:vd,isReadableStream:O_,isRequest:M_,isResponse:A_,isHeaders:L_,isUndefined:Ia,isDate:C_,isFile:$_,isBlob:P_,isRegExp:G_,isFunction:yn,isStream:__,isURLSearchParams:D_,isTypedArray:H_,isFileList:E_,forEach:Za,merge:Ym,extend:R_,trim:z_,stripBOM:N_,inherits:I_,toFlatObject:F_,kindOf:au,kindOfTest:Un,endsWith:V_,toArray:B_,forEachEntry:W_,matchAll:U_,isHTMLForm:q_,hasOwnProperty:tb,hasOwnProp:tb,reduceDescriptors:zS,freezeMethods:K_,toObjectSet:Q_,toCamelCase:Y_,noop:Z_,toFiniteNumber:X_,findKey:AS,global:Yo,isContextDefined:LS,ALPHABET:RS,generateString:J_,isSpecCompliantForm:eT,toJSONObject:tT,isAsyncFn:nT,isThenable:rT,setImmediate:NS,asap:oT};function ze(e,t,n,i,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),s&&(this.response=s,this.status=s.status?s.status:null)}ae.inherits(ze,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ae.toJSONObject(this.config),code:this.code,status:this.status}}});const IS=ze.prototype,FS={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{FS[e]={value:e}});Object.defineProperties(ze,FS);Object.defineProperty(IS,"isAxiosError",{value:!0});ze.from=(e,t,n,i,s,l)=>{const u=Object.create(IS);return ae.toFlatObject(e,u,function(p){return p!==Error.prototype},f=>f!=="isAxiosError"),ze.call(u,e.message,t,n,i,s),u.cause=e,u.name=e.name,l&&Object.assign(u,l),u};const iT=null;function Gm(e){return ae.isPlainObject(e)||ae.isArray(e)}function VS(e){return ae.endsWith(e,"[]")?e.slice(0,-2):e}function rb(e,t,n){return e?e.concat(t).map(function(s,l){return s=VS(s),!n&&l?"["+s+"]":s}).join(n?".":""):t}function sT(e){return ae.isArray(e)&&!e.some(Gm)}const aT=ae.toFlatObject(ae,{},null,function(t){return/^is[A-Z]/.test(t)});function du(e,t,n){if(!ae.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=ae.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(k,_){return!ae.isUndefined(_[k])});const i=n.metaTokens,s=n.visitor||g,l=n.dots,u=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&ae.isSpecCompliantForm(t);if(!ae.isFunction(s))throw new TypeError("visitor must be a function");function h(C){if(C===null)return"";if(ae.isDate(C))return C.toISOString();if(!p&&ae.isBlob(C))throw new ze("Blob is not supported. Use a Buffer instead.");return ae.isArrayBuffer(C)||ae.isTypedArray(C)?p&&typeof Blob=="function"?new Blob([C]):Buffer.from(C):C}function g(C,k,_){let E=C;if(C&&!_&&typeof C=="object"){if(ae.endsWith(k,"{}"))k=i?k:k.slice(0,-2),C=JSON.stringify(C);else if(ae.isArray(C)&&sT(C)||(ae.isFileList(C)||ae.endsWith(k,"[]"))&&(E=ae.toArray(C)))return k=VS(k),E.forEach(function(V,B){!(ae.isUndefined(V)||V===null)&&t.append(u===!0?rb([k],B,l):u===null?k:k+"[]",h(V))}),!1}return Gm(C)?!0:(t.append(rb(_,k,l),h(C)),!1)}const b=[],v=Object.assign(aT,{defaultVisitor:g,convertValue:h,isVisitable:Gm});function j(C,k){if(!ae.isUndefined(C)){if(b.indexOf(C)!==-1)throw Error("Circular reference detected in "+k.join("."));b.push(C),ae.forEach(C,function(E,N){(!(ae.isUndefined(E)||E===null)&&s.call(t,E,ae.isString(N)?N.trim():N,k,v))===!0&&j(E,k?k.concat(N):[N])}),b.pop()}}if(!ae.isObject(e))throw new TypeError("data must be an object");return j(e),t}function ob(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(i){return t[i]})}function x0(e,t){this._pairs=[],e&&du(e,this,t)}const BS=x0.prototype;BS.append=function(t,n){this._pairs.push([t,n])};BS.toString=function(t){const n=t?function(i){return t.call(this,i,ob)}:ob;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function lT(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function HS(e,t,n){if(!t)return e;const i=n&&n.encode||lT;ae.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let l;if(s?l=s(t,n):l=ae.isURLSearchParams(t)?t.toString():new x0(t,n).toString(i),l){const u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class ib{constructor(){this.handlers=[]}use(t,n,i){return this.handlers.push({fulfilled:t,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ae.forEach(this.handlers,function(i){i!==null&&t(i)})}}const WS={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cT=typeof URLSearchParams<"u"?URLSearchParams:x0,dT=typeof FormData<"u"?FormData:null,uT=typeof Blob<"u"?Blob:null,fT={isBrowser:!0,classes:{URLSearchParams:cT,FormData:dT,Blob:uT},protocols:["http","https","file","blob","url","data"]},v0=typeof window<"u"&&typeof document<"u",Km=typeof navigator=="object"&&navigator||void 0,pT=v0&&(!Km||["ReactNative","NativeScript","NS"].indexOf(Km.product)<0),hT=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mT=v0&&window.location.href||"http://localhost",gT=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:v0,hasStandardBrowserEnv:pT,hasStandardBrowserWebWorkerEnv:hT,navigator:Km,origin:mT},Symbol.toStringTag,{value:"Module"})),Gt={...gT,...fT};function xT(e,t){return du(e,new Gt.classes.URLSearchParams,Object.assign({visitor:function(n,i,s,l){return Gt.isNode&&ae.isBuffer(n)?(this.append(i,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function vT(e){return ae.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yT(e){const t={},n=Object.keys(e);let i;const s=n.length;let l;for(i=0;i<s;i++)l=n[i],t[l]=e[l];return t}function US(e){function t(n,i,s,l){let u=n[l++];if(u==="__proto__")return!0;const f=Number.isFinite(+u),p=l>=n.length;return u=!u&&ae.isArray(s)?s.length:u,p?(ae.hasOwnProp(s,u)?s[u]=[s[u],i]:s[u]=i,!f):((!s[u]||!ae.isObject(s[u]))&&(s[u]=[]),t(n,i,s[u],l)&&ae.isArray(s[u])&&(s[u]=yT(s[u])),!f)}if(ae.isFormData(e)&&ae.isFunction(e.entries)){const n={};return ae.forEachEntry(e,(i,s)=>{t(vT(i),s,n,0)}),n}return null}function bT(e,t,n){if(ae.isString(e))try{return(t||JSON.parse)(e),ae.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(0,JSON.stringify)(e)}const Xa={transitional:WS,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,l=ae.isObject(t);if(l&&ae.isHTMLForm(t)&&(t=new FormData(t)),ae.isFormData(t))return s?JSON.stringify(US(t)):t;if(ae.isArrayBuffer(t)||ae.isBuffer(t)||ae.isStream(t)||ae.isFile(t)||ae.isBlob(t)||ae.isReadableStream(t))return t;if(ae.isArrayBufferView(t))return t.buffer;if(ae.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let f;if(l){if(i.indexOf("application/x-www-form-urlencoded")>-1)return xT(t,this.formSerializer).toString();if((f=ae.isFileList(t))||i.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return du(f?{"files[]":t}:t,p&&new p,this.formSerializer)}}return l||s?(n.setContentType("application/json",!1),bT(t)):t}],transformResponse:[function(t){const n=this.transitional||Xa.transitional,i=n&&n.forcedJSONParsing,s=this.responseType==="json";if(ae.isResponse(t)||ae.isReadableStream(t))return t;if(t&&ae.isString(t)&&(i&&!this.responseType||s)){const u=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(f){if(u)throw f.name==="SyntaxError"?ze.from(f,ze.ERR_BAD_RESPONSE,this,null,this.response):f}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt.classes.FormData,Blob:Gt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ae.forEach(["delete","get","head","post","put","patch"],e=>{Xa.headers[e]={}});const wT=ae.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),jT=e=>{const t={};let n,i,s;return e&&e.split(`
`).forEach(function(u){s=u.indexOf(":"),n=u.substring(0,s).trim().toLowerCase(),i=u.substring(s+1).trim(),!(!n||t[n]&&wT[n])&&(n==="set-cookie"?t[n]?t[n].push(i):t[n]=[i]:t[n]=t[n]?t[n]+", "+i:i)}),t},sb=Symbol("internals");function aa(e){return e&&String(e).trim().toLowerCase()}function yd(e){return e===!1||e==null?e:ae.isArray(e)?e.map(yd):String(e)}function ST(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(e);)t[i[1]]=i[2];return t}const kT=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Np(e,t,n,i,s){if(ae.isFunction(i))return i.call(this,t,n);if(s&&(t=n),!!ae.isString(t)){if(ae.isString(i))return t.indexOf(i)!==-1;if(ae.isRegExp(i))return i.test(t)}}function CT(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,i)=>n.toUpperCase()+i)}function $T(e,t){const n=ae.toCamelCase(" "+t);["get","set","has"].forEach(i=>{Object.defineProperty(e,i+n,{value:function(s,l,u){return this[i].call(this,t,s,l,u)},configurable:!0})})}class cn{constructor(t){t&&this.set(t)}set(t,n,i){const s=this;function l(f,p,h){const g=aa(p);if(!g)throw new Error("header name must be a non-empty string");const b=ae.findKey(s,g);(!b||s[b]===void 0||h===!0||h===void 0&&s[b]!==!1)&&(s[b||p]=yd(f))}const u=(f,p)=>ae.forEach(f,(h,g)=>l(h,g,p));if(ae.isPlainObject(t)||t instanceof this.constructor)u(t,n);else if(ae.isString(t)&&(t=t.trim())&&!kT(t))u(jT(t),n);else if(ae.isHeaders(t))for(const[f,p]of t.entries())l(p,f,i);else t!=null&&l(n,t,i);return this}get(t,n){if(t=aa(t),t){const i=ae.findKey(this,t);if(i){const s=this[i];if(!n)return s;if(n===!0)return ST(s);if(ae.isFunction(n))return n.call(this,s,i);if(ae.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=aa(t),t){const i=ae.findKey(this,t);return!!(i&&this[i]!==void 0&&(!n||Np(this,this[i],i,n)))}return!1}delete(t,n){const i=this;let s=!1;function l(u){if(u=aa(u),u){const f=ae.findKey(i,u);f&&(!n||Np(i,i[f],f,n))&&(delete i[f],s=!0)}}return ae.isArray(t)?t.forEach(l):l(t),s}clear(t){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const l=n[i];(!t||Np(this,this[l],l,t,!0))&&(delete this[l],s=!0)}return s}normalize(t){const n=this,i={};return ae.forEach(this,(s,l)=>{const u=ae.findKey(i,l);if(u){n[u]=yd(s),delete n[l];return}const f=t?CT(l):String(l).trim();f!==l&&delete n[l],n[f]=yd(s),i[f]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return ae.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=t&&ae.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const i=new this(t);return n.forEach(s=>i.set(s)),i}static accessor(t){const i=(this[sb]=this[sb]={accessors:{}}).accessors,s=this.prototype;function l(u){const f=aa(u);i[f]||($T(s,u),i[f]=!0)}return ae.isArray(t)?t.forEach(l):l(t),this}}cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ae.reduceDescriptors(cn.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(i){this[n]=i}}});ae.freezeMethods(cn);function Ip(e,t){const n=this||Xa,i=t||n,s=cn.from(i.headers);let l=i.data;return ae.forEach(e,function(f){l=f.call(n,l,s.normalize(),t?t.status:void 0)}),s.normalize(),l}function qS(e){return!!(e&&e.__CANCEL__)}function ps(e,t,n){ze.call(this,e??"canceled",ze.ERR_CANCELED,t,n),this.name="CanceledError"}ae.inherits(ps,ze,{__CANCEL__:!0});function YS(e,t,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(new ze("Request failed with status code "+n.status,[ze.ERR_BAD_REQUEST,ze.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function PT(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ET(e,t){e=e||10;const n=new Array(e),i=new Array(e);let s=0,l=0,u;return t=t!==void 0?t:1e3,function(p){const h=Date.now(),g=i[l];u||(u=h),n[s]=p,i[s]=h;let b=l,v=0;for(;b!==s;)v+=n[b++],b=b%e;if(s=(s+1)%e,s===l&&(l=(l+1)%e),h-u<t)return;const j=g&&h-g;return j?Math.round(v*1e3/j):void 0}}function _T(e,t){let n=0,i=1e3/t,s,l;const u=(h,g=Date.now())=>{n=g,s=null,l&&(clearTimeout(l),l=null),e.apply(null,h)};return[(...h)=>{const g=Date.now(),b=g-n;b>=i?u(h,g):(s=h,l||(l=setTimeout(()=>{l=null,u(s)},i-b)))},()=>s&&u(s)]}const Rd=(e,t,n=3)=>{let i=0;const s=ET(50,250);return _T(l=>{const u=l.loaded,f=l.lengthComputable?l.total:void 0,p=u-i,h=s(p),g=u<=f;i=u;const b={loaded:u,total:f,progress:f?u/f:void 0,bytes:p,rate:h||void 0,estimated:h&&f&&g?(f-u)/h:void 0,event:l,lengthComputable:f!=null,[t?"download":"upload"]:!0};e(b)},n)},ab=(e,t)=>{const n=e!=null;return[i=>t[0]({lengthComputable:n,total:e,loaded:i}),t[1]]},lb=e=>(...t)=>ae.asap(()=>e(...t)),TT=Gt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Gt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Gt.origin),Gt.navigator&&/(msie|trident)/i.test(Gt.navigator.userAgent)):()=>!0,DT=Gt.hasStandardBrowserEnv?{write(e,t,n,i,s,l){const u=[e+"="+encodeURIComponent(t)];ae.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),ae.isString(i)&&u.push("path="+i),ae.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OT(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function MT(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function GS(e,t){return e&&!OT(t)?MT(e,t):t}const cb=e=>e instanceof cn?{...e}:e;function ei(e,t){t=t||{};const n={};function i(h,g,b,v){return ae.isPlainObject(h)&&ae.isPlainObject(g)?ae.merge.call({caseless:v},h,g):ae.isPlainObject(g)?ae.merge({},g):ae.isArray(g)?g.slice():g}function s(h,g,b,v){if(ae.isUndefined(g)){if(!ae.isUndefined(h))return i(void 0,h,b,v)}else return i(h,g,b,v)}function l(h,g){if(!ae.isUndefined(g))return i(void 0,g)}function u(h,g){if(ae.isUndefined(g)){if(!ae.isUndefined(h))return i(void 0,h)}else return i(void 0,g)}function f(h,g,b){if(b in t)return i(h,g);if(b in e)return i(void 0,h)}const p={url:l,method:l,data:l,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,withXSRFToken:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f,headers:(h,g,b)=>s(cb(h),cb(g),b,!0)};return ae.forEach(Object.keys(Object.assign({},e,t)),function(g){const b=p[g]||s,v=b(e[g],t[g],g);ae.isUndefined(v)&&b!==f||(n[g]=v)}),n}const KS=e=>{const t=ei({},e);let{data:n,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:l,headers:u,auth:f}=t;t.headers=u=cn.from(u),t.url=HS(GS(t.baseURL,t.url),e.params,e.paramsSerializer),f&&u.set("Authorization","Basic "+btoa((f.username||"")+":"+(f.password?unescape(encodeURIComponent(f.password)):"")));let p;if(ae.isFormData(n)){if(Gt.hasStandardBrowserEnv||Gt.hasStandardBrowserWebWorkerEnv)u.setContentType(void 0);else if((p=u.getContentType())!==!1){const[h,...g]=p?p.split(";").map(b=>b.trim()).filter(Boolean):[];u.setContentType([h||"multipart/form-data",...g].join("; "))}}if(Gt.hasStandardBrowserEnv&&(i&&ae.isFunction(i)&&(i=i(t)),i||i!==!1&&TT(t.url))){const h=s&&l&&DT.read(l);h&&u.set(s,h)}return t},AT=typeof XMLHttpRequest<"u",LT=AT&&function(e){return new Promise(function(n,i){const s=KS(e);let l=s.data;const u=cn.from(s.headers).normalize();let{responseType:f,onUploadProgress:p,onDownloadProgress:h}=s,g,b,v,j,C;function k(){j&&j(),C&&C(),s.cancelToken&&s.cancelToken.unsubscribe(g),s.signal&&s.signal.removeEventListener("abort",g)}let _=new XMLHttpRequest;_.open(s.method.toUpperCase(),s.url,!0),_.timeout=s.timeout;function E(){if(!_)return;const V=cn.from("getAllResponseHeaders"in _&&_.getAllResponseHeaders()),M={data:!f||f==="text"||f==="json"?_.responseText:_.response,status:_.status,statusText:_.statusText,headers:V,config:e,request:_};YS(function(A){n(A),k()},function(A){i(A),k()},M),_=null}"onloadend"in _?_.onloadend=E:_.onreadystatechange=function(){!_||_.readyState!==4||_.status===0&&!(_.responseURL&&_.responseURL.indexOf("file:")===0)||setTimeout(E)},_.onabort=function(){_&&(i(new ze("Request aborted",ze.ECONNABORTED,e,_)),_=null)},_.onerror=function(){i(new ze("Network Error",ze.ERR_NETWORK,e,_)),_=null},_.ontimeout=function(){let B=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const M=s.transitional||WS;s.timeoutErrorMessage&&(B=s.timeoutErrorMessage),i(new ze(B,M.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,e,_)),_=null},l===void 0&&u.setContentType(null),"setRequestHeader"in _&&ae.forEach(u.toJSON(),function(B,M){_.setRequestHeader(M,B)}),ae.isUndefined(s.withCredentials)||(_.withCredentials=!!s.withCredentials),f&&f!=="json"&&(_.responseType=s.responseType),h&&([v,C]=Rd(h,!0),_.addEventListener("progress",v)),p&&_.upload&&([b,j]=Rd(p),_.upload.addEventListener("progress",b),_.upload.addEventListener("loadend",j)),(s.cancelToken||s.signal)&&(g=V=>{_&&(i(!V||V.type?new ps(null,e,_):V),_.abort(),_=null)},s.cancelToken&&s.cancelToken.subscribe(g),s.signal&&(s.signal.aborted?g():s.signal.addEventListener("abort",g)));const N=PT(s.url);if(N&&Gt.protocols.indexOf(N)===-1){i(new ze("Unsupported protocol "+N+":",ze.ERR_BAD_REQUEST,e));return}_.send(l||null)})},zT=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let i=new AbortController,s;const l=function(h){if(!s){s=!0,f();const g=h instanceof Error?h:this.reason;i.abort(g instanceof ze?g:new ps(g instanceof Error?g.message:g))}};let u=t&&setTimeout(()=>{u=null,l(new ze(`timeout ${t} of ms exceeded`,ze.ETIMEDOUT))},t);const f=()=>{e&&(u&&clearTimeout(u),u=null,e.forEach(h=>{h.unsubscribe?h.unsubscribe(l):h.removeEventListener("abort",l)}),e=null)};e.forEach(h=>h.addEventListener("abort",l));const{signal:p}=i;return p.unsubscribe=()=>ae.asap(f),p}},RT=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let i=0,s;for(;i<n;)s=i+t,yield e.slice(i,s),i=s},NT=async function*(e,t){for await(const n of IT(e))yield*RT(n,t)},IT=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:i}=await t.read();if(n)break;yield i}}finally{await t.cancel()}},db=(e,t,n,i)=>{const s=NT(e,t);let l=0,u,f=p=>{u||(u=!0,i&&i(p))};return new ReadableStream({async pull(p){try{const{done:h,value:g}=await s.next();if(h){f(),p.close();return}let b=g.byteLength;if(n){let v=l+=b;n(v)}p.enqueue(new Uint8Array(g))}catch(h){throw f(h),h}},cancel(p){return f(p),s.return()}},{highWaterMark:2})},uu=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",QS=uu&&typeof ReadableStream=="function",FT=uu&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),ZS=(e,...t)=>{try{return!!e(...t)}catch{return!1}},VT=QS&&ZS(()=>{let e=!1;const t=new Request(Gt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),ub=64*1024,Qm=QS&&ZS(()=>ae.isReadableStream(new Response("").body)),Nd={stream:Qm&&(e=>e.body)};uu&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Nd[t]&&(Nd[t]=ae.isFunction(e[t])?n=>n[t]():(n,i)=>{throw new ze(`Response type '${t}' is not supported`,ze.ERR_NOT_SUPPORT,i)})})})(new Response);const BT=async e=>{if(e==null)return 0;if(ae.isBlob(e))return e.size;if(ae.isSpecCompliantForm(e))return(await new Request(Gt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(ae.isArrayBufferView(e)||ae.isArrayBuffer(e))return e.byteLength;if(ae.isURLSearchParams(e)&&(e=e+""),ae.isString(e))return(await FT(e)).byteLength},HT=async(e,t)=>{const n=ae.toFiniteNumber(e.getContentLength());return n??BT(t)},WT=uu&&(async e=>{let{url:t,method:n,data:i,signal:s,cancelToken:l,timeout:u,onDownloadProgress:f,onUploadProgress:p,responseType:h,headers:g,withCredentials:b="same-origin",fetchOptions:v}=KS(e);h=h?(h+"").toLowerCase():"text";let j=zT([s,l&&l.toAbortSignal()],u),C;const k=j&&j.unsubscribe&&(()=>{j.unsubscribe()});let _;try{if(p&&VT&&n!=="get"&&n!=="head"&&(_=await HT(g,i))!==0){let M=new Request(t,{method:"POST",body:i,duplex:"half"}),F;if(ae.isFormData(i)&&(F=M.headers.get("content-type"))&&g.setContentType(F),M.body){const[A,R]=ab(_,Rd(lb(p)));i=db(M.body,ub,A,R)}}ae.isString(b)||(b=b?"include":"omit");const E="credentials"in Request.prototype;C=new Request(t,{...v,signal:j,method:n.toUpperCase(),headers:g.normalize().toJSON(),body:i,duplex:"half",credentials:E?b:void 0});let N=await fetch(C);const V=Qm&&(h==="stream"||h==="response");if(Qm&&(f||V&&k)){const M={};["status","statusText","headers"].forEach(T=>{M[T]=N[T]});const F=ae.toFiniteNumber(N.headers.get("content-length")),[A,R]=f&&ab(F,Rd(lb(f),!0))||[];N=new Response(db(N.body,ub,A,()=>{R&&R(),k&&k()}),M)}h=h||"text";let B=await Nd[ae.findKey(Nd,h)||"text"](N,e);return!V&&k&&k(),await new Promise((M,F)=>{YS(M,F,{data:B,headers:cn.from(N.headers),status:N.status,statusText:N.statusText,config:e,request:C})})}catch(E){throw k&&k(),E&&E.name==="TypeError"&&/fetch/i.test(E.message)?Object.assign(new ze("Network Error",ze.ERR_NETWORK,e,C),{cause:E.cause||E}):ze.from(E,E&&E.code,e,C)}}),Zm={http:iT,xhr:LT,fetch:WT};ae.forEach(Zm,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fb=e=>`- ${e}`,UT=e=>ae.isFunction(e)||e===null||e===!1,XS={getAdapter:e=>{e=ae.isArray(e)?e:[e];const{length:t}=e;let n,i;const s={};for(let l=0;l<t;l++){n=e[l];let u;if(i=n,!UT(n)&&(i=Zm[(u=String(n)).toLowerCase()],i===void 0))throw new ze(`Unknown adapter '${u}'`);if(i)break;s[u||"#"+l]=i}if(!i){const l=Object.entries(s).map(([f,p])=>`adapter ${f} `+(p===!1?"is not supported by the environment":"is not available in the build"));let u=t?l.length>1?`since :
`+l.map(fb).join(`
`):" "+fb(l[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+u,"ERR_NOT_SUPPORT")}return i},adapters:Zm};function Fp(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ps(null,e)}function pb(e){return Fp(e),e.headers=cn.from(e.headers),e.data=Ip.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),XS.getAdapter(e.adapter||Xa.adapter)(e).then(function(i){return Fp(e),i.data=Ip.call(e,e.transformResponse,i),i.headers=cn.from(i.headers),i},function(i){return qS(i)||(Fp(e),i&&i.response&&(i.response.data=Ip.call(e,e.transformResponse,i.response),i.response.headers=cn.from(i.response.headers))),Promise.reject(i)})}const JS="1.7.9",fu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{fu[e]=function(i){return typeof i===e||"a"+(t<1?"n ":" ")+e}});const hb={};fu.transitional=function(t,n,i){function s(l,u){return"[Axios v"+JS+"] Transitional option '"+l+"'"+u+(i?". "+i:"")}return(l,u,f)=>{if(t===!1)throw new ze(s(u," has been removed"+(n?" in "+n:"")),ze.ERR_DEPRECATED);return n&&!hb[u]&&(hb[u]=!0,console.warn(s(u," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,u,f):!0}};fu.spelling=function(t){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${t}`),!0)};function qT(e,t,n){if(typeof e!="object")throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const i=Object.keys(e);let s=i.length;for(;s-- >0;){const l=i[s],u=t[l];if(u){const f=e[l],p=f===void 0||u(f,l,e);if(p!==!0)throw new ze("option "+l+" must be "+p,ze.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ze("Unknown option "+l,ze.ERR_BAD_OPTION)}}const bd={assertOptions:qT,validators:fu},Jn=bd.validators;class Zo{constructor(t){this.defaults=t,this.interceptors={request:new ib,response:new ib}}async request(t,n){try{return await this._request(t,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{i.stack?l&&!String(i.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(i.stack+=`
`+l):i.stack=l}catch{}}throw i}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ei(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:l}=n;i!==void 0&&bd.assertOptions(i,{silentJSONParsing:Jn.transitional(Jn.boolean),forcedJSONParsing:Jn.transitional(Jn.boolean),clarifyTimeoutError:Jn.transitional(Jn.boolean)},!1),s!=null&&(ae.isFunction(s)?n.paramsSerializer={serialize:s}:bd.assertOptions(s,{encode:Jn.function,serialize:Jn.function},!0)),bd.assertOptions(n,{baseUrl:Jn.spelling("baseURL"),withXsrfToken:Jn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let u=l&&ae.merge(l.common,l[n.method]);l&&ae.forEach(["delete","get","head","post","put","patch","common"],C=>{delete l[C]}),n.headers=cn.concat(u,l);const f=[];let p=!0;this.interceptors.request.forEach(function(k){typeof k.runWhen=="function"&&k.runWhen(n)===!1||(p=p&&k.synchronous,f.unshift(k.fulfilled,k.rejected))});const h=[];this.interceptors.response.forEach(function(k){h.push(k.fulfilled,k.rejected)});let g,b=0,v;if(!p){const C=[pb.bind(this),void 0];for(C.unshift.apply(C,f),C.push.apply(C,h),v=C.length,g=Promise.resolve(n);b<v;)g=g.then(C[b++],C[b++]);return g}v=f.length;let j=n;for(b=0;b<v;){const C=f[b++],k=f[b++];try{j=C(j)}catch(_){k.call(this,_);break}}try{g=pb.call(this,j)}catch(C){return Promise.reject(C)}for(b=0,v=h.length;b<v;)g=g.then(h[b++],h[b++]);return g}getUri(t){t=ei(this.defaults,t);const n=GS(t.baseURL,t.url);return HS(n,t.params,t.paramsSerializer)}}ae.forEach(["delete","get","head","options"],function(t){Zo.prototype[t]=function(n,i){return this.request(ei(i||{},{method:t,url:n,data:(i||{}).data}))}});ae.forEach(["post","put","patch"],function(t){function n(i){return function(l,u,f){return this.request(ei(f||{},{method:t,headers:i?{"Content-Type":"multipart/form-data"}:{},url:l,data:u}))}}Zo.prototype[t]=n(),Zo.prototype[t+"Form"]=n(!0)});class y0{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const i=this;this.promise.then(s=>{if(!i._listeners)return;let l=i._listeners.length;for(;l-- >0;)i._listeners[l](s);i._listeners=null}),this.promise.then=s=>{let l;const u=new Promise(f=>{i.subscribe(f),l=f}).then(s);return u.cancel=function(){i.unsubscribe(l)},u},t(function(l,u,f){i.reason||(i.reason=new ps(l,u,f),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=i=>{t.abort(i)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new y0(function(s){t=s}),cancel:t}}}function YT(e){return function(n){return e.apply(null,n)}}function GT(e){return ae.isObject(e)&&e.isAxiosError===!0}const Xm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Xm).forEach(([e,t])=>{Xm[t]=e});function ek(e){const t=new Zo(e),n=DS(Zo.prototype.request,t);return ae.extend(n,Zo.prototype,t,{allOwnKeys:!0}),ae.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ek(ei(e,s))},n}const kt=ek(Xa);kt.Axios=Zo;kt.CanceledError=ps;kt.CancelToken=y0;kt.isCancel=qS;kt.VERSION=JS;kt.toFormData=du;kt.AxiosError=ze;kt.Cancel=kt.CanceledError;kt.all=function(t){return Promise.all(t)};kt.spread=YT;kt.isAxiosError=GT;kt.mergeConfig=ei;kt.AxiosHeaders=cn;kt.formToJSON=e=>US(ae.isHTMLForm(e)?new FormData(e):e);kt.getAdapter=XS.getAdapter;kt.HttpStatusCode=Xm;kt.default=kt;const tk={NODE_ENV:"production",AdminBackendURL:"https://aetherbot.ai/api/admin",ClientBackendURL:"https://aetherbot.ai/api",ImageBackendURL:"https://aetherbot.ai",PDFImageBackendURL:void 0},KT="/assets/timeout-BhwhLjDD.png",QT=()=>{const e=Ke(),t=()=>{localStorage.clear(),e("/admin/login",{replace:!0}),window.location.reload()};return r.jsx(r.Fragment,{children:r.jsx(ZT,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(XT,{children:[r.jsx(JT,{children:r.jsx(eD,{src:KT})}),r.jsx(tD,{children:"Session Expired"}),r.jsx(nD,{children:"Your session has expired. Please log in again."}),r.jsx(rD,{onClick:t,children:"Login"})]})})})})},ZT=d.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,XT=d.div`
  display: grid;
  justify-items: center;
  margin-top: 80px;
`,JT=d.div`
  width: 200px;
  height: 200px;
  border-radius: 12px;
`,eD=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,tD=d.div`
  margin-top: 20px;
  font-size: 24px;
  font-weight: 500;
`,nD=d.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 400;
`,rD=d.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  background-color: #1a6a89;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
`,oD=()=>tk.AdminBackendURL,iD=()=>tk.ClientBackendURL,ce=kt.create({baseURL:oD()}),Re=kt.create({baseURL:iD()}),Jm=()=>{Z4.render(r.jsx(jj,{children:r.jsx(QT,{})}))};ce.interceptors.request.use(e=>{const t=localStorage.getItem("accesstoken");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>(Jm(),Promise.reject(e)));ce.interceptors.request.use(e=>navigator.onLine?e:Promise.reject(new Error("No internet connection")),e=>Promise.reject(e));ce.interceptors.response.use(e=>e,async e=>{const t=e.config;if(t.url.includes("/refresh/refreshtoken"))return Jm(),Promise.reject(e);if(e.response.status===401&&!t._retry){t._retry=!0;const n=localStorage.getItem("refreshtoken");try{const i=await ce.post("/refresh/refreshtoken",{refreshToken:n});return localStorage.setItem("accesstoken",i.data.data.accesstoken),localStorage.setItem("refreshtoken",i.data.data.refreshtoken),t.headers.Authorization=`Bearer ${i.data.accesstoken}`,ce(t)}catch(i){return Jm(),Promise.reject(i)}}return Promise.reject(e)});var Vp={},Bp={},la={},Hp={},mb;function sD(){return mb||(mb=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t}(Hp)),Hp}var Wp,gb;function aD(){if(gb)return Wp;gb=1;var e="Expected a function",t=NaN,n="[object Symbol]",i=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,p=typeof mc=="object"&&mc&&mc.Object===Object&&mc,h=typeof self=="object"&&self&&self.Object===Object&&self,g=p||h||Function("return this")(),b=Object.prototype,v=b.toString,j=Math.max,C=Math.min,k=function(){return g.Date.now()};function _(M,F,A){var R,T,D,z,H,W,Y=0,G=!1,X=!1,$=!0;if(typeof M!="function")throw new TypeError(e);F=B(F)||0,E(A)&&(G=!!A.leading,X="maxWait"in A,D=X?j(B(A.maxWait)||0,F):D,$="trailing"in A?!!A.trailing:$);function J(se){var de=R,fe=T;return R=T=void 0,Y=se,z=M.apply(fe,de),z}function I(se){return Y=se,H=setTimeout(U,F),G?J(se):z}function P(se){var de=se-W,fe=se-Y,ye=F-de;return X?C(ye,D-fe):ye}function O(se){var de=se-W,fe=se-Y;return W===void 0||de>=F||de<0||X&&fe>=D}function U(){var se=k();if(O(se))return Q(se);H=setTimeout(U,P(se))}function Q(se){return H=void 0,$&&R?J(se):(R=T=void 0,z)}function ee(){H!==void 0&&clearTimeout(H),Y=0,R=W=T=H=void 0}function ie(){return H===void 0?z:Q(k())}function re(){var se=k(),de=O(se);if(R=arguments,T=this,W=se,de){if(H===void 0)return I(W);if(X)return H=setTimeout(U,F),J(W)}return H===void 0&&(H=setTimeout(U,F)),z}return re.cancel=ee,re.flush=ie,re}function E(M){var F=typeof M;return!!M&&(F=="object"||F=="function")}function N(M){return!!M&&typeof M=="object"}function V(M){return typeof M=="symbol"||N(M)&&v.call(M)==n}function B(M){if(typeof M=="number")return M;if(V(M))return t;if(E(M)){var F=typeof M.valueOf=="function"?M.valueOf():M;M=E(F)?F+"":F}if(typeof M!="string")return M===0?M:+M;M=M.replace(i,"");var A=l.test(M);return A||u.test(M)?f(M.slice(2),A?2:8):s.test(M)?t:+M}return Wp=_,Wp}var Up={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var xb;function pu(){return xb||(xb=1,function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",u=0;u<arguments.length;u++){var f=arguments[u];f&&(l=s(l,i(f)))}return l}function i(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var f in l)t.call(l,f)&&l[f]&&(u=s(u,f));return u}function s(l,u){return u?l?l+" "+u:l+u:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()}(Up)),Up.exports}var ve={},qp={},vb;function nk(){return vb||(vb=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(Bn());function n(s){return s&&s.__esModule?s:{default:s}}var i={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null};e.default=i}(qp)),qp}var yb;function Ja(){if(yb)return ve;yb=1,Object.defineProperty(ve,"__esModule",{value:!0}),ve.checkSpecKeys=ve.checkNavigable=ve.changeSlide=ve.canUseDOM=ve.canGoNext=void 0,ve.clamp=h,ve.extractObject=void 0,ve.filterSettings=J,ve.validSettings=ve.swipeStart=ve.swipeMove=ve.swipeEnd=ve.slidesOnRight=ve.slidesOnLeft=ve.slideHandler=ve.siblingDirection=ve.safePreventDefault=ve.lazyStartIndex=ve.lazySlidesOnRight=ve.lazySlidesOnLeft=ve.lazyEndIndex=ve.keyHandler=ve.initializedState=ve.getWidth=ve.getTrackLeft=ve.getTrackCSS=ve.getTrackAnimateCSS=ve.getTotalSlides=ve.getSwipeDirection=ve.getSlideCount=ve.getRequiredLazySlides=ve.getPreClones=ve.getPostClones=ve.getOnDemandLazySlides=ve.getNavigableIndexes=ve.getHeight=void 0;var e=n(Bn()),t=n(nk());function n(I){return I&&I.__esModule?I:{default:I}}function i(I){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(P){return typeof P}:function(P){return P&&typeof Symbol=="function"&&P.constructor===Symbol&&P!==Symbol.prototype?"symbol":typeof P},i(I)}function s(I,P){var O=Object.keys(I);if(Object.getOwnPropertySymbols){var U=Object.getOwnPropertySymbols(I);P&&(U=U.filter(function(Q){return Object.getOwnPropertyDescriptor(I,Q).enumerable})),O.push.apply(O,U)}return O}function l(I){for(var P=1;P<arguments.length;P++){var O=arguments[P]!=null?arguments[P]:{};P%2?s(Object(O),!0).forEach(function(U){u(I,U,O[U])}):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(O)):s(Object(O)).forEach(function(U){Object.defineProperty(I,U,Object.getOwnPropertyDescriptor(O,U))})}return I}function u(I,P,O){return P=f(P),P in I?Object.defineProperty(I,P,{value:O,enumerable:!0,configurable:!0,writable:!0}):I[P]=O,I}function f(I){var P=p(I,"string");return i(P)=="symbol"?P:String(P)}function p(I,P){if(i(I)!="object"||!I)return I;var O=I[Symbol.toPrimitive];if(O!==void 0){var U=O.call(I,P||"default");if(i(U)!="object")return U;throw new TypeError("@@toPrimitive must return a primitive value.")}return(P==="string"?String:Number)(I)}function h(I,P,O){return Math.max(P,Math.min(I,O))}var g=ve.safePreventDefault=function(P){var O=["onTouchStart","onTouchMove","onWheel"];O.includes(P._reactName)||P.preventDefault()},b=ve.getOnDemandLazySlides=function(P){for(var O=[],U=v(P),Q=j(P),ee=U;ee<Q;ee++)P.lazyLoadedList.indexOf(ee)<0&&O.push(ee);return O};ve.getRequiredLazySlides=function(P){for(var O=[],U=v(P),Q=j(P),ee=U;ee<Q;ee++)O.push(ee);return O};var v=ve.lazyStartIndex=function(P){return P.currentSlide-C(P)},j=ve.lazyEndIndex=function(P){return P.currentSlide+k(P)},C=ve.lazySlidesOnLeft=function(P){return P.centerMode?Math.floor(P.slidesToShow/2)+(parseInt(P.centerPadding)>0?1:0):0},k=ve.lazySlidesOnRight=function(P){return P.centerMode?Math.floor((P.slidesToShow-1)/2)+1+(parseInt(P.centerPadding)>0?1:0):P.slidesToShow},_=ve.getWidth=function(P){return P&&P.offsetWidth||0},E=ve.getHeight=function(P){return P&&P.offsetHeight||0},N=ve.getSwipeDirection=function(P){var O=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,U,Q,ee,ie;return U=P.startX-P.curX,Q=P.startY-P.curY,ee=Math.atan2(Q,U),ie=Math.round(ee*180/Math.PI),ie<0&&(ie=360-Math.abs(ie)),ie<=45&&ie>=0||ie<=360&&ie>=315?"left":ie>=135&&ie<=225?"right":O===!0?ie>=35&&ie<=135?"up":"down":"vertical"},V=ve.canGoNext=function(P){var O=!0;return P.infinite||(P.centerMode&&P.currentSlide>=P.slideCount-1||P.slideCount<=P.slidesToShow||P.currentSlide>=P.slideCount-P.slidesToShow)&&(O=!1),O};ve.extractObject=function(P,O){var U={};return O.forEach(function(Q){return U[Q]=P[Q]}),U},ve.initializedState=function(P){var O=e.default.Children.count(P.children),U=P.listRef,Q=Math.ceil(_(U)),ee=P.trackRef&&P.trackRef.node,ie=Math.ceil(_(ee)),re;if(P.vertical)re=Q;else{var se=P.centerMode&&parseInt(P.centerPadding)*2;typeof P.centerPadding=="string"&&P.centerPadding.slice(-1)==="%"&&(se*=Q/100),re=Math.ceil((Q-se)/P.slidesToShow)}var de=U&&E(U.querySelector('[data-index="0"]')),fe=de*P.slidesToShow,ye=P.currentSlide===void 0?P.initialSlide:P.currentSlide;P.rtl&&P.currentSlide===void 0&&(ye=O-1-P.initialSlide);var Pe=P.lazyLoadedList||[],ke=b(l(l({},P),{},{currentSlide:ye,lazyLoadedList:Pe}));Pe=Pe.concat(ke);var xe={slideCount:O,slideWidth:re,listWidth:Q,trackWidth:ie,currentSlide:ye,slideHeight:de,listHeight:fe,lazyLoadedList:Pe};return P.autoplaying===null&&P.autoplay&&(xe.autoplaying="playing"),xe},ve.slideHandler=function(P){var O=P.waitForAnimate,U=P.animating,Q=P.fade,ee=P.infinite,ie=P.index,re=P.slideCount,se=P.lazyLoad,de=P.currentSlide,fe=P.centerMode,ye=P.slidesToScroll,Pe=P.slidesToShow,ke=P.useCSS,xe=P.lazyLoadedList;if(O&&U)return{};var me=ie,$e,Le,Me,Qe={},Je={},et=ee?ie:h(ie,0,re-1);if(Q){if(!ee&&(ie<0||ie>=re))return{};ie<0?me=ie+re:ie>=re&&(me=ie-re),se&&xe.indexOf(me)<0&&(xe=xe.concat(me)),Qe={animating:!0,currentSlide:me,lazyLoadedList:xe,targetSlide:me},Je={animating:!1,targetSlide:me}}else $e=me,me<0?($e=me+re,ee?re%ye!==0&&($e=re-re%ye):$e=0):!V(P)&&me>de?me=$e=de:fe&&me>=re?(me=ee?re:re-1,$e=ee?0:re-1):me>=re&&($e=me-re,ee?re%ye!==0&&($e=0):$e=re-Pe),!ee&&me+Pe>=re&&($e=re-Pe),Le=D(l(l({},P),{},{slideIndex:me})),Me=D(l(l({},P),{},{slideIndex:$e})),ee||(Le===Me&&(me=$e),Le=Me),se&&(xe=xe.concat(b(l(l({},P),{},{currentSlide:me})))),ke?(Qe={animating:!0,currentSlide:$e,trackStyle:T(l(l({},P),{},{left:Le})),lazyLoadedList:xe,targetSlide:et},Je={animating:!1,currentSlide:$e,trackStyle:R(l(l({},P),{},{left:Me})),swipeLeft:null,targetSlide:et}):Qe={currentSlide:$e,trackStyle:R(l(l({},P),{},{left:Me})),lazyLoadedList:xe,targetSlide:et};return{state:Qe,nextState:Je}},ve.changeSlide=function(P,O){var U,Q,ee,ie,re,se=P.slidesToScroll,de=P.slidesToShow,fe=P.slideCount,ye=P.currentSlide,Pe=P.targetSlide,ke=P.lazyLoad,xe=P.infinite;if(ie=fe%se!==0,U=ie?0:(fe-ye)%se,O.message==="previous")ee=U===0?se:de-U,re=ye-ee,ke&&!xe&&(Q=ye-ee,re=Q===-1?fe-1:Q),xe||(re=Pe-se);else if(O.message==="next")ee=U===0?se:U,re=ye+ee,ke&&!xe&&(re=(ye+se)%fe+U),xe||(re=Pe+se);else if(O.message==="dots")re=O.index*O.slidesToScroll;else if(O.message==="children"){if(re=O.index,xe){var me=Y(l(l({},P),{},{targetSlide:re}));re>O.currentSlide&&me==="left"?re=re-fe:re<O.currentSlide&&me==="right"&&(re=re+fe)}}else O.message==="index"&&(re=Number(O.index));return re},ve.keyHandler=function(P,O,U){return P.target.tagName.match("TEXTAREA|INPUT|SELECT")||!O?"":P.keyCode===37?U?"next":"previous":P.keyCode===39?U?"previous":"next":""},ve.swipeStart=function(P,O,U){return P.target.tagName==="IMG"&&g(P),!O||!U&&P.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:P.touches?P.touches[0].pageX:P.clientX,startY:P.touches?P.touches[0].pageY:P.clientY,curX:P.touches?P.touches[0].pageX:P.clientX,curY:P.touches?P.touches[0].pageY:P.clientY}}},ve.swipeMove=function(P,O){var U=O.scrolling,Q=O.animating,ee=O.vertical,ie=O.swipeToSlide,re=O.verticalSwiping,se=O.rtl,de=O.currentSlide,fe=O.edgeFriction,ye=O.edgeDragged,Pe=O.onEdge,ke=O.swiped,xe=O.swiping,me=O.slideCount,$e=O.slidesToScroll,Le=O.infinite,Me=O.touchObject,Qe=O.swipeEvent,Je=O.listHeight,et=O.listWidth;if(!U){if(Q)return g(P);ee&&ie&&re&&g(P);var gt,un={},qn=D(O);Me.curX=P.touches?P.touches[0].pageX:P.clientX,Me.curY=P.touches?P.touches[0].pageY:P.clientY,Me.swipeLength=Math.round(Math.sqrt(Math.pow(Me.curX-Me.startX,2)));var yo=Math.round(Math.sqrt(Math.pow(Me.curY-Me.startY,2)));if(!re&&!xe&&yo>10)return{scrolling:!0};re&&(Me.swipeLength=yo);var Yn=(se?-1:1)*(Me.curX>Me.startX?1:-1);re&&(Yn=Me.curY>Me.startY?1:-1);var si=Math.ceil(me/$e),Xt=N(O.touchObject,re),jn=Me.swipeLength;return Le||(de===0&&(Xt==="right"||Xt==="down")||de+1>=si&&(Xt==="left"||Xt==="up")||!V(O)&&(Xt==="left"||Xt==="up"))&&(jn=Me.swipeLength*fe,ye===!1&&Pe&&(Pe(Xt),un.edgeDragged=!0)),!ke&&Qe&&(Qe(Xt),un.swiped=!0),ee?gt=qn+jn*(Je/et)*Yn:se?gt=qn-jn*Yn:gt=qn+jn*Yn,re&&(gt=qn+jn*Yn),un=l(l({},un),{},{touchObject:Me,swipeLeft:gt,trackStyle:R(l(l({},O),{},{left:gt}))}),Math.abs(Me.curX-Me.startX)<Math.abs(Me.curY-Me.startY)*.8||Me.swipeLength>10&&(un.swiping=!0,g(P)),un}},ve.swipeEnd=function(P,O){var U=O.dragging,Q=O.swipe,ee=O.touchObject,ie=O.listWidth,re=O.touchThreshold,se=O.verticalSwiping,de=O.listHeight,fe=O.swipeToSlide,ye=O.scrolling,Pe=O.onSwipe,ke=O.targetSlide,xe=O.currentSlide,me=O.infinite;if(!U)return Q&&g(P),{};var $e=se?de/re:ie/re,Le=N(ee,se),Me={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(ye||!ee.swipeLength)return Me;if(ee.swipeLength>$e){g(P),Pe&&Pe(Le);var Qe,Je,et=me?xe:ke;switch(Le){case"left":case"up":Je=et+F(O),Qe=fe?M(O,Je):Je,Me.currentDirection=0;break;case"right":case"down":Je=et-F(O),Qe=fe?M(O,Je):Je,Me.currentDirection=1;break;default:Qe=et}Me.triggerSlideHandler=Qe}else{var gt=D(O);Me.trackStyle=T(l(l({},O),{},{left:gt}))}return Me};var B=ve.getNavigableIndexes=function(P){for(var O=P.infinite?P.slideCount*2:P.slideCount,U=P.infinite?P.slidesToShow*-1:0,Q=P.infinite?P.slidesToShow*-1:0,ee=[];U<O;)ee.push(U),U=Q+P.slidesToScroll,Q+=Math.min(P.slidesToScroll,P.slidesToShow);return ee},M=ve.checkNavigable=function(P,O){var U=B(P),Q=0;if(O>U[U.length-1])O=U[U.length-1];else for(var ee in U){if(O<U[ee]){O=Q;break}Q=U[ee]}return O},F=ve.getSlideCount=function(P){var O=P.centerMode?P.slideWidth*Math.floor(P.slidesToShow/2):0;if(P.swipeToSlide){var U,Q=P.listRef,ee=Q.querySelectorAll&&Q.querySelectorAll(".slick-slide")||[];if(Array.from(ee).every(function(se){if(P.vertical){if(se.offsetTop+E(se)/2>P.swipeLeft*-1)return U=se,!1}else if(se.offsetLeft-O+_(se)/2>P.swipeLeft*-1)return U=se,!1;return!0}),!U)return 0;var ie=P.rtl===!0?P.slideCount-P.currentSlide:P.currentSlide,re=Math.abs(U.dataset.index-ie)||1;return re}else return P.slidesToScroll},A=ve.checkSpecKeys=function(P,O){return O.reduce(function(U,Q){return U&&P.hasOwnProperty(Q)},!0)?null:console.error("Keys Missing:",P)},R=ve.getTrackCSS=function(P){A(P,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var O,U,Q=P.slideCount+2*P.slidesToShow;P.vertical?U=Q*P.slideHeight:O=W(P)*P.slideWidth;var ee={opacity:1,transition:"",WebkitTransition:""};if(P.useTransform){var ie=P.vertical?"translate3d(0px, "+P.left+"px, 0px)":"translate3d("+P.left+"px, 0px, 0px)",re=P.vertical?"translate3d(0px, "+P.left+"px, 0px)":"translate3d("+P.left+"px, 0px, 0px)",se=P.vertical?"translateY("+P.left+"px)":"translateX("+P.left+"px)";ee=l(l({},ee),{},{WebkitTransform:ie,transform:re,msTransform:se})}else P.vertical?ee.top=P.left:ee.left=P.left;return P.fade&&(ee={opacity:1}),O&&(ee.width=O),U&&(ee.height=U),window&&!window.addEventListener&&window.attachEvent&&(P.vertical?ee.marginTop=P.left+"px":ee.marginLeft=P.left+"px"),ee},T=ve.getTrackAnimateCSS=function(P){A(P,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var O=R(P);return P.useTransform?(O.WebkitTransition="-webkit-transform "+P.speed+"ms "+P.cssEase,O.transition="transform "+P.speed+"ms "+P.cssEase):P.vertical?O.transition="top "+P.speed+"ms "+P.cssEase:O.transition="left "+P.speed+"ms "+P.cssEase,O},D=ve.getTrackLeft=function(P){if(P.unslick)return 0;A(P,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var O=P.slideIndex,U=P.trackRef,Q=P.infinite,ee=P.centerMode,ie=P.slideCount,re=P.slidesToShow,se=P.slidesToScroll,de=P.slideWidth,fe=P.listWidth,ye=P.variableWidth,Pe=P.slideHeight,ke=P.fade,xe=P.vertical,me=0,$e,Le,Me=0;if(ke||P.slideCount===1)return 0;var Qe=0;if(Q?(Qe=-z(P),ie%se!==0&&O+se>ie&&(Qe=-(O>ie?re-(O-ie):ie%se)),ee&&(Qe+=parseInt(re/2))):(ie%se!==0&&O+se>ie&&(Qe=re-ie%se),ee&&(Qe=parseInt(re/2))),me=Qe*de,Me=Qe*Pe,xe?$e=O*Pe*-1+Me:$e=O*de*-1+me,ye===!0){var Je,et=U&&U.node;if(Je=O+z(P),Le=et&&et.childNodes[Je],$e=Le?Le.offsetLeft*-1:0,ee===!0){Je=Q?O+z(P):O,Le=et&&et.children[Je],$e=0;for(var gt=0;gt<Je;gt++)$e-=et&&et.children[gt]&&et.children[gt].offsetWidth;$e-=parseInt(P.centerPadding),$e+=Le&&(fe-Le.offsetWidth)/2}}return $e},z=ve.getPreClones=function(P){return P.unslick||!P.infinite?0:P.variableWidth?P.slideCount:P.slidesToShow+(P.centerMode?1:0)},H=ve.getPostClones=function(P){return P.unslick||!P.infinite?0:P.slideCount},W=ve.getTotalSlides=function(P){return P.slideCount===1?1:z(P)+P.slideCount+H(P)},Y=ve.siblingDirection=function(P){return P.targetSlide>P.currentSlide?P.targetSlide>P.currentSlide+G(P)?"left":"right":P.targetSlide<P.currentSlide-X(P)?"right":"left"},G=ve.slidesOnRight=function(P){var O=P.slidesToShow,U=P.centerMode,Q=P.rtl,ee=P.centerPadding;if(U){var ie=(O-1)/2+1;return parseInt(ee)>0&&(ie+=1),Q&&O%2===0&&(ie+=1),ie}return Q?0:O-1},X=ve.slidesOnLeft=function(P){var O=P.slidesToShow,U=P.centerMode,Q=P.rtl,ee=P.centerPadding;if(U){var ie=(O-1)/2+1;return parseInt(ee)>0&&(ie+=1),!Q&&O%2===0&&(ie+=1),ie}return Q?O-1:0};ve.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var $=ve.validSettings=Object.keys(t.default);function J(I){return $.reduce(function(P,O){return I.hasOwnProperty(O)&&(P[O]=I[O]),P},{})}return ve}var ca={},bb;function lD(){if(bb)return ca;bb=1,Object.defineProperty(ca,"__esModule",{value:!0}),ca.Track=void 0;var e=i(Bn()),t=i(pu()),n=Ja();function i(T){return T&&T.__esModule?T:{default:T}}function s(T){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},s(T)}function l(){return l=Object.assign?Object.assign.bind():function(T){for(var D=1;D<arguments.length;D++){var z=arguments[D];for(var H in z)Object.prototype.hasOwnProperty.call(z,H)&&(T[H]=z[H])}return T},l.apply(this,arguments)}function u(T,D){if(!(T instanceof D))throw new TypeError("Cannot call a class as a function")}function f(T,D){for(var z=0;z<D.length;z++){var H=D[z];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(T,V(H.key),H)}}function p(T,D,z){return D&&f(T.prototype,D),Object.defineProperty(T,"prototype",{writable:!1}),T}function h(T,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(D&&D.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),D&&g(T,D)}function g(T,D){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(H,W){return H.__proto__=W,H},g(T,D)}function b(T){var D=C();return function(){var H=k(T),W;if(D){var Y=k(this).constructor;W=Reflect.construct(H,arguments,Y)}else W=H.apply(this,arguments);return v(this,W)}}function v(T,D){if(D&&(s(D)==="object"||typeof D=="function"))return D;if(D!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return j(T)}function j(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function C(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(C=function(){return!!T})()}function k(T){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},k(T)}function _(T,D){var z=Object.keys(T);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(T);D&&(H=H.filter(function(W){return Object.getOwnPropertyDescriptor(T,W).enumerable})),z.push.apply(z,H)}return z}function E(T){for(var D=1;D<arguments.length;D++){var z=arguments[D]!=null?arguments[D]:{};D%2?_(Object(z),!0).forEach(function(H){N(T,H,z[H])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(z)):_(Object(z)).forEach(function(H){Object.defineProperty(T,H,Object.getOwnPropertyDescriptor(z,H))})}return T}function N(T,D,z){return D=V(D),D in T?Object.defineProperty(T,D,{value:z,enumerable:!0,configurable:!0,writable:!0}):T[D]=z,T}function V(T){var D=B(T,"string");return s(D)=="symbol"?D:String(D)}function B(T,D){if(s(T)!="object"||!T)return T;var z=T[Symbol.toPrimitive];if(z!==void 0){var H=z.call(T,D||"default");if(s(H)!="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(T)}var M=function(D){var z,H,W,Y,G;D.rtl?G=D.slideCount-1-D.index:G=D.index,W=G<0||G>=D.slideCount,D.centerMode?(Y=Math.floor(D.slidesToShow/2),H=(G-D.currentSlide)%D.slideCount===0,G>D.currentSlide-Y-1&&G<=D.currentSlide+Y&&(z=!0)):z=D.currentSlide<=G&&G<D.currentSlide+D.slidesToShow;var X;D.targetSlide<0?X=D.targetSlide+D.slideCount:D.targetSlide>=D.slideCount?X=D.targetSlide-D.slideCount:X=D.targetSlide;var $=G===X;return{"slick-slide":!0,"slick-active":z,"slick-center":H,"slick-cloned":W,"slick-current":$}},F=function(D){var z={};return(D.variableWidth===void 0||D.variableWidth===!1)&&(z.width=D.slideWidth),D.fade&&(z.position="relative",D.vertical?z.top=-D.index*parseInt(D.slideHeight):z.left=-D.index*parseInt(D.slideWidth),z.opacity=D.currentSlide===D.index?1:0,z.zIndex=D.currentSlide===D.index?999:998,D.useCSS&&(z.transition="opacity "+D.speed+"ms "+D.cssEase+", visibility "+D.speed+"ms "+D.cssEase)),z},A=function(D,z){return D.key||z},R=function(D){var z,H=[],W=[],Y=[],G=e.default.Children.count(D.children),X=(0,n.lazyStartIndex)(D),$=(0,n.lazyEndIndex)(D);return e.default.Children.forEach(D.children,function(J,I){var P,O={message:"children",index:I,slidesToScroll:D.slidesToScroll,currentSlide:D.currentSlide};!D.lazyLoad||D.lazyLoad&&D.lazyLoadedList.indexOf(I)>=0?P=J:P=e.default.createElement("div",null);var U=F(E(E({},D),{},{index:I})),Q=P.props.className||"",ee=M(E(E({},D),{},{index:I}));if(H.push(e.default.cloneElement(P,{key:"original"+A(P,I),"data-index":I,className:(0,t.default)(ee,Q),tabIndex:"-1","aria-hidden":!ee["slick-active"],style:E(E({outline:"none"},P.props.style||{}),U),onClick:function(se){P.props&&P.props.onClick&&P.props.onClick(se),D.focusOnSelect&&D.focusOnSelect(O)}})),D.infinite&&D.fade===!1){var ie=G-I;ie<=(0,n.getPreClones)(D)&&(z=-ie,z>=X&&(P=J),ee=M(E(E({},D),{},{index:z})),W.push(e.default.cloneElement(P,{key:"precloned"+A(P,z),"data-index":z,tabIndex:"-1",className:(0,t.default)(ee,Q),"aria-hidden":!ee["slick-active"],style:E(E({},P.props.style||{}),U),onClick:function(se){P.props&&P.props.onClick&&P.props.onClick(se),D.focusOnSelect&&D.focusOnSelect(O)}}))),z=G+I,z<$&&(P=J),ee=M(E(E({},D),{},{index:z})),Y.push(e.default.cloneElement(P,{key:"postcloned"+A(P,z),"data-index":z,tabIndex:"-1",className:(0,t.default)(ee,Q),"aria-hidden":!ee["slick-active"],style:E(E({},P.props.style||{}),U),onClick:function(se){P.props&&P.props.onClick&&P.props.onClick(se),D.focusOnSelect&&D.focusOnSelect(O)}}))}}),D.rtl?W.concat(H,Y).reverse():W.concat(H,Y)};return ca.Track=function(T){h(z,T);var D=b(z);function z(){var H;u(this,z);for(var W=arguments.length,Y=new Array(W),G=0;G<W;G++)Y[G]=arguments[G];return H=D.call.apply(D,[this].concat(Y)),N(j(H),"node",null),N(j(H),"handleRef",function(X){H.node=X}),H}return p(z,[{key:"render",value:function(){var W=R(this.props),Y=this.props,G=Y.onMouseEnter,X=Y.onMouseOver,$=Y.onMouseLeave,J={onMouseEnter:G,onMouseOver:X,onMouseLeave:$};return e.default.createElement("div",l({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},J),W)}}]),z}(e.default.PureComponent),ca}var da={},wb;function cD(){if(wb)return da;wb=1;function e(M){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},e(M)}Object.defineProperty(da,"__esModule",{value:!0}),da.Dots=void 0;var t=s(Bn()),n=s(pu()),i=Ja();function s(M){return M&&M.__esModule?M:{default:M}}function l(M,F){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(M);F&&(R=R.filter(function(T){return Object.getOwnPropertyDescriptor(M,T).enumerable})),A.push.apply(A,R)}return A}function u(M){for(var F=1;F<arguments.length;F++){var A=arguments[F]!=null?arguments[F]:{};F%2?l(Object(A),!0).forEach(function(R){f(M,R,A[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach(function(R){Object.defineProperty(M,R,Object.getOwnPropertyDescriptor(A,R))})}return M}function f(M,F,A){return F=b(F),F in M?Object.defineProperty(M,F,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[F]=A,M}function p(M,F){if(!(M instanceof F))throw new TypeError("Cannot call a class as a function")}function h(M,F){for(var A=0;A<F.length;A++){var R=F[A];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(M,b(R.key),R)}}function g(M,F,A){return F&&h(M.prototype,F),Object.defineProperty(M,"prototype",{writable:!1}),M}function b(M){var F=v(M,"string");return e(F)=="symbol"?F:String(F)}function v(M,F){if(e(M)!="object"||!M)return M;var A=M[Symbol.toPrimitive];if(A!==void 0){var R=A.call(M,F||"default");if(e(R)!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(M)}function j(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),F&&C(M,F)}function C(M,F){return C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(R,T){return R.__proto__=T,R},C(M,F)}function k(M){var F=N();return function(){var R=V(M),T;if(F){var D=V(this).constructor;T=Reflect.construct(R,arguments,D)}else T=R.apply(this,arguments);return _(this,T)}}function _(M,F){if(F&&(e(F)==="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return E(M)}function E(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function N(){try{var M=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(N=function(){return!!M})()}function V(M){return V=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},V(M)}var B=function(F){var A;return F.infinite?A=Math.ceil(F.slideCount/F.slidesToScroll):A=Math.ceil((F.slideCount-F.slidesToShow)/F.slidesToScroll)+1,A};return da.Dots=function(M){j(A,M);var F=k(A);function A(){return p(this,A),F.apply(this,arguments)}return g(A,[{key:"clickHandler",value:function(T,D){D.preventDefault(),this.props.clickHandler(T)}},{key:"render",value:function(){for(var T=this.props,D=T.onMouseEnter,z=T.onMouseOver,H=T.onMouseLeave,W=T.infinite,Y=T.slidesToScroll,G=T.slidesToShow,X=T.slideCount,$=T.currentSlide,J=B({slideCount:X,slidesToScroll:Y,slidesToShow:G,infinite:W}),I={onMouseEnter:D,onMouseOver:z,onMouseLeave:H},P=[],O=0;O<J;O++){var U=(O+1)*Y-1,Q=W?U:(0,i.clamp)(U,0,X-1),ee=Q-(Y-1),ie=W?ee:(0,i.clamp)(ee,0,X-1),re=(0,n.default)({"slick-active":W?$>=ie&&$<=Q:$===ie}),se={message:"dots",index:O,slidesToScroll:Y,currentSlide:$},de=this.clickHandler.bind(this,se);P=P.concat(t.default.createElement("li",{key:O,className:re},t.default.cloneElement(this.props.customPaging(O),{onClick:de})))}return t.default.cloneElement(this.props.appendDots(P),u({className:this.props.dotsClass},I))}}]),A}(t.default.PureComponent),da}var zo={},jb;function dD(){if(jb)return zo;jb=1;function e(M){"@babel/helpers - typeof";return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(F){return typeof F}:function(F){return F&&typeof Symbol=="function"&&F.constructor===Symbol&&F!==Symbol.prototype?"symbol":typeof F},e(M)}Object.defineProperty(zo,"__esModule",{value:!0}),zo.PrevArrow=zo.NextArrow=void 0;var t=s(Bn()),n=s(pu()),i=Ja();function s(M){return M&&M.__esModule?M:{default:M}}function l(){return l=Object.assign?Object.assign.bind():function(M){for(var F=1;F<arguments.length;F++){var A=arguments[F];for(var R in A)Object.prototype.hasOwnProperty.call(A,R)&&(M[R]=A[R])}return M},l.apply(this,arguments)}function u(M,F){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var R=Object.getOwnPropertySymbols(M);F&&(R=R.filter(function(T){return Object.getOwnPropertyDescriptor(M,T).enumerable})),A.push.apply(A,R)}return A}function f(M){for(var F=1;F<arguments.length;F++){var A=arguments[F]!=null?arguments[F]:{};F%2?u(Object(A),!0).forEach(function(R){p(M,R,A[R])}):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):u(Object(A)).forEach(function(R){Object.defineProperty(M,R,Object.getOwnPropertyDescriptor(A,R))})}return M}function p(M,F,A){return F=v(F),F in M?Object.defineProperty(M,F,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[F]=A,M}function h(M,F){if(!(M instanceof F))throw new TypeError("Cannot call a class as a function")}function g(M,F){for(var A=0;A<F.length;A++){var R=F[A];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(M,v(R.key),R)}}function b(M,F,A){return F&&g(M.prototype,F),Object.defineProperty(M,"prototype",{writable:!1}),M}function v(M){var F=j(M,"string");return e(F)=="symbol"?F:String(F)}function j(M,F){if(e(M)!="object"||!M)return M;var A=M[Symbol.toPrimitive];if(A!==void 0){var R=A.call(M,F||"default");if(e(R)!="object")return R;throw new TypeError("@@toPrimitive must return a primitive value.")}return(F==="string"?String:Number)(M)}function C(M,F){if(typeof F!="function"&&F!==null)throw new TypeError("Super expression must either be null or a function");M.prototype=Object.create(F&&F.prototype,{constructor:{value:M,writable:!0,configurable:!0}}),Object.defineProperty(M,"prototype",{writable:!1}),F&&k(M,F)}function k(M,F){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(R,T){return R.__proto__=T,R},k(M,F)}function _(M){var F=V();return function(){var R=B(M),T;if(F){var D=B(this).constructor;T=Reflect.construct(R,arguments,D)}else T=R.apply(this,arguments);return E(this,T)}}function E(M,F){if(F&&(e(F)==="object"||typeof F=="function"))return F;if(F!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(M)}function N(M){if(M===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return M}function V(){try{var M=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!M})()}function B(M){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(A){return A.__proto__||Object.getPrototypeOf(A)},B(M)}return zo.PrevArrow=function(M){C(A,M);var F=_(A);function A(){return h(this,A),F.apply(this,arguments)}return b(A,[{key:"clickHandler",value:function(T,D){D&&D.preventDefault(),this.props.clickHandler(T,D)}},{key:"render",value:function(){var T={"slick-arrow":!0,"slick-prev":!0},D=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(T["slick-disabled"]=!0,D=null);var z={key:"0","data-role":"none",className:(0,n.default)(T),style:{display:"block"},onClick:D},H={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},W;return this.props.prevArrow?W=t.default.cloneElement(this.props.prevArrow,f(f({},z),H)):W=t.default.createElement("button",l({key:"0",type:"button"},z)," ","Previous"),W}}]),A}(t.default.PureComponent),zo.NextArrow=function(M){C(A,M);var F=_(A);function A(){return h(this,A),F.apply(this,arguments)}return b(A,[{key:"clickHandler",value:function(T,D){D&&D.preventDefault(),this.props.clickHandler(T,D)}},{key:"render",value:function(){var T={"slick-arrow":!0,"slick-next":!0},D=this.clickHandler.bind(this,{message:"next"});(0,i.canGoNext)(this.props)||(T["slick-disabled"]=!0,D=null);var z={key:"1","data-role":"none",className:(0,n.default)(T),style:{display:"block"},onClick:D},H={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},W;return this.props.nextArrow?W=t.default.cloneElement(this.props.nextArrow,f(f({},z),H)):W=t.default.createElement("button",l({key:"1",type:"button"},z)," ","Next"),W}}]),A}(t.default.PureComponent),zo}var rk=function(){if(typeof Map<"u")return Map;function e(t,n){var i=-1;return t.some(function(s,l){return s[0]===n?(i=l,!0):!1}),i}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var i=e(this.__entries__,n),s=this.__entries__[i];return s&&s[1]},t.prototype.set=function(n,i){var s=e(this.__entries__,n);~s?this.__entries__[s][1]=i:this.__entries__.push([n,i])},t.prototype.delete=function(n){var i=this.__entries__,s=e(i,n);~s&&i.splice(s,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,i){i===void 0&&(i=null);for(var s=0,l=this.__entries__;s<l.length;s++){var u=l[s];n.call(i,u[1],u[0])}},t}()}(),eg=typeof window<"u"&&typeof document<"u"&&window.document===document,Id=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),uD=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Id):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),fD=2;function pD(e,t){var n=!1,i=!1,s=0;function l(){n&&(n=!1,e()),i&&f()}function u(){uD(l)}function f(){var p=Date.now();if(n){if(p-s<fD)return;i=!0}else n=!0,i=!1,setTimeout(u,t);s=p}return f}var hD=20,mD=["top","right","bottom","left","width","height","size","weight"],gD=typeof MutationObserver<"u",xD=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=pD(this.refresh.bind(this),hD)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,i=n.indexOf(t);~i&&n.splice(i,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!eg||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),gD?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!eg||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,i=n===void 0?"":n,s=mD.some(function(l){return!!~i.indexOf(l)});s&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),ok=function(e,t){for(var n=0,i=Object.keys(t);n<i.length;n++){var s=i[n];Object.defineProperty(e,s,{value:t[s],enumerable:!1,writable:!1,configurable:!0})}return e},is=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Id},ik=hu(0,0,0,0);function Fd(e){return parseFloat(e)||0}function Sb(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(i,s){var l=e["border-"+s+"-width"];return i+Fd(l)},0)}function vD(e){for(var t=["top","right","bottom","left"],n={},i=0,s=t;i<s.length;i++){var l=s[i],u=e["padding-"+l];n[l]=Fd(u)}return n}function yD(e){var t=e.getBBox();return hu(0,0,t.width,t.height)}function bD(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return ik;var i=is(e).getComputedStyle(e),s=vD(i),l=s.left+s.right,u=s.top+s.bottom,f=Fd(i.width),p=Fd(i.height);if(i.boxSizing==="border-box"&&(Math.round(f+l)!==t&&(f-=Sb(i,"left","right")+l),Math.round(p+u)!==n&&(p-=Sb(i,"top","bottom")+u)),!jD(e)){var h=Math.round(f+l)-t,g=Math.round(p+u)-n;Math.abs(h)!==1&&(f-=h),Math.abs(g)!==1&&(p-=g)}return hu(s.left,s.top,f,p)}var wD=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof is(e).SVGGraphicsElement}:function(e){return e instanceof is(e).SVGElement&&typeof e.getBBox=="function"}}();function jD(e){return e===is(e).document.documentElement}function SD(e){return eg?wD(e)?yD(e):bD(e):ik}function kD(e){var t=e.x,n=e.y,i=e.width,s=e.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,u=Object.create(l.prototype);return ok(u,{x:t,y:n,width:i,height:s,top:n,right:t+i,bottom:s+n,left:t}),u}function hu(e,t,n,i){return{x:e,y:t,width:n,height:i}}var CD=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=hu(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=SD(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),$D=function(){function e(t,n){var i=kD(n);ok(this,{target:t,contentRect:i})}return e}(),PD=function(){function e(t,n,i){if(this.activeObservations_=[],this.observations_=new rk,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=i}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof is(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new CD(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof is(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(i){return new $D(i.target,i.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),sk=typeof WeakMap<"u"?new WeakMap:new rk,ak=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=xD.getInstance(),i=new PD(t,n,this);sk.set(this,i)}return e}();["observe","unobserve","disconnect"].forEach(function(e){ak.prototype[e]=function(){var t;return(t=sk.get(this))[e].apply(t,arguments)}});var ED=function(){return typeof Id.ResizeObserver<"u"?Id.ResizeObserver:ak}();const _D=Object.freeze(Object.defineProperty({__proto__:null,default:ED},Symbol.toStringTag,{value:"Module"})),TD=dj(_D);var kb;function DD(){if(kb)return la;kb=1,Object.defineProperty(la,"__esModule",{value:!0}),la.InnerSlider=void 0;var e=h(Bn()),t=h(sD()),n=h(aD()),i=h(pu()),s=Ja(),l=lD(),u=cD(),f=dD(),p=h(TD);function h(W){return W&&W.__esModule?W:{default:W}}function g(W){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(Y){return typeof Y}:function(Y){return Y&&typeof Symbol=="function"&&Y.constructor===Symbol&&Y!==Symbol.prototype?"symbol":typeof Y},g(W)}function b(){return b=Object.assign?Object.assign.bind():function(W){for(var Y=1;Y<arguments.length;Y++){var G=arguments[Y];for(var X in G)Object.prototype.hasOwnProperty.call(G,X)&&(W[X]=G[X])}return W},b.apply(this,arguments)}function v(W,Y){if(W==null)return{};var G=j(W,Y),X,$;if(Object.getOwnPropertySymbols){var J=Object.getOwnPropertySymbols(W);for($=0;$<J.length;$++)X=J[$],!(Y.indexOf(X)>=0)&&Object.prototype.propertyIsEnumerable.call(W,X)&&(G[X]=W[X])}return G}function j(W,Y){if(W==null)return{};var G={},X=Object.keys(W),$,J;for(J=0;J<X.length;J++)$=X[J],!(Y.indexOf($)>=0)&&(G[$]=W[$]);return G}function C(W,Y){var G=Object.keys(W);if(Object.getOwnPropertySymbols){var X=Object.getOwnPropertySymbols(W);Y&&(X=X.filter(function($){return Object.getOwnPropertyDescriptor(W,$).enumerable})),G.push.apply(G,X)}return G}function k(W){for(var Y=1;Y<arguments.length;Y++){var G=arguments[Y]!=null?arguments[Y]:{};Y%2?C(Object(G),!0).forEach(function(X){D(W,X,G[X])}):Object.getOwnPropertyDescriptors?Object.defineProperties(W,Object.getOwnPropertyDescriptors(G)):C(Object(G)).forEach(function(X){Object.defineProperty(W,X,Object.getOwnPropertyDescriptor(G,X))})}return W}function _(W,Y){if(!(W instanceof Y))throw new TypeError("Cannot call a class as a function")}function E(W,Y){for(var G=0;G<Y.length;G++){var X=Y[G];X.enumerable=X.enumerable||!1,X.configurable=!0,"value"in X&&(X.writable=!0),Object.defineProperty(W,z(X.key),X)}}function N(W,Y,G){return Y&&E(W.prototype,Y),Object.defineProperty(W,"prototype",{writable:!1}),W}function V(W,Y){if(typeof Y!="function"&&Y!==null)throw new TypeError("Super expression must either be null or a function");W.prototype=Object.create(Y&&Y.prototype,{constructor:{value:W,writable:!0,configurable:!0}}),Object.defineProperty(W,"prototype",{writable:!1}),Y&&B(W,Y)}function B(W,Y){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(X,$){return X.__proto__=$,X},B(W,Y)}function M(W){var Y=R();return function(){var X=T(W),$;if(Y){var J=T(this).constructor;$=Reflect.construct(X,arguments,J)}else $=X.apply(this,arguments);return F(this,$)}}function F(W,Y){if(Y&&(g(Y)==="object"||typeof Y=="function"))return Y;if(Y!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return A(W)}function A(W){if(W===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return W}function R(){try{var W=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R=function(){return!!W})()}function T(W){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(G){return G.__proto__||Object.getPrototypeOf(G)},T(W)}function D(W,Y,G){return Y=z(Y),Y in W?Object.defineProperty(W,Y,{value:G,enumerable:!0,configurable:!0,writable:!0}):W[Y]=G,W}function z(W){var Y=H(W,"string");return g(Y)=="symbol"?Y:String(Y)}function H(W,Y){if(g(W)!="object"||!W)return W;var G=W[Symbol.toPrimitive];if(G!==void 0){var X=G.call(W,Y||"default");if(g(X)!="object")return X;throw new TypeError("@@toPrimitive must return a primitive value.")}return(Y==="string"?String:Number)(W)}return la.InnerSlider=function(W){V(G,W);var Y=M(G);function G(X){var $;_(this,G),$=Y.call(this,X),D(A($),"listRefHandler",function(I){return $.list=I}),D(A($),"trackRefHandler",function(I){return $.track=I}),D(A($),"adaptHeight",function(){if($.props.adaptiveHeight&&$.list){var I=$.list.querySelector('[data-index="'.concat($.state.currentSlide,'"]'));$.list.style.height=(0,s.getHeight)(I)+"px"}}),D(A($),"componentDidMount",function(){if($.props.onInit&&$.props.onInit(),$.props.lazyLoad){var I=(0,s.getOnDemandLazySlides)(k(k({},$.props),$.state));I.length>0&&($.setState(function(O){return{lazyLoadedList:O.lazyLoadedList.concat(I)}}),$.props.onLazyLoad&&$.props.onLazyLoad(I))}var P=k({listRef:$.list,trackRef:$.track},$.props);$.updateState(P,!0,function(){$.adaptHeight(),$.props.autoplay&&$.autoPlay("update")}),$.props.lazyLoad==="progressive"&&($.lazyLoadTimer=setInterval($.progressiveLazyLoad,1e3)),$.ro=new p.default(function(){$.state.animating?($.onWindowResized(!1),$.callbackTimers.push(setTimeout(function(){return $.onWindowResized()},$.props.speed))):$.onWindowResized()}),$.ro.observe($.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(O){O.onfocus=$.props.pauseOnFocus?$.onSlideFocus:null,O.onblur=$.props.pauseOnFocus?$.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",$.onWindowResized):window.attachEvent("onresize",$.onWindowResized)}),D(A($),"componentWillUnmount",function(){$.animationEndCallback&&clearTimeout($.animationEndCallback),$.lazyLoadTimer&&clearInterval($.lazyLoadTimer),$.callbackTimers.length&&($.callbackTimers.forEach(function(I){return clearTimeout(I)}),$.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",$.onWindowResized):window.detachEvent("onresize",$.onWindowResized),$.autoplayTimer&&clearInterval($.autoplayTimer),$.ro.disconnect()}),D(A($),"componentDidUpdate",function(I){if($.checkImagesLoad(),$.props.onReInit&&$.props.onReInit(),$.props.lazyLoad){var P=(0,s.getOnDemandLazySlides)(k(k({},$.props),$.state));P.length>0&&($.setState(function(Q){return{lazyLoadedList:Q.lazyLoadedList.concat(P)}}),$.props.onLazyLoad&&$.props.onLazyLoad(P))}$.adaptHeight();var O=k(k({listRef:$.list,trackRef:$.track},$.props),$.state),U=$.didPropsChange(I);U&&$.updateState(O,U,function(){$.state.currentSlide>=e.default.Children.count($.props.children)&&$.changeSlide({message:"index",index:e.default.Children.count($.props.children)-$.props.slidesToShow,currentSlide:$.state.currentSlide}),$.props.autoplay?$.autoPlay("update"):$.pause("paused")})}),D(A($),"onWindowResized",function(I){$.debouncedResize&&$.debouncedResize.cancel(),$.debouncedResize=(0,n.default)(function(){return $.resizeWindow(I)},50),$.debouncedResize()}),D(A($),"resizeWindow",function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,P=!!($.track&&$.track.node);if(P){var O=k(k({listRef:$.list,trackRef:$.track},$.props),$.state);$.updateState(O,I,function(){$.props.autoplay?$.autoPlay("update"):$.pause("paused")}),$.setState({animating:!1}),clearTimeout($.animationEndCallback),delete $.animationEndCallback}}),D(A($),"updateState",function(I,P,O){var U=(0,s.initializedState)(I);I=k(k(k({},I),U),{},{slideIndex:U.currentSlide});var Q=(0,s.getTrackLeft)(I);I=k(k({},I),{},{left:Q});var ee=(0,s.getTrackCSS)(I);(P||e.default.Children.count($.props.children)!==e.default.Children.count(I.children))&&(U.trackStyle=ee),$.setState(U,O)}),D(A($),"ssrInit",function(){if($.props.variableWidth){var I=0,P=0,O=[],U=(0,s.getPreClones)(k(k(k({},$.props),$.state),{},{slideCount:$.props.children.length})),Q=(0,s.getPostClones)(k(k(k({},$.props),$.state),{},{slideCount:$.props.children.length}));$.props.children.forEach(function(Le){O.push(Le.props.style.width),I+=Le.props.style.width});for(var ee=0;ee<U;ee++)P+=O[O.length-1-ee],I+=O[O.length-1-ee];for(var ie=0;ie<Q;ie++)I+=O[ie];for(var re=0;re<$.state.currentSlide;re++)P+=O[re];var se={width:I+"px",left:-P+"px"};if($.props.centerMode){var de="".concat(O[$.state.currentSlide],"px");se.left="calc(".concat(se.left," + (100% - ").concat(de,") / 2 ) ")}return{trackStyle:se}}var fe=e.default.Children.count($.props.children),ye=k(k(k({},$.props),$.state),{},{slideCount:fe}),Pe=(0,s.getPreClones)(ye)+(0,s.getPostClones)(ye)+fe,ke=100/$.props.slidesToShow*Pe,xe=100/Pe,me=-xe*((0,s.getPreClones)(ye)+$.state.currentSlide)*ke/100;$.props.centerMode&&(me+=(100-xe*ke/100)/2);var $e={width:ke+"%",left:me+"%"};return{slideWidth:xe+"%",trackStyle:$e}}),D(A($),"checkImagesLoad",function(){var I=$.list&&$.list.querySelectorAll&&$.list.querySelectorAll(".slick-slide img")||[],P=I.length,O=0;Array.prototype.forEach.call(I,function(U){var Q=function(){return++O&&O>=P&&$.onWindowResized()};if(!U.onclick)U.onclick=function(){return U.parentNode.focus()};else{var ee=U.onclick;U.onclick=function(ie){ee(ie),U.parentNode.focus()}}U.onload||($.props.lazyLoad?U.onload=function(){$.adaptHeight(),$.callbackTimers.push(setTimeout($.onWindowResized,$.props.speed))}:(U.onload=Q,U.onerror=function(){Q(),$.props.onLazyLoadError&&$.props.onLazyLoadError()}))})}),D(A($),"progressiveLazyLoad",function(){for(var I=[],P=k(k({},$.props),$.state),O=$.state.currentSlide;O<$.state.slideCount+(0,s.getPostClones)(P);O++)if($.state.lazyLoadedList.indexOf(O)<0){I.push(O);break}for(var U=$.state.currentSlide-1;U>=-(0,s.getPreClones)(P);U--)if($.state.lazyLoadedList.indexOf(U)<0){I.push(U);break}I.length>0?($.setState(function(Q){return{lazyLoadedList:Q.lazyLoadedList.concat(I)}}),$.props.onLazyLoad&&$.props.onLazyLoad(I)):$.lazyLoadTimer&&(clearInterval($.lazyLoadTimer),delete $.lazyLoadTimer)}),D(A($),"slideHandler",function(I){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=$.props,U=O.asNavFor,Q=O.beforeChange,ee=O.onLazyLoad,ie=O.speed,re=O.afterChange,se=$.state.currentSlide,de=(0,s.slideHandler)(k(k(k({index:I},$.props),$.state),{},{trackRef:$.track,useCSS:$.props.useCSS&&!P})),fe=de.state,ye=de.nextState;if(fe){Q&&Q(se,fe.currentSlide);var Pe=fe.lazyLoadedList.filter(function(ke){return $.state.lazyLoadedList.indexOf(ke)<0});ee&&Pe.length>0&&ee(Pe),!$.props.waitForAnimate&&$.animationEndCallback&&(clearTimeout($.animationEndCallback),re&&re(se),delete $.animationEndCallback),$.setState(fe,function(){U&&$.asNavForIndex!==I&&($.asNavForIndex=I,U.innerSlider.slideHandler(I)),ye&&($.animationEndCallback=setTimeout(function(){var ke=ye.animating,xe=v(ye,["animating"]);$.setState(xe,function(){$.callbackTimers.push(setTimeout(function(){return $.setState({animating:ke})},10)),re&&re(fe.currentSlide),delete $.animationEndCallback})},ie))})}}),D(A($),"changeSlide",function(I){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=k(k({},$.props),$.state),U=(0,s.changeSlide)(O,I);if(!(U!==0&&!U)&&(P===!0?$.slideHandler(U,P):$.slideHandler(U),$.props.autoplay&&$.autoPlay("update"),$.props.focusOnSelect)){var Q=$.list.querySelectorAll(".slick-current");Q[0]&&Q[0].focus()}}),D(A($),"clickHandler",function(I){$.clickable===!1&&(I.stopPropagation(),I.preventDefault()),$.clickable=!0}),D(A($),"keyHandler",function(I){var P=(0,s.keyHandler)(I,$.props.accessibility,$.props.rtl);P!==""&&$.changeSlide({message:P})}),D(A($),"selectHandler",function(I){$.changeSlide(I)}),D(A($),"disableBodyScroll",function(){var I=function(O){O=O||window.event,O.preventDefault&&O.preventDefault(),O.returnValue=!1};window.ontouchmove=I}),D(A($),"enableBodyScroll",function(){window.ontouchmove=null}),D(A($),"swipeStart",function(I){$.props.verticalSwiping&&$.disableBodyScroll();var P=(0,s.swipeStart)(I,$.props.swipe,$.props.draggable);P!==""&&$.setState(P)}),D(A($),"swipeMove",function(I){var P=(0,s.swipeMove)(I,k(k(k({},$.props),$.state),{},{trackRef:$.track,listRef:$.list,slideIndex:$.state.currentSlide}));P&&(P.swiping&&($.clickable=!1),$.setState(P))}),D(A($),"swipeEnd",function(I){var P=(0,s.swipeEnd)(I,k(k(k({},$.props),$.state),{},{trackRef:$.track,listRef:$.list,slideIndex:$.state.currentSlide}));if(P){var O=P.triggerSlideHandler;delete P.triggerSlideHandler,$.setState(P),O!==void 0&&($.slideHandler(O),$.props.verticalSwiping&&$.enableBodyScroll())}}),D(A($),"touchEnd",function(I){$.swipeEnd(I),$.clickable=!0}),D(A($),"slickPrev",function(){$.callbackTimers.push(setTimeout(function(){return $.changeSlide({message:"previous"})},0))}),D(A($),"slickNext",function(){$.callbackTimers.push(setTimeout(function(){return $.changeSlide({message:"next"})},0))}),D(A($),"slickGoTo",function(I){var P=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(I=Number(I),isNaN(I))return"";$.callbackTimers.push(setTimeout(function(){return $.changeSlide({message:"index",index:I,currentSlide:$.state.currentSlide},P)},0))}),D(A($),"play",function(){var I;if($.props.rtl)I=$.state.currentSlide-$.props.slidesToScroll;else if((0,s.canGoNext)(k(k({},$.props),$.state)))I=$.state.currentSlide+$.props.slidesToScroll;else return!1;$.slideHandler(I)}),D(A($),"autoPlay",function(I){$.autoplayTimer&&clearInterval($.autoplayTimer);var P=$.state.autoplaying;if(I==="update"){if(P==="hovered"||P==="focused"||P==="paused")return}else if(I==="leave"){if(P==="paused"||P==="focused")return}else if(I==="blur"&&(P==="paused"||P==="hovered"))return;$.autoplayTimer=setInterval($.play,$.props.autoplaySpeed+50),$.setState({autoplaying:"playing"})}),D(A($),"pause",function(I){$.autoplayTimer&&(clearInterval($.autoplayTimer),$.autoplayTimer=null);var P=$.state.autoplaying;I==="paused"?$.setState({autoplaying:"paused"}):I==="focused"?(P==="hovered"||P==="playing")&&$.setState({autoplaying:"focused"}):P==="playing"&&$.setState({autoplaying:"hovered"})}),D(A($),"onDotsOver",function(){return $.props.autoplay&&$.pause("hovered")}),D(A($),"onDotsLeave",function(){return $.props.autoplay&&$.state.autoplaying==="hovered"&&$.autoPlay("leave")}),D(A($),"onTrackOver",function(){return $.props.autoplay&&$.pause("hovered")}),D(A($),"onTrackLeave",function(){return $.props.autoplay&&$.state.autoplaying==="hovered"&&$.autoPlay("leave")}),D(A($),"onSlideFocus",function(){return $.props.autoplay&&$.pause("focused")}),D(A($),"onSlideBlur",function(){return $.props.autoplay&&$.state.autoplaying==="focused"&&$.autoPlay("blur")}),D(A($),"render",function(){var I=(0,i.default)("slick-slider",$.props.className,{"slick-vertical":$.props.vertical,"slick-initialized":!0}),P=k(k({},$.props),$.state),O=(0,s.extractObject)(P,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),U=$.props.pauseOnHover;O=k(k({},O),{},{onMouseEnter:U?$.onTrackOver:null,onMouseLeave:U?$.onTrackLeave:null,onMouseOver:U?$.onTrackOver:null,focusOnSelect:$.props.focusOnSelect&&$.clickable?$.selectHandler:null});var Q;if($.props.dots===!0&&$.state.slideCount>=$.props.slidesToShow){var ee=(0,s.extractObject)(P,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),ie=$.props.pauseOnDotsHover;ee=k(k({},ee),{},{clickHandler:$.changeSlide,onMouseEnter:ie?$.onDotsLeave:null,onMouseOver:ie?$.onDotsOver:null,onMouseLeave:ie?$.onDotsLeave:null}),Q=e.default.createElement(u.Dots,ee)}var re,se,de=(0,s.extractObject)(P,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);de.clickHandler=$.changeSlide,$.props.arrows&&(re=e.default.createElement(f.PrevArrow,de),se=e.default.createElement(f.NextArrow,de));var fe=null;$.props.vertical&&(fe={height:$.state.listHeight});var ye=null;$.props.vertical===!1?$.props.centerMode===!0&&(ye={padding:"0px "+$.props.centerPadding}):$.props.centerMode===!0&&(ye={padding:$.props.centerPadding+" 0px"});var Pe=k(k({},fe),ye),ke=$.props.touchMove,xe={className:"slick-list",style:Pe,onClick:$.clickHandler,onMouseDown:ke?$.swipeStart:null,onMouseMove:$.state.dragging&&ke?$.swipeMove:null,onMouseUp:ke?$.swipeEnd:null,onMouseLeave:$.state.dragging&&ke?$.swipeEnd:null,onTouchStart:ke?$.swipeStart:null,onTouchMove:$.state.dragging&&ke?$.swipeMove:null,onTouchEnd:ke?$.touchEnd:null,onTouchCancel:$.state.dragging&&ke?$.swipeEnd:null,onKeyDown:$.props.accessibility?$.keyHandler:null},me={className:I,dir:"ltr",style:$.props.style};return $.props.unslick&&(xe={className:"slick-list"},me={className:I}),e.default.createElement("div",me,$.props.unslick?"":re,e.default.createElement("div",b({ref:$.listRefHandler},xe),e.default.createElement(l.Track,b({ref:$.trackRefHandler},O),$.props.children)),$.props.unslick?"":se,$.props.unslick?"":Q)}),$.list=null,$.track=null,$.state=k(k({},t.default),{},{currentSlide:$.props.initialSlide,targetSlide:$.props.initialSlide?$.props.initialSlide:0,slideCount:e.default.Children.count($.props.children)}),$.callbackTimers=[],$.clickable=!0,$.debouncedResize=null;var J=$.ssrInit();return $.state=k(k({},$.state),J),$}return N(G,[{key:"didPropsChange",value:function($){for(var J=!1,I=0,P=Object.keys(this.props);I<P.length;I++){var O=P[I];if(!$.hasOwnProperty(O)){J=!0;break}if(!(g($[O])==="object"||typeof $[O]=="function"||isNaN($[O]))&&$[O]!==this.props[O]){J=!0;break}}return J||e.default.Children.count(this.props.children)!==e.default.Children.count($.children)}}]),G}(e.default.Component),la}var Yp,Cb;function OD(){if(Cb)return Yp;Cb=1;var e=function(t){return t.replace(/[A-Z]/g,function(n){return"-"+n.toLowerCase()}).toLowerCase()};return Yp=e,Yp}var Gp,$b;function MD(){if($b)return Gp;$b=1;var e=OD(),t=function(s){var l=/[height|width]$/;return l.test(s)},n=function(s){var l="",u=Object.keys(s);return u.forEach(function(f,p){var h=s[f];f=e(f),t(f)&&typeof h=="number"&&(h=h+"px"),h===!0?l+=f:h===!1?l+="not "+f:l+="("+f+": "+h+")",p<u.length-1&&(l+=" and ")}),l},i=function(s){var l="";return typeof s=="string"?s:s instanceof Array?(s.forEach(function(u,f){l+=n(u),f<s.length-1&&(l+=", ")}),l):n(s)};return Gp=i,Gp}var Kp,Pb;function AD(){if(Pb)return Kp;Pb=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},Kp=e,Kp}var Qp,Eb;function lk(){if(Eb)return Qp;Eb=1;function e(i,s){var l=0,u=i.length,f;for(l;l<u&&(f=s(i[l],l),f!==!1);l++);}function t(i){return Object.prototype.toString.apply(i)==="[object Array]"}function n(i){return typeof i=="function"}return Qp={isFunction:n,isArray:t,each:e},Qp}var Zp,_b;function LD(){if(_b)return Zp;_b=1;var e=AD(),t=lk().each;function n(i,s){this.query=i,this.isUnconditional=s,this.handlers=[],this.mql=window.matchMedia(i);var l=this;this.listener=function(u){l.mql=u.currentTarget||u,l.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(i){var s=new e(i);this.handlers.push(s),this.matches()&&s.on()},removeHandler:function(i){var s=this.handlers;t(s,function(l,u){if(l.equals(i))return l.destroy(),!s.splice(u,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(i){i.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var i=this.matches()?"on":"off";t(this.handlers,function(s){s[i]()})}},Zp=n,Zp}var Xp,Tb;function zD(){if(Tb)return Xp;Tb=1;var e=LD(),t=lk(),n=t.each,i=t.isFunction,s=t.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return l.prototype={constructor:l,register:function(u,f,p){var h=this.queries,g=p&&this.browserIsIncapable;return h[u]||(h[u]=new e(u,g)),i(f)&&(f={match:f}),s(f)||(f=[f]),n(f,function(b){i(b)&&(b={match:b}),h[u].addHandler(b)}),this},unregister:function(u,f){var p=this.queries[u];return p&&(f?p.removeHandler(f):(p.clear(),delete this.queries[u])),this}},Xp=l,Xp}var Jp,Db;function RD(){if(Db)return Jp;Db=1;var e=zD();return Jp=new e,Jp}var Ob;function ND(){return Ob||(Ob=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u(Bn()),n=DD(),i=u(MD()),s=u(nk()),l=Ja();function u(T){return T&&T.__esModule?T:{default:T}}function f(T){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(D){return typeof D}:function(D){return D&&typeof Symbol=="function"&&D.constructor===Symbol&&D!==Symbol.prototype?"symbol":typeof D},f(T)}function p(){return p=Object.assign?Object.assign.bind():function(T){for(var D=1;D<arguments.length;D++){var z=arguments[D];for(var H in z)Object.prototype.hasOwnProperty.call(z,H)&&(T[H]=z[H])}return T},p.apply(this,arguments)}function h(T,D){var z=Object.keys(T);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(T);D&&(H=H.filter(function(W){return Object.getOwnPropertyDescriptor(T,W).enumerable})),z.push.apply(z,H)}return z}function g(T){for(var D=1;D<arguments.length;D++){var z=arguments[D]!=null?arguments[D]:{};D%2?h(Object(z),!0).forEach(function(H){M(T,H,z[H])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(z)):h(Object(z)).forEach(function(H){Object.defineProperty(T,H,Object.getOwnPropertyDescriptor(z,H))})}return T}function b(T,D){if(!(T instanceof D))throw new TypeError("Cannot call a class as a function")}function v(T,D){for(var z=0;z<D.length;z++){var H=D[z];H.enumerable=H.enumerable||!1,H.configurable=!0,"value"in H&&(H.writable=!0),Object.defineProperty(T,F(H.key),H)}}function j(T,D,z){return D&&v(T.prototype,D),Object.defineProperty(T,"prototype",{writable:!1}),T}function C(T,D){if(typeof D!="function"&&D!==null)throw new TypeError("Super expression must either be null or a function");T.prototype=Object.create(D&&D.prototype,{constructor:{value:T,writable:!0,configurable:!0}}),Object.defineProperty(T,"prototype",{writable:!1}),D&&k(T,D)}function k(T,D){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(H,W){return H.__proto__=W,H},k(T,D)}function _(T){var D=V();return function(){var H=B(T),W;if(D){var Y=B(this).constructor;W=Reflect.construct(H,arguments,Y)}else W=H.apply(this,arguments);return E(this,W)}}function E(T,D){if(D&&(f(D)==="object"||typeof D=="function"))return D;if(D!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return N(T)}function N(T){if(T===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return T}function V(){try{var T=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(V=function(){return!!T})()}function B(T){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(z){return z.__proto__||Object.getPrototypeOf(z)},B(T)}function M(T,D,z){return D=F(D),D in T?Object.defineProperty(T,D,{value:z,enumerable:!0,configurable:!0,writable:!0}):T[D]=z,T}function F(T){var D=A(T,"string");return f(D)=="symbol"?D:String(D)}function A(T,D){if(f(T)!="object"||!T)return T;var z=T[Symbol.toPrimitive];if(z!==void 0){var H=z.call(T,D||"default");if(f(H)!="object")return H;throw new TypeError("@@toPrimitive must return a primitive value.")}return(D==="string"?String:Number)(T)}var R=(0,l.canUseDOM)()&&RD();e.default=function(T){C(z,T);var D=_(z);function z(H){var W;return b(this,z),W=D.call(this,H),M(N(W),"innerSliderRefHandler",function(Y){return W.innerSlider=Y}),M(N(W),"slickPrev",function(){return W.innerSlider.slickPrev()}),M(N(W),"slickNext",function(){return W.innerSlider.slickNext()}),M(N(W),"slickGoTo",function(Y){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return W.innerSlider.slickGoTo(Y,G)}),M(N(W),"slickPause",function(){return W.innerSlider.pause("paused")}),M(N(W),"slickPlay",function(){return W.innerSlider.autoPlay("play")}),W.state={breakpoint:null},W._responsiveMediaHandlers=[],W}return j(z,[{key:"media",value:function(W,Y){R.register(W,Y),this._responsiveMediaHandlers.push({query:W,handler:Y})}},{key:"componentDidMount",value:function(){var W=this;if(this.props.responsive){var Y=this.props.responsive.map(function(X){return X.breakpoint});Y.sort(function(X,$){return X-$}),Y.forEach(function(X,$){var J;$===0?J=(0,i.default)({minWidth:0,maxWidth:X}):J=(0,i.default)({minWidth:Y[$-1]+1,maxWidth:X}),(0,l.canUseDOM)()&&W.media(J,function(){W.setState({breakpoint:X})})});var G=(0,i.default)({minWidth:Y.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(G,function(){W.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(W){R.unregister(W.query,W.handler)})}},{key:"render",value:function(){var W=this,Y,G;this.state.breakpoint?(G=this.props.responsive.filter(function(ie){return ie.breakpoint===W.state.breakpoint}),Y=G[0].settings==="unslick"?"unslick":g(g(g({},s.default),this.props),G[0].settings)):Y=g(g({},s.default),this.props),Y.centerMode&&(Y.slidesToScroll>1,Y.slidesToScroll=1),Y.fade&&(Y.slidesToShow>1,Y.slidesToScroll>1,Y.slidesToShow=1,Y.slidesToScroll=1);var X=t.default.Children.toArray(this.props.children);X=X.filter(function(ie){return typeof ie=="string"?!!ie.trim():!!ie}),Y.variableWidth&&(Y.rows>1||Y.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),Y.variableWidth=!1);for(var $=[],J=null,I=0;I<X.length;I+=Y.rows*Y.slidesPerRow){for(var P=[],O=I;O<I+Y.rows*Y.slidesPerRow;O+=Y.slidesPerRow){for(var U=[],Q=O;Q<O+Y.slidesPerRow&&(Y.variableWidth&&X[Q].props.style&&(J=X[Q].props.style.width),!(Q>=X.length));Q+=1)U.push(t.default.cloneElement(X[Q],{key:100*I+10*O+Q,tabIndex:-1,style:{width:"".concat(100/Y.slidesPerRow,"%"),display:"inline-block"}}));P.push(t.default.createElement("div",{key:10*I+O},U))}Y.variableWidth?$.push(t.default.createElement("div",{key:I,style:{width:J}},P)):$.push(t.default.createElement("div",{key:I},P))}if(Y==="unslick"){var ee="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:ee},X)}else $.length<=Y.slidesToShow&&!Y.infinite&&(Y.unslick=!0);return t.default.createElement(n.InnerSlider,p({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(Y)),$)}}]),z}(t.default.Component)}(Bp)),Bp}var Mb;function ID(){return Mb||(Mb=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(ND());function n(i){return i&&i.__esModule?i:{default:i}}e.default=t.default}(Vp)),Vp}var FD=ID();const hs=ss(FD),VD=()=>{const[e,t]=x.useState([]);var n={dots:!1,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,initialSlide:0,arrows:!1,autoplay:!0,autoplaySpeed:3e3};x.useEffect(()=>{(async()=>{try{const l=await Re.get("/banners");t(l.data.data.data)}catch(l){console.error("Error fetching banners:",l)}})()},[]);const i=e.filter(s=>s.section==="home");return console.log(i),x.useEffect(()=>{bt.init({duration:2500})},[]),r.jsx(BD,{children:r.jsx("div",{className:"",children:r.jsx(HD,{className:"slider-container",children:r.jsx(hs,{...n,children:i&&i.map(s=>r.jsxs(QD,{className:"",children:[r.jsxs(WD,{children:[r.jsx(TS,{text:s.title}),r.jsx(UD,{children:s.description}),r.jsxs(YD,{children:[r.jsx(kc,{className:"top"}),r.jsx(kc,{className:"right"}),r.jsx(ht,{to:"/book-a-demo",children:r.jsx($r,{text:"Get Started"})}),r.jsx(kc,{className:"bottom"}),r.jsx(kc,{className:"left"})]})]}),r.jsx(qD,{children:r.jsx(GD,{children:r.jsx(KD,{src:d_,alt:"User Model"})})})]}))})})})})},BD=d.section`
  background: ${({bgImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 80px;
  transition: background-image 1s ease-in-out; /* Smooth transition for background */
`,HD=d.div``,WD=d.div`
  background-image: url(${u_});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;

  width: 85%;
  margin: auto;
  display: grid;
  align-items: center;
  justify-items: start;
`,UD=d.p`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1.5;
  padding: 30px 0;
`,qD=d.div`
  background-image: url(${f_});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
`,YD=d.div`
  position: relative;
  display: inline-block;
`,kc=d.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
`,GD=d.div`
  height: 500px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`,KD=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,QD=d.div`
  height: 80vh;
  display: grid !important;
  grid-template-columns: 1.5fr 1fr;
  align-items: center;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    height: unset;
  }
`;var ck={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ab=Pt.createContext&&Pt.createContext(ck),ZD=["attr","size","title"];function XD(e,t){if(e==null)return{};var n=JD(e,t),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)i=l[s],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function JD(e,t){if(e==null)return{};var n={};for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(t.indexOf(i)>=0)continue;n[i]=e[i]}return n}function Vd(){return Vd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Vd.apply(this,arguments)}function Lb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,i)}return n}function Bd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Lb(Object(n),!0).forEach(function(i){eO(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Lb(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function eO(e,t,n){return t=tO(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function tO(e){var t=nO(e,"string");return typeof t=="symbol"?t:t+""}function nO(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function dk(e){return e&&e.map((t,n)=>Pt.createElement(t.tag,Bd({key:n},t.attr),dk(t.child)))}function Be(e){return t=>Pt.createElement(rO,Vd({attr:Bd({},e.attr)},t),dk(e.child))}function rO(e){var t=n=>{var{attr:i,size:s,title:l}=e,u=XD(e,ZD),f=s||n.size||"1em",p;return n.className&&(p=n.className),e.className&&(p=(p?p+" ":"")+e.className),Pt.createElement("svg",Vd({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,u,{className:p,style:Bd(Bd({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),l&&Pt.createElement("title",null,l),e.children)};return Ab!==void 0?Pt.createElement(Ab.Consumer,null,n=>t(n)):t(ck)}function oO(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-2 8c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8H8v-.57c0-.81.48-1.53 1.22-1.85a6.95 6.95 0 0 1 5.56 0A2.01 2.01 0 0 1 16 17.43V18z"},child:[]}]})(e)}function At(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"},child:[]}]})(e)}function iO(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"},child:[]}]})(e)}function Ni(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"},child:[]}]})(e)}function sO(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"},child:[]}]})(e)}function aO(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M11.07 12.85c.77-1.39 2.25-2.21 3.11-3.44.91-1.29.4-3.7-2.18-3.7-1.69 0-2.52 1.28-2.87 2.34L6.54 6.96C7.25 4.83 9.18 3 11.99 3c2.35 0 3.96 1.07 4.78 2.41.7 1.15 1.11 3.3.03 4.9-1.2 1.77-2.35 2.31-2.97 3.45-.25.46-.35.76-.35 2.24h-2.89c-.01-.78-.13-2.05.48-3.15zM14 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"},child:[]}]})(e)}d.h3`
  text-align: center;
  margin-bottom: 20px;
`;d.h4`
  text-align: center;
  margin: 20px 0;
`;d.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`;d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  @media screen and (max-width: 540px) {
    display: none;
  }
`;d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  transition: transform 0.5s ease-in-out; /* Smooth transition for the entire carousel */
  @media screen and (max-width: 480px) {
    justify-content: center;
    gap: 20px;
  }
`;d.div`
  margin: 0 5px;

  transition: transform 0.3s ease, opacity 0.3s ease; /* Smooth scaling and opacity transition */
  opacity: ${({isCenter:e})=>e?"1":"0.7"};
  transform: ${({isCenter:e,isEnd:t})=>e?"scale(1.3)":t?"scale(0.8)":"scale(1)"};
  margin: ${({isCenter:e,isEnd:t})=>e?"2rem":t?"-15px":"0"};
  filter: ${({isCenter:e})=>e?"grayscale(0)":"grayscale(100%)"};
  @media screen and (max-width: 760px) {
    display: ${({isEnd:e})=>e?"none":"unset"};
  }
  @media screen and (max-width: 620px) {
    margin: ${({isCenter:e,isEnd:t})=>e?"1rem":t?"-15px":"0"};
  }
  @media screen and (max-width: 480px) {
    transform: ${({isCenter:e,isEnd:t})=>e?"scale(1)":t?"scale(0.5)":"scale(.9)"};
  }
  @media screen and (max-width: 620px) {
    margin: ${({isCenter:e,isEnd:t})=>e?"0rem":t?"-15px":"0"};
  }
  @media screen and (max-width: 480px) {
    display: ${({isCenter:e})=>e?"grid":"none"};
    justify-items: center;
    margin: unset;
    transform: unset;
  }
`;d.div`
  border-radius: 10px;
  width: 100%;
  border: 1px solid #6b6b6b;
  padding: 0 80px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  p {
    color: #fff;
  }
  b {
    font-size: 28px;
    color: ${y.theme_red};
  }
  @media screen and (max-width: 620px) {
    padding: 40px;
  }

  max-height: 0;
  overflow: hidden;
  transition: max-height 2s ease;
  transition: padding 1s ease;

  opacity: 0;
  &.active {
    transition: opacity 1s ease;

    opacity: 1;
    padding: 40px 80px;
    max-height: 300px;
  }
`;d.div`
  height: 180px;
  width: 180px;
  @media screen and (max-width: 1080px) {
    width: 120px;
  }
  @media screen and (max-width: 620px) {
    width: 110px;
    height: 110px;
  }
  @media screen and (max-width: 480px) {
    width: 200px;
    height: 130px;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: block;
    cursor: pointer;
    transition: opacity 0.5s ease-in-out; /* Smooth transition for image opacity */
  }
`;d.div`
  position: relative;
`;d.div`
  position: absolute;
  z-index: 5;
  left: 50%;
  top: -15px;
  transform: translateX(-50%);
  border-top: 1px solid #000;
  background-color: #000;
  padding: 5px 7px;
  border-radius: 50%;
  border: 2px solid #6b6b6b;
  cursor: pointer;
  svg {
    transition: all 2s ease;
    &.active {
      transform: rotate(180deg);
    }
  }
`;d.div`
  display: none;
  @media screen and (max-width: 540px) {
    display: block;
  }
`;d.div``;d.div`
  display: grid !important;
  justify-items: center;
  gap: 20px;
`;d.div``;d.div`
  height: 80px;
  width: 180px;
`;d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;d.div`
  border: 2px solid #6b6b6b;
  border-radius: 50%;
  padding: 10px;

  svg {
    font-size: 20px;
  }
`;d.div`
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 20px;
`;const uk="/assets/WhoWeAre-DvQe-dHi.png";var ua={},Hd=function(){return Hd=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},Hd.apply(this,arguments)},lO=function(){function e(t,n,i){var s=this;this.endVal=n,this.options=i,this.version="2.8.0",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,useIndianSeparators:!1,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(l){s.startTime||(s.startTime=l);var u=l-s.startTime;s.remaining=s.duration-u,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(u,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(u,s.startVal,s.endVal-s.startVal,s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(u/s.duration);var f=s.countDown?s.frameVal<s.endVal:s.frameVal>s.endVal;s.frameVal=f?s.endVal:s.frameVal,s.frameVal=Number(s.frameVal.toFixed(s.options.decimalPlaces)),s.printValue(s.frameVal),u<s.duration?s.rAF=requestAnimationFrame(s.count):s.finalEndVal!==null?s.update(s.finalEndVal):s.options.onCompleteCallback&&s.options.onCompleteCallback()},this.formatNumber=function(l){var u,f,p,h,g=l<0?"-":"";u=Math.abs(l).toFixed(s.options.decimalPlaces);var b=(u+="").split(".");if(f=b[0],p=b.length>1?s.options.decimal+b[1]:"",s.options.useGrouping){h="";for(var v=3,j=0,C=0,k=f.length;C<k;++C)s.options.useIndianSeparators&&C===4&&(v=2,j=1),C!==0&&j%v==0&&(h=s.options.separator+h),j++,h=f[k-C-1]+h;f=h}return s.options.numerals&&s.options.numerals.length&&(f=f.replace(/[0-9]/g,function(_){return s.options.numerals[+_]}),p=p.replace(/[0-9]/g,function(_){return s.options.numerals[+_]})),g+s.options.prefix+f+p+s.options.suffix},this.easeOutExpo=function(l,u,f,p){return f*(1-Math.pow(2,-10*l/p))*1024/1023+u},this.options=Hd(Hd({},this.defaults),i),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(n),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof t=="string"?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined",typeof window<"u"&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push(function(){return s.handleScroll(s)}),window.onscroll=function(){window.onScrollFns.forEach(function(l){return l()})},this.handleScroll(this)))}return e.prototype.handleScroll=function(t){if(t&&window&&!t.once){var n=window.innerHeight+window.scrollY,i=t.el.getBoundingClientRect(),s=i.top+window.pageYOffset,l=i.top+i.height+window.pageYOffset;l<n&&l>window.scrollY&&t.paused?(t.paused=!1,setTimeout(function(){return t.start()},t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):(window.scrollY>l||s>n)&&!t.paused&&t.reset()}},e.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var n=t-this.startVal;if(Math.abs(n)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var i=this.countDown?1:-1;this.endVal=t+i*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal!==null?this.useEasing=!1:this.useEasing=this.options.useEasing},e.prototype.start=function(t){this.error||(this.options.onStartCallback&&this.options.onStartCallback(),t&&(this.options.onCompleteCallback=t),this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},e.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},e.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},e.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal==null&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},e.prototype.printValue=function(t){var n;if(this.el){var i=this.formattingFn(t);!((n=this.options.plugin)===null||n===void 0)&&n.render?this.options.plugin.render(this.el,i):this.el.tagName==="INPUT"?this.el.value=i:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=i:this.el.innerHTML=i}},e.prototype.ensureNumber=function(t){return typeof t=="number"&&!isNaN(t)},e.prototype.validateValue=function(t){var n=Number(t);return this.ensureNumber(n)?n:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},e.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},e}();const cO=Object.freeze(Object.defineProperty({__proto__:null,CountUp:lO},Symbol.toStringTag,{value:"Module"})),dO=dj(cO);var zb;function uO(){if(zb)return ua;zb=1,Object.defineProperty(ua,"__esModule",{value:!0});var e=Bn(),t=dO;function n(R,T){var D=R==null?null:typeof Symbol<"u"&&R[Symbol.iterator]||R["@@iterator"];if(D!=null){var z,H,W,Y,G=[],X=!0,$=!1;try{if(W=(D=D.call(R)).next,T!==0)for(;!(X=(z=W.call(D)).done)&&(G.push(z.value),G.length!==T);X=!0);}catch(J){$=!0,H=J}finally{try{if(!X&&D.return!=null&&(Y=D.return(),Object(Y)!==Y))return}finally{if($)throw H}}return G}}function i(R,T){var D=Object.keys(R);if(Object.getOwnPropertySymbols){var z=Object.getOwnPropertySymbols(R);T&&(z=z.filter(function(H){return Object.getOwnPropertyDescriptor(R,H).enumerable})),D.push.apply(D,z)}return D}function s(R){for(var T=1;T<arguments.length;T++){var D=arguments[T]!=null?arguments[T]:{};T%2?i(Object(D),!0).forEach(function(z){f(R,z,D[z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(R,Object.getOwnPropertyDescriptors(D)):i(Object(D)).forEach(function(z){Object.defineProperty(R,z,Object.getOwnPropertyDescriptor(D,z))})}return R}function l(R,T){if(typeof R!="object"||!R)return R;var D=R[Symbol.toPrimitive];if(D!==void 0){var z=D.call(R,T||"default");if(typeof z!="object")return z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(T==="string"?String:Number)(R)}function u(R){var T=l(R,"string");return typeof T=="symbol"?T:String(T)}function f(R,T,D){return T=u(T),T in R?Object.defineProperty(R,T,{value:D,enumerable:!0,configurable:!0,writable:!0}):R[T]=D,R}function p(){return p=Object.assign?Object.assign.bind():function(R){for(var T=1;T<arguments.length;T++){var D=arguments[T];for(var z in D)Object.prototype.hasOwnProperty.call(D,z)&&(R[z]=D[z])}return R},p.apply(this,arguments)}function h(R,T){if(R==null)return{};var D={},z=Object.keys(R),H,W;for(W=0;W<z.length;W++)H=z[W],!(T.indexOf(H)>=0)&&(D[H]=R[H]);return D}function g(R,T){if(R==null)return{};var D=h(R,T),z,H;if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(R);for(H=0;H<W.length;H++)z=W[H],!(T.indexOf(z)>=0)&&Object.prototype.propertyIsEnumerable.call(R,z)&&(D[z]=R[z])}return D}function b(R,T){return v(R)||n(R,T)||j(R,T)||k()}function v(R){if(Array.isArray(R))return R}function j(R,T){if(R){if(typeof R=="string")return C(R,T);var D=Object.prototype.toString.call(R).slice(8,-1);if(D==="Object"&&R.constructor&&(D=R.constructor.name),D==="Map"||D==="Set")return Array.from(R);if(D==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(D))return C(R,T)}}function C(R,T){(T==null||T>R.length)&&(T=R.length);for(var D=0,z=new Array(T);D<T;D++)z[D]=R[D];return z}function k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var _=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?e.useLayoutEffect:e.useEffect;function E(R){var T=e.useRef(R);return _(function(){T.current=R}),e.useCallback(function(){for(var D=arguments.length,z=new Array(D),H=0;H<D;H++)z[H]=arguments[H];return T.current.apply(void 0,z)},[])}var N=function(T,D){var z=D.decimal,H=D.decimals,W=D.duration,Y=D.easingFn,G=D.end,X=D.formattingFn,$=D.numerals,J=D.prefix,I=D.separator,P=D.start,O=D.suffix,U=D.useEasing,Q=D.useGrouping,ee=D.useIndianSeparators,ie=D.enableScrollSpy,re=D.scrollSpyDelay,se=D.scrollSpyOnce,de=D.plugin;return new t.CountUp(T,G,{startVal:P,duration:W,decimal:z,decimalPlaces:H,easingFn:Y,formattingFn:X,numerals:$,separator:I,prefix:J,suffix:O,plugin:de,useEasing:U,useIndianSeparators:ee,useGrouping:Q,enableScrollSpy:ie,scrollSpyDelay:re,scrollSpyOnce:se})},V=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],B={decimal:".",separator:",",delay:null,prefix:"",suffix:"",duration:2,start:0,decimals:0,startOnMount:!0,enableReinitialize:!0,useEasing:!0,useGrouping:!0,useIndianSeparators:!1},M=function(T){var D=Object.fromEntries(Object.entries(T).filter(function(xe){var me=b(xe,2),$e=me[1];return $e!==void 0})),z=e.useMemo(function(){return s(s({},B),D)},[T]),H=z.ref,W=z.startOnMount,Y=z.enableReinitialize,G=z.delay,X=z.onEnd,$=z.onStart,J=z.onPauseResume,I=z.onReset,P=z.onUpdate,O=g(z,V),U=e.useRef(),Q=e.useRef(),ee=e.useRef(!1),ie=E(function(){return N(typeof H=="string"?H:H.current,O)}),re=E(function(xe){var me=U.current;if(me&&!xe)return me;var $e=ie();return U.current=$e,$e}),se=E(function(){var xe=function(){return re(!0).start(function(){X==null||X({pauseResume:de,reset:fe,start:Pe,update:ye})})};G&&G>0?Q.current=setTimeout(xe,G*1e3):xe(),$==null||$({pauseResume:de,reset:fe,update:ye})}),de=E(function(){re().pauseResume(),J==null||J({reset:fe,start:Pe,update:ye})}),fe=E(function(){re().el&&(Q.current&&clearTimeout(Q.current),re().reset(),I==null||I({pauseResume:de,start:Pe,update:ye}))}),ye=E(function(xe){re().update(xe),P==null||P({pauseResume:de,reset:fe,start:Pe})}),Pe=E(function(){fe(),se()}),ke=E(function(xe){W&&(xe&&fe(),se())});return e.useEffect(function(){ee.current?Y&&ke(!0):(ee.current=!0,ke())},[Y,ee,ke,G,T.start,T.suffix,T.prefix,T.duration,T.separator,T.decimals,T.decimal,T.formattingFn]),e.useEffect(function(){return function(){fe()}},[fe]),{start:Pe,pauseResume:de,reset:fe,update:ye,getCountUp:re}},F=["className","redraw","containerProps","children","style"],A=function(T){var D=T.className,z=T.redraw,H=T.containerProps,W=T.children,Y=T.style,G=g(T,F),X=e.useRef(null),$=e.useRef(!1),J=M(s(s({},G),{},{ref:X,startOnMount:typeof W!="function"||T.delay===0,enableReinitialize:!1})),I=J.start,P=J.reset,O=J.update,U=J.pauseResume,Q=J.getCountUp,ee=E(function(){I()}),ie=E(function(de){T.preserveValue||P(),O(de)}),re=E(function(){if(typeof T.children=="function"&&!(X.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}Q()});e.useEffect(function(){re()},[re]),e.useEffect(function(){$.current&&ie(T.end)},[T.end,ie]);var se=z&&T;return e.useEffect(function(){z&&$.current&&ee()},[ee,z,se]),e.useEffect(function(){!z&&$.current&&ee()},[ee,z,T.start,T.suffix,T.prefix,T.duration,T.separator,T.decimals,T.decimal,T.className,T.formattingFn]),e.useEffect(function(){$.current=!0},[]),typeof W=="function"?W({countUpRef:X,start:I,reset:P,update:O,pauseResume:U,getCountUp:Q}):e.createElement("span",p({className:D,ref:X,style:Y},H),typeof T.start<"u"?Q().formattingFn(T.start):"")};return ua.default=A,ua.useCountUp=M,ua}var fO=uO();const wd=ss(fO),pO=Pt.createContext({}),fk=!0;function hO({baseColor:e,highlightColor:t,width:n,height:i,borderRadius:s,circle:l,direction:u,duration:f,enableAnimation:p=fk,customHighlightBackground:h}){const g={};return u==="rtl"&&(g["--animation-direction"]="reverse"),typeof f=="number"&&(g["--animation-duration"]=`${f}s`),p||(g["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(g.width=n),(typeof i=="string"||typeof i=="number")&&(g.height=i),(typeof s=="string"||typeof s=="number")&&(g.borderRadius=s),l&&(g.borderRadius="50%"),typeof e<"u"&&(g["--base-color"]=e),typeof t<"u"&&(g["--highlight-color"]=t),typeof h=="string"&&(g["--custom-highlight-background"]=h),g}function mO({count:e=1,wrapper:t,className:n,containerClassName:i,containerTestId:s,circle:l=!1,style:u,...f}){var p,h,g;const b=Pt.useContext(pO),v={...f};for(const[V,B]of Object.entries(f))typeof B>"u"&&delete v[V];const j={...b,...v,circle:l},C={...u,...hO(j)};let k="react-loading-skeleton";n&&(k+=` ${n}`);const _=(p=j.inline)!==null&&p!==void 0?p:!1,E=[],N=Math.ceil(e);for(let V=0;V<N;V++){let B=C;if(N>e&&V===N-1){const F=(h=B.width)!==null&&h!==void 0?h:"100%",A=e%1,R=typeof F=="number"?F*A:`calc(${F} * ${A})`;B={...B,width:R}}const M=Pt.createElement("span",{className:k,style:B,key:V},"‌");_?E.push(M):E.push(Pt.createElement(Pt.Fragment,{key:V},M,Pt.createElement("br",null)))}return Pt.createElement("span",{className:i,"data-testid":s,"aria-live":"polite","aria-busy":(g=j.enableAnimation)!==null&&g!==void 0?g:fk},t?E.map((V,B)=>Pt.createElement(t,{key:B},V)):E)}const dt=({height:e,width:t,marginbottom:n})=>r.jsx(mO,{width:t,height:e,baseColor:"#111111",highlightColor:"#474747"});d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;const gO=()=>{const e=Ke(),t=x.useRef(null),[n,i]=x.useState(!1),[s,l]=x.useState([]),[u,f]=x.useState(!1);x.useEffect(()=>{p()},[]);const p=async()=>{f(!0);try{const g=await Re.get("/whoweare");l(g.data.data),f(!1)}catch(g){f(!1),console.error("Error fetching Client data:",g)}};x.useEffect(()=>{const g=new IntersectionObserver(([b])=>{b.isIntersecting&&(i(!0),g.disconnect())},{threshold:.5});return t.current&&g.observe(t.current),()=>g.disconnect()},[]),x.useEffect(()=>{bt.init({duration:3e3})},[]);const h=()=>{e("/about")};return r.jsx(xO,{children:r.jsx("div",{className:"wrapper",children:u?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:3}).map((g,b)=>r.jsx(dt,{width:350,height:350,borderRadius:10},b))}):s.length===0?r.jsx(DO,{children:"No data available"}):r.jsx(vO,{children:s.map((g,b)=>r.jsxs(r.Fragment,{children:[r.jsxs(wO,{"data-aos":"fade-right",children:[r.jsx(yO,{className:"sub-head",children:"Who We Are"}),r.jsx(bO,{children:g.description}),r.jsx(jO,{ref:t,children:g.card.map((v,j)=>r.jsxs(SO,{children:[r.jsxs(kO,{children:[n&&r.jsx(wd,{start:0,end:2,duration:2}),v.count]}),r.jsxs(CO,{children:[" ",v.description]})]}))}),r.jsxs(_O,{children:[r.jsx($r,{slide:!0,text:"Learn More",onClick:h}),r.jsx(TO,{})]})]}),r.jsx($O,{"data-aos":"fade-left",children:r.jsx(PO,{children:r.jsx(EO,{src:g.image,alt:"Who We Are"})})})]}))})})})},xO=d.section``,vO=d.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,yO=d.h3``,bO=d.p`
  margin: 30px 0;
`,wO=d.div``,jO=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,SO=d.div`
  padding: 10px;
  box-shadow: 8px 5px 4px #ff2a0033;
  border-radius: 5px;
`,kO=d.h4`
  text-align: center;
  font-size: 25px;
`,CO=d.p`
  text-align: center;
`,$O=d.div``,PO=d.div`
  height: 300px;
  width: auto;
`,EO=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,_O=d.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  background-color: ${y.black};
`,TO=d.div`
  border-top: 1px solid ${y.grey_border};
  width: 100px;
`,DO=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,pk="data:image/svg+xml,%3csvg%20width='16'%20height='14'%20viewBox='0%200%2016%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.2665%207.93728C9.90728%208.45244%209.31759%2011.7491%209.31764%2013.3331C10.0124%2013.3331%2011.3929%2013.0444%2011.3574%2011.8897C11.3131%2010.4463%2012.0891%209.58039%2012.5769%208.91424C12.9672%208.38133%2014.1585%207.93725%2014.7055%207.78183C14.8754%207.61899%2014.6256%207.42211%2012.2665%207.93728Z'%20fill='white'/%3e%3cpath%20d='M9.50418%2012.1101L11.3525%2011.9606L11.3525%2013.3331L9.31764%2013.3331L9.50418%2012.1101Z'%20fill='white'/%3e%3cpath%20d='M0.537301%206.24961L15.7919%206.24961L15.7919%207.84834L0.537304%207.84834L0.537301%206.24961Z'%20fill='white'/%3e%3cpath%20d='M12.2665%206.12726C9.90727%205.61209%209.31757%202.3154%209.31762%200.731456C10.0123%200.731456%2011.3929%201.02013%2011.3574%202.17484C11.3131%203.61822%2012.0891%204.48414%2012.5769%205.15029C12.9671%205.68321%2014.1585%206.12728%2014.7055%206.2827C14.8754%206.44554%2014.6256%206.64242%2012.2665%206.12726Z'%20fill='white'/%3e%3cpath%20d='M9.50416%201.95442L11.3525%202.10388L11.3525%200.731445L9.31762%200.731456L9.50416%201.95442Z'%20fill='white'/%3e%3c/svg%3e";function OO(e){return Be({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(e)}function el(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M175.9 448c-35-.1-65.5-22.6-76-54.6C67.6 356.8 48 308.7 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208s-93.1 208-208 208c-28.4 0-55.5-5.7-80.1-16zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM128 369c0 26 21.5 47 48 47s48-21 48-47c0-20-28.4-60.4-41.6-77.7c-3.2-4.4-9.6-4.4-12.8 0C156.6 308.6 128 349 128 369zm128-65c-13.3 0-24 10.7-24 24s10.7 24 24 24c30.7 0 58.7 11.5 80 30.6c9.9 8.8 25 8 33.9-1.9s8-25-1.9-33.9C338.3 320.2 299 304 256 304zm47.6-96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"},child:[]}]})(e)}const hk=({section:e,sub_section:t})=>{x.useEffect(()=>{bt.init({duration:3e3})},[]);const n=Ke(),[i,s]=x.useState([]),[l,u]=x.useState(!1),[f,p]=x.useState([]),h=()=>{n("/what-we-do")};var g={dots:!1,infinite:!1,speed:500,slidesToShow:4,slidesToScroll:4,initialSlide:0,arrows:!1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1}}]};x.useEffect(()=>{b()},[e,t]),x.useEffect(()=>{v()},[]);const b=async()=>{u(!0);try{const C=await Re.get("/casesections",{params:{isNeedFull:!0,section:e,sub_section:t}});s(C.data.data||[]),u(!1)}catch(C){u(!1),console.error("Error fetching CaseSection data:",C)}},v=async()=>{u(!0);try{const C=await Re.get("/section",{params:{section:"home",subsection:"what we do"}});p(C.data.data),u(!1)}catch(C){u(!1),console.error("Error Fetching Section Details:",C)}},j=C=>C.split(" ").slice(0,20).join(" ")+"...";return console.log("sectionDetails",f),i&&i.length===0?null:r.jsx(MO,{children:r.jsxs("div",{className:"wrapper",children:[r.jsx(AO,{className:"sub-head","data-aos":"fade-right",children:f.title?f.title:"Case Section"}),f.subtitle&&r.jsx(LO,{className:"red-head",children:f.subtitle?f.subtitle:""})," ",f.description&&r.jsx(zO,{"data-aos":"fade-left",children:f.description?f.description:""}),r.jsx(RO,{className:"slider-container",children:l?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):i.length===0?r.jsxs(HO,{children:[r.jsx(el,{}),r.jsx("p",{children:`No Data Availale - ${t||e}`})]}):r.jsx(hs,{...g,children:i.map((C,k)=>r.jsxs(NO,{children:[r.jsx(IO,{children:r.jsx(tg,{src:C.image,alt:"What We Do"})}),r.jsxs(mk,{children:[r.jsx(FO,{children:j(C.description)}),r.jsx(VO,{children:r.jsx(BO,{onClick:h,children:r.jsx("a",{href:C.link,children:r.jsx(tg,{src:pk,alt:"Redirect"})})})})]})]},C._id))})})]})})},MO=d.section``,AO=d.h3`
  text-align: center;
`,LO=d.h4`
  text-align: center;
  margin: 20px 0;
`,zO=d.p`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`,RO=d.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`,mk=d.div`
  position: absolute;
  width: 90%;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s linear;
  z-index: 2;
  display: grid;
  justify-items: center;
  max-height: 50px;
  overflow: hidden;
`,tg=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(1);
`,NO=d.div`
  display: inline-block;
  position: relative;
  margin-top: 30px;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, #c4c4c423 0%, #ff2a009d 76%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }

    ${mk} {
      max-height: 200px;
    }
    ${tg} {
      filter: grayscale(0);
    }
  }
`,IO=d.div`
  height: 300px;
  width: 100%;

  @media screen and (max-width: 840px) {
    height: 250px;
  }
`,FO=d.p``,VO=d.button`
  display: grid;
  justify-items: center;
  width: 100%;
  margin-top: 50px;
`,BO=d.button`
  background-color: ${y.black};
  border-radius: 50%;
  padding: 12px;
  margin-top: 10px;
`,HO=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`;function mu(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"},child:[]}]})(e)}function gu(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"},child:[]}]})(e)}function b0(e){return Be({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"},child:[]}]})(e)}var WO={dots:!1,infinite:!0,speed:500,slidesToShow:8,slidesToScroll:2,initialSlide:0,arrows:!1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:7,slidesToScroll:1,infinite:!0}},{breakpoint:768,settings:{slidesToShow:5,slidesToScroll:1,initialSlide:2}},{breakpoint:540,settings:{slidesToShow:2,slidesToScroll:1}}]};const UO=()=>{const e=x.useRef(null),[t,n]=x.useState(null),[i,s]=x.useState(null),[l,u]=x.useState(!1),[f,p]=x.useState([]);x.useEffect(()=>{bt.init({duration:3e3})},[]),x.useEffect(()=>{h()},[]);const h=async()=>{u(!0);try{const b=await Re.get("/section",{params:{section:"home",subsection:"industry"}});p(b.data.data),u(!1)}catch(b){u(!1),console.error("Error Fetching Section Details:",b)}};x.useEffect(()=>{g()},[]);const g=async()=>{u(!0);try{const b=await Re.get("/industries",{params:{isNeedFull:!0}});s(b.data.data||[]),u(!1)}catch(b){u(!1),console.error("Error fetching Industry data:",b)}};return r.jsx(qO,{children:r.jsxs("div",{className:"wrapper",children:[r.jsx(YO,{className:"sub-head",children:f.title?f.title:"Industries We Serve"}),i&&i.length>8?r.jsxs(KO,{className:"slider-container",children:[r.jsx(hs,{...WO,ref:e,children:i&&i.map((b,v)=>r.jsxs(Rb,{"data-aos":v%2===0?"fade-down":"fade-up",onMouseEnter:()=>n(b._id),onMouseLeave:()=>n(null),children:[r.jsx(Nb,{children:r.jsx(Ib,{src:(t===b._id,b.image),alt:b.name})}),r.jsx(ng,{children:b.name})]}))}),r.jsxs(QO,{children:[r.jsx(Fb,{onClick:()=>e.current.slickPrev(),children:r.jsx(mu,{})}),r.jsx(Fb,{onClick:()=>e.current.slickNext(),children:r.jsx(gu,{})})]})]}):r.jsx(GO,{children:i&&i.map((b,v)=>r.jsxs(Rb,{"data-aos":v%2===0?"fade-down":"fade-up",onMouseEnter:()=>n(b._id),onMouseLeave:()=>n(null),children:[r.jsx(Nb,{children:r.jsx(Ib,{src:(t===b._id,b.image),alt:b.name})}),r.jsx(ng,{children:b.name})]}))})]})})},qO=d.section``,YO=d.h3`
  text-align: center;
  margin-bottom: 40px;
`,GO=d.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
  }
`,KO=d.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`,ng=d.p`
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 540px) {
    font-size: 13px;
  }
`,Rb=d.div`
  display: grid;
  justify-items: center;

  &:hover {
    ${ng} {
      color: ${y.theme_red};
    }
  }
`,Nb=d.div`
  height: 60px;
  width: 60px;
  padding: 5px;
  cursor: pointer;
`,Ib=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`,QO=d.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: end;
  margin: 30px 0;

  display: none;
  /* padding-right: 20px; */
`,Fb=d.div`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${y.theme_red};

  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${y.theme_red};
  }
`,ms=()=>{const e=Ke();x.useEffect(()=>{bt.init({duration:3e3})},[]);const t=()=>{e("/book-a-demo")};return r.jsx(ZO,{children:r.jsx(XO,{"data-aos":"zoom-in-up",children:r.jsx("div",{className:"wrapper",children:r.jsxs(JO,{children:[r.jsx(eM,{children:"need to book a demo? "}),r.jsx(tM,{children:"click below to get ready for a new experience"}),r.jsxs(nM,{children:[r.jsx(Vb,{}),r.jsx($r,{text:"Book A Demo",onClick:t}),r.jsx(Vb,{})]})]})})})})},ZO=d.section`
  padding-bottom: 45px;
`,XO=d.div`
  width: 50%;
  margin: auto;
  @media screen and (max-width: 980px) {
    width: 90%;
  }
`,JO=d.div`
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 20px;
  background-color: ${y.grey_background};
  @media screen and (max-width: 430px) {
    padding: 20px 10px;
  }
`,eM=d.h2`
  color: ${y.theme_red};
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  @media screen and (max-width: 430px) {
    font-size: 25px;
  }
`,tM=d.p`
  font-size: 16px;
  text-align: center;
  text-transform: capitalize;
  /* margin-bottom: 40px; */
`,nM=d.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,Vb=d.div`
  border-top: 1px solid ${y.grey_border};
  width: 100px;
`,Bb="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAnCAYAAAB9qAq4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU9SURBVHgBxVhdcttGDAZlJ+1b1ROUfkuadMqcoNYNnBNYPkGcE1g+QZQTRDmB1RNYPYE4U6fTN7EnkF7SNnak7QcsdrUil6FMehrMcEjuL7AAPgBL9ABkntOxeUbXeJbmRzJ45vge0gNQQh0JzFzgNarpzukxDZKcVtSSetSB9JRG+ntJf9P3yR8QOqEz/Bd4MroTAb4OiVqtSkeVvieUap8xGfWpJXU6QTJ0LO/HNC53JX/iBBOayc9ax7Wgw8qeLO0nXfAbymE/RWwiTi8Dg5aZOhsz2r55gBNkxrDpG7qlJSS/kueWFqLGjNJgzDm3YfO5n/u89oQyK0FcyH3IezFDQ7DgTKXn/xTPCm0TvIdo7+sY7s9VzYV6a+HXY2ENnXMfHOeIWtKhMnehzBRQx0Dsh6yh0wEcwNCpbkZqV7/SRzDMrN6KYCm8dY51ZirMSSDIjDpQogwuZJMemLvZXVBs8g79vOEBvUx+p+lOv5tbpULfKXYZJx/oNbWgnl+Eub2pSisOsMGJMZWMXU8+JXvyRyyAYCALympN5H/Fp69j21ETXnm8+wmqc20c3ty8J9ETrI5rwaQ9QWcnn6rxUzzY4d2a3vC/CLKhdzrk0tlsjEQrNrIwjSDsKd2XOGSphMswyKv0i+AE3OPaFoEgDEGZzIlogqONn/90q4kmCmFmhNeFtlqANX4j9swB/k/8GDtuTI8Qgz+Ll4+C8RRzjGAPWQ/9uQC+gzfAFrdFGZQF7Om9wkZZhVEYPkCpAKxcU+i11gkcpOSyuTMJYCc2PCsxOZY9LJO5H7tdbwahzxymRtMtk2LDb6nPtuWltnZaYMGhfK/FW0NmL+G5I5lv8XPuBKtA1zNgqFFbtAIydPVpGxg88Dfmg2JPDowteTCXELcBk4mo5gXFTqqHzQ1gyoW7z3gfQGAj2poiRTtLCqspFexKNKinv1fCKqo36rXwSEycaHsmMTnO4IioAVaAnWUEECZ74nwrnOLRvunWFhpMYH+PJKViFWVhwqBe7Oaw+iZiFvZZqaCzGDxpGz99+hdmRg3kU/qtM7BkL5wRlzxzStZJ2NtTiiQK/tS/kERwbSN7bRqSDAFlh12MlU9pot/XJSHGEayc10UYX1xF0rQAkxdxhpAmyeK2MnNV2lj7+3WLS4rv+hqAGP3n5cCgaw/9GtreCzg/5QRV0yoLnlt8+05euajvrbRtkO8FJLZjPG7mX2LQrUdsZ3A+ZkgSZXZE3jOh984Re+7k0DHRSW8FlBN4JcdQa3tDXxjZ+qNgAfgk6J4kiayrBFnYJBDGOhGjxLA8qb4622YjSxdjY23S7mJ0xPZUhe9Ufct9C/ueSnIs740/xa1QNwoPrA6tznbabptPUcH+WqMQm8HAqXA/Bh0zdWlTrDpLkCRYunBFVQ1zqUYiW1KsAVEfGmy0wqCCp2YWMcp0tC8vNb5ah7mD6lDtYZ2+jjvXvDENkoudemdfcjWJyzAqdymVuxeu7pBiMVDv1Cvx1R2454i5Axdz78/gbkJQ4Hmvvb8E6RBHiZMdRgEH6L9SaJj5eRvMSTTUGfqN/qGTNsx5BmUdG6R3cz07ghd+zUYtYxIJe+W0fYqw9TJsCBIMCfptb7gqsVgKo3VwI/ARm5ekrzAayUqUybmkTpGc8H8hF3dr+7exe0gtqdvtlvP+uuu1Hv2g4wpqSd0YJMWzyCUlos0rd2/TRb2H1IW4LrG1B9949f0NREI/43sk3y65aEnd76htAnpF8fsZX0i1pc4MMmmxc0wk9TGD81/4nz6E5/4Hen7Jt4C5eZIAAAAASUVORK5CYII=",tl=({section:e,sub_section:t})=>{const n=x.useRef(null);var i={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,arrows:!1,autoplay:!0,autoplaySpeed:5e3,cssEase:"linear",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,initialSlide:2}},{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1}}]};x.useEffect(()=>{bt.init({offset:200,duration:3e3,easing:"ease"})},[]);const[s,l]=x.useState([]),[u,f]=x.useState(!1),[p,h]=x.useState([]),g=Ke();x.useEffect(()=>{(async()=>{f(!0);try{const k=await Re.get("/casestudies",{params:{isNeedFull:!0,section:e,sub_section:t}});console.log(k.data.data),l(k.data.data),f(!1)}catch(k){f(!1),console.error("Error fetching casestudy data:",k)}})()},[e,t]),x.useEffect(()=>{b()},[]);const b=async()=>{f(!0);try{const C=await Re.get("/section",{params:{section:"home",subsection:"case study"}});h(C.data.data),f(!1)}catch(C){f(!1),console.error("Error Fetching Section Details:",C)}},v=C=>C.split(" ").slice(0,12).join(" ")+"...",j=C=>{g(`/casestudydetail/${C}`)};return console.log("marqueeData",s),s&&s.length===0?null:r.jsxs(oM,{children:[r.jsxs("div",{className:"wrapper",children:[r.jsx(iM,{className:"sub-head","data-aos":"fade-right",children:p.title?p.title:"Case Studies"}),p.description&&r.jsx(sM,{"data-aos":"fade-left",children:p.description})]}),r.jsx(aM,{children:u?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):s.length===0?r.jsxs(lM,{children:[r.jsx(el,{}),r.jsx("p",{children:`No Data Availale - ${t||e}`})]}):r.jsx(r.Fragment,{children:s.length>4?r.jsxs(Hb,{className:"slider-container",children:[r.jsx(hs,{...i,ref:n,children:s&&s.map((C,k)=>r.jsxs(Wb,{children:[r.jsx(Ub,{className:"slider",children:r.jsx(qb,{src:C.image,alt:"Latest Works"})}),r.jsxs(rg,{children:[r.jsx(Yb,{children:r.jsx(Gb,{src:C.icon?C.icon:Bb,alt:"case studies"})}),r.jsx(Kb,{children:C.title}),r.jsxs(og,{children:[v(C.description),r.jsx(Cc,{className:"read",onClick:()=>j(C._id),children:"READ MORE"})]})]})]},C._id))}),r.jsxs(dM,{children:[r.jsx(Cc,{onClick:()=>n.current.slickPrev(),children:r.jsx(mu,{})}),r.jsx(Cc,{onClick:()=>n.current.slickNext(),children:r.jsx(gu,{})})]})]}):r.jsx(Hb,{className:"grid grid-cols-4 wrapper gap-3",children:s&&s.map((C,k)=>r.jsxs(Wb,{children:[r.jsx(Ub,{className:"slider",children:r.jsx(qb,{src:C.image,alt:"Latest Works"})}),r.jsxs(rg,{children:[r.jsx(Yb,{children:r.jsx(Gb,{src:C.icon?C.icon:Bb,alt:"case studies"})}),r.jsx(Kb,{children:C.title}),r.jsxs(og,{children:[v(C.description),r.jsx(Cc,{className:"read",onClick:()=>j(C._id),children:"READ MORE"})]})]})]},C.id))})})}),r.jsxs(cM,{to:"/blogs",children:[r.jsx(Qb,{}),r.jsx($r,{text:"Learn More"}),r.jsx(Qb,{})]})]})},rM=Ve`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
`,oM=d.section``,iM=d.h3`
  text-align: center;
`,sM=d.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`,aM=d.div`
  display: flex;
  overflow: hidden;
  padding: 30px 0 0 0;

  display: block;
`,Hb=d.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }

  .not-slider {
  }
`;d.div`
  display: inline-block;
  position: relative;
  margin-top: 90px;
  padding: 5px 30px;

  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  @media screen and (max-width: 430px) {
    padding: 5px 14px;
  }
`;d.h4`
  padding-top: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 15px;
`;const lM=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`;d.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  animation: ${rM} 30s linear infinite;
  width: calc(200%); /* Ensures seamless animation */

  &:hover {
    animation-play-state: paused;
  }
`;const rg=d.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 20px;
  z-index: 2;
  max-height: 265px;
`,og=d.p`
  font-size: 13px;
  max-height: 0px;
  overflow: hidden;
  font-weight: 300;

  text-transform: capitalize;
  text-align: center;
  transition: max-height 1s linear;
`,Wb=d.span`
  color: #fff;

  text-transform: uppercase;
  /* font-size: 120px; */
  font-weight: 100;
  font-family: "regular";
  @media screen and (max-width: 1080px) {
    font-size: 100px;
  }
  @media screen and (max-width: 768px) {
    font-size: 74px;
  }
  @media screen and (max-width: 640px) {
    font-size: 64px;
  }
  @media screen and (max-width: 480px) {
    font-size: 60px;
  }

  position: relative;

  &:hover {
    ${og} {
      max-height: 300px;
    }
    ${rg} {
      background-color: #fff;
      p {
        color: #000;
      }
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      background: linear-gradient(180deg, #c4c4c423 26%, #ff2a009d 90%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }
  }
`,Ub=d.div`
  height: 300px;
  width: 300px;
  &.slider {
    height: 300px;
    width: 100%;
  }
  @media screen and (max-width: 1180px) {
    height: 300px;
    width: 300px;
  }
`,qb=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`,Yb=d.div`
  height: 50px;
  width: 50px;
  padding: 5px;
  background-color: #000;
`,Gb=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,Kb=d.p`
  font-size: 18px;
  font-weight: 500;

  text-transform: capitalize;
  text-align: center;
`,cM=d(ht)`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,Qb=d.div`
  border-top: 1px solid ${y.grey_border};
  width: 100px;
`,dM=d.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  /* padding-right: 20px; */
`,Cc=d.div`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${y.theme_red};

  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${y.theme_red};
  }

  &.read {
    background-color: ${y.black};
    padding: 5px;
    margin: 5px;
    color: ${y.theme_red};
    border-radius: 0;
    border: none;
    &:hover {
      color: ${y.white};
    }
  }
`,uM=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!0),[s,l]=x.useState([]),u=x.useRef(null);x.useEffect(()=>{f(),p()},[]);const f=async()=>{i(!0);try{const g=await Re.get("/technologies",{params:{isNeedFull:!0}});t(g.data.data),i(!1)}catch(g){i(!1),console.error("Error fetching Technology data:",g)}},p=async()=>{i(!0);try{const g=await Re.get("/section",{params:{section:"home",subsection:"stand out"}});l(g.data.data),i(!1)}catch(g){i(!1),console.error("Error Fetching Section Details:",g)}};var h={dots:!1,infinite:!0,speed:500,slidesToShow:5,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:2e3,cssEase:"linear",pauseOnHover:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,initialSlide:2}},{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1}}]};return console.log("technology",e),r.jsxs(pM,{children:[r.jsx("div",{className:"wrapper",children:r.jsx(hM,{className:"sub-head",children:s.title?s.title:"How Aetherbot.ai’s Digital Human Technology Stands Out?"})}),r.jsx(mM,{children:r.jsxs(gM,{className:"slider-container",children:[r.jsx(hs,{...h,ref:u,children:e&&e.map((g,b)=>r.jsxs(bM,{children:[r.jsxs(yM,{children:[r.jsx(wM,{children:r.jsx(Zb,{src:g.image,alt:"Latest Works"})}),r.jsx(jM,{children:g.text}),r.jsx(gk,{children:r.jsx(Zb,{src:pk,alt:"redirect"})})]}),r.jsx(xk,{children:g.points.map((v,j)=>r.jsx(SM,{children:v},j))})]},g._id))}),r.jsxs(kM,{children:[r.jsx(Xb,{onClick:()=>u.current.slickPrev(),children:r.jsx(mu,{})}),r.jsx(Xb,{onClick:()=>u.current.slickNext(),children:r.jsx(gu,{})})]})]})})]})};Ve`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-100%);
  }
`;const fM=Ve`
 from {
    transform: rotate(0);
  }
    to {
     transform: rotate(90deg); 
    } `,pM=d.section`
  /* padding-bottom: 120px; */
`,hM=d.h3`
  text-align: center;
  width: 50%;
  margin: auto;
  font-size: 45px;
  @media screen and (max-width: 768px) {
    font-size: 32px;
    width: 80%;
  }
`;d.p`
  font-weight: 300;
  text-align: center;
  padding: 20px 0;
`;const mM=d.div`
  padding: 30px 0 0 0;
`,gM=d.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`,xM=d.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  padding: 20px;
  z-index: 2;
`,vM=d.p`
  font-size: 13px;
  font-weight: 300;
  text-transform: capitalize;
  text-align: center;
`,gk=d.div`
  width: 50px; /* Ensure fixed size */
  height: 50px; /* Ensure fixed size */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${y.black};
  padding: 14px;
  transform-origin: center; /* Rotate around its center */
  transition: transform 0.3s ease; /* Add smooth transition if needed */
  z-index: 3;
  position: absolute;
  bottom: -30px;
`,xk=d.ul`
  /* position: absolute;
  bottom: -140px; */
  opacity: 0;
  background-color: ${y.grey_background};
  padding: 0 20px;
  border-radius: 5px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #ff2a00, #ffffff1e);
  border-image-slice: 1;
  margin-top: 40px;
`,yM=d.div`
  background-color: ${y.grey_background};
  display: grid;
  justify-items: center;
  position: relative;
  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      background: linear-gradient(180deg, #c4c4c423 0%, #ff2a009d 76%);
      z-index: 1;
      transition: background-color 0.3s ease-in-out;
    }
  }
`,bM=d.span`
  display: grid;
  place-items: center;
  position: relative;
  padding: 20px;

  &:hover {
    ${vM} {
      /* max-height: 300px; */
    }
    ${gk} {
      animation: ${fM} 1s linear forwards;
      transform-origin: center; /* Ensure rotation doesn't affect layout */
    }
    ${xM} {
      background-color: #fff;
      p {
        color: #000;
      }
    }

    ${xk} {
      transition: all 2s ease;
      opacity: 1;
    }
  }
`,wM=d.div`
  height: 160px;
  width: 250px;
  padding: 0 70px;

  @media screen and (max-width: 1180px) {
    height: 300px;
    width: 300px;
  }
`,Zb=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;d.div`
  height: 50px;
  width: 50px;
  padding: 5px;
`;d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;const jM=d.p`
  font-size: 13px;

  text-transform: capitalize;
  text-align: center;
  padding-bottom: 50px;
`,SM=d.li`
  padding: 10px 0;
  /* min-width: max-content; */
`,kM=d.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  /* padding-right: 20px; */
`,Xb=d.div`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${y.theme_red};

  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${y.theme_red};
  }
`,CM="/assets/vdoBg-CAveJzJY.jpg";function dn(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function $M(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"48",d:"M88 152h336M88 256h336M88 360h336"},child:[]}]})(e)}function PM(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3zM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8z"},child:[]}]})(e)}const w0=({section:e,sub_section:t})=>{const[n,i]=x.useState([]),[s,l]=x.useState(!1);x.useEffect(()=>{u()},[e,t]);const u=async()=>{l(!0);try{const f=await Re.get("/video",{params:{section:e,sub_section:t}});l(!1),i(f.data.data)}catch(f){l(!1),console.error("Error fetching Video data:",f)}};return console.log("video",n),r.jsx(EM,{children:r.jsx(_M,{children:s?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):n?n.map(f=>r.jsx(DM,{children:r.jsx(OM,{src:f.video,controls:!1,autoPlay:!0,muted:!0})})):r.jsxs(TM,{children:[r.jsx(FaRegFaceSadTear,{}),r.jsx("p",{children:`No Data Available - ${t||e}`})]})})})},EM=d.section``,_M=d.div`
  /* height: 300px;
  width: 100%;
  background-image: url(${CM});
  background-size: cover;
  background-position: center; */
`,TM=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`,DM=d.div`
  height: 100%;
  width: 100%;
`,OM=d.video`
  height: 300px;
  width: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`,MM=()=>r.jsxs("div",{children:[r.jsx(VD,{}),r.jsx(gO,{}),r.jsx(uM,{}),r.jsx(hk,{section:"home"}),r.jsx(UO,{}),r.jsx(w0,{section:"home"}),r.jsx(tl,{section:"global",sub_section:""}),r.jsx(ms,{})]}),AM="/assets/aboutBg-BiXtdEDN.png",vk="/assets/aboutIcon1-D3yG0o-T.svg",Jb="/assets/aboutIcon2-7ZrHGSvt.svg",LM=()=>{const e=x.useRef(null),[t,n]=x.useState(!1);x.useState(!1);const[i,s]=x.useState([]),[l,u]=x.useState(!1);x.useEffect(()=>{f()},[]);const f=async()=>{u(!0);try{const p=await Re.get("/aboutwhoweare");s(p.data.data),u(!1)}catch(p){u(!1),console.error("Error fetching Client data:",p)}};return console.log(i),x.useEffect(()=>{const p=new IntersectionObserver(([h])=>{h.isIntersecting&&(n(!0),p.disconnect())},{threshold:.5});return e.current&&p.observe(e.current),()=>p.disconnect()},[]),console.log(i),r.jsx(zM,{children:r.jsx("div",{className:"wrapper",children:i&&i.map((p,h)=>r.jsxs(RM,{children:[r.jsxs(VM,{children:[r.jsx(NM,{className:"sub-head",children:p.title}),r.jsx(IM,{className:"red-head",children:"Aetherbot.Ai"}),r.jsx(FM,{children:p.description}),r.jsx(BM,{ref:e,children:p.card&&p.card.map(g=>r.jsxs(HM,{children:[r.jsxs(KM,{children:[r.jsx(QM,{children:r.jsx(ZM,{src:vk})}),r.jsxs(WM,{children:[g.count,"B"]})]}),r.jsx(UM,{children:g.title})]}))})]}),r.jsx(qM,{children:r.jsx(YM,{children:r.jsx(GM,{src:p.image,alt:"Who We Are"})})})]}))})})},zM=d.section``,RM=d.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  align-items: center;
  @media screen and (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,NM=d.h3``,IM=d.h3``,FM=d.p`
  margin: 30px 0;
  a {
    display: inline;
    color: ${y.theme_red};
    padding-left: 10px;
  }
`,VM=d.div``,BM=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 0;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`,HM=d.div`
  padding: 10px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 10px;
`,WM=d.h4`
  text-align: center;
  font-size: 25px;
  color: ${y.theme_red};
`,UM=d.p`
  text-align: left;
  font-size: 13px;
  width: 50%;
`,qM=d.div`
  background: rgb(255, 42, 0);
  background: radial-gradient(
    circle,
    rgba(255, 42, 0, 0.5396752450980392) 0%,
    rgb(23 23 23 / 0%) 53%
  );
`,YM=d.div`
  height: 300px;
  width: auto;
`,GM=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;d.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
`;d.div`
  border-top: 1px solid ${y.grey_border};
  width: 100px;
`;const KM=d.div``,QM=d.div`
  height: 40px;
  width: 40px;
`,ZM=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`,XM=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useEffect(()=>{bt.init({duration:2e3})},[]),x.useEffect(()=>{s()},[]);const s=async()=>{i(!0);try{const l=await Re.get("/missions",{params:{isNeedFull:!0}});t(l.data.data),i(!1)}catch(l){console.error("Error fetching Mission data:",l),i(!1)}};return console.log("mission",e),r.jsx(JM,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(eA,{className:"sub-head",children:[r.jsx("span",{children:"Our "})," Mission & Vision"]}),r.jsx(tA,{children:e&&e.map((l,u)=>r.jsxs(nw,{children:[r.jsx(ew,{className:u%2===0?"":"filter-invert",children:r.jsx(tw,{src:l.image,alt:l.title})}),r.jsxs(rw,{className:u%2===0?"filter-invert":"",children:[r.jsx(ow,{children:l.title}),r.jsx(iw,{children:l.description})]})]},u))}),r.jsx(nA,{children:e&&e.map((l,u)=>r.jsxs(nw,{className:"mobile-mission",background:l.image,children:[r.jsxs(rA,{"data-aos":"fade-right",children:[r.jsx(ew,{className:u%2===0?"mobile":"filter-invert mobile",children:r.jsx(tw,{src:l.image,alt:l.title})}),r.jsx(ow,{className:"mobile",children:l.title})]}),r.jsx(rw,{className:u%2===0?"mobile filter-invert":"mobile",children:r.jsx(iw,{"data-aos":"fade-left",children:l.description})})]},u))})]})})},JM=d.section`
  background: url(${AM});
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  width: 100%;
`,eA=d.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 60px;
  span {
    color: ${y.theme_red};
  }
`,tA=d.div`
  display: grid;
  gap: 80px;

  @media screen and (max-width: 940px) {
    display: none;
  }
`,ew=d.div`
  width: 220px;
  height: 220px;
  flex-shrink: 0;

  position: absolute;
  left: -150px;
  bottom: -10px;

  &.filter-invert {
    left: unset;
    position: absolute;
    right: -130px;
    @media screen and (max-width: 940px) {
      position: unset;
    }
  }

  @media screen and (max-width: 940px) {
    position: unset;
  }

  @media screen and (max-width: 940px) {
    width: 170px;
    height: 170px;
  }

  /* mobile */
  &.mobile {
    width: 120px;
    height: 120px;
    flex-shrink: 0;
    margin-right: 20px;
    @media screen and (max-width: 940px) {
      width: 60px;
      height: 60px;
    }
  }
`,tw=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,nw=d.div`
  display: flex;
  width: 80%;
  overflow: visible;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  position: relative;
  &:first-child {
    justify-self: end;
  }
  &:last-child {
    flex-direction: row-reverse;
    justify-self: start;
  }

  @media screen and (max-width: 940px) {
    display: grid;
    place-items: start;
    gap: 20px;
    padding: 20px;
    width: 100%;
    border: 1px solid transparent;
    border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
    border-image-slice: 1;
  }
  @media screen and (max-width: 940px) {
    padding: 10px;
  }

  /* mobile styles */
  &.mobile-mission {
    position: unset;
    margin: 20px 0;
    padding: 10px 20px;
    /* min-height: 300px;
    background: ${({background:e})=>`url(${e})`};
    background-position: center;
    background-size: cover;
    margin: 20px 0;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1;
    }
   */
  }
`,rw=d.div`
  padding: 20px;
  &.filter-invert {
    padding-left: 82px;

    @media screen and (max-width: 940px) {
      padding-left: unset;
      padding: 20px;
    }
  }
  &.mobile {
    /* position: absolute;
    z-index: 2; */
    max-height: 200px;
    overflow-y: scroll;
    padding: 00px;
  }
`,ow=d.h2`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
  &.mobile {
    color: ${y.theme_red};
  }
`,iw=d.p`
  font-size: 15px;
  font-weight: 300;

  width: 90%;
  @media screen and (max-width: 940px) {
    width: 100%;
  }
`,nA=d.div`
  display: none;
  @media screen and (max-width: 940px) {
    display: block;
  }
`,rA=d.div`
  display: flex;
  align-items: center;
`,oA=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useEffect(()=>{bt.init({duration:2e3})},[]),x.useEffect(()=>{s()},[]);const s=async()=>{i(!0);try{const l=await Re.get("/howDifferents",{params:{isNeedFull:!0}});t(l.data.data),i(!1)}catch(l){console.error("Error fetching Different data:",l),i(!1)}};return r.jsx(iA,{children:r.jsxs("div",{className:"wrapper",children:[r.jsx(sA,{className:"sub-head",children:"How We Different"}),r.jsx(sw,{children:e.map(l=>r.jsxs(aw,{children:[r.jsx(lw,{children:r.jsx(cw,{src:l.image,alt:"icon"})}),r.jsx(dw,{children:l.description})]},l.id))}),r.jsx(sw,{className:"mobile",children:e.map((l,u)=>r.jsxs(aw,{"data-aos":"zoom-in-up",children:[r.jsx(lw,{children:r.jsx(cw,{src:l.image,alt:"icon"})}),r.jsx(dw,{children:l.description})]},l.id))})]})})},iA=d.section``,sA=d.h3`
  margin-bottom: 30px;
  text-align: center;
`,sw=d.div`
  min-height: 320px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  @media screen and (max-width: 1080px) {
    min-height: unset;
    justify-items: center;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  /* @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  } */
  @media screen and (max-width: 480px) {
    display: none;
  }

  &.mobile {
    min-height: unset;

    display: none;
    @media screen and (max-width: 480px) {
      display: block;
    }
  }
`,aw=d.div`
  padding: 30px 20px;
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  display: grid;
  justify-items: center;
  gap: 20px;
  align-self: flex-start;

  &:nth-child(even) {
    align-self: flex-end;
  }
`,lw=d.div`
  height: 50px;
  width: 50px;
`,cw=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`,dw=d.p`
  font-size: 15px;
  text-align: center;
`,ir=({text:e,subtext:t,button:n,page:i})=>{const[s,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const p=await Re.get("/banners");l(p.data.data.data)}catch(p){console.error("Error fetching faq data:",p)}})()},[]),x.useEffect(()=>{bt.init({duration:2500})},[]);const u=s&&s.find(f=>f.section===i);return console.log("filteredBg",u),r.jsx(aA,{bgImage:u?u.image:g_,children:r.jsx("div",{className:"wrapper",children:r.jsxs(lA,{children:[r.jsx(TS,{align:"center",text:u!=null&&u.title?u.title:e}),u&&r.jsx(cA,{"data-aos":"zoom-in-up",children:u!=null&&u.description?u.description:t}),n&&r.jsxs(dA,{"data-aos":"fade-up",children:[r.jsx($c,{className:"top"}),r.jsx($c,{className:"right"}),r.jsx($r,{text:n}),r.jsx($c,{className:"bottom"}),r.jsx($c,{className:"left"})]})]})})})},aA=d.section`
  background: ${({bgImage:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`,lA=d.div`
  padding-top: 140px;
  display: grid;
  place-items: center;
`,cA=d.p`
  font-size: 15px;
  font-weight: 400;
  text-transform: capitalize;
  text-align: center;
  line-height: 1.5;
  padding: 30px 0;
`,dA=d.div`
  position: relative;
  display: inline-block;
  margin: 30px 0;
`,$c=d.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
`,uA=()=>{const[e,t]=x.useState(0),[n,i]=x.useState(!1),[s,l]=x.useState([]);x.useEffect(()=>{(async()=>{try{const h=await Re.get("/timelines",{params:{isNeedFull:!0}});l(h.data.data)}catch(h){console.error("Error fetching timeline data:",h)}})()},[]),x.useEffect(()=>{const p=setInterval(()=>{i(!0),setTimeout(()=>{t(h=>(h+1)%s.length),i(!1)},300)},4e3);return()=>clearInterval(p)},[s.length]);const u=()=>(e-1+s.length)%s.length,f=()=>(e+1)%s.length;return r.jsx(fA,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(pA,{children:[r.jsxs(hA,{children:[s.length>0&&r.jsxs(r.Fragment,{children:[r.jsxs(eh,{animate:n,className:"top",children:[r.jsx(th,{}),r.jsx("h2",{children:s[u()].year})]}),r.jsxs(eh,{animate:n,children:[r.jsx(th,{isActive:!0}),r.jsx("h2",{children:s[e].year})]}),r.jsxs(eh,{animate:n,className:"bottom",children:[r.jsx(th,{}),r.jsx("h2",{children:s[f()].year})]})]}),r.jsx(gA,{children:r.jsx("p",{style:{color:"#fff",position:"absolute",right:0},children:"timeline"})})]}),r.jsx(mA,{animate:n,children:s.length>0&&r.jsxs(r.Fragment,{children:[r.jsx("h3",{children:s[e].event}),r.jsx("p",{children:s[e].description})]})})]})})})},yk=Ve`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`,bk=Ve`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`,fA=d.div``,pA=d.div`
  position: relative;

  display: grid;
  grid-template-columns: 0.6fr 2fr;
  align-items: center;

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 230px;
  }
  @media screen and (max-width: 540px) {
    gap: 170px;
  }
`,hA=d.div`
  position: relative;
  left: -60%;
  top: 50%;
  transform: translateY(-50%);
  height: 600px;
  width: 600px;

  border-radius: 50%;
  border: 1px solid #6b6b6b;

  @media screen and (max-width: 1080px) {
    height: 100%;
    width: 100%;
    left: unset;
    top: unset;
    transform: unset;
  }
`,mA=d.div`
  color: #fff;
  color: #fff;
  opacity: ${({animate:e})=>e?0:1};
  animation: ${({animate:e})=>e?yk:bk} 0.3s ease forwards;
`,eh=d.div`
  position: absolute;
  top: 50%;
  right: -273px;
  transform: translateY(-50%);
  display: grid;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 1080px) {
    top: unset;
    left: 50%;
    transform: translateX(-50%);
    right: unset;
    display: block;
  }
  h2 {
    width: 167px;

    margin-left: 115px;
    color: #fff;
    font-size: 85px;
    opacity: ${({animate:e})=>e?0:1};
    animation: ${({animate:e})=>e?yk:bk} 0.3s ease
      forwards;

    @media screen and (max-width: 1080px) {
      width: unset;
      margin-left: 0;
      margin-top: 50px;
      font-size: 65px;
    }
    @media screen and (max-width: 540px) {
      font-size: 45px;
    }
    @media screen and (max-width: 420px) {
      font-size: 37px;
    }
  }
  &.top {
    top: 115px;
    right: -210px;
    @media screen and (max-width: 1080px) {
      top: unset;
      left: 20px;
      right: unset;
      transform: unset;
    }
    h2 {
      opacity: 0.5;
      font-size: 65px;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }
      @media screen and (max-width: 540px) {
        font-size: 25px;
      }
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
    }
  }
  &.bottom {
    top: unset;
    bottom: 40px;
    right: -225px;
    @media screen and (max-width: 1080px) {
      top: unset;
      left: unset;
      right: 20px;
      bottom: unset;
      transform: unset;
    }
    h2 {
      opacity: 0.5;
      font-size: 65px;
      @media screen and (max-width: 768px) {
        font-size: 45px;
      }
      @media screen and (max-width: 540px) {
        font-size: 25px;
      }
      @media screen and (max-width: 420px) {
        font-size: 20px;
      }
    }
  }
`,th=d.div`
  position: absolute;
  height: 20px;
  width: 20px;
  background-color: ${({isActive:e})=>e?"#ff0000":"#fff"};
  border-radius: 50%;

  @media screen and (max-width: 1080px) {
    left: 50%;
    transform: translateX(-50%);
    top: -10px;
  }
`,gA=d.div`
  position: absolute;
  right: 80px;
  top: 45%;
  transform: translateY(-50%);
  p {
    font-size: 40px;
    font-weight: 600;
  }
  @media screen and (max-width: 1080px) {
    display: none;
  }
`,xA=()=>{const[e,t]=x.useState(0),[n,i]=x.useState([]),[s,l]=x.useState(!1),u=f=>{t(f)};return x.useEffect(()=>{(async()=>{l(!0);try{const p=await Re.get("/teams",{params:{isNeedFull:!0}});i(p.data.data),l(!1)}catch(p){l(!1),console.error("Error fetching team data:",p)}})()},[]),r.jsx(vA,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(yA,{children:[r.jsxs(bA,{children:[r.jsx(uw,{className:"sub-head",children:"The Team"}),r.jsxs(SA,{children:[r.jsx(uw,{className:"rotate",children:"The Team"}),r.jsx(fw,{className:"top",children:"At Aetherbot.ai, our team is the heart of our success. Comprising diverse, skilled, and passionate professionals, we collaborate to deliver innovative solutions and exceptional results. Meet the core members who drive our vision forward."})]})]}),s?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:3}).map((f,p)=>r.jsx(dt,{width:150,height:100,borderRadius:10},p))}):n.length===0?r.jsx(wA,{children:"No data available"}):r.jsxs(r.Fragment,{children:[r.jsx(jA,{children:n&&n.map((f,p)=>r.jsxs(kA,{onClick:()=>u(p),className:e===p?"active":"",children:[r.jsx(CA,{className:e===p?"":"invert",children:r.jsx($A,{src:f.image,alt:f.name})}),e===p?r.jsxs(PA,{children:[r.jsxs(pw,{children:[f.name," - ",f.position]}),r.jsx(fw,{children:f.education})]}):r.jsx(pw,{className:"rotate",children:f.position})]},f.index))}),r.jsxs(EA,{children:[r.jsx("p",{className:"name",children:n[e].name}),r.jsx("p",{className:"role",children:n[e].position})]})]})]})})})},vA=d.section``,yA=d.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 20px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,bA=d.div``,wA=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,jA=d.div`
  justify-self: end;

  display: flex;
  gap: 10px;

  @media screen and (max-width: 980px) {
    justify-self: center;
  }
`,uw=d.h3`
  &.rotate {
    position: absolute;
    left: -85px;
    top: 36%;
    transform: translateY(-50%);
    transform: rotate(-90deg);
    font-size: 42px;
    font-weight: 400;
    color: ${y.grey_border};
    @media screen and (max-width: 980px) {
      top: 38%;
      left: -60px;

      font-size: 33px;
    }
  }
`,SA=d.div`
  position: relative;
  margin-top: 30px;
  &.photos {
    display: flex;
    gap: 10px;
  }
`,fw=d.p`
  &.top {
    padding-left: 40px;
  }
`,kA=d.div`
  position: relative;
  height: 300px;
  width: 150px;
  transition: width 0.3s linear;
  @media screen and (max-width: 980px) {
    width: 120px;
  }
  @media screen and (max-width: 540px) {
    width: 90px;
  }
  @media screen and (max-width: 420px) {
    width: 60px;
  }
  &.active {
    width: 300px;
    @media screen and (max-width: 980px) {
      width: 200px;
    }
    @media screen and (max-width: 540px) {
      width: 180px;
    }
    @media screen and (max-width: 420px) {
      width: 130px;
    }
  }
`,CA=d.div`
  height: 100%;
  width: 100%;
  &.invert {
    filter: grayscale(1);
  }
`,$A=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,PA=d.div`
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
  width: 90%;
  padding: 10px;

  background: rgba(76, 76, 76, 0.25);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  border: 1px solid rgba(255, 255, 255, 0.18);

  @media screen and (max-width: 430px) {
    display: none;
  }
`,pw=d.div`
  font-size: 22px;
  font-weight: 700;
  color: ${y.theme_red};
  text-transform: uppercase;

  &.rotate {
    font-size: 28px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    transform-origin: center;
    @media screen and (max-width: 430px) {
      display: none;
    }
  }
`,EA=d.div`
  display: none;

  @media screen and (max-width: 430px) {
    display: block;
    text-align: center;
  }
  p {
    &.name {
      font-size: 30px;
      font-weight: 600;
      color: ${y.theme_red};
    }
    &.role {
      font-size: 22px;
      font-weight: 500;
      color: ${y.white};
    }
  }
`,_A=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"",button:"Book A Demo",page:"whoweare"}),r.jsx(LM,{}),r.jsx(XM,{}),r.jsx(oA,{}),r.jsx(uA,{}),r.jsx(xA,{}),r.jsx(ms,{})]}),wk="/assets/generateBg-D1-1Nq7l.png",j0="data:image/svg+xml,%3csvg%20width='80'%20height='66'%20viewBox='0%200%2080%2066'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M74.3651%2065.1449C70.6852%2067.0061%2065.7786%2065.7653%2063.3253%2062.0427L56.5788%2053.3568H23.4595L16.713%2062.0427C13.6464%2066.3857%208.1265%2067.0061%203.83325%2063.904C0.766651%2061.4223%20-0.45999%2057.6997%200.15333%2054.5976L4.44657%2031.6418C5.67322%2024.1967%2012.4197%2018.6128%2019.7796%2018.6128H36.9526V9.30641C36.9526%204.34299%2040.6325%200%2045.539%200H64.552C66.3919%200%2067.6186%201.24085%2067.6186%203.10214C67.6186%204.96342%2066.3919%206.20427%2064.552%206.20427H46.1524C44.3124%206.20427%2043.0858%207.44513%2043.0858%208.68598V9.30641V18.6128H60.2587C67.6186%2018.6128%2074.3651%2024.1967%2075.5918%2031.6418L79.885%2054.5976C80.4983%2058.9406%2078.6584%2063.2836%2074.3651%2065.1449ZM30.8194%2034.1235C30.8194%2029.1601%2026.5261%2024.8171%2021.6195%2024.8171C16.713%2024.8171%2012.4197%2029.1601%2012.4197%2034.1235C12.4197%2039.0869%2016.713%2043.4299%2021.6195%2043.4299C26.5261%2043.4299%2030.8194%2039.0869%2030.8194%2034.1235ZM67.6186%2034.1235C67.6186%2032.2622%2066.3919%2031.0214%2064.552%2031.0214H61.4854V27.9192C61.4854%2026.0579%2060.2587%2024.8171%2058.4188%2024.8171C56.5788%2024.8171%2055.3522%2026.0579%2055.3522%2027.9192V31.0214H52.2856C50.4456%2031.0214%2049.219%2032.2622%2049.219%2034.1235C49.219%2035.9848%2050.4456%2037.2256%2052.2856%2037.2256H55.3522V40.3278C55.3522%2042.1891%2056.5788%2043.4299%2058.4188%2043.4299C60.2587%2043.4299%2061.4854%2042.1891%2061.4854%2040.3278V37.2256H64.552C66.3919%2037.2256%2067.6186%2035.9848%2067.6186%2034.1235Z'%20fill='white'/%3e%3c/svg%3e",S0="/assets/wi7-DHyXFKWE.svg",TA=()=>{const[e,t]=x.useState(!1),[n,i]=x.useState([]),[s,l]=x.useState(!1),[u,f]=x.useState(null);x.useEffect(()=>{bt.init({duration:3e3})},[]),x.useEffect(()=>{p(),h()},[]);const p=async()=>{l(!0);try{const g=await Re.get("/missions",{params:{isNeedFull:!0}});i(g.data.data),l(!1)}catch(g){console.error("Error fetching Mission data:",g),l(!1)}};console.log("mission",n);const h=async()=>{l(!0);try{const g=await Re.get("/industries",{params:{isNeedFull:!0}});f(g.data.data||[]),l(!1)}catch(g){l(!1),console.error("Error fetching Industry data:",g)}};return r.jsx(DA,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(OA,{children:[r.jsxs(hw,{className:"sub-head",children:[r.jsx("span",{children:"Our"})," Industries"]}),r.jsx(MA,{children:u&&u.map(g=>r.jsx(AA,{onMouseOver:()=>t(!t),children:r.jsxs(jk,{children:[r.jsxs(LA,{children:[r.jsx(RA,{children:r.jsx(NA,{src:g.image,alt:g.name})}),r.jsx(nh,{children:g.name})]}),r.jsxs(zA,{children:[r.jsx(IA,{children:g.name}),r.jsx(FA,{children:g.description}),r.jsxs(VA,{to:`/industry/${g.route}`,children:[r.jsx(mw,{}),r.jsx($r,{text:"Explore Industry"}),r.jsx(mw,{})]})]})]})}))})]}),r.jsxs(BA,{children:[r.jsxs(hw,{className:"sub-head","data-aos":"zoom-in-up",children:[r.jsx("span",{children:"Generate"})," Voice"]}),r.jsxs(HA,{children:[r.jsx(gw,{"data-aos":"fade-right",children:r.jsx(nh,{className:"box",children:"Generate voice using text- to-speech platforms."})}),r.jsx(gw,{"data-aos":"fade-left",children:r.jsx(nh,{className:"box",children:"clone voice of a real Person"})})]})]})]})})},DA=d.section``,OA=d.div``,hw=d.div`
  text-align: center;
  span {
    color: ${y.theme_red};
  }
`,MA=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 40px 0;
  gap: 20px;
  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,jk=d.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
`,AA=d.div`
  position: relative;
  perspective: 1000px; /* Enables 3D effect */
  height: 180px;
  &:hover ${jk} {
    transform: rotateY(180deg);
  }
`,LA=d.div`
  border: 1px solid ${y.grey_border};

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: ${y.background}; /* Add your preferred background color */

  display: grid;
  place-items: center;
  gap: 20px;
`,zA=d.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: grid;
  place-items: center;
  padding: 10px;
`,RA=d.div`
  height: 50px;
  width: 50px;
  align-self: end;
`,NA=d.img`
  height: 100%;
  width: 100%;
  /* background-color: ${y.background}; */
  /* filter: invert(100); */
`,nh=d.h4`
  font-size: 18px;
  font-weight: 500;
  align-self: start;
  text-transform: capitalize;
  text-align: center;
  &.box {
    font-size: 22px;
  }
`,IA=d.h3`
  font-size: 20px;
  color: ${y.theme_red};
  text-align: center;
  font-weight: 500;
`,FA=d.div`
  text-align: center;
  padding-top: 10px;
`,VA=d(ht)`
  padding: 20px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`,mw=d.div`
  border-top: 1px solid ${y.grey_border};
  width: 35px;
`,BA=d.div``,HA=d.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,gw=d.div`
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 40px 20px;
  background: url(${wk});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
`,WA="/assets/nextStep1-CljT4C6c.svg",UA="/assets/nextStep2-C0Tb249n.svg",qA="/assets/nextStep3-B8E1nWI6.svg",YA=()=>(x.useEffect(()=>{bt.init({duration:3e3})},[]),r.jsx(GA,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(KA,{children:[r.jsxs(QA,{className:"sub-head",children:[r.jsx("span",{children:"Next"})," Steps"]}),r.jsxs(ZA,{children:[r.jsxs(rh,{"data-aos":"fade-right",children:[r.jsx(oh,{children:r.jsx(ih,{src:WA,alt:"next steps"})}),r.jsx(sh,{children:"CUSTOMIZE THE PRODUCT INTEGRATED WITH DIGITAL HUMAN WITH OUR SDK"})]}),r.jsxs(rh,{className:"center","data-aos":"fade-up",children:[r.jsx(oh,{children:r.jsx(ih,{src:UA,alt:"next steps"})}),r.jsx(sh,{children:"DEPLOY OUR PRODUCT ENVIRONMENT AS A KIOSK, MOBILE APP, WEBSITE OR AS AR/VR"})]}),r.jsxs(rh,{"data-aos":"fade-left",children:[r.jsx(oh,{children:r.jsx(ih,{src:qA,alt:"next steps"})}),r.jsx(sh,{children:"CONTINUOUS CUSTOMER TECHNICAL SUPPORT "})]})]})]})})})),GA=d.section``,KA=d.div``,QA=d.div`
  text-align: center;
  span {
    color: ${y.theme_red};
  }
`,ZA=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 50px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,rh=d.div`
  width: 90%;
  display: grid;
  justify-items: center;
  gap: 20px;
  &.center {
    transform: scale(1.2);
    p {
      font-size: 14px;
    }
    @media screen and (max-width: 768px) {
      transform: scale(1);
      p {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    &:last-child {
      grid-column: span 2;
    }
  }
  @media screen and (max-width: 480px) {
    &:last-child {
      grid-column: unset;
    }
  }
`,oh=d.div`
  height: 50px;
  width: 50px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${y.theme_red};
`,ih=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,sh=d.p`
  text-align: center;
`,nl="/assets/upcoming1-KCgcmRk_.svg",XA="/assets/mobile-ChHudnHm.jpg",JA="/assets/kiosk-DdzNVvUd.jpg",eL="/assets/hologram-BOT25xrQ.jpg",tL=()=>{x.useEffect(()=>{bt.init({duration:3e3})},[]);const[e,t]=x.useState(0),[n,i]=x.useState([]),[s,l]=x.useState(!1),u=p=>{t(p)};x.useEffect(()=>{f()},[]);const f=async()=>{l(!0);try{const p=await Re.get("/products");i(p.data.data.data),l(!1)}catch(p){console.error("Error fetching Product data:",p),l(!1)}};return r.jsx(nL,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(rL,{children:[r.jsx(xw,{className:"sub-head",children:"Products We Integrate Digital Human With"}),n&&n.map((p,h)=>r.jsxs(oL,{onClick:()=>u(0),"data-aos":"fade-right",children:[r.jsx(iL,{className:e===0?"active":"",children:r.jsx(sL,{src:p.image,alt:"mobile"})}),r.jsx(Pc,{className:e===0?"active":"",children:p.title})]}))]}),r.jsxs("div",{style:{margin:"50px 0"},children:[r.jsx(xw,{className:"sub-head",children:"Upcoming Product Line"}),r.jsxs(aL,{children:[r.jsxs(ah,{children:[r.jsx(Pc,{className:"upcoming",children:"Digital human inference in Websites"}),r.jsx(lh,{children:r.jsx(ch,{src:nl,alt:"Upcoming"})})]}),r.jsxs(ah,{children:[r.jsx(Pc,{className:"upcoming",children:"Digital human powered shopify capsule"}),r.jsx(lh,{children:r.jsx(ch,{src:S0,alt:"Upcoming"})})]}),r.jsxs(ah,{children:[r.jsx(Pc,{className:"upcoming",children:"Interactive Game Plugin"}),r.jsx(lh,{children:r.jsx(ch,{src:j0,alt:"Upcoming"})})]})]})]})]})})},nL=d.section``,rL=d.div``,xw=d.div`
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }
`,oL=d.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`,Pc=d.h3`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 29px;
  width: 50%;
  margin: auto;
  color: ${y.white};
  &.active {
    color: ${y.theme_red};
  }
  &.upcoming {
    position: unset;
    transform: unset;
    font-size: 20px;
    font-weight: 300;
  }
`,iL=d.div`
  width: 100%;
  height: 180px;
  transition: height 0.4s linear;
  &.active {
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    height: 140px;
    &.active {
      height: 180px;
    }
  }
`,sL=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,aL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,ah=d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  &:hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 430px) {
    &:hover {
      transform: unset;
    }
  }
`,lh=d.div`
  height: 80px;
  width: 80px;
`,ch=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,k0=()=>{var p,h,g,b,v,j,C,k,_,E,N;const[e,t]=x.useState(1),[n,i]=x.useState([]),[s,l]=x.useState(!1);if(x.useEffect(()=>{bt.init({duration:3e3})},[]),x.useEffect(()=>{(async()=>{try{const B=await Re.get("/testimonials",{params:{isNeedFull:!0}});i(B.data.data)}catch(B){console.error("Error fetching testimonials data:",B)}})()},[]),x.useEffect(()=>{if(n.length===0)return;const V=setInterval(()=>{l(!0),setTimeout(()=>{t(B=>(B+1)%n.length),l(!1)},500)},3500);return()=>clearInterval(V)},[n.length]),n.length===0)return r.jsx(vw,{children:r.jsx("p",{style:{textAlign:"center"},children:"No Testimonials Available"})});const u=(e-1+n.length)%n.length,f=(e+1)%n.length;return r.jsx(vw,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(dL,{children:[r.jsxs(Ec,{children:[r.jsx(uL,{className:"sub-head","data-aos":"fade-right",children:"what our customers says"}),r.jsx(fL,{"data-aos":"fade-right","data-aos-duration":"1000",children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source"})]}),r.jsxs(_c,{children:[r.jsxs(dh,{"data-aos":"fade-left",children:[r.jsx(Ec,{className:"box",children:r.jsx(uh,{children:r.jsx(fh,{src:(p=n[u])==null?void 0:p.image,alt:n[u].name})})}),r.jsxs(_c,{className:"box",children:[r.jsx(ph,{children:(h=n[u])==null?void 0:h.name}),r.jsx(hh,{children:(g=n[u])==null?void 0:g.description})]})]}),r.jsxs(dh,{"data-aos":"fade-left","data-aos-duration":"2000",children:[r.jsx(Ec,{className:"box",children:r.jsx(uh,{children:r.jsx(fh,{src:(b=n[e])==null?void 0:b.image,alt:(v=n[e])==null?void 0:v.name})})}),r.jsxs(_c,{className:"box",children:[r.jsx(ph,{children:(j=n[e])==null?void 0:j.name}),r.jsx(hh,{children:(C=n[e])==null?void 0:C.description})]})]}),r.jsxs(dh,{"data-aos":"fade-left",children:[r.jsx(Ec,{className:"box",children:r.jsx(uh,{children:r.jsx(fh,{src:(k=n[f])==null?void 0:k.image,alt:(_=n[f])==null?void 0:_.name})})}),r.jsxs(_c,{className:"box",children:[r.jsx(ph,{children:(E=n[f])==null?void 0:E.name}),r.jsx(hh,{children:(N=n[f])==null?void 0:N.description})]})]})]})]})})})},lL=Ve`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-20px); }
`,cL=Ve`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`,vw=d.section`
  /* Add any additional styling */
`,dL=d.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  gap: 50px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,Ec=d.div``,uL=d.h3`
  width: 70%;
  text-transform: capitalize;
  padding: 20px 0;
`,fL=d.p``,_c=d.div`
  display: grid;
  justify-items: end;
  gap: 40px;
  @media screen and (max-width: 980px) {
    justify-items: center;
  }
  &.box {
    justify-items: start;
    gap: 5px;
  }
`,dh=d.div`
  padding: 10px 20px;
  border-left: 10px solid ${y.grey_border};
  background-color: ${y.white};
  display: grid;
  grid-template-columns: 0.2fr 2fr;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  /* opacity: ${({isFading:e})=>e?0:1};
  animation: ${({isFading:e})=>e?lL:cL} 0.3s ease; */
  width: 75%;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  &:nth-child(2) {
    margin-right: 50px;
    width: 80%;
    border-left: 10px solid ${y.theme_red};
    @media screen and (max-width: 980px) {
      margin: auto;
      width: 90%;
    }
  }
`,uh=d.div`
  height: 60px;
  width: 60px;
`,fh=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`,ph=d.h3`
  font-weight: 500;
  text-transform: capitalize;
  color: ${y.black};
`,hh=d.p`
  font-size: 14px;
  color: ${y.black};
`,Sk=({section:e,sub_section:t})=>{const n=x.useRef(null);var i={dots:!1,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1,initialSlide:0,arrows:!1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,initialSlide:2}},{breakpoint:540,settings:{slidesToShow:1,slidesToScroll:1}}]};const[s,l]=x.useState([]),[u,f]=x.useState(!1);return x.useEffect(()=>{(async()=>{f(!0);try{const h=await Re.get("/process",{params:{isNeedFull:!0,section:e,sub_section:t}});console.log(h.data.data),l(h.data.data),f(!1)}catch(h){f(!1),console.error("Error fetching process data:",h)}})()},[e,t]),console.log("process",s),s&&s.length===0?null:r.jsxs(pL,{children:[r.jsxs(hL,{className:"sub-head",children:["Our ",r.jsx("span",{children:"Process"})]}),u?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):s&&s.length===0?r.jsxs(xL,{children:[r.jsx(el,{}),r.jsx("p",{children:`No Data Availale - ${t||e}`})]}):r.jsx(r.Fragment,{children:s&&s.length<4?r.jsx(vL,{children:s.map((p,h)=>r.jsxs(bw,{children:[r.jsx(ww,{children:r.jsx(jw,{src:p.image})}),r.jsx(Sw,{children:p.title}),r.jsx(yw,{children:p.description})]},p._id))}):r.jsxs(mL,{className:"slider-container",children:[r.jsx(hs,{...i,ref:n,children:s&&s.map((p,h)=>r.jsxs(bw,{children:[r.jsx(ww,{children:r.jsx(jw,{src:p.image})}),r.jsx(Sw,{children:p.title}),r.jsx(yw,{children:p.description})]},p._id))}),r.jsxs(gL,{children:[r.jsx(kw,{onClick:()=>n.current.slickPrev(),children:r.jsx(mu,{})}),r.jsx(kw,{onClick:()=>n.current.slickNext(),children:r.jsx(gu,{})})]})]})})]})},pL=d.section``,hL=d.h3`
  margin-bottom: 30px;
  text-align: center;
  span {
    color: ${y.theme_red};
  }
`,yw=d.p`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 20px;
  @media screen and (max-width: 430px) {
    text-align: justify;
  }
`,mL=d.div`
  .slick-slide {
    padding: 0 10px; /* Add padding between slides */
  }

  .slick-list {
    margin: 0 -10px; /* Adjust the margin to keep the overall layout aligned */
  }
`,bw=d.div`
  display: inline-block;
  position: relative;
  margin-top: 90px;
  padding: 5px 30px;

  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  @media screen and (max-width: 430px) {
    padding: 5px 14px;
  }
`,ww=d.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  padding: 15px;
  background-color: ${y.theme_red};

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -50px;
`,jw=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`,Sw=d.h4`
  padding-top: 50px;
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 15px;
`,gL=d.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin: 30px 0;
  padding-right: 20px;
`,kw=d.div`
  border-radius: 50%;
  padding: 10px;
  border: 1px solid ${y.theme_red};

  display: grid;
  place-items: center;
  cursor: pointer;
  svg {
    font-size: 20px;
  }

  &:hover {
    background-color: ${y.theme_red};
  }
`,xL=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`,vL=d.div`
  width: 85%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`,yL=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"What We Do"}),r.jsx(TA,{}),r.jsx(Sk,{section:"whatwedo"}),r.jsx(YA,{}),r.jsx(tL,{}),r.jsx(tl,{section:"whatwedo"}),r.jsx(k0,{}),r.jsx(ms,{})]}),bL=()=>{x.useEffect(()=>{bt.init({duration:3e3})},[]);const[e,t]=x.useState(0),n=i=>{t(i)};return r.jsx(wL,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(jL,{children:[r.jsx(Cw,{className:"sub-head",children:"Products We Integrate Digital Human With"}),r.jsxs(mh,{onClick:()=>n(0),"data-aos":"fade-right",children:[r.jsx(gh,{className:e===0?"active":"",children:r.jsx(xh,{src:XA,alt:"mobile"})}),r.jsx(Ii,{className:e===0?"active":"",children:"Mobile App"})]}),r.jsxs(mh,{onClick:()=>n(1),"data-aos":"fade-left",children:[r.jsx(gh,{className:e===1?"active":"",children:r.jsx(xh,{src:JA,alt:"kiosk"})}),r.jsx(Ii,{className:e===1?"active":"",children:"Kiosk"})]}),r.jsxs(mh,{onClick:()=>n(2),"data-aos":"fade-right",children:[r.jsx(gh,{className:e===2?"active":"",children:r.jsx(xh,{src:eL,alt:"hologram"})}),r.jsx(Ii,{className:e===2?"active":"",children:"Hologram"})]})]}),r.jsxs("div",{style:{margin:"50px 0"},children:[r.jsx(Cw,{className:"sub-head",children:"Products We Integrate Digital Human With"}),r.jsxs(SL,{children:[r.jsxs(vh,{children:[r.jsx(Ii,{className:"upcoming",children:"Digital human inference in Websites"}),r.jsx(yh,{children:r.jsx(bh,{src:nl,alt:"Upcoming"})})]}),r.jsxs(vh,{children:[r.jsx(Ii,{className:"upcoming",children:"Digital human powered shopify capsule"}),r.jsx(yh,{children:r.jsx(bh,{src:S0,alt:"Upcoming"})})]}),r.jsxs(vh,{children:[r.jsx(Ii,{className:"upcoming",children:"Interactive Game Plugin"}),r.jsx(yh,{children:r.jsx(bh,{src:j0,alt:"Upcoming"})})]})]})]})]})})},wL=d.section``,jL=d.div``,Cw=d.div`
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }
`,mh=d.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`,Ii=d.h3`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 29px;
  width: 50%;
  margin: auto;
  color: ${y.white};
  &.active {
    color: ${y.theme_red};
  }
  &.upcoming {
    position: unset;
    transform: unset;
    font-size: 20px;
    font-weight: 300;
  }
`,gh=d.div`
  width: 100%;
  height: 180px;
  transition: height 0.4s linear;
  &.active {
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    height: 140px;
    &.active {
      height: 180px;
    }
  }
`,xh=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,SL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,vh=d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  &:hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 430px) {
    &:hover {
      transform: unset;
    }
  }
`,yh=d.div`
  height: 80px;
  width: 80px;
`,bh=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,kL="/assets/appearence1-DMWFEcvT.png",CL="/assets/appearenceAvatar1-JrqYtlcA.png",$L="/assets/appearenceAvatar2-3mCwVkLe.png",PL="/assets/appearenceAvatar3-DuOkAJzx.png",EL=()=>(x.useEffect(()=>{bt.init({duration:2e3})},[]),r.jsx(_L,{children:r.jsx(TL,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(DL,{children:[r.jsxs($w,{className:"sub-head",children:["Customise the ",r.jsx("span",{children:"Appearence"})]}),r.jsxs(OL,{children:[r.jsxs(wh,{className:"left","data-aos":"zoom-in",children:[r.jsx(jh,{children:"choose from our array of avatars"}),r.jsx(Sh,{children:r.jsx(kh,{src:CL})})]}),r.jsxs(wh,{className:"mid","data-aos":"zoom-in",children:[r.jsx(jh,{children:"choose from our array of avatars"}),r.jsx(Sh,{children:r.jsx(kh,{src:$L})})]}),r.jsxs(wh,{className:"right","data-aos":"zoom-in",children:[r.jsx(jh,{children:"choose from our array of avatars"}),r.jsx(Sh,{children:r.jsx(kh,{src:PL})})]})]})]}),r.jsxs(ML,{children:[r.jsxs($w,{className:"sub-head",children:["Generate ",r.jsx("span",{children:"Voice"})]}),r.jsxs(AL,{children:[r.jsx(Pw,{"data-aos":"fade-right",children:r.jsx(Ew,{className:"box",children:"Generate voice using text- to-speech platforms."})}),r.jsx(Pw,{"data-aos":"fade-left",children:r.jsx(Ew,{className:"box",children:"clone voice of a real Person"})})]})]})]})})})),_L=d.section`
  position: relative; /* Ensure pseudo-element and content are stacked properly */
  background: none; /* Remove background image from the main container */

  /* Add a pseudo-element for the background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://s3-alpha-sig.figma.com/img/cf7f/7b85/257a30bbcbc274d89a6eb796dca77273?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U8W07clYuk56HSeTssaq8GqgGxIyfq~jrIJiQPfY6NE1HbJ2HJYZ1em07IBLGAKn3m5aGDiE3Nde~kDNAY2LVb4wK3UQIATEXRGueRkTVMwTU5AIvhWZ-IGijzuEUeB0iW3RuB8InC0JPne-DgOB-odkYedWFjYTQR~C92nMMKC7QhtpfQ7urkJ9P7T-w0cH7EFU2yI8IBVvv-Fgmudzxp-URDpTi5-a3q-xYxgtydhzRiotxGSo3ADfR2IDMqK-3kWoAUD9Easey8aipI3-yDKxGKgyHTWZ7PnbrQwZq29vdJpqnBHmERHDfptPEtT1Tjdr3WfEzKd6nBSToxTgfQ__");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.3; /* Adjust the opacity to your preference */
    z-index: 1; /* Place it below the content */
  }

  /* Ensure child content is displayed above the pseudo-element */
  > * {
    position: relative;
    z-index: 2;
  }
`,TL=d.div``,$w=d.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }
`,DL=d.div``,OL=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,wh=d.div`
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  padding: 30px 20px;

  background: rgba(39, 39, 39, 0.083);

  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  &.mid {
    background: radial-gradient(
      circle,
      rgba(255, 42, 0, 0.5396752450980392) 0%,
      rgba(23, 23, 23, 0.7441570378151261) 73%
    );
  }
  /* &.left {
    background: url(${kL});
  }
  
 */
  &.right {
    @media screen and (max-width: 768px) {
      grid-column: span 2;
    }
    @media screen and (max-width: 480px) {
      grid-column: unset;
    }
  }
  /* background-position: center; */
  background-size: contain;
  background-repeat: no-repeat;

  display: grid;
  place-items: center;
  gap: 20px;
`,jh=d.p`
  align-self: end;
  width: 50%;
  text-align: center;
`,Sh=d.div`
  align-self: flex-start;

  height: 70px;
  width: 70px;
  border-radius: 50%;
`,kh=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
  border-radius: 50%;
`,ML=d.div``,AL=d.div`
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,Pw=d.div`
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 40px 20px;
  background: url(${wk});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
`,Ew=d.h4`
  font-size: 18px;
  font-weight: 500;
  align-self: start;
  text-transform: capitalize;
  text-align: center;
  &.box {
    font-size: 22px;
  }
`,LL="/assets/next1-dVnHehG_.svg",zL="/assets/next2-CkBpjZYA.svg",RL="/assets/next3-CAdeOiq4.svg",_w=[{image:LL,text:"Deploy Our Product Environment As A Kiosk Mobile App Website Or As Ar Vr"},{image:zL,text:"Continuous Customer Technical Support."},{image:RL,text:"Customize The Product Integrated With Digital Human With Our Sdk According To Your Industry."}],NL=()=>(x.useEffect(()=>{bt.init({duration:2e3})},[]),r.jsx(IL,{children:r.jsxs("div",{className:"wrapper",children:[r.jsx(FL,{className:"sub-head",children:"NEXT STEPS"}),r.jsx(VL,{children:_w&&_w.map(e=>r.jsxs(BL,{"data-aos":"fade-up",children:[r.jsx(HL,{children:r.jsx(WL,{src:e.image,alt:"Next Steps"})}),r.jsx(UL,{children:e.text})]}))})]})})),IL=d.section``,FL=d.h3`
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
`,VL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 90px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
  }

  @media screen and (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,BL=d.div`
  display: grid;
  gap: 20px;
  justify-items: center;
  &:nth-child(2) {
    transform: translateY(-40%);
    @media screen and (max-width: 768px) {
      transform: unset;
    }
  }
  &:last-child {
    @media screen and (max-width: 768px) {
      grid-column: span 2;
    }
    @media screen and (max-width: 420px) {
      grid-column: unset;
    }
  }
`,HL=d.div`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  background-color: ${y.white};
  padding: 15px;
  outline-offset: 5px;
  outline: 3px dashed ${y.theme_red};
`,WL=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  display: block;
`,UL=d.p`
  text-align: center;
`,jd="/assets/clock-B0smdMUc.svg",qL=()=>{const e=x.useRef(null),[t,n]=x.useState(!1);return x.useEffect(()=>{const i=new IntersectionObserver(([s])=>{s.isIntersecting&&(n(!0),i.disconnect())},{threshold:.5});return e.current&&i.observe(e.current),()=>i.disconnect()},[]),x.useEffect(()=>{bt.init({duration:3e3})},[]),r.jsx(YL,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(GL,{children:[r.jsxs(KL,{"data-aos":"fade-right",children:[r.jsxs(ez,{className:"sub-head",children:["impact metrics with power numbers"," "]}),r.jsx(tz,{children:"At Aetherbot.AI, our mission is to revolutionize the way industries operate by addressing their unique needs through our innovative Digital Human solutions. We specialize in delivering a cutting-edge workforce of digital humans that are not only highly efficient but also fully customizable to align perfectly with your business requirements. Whether you’re looking to enhance customer engagement, streamline operations, or elevate your brand presence, our Digital Humans are designed to seamlessly integrate into your workflows, offering unparalleled adaptability and performance tailored specifically to your goals."})]}),r.jsx(QL,{"data-aos":"fade-up",children:r.jsxs(nz,{ref:e,children:[r.jsx(Ch,{children:r.jsxs(Ph,{children:[r.jsxs("div",{children:[r.jsx($h,{src:vk,alt:"Avatar"}),r.jsxs("p",{children:[" ",t&&r.jsx(wd,{start:0,end:125,duration:4}),"B"]})]}),r.jsx("div",{children:r.jsx(Eh,{children:"Expected Revenue of Digital Humans by 2035"})})]})}),r.jsx(Ch,{children:r.jsxs(Ph,{children:[r.jsxs("div",{children:[r.jsx($h,{src:Jb,alt:"Avatar"}),r.jsxs("p",{children:[" ",t&&r.jsx(wd,{start:0,end:46,duration:4}),"%"]})]}),r.jsx("div",{children:r.jsx(Eh,{children:"Growth for AI to drive personalized adaptive UI"})})]})}),r.jsx(Ch,{children:r.jsxs(Ph,{children:[r.jsxs("div",{children:[r.jsx($h,{src:Jb,alt:"Avatar"}),r.jsxs("p",{children:[" ",t&&r.jsx(wd,{start:0,end:46,duration:4}),"%"]})]}),r.jsx("div",{children:r.jsx(Eh,{children:"Growth for AI to drive personalized adaptive UI"})})]})})]})}),r.jsx(ZL,{"data-aos":"fade-left",children:r.jsx(XL,{children:r.jsx(JL,{src:uk,alt:"Avatar"})})})]})})})},YL=d.section``,GL=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`,KL=d.div``,QL=d.div``,ZL=d.div`
  @media screen and (max-width: 980px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 640px) {
    grid-column: unset;
  }
`,XL=d.div`
  height: 400px;
`,JL=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,ez=d.h3`
  text-transform: capitalize;
  margin-bottom: 30px;
`;d.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${y.theme_red};
  display: block;
  margin-bottom: 1.5rem;
`;const tz=d.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${y.white};

  span {
    color: ${y.theme_red};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`,nz=d.div`
  display: grid;
  gap: 50px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`,Ch=d.div``,$h=d.img`
  width: 50px;
  height: 50px;

  object-fit: cover;
`,Ph=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: 0.1fr 1fr;
    gap: 30px;
  }
  h2 {
    font-size: 2rem;
    color: ${y.theme_red};
  }

  p,
  span {
    font-size: 22px;
    font-weight: 500;
    color: ${y.theme_red};
    text-transform: capitalize;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
  /* span {
    font-size: 12px;
    color: ${y.white};
    text-transform: capitalize;
  } */
`,Eh=d.span`
  font-size: 13px !important;
  color: ${y.white} !important;
  text-transform: capitalize;
  width: 50%;
  display: inline-block;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;d.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.theme_red};
`;const kk=({section:e,sub_section:t})=>{x.useEffect(()=>{bt.init({duration:2500})},[]);const[n,i]=x.useState([]),[s,l]=x.useState(!1);return x.useEffect(()=>{(async()=>{l(!0);try{const f=await Re.get("/problem-solutions",{params:{isNeedFull:!0,section:e,sub_section:t}});console.log(f.data.data),i(f.data.data),l(!1)}catch(f){l(!1),console.error("Error fetching casestudy data:",f)}})()},[t,e]),r.jsx(rz,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(oz,{children:[r.jsxs(iz,{className:"sub-head",children:[r.jsx("span",{children:"I"}),"ndustry ",r.jsx("span",{children:"C"}),"hallenges ",r.jsx("span",{})]}),r.jsx(sz,{children:"At Aetherbot.AI we aim to cater to your industry needs with our Digital Human. We provide a workforce of digital humans which can be easily customized for your business needs."}),n&&n.length===0?r.jsx(r.Fragment,{}):r.jsx(r.Fragment,{children:s?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):n&&n.length===0?r.jsxs(lz,{children:[r.jsx(el,{}),r.jsx("p",{children:`No Data Availale - ${t}`})]}):r.jsx(az,{children:n&&n.map((u,f)=>r.jsxs(cz,{"data-aos":"zoom-in-up",children:[r.jsx(Tw,{children:"Problem"}),r.jsxs(Dw,{children:[u.problem," "]}),r.jsx(dz,{children:r.jsx(uz,{src:u.image,alt:`Card ${f+1}`})}),r.jsx(Tw,{children:"Solution"}),r.jsxs(Dw,{children:[u.solution," "]})]},f))})})]})})})},rz=d.section``,oz=d.div`
  margin: 0 auto;
`,iz=d.h1`
  color: ${y.white};
  margin-bottom: 2rem;
  text-align: center;
  span {
    color: ${y.theme_red};
    font-weight: bold;
  }
`,sz=d.p`
  color: ${y.white};
  width: 60%;
  margin: auto;
  text-align: center;
  margin: 50px auto;

  @media (max-width: 640px) {
    width: 100%;
    text-align: justify;
  }
`,az=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,lz=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`,cz=d.div`
  background-color: ${y.background};
  border: 1px solid ${y.grey_border};
  width: 100%;
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px;
  transition: all 0.3s linear;
  &:hover {
    transform: translateY(-10px);
  }
  @media screen and(max-width: 768px) {
    &:hover {
      transform: unset;
    }
  }
`,dz=d.div`
  width: 50px;
  height: 50px;
`,uz=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,Tw=d.h3`
  font-size: 20px;
  font-weight: 500;
`,Dw=d.p`
  font-size: 14.5px;
`,xu=({section:e,sub_section:t})=>{const[n,i]=x.useState(null),[s,l]=x.useState([]),[u,f]=x.useState(!1),p=h=>{i(n===h?null:h)};return x.useEffect(()=>{(async()=>{f(!0);try{const g=await Re.get("/faqs",{params:{isNeedFull:!0,section:e,sub_section:t}});f(!1),l(g.data.data)}catch(g){f(!0),console.error("Error fetching testimonials data:",g)}})()},[e,t]),console.log("faq",s),s&&s.length===0?null:r.jsx(fz,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(pz,{children:[r.jsx("h2",{className:"sub-head",children:"Faq"}),r.jsx(mz,{children:u?r.jsx(r.Fragment,{children:r.jsx("div",{className:"loader",children:"Loading"})}):s.length===0?r.jsxs(hz,{children:[r.jsx(el,{}),r.jsx("p",{children:`No Data Availale - ${t||e}`})]}):s&&s.map(h=>r.jsxs("div",{className:"accordion-item",children:[r.jsxs(gz,{"aria-expanded":n===h._id,onClick:()=>p(h._id),children:[r.jsxs("span",{className:"accordion-title",children:[r.jsx("span",{className:"q",children:"Q : "}),h.question]}),r.jsx("span",{className:"icon","aria-hidden":"true"})]}),r.jsx(xz,{expanded:n===h._id,children:r.jsx("p",{children:h.answers})})]},h._id))})]})})})},fz=d.section``,pz=d.div`
  h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`,hz=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin: auto;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  @media (max-width: 640px) {
    margin: 0;
  }
`,mz=d.div`
  display: grid;
  gap: 20px;

  .accordion-item {
    border: 2px solid transparent;
    border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
    border-image-slice: 1;

    button[aria-expanded="true"] {
      border-bottom: 1px solid ${y.theme_red};
    }
  }
`,gz=d.button`
  position: relative;
  display: block;
  text-align: left;
  width: 100%;
  padding: 1em 0;
  color: ${y.white};
  font-size: 1.15rem;
  font-weight: 400;
  border: none;
  background: none;
  outline: none;

  /* &:hover,
  &:focus {
    cursor: pointer;
    color: ${y.theme_red};
  } */
  .q {
    font-family: "Quicksand";
    font-weight: 600;
    font-size: 18px;
    color: ${y.theme_red};
  }

  .accordion-title {
    padding: 20px;

    @media screen and (max-width: 430px) {
      display: inline-block;
      width: 320px;
    }
  }

  .icon {
    display: inline-block;
    position: absolute;
    top: 18px;
    right: 0;
    width: 22px;
    height: 22px;
    border: 1px solid;
    border-radius: 22px;
    margin: 0 20px;
    background-color: ${y.white};
    &::before {
      display: block;
      position: absolute;
      content: "";
      top: 9px;
      left: 5px;
      width: 10px;
      height: 2px;
      background: ${y.theme_red};
    }

    &::after {
      display: block;
      position: absolute;
      content: "";
      top: 5px;
      left: 9px;
      width: 2px;
      height: 10px;
      background: ${y.theme_red};
    }
  }

  &[aria-expanded="true"] {
    color: ${y.theme_red};

    .icon {
      &::after {
        width: 0;
      }
    }
  }
`,xz=d.div`
  opacity: ${({expanded:e})=>e?1:0};
  max-height: ${({expanded:e})=>e?"18em":"0"};
  overflow: scroll;
  transition: opacity 200ms linear, max-height 200ms linear;

  p {
    font-size: 1rem;
    font-weight: 300;
    padding: 20px;
    width: 95%;
    margin: 20px auto;
    background: ${y.white};
    color: ${y.black};
  }
`;d.section``;d.div`
  margin: 0 auto;
`;d.h1`
  color: ${y.white};
  margin-bottom: 2rem;
  text-align: center;
  span {
    color: ${y.theme_red};
    font-weight: bold;
  }
`;d.p`
  color: ${y.white};
  width: 60%;
  margin: auto;
  text-align: center;
  margin: 50px auto;
  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;

  @media (max-width: 980px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;d.div`
  background-color: ${y.background};
  border: 1px solid ${y.grey_border};
  width: 100%;
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px;
  transition: all 0.3s linear;
  &:hover {
    transform: translateY(-10px);
  }
`;d.div`
  width: 50px;
  height: 50px;
`;d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;d.h3`
  font-size: 20px;
  font-weight: 500;
`;d.p`
  font-size: 14.5px;
`;const vz=()=>r.jsx(yz,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(bz,{children:[r.jsxs(wz,{children:[r.jsx($z,{className:"sub-head",children:"How this use case helped this industry"}),r.jsx(Pz,{children:"At Aetherbot.AI, we are dedicated to addressing the unique requirements of your industry with our cutting-edge Digital Human solutions. Our innovative workforce of digital humans is designed to be highly adaptable and can be effortlessly customized to align with your specific business goals. Whether you’re looking to enhance customer experiences, streamline operations, or bring efficiency to your processes, our Digital Humans are tailored to meet your needs with precision and ease."})]}),r.jsx(jz,{children:r.jsxs(Ez,{children:[r.jsx(_h,{children:r.jsxs(Dh,{children:[r.jsx(Th,{src:jd,alt:"Avatar"}),r.jsxs("div",{children:[r.jsx("p",{children:"X Hours"}),r.jsx("span",{children:"saved"})]})]})}),r.jsx(_h,{children:r.jsxs(Dh,{children:[r.jsx(Th,{src:jd,alt:"Avatar"}),r.jsxs("div",{children:[r.jsx("p",{children:"X Hours"}),r.jsx("span",{children:"saved"})]})]})}),r.jsx(_h,{children:r.jsxs(Dh,{children:[r.jsx(Th,{src:jd,alt:"Avatar"}),r.jsxs("div",{children:[r.jsx("p",{children:"X Hours"}),r.jsx("span",{children:"saved"})]})]})})]})}),r.jsx(Sz,{children:r.jsx(kz,{children:r.jsx(Cz,{src:uk,alt:"Avatar"})})})]})})}),yz=d.section``,bz=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`,wz=d.div``,jz=d.div``,Sz=d.div`
  @media screen and (max-width: 980px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 640px) {
    grid-column: unset;
  }
`,kz=d.div`
  height: 400px;
`,Cz=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,$z=d.h3`
  text-transform: capitalize;
  margin-bottom: 30px;
`;d.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${y.theme_red};
  display: block;
  margin-bottom: 1.5rem;
`;const Pz=d.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${y.white};

  span {
    color: ${y.theme_red};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`,Ez=d.div`
  display: grid;
  gap: 50px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`,_h=d.div``,Th=d.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`,Dh=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    display: grid;
    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    color: ${y.theme_red};
  }

  p {
    font-size: 22px;
    font-weight: 500;
    color: ${y.white};
    text-transform: capitalize;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
  span {
    font-size: 12px;
    color: ${y.white};
    text-transform: capitalize;
  }
`;d.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.theme_red};
`;const _z=()=>r.jsxs(Tz,{children:[r.jsxs(Dz,{className:"sub-head",children:["Digital Human In ",r.jsx("span",{children:"Action"})]}),r.jsx(Oz,{})]}),Tz=d.section``,Dz=d.h1`
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }
`,Oz=d.div`
  background-image: url("https://s3-alpha-sig.figma.com/img/d1ef/03e5/7de7dabf0cadc752e79decab6da36635?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T7Q4dih-6Mpdz9P6ID4wEuYsR5bzt6yPHMQ9ngXADgUrEs4t8voB2NJPQx2~7UebPBfJVZueXjcvbnLj0z0mC49B7A7DpRnx8Wb-FBm9rVL-vJhsWm3XECZfe~~T0k1oQo0u0CBL~2G8G8ReGvakFVSWjum0Qu3lzVY0FZKAJUGXIKUBBjvP8fKGLmAajUa2hLSQdw-yvf2ctH8-TnIKFZgp~ZQVSZpXT0mjtUUhI9fjOwHM6o4jwUIAkhXPak0kawgQ2UpC-W5OptGbrk17KtsQuuLjks~jXW-z5YuTmHGR3LvHi9EbUAnLd-~x2U-RiQ5-Tp3W6Pz2mi2wdRCQIg__");
  background-size: cover;
  background-position: center;

  height: 400px;
  width: 100%;
`,Ck="/assets/feature2-BgUvpGNw.svg",Mz="/assets/clockWhite-JZK0U3S_.svg",Az=()=>r.jsx(Lz,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(zz,{children:[r.jsx(Rz,{className:"sub-head",children:"Products We Integrate Digital Human With"}),r.jsxs(Nz,{children:[r.jsxs(Oh,{children:[r.jsx(Mh,{children:r.jsx(Ah,{src:nl,alt:"Upcoming"})}),r.jsx(Lh,{className:"upcoming",children:"Digital human inference in Websites"})]}),r.jsxs(Oh,{children:[r.jsx(Mh,{children:r.jsx(Ah,{src:Ck,alt:"Upcoming"})}),r.jsx(Lh,{className:"upcoming",children:"Digital human powered shopify capsule"})]}),r.jsxs(Oh,{children:[r.jsx(Mh,{children:r.jsx(Ah,{src:Mz,alt:"Upcoming"})}),r.jsx(Lh,{className:"upcoming",children:"Interactive Game Plugin"})]})]})]})})}),Lz=d.section``,zz=d.div``,Rz=d.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }
`,Nz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,Oh=d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 30px;
  &:hover {
    transform: translateY(-50px);
  }

  @media screen and (max-width: 768px) {
    &:hover {
      transform: unset;
    }
  }
`,Mh=d.div`
  height: 80px;
  width: 80px;
  align-self: flex-end;
`,Ah=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,Lh=d.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`,Iz=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useEffect(()=>{s()},[]);const s=async()=>{i(!0);try{const l=await Re.get("/platformwhoweare");t(l.data.data),i(!1)}catch(l){i(!1),console.error("Error fetching Client data:",l)}};return console.log(e),r.jsx(Fz,{children:r.jsx("div",{className:"wrapper",children:e&&e.map((l,u)=>r.jsxs(Vz,{children:[r.jsxs(Bz,{children:[r.jsx(Yz,{className:"sub-head",children:l.title}),r.jsx(Gz,{children:l.description})]}),r.jsx(Hz,{children:r.jsx(Kz,{children:l.card&&l.card.map((f,p)=>r.jsx(Qz,{children:r.jsxs(Xz,{children:[r.jsx(Zz,{src:jd,alt:"Avatar"}),r.jsxs("div",{children:[r.jsxs("p",{children:[f.count," ",f.title]}),r.jsx("span",{children:"saved"})]})]})}))})}),r.jsx(Wz,{children:r.jsx(Uz,{children:r.jsx(qz,{src:l.image,alt:"Avatar"})})})]}))})})},Fz=d.section``,Vz=d.div`
  display: grid;
  grid-template-columns: 1.2fr 0.9fr 1fr;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 60px;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr;
    row-gap: 60px;
  }
`,Bz=d.div``,Hz=d.div``,Wz=d.div`
  @media screen and (max-width: 980px) {
    grid-column: span 2;
  }
  @media screen and (max-width: 640px) {
    grid-column: unset;
  }
`,Uz=d.div`
  height: 400px;
`,qz=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,Yz=d.h3`
  text-transform: capitalize;
  margin-bottom: 30px;
`;d.span`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${y.theme_red};
  display: block;
  margin-bottom: 1.5rem;
`;const Gz=d.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${y.white};

  span {
    color: ${y.theme_red};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`,Kz=d.div`
  display: grid;
  gap: 50px;

  @media screen and (max-width: 640px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`,Qz=d.div``,Zz=d.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`,Xz=d.div`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: 640px) {
    display: grid;
    grid-template-columns: 1fr;

    justify-content: center;
  }
  h2 {
    font-size: 2rem;
    color: ${y.theme_red};
  }

  p {
    font-size: 22px;
    font-weight: 500;
    color: ${y.white};
    text-transform: capitalize;
    @media screen and (max-width: 480px) {
      font-size: 15px;
    }
  }
  span {
    font-size: 12px;
    color: ${y.white};
    text-transform: capitalize;
  }
`;d.span`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.theme_red};
`;const Jz="/assets/sentimental-C4wxpIfS.svg",eR=()=>r.jsx(tR,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(nR,{children:[r.jsx(rR,{className:"sub-head",children:"Products We Integrate Digital Human With"}),r.jsxs(oR,{children:[r.jsxs(zh,{children:[r.jsx(Rh,{children:r.jsx(Nh,{src:nl,alt:"Upcoming"})}),r.jsx(Ih,{className:"upcoming",children:"NLP"})]}),r.jsxs(zh,{children:[r.jsx(Rh,{children:r.jsx(Nh,{src:Ck,alt:"Upcoming"})}),r.jsx(Ih,{className:"upcoming",children:"multilingual support"})]}),r.jsxs(zh,{children:[r.jsx(Rh,{children:r.jsx(Nh,{src:Jz,alt:"Upcoming"})}),r.jsx(Ih,{className:"upcoming",children:"sentimental analysis"})]})]})]})})}),tR=d.section``,nR=d.div``,rR=d.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }
`,oR=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,zh=d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 30px;
  &:hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 768px) {
    &:hover {
      transform: unset;
    }
  }
`,Rh=d.div`
  height: 80px;
  width: 80px;
  align-self: flex-end;
`,Nh=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,Ih=d.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;function iR(e){return Be({tag:"svg",attr:{version:"1.1",viewBox:"0 0 17 17"},child:[{tag:"g",attr:{},child:[]},{tag:"path",attr:{d:"M12.461 5.57l-0.309 2.93h-2.342v8.5h-3.518v-8.5h-1.753v-2.93h1.753v-1.764c0-2.383 0.991-3.806 3.808-3.806h2.341v2.93h-1.465c-1.093 0-1.166 0.413-1.166 1.176v1.464h2.651z"},child:[]}]})(e)}const sR=()=>r.jsx("div",{children:r.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14944126.196402093!2d34.438520016173534!3d23.87300693188734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15e7b33fe7952a41%3A0x5960504bc21ab69b!2sSaudi%20Arabia!5e0!3m2!1sen!2sin!4v1735705133968!5m2!1sen!2sin",width:"100%",height:"450",loading:"lazy"})});function $k(e){return Be({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"},child:[]}]})(e)}function aR(e){return Be({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"},child:[]}]})(e)}function lR(e){return Be({tag:"svg",attr:{version:"1.1",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"},child:[]}]})(e)}function cR(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 2H4c-1.103 0-2 .894-2 1.992v12.016C2 17.106 2.897 18 4 18h3v4l6.351-4H20c1.103 0 2-.894 2-1.992V3.992A1.998 1.998 0 0 0 20 2z"},child:[]}]})(e)}let dR={data:""},uR=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||dR,fR=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pR=/\/\*[^]*?\*\/|  +/g,Ow=/\n+/g,co=(e,t)=>{let n="",i="",s="";for(let l in e){let u=e[l];l[0]=="@"?l[1]=="i"?n=l+" "+u+";":i+=l[1]=="f"?co(u,l):l+"{"+co(u,l[1]=="k"?"":t)+"}":typeof u=="object"?i+=co(u,t?t.replace(/([^,])+/g,f=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,f):f?f+" "+p:p)):l):u!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=co.p?co.p(l,u):l+":"+u+";")}return n+(t&&s?t+"{"+s+"}":s)+i},vr={},Pk=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+Pk(e[n]);return t}return e},hR=(e,t,n,i,s)=>{let l=Pk(e),u=vr[l]||(vr[l]=(p=>{let h=0,g=11;for(;h<p.length;)g=101*g+p.charCodeAt(h++)>>>0;return"go"+g})(l));if(!vr[u]){let p=l!==e?e:(h=>{let g,b,v=[{}];for(;g=fR.exec(h.replace(pR,""));)g[4]?v.shift():g[3]?(b=g[3].replace(Ow," ").trim(),v.unshift(v[0][b]=v[0][b]||{})):v[0][g[1]]=g[2].replace(Ow," ").trim();return v[0]})(e);vr[u]=co(s?{["@keyframes "+u]:p}:p,n?"":"."+u)}let f=n&&vr.g?vr.g:null;return n&&(vr.g=vr[u]),((p,h,g,b)=>{b?h.data=h.data.replace(b,p):h.data.indexOf(p)===-1&&(h.data=g?p+h.data:h.data+p)})(vr[u],t,i,f),u},mR=(e,t,n)=>e.reduce((i,s,l)=>{let u=t[l];if(u&&u.call){let f=u(n),p=f&&f.props&&f.props.className||/^go/.test(f)&&f;u=p?"."+p:f&&typeof f=="object"?f.props?"":co(f,""):f===!1?"":f}return i+s+(u??"")},"");function vu(e){let t=this||{},n=e.call?e(t.p):e;return hR(n.unshift?n.raw?mR(n,[].slice.call(arguments,1),t.p):n.reduce((i,s)=>Object.assign(i,s&&s.call?s(t.p):s),{}):n,uR(t.target),t.g,t.o,t.k)}let Ek,ig,sg;vu.bind({g:1});let Pr=vu.bind({k:1});function gR(e,t,n,i){co.p=t,Ek=e,ig=n,sg=i}function go(e,t){let n=this||{};return function(){let i=arguments;function s(l,u){let f=Object.assign({},l),p=f.className||s.className;n.p=Object.assign({theme:ig&&ig()},f),n.o=/ *go\d+/.test(p),f.className=vu.apply(n,i)+(p?" "+p:"");let h=e;return e[0]&&(h=f.as||e,delete f.as),sg&&h[0]&&sg(f),Ek(h,f)}return s}}var xR=e=>typeof e=="function",Wd=(e,t)=>xR(e)?e(t):e,vR=(()=>{let e=0;return()=>(++e).toString()})(),_k=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),yR=20,Sd=new Map,bR=1e3,Mw=e=>{if(Sd.has(e))return;let t=setTimeout(()=>{Sd.delete(e),ni({type:4,toastId:e})},bR);Sd.set(e,t)},wR=e=>{let t=Sd.get(e);t&&clearTimeout(t)},ag=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,yR)};case 1:return t.toast.id&&wR(t.toast.id),{...e,toasts:e.toasts.map(l=>l.id===t.toast.id?{...l,...t.toast}:l)};case 2:let{toast:n}=t;return e.toasts.find(l=>l.id===n.id)?ag(e,{type:1,toast:n}):ag(e,{type:0,toast:n});case 3:let{toastId:i}=t;return i?Mw(i):e.toasts.forEach(l=>{Mw(l.id)}),{...e,toasts:e.toasts.map(l=>l.id===i||i===void 0?{...l,visible:!1}:l)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(l=>l.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(l=>({...l,pauseDuration:l.pauseDuration+s}))}}},kd=[],Cd={toasts:[],pausedAt:void 0},ni=e=>{Cd=ag(Cd,e),kd.forEach(t=>{t(Cd)})},jR={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},SR=(e={})=>{let[t,n]=x.useState(Cd);x.useEffect(()=>(kd.push(n),()=>{let s=kd.indexOf(n);s>-1&&kd.splice(s,1)}),[t]);let i=t.toasts.map(s=>{var l,u;return{...e,...e[s.type],...s,duration:s.duration||((l=e[s.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||jR[s.type],style:{...e.style,...(u=e[s.type])==null?void 0:u.style,...s.style}}});return{...t,toasts:i}},kR=(e,t="blank",n)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...n,id:(n==null?void 0:n.id)||vR()}),rl=e=>(t,n)=>{let i=kR(t,e,n);return ni({type:2,toast:i}),i.id},vn=(e,t)=>rl("blank")(e,t);vn.error=rl("error");vn.success=rl("success");vn.loading=rl("loading");vn.custom=rl("custom");vn.dismiss=e=>{ni({type:3,toastId:e})};vn.remove=e=>ni({type:4,toastId:e});vn.promise=(e,t,n)=>{let i=vn.loading(t.loading,{...n,...n==null?void 0:n.loading});return e.then(s=>(vn.success(Wd(t.success,s),{id:i,...n,...n==null?void 0:n.success}),s)).catch(s=>{vn.error(Wd(t.error,s),{id:i,...n,...n==null?void 0:n.error})}),e};var CR=(e,t)=>{ni({type:1,toast:{id:e,height:t}})},$R=()=>{ni({type:5,time:Date.now()})},PR=e=>{let{toasts:t,pausedAt:n}=SR(e);x.useEffect(()=>{if(n)return;let l=Date.now(),u=t.map(f=>{if(f.duration===1/0)return;let p=(f.duration||0)+f.pauseDuration-(l-f.createdAt);if(p<0){f.visible&&vn.dismiss(f.id);return}return setTimeout(()=>vn.dismiss(f.id),p)});return()=>{u.forEach(f=>f&&clearTimeout(f))}},[t,n]);let i=x.useCallback(()=>{n&&ni({type:6,time:Date.now()})},[n]),s=x.useCallback((l,u)=>{let{reverseOrder:f=!1,gutter:p=8,defaultPosition:h}=u||{},g=t.filter(j=>(j.position||h)===(l.position||h)&&j.height),b=g.findIndex(j=>j.id===l.id),v=g.filter((j,C)=>C<b&&j.visible).length;return g.filter(j=>j.visible).slice(...f?[v+1]:[0,v]).reduce((j,C)=>j+(C.height||0)+p,0)},[t]);return{toasts:t,handlers:{updateHeight:CR,startPause:$R,endPause:i,calculateOffset:s}}},ER=Pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_R=Pr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,TR=Pr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,DR=go("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ER} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_R} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${TR} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,OR=Pr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,MR=go("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${OR} 1s linear infinite;
`,AR=Pr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,LR=Pr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,zR=go("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${AR} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${LR} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,RR=go("div")`
  position: absolute;
`,NR=go("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,IR=Pr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,FR=go("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${IR} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,VR=({toast:e})=>{let{icon:t,type:n,iconTheme:i}=e;return t!==void 0?typeof t=="string"?x.createElement(FR,null,t):t:n==="blank"?null:x.createElement(NR,null,x.createElement(MR,{...i}),n!=="loading"&&x.createElement(RR,null,n==="error"?x.createElement(DR,{...i}):x.createElement(zR,{...i})))},BR=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,HR=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,WR="0%{opacity:0;} 100%{opacity:1;}",UR="0%{opacity:1;} 100%{opacity:0;}",qR=go("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,YR=go("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,GR=(e,t)=>{let n=e.includes("top")?1:-1,[i,s]=_k()?[WR,UR]:[BR(n),HR(n)];return{animation:t?`${Pr(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Pr(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},KR=x.memo(({toast:e,position:t,style:n,children:i})=>{let s=e.height?GR(e.position||t||"top-center",e.visible):{opacity:0},l=x.createElement(VR,{toast:e}),u=x.createElement(YR,{...e.ariaProps},Wd(e.message,e));return x.createElement(qR,{className:e.className,style:{...s,...n,...e.style}},typeof i=="function"?i({icon:l,message:u}):x.createElement(x.Fragment,null,l,u))});gR(x.createElement);var QR=({id:e,className:t,style:n,onHeightUpdate:i,children:s})=>{let l=x.useCallback(u=>{if(u){let f=()=>{let p=u.getBoundingClientRect().height;i(e,p)};f(),new MutationObserver(f).observe(u,{subtree:!0,childList:!0,characterData:!0})}},[e,i]);return x.createElement("div",{ref:l,className:t,style:n},s)},ZR=(e,t)=>{let n=e.includes("top"),i=n?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(n?1:-1)}px)`,...i,...s}},XR=vu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Tc=16,JR=({reverseOrder:e,position:t="top-center",toastOptions:n,gutter:i,children:s,containerStyle:l,containerClassName:u})=>{let{toasts:f,handlers:p}=PR(n);return x.createElement("div",{style:{position:"fixed",zIndex:9999,top:Tc,left:Tc,right:Tc,bottom:Tc,pointerEvents:"none",...l},className:u,onMouseEnter:p.startPause,onMouseLeave:p.endPause},f.map(h=>{let g=h.position||t,b=p.calculateOffset(h,{reverseOrder:e,gutter:i,defaultPosition:t}),v=ZR(g,b);return x.createElement(QR,{id:h.id,key:h.id,onHeightUpdate:p.updateHeight,className:h.visible?XR:"",style:v},h.type==="custom"?Wd(h.message,h):s?s(h):x.createElement(KR,{toast:h,position:g}))}))},Tk=vn;const Ee=e=>{Tk.success(e,{duration:4e3,style:{background:"#27ab99",color:"#fff"}})},le=e=>{Tk.error(e,{duration:6e3,style:{background:"#f44336",color:"#fff"}})},eN=()=>r.jsx(JR,{position:"top-center"}),tN=()=>{x.useEffect(()=>{bt.init({duration:1800})},[]);const[e,t]=x.useState({name:"",email:"",mobile:"",company:"",message:""}),[n,i]=x.useState(!1),[s,l]=x.useState(null),[u,f]=x.useState(null),[p,h]=x.useState([]),[g,b]=x.useState(!1);x.useEffect(()=>{v()},[]);const v=async()=>{b(!0);try{const k=await Re.get("/contact-section");b(!1),h(k.data.data.contactSection)}catch(k){b(!1),console.error("Error fetching ContactSection data:",k)}},j=k=>{const{name:_,value:E}=k.target,N=/^[0-9]+$/;if(_==="mobile"){if(!N.test(E)){l("Invalid phone number. Only digits are allowed.");return}if(E.length>15){l("Phone number cannot exceed 15 digits.");return}}l(""),t({...e,[_]:E})},C=async k=>{k.preventDefault();try{i(!0);const _=await Re.post("/contact",e);_.status===200&&(i(!1),f(_.data.message),t({name:"",email:"",mobile:"",company:"",message:""}))}catch(_){i(!1),f(_)}};return x.useEffect(()=>{s&&setTimeout(()=>{le(s),l(null)},3e3),u&&setTimeout(()=>{Ee(u),f(null)},3e3)},[s,u]),r.jsxs(nN,{children:[r.jsx(Aw,{className:"sub-head",children:"Get In Touch"}),r.jsxs("div",{className:"wrapper",children:[r.jsxs(rN,{children:[r.jsxs(oN,{children:[r.jsx(Aw,{className:"sub-head form",children:"Send A Message"}),r.jsx(sN,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),r.jsxs(aN,{onSubmit:C,children:[r.jsx(Dc,{type:"text",name:"name",value:e.name,onChange:j,placeholder:"Name","data-aos":"zoom-in-up",required:!0}),r.jsx(Dc,{type:"email",name:"email",value:e.email,onChange:j,placeholder:"Email Address","data-aos":"zoom-in-up",required:!0}),r.jsx(Dc,{type:"text",name:"mobile",value:e.mobile,onChange:j,placeholder:"Phone","data-aos":"zoom-in-up",required:!0}),r.jsx(Dc,{type:"text",name:"company",value:e.company,onChange:j,placeholder:"Company","data-aos":"zoom-in-up",required:!0}),r.jsx(lN,{rows:10,name:"message",value:e.message,onChange:j,placeholder:"Message","data-aos":"zoom-in-up",required:!0}),r.jsx(Lw,{"data-aos":"fade-right",children:n?r.jsx("p",{children:"Loading"}):r.jsxs(zw,{children:[r.jsx(eo,{className:"top"}),r.jsx(eo,{className:"right"}),r.jsx($r,{text:"Send Message"}),r.jsx(eo,{className:"bottom"}),r.jsx(eo,{className:"left"})]})})]}),r.jsx("p",{children:u}),r.jsx("p",{children:s})]}),r.jsx(iN,{children:r.jsx(cN,{children:g?r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"Loading..."})}):p.length>0?p.map(k=>r.jsxs(dN,{"data-aos":"fade-left","data-aos-duration":"2000",children:[r.jsx(uN,{children:k.title}),r.jsx(fN,{children:k.description})," ",r.jsx(pN,{children:k.options.map((_,E)=>r.jsxs(hN,{children:[r.jsx("div",{children:k.title==="Call Us"?r.jsx(aR,{}):k.title==="Visit Us"?r.jsx(lR,{}):r.jsx(cR,{})}),r.jsx("p",{children:_.title})]}))})]})):r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"No data available"})})})})]}),r.jsx(mN,{children:r.jsx(sR,{})}),r.jsxs(Lw,{className:"bottom",children:[r.jsxs(zw,{children:[r.jsx(eo,{className:"top"}),r.jsx(eo,{className:"right"}),r.jsx($r,{text:"Ready To Get Started"}),r.jsx(eo,{className:"bottom"}),r.jsx(eo,{className:"left"})]})," "]})]})]})},nN=d.section``,Aw=d.h2`
  text-align: center;
  padding: 60px 0;
  &.form {
    font-size: 25px;
    text-align: left;
    padding: 0 0 30px 0;

    @media screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
`,rN=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`,oN=d.div`
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`,iN=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 1px solid ${y.grey_border};
  padding-left: 30px;

  @media screen and (max-width: 980px) {
    border-left: none;
    padding-left: unset;
  }
`,sN=d.p`
  font-size: 1rem;
  margin-bottom: 30px;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`,aN=d.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent !important; /* Or any desired color */
    -webkit-box-shadow: 0 0 0px 1000px #121212 inset !important; /* Ensure consistent color */
    color: #fff !important;
    caret-color: #fff !important; /* Matches the caret color to the input's text color */
  }

  input:-webkit-autofill::first-line,
  textarea:-webkit-autofill::first-line {
    color: ${y.white} !important; /* Ensures the text color matches */
  }
`;d.div``;const Dc=d.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${y.grey_border};

  outline: none;
  font-size: 15px;
  background: transparent;
  width: 100%;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: ${y.placeholder_text};
  }
`,lN=d.textarea`
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${y.grey_border};
  font-size: 15px;
  background: transparent;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: ${y.placeholder_text};
  }
`,Lw=d.div`
  padding-bottom: 45px;
  margin-top: 20px;
  display: flex;
  justify-content: end;
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
    justify-content: center;
  }

  &.bottom {
    justify-content: center;
    margin-top: 30px;
  }
`,zw=d.div`
  position: relative;
  display: inline-block;
`,eo=d.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
`,cN=d.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,dN=d.div`
  background-color: ${y.grey_background};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`,uN=d.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${y.white};
  text-align: left;
`,fN=d.p``,pN=d.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  gap: 30px;
`,hN=d.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
  text-transform: capitalize;
  div {
    background-color: #ff2a001e;
    padding: 15px;
    border-radius: 50%;

    display: grid;
    place-items: center;

    @media screen and (max-width: 540px) {
      height: 60px;
      width: 60px;
    }
  }
  svg {
    font-size: 25px;
    color: ${y.theme_red};
  }

  @media screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
  }
`,mN=d.div`
  margin-top: 50px;
`,gN=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"Let’s Connect and <br/> Transform Your Business",subtext:"We’re here to help you explore the future of digital interaction"}),r.jsx(tN,{})]}),Ct=({initialPage:e,totalPages:t,getData:n})=>{const[i,s]=x.useState(e);x.useEffect(()=>{typeof n=="function"&&n(i)},[i,n]);const l=()=>{i>1&&s(h=>h-1)},u=()=>{i<t&&s(h=>h+1)},f=h=>{s(h)},p=()=>{const h=[];if(t<=4)for(let g=1;g<=t;g++)h.push(r.jsx(Oc,{active:g===i,onClick:()=>f(g),children:g},g));else{h.push(r.jsx(Oc,{active:i===1,onClick:()=>f(1),children:"1"},1)),i>4&&h.push(r.jsx(Nw,{children:"..."},"start"));const g=Math.max(2,i-2),b=Math.min(t-1,i+2);for(let v=g;v<=b;v++)h.push(r.jsx(Oc,{active:v===i,onClick:()=>f(v),children:v},v));i<t-3&&h.push(r.jsx(Nw,{children:"..."},"end")),h.push(r.jsx(Oc,{active:t===i,onClick:()=>f(t),children:t},t))}return h};return t>1&&r.jsxs(xN,{children:[r.jsx(Rw,{onClick:l,disabled:i===1,children:"<"}),p(),r.jsx(Rw,{onClick:u,disabled:i===t,children:">"})]})},xN=d.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`,Rw=d.button`
  background-color: ${y.primary_header};
  color: ${y.off_white};
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primary_header_hover};
  }

  &:disabled {
    background-color: ${y.disabled};
    cursor: not-allowed;
  }
`,Oc=d.button`
  background-color: ${({active:e})=>e?y.primary_header:y.off_white};
  color: ${({active:e})=>e?y.off_white:y.primary_header};
  border: 1px solid ${y.primary_header};
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({active:e})=>e?y.primary_header_hover:y.primary_header_light};
    color: ${y.off_white};
  }
`,Nw=d.span`
  color: ${y.primary_header};
  font-size: 1rem;
  padding: 0 5px;
  cursor: default;
`,vN=()=>{x.useEffect(()=>{bt.init({duration:2e3})},[]);const e=Ke(),[t,n]=x.useState([]),[i,s]=x.useState(1),[l,u]=x.useState(6),[f,p]=x.useState(!1),[h,g]=x.useState(null),[b,v]=x.useState(null),[j,C]=x.useState(""),[k,_]=x.useState([]),E=async()=>{p(!0);try{const A=await Re.get("/categories");_(A.data.data),p(!1)}catch(A){p(!1),console.error("Error fetching faq data:",A)}};x.useEffect(()=>{E()},[]),x.useEffect(()=>{N()},[i,j]);const N=async A=>{p(!0);try{const R=await Re.get(`/blogs/?page=${i}&limit=${l}`,{params:{category:A,searchTerm:j}});n(R.data.data.blogs),p(!1),g(R.data.data.totalPages)}catch(R){console.error("Error fetching Blog data:",R),p(!1)}},V=A=>{e(`/blog-detail/${A}`)};function B(A,R=18){const T=A.split(" ");return T.length>R?T.slice(0,R).join(" ")+"...":A}const M=A=>{v(A),console.log("Selected category:",A),N(A)},F=A=>{A.preventDefault(),console.log("Search term:",A.target.value),C(A.target.value)};return r.jsx(bN,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(wN,{children:[r.jsxs(jN,{children:[r.jsxs(SN,{children:[r.jsx("input",{type:"text",placeholder:"Search Title...",onChange:F}),r.jsx("button",{children:r.jsx(PM,{})})]}),r.jsxs(Iw,{"data-aos":"fade-up",children:[r.jsx("h3",{children:"Categories"}),r.jsx(kN,{children:k&&k.map((A,R)=>r.jsx("li",{className:b===A.title?"selected":"",onClick:()=>M(A.title),children:A.title},R))})]}),r.jsxs(Iw,{"data-aos":"fade-up",children:[r.jsx("h3",{children:"Top Posts"}),r.jsx(CN,{children:t&&t.slice(.5).map((A,R)=>r.jsx("ul",{children:r.jsxs("li",{onClick:()=>V(A._id),children:[r.jsx("span",{children:R+1}),A.title,r.jsx("p",{children:A.createdAt?new Date(A.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"}):"November 20, 2024"})]})}))})]})]}),r.jsxs($N,{children:[f?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((A,R)=>r.jsx(dt,{width:350,height:300,borderRadius:10},R))}):t.length===0?r.jsx(PN,{children:"No data available"}):r.jsx(EN,{children:t&&t.map((A,R)=>r.jsxs(_N,{onClick:()=>V(A._id),children:[r.jsx("img",{src:`${A.image}`,alt:"Post"}),r.jsxs("div",{className:"content",children:[r.jsxs("span",{children:[A.author?A.author:"AI in Healthcare ","-"," ",A.createdAt?new Date(A.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"}):"November 20, 2024"]}),r.jsx("h4",{children:A.title}),r.jsx("p",{children:A.content?B(A.content):B("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, molestiae.")})]})]},R))}),r.jsx(Ct,{initialPage:i,totalPages:h,getData:s})]})]})})})},yN=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const bN=d.section``,wN=d.div`
  display: grid;
  grid-template-columns: 0.8fr 2.5fr;
  gap: 50px;

  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`,jN=d.div``,SN=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;
  background-color: ${y.white};
  padding: 10px 16px;
  margin-bottom: 2rem;

  input {
    background: transparent;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      justify-self: end;
      color: ${y.grey_border};
    }
  }
  button {
    justify-self: end;
  }
  svg {
    font-size: 20px;
    color: ${y.grey_border};
  }
`,Iw=d.div`
  margin-bottom: 2rem;
  border: 1.5px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 1rem;
  background: ${y.grey_background};

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #fff;
  }
`,kN=d.ul`
  list-style: none;
  padding: 4px;

  li {
    margin: 15px 0;
    cursor: pointer;
    padding-bottom: 12px;
    border-bottom: 1px solid ${y.grey_border};
    font-weight: 300;
    color: ${y.white};
    &:hover {
      color: ${y.theme_red};
    }
    &.selected {
      color: ${y.theme_red};
    }
  }

  @media screen and (max-width: 480px) {
    li {
      font-size: 15px;
    }
  }
`,CN=d.div`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 15px 0;
      padding-bottom: 12px;
      display: grid;
      grid-template-columns: 0.1fr 2fr;
      align-items: center;
      gap: 10px;
      text-transform: capitalize;
      font-size: 15px;
      /* align-items: center; */

      span {
        color: #ff4500;
        font-size: 22px;
      }
    }
    p {
      font-size: 12px;
      color: ${y.grey_border};
      grid-column: span 2;
    }
  }
`,$N=d.div`
  flex: 1;
`,PN=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,EN=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,_N=d.div`
  background-color: ${y.white};
  overflow: hidden;
  color: ${y.black};
  cursor: pointer;
  animation: ${yN} 0.5s ease-out both;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-bottom: 5px;
  }

  .content {
    padding: 0 1rem;

    h4 {
      font-size: 1rem;
      font-weight: 500;
      padding: 10px 0;
    }

    p {
      font-size: 14px;
      color: ${y.black};
      padding-bottom: 20px;
    }

    span {
      display: block;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      color: ${y.grey_border};
    }
  }
`,TN=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"Blogs / News",subtext:"We’re here to help you explore the future of digital interaction"}),r.jsx(vN,{})]}),DN=()=>{const{id:e}=Wa(),[t,n]=x.useState(null),[i,s]=x.useState([]),[l,u]=x.useState(0),f=x.useRef(null);x.useState(0);const p=Ke(),[h,g]=x.useState(null);x.useEffect(()=>{const k=async()=>{try{const E=await Re.get(`/blog/${e}`);n(E.data.data)}catch(E){console.error("Error fetching blog data:",E)}},_=async()=>{try{const E=await Re.get("/blogs");s(E.data.data.blogs)}catch(E){console.error("Error fetching blog data:",E)}};k(),_()},[e,h]),x.useEffect(()=>{const k=()=>{const _=window.scrollY,E=document.documentElement.scrollHeight-window.innerHeight,N=_/E*100;return u(N),window.addEventListener("scroll",k),()=>{window.removeEventListener("scroll",k)}};return window.addEventListener("scroll",k),()=>{window.removeEventListener("scroll",k)}},[]);function b(k,_=12){if(typeof k!="string")return"";const E=k.split(" ");return E.length>_?E.slice(0,_).join(" ")+"...":k}const v=k=>{g(k),p(`/blog-detail/${k}`)};function j(k){const _=new Date(k),E=String(_.getDate()).padStart(2,"0"),N=String(_.getMonth()+1).padStart(2,"0"),V=_.getFullYear();return`${E}.${N}.${V}`}const C=()=>{navigator.share?navigator.share({title:"Share this page",url:window.location.href}).then(()=>console.log("Shared successfully!")).catch(k=>console.log("Error sharing:",k)):console.log("Sharing is not supported in this browser")};return r.jsxs(MN,{children:[r.jsx(ON,{progress:l}),r.jsx("div",{className:"wrapper",children:r.jsxs(AN,{children:[r.jsx(LN,{ref:f,children:r.jsxs(zN,{children:[r.jsx(NN,{children:r.jsx(IN,{src:`${t==null?void 0:t.image}`,alt:"Blog Detail"})}),r.jsxs(RN,{children:[r.jsx(FN,{className:"sub-head",children:t==null?void 0:t.title}),r.jsx(VN,{children:t==null?void 0:t.content}),r.jsxs(WN,{children:[r.jsx($k,{onClick:C}),r.jsx("span",{children:"1M Read"}),r.jsx(Fw,{className:"end",children:j(t==null?void 0:t.createdAt)})]})]})]})}),r.jsx(BN,{children:i?i.length>0?i.filter(k=>k._id!==e).map((k,_)=>r.jsxs(HN,{children:[r.jsx("img",{src:`${k.image}`,alt:"Post"}),r.jsxs("div",{className:"content",children:[r.jsx("h4",{children:k==null?void 0:k.title}),r.jsx("p",{children:b(k==null?void 0:k.content)}),r.jsxs(UN,{children:[r.jsx(qN,{onClick:()=>v(k._id),children:"READ MORE"}),r.jsx(Fw,{children:j(k.createdAt)})]})]})]},_)):r.jsx("p",{children:"No blogs available."}):r.jsx("p",{children:"Loading..."})})]})})]})},ON=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`,MN=d.section``,AN=d.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;

  @media (max-width: 980px) {
    grid-template-columns: 1fr; /* Stack columns on smaller screens */
  }
`,LN=d.div`
  position: relative;
`;d.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;d.div`
  position: absolute;
  z-index: 2;
  right: 0;
`;const zN=d.div`
  background-color: ${y.white};
  max-height: 680px;
  overflow: scroll;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`,RN=d.div`
  padding: 2rem;
`,NN=d.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`,IN=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,FN=d.h2`
  color: ${y.black};
  font-size: 30px;
`,VN=d.p`
  font-size: 1rem;
  color: ${y.black};
  margin-top: 1rem;
`,BN=d.div`
  height: 680px;

  @media (max-width: 980px) {
    display: flex;
    height: unset;
    max-width: 840px;
    overflow-x: scroll;
  }
`,HN=d.div`
  background-color: ${y.white};
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 100px; /* Adjust height for smaller screens */
    }
  }

  .content {
    padding: 1rem;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: ${y.black};
    }

    p {
      font-size: 0.9rem;
      color: ${y.black};
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #ff4500;
    }
  }

  @media (max-width: 980px) {
    min-width: max-content;
    margin-right: 20px;
  }
  @media (max-width: 540px) {
    min-width: 300px;
    margin-right: 20px;
  }
`,WN=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  span {
    color: ${y.black};
    font-weight: 300;
    font-size: 15px;
  }
  svg {
    cursor: pointer;
    color: ${y.black};
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.3);
    }
  }
`,UN=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`,Fw=d.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${y.black};
  &.end {
    border-left: 1px solid ${y.grey_border};
    padding-left: 15px;
  }
`,qN=d.button`
  text-transform: uppercase;
  font-weight: 300;
`,YN=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"Blog / News",subtext:"We’re here to help you explore the future of digital interaction"}),r.jsx(DN,{})]}),GN=()=>{x.useEffect(()=>{bt.init({duration:3e3})},[]);const[e,t]=x.useState(0),[n,i]=x.useState([]),[s,l]=x.useState(!1),u=p=>{t(p)};x.useEffect(()=>{f()},[]);const f=async()=>{l(!0);try{const p=await Re.get("/products");i(p.data.data.data),l(!1)}catch(p){console.error("Error fetching Product data:",p),l(!1)}};return r.jsx(KN,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(QN,{children:[r.jsx(Vw,{className:"sub-head",children:"Platform Options"}),n&&n.map((p,h)=>r.jsxs(ZN,{onClick:()=>u(0),"data-aos":"fade-right",children:[r.jsx(XN,{className:e===0?"active":"",children:r.jsx(JN,{src:p.image,alt:"mobile"})}),r.jsx(Mc,{className:e===0?"active":"",children:p.title})]}))]}),r.jsxs("div",{style:{margin:"50px 0"},children:[r.jsx(Vw,{className:"sub-head",children:"Products We Integrate Digital Human With"}),r.jsxs(eI,{children:[r.jsxs(Fh,{children:[r.jsx(Mc,{className:"upcoming",children:"Multilingual Support"}),r.jsx(Vh,{children:r.jsx(Bh,{src:nl,alt:"Upcoming"})})]}),r.jsxs(Fh,{children:[r.jsx(Mc,{className:"upcoming",children:"Customization"}),r.jsx(Vh,{children:r.jsx(Bh,{src:S0,alt:"Upcoming"})})]}),r.jsxs(Fh,{children:[r.jsx(Mc,{className:"upcoming",children:"Interactive Game Plugin"}),r.jsx(Vh,{children:r.jsx(Bh,{src:j0,alt:"Upcoming"})})]})]})]})]})})},KN=d.section``,QN=d.div``,Vw=d.div`
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }

  @media screen and (max-width: 430px) {
    font-size: 30px;
  }
`,ZN=d.div`
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`,Mc=d.h3`
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 29px;
  width: 50%;
  margin: auto;
  color: ${y.white};
  &.active {
    color: ${y.theme_red};
  }
  &.upcoming {
    position: unset;
    transform: unset;
    font-size: 20px;
    font-weight: 300;
  }
`,XN=d.div`
  width: 100%;
  height: 180px;
  transition: height 0.4s linear;
  &.active {
    height: 300px;
  }

  @media screen and (max-width: 640px) {
    height: 140px;
    &.active {
      height: 180px;
    }
  }
`,JN=d.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  display: block;
`,eI=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`,Fh=d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  &:hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 430px) {
    &:hover {
      transform: unset;
    }
  }
`,Vh=d.div`
  height: 80px;
  width: 80px;
`,Bh=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;d.section``;d.div``;d.div`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 40px;
  span {
    color: ${y.theme_red};
  }
`;d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 80%;
  margin: 80px auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
  }
`;d.div`
  display: grid;
  justify-items: center;
  gap: 20px;
  min-height: 300px;
  transition: 0.3s linear;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  padding: 30px;
  &:hover {
    transform: translateY(-50px);
  }
`;d.div`
  height: 80px;
  width: 80px;
  align-self: flex-end;
`;d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;d.h3`
  font-size: 20px;
  font-weight: 300;
  text-align: center;
`;const tI=()=>{const[e,t]=x.useState(0),[n,i]=x.useState([]),[s,l]=x.useState({email:"",answers:[]}),[u,f]=x.useState("Questionnaire"),[p,h]=x.useState(!1);x.useEffect(()=>{g()},[]);const g=async()=>{h(!0);try{const _=await Re.get("/question");i(_.data.data.question||[]),h(!1)}catch(_){h(!1),console.error("Error fetching CaseSection data:",_)}},b=_=>{const E=[...s.answers];E[e]={question:n[e].question,answer:_},l(N=>({...N,answers:E}))},v=()=>{e<n.length&&t(_=>_+1)},j=async _=>{try{_.preventDefault();const E=await Re.post("/questionaire",s);f(E.data.message),l({email:"",answers:[]}),t(0)}catch(E){console.error(E),f(`Failed to submit. Please try again. ${E}`)}};x.useEffect(()=>{u&&setTimeout(()=>{f(null)},3e3)},[u]);const C=_=>{const{value:E}=_.target;l(N=>({...N,email:E}))},k={hidden:_=>({x:_==="left"?300:-300,opacity:0}),visible:{x:0,opacity:1},exit:_=>({x:_==="left"?-300:300,opacity:0})};return r.jsx(nI,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(rI,{children:[u?r.jsx(Bw,{className:"sub-head",children:u}):r.jsx(Bw,{className:"sub-head",children:"Questionnaire"}),r.jsx(oI,{children:r.jsx(LP,{custom:"left",children:r.jsx(J5.div,{custom:"left",variants:k,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.5},style:{position:"absolute",width:"100%"},children:e<n.length?r.jsxs(Hw,{index:e,children:[r.jsx(iI,{children:r.jsx(aO,{})}),r.jsx(Ww,{children:r.jsx(Uw,{children:n[e].question})}),r.jsx(sI,{children:n[e].options.map((_,E)=>{var N;return r.jsxs(aI,{children:[r.jsx(lI,{type:"radio",name:`question-${e}`,onChange:()=>b(_),checked:((N=s.answers[e])==null?void 0:N.answer)===_}),_]},E)})}),r.jsx(qw,{children:r.jsx(Yw,{className:"next",onClick:v,children:(e===n.length-1,"Next")})})]}):r.jsxs(Hw,{children:[r.jsx(Ww,{children:r.jsx(Uw,{children:"Please enter your email to submit the questionnaire:"})}),r.jsx(cI,{type:"email",placeholder:"Enter your email",value:s.email,onChange:C}),r.jsx(qw,{children:r.jsx(Yw,{className:"next",onClick:j,children:"Submit"})})]})},e)})})]})})})},nI=d.section`
  min-height: 400px;
`,rI=d.div``,Bw=d.h1`
  text-align: center;
  margin-bottom: 60px;
`,oI=d.div`
  position: relative;
`,Hw=d.div`
  padding: 20px;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  background-color: #000;
  width: 100%;
  display: grid;
  justify-items: center;
`,iI=d.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${y.theme_red};
  height: 70px;
  width: 70px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  svg {
    color: ${y.white};
    font-size: 40px;
  }
`,Ww=d.div`
  margin-top: 20px;
  text-align: center;
`,Uw=d.p`
  font-size: 18px;
`,sI=d.ul`
  list-style: none;
  padding: 0;
  margin-top: 40px;
  display: flex;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`,aI=d.li`
  display: flex;
  align-items: center;
  gap: 8px;
`,lI=d.input`
  appearance: none; /* Remove default styling */
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  display: inline-block;
  transition: all 0.3s ease;

  &:checked {
    border-color: ${y.theme_red}; /* Change border color when checked */
    background-color: ${y.theme_red}; /* Add background color when checked */
  }

  &:hover {
    border-color: #b41e00; /* Darker border color on hover */
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.5); /* Add focus ring */
  }

  &:checked::after {
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,cI=d.input`
  padding: 10px;
  margin-top: 20px;
  width: 80%;
  font-size: 16px;
  color: ${y.black};
  outline: none;
  &::placeholder {
    color: ${y.grey_background};
  }
`,qw=d.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`,Yw=d.button`
  padding: 10px 20px;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${y.black};
    color: ${y.theme_red};
    border: 1px solid ${y.theme_red};
  }
`,Gw="data:image/svg+xml,%3csvg%20width='45'%20height='112'%20viewBox='0%200%2045%20112'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1374_5598'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='45'%20height='112'%3e%3crect%20y='0.275391'%20width='45'%20height='111.724'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1374_5598)'%3e%3cmask%20id='path-2-outside-1_1374_5598'%20maskUnits='userSpaceOnUse'%20x='4'%20y='5.30981'%20width='38'%20height='112'%20fill='black'%3e%3crect%20fill='white'%20x='4'%20y='5.30981'%20width='38'%20height='112'/%3e%3cpath%20d='M26.1358%20115.31V20.065H5.78804V7.7986H40.4225V115.31H26.1358Z'/%3e%3c/mask%3e%3cpath%20d='M26.1358%20115.31H24.5841V116.862H26.1358V115.31ZM26.1358%2020.065H27.6875V18.5133H26.1358V20.065ZM5.78804%2020.065H4.23632V21.6167H5.78804V20.065ZM5.78804%207.7986V6.24687H4.23632V7.7986H5.78804ZM40.4225%207.7986H41.9743V6.24687H40.4225V7.7986ZM40.4225%20115.31V116.862H41.9743V115.31H40.4225ZM27.6875%20115.31V20.065H24.5841V115.31H27.6875ZM26.1358%2018.5133H5.78804V21.6167H26.1358V18.5133ZM7.33977%2020.065V7.7986H4.23632V20.065H7.33977ZM5.78804%209.35032H40.4225V6.24687H5.78804V9.35032ZM38.8708%207.7986V115.31H41.9743V7.7986H38.8708ZM40.4225%20113.758H26.1358V116.862H40.4225V113.758Z'%20fill='%23FF2A00'%20mask='url(%23path-2-outside-1_1374_5598)'/%3e%3c/g%3e%3c/svg%3e",Kw="/assets/two-sXvOsB3x.svg",Qw="/assets/three-B249bcrP.svg",Zw="data:image/svg+xml,%3csvg%20width='87'%20height='112'%20viewBox='0%200%2087%20112'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_1374_5607'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='87'%20height='112'%3e%3crect%20width='87'%20height='112'%20fill='%23D9D9D9'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_1374_5607)'%3e%3cmask%20id='path-2-outside-1_1374_5607'%20maskUnits='userSpaceOnUse'%20x='-0.214844'%20y='5'%20width='84'%20height='112'%20fill='black'%3e%3crect%20fill='white'%20x='-0.214844'%20y='5'%20width='84'%20height='112'/%3e%3cpath%20d='M54.9558%20115V90.1786H2.1382V78.4895L54.6672%207.48878H68.2323V78.4895H82.2304V90.1786H68.2323V115H54.9558ZM12.8172%2083.5403L10.7968%2078.4895H54.9558V19.3222L59.1408%2020.4767L12.8172%2083.5403Z'/%3e%3c/mask%3e%3cpath%20d='M54.9558%20115H53.4041V116.552H54.9558V115ZM54.9558%2090.1786H56.5075V88.6269H54.9558V90.1786ZM2.1382%2090.1786H0.586475V91.7303H2.1382V90.1786ZM2.1382%2078.4895L0.890761%2077.5666L0.586475%2077.9779V78.4895H2.1382ZM54.6672%207.48878V5.93706H53.885L53.4197%206.56588L54.6672%207.48878ZM68.2323%207.48878H69.7841V5.93706H68.2323V7.48878ZM68.2323%2078.4895H66.6806V80.0412H68.2323V78.4895ZM82.2304%2078.4895H83.7822V76.9378H82.2304V78.4895ZM82.2304%2090.1786V91.7303H83.7822V90.1786H82.2304ZM68.2323%2090.1786V88.6269H66.6806V90.1786H68.2323ZM68.2323%20115V116.552H69.7841V115H68.2323ZM12.8172%2083.5403L11.3764%2084.1166L12.4139%2086.7104L14.0678%2084.459L12.8172%2083.5403ZM10.7968%2078.4895V76.9378H8.50487L9.35608%2079.0658L10.7968%2078.4895ZM54.9558%2078.4895V80.0412H56.5075V78.4895H54.9558ZM54.9558%2019.3222L55.3684%2017.8264L53.4041%2017.2845V19.3222H54.9558ZM59.1408%2020.4767L60.3914%2021.3953L61.7249%2019.5799L59.5534%2018.9809L59.1408%2020.4767ZM56.5075%20115V90.1786H53.4041V115H56.5075ZM54.9558%2088.6269H2.1382V91.7303H54.9558V88.6269ZM3.68992%2090.1786V78.4895H0.586475V90.1786H3.68992ZM3.38564%2079.4124L55.9146%208.41168L53.4197%206.56588L0.890761%2077.5666L3.38564%2079.4124ZM54.6672%209.0405H68.2323V5.93706H54.6672V9.0405ZM66.6806%207.48878V78.4895H69.7841V7.48878H66.6806ZM68.2323%2080.0412H82.2304V76.9378H68.2323V80.0412ZM80.6787%2078.4895V90.1786H83.7822V78.4895H80.6787ZM82.2304%2088.6269H68.2323V91.7303H82.2304V88.6269ZM66.6806%2090.1786V115H69.7841V90.1786H66.6806ZM68.2323%20113.448H54.9558V116.552H68.2323V113.448ZM14.2579%2082.9641L12.2376%2077.9132L9.35608%2079.0658L11.3764%2084.1166L14.2579%2082.9641ZM10.7968%2080.0412H54.9558V76.9378H10.7968V80.0412ZM56.5075%2078.4895V19.3222H53.4041V78.4895H56.5075ZM54.5431%2020.8181L58.7281%2021.9726L59.5534%2018.9809L55.3684%2017.8264L54.5431%2020.8181ZM57.8902%2019.5581L11.5666%2082.6217L14.0678%2084.459L60.3914%2021.3953L57.8902%2019.5581Z'%20fill='%23FF2A00'%20mask='url(%23path-2-outside-1_1374_5607)'/%3e%3c/g%3e%3c/svg%3e",dI=()=>(x.useEffect(()=>{bt.init({duration:2e3})},[]),r.jsx(uI,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(fI,{children:[r.jsx(pI,{className:"sub-head",children:"Demo details"}),r.jsxs(hI,{children:[" ","Aetherbot.ai is making strides in its development, concentrating on attracting investment and entering new markets. Our advancement is organized around four essential areas:"]}),r.jsxs(mI,{children:[r.jsxs(Ac,{children:[r.jsxs(to,{className:"no-border","data-aos":"fade-right",children:[" ",r.jsx(no,{children:r.jsx(ro,{src:Gw,alt:"Step 1"})})," ",r.jsx(oo,{children:"Answer The Questionnaire And Book A Slot For Demo"})]}),r.jsxs(to,{children:[" ","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus!"]})]}),r.jsxs(Ac,{children:[r.jsx(to,{children:" "}),r.jsxs(to,{className:"no-border left","data-aos":"fade-left",children:[" ",r.jsx(oo,{children:"A Functional Prototype Of Our Digital Human Technology Is Ready For Interaction And To Explore Functionality"}),r.jsx(no,{children:r.jsx(ro,{src:Kw,alt:"Step 2"})})," "]})]}),r.jsxs(Ac,{children:[r.jsxs(to,{className:"no-border","data-aos":"fade-right",children:[" ",r.jsx(no,{children:r.jsx(ro,{src:Qw,alt:"Step 3"})})," ",r.jsx(oo,{children:"Q and A session and possible customization solutions and requirements gathering"})]}),r.jsxs(to,{children:[" ","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus!"]})]}),r.jsxs(Ac,{children:[r.jsx(to,{children:" "}),r.jsxs(to,{className:"no-border left","data-aos":"fade-left",children:[" ",r.jsx(oo,{children:"Post Demo feedback gathering and solutions to your problems"}),r.jsx(no,{children:r.jsx(ro,{src:Zw,alt:"Step 4"})})," "]})]})]}),r.jsxs(gI,{children:[r.jsxs(Lc,{children:[r.jsx(no,{children:r.jsx(ro,{src:Gw,alt:"Step 1"})})," ",r.jsx(oo,{className:"mobile",children:"Answer The Questionnaire And Book A Slot For Demo"})]}),r.jsxs(Lc,{children:[r.jsx(oo,{className:"mobile right",children:"Answer The Questionnaire And Book A Slot For Demo"}),r.jsx(no,{children:r.jsx(ro,{src:Kw,alt:"Step 2"})})," "]}),r.jsxs(Lc,{children:[r.jsx(no,{children:r.jsx(ro,{src:Qw,alt:"Step 1"})})," ",r.jsx(oo,{className:"mobile",children:"Answer The Questionnaire And Book A Slot For Demo"})]}),r.jsxs(Lc,{children:[r.jsx(oo,{className:"mobile right",children:"Answer The Questionnaire And Book A Slot For Demo"}),r.jsx(no,{children:r.jsx(ro,{src:Zw,alt:"Step 1"})})," "]})]})]})})})),uI=d.div``,fI=d.div`
  display: grid;
  place-items: center;
`,pI=d.h2`
  color: ${y.theme};
`,hI=d.p``,mI=d.div`
  width: 70%;
  margin: 40px auto;
  @media screen and (max-width: 1180px) {
    width: 100%;
  }
  @media screen and (max-width: 880px) {
    display: none;
  }
`,Ac=d.div`
  padding: 0 20px;
  /* border: 1px solid white; */

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  position: relative;

  &::after {
    position: absolute;
    content: "";
    height: 100%;
    width: 1px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-right: 3px dashed ${y.white};
    z-index: -2;
  }
`,to=d.div`
  max-height: 150px;
  display: grid;
  grid-template-columns: 0.1fr 2fr;

  gap: 30px;
  opacity: 0;
  &.no-border {
    opacity: 1;
    border-bottom: 1px solid ${y.white};
    position: relative;
    &::after {
      position: absolute;
      bottom: -10px;
      right: -11px;
      content: "";
      height: 20px;
      width: 20px;
      background-color: ${y.white};
      border-radius: 50%;
      z-index: 2;
    }
  }
  &.left {
    grid-template-columns: 2fr 0.1fr;

    &::after {
      position: absolute;
      bottom: -10px;
      left: -11px;
      content: "";
      height: 20px;
      width: 20px;
      background-color: ${y.white};
      border-radius: 50%;
    }
  }
`,no=d.div`
  height: 100px;
  width: 70px;
  border-radius: 50%;
`,ro=d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`,oo=d.p`
  width: 80%;
  justify-self: center;
  text-transform: capitalize;
  &.mobile {
    height: 100%;
    border-left: 2px dotted white;
    padding: 40px 20px;
    &.right {
      border-right: 2px dotted white;
      border-left: none;
    }
  }
`,gI=d.div`
  display: none;
  margin-top: 40px;
  @media screen and (max-width: 880px) {
    display: block;
  }
`,Lc=d.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;function Dk(e){var t,n,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Dk(e[t]))&&(i&&(i+=" "),i+=n)}else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}function yu(){for(var e,t,n=0,i="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Dk(e))&&(i&&(i+=" "),i+=t);return i}var Hh,Xw;function xI(){if(Xw)return Hh;Xw=1;const e=(p,h,g,b)=>{if(g==="length"||g==="prototype"||g==="arguments"||g==="caller")return;const v=Object.getOwnPropertyDescriptor(p,g),j=Object.getOwnPropertyDescriptor(h,g);!t(v,j)&&b||Object.defineProperty(p,g,j)},t=function(p,h){return p===void 0||p.configurable||p.writable===h.writable&&p.enumerable===h.enumerable&&p.configurable===h.configurable&&(p.writable||p.value===h.value)},n=(p,h)=>{const g=Object.getPrototypeOf(h);g!==Object.getPrototypeOf(p)&&Object.setPrototypeOf(p,g)},i=(p,h)=>`/* Wrapped ${p}*/
${h}`,s=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),l=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),u=(p,h,g)=>{const b=g===""?"":`with ${g.trim()}() `,v=i.bind(null,b,h.toString());Object.defineProperty(v,"name",l),Object.defineProperty(p,"toString",{...s,value:v})};return Hh=(p,h,{ignoreNonConfigurable:g=!1}={})=>{const{name:b}=p;for(const v of Reflect.ownKeys(h))e(p,h,v,g);return n(p,h),u(p,h,b),p},Hh}var Ca={exports:{}},Wh,Jw;function vI(){return Jw||(Jw=1,Wh=()=>{const e={};return e.promise=new Promise((t,n)=>{e.resolve=t,e.reject=n}),e}),Wh}var zc=Ca.exports,e2;function yI(){return e2||(e2=1,function(e,t){var n=zc&&zc.__awaiter||function(u,f,p,h){return new(p||(p=Promise))(function(g,b){function v(k){try{C(h.next(k))}catch(_){b(_)}}function j(k){try{C(h.throw(k))}catch(_){b(_)}}function C(k){k.done?g(k.value):new p(function(_){_(k.value)}).then(v,j)}C((h=h.apply(u,f||[])).next())})},i=zc&&zc.__importDefault||function(u){return u&&u.__esModule?u:{default:u}};Object.defineProperty(t,"__esModule",{value:!0});const s=i(vI());function l(u,f="maxAge"){let p,h,g;const b=()=>n(this,void 0,void 0,function*(){if(p!==void 0)return;const C=k=>n(this,void 0,void 0,function*(){g=s.default();const _=k[1][f]-Date.now();if(_<=0){u.delete(k[0]),g.resolve();return}return p=k[0],h=setTimeout(()=>{u.delete(k[0]),g&&g.resolve()},_),typeof h.unref=="function"&&h.unref(),g.promise});try{for(const k of u)yield C(k)}catch{}p=void 0}),v=()=>{p=void 0,h!==void 0&&(clearTimeout(h),h=void 0),g!==void 0&&(g.reject(void 0),g=void 0)},j=u.set.bind(u);return u.set=(C,k)=>{u.has(C)&&u.delete(C);const _=j(C,k);return p&&p===C&&v(),b(),_},b(),u}t.default=l,e.exports=l,e.exports.default=l}(Ca,Ca.exports)),Ca.exports}var Uh,t2;function bI(){if(t2)return Uh;t2=1;const e=xI(),t=yI(),n=new WeakMap,i=new WeakMap,s=(l,{cacheKey:u,cache:f=new Map,maxAge:p}={})=>{typeof p=="number"&&t(f);const h=function(...g){const b=u?u(g):g[0],v=f.get(b);if(v)return v.data;const j=l.apply(this,g);return f.set(b,{data:j,maxAge:p?Date.now()+p:Number.POSITIVE_INFINITY}),j};return e(h,l,{ignoreNonConfigurable:!0}),i.set(h,f),h};return s.decorator=(l={})=>(u,f,p)=>{const h=u[f];if(typeof h!="function")throw new TypeError("The decorated value must be a function");delete p.value,delete p.writable,p.get=function(){if(!n.has(this)){const g=s(h,l);return n.set(this,g),g}return n.get(this)}},s.clear=l=>{const u=i.get(l);if(!u)throw new TypeError("Can't clear a function that was not memoized!");if(typeof u.clear!="function")throw new TypeError("The cache Map can't be cleared!");u.clear()},Uh=s,Uh}var wI=bI();const Ok=ss(wI);function jI(e){return typeof e=="string"}function SI(e,t,n){return n.indexOf(e)===t}function kI(e){return e.toLowerCase()===e}function n2(e){return e.indexOf(",")===-1?e:e.split(",")}function lg(e){if(!e)return e;if(e==="C"||e==="posix"||e==="POSIX")return"en-US";if(e.indexOf(".")!==-1){var t=e.split(".")[0],n=t===void 0?"":t;return lg(n)}if(e.indexOf("@")!==-1){var i=e.split("@")[0],n=i===void 0?"":i;return lg(n)}if(e.indexOf("-")===-1||!kI(e))return e;var s=e.split("-"),l=s[0],u=s[1],f=u===void 0?"":u;return"".concat(l,"-").concat(f.toUpperCase())}function CI(e){var t=e===void 0?{}:e,n=t.useFallbackLocale,i=n===void 0?!0:n,s=t.fallbackLocale,l=s===void 0?"en-US":s,u=[];if(typeof navigator<"u"){for(var f=navigator.languages||[],p=[],h=0,g=f;h<g.length;h++){var b=g[h];p=p.concat(n2(b))}var v=navigator.language,j=v&&n2(v);u=u.concat(p,j)}return i&&u.push(l),u.filter(jI).map(lg).filter(SI)}var $I=Ok(CI,{cacheKey:JSON.stringify});function PI(e){return $I(e)[0]||null}var Mk=Ok(PI,{cacheKey:JSON.stringify});function Er(e,t,n){return function(s,l){l===void 0&&(l=n);var u=e(s)+l;return t(u)}}function ol(e){return function(n){return new Date(e(n).getTime()-1)}}function il(e,t){return function(i){return[e(i),t(i)]}}function ut(e){if(e instanceof Date)return e.getFullYear();if(typeof e=="number")return e;var t=parseInt(e,10);if(typeof e=="string"&&!isNaN(t))return t;throw new Error("Failed to get year from date: ".concat(e,"."))}function xo(e){if(e instanceof Date)return e.getMonth();throw new Error("Failed to get month from date: ".concat(e,"."))}function bu(e){if(e instanceof Date)return e.getDate();throw new Error("Failed to get year from date: ".concat(e,"."))}function gs(e){var t=ut(e),n=t+(-t+1)%100,i=new Date;return i.setFullYear(n,0,1),i.setHours(0,0,0,0),i}var EI=Er(ut,gs,-100),Ak=Er(ut,gs,100),C0=ol(Ak),_I=Er(ut,C0,-100),Lk=il(gs,C0);function vo(e){var t=ut(e),n=t+(-t+1)%10,i=new Date;return i.setFullYear(n,0,1),i.setHours(0,0,0,0),i}var zk=Er(ut,vo,-10),$0=Er(ut,vo,10),wu=ol($0),Rk=Er(ut,wu,-10),Nk=il(vo,wu);function xs(e){var t=ut(e),n=new Date;return n.setFullYear(t,0,1),n.setHours(0,0,0,0),n}var Ik=Er(ut,xs,-1),P0=Er(ut,xs,1),ju=ol(P0),Fk=Er(ut,ju,-1),TI=il(xs,ju);function E0(e,t){return function(i,s){s===void 0&&(s=t);var l=ut(i),u=xo(i)+s,f=new Date;return f.setFullYear(l,u,1),f.setHours(0,0,0,0),e(f)}}function ri(e){var t=ut(e),n=xo(e),i=new Date;return i.setFullYear(t,n,1),i.setHours(0,0,0,0),i}var Vk=E0(ri,-1),_0=E0(ri,1),sl=ol(_0),Bk=E0(sl,-1),DI=il(ri,sl);function OI(e,t){return function(i,s){s===void 0&&(s=t);var l=ut(i),u=xo(i),f=bu(i)+s,p=new Date;return p.setFullYear(l,u,f),p.setHours(0,0,0,0),e(p)}}function al(e){var t=ut(e),n=xo(e),i=bu(e),s=new Date;return s.setFullYear(t,n,i),s.setHours(0,0,0,0),s}var MI=OI(al,1),T0=ol(MI),AI=il(al,T0);function Hk(e){return bu(sl(e))}var Bt={GREGORY:"gregory",HEBREW:"hebrew",ISLAMIC:"islamic",ISO_8601:"iso8601"},LI={gregory:["en-CA","en-US","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-SV","es-VE","pt-BR"],hebrew:["he","he-IL"],islamic:["ar","ar-AE","ar-BH","ar-DZ","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LY","ar-OM","ar-QA","ar-SA","ar-SD","ar-SY","ar-YE","dv","dv-MV","ps","ps-AR"]},D0=[0,1,2,3,4,5,6],qh=new Map;function zI(e){return function(n,i){var s=n||Mk();qh.has(s)||qh.set(s,new Map);var l=qh.get(s);return l.has(e)||l.set(e,new Intl.DateTimeFormat(s||void 0,e).format),l.get(e)(i)}}function RI(e){var t=new Date(e);return new Date(t.setHours(12))}function oi(e){return function(t,n){return zI(e)(t,RI(n))}}var NI={day:"numeric"},II={day:"numeric",month:"long",year:"numeric"},FI={month:"long"},VI={month:"long",year:"numeric"},BI={weekday:"short"},HI={weekday:"long"},WI={year:"numeric"},UI=oi(NI),qI=oi(II),YI=oi(FI),Wk=oi(VI),GI=oi(BI),KI=oi(HI),Su=oi(WI),QI=D0[0],ZI=D0[5],r2=D0[6];function Fa(e,t){t===void 0&&(t=Bt.ISO_8601);var n=e.getDay();switch(t){case Bt.ISO_8601:return(n+6)%7;case Bt.ISLAMIC:return(n+1)%7;case Bt.HEBREW:case Bt.GREGORY:return n;default:throw new Error("Unsupported calendar type.")}}function XI(e){var t=gs(e);return ut(t)}function JI(e){var t=vo(e);return ut(t)}function cg(e,t){t===void 0&&(t=Bt.ISO_8601);var n=ut(e),i=xo(e),s=e.getDate()-Fa(e,t);return new Date(n,i,s)}function eF(e,t){t===void 0&&(t=Bt.ISO_8601);var n=t===Bt.GREGORY?Bt.GREGORY:Bt.ISO_8601,i=cg(e,t),s=ut(e)+1,l,u;do l=new Date(s,0,n===Bt.ISO_8601?4:1),u=cg(l,t),s-=1;while(e<u);return Math.round((i.getTime()-u.getTime())/(864e5*7))+1}function Xo(e,t){switch(e){case"century":return gs(t);case"decade":return vo(t);case"year":return xs(t);case"month":return ri(t);case"day":return al(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function tF(e,t){switch(e){case"century":return EI(t);case"decade":return zk(t);case"year":return Ik(t);case"month":return Vk(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function Uk(e,t){switch(e){case"century":return Ak(t);case"decade":return $0(t);case"year":return P0(t);case"month":return _0(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function nF(e,t){switch(e){case"decade":return zk(t,-100);case"year":return Ik(t,-10);case"month":return Vk(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function rF(e,t){switch(e){case"decade":return $0(t,100);case"year":return P0(t,10);case"month":return _0(t,12);default:throw new Error("Invalid rangeType: ".concat(e))}}function qk(e,t){switch(e){case"century":return C0(t);case"decade":return wu(t);case"year":return ju(t);case"month":return sl(t);case"day":return T0(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function oF(e,t){switch(e){case"century":return _I(t);case"decade":return Rk(t);case"year":return Fk(t);case"month":return Bk(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function iF(e,t){switch(e){case"decade":return Rk(t,-100);case"year":return Fk(t,-10);case"month":return Bk(t,-12);default:throw new Error("Invalid rangeType: ".concat(e))}}function o2(e,t){switch(e){case"century":return Lk(t);case"decade":return Nk(t);case"year":return TI(t);case"month":return DI(t);case"day":return AI(t);default:throw new Error("Invalid rangeType: ".concat(e))}}function sF(e,t,n){var i=[t,n].sort(function(s,l){return s.getTime()-l.getTime()});return[Xo(e,i[0]),qk(e,i[1])]}function Yk(e,t,n){return n.map(function(i){return(t||Su)(e,i)}).join(" – ")}function aF(e,t,n){return Yk(e,t,Lk(n))}function Gk(e,t,n){return Yk(e,t,Nk(n))}function lF(e){return e.getDay()===new Date().getDay()}function Kk(e,t){t===void 0&&(t=Bt.ISO_8601);var n=e.getDay();switch(t){case Bt.ISLAMIC:case Bt.HEBREW:return n===ZI||n===r2;case Bt.ISO_8601:case Bt.GREGORY:return n===r2||n===QI;default:throw new Error("Unsupported calendar type.")}}var er="react-calendar__navigation";function cF(e){var t=e.activeStartDate,n=e.drillUp,i=e.formatMonthYear,s=i===void 0?Wk:i,l=e.formatYear,u=l===void 0?Su:l,f=e.locale,p=e.maxDate,h=e.minDate,g=e.navigationAriaLabel,b=g===void 0?"":g,v=e.navigationAriaLive,j=e.navigationLabel,C=e.next2AriaLabel,k=C===void 0?"":C,_=e.next2Label,E=_===void 0?"»":_,N=e.nextAriaLabel,V=N===void 0?"":N,B=e.nextLabel,M=B===void 0?"›":B,F=e.prev2AriaLabel,A=F===void 0?"":F,R=e.prev2Label,T=R===void 0?"«":R,D=e.prevAriaLabel,z=D===void 0?"":D,H=e.prevLabel,W=H===void 0?"‹":H,Y=e.setActiveStartDate,G=e.showDoubleView,X=e.view,$=e.views,J=$.indexOf(X)>0,I=X!=="century",P=tF(X,t),O=I?nF(X,t):void 0,U=Uk(X,t),Q=I?rF(X,t):void 0,ee=function(){if(P.getFullYear()<0)return!0;var me=oF(X,t);return h&&h>=me}(),ie=I&&function(){if(O.getFullYear()<0)return!0;var me=iF(X,t);return h&&h>=me}(),re=p&&p<U,se=I&&p&&p<Q;function de(){Y(P,"prev")}function fe(){Y(O,"prev2")}function ye(){Y(U,"next")}function Pe(){Y(Q,"next2")}function ke(me){var $e=function(){switch(X){case"century":return aF(f,u,me);case"decade":return Gk(f,u,me);case"year":return u(f,me);case"month":return s(f,me);default:throw new Error("Invalid view: ".concat(X,"."))}}();return j?j({date:me,label:$e,locale:f||Mk()||void 0,view:X}):$e}function xe(){var me="".concat(er,"__label");return r.jsxs("button",{"aria-label":b,"aria-live":v,className:me,disabled:!J,onClick:n,style:{flexGrow:1},type:"button",children:[r.jsx("span",{className:"".concat(me,"__labelText ").concat(me,"__labelText--from"),children:ke(t)}),G?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"".concat(me,"__divider"),children:" – "}),r.jsx("span",{className:"".concat(me,"__labelText ").concat(me,"__labelText--to"),children:ke(U)})]}):null]})}return r.jsxs("div",{className:er,children:[T!==null&&I?r.jsx("button",{"aria-label":A,className:"".concat(er,"__arrow ").concat(er,"__prev2-button"),disabled:ie,onClick:fe,type:"button",children:T}):null,W!==null&&r.jsx("button",{"aria-label":z,className:"".concat(er,"__arrow ").concat(er,"__prev-button"),disabled:ee,onClick:de,type:"button",children:W}),xe(),M!==null&&r.jsx("button",{"aria-label":V,className:"".concat(er,"__arrow ").concat(er,"__next-button"),disabled:re,onClick:ye,type:"button",children:M}),E!==null&&I?r.jsx("button",{"aria-label":k,className:"".concat(er,"__arrow ").concat(er,"__next2-button"),disabled:se,onClick:Pe,type:"button",children:E}):null]})}var Qi=function(){return Qi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Qi.apply(this,arguments)},dF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function i2(e){return"".concat(e,"%")}function O0(e){var t=e.children,n=e.className,i=e.count,s=e.direction,l=e.offset,u=e.style,f=e.wrap,p=dF(e,["children","className","count","direction","offset","style","wrap"]);return r.jsx("div",Qi({className:n,style:Qi({display:"flex",flexDirection:s,flexWrap:f?"wrap":"nowrap"},u)},p,{children:x.Children.map(t,function(h,g){var b=l&&g===0?i2(100*l/i):null;return x.cloneElement(h,Qi(Qi({},h.props),{style:{flexBasis:i2(100/i),flexShrink:0,flexGrow:0,overflow:"hidden",marginLeft:b,marginInlineStart:b,marginInlineEnd:0}}))})}))}function uF(e,t,n){return t&&t>e?t:n&&n<e?n:e}function Va(e,t){return t[0]<=e&&t[1]>=e}function fF(e,t){return e[0]<=t[0]&&e[1]>=t[1]}function Qk(e,t){return Va(e[0],t)||Va(e[1],t)}function s2(e,t,n){var i=Qk(t,e),s=[];if(i){s.push(n);var l=Va(e[0],t),u=Va(e[1],t);l&&s.push("".concat(n,"Start")),u&&s.push("".concat(n,"End")),l&&u&&s.push("".concat(n,"BothEnds"))}return s}function pF(e){return Array.isArray(e)?e[0]!==null&&e[1]!==null:e!==null}function hF(e){if(!e)throw new Error("args is required");var t=e.value,n=e.date,i=e.hover,s="react-calendar__tile",l=[s];if(!n)return l;var u=new Date,f=function(){if(Array.isArray(n))return n;var j=e.dateType;if(!j)throw new Error("dateType is required when date is not an array of two dates");return o2(j,n)}();if(Va(u,f)&&l.push("".concat(s,"--now")),!t||!pF(t))return l;var p=function(){if(Array.isArray(t))return t;var j=e.valueType;if(!j)throw new Error("valueType is required when value is not an array of two dates");return o2(j,t)}();fF(p,f)?l.push("".concat(s,"--active")):Qk(p,f)&&l.push("".concat(s,"--hasActive"));var h=s2(p,f,"".concat(s,"--range"));l.push.apply(l,h);var g=Array.isArray(t)?t:[t];if(i&&g.length===1){var b=i>p[0]?[p[0],i]:[i,p[0]],v=s2(b,f,"".concat(s,"--hover"));l.push.apply(l,v)}return l}function ku(e){for(var t=e.className,n=e.count,i=n===void 0?3:n,s=e.dateTransform,l=e.dateType,u=e.end,f=e.hover,p=e.offset,h=e.renderTile,g=e.start,b=e.step,v=b===void 0?1:b,j=e.value,C=e.valueType,k=[],_=g;_<=u;_+=v){var E=s(_);k.push(h({classes:hF({date:E,dateType:l,hover:f,value:j,valueType:C}),date:E}))}return r.jsx(O0,{className:t,count:i,offset:p,wrap:!0,children:k})}function Cu(e){var t=e.activeStartDate,n=e.children,i=e.classes,s=e.date,l=e.formatAbbr,u=e.locale,f=e.maxDate,p=e.maxDateTransform,h=e.minDate,g=e.minDateTransform,b=e.onClick,v=e.onMouseOver,j=e.style,C=e.tileClassName,k=e.tileContent,_=e.tileDisabled,E=e.view,N=x.useMemo(function(){var B={activeStartDate:t,date:s,view:E};return typeof C=="function"?C(B):C},[t,s,C,E]),V=x.useMemo(function(){var B={activeStartDate:t,date:s,view:E};return typeof k=="function"?k(B):k},[t,s,k,E]);return r.jsxs("button",{className:yu(i,N),disabled:h&&g(h)>s||f&&p(f)<s||(_==null?void 0:_({activeStartDate:t,date:s,view:E})),onClick:b?function(B){return b(s,B)}:void 0,onFocus:v?function(){return v(s)}:void 0,onMouseOver:v?function(){return v(s)}:void 0,style:j,type:"button",children:[l?r.jsx("abbr",{"aria-label":l(u,s),children:n}):n,V]})}var dg=function(){return dg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},dg.apply(this,arguments)},mF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n},a2="react-calendar__century-view__decades__decade";function gF(e){var t=e.classes,n=t===void 0?[]:t,i=e.currentCentury,s=e.formatYear,l=s===void 0?Su:s,u=mF(e,["classes","currentCentury","formatYear"]),f=u.date,p=u.locale,h=[];return n&&h.push.apply(h,n),h.push(a2),gs(f).getFullYear()!==i&&h.push("".concat(a2,"--neighboringCentury")),r.jsx(Cu,dg({},u,{classes:h,maxDateTransform:wu,minDateTransform:vo,view:"century",children:Gk(p,l,f)}))}var ug=function(){return ug=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ug.apply(this,arguments)},l2=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function xF(e){var t=e.activeStartDate,n=e.hover,i=e.showNeighboringCentury,s=e.value,l=e.valueType,u=l2(e,["activeStartDate","hover","showNeighboringCentury","value","valueType"]),f=XI(t),p=f+(i?119:99);return r.jsx(ku,{className:"react-calendar__century-view__decades",dateTransform:vo,dateType:"decade",end:p,hover:n,renderTile:function(h){var g=h.date,b=l2(h,["date"]);return r.jsx(gF,ug({},u,b,{activeStartDate:t,currentCentury:f,date:g}),g.getTime())},start:f,step:10,value:s,valueType:l})}var fg=function(){return fg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},fg.apply(this,arguments)};function vF(e){function t(){return r.jsx(xF,fg({},e))}return r.jsx("div",{className:"react-calendar__century-view",children:t()})}var pg=function(){return pg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},pg.apply(this,arguments)},yF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n},c2="react-calendar__decade-view__years__year";function bF(e){var t=e.classes,n=t===void 0?[]:t,i=e.currentDecade,s=e.formatYear,l=s===void 0?Su:s,u=yF(e,["classes","currentDecade","formatYear"]),f=u.date,p=u.locale,h=[];return n&&h.push.apply(h,n),h.push(c2),vo(f).getFullYear()!==i&&h.push("".concat(c2,"--neighboringDecade")),r.jsx(Cu,pg({},u,{classes:h,maxDateTransform:ju,minDateTransform:xs,view:"decade",children:l(p,f)}))}var hg=function(){return hg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},hg.apply(this,arguments)},d2=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function wF(e){var t=e.activeStartDate,n=e.hover,i=e.showNeighboringDecade,s=e.value,l=e.valueType,u=d2(e,["activeStartDate","hover","showNeighboringDecade","value","valueType"]),f=JI(t),p=f+(i?11:9);return r.jsx(ku,{className:"react-calendar__decade-view__years",dateTransform:xs,dateType:"year",end:p,hover:n,renderTile:function(h){var g=h.date,b=d2(h,["date"]);return r.jsx(bF,hg({},u,b,{activeStartDate:t,currentDecade:f,date:g}),g.getTime())},start:f,value:s,valueType:l})}var mg=function(){return mg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},mg.apply(this,arguments)};function jF(e){function t(){return r.jsx(wF,mg({},e))}return r.jsx("div",{className:"react-calendar__decade-view",children:t()})}var gg=function(){return gg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},gg.apply(this,arguments)},SF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n},u2=function(e,t,n){if(n||arguments.length===2)for(var i=0,s=t.length,l;i<s;i++)(l||!(i in t))&&(l||(l=Array.prototype.slice.call(t,0,i)),l[i]=t[i]);return e.concat(l||Array.prototype.slice.call(t))},kF="react-calendar__year-view__months__month";function CF(e){var t=e.classes,n=t===void 0?[]:t,i=e.formatMonth,s=i===void 0?YI:i,l=e.formatMonthYear,u=l===void 0?Wk:l,f=SF(e,["classes","formatMonth","formatMonthYear"]),p=f.date,h=f.locale;return r.jsx(Cu,gg({},f,{classes:u2(u2([],n,!0),[kF],!1),formatAbbr:u,maxDateTransform:sl,minDateTransform:ri,view:"year",children:s(h,p)}))}var xg=function(){return xg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},xg.apply(this,arguments)},f2=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function $F(e){var t=e.activeStartDate,n=e.hover,i=e.value,s=e.valueType,l=f2(e,["activeStartDate","hover","value","valueType"]),u=0,f=11,p=ut(t);return r.jsx(ku,{className:"react-calendar__year-view__months",dateTransform:function(h){var g=new Date;return g.setFullYear(p,h,1),ri(g)},dateType:"month",end:f,hover:n,renderTile:function(h){var g=h.date,b=f2(h,["date"]);return r.jsx(CF,xg({},l,b,{activeStartDate:t,date:g}),g.getTime())},start:u,value:i,valueType:s})}var vg=function(){return vg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},vg.apply(this,arguments)};function PF(e){function t(){return r.jsx($F,vg({},e))}return r.jsx("div",{className:"react-calendar__year-view",children:t()})}var yg=function(){return yg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},yg.apply(this,arguments)},EF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n},Yh="react-calendar__month-view__days__day";function _F(e){var t=e.calendarType,n=e.classes,i=n===void 0?[]:n,s=e.currentMonthIndex,l=e.formatDay,u=l===void 0?UI:l,f=e.formatLongDate,p=f===void 0?qI:f,h=EF(e,["calendarType","classes","currentMonthIndex","formatDay","formatLongDate"]),g=h.date,b=h.locale,v=[];return i&&v.push.apply(v,i),v.push(Yh),Kk(g,t)&&v.push("".concat(Yh,"--weekend")),g.getMonth()!==s&&v.push("".concat(Yh,"--neighboringMonth")),r.jsx(Cu,yg({},h,{classes:v,formatAbbr:p,maxDateTransform:T0,minDateTransform:al,view:"month",children:u(b,g)}))}var bg=function(){return bg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},bg.apply(this,arguments)},p2=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function TF(e){var t=e.activeStartDate,n=e.calendarType,i=e.hover,s=e.showFixedNumberOfWeeks,l=e.showNeighboringMonth,u=e.value,f=e.valueType,p=p2(e,["activeStartDate","calendarType","hover","showFixedNumberOfWeeks","showNeighboringMonth","value","valueType"]),h=ut(t),g=xo(t),b=s||l,v=Fa(t,n),j=b?0:v,C=(b?-v:0)+1,k=function(){if(s)return C+6*7-1;var _=Hk(t);if(l){var E=new Date;E.setFullYear(h,g,_),E.setHours(0,0,0,0);var N=7-Fa(E,n)-1;return _+N}return _}();return r.jsx(ku,{className:"react-calendar__month-view__days",count:7,dateTransform:function(_){var E=new Date;return E.setFullYear(h,g,_),al(E)},dateType:"day",hover:i,end:k,renderTile:function(_){var E=_.date,N=p2(_,["date"]);return r.jsx(_F,bg({},p,N,{activeStartDate:t,calendarType:n,currentMonthIndex:g,date:E}),E.getTime())},offset:j,start:C,value:u,valueType:f})}var Zk="react-calendar__month-view__weekdays",Gh="".concat(Zk,"__weekday");function DF(e){for(var t=e.calendarType,n=e.formatShortWeekday,i=n===void 0?GI:n,s=e.formatWeekday,l=s===void 0?KI:s,u=e.locale,f=e.onMouseLeave,p=new Date,h=ri(p),g=ut(h),b=xo(h),v=[],j=1;j<=7;j+=1){var C=new Date(g,b,j-Fa(h,t)),k=l(u,C);v.push(r.jsx("div",{className:yu(Gh,lF(C)&&"".concat(Gh,"--current"),Kk(C,t)&&"".concat(Gh,"--weekend")),children:r.jsx("abbr",{"aria-label":k,title:k,children:i(u,C).replace(".","")})},j))}return r.jsx(O0,{className:Zk,count:7,onFocus:f,onMouseOver:f,children:v})}var Ud=function(){return Ud=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ud.apply(this,arguments)},h2=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n},m2="react-calendar__tile";function OF(e){var t=e.onClickWeekNumber,n=e.weekNumber,i=r.jsx("span",{children:n});if(t){var s=e.date,l=e.onClickWeekNumber,u=e.weekNumber,f=h2(e,["date","onClickWeekNumber","weekNumber"]);return r.jsx("button",Ud({},f,{className:m2,onClick:function(p){return l(u,s,p)},type:"button",children:i}))}else{e.date,e.onClickWeekNumber,e.weekNumber;var f=h2(e,["date","onClickWeekNumber","weekNumber"]);return r.jsx("div",Ud({},f,{className:m2,children:i}))}}function MF(e){var t=e.activeStartDate,n=e.calendarType,i=e.onClickWeekNumber,s=e.onMouseLeave,l=e.showFixedNumberOfWeeks,u=function(){if(l)return 6;var h=Hk(t),g=Fa(t,n),b=h-(7-g);return 1+Math.ceil(b/7)}(),f=function(){for(var h=ut(t),g=xo(t),b=bu(t),v=[],j=0;j<u;j+=1)v.push(cg(new Date(h,g,b+j*7),n));return v}(),p=f.map(function(h){return eF(h,n)});return r.jsx(O0,{className:"react-calendar__month-view__weekNumbers",count:u,direction:"column",onFocus:s,onMouseOver:s,style:{flexBasis:"calc(100% * (1 / 8)",flexShrink:0},children:p.map(function(h,g){var b=f[g];if(!b)throw new Error("date is not defined");return r.jsx(OF,{date:b,onClickWeekNumber:i,weekNumber:h},h)})})}var wg=function(){return wg=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},wg.apply(this,arguments)},AF=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)t.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(n[i[s]]=e[i[s]]);return n};function LF(e){if(e)for(var t=0,n=Object.entries(LI);t<n.length;t++){var i=n[t],s=i[0],l=i[1];if(l.includes(e))return s}return Bt.ISO_8601}function zF(e){var t=e.activeStartDate,n=e.locale,i=e.onMouseLeave,s=e.showFixedNumberOfWeeks,l=e.calendarType,u=l===void 0?LF(n):l,f=e.formatShortWeekday,p=e.formatWeekday,h=e.onClickWeekNumber,g=e.showWeekNumbers,b=AF(e,["calendarType","formatShortWeekday","formatWeekday","onClickWeekNumber","showWeekNumbers"]);function v(){return r.jsx(DF,{calendarType:u,formatShortWeekday:f,formatWeekday:p,locale:n,onMouseLeave:i})}function j(){return g?r.jsx(MF,{activeStartDate:t,calendarType:u,onClickWeekNumber:h,onMouseLeave:i,showFixedNumberOfWeeks:s}):null}function C(){return r.jsx(TF,wg({calendarType:u},b))}var k="react-calendar__month-view";return r.jsx("div",{className:yu(k,g?"".concat(k,"--weekNumbers"):""),children:r.jsxs("div",{style:{display:"flex",alignItems:"flex-end"},children:[j(),r.jsxs("div",{style:{flexGrow:1,width:"100%"},children:[v(),C()]})]})})}var Zi=function(){return Zi=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Zi.apply(this,arguments)},Rc="react-calendar",$d=["century","decade","year","month"],RF=["decade","year","month","day"],M0=new Date;M0.setFullYear(1,0,1);M0.setHours(0,0,0,0);var NF=new Date(864e13);function $a(e){return e instanceof Date?e:new Date(e)}function Xk(e,t){return $d.slice($d.indexOf(e),$d.indexOf(t)+1)}function IF(e,t,n){var i=Xk(t,n);return i.indexOf(e)!==-1}function A0(e,t,n){return e&&IF(e,t,n)?e:n}function Jk(e){var t=$d.indexOf(e);return RF[t]}function FF(e,t){var n=Array.isArray(e)?e[t]:e;if(!n)return null;var i=$a(n);if(Number.isNaN(i.getTime()))throw new Error("Invalid date: ".concat(e));return i}function e4(e,t){var n=e.value,i=e.minDate,s=e.maxDate,l=e.maxDetail,u=FF(n,t);if(!u)return null;var f=Jk(l),p=function(){switch(t){case 0:return Xo(f,u);case 1:return qk(f,u);default:throw new Error("Invalid index value: ".concat(t))}}();return uF(p,i,s)}var L0=function(e){return e4(e,0)},t4=function(e){return e4(e,1)},VF=function(e){return[L0,t4].map(function(t){return t(e)})};function n4(e){var t=e.maxDate,n=e.maxDetail,i=e.minDate,s=e.minDetail,l=e.value,u=e.view,f=A0(u,s,n),p=L0({value:l,minDate:i,maxDate:t,maxDetail:n})||new Date;return Xo(f,p)}function BF(e){var t=e.activeStartDate,n=e.defaultActiveStartDate,i=e.defaultValue,s=e.defaultView,l=e.maxDate,u=e.maxDetail,f=e.minDate,p=e.minDetail,h=e.value,g=e.view,b=A0(g,p,u),v=t||n;return v?Xo(b,v):n4({maxDate:l,maxDetail:u,minDate:f,minDetail:p,value:h||i,view:g||s})}function Kh(e){return e&&(!Array.isArray(e)||e.length===1)}function Nc(e,t){return e instanceof Date&&t instanceof Date&&e.getTime()===t.getTime()}var HF=x.forwardRef(function(t,n){var i=t.activeStartDate,s=t.allowPartialRange,l=t.calendarType,u=t.className,f=t.defaultActiveStartDate,p=t.defaultValue,h=t.defaultView,g=t.formatDay,b=t.formatLongDate,v=t.formatMonth,j=t.formatMonthYear,C=t.formatShortWeekday,k=t.formatWeekday,_=t.formatYear,E=t.goToRangeStartOnSelect,N=E===void 0?!0:E,V=t.inputRef,B=t.locale,M=t.maxDate,F=M===void 0?NF:M,A=t.maxDetail,R=A===void 0?"month":A,T=t.minDate,D=T===void 0?M0:T,z=t.minDetail,H=z===void 0?"century":z,W=t.navigationAriaLabel,Y=t.navigationAriaLive,G=t.navigationLabel,X=t.next2AriaLabel,$=t.next2Label,J=t.nextAriaLabel,I=t.nextLabel,P=t.onActiveStartDateChange,O=t.onChange,U=t.onClickDay,Q=t.onClickDecade,ee=t.onClickMonth,ie=t.onClickWeekNumber,re=t.onClickYear,se=t.onDrillDown,de=t.onDrillUp,fe=t.onViewChange,ye=t.prev2AriaLabel,Pe=t.prev2Label,ke=t.prevAriaLabel,xe=t.prevLabel,me=t.returnValue,$e=me===void 0?"start":me,Le=t.selectRange,Me=t.showDoubleView,Qe=t.showFixedNumberOfWeeks,Je=t.showNavigation,et=Je===void 0?!0:Je,gt=t.showNeighboringCentury,un=t.showNeighboringDecade,qn=t.showNeighboringMonth,yo=qn===void 0?!0:qn,Yn=t.showWeekNumbers,si=t.tileClassName,Xt=t.tileContent,jn=t.tileDisabled,ai=t.value,_r=t.view,Tr=x.useState(f),$u=Tr[0],bo=Tr[1],vs=x.useState(null),Pu=vs[0],li=vs[1],ci=x.useState(Array.isArray(p)?p.map(function(Ie){return Ie!==null?$a(Ie):null}):p!=null?$a(p):null),wo=ci[0],ys=ci[1],di=x.useState(h),Dr=di[0],sr=di[1],Nt=i||$u||BF({activeStartDate:i,defaultActiveStartDate:f,defaultValue:p,defaultView:h,maxDate:F,maxDetail:R,minDate:D,minDetail:H,value:ai,view:_r}),It=function(){var Ie=function(){return Le&&Kh(wo)?wo:ai!==void 0?ai:wo}();return Ie?Array.isArray(Ie)?Ie.map(function(tt){return tt!==null?$a(tt):null}):Ie!==null?$a(Ie):null:null}(),jo=Jk(R),Ze=A0(_r||Dr,H,R),fn=Xk(H,R),bs=Le?Pu:null,ui=fn.indexOf(Ze)<fn.length-1,Or=fn.indexOf(Ze)>0,fi=x.useCallback(function(Ie){var tt=function(){switch($e){case"start":return L0;case"end":return t4;case"range":return VF;default:throw new Error("Invalid returnValue.")}}();return tt({maxDate:F,maxDetail:R,minDate:D,value:Ie})},[F,R,D,$e]),ar=x.useCallback(function(Ie,tt){bo(Ie);var xt={action:tt,activeStartDate:Ie,value:It,view:Ze};P&&!Nc(Nt,Ie)&&P(xt)},[Nt,P,It,Ze]),pi=x.useCallback(function(Ie,tt){var xt=function(){switch(Ze){case"century":return Q;case"decade":return re;case"year":return ee;case"month":return U;default:throw new Error("Invalid view: ".concat(Ze,"."))}}();xt&&xt(Ie,tt)},[U,Q,ee,re,Ze]),lr=x.useCallback(function(Ie,tt){if(ui){pi(Ie,tt);var xt=fn[fn.indexOf(Ze)+1];if(!xt)throw new Error("Attempted to drill down from the lowest view.");bo(Ie),sr(xt);var Jt={action:"drillDown",activeStartDate:Ie,value:It,view:xt};P&&!Nc(Nt,Ie)&&P(Jt),fe&&Ze!==xt&&fe(Jt),se&&se(Jt)}},[Nt,ui,P,pi,se,fe,It,Ze,fn]),Mr=x.useCallback(function(){if(Or){var Ie=fn[fn.indexOf(Ze)-1];if(!Ie)throw new Error("Attempted to drill up from the highest view.");var tt=Xo(Ie,Nt);bo(tt),sr(Ie);var xt={action:"drillUp",activeStartDate:tt,value:It,view:Ie};P&&!Nc(Nt,tt)&&P(xt),fe&&Ze!==Ie&&fe(xt),de&&de(xt)}},[Nt,Or,P,de,fe,It,Ze,fn]),Ar=x.useCallback(function(Ie,tt){var xt=It;pi(Ie,tt);var Jt=Le&&!Kh(xt),en;if(Le)if(Jt)en=Xo(jo,Ie);else{if(!xt)throw new Error("previousValue is required");if(Array.isArray(xt))throw new Error("previousValue must not be an array");en=sF(jo,xt,Ie)}else en=fi(Ie);var hi=!Le||Jt||N?n4({maxDate:F,maxDetail:R,minDate:D,minDetail:H,value:en,view:Ze}):null;tt.persist(),bo(hi),ys(en);var cl={action:"onChange",activeStartDate:hi,value:en,view:Ze};if(P&&!Nc(Nt,hi)&&P(cl),O)if(Le){var _u=Kh(en);if(!_u)O(en||null,tt);else if(s){if(Array.isArray(en))throw new Error("value must not be an array");O([en||null,null],tt)}}else O(en||null,tt)},[Nt,s,fi,N,F,R,D,H,P,O,pi,Le,It,jo,Ze]);function ws(Ie){li(Ie)}function js(){li(null)}x.useImperativeHandle(n,function(){return{activeStartDate:Nt,drillDown:lr,drillUp:Mr,onChange:Ar,setActiveStartDate:ar,value:It,view:Ze}},[Nt,lr,Mr,Ar,ar,It,Ze]);function ll(Ie){var tt=Ie?Uk(Ze,Nt):Xo(Ze,Nt),xt=ui?lr:Ar,Jt={activeStartDate:tt,hover:bs,locale:B,maxDate:F,minDate:D,onClick:xt,onMouseOver:Le?ws:void 0,tileClassName:si,tileContent:Xt,tileDisabled:jn,value:It,valueType:jo};switch(Ze){case"century":return r.jsx(vF,Zi({formatYear:_,showNeighboringCentury:gt},Jt));case"decade":return r.jsx(jF,Zi({formatYear:_,showNeighboringDecade:un},Jt));case"year":return r.jsx(PF,Zi({formatMonth:v,formatMonthYear:j},Jt));case"month":return r.jsx(zF,Zi({calendarType:l,formatDay:g,formatLongDate:b,formatShortWeekday:C,formatWeekday:k,onClickWeekNumber:ie,onMouseLeave:Le?js:void 0,showFixedNumberOfWeeks:typeof Qe<"u"?Qe:Me,showNeighboringMonth:yo,showWeekNumbers:Yn},Jt));default:throw new Error("Invalid view: ".concat(Ze,"."))}}function Eu(){return et?r.jsx(cF,{activeStartDate:Nt,drillUp:Mr,formatMonthYear:j,formatYear:_,locale:B,maxDate:F,minDate:D,navigationAriaLabel:W,navigationAriaLive:Y,navigationLabel:G,next2AriaLabel:X,next2Label:$,nextAriaLabel:J,nextLabel:I,prev2AriaLabel:ye,prev2Label:Pe,prevAriaLabel:ke,prevLabel:xe,setActiveStartDate:ar,showDoubleView:Me,view:Ze,views:fn}):null}var cr=Array.isArray(It)?It:[It];return r.jsxs("div",{className:yu(Rc,Le&&cr.length===1&&"".concat(Rc,"--selectRange"),Me&&"".concat(Rc,"--doubleView"),u),ref:V,children:[Eu(),r.jsxs("div",{className:"".concat(Rc,"__viewContainer"),onBlur:Le?js:void 0,onMouseLeave:Le?js:void 0,children:[ll(),Me?ll(!0):null]})]})});function g2(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M5.22 8.22a.749.749 0 0 0 0 1.06l6.25 6.25a.749.749 0 0 0 1.06 0l6.25-6.25a.749.749 0 1 0-1.06-1.06L12 13.939 6.28 8.22a.749.749 0 0 0-1.06 0Z"},child:[]}]})(e)}function ii(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"},child:[]}]})(e)}function WF(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16 1.75V3h5.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H8V1.75C8 .784 8.784 0 9.75 0h4.5C15.216 0 16 .784 16 1.75Zm-6.5 0V3h5V1.75a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25ZM4.997 6.178a.75.75 0 1 0-1.493.144L4.916 20.92a1.75 1.75 0 0 0 1.742 1.58h10.684a1.75 1.75 0 0 0 1.742-1.581l1.413-14.597a.75.75 0 0 0-1.494-.144l-1.412 14.596a.25.25 0 0 1-.249.226H6.658a.25.25 0 0 1-.249-.226L4.997 6.178Z"},child:[]},{tag:"path",attr:{d:"M9.206 7.501a.75.75 0 0 1 .793.705l.5 8.5A.75.75 0 1 1 9 16.794l-.5-8.5a.75.75 0 0 1 .705-.793Zm6.293.793A.75.75 0 1 0 14 8.206l-.5 8.5a.75.75 0 0 0 1.498.088l.5-8.5Z"},child:[]}]})(e)}d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #101010;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;d(HF)`
  background: #101010;
  color: white;
  border: none;
  width: 100%;

  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    gap: 10px;

    .react-calendar__navigation__label {
      font-size: 15px;
      color: #fff;
    }

    button {
      background: #ff4500;
      border: none;
      color: white;
      font-size: 15px;
      padding: 8px 10px;
      border-radius: 5px;
      cursor: pointer;
      display: grid;
      place-items: center;
      &:hover {
        background: #e63900;
      }
    }
  }

  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 0.9rem;
    color: #aaa;
  }

  .react-calendar__month-view__days {
    height: 400px;
  }

  .react-calendar__tile {
    color: white;
    font-size: 1rem;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      background: #444;
    }

    &.react-calendar__tile--active {
      background: rgb(255, 69, 0);
      color: white;
      cursor: pointer;
      border-radius: 50%;
    }
  }

  .react-calendar__tile--now {
    background: #333;
    border: 1px solid #ff4500;
  }
  abbr:where([title]) {
    text-decoration: none !important;
  }
  .react-calendar__navigation {
    height: 100%;
  }
  @media screen and (max-width: 540px) {
    .react-calendar__month-view__weekdays__weekday {
      font-size: 13px;
    }
    .react-calendar__tile {
      font-size: 13px;
    }
    .react-calendar__navigation {
      display: grid;
      justify-content: unset;
    }
    .react-calendar__month-view__days {
      height: 100%;
    }
  }
`;function UF(e){return Be({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z",fill:"currentColor"},child:[]}]})(e)}function Qh(e){return Be({tag:"svg",attr:{viewBox:"0 0 15 15",fill:"none"},child:[{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M2.8 1L2.74967 0.99997C2.52122 0.999752 2.32429 0.999564 2.14983 1.04145C1.60136 1.17312 1.17312 1.60136 1.04145 2.14983C0.999564 2.32429 0.999752 2.52122 0.99997 2.74967L1 2.8V5.2L0.99997 5.25033C0.999752 5.47878 0.999564 5.67572 1.04145 5.85017C1.17312 6.39864 1.60136 6.82688 2.14983 6.95856C2.32429 7.00044 2.52122 7.00025 2.74967 7.00003L2.8 7H5.2L5.25033 7.00003C5.47878 7.00025 5.67572 7.00044 5.85017 6.95856C6.39864 6.82688 6.82688 6.39864 6.95856 5.85017C7.00044 5.67572 7.00025 5.47878 7.00003 5.25033L7 5.2V2.8L7.00003 2.74967C7.00025 2.52122 7.00044 2.32429 6.95856 2.14983C6.82688 1.60136 6.39864 1.17312 5.85017 1.04145C5.67572 0.999564 5.47878 0.999752 5.25033 0.99997L5.2 1H2.8ZM2.38328 2.01382C2.42632 2.00348 2.49222 2 2.8 2H5.2C5.50779 2 5.57369 2.00348 5.61672 2.01382C5.79955 2.05771 5.94229 2.20045 5.98619 2.38328C5.99652 2.42632 6 2.49222 6 2.8V5.2C6 5.50779 5.99652 5.57369 5.98619 5.61672C5.94229 5.79955 5.79955 5.94229 5.61672 5.98619C5.57369 5.99652 5.50779 6 5.2 6H2.8C2.49222 6 2.42632 5.99652 2.38328 5.98619C2.20045 5.94229 2.05771 5.79955 2.01382 5.61672C2.00348 5.57369 2 5.50779 2 5.2V2.8C2 2.49222 2.00348 2.42632 2.01382 2.38328C2.05771 2.20045 2.20045 2.05771 2.38328 2.01382ZM9.8 1L9.74967 0.99997C9.52122 0.999752 9.32429 0.999564 9.14983 1.04145C8.60136 1.17312 8.17312 1.60136 8.04145 2.14983C7.99956 2.32429 7.99975 2.52122 7.99997 2.74967L8 2.8V5.2L7.99997 5.25033C7.99975 5.47878 7.99956 5.67572 8.04145 5.85017C8.17312 6.39864 8.60136 6.82688 9.14983 6.95856C9.32429 7.00044 9.52122 7.00025 9.74967 7.00003L9.8 7H12.2L12.2503 7.00003C12.4788 7.00025 12.6757 7.00044 12.8502 6.95856C13.3986 6.82688 13.8269 6.39864 13.9586 5.85017C14.0004 5.67572 14.0003 5.47878 14 5.25033L14 5.2V2.8L14 2.74967C14.0003 2.52122 14.0004 2.32429 13.9586 2.14983C13.8269 1.60136 13.3986 1.17312 12.8502 1.04145C12.6757 0.999564 12.4788 0.999752 12.2503 0.99997L12.2 1H9.8ZM9.38328 2.01382C9.42632 2.00348 9.49222 2 9.8 2H12.2C12.5078 2 12.5737 2.00348 12.6167 2.01382C12.7995 2.05771 12.9423 2.20045 12.9862 2.38328C12.9965 2.42632 13 2.49222 13 2.8V5.2C13 5.50779 12.9965 5.57369 12.9862 5.61672C12.9423 5.79955 12.7995 5.94229 12.6167 5.98619C12.5737 5.99652 12.5078 6 12.2 6H9.8C9.49222 6 9.42632 5.99652 9.38328 5.98619C9.20045 5.94229 9.05771 5.79955 9.01382 5.61672C9.00348 5.57369 9 5.50779 9 5.2V2.8C9 2.49222 9.00348 2.42632 9.01382 2.38328C9.05771 2.20045 9.20045 2.05771 9.38328 2.01382ZM2.74967 7.99997L2.8 8H5.2L5.25033 7.99997C5.47878 7.99975 5.67572 7.99956 5.85017 8.04145C6.39864 8.17312 6.82688 8.60136 6.95856 9.14983C7.00044 9.32429 7.00025 9.52122 7.00003 9.74967L7 9.8V12.2L7.00003 12.2503C7.00025 12.4788 7.00044 12.6757 6.95856 12.8502C6.82688 13.3986 6.39864 13.8269 5.85017 13.9586C5.67572 14.0004 5.47878 14.0003 5.25033 14L5.2 14H2.8L2.74967 14C2.52122 14.0003 2.32429 14.0004 2.14983 13.9586C1.60136 13.8269 1.17312 13.3986 1.04145 12.8502C0.999564 12.6757 0.999752 12.4788 0.99997 12.2503L1 12.2V9.8L0.99997 9.74967C0.999752 9.52122 0.999564 9.32429 1.04145 9.14983C1.17312 8.60136 1.60136 8.17312 2.14983 8.04145C2.32429 7.99956 2.52122 7.99975 2.74967 7.99997ZM2.8 9C2.49222 9 2.42632 9.00348 2.38328 9.01382C2.20045 9.05771 2.05771 9.20045 2.01382 9.38328C2.00348 9.42632 2 9.49222 2 9.8V12.2C2 12.5078 2.00348 12.5737 2.01382 12.6167C2.05771 12.7995 2.20045 12.9423 2.38328 12.9862C2.42632 12.9965 2.49222 13 2.8 13H5.2C5.50779 13 5.57369 12.9965 5.61672 12.9862C5.79955 12.9423 5.94229 12.7995 5.98619 12.6167C5.99652 12.5737 6 12.5078 6 12.2V9.8C6 9.49222 5.99652 9.42632 5.98619 9.38328C5.94229 9.20045 5.79955 9.05771 5.61672 9.01382C5.57369 9.00348 5.50779 9 5.2 9H2.8ZM9.8 8L9.74967 7.99997C9.52122 7.99975 9.32429 7.99956 9.14983 8.04145C8.60136 8.17312 8.17312 8.60136 8.04145 9.14983C7.99956 9.32429 7.99975 9.52122 7.99997 9.74967L8 9.8V12.2L7.99997 12.2503C7.99975 12.4788 7.99956 12.6757 8.04145 12.8502C8.17312 13.3986 8.60136 13.8269 9.14983 13.9586C9.32429 14.0004 9.52122 14.0003 9.74967 14L9.8 14H12.2L12.2503 14C12.4788 14.0003 12.6757 14.0004 12.8502 13.9586C13.3986 13.8269 13.8269 13.3986 13.9586 12.8502C14.0004 12.6757 14.0003 12.4788 14 12.2503L14 12.2V9.8L14 9.74967C14.0003 9.52122 14.0004 9.32429 13.9586 9.14983C13.8269 8.60136 13.3986 8.17312 12.8502 8.04145C12.6757 7.99956 12.4788 7.99975 12.2503 7.99997L12.2 8H9.8ZM9.38328 9.01382C9.42632 9.00348 9.49222 9 9.8 9H12.2C12.5078 9 12.5737 9.00348 12.6167 9.01382C12.7995 9.05771 12.9423 9.20045 12.9862 9.38328C12.9965 9.42632 13 9.49222 13 9.8V12.2C13 12.5078 12.9965 12.5737 12.9862 12.6167C12.9423 12.7995 12.7995 12.9423 12.6167 12.9862C12.5737 12.9965 12.5078 13 12.2 13H9.8C9.49222 13 9.42632 12.9965 9.38328 12.9862C9.20045 12.9423 9.05771 12.7995 9.01382 12.6167C9.00348 12.5737 9 12.5078 9 12.2V9.8C9 9.49222 9.00348 9.42632 9.01382 9.38328C9.05771 9.20045 9.20045 9.05771 9.38328 9.01382Z",fill:"currentColor"},child:[]}]})(e)}const qF=()=>{const[e,t]=x.useState({name:"",email:"",mobile:"",date:"",company:"",message:""}),[n,i]=x.useState(!1),[s,l]=x.useState(null),[u,f]=x.useState(null),p=x.useRef(null),h=()=>{p.current&&p.current.showPicker()},g=v=>{t({...e,[v.target.name]:v.target.value})},b=async v=>{v.preventDefault();try{i(!0),(await Re.post("/contact",e)).status===200&&(i(!1),f("Form submitted successfully!"),t({name:"",email:"",mobile:"",date:"",company:"",message:""}))}catch(j){i(!1),le(j)}};return x.useEffect(()=>{s&&setTimeout(()=>{le(s),l(null)},3e3),u&&setTimeout(()=>{Ee(u),f(null)},3e3)},[s,u]),r.jsxs(YF,{children:[r.jsx(x2,{className:"sub-head",children:"Get In Touch"}),r.jsx("div",{className:"wrapper",children:r.jsx(GF,{children:r.jsxs(KF,{children:[r.jsx(x2,{className:"sub-head form",children:"Send A Message"}),r.jsx(QF,{children:"If you have any questions, Write to us."}),r.jsxs(ZF,{onSubmit:b,children:[r.jsx(fa,{type:"text",name:"name",value:e.name,onChange:g,placeholder:"Name","data-aos":"zoom-in-up",required:!0}),r.jsx(fa,{type:"email",name:"email",value:e.email,onChange:g,placeholder:"Email Address","data-aos":"zoom-in-up",required:!0}),r.jsx(fa,{type:"text",name:"mobile",value:e.mobile,onChange:g,placeholder:"Phone","data-aos":"zoom-in-up",required:!0}),r.jsx(fa,{type:"text",name:"company",value:e.company,onChange:g,placeholder:"Company","data-aos":"zoom-in-up",required:!0}),r.jsxs(tV,{"data-aos":"zoom-in-up",children:[r.jsx(fa,{type:"date",name:"date",value:e.date,onChange:g,placeholder:"Date",required:!0,className:"date",ref:p}),r.jsx(UF,{onClick:h})]}),r.jsx(XF,{rows:5,name:"message",value:e.message,onChange:g,placeholder:"Message","data-aos":"zoom-in-up",required:!0}),r.jsx(JF,{children:n?r.jsx("p",{children:"Loading"}):r.jsxs(eV,{children:[r.jsx(Ic,{className:"top"}),r.jsx(Ic,{className:"right"}),r.jsx($r,{text:"Send Message"}),r.jsx(Ic,{className:"bottom"}),r.jsx(Ic,{className:"left"})]})})]}),r.jsx("p",{children:u}),r.jsx("p",{children:s})]})})})]})},YF=d.section``,x2=d.h2`
  text-align: center;
  padding: 60px 0;
  &.form {
    font-size: 25px;
    text-align: left;
    padding: 0 0 30px 0;
  }
`,GF=d.div`
  width: 70%;
  margin: auto;
`,KF=d.div`
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;d.div``;const QF=d.p`
  font-size: 1rem;
  margin-bottom: 30px;
`,ZF=d.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;d.div``;const fa=d.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  background: transparent;
  width: 100%;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: #8f8f8f;
  }
  &.date {
    border-bottom: none;
  }
  &.date::-webkit-calendar-picker-indicator {
    display: none;
  }
  &.date::-webkit-inner-spin-button {
    display: none;
  }
  &:focus {
    border-bottom: 2px solid ${y.theme_red};
  }
`,XF=d.textarea`
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
  outline: none;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  background: transparent;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: #8f8f8f;
  }
  &:focus {
    border-bottom: 2px solid ${y.theme_red};
  }
`,JF=d.div`
  margin-top: 20px;
  display: flex;
  justify-content: end;
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }

  &.bottom {
    justify-content: center;
    margin-top: 30px;
  }
`,eV=d.div`
  position: relative;
  display: inline-block;
`,Ic=d.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;d.div`
  background-color: ${y.grey_background};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;d.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${y.white};
  text-align: left;
`;d.p``;d.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
  text-transform: capitalize;
  div {
    background-color: #ff2a001e;
    padding: 15px;
    border-radius: 50%;

    display: grid;
    place-items: center;
  }
  svg {
    font-size: 25px;
    color: ${y.theme_red};
  }
`;d.div`
  margin-top: 50px;
`;const tV=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid #ccc;

  svg {
    font-size: 25px;
    cursor: pointer;
    color: #ccc;
  }
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
`,nV=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"Book Your Demo"}),r.jsx(tI,{}),r.jsx(GN,{}),r.jsx(dI,{}),r.jsx(k0,{}),r.jsx(qF,{}),r.jsx(xu,{section:"bookademo"})]}),Ba="/assets/logo-BMNp-gVN.png",rV=()=>{const[e,t]=x.useState(null),[n,i]=x.useState(null),[s,l]=x.useState(null),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(null),[v,j]=x.useState(null),[C,k]=x.useState(null),[_,E]=x.useState(!1),[N,V]=x.useState("");x.useEffect(()=>{B(),M(),F()},[]);const B=async()=>{E(!0);try{const I=await Re.get("/industries",{params:{isNeedFull:!0}});b(I.data.data||[]),E(!1)}catch(I){E(!1),console.error("Error fetching Industry data:",I)}},M=async()=>{E(!0);try{const I=await Re.get("/platformsub",{params:{isNeedFull:!0}});j(I.data.data||[]),E(!1)}catch(I){E(!1),console.error("Error fetching Industry data:",I)}},F=async()=>{E(!0);try{const I=await Re.get("/usecasesub",{params:{isNeedFull:!0}});k(I.data.data||[]),E(!1)}catch(I){E(!1),console.error("Error fetching Industry data:",I)}},A=Ke(),R=wn();x.useEffect(()=>{h(!1)},[R]),x.useEffect(()=>{const I=()=>{window.innerWidth>=1080&&h(!1)};return window.addEventListener("resize",I),()=>window.removeEventListener("resize",I)},[]);const T=I=>{t(I)},D=()=>{t(null),i(null)},z=I=>{i(I)},H=()=>{i(null)},W=I=>{console.log("navigation",I),A(`/industry/${I}`)},Y=I=>{A(`/use-case/${I}`)},G=I=>{console.log(I),V(N===""?I:"")},X=I=>{l(P=>P===I?null:I)},$=I=>{f(P=>P===I?null:I)},J=()=>{h(I=>!I)};return console.log("active dropdown",N),r.jsxs(r.Fragment,{children:[r.jsx(oV,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(iV,{children:[r.jsx(v2,{className:"logo",children:r.jsx(y2,{className:"logo-container",children:r.jsx("a",{href:"/",children:r.jsx(b2,{src:Ba,alt:"Aetherbot.ai"})})})}),r.jsx(sV,{children:r.jsxs(aV,{children:[r.jsx(Ro,{children:r.jsx(ht,{to:"/about",children:"Who We Are"})}),r.jsxs(Ro,{className:"dropdown",onClick:()=>G("solutions"),children:[r.jsx(ht,{children:"Solutions"}),r.jsx(g2,{fontSize:20}),N==="solutions"&&r.jsx(w2,{children:r.jsxs("ul",{children:[r.jsx("li",{onMouseEnter:()=>z("industry"),onMouseLeave:H,children:r.jsx(hV,{children:g&&g.map((I,P)=>r.jsx("li",{children:r.jsx("a",{onClick:()=>W(I.route),children:I.name})},P))})}),r.jsx("li",{onMouseEnter:()=>z("usecase"),onMouseLeave:H,children:r.jsx(r.Fragment,{children:r.jsx("ul",{children:C&&C.map((I,P)=>r.jsx("li",{children:r.jsx("a",{onClick:()=>Y(I.route),children:I.route})},P))})})})]})})]}),r.jsx(Ro,{children:r.jsx(ht,{to:"/what-we-do",children:"What We Do"})}),r.jsx(Ro,{className:"dropdown",onMouseEnter:()=>T("platform"),onMouseLeave:D,children:r.jsx(ht,{to:"/platform/NeuroCore",children:"Neuracore"})}),r.jsx(Ro,{children:r.jsx(ht,{to:"/blogs",children:"Blog"})})]})}),r.jsx(j2,{to:"/book-a-demo",children:"Book A Demo"})]})})}),r.jsx(cV,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(dV,{children:[r.jsx(v2,{className:"logo",children:r.jsx(y2,{className:"logo-container",children:r.jsx("a",{href:"/",children:r.jsx(b2,{src:Ba,alt:"Aetherbot.ai"})})})}),r.jsx(uV,{onClick:J,children:r.jsx($M,{fontSize:30,color:"#fff"})})]})})}),r.jsx(fV,{className:p?"active":"",children:r.jsxs(pV,{children:[r.jsx(ht,{to:"/about",children:"Who We Are"}),r.jsxs(Ro,{className:"mobile-dropdown",onClick:()=>X("solutions"),children:[r.jsx("p",{style:{fontSize:"16px",fontWeight:"500"},children:"Solutions"}),r.jsx(g2,{fontSize:20}),s==="solutions"&&r.jsx(w2,{className:"mobile",children:r.jsx("ul",{children:r.jsx("li",{className:"mobile-dropdown",onClick:I=>{I.stopPropagation(),$("industry")},children:r.jsxs(lV,{className:"mobile",children:[r.jsx("ul",{children:g.map((I,P)=>r.jsx("li",{children:r.jsx("a",{onClick:()=>W(I.route),children:I.route})},P))}),r.jsx("ul",{children:C.map((I,P)=>r.jsx("li",{children:r.jsx("a",{onClick:()=>Y(I.route),children:I.route})},P))})]})})})})]}),r.jsx(ht,{to:"/what-we-do",children:"What We Do"}),r.jsx(Ro,{className:"mobile-dropdown",onClick:()=>X("platform"),children:r.jsx(ht,{to:"/platform/Neurocore",children:"Neurocore"})}),r.jsx(ht,{to:"/blogs",children:"Blog"}),r.jsx(j2,{to:"/book-a-demo",className:"mobile",children:"Book A Demo"})]})})]})},oV=d.div`
  background: rgba(87, 87, 87, 0.2); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9;
  padding: 25px 0;
  background: black;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  &.scrolled {
    background: rgba(0, 0, 0, 0.66);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 1080px) {
    display: none;
  }
`,iV=d.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 0.5fr 1fr 0.5fr;
  align-items: center;
`,v2=d.div``,y2=d.div`
  width: 180px;
`,b2=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,sV=d.nav``,aV=d.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
`,Ro=d.li`
  position: relative;
  min-width: max-content;
  a {
    font-weight: 500;
    &:hover {
      color: ${y.theme_red};
    }
  }

  &.dropdown {
    display: flex;
    align-items: center;
    gap: 5px;

    /* &:hover {
      svg {
        transition: all 0.4s ease;
        transform: rotate(180deg);
      }
    } */
  }
  &.mobile-dropdown {
    display: grid;
    grid-template-columns: 1fr 0.1fr;
    align-items: center;
    gap: 5px;

    &:hover {
      svg {
        transition: all 0.4s ease;
        transform: rotate(180deg);
      }
    }
  }
`,w2=d.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: ${y.grey_background};
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  &.mobile {
    position: static;
    grid-column: span 2;
    padding: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: max-content;

    &:hover {
      color: white;
    }
    svg {
      &:hover {
        transform: rotate(180deg);
      }
    }
    &.mobile-dropdown {
      display: grid;
      grid-template-columns: 1fr 0.1fr;
      align-items: center;
      gap: 5px;
      padding: 0;

      &:hover {
        svg {
          transition: all 0.4s ease;
          transform: rotate(180deg);
        }
      }
    }
  }
`,lV=d.div`
  position: absolute;
  top: 0;
  left: 100%;
  background: ${y.grey_background};
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  &.mobile {
    position: static;
    grid-column: span 2;
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  li {
    padding: 8px 16px;
    min-width: max-content;

    @media screen and (max-width: 540px) {
      padding: 10px 3px;
    }
    &:hover {
      color: white;
    }
  }
  a {
    text-transform: capitalize;
  }
`,j2=d(ht)`
  justify-self: end;
  background-color: ${y.white};
  color: ${y.black};
  padding: 10px;

  border: 3px solid transparent;
  border-image: linear-gradient(
    90deg,
    rgba(176, 2, 11, 1) 0%,
    rgba(26, 118, 183, 1) 48%,
    rgba(80, 36, 115, 1) 89%
  );
  border-image-slice: 1;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background-image: conic-gradient(
      rgba(176, 2, 11, 1),
      rgba(26, 118, 183, 1),
      rgba(80, 36, 115, 1),
      rgba(176, 2, 11, 1)
    );

    transition: transform 0.3s ease;
    z-index: -1;
    padding: 3px;
  }
  &:hover {
    color: ${y.theme_red};
    &::after {
      background-image: conic-gradient(
        from var(--angle),
        transparent,
        rgba(176, 2, 11, 1),
        rgba(26, 118, 183, 1),
        rgba(80, 36, 115, 1),
        rgba(176, 2, 11, 1)
      );
      animation: 2s spin linear infinite;
    }
  }
  &.mobile {
    justify-self: center;
  }
`,cV=d.div`
  display: none;
  background: rgba(87, 87, 87, 0.2); /* Semi-transparent background */
  backdrop-filter: blur(10px); /* Apply blur effect */
  -webkit-backdrop-filter: blur(10px); /* For Safari */
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9;
  padding: 25px 0;
  background: black;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
  &.scrolled {
    background: rgba(0, 0, 0, 0.66);
    backdrop-filter: blur(10px);
  }

  @media screen and (max-width: 1080px) {
    display: block;
  }
`,dV=d.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
`,uV=d.button`
  justify-self: end;
`,fV=d.div`
  position: fixed;
  z-index: 99;

  top: 82px;
  background-color: ${y.black};
  padding: 20px;
  width: 100%;
  height: 100dvh;
  overflow: scroll;
  padding-bottom: 40px;
  right: -100%;
  transition: all 0.4s linear;
  &.active {
    right: 0;
  }
`,pV=d.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  text-align: center;
  a {
    font-size: 16px;
  }
`,hV=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;function mV(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"},child:[]}]})(e)}function gV(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(e)}function xV(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(e)}const vV=()=>{const[e,t]=x.useState([]);return x.useEffect(()=>{(async()=>{try{const i=await Re.get("/footer");t(i.data.data)}catch(i){console.error("Error fetching testimonials data:",i)}})()},[]),r.jsx(r.Fragment,{children:r.jsx(yV,{children:r.jsx("div",{className:"wrapper",children:r.jsxs(bV,{children:[r.jsxs(wV,{children:[r.jsx(jV,{children:r.jsx(SV,{src:Ba,alt:"Aetherbot.ai"})}),e&&e.map(n=>r.jsx($V,{children:n.description})),r.jsxs(PV,{children:[r.jsx("a",{href:"https://www.facebook.com/",target:"_blank",children:r.jsx(iR,{fontSize:20,color:"#fff"})}),r.jsx("a",{href:"https://www.instagram.com/",target:"_blank",children:r.jsx(mV,{fontSize:20,color:"#fff"})}),r.jsx("a",{href:"https://www.linkedin.com/",target:"_blank",children:r.jsx(OO,{fontSize:20,color:"#fff"})}),r.jsx("a",{href:"https://www.youtube.com/",target:"_blank",children:r.jsx(xV,{fontSize:20,color:"#fff"})})]})]}),r.jsxs(kV,{children:[r.jsx(CV,{children:"Quick Links"}),r.jsxs(EV,{children:[r.jsx(pa,{to:"/who-we-are",children:"Who We Are"}),r.jsx(pa,{to:"/what-we-do",children:"What We Do"}),r.jsx(pa,{to:"/industry",children:"Industries"}),r.jsx(pa,{to:"/blogs",children:"Insights"}),r.jsx(pa,{to:"/contact",children:"Contact Us"})]})]})]})})})})},yV=d.footer`
  padding: 80px 0;
  border-top: 1px solid ${y.grey_border};
`,bV=d.div`
  display: grid;
  grid-template-columns: 1.5fr 4fr;
  gap: 60px;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,wV=d.div``,jV=d.div`
  width: 180px;
  height: 38px;
  cursor: pointer;
`,SV=d.img`
  height: 100%;
  width: 100%;
  display: block;
  object-fit: contain;
`,kV=d.div``,CV=d.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
`,$V=d.p`
  margin: 20px 0;
`,PV=d.div`
  display: grid;
  grid-template-columns: repeat(4, 0.1fr);
  gap: 30px;
`,EV=d.ul`
  display: grid;
  gap: 10px;
`,pa=d(ht)`
  cursor: pointer;
`;d.div`
  text-align: center;
  width: 100%;
  a {
    display: inline;
    color: #f15925;
  }
`;const S2=()=>!!localStorage.getItem("refreshtoken"),_V="/assets/login-Dk07M-l0.jpg",TV=()=>{const[e,t]=x.useState(""),[n,i]=x.useState(""),s=Ke(),l=async u=>{u.preventDefault();try{if(!e){le("Email is required");return}if(!n){le("Password is required");return}if(n.length<5){le("Password must be at least 5 characters");return}const f=await ce.post("/login",{email:e,password:n});f.status===200&&(localStorage.setItem("accesstoken",f.data.data.accesstoken),localStorage.setItem("refreshtoken",f.data.data.refreshtoken),s("/admin/dashboard"))}catch(f){f.response&&f.response.data&&f.response.data.error?le(f.response.data.error):le("An unexpected error occurred")}};return r.jsx(MV,{children:r.jsxs("div",{className:"wrapper",children:[r.jsxs(AV,{children:[r.jsxs(zV,{children:[r.jsx(LV,{children:r.jsx(NV,{children:r.jsx(IV,{src:Ba,alt:"aetherbot"})})}),r.jsxs(FV,{children:[r.jsxs(VV,{className:"sub-head",children:["Welcome to ",r.jsx("span",{children:"Atherbot"})]}),r.jsx(BV,{children:"Secure Authentication"}),r.jsxs(HV,{children:[" ",r.jsxs(k2,{children:[r.jsx(C2,{children:"Email"}),r.jsx($2,{type:"email",placeholder:"Email",value:e,onChange:u=>t(u.target.value)})]}),r.jsxs(k2,{children:[r.jsx(C2,{children:"Password"}),r.jsx($2,{type:"password",placeholder:"Password",value:n,onChange:u=>i(u.target.value)})]}),r.jsx(WV,{onClick:l,children:"Login"})]})]})]}),r.jsxs(RV,{children:[r.jsx(Fc,{children:"AETHER"}),r.jsx(Fc,{children:"AETHER"}),r.jsx(Fc,{children:"AETHER"}),r.jsx(Fc,{children:"AETHER"})]})]}),r.jsx(UV,{children:"© 2024 AI Tech. All Rights Reserved."})]})})},DV=Ve`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
`,OV=Ve`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`,MV=d.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;

  background: url(${_V}); // Ensure this is correctly referencing the image
  background-size: cover;
  background-position: center;
`;d.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Black overlay with 50% opacity */
  z-index: 1; /* Ensure it is below the text but above the background */
`;const AV=d.div`
  background-color: ${y.grey_background};
  display: grid;
  grid-template-columns: 1fr 1fr;

  max-height: 500px;
  overflow-y: hidden;
  @media screen and (max-width: 880px) {
    grid-template-columns: 1fr;
    max-height: unset;
  }
`,LV=d.h4``,zV=d.div`
  padding: 20px;
`,RV=d.div`
  /* background-color: ${y.theme_red}; */
  padding: 20px;
  overflow: hidden;

  @media screen and (max-width: 880px) {
    display: none;
  }
`,Fc=d.h3`
  font-weight: 800;
  font-size: 80px;
  margin-bottom: 20px;

  &:nth-child(odd) {
    animation: ${DV} 8s linear infinite;
  }

  &:nth-child(even) {
    animation: ${OV} 8s linear infinite;
  }

  color: transparent;
  background: linear-gradient(
    90deg,
    rgba(23, 23, 23, 0.8590029761904762) 0%,
    rgba(255, 42, 0, 0.836594012605042) 100%
  );
  background-clip: text;
`,NV=d.div`
  height: 25px;
  width: 150px;
`,IV=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`,FV=d.div`
  padding: 40px 90px;
  @media screen and (max-width: 480px) {
    padding: 40px 10px;
  }
`,VV=d.h1`
  font-size: 26px;
  span {
    font-weight: 600;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`,BV=d.p`
  text-align: center;
`,HV=d.div`
  padding: 30px 0;
  display: grid;
  gap: 20px;
`,k2=d.div``,C2=d.label`
  font-size: 13px;
`,$2=d.input`
  margin-top: 10px;

  display: block;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: ${y.white};
  border: none;
  border-bottom: 1px solid ${y.white};
  outline: none;
  &::placeholder {
    color: ${y.grey_border};
    font-size: 14px;
  }

  &:focus {
    border-bottom: 1px solid ${y.theme_red};
    font-size: 14px;
  }
`,WV=d.button`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: ${y.theme_red};
  color: ${y.white};
  font-size: 16px;
  font-weight: 400;
`,UV=d.footer`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 13px;
  width: 100%;
  text-align: center;
`,P2=()=>{const[e,t]=x.useState(null),[n,i]=x.useState(!1);x.useEffect(()=>{s()},[]);const s=async()=>{i(!0);try{const l=await ce.get("/dashboard-count");t(l.data.data),i(!1)}catch(l){console.error("Error fetching Dashboard data:",l),i(!1)}};return r.jsx(qV,{children:r.jsx(YV,{children:r.jsx("div",{children:n?r.jsx("p",{children:"Loading..."}):r.jsxs(GV,{children:[r.jsxs(E2,{children:[r.jsx(Vc,{children:r.jsxs("h2",{children:["Total ",r.jsx("br",{})," Enquiries"]})}),r.jsx(Vc,{children:r.jsx("p",{children:e==null?void 0:e.dashboardCounts})})]}),r.jsxs(E2,{children:[r.jsx(Vc,{children:r.jsx("h2",{children:"Total Questionnaires"})}),r.jsx(Vc,{children:r.jsx("p",{children:e==null?void 0:e.questionairecounts})})]})]})})})})},qV=d.div``,YV=d.div``,Vc=d.div`
  background-image: linear-gradient(rgba(26, 118, 183, 1), #7a37b1, #c72c34);
  background-clip: text;
`,GV=d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`,E2=d.div`
  margin-top: 20px;
  background-color: ${y.grey_background};
  padding: 20px;
  display: grid;
  gap: 60px;
  border-radius: 5px;
  h2 {
    color: transparent;
    font-size: 27px;
    font-weight: 500;
    text-align: left;
    height: 100px;
  }
  p {
    font-size: 60px;
    font-weight: 800;
    text-align: right;
    color: transparent;
  }
  @media (max-width: 600px) {
    p {
      font-size: 18px;
    }
  }
`,KV="/assets/logoutConfirm-BnTyJ_BH.svg",QV=({onClose:e})=>{const t=Ke(),[n,i]=x.useState("You will be redirected to the login page. You can always log back at any time"),[s,l]=x.useState(!1);x.useEffect(()=>{l(!0);const f=setTimeout(()=>{l(!1)},300);return()=>clearTimeout(f)},[n]);const u=()=>{i("See you soon!"),setTimeout(()=>{localStorage.clear(),t("/"),window.location.reload()},1e3)};return r.jsx(XV,{children:r.jsxs(JV,{children:[r.jsx(eB,{children:r.jsx(tB,{src:KV,alt:"logout"})}),r.jsx(T2,{className:"p",children:"You sure you want to logout?"}),r.jsx(T2,{animate:s,children:n}),r.jsx(_2,{className:"logout",onClick:u,children:"Logout"}),r.jsx(_2,{className:"cancel",onClick:e,children:"cancel"})]})})};Ve`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;const ZV=Ve`
  from {

    opacity: 0;
  }
  to {

    opacity: 1;
  }
`,XV=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000050;
  z-index: 1;
`,JV=d.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${y.dark_background};

  padding: 20px;
  border-radius: 8px;

  display: grid;
  justify-items: center;
`,_2=d.button`
  width: 100%;
  text-align: center;
  display: grid;
  margin: 5px 0;
  border-radius: 50px;
  border: 2px solid ${y.theme_red};
  padding: 10px 20px;
  background-color: ${y.dark_background};
  color: ${y.white};

  font-weight: 400;
  text-transform: capitalize;
  &.logout {
    background-color: ${y.theme_red};
    color: ${y.white};
  }
`,eB=d.div`
  height: 300px;
  width: 300px;
  @media screen and (max-width: 540px) {
    /* height: 200px;
    width: 200px; */
    height: 100%;
    width: 100%;
  }
`,tB=d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  margin-bottom: 20px;
`,T2=d.p`
  width: 400px;
  text-align: center;
  animation: ${({animate:e})=>e?ZV:"none"} 1s linear;
  font-size: 14px;
  margin-bottom: 20px;
  color: ${y.white};
  &.p {
    font-size: 15px;
  }

  @media screen and (max-width: 540px) {
    width: 280px;
  }
  @media screen and (max-width: 430px) {
    width: 240px;
  }
`,r4=x.createContext(),nB=()=>x.useContext(r4),rB=({children:e})=>{const[t,n]=x.useState(!1),[i,s]=x.useState(null),l=async()=>{n(!0);try{const f=await ce.get("/myprofile");console.log("data",f.data.data),s(f.data.data)}catch(f){console.error("Error fetching users:",f)}finally{n(!1)}},u=()=>{localStorage.clear(),s(null)};return r.jsx(r4.Provider,{value:{userData:i,loading:t,clearUserData:u,fetchUserData:l},children:e})},oB=()=>{Ke(),x.useState(!1),x.useState("");const{userData:e,loading:t,fetchUserData:n}=nB(),[i,s]=x.useState(!1),l=x.useRef();x.useEffect(()=>{n()},[]),x.useEffect(()=>{const f=p=>{l.current&&!l.current.contains(p.target)&&s(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[s]);const u=()=>{s(f=>!f)};return r.jsxs(iB,{children:[r.jsx(sB,{}),r.jsxs(aB,{onClick:u,ref:l,children:[r.jsx(lB,{children:r.jsx(cB,{src:`${e==null?void 0:e.image}`})})," ",t?"Loading...":r.jsxs(dB,{children:[r.jsxs(uB,{children:[e&&e.username?e.username:"Guest"," "]}),r.jsxs(fB,{className:"email",children:[e&&e.email?e.email:"N/A"," "]})]})]})]})},iB=d.div`
  position: fixed;
  top: 0;
  right: 0;
  width: calc(100% - 250px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${y.grey_background};
  padding: 0 20px;
  z-index: 1;
  padding: 20px 0;
  padding-right: 20px;
`,sB=d.div`
  display: flex;
  align-items: center;
`,aB=d.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: default;
  svg {
    color: #fff;
    font-size: 20px;
    margin-left: 20px;
  }
`,lB=d.div`
  display: inline-block;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  outline: 1px dashed ${y.theme_red};
  outline-offset: 2px;
  background-color: #fff;
  overflow: hidden;
`,cB=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`,dB=d.div`
  /* display: grid;
  gap: 5px; */
`,uB=d.h3`
  font-weight: 600;
`,fB=d.p`
  font-size: 13px;
  color: ${y.placeholder_text};
  text-transform: lowercase;
`;function pB(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M5,16 C3.343,16 2,17.343 2,19 C2,20.657 3.343,22 5,22 C6.657,22 8,20.657 8,19 C8,17.343 6.657,16 5,16 L5,16 L5,16 Z M5,1 C14.925,1 23,9.075 23,19 L23,19 M18,19 C18,11.832 12.168,6 5,6 M13,19 C13,14.589 9.411,11 5,11 M2,11 L2,19 L2,19"},child:[]}]})(e)}function ha(e){return Be({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(e)}function Zh(e){return Be({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function Xh(e){return Be({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(e)}d.div`
  width: 250px;
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 2;
  transition: width 0.3s ease;
  background-color: ${y.dark_background};
`;d.h1`
  margin: 0 auto;
  border-bottom: 1px solid ${y.grey_border};
  padding: 16px 0;
  display: grid;
  justify-items: center;
`;d(ht)`
  cursor: pointer;
  display: flex;
  align-items: center;
  p {
    text-align: left;
    font-weight: 300;
    padding-right: 42px;
    margin-left: 10px;
    font-size: 12px;
    color: #646464;
  }
`;d.div`
  height: 50px;
  width: 180px;
`;d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;d.div`
  max-height: 800px;
  overflow: scroll;

  @media screen and (max-height: 800px) {
    max-height: 590px;
  }
`;d.div`
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`;d.div`
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${y.white};

  &.active {
    svg {
      color: ${y.theme_red};
    }
    background-color: ${y.black};
    color: ${y.white};
    position: relative;

    &::after,
    &::before {
      content: "";
      position: absolute;
      height: 50px;
      width: 20px;
      top: -50px;
      right: -2px;
      border-radius: 0 0 25px 0;
      z-index: -1;
    }

    &::before {
      top: auto;
      bottom: -50px;
      border-radius: 0 25px 0 0;
    }

    &::after {
      box-shadow: 0 25px 0 0 ${y.black};
    }

    &::before {
      box-shadow: 0 -25px 0 0 ${y.black};
    }
  }

  span {
    margin-left: 10px;
  }

  &:hover {
    color: #fdfff4; /* Optional hover behavior */
  }
`;d.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.4s ease;
  &.expand {
    margin: 5px 0;
    margin-left: 25px;
    max-height: 300px;
    overflow-y: auto;
    background-color: #484848;
  }
`;d(ht)`
  display: block;
  padding: 15px;
  color: ${y.white};
  font-size: 0.9rem;
  &.active {
    background-color: ${y.black}; /* Slightly lighter */
  }
`;d.div`
  color: #ffffff;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${y.theme_red}; /* Darker navy color */
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    opacity: 0.8;
  }
`;d.div`
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
`;d.div`
  height: 100%;
  max-width: 1px;
  overflow: visible;
  position: relative;
  left: ${({sideBarExpanded:e})=>e?"250px":"0"};
  transition: left 0.3s ease;
  /* display: none; */

  z-index: 1;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
  /* 
  @media screen and (max-width: 880px) {
    display: block;
  } */
`;d.div`
  background-color: ${y.primary_header};
  padding: 20px 10px;
  border-radius: 0 10px 10px 0;
  color: #fff;
  position: absolute;
  top: 50%;
  right: -30px;
  transform: translateY(-50%);
  display: none;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }
  @media screen and (max-width: 880px) {
    display: block;
  }
  @media screen and (max-width: 540px) {
    top: 60px;
    transform: unset;
    opacity: 0.7;
  }
`;d(ht)`
  margin-left: 30px;
  padding: 5px 0;
`;const hB=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",author:"",image:"",title:"",content:"",category:""}),[u,f]=x.useState([]),[p,h]=x.useState(!1),[g,b]=x.useState("");x.useEffect(()=>{i?(l({_id:"",author:"",image:"",title:"",content:"",category:""}),b("")):n&&(l({_id:n._id,author:n.author,image:n.image,title:n.title,content:n.content,category:n.category}),b(n.image))},[i,n]);const v=N=>{if(N.target.name==="image"){const V=N.target.files[0];if(V){const B=URL.createObjectURL(V);l({...s,image:V}),b(B)}}else l({...s,[N.target.name]:N.target.value})},j=async()=>{h(!0);try{const N=await ce.get("/categories");f(N.data.data),h(!1)}catch(N){h(!1),console.error("Error fetching faq data:",N)}};x.useEffect(()=>{j()},[]);const C=async N=>{N.preventDefault();try{const V=await ce.post("/blog",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(V.data.message),l({author:"",image:"",title:"",content:"",category:""}),b(""),e(),t()}catch(V){V.response&&V.response.data&&V.response.data.error?le(V.response.data.error):le("An unexpected error occurred")}},k=async N=>{N.preventDefault();try{const V=await ce.put(`/blog/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(V.data.message),l({author:"",image:"",title:"",content:"",category:""}),b(""),e(),t()}catch(V){V.response&&V.response.data&&V.response.data.error?le(V.response.data.error):le("An unexpected error occurred")}},_=()=>{b(""),l({...s,image:""})},E=u&&u.map(N=>N.title);return r.jsx(mB,{children:r.jsxs(gB,{children:[r.jsx(xB,{children:"Blog Form"}),r.jsxs(vB,{onSubmit:i?C:k,children:[r.jsxs(ma,{children:[g&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>_()}),r.jsx(yB,{src:g,alt:"Image Preview"})]}),r.jsx(ga,{children:"Image URL:"}),r.jsx(Jh,{type:"file",accept:"image/*",name:"image",onChange:v})]}),r.jsxs(ma,{children:[r.jsx(ga,{children:"Title:"}),r.jsx(Jh,{type:"text",name:"title",value:s.title,onChange:v,required:!0})]}),r.jsxs(ma,{children:[r.jsx(ga,{children:"Author:"}),r.jsx(Jh,{type:"text",name:"author",value:s.author,onChange:v})]}),r.jsxs(ma,{children:[r.jsx(ga,{children:"Content:"}),r.jsx(bB,{value:s.content,name:"content",onChange:v})]}),r.jsxs(ma,{children:[r.jsx(ga,{children:"Category:"}),r.jsxs(wB,{type:"text",name:"category",value:s.category,onChange:v,children:[r.jsx("option",{value:"",disabled:!0,children:"Select a option"}),E.map((N,V)=>r.jsx(r.Fragment,{children:r.jsx("option",{value:N,children:N},V)}))]})]}),r.jsx(jB,{type:"button",onClick:e,children:"Cancel"}),r.jsx(o4,{type:"submit",children:"Save Blog"})]})]})})},mB=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,gB=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,xB=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,vB=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,ma=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,yB=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,ga=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,Jh=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,bB=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,wB=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,o4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,jB=d(o4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;function SB(e){return Be({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#F44336",d:"M21.2,44.8l-18-18c-1.6-1.6-1.6-4.1,0-5.7l18-18c1.6-1.6,4.1-1.6,5.7,0l18,18c1.6,1.6,1.6,4.1,0,5.7l-18,18 C25.3,46.4,22.7,46.4,21.2,44.8z"},child:[]},{tag:"path",attr:{fill:"#fff",d:"M21.6,32.7c0-0.3,0.1-0.6,0.2-0.9c0.1-0.3,0.3-0.5,0.5-0.7c0.2-0.2,0.5-0.4,0.8-0.5s0.6-0.2,1-0.2 s0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.4,0.4,0.5,0.7c0.1,0.3,0.2,0.6,0.2,0.9s-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.7 c-0.2,0.2-0.5,0.4-0.8,0.5c-0.3,0.1-0.6,0.2-1,0.2s-0.7-0.1-1-0.2s-0.5-0.3-0.8-0.5c-0.2-0.2-0.4-0.4-0.5-0.7S21.6,33.1,21.6,32.7z M25.8,28.1h-3.6L21.7,13h4.6L25.8,28.1z"},child:[]}]})(e)}const it=({item:e,loading:t,closeModal:n,handleDelete:i})=>r.jsxs($B,{children:[r.jsx(CB,{onClick:n}),r.jsx(PB,{children:r.jsxs(EB,{children:[r.jsx(_B,{children:r.jsx(SB,{})}),r.jsx("h2",{children:"Are you sure?"}),r.jsxs("p",{children:["This action will delete all the details regarding this ",e,". ",r.jsx("br",{}),"You won't be able to revert this."]}),t&&r.jsx(TB,{children:"Loading..."}),r.jsxs(DB,{children:[r.jsx(D2,{onClick:n,className:"cancel",children:"Cancel"}),r.jsx(D2,{onClick:i,className:"delete",children:"Yes, Delete It"})]})]})})]}),kB=Ve`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,CB=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
`,$B=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`,PB=d.div`
  position: relative;
  z-index: 30;
`,EB=d.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: ${kB} 0.4s ease forwards;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
  }
`,_B=d.div`
  display: inline-block;
  background-color: #fce4ec;
  padding: 1rem;
  border-radius: 50%;
  margin-bottom: 1rem;

  svg {
    font-size: 2.5rem;
    color: #d32f2f;
  }
`,TB=d.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: 1rem;
`,DB=d.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`,D2=d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.delete {
    background-color: #d32f2f;
    color: #fff;
    border: none;

    &:hover {
      background-color: #b71c1c;
    }
  }

  &.cancel {
    background-color: #fff;
    color: #d32f2f;
    border: 1px solid #d32f2f;

    &:hover {
      background-color: #fce4ec;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
`,st=async(e,t)=>{try{const n=await ce.delete(`/${e}/${t}`);Ee(n.data.message||"Deleted successfully")}catch(n){le(n.response.data.error)}};function OB(e){return Be({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M7.99993 6.00316C9.47266 6.00316 10.6666 7.19708 10.6666 8.66981C10.6666 10.1426 9.47266 11.3365 7.99993 11.3365C6.52715 11.3365 5.33324 10.1426 5.33324 8.66981C5.33324 7.19708 6.52715 6.00316 7.99993 6.00316ZM7.99993 7.00315C7.07946 7.00315 6.33324 7.74935 6.33324 8.66981C6.33324 9.59028 7.07946 10.3365 7.99993 10.3365C8.9204 10.3365 9.6666 9.59028 9.6666 8.66981C9.6666 7.74935 8.9204 7.00315 7.99993 7.00315ZM7.99993 3.66675C11.0756 3.66675 13.7307 5.76675 14.4673 8.70968C14.5344 8.97755 14.3716 9.24908 14.1037 9.31615C13.8358 9.38315 13.5643 9.22041 13.4973 8.95248C12.8713 6.45205 10.6141 4.66675 7.99993 4.66675C5.38454 4.66675 3.12664 6.45359 2.50182 8.95555C2.43491 9.22341 2.16348 9.38635 1.89557 9.31948C1.62766 9.25255 1.46471 8.98115 1.53162 8.71321C2.26701 5.76856 4.9229 3.66675 7.99993 3.66675Z"},child:[]}]})(e)}const Ge=({handleDelete:e,handleEdit:t,handleView:n,noDelete:i=!1,noEdit:s=!1,view:l,none:u})=>r.jsxs(MB,{children:[l&&r.jsx(OB,{color:"#bfb600",onClick:n}),!i&&r.jsx(WF,{color:"#fb3e3e",onClick:e}),!s&&r.jsx(gV,{color:"#3e92ff",onClick:t})," "]}),MB=d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`,ct=({head:e,button:t,onClick:n,display:i})=>r.jsxs(AB,{children:[r.jsx(LB,{className:"red-head",children:e}),r.jsxs(zB,{onClick:n,display:i,children:[r.jsx(ii,{}),t]})]}),AB=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`,LB=d.div`
  color: ${y.white};
  padding: 22px 0;
`,zB=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  align-items: center;
  gap: 6px;
  display: ${({display:e})=>e?"none":"flex"};
  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,RB=()=>{const e=Ke(),[t,n]=x.useState([]),[i,s]=x.useState(!1),[l,u]=x.useState(!1),[f,p]=x.useState(null),[h,g]=x.useState(!1),[b,v]=x.useState(1),[j,C]=x.useState(6),[k,_]=x.useState(null),[E,N]=x.useState(null),[V,B]=x.useState(!0),[M,F]=x.useState({}),[A,R]=x.useState(null);x.useEffect(()=>{T()},[b]);const T=async()=>{s(!0);try{const I=await ce.get(`/blogs/?page=${b}&limit=${j}`);n(I.data.data.blogs),s(!1),_(I.data.data.totalPages)}catch(I){console.error("Error fetching Blog data:",I),s(!1)}},D=()=>{g(!0),B(!0)},z=()=>{g(!1),B(!0)},H=()=>{console.log("refresh"),T()},W=I=>{g(!0),N(I),B(!1)},Y=I=>{console.log("id",I),p(I),u(!0)},G=()=>{st("blog",f),u(!1),T()},X=I=>{const P=I.split(" ");return P.length>20?`${P.slice(0,15).join(" ")}...`:I},$=I=>{F(P=>({...P,[I]:!P[I]}))},J=I=>{e("/admin/blog/detail",{state:{data:I}})};return r.jsxs(NB,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Blogs",button:"Add New Blog",onClick:D}),r.jsxs(IB,{children:[i?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((I,P)=>r.jsx(dt,{width:350,height:300,borderRadius:10},P))}):t.length===0?r.jsx(UB,{children:"No data available"}):r.jsx(FB,{children:t.map((I,P)=>r.jsx(VB,{onMouseEnter:()=>R(P),onMouseLeave:()=>R(null),children:r.jsxs(BB,{children:[r.jsx("img",{src:`${I.image}`,alt:"Post"}),r.jsxs(HB,{className:A===P?"active":"",children:[r.jsxs("span",{children:[I.author," -"," ",I.createdAt?new Date(I.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"}):"November 20, 2024"]}),r.jsx("h4",{children:I.title}),r.jsxs(WB,{children:[r.jsx("p",{children:M[P]?I.content:X(I.content)})," ",I.content&&I.content.split(" ").length>15?r.jsx("span",{onClick:()=>$(P),children:M[P]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{view:!0,handleView:()=>J(I),handleEdit:()=>W(I),handleDelete:()=>Y(I._id)})]})]})},P))}),r.jsx(Ct,{initialPage:b,totalPages:k,getData:v})]})]}),h&&r.jsx(hB,{onRequestClose:z,refresh:H,editData:E,isNew:V}),l&&r.jsx(it,{loading:i,closeModal:()=>u(!1),item:"Blog",handleDelete:G})]})},NB=d.section`
  padding: 2rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const IB=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,FB=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,VB=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,BB=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,HB=d.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,WB=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,i4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(i4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(i4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const UB=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,qB="/assets/AdminPanelBg-CbFtunuj.jpg",YB=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState(null),[u,f]=x.useState([]),[p,h]=x.useState([]),[g,b]=x.useState(!1),[v,j]=x.useState({_id:"",question:"",section:"",sub_section:"",answers:""});x.useEffect(()=>{C()},[]);const C=async()=>{b(!0);try{const B=await ce.get("/industries",{params:{isNeedFull:!0}});l(B.data.data||[]),b(!1)}catch(B){b(!1),console.error("Error fetching Industry data:",B)}};x.useEffect(()=>{k()},[]);const k=async()=>{b(!0);try{const B=await ce.get("/usecasesub");f(B.data.data.data),b(!1)}catch(B){b(!1),console.error("Error fetching UseCase data:",B)}};x.useEffect(()=>{_()},[]);const _=async()=>{b(!0);try{const B=await ce.get("/platformsub");h(B.data.data.data),b(!1)}catch(B){b(!1),console.error("Error fetching Platform data:",B)}};x.useEffect(()=>{i?j({_id:"",question:"",section:"",sub_section:"",answers:""}):n&&j({_id:n._id,question:n.question,section:n.section,sub_section:n.sub_section,answers:n.answers})},[n,i]);const E=B=>{j({...v,[B.target.name]:B.target.value})},N=async B=>{B.preventDefault();try{const M=await ce.post("/faq",v);Ee(M.data.message),j({_id:"",question:"",section:"",sub_section:"",answers:""}),e(),t()}catch(M){M.response&&M.response.data&&M.response.data.error?le(M.response.data.error):le("An unexpected error occurred")}},V=async B=>{B.preventDefault();try{const M=await ce.put(`/faq/${v._id}`,v);console.log("Response:",M),M.data&&M.data.message?Ee(M.data.message):le("Unexpected response structure"),j({_id:"",question:"",section:"",sub_section:"",answers:""}),e(),await t()}catch(M){console.error("Error:",M),M.response&&M.response.data&&M.response.data.error?le(M.response.data.error):le("An unexpected error occurred")}};return r.jsx(GB,{children:r.jsxs(KB,{children:[r.jsx(QB,{children:"Faq Form"}),r.jsxs(ZB,{onSubmit:i?N:V,children:[r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Question:"}),r.jsx(O2,{type:"text",name:"question",value:v.question,onChange:E})]}),r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Answers:"}),r.jsx(O2,{type:"text",name:"answers",value:v.answers,onChange:E,required:!0})]}),r.jsxs(Fi,{children:[r.jsx(Vi,{children:"Section:"}),r.jsxs(Bc,{name:"section",value:v.section,onChange:E,children:[r.jsx("option",{value:"",children:"Select a section "}),r.jsx("option",{value:"industry",children:"Industry"}),r.jsx("option",{value:"usecase",children:"Use Case"}),r.jsx("option",{value:"platform",children:"Platform"}),r.jsx("option",{value:"bookademo",children:"Book A Demo"})]})]}),v.section==="industry"&&r.jsxs(Fi,{children:[r.jsx(Vi,{children:"sub section:"}),r.jsxs(Bc,{name:"sub_section",value:v.sub_section,onChange:E,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),s&&s.length>0?s.map(B=>r.jsx("option",{value:B.route,children:B.name},B._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),v.section==="usecase"&&r.jsxs(Fi,{children:[r.jsx(Vi,{children:"sub section:"}),r.jsxs(Bc,{name:"sub_section",value:v.sub_section,onChange:E,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),u&&u.length>0?u.map(B=>r.jsx("option",{value:B.route,children:B.name},B._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),v.section==="platform"&&r.jsxs(Fi,{children:[r.jsx(Vi,{children:"sub section:"}),r.jsxs(Bc,{name:"sub_section",value:v.sub_section,onChange:E,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),p&&p.length>0?p.map(B=>r.jsx("option",{value:B.route,children:B.name},B._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),r.jsx(XB,{type:"button",onClick:e,children:"Cancel"}),r.jsx(s4,{type:"submit",children:"Save Faq"})]})]})})},GB=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,KB=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,QB=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,ZB=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Fi=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const Vi=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,O2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,Bc=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const s4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,XB=d(s4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`;function JB(e){return Be({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12h14"},child:[]}]})(e)}const eH=()=>{const[e,t]=x.useState(null),[n,i]=x.useState([]),[s,l]=x.useState(!1),[u,f]=x.useState(!1),[p,h]=x.useState(null),[g,b]=x.useState(!1),[v,j]=x.useState(null),[C,k]=x.useState(!0),_=async()=>{l(!0);try{const R=await ce.get("/faqs");i(R.data.data),l(!1)}catch(R){l(!1),console.error("Error fetching faq data:",R)}};x.useEffect(()=>{_()},[]);const E=R=>{t(e===R?null:R)},N=()=>{b(!0),k(!0)},V=()=>{b(!1),k(!1),j(null)},B=()=>{console.log("refresh"),_()},M=R=>{b(!0),j(R),k(!1)},F=R=>{console.log("id",R),h(R),f(!0)},A=()=>{st("faq",p),f(!1),_()};return console.log("faq",n),r.jsxs(nH,{children:[r.jsx(ct,{head:"manage Faqs",button:"Add New Faq",onClick:N}),s?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"10px"},children:Array.from({length:5}).map((R,T)=>r.jsx(dt,{width:"100%",height:100,borderRadius:10},T))}):n.length===0?r.jsx(oH,{children:"No data available"}):n.map((R,T)=>r.jsxs(rH,{children:[r.jsxs(iH,{children:[r.jsxs("span",{children:[r.jsx("span",{children:"Q : "}),R.question]}),r.jsxs(lH,{children:[r.jsx(aH,{isOpen:e===T,children:e===T?r.jsx(JB,{onClick:()=>E(T)}):r.jsx(ii,{onClick:()=>E(T)})}),r.jsx(Ge,{handleDelete:()=>F(R._id),handleEdit:()=>M(R)})]})]}),e===T&&r.jsx(sH,{children:R.answers})]},T)),g&&r.jsx(YB,{onRequestClose:V,refresh:B,editData:v,isNew:C}),u&&r.jsx(it,{loading:s,closeModal:()=>f(!1),item:"Blog",handleDelete:A})]})},tH=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,nH=d.section`
  background-color: #000;
  color: #fff;
`;d.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;d.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;d.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
`;d.h1`
  text-align: center;
  margin-bottom: 2rem;
`;const rH=d.div`
  background-color: ${y.box_background};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
  animation: ${tH} 0.5s ease-out both;
`,oH=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,iH=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${y.white};
`,sH=d.div`
  padding: 1rem;
  background-color: ${y.grey_background};
  color: #fff;
  font-size: 0.9rem;
  border-top: 1px solid #444;
`,aH=d.div`
  font-size: 1.5rem;
  transform: ${({isOpen:e})=>"rotate(0deg)"};
  transition: transform 0.5s ease-in-out;
  color: #ff4500;
`,lH=d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`,a4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(a4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(a4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const cH=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({event:"",description:"",year:""});x.useEffect(()=>{l(n?{_id:n._id,event:n.event,description:n.description,year:n.year}:{_id:"",event:"",description:"",year:""})},[n,i]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/timeline",s);Ee(g.data.message),l({event:"",description:"",year:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/timeline/${s._id}`,s);Ee(g.data.message),l({_id:"",event:"",description:"",year:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(dH,{children:r.jsxs(uH,{children:[r.jsx(fH,{children:" Timeline"}),r.jsxs(pH,{onSubmit:i?f:p,children:[r.jsxs(em,{children:[r.jsx(tm,{children:"Event:"}),r.jsx(nm,{type:"text",name:"event",value:s.event,onChange:u})]}),r.jsxs(em,{children:[r.jsx(tm,{children:"Description:"}),r.jsx(nm,{type:"text",name:"description",value:s.description,onChange:u,required:!0})]}),r.jsxs(em,{children:[r.jsx(tm,{children:"Year:"}),r.jsx(nm,{type:"text",value:s.year,name:"year",onChange:u,required:!0})]}),r.jsx(hH,{type:"button",onClick:e,children:"Cancel"}),r.jsx(l4,{type:"submit",children:"Save Timeline"})]})]})})},dH=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,uH=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,fH=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,pH=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,em=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const tm=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,nm=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const l4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,hH=d(l4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,mH=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/timelines/?page=${g}&limit=${v}`);t(z.data.data.timelines),i(!1),k(z.data.data.totalPages)}catch(z){i(!1),console.error("Error fetching Timeline data:",z)}},M=()=>{h(!0),V(!0),E(null)},F=()=>{h(!1),V(!0)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("timeline",u),l(!1),B()};return r.jsxs(gH,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Timelines",button:"Add New Timelines",onClick:M}),r.jsxs(xH,{children:[n?r.jsx("div",{children:Array.from({length:6}).map((z,H)=>r.jsx(dt,{width:"100%",height:90,borderRadius:10},H))}):e.length===0?r.jsx(vH,{children:"No data available"}):r.jsx(yH,{children:e.map((z,H)=>r.jsxs(bH,{children:[r.jsx(jH,{children:z.year}),r.jsxs(wH,{children:[r.jsx("h4",{children:z.event}),r.jsx("p",{children:z.description})]}),r.jsx(Ge,{handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(cH,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Team",handleDelete:D})]})},gH=d.section`
  height: 100vh;
  overflow-y: scroll;
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const xH=d.div``,vH=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,yH=d.div`
  display: grid;
  gap: 1.5rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;const bH=d.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr 0.1fr;
  align-items: center;
  gap: 30px;
  background-color: ${y.box_background};
  padding: 10px 20px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,wH=d.div``,jH=d.h2`
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  color: ${y.theme_red};
  font-weight: bold;
  text-align: center;
`,c4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(c4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(c4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const SH=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({name:"",position:"",education:"",image:""}),[u,f]=x.useState("");x.useEffect(()=>{n?(l({_id:n._id,name:n.name,position:n.position,education:n.education,image:n.image}),f(n.image)):(l({_id:"",name:"",position:"",education:"",image:""}),f(""))},[n,i]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/team",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({name:"",position:"",education:"",image:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/team/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({_id:"",name:"",position:"",education:"",image:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(kH,{children:r.jsxs(CH,{children:[r.jsx($H,{children:"Save Team"}),r.jsxs(PH,{onSubmit:i?h:g,children:[r.jsxs(Hc,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(EH,{src:u,alt:"Image Preview"})]}),r.jsx(Wc,{children:"Image URL:"}),r.jsx(rm,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(Hc,{children:[r.jsx(Wc,{children:"Name:"}),r.jsx(rm,{type:"text",name:"name",value:s.name,onChange:p})]}),r.jsxs(Hc,{children:[r.jsx(Wc,{children:"Position:"}),r.jsx(rm,{type:"text",name:"position",value:s.position,onChange:p,required:!0})]}),r.jsxs(Hc,{children:[r.jsx(Wc,{children:"Education:"}),r.jsx(_H,{value:s.education,name:"education",onChange:p})]}),r.jsx(TH,{type:"button",onClick:e,children:"Cancel"}),r.jsx(d4,{type:"submit",children:"Save Team"})]})]})})},kH=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,CH=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,$H=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,PH=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Hc=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,EH=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Wc=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,rm=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,_H=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,d4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,TH=d(d4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,DH=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/teams/?page=${g}&limit=${v}`);i(!1),t(z.data.data.data),k(z.data.data.totalPages)}catch(z){i(!1),console.error("Error fetching Team data:",z)}},M=()=>{h(!0),V(!0),E(null)},F=()=>{h(!1),V(!0),E(null)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("Team",u),l(!1),B()};return r.jsxs(OH,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Teams",button:"Add New Teams",onClick:M}),r.jsxs(MH,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:Array.from({length:6}).map((z,H)=>r.jsx(dt,{width:"100%",height:150,borderRadius:10},H))}):e.length===0?r.jsx(AH,{children:"No data available"}):r.jsx(LH,{children:e.map((z,H)=>r.jsxs(zH,{className:"admin-page-box",children:[r.jsx(RH,{children:r.jsx("img",{src:z.image,alt:"Post"})}),r.jsxs(NH,{children:[r.jsx("h4",{children:z.name}),r.jsx("h6",{children:z.position}),r.jsx("p",{children:z.education}),r.jsx(Ge,{handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(SH,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Team",handleDelete:D})]})},OH=d.section`
  height: 100vh;
  overflow-y: scroll;
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const MH=d.div``;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;const AH=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,LH=d.div`
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,zH=d.div`
  position: relative;
  background-color: ${y.box_background};

  border-radius: 10px;
`,RH=d.div`
  height: 70px;
  width: 70px;
  background-color: ${y.box_background};
  padding: 5px;
  border-radius: 50%;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
`,NH=d.div`
  background-color: ${y.box_background};
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  h4 {
    font-size: 23px;
  }
  h6 {
    font-size: 17px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
  }
`,u4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(u4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(u4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const IH=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({name:"",image:"",description:""}),[u,f]=x.useState("");x.useEffect(()=>{n?l({_id:n._id,name:n.name,description:n.description,image:n.image}):i&&l({_id:"",question:"",answers:""})},[n,i]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/testimonial",s,{headers:{"Content-Type":"multipart/form-data"}});j.data&&j.data.message?Ee(j.data.message):le("Unexpected response structure"),l({name:"",image:"",description:""}),f(""),e(),await t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/testimonial/${s._id}`,s);console.log("Response:",j),j.data&&j.data.message?Ee(j.data.message):le("Unexpected response structure"),l({name:"",image:"",description:""}),e(),await t()}catch(j){console.error("Error:",j),j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(FH,{children:r.jsxs(VH,{children:[r.jsx(BH,{children:"Save Testimonial"}),r.jsxs(HH,{onSubmit:i?h:g,children:[r.jsxs(om,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(WH,{src:u,alt:"Image Preview"})]}),r.jsx(im,{children:"Image URL:"}),r.jsx(M2,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(om,{children:[r.jsx(im,{children:"Name:"}),r.jsx(M2,{type:"text",name:"name",value:s.name,onChange:p,required:!0})]}),r.jsxs(om,{children:[r.jsx(im,{children:"Description:"}),r.jsx(UH,{value:s.description,name:"description",onChange:p})]}),r.jsx(qH,{type:"button",onClick:e,children:"Cancel"}),r.jsx(f4,{type:"submit",children:"Save Testimonial"})]})]})})},FH=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,VH=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,BH=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,HH=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,om=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,WH=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,im=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,M2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,UH=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,f4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,qH=d(f4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,YH=()=>{const[e,t]=x.useState(1),[n,i]=x.useState(6),[s,l]=x.useState(null),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState([]),[v,j]=x.useState(!1),[C,k]=x.useState(!1),[_,E]=x.useState(null),[N,V]=x.useState(!0),[B,M]=x.useState({}),F=async()=>{j(!0);try{const G=await ce.get(`/testimonials/?page=${e}&limit=${n}`);b(G.data.data.data),j(!1),l(G.data.data.totalPages)}catch(G){j(!1),console.error("Error fetching Testimonial data:",G)}};x.useEffect(()=>{F()},[e]);const A=()=>{k(!0),V(!0)},R=()=>{k(!1),V(!1),E(null)},T=()=>{console.log("refresh"),F()},D=G=>{k(!0),E(G),V(!1)},z=G=>{console.log("id",G),f(G),h(!0)},H=()=>{st("testimonial",u),h(!1),F()},W=G=>{const X=G.split(" ");return X.length>20?`${X.slice(0,15).join(" ")}...`:G},Y=G=>{M(X=>({...X,[G]:!X[G]}))};return r.jsxs(GH,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Testimonials",button:"Add New Testimonials",onClick:A}),r.jsxs(KH,{children:[v?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"10px"},children:Array.from({length:6}).map((G,X)=>r.jsx(dt,{width:"100%",height:150,borderRadius:10},X))}):g.length===0?r.jsx(QH,{children:"No data available"}):r.jsx(ZH,{children:g.map((G,X)=>r.jsxs(XH,{className:"admin-page-box",children:[r.jsx(JH,{children:r.jsx("img",{src:`${G.image}`,alt:"Post"})}),r.jsxs(eW,{children:[r.jsx("h4",{children:G.name}),r.jsxs(tW,{children:[r.jsx("p",{children:B[X]?G.description:W(G.description)})," ",G.description&&G.description.split(" ").length>15?r.jsx("span",{onClick:()=>Y(X),children:B[X]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{handleEdit:()=>D(G),handleDelete:()=>z(G._id)})]})]},G._id))}),r.jsx(Ct,{initialPage:e,totalPages:s,getData:t})]})]}),C&&r.jsx(IH,{onRequestClose:R,refresh:T,editData:_,isNew:N}),p&&r.jsx(it,{loading:v,closeModal:()=>h(!1),item:"Testimonial",handleDelete:H})]})},GH=d.section``;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;const KH=d.div``,QH=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,ZH=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,XH=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`,JH=d.div`
  position: absolute;
  top: -30px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`,eW=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
`,tW=d.div`
  height: 100px;
  overflow: scroll;
  p {
    font-size: 14px;
    margin: 10px 0;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,p4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(p4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(p4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const nW=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",section:"",image:"",title:"",description:""}),[u,f]=x.useState("");x.useEffect(()=>{i?(l({_id:"",section:"",image:"",title:"",description:""}),f("")):n&&(l({_id:n._id,section:n.section,image:n.image,title:n.title,description:n.description}),f(n.image))},[n,i]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/banner",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({section:"",image:"",title:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/banner/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({section:"",image:"",title:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(rW,{children:r.jsxs(oW,{children:[r.jsx(iW,{children:"Banner Form"}),r.jsxs(sW,{onSubmit:i?h:g,children:[r.jsxs(Uc,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(aW,{src:u,alt:"Image Preview"})]}),r.jsx(qc,{children:"Image URL:"}),r.jsx(A2,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(Uc,{children:[r.jsx(qc,{children:"Section:"}),r.jsxs(lW,{type:"text",name:"section",value:s.section,onChange:p,children:[r.jsx("option",{value:"",children:"Select a section"}),r.jsx("option",{value:"home",children:"Home"}),r.jsx("option",{value:"whoweare",children:"Who We Are"})]})]}),r.jsxs(Uc,{children:[r.jsx(qc,{children:"Title:"}),r.jsx(A2,{type:"text",name:"title",value:s.title,onChange:p,required:!0})]}),r.jsxs(Uc,{children:[r.jsx(qc,{children:"Description:"}),r.jsx(cW,{value:s.description,name:"description",onChange:p})]}),r.jsx(dW,{type:"button",onClick:e,children:"Cancel"}),r.jsx(h4,{type:"submit",children:"Save Banner"})]})]})})},rW=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,oW=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,iW=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,sW=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Uc=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,aW=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,qc=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,A2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,lW=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,cW=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,h4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,dW=d(h4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,uW=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0),[B,M]=x.useState({}),[F,A]=x.useState(null);x.useEffect(()=>{R()},[]);const R=async()=>{i(!0);try{const $=await ce.get(`/banners/?page=${g}&limit=${v}`);t($.data.data.data),i(!1),k($.data.data.totalPages)}catch($){console.error("Error fetching Banner data:",$),i(!1)}},T=()=>{h(!0),V(!0)},D=()=>{h(!1),V(!0)},z=()=>{console.log("refresh"),R()},H=$=>{h(!0),E($),V(!1)},W=$=>{console.log("id",$),f($),l(!0)},Y=()=>{st("banner",u),l(!1),R()},G=$=>{const J=$.split(" ");return J.length>20?`${J.slice(0,15).join(" ")}...`:$},X=$=>{M(J=>({...J,[$]:!J[$]}))};return r.jsxs(fW,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Banners",button:"Add New Banner",onClick:T}),r.jsxs(pW,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map(($,J)=>r.jsx(dt,{width:350,height:300,borderRadius:10},J))}):e.length===0?r.jsx(yW,{children:"No data available"}):r.jsx(hW,{children:e.map(($,J)=>r.jsx(mW,{onMouseEnter:()=>A(J),onMouseLeave:()=>A(null),children:r.jsxs(gW,{children:[r.jsx("img",{src:`${$.image}`,alt:"Post"}),r.jsxs(xW,{className:F===J?"active":"",children:[r.jsx("span",{children:$.section}),r.jsx("h4",{children:$.title}),r.jsxs(vW,{children:[r.jsx("p",{children:B[J]?$.description:G($.description)})," ",$.description&&$.description.split(" ").length>15?r.jsx("span",{onClick:()=>X(J),children:B[J]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{handleEdit:()=>H($),handleDelete:()=>W($._id)})]})]})},J))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(nW,{onRequestClose:D,refresh:z,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Banner",handleDelete:Y})]})},fW=d.section`
  padding: 2rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const pW=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,hW=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */
`,mW=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,gW=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,xW=d.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,vW=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${y.black};
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,m4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(m4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(m4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const yW=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,bW=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",title:"",description:"",section:"",sub_section:"",image:""}),[u,f]=x.useState(""),[p,h]=x.useState(null),[g,b]=x.useState([]),[v,j]=x.useState([]),[C,k]=x.useState(!1);x.useEffect(()=>{N()},[]),x.useEffect(()=>{_()},[]);const _=async()=>{k(!0);try{const A=await ce.get("/usecasesub");b(A.data.data.data),k(!1)}catch(A){k(!1),console.error("Error fetching UseCase data:",A)}};x.useEffect(()=>{E()},[]);const E=async()=>{k(!0);try{const A=await ce.get("/platformsub");j(A.data.data.data),k(!1)}catch(A){k(!1),console.error("Error fetching Platform data:",A)}},N=async()=>{k(!0);try{const A=await ce.get("/industries",{params:{isNeedFull:!0}});h(A.data.data||[]),k(!1)}catch(A){k(!1),console.error("Error fetching Industry data:",A)}};x.useEffect(()=>{i?(l({_id:"",title:"",description:"",section:"",sub_section:"",image:""}),f("")):n&&(l({_id:n._id,title:n.title,description:n.description,section:n.section,sub_section:n.section,image:n.image}),f(n.image))},[n,i]);const V=A=>{if(A.target.name==="image"){const R=A.target.files[0];if(R){const T=URL.createObjectURL(R);l({...s,image:R}),f(T)}}else l({...s,[A.target.name]:A.target.value})},B=async A=>{A.preventDefault();try{const R=await ce.post("/casestudy",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(R.data.message),l({_id:"",title:"",description:"",section:"",sub_section:"",image:""}),f(""),e(),t()}catch(R){R.response&&R.response.data&&R.response.data.error?le(R.response.data.error):le("An unexpected error occurred")}},M=async A=>{A.preventDefault();try{const R=await ce.put(`/casestudy/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(R.data.message),l({_id:"",title:"",description:"",image:"",section:"",sub_section:""}),f(""),e(),t()}catch(R){R.response&&R.response.data&&R.response.data.error?le(R.response.data.error):le("An unexpected error occurred")}},F=()=>{f(""),l({...s,image:""})};return r.jsx(wW,{children:r.jsxs(jW,{children:[r.jsx(SW,{children:"CaseStudy Form"}),r.jsxs(kW,{onSubmit:i?B:M,children:[r.jsxs(No,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>F()}),r.jsx(CW,{src:u,alt:"Image Preview"})]}),r.jsx(Io,{children:"Image URL:"}),r.jsx(L2,{type:"file",accept:"image/*",name:"image",onChange:V})]}),r.jsxs(No,{children:[r.jsx(Io,{children:"Section:"}),r.jsxs(Yc,{name:"section",value:s.section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a section"}),r.jsx("option",{value:"global",children:"Global"}),r.jsx("option",{value:"industry",children:"Industry"}),r.jsx("option",{value:"usecase",children:"UseCase"}),r.jsx("option",{value:"platform",children:"Platform"})]})]}),s.section==="industry"&&r.jsxs(No,{children:[r.jsx(Io,{children:"sub section:"}),r.jsxs(Yc,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),p&&p.length>0?p.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),s.section==="usecase"&&r.jsxs(No,{children:[r.jsx(Io,{children:"sub section:"}),r.jsxs(Yc,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),g&&g.length>0?g.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),s.section==="platform"&&r.jsxs(No,{children:[r.jsx(Io,{children:"sub section:"}),r.jsxs(Yc,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),v&&v.length>0?v.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),r.jsxs(No,{children:[r.jsx(Io,{children:"Title:"}),r.jsx(L2,{type:"text",name:"title",value:s.title,onChange:V,required:!0})]}),r.jsxs(No,{children:[r.jsx(Io,{children:"Description:"}),r.jsx($W,{value:s.description,name:"description",onChange:V})]}),r.jsx(PW,{type:"button",onClick:e,children:"Cancel"}),r.jsx(g4,{type:"submit",children:"Save CaseStudy"})]})]})})},wW=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,jW=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,SW=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,kW=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,No=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,CW=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Io=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,L2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,Yc=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
`,$W=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,g4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,PW=d(g4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,EW=()=>{const e=Ke(),[t,n]=x.useState([]),[i,s]=x.useState(!1),[l,u]=x.useState(!1),[f,p]=x.useState(null),[h,g]=x.useState(!1),[b,v]=x.useState(1),[j,C]=x.useState(6),[k,_]=x.useState(null),[E,N]=x.useState(null),[V,B]=x.useState(!0),[M,F]=x.useState({}),[A,R]=x.useState(null),[T,D]=x.useState(null);x.useEffect(()=>{z()},[b,A]);const z=async()=>{s(!0);try{const Q=await ce.get(`/casestudies/?page=${b}&limit=${j}`,{params:{type:A}});n(Q.data.data.data),_(Q.data.data.totalPages),s(!1)}catch(Q){s(!1),console.error("Error fetching CaseStudy data:",Q)}};x.useEffect(()=>{H()},[]);const H=async()=>{s(!0);try{const Q=await ce.get("/industries",{params:{isNeedFull:!0}});D(Q.data.data||[]),s(!1)}catch(Q){s(!1),console.error("Error fetching Industry data:",Q)}},W=()=>{g(!0),B(!0)},Y=()=>{g(!1),B(!1),N(null)},G=()=>{console.log("refresh"),z()},X=Q=>{g(!0),N(Q),B(!1)},$=Q=>{p(Q),u(!0)},J=()=>{st("casestudy",f),u(!1),z()},I=Q=>{R(Q.target.value)},P=Q=>{const ee=Q.split(" ");return ee.length>20?`${ee.slice(0,15).join(" ")}...`:Q},O=Q=>{F(ee=>({...ee,[Q]:!ee[Q]}))},U=Q=>{e("/admin/casestudies/detail",{state:{data:Q}})};return console.log("caseStudy",t),r.jsxs(_W,{children:[r.jsxs("div",{children:[r.jsxs("div",{className:"grid grid-cols-3 items-center",children:[r.jsx(TW,{className:"red-head",children:"Manage Case Study"}),r.jsxs(DW,{name:"section",value:A,onChange:I,children:[r.jsx("option",{value:"",children:"Select a section"}),r.jsx("option",{value:"airliner",children:"Airliner"}),r.jsx("option",{value:"logistics",children:"Logistics"}),r.jsx("option",{value:"banking",children:"Banking"}),r.jsx("option",{value:"retail",children:"Retail"}),r.jsx("option",{value:"utilities",children:"Utilities"}),r.jsx("option",{value:"education",children:"Education"}),r.jsx("option",{value:"health",children:"Health"}),r.jsx("option",{value:"manufacture",children:"Manufacturing"}),r.jsx("option",{value:"cooperations",children:"Co-Operations"}),r.jsx("option",{value:"realestate",children:"Real Estate"})]}),r.jsx(ct,{button:"Add Case Study",onClick:W})]}),r.jsxs(OW,{children:[i?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((Q,ee)=>r.jsx(dt,{width:350,height:350,borderRadius:10},ee))}):t.length===0?r.jsx(zW,{children:"No data available"}):r.jsx(MW,{children:t.map((Q,ee)=>r.jsxs(AW,{className:"admin-page-box",children:[r.jsx("img",{src:Q.image?Q.image:"https://picsum.photos/300/400?3",alt:"Post"}),r.jsxs("div",{className:"content",children:[r.jsxs("div",{children:[r.jsx("h4",{children:Q.title}),r.jsxs("h5",{children:[Q.section?Q.section:"Global"," -",Q.sub_section&&Q.sub_section]})]}),r.jsxs(LW,{children:[r.jsx("p",{children:M[ee]?Q.description:P(Q.description)})," ",Q.description&&Q.description.split(" ").length>15?r.jsx("span",{onClick:()=>O(ee),children:M[ee]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{view:!0,handleView:()=>U(Q),handleEdit:()=>X(Q),handleDelete:()=>$(Q._id)})]})]},ee))}),r.jsx(Ct,{initialPage:b,totalPages:k,getData:v})]})]}),h&&r.jsx(bW,{onRequestClose:Y,refresh:G,editData:E,isNew:V}),l&&r.jsx(it,{loading:i,closeModal:()=>u(!1),item:"Case Study",handleDelete:J})]})},_W=d.section``;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const TW=d.div`
  color: ${y.white};
  padding: 22px 0;
`,DW=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
`,OW=d.div``,MW=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,AW=d.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
  .content {
    border-radius: 0 0 7px 7px;
    padding: 1rem;
    background-color: ${y.box_background};

    h4 {
      font-size: 1.2rem;

      margin-bottom: 0.5rem;
    }
  }
`,LW=d.div`
  height: 100px;
  overflow: scroll;
  p {
    font-size: 14px;
    margin: 10px 0;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,x4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,zW=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(x4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(x4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const RW=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:null,name:"",description:"",image:""}),[u,f]=x.useState("");x.useEffect(()=>{n?(l({_id:n._id,name:n.name,description:n.description,image:n.image}),f(n.image)):(l({_id:null,name:"",description:"",image:""}),f(""))},[n,i]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/client",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({_id:null,name:"",description:"",image:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/client/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({author:"",image:"",title:"",content:"",category:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(NW,{children:r.jsxs(IW,{children:[r.jsx(FW,{children:"Save Client"}),r.jsxs(VW,{onSubmit:i?h:g,children:[r.jsxs(sm,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(BW,{src:u,alt:"Image Preview"})]}),r.jsx(am,{children:"Image URL:"}),r.jsx(z2,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(sm,{children:[r.jsx(am,{children:"Name:"}),r.jsx(z2,{type:"text",name:"name",value:s.name,onChange:p})]}),r.jsxs(sm,{children:[r.jsx(am,{children:"Description:"}),r.jsx(HW,{value:s.description,name:"description",onChange:p})]}),r.jsx(WW,{type:"button",onClick:e,children:"Cancel"}),r.jsx(v4,{type:"submit",children:"Save Client"})]})]})})},NW=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,IW=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,FW=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,VW=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,sm=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,BW=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,am=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,z2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,HW=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,v4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,WW=d(v4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,UW=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/clients/?page=${g}&limit=${v}`);t(z.data.data.data),k(z.data.data.totalPages),i(!1)}catch(z){i(!1),console.error("Error fetching Client data:",z)}},M=()=>{h(!0),V(!0)},F=()=>{h(!1),V(!1),E(null)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("client",u),l(!1),B()};return r.jsxs(qW,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage client",button:"Add Client",onClick:M}),r.jsxs(YW,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((z,H)=>r.jsx(dt,{width:350,height:350,borderRadius:10},H))}):e.length===0?r.jsx(QW,{children:"No data available"}):r.jsx(GW,{children:e.map((z,H)=>r.jsxs(KW,{children:[r.jsx("img",{src:z.image?z.image:"https://picsum.photos/300/400?3",alt:"Post"}),r.jsxs("div",{className:"content",children:[r.jsx("h4",{children:z.name}),r.jsx("p",{children:z.description})]}),r.jsx(Ge,{handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(RW,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Client",handleDelete:D})]})},qW=d.section`
  height: 100vh;
  overflow-y: scroll;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const YW=d.div``,GW=d.div`
  display: grid;
  gap: 30px;
`,KW=d.div`
  display: grid;
  grid-template-columns: 0.3fr 2fr 0.1fr; /* Default for large screens */
  align-items: center;
  gap: 20px;
  padding: 20px 30px;
  border-radius: 10px;

  background-color: ${y.box_background};
  img {
    height: 100px;
    width: 200px;
    object-fit: contain;
    display: block;
  }
`,y4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,QW=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(y4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(y4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const ZW=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",description:"",image:"",card:[{count:0,description:""},{count:0,description:""}]}),[u,f]=x.useState("");x.useEffect(()=>{n&&(l(n),f(n.image))},[n]);const p=(v,j)=>{l(C=>({...C,[v]:j}))},h=(v,j,C)=>{const k=[...s.card];k[v][j]=C,l(_=>({..._,card:k}))},g=v=>{const j=v.target.files[0];if(j){const C=new FileReader;C.onloadend=()=>{f(C.result),l(k=>({...k,image:j}))},C.readAsDataURL(j)}},b=async v=>{var j,C;v.preventDefault();try{const k=i?"/whoweare":`/whoweare/${s._id}`,E=await(i?ce.post:ce.put)(k,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(E.data.message||"Operation successful!"),e(),t()}catch(k){le(((C=(j=k.response)==null?void 0:j.data)==null?void 0:C.error)||"An unexpected error occurred")}};return console.log(s),r.jsx(XW,{children:r.jsxs(JW,{children:[r.jsx(eU,{children:i?"Add Who We Are":"Edit Who We Are"}),r.jsxs(tU,{onSubmit:b,children:[r.jsxs(Gc,{children:[r.jsx("label",{children:"Description:"}),r.jsx(R2,{value:s.description,onChange:v=>p("description",v.target.value),rows:"4",required:!0})]}),r.jsxs(Gc,{children:[r.jsx("label",{children:"Image:"}),u&&r.jsxs(oU,{children:[r.jsx("img",{src:u,alt:"Preview"}),r.jsx("button",{type:"button",onClick:()=>f(""),children:"Remove"})]}),r.jsx("input",{type:"file",onChange:g})]}),r.jsx("h3",{children:"Cards"}),s.card.map((v,j)=>r.jsxs(nU,{children:[r.jsxs(Gc,{children:[r.jsx("label",{children:"Count:"}),r.jsx(sU,{type:"number",value:v.count,onChange:C=>h(j,"count",C.target.value),required:!0})]}),r.jsxs(Gc,{children:[r.jsx("label",{children:"Description:"}),r.jsx(R2,{value:v.description,onChange:C=>h(j,"description",C.target.value),rows:"2",required:!0})]})]},j)),r.jsx(iU,{type:"button",onClick:e,children:"Cancel"}),r.jsx(rU,{type:"submit",children:i?"Submit":"Update"})]})]})})},XW=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,JW=d.div`
  background-color: #1e1e2f;
  color: ${y.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
`,eU=d.h2`
  color: ${y.primary||"#27ab99"};
  margin-bottom: 20px;
  text-align: center;
`,tU=d.form`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Gc=d.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`,nU=d.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`,rU=d.button`
  background-color: ${y.primary||"#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`,oU=d.div`
  margin-bottom: 10px;
  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`,iU=d.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #d32f2f;
  }
`,sU=d.input`
  background-color: transparent;
`,R2=d.textarea`
  background-color: transparent;
`,aU=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useState(!1),x.useState(null);const[s,l]=x.useState(!1),[u,f]=x.useState(1);x.useState(6),x.useState(null);const[p,h]=x.useState(null),[g,b]=x.useState(!0);x.useEffect(()=>{v()},[u]);const v=async()=>{i(!0);try{const E=await ce.get("/whoweare");t(E.data.data),i(!1)}catch(E){i(!1),console.error("Error fetching Client data:",E)}},j=()=>{l(!0),b(!0)},C=()=>{l(!1),b(!1),h(null)},k=()=>{console.log("refresh"),v()},_=E=>{l(!0),h(E),b(!1)};return r.jsxs(lU,{children:[r.jsxs("div",{className:"container",children:[r.jsxs(cU,{children:[r.jsx("h1",{children:"Manage Who we are"}),e.length>0?null:r.jsxs(SU,{onClick:j,children:[r.jsx(ii,{}),"Add Client"]})]}),n?"Loading...":e.length===0?r.jsx(dU,{children:"No data available"}):r.jsx(r.Fragment,{children:r.jsx(uU,{children:e.map((E,N)=>r.jsxs(fU,{children:[r.jsxs("div",{style:{width:"100%"},children:[r.jsx(mU,{children:r.jsx(xU,{children:E.description})}),r.jsx(gU,{children:E.card.map((V,B)=>r.jsxs(vU,{children:[r.jsx(yU,{children:r.jsx(bU,{children:V.count})}),r.jsx(wU,{children:r.jsx(jU,{children:V.description})})]},B))})]}),r.jsx(pU,{children:r.jsx(hU,{src:E.image,alt:`Who We Are ${N+1}`})}),e.length>0?r.jsx(Ge,{handleEdit:()=>_(E)}):null]},N))})})]}),s&&r.jsx(ZW,{onRequestClose:C,refresh:k,editData:p,isNew:g})]})},lU=d.section``,cU=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const dU=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,uU=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`,fU=d.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  overflow: hidden;

  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 0;
`,pU=d.div`
  width: 300px;
  height: 200px;
  display: flex;
  border: 1px solid rgba(255, 255, 255);
`,hU=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,mU=d.div`
  margin-top: 1rem;
`,gU=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`,xU=d.p`
  font-size: 1.2rem;
  color: ${y.white};
  margin: 0;
`,vU=d.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-color: ${y.grey_background};
  padding: 10px 30px;
`,yU=d.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.white};
  margin-right: 1rem;
`,bU=d.span``,wU=d.div`
  flex: 1;
`,jU=d.p`
  font-size: 1rem;
  color: ${y.white};
  margin: 0;
`,b4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(b4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(b4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const SU=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,w4=x.createContext(),j4=()=>x.useContext(w4),kU=({children:e})=>{const[t,n]=x.useState(!1),[i,s]=x.useState(null),l=async()=>{n(!0);try{const u=await ce.get("/industries",{params:{isNeedFull:!0}});console.log("data",u.data.data),s(u.data.data)}catch(u){console.error("Error fetching industrys:",u)}finally{n(!1)}};return r.jsx(w4.Provider,{value:{industryData:i,loading:t,fetchIndustryData:l},children:e})},CU=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",title:"",description:"",section:"",sub_section:"",image:""}),[u,f]=x.useState(""),{industryData:p,fetchIndustryData:h}=j4();x.useEffect(()=>{h()},[]),x.useEffect(()=>{i?(l({_id:"",description:"",section:"",sub_section:"",image:""}),f("")):n&&(l({_id:n._id,title:n.title,description:n.description,section:n.section,sub_section:n.sub_section,image:n.image}),f(n.image))},[n,i]);const g=C=>{if(C.target.name==="image"){const k=C.target.files[0];if(k){const _=URL.createObjectURL(k);l({...s,image:k}),f(_)}}else l({...s,[C.target.name]:C.target.value})},b=async C=>{C.preventDefault();try{const k=await ce.post("/casesection",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(k.data.message),l({_id:"",description:"",section:"",sub_section:"",image:""}),f(""),e(),t()}catch(k){k.response&&k.response.data&&k.response.data.error?le(k.response.data.error):le("An unexpected error occurred")}},v=async C=>{C.preventDefault();try{const k=await ce.put(`/casesection/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(k.data.message),l({_id:"",description:"",section:"",sub_section:"",image:""}),f(""),e(),t()}catch(k){k.response&&k.response.data&&k.response.data.error?le(k.response.data.error):le("An unexpected error occurred")}},j=()=>{f(""),l({...s,image:""})};return r.jsx($U,{children:r.jsxs(PU,{children:[r.jsx(EU,{children:"CaseSection Form"}),r.jsxs(_U,{onSubmit:i?b:v,children:[r.jsxs(Kc,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>j()}),r.jsx(TU,{src:u,alt:"Image Preview"})]}),r.jsx(Qc,{children:"Image URL:"}),r.jsx(DU,{type:"file",accept:"image/*",name:"image",onChange:g})]}),r.jsxs(Kc,{children:[r.jsx(Qc,{children:"Description:"}),r.jsx(OU,{value:s.description,name:"description",onChange:g})]}),r.jsxs(Kc,{children:[r.jsx(Qc,{children:"section:"}),r.jsxs(N2,{name:"section",value:s.section,onChange:g,children:[r.jsx("option",{value:"",children:"Select a section "}),r.jsx("option",{value:"home",children:"Home"}),r.jsx("option",{value:"industry",children:"Industry"})]})]}),s.section==="industry"&&r.jsxs(Kc,{children:[r.jsx(Qc,{children:"sub section:"}),r.jsxs(N2,{name:"sub_section",value:s.sub_section,onChange:g,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),p&&p.length>0?p.map(C=>r.jsx("option",{value:C.route,children:C.name},C._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),r.jsx(MU,{type:"button",onClick:e,children:"Cancel"}),r.jsx(S4,{type:"submit",children:"Save CaseSection"})]})]})})},$U=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,PU=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,EU=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,_U=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Kc=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,TU=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Qc=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,DU=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,OU=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,S4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,MU=d(S4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,N2=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,I2=()=>{const e=Ke(),[t,n]=x.useState([]),[i,s]=x.useState(!1),[l,u]=x.useState(!1),[f,p]=x.useState(null),[h,g]=x.useState(!1),[b,v]=x.useState(1),[j,C]=x.useState(6),[k,_]=x.useState(null),[E,N]=x.useState(null),[V,B]=x.useState(!0),[M,F]=x.useState({});x.useEffect(()=>{A()},[b]);const A=async()=>{s(!0);try{const $=await ce.get(`/casesections/?page=${b}&limit=${j}`);n($.data.data.caseSections),s(!1),_($.data.data.totalPages)}catch($){console.error("Error fetching CaseSection data:",$),s(!1)}},R=()=>{g(!0),B(!0)},T=()=>{g(!1),B(!0)},D=()=>{console.log("refresh"),A()},z=$=>{g(!0),N($),B(!1)},H=$=>{console.log("id",$),p($),u(!0)},W=()=>{st("casesection",f),u(!1),A()},Y=$=>{const J=$.split(" ");return J.length>20?`${J.slice(0,15).join(" ")}...`:$},G=$=>{F(J=>({...J,[$]:!J[$]}))},X=$=>{e("/admin/casesection/detail",{state:{data:$}})};return r.jsxs(AU,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Case Sections",button:"Add New Case Section",onClick:R}),r.jsxs(LU,{children:[i?r.jsx(F2,{children:Array.from({length:6}).map(($,J)=>r.jsx(dt,{width:350,height:300,borderRadius:10},J))}):t.length===0?r.jsx(IU,{children:"No data available"}):r.jsx(F2,{children:t.map(($,J)=>r.jsxs(zU,{className:"admin-page-box",children:[r.jsx(NU,{children:r.jsx("img",{src:`${$.image}`,alt:"Post"})}),r.jsxs("div",{className:"content",children:[r.jsxs(RU,{children:[r.jsx("p",{children:M[J]?$.description:Y($.description)})," ",$.description&&$.description.split(" ").length>15?r.jsx("span",{onClick:()=>G(J),children:M[J]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{view:!0,handleView:()=>X($),handleEdit:()=>z($),handleDelete:()=>H($._id)})]})]},J))}),r.jsx(Ct,{initialPage:b,totalPages:k,getData:v})]})]}),h&&r.jsx(CU,{onRequestClose:T,refresh:D,editData:E,isNew:V}),l&&r.jsx(it,{loading:i,closeModal:()=>u(!1),item:"CaseSection",handleDelete:W})]})},AU=d.section``;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const LU=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;d.div``;const F2=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */
  @media screen and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr); /* Small screen columns */
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(1, 1fr); /* Small screen columns */
  }
`,zU=d.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    border-radius: 0 0 7px 7px;
    padding: 1rem;
    background-color: ${y.box_background};

    h4 {
      font-size: 1.2rem;
      color: ${y.black};
      margin-bottom: 0.5rem;
    }
  }
`,RU=d.div`
  height: 150px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: ${y.white};
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,NU=d.div`
  height: 150px;
  width: 100%;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;const IU=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,FU=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(1),[u,f]=x.useState(10),[p,h]=x.useState(null);x.useEffect(()=>{g()},[s]);const g=async()=>{i(!0);try{const v=await ce.get(`/contacts/?page=${s}&limit=${u}`);t(v.data.data.contacts),i(!1),h(v.data.data.totalPages)}catch(v){console.error("Error fetching Contact data:",v),i(!1)}};console.log(e);const b=v=>{const j={year:"numeric",month:"long",day:"numeric"};return new Date(v).toLocaleDateString("en-US",j)};return r.jsxs("div",{children:[r.jsx(VU,{className:"sub-head",children:"Contact Enquiries"}),r.jsxs(BU,{children:[r.jsx(WU,{children:r.jsxs(V2,{children:[r.jsx(Fo,{children:"ID"}),r.jsx(Fo,{children:"Name"}),r.jsx(Fo,{children:"Email"}),r.jsx(Fo,{children:"Company"}),r.jsx(Fo,{children:"Mobile"}),r.jsx(Fo,{children:"Date"}),r.jsx(Fo,{children:"Message"})]})}),r.jsx(HU,{children:n?r.jsx(io,{colSpan:7,children:Array.from({length:6}).map((v,j)=>r.jsx(dt,{width:"100%",height:70,borderRadius:10},j))}):e.length===0?r.jsx(UU,{children:"No data available"}):r.jsx(r.Fragment,{children:e.map((v,j)=>r.jsxs(V2,{children:[r.jsxs(io,{children:[" ",(s-1)*u+j+1]}),r.jsx(io,{children:v.name}),r.jsx(io,{children:v.email}),r.jsx(io,{children:v.company}),r.jsx(io,{children:v.mobile}),r.jsx(io,{children:v.date?b(v.date):"N/A"}),r.jsx(io,{children:v.message})]},j))})})]}),r.jsx(Ct,{initialPage:s,totalPages:p,getData:l})]})},VU=d.h3``,BU=d.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 2rem;
  background-color: ${y.grey_background};
  border-radius: 10px;
`,HU=d.thead``,V2=d.tr`
  background-color: ${y.grey_background};
  border-bottom: 1px solid ${y.grey_border};

  &:nth-child(even) {
    background-color: ${y.box_background};
  }
`,WU=d.thead``,Fo=d.th`
  background-color: ${y.box_background};
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid ${y.grey_border};
`,io=d.td`
  font-weight: 400;
  padding: 10px;
  text-align: left;
`;d.button`
  padding: 5px 10px;
  background-color: ${y.theme_red};
`;const UU=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,qU=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:null,name:"",image:"",description:"",route:""}),[u,f]=x.useState("");x.useEffect(()=>{n?(l({_id:n._id,name:n.name,image:n.image,description:n.description,route:n.route}),f(n.image)):(l({_id:null,name:"",image:"",description:"",route:""}),f(""))},[n]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/industry",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({_id:null,name:"",image:"",description:"",route:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/industry/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({name:"",image:"",description:"",route:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(YU,{children:r.jsxs(GU,{children:[r.jsx(KU,{children:"Save Industry"}),r.jsxs(QU,{onSubmit:i?h:g,children:[r.jsxs(Zc,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(ZU,{src:u,alt:"Image Preview"})]}),r.jsx(Xc,{children:"Image URL:"}),r.jsx(Jc,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(Zc,{children:[r.jsx(Xc,{children:"Name:"}),r.jsx(Jc,{type:"text",name:"name",value:s.name,onChange:p})]}),r.jsxs(Zc,{children:[r.jsx(Xc,{children:"Description:"}),r.jsx(Jc,{type:"text",name:"description",value:s.description,onChange:p})]}),r.jsxs(Zc,{children:[r.jsx(Xc,{children:"Route:"}),r.jsx(Jc,{type:"text",name:"route",value:s.route,onChange:p})]}),r.jsx(XU,{type:"button",onClick:e,children:"Cancel"}),r.jsx(k4,{type:"submit",children:"Save Industry"})]})]})})},YU=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,GU=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,KU=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,QU=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Zc=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,ZU=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Xc=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,Jc=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const k4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,XU=d(k4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,JU=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(15),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/industries/?page=${g}&limit=${v}`);t(z.data.data.data),k(z.data.data.totalPages),i(!1)}catch(z){i(!1),console.error("Error fetching Industry data:",z)}},M=()=>{h(!0),V(!0)},F=()=>{h(!1),V(!1),E(null)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("Industry",u),l(!1),B()};return r.jsxs(eq,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Industry",button:"Add Industry",onClick:M}),r.jsxs(tq,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((z,H)=>r.jsx(dt,{width:350,height:350,borderRadius:10},H))}):e.length===0?r.jsx(sq,{children:"No data available"}):r.jsx(nq,{children:e.map((z,H)=>r.jsxs(rq,{children:[r.jsx(oq,{children:r.jsx("img",{src:z.image?z.image:"https://picsum.photos/300/400?3",alt:"Post"})}),r.jsxs(iq,{children:[r.jsx("h4",{children:z.name}),r.jsx("p",{children:z.description}),r.jsx(Ge,{handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(qU,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Industry",handleDelete:D})]})},eq=d.section`
  height: 100vh;
  overflow-y: scroll;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const tq=d.div`
  margin-top: 50px;
`,nq=d.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default for large screens */
  gap: 1.5rem;
  row-gap: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,rq=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`,oq=d.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`,iq=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
  h4 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`,C4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,sq=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(C4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(C4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const aq=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(1),[u]=x.useState(10),[f,p]=x.useState(0);x.useEffect(()=>{h()},[s]);const h=async()=>{i(!0);try{const g=await ce.get(`/questionaire/?page=${s}&limit=${u}`);i(!1),t(g.data.data.questionaire),p(g.data.totalPages)}catch(g){i(!1),console.error("Error fetching Questionaire data:",g)}};return r.jsxs(lq,{children:[r.jsx(cq,{children:r.jsxs(dq,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Email"}),r.jsx("th",{children:"Questions & Answers"})]})}),r.jsx("tbody",{children:n?r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"Loading..."})}):e.length>0?e.map(g=>r.jsxs("tr",{children:[r.jsx("td",{children:g.email}),r.jsx("td",{children:r.jsx(uq,{children:g.answers.map(b=>r.jsxs(fq,{children:[r.jsx("strong",{children:"Q:"})," ",b.question," ",r.jsx("br",{}),r.jsx("strong",{children:"A:"})," ",b.answer]},b._id))})})]},g._id)):r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"No data available"})})})]})}),r.jsx(Ct,{initialPage:s,totalPages:f,getData:l})]})},lq=d.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;d.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;const cq=d.div`
  overflow-x: auto;
  border-radius: 8px;
  padding: 10px;
`,dq=d.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: ${y.grey_background};
  }

  tbody tr:nth-child(even) {
    background-color: ${y.grey_border};
  }
`,uq=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,fq=d.li`
  margin-bottom: 10px;
  line-height: 1.5;
`,pq=()=>{const e=Ke(),t=wn(),{state:n}=t,i=n.data;console.log("blogData",i);const[s,l]=x.useState(0);function u(p){const h=new Date(p),g=String(h.getDate()).padStart(2,"0"),b=String(h.getMonth()+1).padStart(2,"0"),v=h.getFullYear();return`${g}.${b}.${v}`}const f=()=>{e(-1)};return r.jsxs(mq,{children:[r.jsx(hq,{progress:s}),r.jsxs("div",{className:"",children:[r.jsx(b0,{onClick:f,style:{marginBottom:"30px",fontSize:"25px",cursor:"pointer"}}),r.jsx(gq,{children:r.jsx(xq,{children:r.jsxs(vq,{children:[r.jsx(bq,{children:r.jsx(wq,{src:`${i==null?void 0:i.image}`,alt:"Blog Detail"})}),r.jsxs(yq,{children:[r.jsx(jq,{className:"sub-head",children:i==null?void 0:i.title}),r.jsx(Sq,{children:i==null?void 0:i.content}),r.jsxs(kq,{children:[r.jsx("span",{children:"1M Read"}),r.jsx(Cq,{className:"end",children:u(i==null?void 0:i.createdAt)})]})]})]})})})]})]})},hq=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`,mq=d.section``,gq=d.div``,xq=d.div``,vq=d.div`
  background-color: ${y.white};

  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`,yq=d.div`
  padding: 2rem;
`,bq=d.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`,wq=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,jq=d.h2`
  color: ${y.black};
  font-size: 30px;
`,Sq=d.p`
  font-size: 1rem;
  color: ${y.black};
  margin-top: 1rem;
`,kq=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
  span {
    color: ${y.black};
    font-weight: 300;
    font-size: 15px;
  }
`,Cq=d.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${y.black};
  &.end {
    border-left: 1px solid ${y.grey_border};
    padding-left: 15px;
  }
`,$q=()=>{const e=Ke(),t=wn(),{state:n}=t,i=n.data;console.log("blogData",i);const[s,l]=x.useState(0),u=()=>{e(-1)};return r.jsxs(Eq,{children:[r.jsx(Pq,{progress:s}),r.jsxs("div",{className:"",children:[r.jsx(b0,{onClick:u,style:{marginBottom:"30px",fontSize:"25px",cursor:"pointer"}}),r.jsx(_q,{children:r.jsx(Tq,{children:r.jsxs(Dq,{children:[r.jsx(Mq,{children:r.jsx(Aq,{src:`${i==null?void 0:i.image}`,alt:"Blog Detail"})}),r.jsx(Oq,{children:r.jsx(Lq,{children:i==null?void 0:i.description})})]})})})]})]})},Pq=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`,Eq=d.section``,_q=d.div``,Tq=d.div``,Dq=d.div`
  background-color: ${y.white};

  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`,Oq=d.div`
  padding: 2rem;
`,Mq=d.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`,Aq=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;d.h2`
  color: ${y.black};
  font-size: 30px;
`;const Lq=d.p`
  font-size: 1rem;
  color: ${y.black};
  margin-top: 1rem;
`;d.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
  span {
    color: ${y.black};
    font-weight: 300;
    font-size: 15px;
  }
`;d.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${y.black};
  &.end {
    border-left: 1px solid ${y.grey_border};
    padding-left: 15px;
  }
`;const zq=()=>{const e=Ke(),t=wn(),{state:n}=t,i=n.data;console.log("blogData",i);const[s,l]=x.useState(0),u=()=>{e(-1)};return r.jsxs(Nq,{children:[r.jsx(Rq,{progress:s}),r.jsxs("div",{className:"",children:[r.jsx(b0,{onClick:u,style:{marginBottom:"30px",fontSize:"25px",cursor:"pointer"}}),r.jsx(Iq,{children:r.jsx(Fq,{children:r.jsxs(Vq,{children:[r.jsx(Hq,{children:r.jsx(Wq,{src:`${i==null?void 0:i.image}`,alt:"Blog Detail"})}),r.jsxs(Bq,{children:[r.jsx(Uq,{className:"sub-head",children:i==null?void 0:i.title}),r.jsx(qq,{children:i==null?void 0:i.description})]})]})})})]})]})},Rq=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`,Nq=d.section``,Iq=d.div``,Fq=d.div``,Vq=d.div`
  background-color: ${y.white};

  overflow: hidden;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`,Bq=d.div`
  padding: 2rem;
`,Hq=d.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`,Wq=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Uq=d.h2`
  color: ${y.black};
  font-size: 30px;
`,qq=d.p`
  font-size: 1rem;
  color: ${y.black};
  margin-top: 1rem;
`;d.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 20px;
  span {
    color: ${y.black};
    font-weight: 300;
    font-size: 15px;
  }
`;d.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${y.black};
  &.end {
    border-left: 1px solid ${y.grey_border};
    padding-left: 15px;
  }
`;const Yq=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",description:""});x.useEffect(()=>{i?l({_id:"",description:""}):n&&l({_id:n._id,description:n.description})},[n,i]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/footer",s);Ee(g.data.message),l({_id:"",description:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/footer/${s._id}`,s);console.log("Response:",g),g.data&&g.data.message?Ee(g.data.message):le("Unexpected response structure"),l({_id:"",description:""}),e(),await t()}catch(g){console.error("Error:",g),g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(Gq,{children:r.jsxs(Kq,{children:[r.jsx(Qq,{children:"Footer Form"}),r.jsxs(Zq,{onSubmit:i?f:p,children:[r.jsxs(Xq,{children:[r.jsx(Jq,{children:"Description:"}),r.jsx(eY,{type:"text",name:"description",value:s.description,onChange:u})]}),r.jsx(tY,{type:"button",onClick:e,children:"Cancel"}),r.jsx($4,{type:"submit",children:"Save Footer"})]})]})})},Gq=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,Kq=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,Qq=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,Zq=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Xq=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const Jq=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,eY=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const $4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,tY=d($4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,nY=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!0),[g,b]=x.useState(!1),[v,j]=x.useState(null);x.useEffect(()=>{C()},[]);const C=async()=>{i(!0);try{const B=await ce.get("/footer");i(!1),t(B.data.data)}catch(B){i(!1),console.error("Error fetching Footer data:",B)}},k=()=>{l(!0),h(!0)},_=()=>{l(!1),h(!1),f(null)},E=()=>{console.log("refresh"),C()},N=B=>{l(!0),f(B),h(!1)},V=()=>{st("footer",v),b(!1),C()};return console.log("footer",e),r.jsxs(oY,{children:[r.jsx("h1",{children:"Manage Footer"}),e.length>0?null:r.jsxs(lY,{onClick:k,children:[r.jsx(ii,{}),"Add Footer"]}),n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"10px"},children:Array.from({length:5}).map((B,M)=>r.jsx(dt,{width:"100%",height:100,borderRadius:10},M))}):e.length===0?r.jsx(sY,{children:"No data available"}):e.map((B,M)=>r.jsx(iY,{children:r.jsxs(aY,{children:[r.jsx("span",{children:B.description}),r.jsx(r.Fragment,{children:e.length>0?r.jsx(Ge,{noDelete:!0,handleEdit:()=>N(B)}):null})]})},M)),s&&r.jsx(Yq,{onRequestClose:_,refresh:E,editData:u,isNew:p}),g&&r.jsx(it,{loading:n,closeModal:()=>b(!1),item:"Blog",handleDelete:V})]})},rY=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,oY=d.section`
  background-color: #000;
  color: #fff;

  h1 {
    margin-bottom: 30px;
  }
`;d.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;d.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;d.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
`;d.h1`
  text-align: center;
  margin-bottom: 2rem;
`;const iY=d.div`
  background-color: ${y.box_background};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
  animation: ${rY} 0.5s ease-out both;
`,sY=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,aY=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${y.white};
`;d.div`
  padding: 1rem;
  background-color: ${y.grey_background};
  color: #fff;
  font-size: 0.9rem;
  border-top: 1px solid #444;
`;d.div`
  font-size: 1.5rem;
  transform: ${({isOpen:e})=>"rotate(0deg)"};
  transition: transform 0.5s ease-in-out;
  color: #ff4500;
`;const lY=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,P4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(P4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(P4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const cY=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({image:"",text:"",points:[""]}),[u,f]=x.useState("");x.useEffect(()=>{n?(l({_id:n._id,image:n.image,text:n.text,points:n.points}),f(n.image)):(i&&l({_id:"",image:"",text:"",points:[""]}),f(""))},[n,i]);const p=k=>{const{name:_,value:E}=k.target;if(_==="image"){const N=k.target.files[0];if(N){const V=URL.createObjectURL(N);l({...s,image:N}),f(V)}}else l({...s,[_]:E})},h=(k,_)=>{const E=[...s.points];E[k]=_,l({...s,points:E})},g=()=>{l({...s,points:[...s.points,""]})},b=k=>{const _=s.points.filter((E,N)=>N!==k);l({...s,points:_})},v=async k=>{k.preventDefault();try{const _=await ce.post("/technology",s,{headers:{"Content-Type":"multipart/form-data"}});_.data&&_.data.message?Ee(_.data.message):le("Unexpected response structure"),l({image:"",text:"",points:[""]}),f(""),e(),await t()}catch(_){_.response&&_.response.data&&_.response.data.error?le(_.response.data.error):le("An unexpected error occurred")}},j=async k=>{k.preventDefault();try{const _=await ce.put(`/technology/${s._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});console.log("Response:",_),_.data&&_.data.message?Ee(_.data.message):le("Unexpected response structure"),l({name:"",image:"",description:""}),e(),await t()}catch(_){console.error("Error:",_),_.response&&_.response.data&&_.response.data.error?le(_.response.data.error):le("An unexpected error occurred")}},C=()=>{f(""),l({...s,image:""})};return r.jsx(dY,{children:r.jsxs(uY,{children:[r.jsx(fY,{children:"Banner Form"}),r.jsxs(pY,{onSubmit:i?v:j,children:[r.jsxs(ed,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>C()}),r.jsx(hY,{src:u,alt:"Image Preview"})]}),r.jsx(lm,{htmlFor:"image",children:"Image:"}),r.jsx(cm,{type:"file",accept:"image/*",name:"image",onChange:p,placeholder:"Enter image URL or path",required:!0})]}),r.jsxs(ed,{children:[r.jsx(lm,{htmlFor:"text",children:"Text:"}),r.jsx(cm,{type:"text",id:"text",name:"text",value:s.text,onChange:p,placeholder:"Enter description",required:!0})]}),r.jsxs(ed,{children:[r.jsx(lm,{children:"Points:"}),s.points.map((k,_)=>r.jsxs(ed,{style:{marginBottom:"8px"},children:[r.jsx(cm,{type:"text",value:k,onChange:E=>h(_,E.target.value),placeholder:`Point ${_+1}`,required:!0}),s.points.length>1&&r.jsx(B2,{type:"button",onClick:()=>b(_),children:"Remove"})]},_)),r.jsx(jg,{type:"button",onClick:g,children:"Add Point"})]}),r.jsx(B2,{type:"button",onClick:e,children:"Cancel"}),r.jsx(jg,{type:"submit",children:"Add Technology"})]})]})})},dY=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,uY=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,fY=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,pY=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,ed=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,hY=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,lm=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,cm=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const jg=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,B2=d(jg)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,mY=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/technologies/?page=${g}&limit=${v}`);t(z.data.data.technologys),k(z.data.data.totalPages),i(!1)}catch(z){i(!1),console.error("Error fetching Technology data:",z)}},M=()=>{h(!0),V(!0)},F=()=>{h(!1),V(!1),E(null)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("Technology",u),l(!1),B()};return r.jsxs(gY,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Technology",button:"Add Technology",onClick:M}),r.jsxs(xY,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((z,H)=>r.jsx(dt,{width:350,height:350,borderRadius:10},H))}):e.length===0?r.jsx(jY,{children:"No data available"}):r.jsx(vY,{children:e.map((z,H)=>r.jsxs(yY,{children:[r.jsx(bY,{children:r.jsx("img",{src:z.image?z.image:"https://picsum.photos/300/400?3",alt:"Post"})}),r.jsxs(wY,{children:[r.jsx("h4",{children:z.text}),r.jsx("div",{children:z.points.map(W=>r.jsx("ul",{children:r.jsx("li",{children:W})},W))}),r.jsx(Ge,{handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(cY,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Technology",handleDelete:D})]})},gY=d.section`
  height: 100vh;
  overflow-y: scroll;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const xY=d.div`
  padding-top: 40px;
`,vY=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,yY=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`,bY=d.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`,wY=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
  h4 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`,E4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,jY=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(E4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(E4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const SY=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const{industryData:s,fetchIndustryData:l}=j4();x.useEffect(()=>{l()},[]);const[u,f]=x.useState({video:"",section:"",sub_section:""});x.useEffect(()=>{f(n?{video:n.video,section:n.section,sub_section:n.sub_section}:{video:"",section:"",sub_section:""})},[n,i]);const p=b=>{if(b.target.name==="video"){const v=b.target.files[0];v&&(URL.createObjectURL(v),f({...u,video:v}))}else f({...u,[b.target.name]:b.target.value})},h=async b=>{b.preventDefault();try{const v=await ce.post("/video",u,{headers:{"Content-Type":"multipart/form-data"}});Ee(v.data.message),f({video:"",section:"",sub_section:""}),e()}catch(v){v.response&&v.response.data&&v.response.data.error?le(v.response.data.error):le("An unexpected error occurred")}},g=async b=>{b.preventDefault();try{const v=await ce.put(`/video/${n._id}`,u,{headers:{"Content-Type":"multipart/form-data"}});Ee(v.data.message),f({video:"",section:"",sub_section:""}),e(),t()}catch(v){v.response&&v.response.data&&v.response.data.error?le(v.response.data.error):le("An unexpected error occurred")}};return r.jsx(kY,{children:r.jsxs(CY,{children:[r.jsx($Y,{children:" Video"}),r.jsxs(PY,{onSubmit:i?h:g,children:[r.jsxs(td,{className:"form-group",children:[r.jsx(nd,{children:"Video"}),r.jsx(EY,{type:"file",className:"form-control",name:"video",onChange:p})]}),r.jsxs(td,{children:[r.jsx(nd,{children:"Section"}),r.jsxs(dm,{type:"select",name:"section",value:u.section,onChange:p,children:[r.jsx("option",{value:"",children:"Select Section"}),r.jsx("option",{value:"home",children:"Home"}),r.jsx("option",{value:"industry",children:"Industry"}),r.jsx("option",{value:"platform",children:"Platform"})]})]}),u.section==="industry"&&r.jsxs(td,{children:[r.jsx(nd,{children:"Sub Section"}),r.jsxs(dm,{type:"select",name:"sub_section",value:u.sub_section,onChange:p,children:[r.jsx("option",{value:"",children:"Select Sub-Section"}),s&&s.map((b,v)=>r.jsx("option",{value:b.route,children:b.name},v))]})]}),u.section==="platform"&&r.jsxs(td,{children:[r.jsx(nd,{children:"Sub Section"}),r.jsxs(dm,{type:"select",name:"sub_section",value:u.sub_section,onChange:p,children:[r.jsx("option",{value:"",children:"Select Sub-Section"}),r.jsx("option",{value:"home",children:"Home"})]})]}),r.jsx(_Y,{type:"button",onClick:e,children:"Cancel"}),r.jsx(_4,{type:"submit",children:"Save Video"})]})]})})},kY=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,CY=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,$Y=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,PY=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,td=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const nd=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,EY=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,dm=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const _4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,_Y=d(_4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,TY=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!0),[g,b]=x.useState(!1),[v,j]=x.useState(null);x.useEffect(()=>{C()},[]);const C=async()=>{i(!0);try{const B=await ce.get("/video");i(!1),t(B.data.data)}catch(B){i(!1),console.error("Error fetching Video data:",B)}},k=()=>{l(!0),h(!0)},_=()=>{l(!1),h(!1),f(null)},E=()=>{console.log("refresh"),C()},N=B=>{l(!0),f(B),h(!1)},V=()=>{st("video",v),b(!1),C()};return console.log("video",e),r.jsxs(OY,{children:[r.jsx(ct,{head:"Manage Videos",button:"Add New Videos",onClick:k}),n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"10px"},children:Array.from({length:1}).map((B,M)=>r.jsx(dt,{width:"100%",height:200,borderRadius:10},M))}):e.length===0?r.jsx(AY,{children:"No data available"}):e.map((B,M)=>r.jsxs(MY,{children:[r.jsxs("div",{className:"d-flex justify-between items-center gap-2",children:[r.jsxs("div",{children:[r.jsxs("h2",{children:["Section: ",B==null?void 0:B.section]}),r.jsxs("p",{children:["Sub Section: ",B==null?void 0:B.sub_section]})]}),r.jsx("div",{children:r.jsx(Ge,{noDelete:!0,handleEdit:()=>N(B)})})]}),r.jsx(LY,{children:r.jsx(zY,{children:r.jsx(RY,{src:B.video,controls:!1,autoPlay:!0,muted:!0})})})]},M)),s&&r.jsx(SY,{onRequestClose:_,refresh:E,editData:u,isNew:p}),g&&r.jsx(it,{loading:n,closeModal:()=>b(!1),item:"Blog",handleDelete:V})]})},DY=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,OY=d.section`
  background-color: #000;
  color: #fff;

  h1 {
    margin-bottom: 30px;
  }
`;d.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;d.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;d.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
`;d.h1`
  text-align: center;
  margin-bottom: 2rem;
`;const MY=d.div`
  background-color: ${y.box_background};
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
  animation: ${DY} 0.5s ease-out both;
`,AY=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,LY=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${y.white};
`,zY=d.div`
  height: 100%;
  width: 100%;
`,RY=d.video`
  height: 300px;
  width: 100%;
  object-fit: cover;
`;d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`;const T4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(T4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(T4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const NY=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({image:"",title:"",description:""}),[u,f]=x.useState("");x.useEffect(()=>{i?(l({image:"",title:"",description:""}),f("")):n&&(l({image:n.image,title:n.title,description:n.description}),f(n.image))},[i,n]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/mission",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({image:"",title:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/mission/${n._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({image:"",title:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(IY,{children:r.jsxs(FY,{children:[r.jsx(VY,{children:"Mission Form"}),r.jsxs(BY,{onSubmit:i?h:g,children:[r.jsxs(um,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(HY,{src:u,alt:"Image Preview"})]}),r.jsx(fm,{children:"Image URL:"}),r.jsx(H2,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(um,{children:[r.jsx(fm,{children:"Title:"}),r.jsx(H2,{type:"text",name:"title",value:s.title,onChange:p,required:!0})]}),r.jsxs(um,{children:[r.jsx(fm,{children:"Description:"}),r.jsx(WY,{value:s.description,name:"description",onChange:p})]}),r.jsx(UY,{type:"button",onClick:e,children:"Cancel"}),r.jsx(D4,{type:"submit",children:"Save Mission"})]})]})})},IY=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,FY=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,VY=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,BY=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,um=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,HY=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,fm=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,H2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,WY=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;const D4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,UY=d(D4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,qY=()=>{Ke();const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0),[B,M]=x.useState({});x.useState(null),x.useEffect(()=>{F()},[g]);const F=async()=>{i(!0);try{const G=await ce.get(`/missions/?page=${g}&limit=${v}`);t(G.data.data.missions),i(!1),k(G.data.data.totalPages)}catch(G){console.error("Error fetching Mission data:",G),i(!1)}},A=()=>{h(!0),V(!0)},R=()=>{h(!1),V(!0)},T=()=>{console.log("refresh"),F()},D=G=>{h(!0),E(G),V(!1)},z=G=>{console.log("id",G),f(G),l(!0)},H=()=>{st("mission",u),l(!1),F()},W=G=>{const X=G.split(" ");return X.length>20?`${X.slice(0,15).join(" ")}...`:G},Y=G=>{M(X=>({...X,[G]:!X[G]}))};return r.jsxs(YY,{children:[r.jsxs("div",{children:[e&&e.length<=2?r.jsx(ct,{head:"Manage Missions",button:"Add New Mission and vision",display:!0}):r.jsx(ct,{head:"manage Missions",button:"Add New Mission",onClick:A}),r.jsxs(GY,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((G,X)=>r.jsx(dt,{width:350,height:300,borderRadius:10},X))}):e.length===0?r.jsx(eG,{children:"No data available"}):r.jsx(KY,{children:e.map((G,X)=>r.jsxs(QY,{children:[r.jsx(ZY,{children:r.jsx("img",{src:`${G.image}`,alt:"Post"})}),r.jsxs(XY,{className:"active",children:[r.jsx("span",{children:r.jsx("h4",{children:G.title})})," ",r.jsxs(JY,{children:[r.jsx("p",{children:B[X]?G.description:W(G.description)})," ",G.description&&G.description.split(" ").length>15?r.jsx("span",{onClick:()=>Y(X),children:B[X]?"Show Less":"Read More"}):null]}),r.jsx(Ge,{view:!1,handleEdit:()=>D(G),handleDelete:()=>z(G._id)})]})]},X))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(NY,{onRequestClose:R,refresh:T,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Mission",handleDelete:H})]})},YY=d.section`
  padding: 2rem;
`;d.div`
  display: flex;

  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const GY=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,KY=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,QY=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,ZY=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,XY=d.div`
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,JY=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,O4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;

  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(O4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(O4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const eG=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,tG=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",section:"",subsection:"",title:"",subtitle:"",description:""});x.useEffect(()=>{i?l({_id:"",section:"",subsection:"",title:"",subtitle:"",description:""}):n&&l({_id:n._id,section:n.section,subsection:n.subsection,title:n.title,subtitle:n.subtitle,description:n.description})},[n,i]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/section",s,{});Ee(g.data.message),l({section:"",subsection:"",title:"",subtitle:"",description:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/section/${s._id}`,s);Ee(g.data.message),l({section:"",subsection:"",title:"",subtitle:"",description:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return console.log(s),r.jsx(nG,{children:r.jsxs(rG,{children:[r.jsx(oG,{children:"Section Form"}),r.jsxs(iG,{onSubmit:i?f:p,children:[r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Section:"}),r.jsxs(pm,{type:"text",name:"section",value:s.section,onChange:u,children:[r.jsx("option",{value:"",children:"Select a section"}),r.jsx("option",{value:"home",children:"Home"}),r.jsx("option",{value:"about",children:"About"})]})]}),s.section==="home"?r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Sub Section:"}),r.jsxs(pm,{type:"text",name:"subsection",value:s.subsection,onChange:u,children:[r.jsx("option",{value:"",disabled:!0,selected:!0,children:"Select a section"}),r.jsx("option",{value:"clients",children:"Clients"}),r.jsx("option",{value:"stand out",children:"Stand Out"}),r.jsx("option",{value:"what we do",children:"What We Do"}),r.jsx("option",{value:"industry",children:"Industry"}),r.jsx("option",{value:"case study",children:"Case Study"})]})]}):s.section==="about"?r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Section:"}),r.jsxs(pm,{type:"text",name:"subsection",value:s.subsection,onChange:u,children:[r.jsx("option",{value:"",children:"Select a section"}),r.jsx("option",{value:"details",children:"About Details"})]})]}):null,r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Title:"}),r.jsx(W2,{type:"text",name:"title",value:s.title,onChange:u,required:!0})]}),r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Sub Title:"}),r.jsx(W2,{type:"text",name:"subtitle",value:s.subtitle,onChange:u})]}),r.jsxs(Bi,{children:[r.jsx(Hi,{children:"Description:"}),r.jsx(sG,{value:s.description,name:"description",onChange:u})]}),r.jsx(aG,{type:"button",onClick:e,children:"Cancel"}),r.jsx(M4,{type:"submit",children:"Save Section Details"})]})]})})},nG=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,rG=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,oG=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,iG=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Bi=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const Hi=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,W2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,pm=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,sG=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,M4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,aG=d(M4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,lG=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(null),[s,l]=x.useState(!1),[u,f]=x.useState(!1),[p,h]=x.useState(!0),[g,b]=x.useState(null),[v,j]=x.useState(!1);x.useEffect(()=>{C()},[]);const C=async()=>{l(!0);try{const M=await ce.get("/section");t(M.data.data),l(!1)}catch(M){console.error("Error fetching Banner data:",M),l(!1)}},k=()=>{f(!0),h(!0)},_=()=>{f(!1),h(!0)},E=()=>{console.log("refresh"),C()},N=M=>{f(!0),b(M),h(!1)},V=M=>{console.log("id",M),i(M),j(!0)},B=()=>{st("section",n),j(!1),C()};return console.log("section",e),r.jsxs(cG,{children:[r.jsxs(dG,{children:[r.jsx(ct,{head:"Add Section Details",button:"Add Section Details",onClick:k}),r.jsx(uG,{children:e&&e.length>0?r.jsx(r.Fragment,{children:e.map((M,F)=>r.jsx(fG,{className:"admin-page-box",children:r.jsxs(pG,{children:[r.jsxs("h4",{children:["Section Name: ",M.section]}),r.jsxs(hG,{children:[r.jsxs("p",{className:"sub section",children:[r.jsx("span",{children:" Sub Section Name"}),r.jsx("span",{children:":"}),r.jsx("span",{children:M.subsection})]}),r.jsxs("p",{className:"title",children:[r.jsx("span",{children:"Title"}),r.jsx("span",{children:":"}),r.jsx("span",{children:M.title})]}),r.jsxs("p",{className:"sub title",children:[r.jsx("span",{children:"Sub Title"}),r.jsx("span",{children:":"}),M.subtitle?M.subtitle:"N/A",r.jsx("span",{})]}),r.jsxs("p",{className:"description",children:[r.jsx("span",{children:"Description"}),r.jsx("span",{children:":"}),r.jsx("span",{children:M.description?M.description:"N/A"})]})]}),r.jsx(Ge,{handleEdit:()=>N(M),handleDelete:()=>V(M._id)})]})},M._id))}):r.jsx("p",{children:"No Details Available"})})]}),u&&r.jsx(tG,{onRequestClose:_,refresh:E,editData:g,isNew:p}),v&&r.jsx(it,{loading:s,closeModal:()=>j(!1),item:"Section Details",handleDelete:B})]})},cG=d.div``,dG=d.div``,uG=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Default for large screens */
  gap: 1.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,fG=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`;d.div`
  position: absolute;
  top: -30px;
  left: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`;const pG=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
  text-transform: capitalize;
`,hG=d.div`
  max-height: 300px;
  overflow: scroll;
  p {
    font-size: 14px;
    margin: 10px 0;

    display: grid;
    grid-template-columns: 2fr 0.1fr 2fr;

    &.description {
      grid-template-columns: 0.455fr 0.1fr;
      gap: 20px;
    }
  }
`;d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;const mG=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({image:"",problem:"",section:"",sub_section:"",solution:""}),[u,f]=x.useState(null),[p,h]=x.useState([]),[g,b]=x.useState([]),[v,j]=x.useState(!1),[C,k]=x.useState("");x.useEffect(()=>{_()},[]);const _=async()=>{j(!0);try{const A=await ce.get("/industries",{params:{isNeedFull:!0}});f(A.data.data||[]),j(!1)}catch(A){j(!1),console.error("Error fetching Industry data:",A)}};x.useEffect(()=>{E()},[]);const E=async()=>{j(!0);try{const A=await ce.get("/usecasesub");h(A.data.data.data),j(!1)}catch(A){j(!1),console.error("Error fetching UseCase data:",A)}};x.useEffect(()=>{N()},[]);const N=async()=>{j(!0);try{const A=await ce.get("/platformsub");b(A.data.data.data),j(!1)}catch(A){j(!1),console.error("Error fetching Platform data:",A)}};x.useEffect(()=>{i?(l({image:"",problem:"",section:"",sub_section:"",solution:""}),k("")):n&&(l({image:n.image,problem:n.problem,section:n.section,sub_section:n.sub_section,solution:n.solution}),k(n.image))},[i,n]);const V=A=>{if(A.target.name==="image"){const R=A.target.files[0];if(R){const T=URL.createObjectURL(R);l({...s,image:R}),k(T)}}else l({...s,[A.target.name]:A.target.value})},B=async A=>{A.preventDefault();try{const R=await ce.post("/problem-solution",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(R.data.message),l({image:"",problem:"",section:"",sub_section:"",solution:""}),k(""),e(),t()}catch(R){R.response&&R.response.data&&R.response.data.error?le(R.response.data.error):le("An unexpected error occurred")}},M=async A=>{A.preventDefault();try{const R=await ce.put(`/problem-solution/${n._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(R.data.message),l({image:"",problem:"",section:"",sub_section:"",solution:""}),k(""),e(),t()}catch(R){R.response&&R.response.data&&R.response.data.error?le(R.response.data.error):le("An unexpected error occurred")}},F=()=>{k(""),l({...s,image:""})};return console.log(p),r.jsx(gG,{children:r.jsxs(xG,{children:[r.jsx(vG,{children:"Problem Solution Form"}),r.jsxs(yG,{onSubmit:i?B:M,children:[r.jsxs(Vo,{children:[C&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>F()}),r.jsx(bG,{src:C,alt:"Image Preview"})]}),r.jsx(Bo,{children:"Image URL:"}),r.jsx(U2,{type:"file",accept:"image/*",name:"image",onChange:V})]}),r.jsxs(Vo,{children:[r.jsx(Bo,{children:"Title:"}),r.jsx(U2,{type:"text",name:"problem",value:s.problem,onChange:V,required:!0})]}),r.jsxs(Vo,{children:[r.jsx(Bo,{children:"section:"}),r.jsxs(rd,{name:"section",value:s.section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a section "}),r.jsx("option",{value:"whatwedo",children:"What We Do"}),r.jsx("option",{value:"industry",children:"Industry"}),r.jsx("option",{value:"usecase",children:"UseCase"}),r.jsx("option",{value:"platform",children:"Platform"})]})]}),s.section==="industry"&&r.jsxs(Vo,{children:[r.jsx(Bo,{children:"sub section:"}),r.jsxs(rd,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),u&&u.length>0?u.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),s.section==="usecase"&&r.jsxs(Vo,{children:[r.jsx(Bo,{children:"sub section:"}),r.jsxs(rd,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),p&&p.length>0?p.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),s.section==="platform"&&r.jsxs(Vo,{children:[r.jsx(Bo,{children:"sub section:"}),r.jsxs(rd,{name:"sub_section",value:s.sub_section,onChange:V,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),g&&g.length>0?g.map(A=>r.jsx("option",{value:A.route,children:A.name},A._id)):r.jsx("option",{value:"",children:"No Options Available"})]})]}),r.jsxs(Vo,{children:[r.jsx(Bo,{children:"solution:"}),r.jsx(wG,{value:s.solution,name:"solution",onChange:V})]}),r.jsx(jG,{type:"button",onClick:e,children:"Cancel"}),r.jsx(A4,{type:"submit",children:"Save Problem & Solution"})]})]})})},gG=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,xG=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,vG=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,yG=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,Vo=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,bG=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Bo=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,U2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,wG=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,rd=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,A4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,jG=d(A4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,SG=()=>{const e=Ke(),[t,n]=x.useState([]),[i,s]=x.useState(!1),[l,u]=x.useState(!1),[f,p]=x.useState(null),[h,g]=x.useState(!1),[b,v]=x.useState(1),[j,C]=x.useState(6),[k,_]=x.useState(null),[E,N]=x.useState(null),[V,B]=x.useState(!0);x.useState({});const[M,F]=x.useState(null);x.useEffect(()=>{A()},[b]);const A=async()=>{s(!0);try{const G=await ce.get(`/problem-solutions/?page=${b}&limit=${j}`);n(G.data.data.data),s(!1),_(G.data.data.totalPages)}catch(G){console.error("Error fetching ProblemSolution data:",G),s(!1)}},R=()=>{g(!0),B(!0)},T=()=>{g(!1),B(!0)},D=()=>{console.log("refresh"),A()},z=G=>{g(!0),N(G),B(!1)},H=G=>{console.log("id",G),p(G),u(!0)},W=()=>{st("problem-solution",f),u(!1),A()},Y=G=>{e("/admin/problemsolution/detail",{state:{data:G}})};return console.log(t&&t),r.jsxs(kG,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"Manage Problem Solutions",button:"Add New ProblemSolution",onClick:R}),r.jsxs(CG,{children:[i?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((G,X)=>r.jsx(dt,{width:350,height:300,borderRadius:10},X))}):t.length===0?r.jsx(DG,{children:"No data available"}):r.jsx($G,{children:t.map((G,X)=>r.jsx(PG,{onMouseEnter:()=>F(X),onMouseLeave:()=>F(null),children:r.jsxs(EG,{children:[r.jsx("img",{src:`${G.image}`,alt:"Post"}),r.jsxs(_G,{className:M===X?"active":"",children:[r.jsxs("p",{children:["section: ",G.section?G.section:"N/A"]}),r.jsxs("p",{children:["sub_section:"," ",G.sub_section?G.sub_section:"N/A"]}),r.jsxs("h4",{children:["problem:",G.problem]}),r.jsxs(TG,{children:["solution:",G.solution]}),r.jsx("p",{}),r.jsx(Ge,{view:!0,handleView:()=>Y(G),handleEdit:()=>z(G),handleDelete:()=>H(G._id)})]})]})},X))}),r.jsx(Ct,{initialPage:b,totalPages:k,getData:v})]})]}),h&&r.jsx(mG,{onRequestClose:T,refresh:D,editData:E,isNew:V}),l&&r.jsx(it,{loading:i,closeModal:()=>u(!1),item:"ProblemSolution",handleDelete:W})]})},kG=d.section`
  padding: 2rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const CG=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,$G=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,PG=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,EG=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,_G=d.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,TG=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,L4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(L4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(L4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const DG=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,OG=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({image:"",description:""}),[u,f]=x.useState("");x.useEffect(()=>{i?(l({image:"",description:""}),f("")):n&&(l({image:n.image,description:n.description}),f(n.image))},[i,n]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/howDifferent",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({image:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/howDifferent/${n._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({image:"",description:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(MG,{children:r.jsxs(AG,{children:[r.jsx(LG,{children:"Mission Form"}),r.jsxs(zG,{onSubmit:i?h:g,children:[r.jsxs(q2,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(RG,{src:u,alt:"Image Preview"})]}),r.jsx(Y2,{children:"Image URL:"}),r.jsx(NG,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(q2,{children:[r.jsx(Y2,{children:"Description:"}),r.jsx(IG,{value:s.description,name:"description",onChange:p})]}),r.jsx(FG,{type:"button",onClick:e,children:"Cancel"}),r.jsx(z4,{type:"submit",children:"Save How We Different Data"})]})]})})},MG=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,AG=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,LG=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,zG=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,q2=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,RG=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,Y2=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,NG=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,IG=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;const z4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,FG=d(z4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,VG=()=>{Ke();const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useState({}),x.useEffect(()=>{B()},[g]);const B=async()=>{i(!0);try{const z=await ce.get(`/howDifferents/?page=${g}&limit=${v}`);t(z.data.data.howDifferent),i(!1),k(z.data.data.totalPages)}catch(z){console.error("Error fetching Mission data:",z),i(!1)}},M=()=>{h(!0),V(!0)},F=()=>{h(!1),V(!0)},A=()=>{console.log("refresh"),B()},R=z=>{h(!0),E(z),V(!1)},T=z=>{console.log("id",z),f(z),l(!0)},D=()=>{st("howDifferent",u),l(!1),B()};return console.log("howDifferent",e),r.jsxs(BG,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"Manage Missions",button:"Add New value",onClick:M,display:e&&e.length<6?null:!0}),r.jsxs(HG,{children:[n?r.jsx("p",{children:"Loading..."}):r.jsx(WG,{children:e&&e.map((z,H)=>r.jsxs(UG,{children:[r.jsx(qG,{children:r.jsx("img",{src:z.image,alt:"Post"})}),r.jsxs(YG,{className:"active",children:[r.jsx(GG,{children:z.description}),r.jsx(Ge,{view:!1,handleEdit:()=>R(z),handleDelete:()=>T(z._id)})]})]},H))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(OG,{onRequestClose:F,refresh:A,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Mission",handleDelete:D})]})},BG=d.section`
  padding: 2rem;
`;d.div`
  display: flex;

  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const HG=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,WG=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,UG=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,qG=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,YG=d.div`
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,GG=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,R4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;

  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(R4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(R4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;function xa(e){return Be({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"},child:[]}]})(e)}const KG=[{id:1,label:"Dashboard",route:"admin/dashboard",icon:r.jsx(At,{})},{id:2,label:"Home",icon:r.jsx(Qh,{}),subLinks:[{label:"Clients",route:"admin/dashboard/clients",icon:r.jsx(Zh,{})},{label:"Who We Are",route:"admin/dashboard/whoweare",icon:r.jsx(ha,{})},{label:"Industry",route:"admin/dashboard/industry",icon:r.jsx(At,{})},{label:"Technology",route:"admin/dashboard/technology",icon:r.jsx(At,{})},{label:"Case Section",route:"admin/casesection",icon:r.jsx(xa,{})}]},{id:3,label:"Who We Are",icon:r.jsx(ha,{}),subLinks:[{label:"Who We Are",route:"admin/about/aboutwhoweare",icon:r.jsx(At,{})},{label:"Timeline",route:"admin/timeline",icon:r.jsx(At,{})},{label:"Team",route:"admin/team",icon:r.jsx(Zh,{})},{label:"Mission",route:"admin/whatwedo/mission",icon:r.jsx(At,{})},{label:"How Different",route:"admin/howDifferent",icon:r.jsx(ha,{})}]},{id:4,label:"Solutions",icon:r.jsx(ha,{}),subLinks:[{label:"Industry",route:"/admin/dashboard",subSubLink:[{label:"Problem Solution",route:"admin/problem-solution",icon:r.jsx(At,{})},{label:"Case Study",route:"admin/casestudies",icon:r.jsx(xa,{})},{label:"FAQ",route:"admin/faq",icon:r.jsx(Ni,{})},{label:"Process",route:"admin/process",icon:r.jsx(At,{})}]},{label:"Usecase",route:"admin/team",subSubLink:[{label:"UseCase SubLink",route:"admin/usecase",icon:r.jsx(At,{})},{label:"Problem Solution",route:"admin/problem-solution",icon:r.jsx(At,{})},{label:"Case Study",route:"admin/casestudies",icon:r.jsx(xa,{})},{label:"FAQ",route:"admin/faq",icon:r.jsx(Ni,{})}]}]},{id:13,label:"Platform",icon:r.jsx(ha,{}),subLinks:[{label:"Platform Who We Are",route:"admin/platform/platformwhoweare",icon:r.jsx(At,{})},{label:"Case Study",route:"admin/casestudies",icon:r.jsx(xa,{})},{label:"FAQ",route:"admin/faq",icon:r.jsx(Ni,{})}]},{id:5,label:"What We Do",icon:r.jsx(Qh,{}),subLinks:[{label:"Testimonials",route:"admin/testimonial",icon:r.jsx(At,{})},{label:"Case Study",route:"admin/casestudies",icon:r.jsx(xa,{})},{label:"Voice",route:"admin/voice",icon:r.jsx(At,{})},{label:"Process",route:"admin/process",icon:r.jsx(At,{})}]},{id:6,label:"Book A Demo",icon:r.jsx(Ni,{}),subLinks:[{label:"Question",route:"admin/question",icon:r.jsx(At,{})},{label:"Questionare",route:"admin/questionaire",icon:r.jsx(Ni,{})},{label:"Testimonials",route:"admin/testimonial",icon:r.jsx(At,{})},{label:"FAQ",route:"admin/faq",icon:r.jsx(Ni,{})}]},{id:7,route:"admin/sections",label:"Section Titles",icon:r.jsx(Qh,{})},{id:8,label:"Contact",route:"admin/contact",icon:r.jsx(oO,{})},{id:9,label:"Banner",route:"admin/banner",icon:r.jsx(sO,{})},{id:10,label:"Blog",icon:r.jsx(pB,{}),subLinks:[{label:"Testimonials",route:"admin/blog",icon:r.jsx(At,{})},{label:"Categories",route:"admin/blog/categories",icon:r.jsx(At,{})}]},{id:11,label:"Footer",route:"admin/footer",icon:r.jsx(Zh,{})},{id:12,label:"Video",route:"admin/video",icon:r.jsx(Xh,{})},{id:14,label:"Contact Details",route:"admin/contact-section",icon:r.jsx(Xh,{})},{id:15,label:"Product",route:"admin/product-integration",icon:r.jsx(Xh,{})}],QG=()=>{const[e,t]=x.useState({}),[n,i]=x.useState(!1),s=()=>i(!0),l=()=>i(!1),u=p=>{t(h=>({...h,[p]:!h[p]}))},f=(p,h)=>{t(g=>({...g,[`${p}-${h}`]:!g[`${p}-${h}`]}))};return r.jsxs(ZG,{children:[r.jsx(XG,{children:r.jsx(JG,{to:"/admin/dashboard",children:r.jsx(eK,{children:r.jsx(tK,{src:Ba,alt:"Logo"})})})}),r.jsx("ul",{children:KG.map(p=>r.jsxs("li",{children:[r.jsx(nK,{className:"sidebar-item",onClick:()=>u(p.id),children:r.jsxs(G2,{to:p.route&&p.route,children:[p.icon," ",p.label]})}),p.subLinks&&e[p.id]&&r.jsx("ul",{className:"sub-links",children:p.subLinks.map((h,g)=>r.jsxs("li",{children:[r.jsx(rK,{className:"sub-link-item",onClick:()=>f(p.id,g),children:r.jsx(G2,{to:h.route,children:h.label})}),h.subSubLink&&e[`${p.id}-${g}`]&&r.jsx("ul",{className:"sub-sub-links",children:h.subSubLink.map((b,v)=>r.jsx(oK,{children:r.jsx(ht,{to:b.route,className:"sub-sub-link-item",children:b.label})},`${p.id}-${g}-${v}`))})]},`${p.id}-${g}`))})]},p.id))}),r.jsx(iK,{children:r.jsxs(sK,{onClick:s,children:[r.jsx(iO,{})," ",r.jsx("span",{children:"Log out"})]})}),n&&r.jsx(QV,{onClose:l})]})},ZG=d.nav`
  width: 250px;
  overflow: scroll;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 2;
  transition: width 0.3s ease;
  background-color: ${y.dark_background};
`,XG=d.h1`
  margin: 0 auto;
  border-bottom: 1px solid ${y.grey_border};
  padding: 16px 0;
  display: grid;
  justify-items: center;
`,JG=d(ht)`
  cursor: pointer;
  display: flex;
  align-items: center;
  p {
    text-align: left;
    font-weight: 300;
    padding-right: 42px;
    margin-left: 10px;
    font-size: 12px;
    color: #646464;
  }
`,eK=d.div`
  height: 50px;
  width: 180px;
`,tK=d.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`,nK=d.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
`,rK=d.li`
  padding: 10px;
  margin-left: 30px;
`,oK=d.li`
  padding: 10px;
  margin-left: 50px;
`,G2=d(ht)`
  display: flex;
  align-items: center;
  gap: 20px;

  svg {
    font-size: 20px;
  }
`,iK=d.div`
  padding: 15px;
  color: #ffffff;
  font-size: 16px;
`,sK=d.div`
  color: #ffffff;
  padding: 15px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${y.theme_red}; /* Darker navy color */
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  &:hover {
    opacity: 0.8;
  }
`,aK=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState(null),[u,f]=x.useState(!1),[p,h]=x.useState({image:"",title:"",description:"",section:"",sub_section:""}),[g,b]=x.useState("");x.useEffect(()=>{i?(h({image:"",title:"",description:"",section:"",sub_section:""}),b("")):n&&(h({image:n.image,title:n.title,description:n.description,section:n.section,sub_section:n.sub_section}),b(n.image))},[i,n]);const v=E=>{if(E.target.name==="image"){const N=E.target.files[0];if(N){const V=URL.createObjectURL(N);h({...p,image:N}),b(V)}}else h({...p,[E.target.name]:E.target.value})};x.useEffect(()=>{j()},[]);const j=async()=>{f(!0);try{const E=await ce.get("/industries",{params:{isNeedFull:!0}});l(E.data.data||[]),f(!1)}catch(E){f(!1),console.error("Error fetching Industry data:",E)}},C=async E=>{E.preventDefault();try{const N=await ce.post("/process",p,{headers:{"Content-Type":"multipart/form-data"}});Ee(N.data.message),h({image:"",title:"",description:"",section:"",sub_section:""}),b(""),e(),t()}catch(N){N.response&&N.response.data&&N.response.data.error?le(N.response.data.error):le("An unexpected error occurred")}},k=async E=>{E.preventDefault();try{const N=await ce.put(`/process/${n._id}`,p,{headers:{"Content-Type":"multipart/form-data"}});Ee(N.data.message),h({image:"",title:"",description:"",section:"",sub_section:""}),b(""),e(),t()}catch(N){N.response&&N.response.data&&N.response.data.error?le(N.response.data.error):le("An unexpected error occurred")}},_=()=>{b(""),h({...p,image:""})};return r.jsx(lK,{children:r.jsxs(cK,{children:[r.jsx(dK,{children:"Problem Solution Form"}),r.jsxs(uK,{onSubmit:i?C:k,children:[r.jsxs(va,{children:[g&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>_()}),r.jsx(fK,{src:g,alt:"Image Preview"})]}),r.jsx(ya,{children:"Image URL:"}),r.jsx(K2,{type:"file",accept:"image/*",name:"image",onChange:v})]}),r.jsxs(va,{children:[r.jsx(ya,{children:"Title:"}),r.jsx(K2,{type:"text",name:"title",value:p.title,onChange:v,required:!0})]}),r.jsxs(va,{children:[r.jsx(ya,{children:"Description:"}),r.jsx(pK,{value:p.description,name:"description",onChange:v})]}),r.jsxs(va,{children:[r.jsx(ya,{children:"Section:"}),r.jsxs(Q2,{name:"section",value:p.section,onChange:v,children:[r.jsx("option",{value:"",children:"Select "}),r.jsx("option",{value:"whatwedo",children:"What We Do"}),r.jsx("option",{value:"industry",children:"Industry"})]})]}),r.jsxs(va,{children:[r.jsx(ya,{children:"Subsection:"}),r.jsxs(Q2,{name:"sub_section",value:p.sub_section,onChange:v,children:[r.jsx("option",{value:"",children:"Select a Sub Section"}),r.jsx("option",{value:"home",children:"Home"}),s&&s.map(E=>r.jsx("option",{value:E.route,children:E.name},E._id))]})]}),r.jsx(hK,{type:"button",onClick:e,children:"Cancel"}),r.jsx(N4,{type:"submit",children:"Save Process"})]})]})})},lK=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,cK=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,dK=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,uK=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,va=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,fK=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,ya=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,K2=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,pK=d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`,Q2=d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`,N4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,hK=d(N4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,mK=()=>{Ke();const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1),[v,j]=x.useState(6),[C,k]=x.useState(null),[_,E]=x.useState(null),[N,V]=x.useState(!0);x.useState({});const[B,M]=x.useState(null);x.useEffect(()=>{F()},[g]);const F=async()=>{i(!0);try{const W=await ce.get(`/process/?page=${g}&limit=${v}`);t(W.data.data.data),i(!1),k(W.data.data.totalPages)}catch(W){console.error("Error fetching Process data:",W),i(!1)}},A=()=>{h(!0),V(!0)},R=()=>{h(!1),V(!0)},T=()=>{console.log("refresh"),F()},D=W=>{h(!0),E(W),V(!1)},z=W=>{console.log("id",W),f(W),l(!0)},H=()=>{st("process",u),l(!1),F()};return r.jsxs(gK,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"Manage Problem Solutions",button:"Add New Process",onClick:A}),r.jsxs(xK,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((W,Y)=>r.jsx(dt,{width:350,height:300,borderRadius:10},Y))}):e.length===0?r.jsx(SK,{children:"No data available"}):r.jsx(vK,{children:e.map((W,Y)=>r.jsx(yK,{onMouseEnter:()=>M(Y),onMouseLeave:()=>M(null),children:r.jsxs(bK,{children:[r.jsx("img",{src:`${W.image}`,alt:"Post"}),r.jsxs(wK,{className:B===Y?"active":"",children:[r.jsx("h4",{children:W.title}),r.jsx(jK,{children:W.description}),r.jsx(Ge,{view:!0,handleEdit:()=>D(W),handleDelete:()=>z(W._id)})]})]})},Y))}),r.jsx(Ct,{initialPage:g,totalPages:C,getData:b})]})]}),p&&r.jsx(aK,{onRequestClose:R,refresh:T,editData:_,isNew:N}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Process",handleDelete:H})]})},gK=d.section`
  padding: 2rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const xK=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,vK=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,yK=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,bK=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,wK=d.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`,jK=d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`,I4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(I4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(I4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const SK=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,kK=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({question:"",options:["","","",""]});x.useEffect(()=>{i?l({question:n.question,options:n.options}):n&&l({question:n.question,options:n.options})},[i,n]);const u=g=>{l({...s,question:g.target.value})},f=(g,b)=>{const v=[...s.options];v[g]=b,l({...s,options:v})},p=async g=>{g.preventDefault();try{const b=await ce.post("/question",s);l({question:"",options:["","","",""]}),Ee(b.data.message),e(),t()}catch(b){b.response&&b.response.data&&b.response.data.error?le(b.response.data.error):le("An unexpected error occurred")}},h=async g=>{g.preventDefault();try{const b=await ce.put(`/question/${n._id}`,s);Ee(b.data.message),l({question:"",options:["","","",""]}),e(),t()}catch(b){b.response&&b.response.data&&b.response.data.error?le(b.response.data.error):le("An unexpected error occurred")}};return r.jsx(CK,{children:r.jsx($K,{children:r.jsxs(PK,{onSubmit:i?p:h,children:[r.jsx(EK,{children:"Add a Question"}),r.jsxs(Z2,{children:[r.jsx(X2,{htmlFor:"question",children:"Question:"}),r.jsx(_K,{id:"question",value:s.question,onChange:u,placeholder:"Enter the question here",required:!0})]}),r.jsxs(Z2,{children:[r.jsx(X2,{children:"Options:"}),s.options.map((g,b)=>r.jsx(TK,{children:r.jsx(DK,{type:"text",value:g,onChange:v=>f(b,v.target.value),placeholder:`Option ${b+1}`,required:!0})},b))]}),r.jsx(MK,{type:"submit",children:"Submit Question"})]})})})},CK=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,$K=d.div`
  background-color: #1e1e2f;
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  max-width: 500px;
  width: 90%;
  text-align: center;
`,PK=d.form`
  max-width: 400px;
  margin: auto;
`,EK=d.h2`
  color: ${y.primary};
  margin-bottom: 20px;
`,Z2=d.div`
  margin-bottom: 15px;
`,X2=d.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: bold;
`,_K=d.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${y.border};
  border-radius: 8px;
  background-color: #29293d;
  color: ${y.white};
  font-size: 14px;
  resize: none;
`,TK=d.div`
  margin-bottom: 10px;
`,DK=d.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${y.border};
  border-radius: 8px;
  background-color: #29293d;
  color: ${y.white};
  font-size: 14px;
`,OK=d.button`
  display: block;
  margin: 10px 0;
  padding: 10px;
  background-color: ${y.primary||"#27ab99"};
  color: ${y.white};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,MK=d(OK)`
  background-color: ${y.primary};
  width: 100%;

  &:hover {
    background-color: ${y.primaryHover};
  }
`,AK=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1);x.useState(6);const[v,j]=x.useState(null),[C,k]=x.useState(null),[_,E]=x.useState(!0);x.useEffect(()=>{N()},[g]);const N=async()=>{i(!0);try{const T=await ce.get("/question");i(!1),t(T.data.data.question),j(T.data.data.totalPages)}catch(T){i(!1),console.error("Error fetching Question data:",T)}},V=()=>{h(!0),E(!0),k(null)},B=()=>{h(!1),E(!0),k(null)},M=()=>{console.log("refresh"),N()},F=T=>{h(!0),k(T),E(!1)},A=T=>{console.log("id",T),f(T),l(!0)},R=()=>{st("question",u),l(!1),N()};return r.jsxs(LK,{children:[r.jsx(ct,{head:"Manage Question",button:"Add New Question",onClick:V}),r.jsx(zK,{children:r.jsxs(RK,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Questions"}),r.jsx("th",{children:"Options"})]})}),r.jsx("tbody",{children:n?r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"Loading..."})}):e.length>0?e.map(T=>r.jsxs("tr",{children:[r.jsx("td",{children:T.question}),r.jsx("td",{children:r.jsxs(NK,{children:[T.options.map((D,z)=>r.jsxs(IK,{children:[z+1,".","  ",D]},D._id)),r.jsx(Ge,{handleEdit:()=>F(T),handleDelete:()=>A(T._id)})]})})]},T._id)):r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"No data available"})})})]})}),r.jsx(Ct,{initialPage:g,totalPages:v,getData:b}),p&&r.jsx(kK,{onRequestClose:B,refresh:M,editData:C,isNew:_}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Question",handleDelete:R})]})},LK=d.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;d.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;const zK=d.div`
  overflow-x: auto;
  border-radius: 8px;
  padding: 10px;
`,RK=d.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: ${y.grey_background};
  }

  tbody tr:nth-child(even) {
    background-color: ${y.grey_border};
  }
`,NK=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,IK=d.li`
  margin-bottom: 10px;
  line-height: 1.5;
`,FK=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{x.useState(!1);const[s,l]=x.useState({_id:"",title:""});x.useEffect(()=>{i?l({_id:"",title:""}):n&&l({_id:n._id,title:n.title})},[n,i]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/category",s);Ee(g.data.message),l({_id:"",title:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/category/${s._id}`,s);console.log("Response:",g),g.data&&g.data.message?Ee(g.data.message):le("Unexpected response structure"),l({_id:"",title:""}),e(),await t()}catch(g){console.error("Error:",g),g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(VK,{children:r.jsxs(BK,{children:[r.jsx(HK,{children:"Category Form"}),r.jsxs(WK,{onSubmit:i?f:p,children:[r.jsxs(UK,{children:[r.jsx(qK,{children:"Title:"}),r.jsx(YK,{type:"text",name:"title",value:s.title,onChange:u})]}),r.jsx(GK,{type:"button",onClick:e,children:"Cancel"}),r.jsx(F4,{type:"submit",children:"Save Category"})]})]})})},VK=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,BK=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,HK=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,WK=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,UK=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const qK=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,YK=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const F4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,GK=d(F4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,KK=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(!1),[p,h]=x.useState(null),[g,b]=x.useState(null),[v,j]=x.useState(!0),C=async()=>{i(!0);try{const M=await ce.get("/categories");t(M.data.data),i(!1)}catch(M){i(!1),console.error("Error fetching faq data:",M)}};x.useEffect(()=>{C()},[]);const k=()=>{l(!0),j(!0)},_=()=>{l(!1),j(!1),h(null)},E=()=>{console.log("refresh"),C()},N=M=>{l(!0),h(M),j(!1)},V=M=>{console.log("id",M),b(M),f(!0)},B=()=>{st("category",g),f(!1),C()};return r.jsxs("div",{children:[r.jsx(ct,{head:"Manage Blog Categories",button:"Add New Category",onClick:k}),e.map((M,F)=>r.jsx(QK,{children:r.jsxs(ZK,{children:[r.jsx("span",{children:M.title}),r.jsx(XK,{children:r.jsx(Ge,{handleDelete:()=>V(M._id),handleEdit:()=>N(M)})})]})},F)),s&&r.jsx(FK,{onRequestClose:_,refresh:E,editData:p,isNew:v}),u&&r.jsx(it,{loading:n,closeModal:()=>f(!1),item:"Category",handleDelete:B})]})},QK=d.div`
  background-color: ${y.box_background};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
`,ZK=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${y.white};
`,XK=d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`,JK=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:null,name:"",route:""});x.useEffect(()=>{l(n?{_id:n._id,name:n.name,route:n.route}:{_id:null,name:"",route:""})},[n]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/platformsub",s);Ee(g.data.message),l({_id:null,name:"",route:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/platformsub/${s._id}`,s);Ee(g.data.message),l({name:"",route:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(eQ,{children:r.jsxs(tQ,{children:[r.jsx(nQ,{children:"Save Platform"}),r.jsxs(rQ,{onSubmit:i?f:p,children:[r.jsxs(J2,{children:[r.jsx(ej,{children:"Name:"}),r.jsx(tj,{type:"text",name:"name",value:s.name,onChange:u})]}),r.jsxs(J2,{children:[r.jsx(ej,{children:"Route:"}),r.jsx(tj,{type:"text",name:"route",value:s.route,onChange:u})]}),r.jsx(oQ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(V4,{type:"submit",children:"Save Platform"})]})]})})},eQ=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,tQ=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,nQ=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,rQ=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,J2=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const ej=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,tj=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const V4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,oQ=d(V4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,iQ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1);x.useState(15);const[v,j]=x.useState(null),[C,k]=x.useState(null),[_,E]=x.useState(!0);x.useEffect(()=>{N()},[g]);const N=async()=>{i(!0);try{const T=await ce.get("/platformsub");t(T.data.data.data),j(T.data.data.totalPages),i(!1)}catch(T){i(!1),console.error("Error fetching Platform data:",T)}},V=()=>{h(!0),E(!0)},B=()=>{h(!1),E(!1),k(null)},M=()=>{console.log("refresh"),N()},F=T=>{h(!0),k(T),E(!1)},A=T=>{console.log("id",T),f(T),l(!0)},R=()=>{st("platform",u),l(!1),N()};return r.jsxs(sQ,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Platform",button:"Add Platform",onClick:V}),r.jsxs(aQ,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((T,D)=>r.jsx(dt,{width:350,height:350,borderRadius:10},D))}):e.length===0?r.jsx(uQ,{children:"No data available"}):r.jsx(lQ,{children:e.map((T,D)=>r.jsx(cQ,{children:r.jsxs(dQ,{children:[r.jsx("h4",{children:T.name}),r.jsx("p",{children:T.route}),r.jsx(Ge,{handleEdit:()=>F(T),handleDelete:()=>A(T._id)})]})},D))}),r.jsx(Ct,{initialPage:g,totalPages:v,getData:b})]})]}),p&&r.jsx(JK,{onRequestClose:B,refresh:M,editData:C,isNew:_}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Platform",handleDelete:R})]})},sQ=d.section`
  height: 100vh;
  overflow-y: scroll;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const aQ=d.div`
  margin-top: 50px;
`,lQ=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Default for large screens */
  gap: 1.5rem;
  row-gap: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,cQ=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`;d.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`;const dQ=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
  h4 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`,B4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,uQ=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(B4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(B4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const fQ=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:null,name:"",route:""});x.useEffect(()=>{l(n?{_id:n._id,name:n.name,route:n.route}:{_id:null,name:"",route:""})},[n]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/usecasesub",s);Ee(g.data.message),l({_id:null,name:"",route:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/usecasesub/${s._id}`,s);Ee(g.data.message),l({name:"",route:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(pQ,{children:r.jsxs(hQ,{children:[r.jsx(mQ,{children:"Save UseCase"}),r.jsxs(gQ,{onSubmit:i?f:p,children:[r.jsxs(nj,{children:[r.jsx(rj,{children:"Name:"}),r.jsx(oj,{type:"text",name:"name",value:s.name,onChange:u})]}),r.jsxs(nj,{children:[r.jsx(rj,{children:"Route:"}),r.jsx(oj,{type:"text",name:"route",value:s.route,onChange:u})]}),r.jsx(xQ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(H4,{type:"submit",children:"Save UseCase"})]})]})})},pQ=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,hQ=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,mQ=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,gQ=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,nj=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const rj=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,oj=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const H4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,xQ=d(H4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,vQ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1);x.useState(15);const[v,j]=x.useState(null),[C,k]=x.useState(null),[_,E]=x.useState(!0);x.useEffect(()=>{N()},[g]);const N=async()=>{i(!0);try{const T=await ce.get("/usecasesub");t(T.data.data.data),j(T.data.data.totalPages),i(!1)}catch(T){i(!1),console.error("Error fetching UseCase data:",T)}},V=()=>{h(!0),E(!0)},B=()=>{h(!1),E(!1),k(null)},M=()=>{console.log("refresh"),N()},F=T=>{h(!0),k(T),E(!1)},A=T=>{console.log("id",T),f(T),l(!0)},R=()=>{st("usecasesub",u),l(!1),N()};return r.jsxs(yQ,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage UseCase",button:"Add UseCase",onClick:V}),r.jsxs(bQ,{children:[n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((T,D)=>r.jsx(dt,{width:350,height:350,borderRadius:10},D))}):e.length===0?r.jsx(kQ,{children:"No data available"}):r.jsx(wQ,{children:e.map((T,D)=>r.jsx(jQ,{children:r.jsxs(SQ,{children:[r.jsx("h4",{children:T.name}),r.jsx("p",{children:T.route}),r.jsx(Ge,{handleEdit:()=>F(T),handleDelete:()=>A(T._id)})]})},D))}),r.jsx(Ct,{initialPage:g,totalPages:v,getData:b})]})]}),p&&r.jsx(fQ,{onRequestClose:B,refresh:M,editData:C,isNew:_}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"UseCase",handleDelete:R})]})},yQ=d.section`
  height: 100vh;
  overflow-y: scroll;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;Ve`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;const bQ=d.div`
  margin-top: 50px;
`,wQ=d.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Default for large screens */
  gap: 1.5rem;
  row-gap: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* 2 columns for medium screens */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* 1 column for small screens */
  }

  @media (max-width: 480px) {
    gap: 1rem; /* Reduce gap for extra small screens */
  }
`,jQ=d.div`
  position: relative;
  background-color: ${y.box_background};
  border-radius: 10px;
`;d.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${y.box_background};

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover; /* To ensure the image fills the container without cropping */
  }
`;const SQ=d.div`
  border-radius: 7px;
  padding: 1rem;
  padding-top: 50px;
  background-color: ${y.box_background};
  h4 {
    font-weight: 500;
    text-align: center;
    margin-bottom: 20px;
  }
`,W4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`,kQ=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(W4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(W4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const CQ=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({description:"",title:"",options:[{title:"",link:""}]});x.useEffect(()=>{n&&l(n)},[n]);const u=(b,v)=>{l(j=>({...j,[b]:v}))},f=(b,v,j)=>{const C=[...s.options];C[b][v]=j,l(k=>({...k,options:C}))},p=()=>{l(b=>({...b,options:[...b.options,{title:0,link:""}]}))},h=b=>{l(v=>({...v,options:v.options.filter((j,C)=>C!==b)}))},g=async b=>{var v,j;b.preventDefault();try{const C=i?"/contact-section":`/contact-section/${n._id}`,_=await(i?ce.post:ce.put)(C,s);Ee(_.data.message||"Operation successful!"),e(),t()}catch(C){le(((j=(v=C.response)==null?void 0:v.data)==null?void 0:j.error)||"An unexpected error occurred")}};return console.log(s),r.jsx($Q,{children:r.jsxs(PQ,{children:[r.jsx(EQ,{children:i?"Add Contact Section":"Edit Contact Section"}),r.jsxs(_Q,{onSubmit:g,children:[r.jsxs(od,{children:[r.jsx("label",{children:"Title:"}),r.jsx(hm,{value:s.title,onChange:b=>u("title",b.target.value)})]}),r.jsxs(od,{children:[r.jsx("label",{children:"Description:"}),r.jsx(MQ,{value:s.description,onChange:b=>u("description",b.target.value),rows:"4",required:!0})]}),r.jsx("h3",{children:"Cards"}),s.options.map((b,v)=>r.jsxs(TQ,{children:[r.jsxs(od,{children:[r.jsx("label",{children:"Title:"}),r.jsx(hm,{value:b.title,onChange:j=>f(v,"title",j.target.value)})]}),r.jsxs(od,{children:[r.jsx("label",{children:"Link:"}),r.jsx(hm,{value:b.link,onChange:j=>f(v,"link",j.target.value)})]}),r.jsx("button",{type:"button",onClick:()=>h(v),children:"Remove Card"})]},v)),r.jsx("button",{type:"button",onClick:p,children:"Add Card"}),r.jsx(OQ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(DQ,{type:"submit",children:i?"Submit":"Update"})]})]})})},$Q=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,PQ=d.div`
  background-color: #1e1e2f;
  color: ${y.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
`,EQ=d.h2`
  color: ${y.primary||"#27ab99"};
  margin-bottom: 20px;
  text-align: center;
`,_Q=d.form`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,od=d.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`,TQ=d.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`,DQ=d.button`
  background-color: ${y.primary||"#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`;d.div`
  margin-bottom: 10px;
  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`;const OQ=d.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #d32f2f;
  }
`,hm=d.input`
  background-color: transparent;
`,MQ=d.textarea`
  background-color: transparent;
`,AQ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(1);x.useState(6);const[v,j]=x.useState(null),[C,k]=x.useState(null),[_,E]=x.useState(!0);x.useEffect(()=>{N()},[g]);const N=async()=>{i(!0);try{const T=await ce.get("/contact-section");i(!1),t(T.data.data.contactSection),j(T.data.data.totalPages)}catch(T){i(!1),console.error("Error fetching ContactSection data:",T)}},V=()=>{h(!0),E(!0),k(null)},B=()=>{h(!1),E(!0),k(null)},M=()=>{console.log("refresh"),N()},F=T=>{h(!0),k(T),E(!1)},A=T=>{console.log("id",T),f(T),l(!0)},R=()=>{st("contact-section",u),l(!1),N()};return r.jsxs(LQ,{children:[r.jsx(ct,{head:"Manage ContactSection",button:"Add New ContactSection",onClick:V}),r.jsx(zQ,{children:r.jsxs(RQ,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Contact Medium"}),r.jsx("th",{children:"Description"})]})}),r.jsx("tbody",{children:n?r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"Loading..."})}):e.length>0?e.map(T=>r.jsxs("tr",{children:[r.jsx("td",{children:T.title}),r.jsx("td",{children:T.description}),r.jsx("td",{children:r.jsxs(NQ,{children:[T.options.map((D,z)=>r.jsxs(IQ,{children:[z+1,".","  ",r.jsxs("p",{children:[" ",D.title]}),r.jsxs("p",{children:[" ",D.link]})]},D._id)),r.jsx(Ge,{handleEdit:()=>F(T),handleDelete:()=>A(T._id)})]})})]},T._id)):r.jsx("tr",{children:r.jsx("td",{colSpan:"2",align:"center",children:"No data available"})})})]})}),r.jsx(Ct,{initialPage:g,totalPages:v,getData:b}),p&&r.jsx(CQ,{onRequestClose:B,refresh:M,editData:C,isNew:_}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"ContactSection",handleDelete:R})]})},LQ=d.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;d.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;const zQ=d.div`
  overflow-x: auto;
  border-radius: 8px;
  padding: 10px;
`,RQ=d.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    font-weight: bold;
  }

  tbody tr:nth-child(odd) {
    background-color: ${y.grey_background};
  }

  tbody tr:nth-child(even) {
    background-color: ${y.grey_border};
  }
`,NQ=d.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,IQ=d.li`
  margin-bottom: 10px;
  line-height: 1.5;
`,FQ=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({title:"",description:"",image:"",card:[{count:0,title:""},{count:0,title:""},{count:0,title:""}]}),[u,f]=x.useState("");x.useEffect(()=>{n&&(l(n),f(n.image))},[n]);const p=(v,j)=>{l(C=>({...C,[v]:j}))},h=(v,j,C)=>{const k=[...s.card];k[v][j]=C,l(_=>({..._,card:k}))},g=v=>{const j=v.target.files[0];if(j){const C=new FileReader;C.onloadend=()=>{f(C.result),l(k=>({...k,image:j}))},C.readAsDataURL(j)}},b=async v=>{var j,C;v.preventDefault();try{const k=i?"/platformwhoweare":`/platformwhoweare/${s._id}`,E=await(i?ce.post:ce.put)(k,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(E.data.message||"Operation successful!"),e(),t()}catch(k){le(((C=(j=k.response)==null?void 0:j.data)==null?void 0:C.error)||"An unexpected error occurred")}};return console.log(s),r.jsx(VQ,{children:r.jsxs(BQ,{children:[r.jsx(HQ,{children:i?"Add Who We Are":"Edit Who We Are"}),r.jsxs(WQ,{onSubmit:b,children:[r.jsxs(ba,{children:[r.jsx("label",{children:"Title:"}),r.jsx(mm,{value:s.title,onChange:v=>p("title",v.target.value),required:!0})]}),r.jsxs(ba,{children:[r.jsx("label",{children:"Description:"}),r.jsx(KQ,{value:s.description,onChange:v=>p("description",v.target.value),rows:"4",required:!0})]}),r.jsxs(ba,{children:[r.jsx("label",{children:"Image:"}),u&&r.jsxs(YQ,{children:[r.jsx("img",{src:u,alt:"Preview"}),r.jsx("button",{type:"button",onClick:()=>f(""),children:"Remove"})]}),r.jsx("input",{type:"file",onChange:g})]}),r.jsx("h3",{children:"Cards"}),s.card.map((v,j)=>r.jsxs(UQ,{children:[r.jsxs(ba,{children:[r.jsx("label",{children:"Count:"}),r.jsx(mm,{type:"number",value:v.count,onChange:C=>h(j,"count",C.target.value),required:!0})]}),r.jsxs(ba,{children:[r.jsx("label",{children:"Title:"}),r.jsx(mm,{value:v.title,onChange:C=>h(j,"title",C.target.value),required:!0})]})]},j)),r.jsx(GQ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(qQ,{type:"submit",children:i?"Submit":"Update"})]})]})})},VQ=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,BQ=d.div`
  background-color: #1e1e2f;
  color: ${y.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
`,HQ=d.h2`
  color: ${y.primary||"#27ab99"};
  margin-bottom: 20px;
  text-align: center;
`,WQ=d.form`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,ba=d.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`,UQ=d.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`,qQ=d.button`
  background-color: ${y.primary||"#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`,YQ=d.div`
  margin-bottom: 10px;
  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`,GQ=d.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #d32f2f;
  }
`,mm=d.input`
  background-color: transparent;
`,KQ=d.textarea`
  background-color: transparent;
`,QQ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useState(!1),x.useState(null);const[s,l]=x.useState(!1),[u,f]=x.useState(1);x.useState(6),x.useState(null);const[p,h]=x.useState(null),[g,b]=x.useState(!0);x.useEffect(()=>{v()},[u]);const v=async()=>{i(!0);try{const E=await ce.get("/platformwhoweare");t(E.data.data),i(!1)}catch(E){i(!1),console.error("Error fetching Client data:",E)}},j=()=>{l(!0),b(!0)},C=()=>{l(!1),b(!1),h(null)},k=()=>{console.log("refresh"),v()},_=E=>{l(!0),h(E),b(!1)};return r.jsxs(ZQ,{children:[r.jsxs("div",{className:"container",children:[r.jsxs(XQ,{children:[r.jsx("h1",{children:"Manage Who we are"}),e.length>0?null:r.jsxs(uZ,{onClick:j,children:[r.jsx(ii,{}),"Add Client"]})]}),n?"Loading...":e.length===0?r.jsx(JQ,{children:"No data available"}):r.jsx(r.Fragment,{children:r.jsx(eZ,{children:e.map((E,N)=>r.jsxs(tZ,{children:[r.jsxs("div",{style:{width:"100%"},children:[r.jsxs(oZ,{children:[r.jsx(ij,{children:E.title}),r.jsx(ij,{children:E.description})]}),r.jsx(iZ,{children:E.card.map((V,B)=>r.jsxs(sZ,{children:[r.jsx(aZ,{children:r.jsx(lZ,{children:V.count})}),r.jsx(cZ,{children:r.jsx(dZ,{children:V.title})})]},B))})]}),r.jsx(nZ,{children:r.jsx(rZ,{src:E.image,alt:`Who We Are ${N+1}`})}),e.length>0?r.jsx(Ge,{handleEdit:()=>_(E)}):null]},N))})})]}),s&&r.jsx(FQ,{onRequestClose:C,refresh:k,editData:p,isNew:g})]})},ZQ=d.section``,XQ=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const JQ=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,eZ=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`,tZ=d.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  overflow: hidden;

  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 0;
`,nZ=d.div`
  width: 300px;
  height: 200px;
  display: flex;
  border: 1px solid rgba(255, 255, 255);
`,rZ=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,oZ=d.div`
  margin-top: 1rem;
`,iZ=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`,ij=d.p`
  font-size: 1.2rem;
  color: ${y.white};
  margin: 0;
`,sZ=d.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-color: ${y.grey_background};
  padding: 10px 30px;
`,aZ=d.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.white};
  margin-right: 1rem;
`,lZ=d.span``,cZ=d.div`
  flex: 1;
`,dZ=d.p`
  font-size: 1rem;
  color: ${y.white};
  margin: 0;
`,U4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(U4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(U4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const uZ=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,fZ=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({title:"",description:"",image:"",card:[{count:0,title:""},{count:0,title:""}]}),[u,f]=x.useState("");x.useEffect(()=>{n&&(l(n),f(n.image))},[n]);const p=(v,j)=>{l(C=>({...C,[v]:j}))},h=(v,j,C)=>{const k=[...s.card];k[v][j]=C,l(_=>({..._,card:k}))},g=v=>{const j=v.target.files[0];if(j){const C=new FileReader;C.onloadend=()=>{f(C.result),l(k=>({...k,image:j}))},C.readAsDataURL(j)}},b=async v=>{var j,C;v.preventDefault();try{const k=i?"/aboutwhoweare":`/aboutwhoweare/${s._id}`,E=await(i?ce.post:ce.put)(k,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(E.data.message||"Operation successful!"),e(),t()}catch(k){le(((C=(j=k.response)==null?void 0:j.data)==null?void 0:C.error)||"An unexpected error occurred")}};return console.log(s),r.jsx(pZ,{children:r.jsxs(hZ,{children:[r.jsx(mZ,{children:i?"Add Who We Are":"Edit Who We Are"}),r.jsxs(gZ,{onSubmit:b,children:[r.jsxs(wa,{children:[r.jsx("label",{children:"Title:"}),r.jsx(gm,{value:s.title,onChange:v=>p("title",v.target.value),required:!0})]}),r.jsxs(wa,{children:[r.jsx("label",{children:"Description:"}),r.jsx(wZ,{value:s.description,onChange:v=>p("description",v.target.value),rows:"4",required:!0})]}),r.jsxs(wa,{children:[r.jsx("label",{children:"Image:"}),u&&r.jsxs(yZ,{children:[r.jsx("img",{src:u,alt:"Preview"}),r.jsx("button",{type:"button",onClick:()=>f(""),children:"Remove"})]}),r.jsx("input",{type:"file",onChange:g})]}),r.jsx("h3",{children:"Cards"}),s.card.map((v,j)=>r.jsxs(xZ,{children:[r.jsxs(wa,{children:[r.jsx("label",{children:"Count:"}),r.jsx(gm,{type:"number",value:v.count,onChange:C=>h(j,"count",C.target.value),required:!0})]}),r.jsxs(wa,{children:[r.jsx("label",{children:"Title:"}),r.jsx(gm,{value:v.title,onChange:C=>h(j,"title",C.target.value),required:!0})]})]},j)),r.jsx(bZ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(vZ,{type:"submit",children:i?"Submit":"Update"})]})]})})},pZ=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,hZ=d.div`
  background-color: #1e1e2f;
  color: ${y.white};
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
`,mZ=d.h2`
  color: ${y.primary||"#27ab99"};
  margin-bottom: 20px;
  text-align: center;
`,gZ=d.form`
  display: flex;
  flex-direction: column;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,wa=d.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`,xZ=d.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
`,vZ=d.button`
  background-color: ${y.primary||"#3498db"};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
`,yZ=d.div`
  margin-bottom: 10px;
  img {
    max-width: 100px;
    height: auto;
    display: block;
    margin-bottom: 5px;
  }
  button {
    background-color: #e74c3c;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
`,bZ=d.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: #d32f2f;
  }
`,gm=d.input`
  background-color: transparent;
`,wZ=d.textarea`
  background-color: transparent;
`,jZ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1);x.useState(!1),x.useState(null);const[s,l]=x.useState(!1),[u,f]=x.useState(1);x.useState(6),x.useState(null);const[p,h]=x.useState(null),[g,b]=x.useState(!0);x.useEffect(()=>{v()},[u]);const v=async()=>{i(!0);try{const E=await ce.get("/aboutwhoweare");t(E.data.data),i(!1)}catch(E){i(!1),console.error("Error fetching Client data:",E)}},j=()=>{l(!0),b(!0)},C=()=>{l(!1),b(!1),h(null)},k=()=>{console.log("refresh"),v()},_=E=>{l(!0),h(E),b(!1)};return r.jsxs(SZ,{children:[r.jsxs("div",{className:"container",children:[r.jsxs(kZ,{children:[r.jsx("h1",{children:"Manage Who we are"}),e.length>0?null:r.jsxs(RZ,{onClick:j,children:[r.jsx(ii,{}),"Add Client"]})]}),n?"Loading...":e.length===0?r.jsx(CZ,{children:"No data available"}):r.jsx(r.Fragment,{children:r.jsx($Z,{children:e.map((E,N)=>r.jsxs(PZ,{children:[r.jsxs("div",{style:{width:"100%"},children:[r.jsxs(TZ,{children:[r.jsx(sj,{children:E.title}),r.jsx(sj,{children:E.description})]}),r.jsx(DZ,{children:E.card.map((V,B)=>r.jsxs(OZ,{children:[r.jsx(MZ,{children:r.jsx(AZ,{children:V.count})}),r.jsx(LZ,{children:r.jsx(zZ,{children:V.title})})]},B))})]}),r.jsx(EZ,{children:r.jsx(_Z,{src:E.image,alt:`Who We Are ${N+1}`})}),e.length>0?r.jsx(Ge,{handleEdit:()=>_(E)}):null]},N))})})]}),s&&r.jsx(fZ,{onRequestClose:C,refresh:k,editData:p,isNew:g})]})},SZ=d.section``,kZ=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const CZ=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,$Z=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`,PZ=d.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  overflow: hidden;

  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem 0;
`,EZ=d.div`
  width: 300px;
  height: 200px;
  display: flex;
  border: 1px solid rgba(255, 255, 255);
`,_Z=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,TZ=d.div`
  margin-top: 1rem;
`,DZ=d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`,sj=d.p`
  font-size: 1.2rem;
  color: ${y.white};
  margin: 0;
`,OZ=d.div`
  margin-top: 1rem;
  display: grid;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-color: ${y.grey_background};
  padding: 10px 30px;
`,MZ=d.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${y.white};
  margin-right: 1rem;
`,AZ=d.span``,LZ=d.div`
  flex: 1;
`,zZ=d.p`
  font-size: 1rem;
  color: ${y.white};
  margin: 0;
`,q4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(q4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(q4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const RZ=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,NZ=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({_id:"",title:""});x.useEffect(()=>{i?l({_id:"",title:""}):n&&l({_id:n._id,title:n.title})},[n,i]);const u=h=>{l({...s,[h.target.name]:h.target.value})},f=async h=>{h.preventDefault();try{const g=await ce.post("/voice",s);Ee(g.data.message),l({_id:"",title:""}),e(),t()}catch(g){g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}},p=async h=>{h.preventDefault();try{const g=await ce.put(`/voice/${s._id}`,s);console.log("Response:",g),g.data&&g.data.message?Ee(g.data.message):le("Unexpected response structure"),l({_id:"",title:""}),e(),await t()}catch(g){console.error("Error:",g),g.response&&g.response.data&&g.response.data.error?le(g.response.data.error):le("An unexpected error occurred")}};return r.jsx(IZ,{children:r.jsxs(FZ,{children:[r.jsx(VZ,{children:"Footer Form"}),r.jsxs(BZ,{onSubmit:i?f:p,children:[r.jsxs(HZ,{children:[r.jsx(WZ,{children:"Description:"}),r.jsx(UZ,{type:"text",name:"title",value:s.title,onChange:u})]}),r.jsx(qZ,{type:"button",onClick:e,children:"Cancel"}),r.jsx(Y4,{type:"submit",children:"Save Footer"})]})]})})},IZ=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,FZ=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,VZ=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,BZ=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,HZ=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`;const WZ=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,UZ=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;const Y4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,qZ=d(Y4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,YZ=()=>{const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!0),[g,b]=x.useState(!1),[v,j]=x.useState(null);x.useEffect(()=>{C()},[]);const C=async()=>{i(!0);try{const B=await ce.get("/voices");i(!1),t(B.data.data.data)}catch(B){i(!1),console.error("Error fetching Voice data:",B)}},k=()=>{l(!0),h(!0)},_=()=>{l(!1),h(!1),f(null)},E=()=>{console.log("refresh"),C()},N=B=>{l(!0),f(B),h(!1)},V=()=>{st("voice",v),b(!1),C()};return console.log("voice",e),r.jsxs(KZ,{children:[r.jsx("h1",{children:"Manage Voice"}),e.length>0?null:r.jsxs(JZ,{onClick:k,children:[r.jsx(ii,{}),"Add Voice"]}),n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(1, 1fr)",gap:"10px"},children:Array.from({length:5}).map((B,M)=>r.jsx(dt,{width:"100%",height:100,borderRadius:10},M))}):e.length===0?r.jsx(ZZ,{children:"No data available"}):e.map((B,M)=>r.jsx(QZ,{children:r.jsxs(XZ,{children:[r.jsx("span",{children:B.title}),r.jsx(r.Fragment,{children:e.length>0?r.jsx(Ge,{noDelete:!0,handleEdit:()=>N(B)}):null})]})},M)),s&&r.jsx(NZ,{onRequestClose:_,refresh:E,editData:u,isNew:p}),g&&r.jsx(it,{loading:n,closeModal:()=>b(!1),item:"Blog",handleDelete:V})]})},GZ=Ve`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,KZ=d.section`
  background-color: #000;
  color: #fff;

  h1 {
    margin-bottom: 30px;
  }
`;d.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;d.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
  }
`;d.button`
  background-color: ${y.theme_red};
  color: #fff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background-color: ${y.theme_red};
  }
`;d.p`
  margin-bottom: 0;
  font-weight: 400;
  font-size: 14px;
`;d.h1`
  text-align: center;
  margin-bottom: 2rem;
`;const QZ=d.div`
  background-color: ${y.box_background};
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #333;
  animation: ${GZ} 0.5s ease-out both;
`,ZZ=d.p`
  text-align: center;
  font-size: 1.25rem;
  color: #6c757d;
  padding: 2rem 0;
`,XZ=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  font-weight: 500;
  font-size: 1rem;
  color: ${y.white};
`;d.div`
  padding: 1rem;
  background-color: ${y.grey_background};
  color: #fff;
  font-size: 0.9rem;
  border-top: 1px solid #444;
`;d.div`
  font-size: 1.5rem;
  transform: ${({isOpen:e})=>"rotate(0deg)"};
  transition: transform 0.5s ease-in-out;
  color: #ff4500;
`;const JZ=d.button`
  background-color: ${y.theme_red};
  padding: 10px 20px 10px 10px;
  font-weight: 500;
  font-size: 15px;
  color: ${y.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 6px;

  svg {
    color: ${y.white};
    font-size: 20px;
  }
`,G4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d(G4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(G4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const eX=({onRequestClose:e,refresh:t,editData:n,isNew:i})=>{const[s,l]=x.useState({image:"",title:""});x.useState(!1);const[u,f]=x.useState("");x.useEffect(()=>{i?(l({title:"",image:""}),f("")):n&&(l({image:n.image,title:n.title}),f(n.image))},[i,n]);const p=v=>{if(v.target.name==="image"){const j=v.target.files[0];if(j){const C=URL.createObjectURL(j);l({...s,image:j}),f(C)}}else l({...s,[v.target.name]:v.target.value})},h=async v=>{v.preventDefault();try{const j=await ce.post("/product",s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({title:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},g=async v=>{v.preventDefault();try{const j=await ce.put(`/product/${n._id}`,s,{headers:{"Content-Type":"multipart/form-data"}});Ee(j.data.message),l({image:"",title:""}),f(""),e(),t()}catch(j){j.response&&j.response.data&&j.response.data.error?le(j.response.data.error):le("An unexpected error occurred")}},b=()=>{f(""),l({...s,image:""})};return r.jsx(tX,{children:r.jsxs(nX,{children:[r.jsx(rX,{children:"Product Form"}),r.jsxs(oX,{onSubmit:i?h:g,children:[r.jsxs(aj,{children:[u&&r.jsxs("div",{children:[r.jsx(dn,{onClick:()=>b()}),r.jsx(iX,{src:u,alt:"Image Preview"})]}),r.jsx(lj,{children:"Image URL:"}),r.jsx(cj,{type:"file",accept:"image/*",name:"image",onChange:p})]}),r.jsxs(aj,{children:[r.jsx(lj,{children:"Title:"}),r.jsx(cj,{type:"text",name:"title",value:s.title,onChange:p,required:!0})]}),r.jsx(sX,{type:"button",onClick:e,children:"Cancel"}),r.jsx(K4,{type:"submit",children:"Save Product"})]})]})})},tX=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Darker overlay */
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`,nX=d.div`
  background-color: #1e1e2f; /* Professional dark background */
  color: ${y.white};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6); /* Subtle shadow */
  max-width: 500px;
  width: 90%;
  text-align: center;
`,rX=d.h2`
  color: ${y.primary||"#27ab99"}; /* Highlight color */
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`,oX=d.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 600px;
  overflow: scroll;

  @media screen and (max-height: 700px) {
    max-height: 500px;
  }
`,aj=d.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`,iX=d.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  border: 1px solid #444;
  margin-bottom: 10px;
`,lj=d.label`
  font-size: 0.9rem;
  color: #c1c1c1; /* Softer text color */
`,cj=d.input`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.textarea`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${y.primary||"#27ab99"};
    box-shadow: 0 0 5px ${y.primary||"#27ab99"};
  }
`;d.select`
  width: 100%;
  padding: 10px;
  background-color: #2a2a3d;
  border: 1px solid #444;
  border-radius: 6px;
  color: #e0e0e0;
  font-size: 0.9rem;
`;const K4=d.button`
  padding: 12px 20px;
  background-color: ${y.primary||"#27ab99"};
  color: #fff;
  font-size: 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${y.primaryHover||"#1a8a77"};
  }
`,sX=d(K4)`
  background-color: #f44336;

  &:hover {
    background-color: #d32f2f;
  }
`,aX=()=>{Ke();const[e,t]=x.useState([]),[n,i]=x.useState(!1),[s,l]=x.useState(!1),[u,f]=x.useState(null),[p,h]=x.useState(!1),[g,b]=x.useState(null),[v,j]=x.useState(null),[C,k]=x.useState(!0);x.useState({}),x.useEffect(()=>{_()},[]);const _=async()=>{i(!0);try{const A=await ce.get("/products");t(A.data.data.data),i(!1)}catch(A){console.error("Error fetching Product data:",A),i(!1)}},E=()=>{h(!0),k(!0)},N=()=>{h(!1),k(!0)},V=()=>{console.log("refresh"),_()},B=A=>{h(!0),j(A),k(!1)},M=A=>{console.log("id",A),f(A),l(!0)},F=()=>{st("product",u),l(!1),_()};return r.jsx(r.Fragment,{children:r.jsxs(lX,{children:[r.jsxs("div",{children:[r.jsx(ct,{head:"manage Products",button:"Add New Product",onClick:E}),r.jsx(cX,{children:n?r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"},children:Array.from({length:6}).map((A,R)=>r.jsx(dt,{width:350,height:300,borderRadius:10},R))}):e.length===0?r.jsx(hX,{children:"No data available"}):r.jsx(dX,{children:e.map((A,R)=>r.jsx(uX,{onMouseEnter:()=>b(R),onMouseLeave:()=>b(null),children:r.jsxs(fX,{children:[r.jsx("img",{src:`${A.image}`,alt:"Post"}),r.jsxs(pX,{className:g===R?"active":"",children:[r.jsxs("span",{children:[A.author," -"," ",A.createdAt?new Date(A.createdAt).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric"}):"November 20, 2024"]}),r.jsx("h4",{children:A.title}),r.jsx(Ge,{view:!0,handleView:()=>handleViewClick(A),handleEdit:()=>B(A),handleDelete:()=>M(A._id)})]})]})},R))})})]}),p&&r.jsx(eX,{onRequestClose:N,refresh:V,editData:v,isNew:C}),s&&r.jsx(it,{loading:n,closeModal:()=>l(!1),item:"Product",handleDelete:F})]})})},lX=d.section`
  padding: 2rem;
`;d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 1.8rem;
  }
`;d.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: ${y.theme_red};
  color: ${y.white};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;const cX=d.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,dX=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Responsive columns */
  gap: 2rem; /* Space between cards */

  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr); /* Responsive columns */
  }
`,uX=d.div`
  background-color: ${y.black};
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  overflow: hidden;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`,fX=d.div`
  height: 280px;
  width: 100%;
  position: relative;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    display: block;
  }
`,pX=d.div`
  position: relative;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-height: 0px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.4s ease;
  background-color: ${y.white};
  color: ${y.black};
  padding: 20px;

  &.active {
    bottom: 100%;
    max-height: 280px;
  }
  h4 {
    margin: 20px 0;
  }
`;d.div`
  height: 100px;
  overflow: scroll;
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  span {
    color: ${y.theme_red};
    font-size: 14px;
    cursor: pointer;
  }
`;const Q4=d.button`
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: ${y.white};

  &:hover {
    opacity: 0.9;
  }
`;d.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  margin-top: 1rem;
`;d(Q4)`
  background-color: ${y.edit};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;d(Q4)`
  background-color: ${y.theme_red};
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;const hX=d.div`
  text-align: center;
  font-size: 1.5rem;
  color: ${y.white};
  margin-top: 2rem;
`,mX=()=>{const e=({children:s})=>S2?s:r.jsx(vm,{to:"/admin/login",replace:!0}),t=({children:s})=>S2()?r.jsx(vm,{to:"/admin/dashboard",replace:!0}):s,n=location.pathname.includes("admin"),i=["/admin/login","/pagenotfound"].includes(location.pathname);return r.jsxs(r.Fragment,{children:[n&&!i&&r.jsx(oB,{}),n&&!i&&r.jsx(QG,{}),r.jsx(eN,{}),r.jsxs(gX,{noHeaderFooter:i,children:[r.jsx("div",{className:"adminwrapper",children:r.jsxs(ym,{children:[r.jsx(De,{path:"/admin/sections",element:r.jsx(e,{children:r.jsx(lG,{})})}),r.jsx(De,{path:"/admin",element:r.jsx(e,{children:r.jsx(P2,{})})}),r.jsx(De,{path:"/admin/dashboard",element:r.jsx(e,{children:r.jsx(P2,{})})}),r.jsx(De,{path:"/admin/contact",element:r.jsx(e,{children:r.jsx(FU,{})})}),r.jsx(De,{path:"/admin/voice",element:r.jsx(e,{children:r.jsx(YZ,{})})}),r.jsx(De,{path:"/admin/banner",element:r.jsx(e,{children:r.jsx(uW,{})})}),r.jsx(De,{path:"/admin/problem-solution",element:r.jsx(e,{children:r.jsx(SG,{})})}),r.jsx(De,{path:"/admin/questionaire",element:r.jsx(e,{children:r.jsx(aq,{})})}),r.jsx(De,{path:"/admin/question",element:r.jsx(e,{children:r.jsx(AK,{})})}),r.jsx(De,{path:"/admin/casestudies",element:r.jsx(e,{children:r.jsx(EW,{})})}),r.jsx(De,{path:"/admin/casestudies/detail",element:r.jsx(e,{children:r.jsx(zq,{})})}),r.jsx(De,{path:"admin/whatwedo/mission",element:r.jsx(e,{children:r.jsx(qY,{})})}),r.jsx(De,{path:"/admin/howDifferent",element:r.jsx(e,{children:r.jsx(VG,{})})}),r.jsx(De,{path:"/admin/platform",element:r.jsx(e,{children:r.jsx(iQ,{})})}),r.jsx(De,{path:"/admin/usecase",element:r.jsx(e,{children:r.jsx(vQ,{})})}),r.jsx(De,{path:"admin/contact-section",element:r.jsx(e,{children:r.jsx(AQ,{})})}),r.jsx(De,{path:"/admin/dashboard/industry",element:r.jsx(e,{children:r.jsx(JU,{})})}),r.jsx(De,{path:"/admin/dashboard/technology",element:r.jsx(e,{children:r.jsx(mY,{})})}),r.jsx(De,{path:"/admin/casesection",element:r.jsx(e,{children:r.jsx(I2,{})})}),r.jsx(De,{path:"/admin/process",element:r.jsx(e,{children:r.jsx(mK,{})})}),r.jsx(De,{path:"/admin/video",element:r.jsx(e,{children:r.jsx(TY,{})})}),r.jsx(De,{path:"/admin/casesection/detail",element:r.jsx(e,{children:r.jsx($q,{})})}),r.jsx(De,{path:"/admin/dashboard/clients",element:r.jsx(e,{children:r.jsx(UW,{})})}),r.jsx(De,{path:"/admin/dashboard/whoweare",element:r.jsx(e,{children:r.jsx(aU,{})})}),r.jsx(De,{path:"/admin/about/aboutwhoweare",element:r.jsx(e,{children:r.jsx(jZ,{})})}),r.jsx(De,{path:"/admin/platform/platformwhoweare",element:r.jsx(e,{children:r.jsx(QQ,{})})}),r.jsx(De,{path:"/admin/dashboard/whatwedo",element:r.jsx(e,{children:r.jsx(I2,{})})}),r.jsx(De,{path:"/admin/blog",element:r.jsx(e,{children:r.jsx(RB,{})})}),r.jsx(De,{path:"admin/blog/categories",element:r.jsx(e,{children:r.jsx(KK,{})})}),r.jsx(De,{path:"/admin/blog/detail",element:r.jsx(e,{children:r.jsx(pq,{})})}),r.jsx(De,{path:"/admin/faq",element:r.jsx(e,{children:r.jsx(eH,{})})}),r.jsx(De,{path:"/admin/timeline",element:r.jsx(e,{children:r.jsx(mH,{})})}),r.jsx(De,{path:"admin/product-integration",element:r.jsx(e,{children:r.jsx(aX,{})})}),r.jsx(De,{path:"/admin/team",element:r.jsx(e,{children:r.jsx(DH,{})})}),r.jsx(De,{path:"/admin/testimonial",element:r.jsx(e,{children:r.jsx(YH,{})})}),r.jsx(De,{path:"/admin/footer",element:r.jsx(e,{children:r.jsx(nY,{})})})]})}),r.jsx(ym,{children:r.jsx(De,{path:"/admin/login",element:r.jsx(t,{children:r.jsx(TV,{})})})})]})]})},gX=d.div`
  /* background: url(${qB});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%; */

  ${({noHeaderFooter:e})=>e?`
        position: relative;
        width: 100%;
        padding-top: 0;
      `:`
        position: absolute;
        right: 0;
        width: calc(100% - 250px);
        padding-top: 90px;
      `}
`,xX=()=>(Ke(),r.jsx(vX,{children:r.jsx("div",{className:"wrapper",children:r.jsx(yX,{children:r.jsxs(bX,{children:[r.jsx("h4",{children:"404"}),r.jsx("h3",{children:"Page not found!"}),r.jsx("p",{children:"The page you are looking for has been removed or does not exist"}),r.jsx(ht,{to:"/",children:r.jsx("button",{children:"Back To Home"})})]})})})})),vX=d.div`
  animation: fromTop 0.8s ease;
  height: 100vh;
  display: grid;
  place-items: center;
`,yX=d.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 0 50px;
  position: relative;
  z-index: 1;
`;d.div`
  position: absolute;
  top: -180px;
  left: -150px;
  z-index: -1;
  height: 450px;
  width: 450px;
`;d.div`
  height: 500px;
  width: 500px;
`;d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;const bX=d.div`
  padding-left: 80px;
  display: grid;
  justify-items: start;
  gap: 10px;
  h4 {
    font-size: 60px;
    font-weight: 800;
    margin: 0;
  }
  h3 {
    font-size: 30px;
    font-weight: 500;
    margin: 0;
  }
  p {
    font-size: 18px;
    font-weight: 300;
    margin: 0;
  }
  button {
    border-radius: 50px;
    padding: 10px 25px;
    font-size: 18px;

    margin-top: 10px;
  }
`;d.div``;d.div`
  margin-top: 80px;
  padding: 40px 20px;
`;d.h2`
  text-align: center;
  margin-bottom: 20px;
`;d.p`
  text-align: center;
  width: 73%;
  margin: auto;
  margin-bottom: 80px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 70px;
  }
`;d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
  position: relative;
`;d.div`
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
  background: ${y.theme_red};
`;d.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
`;d.div`
  text-align: center;
  padding-top: 40px;
`;d.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${y.white};
`;d.p`
  font-size: 16px;
  line-height: 1.5;
  color: ${y.white};
`;d.section``;d.h2`
  text-align: center;
  padding: 60px 0;
  &.form {
    font-size: 25px;
    text-align: left;
    padding: 0 0 30px 0;

    @media screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
`;d.div``;d.div`
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;d.p`
  font-size: 1rem;
  margin-bottom: 30px;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;d.form`
  gap: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 540px) {
    grid-template-columns: 1fr;
  }

  input:-webkit-autofill,
  textarea:-webkit-autofill {
    background-color: transparent !important; /* Or any desired color */
    -webkit-box-shadow: 0 0 0px 1000px #121212 inset !important; /* Ensure consistent color */
    color: #fff !important;
    caret-color: #fff !important; /* Matches the caret color to the input's text color */
  }

  input:-webkit-autofill::first-line,
  textarea:-webkit-autofill::first-line {
    color: ${y.white} !important; /* Ensures the text color matches */
  }
`;d.div``;d.input`
  padding: 10px;
  border: none;
  border-bottom: 1px solid ${y.grey_border};

  outline: none;
  font-size: 15px;
  background: transparent;
  width: 100%;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: ${y.placeholder_text};
  }
`;d.textarea`
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
  }
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid ${y.grey_border};
  font-size: 15px;
  background: transparent;
  color: ${y.white};

  &::placeholder {
    font-size: 14px;

    color: ${y.placeholder_text};
  }
`;d.div`
  padding-bottom: 45px;
  margin-top: 20px;
  display: flex;
  justify-content: end;
  grid-column: span 2;
  @media screen and (max-width: 540px) {
    grid-column: unset;
    justify-content: center;
  }

  &.bottom {
    justify-content: center;
    margin-top: 30px;
  }
`;d.div`
  position: relative;
  display: inline-block;
`;d.div`
  position: absolute;
  &.top {
    top: -3px;
    right: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.right {
    top: -3px;
    right: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
  &.bottom {
    left: -3px;
    bottom: -3px;
    height: 1px;
    width: 22px;
    background-color: ${y.white};
  }
  &.left {
    bottom: -3px;
    left: -3px;
    width: 1px;
    height: 22px;
    background-color: ${y.white};
  }
`;d.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;d.div`
  background-color: ${y.grey_background};
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;d.h4`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: ${y.white};
  text-align: left;
`;d.p``;d.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin: 20px 0;
  text-transform: capitalize;
  div {
    background-color: #ff2a001e;
    padding: 15px;
    border-radius: 50%;

    display: grid;
    place-items: center;

    @media screen and (max-width: 540px) {
      height: 60px;
      width: 60px;
    }
  }
  svg {
    font-size: 25px;
    color: ${y.theme_red};
  }

  @media screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
  }
`;d.div`
  margin-top: 50px;
`;d.section`
  background-color: #000;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
`;d.h1`
  span {
    color: #f44336; /* Red color for "Values" */
  }
`;d.div`
  display: grid;
  gap: 30px;
  margin-top: 40px;
`;d.div`
  padding: 20px;
  text-align: left;
  display: grid;
  grid-template-columns: 0.3fr 2fr;
  gap: 20px;
  align-items: center;
  border: 2px solid transparent;
  border-image: linear-gradient(to bottom, #5f5f5fe9, #ffffff1e);
  border-image-slice: 1;

  @media screen and (max-width: 1180px) {
    grid-template-columns: 1fr;
    justify-items: center;
    width: 100%;
  }
`;d.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: start;
  gap: 80px;
  width: 100%;
  &.bottom {
    margin-left: 15%;

    @media screen and (max-width: 1180px) {
      margin-left: 0;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;d.div`
  height: 80px;
  width: 80px;
  background-color: ${y.white};
  padding: 10px;
`;d.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  display: block;
`;d.div`
  display: flex;
  flex-direction: column;
  color: ${y.white};

  h2 {
    margin: 0;
    color: ${y.white};
  }

  @media screen and (max-width: 1180px) {
    h2,
    p {
      text-align: center;
    }
  }
`;const wX=()=>{const{name:e}=Wa();return r.jsxs("div",{children:[r.jsx(ir,{text:`${e} Industry`}),r.jsx(kk,{section:"industry",sub_section:`${e}`}),r.jsx(hk,{section:"industry",sub_section:`${e}`}),r.jsx(bL,{}),r.jsx(EL,{}),r.jsx(Sk,{section:"industry",sub_section:`${e}`}),r.jsx(NL,{}),r.jsx(qL,{}),r.jsx(tl,{section:"industry",sub_section:`${e}`}),r.jsx(w0,{section:"industry",sub_section:`${e}`}),r.jsx(ms,{}),r.jsx(xu,{section:"industry",sub_section:`${e}`})]})},jX=()=>{const{name:e}=Wa();return console.log(e),r.jsxs("div",{children:[r.jsx(ir,{text:`Use Case ${e}`}),r.jsx(kk,{section:"usecase",sub_section:`${e}`}),r.jsx(vz,{}),r.jsx(tl,{section:"usecase",sub_section:`${e}`}),r.jsx(_z,{}),r.jsx(Az,{}),r.jsx(k0,{}),r.jsx(ms,{}),r.jsx(xu,{section:"usecase",sub_section:`${e}`})]})},SX=()=>{const{name:e}=Wa();return console.log(e),r.jsxs("div",{children:[r.jsx(ir,{text:`${e}`}),r.jsx(Iz,{}),r.jsx(eR,{}),r.jsx(w0,{section:"platform",sub_section:"home"}),r.jsx(tl,{section:"platform",sub_section:`${e}`}),r.jsx(ms,{}),r.jsx(xu,{section:"platform",sub_section:`${e}`})]})},kX=()=>{const{id:e}=Wa(),[t,n]=x.useState(null),[i,s]=x.useState([]),[l,u]=x.useState(0),f=x.useRef(null);x.useState(0),Ke();const[p,h]=x.useState(null);x.useEffect(()=>{const v=async()=>{try{const C=await Re.get(`/casestudy/${e}`);n(C.data.data)}catch(C){console.error("Error fetching casestudy data:",C)}},j=async()=>{try{const C=await Re.get("/casestudies",{params:{isNeedFull:!0}});s(C.data.data.casestudys)}catch(C){console.error("Error fetching casestudy data:",C)}};v(),j()},[e,p]),x.useEffect(()=>{const v=()=>{const j=window.scrollY,C=document.documentElement.scrollHeight-window.innerHeight,k=j/C*100;return u(k),window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}};return window.addEventListener("scroll",v),()=>{window.removeEventListener("scroll",v)}},[]);function g(v){const j=new Date(v),C=String(j.getDate()).padStart(2,"0"),k=String(j.getMonth()+1).padStart(2,"0"),_=j.getFullYear();return`${C}.${k}.${_}`}const b=()=>{navigator.share?navigator.share({title:"Share this page",url:window.location.href}).then(()=>console.log("Shared successfully!")).catch(v=>console.log("Error sharing:",v)):console.log("Sharing is not supported in this browser")};return r.jsxs($X,{children:[r.jsx(CX,{progress:l}),r.jsx("div",{className:"wrapper",children:r.jsx(PX,{children:r.jsx(EX,{ref:f,children:r.jsxs(_X,{children:[r.jsx(DX,{children:r.jsx(OX,{src:`${t==null?void 0:t.image}`,alt:"CaseStudy Detail"})}),r.jsxs(TX,{children:[r.jsx(MX,{className:"sub-head",children:t==null?void 0:t.title}),r.jsx(AX,{children:t==null?void 0:t.description}),r.jsxs(LX,{children:[r.jsx($k,{onClick:b}),r.jsx("span",{children:"1M Read"}),r.jsx(zX,{className:"end",children:g(t==null?void 0:t.createdAt)})]})]})]})})})})]})},CX=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`,$X=d.section``,PX=d.div``,EX=d.div`
  position: relative;
`;d.div`
  /* position: absolute; */
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;d.div`
  position: absolute;
  z-index: 2;
  right: 0;
`;const _X=d.div`
  background-color: ${y.white};
  max-height: 680px;
  overflow: scroll;

  @media (max-width: 768px) {
    margin-bottom: 2rem; /* Add margin for spacing on smaller screens */
  }
`,TX=d.div`
  padding: 2rem;
`,DX=d.div`
  position: relative;
  height: 450px;
  @media (max-width: 768px) {
    height: 300px; /* Adjust height for smaller screens */
  }
`,OX=d.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,MX=d.h2`
  color: ${y.black};
  font-size: 30px;
`,AX=d.p`
  font-size: 1rem;
  color: ${y.black};
  margin-top: 1rem;
`;d.div`
  height: 680px;

  @media (max-width: 980px) {
    display: flex;
    height: unset;
    max-width: 840px;
    overflow-x: scroll;
  }
`;d.div`
  background-color: ${y.white};
  overflow: hidden;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 100px; /* Adjust height for smaller screens */
    }
  }

  .content {
    padding: 1rem;

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: ${y.black};
    }

    p {
      font-size: 0.9rem;
      color: ${y.black};
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 0.8rem;
      color: #ff4500;
    }
  }

  @media (max-width: 980px) {
    min-width: max-content;
    margin-right: 20px;
  }
  @media (max-width: 540px) {
    min-width: 300px;
    margin-right: 20px;
  }
`;const LX=d.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  span {
    color: ${y.black};
    font-weight: 300;
    font-size: 15px;
  }
  svg {
    cursor: pointer;
    color: ${y.black};
    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.3);
    }
  }
`;d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
`;const zX=d.p`
  text-transform: uppercase;
  font-weight: 300;
  color: ${y.black};
  &.end {
    border-left: 1px solid ${y.grey_border};
    padding-left: 15px;
  }
`;d.button`
  text-transform: uppercase;
  font-weight: 300;
`;const RX=()=>r.jsxs("div",{children:[r.jsx(ir,{text:"Case Study",subtext:"We’re here to help you explore the future of digital interaction"}),r.jsx(kX,{})]}),NX=()=>{const e=wn(),{scrollYProgress:t}=cE(),[n,i]=x.useState(0);x.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const s=e.pathname.includes("admin"),l=["/admin/login","/pagenotfound"].includes(e.pathname),u=Ke();x.useEffect(()=>{f.some(h=>Ma(h,e.pathname))||u("/pagenotfound")},[e.pathname,u]);const f=["/","/blogs","/blog-detail/:id","/casestudydetail/:id","/about","/what-we-do","/industry","/industry/:name","/use-case","/use-case/:name","/platform","/platform/:name","/contact","/book-a-demo","/admin/login","/admin","/admin/dashboard","/admin/sections","/admin/banner","/admin/problem-solution","/admin/usecase","/admin/process","/admin/questionaire","/admin/dashboard/clients","/admin/dashboard/technology","/admin/dashboard/industry","/admin/dashboard/whoweare","/admin/about/aboutwhoweare","/admin/platform/platformwhoweare","/admin/whatwedo/mission","/admin/voice","/admin/platform","/admin/video","/admin/casestudies","/admin/blog","/admin/blog/detail","/admin/casestudies/detail","/admin/casesection/detail","/admin/contact","/admin/faq","/admin/casestudy","/admin/casesection","/admin/timeline","/admin/footer","/admin/question","/admin/team","/admin/testimonial","/admin/howDifferent","/admin/blog/categories","/admin/contact-section","/admin/product-integration"];return r.jsxs(r.Fragment,{children:[!s&&r.jsx(J5.div,{style:{position:"sticky",top:0,width:"100vw",height:"5px",backgroundColor:"#ff2a00",scaleX:t,transformOrigin:"left",zIndex:9999}}),r.jsx(FX,{progress:n}),!s&&!l&&r.jsx(rV,{}),r.jsxs(IX,{children:[e.pathname.startsWith("/admin")?r.jsx(rB,{children:r.jsx(mX,{})}):r.jsxs(ym,{children:[r.jsx(De,{path:"/",element:r.jsx(MM,{})}),r.jsx(De,{path:"/about",element:r.jsx(_A,{})}),r.jsx(De,{path:"/what-we-do",element:r.jsx(yL,{})}),r.jsx(De,{path:"/industry/:name",element:r.jsx(wX,{})}),r.jsx(De,{path:"/use-case/:name",element:r.jsx(jX,{})}),r.jsx(De,{path:"/platform/:name",element:r.jsx(SX,{})}),r.jsx(De,{path:"/contact",element:r.jsx(gN,{})}),r.jsx(De,{path:"/blogs",element:r.jsx(TN,{})}),r.jsx(De,{path:"/blog-detail/:id",element:r.jsx(YN,{})}),r.jsx(De,{path:"/casestudydetail/:id",element:r.jsx(RX,{})}),r.jsx(De,{path:"/book-a-demo",element:r.jsx(nV,{})}),r.jsx(De,{path:"/pagenotfound",element:r.jsx(xX,{})}),r.jsx(De,{path:"*",element:r.jsx(vm,{to:"/pagenotfound"})})," "]}),!e.pathname.includes("/admin")&&!l&&r.jsx(vV,{})]})]})},IX=d.div``,FX=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({progress:e})=>e}%;
  height: 5px;
  background-color: ${y.theme_red};
  z-index: 1000;
  transition: width 0.2s ease-out;
`;function VX(){return r.jsx(jj,{children:r.jsx(kU,{children:r.jsx(NX,{})})})}const Z4=KC.createRoot(document.getElementById("root"));Z4.render(r.jsx(x.StrictMode,{children:r.jsx(VX,{})}));
