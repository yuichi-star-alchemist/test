(()=>{var e={};e.id=17,e.ids=[17],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5005:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>u,serverHooks:()=>l,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>d});var a={};r.r(a),r.d(a,{POST:()=>p});var s=r(8797),i=r(42),o=r(8492),n=r(5045);let c=process.env.BACKEND_API_URL;async function p(e){let t=e.headers.get("cookie");if(!t)return Response.error();let r=(0,n.Z)(t),a=await e.formData(),s={};for(let e of a.entries()){let t=e[0],r=e[1].toString();t.startsWith("is")?s[t]="true"===r:s[t]=r}let i=JSON.stringify(s),o=`${c}series-characters`;return await fetch(o,{headers:{"Content-Type":"application/json",Authorization:r},method:"POST",body:i})}let u=new s.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/series-characters/route",pathname:"/api/series-characters",filename:"route",bundlePath:"app/api/series-characters/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/series-characters/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:m,workUnitAsyncStorage:d,serverHooks:l}=u;function g(){return(0,o.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:d})}},8031:()=>{},5303:()=>{},8797:(e,t,r)=>{"use strict";e.exports=r(517)},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>m,F6:()=>c,FX:()=>i,II:()=>a,Rw:()=>n,SL:()=>u,cy:()=>s,gR:()=>p,pb:()=>o});let a="http://localhost:3000/api",s=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],i={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},o={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},n={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},c={maxAge:2592e3,httpOnly:!0,path:"/"},p="Bearer ",u=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"},5045:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(7176);let s=e=>{let t=e.includes("=")?e.split("=")[1]:e;return`${a.gR}${t}`}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492],()=>r(5005));module.exports=a})();