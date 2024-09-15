import{T as p,o as c,c as w,w as n,a as o,u as s,Z as g,b as t,d,j as _,n as V,e as y}from"./app-CipBFNca.js";import{_ as v}from"./GuestLayout-D845snXW.js";import{_ as l,a as m,b as i}from"./TextInput-DAGtFnfO.js";import{P as b}from"./PrimaryButton-DOzgexu4.js";import"./ApplicationLogo-Bn9ncLAh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const x={class:"mt-4"},k={class:"mt-4"},q={class:"mt-4"},B={class:"flex items-center justify-end mt-4"},T={__name:"Register",setup(N){const e=p({name:"",email:"",password:"",password_confirmation:""}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(f,a)=>(c(),w(v,null,{default:n(()=>[o(s(g),{title:"Register"}),t("form",{onSubmit:y(u,["prevent"])},[t("div",null,[o(l,{for:"name",value:"Name"}),o(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":a[0]||(a[0]=r=>s(e).name=r),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",x,[o(l,{for:"email",value:"Email"}),o(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":a[1]||(a[1]=r=>s(e).email=r),required:"",autocomplete:"username"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",k,[o(l,{for:"password",value:"Password"}),o(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":a[2]||(a[2]=r=>s(e).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",q,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":a[3]||(a[3]=r=>s(e).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",B,[o(s(_),{href:f.route("login"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:n(()=>a[4]||(a[4]=[d(" Already registered? ")])),_:1},8,["href"]),o(b,{class:V(["ms-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>a[5]||(a[5]=[d(" Register ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
