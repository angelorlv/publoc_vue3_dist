import{s}from"./basecomponent.esm.vCjcc5sE.js";import{ab as a,o as p,c as l,V as i,aj as o}from"./entry.gBsFnzxz.js";var d=`
@layer primevue {
    .p-splitter-panel {
        flex-grow: 1;
        overflow: hidden;
    }

    .p-splitter-panel-nested {
        display: flex;
    }

    .p-splitter-panel .p-splitter {
        flex-grow: 1;
        border: 0 none;
    }
}
`,c={root:function(t){var n=t.instance;return["p-splitter-panel",{"p-splitter-panel-nested":n.isNested}]}},u=a.extend({name:"splitterpanel",css:d,classes:c}),f={name:"BaseSplitterPanel",extends:s,props:{size:{type:Number,default:null},minSize:{type:Number,default:null}},style:u,provide:function(){return{$parentInstance:this}}},m={name:"SplitterPanel",extends:f,computed:{isNested:function(){return this.$slots.default().some(function(t){return t.type.name==="Splitter"})},getPTOptions:function(){return{context:{nested:this.isNested}}}}};function v(e,t,n,y,S,r){return p(),l("div",o({ref:"container",class:e.cx("root")},e.ptm("root",r.getPTOptions),{"data-pc-name":"splitterpanel"}),[i(e.$slots,"default")],16)}m.render=v;export{m as default};
