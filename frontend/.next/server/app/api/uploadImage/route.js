(()=>{var e={};e.id=593,e.ids=[593],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},1310:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>l,routeModule:()=>c,serverHooks:()=>d,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>g});var a={};r.r(a),r.d(a,{POST:()=>p});var s=r(8797),i=r(42),o=r(8492),n=r(7176);let m=process.env.BACKEND_API_URL;async function p(e){let t=e.headers.get("cookie");if(console.log(t),!t)return Response.error();let r=`${n.gR}${t}`,a=e.nextUrl.searchParams.get("itemId"),s=e.nextUrl.searchParams.get("endpoint")||"",i={top:{formKey:"bg_image",endpoint:"user/bg-images"},itemDetail:{formKey:"item_image",endpoint:`image/${a}`},itemCreate:{formKey:"item_image",endpoint:`image/${a}`}},o=i[s].formKey,p=i[s].endpoint,c=await e.formData(),u=c.get(o);if(console.log(u),!u.size||!n.SL.includes(u.type)||u.size>=1048576)return Response.error();let g=`${m}${p}`;return console.log(g),await fetch(g,{method:"POST",headers:{Authorization:r},body:c})}let c=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/uploadImage/route",pathname:"/api/uploadImage",filename:"route",bundlePath:"app/api/uploadImage/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/uploadImage/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:u,workUnitAsyncStorage:g,serverHooks:d}=c;function l(){return(0,o.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:g})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>c,F6:()=>n,FX:()=>s,Rw:()=>o,SL:()=>p,cy:()=>a,gR:()=>m,pb:()=>i});let a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},o={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},n={maxAge:1e6,httpOnly:!0},m="Bearer ",p=["image/png","image/jpg","image/jpeg"],c="/no-image.svg"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492],()=>r(1310));module.exports=a})();