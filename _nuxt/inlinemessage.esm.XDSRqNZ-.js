import{s as l}from"./index.esm.Z-9qAGnU.js";import{s as p,a as c}from"./index.esm.ixeDcPvO.js";import{s as m}from"./index.esm.QbOAC03e.js";import{s as u}from"./basecomponent.esm.vCjcc5sE.js";import{ab as d,o as r,c as f,V as a,y as v,aj as i,ak as g,a as y,e as $}from"./entry.gBsFnzxz.js";import"./baseicon.esm.PLl1dN0r.js";var h=`
@layer primevue {
    .p-inline-message {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: top;
    }
    
    .p-inline-message-icon {
        flex-shrink: 0;
    }

    .p-inline-message-icon-only .p-inline-message-text {
        visibility: hidden;
        width: 0;
    }

    .p-fluid .p-inline-message {
        display: flex;
    }
}
`,x={root:function(n){var s=n.props,t=n.instance;return["p-inline-message p-component p-inline-message-"+s.severity,{"p-inline-message-icon-only":!t.$slots.default}]},icon:function(n){var s=n.props;return["p-inline-message-icon",s.icon]},text:"p-inline-message-text"},k=d.extend({name:"inlinemessage",css:h,classes:x}),B={name:"BaseInlineMessage",extends:u,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:k,provide:function(){return{$parentInstance:this}}},S={name:"InlineMessage",extends:B,timeout:null,data:function(){return{visible:!0}},mounted:function(){var n=this;this.sticky||setTimeout(function(){n.visible=!1},this.life)},computed:{iconComponent:function(){return{info:p,success:l,warn:c,error:m}[this.severity]}}};function b(e,n,s,t,C,o){return r(),f("div",i({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptm("root")),[a(e.$slots,"icon",{},function(){return[(r(),v(g(e.icon?"span":o.iconComponent),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),y("span",i({class:e.cx("text")},e.ptm("text")),[a(e.$slots,"default",{},function(){return[$(" ")]})],16)],16)}S.render=b;export{S as default};
