(()=>{var e={};e.id=603,e.ids=[603],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9466:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>d,routeModule:()=>p,serverHooks:()=>l,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>g});var a={};t.r(a),t.d(a,{GET:()=>m});var s=t(8797),i=t(42),o=t(8492),n=t(7176);let c=process.env.BACKEND_API_URL;async function m(e){let r=e.cookies.get("fantre")||{value:e.headers.get("cookie")};if(console.log("cookie-api-getImageUrl",r),!r)return Response.error();let t=`${n.gR}${r.value}`,a=e.nextUrl.searchParams.get("endpoint");if(console.log("endpoint-api-getImageUrl",a),!a)return Response.error();let s=`${c}${a}`;return await fetch(s,{headers:{Authorization:t}})}let p=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/getImageUrl/route",pathname:"/api/getImageUrl",filename:"route",bundlePath:"app/api/getImageUrl/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/getImageUrl/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:u,workUnitAsyncStorage:g,serverHooks:l}=p;function d(){return(0,o.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:g})}},8031:()=>{},5303:()=>{},8797:(e,r,t)=>{"use strict";e.exports=t(517)},7176:(e,r,t)=>{"use strict";t.d(r,{BJ:()=>p,F6:()=>n,FX:()=>s,Rw:()=>o,SL:()=>m,cy:()=>a,gR:()=>c,pb:()=>i});let a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},o={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},n={maxAge:2592e3,httpOnly:!0,path:"/"},c="Bearer ",m=["image/png","image/jpg","image/jpeg"],p="/no-image.svg"}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[492],()=>t(9466));module.exports=a})();