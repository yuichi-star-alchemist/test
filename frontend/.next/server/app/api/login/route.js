(()=>{var e={};e.id=740,e.ids=[740],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>m,serverHooks:()=>d,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>l});var a={};r.r(a),r.d(a,{POST:()=>p});var s=r(8797),i=r(42),n=r(8492),o=r(7176);let c=process.env.BACKEND_AUTH_URL;async function p(e){let t=await e.formData(),r=`${c}login`,a=["username","password"],s=new URLSearchParams;for(let e of t.entries()){let t="email"===e[0]?a[0]:e[0],r=e[1].toString();a.includes(t)&&s.append(t,r)}if(s.size<a.length)return;let i=await fetch(r,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:s.toString()}),n=(await i.json()).access_token,p=new Response(null,{status:200,headers:{"Set-Cookie":`fantre=${n}; ${o.F6.toString()}`}});return console.log(p),p}let m=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/login/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:u,workUnitAsyncStorage:l,serverHooks:d}=m;function g(){return(0,n.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:l})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>m,F6:()=>o,FX:()=>s,Rw:()=>n,SL:()=>p,cy:()=>a,gR:()=>c,pb:()=>i});let a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},n={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},o={maxAge:1e6,httpOnly:!0},c="Bearer ",p=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492],()=>r(6992));module.exports=a})();