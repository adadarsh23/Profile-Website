import{r as s,g as l,j as X}from"./index-DsyuzcZj.js";import{c as Y}from"./utils-BQHNewu7.js";let R=typeof document<"u"?s.useLayoutEffect:s.useEffect,E=t=>t&&!Array.isArray(t)&&typeof t=="object",g=[],F={},A=l;const b=(t,e=g)=>{let r=F;E(t)?(r=t,t=null,e="dependencies"in r?r.dependencies:g):E(e)&&(r=e,e="dependencies"in r?r.dependencies:g),t&&typeof t!="function"&&console.warn("First parameter must be a function or config object");const{scope:i,revertOnUpdate:o}=r,a=s.useRef(!1),n=s.useRef(A.context(()=>{},i)),x=s.useRef(m=>n.current.add(null,m)),d=e&&e.length&&!o;return d&&R(()=>(a.current=!0,()=>n.current.revert()),g),R(()=>{if(t&&n.current.add(t,i),!d||!a.current)return()=>n.current.revert()},e),{context:n.current,contextSafe:x.current}};b.register=t=>{A=t};b.headless=!0;const N=({size:t=40,strong:e=!1,className:r,...i})=>{const o=s.useRef(null),a=s.useRef({x:0,y:0}),n=s.useRef(0);b(()=>{const m=()=>{o.current&&l.to(o.current,{scale:1.3,duration:.3,ease:"power2.out",onComplete:()=>{l.to(o.current,{scale:1,duration:.4,ease:"bounce.out"})}})},h=c=>{if(!o.current)return;const f=c.clientX-a.current.x,p=c.clientY-a.current.y,C=Math.sqrt(f*f+p*p);let u=Math.atan2(p,f)*(180/Math.PI)-n.current;u>180&&(u-=360),u<-180&&(u+=360);const y=n.current+u*.2,v=Math.min(C/30,1.2),w=Math.abs(f),L=Math.abs(p),M=w+L||1,S=w/M,j=1+S*v,D=1-S*v*.3;l.to(o.current,{duration:1,left:c.clientX-t/2,top:c.clientY-t/2,scaleX:j,scaleY:D,rotate:y,ease:"power2.out"}),n.current=y,a.current={x:c.clientX,y:c.clientY}};return window.addEventListener("click",m),window.addEventListener("mousemove",h),()=>window.removeEventListener("mousemove",h)},[]);const x={background:`
  radial-gradient(circle, 
    rgba(255, 255, 255, 0.25) 90%,  
    rgba(255, 255, 255, 0.1) 70%, 
    transparent 20%                
  )
`,border:"1px solid rgba(255, 255, 255, 0.25)"},d={background:`
    radial-gradient(125.95% 106.37% at 32.61% 3.41%,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(255, 255, 255, 0.45) 28.13%,
    rgba(252, 252, 252, 0.35) 45.31%,
    rgba(248, 248, 248, 0.3) 66.67%,
    rgba(243, 243, 243, 0.25) 100%)
  `,boxShadow:`
    0 8px 16px rgba(0, 0, 0, 0.1),
    inset -4px -8px 12px rgba(255, 255, 255, 0.05),
    inset 3px 3px 8px rgba(240, 240, 240, 0.04),
    inset 5px 10px 14px rgba(255, 255, 255, 0.03)
  `,border:"1px solid rgba(255, 255, 255, 0.2)"};return X.jsx("div",{...i,ref:o,className:Y("pointer-events-none fixed z-999 rounded-full saturate-[180%] backdrop-blur-[2px]","dark:saturate-[160%] dark:backdrop-brightness-[0.8]",r),style:{height:t,width:t,...e?d:x}})};export{N as LiquidCursor};
