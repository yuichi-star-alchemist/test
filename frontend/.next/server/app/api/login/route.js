(()=>{var e={};e.id=740,e.ids=[740],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6992:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>u,serverHooks:()=>l,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>c});var n={};t.r(n),t.d(n,{POST:()=>p});var o=t(8797),s=t(42),i=t(8492);let a=process.env.BACKEND_AUTH_URL;async function p(e){let r=await e.formData(),t=`${a}login`,n=["username","password"],o=new URLSearchParams;for(let e of r.entries()){let r="email"===e[0]?n[0]:e[0],t=e[1].toString();n.includes(r)&&o.append(r,t)}if(!(o.size<n.length))return await fetch(t,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:o.toString()})}let u=new o.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/login/route.ts",nextConfigOutput:"",userland:n}),{workAsyncStorage:d,workUnitAsyncStorage:c,serverHooks:l}=u;function g(){return(0,i.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:c})}},8031:()=>{},5303:()=>{},8797:(e,r,t)=>{"use strict";e.exports=t(517)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[492],()=>t(6992));module.exports=n})();