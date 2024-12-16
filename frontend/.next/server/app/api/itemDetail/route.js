(()=>{var e={};e.id=566,e.ids=[566],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},8983:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>h,routeModule:()=>l,serverHooks:()=>_,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>g});var a={};r.r(a),r.d(a,{GET:()=>u,POST:()=>m});var s=r(8797),i=r(42),n=r(8492),o=r(954),c=r(5045);let p=process.env.BACKEND_API_URL;async function u(e){let t=e.headers.get("cookie");if(!t)return Response.error();let r=(0,c.Z)(t),a=e.nextUrl.searchParams.get("itemId");if(!a)return Response.error();let s=`${p}items/${a}`;return await fetch(s,{headers:{Authorization:r}})}async function m(e){let t=e.headers.get("cookie");if(!t)return Response.error();let r=(0,c.Z)(t),a=await e.formData(),s=e.nextUrl.searchParams.get("item_id");if(!s)return Response.error();let i=`${p}items/${s}`,n=(0,o.Z)(a);return await fetch(i,{method:"PATCH",headers:{Authorization:r,"Content-Type":"application/json"},body:n})}let l=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/itemDetail/route",pathname:"/api/itemDetail",filename:"route",bundlePath:"app/api/itemDetail/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/itemDetail/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:d,workUnitAsyncStorage:g,serverHooks:_}=l;function h(){return(0,n.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:g})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>m,F6:()=>c,FX:()=>i,II:()=>a,Rw:()=>o,SL:()=>u,cy:()=>s,gR:()=>p,pb:()=>n});let a=`${process.env.HOSTNAME}/api/`,s=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],i={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},n={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},o={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},c={maxAge:2592e3,httpOnly:!0,path:"/"},p="Bearer ",u=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"},954:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(7176);let s=e=>{let t=[a.FX.tags,a.FX.retailers,a.pb.tags,a.pb.retailers],r=Object.entries(Object.fromEntries(e.entries())),s={};return r.forEach(e=>{let r=e[0],a=e[1].toString();""!==a&&(t.includes(r)?s[r]=a.split(","):s[r]=a)}),JSON.stringify(s)}},5045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(7176);let s=e=>{let t=e.includes("=")?e.split("=")[1]:e;return`${a.gR}${t}`}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492],()=>r(8983));module.exports=a})();