(()=>{var e={};e.id=565,e.ids=[565],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},113:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>p,serverHooks:()=>d,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>m});var s={};t.r(s),t.d(s,{GET:()=>o});var a=t(8797),i=t(42),n=t(8492),c=t(5045);async function o(e,r){let t=e.headers.get("cookie");if(!t)return Response.error();let s=(0,c.Z)(t),a=e.nextUrl.searchParams.get("currentPage")||1,i=(await r.params).seriesId,n=process.env.BACKEND_API_URL,o=`${n}series/${i}/characters/page/${a}`;return await fetch(o,{headers:{Authorization:s}})}let p=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/series/[seriesId]/characters/route",pathname:"/api/series/[seriesId]/characters",filename:"route",bundlePath:"app/api/series/[seriesId]/characters/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/series/[seriesId]/characters/route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:u,workUnitAsyncStorage:m,serverHooks:d}=p;function g(){return(0,n.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:m})}},8031:()=>{},5303:()=>{},8797:(e,r,t)=>{"use strict";e.exports=t(517)},7176:(e,r,t)=>{"use strict";t.d(r,{BJ:()=>m,F6:()=>o,FX:()=>i,II:()=>s,Rw:()=>c,SL:()=>u,cy:()=>a,gR:()=>p,pb:()=>n});let s=`${process.env.HOSTNAME}/api/`,a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],i={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},n={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},c={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},o={maxAge:2592e3,httpOnly:!0,path:"/"},p="Bearer ",u=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"},5045:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var s=t(7176);let a=e=>{let r=e.includes("=")?e.split("=")[1]:e;return`${s.gR}${r}`}}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[492],()=>t(113));module.exports=s})();