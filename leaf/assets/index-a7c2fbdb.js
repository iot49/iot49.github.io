(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=window,Ke=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),ot=new WeakMap;let It=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ke&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ot.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ot.set(t,e))}return e}toString(){return this.cssText}};const hn=n=>new It(typeof n=="string"?n:n+"",void 0,Ge),_=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,r,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[s+1],n[0]);return new It(t,n,Ge)},un=(n,e)=>{Ke?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),r=me.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=t.cssText,n.appendChild(i)})},at=Ke?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return hn(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var De;const we=window,lt=we.trustedTypes,dn=lt?lt.emptyScript:"",ct=we.reactiveElementPolyfillSupport,He={toAttribute(n,e){switch(e){case Boolean:n=n?dn:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Bt=(n,e)=>e!==n&&(e==e||n==n),Te={attribute:!0,type:String,converter:He,reflect:!1,hasChanged:Bt},Fe="finalized";let V=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const r=this._$Ep(i,t);r!==void 0&&(this._$Ev.set(r,i),e.push(r))}),e}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Te}static finalize(){if(this.hasOwnProperty(Fe))return!1;this[Fe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of i)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)t.unshift(at(r))}else e!==void 0&&t.push(at(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return un(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Te){var r;const s=this.constructor._$Ep(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?i.converter:He).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(e,t){var i;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const o=r.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:He;this._$El=s,this[s]=c.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Bt)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(i)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};V[Fe]=!0,V.elementProperties=new Map,V.elementStyles=[],V.shadowRootOptions={mode:"open"},ct==null||ct({ReactiveElement:V}),((De=we.reactiveElementVersions)!==null&&De!==void 0?De:we.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var je;const $e=window,W=$e.trustedTypes,ht=W?W.createPolicy("lit-html",{createHTML:n=>n}):void 0,Ve="$lit$",L=`lit$${(Math.random()+"").slice(9)}$`,Mt="?"+L,pn=`<${Mt}>`,N=document,ne=()=>N.createComment(""),ie=n=>n===null||typeof n!="object"&&typeof n!="function",zt=Array.isArray,fn=n=>zt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Ie=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,dt=/>/g,M=RegExp(`>|${Ie}(?:([^\\s"'>=/]+)(${Ie}*=${Ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ft=/"/g,Nt=/^(?:script|style|textarea|title)$/i,vn=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),p=vn(1),K=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),vt=new WeakMap,z=N.createTreeWalker(N,129,null,!1);function Ut(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(e):e}const gn=(n,e)=>{const t=n.length-1,i=[];let r,s=e===2?"<svg>":"",o=ee;for(let c=0;c<t;c++){const a=n[c];let l,u,f=-1,d=0;for(;d<a.length&&(o.lastIndex=d,u=o.exec(a),u!==null);)d=o.lastIndex,o===ee?u[1]==="!--"?o=ut:u[1]!==void 0?o=dt:u[2]!==void 0?(Nt.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=M):u[3]!==void 0&&(o=M):o===M?u[0]===">"?(o=r??ee,f=-1):u[1]===void 0?f=-2:(f=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?M:u[3]==='"'?ft:pt):o===ft||o===pt?o=M:o===ut||o===dt?o=ee:(o=M,r=void 0);const v=o===M&&n[c+1].startsWith("/>")?" ":"";s+=o===ee?a+pn:f>=0?(i.push(l),a.slice(0,f)+Ve+a.slice(f)+L+v):a+L+(f===-2?(i.push(void 0),c):v)}return[Ut(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class re{constructor({strings:e,_$litType$:t},i){let r;this.parts=[];let s=0,o=0;const c=e.length-1,a=this.parts,[l,u]=gn(e,t);if(this.el=re.createElement(l,i),z.currentNode=this.el.content,t===2){const f=this.el.content,d=f.firstChild;d.remove(),f.append(...d.childNodes)}for(;(r=z.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes()){const f=[];for(const d of r.getAttributeNames())if(d.endsWith(Ve)||d.startsWith(L)){const v=u[o++];if(f.push(d),v!==void 0){const pe=r.getAttribute(v.toLowerCase()+Ve).split(L),F=/([.?@])?(.*)/.exec(v);a.push({type:1,index:s,name:F[2],strings:pe,ctor:F[1]==="."?bn:F[1]==="?"?yn:F[1]==="@"?wn:Se})}else a.push({type:6,index:s})}for(const d of f)r.removeAttribute(d)}if(Nt.test(r.tagName)){const f=r.textContent.split(L),d=f.length-1;if(d>0){r.textContent=W?W.emptyScript:"";for(let v=0;v<d;v++)r.append(f[v],ne()),z.nextNode(),a.push({type:2,index:++s});r.append(f[d],ne())}}}else if(r.nodeType===8)if(r.data===Mt)a.push({type:2,index:s});else{let f=-1;for(;(f=r.data.indexOf(L,f+1))!==-1;)a.push({type:7,index:s}),f+=L.length-1}s++}}static createElement(e,t){const i=N.createElement("template");return i.innerHTML=e,i}}function G(n,e,t=n,i){var r,s,o,c;if(e===K)return e;let a=i!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[i]:t._$Cl;const l=ie(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((s=a==null?void 0:a._$AO)===null||s===void 0||s.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,t,i)),i!==void 0?((o=(c=t)._$Co)!==null&&o!==void 0?o:c._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=G(n,a._$AS(n,e.values),a,i)),e}class mn{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:N).importNode(i,!0);z.currentNode=s;let o=z.nextNode(),c=0,a=0,l=r[0];for(;l!==void 0;){if(c===l.index){let u;l.type===2?u=new ce(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new $n(o,this,e)),this._$AV.push(u),l=r[++a]}c!==(l==null?void 0:l.index)&&(o=z.nextNode(),c++)}return z.currentNode=N,s}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ce{constructor(e,t,i,r){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ie(e)?e===m||e==null||e===""?(this._$AH!==m&&this._$AR(),this._$AH=m):e!==this._$AH&&e!==K&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):fn(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==m&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(N.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=re.createElement(Ut(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(i);else{const o=new mn(s,this),c=o.u(this.options);o.v(i),this.$(c),this._$AH=o}}_$AC(e){let t=vt.get(e.strings);return t===void 0&&vt.set(e.strings,t=new re(e)),t}T(e){zt(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,r=0;for(const s of e)r===t.length?t.push(i=new ce(this.k(ne()),this.k(ne()),this,this.options)):i=t[r],i._$AI(s),r++;r<t.length&&(this._$AR(i&&i._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class Se{constructor(e,t,i,r,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,r){const s=this.strings;let o=!1;if(s===void 0)e=G(this,e,t,0),o=!ie(e)||e!==this._$AH&&e!==K,o&&(this._$AH=e);else{const c=e;let a,l;for(e=s[0],a=0;a<s.length-1;a++)l=G(this,c[i+a],t,a),l===K&&(l=this._$AH[a]),o||(o=!ie(l)||l!==this._$AH[a]),l===m?e=m:e!==m&&(e+=(l??"")+s[a+1]),this._$AH[a]=l}o&&!r&&this.j(e)}j(e){e===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class bn extends Se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===m?void 0:e}}const _n=W?W.emptyScript:"";class yn extends Se{constructor(){super(...arguments),this.type=4}j(e){e&&e!==m?this.element.setAttribute(this.name,_n):this.element.removeAttribute(this.name)}}class wn extends Se{constructor(e,t,i,r,s){super(e,t,i,r,s),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:m)===K)return;const r=this._$AH,s=e===m&&r!==m||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==m&&(r===m||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class $n{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}}const gt=$e.litHtmlPolyfillSupport;gt==null||gt(re,ce),((je=$e.litHtmlVersions)!==null&&je!==void 0?je:$e.litHtmlVersions=[]).push("2.8.0");const En=(n,e,t)=>{var i,r;const s=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=s._$litPart$;if(o===void 0){const c=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=o=new ce(e.insertBefore(ne(),c),c,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Be,Me;let g=class extends V{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=En(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return K}};g.finalized=!0,g._$litElement$=!0,(Be=globalThis.litElementHydrateSupport)===null||Be===void 0||Be.call(globalThis,{LitElement:g});const mt=globalThis.litElementPolyfillSupport;mt==null||mt({LitElement:g});((Me=globalThis.litElementVersions)!==null&&Me!==void 0?Me:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:r,elements:s}=i;return{kind:r,elements:s,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xn=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},kn=(n,e,t)=>{e.constructor.createProperty(t,n)};function h(n){return(e,t)=>t!==void 0?kn(n,e,t):xn(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(n){return h({...n,state:!0})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ze;((ze=window.HTMLSlotElement)===null||ze===void 0?void 0:ze.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ht=class extends Event{constructor(e,t,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=i??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let bt=class{constructor(e,t,i,r){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const s=t;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=t,this.callback=i,this.subscribe=r??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ht(this.context,this.t,this.subscribe))}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Cn{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const i=t||!Object.is(e,this.o);this.o=e,i&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:i}]of this.subscriptions)t(this.o,i)},e!==void 0&&(this.value=e)}addCallback(e,t,i){if(!i)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:r}=this.subscriptions.get(e);e(this.value,r)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Pn extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}}class Ne extends Cn{constructor(e,t,i){var r,s;super(t.context!==void 0?t.initialValue:i),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const a=new Set;for(const[l,{consumerHost:u}]of this.subscriptions)a.has(l)||(a.add(l),u.dispatchEvent(new Ht(this.context,l,!0)));o.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),(s=(r=this.host).addController)==null||s.call(r,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Pn(this.context))}}/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j({context:n,subscribe:e}){return(t,i)=>{typeof i=="object"?i.addInitializer(function(){new bt(this,{context:n,callback:r=>{this[i.name]=r},subscribe:e})}):t.constructor.addInitializer(r=>{new bt(r,{context:n,callback:s=>{r[i]=s},subscribe:e})})}}function Ee(n){return n=n||[],Array.isArray(n)?n:[n]}function x(n){return`[Vaadin.Router] ${n}`}function An(n){if(typeof n!="object")return String(n);const e=Object.prototype.toString.call(n).match(/ (.*)\]$/)[1];return e==="Object"||e==="Array"?`${e} ${JSON.stringify(n)}`:e}const xe="module",ke="nomodule",qe=[xe,ke];function _t(n){if(!n.match(/.+\.[m]?js$/))throw new Error(x(`Unsupported type for bundle "${n}": .js or .mjs expected.`))}function Ft(n){if(!n||!E(n.path))throw new Error(x('Expected route config to be an object with a "path" string property, or an array of such objects'));const e=n.bundle,t=["component","redirect","bundle"];if(!U(n.action)&&!Array.isArray(n.children)&&!U(n.children)&&!Ce(e)&&!t.some(i=>E(n[i])))throw new Error(x(`Expected route config "${n.path}" to include either "${t.join('", "')}" or "action" function but none found.`));if(e)if(E(e))_t(e);else if(qe.some(i=>i in e))qe.forEach(i=>i in e&&_t(e[i]));else throw new Error(x('Expected route bundle to include either "'+ke+'" or "'+xe+'" keys, or both'));n.redirect&&["bundle","component"].forEach(i=>{i in n&&console.warn(x(`Route config "${n.path}" has both "redirect" and "${i}" properties, and "redirect" will always override the latter. Did you mean to only use "${i}"?`))})}function yt(n){Ee(n).forEach(e=>Ft(e))}function wt(n,e){let t=document.head.querySelector('script[src="'+n+'"][async]');return t||(t=document.createElement("script"),t.setAttribute("src",n),e===xe?t.setAttribute("type",xe):e===ke&&t.setAttribute(ke,""),t.async=!0),new Promise((i,r)=>{t.onreadystatechange=t.onload=s=>{t.__dynamicImportLoaded=!0,i(s)},t.onerror=s=>{t.parentNode&&t.parentNode.removeChild(t),r(s)},t.parentNode===null?document.head.appendChild(t):t.__dynamicImportLoaded&&i()})}function Sn(n){return E(n)?wt(n):Promise.race(qe.filter(e=>e in n).map(e=>wt(n[e],e)))}function te(n,e){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${n}`,{cancelable:n==="go",detail:e}))}function Ce(n){return typeof n=="object"&&!!n}function U(n){return typeof n=="function"}function E(n){return typeof n=="string"}function Vt(n){const e=new Error(x(`Page not found (${n.pathname})`));return e.context=n,e.code=404,e}const q=new class{};function On(n){const e=n.port,t=n.protocol,s=t==="http:"&&e==="80"||t==="https:"&&e==="443"?n.hostname:n.host;return`${t}//${s}`}function $t(n){if(n.defaultPrevented||n.button!==0||n.shiftKey||n.ctrlKey||n.altKey||n.metaKey)return;let e=n.target;const t=n.composedPath?n.composedPath():n.path||[];for(let c=0;c<t.length;c++){const a=t[c];if(a.nodeName&&a.nodeName.toLowerCase()==="a"){e=a;break}}for(;e&&e.nodeName.toLowerCase()!=="a";)e=e.parentNode;if(!e||e.nodeName.toLowerCase()!=="a"||e.target&&e.target.toLowerCase()!=="_self"||e.hasAttribute("download")||e.hasAttribute("router-ignore")||e.pathname===window.location.pathname&&e.hash!==""||(e.origin||On(e))!==window.location.origin)return;const{pathname:r,search:s,hash:o}=e;te("go",{pathname:r,search:s,hash:o})&&(n.preventDefault(),n&&n.type==="click"&&window.scrollTo(0,0))}const Rn={activate(){window.document.addEventListener("click",$t)},inactivate(){window.document.removeEventListener("click",$t)}},Ln=/Trident/.test(navigator.userAgent);Ln&&!U(window.PopStateEvent)&&(window.PopStateEvent=function(n,e){e=e||{};var t=document.createEvent("Event");return t.initEvent(n,!!e.bubbles,!!e.cancelable),t.state=e.state||null,t},window.PopStateEvent.prototype=window.Event.prototype);function Et(n){if(n.state==="vaadin-router-ignore")return;const{pathname:e,search:t,hash:i}=window.location;te("go",{pathname:e,search:t,hash:i})}const Dn={activate(){window.addEventListener("popstate",Et)},inactivate(){window.removeEventListener("popstate",Et)}};var Z=Zt,Tn=Je,jn=zn,In=Kt,Bn=Jt,qt="/",Wt="./",Mn=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Je(n,e){for(var t=[],i=0,r=0,s="",o=e&&e.delimiter||qt,c=e&&e.delimiters||Wt,a=!1,l;(l=Mn.exec(n))!==null;){var u=l[0],f=l[1],d=l.index;if(s+=n.slice(r,d),r=d+u.length,f){s+=f[1],a=!0;continue}var v="",pe=n[r],F=l[2],sn=l[3],on=l[4],fe=l[5];if(!a&&s.length){var Le=s.length-1;c.indexOf(s[Le])>-1&&(v=s[Le],s=s.slice(0,Le))}s&&(t.push(s),s="",a=!1);var an=v!==""&&pe!==void 0&&pe!==v,ln=fe==="+"||fe==="*",cn=fe==="?"||fe==="*",rt=v||o,st=sn||on;t.push({name:F||i++,prefix:v,delimiter:rt,optional:cn,repeat:ln,partial:an,pattern:st?Nn(st):"[^"+R(rt)+"]+?"})}return(s||r<n.length)&&t.push(s+n.substr(r)),t}function zn(n,e){return Kt(Je(n,e))}function Kt(n){for(var e=new Array(n.length),t=0;t<n.length;t++)typeof n[t]=="object"&&(e[t]=new RegExp("^(?:"+n[t].pattern+")$"));return function(i,r){for(var s="",o=r&&r.encode||encodeURIComponent,c=0;c<n.length;c++){var a=n[c];if(typeof a=="string"){s+=a;continue}var l=i?i[a.name]:void 0,u;if(Array.isArray(l)){if(!a.repeat)throw new TypeError('Expected "'+a.name+'" to not repeat, but got array');if(l.length===0){if(a.optional)continue;throw new TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(u=o(l[f],a),!e[c].test(u))throw new TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'"');s+=(f===0?a.prefix:a.delimiter)+u}continue}if(typeof l=="string"||typeof l=="number"||typeof l=="boolean"){if(u=o(String(l),a),!e[c].test(u))throw new TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+u+'"');s+=a.prefix+u;continue}if(a.optional){a.partial&&(s+=a.prefix);continue}throw new TypeError('Expected "'+a.name+'" to be '+(a.repeat?"an array":"a string"))}return s}}function R(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Nn(n){return n.replace(/([=!:$/()])/g,"\\$1")}function Gt(n){return n&&n.sensitive?"":"i"}function Un(n,e){if(!e)return n;var t=n.source.match(/\((?!\?)/g);if(t)for(var i=0;i<t.length;i++)e.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return n}function Hn(n,e,t){for(var i=[],r=0;r<n.length;r++)i.push(Zt(n[r],e,t).source);return new RegExp("(?:"+i.join("|")+")",Gt(t))}function Fn(n,e,t){return Jt(Je(n,t),e,t)}function Jt(n,e,t){t=t||{};for(var i=t.strict,r=t.start!==!1,s=t.end!==!1,o=R(t.delimiter||qt),c=t.delimiters||Wt,a=[].concat(t.endsWith||[]).map(R).concat("$").join("|"),l=r?"^":"",u=n.length===0,f=0;f<n.length;f++){var d=n[f];if(typeof d=="string")l+=R(d),u=f===n.length-1&&c.indexOf(d[d.length-1])>-1;else{var v=d.repeat?"(?:"+d.pattern+")(?:"+R(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.partial?l+=R(d.prefix)+"("+v+")?":l+="(?:"+R(d.prefix)+"("+v+"))?":l+=R(d.prefix)+"("+v+")"}}return s?(i||(l+="(?:"+o+")?"),l+=a==="$"?"$":"(?="+a+")"):(i||(l+="(?:"+o+"(?="+a+"))?"),u||(l+="(?="+o+"|"+a+")")),new RegExp(l,Gt(t))}function Zt(n,e,t){return n instanceof RegExp?Un(n,e):Array.isArray(n)?Hn(n,e,t):Fn(n,e,t)}Z.parse=Tn;Z.compile=jn;Z.tokensToFunction=In;Z.tokensToRegExp=Bn;const{hasOwnProperty:Vn}=Object.prototype,We=new Map;We.set("|false",{keys:[],pattern:/(?:)/});function xt(n){try{return decodeURIComponent(n)}catch{return n}}function qn(n,e,t,i,r){t=!!t;const s=`${n}|${t}`;let o=We.get(s);if(!o){const l=[];o={keys:l,pattern:Z(n,l,{end:t,strict:n===""})},We.set(s,o)}const c=o.pattern.exec(e);if(!c)return null;const a=Object.assign({},r);for(let l=1;l<c.length;l++){const u=o.keys[l-1],f=u.name,d=c[l];(d!==void 0||!Vn.call(a,f))&&(u.repeat?a[f]=d?d.split(u.delimiter).map(xt):[]:a[f]=d&&xt(d))}return{path:c[0],keys:(i||[]).concat(o.keys),params:a}}function Xt(n,e,t,i,r){let s,o,c=0,a=n.path||"";return a.charAt(0)==="/"&&(t&&(a=a.substr(1)),t=!0),{next(l){if(n===l)return{done:!0};const u=n.__children=n.__children||n.children;if(!s&&(s=qn(a,e,!u,i,r),s))return{done:!1,value:{route:n,keys:s.keys,params:s.params,path:s.path}};if(s&&u)for(;c<u.length;){if(!o){const d=u[c];d.parent=n;let v=s.path.length;v>0&&e.charAt(v)==="/"&&(v+=1),o=Xt(d,e.substr(v),t,s.keys,s.params)}const f=o.next(l);if(!f.done)return{done:!1,value:f.value};o=null,c++}return{done:!0}}}}function Wn(n){if(U(n.route.action))return n.route.action(n)}function Kn(n,e){let t=e;for(;t;)if(t=t.parent,t===n)return!0;return!1}function Gn(n){let e=`Path '${n.pathname}' is not properly resolved due to an error.`;const t=(n.route||{}).path;return t&&(e+=` Resolution had failed on route: '${t}'`),e}function Jn(n,e){const{route:t,path:i}=e;if(t&&!t.__synthetic){const r={path:i,route:t};if(!n.chain)n.chain=[];else if(t.parent){let s=n.chain.length;for(;s--&&n.chain[s].route&&n.chain[s].route!==t.parent;)n.chain.pop()}n.chain.push(r)}}class se{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||Wn,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){yt(e);const t=[...Ee(e)];this.root.__children=t}addRoutes(e){return yt(e),this.root.__children.push(...Ee(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,E(e)?{pathname:e}:e),i=Xt(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let s=null,o=null,c=t;function a(l,u=s.value.route,f){const d=f===null&&s.value.route;return s=o||i.next(d),o=null,!l&&(s.done||!Kn(u,s.value.route))?(o=s,Promise.resolve(q)):s.done?Promise.reject(Vt(t)):(c=Object.assign(c?{chain:c.chain?c.chain.slice(0):[]}:{},t,s.value),Jn(c,s.value),Promise.resolve(r(c)).then(v=>v!=null&&v!==q?(c.result=v.result||v,c):a(l,u,v)))}return t.next=a,Promise.resolve().then(()=>a(!0,this.root)).catch(l=>{const u=Gn(c);if(l?console.warn(u):l=new Error(u),l.context=l.context||c,l instanceof DOMException||(l.code=l.code||500),this.errorHandler)return c.result=this.errorHandler(l),c;throw l})}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,i=this.constructor.__createUrl(e,t).href;if(i.slice(0,t.length)===t)return i.slice(t.length)}}se.pathToRegexp=Z;const{pathToRegexp:kt}=se,Ct=new Map;function Qt(n,e,t){const i=e.name||e.component;if(i&&(n.has(i)?n.get(i).push(e):n.set(i,[e])),Array.isArray(t))for(let r=0;r<t.length;r++){const s=t[r];s.parent=e,Qt(n,s,s.__children||s.children)}}function Pt(n,e){const t=n.get(e);if(t&&t.length>1)throw new Error(`Duplicate route with name "${e}". Try seting unique 'name' route properties.`);return t&&t[0]}function At(n){let e=n.path;return e=Array.isArray(e)?e[0]:e,e!==void 0?e:""}function Zn(n,e={}){if(!(n instanceof se))throw new TypeError("An instance of Resolver is expected");const t=new Map;return(i,r)=>{let s=Pt(t,i);if(!s&&(t.clear(),Qt(t,n.root,n.root.__children),s=Pt(t,i),!s))throw new Error(`Route "${i}" not found`);let o=Ct.get(s.fullPath);if(!o){let a=At(s),l=s.parent;for(;l;){const v=At(l);v&&(a=v.replace(/\/$/,"")+"/"+a.replace(/^\//,"")),l=l.parent}const u=kt.parse(a),f=kt.tokensToFunction(u),d=Object.create(null);for(let v=0;v<u.length;v++)E(u[v])||(d[u[v].name]=!0);o={toPath:f,keys:d},Ct.set(a,o),s.fullPath=a}let c=o.toPath(r,e)||"/";if(e.stringifyQueryParams&&r){const a={},l=Object.keys(r);for(let f=0;f<l.length;f++){const d=l[f];o.keys[d]||(a[d]=r[d])}const u=e.stringifyQueryParams(a);u&&(c+=u.charAt(0)==="?"?u:`?${u}`)}return c}}let St=[];function Xn(n){St.forEach(e=>e.inactivate()),n.forEach(e=>e.activate()),St=n}const Qn=n=>{const e=getComputedStyle(n).getPropertyValue("animation-name");return e&&e!=="none"},Yn=(n,e)=>{const t=()=>{n.removeEventListener("animationend",t),e()};n.addEventListener("animationend",t)};function Ot(n,e){return n.classList.add(e),new Promise(t=>{if(Qn(n)){const i=n.getBoundingClientRect(),r=`height: ${i.bottom-i.top}px; width: ${i.right-i.left}px`;n.setAttribute("style",`position: absolute; ${r}`),Yn(n,()=>{n.classList.remove(e),n.removeAttribute("style"),t()})}else n.classList.remove(e),t()})}const ei=256;function Ue(n){return n!=null}function ti(n){const e=Object.assign({},n);return delete e.next,e}function $({pathname:n="",search:e="",hash:t="",chain:i=[],params:r={},redirectFrom:s,resolver:o},c){const a=i.map(l=>l.route);return{baseUrl:o&&o.baseUrl||"",pathname:n,search:e,hash:t,routes:a,route:c||a.length&&a[a.length-1]||null,params:r,redirectFrom:s,getUrl:(l={})=>_e(w.pathToRegexp.compile(Yt(a))(Object.assign({},r,l)),o)}}function Rt(n,e){const t=Object.assign({},n.params);return{redirect:{pathname:e,from:n.pathname,params:t}}}function ni(n,e){e.location=$(n);const t=n.chain.map(i=>i.route).indexOf(n.route);return n.chain[t].element=e,e}function be(n,e,t){if(U(n))return n.apply(t,e)}function Lt(n,e,t){return i=>{if(i&&(i.cancel||i.redirect))return i;if(t)return be(t[n],e,t)}}function ii(n,e){if(!Array.isArray(n)&&!Ce(n))throw new Error(x(`Incorrect "children" value for the route ${e.path}: expected array or object, but got ${n}`));e.__children=[];const t=Ee(n);for(let i=0;i<t.length;i++)Ft(t[i]),e.__children.push(t[i])}function ve(n){if(n&&n.length){const e=n[0].parentNode;for(let t=0;t<n.length;t++)e.removeChild(n[t])}}function _e(n,e){const t=e.__effectiveBaseUrl;return t?e.constructor.__createUrl(n.replace(/^\//,""),t).pathname:n}function Yt(n){return n.map(e=>e.path).reduce((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e,"")}class w extends se{constructor(e,t){const i=document.head.querySelector("base"),r=i&&i.getAttribute("href");super([],Object.assign({baseUrl:r&&se.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=o=>this.__resolveRoute(o);const s=w.NavigationTrigger;w.setTriggers.apply(w,Object.keys(s).map(o=>s[o])),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=$({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let i=Promise.resolve();U(t.children)&&(i=i.then(()=>t.children(ti(e))).then(s=>{!Ue(s)&&!U(t.children)&&(s=t.children),ii(s,t)}));const r={redirect:s=>Rt(e,s),component:s=>{const o=document.createElement(s);return this.__createdByRouter.set(o,!0),o}};return i.then(()=>{if(this.__isLatestRender(e))return be(t.action,[e,r],t)}).then(s=>{if(Ue(s)&&(s instanceof HTMLElement||s.redirect||s===q))return s;if(E(t.redirect))return r.redirect(t.redirect);if(t.bundle)return Sn(t.bundle).then(()=>{},()=>{throw new Error(x(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})}).then(s=>{if(Ue(s))return s;if(E(t.component))return r.component(t.component)})}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const i=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},E(e)?{pathname:e}:e,{__renderId:i});return this.ready=this.resolve(r).then(s=>this.__fullyResolveChain(s)).then(s=>{if(this.__isLatestRender(s)){const o=this.__previousContext;if(s===o)return this.__updateBrowserHistory(o,!0),this.location;if(this.location=$(s),t&&this.__updateBrowserHistory(s,i===1),te("location-changed",{router:this,location:this.location}),s.__skipAttach)return this.__copyUnchangedElements(s,o),this.__previousContext=s,this.location;this.__addAppearingContent(s,o);const c=this.__animateIfNeeded(s);return this.__runOnAfterEnterCallbacks(s),this.__runOnAfterLeaveCallbacks(s,o),c.then(()=>{if(this.__isLatestRender(s))return this.__removeDisappearingContent(),this.__previousContext=s,this.location})}}).catch(s=>{if(i===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ve(this.__outlet&&this.__outlet.children),this.location=$(Object.assign(r,{resolver:this})),te("error",Object.assign({router:this,error:s},r)),s}),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then(i=>{const s=i!==t?i:e,c=_e(Yt(i.chain),i.resolver)===i.pathname,a=(l,u=l.route,f)=>l.next(void 0,u,f).then(d=>d===null||d===q?c?l:u.parent!==null?a(l,u.parent,d):d:d);return a(i).then(l=>{if(l===null||l===q)throw Vt(s);return l&&l!==q&&l!==i?this.__fullyResolveChain(s,l):this.__amendWithOnBeforeCallbacks(i)})})}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(ni(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then(i=>this.__findComponentContextAfterAllRedirects(i)):t instanceof Error?Promise.reject(t):Promise.reject(new Error(x(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${An(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then(t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},i=t.chain||[],r=e.chain;let s=Promise.resolve();const o=()=>({cancel:!0}),c=a=>Rt(e,a);if(e.__divergedChainIndex=0,e.__skipAttach=!1,i.length){for(let a=0;a<Math.min(i.length,r.length)&&!(i[a].route!==r[a].route||i[a].path!==r[a].path&&i[a].element!==r[a].element||!this.__isReusableElement(i[a].element,r[a].element));a=++e.__divergedChainIndex);if(e.__skipAttach=r.length===i.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let a=r.length-1;a>=0;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a]);for(let a=0;a<r.length;a++)s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),i[a].element.location=$(e,i[a].route)}else for(let a=i.length-1;a>=e.__divergedChainIndex;a--)s=this.__runOnBeforeLeaveCallbacks(s,e,{prevent:o},i[a])}if(!e.__skipAttach)for(let a=0;a<r.length;a++)a<e.__divergedChainIndex?a<i.length&&i[a].element&&(i[a].element.location=$(e,i[a].route)):(s=this.__runOnBeforeEnterCallbacks(s,e,{prevent:o,redirect:c},r[a]),r[a].element&&(r[a].element.location=$(e,r[a].route)));return s.then(a=>{if(a){if(a.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(a.redirect)return this.__redirect(a.redirect,e.__redirectCount,e.__renderId)}return e})}__runOnBeforeLeaveCallbacks(e,t,i,r){const s=$(t);return e.then(o=>{if(this.__isLatestRender(t))return Lt("onBeforeLeave",[s,i,this],r.element)(o)}).then(o=>{if(!(o||{}).redirect)return o})}__runOnBeforeEnterCallbacks(e,t,i,r){const s=$(t,r.route);return e.then(o=>{if(this.__isLatestRender(t))return Lt("onBeforeEnter",[s,i,this],r.element)(o)})}__isReusableElement(e,t){return e&&t?this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t:!1}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,i){if(t>ei)throw new Error(x(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:i})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(x(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:i=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==i){const s=r?"replaceState":"pushState";window.history[s](null,document.title,e+t+i),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let i=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const s=t&&t.chain[r].element;if(s)if(s.parentNode===i)e.chain[r].element=s,i=s;else break}return i}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const i=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(i.children).filter(s=>this.__addedByRouter.get(s)&&s!==e.result);let r=i;for(let s=e.__divergedChainIndex;s<e.chain.length;s++){const o=e.chain[s].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===i&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ve(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ve(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let i=t.chain.length-1;i>=e.__divergedChainIndex&&this.__isLatestRender(e);i--){const r=t.chain[i].element;if(r)try{const s=$(e);be(r.onAfterLeave,[s,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ve(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const i=e.chain[t].element||{},r=$(e,e.chain[t].route);be(i.onAfterEnter,[r,{},e.resolver],i)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],i=(this.__appearingContent||[])[0],r=[],s=e.chain;let o;for(let c=s.length;c>0;c--)if(s[c-1].route.animate){o=s[c-1].route.animate;break}if(t&&i&&o){const c=Ce(o)&&o.leave||"leaving",a=Ce(o)&&o.enter||"entering";r.push(Ot(t,c)),r.push(Ot(i,a))}return Promise.all(r).then(()=>e)}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:i,hash:r}=e?e.detail:window.location;E(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:i,hash:r},!0))}static setTriggers(...e){Xn(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=Zn(this)),_e(this.__urlForName(e,t),this)}urlForPath(e,t){return _e(w.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:i,hash:r}=E(e)?this.__createUrl(e,"http://a"):e;return te("go",{pathname:t,search:i,hash:r})}}const ri=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,ye=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function si(){function n(){return!0}return en(n)}function oi(){try{return ai()?!0:li()?ye?!ci():!si():!1}catch{return!1}}function ai(){return localStorage.getItem("vaadin.developmentmode.force")}function li(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function ci(){return!!(ye&&Object.keys(ye).map(e=>ye[e]).filter(e=>e.productionMode).length>0)}function en(n,e){if(typeof n!="function")return;const t=ri.exec(n.toString());if(t)try{n=new Function(t[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return n(e)}window.Vaadin=window.Vaadin||{};const Dt=function(n,e){if(window.Vaadin.developmentMode)return en(n,e)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=oi());function hi(){}const ui=function(){if(typeof Dt=="function")return Dt(hi)};window.Vaadin=window.Vaadin||{};window.Vaadin.registrations=window.Vaadin.registrations||[];window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"});ui();w.NavigationTrigger={POPSTATE:Dn,CLICK:Rn};class di{constructor(e){this._connected=!1,this.event_bus=e}connect(e){console.log("ws-bus.connect",e),this.ws=new WebSocket(e),console.log("ws",this.ws),this.ws.addEventListener("message",t=>{this.event_bus.fireOnEvent(t.data)}),this.ws.addEventListener("open",()=>{this._connected=!0,this.event_bus.fireConnectDisconnectEvent()}),this.ws.addEventListener("close",()=>{this._connected=!1,this.event_bus.fireConnectDisconnectEvent()})}disconnect(){this._connected=!1,this.ws.close()}get connected(){return this._connected}postEvent(e){if(this.connected)try{this.ws.send(e)}catch{console.log("send failed for",e)}}}class pi{constructor(e){this._connected=!1,this.event_bus=e}connect(e){console.log("BleBus.connect not implemented",e)}disconnect(){}get connected(){return this._connected}async postEvent(e){console.log("BleBus.post event",e)}onmessage(e){console.log("BleBus.onmessage",e),this.event_bus.fireOnEvent(e)}onopen(){this._connected=!0,this.event_bus.fireConnectDisconnectEvent()}onclose(){this._connected=!1,this.event_bus.fireConnectDisconnectEvent()}}class fi{constructor(){this.ws=new di(this),this.ble=new pi(this),this._connectDisconnectEventListeners=new Array,this._onEventListeners=new Array}get connected(){return this.ws.connected||this.ble.connected}disconnect(){this.ws.disconnect(),this.ble.disconnect()}connect_ws(e){if(this.connected){console.log("EventBus.connect_ws: already connected (ignored)",e);return}this.ws.connect(e)}connect_ble(e){if(this.connected){console.log("EventBus.connect_ble: already connected (ignored)",e);return}this.ble.connect(e)}async postEvent(e){const t=JSON.stringify(e);this.ws.connected&&this.ws.postEvent(t),this.ble.connected&&this.ble.postEvent(t)}addConnectDisconnectEventListener(e){this._connectDisconnectEventListeners.includes(e)||this._connectDisconnectEventListeners.push(e)}removeConnectDisconnectEventListener(e){const t=this._connectDisconnectEventListeners.indexOf(e);t>-1&&this._connectDisconnectEventListeners.splice(t,1)}addOnEventListener(e){this._onEventListeners.includes(e)||this._onEventListeners.push(e)}removeOnEventListener(e){const t=this._onEventListeners.indexOf(e);t>-1&&this._onEventListeners.splice(t,1)}fireConnectDisconnectEvent(){this.connected?(console.log("eventbus.fireConnectDisconnectEvent - CONNECTED"),setInterval(this.ping.bind(this),1e3),this.wdt=setTimeout(this.wdt_timeout.bind(this),2e3),w.go("/")):(console.log("eventbus.fireConnectDisconnectEvent - DISCONNECTED"),clearInterval(this.wdt),w.go("/connect")),this._connectDisconnectEventListeners.forEach(e=>e())}fireOnEvent(e){clearInterval(this.wdt),this.wdt=setTimeout(this.wdt_timeout.bind(this),2e3);const t=JSON.parse(e);this._onEventListeners.forEach(i=>i(t))}ping(){this.postEvent({type:"ping"})}wdt_timeout(){console.log("eventbus.wdt - disconnect"),this.disconnect(),w.go("/connect")}}const he=Symbol("eventbus"),Ze=Symbol("state"),Xe=Symbol("config");function vi(n,e){const t=e.split(".")[1];if(t in n.devices)return t;for(const[i,r]of Object.entries(n.devices))if(r.alias==t)return i;return t}function gi(n,e){try{const i=n.entities[e].name;if(i)return i}catch{}try{const i=n.devices[this.device_id(n,e)].name;if(i)return i}catch{}try{const i=n.attributes[e.split(".")[2]].name;if(i)return i}catch{}const t=e.split(".")[2];return t.charAt(0).toUpperCase()+t.slice(1)}function mi(n,e,t){try{const i=n.entities[e][t];if(i)return i}catch{}try{const i=n.attributes[e.split(".")[2]][t];if(i)return i}catch{}try{const i=n.attributes["*"][t];if(i)return i}catch{}}const Tt={get(n,e,t){const i=window.leaf.config,r=n.entity_id;switch(e){case"entity_id":return r;case"value":return n.value;case"timestamp":return n.timestamp;case"name":return gi(i,r);case"device_id":return vi(i,r);default:return mi(i,r,e)}}};var bi=Object.defineProperty,_i=Object.getOwnPropertyDescriptor,yi=(n,e,t,i)=>{for(var r=i>1?void 0:i?_i(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&bi(e,t,r),r};let jt=class extends g{constructor(){super(),this._eventbus=new fi,this._eventbusProvider=new Ne(this,{context:he,initialValue:this._eventbus}),this._state=new Map,this._stateProvider=new Ne(this,{context:Ze,initialValue:this._state}),this._configProvider=new Ne(this,{context:Xe}),window.leaf={},window.leaf.state=this._state,this._eventbus.addConnectDisconnectEventListener(()=>{this._eventbus&&(this._eventbus.postEvent({type:"get_config"}),this._eventbus.postEvent({type:"get_state"})),this._eventbusProvider.setValue(this._eventbus,!0)}),this._eventbus.addOnEventListener(n=>{switch(n.type){case"get_config_":this.patch_config(n.data),this._configProvider.setValue(n.data,!0),window.leaf.config=n.data;break;case"get_state_":for(const[t,i]of Object.entries(n.data)){const r=new Proxy({entity_id:t,value:i},Tt);this._state.set(t,r)}this._stateProvider.setValue(this._state,!0);break;case"state_update":const e=new Proxy(n,Tt);this._state.set(n.entity_id,e),this._stateProvider.setValue(this._state,!0);break}})}patch_config(n){n.views[0].cards[0].entities[0].icon="add_circle"}firstUpdated(n){super.firstUpdated(n),new w(this.shadowRoot.querySelector("#outlet")).setRoutes([{path:"/view/:id",component:"leaf-view"},{path:"/connect",component:"leaf-connect"},{path:"/log",component:"leaf-log"},{path:"/settings",component:"leaf-settings"},{path:"(.*)",redirect:"/settings"}]),w.go(this._eventbus.connected?"/":"/connect")}render(){return console.log("render leaf-main"),p`
      <main>
        <div id="outlet"></div>
      </main>
    `}};jt=yi([T("leaf-main")],jt);var wi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,Qe=(n,e,t,i)=>{for(var r=i>1?void 0:i?$i(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&wi(e,t,r),r};let oe=class extends g{render(){return p`
      <div class="page ${this.mobile?"mobile":""}">
        <nav theme="view-theme">
          <slot name="nav"></slot>
          <div class="menu">
            <kor-icon icon="more_vert" color="white"></kor-icon>
            <div class="dropdown">
              <a href="/connect">
                <kor-menu-item 
                  icon="sync_alt" 
                  label=${this.eventbus.connected?"Disconnect":"Connect"}>
                </kor-menu-item>
              </a>
              <a href="/log">
                <kor-menu-item 
                  icon="cabin" label="Log" 
                  ?disabled=${!this.eventbus.connected}>
                </kor-menu-item>
              </a>
              <a href="/settings">
                <kor-menu-item 
                  icon="settings" label="Settings"
                  ?disabled=${!this.eventbus.connected}>
                </kor-menu-item>
              </a>
            </div>
          </div>  
        </nav>
        <main>
          <slot></slot>
        </main>
      </div>
    `}};oe.styles=[_`
      :host {
        --base-55: 22, 122, 22;
      }
      a { text-decoration: none; }
      .page {
        height: 100vh;
        display: flex;
        flex-direction: column;
      }

      nav {
        display: flex;
        align-items: center;
        min-height: 2.75rem;
        line-height: 1rem;
        padding: 0 0.8rem;
        background-color: rgb(var(--base-0));
        color: white;
        font-weight: bold;
        font-size: 150%;
      }

      .menu {
        color: var(--bg-color);
        margin-left: auto;
        outline: none;
      }

      .dropdown {
        display: none;
        position: absolute;
        right: 0.5rem;
        top: 2rem;
        bottom: auto;
        color: black;
        padding: 0.8rem;
        border-radius: 0.5rem;
        font-size: 75%;
        background-color: rgb(--var(base-4));
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;        
      }
      .menu:hover .dropdown {
        display: inline;
      }

      main {
        background-color: var(--bg-color);
        overflow-y: auto;
        height: 100%;
      }

      @media screen and (max-width: 400px) {
        .mobile {
          flex-direction: column-reverse;
        }
        .mobile > nav > .menu > .dropdown {
          top: auto;
          bottom: 2rem;
        }
      }
      `];Qe([h({type:Boolean})],oe.prototype,"mobile",2);Qe([j({context:he,subscribe:!1}),h({attribute:!1})],oe.prototype,"eventbus",2);oe=Qe([T("leaf-page")],oe);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ei=(n,e,t)=>{for(const i of e)if(i[0]===n)return(0,i[1])();return t==null?void 0:t()};var xi=Object.defineProperty,ki=Object.getOwnPropertyDescriptor,tn=(n,e,t,i)=>{for(var r=i>1?void 0:i?ki(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&xi(e,t,r),r};let Pe=class extends g{get view_id(){const n=window.location.pathname,e=Number(n.substring(n.lastIndexOf("/")+1));return e||0}render(){if(console.log("render leaf-view",this.view_id),!this.config)return p`<kor-spinner label="Loading configuration ..."></kor-spinner>`;const n=this.config.views,e=this.view_id>=n.length?0:this.view_id,t=n[e].cards;return p`
      <leaf-page mobile theme="view-theme">
        <nav slot="nav">
          ${n.map((i,r)=>p`<a href="/view/${r}" class="${r==e?"selected":""}"><kor-icon color="white" icon="${i.icon}"></kor-icon></a>`)}
        </nav>
        
        ${t.map(i=>Ei(i.type,[["entities",()=>p`<leaf-entities .card=${i}></leaf-entities>`]],()=>p`<h1>Unknown card type: ${i.type}</h1>`))}
      </leaf-page>`}};Pe.styles=[_`
      * {
        text-decoration: none;
      }
      nav {
        display: flex;
      }
      nav > a {
        color: green;
        margin-right: 1rem;
      }
      nav > a:hover {
        border-bottom: 2px solid yellow;
      }
      .selected {
        border-bottom: 2px solid white;
      }
    `];tn([j({context:Xe,subscribe:!0}),h({attribute:!1})],Pe.prototype,"config",2);Pe=tn([T("leaf-view")],Pe);var Ci=Object.defineProperty,Pi=Object.getOwnPropertyDescriptor,Ye=(n,e,t,i)=>{for(var r=i>1?void 0:i?Pi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ci(e,t,r),r};"TextEncoder"in window||alert("Browser does not support TextEncoder, please upgrade!");"bluetooth"in navigator||alert("Browser does not support Bluetooth, please upgrade!");let ae=class extends g{constructor(){super(...arguments),this.connecting=!1}render(){return console.log("render leaf-connect"),this.connecting?p`<kor-spinner label="Connecting ..."></kor-spinner>`:this.eventbus.connected?p`
        <leaf-page>
          <nav slot="nav">Disconnect</nav>

          <div class="field">
            disconnect
            <kor-button @click=${this.disconnect} label="Disconnect">
              <kor-icon icon="close" color="white" size="m"></kor-icon>
            </kor-button>
          </div>

        </leaf-page>
      `:p`
      <leaf-page>
        <nav slot="nav">Connect</nav>

        <div class="field">
            <kor-input id="ws" label="WS URL" value="ws://10.0.0.177/ws"></kor-input>
            <kor-button @click=${this.connect_ws} label="Connect WS" color="primary">
                <kor-icon icon="wifi" color="white" size="m"></kor-icon>
            </kor-button>
        </div>

        <div class="field">
            <kor-input id="ble" label="APP" value="RV"></kor-input>
            <kor-button @click=${this.connect_ble} label="Connect BLE" color="primary">
                <kor-icon icon="bluetooth" color="white" size="m"></kor-icon>
            </kor-button>
        </div>
      </leaf-page>
    `}connect_ws(){this.connecting=!0;const n=this.shadowRoot.getElementById("ws").value;console.group("leaf-connnect connect_ws, eventbus = ",typeof this.eventbus,this.eventbus),this.eventbus.connect_ws(n)}connect_ble(){this.connecting=!0;const n=this.shadowRoot.getElementById("ble").value;this.eventbus.connect_ble(n)}disconnect(){this.eventbus.disconnect()}};ae.styles=_`
    .main {
      /* background-image: url('/leaves.png'); */
      height: 100vh;
    }
    .field {
      display: flex;
      margin: 2rem;
      align-items: center;
    } 
    .field kor-input {
      margin-right: 30px;
    }
    .field kor-input {
      width: 300px;
    }
  `;Ye([j({context:he,subscribe:!0}),h({attribute:!1})],ae.prototype,"eventbus",2);Ye([k()],ae.prototype,"connecting",2);ae=Ye([T("leaf-connect")],ae);var Ai=Object.defineProperty,Si=Object.getOwnPropertyDescriptor,et=(n,e,t,i)=>{for(var r=i>1?void 0:i?Si(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ai(e,t,r),r};let le=class extends g{onEvent(n){switch(n.type){case"get_log_":console.log("leaf-log GET_LOG_",n),this.log=n.data;break;case"log":console.log("leaf-log LOG",n),this.log&&(this.log=[...this.log,n]);break}}connectedCallback(){super.connectedCallback(),this.eventbus.addOnEventListener(this.onEvent.bind(this)),this.eventbus.postEvent({type:"get_log"})}disconnectedCallback(){this.eventbus.removeOnEventListener(this.onEvent),super.disconnectedCallback()}render(){if(console.log("leaf-log render"),!this.log)return p`<kor-spinner label="Loading log ..."></kor-spinner>`;const n=window.leaf.config.app.epoch_offset;return p`
      <leaf-page>
        <nav slot="nav">Log</nav>

        <main>
          <table>
            <!-- <tr><th>Timestamp</th><th>Level</th><th>Source</th><th>Message</th></tr> -->
            ${this.log.map(e=>p`
                <tr>
                  <td class="timestamp">${new Date(1e3*(e.ct+n)).toISOString().split(".")[0]}</td>
                  <td class="level">${e.levelname}</td>
                  <td class="name">${e.name}</td>
                  <td class="message">${e.message}</td>
                </tr>
              `)}
          </table>
        </main>
      </leaf-page>
    `}};le.styles=_`
    // TODO: import from index.css
    :host {
      --base-0: 218, 214, 0;
      display: flex;
    }
    table {
      font-family: 'Courier New', Courier, monospace;
    }
    th, td {
      text-align: left;
      padding-left: 1rem;
    }
    .timestamp {
      margin-left: 0;
    }
  `;et([j({context:he,subscribe:!1}),h({attribute:!1})],le.prototype,"eventbus",2);et([k({})],le.prototype,"log",2);le=et([T("leaf-log")],le);var Oi=Object.defineProperty,Ri=Object.getOwnPropertyDescriptor,X=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ri(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Oi(e,t,r),r};let D=class extends g{constructor(){super(),this.firmware_index=[],this.upgrading=!1,this.ota_progress=0,(async()=>{const n=await fetch("/firmware/index.json");this.firmware_index=await n.json(),console.log(this.firmware_index)})()}connectedCallback(){super.connectedCallback(),this.eventbus.addOnEventListener(n=>{n.type=="ota_progress"&&(this.ota_progress=parseInt(n.size))})}configTemplate(){return p`
      <h1>Configuration:</h1>

      <div class="section">
        <div class="part">
          <kor-input label="Section" type="select">
            ${Object.keys(this.config).sort().map(n=>p`<kor-menu-item label=${n}></kor-menu-item>`)}
          </kor-input>
        </div>
        <kor-button @click=${this.update_firmware} label="Edit" icon="edit"></kor-button>
      </div>
      <div class="section">
        <kor-button @click=${this.update_firmware} label="Backup" icon="edit"></kor-button>
        <kor-button @click=${this.update_firmware} label="Restore" icon="edit"></kor-button>
        <kor-button @click=${this.update_firmware} label="Reset" icon="edit"></kor-button>
      </div>
    `}firmwareTemplate(){const n=this.firmware_index,e=n.length>0?n[0].version===this.config.app.version?"up-to-date":n[0].version:"not available";return p`
      <h1>Firmware:</h1>

      <div class="section" ?hidden=${this.upgrading}>
        <kor-input label="Current" value=${this.config.app.version} readonly></kor-input>
        <kor-input id="new_version" label="New" type="select" value=${e}>
          ${n.map(t=>p`<kor-menu-item label=${t.version}></kor-menu-item>`)}
        </kor-input>
        <kor-button @click=${this.update_firmware} label="Upgrade" icon="edit"></kor-button>
      </div>
    `}upgradeTemplate(){return p`
      <kor-progress-bar 
        label="Progress" 
        color="rgb(var(--accent-1))" show-progress size="m"
        value=${this.ota_progress}>
      </kor-progress-bar>
    `}render(){return this.config?this.upgrading?p`
        <leaf-page>
          <nav slot="nav">Upgrading ...</nav>
          ${this.upgradeTemplate()}
        </leaf-page>
      `:p`
      <leaf-page>
        <nav slot="nav">Settings</nav>
        <main>
          ${this.configTemplate()}
          ${this.firmwareTemplate()}
        </main>
      </leaf-page>
    `:p`<kor-spinner label="Loading configuration ..."></kor-spinner>`}update_firmware(){const n=this.shadowRoot.getElementById("new_version").value,e=this.firmware_index.find(t=>t.version==n);this.eventbus.postEvent({type:"ota_flash",url:`https://iot49.org/leaf/firmware/${e.file}`,sha:e.sha}),this.upgrading=!0}};D.styles=_`
    main {
      max-width: 28rem;
      margin: 2rem;
    }

    .section {
      display: flex;
      align-items: center;
      margin-bottom: 50px;
    }

    kor-input[label="Current"] {
      width: 6rem;
      margin-right: 1rem;
    }
    kor-input[label="New"] {
      width: 12rem;
      margin-right: 1rem;
    }
    kor-button {
      margin-left: 2rem;
    }
    kor-progress-bar {
      margin: auto;
      margin-top: 100px;
      width: 80%;
    }
  `;X([j({context:he,subscribe:!1}),h({attribute:!1})],D.prototype,"eventbus",2);X([j({context:Xe,subscribe:!0}),h({attribute:!1})],D.prototype,"config",2);X([k()],D.prototype,"firmware_index",2);X([k()],D.prototype,"upgrading",2);X([k()],D.prototype,"ota_progress",2);D=X([T("leaf-settings")],D);var Li=Object.defineProperty,Di=Object.getOwnPropertyDescriptor,tt=(n,e,t,i)=>{for(var r=i>1?void 0:i?Di(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Li(e,t,r),r};let Ae=class extends g{constructor(){super(...arguments),this.number_of_entities=0}shouldUpdate(n){return this.state.size!=this.number_of_entities}render(){console.log("render leaf-entities",this.card.title),this.number_of_entities=this.state.size;const n=[];for(const e of this.card.entities){const t=e.entity_id;for(const i of this.state.keys())this.wildcard_match(i,t)&&n.push(p`<leaf-entity entity_id=${i} .spec=${e}></leaf-entity>`)}return p`
      <ul>${n}</ul>
    `}wildcard_match(n,e){var t=i=>i.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1");return new RegExp("^"+e.split("*").map(t).join(".*")+"$").test(n)}};tt([h({attribute:!1})],Ae.prototype,"card",2);tt([j({context:Ze,subscribe:!0}),h({attribute:!1})],Ae.prototype,"state",2);Ae=tt([T("leaf-entities")],Ae);var Ti=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Oe=(n,e,t,i)=>{for(var r=i>1?void 0:i?ji(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ti(e,t,r),r};let J=class extends g{constructor(){super(...arguments),this.entity_id="",this.value=void 0}shouldUpdate(n){const e=this.state.get(this.entity_id);return e&&e.value!=this.value}render(){console.log("render leaf-entity",this.entity_id);const n={get(i,r,s){const o=i.spec[r];return o||i.state[r]}},e=this.state.get(this.entity_id);this.value=e.value;const t=new Proxy({spec:this.spec,state:e},n);return p`
        <kor-icon icon=${t.icon}></kor-icon>
        <span class="name">${t.name}</span>
        <span class="value">${this.value}</span>
        <span class="unit">${t.unit}</span>
      `}};J.styles=[_`
        :host {
          display: flex;
        }
        .icon {
          width: 3rem;
        }
        .name {
          width: 10rem;
          margin-left: 1rem;
        }
        .value {
          display: flex;
          width: 4rem;
          margin-left: 1rem;
          justify-content: right;
        }
        .unit {
          width: 2rem;
          margin-left: 0.3rem;
        }
      `];Oe([h()],J.prototype,"entity_id",2);Oe([h({attribute:!1})],J.prototype,"spec",2);Oe([j({context:Ze,subscribe:!0}),h({attribute:!1})],J.prototype,"state",2);J=Oe([T("leaf-entity")],J);const A=_`
  /* scrollbar */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: transparent;
    visibility: hidden;
  }
  *::-webkit-scrollbar-track {
    background-color: rgba(var(--neutral-1), 0.05);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(var(--neutral-1), 0.1);
    border-radius: 8px;
  }
  *::-webkit-scrollbar-thumb:active,
  *::-webkit-scrollbar-thumb:hover {
    background-color: rgba(var(--neutral-1), 0.2);
  }
`;var Ii=Object.defineProperty,Bi=Object.getOwnPropertyDescriptor,Q=(n,e,t,i)=>{for(var r=i>1?void 0:i?Bi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ii(e,t,r),r};class H extends g{constructor(){super(...arguments),this.size="m"}static get styles(){return[A,_`
        :host {
          font-family: 'md-icons';
          line-height: 1;
          -webkit-font-smoothing: auto;
          text-rendering: optimizeLegibility;
          -moz-osx-font-smoothing: grayscale;
          font-feature-settings: 'liga';
          opacity: 0.9;
          color: var(--text-1);
          transition: var(--transition-1);
          height: max-content;
          width: max-content;
          min-height: max-content;
          min-width: max-content;
          overflow: hidden;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        :host([button]) {
          opacity: 0.6;
          cursor: pointer;
        }
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* size */
        :host([size='xl']) {
          height: 48px;
          width: 48px;
          font-size: 48px;
        }
        :host([size='l']) {
          height: 32px;
          width: 32px;
          font-size: 32px;
        }
        :host([size='m']) {
          height: 24px;
          width: 24px;
          font-size: 24px;
        }
        :host([size='s']) {
          height: 16px;
          width: 16px;
          font-size: 16px;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([button]:hover:not(:active)) {
            opacity: 0.9;
          }
        }
      `]}render(){return p`
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons+Outlined' rel='stylesheet'>
        
        <i class="material-icons${this.outlined?"-outlined":""}">${this.icon}</i>
   `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`)),e=="color"&&this.color?this.style.color=this.color:e=="icon"&&i.indexOf("url")>-1&&this.setBackgroundImage(i)}setBackgroundImage(e){this.style.backgroundImage=e}}Q([h({type:String,reflect:!0})],H.prototype,"icon",2);Q([h({type:String,reflect:!0})],H.prototype,"color",2);Q([h({type:String,reflect:!0})],H.prototype,"size",2);Q([h({type:Boolean,reflect:!0})],H.prototype,"button",2);Q([h({type:Boolean,reflect:!0})],H.prototype,"disabled",2);Q([h({type:Boolean,reflect:!0})],H.prototype,"outlined",2);window.customElements.get("kor-icon")||window.customElements.define("kor-icon",H);var Mi=Object.defineProperty,zi=Object.getOwnPropertyDescriptor,Re=(n,e,t,i)=>{for(var r=i>1?void 0:i?zi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Mi(e,t,r),r};class ue extends g{constructor(){super(...arguments),this.color="primary"}static get styles(){return[A,_`
        :host {
          font: var(--header-2);
          color: var(--text-1);
          display: flex;
          gap: var(--spacing-xs);
          height: max-content;
          width: max-content;
          border-radius: var(--border-radius);
          cursor: pointer;
          transition: var(--transition-1);
          justify-content: center;
          user-select: none;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        :host([label]) {
          min-width: calc(24px + var(--spacing-l) * 2);
          max-width: 160px;
          padding: var(--spacing-xs) var(--spacing-m);
        }
        :host([color='tertiary'][label]) {
          padding: 3px 11px;
        }
        :host(:not([label])) {
          padding: var(--spacing-xs);
        }
        :host([color='tertiary']:not([label])) {
          padding: 3px;
        }
        /* idle */
        :host([color='primary']) {
          background-color: rgb(var(--accent-1));
        }
        :host([color='secondary']) {
          background-color: rgba(var(--neutral-1), 0.1);
        }
        :host([color='tertiary']) {
          border-width: 1px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.25);
        }
        /* disabled */
        :host([disabled]) {
          pointer-events: none;
          opacity: 0.2;
        }
        /* text and icon colors */
        kor-icon {
          color: unset;
        }
        :host([color='primary']) {
          color: rgba(255, 255, 255, 0.9);
        }
        /* hover inputs */
        @media (hover: hover) {
          :host([color='primary']:not(:active):hover) {
            background-color: rgb(var(--accent-1b));
          }
          :host([color='secondary']:not(:active):hover) {
            background-color: rgba(var(--neutral-1), 0.15);
          }
          :host([color='tertiary']:not(:active):hover) {
            border-color: rgba(var(--neutral-1), 0.3);
            background-color: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return p`
      <slot name="icon">
        ${this.icon?p` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      </slot>
      <slot> ${this.label?p` ${this.label} `:""}</slot>
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`))}}Re([h({type:String,reflect:!0})],ue.prototype,"label",2);Re([h({type:String,reflect:!0})],ue.prototype,"icon",2);Re([h({type:String,reflect:!0})],ue.prototype,"color",2);Re([h({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);window.customElements.get("kor-button")||window.customElements.define("kor-button",ue);var Ni=Object.defineProperty,Ui=Object.getOwnPropertyDescriptor,I=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ui(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Ni(e,t,r),r};class S extends g{constructor(){super(...arguments),this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[A,_`
        :host {
          display: flex;
          flex-direction: column;
          flex: 1;
          border-radius: var(--border-radius);
          box-sizing: border-box;
          overflow: hidden;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([flat])) {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          padding: var(--spacing-l);
        }
        /* header */
        slot,
        .header,
        .top {
          display: flex;
          overflow: auto;
        }
        .header,
        slot[name='functions'] {
          height: max-content;
        }
        .header {
          flex: 1;
        }
        .top:not(.empty) {
          padding-bottom: var(--spacing-l);
        }
        slot[name='footer']:not(.empty) {
          padding-top: var(--spacing-l);
        }
        .label {
          flex: 1;
          display: flex;
          gap: var(--spacing-s);
        }
        .label p {
          font: var(--header-1);
          color: var(--text-1);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: unset;
        }
        /* slots */
        slot[name='functions'] {
          gap: var(--functions-gap);
        }
        slot[name='header'] {
          gap: var(--header-gap);
        }
        slot:not([name]) {
          gap: var(--spacing-m);
        }
        slot[name='header'],
        slot[name='functions'],
        slot[name='footer'] {
          align-items: center;
        }
        /* content */
        slot:not([name]) {
          flex: 1;
          width: 100%;
          padding: 0 var(--spacing-l);
          margin-right: calc(var(--spacing-l) * -1);
          margin-left: calc(var(--spacing-l) * -1);
          gap: var(--body-gap);
        }
        :host([flex-direction='column']) slot:not([name]),
        .header {
          flex-direction: column;
        }
        /* footer */
        slot[name='footer'] {
          justify-content: flex-end;
          gap: var(--footer-gap);
        }
        /* image */
        .image {
          width: calc(100% + 32px);
          margin: calc(var(--spacing-l) * -1) calc(var(--spacing-l) * -1)
            var(--spacing-l) calc(var(--spacing-l) * -1);
        }
      `]}render(){return p`
      ${this.image?p` <img class="image" src="${this.image}" /> `:""}
      <div
        class="top ${this.emptyHeader&&this.emptyFunctions&&!this.label&&!this.icon?"empty":""}"
      >
        <div class="header">
          ${this.label||this.icon?p`
                <div class="label">
                  ${this.icon?p` <kor-icon icon="${this.icon}"></kor-icon> `:""}
                  <p>${this.label}</p>
                </div>
                ${!this.emptyHeader&&(this.label||this.icon)?p` <div style="margin-top: var(--spacing-l)"></div> `:""}
              `:""}
          <slot
            name="header"
            @slotchange="${e=>this.emptyHeader=e.target.assignedNodes().length===0}"
            class="${this.emptyHeader?"empty":""}"
          ></slot>
        </div>
        <slot
          name="functions"
          @slotchange="${e=>this.emptyFunctions=e.target.assignedNodes().length===0}"
        ></slot>
      </div>
      <slot></slot>
      <slot
        name="footer"
        @slotchange="${e=>this.emptyFooter=e.target.assignedNodes().length===0}"
        class="${this.emptyFooter?"empty":""}"
      ></slot>
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`))}}I([h({type:String,reflect:!0})],S.prototype,"label",2);I([h({type:String,reflect:!0})],S.prototype,"icon",2);I([h({type:String,reflect:!0})],S.prototype,"image",2);I([h({type:String,reflect:!0,attribute:"flex-direction"})],S.prototype,"flexDirection",2);I([h({type:Boolean,reflect:!0})],S.prototype,"flat",2);I([k()],S.prototype,"emptyHeader",2);I([k()],S.prototype,"emptyFunctions",2);I([k()],S.prototype,"emptyFooter",2);window.customElements.get("kor-card")||window.customElements.define("kor-card",S);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=n=>n??m;var Hi=Object.defineProperty,Fi=Object.getOwnPropertyDescriptor,y=(n,e,t,i)=>{for(var r=i>1?void 0:i?Fi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Hi(e,t,r),r};class b extends g{constructor(){super(),this.type="text",this.autofocus=!1,this.step=1,this.addEventListener("click",e=>{var t,i;this.active&&this.type==="select"?this.closeSelectMenu(e):this.active||(this.active=!0,this.type!=="select"&&!this.disabled&&!this.readonly&&((i=(t=this.shadowRoot)==null?void 0:t.querySelector("input"))==null||i.focus()))})}static get styles(){return[A,_`
        :host {
          display: flex;
          align-items: center;
          min-height: 40px;
          border-width: 0px 0px 1px 0px;
          border-style: solid;
          border-color: rgba(var(--neutral-1), 0.2);
          border-radius: 2px;
          box-sizing: border-box;
          padding: 0 8px;
          width: 100%;
          overflow: visible;
          background-color: rgba(var(--neutral-1), 0.05);
          position: relative;
        }
        :host,
        .label,
        input {
          transition: var(--transition-1);
        }
        .center {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        input {
          background: none;
          border: none;
          box-shadow: none;
          padding: 0px;
          outline: none;
          -webkit-appearance: none;
          font: var(--body-1);
          color: var(--text-1);
          max-height: 16px;
        }
        input[type='number']::-webkit-inner-spin-button,
        input[type='number']::-webkit-outer-spin-button,
        input[type='search']::-webkit-search-decoration,
        input[type='search']::-webkit-search-cancel-button,
        input[type='search']::-webkit-search-results-button,
        input[type='search']::-webkit-search-results-decoration {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type='number'] {
          -moz-appearance: textfield;
        }
        /* active */
        :host([active]) {
          border-color: rgb(var(--accent-1));
        }
        :host([active]) .label {
          color: rgb(var(--accent-1));
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
        }
        :host([disabled]),
        :host([readonly]) {
          pointer-events: none;
        }
        /* readonly */
        :host([readonly]) {
          background: transparent;
        }
        /* condensed */
        :host([condensed]) {
          min-height: 32px;
        }
        :host([condensed][value]:not([value=''])) .label,
        :host([condensed][active]) .label {
          display: none;
        }
        /* icon */
        :host([icon]) .icon {
          margin-right: var(--spacing-s);
        }
        /* label */
        .label {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font: var(--body-1);
          color: var(--text-2);
          pointer-events: none;
        }
        :host([value]:not([value=''])) .label,
        :host([active]) .label {
          font: var(--body-2);
        }
        :host(:not([value]):not([active]):not([type='date'])) input,
        :host([value='']:not([active]):not([type='date'])) input {
          max-height: 0px;
        }
        input,
        .label {
          line-height: 16px;
        }
        /* clear */
        .clear-icon {
          transition: var(--transition-1), 0.1s opacity ease-out 0.1s;
        }
        :host(:not(:hover):not([active])) .clear-icon {
          transition: var(--transition-1), 0.1s width ease-out 0.1s,
            0.1s margin ease-out 0.1s;
          font-size: 0;
          max-width: 0px;
          max-height: 0px;
          opacity: 0;
          margin-left: 0;
        }
        /* status */
        .clear-icon,
        .status-icon,
        .increment-icon,
        .select-icon,
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
        /* select */
        :host([type='select']),
        :host([type='select']) * {
          cursor: pointer !important;
        }
        :host([type='text']) .center,
        :host([type='number']) .center {
          cursor: text;
        }
        :host([active]) .select-icon {
          transform: rotate(180deg);
        }
        .select-menu {
          position: fixed;
          max-height: 240px;
          z-index: 3;
          padding: 0px var(--spacing-l);
          background-color: rgb(var(--base-4));
        }
        slot:not([name]) {
          display: block;
          margin: 0 calc(var(--spacing-s) * -1);
        }
        slot:not([name])::slotted(*) {
          margin-bottom: 0;
        }
        /* date */
        .date-icon {
          margin-left: -24px;
          pointer-events: none;
        }
        :host([type='date']) ::-webkit-calendar-picker-indicator {
          background: unset;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:hover:not([active])) {
            border-color: rgba(var(--neutral-1), 0.4);
          }
        }
      `]}render(){return p`
      ${this.icon?p` <kor-icon class="icon" icon="${this.icon}"></kor-icon> `:""}
      <div class="center">
        ${this.label?p` <label class="label">${this.label}</label> `:""}
        <input
          .type="${this.type}"
          .value="${this.value?this.value:""}"
          .step="${this.step.toString()}"
          ?autofocus="${this.autofocus}"
          ?readonly="${this.readonly||this.disabled||this.type==="select"}"
          min="${ge(this.min)}"
          max="${ge(this.max)}"
          pattern="${ge(this.pattern)}"
          name="${ge(this.name)}"
          @input="${this.handleChange}"
          @focus="${()=>this.type!=="select"&&!this.active?this.active=!0:""}"
          @blur="${this.handleBlur}"
        />
      </div>
      <!-- select -->
      ${this.type==="select"?p`
            <kor-icon
              button
              class="select-icon"
              icon="arrow_drop_down"
            ></kor-icon>
            ${this.active?p`
                  <kor-card
                    @click="${e=>{this.active=!1,e.stopPropagation()}}"
                    @wheel="${e=>e.stopPropagation()}"
                    class="select-menu"
                    .style="
                  top: ${this.getMenuStyles().top};
                  left: ${this.getMenuStyles().left};
                  width: ${this.getMenuStyles().width};
                "
                  >
                    <slot @slotchange="${this.handleItems}"></slot>
                  </kor-card>
                `:""}
          `:""}
      <!-- date -->
      ${this.type==="date"?p` <kor-icon button class="date-icon" icon="event"></kor-icon> `:""}
      <!-- clear -->
      ${!this.disabled&&!this.readonly&&this.value&&!this.noClear&&this.type!=="select"?p`
            <kor-icon
              button
              class="clear-icon"
              icon="close"
              @click="${this.handleClear}"
            ></kor-icon>
          `:""}
      <!-- status -->
      ${this.status?p`
            <kor-icon
              class="status-icon"
              .icon="${this.getStatusIcon()}"
            ></kor-icon>
          `:""}
      <!-- number increment -->
      ${this.type==="number"&&!this.readonly?p`
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_left"
              @click="${()=>this.handleIncrement("left")}"
            ></kor-icon>
            <kor-icon
              button
              class="increment-icon"
              icon="keyboard_arrow_right"
              @click="${()=>this.handleIncrement("right")}"
            ></kor-icon>
          `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}handleChange(e){this.value=e.target.value,this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleClear(){this.value=void 0,this.removeAttribute("value"),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,composed:!0}))}handleBlur(e){this.type==="number"&&this.validateMinMax(e.target.value),this.type!=="select"&&(this.active=!1)}handleIncrement(e){e==="left"?this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")-this.step):e==="right"&&this.validateMinMax(parseInt(this.value?this.value:this.min?this.min:"0")+this.step)}handleItems(e){const t=e.target.assignedNodes();t.forEach(i=>{i.tagName==="KOR-MENU-ITEM"&&i.addEventListener("active-changed",r=>{r.target.active&&(t.forEach(s=>{s.active=!1}),r.target.active=!0,this.value=i.label,this.active=!1)})})}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`)),e==="active"&&this.active&&this.type==="select"&&this.handleMenu()}handleMenu(){const e=this.parentElement,t=()=>{this.active=!1,e==null||e.removeEventListener("wheel",t)};e==null||e.addEventListener("wheel",t)}closeSelectMenu(e){this.type==="select"&&this.active&&(e.stopImmediatePropagation(),this.active=!1)}validateMinMax(e){e&&(this.min&&e<parseInt(this.min)?this.value=this.min:this.max&&e>parseInt(this.max)?this.value=this.max:this.value=e.toString())}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle";break}return e}getMenuStyles(){return{top:`${this.getBoundingClientRect().top+this.clientHeight+1}px`,left:`${this.getBoundingClientRect().left}px`,width:`${this.clientWidth}px`}}}y([h({type:String,reflect:!0})],b.prototype,"label",2);y([h({type:String,reflect:!0})],b.prototype,"icon",2);y([h({type:String,reflect:!0})],b.prototype,"value",2);y([h({type:String,reflect:!0})],b.prototype,"name",2);y([h({type:String,reflect:!0})],b.prototype,"type",2);y([h({type:String,reflect:!0})],b.prototype,"status",2);y([h({type:Boolean,reflect:!0})],b.prototype,"condensed",2);y([h({type:Boolean,reflect:!0})],b.prototype,"active",2);y([h({type:Boolean,reflect:!0})],b.prototype,"disabled",2);y([h({type:Boolean,reflect:!0})],b.prototype,"readonly",2);y([h({type:Boolean,reflect:!0,attribute:"no-clear"})],b.prototype,"noClear",2);y([h({type:Boolean,reflect:!0})],b.prototype,"autofocus",2);y([h({type:String,reflect:!0})],b.prototype,"pattern",2);y([h({type:String,reflect:!0})],b.prototype,"min",2);y([h({type:String,reflect:!0})],b.prototype,"max",2);y([h({type:Number,reflect:!0})],b.prototype,"step",2);window.customElements.get("kor-input")||window.customElements.define("kor-input",b);var Vi=Object.defineProperty,qi=Object.getOwnPropertyDescriptor,nn=(n,e,t,i)=>{for(var r=i>1?void 0:i?qi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Vi(e,t,r),r};class nt extends g{constructor(){super(...arguments),this.size="body-1"}static get styles(){return[A,_`
        :host {
          color: var(--text-1);
          transition: var(--transition-1);
        }
        :host([size='body-1']) {
          font: var(--body-1);
        }
        :host([size='body-2']) {
          font: var(--body-2);
        }
        :host([size='header-1']) {
          font: var(--header-1);
        }
        :host([size='header-2']) {
          font: var(--header-2);
        }
      `]}render(){return p`<slot></slot>`}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`)),e=="color"&&this.color&&(this.style.color=this.color)}}nn([h({type:String,reflect:!0})],nt.prototype,"size",2);nn([h({type:String,reflect:!0})],nt.prototype,"color",2);window.customElements.get("kor-text")||window.customElements.define("kor-text",nt);var Wi=Object.defineProperty,Ki=Object.getOwnPropertyDescriptor,de=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ki(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Wi(e,t,r),r};class Y extends g{constructor(){super(...arguments),this.label="Label",this.toggle=!0}static get styles(){return[A,_`
        :host {
          padding: var(--spacing-s) 0;
          border-radius: var(--border-radius);
          display: flex;
          cursor: pointer;
          transition: var(--transition-1);
          overflow: visible;
        }
        kor-icon {
          margin-right: var(--spacing-s);
        }
        .label {
          flex: 1;
        }
        /* label */
        kor-text {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          pointer-events: none;
        }
        slot[name='functions']::slotted(*) {
          margin-left: var(--spacing-s);
        }
        :host([active]) {
          padding: var(--spacing-s);
          margin-left: calc(var(--spacing-s) * -1);
          margin-right: calc(var(--spacing-s) * -1);
          background: rgba(var(--neutral-1), 0.1);
        }
        /* disabled */
        :host([disabled]) {
          opacity: 0.2;
          pointer-events: none;
        }
        /* hover inputs */
        @media (hover: hover) {
          :host(:not([active]):hover) {
            padding: var(--spacing-s);
            margin-left: calc(var(--spacing-s) * -1);
            margin-right: calc(var(--spacing-s) * -1);
            background: rgba(var(--neutral-1), 0.05);
          }
        }
      `]}render(){return p`
      ${this.icon?p` <kor-icon icon="${this.icon}"></kor-icon> `:""}
      ${this.label?p` <kor-text>${this.label}</kor-text> `:""}
      <!-- functions slot -->
      <slot name="functions"></slot>
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`)),e=="toggle"&&this.toggle&&this.addEventListener("click",()=>{this.active=!this.active})}}de([h({type:String,reflect:!0})],Y.prototype,"label",2);de([h({type:String,reflect:!0})],Y.prototype,"icon",2);de([h({type:Boolean,reflect:!0})],Y.prototype,"active",2);de([h({type:Boolean,reflect:!0})],Y.prototype,"toggle",2);de([h({type:Boolean,reflect:!0})],Y.prototype,"disabled",2);window.customElements.get("kor-menu-item")||window.customElements.define("kor-menu-item",Y);var Gi=Object.defineProperty,Ji=Object.getOwnPropertyDescriptor,P=(n,e,t,i)=>{for(var r=i>1?void 0:i?Ji(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Gi(e,t,r),r};class C extends g{constructor(){super(...arguments),this.height="400px",this.width="600px",this.flexDirection="column",this.emptyHeader=!0,this.emptyFunctions=!0,this.emptyFooter=!0}static get styles(){return[A,_`
        :host {
          transition: var(--transition-1), 0s top, 0s left;
          position: fixed;
          opacity: 1;
          z-index: 5;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          /* css properties */
          --body-gap: var(--spacing-m);
          --header-gap: var(--spacing-m);
          --functions-gap: var(--spacing-m);
          --footer-gap: var(--spacing-m);
        }
        :host(:not([visible])) {
          opacity: 0;
          pointer-events: none;
        }
        :host(:not([visible])) kor-card {
          margin-bottom: -40px;
        }
        kor-card {
          background-color: rgb(var(--base-3));
          box-shadow: var(--shadow-1);
          transition: 0.2s all ease-out, 0s top, 0s left;
          --body-gap: inherit;
          --header-gap: inherit;
          --functions-gap: inherit;
          --footer-gap: inherit;
        }
      `]}render(){return p`
      <kor-card
        @click="${e=>e.stopPropagation()}"
        style="height: ${this.height}; width: ${this.width}; max-height: ${this.height}; max-width: ${this.width}"
        .label="${this.label}"
        .icon="${this.icon}"
        flex-direction="${this.flexDirection}"
      >
        <slot
          name="header"
          slot="${this.emptyHeader?"hidden":"header"}"
          @slotchange="${e=>this.emptyHeader=e.target.assignedNodes().length===0}"
        ></slot>
        <slot name="functions" slot="functions">
          ${this.sticky?"":p`
                <kor-icon
                  button
                  icon="close"
                  @click="${()=>this.visible=!1}"
                ></kor-icon>
              `}
        </slot>
        <slot></slot>
        <slot
          name="footer"
          slot="${this.emptyFooter?"hidden":"footer"}"
          @slotchange="${e=>this.emptyFooter=e.target.assignedNodes().length===0}"
        ></slot>
      </kor-card>
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`)),e==="visible"&&this.visible&&this.addEventListener("click",()=>this.sticky?"":this.visible=!1)}}P([h({type:String,reflect:!0})],C.prototype,"label",2);P([h({type:String,reflect:!0})],C.prototype,"icon",2);P([h({type:String,reflect:!0})],C.prototype,"height",2);P([h({type:String,reflect:!0})],C.prototype,"width",2);P([h({type:String,reflect:!0,attribute:"flex-direction"})],C.prototype,"flexDirection",2);P([h({type:Boolean,reflect:!0})],C.prototype,"visible",2);P([h({type:Boolean,reflect:!0})],C.prototype,"sticky",2);P([k()],C.prototype,"emptyHeader",2);P([k()],C.prototype,"emptyFunctions",2);P([k()],C.prototype,"emptyFooter",2);window.customElements.get("kor-modal")||window.customElements.define("kor-modal",C);var Zi=Object.defineProperty,Xi=Object.getOwnPropertyDescriptor,B=(n,e,t,i)=>{for(var r=i>1?void 0:i?Xi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Zi(e,t,r),r};class O extends g{constructor(){super(...arguments),this.size="m"}static get styles(){return[A,_`
        :host {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        .header,
        .footer {
          display: flex;
          align-items: center;
        }
        .label,
        .info {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .header {
          margin-bottom: var(--spacing-s);
        }
        .footer {
          margin-top: var(--spacing-s);
        }
        /* radial */
        :host([radial]) {
          align-items: center;
          justify-content: center;
        }
        .radial-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .radial-wrapper kor-text {
          position: absolute;
          width: 100%;
          text-align: center;
        }
        .radial {
          transform: rotate(-90deg);
        }
        circle {
          fill: transparent;
          stroke-width: 8px;
        }
        /* status */
        .status-icon {
          margin-right: var(--spacing-s);
        }
        .status-icon[icon='cancel'] {
          color: rgb(var(--functional-red));
        }
        .status-icon[icon='error'] {
          color: rgb(var(--functional-yellow));
        }
        .status-icon[icon='check_circle'] {
          color: rgb(var(--functional-green));
        }
      `]}render(){return p`
      <!-- header -->
      ${this.label||this.showProgress?p`
            <div class="header">
              <kor-text size="header-2" class="label">${this.label}</kor-text>
              ${this.showProgress&&!this.radial?p` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:""}
      ${this.radial?p`
            <!-- radial -->
            <div class="radial-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="radial"
                width="${this.getSize()}"
                viewBox="0 0 ${this.getSize()} ${this.getSize()}"
              >
                <circle
                  stroke="rgba(var(--neutral-1), .1)"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
                <circle
                  stroke="${this.color?this.color:"rgb(var(--accent-1))"}"
                  stroke-dasharray="${2*Math.PI*(this.getSize()/2-4)}"
                  stroke-dashoffset="${2*Math.PI*(this.getSize()/2-4)*(1-(this.value?this.value/100:0))}"
                  r="${this.getSize()/2-4}"
                  cx="${this.getSize()/2}"
                  cy="${this.getSize()/2}"
                />
              </svg>
              ${this.showProgress?p` <kor-text size="header-2">${this.value}%</kor-text> `:""}
            </div>
          `:p`
            <!-- linear -->
            <svg width="100%" height="8">
              <defs>
                <clipPath id="clip-path">
                  <rect width="100%" height="8px" rx="4px" />
                </clipPath>
              </defs>
              <rect
                fill="rgba(var(--neutral-1), .1)"
                width="100%"
                height="100%"
                rx="4px"
              />
              <rect
                fill="${this.color?this.color:"rgb(var(--accent-1))"}"
                width="${this.value}%"
                height="100%"
                clip-path="url(#clip-path)"
              />
            </svg>
          `}
      ${this.info||this.status?p`
            <div class="footer">
              <!-- status -->
              ${this.status?p`
                    <kor-icon
                      class="status-icon"
                      .icon="${this.getStatusIcon()}"
                    ></kor-icon>
                  `:""}
              <!-- info -->
              ${this.info?p`
                    <kor-text color="var(--text-2)" class="info"
                      >${this.info}</kor-text
                    >
                  `:""}
            </div>
          `:""}
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`))}getStatusIcon(){let e;switch(this.status){case"error":e="cancel";break;case"warning":e="error";break;case"success":e="check_circle";break}return e}getSize(){let e;switch(this.size){case"s":e=48;break;case"m":e=64;break;case"l":e=80;break;default:e=0}return e}}B([h({type:String,reflect:!0})],O.prototype,"label",2);B([h({type:String,reflect:!0})],O.prototype,"info",2);B([h({type:String,reflect:!0})],O.prototype,"status",2);B([h({type:String,reflect:!0})],O.prototype,"color",2);B([h({type:String,reflect:!0})],O.prototype,"size",2);B([h({type:Number,reflect:!0})],O.prototype,"value",2);B([h({type:Boolean,reflect:!0})],O.prototype,"radial",2);B([h({type:Boolean,reflect:!0,attribute:"show-progress"})],O.prototype,"showProgress",2);window.customElements.get("kor-progress-bar")||window.customElements.define("kor-progress-bar",O);var Qi=Object.defineProperty,Yi=Object.getOwnPropertyDescriptor,rn=(n,e,t,i)=>{for(var r=i>1?void 0:i?Yi(e,t):e,s=n.length-1,o;s>=0;s--)(o=n[s])&&(r=(i?o(e,t,r):o(r))||r);return i&&r&&Qi(e,t,r),r};class it extends g{constructor(){super(...arguments),this.size="m"}static get styles(){return[A,_`
        :host {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        svg {
          animation: 1s linear infinite svg-animation;
        }
        @keyframes svg-animation {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }
        circle {
          fill: transparent;
          stroke: rgb(var(--accent-1));
          stroke-linecap: round;
          stroke-width: 4px;
        }
        /* label */
        kor-text {
          margin-top: var(--spacing-s);
          text-align: center;
          max-width: 240px;
        }
      `]}render(){return p`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="${this.getSize()}"
        viewBox="0 0 ${this.getSize()} ${this.getSize()}"
      >
        <circle
          stroke-dasharray="${this.getSize()}"
          r="${this.getSize()/2-4}"
          cx="${this.getSize()/2}"
          cy="${this.getSize()/2}"
        />
      </svg>
      ${this.label?p` <kor-text>${this.label}</kor-text> `:""}
    `}attributeChangedCallback(e,t,i){super.attributeChangedCallback(e,t,i),this.dispatchEvent(new Event(`${e}-changed`))}getSize(){let e;switch(this.size){case"s":e=24;break;case"m":e=32;break;case"l":e=40;break}return e}}rn([h({type:String,reflect:!0})],it.prototype,"size",2);rn([h({type:String,reflect:!0})],it.prototype,"label",2);window.customElements.get("kor-spinner")||window.customElements.define("kor-spinner",it);
