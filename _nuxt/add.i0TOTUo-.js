import T from"./inputtext.esm.fYdK0exk.js";import{s as L}from"./dropdown.esm.5Vq7RTSK.js";import j from"./togglebutton.esm.EzMZiDOC.js";import A from"./button.esm.jT06-WGs.js";import"./progressspinner.esm.ToFABQef.js";import{_ as P}from"./addByMap.1Ks64O3i.js";import{u as q}from"./useNotifToast.KtHWH4XV.js";import{u as E}from"./global.s3RjI9vb.js";import{s as F,r as u,h as z,q as M,c as $,a as e,d,u as s,v as G,x as g,y as H,z as O,o as y,p as Q,f as J}from"./entry.gBsFnzxz.js";import{_ as K}from"./_plugin-vue_export-helper.x3n3nnut.js";import"./basecomponent.esm.vCjcc5sE.js";import"./index.esm.k9AeUCDd.js";import"./baseicon.esm.PLl1dN0r.js";import"./index.esm.YLkPFSz7.js";import"./index.esm.fglehKuv.js";import"./overlayeventbus.esm.XiOFkiaj.js";import"./portal.esm.NvhUfLY5.js";import"./virtualscroller.esm.XhfGNEYM.js";import"./badge.esm.oU5j7EWK.js";import"./geosearch.x7_z9nkZ.js";const a=p=>(Q("data-v-068fcb10"),p=p(),J(),p),W={class:"mx-5 my-10"},X={class:"flex flex-col border mb-5"},Y=a(()=>e("div",{class:"border-b border-dashed p-2"},[e("span",{class:"font-bold text-sm uppercase"}," Panneau ")],-1)),Z={class:"flex flex-wrap p-2 border-b"},ee={class:"flex flex-col mr-5"},se=a(()=>e("span",{class:"text-sm"}," Référence ",-1)),le={class:"flex flex-col mr-5"},oe=a(()=>e("span",{class:"text-sm"}," Surface ",-1)),te={class:"flex flex-col"},ae=a(()=>e("span",{class:"text-sm"}," Visuel Actuel ",-1)),ne={class:"flex flex-wrap p-2 items-end"},de={class:"flex flex-col mr-5"},ie=a(()=>e("span",{class:"text-sm"}," Catégorie ",-1)),ue={class:"flex flex-col mr-5"},re=a(()=>e("span",{class:"text-sm"}," Format ",-1)),pe={class:"flex flex-col mr-5"},me=a(()=>e("span",{class:"text-sm"}," Type de support ",-1)),ce={class:"flex flex-col"},_e=a(()=>e("span",{class:"text-sm"}," Illuminé ",-1)),fe={class:"flex flex-col border mb-5"},xe={class:"border-b border-dashed p-2 flex items-center"},ve=a(()=>e("span",{class:"font-bold text-sm uppercase"}," Emplacement ",-1)),be=a(()=>e("span",{class:"flex-grow"},null,-1)),Ve={class:"flex p-2 flex-wrap border-b"},he={class:"flex flex-col mr-5"},we=a(()=>e("span",{class:"text-sm"}," Longitute ",-1)),ge={class:"flex flex-col mr-5"},ye=a(()=>e("span",{class:"text-sm"}," Latitude ",-1)),Ue={class:"flex flex-wrap p-2 border-b"},$e={class:"flex flex-col mr-5"},Ce=a(()=>e("span",{class:"text-sm"}," Ville ",-1)),ke={class:"flex flex-col mr-5"},Ie=a(()=>e("span",{class:"text-sm"}," Région ",-1)),Ne={class:"flex flex-col"},Se=a(()=>e("span",{class:"text-sm"}," Quartier ",-1)),Be={class:"flex p-2 flex-wrap border-b"},De={class:"flex flex-col mr-5"},Re=a(()=>e("span",{class:"text-sm"}," Lieu dit ",-1)),Te={class:"flex flex-col mr-5"},Le=a(()=>e("span",{class:"text-sm"}," Vue vers ",-1)),je={class:"flex flex-col border mb-5"},Ae=a(()=>e("div",{class:"border-b border-dashed p-2"},[e("span",{class:"font-bold text-sm uppercase"}," société ")],-1)),Pe={class:"flex p-2 flex-wrap border-b"},qe={class:"flex flex-col mr-5"},Ee=a(()=>e("span",{class:"text-sm"}," Régisseur ",-1)),Fe={class:"flex flex-col border mb-5"},ze=a(()=>e("div",{class:"border-b border-dashed p-2"},[e("span",{class:"font-bold text-sm uppercase"}," Commune Urbaine ")],-1)),Me={class:"flex p-2 flex-wrap border-b"},Ge={class:"flex flex-col mr-5"},He=a(()=>e("span",{class:"text-sm"}," Nom de la commune ",-1)),Oe={key:0,class:"flex flex-wrap"},Qe={class:"flex flex-col mr-5"},Je=a(()=>e("span",{class:"text-sm"}," Numéro d'autorisation ",-1)),Ke={class:"flex flex-col mr-5"},We=a(()=>e("span",{class:"text-sm"}," Date de l'autorisation ",-1)),Xe={class:"flex justify-end w-full"},Ye={__name:"add",props:["heightHeader","prefix_api","heightContainer"],setup(p){const C=E(),{panel_impression_type:k}=F(C),_=p,{setErrorServer:x,setNotifToast:v}=q(),b=u([]),m=u([]),V=u([]),h=u([]),r=u(-1),l=u({pan_support:"aucun",pan_format:-1,lieu:{}}),w=u(!1),f=u(!1);u(!1);async function I(){try{const n=await $fetch(`${_.prefix_api}/a/ad/panel/add/data-utils`);n.status?(b.value=n.categories,m.value=n.formats,V.value=n.regs,h.value=[{cu_id:-1,cu_label:"Sans Commune"},...n.cu],r.value=b.value[0].cat_id,l.value.pan_format=m.value[0].cat_id,l.value.reg_id=V.value[0].reg_id,l.value.cu_id=h.value[0].cu_id):v({detail:n.message,summary:"Données utiles pour ajout de panneau",severity:"error"})}catch{x()}}async function N(){try{w.value=!0;const n=await $fetch(`${_.prefix_api}/a/ad/panel`,{method:"post",body:l.value});n.status?console.log(n):v({detail:n.message,summary:"Ajout de panneau",severity:"error"})}catch{x()}w.value=!1}function S(n){f.value=!1,l.value.lieu=n}z(r,()=>{B()});async function B(){try{const n=await $fetch(`${_.prefix_api}/a/cat/formats/${r.value}`);n.status?(m.value=n.formats,l.value.pan_format=m.value[0].cat_id):v({detail:n.message,summary:"Récupération des formats de panneau",severity:"error"})}catch{x()}}return M(()=>{I()}),(n,o)=>{const i=T,c=L,D=j,U=A,R=P;return y(),$("div",{class:"flex flex-col h-full overflow-auto",style:O({height:`${_.heightContainer}px`})},[e("div",W,[e("div",X,[Y,e("div",Z,[e("div",ee,[se,d(i,{modelValue:s(l).ref,"onUpdate:modelValue":o[0]||(o[0]=t=>s(l).ref=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),e("div",le,[oe,d(i,{modelValue:s(l).surface,"onUpdate:modelValue":o[1]||(o[1]=t=>s(l).surface=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),e("div",te,[ae,d(i,{modelValue:s(l).visuel_actuel,"onUpdate:modelValue":o[2]||(o[2]=t=>s(l).visuel_actuel=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),e("div",ne,[e("div",de,[ie,d(c,{modelValue:s(r),"onUpdate:modelValue":o[3]||(o[3]=t=>G(r)?r.value=t:null),options:s(b),class:"dropdown-md","option-label":"cat_label","option-value":"cat_id"},null,8,["modelValue","options"])]),e("div",ue,[re,d(c,{modelValue:s(l).pan_format,"onUpdate:modelValue":o[4]||(o[4]=t=>s(l).pan_format=t),options:s(m),class:"dropdown-md","option-label":"cat_label","option-value":"cat_id"},null,8,["modelValue","options"])]),e("div",pe,[me,d(c,{modelValue:s(l).pan_support,"onUpdate:modelValue":o[5]||(o[5]=t=>s(l).pan_support=t),options:s(k),class:"dropdown-md","option-label":"label","option-value":"code"},null,8,["modelValue","options"])]),e("div",ce,[_e,d(D,{modelValue:s(l).pan_lumineux,"onUpdate:modelValue":o[6]||(o[6]=t=>s(l).pan_lumineux=t),onLabel:"Oui",offLabel:"Non",onIcon:"pi pi-check",offIcon:"pi pi-times",class:"px-5 py-1"},null,8,["modelValue"])])])]),e("div",fe,[e("div",xe,[ve,be,d(U,{label:"Par carte",class:"p-button-sm p-1",icon:"pi pi-map-marker",text:"",onClick:o[7]||(o[7]=t=>f.value=!0)})]),e("div",Ve,[e("div",he,[we,d(i,{modelValue:s(l).lieu.lng,"onUpdate:modelValue":o[8]||(o[8]=t=>s(l).lieu.lng=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),e("div",ge,[ye,d(i,{modelValue:s(l).lieu.lat,"onUpdate:modelValue":o[9]||(o[9]=t=>s(l).lieu.lat=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),e("div",Ue,[e("div",$e,[Ce,d(i,{modelValue:s(l).lieu.ville,"onUpdate:modelValue":o[10]||(o[10]=t=>s(l).lieu.ville=t),class:"p-2 text-sm w-[200px]"},null,8,["modelValue"])]),e("div",ke,[Ie,d(i,{modelValue:s(l).lieu.region,"onUpdate:modelValue":o[11]||(o[11]=t=>s(l).lieu.region=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),e("div",Ne,[Se,d(i,{modelValue:s(l).lieu.quartier,"onUpdate:modelValue":o[12]||(o[12]=t=>s(l).lieu.quartier=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])])]),e("div",Be,[e("div",De,[Re,d(i,{modelValue:s(l).lieu.label,"onUpdate:modelValue":o[13]||(o[13]=t=>s(l).lieu.label=t),class:"p-2 text-sm w-[300px]"},null,8,["modelValue"])]),e("div",Te,[Le,d(i,{modelValue:s(l).lieu.view_vers,"onUpdate:modelValue":o[14]||(o[14]=t=>s(l).lieu.view_vers=t),class:"p-2 text-sm w-[350px]"},null,8,["modelValue"])])])]),e("div",je,[Ae,e("div",Pe,[e("div",qe,[Ee,d(c,{modelValue:s(l).reg_id,"onUpdate:modelValue":o[15]||(o[15]=t=>s(l).reg_id=t),options:s(V),class:"dropdown-md","option-label":"reg_label","option-value":"reg_id"},null,8,["modelValue","options"])])])]),e("div",Fe,[ze,e("div",Me,[e("div",Ge,[He,d(c,{modelValue:s(l).cu_id,"onUpdate:modelValue":o[16]||(o[16]=t=>s(l).cu_id=t),options:s(h),class:"dropdown-md","option-label":"cu_label","option-value":"cu_id"},null,8,["modelValue","options"])]),parseInt(s(l).cu_id)!=-1?(y(),$("div",Oe,[e("div",Qe,[Je,d(i,{modelValue:s(l).num_auth,"onUpdate:modelValue":o[17]||(o[17]=t=>s(l).num_auth=t),class:"p-2 text-sm w-[350px]",placeholder:"Numéro d'autorisation"},null,8,["modelValue"])]),e("div",Ke,[We,d(i,{modelValue:s(l).date_auth,"onUpdate:modelValue":o[18]||(o[18]=t=>s(l).date_auth=t),type:"date",class:"p-2 text-sm w-[350px]",placeholder:"Date de l'autorisation"},null,8,["modelValue"])])])):g("",!0)])]),g("",!0),e("div",Xe,[d(U,{label:"Ajouter le panneau",onClick:N,loading:s(w)},null,8,["loading"])])]),s(f)?(y(),H(R,{key:0,onClose:o[20]||(o[20]=t=>f.value=!1),onValidate:S},null,8,["onValidate"])):g("",!0)],4)}}},Vs=K(Ye,[["__scopeId","data-v-068fcb10"]]);export{Vs as default};
