import{r as i,g as E,j as D}from"./vendor_react-Ds5Dw94k.js";import{b as u}from"./vendor-CthcAJlN.js";import{c as L}from"./utils-Dyalv6Xw.js";import"./vendor_react-dom-BnmT66wm.js";const F=({size:o=40,strong:b=!1,className:m,...h})=>{const t=i.useRef(null),s=i.useRef({x:0,y:0}),c=i.useRef(0);E(()=>{const w=()=>{t.current&&u.to(t.current,{scale:1.3,duration:.3,ease:"power2.out",onComplete:()=>{u.to(t.current,{scale:1,duration:.4,ease:"bounce.out"})}})},l=r=>{if(!t.current)return;const n=r.clientX-s.current.x,a=r.clientY-s.current.y,k=Math.sqrt(n*n+a*a);let e=Math.atan2(a,n)*(180/Math.PI)-c.current;e>180&&(e-=360),e<-180&&(e+=360);const d=c.current+e*.2,p=Math.min(k/30,1.2),g=Math.abs(n),y=Math.abs(a),S=g+y||1,x=g/S,M=1+x*p,R=1-x*p*.3;u.to(t.current,{duration:1,left:r.clientX-o/2,top:r.clientY-o/2,scaleX:M,scaleY:R,rotate:d,ease:"power2.out"}),c.current=d,s.current={x:r.clientX,y:r.clientY}};return window.addEventListener("click",w),window.addEventListener("mousemove",l),()=>window.removeEventListener("mousemove",l)},[]);const f={background:`
  radial-gradient(circle, 
    rgba(255, 255, 255, 0.25) 90%,  
    rgba(255, 255, 255, 0.1) 70%, 
    transparent 20%                
  )
`,border:"1px solid rgba(255, 255, 255, 0.25)"},v={background:`
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
  `,border:"1px solid rgba(255, 255, 255, 0.2)"};return D.jsx("div",{...h,ref:t,className:L("pointer-events-none fixed z-999 rounded-full saturate-[180%] backdrop-blur-[2px]","dark:saturate-[160%] dark:backdrop-brightness-[0.8]",m),style:{height:o,width:o,...b?v:f}})};export{F as LiquidCursor};
//# sourceMappingURL=LiquidCursor-JGzVc7Np.js.map
