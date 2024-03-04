import L from"./button.esm.jT06-WGs.js";import{s as T}from"./index.esm.0uRSkOCB.js";import{ab as B,ad as P,af as a,ah as N,aB as j,$ as M,ai as A,o as u,c as p,a as x,V as E,d as R,w as F,ak as w,aj as f,y as k,J as V,F as O,E as U,H,x as C}from"./entry.gBsFnzxz.js";import{s as z}from"./basecomponent.esm.vCjcc5sE.js";import"./badge.esm.oU5j7EWK.js";import"./index.esm.YLkPFSz7.js";import"./baseicon.esm.PLl1dN0r.js";function h(t){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(t)}function S(t,e,n){return e=q(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function q(t){var e=W(t,"string");return h(e)==="symbol"?e:String(e)}function W(t,e){if(h(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(h(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var J=`
@layer primevue {
    .p-speeddial {
        position: absolute;
        display: flex;
    }

    .p-speeddial-button {
        z-index: 1;
    }

    .p-speeddial-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: top 0s linear 0.2s;
        pointer-events: none;
        z-index: 2;
    }

    .p-speeddial-item {
        transform: scale(0);
        opacity: 0;
        transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;
        will-change: transform;
    }

    .p-speeddial-action {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
    }

    .p-speeddial-circle .p-speeddial-item,
    .p-speeddial-semi-circle .p-speeddial-item,
    .p-speeddial-quarter-circle .p-speeddial-item {
        position: absolute;
    }

    .p-speeddial-rotate {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        will-change: transform;
    }

    .p-speeddial-mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 250ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-mask-visible {
        pointer-events: none;
        opacity: 1;
        transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .p-speeddial-opened .p-speeddial-list {
        pointer-events: auto;
    }

    .p-speeddial-opened .p-speeddial-item {
        transform: scale(1);
        opacity: 1;
    }

    .p-speeddial-opened .p-speeddial-rotate {
        transform: rotate(45deg);
    }
}
`,G={root:function(e){var n=e.props;return{alignItems:(n.direction==="up"||n.direction==="down")&&"center",justifyContent:(n.direction==="left"||n.direction==="right")&&"center",flexDirection:n.direction==="up"?"column-reverse":n.direction==="down"?"column":n.direction==="left"?"row-reverse":n.direction==="right"?"row":null}},menu:function(e){var n=e.props;return{flexDirection:n.direction==="up"?"column-reverse":n.direction==="down"?"column":n.direction==="left"?"row-reverse":n.direction==="right"?"row":null}}},Q={root:function(e){var n=e.instance,i=e.props;return["p-speeddial p-component p-speeddial-".concat(i.type),S(S(S({},"p-speeddial-direction-".concat(i.direction),i.type!=="circle"),"p-speeddial-opened",n.d_visible),"p-disabled",i.disabled)]},button:function(e){var n=e.props;return["p-speeddial-button p-button-rounded",{"p-speeddial-rotate":n.rotateAnimation&&!n.hideIcon}]},menu:"p-speeddial-list",menuitem:function(e){var n=e.instance,i=e.id;return["p-speeddial-item",{"p-focus":n.isItemActive(i)}]},action:function(e){var n=e.item;return["p-speeddial-action",{"p-disabled":n.disabled}]},actionIcon:"p-speeddial-action-icon",mask:function(e){var n=e.instance;return["p-speeddial-mask",{"p-speeddial-mask-visible":n.d_visible}]}},X=B.extend({name:"speeddial",css:J,classes:Q,inlineStyles:G}),Y={name:"BaseSpeedDial",extends:z,props:{model:null,visible:{type:Boolean,default:!1},direction:{type:String,default:"up"},transitionDelay:{type:Number,default:30},type:{type:String,default:"linear"},radius:{type:Number,default:0},mask:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hideOnClickOutside:{type:Boolean,default:!0},buttonClass:null,maskStyle:null,maskClass:null,showIcon:{type:String,default:void 0},hideIcon:{type:String,default:void 0},rotateAnimation:{type:Boolean,default:!0},tooltipOptions:null,style:null,class:null,ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:X,provide:function(){return{$parentInstance:this}}};function b(t){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(t)}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,i)}return n}function Z(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K(Object(n),!0).forEach(function(i){_(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function _(t,e,n){return e=$(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function $(t){var e=ee(t,"string");return b(e)==="symbol"?e:String(e)}function ee(t,e){if(b(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(b(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function I(t){return re(t)||ie(t)||ne(t)||te()}function te(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ne(t,e){if(t){if(typeof t=="string")return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}}function ie(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function re(t){if(Array.isArray(t))return D(t)}function D(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var oe={name:"SpeedDial",extends:Y,emits:["click","show","hide","focus","blur"],documentClickListener:null,container:null,list:null,data:function(){return{id:this.$attrs.id,d_visible:this.visible,isItemClicked:!1,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||P()},visible:function(e){this.d_visible=e}},mounted:function(){if(this.id=this.id||P(),this.type!=="linear"){var e=a.findSingle(this.container,'[data-pc-name="button"]'),n=a.findSingle(this.list,'[data-pc-section="menuitem"]');if(e&&n){var i=Math.abs(e.offsetWidth-n.offsetWidth),o=Math.abs(e.offsetHeight-n.offsetHeight);this.list.style.setProperty("--item-diff-x","".concat(i/2,"px")),this.list.style.setProperty("--item-diff-y","".concat(o/2,"px"))}}this.hideOnClickOutside&&this.bindDocumentClickListener()},beforeMount:function(){this.unbindDocumentClickListener()},methods:{getPTOptions:function(e,n){return this.ptm(n,{context:{active:this.isItemActive(e),hidden:!this.d_visible}})},onFocus:function(e){this.focused=!0,this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onItemClick:function(e,n){n.command&&n.command({originalEvent:e,item:n}),this.hide(),this.isItemClicked=!0,e.preventDefault()},onClick:function(e){this.d_visible?this.hide():this.show(),this.isItemClicked=!0,this.$emit("click",e)},show:function(){this.d_visible=!0,this.$emit("show")},hide:function(){this.d_visible=!1,this.$emit("hide")},calculateTransitionDelay:function(e){var n=this.model.length,i=this.d_visible;return(i?e:n-e-1)*this.transitionDelay},onTogglerKeydown:function(e){switch(e.code){case"ArrowDown":case"ArrowLeft":this.onTogglerArrowDown(e);break;case"ArrowUp":case"ArrowRight":this.onTogglerArrowUp(e);break;case"Escape":this.onEscapeKey();break}},onKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDown(e);break;case"ArrowUp":this.onArrowUp(e);break;case"ArrowLeft":this.onArrowLeft(e);break;case"ArrowRight":this.onArrowRight(e);break;case"Enter":case"Space":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break}},onTogglerArrowUp:function(e){this.focused=!0,a.focus(this.list),this.show(),this.navigatePrevItem(e),e.preventDefault()},onTogglerArrowDown:function(e){this.focused=!0,a.focus(this.list),this.show(),this.navigateNextItem(e),e.preventDefault()},onEnterKey:function(e){var n=this,i=a.find(this.container,'[data-pc-section="menuitem"]'),o=I(i).findIndex(function(l){return l.id===n.focusedOptionIndex});this.onItemClick(e,this.model[o]),this.onBlur(e);var r=a.findSingle(this.container,"button");r&&a.focus(r)},onEscapeKey:function(){this.hide();var e=a.findSingle(this.container,"button");e&&a.focus(e)},onArrowUp:function(e){this.direction==="up"?this.navigateNextItem(e):this.direction==="down"?this.navigatePrevItem(e):this.navigateNextItem(e)},onArrowDown:function(e){this.direction==="up"?this.navigatePrevItem(e):this.direction==="down"?this.navigateNextItem(e):this.navigatePrevItem(e)},onArrowLeft:function(e){var n=["left","up-right","down-left"],i=["right","up-left","down-right"];n.includes(this.direction)?this.navigateNextItem(e):i.includes(this.direction)?this.navigatePrevItem(e):this.navigatePrevItem(e)},onArrowRight:function(e){var n=["left","up-right","down-left"],i=["right","up-left","down-right"];n.includes(this.direction)?this.navigatePrevItem(e):i.includes(this.direction)?this.navigateNextItem(e):this.navigateNextItem(e)},onEndKey:function(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigatePrevItem(e)},onHomeKey:function(e){e.preventDefault(),this.focusedOptionIndex=-1,this.navigateNextItem(e)},navigateNextItem:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},navigatePrevItem:function(e){var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},changeFocusedOptionIndex:function(e){var n=a.find(this.container,'[data-pc-section="menuitem"]'),i=I(n).filter(function(o){return!a.hasClass(a.findSingle(o,"a"),"p-disabled")});i[e]&&(this.focusedOptionIndex=i[e].getAttribute("id"))},findPrevOptionIndex:function(e){var n=a.find(this.container,'[data-pc-section="menuitem"]'),i=I(n).filter(function(l){return!a.hasClass(a.findSingle(l,"a"),"p-disabled")}),o=e===-1?i[i.length-1].id:e,r=i.findIndex(function(l){return l.getAttribute("id")===o});return r=e===-1?i.length-1:r-1,r},findNextOptionIndex:function(e){var n=a.find(this.container,'[data-pc-section="menuitem"]'),i=I(n).filter(function(l){return!a.hasClass(a.findSingle(l,"a"),"p-disabled")}),o=e===-1?i[0].id:e,r=i.findIndex(function(l){return l.getAttribute("id")===o});return r=e===-1?0:r+1,r},calculatePointStyle:function(e){var n=this.type;if(n!=="linear"){var i=this.model.length,o=this.radius||i*20;if(n==="circle"){var r=2*Math.PI/i;return{left:"calc(".concat(o*Math.cos(r*e),"px + var(--item-diff-x, 0px))"),top:"calc(".concat(o*Math.sin(r*e),"px + var(--item-diff-y, 0px))")}}else if(n==="semi-circle"){var l=this.direction,y=Math.PI/(i-1),m="calc(".concat(o*Math.cos(y*e),"px + var(--item-diff-x, 0px))"),s="calc(".concat(o*Math.sin(y*e),"px + var(--item-diff-y, 0px))");if(l==="up")return{left:m,bottom:s};if(l==="down")return{left:m,top:s};if(l==="left")return{right:s,top:m};if(l==="right")return{left:s,top:m}}else if(n==="quarter-circle"){var c=this.direction,v=Math.PI/(2*(i-1)),d="calc(".concat(o*Math.cos(v*e),"px + var(--item-diff-x, 0px))"),g="calc(".concat(o*Math.sin(v*e),"px + var(--item-diff-y, 0px))");if(c==="up-left")return{right:d,bottom:g};if(c==="up-right")return{left:d,bottom:g};if(c==="down-left")return{right:g,top:d};if(c==="down-right")return{left:g,top:d}}}return{}},getItemStyle:function(e){var n=this.calculateTransitionDelay(e),i=this.calculatePointStyle(e);return Z({transitionDelay:"".concat(n,"ms")},i)},bindDocumentClickListener:function(){var e=this;this.documentClickListener||(this.documentClickListener=function(n){e.d_visible&&e.isOutsideClicked(n)&&e.hide(),e.isItemClicked=!1},document.addEventListener("click",this.documentClickListener))},unbindDocumentClickListener:function(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)},isOutsideClicked:function(e){return this.container&&!(this.container.isSameNode(e.target)||this.container.contains(e.target)||this.isItemClicked)},isItemVisible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},isItemActive:function(e){return e===this.focusedOptionId},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{containerClass:function(){return[this.cx("root"),this.class]},focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{SDButton:L,PlusIcon:T},directives:{ripple:N,tooltip:j}},se=["id","aria-activedescendant"],ae=["id","aria-controls"],le=["href","target","onClick","aria-label"];function ce(t,e,n,i,o,r){var l=M("SDButton"),y=A("ripple"),m=A("tooltip");return u(),p(O,null,[x("div",f({ref:r.containerRef,class:r.containerClass,style:[t.style,t.sx("root")]},t.ptm("root"),{"data-pc-name":"speeddial"}),[E(t.$slots,"button",{onClick:r.onClick,toggleCallback:r.onClick},function(){return[R(l,{type:"button",class:V([t.cx("button"),t.buttonClass]),onClick:e[0]||(e[0]=function(s){return r.onClick(s)}),disabled:t.disabled,onKeydown:r.onTogglerKeydown,"aria-expanded":o.d_visible,"aria-haspopup":!0,"aria-controls":o.id+"_list","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,pt:t.ptm("button"),unstyled:t.unstyled},{icon:F(function(){return[E(t.$slots,"icon",{visible:o.d_visible},function(){return[o.d_visible&&t.hideIcon?(u(),k(w(t.hideIcon?"span":"PlusIcon"),f({key:0,class:t.cx("buttonIcon")},t.ptm("button").icon,{"data-pc-section":"icon"}),null,16,["class"])):(u(),k(w(t.showIcon?"span":"PlusIcon"),f({key:1,class:o.d_visible&&t.hideIcon?t.hideIcon:t.showIcon},t.ptm("button").icon,{"data-pc-section":"icon"}),null,16,["class"]))]})]}),_:3},8,["class","disabled","onKeydown","aria-expanded","aria-controls","aria-label","aria-labelledby","pt","unstyled"])]}),x("ul",f({ref:r.listRef,id:o.id+"_list",class:t.cx("menu"),style:t.sx("menu"),role:"menu","aria-activedescendant":o.focused?r.focusedOptionId:void 0,tabindex:"-1",onFocus:e[1]||(e[1]=function(){return r.onFocus&&r.onFocus.apply(r,arguments)}),onBlur:e[2]||(e[2]=function(){return r.onBlur&&r.onBlur.apply(r,arguments)}),onKeydown:e[3]||(e[3]=function(){return r.onKeyDown&&r.onKeyDown.apply(r,arguments)})},t.ptm("menu")),[(u(!0),p(O,null,U(t.model,function(s,c){return u(),p(O,{key:c},[r.isItemVisible(s)?(u(),p("li",f({key:0,id:"".concat(o.id,"_").concat(c),"aria-controls":"".concat(o.id,"_item"),class:t.cx("menuitem",{id:"".concat(o.id,"_").concat(c)}),style:r.getItemStyle(c),role:"menuitem"},r.getPTOptions("".concat(o.id,"_").concat(c),"menuitem")),[t.$slots.item?(u(),k(w(t.$slots.item),{key:1,item:s,onClick:function(d){return r.onItemClick(d,s)}},null,8,["item","onClick"])):H((u(),p("a",f({key:0,tabindex:-1,href:s.url||"#",role:"menuitem",class:t.cx("action",{item:s}),target:s.target,onClick:function(d){return r.onItemClick(d,s)},"aria-label":s.label},r.getPTOptions("".concat(o.id,"_").concat(c),"action")),[s.icon?(u(),p("span",f({key:0,class:[t.cx("actionIcon"),s.icon]},r.getPTOptions("".concat(o.id,"_").concat(c),"actionIcon")),null,16)):C("",!0)],16,le)),[[y],[m,{value:s.label,disabled:!t.tooltipOptions},t.tooltipOptions]])],16,ae)):C("",!0)],64)}),128))],16,se)],16),t.mask?(u(),p("div",f({key:0,class:[t.cx("mask"),t.maskClass],style:t.maskStyle},t.ptm("mask")),null,16)):C("",!0)],64)}oe.render=ce;export{oe as default};
