(()=>{var e={};e.id=220,e.ids=[220],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1415:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,pages:()=>u,routeModule:()=>d,tree:()=>c});var r=a(9442),s=a(42),i=a(8190),n=a.n(i),l=a(3289),o={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let c=["",{children:["items",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,648)),"/home/yuichi/fantre/frontend/src/app/items/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1112)),"/home/yuichi/fantre/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/home/yuichi/fantre/frontend/src/app/items/page.tsx"],m={require:a,loadChunk:()=>Promise.resolve()},d=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/items/page",pathname:"/items",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},3091:(e,t,a)=>{Promise.resolve().then(a.bind(a,2958))},983:(e,t,a)=>{Promise.resolve().then(a.bind(a,1566))},9599:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(6493),s=a(2950);let i=({addClass:e="",labelValue:t="",defaultValue:a="",inputName:i,type:n="text",pattern:l,required:o=!1,formId:c,inputId:u,placeholder:m="",maxLength:d=30})=>{let p=(0,s.Z)("block bg-my-light-green w-60 h-[40px] rounded-3xl text-center py-2 hover:opacity-80",e);return(0,r.jsxs)("div",{className:"w-60 mx-auto",children:[(0,r.jsx)("label",{htmlFor:u,className:"h-5 mt-1 overflow-auto w-full",children:t}),(0,r.jsx)("input",{className:p,placeholder:m,name:i,type:n,defaultValue:a,pattern:l||void 0,maxLength:d,required:o,form:c,id:u})]})}},5549:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(6493),s=a(2950);let i=({children:e,addClass:t=""})=>{let a=(0,s.Z)("block bg-my-orange w-60 h-[40px] rounded-3xl mx-auto mt-4 py-2 hover:opacity-80",t);return(0,r.jsx)("button",{className:a,type:"submit",children:(0,r.jsx)("p",{children:e})})}},1566:(e,t,a)=>{"use strict";a.d(t,{default:()=>Z});var r=a(6493),s=a(9599),i=a(868),n=a(4390),l=a(5549),o=a(7235),c=a(6208),u=a(5345),m=a(2831),d=a(3606);let p=async(e,t,a,r)=>{e.preventDefault();let s=new FormData(e.currentTarget);if("default"===s.get("list-id")?.toString()){alert("リストを選択してください");return}s.set("listItems",t.join(",")),await fetch("http://57.180.44.232/api/list-items",{method:"POST",body:s}).then(e=>{200===e.status?(a([]),r("default")):alert("コレクションリストに追加できませんでした")})},h=e=>{for(let[t]of e)if(c.cy.includes(t))return!0;return!1};var g=a(2061);let x=e=>{let t={items:[{id:"",item_name:""}],maxPage:1};return e&&e.items&&(t.items=e.items,e.all_pages&&(t.maxPage=e.all_pages)),t},f=async(e,t,a,r="")=>0!==t.size&&h(t)?x(await (0,g.y)(e,t,a.currentPage,r)):x(),y=({inputName:e,categoryListObject:t})=>(0,r.jsxs)("div",{className:"w-60 mx-auto",children:[(0,r.jsx)("label",{htmlFor:"category-select",className:"h-5 mt-1 overflow-auto w-full",children:"グッズカテゴリー"}),(0,r.jsxs)("select",{className:"block bg-my-light-green w-60 h-[40px] rounded-3xl text-center py-2 hover:opacity-80",name:e,id:"category-select",children:[(0,r.jsx)("option",{value:"default",children:"指定しない"}),Object.entries(t).map(e=>{let[t,a]=e;return(0,r.jsx)("option",{value:t,children:a},t)})]})]});var j=a(842),w=a(183),v=a(1406),b=a(4971);let _=({imageUrl:e})=>(0,r.jsx)("div",{className:"w-[120px] h-[120px]",children:(0,r.jsx)(d.Suspense,{children:(0,r.jsx)(b.default,{src:e,alt:"グッズの画像です！",width:120,height:120})})}),P=({itemList:e,itemsToAddToCollectionList:t,setItemsToAddToCollectionList:a,currentImageUrlList:s})=>e.map((e,i)=>""===e.id?null:(0,r.jsxs)(v.Z,{children:[(0,r.jsx)(w.Z,{href:`items/${e.id}`,addClass:"w-[calc(100%-168px)]",children:e.item_name}),(0,r.jsx)(j.Z,{itemsToAddToCollectionList:t,setItemsToAddToCollectionList:a,itemId:e.id}),(0,r.jsx)(_,{imageUrl:s[i]})]},e.id)),S=(e,t)=>{e.preventDefault();let a=new FormData(e.currentTarget),r=new URLSearchParams;for(let[e,t]of a.entries())""!==t&&("category_id"!==e||"default"!==t)&&r.append(e,t.toString());t(r)},L=({children:e,handleSetSearchInput:t})=>(0,r.jsx)("form",{className:"h-[calc(100%*9/12)] min-h-[calc(64px*9)] flex flex-col justify-around Y-tab:grid Y-tab:grid-cols-2 Y-tab:h-[calc(100%*5/6)] Y-tab:min-h-[320px]",onSubmit:e=>S(e,t),id:"itemSearch",children:e}),N=({collectionLists:e,selectList:t,setSelectList:a})=>{let s=e.map(e=>{let[t,a]=Object.entries(e)[0];return(0,r.jsx)("option",{value:t,children:a},t)});return(0,r.jsxs)("select",{className:"mx-auto mt-4 py-2 h-[40px] w-60 rounded-3xl bg-my-orange text-center hover:opacity-80",id:"list_id",name:"list-id",required:!0,value:t,onChange:e=>a(e.currentTarget.value),children:[(0,r.jsx)("option",{value:"default",children:"追加先リスト選択"}),s]})},Z=({initialSearchInput:e,initialItemList:t,initialPageState:a,seriesName:h,characterName:g,collectionLists:x,initialImageUrlList:j,categoryListObject:w})=>{let v=(0,d.useRef)(!0),[b,_]=(0,d.useState)(t),[S,Z]=(0,d.useState)(e),[$,k]=(0,d.useState)(a),[C,T]=(0,d.useState)([]),[I,R]=(0,d.useState)("default"),[A,Y]=(0,d.useState)(j);return(0,d.useEffect)(()=>{if(v.current){v.current=!1;return}(async()=>{let e=await f("items",S,$);if(e.maxPage&&e.maxPage!==$.maxPage){let t={currentPage:$.currentPage,maxPage:$.maxPage};t.maxPage=e.maxPage,k(t)}_(e.items[0]?.id===""?[]:e.items)})()},[$,S]),(0,d.useEffect)(()=>{if(v.current){v.current=!1;return}(async()=>{let e=Array(10).fill(c.BJ);for(let t=0;t<b.length;t++){let a=b[t].id;if(""===a)return;let r=await fetch(`/api/getImageUrl?endpoint=images/${a}`),s=200!==r.status?c.BJ:(await r.json()).split("localhost").join("57.180.44.232");e[t]=s}Y(e)})()},[b]),(0,r.jsx)(n.Z,{headerContent:(0,r.jsx)(o.Z,{}),viewContent:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Z,{children:(0,r.jsx)(P,{itemList:b,itemsToAddToCollectionList:C,setItemsToAddToCollectionList:T,currentImageUrlList:A})}),(0,r.jsx)(m.Z,{pageState:$,handleSetPageState:k})]}),naviContent:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"h-full",children:[(0,r.jsxs)(L,{handleSetSearchInput:Z,children:[(0,r.jsx)(s.Z,{addClass:"Y-tab:col-start-2",defaultValue:h||"",type:"search",inputName:c.cy[0],labelValue:"作品名",placeholder:c.QT.isPartialMatch}),(0,r.jsx)(s.Z,{defaultValue:g||"",type:"search",inputName:c.cy[1],labelValue:"キャラ名",placeholder:c.QT.isPartialMatch}),(0,r.jsx)(s.Z,{type:"search",inputName:c.cy[2],labelValue:"商品名",placeholder:c.QT.isPartialMatch}),(0,r.jsx)(s.Z,{type:"search",inputName:c.cy[3],labelValue:"タグ",placeholder:c.QT.isListFormat}),(0,r.jsx)(y,{inputName:c.cy[4],categoryListObject:w}),(0,r.jsx)(s.Z,{type:"number",inputName:c.cy[5],pattern:"[a-zA-Z0-9]*",labelValue:"JANコード",maxLength:13}),(0,r.jsx)(s.Z,{type:"date",inputName:c.cy[6],labelValue:"発売日(以前検索)"}),(0,r.jsx)(s.Z,{type:"search",inputName:c.cy[7],labelValue:"購入場所",placeholder:c.QT.isListFormat}),(0,r.jsx)(l.Z,{children:"検索する！"})]}),(0,r.jsxs)("div",{className:"min-h-[calc(56px*3)] flex flex-col h-[calc(100%*3/12)] Y-tab:flex-row Y-tab:min-h-[56px] Y-tab:h-[calc(100%/6)]",children:[(0,r.jsx)(i.Z,{href:"/lists",addClass:"mt-4 w-60",children:"コレクションリスト作成"}),(0,r.jsxs)("form",{onSubmit:e=>p(e,C,T,R),className:"Y-tab:mx-auto Y-tab:translate-y-[-50%] Y-tab:h-[200%] Y-tab:grid Y-tab:grid-rows-2",children:[(0,r.jsx)(N,{collectionLists:x,selectList:I,setSelectList:R}),(0,r.jsx)(l.Z,{children:"選択項目をリストに追加"})]})]})]})}),footerContent:!0})}},2061:(e,t,a)=>{"use strict";a.d(t,{B:()=>i,y:()=>s});let r="http://57.180.44.232/api/",s=async(e,t,a,s="")=>{let i=`${r}${e}`,n=new URLSearchParams(t);n.set("currentPage",a.toString());let l=`${i}?${n}`,o=""===s?await fetch(l):await fetch(l,{headers:{cookie:s}});return 200!==o.status?null:o.json()},i=async(e,t)=>{let a=t?`&seriesId=${t}`:"",s=`${r}items/create?endpoint=${e}${a}`,i=await fetch(s);return 200!==i.status?null:i.json()}},648:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var r=a(7705),s=a(7176),i=a(2958);let n=async e=>{let t=await fetch("http://57.180.44.232/api/items/create?endpoint=category",{headers:{cookie:e}});return 200===t.status?await t.json():[]},l=e=>{for(let[t]of e)if(s.cy.includes(t))return!0;return!1};var o=a(5093);let c=e=>{let t={items:[{id:"",item_name:""}],maxPage:1};return e&&e.items&&(t.items=e.items,e.all_pages&&(t.maxPage=e.all_pages)),t},u=async(e,t,a,r="")=>0!==t.size&&l(t)?c(await (0,o.y)(e,t,a.currentPage,r)):c();var m=a(8551),d=a(8051);let p=async({searchParams:e})=>{let t=(await (0,d.Qk)()).get("fantre");if(!t)return;let a=`fantre=${t.value}`,{seriesName:l,characterName:c}=await e,p=l?new URLSearchParams([["series_name",l],["character_name",c]]):new URLSearchParams,h={currentPage:1,maxPage:1},g=await u("items",p,h,a),x=g.items;h.maxPage=g.maxPage;let f=await n(t.value),y=await (0,o.y)("lists",new URLSearchParams,1,a),j=Array(10).fill(s.BJ);for(let e=0;e<x.length&&""!==x[e].id;e++){let t=`images/${x[e].id}`,a=await (0,m.Jn)(t)||s.BJ,r=a===s.BJ?s.BJ:a.split("localhost").join("57.180.44.232");j[e]=r}return(0,r.jsx)(i.default,{initialSearchInput:p,initialItemList:x,initialPageState:h,seriesName:l,characterName:c,collectionLists:y,initialImageUrlList:j,categoryListObject:f})}},7176:(e,t,a)=>{"use strict";a.d(t,{BJ:()=>u,F6:()=>l,FX:()=>s,Rw:()=>n,SL:()=>c,cy:()=>r,gR:()=>o,pb:()=>i});let r=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},n={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},l={maxAge:2592e3,httpOnly:!0,path:"/"},o="Bearer ",c=["image/png","image/jpg","image/jpeg"],u="/no-image.svg"},2958:(e,t,a)=>{"use strict";a.d(t,{default:()=>r});let r=(0,a(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/yuichi/fantre/frontend/src/features/routes/items/components/ItemsPage.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/yuichi/fantre/frontend/src/features/routes/items/components/ItemsPage.tsx","default")},8551:(e,t,a)=>{"use strict";a.d(t,{$z:()=>n,Jn:()=>l,M1:()=>o,fs:()=>i});var r=a(8051);let s="http://57.180.44.232/api/",i=async(e,t)=>{let a=(await (0,r.Qk)()).get("fantre");if(!a)return Response.error();let i=new Headers({cookie:a.value}),n=`${s}${e}?${t}`,l=await fetch(n,{headers:i});return 200!==l.status?null:l.json()},n=async e=>{let t=(await (0,r.Qk)()).get("fantre");if(!t)return Response.error();let a=`${s}${e}`,i=new URLSearchParams([["currentPage","1"]]),n=`${a}?${i}`,l=await fetch(n,{headers:{cookie:t.value}});return 200!==l.status?null:l.json()},l=async e=>{let t=(await (0,r.Qk)()).get("fantre");if(console.log("cookie-getImageUrl",t),!t)return Response.error();let a=`http://57.180.44.232/api//getImageUrl?endpoint=${e}`,s=await fetch(a,{headers:{cookie:t.value}});return s?.status===200?await s.json():null},o=async()=>{let e=(await (0,r.Qk)()).get("fantre");if(!e)return Response.error();let t=`${s}lists`,a=await fetch(t,{headers:{cookie:e.value}});return 200!==a.status?null:a.json()}}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[492,146,81,51,289],()=>a(1415));module.exports=r})();