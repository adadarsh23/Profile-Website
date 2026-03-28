import{r,j as t}from"./index-DsyuzcZj.js";function M({src:o,alt:i,orientation:g="landscape",width:l,height:n,config:x={},onClick:h}){const e={...{spotlightSize:80,overlayOpacity:.6,className:""},...x},[c,p]=r.useState({rotateX:0,rotateY:0}),a=r.useRef(null),f=r.useCallback(u=>{if(!a.current)return;const s=a.current.getBoundingClientRect(),d=(u.clientX-s.left)/s.width*100,m=(u.clientY-s.top)/s.height*100;a.current.style.setProperty("--mouse-x",`${d}%`),a.current.style.setProperty("--mouse-y",`${m}%`);const k=(d-50)/50*8,z=(50-m)/50*8;p({rotateX:z,rotateY:k})},[]),v=()=>{},y=()=>{p({rotateX:0,rotateY:0})},b=()=>l&&n?{width:`${l}px`,height:`${n}px`,maxWidth:"100%"}:g==="landscape"?{width:"800px",height:"450px",maxWidth:"100%"}:{width:"450px",height:"600px",maxWidth:"100%"},$=`
    relative overflow-hidden cursor-none rounded-lg shadow-md border
    ${e.className}
  `.trim();return t.jsx("div",{className:"flex items-center justify-center",children:t.jsxs("div",{ref:a,className:$,onClick:h,onMouseMove:f,onMouseEnter:v,onMouseLeave:y,role:"img","aria-label":i,"aria-describedby":"spotlight-instructions",tabIndex:0,style:{...b(),"--mouse-x":"50%","--mouse-y":"50%","--spotlight-size":`${e.spotlightSize}px`,"--overlay-opacity":e.overlayOpacity,transform:`perspective(1000px) rotateX(${c.rotateX}deg) rotateY(${c.rotateY}deg)`,transformStyle:"preserve-3d",transition:"transform 0.2s ease-out"},children:[t.jsx("div",{id:"spotlight-instructions",className:"sr-only",children:"Interactive image with mouse spotlight effect. Move your mouse over the image to reveal different areas."}),t.jsx("img",{src:o,alt:i,className:"absolute inset-0 w-full h-full object-cover",draggable:!1,style:{filter:"blur(0px)"}}),t.jsx("img",{src:o,alt:"",className:"absolute inset-0 w-full h-full object-cover",draggable:!1,style:{maskImage:`radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              black ${e.spotlightSize*.4}px,
              transparent ${e.spotlightSize*1.6}px
            )`,WebkitMaskImage:`radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              black ${e.spotlightSize*.4}px,
              transparent ${e.spotlightSize*1.6}px
            )`,zIndex:2}}),t.jsx("div",{className:"absolute inset-0 bg-black will-change-[mask-position] transition-all duration-100 ease-out",style:{opacity:e.overlayOpacity,maskImage:`radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              transparent ${e.spotlightSize*.4}px,
              black ${e.spotlightSize*1.6}px
            )`,WebkitMaskImage:`radial-gradient(
              circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              transparent ${e.spotlightSize*.4}px,
              black ${e.spotlightSize*1.6}px
            )`,zIndex:10}})]})})}export{M as default};
