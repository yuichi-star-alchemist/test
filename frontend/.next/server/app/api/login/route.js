(()=>{var e={};e.id=740,e.ids=[740],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},6992:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>p,serverHooks:()=>f,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>m});var a={};r.r(a),r.d(a,{POST:()=>l});var n=r(8797),s=r(42),o=r(8492),i=r(7176),c=r(8051);let u=process.env.BACKEND_AUTH_URL;async function l(e){let t=await e.formData(),r=`${u}login`,a=["username","password"],n=new URLSearchParams;for(let e of t.entries()){let t="email"===e[0]?a[0]:e[0],r=e[1].toString();a.includes(t)&&n.append(t,r)}if(n.size<a.length)return;let s=await fetch(r,{headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",body:n.toString()});if(!s.ok)return s;let o=(await s.json()).access_token;return(await (0,c.Qk)()).set("fantre",o,i.F6),new Response(null,{status:200})}let p=new n.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"/home/yuichi/fantre/frontend/src/app/api/login/route.ts",nextConfigOutput:"",userland:a}),{workAsyncStorage:d,workUnitAsyncStorage:m,serverHooks:f}=p;function g(){return(0,o.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:m})}},8031:()=>{},5303:()=>{},9625:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createDedupedByCallsiteServerErrorLoggerDev",{enumerable:!0,get:function(){return c}});let a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=n(void 0);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=s?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r(6833));function n(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(n=function(e){return e?r:t})(e)}let s={current:null},o="function"==typeof a.cache?a.cache:e=>e,i=console.warn;function c(e){return function(...t){i(e(...t))}}o(e=>{try{i(s.current)}finally{s.current=null}})},8797:(e,t,r)=>{"use strict";e.exports=r(517)},4437:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ReflectAdapter",{enumerable:!0,get:function(){return r}});class r{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>p,F6:()=>c,FX:()=>s,II:()=>a,Rw:()=>i,SL:()=>l,cy:()=>n,gR:()=>u,pb:()=>o});let a=`${process.env.HOSTNAME}/api/`,n=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},o={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},i={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},c={maxAge:2592e3,httpOnly:!0,path:"/"},u="Bearer ",l=["image/png","image/jpg","image/jpeg"],p="/no-image.svg"}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[492,51],()=>r(6992));module.exports=a})();