(()=>{var e={};e.id=158,e.ids=[158],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3610:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>_,routeModule:()=>d,serverHooks:()=>g,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{DELETE:()=>p,POST:()=>m});var a=r(8797),i=r(42),o=r(8492),n=r(5045);let c=process.env.BACKEND_API_URL;async function m(e){let t=e.headers.get("cookie");if(!t)return Response.error();let r=(0,n.Z)(t),s=await e.formData(),a=s.get("list-id")?.toString(),i=s.get("listItems")?.toString();if(!a||!i)return Response.error();let o=`${c}list-items`,m=`list_id=${encodeURIComponent(a)}&item_id=${encodeURIComponent(i)}`;return await fetch(o,{method:"POST",headers:{Authorization:r,"Content-Type":"application/x-www-form-urlencoded"},body:m})}async function p(e){let t=e.headers.get("cookie");if(!t)return Response.error();let r=(0,n.Z)(t),s=await e.json(),a=s.listId,i=s.listItems;if(!a||!i)return Response.error();let o=`${c}list-items`,m=`list_id=${encodeURIComponent(a)}&item_id=${encodeURIComponent(i)}`;return await fetch(o,{method:"DELETE",headers:{Authorization:r,"Content-Type":"application/x-www-form-urlencoded"},body:m})}let d=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/list-items/route",pathname:"/api/list-items",filename:"route",bundlePath:"app/api/list-items/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/list-items/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:u,workUnitAsyncStorage:l,serverHooks:g}=d;function _(){return(0,o.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:l})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>d,F6:()=>n,FX:()=>a,Rw:()=>o,SL:()=>m,cy:()=>s,f1:()=>p,gR:()=>c,pb:()=>i});let s=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],a={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},o={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},n={maxAge:1e6,httpOnly:!0},c="Bearer ",m=["image/png","image/jpg","image/jpeg"],p="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",d="/no-image.svg"},5045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(7176);let a=e=>{let t=e.includes("=")?e.split("=")[1]:e;return`${s.gR}${t}`}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492],()=>r(3610));module.exports=s})();