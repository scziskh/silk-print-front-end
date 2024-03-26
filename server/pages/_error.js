(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},8826:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>h,default:()=>d,getServerSideProps:()=>u,getStaticPaths:()=>p,getStaticProps:()=>c,reportWebVitals:()=>x,routeModule:()=>v,unstable_getServerProps:()=>b,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>m,unstable_getStaticPaths:()=>f,unstable_getStaticProps:()=>g});var i=r(7093),n=r(5244),a=r(1323),s=r(8203),o=r(783),l=r(8539);let d=(0,a.l)(l,"default"),c=(0,a.l)(l,"getStaticProps"),p=(0,a.l)(l,"getStaticPaths"),u=(0,a.l)(l,"getServerSideProps"),h=(0,a.l)(l,"config"),x=(0,a.l)(l,"reportWebVitals"),g=(0,a.l)(l,"unstable_getStaticProps"),f=(0,a.l)(l,"unstable_getStaticPaths"),m=(0,a.l)(l,"unstable_getStaticParams"),b=(0,a.l)(l,"unstable_getServerProps"),y=(0,a.l)(l,"unstable_getServerSideProps"),v=new i.PagesRouteModule({definition:{kind:n.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:o.default,Document:s.default},userland:l})},8539:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let i=r(167),n=r(997),a=i._(r(6689)),s=i._(r(6665)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends a.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,n.jsxs)("div",{style:d.error,children:[(0,n.jsx)(s.default,{children:(0,n.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,n.jsxs)("div",{style:d.desc,children:[(0,n.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,n.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,n.jsx)("div",{style:d.wrap,children:(0,n.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,n.jsx)(n.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9379:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var i=r(997),n=r(7518),a=r.n(n);let s=({children:e})=>i.jsx(o,{children:e}),o=a().div.withConfig({componentId:"sc-aa355d42-0"})(["position:relative;width:1280px;margin:0 auto;height:100%;@media screen and (max-width:1366px){width:1160px;}@media screen and (max-width:1280px){width:968px;}@media screen and (max-width:1024px){width:95%;}"])},783:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var i=r(997),n=r(7518),a=r.n(n),s=r(503);r(108);var o=r(1163),l=r(9379),d=r(1664),c=r.n(d);let p=e=>i.jsx(u,{children:i.jsx(c(),{href:e.href,children:e.label})}),u=a().li.withConfig({componentId:"sc-cdb903b3-0"})(["a{color:var(--contrastColor);display:block;text-decoration:none;text-align:center;text-transform:uppercase;white-space:nowrap;&::after{content:'';display:block;height:2px;margin-top:5px;background:var(--secondaryGrad);width:100%;transform:translateY(5px);opacity:0;transition-duration:var(--transitionDuration);}&:hover:after{transform:translateY(0);opacity:1;}}"]);var h=r(6689);let x=()=>{let e=(0,s.useTranslations)("MainMenu"),t=(0,h.useRef)(),r=(0,o.useRouter)(),[n,a]=(0,h.useState)(!1),[l,d]=(0,h.useState)(!1);(0,h.useEffect)(()=>d(!0),[]),(0,h.useEffect)(()=>a(!1),[r]);let c=[{href:"/",label:e("homepage")},{href:"/services",label:e("services")},{href:"/products",label:e("products")},{href:"/our-works",label:e("our-works")},{href:"/contacts",label:e("contacts")}];return l?(0,i.jsxs)(g,{children:[i.jsx("input",{type:"checkbox",id:"menu_toggle",ref:t,checked:n,readOnly:!0}),i.jsx("label",{htmlFor:"menu_toggle",onClick:()=>a(e=>!e),children:i.jsx("span",{})}),i.jsx("ul",{children:c.map((e,t)=>i.jsx(p,{...e},t))})]}):i.jsx(i.Fragment,{})},g=a().nav.withConfig({componentId:"sc-7625cb6e-0"})(["display:flex;align-items:center;input{opacity:0;@media screen and (max-width:768px){visibility:visible;}&:checked ~ label > span{transform:rotate(45deg);}&:checked ~ label > span::before{top:0;transform:rotate(0);}&:checked ~ label > span::after{top:0;transform:rotate(90deg);}&:checked ~ ul{right:0;}}label{display:none;position:absolute;right:0;align-items:center;justify-content:center;width:36px;height:36px;padding:10px;cursor:pointer;z-index:99;& > span,& > span::before,& > span::after{display:block;position:absolute;width:28px;height:2px;background:var(--contrastGrad);transition-duration:var(--transitionDuration);}& > span::before{content:'';top:-10px;}& > span::after{content:'';top:10px;}@media screen and (max-width:1024px){display:flex;}}ul{display:flex;list-style:none;gap:24px;@media screen and (max-width:1024px){display:block;position:fixed;width:320px;top:0;right:-100%;height:100%;padding:80px;margin:0;background:var(--mainGrad);box-shadow:var(--darkShadow);z-index:49;transition-duration:var(--transitionDuration);li{display:flex;justify-content:center;text-align:center;padding:16px 0;}}}"]);var f=r(5675),m=r.n(f);let b=()=>{let e=(0,s.useTranslations)("Logo");return i.jsx(y,{children:i.jsx(c(),{href:"/",children:i.jsx(m(),{src:"/assets/logo.svg",alt:e("alt"),title:e("title"),width:155,height:40})})})},y=a().div.withConfig({componentId:"sc-c38da933-0"})(["width:155px;height:40px;"]),v=()=>i.jsx(j,{children:i.jsx(l.Z,{children:(0,i.jsxs)(P,{children:[i.jsx(b,{}),i.jsx(x,{})]})})}),j=a().header.withConfig({componentId:"sc-1bfa5d81-0"})(["width:100%;height:80px;background:var(--mainGrad);box-shadow:var(--darkShadow);z-index:99;"]),P=a().div.withConfig({componentId:"sc-1bfa5d81-1"})(["display:grid;grid-template-columns:repeat(2,1fr);align-items:center;height:100%;"]);function S({children:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(v,{}),i.jsx("main",{children:e})]})}let w=({Component:e,pageProps:t})=>{let r=(0,o.useRouter)();return(0,i.jsxs)(s.NextIntlClientProvider,{locale:r.locale,timeZone:"Europe/Kyiv",messages:t.messages,children:[i.jsx(_,{}),i.jsx(S,{children:i.jsx(e,{...t})})]})},_=(0,n.createGlobalStyle)([":root{--mainColor:#1f2129;--mainGrad:linear-gradient(60deg,#313131 0%,#313739 100%);;--secondaryColor:#d4af37;--secondaryGrad:linear-gradient(60deg,#d4af37 0%,#bf9b30 100%);--contrastGrad:linear-gradient(60deg,rgba(252,252,255,1) 0%,rgba(240,240,242,1) 100%);--contrastColor:white;--transitionDuration:0.25s;--darkShadow:1px 0px 6px rgba(0,0,0,0.3);--lightShadow:1px 0px 6px rgba(255,255,255,0.5);}"])},8203:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var i=r(997),n=r(6859),a=r.n(n),s=r(7518);class o extends a(){static async getInitialProps(e){let t=new s.ServerStyleSheet,r=e.renderPage;try{e.renderPage=()=>r({enhanceApp:e=>r=>t.collectStyles(i.jsx(e,{...r}))});let n=await a().getInitialProps(e);return{...n,styles:(0,i.jsxs)(i.Fragment,{children:[n.styles,t.getStyleElement()]})}}finally{t.seal()}}}},108:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},503:e=>{"use strict";e.exports=require("next-intl")},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7518:e=>{"use strict";e.exports=require("styled-components")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[255,640,859],()=>r(8826));module.exports=i})();