exports.id=297,exports.ids=[297],exports.modules={3914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{"7f3e065f84c9ca672f6eb5c71323873c2f8bb8249b":()=>a.Z});var a=r(8538)},420:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6472,23)),Promise.resolve().then(r.t.bind(r,2461,23)),Promise.resolve().then(r.t.bind(r,8190,23)),Promise.resolve().then(r.t.bind(r,5282,23)),Promise.resolve().then(r.t.bind(r,6613,23)),Promise.resolve().then(r.t.bind(r,5486,23)),Promise.resolve().then(r.t.bind(r,8825,23))},7730:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2144,23)),Promise.resolve().then(r.t.bind(r,2302,23)),Promise.resolve().then(r.t.bind(r,3582,23)),Promise.resolve().then(r.t.bind(r,9587,23)),Promise.resolve().then(r.t.bind(r,5329,23)),Promise.resolve().then(r.t.bind(r,599,23)),Promise.resolve().then(r.t.bind(r,2118,23))},7424:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,903,23)),Promise.resolve().then(r.t.bind(r,821,23)),Promise.resolve().then(r.bind(r,4430))},8666:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2704,23)),Promise.resolve().then(r.t.bind(r,3510,23)),Promise.resolve().then(r.bind(r,407))},6584:()=>{},1643:()=>{},6208:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>c,FX:()=>s,QT:()=>d,RZ:()=>m,Rw:()=>o,SL:()=>i,cy:()=>a,f1:()=>n,jy:()=>l});let a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},o={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},i=["image/png","image/jpg","image/jpeg"],n="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",l={category_id:"dummy",category_name:"dummy",character_id:"dummy",series_id:"dummy",access_token:"dummy"},c="/no-image.svg",m={IMAGE_SIZE_TOO_LARGE:"画像のサイズが大きすぎます。\n1MB未満にしてください。",ITEM_CREATION_FAILED:"グッズの作成に失敗しました。\n再度お試しください。",CREATED_BUT_FAILED_TO_UPLOAD_IMAGE:"グッズは作成できましたが、画像の登録に失敗しました。\n再度お試しください。"},d={isPartialMatch:"部分一致検索",isListFormat:"小カンマ(,)で複数の指定",isDigits:"8桁 or 13桁の半角数字",noDuplication:"既存の名前と重複不可"}},407:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var a=r(6493),s=r(6208),o=r(2950),i=r(4206);let n=async(e,t,r,a)=>{e.preventDefault();let o=new FormData(e.currentTarget);console.log(o);let n=o.get(t);if(console.log(n),n&&n.size>1048576)return alert(s.RZ.IMAGE_SIZE_TOO_LARGE);await (0,i.Z)(o,t,r,a)},l=({formId:e,children:t,uploadImageText:r,buttonText:i,addClass:l="",imageId:c,itemId:m="",endpoint:d})=>{let u=(0,o.Z)("mx-auto flex flex-col",l);return(0,a.jsxs)("form",{autoComplete:"off",className:u,id:e,name:e,onSubmit:e=>n(e,c,m,d),children:[t,(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:e,className:"leading-tight bg-my-light-green w-60 block mx-auto rounded-lg mt-4",children:r}),(0,a.jsx)("input",{accept:s.SL.join(","),type:"file",id:e,className:"file:opacity-0 file:block file:bg-my-orange file:h-0 file:border-0 h-[40px] mx-auto rounded-[40px] pl-10 bg-my-orange leading-normal cursor-pointer w-60 hover:opacity-80",name:c})]}),(0,a.jsx)("button",{className:"block h-[40px] w-60 rounded-3xl bg-my-orange mx-auto mt-4 hover:opacity-80",type:"submit",children:(0,a.jsx)("p",{children:i})})]})}},2950:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a=(e,t)=>""===e||""===t?`${e}${t}`:`${e} ${t}`},1112:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o,metadata:()=>s});var a=r(7705);r(5023);let s={title:"fantre-ファントレ!",description:"グッズのコレクションがどんどん増える！"},o=({children:e})=>(0,a.jsx)("html",{lang:"ja",children:(0,a.jsx)("body",{children:(0,a.jsx)("main",{className:"max-w-screen-xl mx-auto w-full h-screen min-w-[352px] min-h-[600px] X-mob:min-w-[600px] X-mob:min-h-[352px] relative",children:e})})})},1589:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(7705),s=r(6217);let o=({imageSrc:e=""})=>""===e?null:(0,a.jsx)(s.default,{fill:!0,src:e,alt:"背景として表示する画像です",style:{objectFit:"contain"},priority:!0})},7820:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(7705),s=r(2716),o=r(3496);let i=({children:e,href:t,addClass:r=""})=>{let i=(0,s.Z)("block bg-my-yellow w-60 h-[40px] mx-auto rounded-3xl overflow-hidden hover:opacity-80",r);return(0,a.jsx)(o.default,{href:t,className:i,children:(0,a.jsx)("p",{className:"py-2",children:e})})}},5466:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(7705),s=r(6217);let o=()=>(0,a.jsx)(s.default,{fill:!0,src:"/MonitorDecorationsImage.svg",alt:"モニターの台座・コード・びりびりマークの見た目を表現する画像です"}),i=()=>(0,a.jsx)(s.default,{fill:!0,src:"/PowerButtonImage.svg",alt:"電源ボタンの見た目を表現する画像です",className:"hidden X-tab:block row-start-3 col-start-6 col-end-7"}),n=({headerContent:e,viewContent:t,naviContent:r,footerContent:s})=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("section",{className:"grid relative w-full h-full rounded-[50px] bg-my-light-blue grid-rows-[40px_5fr_20px_4fr_40px] grid-cols-[20px_30px_1fr_30px_20px] X-mob:grid-rows-[40px_1fr_40px] X-mob:grid-cols-[50px_5fr_20px_4fr_50px] X-tab:h-[calc(100%-50px)] X-tab:grid-rows-[40px_1fr_40px] X-tab:grid-cols-[20px_5fr_54fr_20px_26fr_6fr_20px]",children:[(0,a.jsx)("section",{className:"flex items-center justify-end col-start-3 col-end-4 X-tab:col-end-6 X-mob:col-start-4 X-mob:col-end-5",children:e}),(0,a.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto relative row-start-2 row-end-3 col-start-2 col-end-5 X-tab:col-end-4 X-mob:col-end-3",children:t}),(0,a.jsx)("section",{className:"bg-my-gray rounded-[32px] overflow-auto row-start-4 row-end-5 col-start-2 col-end-5 X-mob:row-start-2 X-mob:row-end-3 X-mob:col-start-4 X-mob:col-end-5 X-tab:row-start-2 X-tab:row-end-3 X-tab:col-start-5 X-tab:col-end-7 ",children:r}),(0,a.jsx)("section",{className:"flex justify-end row-start-5 col-start-3 col-end-4 X-tab:row-start-3 X-tab:col-end-6 X-mob:row-start-1 X-mob:row-end-2 X-mob:col-start-2 X-mob:col-end-3",children:s}),(0,a.jsx)(i,{})]}),(0,a.jsx)("div",{className:"relative w-full h-[50px] hidden X-tab:block",children:(0,a.jsx)(o,{})})]})},7176:(e,t,r)=>{"use strict";r.d(t,{BJ:()=>m,F6:()=>n,FX:()=>s,Rw:()=>i,SL:()=>c,cy:()=>a,gR:()=>l,pb:()=>o});let a=["series_name","character_name","item_name","tags","category_id","jan_code","release_date","retailers"],s={series:"item_series",character:"item_character",name:"item_name",tags:"tags",category:"category",janCode:"jan_code",releaseDate:"release_date",retailers:"retailers",image:"item_images"},o={name:"custom_item_name",series:"custom_series_name",character:"custom_character_name",category:"custom_category_name",tags:"custom_item_tags",retailers:"custom_item_retailers"},i={name:"user_name",email:"email",pass1:"password1",pass2:"password2"},n={maxAge:1e6,httpOnly:!0},l="Bearer ",c=["image/png","image/jpg","image/jpeg"],m="/no-image.svg"},4430:(e,t,r)=>{"use strict";r.d(t,{default:()=>a});let a=(0,r(8105).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/home/yuichi/fantre/frontend/src/features/common/uploadImage/ImageUploadForm.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/home/yuichi/fantre/frontend/src/features/common/uploadImage/ImageUploadForm.tsx","default")},8538:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(3722);r(453);let s=async(e,t,r,a)=>{let s=new FormData;for(let t of e.entries()){let e=t[0],r=t[1].toString();r.length&&e.startsWith("custom")&&s.set(e,r)}let o=`${r}itemDetail?item_id=${a}`;await fetch(o,{method:"POST",headers:t,body:s})};var o=r(4092),i=r(2557),n=r(6309);let l=async(e,t,r="",a)=>{let n=(await (0,o.Qk)()).get("fantre");if(console.log(n),!n)return;let l=new Headers({Cookie:n.value}),c="http://57.180.44.232/api/",m=new URLSearchParams([["endpoint",a]]);""!==r&&m.set("itemId",r),e.get("custom_item_name")&&s(e,l,c,r);let d="";if("itemCreate"===a){let t=new FormData;for(let[r,a]of e.entries())""!==a&&t.set(r,a.toString());let r=await fetch(`${c}items/create`,{method:"POST",headers:l,body:t});if(200!==r.status)return 500;d=(await r.json())._id,m.set("itemId",d)}let u=e.get(t);if(0===u.size&&"itemCreate"===a)return(0,i.redirect)(`/items/${d}`);if(0===u.size)return d;if(u.size>=1048576)return;let f=new FormData;f.set(t,u),console.log(f);let h=`${c}uploadImage?${m}`;await fetch(h,{method:"POST",headers:l,body:f}).then(e=>{if(200===e.status){if("top"===a&&(0,i.redirect)("/"),"itemDetail"===a&&(0,i.redirect)(`/items/${r}`),"itemCreate"===a)return(0,i.redirect)(`/items/${d}`)}else if("items/create"===a)return 206})},c=l;(0,n.h)([l]),(0,a.j)(l,"7f3e065f84c9ca672f6eb5c71323873c2f8bb8249b",null)},2716:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a=(e,t)=>""===e||""===t?`${e}${t}`:`${e} ${t}`},8551:(e,t,r)=>{"use strict";r.d(t,{$z:()=>i,Jn:()=>n,M1:()=>l,fs:()=>o});var a=r(8051);let s="http://57.180.44.232/api/",o=async(e,t)=>{let r=(await (0,a.Qk)()).get("fantre");if(!r)return Response.error();let o=new Headers({cookie:r.value}),i=`${s}${e}?${t}`,n=await fetch(i,{headers:o});return 200!==n.status?null:n.json()},i=async e=>{let t=(await (0,a.Qk)()).get("fantre");if(!t)return Response.error();let r=`${s}${e}`,o=new URLSearchParams([["currentPage","1"]]),i=`${r}?${o}`,n=await fetch(i,{headers:{cookie:t.value}});return 200!==n.status?null:n.json()},n=async e=>{let t=(await (0,a.Qk)()).get("fantre");if(!t)return Response.error();let r=`http://57.180.44.232/api//getImageUrl?endpoint=${e}`,s=await fetch(r,{headers:{cookie:t.value}});return s?.status===200?await s.json():null},l=async()=>{let e=(await (0,a.Qk)()).get("fantre");if(!e)return Response.error();let t=`${s}lists`,r=await fetch(t,{headers:{cookie:e.value}});return 200!==r.status?null:r.json()}},4206:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var a=r(8412);let s=(0,a.createServerReference)("7f3e065f84c9ca672f6eb5c71323873c2f8bb8249b",a.callServer,void 0,a.findSourceMapURL,"default")},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(5394);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},5023:()=>{}};