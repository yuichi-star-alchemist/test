(()=>{var e={};e.id=254,e.ids=[254],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},2209:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>h,tree:()=>c});var r=a(9442),s=a(42),i=a(8190),l=a.n(i),n=a(3289),o={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>n[e]);a.d(t,o);let c=["",{children:["items",{children:["create",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,5464)),"/home/yuichi/fantre/frontend/src/app/items/create/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,1112)),"/home/yuichi/fantre/frontend/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,6042,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/yuichi/fantre/frontend/src/app/items/create/page.tsx"],m={require:a,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/items/create/page",pathname:"/items/create",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},7095:(e,t,a)=>{"use strict";a.r(t),a.d(t,{"7f06164a3ca741ed8ee00cdbca0533e11ce29c3db4":()=>c,"7f2cff3e916a0a45cef0caeb9adc0cea476bd2f49a":()=>r.Z});var r=a(8538),s=a(3722);a(453);let i={tags:"tags",retailers:"retailers"};var l=a(4092),n=a(6309);let o=async(e,t,a)=>{let r=new FormData;for(let t of e.entries()){let e=t[0],a=t[1];""!==a&&(e===i.tags||e===i.retailers?a.toString().split(",").forEach(t=>{r.append(`${e}[]`,t)}):r.append(e,a))}for(let e of a)if(!r.get(e))return;let s=(0,l.Qk)(),n=(await s).get("fantre");if(console.log("cookie-sendFormAction",n),!n)return;let o=new Headers({Cookie:n.value}),c=`http://localhost:3000/api/${t}`;console.log("requestUrl-sendFormAction",c);let d=await fetch(c,{method:"POST",headers:o,body:r});return 200===d.status?d.json():null},c=o;(0,n.h)([o]),(0,s.j)(o,"7f06164a3ca741ed8ee00cdbca0533e11ce29c3db4",null)},420:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,6472,23)),Promise.resolve().then(a.t.bind(a,2461,23)),Promise.resolve().then(a.t.bind(a,8190,23)),Promise.resolve().then(a.t.bind(a,5282,23)),Promise.resolve().then(a.t.bind(a,6613,23)),Promise.resolve().then(a.t.bind(a,5486,23)),Promise.resolve().then(a.t.bind(a,8825,23))},7730:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,2144,23)),Promise.resolve().then(a.t.bind(a,2302,23)),Promise.resolve().then(a.t.bind(a,3582,23)),Promise.resolve().then(a.t.bind(a,9587,23)),Promise.resolve().then(a.t.bind(a,5329,23)),Promise.resolve().then(a.t.bind(a,599,23)),Promise.resolve().then(a.t.bind(a,2118,23))},6584:()=>{},1643:()=>{},5682:(e,t,a)=>{Promise.resolve().then(a.bind(a,5464))},4175:(e,t,a)=>{Promise.resolve().then(a.bind(a,8161))},4971:(e,t,a)=>{"use strict";a.d(t,{default:()=>s.a});var r=a(9110),s=a.n(r)},5723:(e,t,a)=>{"use strict";a.d(t,{default:()=>s.a});var r=a(3510),s=a.n(r)},9110:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return n}});let r=a(4564),s=a(7877),i=a(2704),l=r._(a(1911));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=i.Image},8161:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>C});var r=a(6493),s=a(9599),i=a(4390),l=a(7235),n=a(6208);let o=e=>{e(!1)},c=({error:e,setError:t})=>e?(0,r.jsxs)("div",{className:"absolute w-full h-full bg-red-300 top-0 flex flex-col justify-center [&>*]:mb-4",children:[(0,r.jsx)("p",{children:"処理に失敗しました"}),(0,r.jsx)("p",{children:"もう一度やり直してください"}),(0,r.jsx)("button",{onClick:()=>o(t),className:"w-48 h-10 bg-my-yellow rounded-full mx-auto",children:"戻る"})]}):null;var d=a(845);let m=async(e,t)=>{e.preventDefault();let a=new FormData(e.currentTarget),r=a.get(t);if(r&&r.size>1048576)return alert(n.RZ.IMAGE_SIZE_TOO_LARGE);500===await (0,d.Z)(a,t,"","itemCreate")?alert(n.RZ.ITEM_CREATION_FAILED):alert(n.RZ.CREATED_BUT_FAILED_TO_UPLOAD_IMAGE)},h=({children:e})=>{let t="item-create",a="item_image";return(0,r.jsxs)("form",{autoComplete:"off",className:"mx-auto flex flex-col h-full min-h-[calc(64px*8+76px+56px)] justify-around Y-tab:grid Y-tab:grid-cols-2 Y-tab:gap-4 Y-tab:min-h-[calc(64px*5+20px)]",id:t,name:t,onSubmit:e=>m(e,a),children:[e,(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:t,className:"leading-tight bg-my-light-green w-60 block mx-auto rounded-lg mt-4",children:"アップロード画像を選択"}),(0,r.jsx)("input",{accept:n.SL.join(","),type:"file",id:t,name:a,className:"file:opacity-0 file:block file:bg-my-orange file:h-0 file:border-0 h-[40px] mx-auto rounded-[40px] pl-10 bg-my-orange leading-normal cursor-pointer w-60"})]}),(0,r.jsx)("button",{className:"block h-[40px] w-60 rounded-3xl bg-my-orange mx-auto mt-4",type:"submit",children:(0,r.jsx)("p",{children:"登録!"})})]})};var u=a(2061);let p=e=>({data:e||{},hasData:!1,isShow:!0,choiced:""}),x=async(e,t,a,r,s)=>{if("characters"===e&&a&&!a.choiced){alert("作品を先に選択してください！");return}"series"===e&&r&&s&&s({data:{...r.data},hasData:!0,isShow:!1,choiced:""}),t(p(await (0,u.B)(e,a?.choiced)))},f=({endpoint:e,state:t,handleSetState:a,inputName:s,seriesList:i,labelValue:l,charactersList:n,handleSetCharactersList:o})=>{let c=t.data[t.choiced];return(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:l,className:"h-5 mt-1",children:l}),(0,r.jsxs)("button",{className:"bg-[#5271ff] w-60 bg-opacity-80 block mx-auto w-60 h-[40px] py-2 rounded-3xl text-center hover:opacity-80",onClick:()=>x(e,a,i,n,o),type:"button",children:[(0,r.jsx)("input",{className:"h-[1px] w-[1px] opacity-[0.1]",name:s,defaultValue:t.choiced,form:"item-create",required:!0,id:l}),c]})]})};var b=a(8412);let g=(0,b.createServerReference)("7f06164a3ca741ed8ee00cdbca0533e11ce29c3db4",b.callServer,void 0,b.findSourceMapURL,"default"),w=({inputName:e,categoriesList:t,setCategoriesList:a,endpoint:s,setError:i})=>(0,r.jsxs)("form",{action:async r=>{let l=await g(r,s,[e])||n.jy;if(l===n.jy){let e={data:t.data,hasData:!0,isShow:!1,choiced:t.choiced};i(!0),a(e)}else{let e={...t.data};e[l.category_id]=l.category_name,a({data:e,hasData:!0,isShow:!1,choiced:l.category_id})}},className:"flex w-full h-12 items-center justify-center",children:[(0,r.jsx)("input",{name:e,className:"bg-my-light-green h-10 rounded-xl text-center",type:"text",placeholder:"新しく作成する！"}),(0,r.jsx)("button",{className:"bg-my-orange w-40 h-10 rounded-full",type:"submit",children:"作成する！"})]}),j=({charactersList:e,setChractersList:t,setError:a,choiced:s})=>(0,r.jsxs)("form",{action:async r=>{let i=["series_id","is_new_series","character_name","is_new_character"];if(!r.get(i[2]))return;r.append(i[0],s),r.append(i[1],"false"),r.append(i[3],"true");let l=await g(r,"series-characters",i)||n.jy;if(l===n.jy){let r={data:e.data,hasData:!0,isShow:!1,choiced:e.choiced};a(!0),t(r)}else{let a={...e.data},s=l.character_id;a[s]=r.get("character_name")?.toString()||"",t({data:a,hasData:!0,isShow:!1,choiced:s})}},className:"flex w-full h-12 items-center justify-center",children:[(0,r.jsx)("input",{name:"character_name",className:"bg-my-light-green h-10 rounded-xl text-center",type:"text",placeholder:"新しく作成する！"}),(0,r.jsx)("button",{className:"bg-my-orange w-40 h-10 rounded-full",type:"submit",children:"作成する！"})]}),y=({seriesList:e,setSeriesList:t,charactersList:a,setCharactersList:s,setError:i})=>(0,r.jsxs)("form",{action:async r=>{let l=["series_name","is_new_series","character_name","is_new_character"];if(!r.get(l[0])||!r.get(l[2]))return;r.append(l[1],"true"),r.append(l[3],"true");let o=await g(r,"series-characters",l)||n.jy;if(o===n.jy){let a={data:e.data,hasData:!0,isShow:!1,choiced:e.choiced};i(!0),t(a)}else{let i=o.series_id,n=r.get(l[0])?.toString()||"",c={data:{...e.data},hasData:!0,isShow:!1,choiced:i};c.data[i]=n;let d=o.character_id,m=r.get(l[2])?.toString()||"",h={data:{...a.data},hasData:!0,isShow:!1,choiced:d};h.data[d]=m,t(c),s(h)}},className:"w-full items-center justify-center [&>*]:mx-2 [&>*]:mb-2 X-tab:flex X-tab:h-12 Y-tab:flex Y-tab:h-12",children:[(0,r.jsx)("input",{name:"series_name",className:"bg-my-light-green h-10 rounded-xl text-center",type:"text",placeholder:"新しく作成: 作品名",required:!0}),(0,r.jsx)("input",{name:"character_name",className:"bg-my-light-green h-10 rounded-xl text-center",type:"text",placeholder:"新しく作成: キャラクター名",required:!0}),(0,r.jsx)("button",{className:"bg-my-orange w-40 h-10 rounded-full",type:"submit",children:"作成する！"})]}),_=()=>(0,r.jsxs)("div",{className:"w-full max-w-[400px] mt-10 mx-auto rounded-lg p-2 bg-green-700 [&>*]:text-white [&>*]:mb-2 [&>*]:p-2 Y-tab:[&>p]:text-lg Y-tab:max-w-[560px] X-tab:[&>p]:text-lg",children:[(0,r.jsx)("h1",{className:"text-2xl",children:"☆グッズの仕様のご案内☆"}),(0,r.jsx)("p",{children:"グッズの情報は共有で利用されます。"}),(0,r.jsx)("p",{children:"作成したグッズの情報は変更・削除できません。"}),(0,r.jsxs)("p",{children:["ただし詳細ページで変更すると、あなたにとっての見た目のみが変更されます。",(0,r.jsx)("br",{}),"例えば登録済みのグッズのカテゴリー名を変更した場合、",(0,r.jsx)("br",{}),"カテゴリーの所属が変わるわけではなくて、見た目の名前が変わります。",(0,r.jsx)("br",{}),"その為、同じカテゴリーに所属する他のグッズのところでもその名前で表示されます。"]})]}),v=(e,t,a=!1)=>{t(a?{data:e.data,hasData:!0,isShow:!1,choiced:""}:{data:e.data,hasData:!0,isShow:!1,choiced:e.choiced})},S=({state:e,setState:t,charactersList:a,setChractersList:s})=>(0,r.jsx)("button",{onClick:()=>{v(e,t),s&&a&&v(a,s,!0)},type:"button",className:"bg-[#5271ff] w-48 h-10 opacity-4/5 rounded-full",children:(0,r.jsx)("p",{children:"選択を解除して戻る"})}),N=(e,t,a)=>{a({data:t.data,hasData:!0,isShow:!1,choiced:e})},P=({id:e,value:t,state:a,setState:s})=>(0,r.jsx)("button",{id:e,onClick:()=>N(e,a,s),type:"button",className:"block mx-auto rounded-full w-60 h-8 bg-my-yellow mb-2",children:t}),X=({children:e,state:t,setState:a,listName:s,charactersList:i,setChractersList:l})=>{if(!t.isShow)return null;let n=[];for(let e in t.data){let a=t.data[e];n.push([e,a])}let o=n.map(e=>{let[s,i]=e;return(0,r.jsx)(P,{id:s,value:i,state:t,setState:a},s)});return(0,r.jsxs)("section",{className:"h-full w-full rounded-xl absolute z-index-10 p-4 bg-my-light-blue top-0 overflow-auto",children:[(0,r.jsxs)("h2",{className:"bg-my-yellow w-4/5 min-w-[360px] mx-auto rounded-full mb-4 select-none",children:["作成するグッズの",s,"を選んで下さい"]}),o,(0,r.jsxs)("div",{children:[e,(0,r.jsx)(S,{state:t,setState:a,charactersList:i,setChractersList:l})]})]})};var D=a(3606);let C=()=>{let[e,t]=(0,D.useState)({data:{},hasData:!1,isShow:!1,choiced:""}),[a,o]=(0,D.useState)({data:{},hasData:!1,isShow:!1,choiced:""}),[d,m]=(0,D.useState)({data:{},hasData:!1,isShow:!1,choiced:""}),[u,p]=(0,D.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{headerContent:(0,r.jsx)(l.Z,{}),viewContent:(0,r.jsx)(_,{}),naviContent:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(h,{children:[(0,r.jsx)(f,{endpoint:"series",state:e,handleSetState:t,inputName:n.FX.series,labelValue:"作品名(必須)",charactersList:a,handleSetCharactersList:o}),(0,r.jsx)(f,{endpoint:"characters",state:a,handleSetState:o,inputName:n.FX.character,seriesList:e,labelValue:"キャラ名(必須)"}),(0,r.jsx)(s.Z,{inputName:n.FX.name,labelValue:"商品名(必須)",required:!0,placeholder:n.QT.noDuplication}),(0,r.jsx)(s.Z,{inputName:n.FX.tags,labelValue:"タグ",placeholder:n.QT.isListFormat}),(0,r.jsx)(f,{endpoint:"category",state:d,handleSetState:m,inputName:n.FX.category,labelValue:"グッズカテゴリー(必須)"}),(0,r.jsx)(s.Z,{inputName:n.FX.janCode,type:"number",pattern:"[a-zA-Z0-9]*",labelValue:"JANコード(修正不可)",placeholder:n.QT.isDigits}),(0,r.jsx)(s.Z,{inputName:n.FX.releaseDate,type:"date",labelValue:"発売日(修正不可)"}),(0,r.jsx)(s.Z,{inputName:n.FX.retailers,labelValue:"購入場所",placeholder:n.QT.isListFormat})]})}),footerContent:!0}),(0,r.jsx)(X,{state:e,setState:t,listName:"作品名",charactersList:a,setChractersList:o,children:(0,r.jsx)(y,{seriesList:e,setSeriesList:t,charactersList:a,setCharactersList:o,setError:p})}),(0,r.jsx)(X,{state:a,setState:o,listName:"キャラクター名",children:(0,r.jsx)(j,{charactersList:a,setChractersList:o,setError:p,choiced:e.choiced})}),(0,r.jsx)(X,{state:d,setState:m,listName:"カテゴリー名",children:(0,r.jsx)(w,{inputName:"category_name",categoriesList:d,setCategoriesList:m,endpoint:"categories",setError:p})}),(0,r.jsx)(c,{error:u,setError:p})]})}},9599:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(6493),s=a(2950);let i=({addClass:e="",labelValue:t="",defaultValue:a="",inputName:i,type:l="text",pattern:n,required:o=!1,formId:c,inputId:d,placeholder:m="",maxLength:h=30})=>{let u=(0,s.Z)("block bg-my-light-green w-60 h-[40px] rounded-3xl text-center py-2 hover:opacity-80",e);return(0,r.jsxs)("div",{className:"w-60 mx-auto",children:[(0,r.jsx)("label",{htmlFor:d,className:"h-5 mt-1 overflow-auto w-full",children:t}),(0,r.jsx)("input",{className:u,placeholder:m,name:i,type:l,defaultValue:a,pattern:n||void 0,maxLength:h,required:o,form:c,id:d})]})}},868:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(6493),s=a(2950),i=a(5723);let l=({children:e,href:t,addClass:a=""})=>{let l=(0,s.Z)("block bg-my-yellow w-60 h-[40px] mx-auto rounded-3xl overflow-hidden hover:opacity-80",a);return(0,r.jsx)(i.default,{href:t,className:l,children:(0,r.jsx)("p",{className:"py-2",children:e})})}},4390:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(6493),s=a(4971);let i=()=>(0,r.jsx)(s.default,{fill:!0,src:"/MonitorDecorationsImage.svg",alt:"モニターの台座・コード・びりびりマークの見た目を表現する画像です"}),l=()=>(0,r.jsx)(s.default,{fill:!0,src:"/PowerButtonImage.svg",alt:"電源ボタンの見た目を表現する画像です",className:"hidden X-tab:block row-start-3 col-start-6 col-end-7"}),n=({headerContent:e,viewContent:t,naviContent:a,footerContent:s})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("section",{className:"grid relative w-full h-full rounded-[50px] bg-my-light-blue grid-rows-[40px_5fr_20px_4fr_40px] grid-cols-[20px_30px_1fr_30px_20px] X-mob:grid-rows-[40px_1fr_40px] X-mob:grid-cols-[50px_5fr_20px_4fr_50px] X-tab:h-[calc(100%-50px)] X-tab:grid-rows-[40px_1fr_40px] X-tab:grid-cols-[20px_5fr_54fr_20px_26fr_6fr_20px]",children:[(0,r.jsx)("section",{className:"flex items-center justify-end col-start-3 col-end-4 X-tab:col-end-6 X-mob:col-start-4 X-mob:col-end-5",children:e}),(0,r.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto relative row-start-2 row-end-3 col-start-2 col-end-5 X-tab:col-end-4 X-mob:col-end-3",children:t}),(0,r.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto row-start-4 row-end-5 col-start-2 col-end-5 X-mob:row-start-2 X-mob:row-end-3 X-mob:col-start-4 X-mob:col-end-5 X-tab:row-start-2 X-tab:row-end-3 X-tab:col-start-5 X-tab:col-end-7 ",children:a}),(0,r.jsx)("section",{className:"flex justify-end row-start-5 col-start-3 col-end-4 X-tab:row-start-3 X-tab:col-end-6 X-mob:row-start-1 X-mob:row-end-2 X-mob:col-start-2 X-mob:col-end-3",children:s}),(0,r.jsx)(l,{})]}),(0,r.jsx)("div",{className:"relative w-full h-[50px] hidden X-tab:block",children:(0,r.jsx)(i,{})})]})},7235:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(6493),s=a(868);let i=()=>(0,r.jsx)(s.Z,{href:"/",addClass:"w-[136px] mr-0 max-h-[32px] leading-none",children:"TOPへ"})},6208:(e,t,a)=>{"use strict";a.d(t,{BJ:()=>c,FX:()=>s,QT:()=>m,RZ:()=>d,Rw:()=>i,SL:()=>l,cy:()=>r,f1:()=>n,jy:()=>o});let r=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},i={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},l=["image/png","image/jpg","image/jpeg"],n="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",o={category_id:"dummy",category_name:"dummy",character_id:"dummy",series_id:"dummy",access_token:"dummy"},c="/no-image.svg",d={IMAGE_SIZE_TOO_LARGE:"画像のサイズが大きすぎます。\n1MB未満にしてください。",ITEM_CREATION_FAILED:"グッズの作成に失敗しました。\n再度お試しください。",CREATED_BUT_FAILED_TO_UPLOAD_IMAGE:"グッズは作成できましたが、画像の登録に失敗しました。\n再度お試しください。"},m={isPartialMatch:"部分一致検索",isListFormat:"小カンマ(,)で複数の指定",isDigits:"8桁 or 13桁の半角数字",noDuplication:"既存の名前と重複不可"}},2950:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});let r=(e,t)=>""===e||""===t?`${e}${t}`:`${e} ${t}`},2061:(e,t,a)=>{"use strict";a.d(t,{B:()=>i,y:()=>s});let r="http://57.180.44.232/api/",s=async(e,t,a,s="")=>{let i=`${r}${e}`,l=new URLSearchParams(t);l.set("currentPage",a.toString());let n=`${i}?${l}`,o=""===s?await fetch(n):await fetch(n,{headers:{cookie:s}});return 200!==o.status?null:o.json()},i=async(e,t)=>{let a=t?`&seriesId=${t}`:"",s=`${r}items/create?endpoint=${e}${a}`,i=await fetch(s);return 200!==i.status?null:i.json()}},5464:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});let r=(0,a(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/yuichi/fantre/frontend/src/app/items/create/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/yuichi/fantre/frontend/src/app/items/create/page.tsx","default")},1112:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>i,metadata:()=>s});var r=a(7705);a(5023);let s={title:"fantre-ファントレ!",description:"グッズのコレクションがどんどん増える！"},i=({children:e})=>(0,r.jsx)("html",{lang:"ja",children:(0,r.jsx)("body",{children:(0,r.jsx)("main",{className:"max-w-screen-xl mx-auto w-full h-screen min-w-[352px] min-h-[600px] X-mob:min-w-[600px] X-mob:min-h-[352px] relative",children:e})})})},8538:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(3722);a(453);let s=async(e,t,a,r)=>{let s=new FormData;for(let t of e.entries()){let e=t[0],a=t[1].toString();a.length&&e.startsWith("custom")&&s.set(e,a)}let i=`${a}itemDetail?item_id=${r}`;await fetch(i,{method:"POST",headers:t,body:s})};var i=a(4092),l=a(2557),n=a(6309);let o=async(e,t,a="",r)=>{let n=(await (0,i.Qk)()).get("fantre");if(console.log(n),!n)return;let o=new Headers({Cookie:n.value}),c="http://57.180.44.232/api/",d=new URLSearchParams([["endpoint",r]]);""!==a&&d.set("itemId",a),e.get("custom_item_name")&&s(e,o,c,a);let m="";if("itemCreate"===r){let t=new FormData;for(let[a,r]of e.entries())""!==r&&t.set(a,r.toString());let a=await fetch(`${c}items/create`,{method:"POST",headers:o,body:t});if(200!==a.status)return 500;m=(await a.json())._id,d.set("itemId",m)}let h=e.get(t);if(0===h.size&&"itemCreate"===r)return(0,l.redirect)(`/items/${m}`);if(0===h.size)return m;if(h.size>=1048576)return;let u=new FormData;u.set(t,h),console.log(u);let p=`${c}uploadImage?${d}`;await fetch(p,{method:"POST",headers:o,body:u}).then(e=>{if(200===e.status){if("top"===r&&(0,l.redirect)("/"),"itemDetail"===r&&(0,l.redirect)(`/items/${a}`),"itemCreate"===r)return(0,l.redirect)(`/items/${m}`)}else if("items/create"===r)return 206})},c=o;(0,n.h)([o]),(0,r.j)(o,"7f2cff3e916a0a45cef0caeb9adc0cea476bd2f49a",null)},845:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(8412);let s=(0,r.createServerReference)("7f2cff3e916a0a45cef0caeb9adc0cea476bd2f49a",r.callServer,void 0,r.findSourceMapURL,"default")},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(5394);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[492,146,81,810],()=>a(2209));module.exports=r})();