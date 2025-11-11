const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PillNav-CJ2S9G7m.js","assets/vendor_react-dEWb8ZBQ.js","assets/vendor-BydJ7EqF.js","assets/vendor_react-dom-Bh-7mpZz.js","assets/Home-BasWljGI.js","assets/About-ChDe_1vW.js","assets/bubble.module-Bdvz9-Ck.js","assets/bubble-C_vl8Ga6.css","assets/Contact-iAeNF4m_.js","assets/Sample-D5QBlEiR.js","assets/Blog-DeL08xHG.js","assets/NotFound-iZXt93b7.js","assets/AnalyticsTracker-Br04__j3.js","assets/IpLogger-BUFqh6hV.js","assets/ScrollToTopButton-D34HJQwu.js","assets/InternetStatus-DW87cWlz.js","assets/CacheClean-8p3Wfar9.js","assets/WebSocket-Dw-yJvGa.js","assets/LiquidCursor-C8fE25l5.js","assets/utils-CIwkceQC.js","assets/SplashCursor-DZsumxbJ.js","assets/SmoothScrollProvider-_V2skC60.js","assets/RobotFaceWrapper-00bFUILC.js","assets/monitoring-D_Eg50Wk.js"])))=>i.map(i=>d[i]);
import{r as i,j as e,s as x,R as d,_ as r,F as h,b as _,c as j,d as b,e as g,B as y}from"./vendor_react-dEWb8ZBQ.js";import{c as v}from"./vendor_react-dom-Bh-7mpZz.js";import"./vendor-BydJ7EqF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const p of a.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function m(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function u(o){if(o.ep)return;o.ep=!0;const a=m(o);fetch(o.href,a)}})();const c=i.memo(()=>e.jsxs("div",{className:"flex justify-center items-center h-screen w-screen bg-black text-white",children:[e.jsxs("div",{"aria-label":"Loading...",role:"status",className:"flex flex-col items-center space-y-8",children:[e.jsxs("div",{className:"relative w-10 h-10",children:[e.jsx("div",{className:"absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.8)]"}),e.jsx("div",{className:"absolute inset-0 border-4 border-gray-400 border-b-transparent rounded-full animate-spin-slow shadow-[0_0_20px_rgba(255,255,255,0.6)]"}),e.jsx("div",{className:"absolute inset-0 border-2 border-white border-l-transparent rounded-full animate-spin-fast shadow-[0_0_25px_rgba(255,255,255,0.4)]"})]}),e.jsxs("div",{className:"flex space-x-2 text-xl font-semibold tracking-wider text-white",children:[e.jsx("span",{className:"animate-pulse-neon",children:"Loading"}),e.jsx("span",{className:"animate-bounce-neon delay-0",children:"."}),e.jsx("span",{className:"animate-bounce-neon delay-200",children:"."}),e.jsx("span",{className:"animate-bounce-neon delay-400",children:"."})]})]}),e.jsx("style",{jsx:"true",children:`
        @keyframes spin-slow {
          0% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        @keyframes spin-fast {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-spin-fast {
          animation: spin-fast 1.5s linear infinite;
        }

        @keyframes pulse-neon {
          0%,
          100% {
            text-shadow:
              0 0 5px #fff,
              0 0 10px #fff,
              0 0 20px #fff;
            opacity: 0.8;
          }
          50% {
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff,
              0 0 30px #fff;
            opacity: 1;
          }
        }
        .animate-pulse-neon {
          animation: pulse-neon 1.5s infinite;
        }

        @keyframes bounce-neon {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.2;
            text-shadow: 0 0 5px #fff;
          }
          40% {
            transform: scale(1);
            opacity: 1;
            text-shadow:
              0 0 10px #fff,
              0 0 20px #fff;
          }
        }
        .animate-bounce-neon {
          animation: bounce-neon 1s infinite;
        }
        .delay-0 {
          animation-delay: 0s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
      `})]})),Y=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),f={environment:{tier:"production"},api:"https://api.statsig.com/v1"},E={userID:"default-user-id",environment:f.environment};function w({children:n}){return e.jsx(x.StatsigProvider,{sdkKey:"client-oQshE1GJ6D2QX2ZxbBfTP3IuxFXs7YXypBgCIgwsepB",user:E,options:f,loadingComponent:e.jsx(c,{}),children:n})}class l extends d.Component{constructor(t){super(t),this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,m){console.error("ErrorBoundary caught an error:",t,m)}render(){return this.state.hasError?this.props.fallback||e.jsxs("div",{className:"error-container",children:[e.jsx("h2",{children:"Something went wrong."}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]}):this.props.children}}const L="/assets/Adarsh-BDG0zI57.png",N=i.lazy(()=>r(()=>import("./PillNav-CJ2S9G7m.js"),__vite__mapDeps([0,1,2,3])));function R(){return e.jsx("nav",{role:"menubar",className:"absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center",children:e.jsx(N,{logo:L,logoAlt:"Adarsh Logo",items:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Sample",href:"/sample"},{label:"Blog",href:"/blog"}],activeHref:"/",className:"custom-nav",ease:"power2.easeOut",baseColor:"#000000",pillColor:"#ffffff",hoveredPillTextColor:"#ffffff",pillTextColor:"#000000"})})}function A(){return e.jsx("footer",{className:"bg-black text-white py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ",children:[e.jsxs("div",{className:" mt-10.5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0",children:[e.jsxs("span",{className:"text-sm text-gray-300 text-center md:text-left",children:["© 2025 - Built by"," ",e.jsx("a",{href:"https://github.com/adadarsh23",target:"_blank",rel:"noopener noreferrer",className:"text-white font-semibold hover:text-gray-400 transition-colors duration-300",children:"Ad Adarsh"}),". All Rights Reserved."]}),e.jsxs("div",{className:"flex space-x-4",children:[e.jsx("a",{href:"https://github.com/adadarsh23",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300","aria-label":"Github",children:e.jsx(h,{size:20})}),e.jsx("a",{href:"https://linkedin.com/in/adadarsh23",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300","aria-label":"Linkedin",children:e.jsx(_,{size:20})}),e.jsx("a",{href:"https://twitter.com/adadarsh23",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300","aria-label":"Twitter",children:e.jsx(j,{size:20})})]})]}),e.jsx("hr",{className:"my-6 border-gray-700"}),e.jsx("p",{className:"text-xs text-gray-400 text-center",children:"Designed with ❤️ by Ad Adarsh"})]})})}const s=n=>d.lazy(()=>n.catch(t=>(console.error("Failed to load component:",t),{default:()=>null}))),P=s(r(()=>import("./Home-BasWljGI.js"),__vite__mapDeps([4,1,2,3]))),T=s(r(()=>import("./About-ChDe_1vW.js"),__vite__mapDeps([5,1,2,3,6,7]))),O=s(r(()=>import("./Contact-iAeNF4m_.js"),__vite__mapDeps([8,1,2,3,6,7]))),I=s(r(()=>import("./Sample-D5QBlEiR.js"),__vite__mapDeps([9,1,2,3,6,7]))),k=s(r(()=>import("./Blog-DeL08xHG.js"),__vite__mapDeps([10,1,2,3,6,7]))),D=s(r(()=>import("./NotFound-iZXt93b7.js"),__vite__mapDeps([11,1,2,3]))),S=s(r(()=>import("./AnalyticsTracker-Br04__j3.js"),__vite__mapDeps([12,1,2,3]))),C=s(r(()=>import("./IpLogger-BUFqh6hV.js"),__vite__mapDeps([13,1,2,3]))),V=s(r(()=>import("./ScrollToTopButton-D34HJQwu.js"),__vite__mapDeps([14,1,2,3]))),B=s(r(()=>import("./InternetStatus-DW87cWlz.js"),__vite__mapDeps([15,1,2,3]))),z=s(r(()=>import("./CacheClean-8p3Wfar9.js"),__vite__mapDeps([16,1,2,3]))),F=s(r(()=>import("./WebSocket-Dw-yJvGa.js"),__vite__mapDeps([17,1,2,3]))),q=s(r(()=>import("./LiquidCursor-C8fE25l5.js"),__vite__mapDeps([18,1,2,3,19])).then(n=>({default:n.LiquidCursor}))),G=s(r(()=>import("./SplashCursor-DZsumxbJ.js"),__vite__mapDeps([20,1,2,3]))),K=s(r(()=>import("./SmoothScrollProvider-_V2skC60.js"),__vite__mapDeps([21,1,2,3]))),X=s(r(()=>import("./RobotFaceWrapper-00bFUILC.js"),__vite__mapDeps([22,1,2,3])));function H(){return i.useEffect(()=>{r(async()=>{const{initLogRocket:n,initSentry:t}=await import("./monitoring-D_Eg50Wk.js");return{initLogRocket:n,initSentry:t}},__vite__mapDeps([23,2,1,3])).then(({initLogRocket:n,initSentry:t})=>{n(),t()})},[]),e.jsx(w,{children:e.jsx(l,{children:e.jsxs("div",{className:"app-container",children:[e.jsx("header",{children:e.jsx(R,{})}),e.jsx(l,{fallback:null,children:e.jsxs(i.Suspense,{fallback:null,children:[e.jsx(S,{}),e.jsx(C,{}),e.jsx(F,{}),e.jsx("div",{className:"hidden md:block",children:e.jsx(q,{size:20})}),e.jsx(G,{}),e.jsx(K,{}),e.jsx(X,{})]})}),e.jsx("main",{children:e.jsx(l,{fallback:e.jsxs("div",{className:"error-fallback",children:[e.jsx("h2",{children:"Unable to load content"}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Try Again"})]}),children:e.jsx(i.Suspense,{fallback:e.jsx(c,{}),children:e.jsx(b,{children:[{path:"/",element:e.jsx(P,{})},{path:"/about",element:e.jsx(T,{})},{path:"/contact",element:e.jsx(O,{})},{path:"/sample",element:e.jsx(I,{})},{path:"/blog",element:e.jsx(k,{})},{path:"*",element:e.jsx(D,{})}].map(({path:n,element:t})=>e.jsx(g,{path:n,element:e.jsx(l,{children:e.jsx(i.Suspense,{fallback:e.jsx(c,{}),children:t})})},n))})})})}),e.jsx(l,{fallback:null,children:e.jsx(i.Suspense,{fallback:null,children:e.jsxs("div",{className:"enhancement-components",children:[e.jsx(B,{}),e.jsx(V,{}),e.jsx(z,{})]})})}),e.jsx("footer",{children:e.jsx(A,{})})]})})})}const M=document.getElementById("root"),Q=v.createRoot(M);if(!d.Children)throw console.error("React.Children is not available - React not properly initialized"),new Error("React initialization failed");Q.render(e.jsx(d.StrictMode,{children:e.jsx(y,{children:e.jsx(H,{})})}));export{c as L,Y as a,L as l};
