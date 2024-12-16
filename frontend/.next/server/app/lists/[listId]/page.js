(()=>{var e={};e.id=784,e.ids=[784],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5692:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>s.a,__next_app__:()=>c,pages:()=>d,routeModule:()=>f,tree:()=>u});var n=r(9442),i=r(42),o=r(8190),s=r.n(o),a=r(3289),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let u=["",{children:["lists",{children:["[listId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2423)),"/home/yuichi/fantre/frontend/src/app/lists/[listId]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1112)),"/home/yuichi/fantre/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/yuichi/fantre/frontend/src/app/lists/[listId]/page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/lists/[listId]/page",pathname:"/lists/[listId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},7323:(e,t,r)=>{Promise.resolve().then(r.bind(r,3871))},2661:(e,t,r)=>{Promise.resolve().then(r.bind(r,9029))},4312:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(6493),i=r(2950);let o=({children:e,addClass:t="",labelText:r})=>{let o=(0,i.Z)("w-60 h-16 mx-auto select-none",t);return(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)("p",{className:"h-6",children:r}),(0,n.jsx)("p",{className:"py-2 h-[40px] bg-my-green rounded-3xl",children:e})]})}},9029:(e,t,r)=>{"use strict";r.d(t,{default:()=>w});var n=r(6493),i=r(4390),o=r(4312),s=r(7235),a=r(6208),l=r(2950);let u=({children:e,addClass:t="",handleClick:r=()=>{}})=>{let i=(0,l.Z)("block bg-my-orange mx-auto w-60 h-[40px] py-2 rounded-3xl text-center hover:opacity-80",t);return(0,n.jsx)("button",{className:i,onClick:r,type:"button",children:(0,n.jsx)("p",{children:e})})};var d=r(5345),c=r(1406),f=r(3606);let p=(e,t)=>{let r=(t-1)*9;return e.slice(r,r+9)};var m=r(2831);let h=({children:e})=>(0,n.jsx)("span",{className:"tooltip-text",children:e});var g=r(4971),j=r(5723);let x=({itemId:e,imageUrl:t,itemName:r})=>(0,n.jsx)("li",{children:(0,n.jsxs)(j.default,{href:`/items/${e}`,className:"tooltip",children:[(0,n.jsx)(g.default,{src:t,alt:"グッズの画像です",width:300,height:300,className:"hover:opacity-80"}),(0,n.jsx)(h,{children:`${r}の詳細を見る`})]})}),y=({children:e})=>(0,n.jsx)("ul",{className:"h-[calc(100%-24px)] grid grid-cols-3 gap-2 p-2 overflow-y-auto",children:e}),b=({pageState:e,handleSetPageState:t,itemImageIdList:r,itemImageUrlList:i})=>{let o=r.map((e,t)=>{let[r,o]=Object.entries(e)[0],s=i[t];return(0,n.jsx)(x,{itemId:r,imageUrl:s,itemName:o},r)});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{children:o}),(0,n.jsx)(m.Z,{pageState:e,handleSetPageState:t})]})},v=async(e,t,r,n,i)=>{let o=new Headers({credentials:"include","Content-Type":"application/json"});await fetch("/api/list-items",{method:"DELETE",headers:o,body:JSON.stringify({listId:e,listItems:t})}).then(e=>{200===e.status?(i(n.filter(e=>{let[r]=Object.entries(e)[0];return!t.includes(r)})),r([])):alert("削除に失敗しました")})};var _=r(842),P=r(183);let R=({itemId:e,itemName:t,itemsToRemoveToCollectionList:r,setItemsToRemoveToCollectionList:i})=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(P.Z,{href:`/items/${e}`,addClass:"w-full",children:t}),(0,n.jsx)(_.Z,{itemsToAddToCollectionList:r,setItemsToAddToCollectionList:i,itemId:e})]}),w=({listId:e,listDetail:t,maxPage:r})=>{let[l,m]=(0,f.useState)(t),[h,g]=(0,f.useState)([]),[j,x]=(0,f.useState)(!1),[y,_]=(0,f.useState)({currentPage:1,maxPage:r}),[P,w]=(0,f.useState)([]),[E,O]=(0,f.useState)([]);return(0,f.useEffect)(()=>{j&&(async()=>{let e=p(l,y.currentPage),t=[];for(let r of e){let[e]=Object.entries(r)[0],n=await fetch(`/api/getImageUrl?endpoint=images/${e}`),i=200!==n.status?a.BJ:(await n.json()).split("localhost").join("s3-minio");t.push(i)}O(t),w(e)})()},[y.currentPage,j]),(0,n.jsx)(i.Z,{headerContent:(0,n.jsx)(s.Z,{}),viewContent:(()=>{let e=j?null:l.map(e=>{let[t,r]=Object.entries(e)[0];return(0,n.jsx)(c.Z,{children:(0,n.jsx)(R,{itemId:t,itemName:r,itemsToRemoveToCollectionList:h,setItemsToRemoveToCollectionList:g})},t)});return j?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(b,{pageState:y,handleSetPageState:_,itemImageIdList:P,itemImageUrlList:E})}):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(d.Z,{children:e})})})(),naviContent:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"h-full flex flex-col items-center justify-around",children:[(0,n.jsx)(o.Z,{children:"コレクション一覧を表示中..."}),j?null:(0,n.jsx)(u,{handleClick:()=>v(e,h,g,l,m),children:"チェック項目をリストから削除"}),(0,n.jsx)(u,{handleClick:()=>x(!j),children:j?"リストビューに切り替え":"画像ビューに切り替え"})]})}),footerContent:!0})}},1623:(e,t,r)=>{"use strict";var n=r(5941);r.o(n,"redirect")&&r.d(t,{redirect:function(){return n.redirect}})},6898:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isNextRouterError",{enumerable:!0,get:function(){return o}});let n=r(7361),i=r(4722);function o(e){return(0,i.isRedirectError)(e)||(0,n.isNotFoundError)(e)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5941:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return n.RedirectType},notFound:function(){return i.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect},unstable_rethrow:function(){return o.unstable_rethrow}});let n=r(4722),i=r(7361),o=r(9097);class s extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new s}delete(){throw new s}set(){throw new s}sort(){throw new s}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4852:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4722:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return a},getRedirectStatusCodeFromError:function(){return p},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return c},isRedirectError:function(){return d},permanentRedirect:function(){return u},redirect:function(){return l}});let i=r(209),o=r(4852),s="NEXT_REDIRECT";function a(e,t,r){void 0===r&&(r=o.RedirectStatusCode.TemporaryRedirect);let n=Error(s);return n.digest=s+";"+t+";"+e+";"+r+";",n}function l(e,t){let r=i.actionAsyncStorage.getStore();throw a(e,t||((null==r?void 0:r.isAction)?"push":"replace"),o.RedirectStatusCode.TemporaryRedirect)}function u(e,t){throw void 0===t&&(t="replace"),a(e,t,o.RedirectStatusCode.PermanentRedirect)}function d(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let t=e.digest.split(";"),[r,n]=t,i=t.slice(2,-2).join(";"),a=Number(t.at(-2));return r===s&&("replace"===n||"push"===n)&&"string"==typeof i&&!isNaN(a)&&a in o.RedirectStatusCode}function c(e){return d(e)?e.digest.split(";").slice(2,-2).join(";"):null}function f(e){if(!d(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function p(e){if(!d(e))throw Error("Not a redirect error");return Number(e.digest.split(";").at(-2))}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9097:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"unstable_rethrow",{enumerable:!0,get:function(){return function e(t){if((0,s.isNextRouterError)(t)||(0,o.isBailoutToCSRError)(t)||(0,n.isDynamicUsageError)(t)||(0,i.isPostpone)(t))throw t;t instanceof Error&&"cause"in t&&e(t.cause)}}});let n=r(6714),i=r(5730),o=r(8465),s=r(6898);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6714:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isDynamicUsageError",{enumerable:!0,get:function(){return a}});let n=r(3105),i=r(8465),o=r(6898),s=r(4375),a=e=>(0,n.isDynamicServerError)(e)||(0,i.isBailoutToCSRError)(e)||(0,o.isNextRouterError)(e)||(0,s.isDynamicPostpone)(e)},5730:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isPostpone",{enumerable:!0,get:function(){return n}});let r=Symbol.for("react.postpone");function n(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}},8465:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{BailoutToCSRError:function(){return n},isBailoutToCSRError:function(){return i}});let r="BAILOUT_TO_CLIENT_SIDE_RENDERING";class n extends Error{constructor(e){super("Bail out to client-side rendering: "+e),this.reason=e,this.digest=r}}function i(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}},2423:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(7705),i=r(3871),o=r(5093),s=r(8051),a=r(1623);let l=async({params:e})=>{let t=(await (0,s.Qk)()).get("fantre");t||(0,a.redirect)("/login");let r=(await e).listId,l=`lists/${r}`,u=new URLSearchParams([["listId",r]]),d=await (0,o.y)(l,u,1,`${t.name}=${t.value}`)||[],c=Math.ceil(d.length/9);return(0,n.jsx)(i.default,{listId:r,listDetail:d,maxPage:c})}},3871:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});let n=(0,r(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/yuichi/fantre/frontend/src/features/routes/lists/listDetail/ListDetailPage.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/yuichi/fantre/frontend/src/features/routes/lists/listDetail/ListDetailPage.tsx","default")}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[492,146,81,51,289],()=>r(5692));module.exports=n})();