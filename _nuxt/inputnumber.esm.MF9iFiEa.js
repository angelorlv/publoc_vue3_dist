import G from"./button.esm.jT06-WGs.js";import{s as z}from"./index.esm.xI9xllvp.js";import{s as W}from"./index.esm.6fqS1Gx8.js";import H from"./inputtext.esm.fYdK0exk.js";import{ab as q,af as A,$ as U,o as b,c as j,d as P,aj as p,w as B,ak as S,y as I,V as D,aA as C,x as V}from"./entry.gBsFnzxz.js";import{s as J}from"./basecomponent.esm.vCjcc5sE.js";import"./badge.esm.oU5j7EWK.js";import"./index.esm.YLkPFSz7.js";import"./baseicon.esm.PLl1dN0r.js";var Q=`
@layer primevue {
    .p-inputnumber {
        display: inline-flex;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button .p-button-label,
    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button .p-button-label {
        display: none;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-up {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-stacked .p-button.p-inputnumber-button-down {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
    }

    .p-inputnumber-buttons-stacked .p-inputnumber-button-group .p-button.p-inputnumber-button {
        flex: 1 1 auto;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-up {
        order: 3;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-buttons-horizontal .p-button.p-inputnumber-button-down {
        order: 1;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .p-inputnumber-buttons-vertical {
        flex-direction: column;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-up {
        order: 1;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-buttons-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-buttons-vertical .p-button.p-inputnumber-button-down {
        order: 3;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        width: 100%;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-fluid .p-inputnumber {
        width: 100%;
    }

    .p-fluid .p-inputnumber .p-inputnumber-input {
        width: 1%;
    }

    .p-fluid .p-inputnumber-buttons-vertical .p-inputnumber-input {
        width: 100%;
    }
}
`,X={root:function(e){var n=e.instance,i=e.props;return["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":n.filled||i.allowEmpty===!1,"p-inputwrapper-focus":n.focused,"p-inputnumber-buttons-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":i.showButtons&&i.buttonLayout==="vertical"}]},input:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-up",{"p-disabled":i.showButtons&&i.max!==null&&n.maxBoundry()}]},decrementButton:function(e){var n=e.instance,i=e.props;return["p-inputnumber-button p-inputnumber-button-down",{"p-disabled":i.showButtons&&i.min!==null&&n.minBoundry()}]}},Y=q.extend({name:"inputnumber",css:Q,classes:X}),Z={name:"BaseInputNumber",extends:J,props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:void 0},decrementButtonIcon:{type:String,default:void 0},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},highlightOnFocus:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},incrementButtonProps:{type:null,default:null},decrementButtonProps:{type:null,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Y,provide:function(){return{$parentInstance:this}}};function v(t){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(i){ee(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function ee(t,e,n){return e=te(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function te(t){var e=ne(t,"string");return v(e)==="symbol"?e:String(e)}function ne(t,e){if(v(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(v(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ie(t){return ae(t)||se(t)||ue(t)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(t,e){if(t){if(typeof t=="string")return O(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(t,e)}}function se(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ae(t){if(Array.isArray(t))return O(t)}function O(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var oe={name:"InputNumber",extends:Z,emits:["update:modelValue","input","focus","blur"],numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data:function(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue:function(e){this.d_modelValue=e},locale:function(e,n){this.updateConstructParser(e,n)},localeMatcher:function(e,n){this.updateConstructParser(e,n)},mode:function(e,n){this.updateConstructParser(e,n)},currency:function(e,n){this.updateConstructParser(e,n)},currencyDisplay:function(e,n){this.updateConstructParser(e,n)},useGrouping:function(e,n){this.updateConstructParser(e,n)},minFractionDigits:function(e,n){this.updateConstructParser(e,n)},maxFractionDigits:function(e,n){this.updateConstructParser(e,n)},suffix:function(e,n){this.updateConstructParser(e,n)},prefix:function(e,n){this.updateConstructParser(e,n)}},created:function(){this.constructParser()},methods:{getOptions:function(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser:function(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());var e=ie(new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)).reverse(),n=new Map(e.map(function(i,r){return[i,r]}));this._numeral=new RegExp("[".concat(e.join(""),"]"),"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=function(i){return n.get(i)}},updateConstructParser:function(e,n){e!==n&&this.constructParser()},escapeRegExp:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression:function(){var e=new Intl.NumberFormat(this.locale,R(R({},this.getOptions()),{},{useGrouping:!1}));return new RegExp("[".concat(e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,""),"]"),"g")},getGroupingExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp("[".concat(this.groupChar,"]"),"g")},getMinusSignExpression:function(){var e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp("[".concat(e.format(-1).trim().replace(this._numeral,""),"]"),"g")},getCurrencyExpression:function(){if(this.currency){var e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp("[".concat(e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,""),"]"),"g")}return new RegExp("[]","g")},getPrefixExpression:function(){if(this.prefix)this.prefixChar=this.prefix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp("".concat(this.escapeRegExp(this.prefixChar||"")),"g")},getSuffixExpression:function(){if(this.suffix)this.suffixChar=this.suffix;else{var e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp("".concat(this.escapeRegExp(this.suffixChar||"")),"g")},formatValue:function(e){if(e!=null){if(e==="-")return e;if(this.format){var n=new Intl.NumberFormat(this.locale,this.getOptions()),i=n.format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue:function(e){var n=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(n){if(n==="-")return n;var i=+n;return isNaN(i)?null:i}return null},repeat:function(e,n,i){var r=this;if(!this.readonly){var u=n||500;this.clearTimer(),this.timer=setTimeout(function(){r.repeat(e,40,i)},u),this.spin(e,i)}},spin:function(e,n){if(this.$refs.input){var i=this.step*n,r=this.parseValue(this.$refs.input.$el.value)||0,u=this.validateValue(r+i);this.updateInput(u,null,"spin"),this.updateModel(e,u),this.handleOnInput(e,r,u)}},onUpButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp:function(){this.disabled||this.clearTimer()},onUpButtonMouseLeave:function(){this.disabled||this.clearTimer()},onUpButtonKeyUp:function(){this.disabled||this.clearTimer()},onUpButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown:function(e){this.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp:function(){this.disabled||this.clearTimer()},onDownButtonMouseLeave:function(){this.disabled||this.clearTimer()},onDownButtonKeyUp:function(){this.disabled||this.clearTimer()},onDownButtonKeyDown:function(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput:function(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown:function(e){if(!this.readonly){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}var n=e.target.selectionStart,i=e.target.selectionEnd,r=e.target.value,u=null;switch(e.altKey&&e.preventDefault(),e.code){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":this.isNumeralChar(r.charAt(n-1))||e.preventDefault();break;case"ArrowRight":this.isNumeralChar(r.charAt(n))||e.preventDefault();break;case"Tab":case"Enter":case"NumpadEnter":u=this.validateValue(this.parseValue(r)),this.$refs.input.$el.value=this.formatValue(u),this.$refs.input.$el.setAttribute("aria-valuenow",u),this.updateModel(e,u);break;case"Backspace":{if(e.preventDefault(),n===i){var s=r.charAt(n-1),a=this.getDecimalCharIndexes(r),h=a.decimalCharIndex,c=a.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(s)){var g=this.getDecimalLength(r);if(this._group.test(s))this._group.lastIndex=0,u=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(s))this._decimal.lastIndex=0,g?this.$refs.input.$el.setSelectionRange(n-1,n-1):u=r.slice(0,n-1)+r.slice(n);else if(h>0&&n>h){var o=this.isDecimalMode()&&(this.minFractionDigits||0)<g?"":"0";u=r.slice(0,n-1)+o+r.slice(n)}else c===1?(u=r.slice(0,n-1)+"0"+r.slice(n),u=this.parseValue(u)>0?u:""):u=r.slice(0,n-1)+r.slice(n)}this.updateValue(e,u,null,"delete-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===i){var f=r.charAt(n),l=this.getDecimalCharIndexes(r),y=l.decimalCharIndex,w=l.decimalCharIndexWithoutPrefix;if(this.isNumeralChar(f)){var m=this.getDecimalLength(r);if(this._group.test(f))this._group.lastIndex=0,u=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(f))this._decimal.lastIndex=0,m?this.$refs.input.$el.setSelectionRange(n+1,n+1):u=r.slice(0,n)+r.slice(n+1);else if(y>0&&n>y){var $=this.isDecimalMode()&&(this.minFractionDigits||0)<m?"":"0";u=r.slice(0,n)+$+r.slice(n+1)}else w===1?(u=r.slice(0,n)+"0"+r.slice(n+1),u=this.parseValue(u)>0?u:""):u=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,u,null,"delete-back-single")}else u=this.deleteRange(r,n,i),this.updateValue(e,u,null,"delete-range");break;case"Home":this.min&&(this.updateModel(e,this.min),e.preventDefault());break;case"End":this.max&&(this.updateModel(e,this.max),e.preventDefault());break}}},onInputKeyPress:function(e){if(!this.readonly){e.preventDefault();var n=e.which||e.keyCode,i=String.fromCharCode(n),r=this.isDecimalSign(i),u=this.isMinusSign(i);(48<=n&&n<=57||u||r)&&this.insert(e,i,{isDecimalSign:r,isMinusSign:u})}},onPaste:function(e){e.preventDefault();var n=(e.clipboardData||window.clipboardData).getData("Text");if(n){var i=this.parseValue(n);i!=null&&this.insert(e,i.toString())}},allowMinusSign:function(){return this.min===null||this.min<0},isMinusSign:function(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign:function(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode:function(){return this.mode==="decimal"},getDecimalCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,""),r=i.search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}},getCharIndexes:function(e){var n=e.search(this._decimal);this._decimal.lastIndex=0;var i=e.search(this._minusSign);this._minusSign.lastIndex=0;var r=e.search(this._suffix);this._suffix.lastIndex=0;var u=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:i,suffixCharIndex:r,currencyCharIndex:u}},insert:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{isDecimalSign:!1,isMinusSign:!1},r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!(!this.allowMinusSign()&&r!==-1)){var u=this.$refs.input.$el.selectionStart,s=this.$refs.input.$el.selectionEnd,a=this.$refs.input.$el.value.trim(),h=this.getCharIndexes(a),c=h.decimalCharIndex,g=h.minusCharIndex,o=h.suffixCharIndex,f=h.currencyCharIndex,l;if(i.isMinusSign)u===0&&(l=a,(g===-1||s!==0)&&(l=this.insertText(a,n,0,s)),this.updateValue(e,l,n,"insert"));else if(i.isDecimalSign)c>0&&u===c?this.updateValue(e,a,n,"insert"):c>u&&c<s?(l=this.insertText(a,n,u,s),this.updateValue(e,l,n,"insert")):c===-1&&this.maxFractionDigits&&(l=this.insertText(a,n,u,s),this.updateValue(e,l,n,"insert"));else{var y=this.numberFormat.resolvedOptions().maximumFractionDigits,w=u!==s?"range-insert":"insert";if(c>0&&u>c){if(u+n.length-(c+1)<=y){var m=f>=u?f-1:o>=u?o:a.length;l=a.slice(0,u)+n+a.slice(u+n.length,m)+a.slice(m),this.updateValue(e,l,n,w)}}else l=this.insertText(a,n,u,s),this.updateValue(e,l,n,w)}}},insertText:function(e,n,i,r){var u=n==="."?n:n.split(".");if(u.length===2){var s=e.slice(i,r).search(this._decimal);return this._decimal.lastIndex=0,s>0?e.slice(0,i)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-i===e.length?this.formatValue(n):i===0?n+e.slice(r):r===e.length?e.slice(0,i)+n:e.slice(0,i)+n+e.slice(r)},deleteRange:function(e,n,i){var r;return i-n===e.length?r="":n===0?r=e.slice(i):i===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(i),r},initCursor:function(){var e=this.$refs.input.$el.selectionStart,n=this.$refs.input.$el.value,i=n.length,r=null,u=(this.prefixChar||"").length;n=n.replace(this._prefix,""),e=e-u;var s=n.charAt(e);if(this.isNumeralChar(s))return e+u;for(var a=e-1;a>=0;)if(s=n.charAt(a),this.isNumeralChar(s)){r=a+u;break}else a--;if(r!==null)this.$refs.input.$el.setSelectionRange(r+1,r+1);else{for(a=e;a<i;)if(s=n.charAt(a),this.isNumeralChar(s)){r=a+u;break}else a++;r!==null&&this.$refs.input.$el.setSelectionRange(r,r)}return r||0},onInputClick:function(){var e=this.$refs.input.$el.value;!this.readonly&&e!==A.getSelection()&&this.initCursor()},isNumeralChar:function(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex:function(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue:function(e,n,i,r){var u=this.$refs.input.$el.value,s=null;n!=null&&(s=this.parseValue(n),s=!s&&!this.allowEmpty?0:s,this.updateInput(s,i,r,n),this.handleOnInput(e,u,s))},handleOnInput:function(e,n,i){this.isValueChanged(n,i)&&this.$emit("input",{originalEvent:e,value:i,formattedValue:n})},isValueChanged:function(e,n){if(n===null&&e!==null)return!0;if(n!=null){var i=typeof e=="string"?this.parseValue(e):e;return n!==i}return!1},validateValue:function(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput:function(e,n,i,r){n=n||"";var u=this.$refs.input.$el.value,s=this.formatValue(e),a=u.length;if(s!==r&&(s=this.concatValues(s,r)),a===0){this.$refs.input.$el.value=s,this.$refs.input.$el.setSelectionRange(0,0);var h=this.initCursor(),c=h+n.length;this.$refs.input.$el.setSelectionRange(c,c)}else{var g=this.$refs.input.$el.selectionStart,o=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=s;var f=s.length;if(i==="range-insert"){var l=this.parseValue((u||"").slice(0,g)),y=l!==null?l.toString():"",w=y.split("").join("(".concat(this.groupChar,")?")),m=new RegExp(w,"g");m.test(s);var $=n.split("").join("(".concat(this.groupChar,")?")),k=new RegExp($,"g");k.test(s.slice(m.lastIndex)),o=m.lastIndex+k.lastIndex,this.$refs.input.$el.setSelectionRange(o,o)}else if(f===a)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(o+1,o+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(o-1,o-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(o,o);else if(i==="delete-back-single"){var L=u.charAt(o-1),T=u.charAt(o),M=a-f,N=this._group.test(T);N&&M===1?o+=1:!N&&this.isNumeralChar(L)&&(o+=-1*M+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(o,o)}else if(u==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);var _=this.initCursor(),F=_+n.length+1;this.$refs.input.$el.setSelectionRange(F,F)}else o=o+(f-a),this.$refs.input.$el.setSelectionRange(o,o)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues:function(e,n){if(e&&n){var i=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?i!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(i)+this.suffixChar:e:i!==-1?e.split(this._decimal)[0]+n.slice(i):e}return e},getDecimalLength:function(e){if(e){var n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel:function(e,n){this.d_modelValue=n,this.$emit("update:modelValue",n)},onInputFocus:function(e){this.focused=!0,!this.disabled&&!this.readonly&&this.$refs.input.$el.value!==A.getSelection()&&this.highlightOnFocus&&e.target.select(),this.$emit("focus",e)},onInputBlur:function(e){this.focused=!1;var n=e.target,i=this.validateValue(this.parseValue(n.value));this.$emit("blur",{originalEvent:e,value:n.value}),n.value=this.formatValue(i),n.setAttribute("aria-valuenow",i),this.updateModel(e,i)},clearTimer:function(){this.timer&&clearInterval(this.timer)},maxBoundry:function(){return this.d_modelValue>=this.max},minBoundry:function(){return this.d_modelValue<=this.min}},computed:{filled:function(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onUpButtonMouseDown(i)},mouseup:function(i){return e.onUpButtonMouseUp(i)},mouseleave:function(i){return e.onUpButtonMouseLeave(i)},keydown:function(i){return e.onUpButtonKeyDown(i)},keyup:function(i){return e.onUpButtonKeyUp(i)}}},downButtonListeners:function(){var e=this;return{mousedown:function(i){return e.onDownButtonMouseDown(i)},mouseup:function(i){return e.onDownButtonMouseUp(i)},mouseleave:function(i){return e.onDownButtonMouseLeave(i)},keydown:function(i){return e.onDownButtonKeyDown(i)},keyup:function(i){return e.onDownButtonKeyUp(i)}}},formattedValue:function(){var e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter:function(){return this.numberFormat}},components:{INInputText:H,INButton:G,AngleUpIcon:W,AngleDownIcon:z}};function x(t){"@babel/helpers - typeof";return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(t)}function K(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K(Object(n),!0).forEach(function(i){le(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function le(t,e,n){return e=ce(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t){var e=pe(t,"string");return x(e)==="symbol"?e:String(e)}function pe(t,e){if(x(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(x(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function fe(t,e,n,i,r,u){var s=U("INInputText"),a=U("INButton");return b(),j("span",p({class:t.cx("root")},t.ptm("root"),{"data-pc-name":"inputnumber"}),[P(s,p({ref:"input",id:t.inputId,role:"spinbutton",class:[t.cx("input"),t.inputClass],style:t.inputStyle,value:u.formattedValue,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-valuenow":t.modelValue,disabled:t.disabled,readonly:t.readonly,placeholder:t.placeholder,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,onInput:u.onUserInput,onKeydown:u.onInputKeyDown,onKeypress:u.onInputKeyPress,onPaste:u.onPaste,onClick:u.onInputClick,onFocus:u.onInputFocus,onBlur:u.onInputBlur},d(d({},t.inputProps),t.ptm("input")),{unstyled:t.unstyled,"data-pc-section":"input"}),null,16,["id","class","style","value","aria-valuemin","aria-valuemax","aria-valuenow","disabled","readonly","placeholder","aria-labelledby","aria-label","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur","unstyled"]),t.showButtons&&t.buttonLayout==="stacked"?(b(),j("span",p({key:0,class:t.cx("buttonGroup")},t.ptm("buttonGroup")),[P(a,p({class:[t.cx("incrementButton"),t.incrementButtonClass]},C(u.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true"},d(d({},t.incrementButtonProps),t.ptm("incrementButton")),{unstyled:t.unstyled,"data-pc-section":"incrementbutton"}),{icon:B(function(){return[D(t.$slots,"incrementbuttonicon",{},function(){return[(b(),I(S(t.incrementButtonIcon?"span":"AngleUpIcon"),p({class:t.incrementButtonIcon},t.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"]),P(a,p({class:[t.cx("decrementButton"),t.decrementButtonClass]},C(u.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true"},d(d({},t.decrementButtonProps),t.ptm("decrementButton")),{unstyled:t.unstyled,"data-pc-section":"decrementbutton"}),{icon:B(function(){return[D(t.$slots,"decrementbuttonicon",{},function(){return[(b(),I(S(t.decrementButtonIcon?"span":"AngleDownIcon"),p({class:t.decrementButtonIcon},t.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])],16)):V("",!0),t.showButtons&&t.buttonLayout!=="stacked"?(b(),I(a,p({key:1,class:[t.cx("incrementButton"),t.incrementButtonClass]},C(u.upButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true"},d(d({},t.incrementButtonProps),t.ptm("incrementButton")),{unstyled:t.unstyled,"data-pc-section":"incrementbutton"}),{icon:B(function(){return[D(t.$slots,"incrementbuttonicon",{},function(){return[(b(),I(S(t.incrementButtonIcon?"span":"AngleUpIcon"),p({class:t.incrementButtonIcon},t.ptm("incrementButton").icon,{"data-pc-section":"incrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):V("",!0),t.showButtons&&t.buttonLayout!=="stacked"?(b(),I(a,p({key:2,class:[t.cx("decrementButton"),t.decrementButtonClass]},C(u.downButtonListeners),{disabled:t.disabled,tabindex:-1,"aria-hidden":"true"},d(d({},t.decrementButtonProps),t.ptm("decrementButton")),{unstyled:t.unstyled,"data-pc-section":"decrementbutton"}),{icon:B(function(){return[D(t.$slots,"decrementbuttonicon",{},function(){return[(b(),I(S(t.decrementButtonIcon?"span":"AngleDownIcon"),p({class:t.decrementButtonIcon},t.ptm("decrementButton").icon,{"data-pc-section":"decrementbuttonicon"}),null,16,["class"]))]})]}),_:3},16,["class","disabled","unstyled"])):V("",!0)],16)}oe.render=fe;export{oe as default};
