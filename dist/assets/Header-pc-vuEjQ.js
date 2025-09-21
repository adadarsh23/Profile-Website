import{r as a,j as p}from"./vendor_react-C-K7p2hN.js";import{m as K}from"./vendor_framer-motion-b70fAXUv.js";import{ai as Z,aj as $,ak as J,al as Q,am as ee}from"./vendor-2cjakllK.js";const te=(s,n)=>{const c=new Set([...Object.keys(s),...n.flatMap(o=>Object.keys(o))]),l={};return c.forEach(o=>{l[o]=[s[o],...n.map(u=>u[o])]}),l},ne=({text:s="",delay:n=200,className:c="",animateBy:l="words",direction:o="top",threshold:u=.1,rootMargin:f="0px",animationFrom:b,animationTo:P,easing:x=d=>d,onAnimationComplete:S,stepDuration:E=.35})=>{const d=l==="words"?s.split(" "):s.split(""),[I,F]=a.useState(!1),T=a.useRef(null);a.useEffect(()=>{if(!T.current)return;const t=new IntersectionObserver(([e])=>{e.isIntersecting&&(F(!0),t.unobserve(T.current))},{threshold:u,rootMargin:f});return t.observe(T.current),()=>t.disconnect()},[u,f]);const M=a.useMemo(()=>o==="top"?{filter:"blur(10px)",opacity:0,y:-50}:{filter:"blur(10px)",opacity:0,y:50},[o]),O=a.useMemo(()=>[{filter:"blur(5px)",opacity:.5,y:o==="top"?5:-5},{filter:"blur(0px)",opacity:1,y:0}],[o]),C=b??M,A=P??O,R=A.length+1,r=E*(R-1),N=Array.from({length:R},(t,e)=>R===1?0:e/(R-1));return p.jsx("p",{ref:T,className:`blur-text ${c} flex flex-wrap`,children:d.map((t,e)=>{const j=te(C,A),h={duration:r,times:N,delay:e*n/1e3};return h.ease=x,p.jsxs(K.span,{className:"inline-block will-change-[transform,filter,opacity]",initial:C,animate:I?j:C,transition:h,onAnimationComplete:e===d.length-1?S:void 0,children:[t===" "?" ":t,l==="words"&&e<d.length-1&&" "]},e)})})},re=`#version 300 es
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
}
`,ae=`#version 300 es
precision highp float;
precision highp int;

out vec4 fragColor;

uniform vec2  uResolution;
uniform float uTime;

uniform float uIntensity;
uniform float uSpeed;
uniform int   uAnimType;
uniform vec2  uMouse;
uniform int   uColorCount;
uniform float uDistort;
uniform vec2  uOffset;
uniform sampler2D uGradient;
uniform float uNoiseAmount;
uniform int   uRayCount;

float hash21(vec2 p){
    p = floor(p);
    float f = 52.9829189 * fract(dot(p, vec2(0.065, 0.005)));
    return fract(f);
}

mat2 rot30(){ return mat2(0.8, -0.5, 0.5, 0.8); }

float layeredNoise(vec2 fragPx){
    vec2 p = mod(fragPx + vec2(uTime * 30.0, -uTime * 21.0), 1024.0);
    vec2 q = rot30() * p;
    float n = 0.0;
    n += 0.40 * hash21(q);
    n += 0.25 * hash21(q * 2.0 + 17.0);
    n += 0.20 * hash21(q * 4.0 + 47.0);
    n += 0.10 * hash21(q * 8.0 + 113.0);
    n += 0.05 * hash21(q * 16.0 + 191.0);
    return n;
}

vec3 rayDir(vec2 frag, vec2 res, vec2 offset, float dist){
    float focal = res.y * max(dist, 1e-3);
    return normalize(vec3(2.0 * (frag - offset) - res, focal));
}

float edgeFade(vec2 frag, vec2 res, vec2 offset){
    vec2 toC = frag - 0.5 * res - offset;
    float r = length(toC) / (0.5 * min(res.x, res.y));
    float x = clamp(r, 0.0, 1.0);
    float q = x * x * x * (x * (x * 6.0 - 15.0) + 10.0);
    float s = q * 0.5;
    s = pow(s, 1.5);
    float tail = 1.0 - pow(1.0 - s, 2.0);
    s = mix(s, tail, 0.2);
    float dn = (layeredNoise(frag * 0.15) - 0.5) * 0.0015 * s;
    return clamp(s + dn, 0.0, 1.0);
}

mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0,0.0,0.0, 0.0,c,-s, 0.0,s,c); }
mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c,0.0,s, 0.0,1.0,0.0, -s,0.0,c); }
mat3 rotZ(float a){ float c = cos(a), s = sin(a); return mat3(c,-s,0.0, s,c,0.0, 0.0,0.0,1.0); }

vec3 sampleGradient(float t){
    t = clamp(t, 0.0, 1.0);
    return texture(uGradient, vec2(t, 0.5)).rgb;
}

vec2 rot2(vec2 v, float a){
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c) * v;
}

float bendAngle(vec3 q, float t){
    float a = 0.8 * sin(q.x * 0.55 + t * 0.6)
            + 0.7 * sin(q.y * 0.50 - t * 0.5)
            + 0.6 * sin(q.z * 0.60 + t * 0.7);
    return a;
}

void main(){
    vec2 frag = gl_FragCoord.xy;
    float t = uTime * uSpeed;
    float jitterAmp = 0.1 * clamp(uNoiseAmount, 0.0, 1.0);
    vec3 dir = rayDir(frag, uResolution, uOffset, 1.0);
    float marchT = 0.0;
    vec3 col = vec3(0.0);
    float n = layeredNoise(frag);
    vec4 c = cos(t * 0.2 + vec4(0.0, 33.0, 11.0, 0.0));
    mat2 M2 = mat2(c.x, c.y, c.z, c.w);
    float amp = clamp(uDistort, 0.0, 50.0) * 0.15;

    mat3 rot3dMat = mat3(1.0);
    if(uAnimType == 1){
      vec3 ang = vec3(t * 0.31, t * 0.21, t * 0.17);
      rot3dMat = rotZ(ang.z) * rotY(ang.y) * rotX(ang.x);
    }
    mat3 hoverMat = mat3(1.0);
    if(uAnimType == 2){
      vec2 m = uMouse * 2.0 - 1.0;
      vec3 ang = vec3(m.y * 0.6, m.x * 0.6, 0.0);
      hoverMat = rotY(ang.y) * rotX(ang.x);
    }

    for (int i = 0; i < 44; ++i) {
        vec3 P = marchT * dir;
        P.z -= 2.0;
        float rad = length(P);
        vec3 Pl = P * (10.0 / max(rad, 1e-6));

        if(uAnimType == 0){
            Pl.xz *= M2;
        } else if(uAnimType == 1){
      Pl = rot3dMat * Pl;
        } else {
      Pl = hoverMat * Pl;
        }

        float stepLen = min(rad - 0.3, n * jitterAmp) + 0.1;

        float grow = smoothstep(0.35, 3.0, marchT);
        float a1 = amp * grow * bendAngle(Pl * 0.6, t);
        float a2 = 0.5 * amp * grow * bendAngle(Pl.zyx * 0.5 + 3.1, t * 0.9);
        vec3 Pb = Pl;
        Pb.xz = rot2(Pb.xz, a1);
        Pb.xy = rot2(Pb.xy, a2);

        float rayPattern = smoothstep(
            0.5, 0.7,
            sin(Pb.x + cos(Pb.y) * cos(Pb.z)) *
            sin(Pb.z + sin(Pb.y) * cos(Pb.x + t))
        );

        if (uRayCount > 0) {
            float ang = atan(Pb.y, Pb.x);
            float comb = 0.5 + 0.5 * cos(float(uRayCount) * ang);
            comb = pow(comb, 3.0);
            rayPattern *= smoothstep(0.15, 0.95, comb);
        }

        vec3 spectralDefault = 1.0 + vec3(
            cos(marchT * 3.0 + 0.0),
            cos(marchT * 3.0 + 1.0),
            cos(marchT * 3.0 + 2.0)
        );

        float saw = fract(marchT * 0.25);
        float tRay = saw * saw * (3.0 - 2.0 * saw);
        vec3 userGradient = 2.0 * sampleGradient(tRay);
        vec3 spectral = (uColorCount > 0) ? userGradient : spectralDefault;
        vec3 base = (0.05 / (0.4 + stepLen))
                  * smoothstep(5.0, 0.0, rad)
                  * spectral;

        col += base * rayPattern;
        marchT += stepLen;
    }

    col *= edgeFade(frag, uResolution, uOffset);
    col *= uIntensity;

    fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`,oe=s=>{let n=s.trim();if(n.startsWith("#")&&(n=n.slice(1)),n.length===3){const f=n[0],b=n[1],P=n[2];n=f+f+b+b+P+P}const c=parseInt(n,16);if(isNaN(c)||n.length!==6&&n.length!==8)return[1,1,1];const l=(c>>16&255)/255,o=(c>>8&255)/255,u=(c&255)/255;return[l,o,u]},H=s=>{if(s==null)return 0;if(typeof s=="number")return s;const n=String(s).trim(),c=parseFloat(n.replace("px",""));return isNaN(c)?0:c},se=({intensity:s=2,speed:n=.5,animationType:c="rotate3d",colors:l,distort:o=0,paused:u=!1,offset:f={x:0,y:0},hoverDampness:b=0,rayCount:P,mixBlendMode:x="lighten"})=>{const S=a.useRef(null),E=a.useRef(null),d=a.useRef(null),I=a.useRef([.5,.5]),F=a.useRef([.5,.5]),T=a.useRef(u),M=a.useRef(null),O=a.useRef(b),C=a.useRef(!0),A=a.useRef(null),R=a.useRef(null);return a.useEffect(()=>{T.current=u},[u]),a.useEffect(()=>{O.current=b},[b]),a.useEffect(()=>{const r=S.current;if(!r)return;const N=Math.min(window.devicePixelRatio||1,2),t=new Z({dpr:N,alpha:!1,antialias:!1});d.current=t;const e=t.gl;e.canvas.style.position="absolute",e.canvas.style.inset="0",e.canvas.style.width="100%",e.canvas.style.height="100%",e.canvas.style.mixBlendMode=x&&x!=="none"?x:"",r.appendChild(e.canvas);const j=new Uint8Array([255,255,255,255]),h=new $(e,{image:j,width:1,height:1,generateMipmaps:!1,flipY:!1});h.minFilter=e.LINEAR,h.magFilter=e.LINEAR,h.wrapS=e.CLAMP_TO_EDGE,h.wrapT=e.CLAMP_TO_EDGE,M.current=h;const m=new J(e,{vertex:re,fragment:ae,uniforms:{uResolution:{value:[1,1]},uTime:{value:0},uIntensity:{value:1},uSpeed:{value:1},uAnimType:{value:0},uMouse:{value:[.5,.5]},uColorCount:{value:0},uDistort:{value:0},uOffset:{value:[0,0]},uGradient:{value:h},uNoiseAmount:{value:.8},uRayCount:{value:0}}});E.current=m;const y=new Q(e),q=new ee(e,{geometry:y,program:m});R.current=y,A.current=q;const g=()=>{const i=r.clientWidth||1,w=r.clientHeight||1;t.setSize(i,w),m.uniforms.uResolution.value=[e.drawingBufferWidth,e.drawingBufferHeight]};let v=null;"ResizeObserver"in window?(v=new ResizeObserver(g),v.observe(r)):window.addEventListener("resize",g),g();const D=i=>{const w=r.getBoundingClientRect(),Y=(i.clientX-w.left)/Math.max(w.width,1),U=(i.clientY-w.top)/Math.max(w.height,1);I.current=[Math.min(Math.max(Y,0),1),Math.min(Math.max(U,0),1)]};r.addEventListener("pointermove",D,{passive:!0});let L=null;"IntersectionObserver"in window&&(L=new IntersectionObserver(i=>{i[0]&&(C.current=i[0].isIntersecting)},{root:null,threshold:.01}),L.observe(r));const _=()=>{};document.addEventListener("visibilitychange",_);let k=0,V=performance.now(),W=0;const G=i=>{const w=Math.max(0,i-V)*.001;V=i;const Y=C.current&&!document.hidden;if(T.current||(W+=w),!Y){k=requestAnimationFrame(G);return}const U=.02+Math.max(0,Math.min(1,O.current))*.5,X=1-Math.exp(-w/U),B=I.current,z=F.current;z[0]+=(B[0]-z[0])*X,z[1]+=(B[1]-z[1])*X,m.uniforms.uMouse.value=z,m.uniforms.uTime.value=W,t.render({scene:A.current}),k=requestAnimationFrame(G)};return k=requestAnimationFrame(G),()=>{cancelAnimationFrame(k),r.removeEventListener("pointermove",D),v?.disconnect(),v||window.removeEventListener("resize",g),L?.disconnect(),document.removeEventListener("visibilitychange",_);try{r.removeChild(e.canvas)}catch{}try{A.current?.remove?.()}catch{}try{R.current?.remove?.()}catch{}try{E.current?.remove?.()}catch{}try{const i=d.current?.gl;i&&M.current?.texture&&i.deleteTexture(M.current.texture)}catch{}E.current=null,d.current=null,M.current=null,A.current=null,R.current=null}},[]),a.useEffect(()=>{const r=d.current?.gl?.canvas;r&&(r.style.mixBlendMode=x&&x!=="none"?x:"")},[x]),a.useEffect(()=>{const r=E.current,N=d.current,t=M.current;if(!r||!N||!t)return;r.uniforms.uIntensity.value=s??1,r.uniforms.uSpeed.value=n??1;const e={rotate:0,rotate3d:1,hover:2};r.uniforms.uAnimType.value=e[c??"rotate"],r.uniforms.uDistort.value=typeof o=="number"?o:0;const j=H(f?.x),h=H(f?.y);r.uniforms.uOffset.value=[j,h],r.uniforms.uRayCount.value=Math.max(0,Math.floor(P??0));let m=0;if(Array.isArray(l)&&l.length>0){const y=N.gl,q=l.slice(0,64);m=q.length;const g=new Uint8Array(m*4);for(let v=0;v<m;v++){const[D,L,_]=oe(q[v]);g[v*4+0]=Math.round(D*255),g[v*4+1]=Math.round(L*255),g[v*4+2]=Math.round(_*255),g[v*4+3]=255}t.image=g,t.width=m,t.height=1,t.minFilter=y.LINEAR,t.magFilter=y.LINEAR,t.wrapS=y.CLAMP_TO_EDGE,t.wrapT=y.CLAMP_TO_EDGE,t.flipY=!1,t.generateMipmaps=!1,t.format=y.RGBA,t.type=y.UNSIGNED_BYTE,t.needsUpdate=!0}else m=0;r.uniforms.uColorCount.value=m},[s,n,c,l,o,f,P]),p.jsx("div",{className:"w-full h-full relative overflow-hidden",ref:S})};function ue(){const[s,n]=a.useState({x:0,y:0}),c=()=>{};return a.useEffect(()=>{const l=u=>n({x:u.clientX,y:u.clientY}),o=u=>{const f=u.touches[0];n({x:f.clientX,y:f.clientY})};return window.addEventListener("mousemove",l),window.addEventListener("touchmove",o),()=>{window.removeEventListener("mousemove",l),window.removeEventListener("touchmove",o)}},[]),p.jsxs("section",{className:"relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center px-4 sm:px-6 md:px-12",children:[p.jsx("div",{className:"absolute inset-0 w-full h-full pointer-events-none",children:p.jsx(se,{animationType:"hover",intensity:2,speed:.5,distort:1,paused:!1,offset:{x:(s.x/window.innerWidth-.5)*2,y:(s.y/window.innerHeight-.5)*2},hoverDampness:.25,rayCount:24,mixBlendMode:"lighten"})}),p.jsxs("div",{className:"relative z-10 text-center flex flex-col items-center justify-center",children:[p.jsx(ne,{text:"Welcome To Ad Adarsh Profile",delay:100,animateBy:"words",direction:"top",onAnimationComplete:c,className:`\r
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl\r
            font-extrabold\r
            mb-6 sm:mb-8\r
            drop-shadow-[0_0_25px_rgba(255,255,255,0.95)]\r
            flex flex-wrap justify-center items-center\r
            space-x-1 sm:space-x-2\r
            transform transition-all duration-500 hover:scale-105 hover:animate-shine\r
          `,style:{backgroundImage:"linear-gradient(90deg, #ff6ec4, #7873f5, #42e695)",WebkitBackgroundClip:"text",color:"transparent",animation:"shine 3s linear infinite",backgroundSize:"200% 100%"}}),p.jsx("p",{className:"mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl",children:"Explore my projects, music, and web development works. Fully responsive, interactive, and visually engaging on all devices."}),p.jsx("button",{className:"mt-6 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400 text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:bg-gray-700 hover:shadow-2xl transition-transform duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",children:"View Projects"})]}),p.jsx("style",{children:`
          @keyframes shine {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .hover\\:animate-shine:hover {
            animation: shine 2s linear infinite;
            background-size: 200% 100%;
          }
        `})]})}export{ue as default};
