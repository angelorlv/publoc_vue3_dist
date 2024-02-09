import{K as N,r as g,L as U,q as I,_ as S,M as G,N as _,O as F,P as De,Q as A,G as Q,j as Le,h as fe,R as ue,S as Me,c as Ue,t as ce,T as L}from"./entry.gBsFnzxz.js";const he=(e,t)=>{for(const n of Object.keys(t))e.on(n,t[n])},Ce=e=>{for(const t of Object.keys(e)){const n=e[t];n&&w(n.cancel)&&n.cancel()}},Fe=e=>!e||typeof e.charAt!="function"?e:e.charAt(0).toUpperCase()+e.slice(1),w=e=>typeof e=="function",z=(e,t,n)=>{for(const o in n){const r="set"+Fe(o);e[r]?fe(()=>n[o],(a,i)=>{e[r](a,i)}):t[r]&&fe(()=>n[o],a=>{t[r](a)})}},x=(e,t,n={})=>{const o={...n};for(const r in e){const a=t[r],i=e[r];a&&(a&&a.custom===!0||i!==void 0&&(o[r]=i))}return o},K=e=>{const t={},n={};for(const o in e)if(o.startsWith("on")&&!o.startsWith("onUpdate")&&o!=="onReady"){const r=o.slice(2).toLocaleLowerCase();t[r]=e[o]}else n[o]=e[o];return{listeners:t,attrs:n}},ze=async e=>{const t=await Promise.all([S(()=>import("./marker-icon-2x.ISnV03A7.js"),__vite__mapDeps([]),import.meta.url),S(()=>import("./marker-icon.v2plvzwn.js"),__vite__mapDeps([]),import.meta.url),S(()=>import("./marker-shadow.mNDLcDeE.js"),__vite__mapDeps([]),import.meta.url)]);delete e.Default.prototype._getIconUrl,e.Default.mergeOptions({iconRetinaUrl:t[0].default,iconUrl:t[1].default,shadowUrl:t[2].default})},X=e=>{const t=g((...o)=>console.warn(`Method ${e} has been invoked without being replaced`)),n=(...o)=>t.value(...o);return n.wrapped=t,A(e,n),n},Y=(e,t)=>e.wrapped.value=t,T=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||globalThis,k=e=>{const t=U(e);if(t===void 0)throw new Error(`Attempt to inject ${e.description} before it was provided.`);return t},q=Symbol("useGlobalLeaflet"),W=Symbol("addLayer"),Se=Symbol("removeLayer"),Ee=Symbol("registerControl"),qe=Symbol("registerLayerControl"),Oe=Symbol("canSetParentHtml"),Re=Symbol("setParentHtml"),Ae=Symbol("setIcon"),Ve=Symbol("bindPopup"),Ze=Symbol("bindTooltip"),$e=Symbol("unbindPopup"),He=Symbol("unbindTooltip"),J={options:{type:Object,default:()=>({}),custom:!0}},re=e=>({options:e.options,methods:{}}),V={...J,pane:{type:String},attribution:{type:String},name:{type:String,custom:!0},layerType:{type:String,custom:!0},visible:{type:Boolean,custom:!0,default:!0}},ke=(e,t,n)=>{const o=k(W),r=k(Se),{options:a,methods:i}=re(e),s=x(e,V,a),l=()=>o({leafletObject:t.value}),c=()=>r({leafletObject:t.value}),d={...i,setAttribution(p){c(),t.value.options.attribution=p,e.visible&&l()},setName(){c(),e.visible&&l()},setLayerType(){c(),e.visible&&l()},setVisible(p){t.value&&(p?l():c())},bindPopup(p){if(!t.value||!w(t.value.bindPopup)){console.warn("Attempt to bind popup before bindPopup method available on layer.");return}t.value.bindPopup(p)},bindTooltip(p){if(!t.value||!w(t.value.bindTooltip)){console.warn("Attempt to bind tooltip before bindTooltip method available on layer.");return}t.value.bindTooltip(p)},unbindTooltip(){t.value&&(w(t.value.closeTooltip)&&t.value.closeTooltip(),w(t.value.unbindTooltip)&&t.value.unbindTooltip())},unbindPopup(){t.value&&(w(t.value.closePopup)&&t.value.closePopup(),w(t.value.unbindPopup)&&t.value.unbindPopup())},updateVisibleProp(p){n.emit("update:visible",p)}};return A(Ve,d.bindPopup),A(Ze,d.bindTooltip),A($e,d.unbindPopup),A(He,d.unbindTooltip),ue(()=>{d.unbindPopup(),d.unbindTooltip(),c()}),{options:s,methods:d}},Ge=(e,t)=>{if(e&&t.default)return F("div",{style:{display:"none"}},t.default())},Ke={...V,interactive:{type:Boolean,default:void 0},bubblingMouseEvents:{type:Boolean,default:void 0}},Pe={...Ke,stroke:{type:Boolean,default:void 0},color:{type:String},weight:{type:Number},opacity:{type:Number},lineCap:{type:String},lineJoin:{type:String},dashArray:{type:String},dashOffset:{type:String},fill:{type:Boolean,default:void 0},fillColor:{type:String},fillOpacity:{type:Number},fillRule:{type:String},className:{type:String}},We={...Pe,radius:{type:Number},latLng:{type:[Object,Array],required:!0,custom:!0}};({...We});const Z={...J,position:{type:String}},Je=(e,t)=>{const{options:n,methods:o}=re(e),r=x(e,Z,n),a={...o,setPosition(i){t.value&&t.value.setPosition(i)}};return ue(()=>{t.value&&t.value.remove()}),{options:r,methods:a}},Qe=e=>e.default?F("div",{ref:"root"},e.default()):null;N({name:"LControl",props:{...Z,disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},setup(e,t){const n=g(),o=g(),r=U(q),a=k(Ee),{options:i,methods:s}=Je(e,n);return I(async()=>{const{Control:l,DomEvent:c}=r?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),d=l.extend({onAdd(){return o.value}});n.value=G(new d(i)),z(s,n.value,e),a({leafletObject:n.value}),e.disableClickPropagation&&o.value&&c.disableClickPropagation(o.value),e.disableScrollPropagation&&o.value&&c.disableScrollPropagation(o.value),_(()=>t.emit("ready",n.value))}),{root:o,leafletObject:n}},render(){return Qe(this.$slots)}});({...Z});({...Z});({...Z});({...Z});const we={...V};({...we});({...we});const de={...V,opacity:{type:Number},zIndex:{type:Number},tileSize:{type:[Number,Array,Object]},noWrap:{type:Boolean,default:void 0},minZoom:{type:Number},maxZoom:{type:Number},className:{type:String}},Te=(e,t,n)=>{const{options:o,methods:r}=ke(e,t,n),a=x(e,de,o),i={...r,setTileComponent(){var s;(s=t.value)==null||s.redraw()}};return ue(()=>{t.value.off()}),{options:a,methods:i}},Xe=(e,t,n,o)=>e.extend({initialize(r){this.tileComponents={},this.on("tileunload",this._unloadTile),n.setOptions(this,r)},createTile(r){const a=this._tileCoordsToKey(r);this.tileComponents[a]=t.create("div");const i=F({setup:o,props:["coords"]},{coords:r});return Me(i,this.tileComponents[a]),this.tileComponents[a]},_unloadTile(r){const a=this._tileCoordsToKey(r.coords);this.tileComponents[a]&&(this.tileComponents[a].innerHTML="",this.tileComponents[a]=void 0)}});N({props:{...de,childRender:{type:Function,required:!0}},setup(e,t){const n=g(),o=g(null),r=g(!1),a=U(q),i=k(W),{options:s,methods:l}=Te(e,n,t);return I(async()=>{const{GridLayer:c,DomUtil:d,Util:p}=a?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url),v=Xe(c,d,p,e.childRender);n.value=G(new v(s));const{listeners:m}=K(t.attrs);n.value.on(m),z(l,n.value,e),i({...e,...l,leafletObject:n.value}),r.value=!0,_(()=>t.emit("ready",n.value))}),{root:o,ready:r,leafletObject:n}},render(){return this.ready?F("div",{style:{display:"none"},ref:"root"}):null}});const ye={iconUrl:{type:String},iconRetinaUrl:{type:String},iconSize:{type:[Object,Array]},iconAnchor:{type:[Object,Array]},popupAnchor:{type:[Object,Array]},tooltipAnchor:{type:[Object,Array]},shadowUrl:{type:String},shadowRetinaUrl:{type:String},shadowSize:{type:[Object,Array]},shadowAnchor:{type:[Object,Array]},bgPos:{type:[Object,Array]},className:{type:String}},ft=N({name:"LIcon",props:{...ye,...J},setup(e,t){const n=g(),o=U(q),r=k(Oe),a=k(Re),i=k(Ae);let s,l,c,d,p;const v=(O,h,y)=>{const b=O&&O.innerHTML;if(!h){y&&p&&r()&&a(b);return}const{listeners:M}=K(t.attrs);p&&l(p,M);const{options:ae}=re(e),R=x(e,ye,ae);b&&(R.html=b),p=R.html?c(R):d(R),s(p,M),i(p)},m=()=>{_(()=>v(n.value,!0,!1))},E=()=>{_(()=>v(n.value,!1,!0))},D={setIconUrl:m,setIconRetinaUrl:m,setIconSize:m,setIconAnchor:m,setPopupAnchor:m,setTooltipAnchor:m,setShadowUrl:m,setShadowRetinaUrl:m,setShadowAnchor:m,setBgPos:m,setClassName:m,setHtml:m};return I(async()=>{const{DomEvent:O,divIcon:h,icon:y}=o?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);s=O.on,l=O.off,c=h,d=y,z(D,{},e),new MutationObserver(E).observe(n.value,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),m()}),{root:n}},render(){const e=this.$slots.default?this.$slots.default():void 0;return F("div",{ref:"root"},e)}});({...V});function je(e,t,n){var o,r,a;t===void 0&&(t=50),n===void 0&&(n={});var i=(o=n.isImmediate)!=null&&o,s=(r=n.callback)!=null&&r,l=n.maxWait,c=Date.now(),d=[];function p(){if(l!==void 0){var m=Date.now()-c;if(m+t>=l)return l-m}return t}var v=function(){var m=[].slice.call(arguments),E=this;return new Promise(function(D,O){var h=i&&a===void 0;if(a!==void 0&&clearTimeout(a),a=setTimeout(function(){if(a=void 0,c=Date.now(),!i){var b=e.apply(E,m);s&&s(b),d.forEach(function(M){return(0,M.resolve)(b)}),d=[]}},p()),h){var y=e.apply(E,m);return s&&s(y),D(y)}d.push({resolve:D,reject:O})})};return v.cancel=function(m){a!==void 0&&clearTimeout(a),d.forEach(function(E){return(0,E.reject)(m)}),d=[]},v}const ve={...J,center:{type:[Object,Array]},bounds:{type:[Array,Object]},maxBounds:{type:[Array,Object]},zoom:{type:Number},minZoom:{type:Number},maxZoom:{type:Number},paddingBottomRight:{type:[Object,Array]},paddingTopLeft:{type:Object},padding:{type:Object},worldCopyJump:{type:Boolean,default:void 0},crs:{type:[String,Object]},maxBoundsViscosity:{type:Number},inertia:{type:Boolean,default:void 0},inertiaDeceleration:{type:Number},inertiaMaxSpeed:{type:Number},easeLinearity:{type:Number},zoomAnimation:{type:Boolean,default:void 0},zoomAnimationThreshold:{type:Number},fadeAnimation:{type:Boolean,default:void 0},markerZoomAnimation:{type:Boolean,default:void 0},noBlockingAnimations:{type:Boolean,default:void 0},useGlobalLeaflet:{type:Boolean,default:!0,custom:!0}},ht=N({inheritAttrs:!1,emits:["ready","update:zoom","update:center","update:bounds"],props:ve,setup(e,t){const n=g(),o=De({ready:!1,layersToAdd:[],layersInControl:[]}),{options:r}=re(e),a=x(e,ve,r),{listeners:i,attrs:s}=K(t.attrs),l=X(W),c=X(Se),d=X(Ee),p=X(qe);A(q,e.useGlobalLeaflet);const v=Q(()=>{const h={};return e.noBlockingAnimations&&(h.animate=!1),h}),m=Q(()=>{const h=v.value;return e.padding&&(h.padding=e.padding),e.paddingTopLeft&&(h.paddingTopLeft=e.paddingTopLeft),e.paddingBottomRight&&(h.paddingBottomRight=e.paddingBottomRight),h}),E={moveend:je(h=>{o.leafletRef&&(t.emit("update:zoom",o.leafletRef.getZoom()),t.emit("update:center",o.leafletRef.getCenter()),t.emit("update:bounds",o.leafletRef.getBounds()))}),overlayadd(h){const y=o.layersInControl.find(b=>b.name===h.name);y&&y.updateVisibleProp(!0)},overlayremove(h){const y=o.layersInControl.find(b=>b.name===h.name);y&&y.updateVisibleProp(!1)}};I(async()=>{e.useGlobalLeaflet&&(T.L=T.L||await S(()=>import("./entry.gBsFnzxz.js").then(u=>u.t),__vite__mapDeps([0,1]),import.meta.url));const{map:h,CRS:y,Icon:b,latLngBounds:M,latLng:ae,stamp:R}=e.useGlobalLeaflet?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);try{a.beforeMapMount&&await a.beforeMapMount()}catch(u){console.error(`The following error occurred running the provided beforeMapMount hook ${u.message}`)}await ze(b);const xe=typeof a.crs=="string"?y[a.crs]:a.crs;a.crs=xe||y.EPSG3857;const $={addLayer(u){u.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd.push(u):o.layersInControl.find(f=>R(f.leafletObject)===R(u.leafletObject))||(o.layerControl.addLayer(u),o.layersInControl.push(u))),u.visible!==!1&&o.leafletRef.addLayer(u.leafletObject)},removeLayer(u){u.layerType!==void 0&&(o.layerControl===void 0?o.layersToAdd=o.layersToAdd.filter(f=>f.name!==u.name):(o.layerControl.removeLayer(u.leafletObject),o.layersInControl=o.layersInControl.filter(f=>R(f.leafletObject)!==R(u.leafletObject)))),o.leafletRef.removeLayer(u.leafletObject)},registerLayerControl(u){o.layerControl=u,o.layersToAdd.forEach(f=>{o.layerControl.addLayer(f)}),o.layersToAdd=[],d(u)},registerControl(u){o.leafletRef.addControl(u.leafletObject)},setZoom(u){const f=o.leafletRef.getZoom();u!==f&&o.leafletRef.setZoom(u,v.value)},setCrs(u){const f=o.leafletRef.getBounds();o.leafletRef.options.crs=u,o.leafletRef.fitBounds(f,{animate:!1,padding:[0,0]})},fitBounds(u){o.leafletRef.fitBounds(u,m.value)},setBounds(u){if(!u)return;const f=M(u);f.isValid()&&!(o.lastSetBounds||o.leafletRef.getBounds()).equals(f,0)&&(o.lastSetBounds=f,o.leafletRef.fitBounds(f))},setCenter(u){if(u==null)return;const f=ae(u),me=o.lastSetCenter||o.leafletRef.getCenter();(me.lat!==f.lat||me.lng!==f.lng)&&(o.lastSetCenter=f,o.leafletRef.panTo(f,v.value))}};Y(l,$.addLayer),Y(c,$.removeLayer),Y(d,$.registerControl),Y(p,$.registerLayerControl),o.leafletRef=G(h(n.value,a)),z($,o.leafletRef,e),he(o.leafletRef,E),he(o.leafletRef,i),o.ready=!0,_(()=>t.emit("ready",o.leafletRef))}),Le(()=>{Ce(E),o.leafletRef&&(o.leafletRef.off(),o.leafletRef.remove())});const D=Q(()=>o.leafletRef),O=Q(()=>o.ready);return{root:n,ready:O,leafletObject:D,attrs:s}},render({attrs:e}){return e.style||(e.style={}),e.style.width||(e.style.width="100%"),e.style.height||(e.style.height="100%"),F("div",{...e,ref:"root"},this.ready&&this.$slots.default?this.$slots.default():{})}}),Ye=["Symbol(Comment)","Symbol(Text)"],et=["LTooltip","LPopup"],Be={...V,draggable:{type:Boolean,default:void 0},icon:{type:[Object]},zIndexOffset:{type:Number},latLng:{type:[Object,Array],custom:!0,required:!0}},tt=(e,t,n)=>{const{options:o,methods:r}=ke(e,t,n),a=x(e,Be,o),i={...r,setDraggable(s){t.value.dragging&&(s?t.value.dragging.enable():t.value.dragging.disable())},latLngSync(s){n.emit("update:latLng",s.latlng),n.emit("update:lat-lng",s.latlng)},setLatLng(s){if(s!=null&&t.value){const l=t.value.getLatLng();(!l||!l.equals(s))&&t.value.setLatLng(s)}}};return{options:a,methods:i}},ot=(e,t)=>{const n=t.slots.default&&t.slots.default();return n&&n.length&&n.some(nt)};function nt(e){return!(Ye.includes(e.type.toString())||et.includes(e.type.name))}const yt=N({name:"LMarker",props:Be,setup(e,t){const n=g(),o=g(!1),r=U(q),a=k(W);A(Oe,()=>{var c;return!!((c=n.value)!=null&&c.getElement())}),A(Re,c=>{var d,p;const v=w((d=n.value)==null?void 0:d.getElement)&&((p=n.value)==null?void 0:p.getElement());v&&(v.innerHTML=c)}),A(Ae,c=>{var d;return((d=n.value)==null?void 0:d.setIcon)&&n.value.setIcon(c)});const{options:i,methods:s}=tt(e,n,t),l={moveHandler:je(s.latLngSync)};return I(async()=>{const{marker:c,divIcon:d}=r?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);ot(i,t)&&(i.icon=d({className:""})),n.value=G(c(e.latLng,i));const{listeners:p}=K(t.attrs);n.value.on(p),n.value.on("move",l.moveHandler),z(s,n.value,e),a({...e,...s,leafletObject:n.value}),o.value=!0,_(()=>t.emit("ready",n.value))}),Le(()=>Ce(l)),{ready:o,leafletObject:n}},render(){return Ge(this.ready,this.$slots)}}),rt={...Pe,smoothFactor:{type:Number},noClip:{type:Boolean,default:void 0},latLngs:{type:Array,required:!0,custom:!0}},be={...rt},_e={...J,content:{type:String,default:null}};({..._e});({...be,latLngs:{...be.latLngs}});const pe={...de,tms:{type:Boolean,default:void 0},subdomains:{type:[String,Array],validator:e=>typeof e=="string"?!0:Array.isArray(e)?e.every(t=>typeof t=="string"):!1},detectRetina:{type:Boolean,default:void 0},url:{type:String,required:!0,custom:!0}},at=(e,t,n)=>{const{options:o,methods:r}=Te(e,t,n),a=x(e,pe,o),i={...r};return{options:a,methods:i}},vt=N({props:pe,setup(e,t){const n=g(),o=U(q),r=k(W),{options:a,methods:i}=at(e,n,t);return I(async()=>{const{tileLayer:s}=o?T.L:await S(()=>import("./leaflet-src.esm.NPgqU0nd.js"),__vite__mapDeps([]),import.meta.url);n.value=G(s(e.url,a));const{listeners:l}=K(t.attrs);n.value.on(l),z(i,n.value,e),r({...e,...i,leafletObject:n.value}),_(()=>t.emit("ready",n.value))}),{leafletObject:n}},render(){return null}});({..._e});({...pe});const bt=N({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(e,{slots:t,attrs:n}){const o=g(!1);return I(()=>{o.value=!0}),r=>{var l;if(o.value)return(l=t.default)==null?void 0:l.call(t);const a=t.fallback||t.placeholder;if(a)return a();const i=r.fallback||r.placeholder||"",s=r.fallbackTag||r.placeholderTag||"span";return Ue(s,n,i)}}});function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}function it(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,te(e,t)}function te(e,t){return te=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},te(e,t)}function st(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function se(e,t,n){return se=st()?Reflect.construct.bind():function(o,r,a){var i=[null];i.push.apply(i,r);var s=new(Function.bind.apply(o,i));return a&&te(s,a.prototype),s},se.apply(null,arguments)}function P(e,t,n,o){t===void 0&&(t=""),o===void 0&&(o={});var r=document.createElement(e);return t&&(r.className=t),Object.keys(o).forEach(function(a){if(typeof o[a]=="function"){var i=a.indexOf("on")===0?a.substr(2).toLowerCase():a;r.addEventListener(i,o[a])}else a==="html"?r.innerHTML=o[a]:a==="text"?r.innerText=o[a]:r.setAttribute(a,o[a])}),n&&n.appendChild(r),r}function H(e){e.preventDefault(),e.stopPropagation()}var ee=function(){return[].slice.call(arguments).filter(Boolean).join(" ").trim()};function B(e,t){e&&e.classList&&(Array.isArray(t)?t:[t]).forEach(function(n){e.classList.contains(n)||e.classList.add(n)})}function C(e,t){e&&e.classList&&(Array.isArray(t)?t:[t]).forEach(function(n){e.classList.contains(n)&&e.classList.remove(n)})}var oe,ne=13,le=40,Ne=38,lt=[ne,27,le,Ne,37,39],ut=function(){function e(n){var o=this,r=n.handleSubmit,a=n.searchLabel,i=n.classNames,s=i===void 0?{}:i;this.container=void 0,this.form=void 0,this.input=void 0,this.handleSubmit=void 0,this.hasError=!1,this.container=P("div",ee("geosearch",s.container)),this.form=P("form",["",s.form].join(" "),this.container,{autocomplete:"none",onClick:H,onDblClick:H,touchStart:H,touchEnd:H}),this.input=P("input",["glass",s.input].join(" "),this.form,{type:"text",placeholder:a||"search",onInput:this.onInput,onKeyUp:function(l){return o.onKeyUp(l)},onKeyPress:function(l){return o.onKeyPress(l)},onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(){o.input.focus(),o.input.dispatchEvent(new Event("focus"))}}),this.handleSubmit=r}var t=e.prototype;return t.onFocus=function(){B(this.form,"active")},t.onBlur=function(){C(this.form,"active")},t.onSubmit=function(n){try{var o=this;return H(n),C(r=o.container,"error"),B(r,"pending"),Promise.resolve(o.handleSubmit({query:o.input.value})).then(function(){C(o.container,"pending")})}catch(a){return Promise.reject(a)}var r},t.onInput=function(){this.hasError&&(C(this.container,"error"),this.hasError=!1)},t.onKeyUp=function(n){n.keyCode===27&&(C(this.container,["pending","active"]),this.input.value="",document.body.focus(),document.body.blur())},t.onKeyPress=function(n){n.keyCode===ne&&this.onSubmit(n)},t.setQuery=function(n){this.input.value=n},e}(),ct=function(){function e(n){var o=this,r=n.handleClick,a=n.classNames,i=a===void 0?{}:a,s=n.notFoundMessage;this.handleClick=void 0,this.selected=-1,this.results=[],this.container=void 0,this.resultItem=void 0,this.notFoundMessage=void 0,this.onClick=function(l){if(typeof o.handleClick=="function"){var c=l.target;if(c&&o.container.contains(c)&&c.hasAttribute("data-key")){var d=Number(c.getAttribute("data-key"));o.handleClick({result:o.results[d]})}}},this.handleClick=r,this.notFoundMessage=s?P("div",ee(i.notfound),void 0,{html:s}):void 0,this.container=P("div",ee("results",i.resultlist)),this.container.addEventListener("click",this.onClick,!0),this.resultItem=P("div",ee(i.item))}var t=e.prototype;return t.render=function(n,o){var r=this;n===void 0&&(n=[]),this.clear(),n.forEach(function(a,i){var s=r.resultItem.cloneNode(!0);s.setAttribute("data-key",""+i),s.innerHTML=o({result:a}),r.container.appendChild(s)}),n.length>0?(B(this.container.parentElement,"open"),B(this.container,"active")):this.notFoundMessage&&(this.container.appendChild(this.notFoundMessage),B(this.container.parentElement,"open")),this.results=n},t.select=function(n){return Array.from(this.container.children).forEach(function(o,r){return r===n?B(o,"active"):C(o,"active")}),this.selected=n,this.results[n]},t.count=function(){return this.results?this.results.length:0},t.clear=function(){for(this.selected=-1;this.container.lastChild;)this.container.removeChild(this.container.lastChild);C(this.container.parentElement,"open"),C(this.container,"active")},e}(),ie={position:"topleft",style:"button",showMarker:!0,showPopup:!1,popupFormat:function(e){return""+e.result.label},resultFormat:function(e){return""+e.result.label},marker:{icon:ce&&L.Icon?new L.Icon.Default:void 0,draggable:!1},maxMarkers:1,maxSuggestions:5,retainZoomLevel:!1,animateZoom:!0,searchLabel:"Enter address",clearSearchLabel:"Clear search",notFoundMessage:"",messageHideDelay:3e3,zoomLevel:18,classNames:{container:"leaflet-bar leaflet-control leaflet-control-geosearch",button:"leaflet-bar-part leaflet-bar-part-single",resetButton:"reset",msgbox:"leaflet-bar message",form:"",input:"",resultlist:"",item:"",notfound:"leaflet-bar-notfound"},autoComplete:!0,autoCompleteDelay:250,autoClose:!1,keepResult:!1,updateMap:!0},Ie="Leaflet must be loaded before instantiating the GeoSearch control",dt={options:j({},ie),classNames:j({},ie.classNames),initialize:function(e){var t,n,o,r,a=this;if(!ce)throw new Error(Ie);if(!e.provider)throw new Error("Provider is missing from options");this.options=j({},ie,e),this.classNames=j({},this.classNames,e.classNames),this.markers=new L.FeatureGroup,this.classNames.container+=" leaflet-geosearch-"+this.options.style,this.searchElement=new ut({searchLabel:this.options.searchLabel,classNames:{container:this.classNames.container,form:this.classNames.form,input:this.classNames.input},handleSubmit:function(i){return a.onSubmit(i)}}),this.button=P("a",this.classNames.button,this.searchElement.container,{title:this.options.searchLabel,href:"#",onClick:function(i){return a.onClick(i)}}),L.DomEvent.disableClickPropagation(this.button),this.resetButton=P("button",this.classNames.resetButton,this.searchElement.form,{text:"×","aria-label":this.options.clearSearchLabel,onClick:function(){a.searchElement.input.value===""?a.close():a.clearResults(null,!0)}}),L.DomEvent.disableClickPropagation(this.resetButton),this.options.autoComplete&&(this.resultList=new ct({handleClick:function(i){var s=i.result;a.searchElement.input.value=s.label,a.onSubmit({query:s.label,data:s})},classNames:{resultlist:this.classNames.resultlist,item:this.classNames.item,notfound:this.classNames.notfound},notFoundMessage:this.options.notFoundMessage}),this.searchElement.form.appendChild(this.resultList.container),this.searchElement.input.addEventListener("keyup",(t=function(i){return a.autoSearch(i)},(n=this.options.autoCompleteDelay)===void 0&&(n=250),o===void 0&&(o=!1),function(){var i=[].slice.call(arguments);r&&clearTimeout(r),r=setTimeout(function(){r=null,o||t.apply(void 0,i)},n),o&&!r&&t.apply(void 0,i)}),!0),this.searchElement.input.addEventListener("keydown",function(i){return a.selectResult(i)},!0),this.searchElement.input.addEventListener("keydown",function(i){return a.clearResults(i,!0)},!0)),this.searchElement.form.addEventListener("click",function(i){i.preventDefault()},!1)},onAdd:function(e){var t=this.options,n=t.showMarker,o=t.style;if(this.map=e,n&&this.markers.addTo(e),o==="bar"){var r=e.getContainer().querySelector(".leaflet-control-container");this.container=P("div","leaflet-control-geosearch leaflet-geosearch-bar"),this.container.appendChild(this.searchElement.form),r.appendChild(this.container)}return L.DomEvent.disableClickPropagation(this.searchElement.form),this.searchElement.container},onRemove:function(){var e;return(e=this.container)==null||e.remove(),this},open:function(){var e=this.searchElement,t=e.input;B(e.container,"active"),t.focus()},close:function(){C(this.searchElement.container,"active"),this.clearResults()},onClick:function(e){e.preventDefault(),e.stopPropagation(),this.searchElement.container.classList.contains("active")?this.close():this.open()},selectResult:function(e){if([ne,le,Ne].indexOf(e.keyCode)!==-1)if(e.preventDefault(),e.keyCode!==ne){var t=this.resultList.count()-1;if(!(t<0)){var n=this.resultList.selected,o=e.keyCode===le?n+1:n-1,r=this.resultList.select(o<0?t:o>t?0:o);this.searchElement.input.value=r.label}}else{var a=this.resultList.select(this.resultList.selected);this.onSubmit({query:this.searchElement.input.value,data:a})}},clearResults:function(e,t){if(t===void 0&&(t=!1),!e||e.keyCode===27){var n=this.options,o=n.autoComplete;!t&&n.keepResult||(this.searchElement.input.value="",this.markers.clearLayers()),o&&this.resultList.clear()}},autoSearch:function(e){try{var t=this;if(lt.indexOf(e.keyCode)>-1)return Promise.resolve();var n=e.target.value,o=t.options.provider,r=function(){if(n.length)return Promise.resolve(o.search({query:n})).then(function(a){a=a.slice(0,t.options.maxSuggestions),t.resultList.render(a,t.options.resultFormat)});t.resultList.clear()}();return Promise.resolve(r&&r.then?r.then(function(){}):void 0)}catch(a){return Promise.reject(a)}},onSubmit:function(e){try{var t=this;return t.resultList.clear(),Promise.resolve(t.options.provider.search(e)).then(function(n){n&&n.length>0&&t.showResult(n[0],e)})}catch(n){return Promise.reject(n)}},showResult:function(e,t){var n=this.options,o=n.autoClose,r=n.updateMap,a=this.markers.getLayers();a.length>=this.options.maxMarkers&&this.markers.removeLayer(a[0]);var i=this.addMarker(e,t);r&&this.centerMap(e),this.map.fireEvent("geosearch/showlocation",{location:e,marker:i}),o&&this.closeResults()},closeResults:function(){var e=this.searchElement.container;e.classList.contains("active")&&C(e,"active"),this.clearResults()},addMarker:function(e,t){var n=this,o=this.options,r=o.marker,a=o.showPopup,i=o.popupFormat,s=new L.Marker([e.y,e.x],r),l=e.label;return typeof i=="function"&&(l=i({query:t,result:e})),s.bindPopup(l),this.markers.addLayer(s),a&&s.openPopup(),r.draggable&&s.on("dragend",function(c){n.map.fireEvent("geosearch/marker/dragend",{location:s.getLatLng(),event:c})}),s},centerMap:function(e){var t=this.options,n=t.retainZoomLevel,o=t.animateZoom,r=e.bounds?new L.LatLngBounds(e.bounds):new L.LatLng(e.y,e.x).toBounds(10),a=r.isValid()?r:this.markers.getBounds();!n&&r.isValid()&&!e.bounds||n||!r.isValid()?this.map.setView(a.getCenter(),this.getZoom(),{animate:o}):this.map.fitBounds(a,{animate:o})},getZoom:function(){var e=this.options,t=e.zoomLevel;return e.retainZoomLevel?this.map.getZoom():t}};function gt(){if(!ce)throw new Error(Ie);var e=L.Control.extend(dt);return se(e,[].slice.call(arguments))}(function(e){e[e.SEARCH=0]="SEARCH",e[e.REVERSE=1]="REVERSE"})(oe||(oe={}));var ge,pt=function(){function e(n){n===void 0&&(n={}),this.options=void 0,this.options=n}var t=e.prototype;return t.getParamString=function(n){n===void 0&&(n={});var o=j({},this.options.params,n);return Object.keys(o).map(function(r){return encodeURIComponent(r)+"="+encodeURIComponent(o[r])}).join("&")},t.getUrl=function(n,o){return n+"?"+this.getParamString(o)},t.search=function(n){try{var o=this,r=o.endpoint({query:n.query,type:oe.SEARCH});return Promise.resolve(fetch(r)).then(function(a){return Promise.resolve(a.json()).then(function(i){return o.parse({data:i})})})}catch(a){return Promise.reject(a)}},e}();(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(ge||(ge={}));var Lt=function(e){function t(o){var r;o===void 0&&(o={}),(r=e.call(this,o)||this).searchUrl=void 0,r.reverseUrl=void 0;var a="https://nominatim.openstreetmap.org";return r.searchUrl=o.searchUrl||a+"/search",r.reverseUrl=o.reverseUrl||a+"/reverse",r}it(t,e);var n=t.prototype;return n.endpoint=function(o){var r=o.query,a=o.type,i=typeof r=="string"?{q:r}:r;return i.format="json",this.getUrl(a===oe.REVERSE?this.reverseUrl:this.searchUrl,i)},n.parse=function(o){return(Array.isArray(o.data)?o.data:[o.data]).map(function(r){return{x:Number(r.lon),y:Number(r.lat),label:r.display_name,bounds:[[parseFloat(r.boundingbox[0]),parseFloat(r.boundingbox[2])],[parseFloat(r.boundingbox[1]),parseFloat(r.boundingbox[3])]],raw:r}})},t}(pt);export{Lt as F,bt as _,ht as i,ft as s,yt as u,vt as v,gt as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./entry.gBsFnzxz.js","./entry.3G22Mmo2.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
