(()=>{var e={};e.id=25,e.ids=[25],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},381:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>_,routeModule:()=>m,serverHooks:()=>g,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>l});var s={};r.r(s),r.d(s,{DELETE:()=>p,GET:()=>u});var a=r(8797),i=r(42),o=r(8492),n=r(5045);let c=process.env.BACKEND_API_URL;async function u(e,t){let r=e.headers.get("cookie");if(!r)return Response.error();let s=(0,n.Z)(r),a=(await t.params).listId,i=`${c}lists/${a}`;return await fetch(i,{headers:{Authorization:s}})}async function p(e,t){let r=e.headers.get("cookie");if(!r)return Response.error();let s=(0,n.Z)(r),a=(await t.params).listId,i=`${c}lists/${a}`;return await fetch(i,{method:"DELETE",headers:{Authorization:s}})}let m=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/lists/[listId]/route",pathname:"/api/lists/[listId]",filename:"route",bundlePath:"app/api/lists/[listId]/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/lists/[listId]/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:l,serverHooks:g}=m;function _(){return(0,o.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:l})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>m,F6:()=>c,FX:()=>i,II:()=>s,Rw:()=>n,SL:()=>p,cy:()=>a,gR:()=>u,pb:()=>o});let s=`${process.env.HOSTNAME}/api/`,a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],i={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},o={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},n={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},c={maxAge:2592e3,httpOnly:!0,path:"/"},u="Bearer ",p=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"},5045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(7176);let a=e=>{let t=e.includes("=")?e.split("=")[1]:e;return`${s.gR}${t}`}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492],()=>r(381));module.exports=s})();