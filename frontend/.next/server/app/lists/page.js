(()=>{var e={};e.id=558,e.ids=[558],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},8812:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d});var s=r(9442),a=r(42),n=r(8190),l=r.n(n),o=r(3289),i={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["lists",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,8888)),"/home/yuichi/fantre/frontend/src/app/lists/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1112)),"/home/yuichi/fantre/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/home/yuichi/fantre/frontend/src/app/lists/page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},f=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/lists/page",pathname:"/lists",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4917:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"7f22ffb5c739723fb381038be17a52ecb636aa1ce9":()=>i});var s=r(3722);r(453);var a=r(4092),n=r(2557),l=r(6309);let o=async e=>{let t=(0,a.Qk)(),r=(await t).get("fantre");r&&await fetch("http://57.180.44.232/api/lists",{method:"POST",headers:{cookie:`${r.name}=${r.value}`},body:e}).then(e=>{200===e.status&&(0,n.redirect)("/lists")})},i=o;(0,l.h)([o]),(0,s.j)(o,"7f22ffb5c739723fb381038be17a52ecb636aa1ce9",null)},420:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6472,23)),Promise.resolve().then(r.t.bind(r,2461,23)),Promise.resolve().then(r.t.bind(r,8190,23)),Promise.resolve().then(r.t.bind(r,5282,23)),Promise.resolve().then(r.t.bind(r,6613,23)),Promise.resolve().then(r.t.bind(r,5486,23)),Promise.resolve().then(r.t.bind(r,8825,23))},7730:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2144,23)),Promise.resolve().then(r.t.bind(r,2302,23)),Promise.resolve().then(r.t.bind(r,3582,23)),Promise.resolve().then(r.t.bind(r,9587,23)),Promise.resolve().then(r.t.bind(r,5329,23)),Promise.resolve().then(r.t.bind(r,599,23)),Promise.resolve().then(r.t.bind(r,2118,23))},6584:()=>{},1643:()=>{},9424:(e,t,r)=>{Promise.resolve().then(r.bind(r,1125))},2863:(e,t,r)=>{Promise.resolve().then(r.bind(r,7463))},4971:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(9110),a=r.n(s)},5723:(e,t,r)=>{"use strict";r.d(t,{default:()=>a.a});var s=r(3510),a=r.n(s)},4619:(e,t,r)=>{"use strict";var s=r(9877);r.o(s,"redirect")&&r.d(t,{redirect:function(){return s.redirect}}),r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},9110:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return i},getImageProps:function(){return o}});let s=r(4564),a=r(7877),n=r(2704),l=s._(r(1911));function o(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let i=n.Image},9599:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(6493),a=r(2950);let n=({addClass:e="",labelValue:t="",defaultValue:r="",inputName:n,type:l="text",pattern:o,required:i=!1,formId:d,inputId:c,placeholder:u="",maxLength:f=30})=>{let m=(0,a.Z)("block bg-my-light-green w-60 h-[40px] rounded-3xl text-center py-2 hover:opacity-80",e);return(0,s.jsxs)("div",{className:"w-60 mx-auto",children:[(0,s.jsx)("label",{htmlFor:c,className:"h-5 mt-1 overflow-auto w-full",children:t}),(0,s.jsx)("input",{className:m,placeholder:u,name:n,type:l,defaultValue:r,pattern:o||void 0,maxLength:f,required:i,form:d,id:c})]})}},868:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(6493),a=r(2950),n=r(5723);let l=({children:e,href:t,addClass:r=""})=>{let l=(0,a.Z)("block bg-my-yellow w-60 h-[40px] mx-auto rounded-3xl overflow-hidden hover:opacity-80",r);return(0,s.jsx)(n.default,{href:t,className:l,children:(0,s.jsx)("p",{className:"py-2",children:e})})}},4390:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var s=r(6493),a=r(4971);let n=()=>(0,s.jsx)(a.default,{fill:!0,src:"/MonitorDecorationsImage.svg",alt:"モニターの台座・コード・びりびりマークの見た目を表現する画像です"}),l=()=>(0,s.jsx)(a.default,{fill:!0,src:"/PowerButtonImage.svg",alt:"電源ボタンの見た目を表現する画像です",className:"hidden X-tab:block row-start-3 col-start-6 col-end-7"}),o=({headerContent:e,viewContent:t,naviContent:r,footerContent:a})=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("section",{className:"grid relative w-full h-full rounded-[50px] bg-my-light-blue grid-rows-[40px_5fr_20px_4fr_40px] grid-cols-[20px_30px_1fr_30px_20px] X-mob:grid-rows-[40px_1fr_40px] X-mob:grid-cols-[50px_5fr_20px_4fr_50px] X-tab:h-[calc(100%-50px)] X-tab:grid-rows-[40px_1fr_40px] X-tab:grid-cols-[20px_5fr_54fr_20px_26fr_6fr_20px]",children:[(0,s.jsx)("section",{className:"flex items-center justify-end col-start-3 col-end-4 X-tab:col-end-6 X-mob:col-start-4 X-mob:col-end-5",children:e}),(0,s.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto relative row-start-2 row-end-3 col-start-2 col-end-5 X-tab:col-end-4 X-mob:col-end-3",children:t}),(0,s.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto row-start-4 row-end-5 col-start-2 col-end-5 X-mob:row-start-2 X-mob:row-end-3 X-mob:col-start-4 X-mob:col-end-5 X-tab:row-start-2 X-tab:row-end-3 X-tab:col-start-5 X-tab:col-end-7 ",children:r}),(0,s.jsx)("section",{className:"flex justify-end row-start-5 col-start-3 col-end-4 X-tab:row-start-3 X-tab:col-end-6 X-mob:row-start-1 X-mob:row-end-2 X-mob:col-start-2 X-mob:col-end-3",children:a}),(0,s.jsx)(l,{})]}),(0,s.jsx)("div",{className:"relative w-full h-[50px] hidden X-tab:block",children:(0,s.jsx)(n,{})})]})},5549:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(6493),a=r(2950);let n=({children:e,addClass:t=""})=>{let r=(0,a.Z)("block bg-my-orange w-60 h-[40px] rounded-3xl mx-auto mt-4 py-2 hover:opacity-80",t);return(0,s.jsx)("button",{className:r,type:"submit",children:(0,s.jsx)("p",{children:e})})}},183:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(6493),a=r(2950),n=r(5723);let l=({children:e,href:t,addClass:r=""})=>{let l=(0,a.Z)("max-w-[640px] min-h-[40px] bg-my-light-green pl-1 py-1 flex items-center justify-center rounded-3xl hover:opacity-80",r);return(0,s.jsx)(n.default,{href:t,className:l,children:(0,s.jsx)("p",{children:e})})}},4312:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(6493),a=r(2950);let n=({children:e,addClass:t="",labelText:r})=>{let n=(0,a.Z)("w-60 h-16 mx-auto select-none",t);return(0,s.jsxs)("div",{className:n,children:[(0,s.jsx)("p",{className:"h-6",children:r}),(0,s.jsx)("p",{className:"py-2 h-[40px] bg-my-green rounded-3xl",children:e})]})}},7235:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(6493),a=r(868);let n=()=>(0,s.jsx)(a.Z,{href:"/",addClass:"w-[136px] mr-0 max-h-[32px] leading-none",children:"TOPへ"})},5345:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(6493);let a=({children:e})=>(0,s.jsx)("ul",{className:"h-[calc(100%-24px)] p-2 flex flex-col justify-around overflow-auto",children:e})},1406:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var s=r(6493);let a=({children:e})=>(0,s.jsx)("li",{className:"flex items-center justify-center mt-2 gap-2",children:e})},7463:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var s=r(6493),a=r(9599),n=r(868),l=r(4390),o=r(5549),i=r(183),d=r(4312),c=r(7235),u=r(5345),f=r(1406),m=r(4619);let h=async(e,t,r)=>{confirm(`${t}を削除します。
よろしいですか？`)&&((await fetch(`/api/lists/${e}`,{method:"DELETE",headers:{credentials:"include"}})).ok?r.refresh():alert("削除に失敗しました。"))};var p=r(8412);let x=(0,p.createServerReference)("7f22ffb5c739723fb381038be17a52ecb636aa1ce9",p.callServer,void 0,p.findSourceMapURL,"default"),b=({collectionList:e})=>{let t=(0,m.useRouter)();return(0,s.jsx)(l.Z,{headerContent:(0,s.jsx)(c.Z,{}),viewContent:(()=>{let r=[];for(let a of e){let[e,n]=Object.entries(a)[0];r.push((0,s.jsxs)(f.Z,{children:[(0,s.jsx)(i.Z,{href:`/lists/${e}`,addClass:"w-full",children:n}),(0,s.jsx)("button",{onClick:()=>h(e,n,t),className:"w-16 bg-my-orange rounded-full h-10 ml-2",type:"button",children:"削除"})]},e))}return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(u.Z,{children:r})})})(),naviContent:(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"h-full flex flex-col items-center justify-around",children:[(0,s.jsx)(d.Z,{addClass:"h-[60px] w-80",children:"コレクションリスト一覧を表示中..."}),(0,s.jsx)(n.Z,{href:"/items",addClass:"mt-4 w-60",children:"グッズを探す"}),(0,s.jsxs)("form",{action:x,className:"flex flex-col items-center justify-around h-1/2",children:[(0,s.jsx)(a.Z,{inputName:"list_name",labelValue:"コレクションリスト名"}),(0,s.jsx)(o.Z,{children:"コレクションリストを作成"})]})]})}),footerContent:!0})}},2950:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s=(e,t)=>""===e||""===t?`${e}${t}`:`${e} ${t}`},1112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>a});var s=r(7705);r(5023);let a={title:"fantre-ファントレ!",description:"グッズのコレクションがどんどん増える！"},n=({children:e})=>(0,s.jsx)("html",{lang:"ja",children:(0,s.jsx)("body",{children:(0,s.jsx)("main",{className:"max-w-screen-xl mx-auto w-full h-screen min-w-[352px] min-h-[600px] X-mob:min-w-[600px] X-mob:min-h-[352px] relative",children:e})})})},8888:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var s=r(7705),a=r(1125),n=r(8551);let l=async()=>{let e=await (0,n.M1)()||[];return(0,s.jsx)(a.default,{collectionList:e})}},1125:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/yuichi/fantre/frontend/src/features/routes/lists/ListsPage.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/yuichi/fantre/frontend/src/features/routes/lists/ListsPage.tsx","default")},8551:(e,t,r)=>{"use strict";r.d(t,{$z:()=>l,Jn:()=>o,M1:()=>i,fs:()=>n});var s=r(8051);let a="http://57.180.44.232/api/",n=async(e,t)=>{let r=(await (0,s.Qk)()).get("fantre");if(!r)return Response.error();let n=new Headers({cookie:r.value}),l=`${a}${e}?${t}`,o=await fetch(l,{headers:n});return 200!==o.status?null:o.json()},l=async e=>{let t=(await (0,s.Qk)()).get("fantre");if(!t)return Response.error();let r=`${a}${e}`,n=new URLSearchParams([["currentPage","1"]]),l=`${r}?${n}`,o=await fetch(l,{headers:{cookie:t.value}});return 200!==o.status?null:o.json()},o=async e=>{let t=(await (0,s.Qk)()).get("fantre");if(!t)return Response.error();let r=`http://57.180.44.232/api//getImageUrl?endpoint=${e}`,a=await fetch(r,{headers:{cookie:t.value}});return a?.status===200?await a.json():null},i=async()=>{let e=(await (0,s.Qk)()).get("fantre");if(!e)return Response.error();let t=`${a}lists`,r=await fetch(t,{headers:{cookie:e.value}});return 200!==r.status?null:r.json()}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(5394);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492,146,81,51,810],()=>r(8812));module.exports=s})();