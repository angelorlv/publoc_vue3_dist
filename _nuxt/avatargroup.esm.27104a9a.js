import{Z as r,o as e,c as t,E as n,a6 as s}from"./entry.d008ba6d.js";import{s as o}from"./basecomponent.esm.8e553a4b.js";var p=`
@layer primevue {
    .p-avatar-group .p-avatar + .p-avatar {
        margin-left: -1rem;
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }
}
`,c={root:"p-avatar-group p-component"},v=r.extend({name:"avatargroup",css:p,classes:c}),l={name:"BaseAvatarGroup",extends:o,style:v,provide:function(){return{$parentInstance:this}}},i={name:"AvatarGroup",extends:l};function m(a,u,d,f,g,$){return e(),t("div",s({class:a.cx("root")},a.ptm("root"),{"data-pc-name":"avatargroup"}),[n(a.$slots,"default")],16)}i.render=m;export{i as default};
