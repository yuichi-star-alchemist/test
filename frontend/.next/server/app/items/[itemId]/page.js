"use strict";(()=>{var e={};e.id=241,e.ids=[241],e.modules={399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{e.exports=require("path")},7360:e=>{e.exports=require("url")},7299:(e,a,t)=>{t.r(a),t.d(a,{GlobalError:()=>l.a,__next_app__:()=>p,pages:()=>m,routeModule:()=>u,tree:()=>d});var r=t(9442),n=t(42),i=t(8190),l=t.n(i),s=t(3289),o={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>s[e]);t.d(a,o);let d=["",{children:["items",{children:["[itemId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,3753)),"/home/yuichi/fantre/frontend/src/app/items/[itemId]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1112)),"/home/yuichi/fantre/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],m=["/home/yuichi/fantre/frontend/src/app/items/[itemId]/page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/items/[itemId]/page",pathname:"/items/[itemId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3753:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var r=t(7705),n=t(1589),i=t(5466),l=t(7820);let s=()=>(0,r.jsx)(l.Z,{href:"/",addClass:"w-[136px] mr-0 max-h-[32px] leading-none",children:"TOPへ"});var o=t(4430),d=t(2716);let m=({addClass:e="",labelValue:a="",defaultValue:t="",inputName:n,type:i="text",pattern:l,required:s=!1,formId:o,inputId:m,placeholder:p="",maxLength:u=30})=>{let x=(0,d.Z)("block bg-my-light-green w-60 h-[40px] rounded-3xl text-center py-2 hover:opacity-80",e);return(0,r.jsxs)("div",{className:"w-60 mx-auto",children:[(0,r.jsx)("label",{htmlFor:m,className:"h-5 mt-1 overflow-auto w-full",children:a}),(0,r.jsx)("input",{className:x,placeholder:p,name:n,type:i,defaultValue:t,pattern:l||void 0,maxLength:u,required:s,form:o,id:m})]})},p=({children:e,addClass:a="",labelText:t})=>{let n=(0,d.Z)("w-60 h-16 mx-auto select-none",a);return(0,r.jsxs)("div",{className:n,children:[(0,r.jsx)("p",{className:"h-6",children:t}),(0,r.jsx)("p",{className:"py-2 h-[40px] bg-my-green rounded-3xl",children:e})]})};var u=t(7176);let x=({itemDetailValues:e,formId:a})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m,{labelValue:"作品名",inputName:u.pb.series,formId:a,defaultValue:e.series_name}),(0,r.jsx)(m,{labelValue:"キャラ名",inputName:u.pb.character,formId:a,defaultValue:e.character_name}),(0,r.jsx)(m,{labelValue:"商品名",inputName:u.pb.name,formId:a,defaultValue:e.item_name}),(0,r.jsx)(m,{labelValue:"タグ",inputName:u.pb.tags,formId:a,defaultValue:e.tags.join(",")}),(0,r.jsx)(m,{labelValue:"グッズカテゴリー",inputName:u.pb.category,formId:a,defaultValue:e.category_name}),(0,r.jsx)(p,{labelText:"JANコード",children:e.jan_code}),(0,r.jsx)(p,{labelText:"発売日",children:e.release_date}),(0,r.jsx)(m,{labelValue:"購入場所",inputName:u.pb.retailers,formId:a,defaultValue:e.retailers.join(",")})]}),c=({initialItemDetail:e,itemId:a,imageSrc:t=""})=>{let l="item-form";return(0,r.jsx)(i.Z,{headerContent:(0,r.jsx)(s,{}),viewContent:(0,r.jsx)(n.Z,{imageSrc:t}),naviContent:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(o.default,{buttonText:"編集項目を確定",formId:l,uploadImageText:"My画像を選択",addClass:"h-full min-h-[calc(64px*8+76px+56px)] flex flex-col justify-around Y-tab:grid Y-tab:grid-cols-2 Y-tab:gap-4",imageId:"item_image",itemId:a,endpoint:"itemDetail",children:(0,r.jsx)(x,{itemDetailValues:e,formId:l})})}),footerContent:!0})};var h=t(8551);let f=async({params:e})=>{let a=(await e).itemId,t=new URLSearchParams([["itemId",a]]),n=await (0,h.fs)("itemDetail",t),i=`images/${a}`,l=(await (0,h.Jn)(i)||"").split("localhost").join("s3-minio")||"";return(0,r.jsx)(c,{initialItemDetail:n||{item_name:"",series_name:"",character_name:"",category_name:"",tags:[""],jan_code:"",release_date:"",retailers:[""],own_status:""},itemId:a,imageSrc:l})}}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[492,146,81,51,810,149,705],()=>t(7299));module.exports=r})();