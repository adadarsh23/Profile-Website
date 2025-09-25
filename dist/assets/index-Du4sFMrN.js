const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-DaZEM6MX.js","assets/vendor_react-Dy7FbJ6m.js","assets/vendor-CR2JlbqS.js","assets/vendor_react-dom-qqiilNzR.js","assets/About-CtIr0b7z.js","assets/bubble.module-ga2zaxKg.js","assets/bubble-eNBnBll4.css","assets/vendor_framer-motion-CIhtQ0of.js","assets/Contact-C3OZQqsE.js","assets/Sample-Gw8B4UaZ.js","assets/BlogItems-pA2j4-hX.js","assets/Blog-BjaNfbTE.js","assets/NotFound-CQcZjvT_.js"])))=>i.map(i=>d[i]);
import{j as o,F as rt,b as it,c as ot,r as m,L as _e,R as Ce,u as nt,d as at,e as ne,i as st,B as lt,E as ct}from"./vendor_react-Dy7FbJ6m.js";import{c as ut}from"./vendor_react-dom-qqiilNzR.js";import{ag as g,ah as Ue}from"./vendor-CR2JlbqS.js";(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))Y(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const b of u.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&Y(b)}).observe(document,{childList:!0,subtree:!0});function E(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function Y(d){if(d.ep)return;d.ep=!0;const u=E(d);fetch(d.href,u)}})();const ft="modulepreload",dt=function(R){return"/"+R},Be={},ae=function(w,E,Y){let d=Promise.resolve();if(E&&E.length>0){let Z=function(S){return Promise.all(S.map(O=>Promise.resolve(O).then(k=>({status:"fulfilled",value:k}),k=>({status:"rejected",reason:k}))))};document.getElementsByTagName("link");const b=document.querySelector("meta[property=csp-nonce]"),F=b?.nonce||b?.getAttribute("nonce");d=Z(E.map(S=>{if(S=dt(S),S in Be)return;Be[S]=!0;const O=S.endsWith(".css"),k=O?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${S}"]${k}`))return;const z=document.createElement("link");if(z.rel=O?"stylesheet":ft,O||(z.as="script"),z.crossOrigin="",z.href=S,F&&z.setAttribute("nonce",F),document.head.appendChild(z),O)return new Promise((ee,W)=>{z.addEventListener("load",ee),z.addEventListener("error",()=>W(new Error(`Unable to preload CSS for ${S}`)))})}))}function u(b){const F=new Event("vite:preloadError",{cancelable:!0});if(F.payload=b,window.dispatchEvent(F),!F.defaultPrevented)throw b}return d.then(b=>{for(const F of b||[])F.status==="rejected"&&u(F.reason);return w().catch(u)})};function mt(){return o.jsx("footer",{className:"bg-black text-white py-8",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ",children:[o.jsxs("div",{className:" mt-10.5 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0",children:[o.jsxs("span",{className:"text-sm text-gray-300 text-center md:text-left",children:["© 2025 - Built by"," ",o.jsx("a",{href:"#",target:"_blank",rel:"noopener noreferrer",className:"text-white font-semibold hover:text-gray-400 transition-colors duration-300",children:"Ad Adarsh"}),". All Rights Reserved."]}),o.jsxs("div",{className:"flex space-x-4",children:[o.jsx("a",{href:"https://github.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300",children:o.jsx(rt,{size:20})}),o.jsx("a",{href:"https://linkedin.com/in/yourusername",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300",children:o.jsx(it,{size:20})}),o.jsx("a",{href:"https://twitter.com/yourusername",target:"_blank",rel:"noopener noreferrer",className:"text-white hover:text-gray-400 transition-colors duration-300",children:o.jsx(ot,{size:20})})]})]}),o.jsx("hr",{className:"my-6 border-gray-700"}),o.jsx("p",{className:"text-xs text-gray-400 text-center",children:"Designed with ❤️ and React"})]})})}function ht({SIM_RESOLUTION:R=128,DYE_RESOLUTION:w=1440,CAPTURE_RESOLUTION:E=512,DENSITY_DISSIPATION:Y=3.5,VELOCITY_DISSIPATION:d=2,PRESSURE:u=.1,PRESSURE_ITERATIONS:b=20,CURL:F=3,SPLAT_RADIUS:Z=.2,SPLAT_FORCE:S=6e3,SHADING:O=!0,COLOR_UPDATE_SPEED:k=10,BACK_COLOR:z={r:.5,g:0,b:0},TRANSPARENT:ee=!0}){const W=m.useRef(null);return m.useEffect(()=>{const v=W.current;if(!v)return;function te(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[0,0,0]}let p={SIM_RESOLUTION:R,DYE_RESOLUTION:w,DENSITY_DISSIPATION:Y,VELOCITY_DISSIPATION:d,PRESSURE:u,PRESSURE_ITERATIONS:b,CURL:F,SPLAT_RADIUS:Z,SPLAT_FORCE:S,SHADING:O,COLOR_UPDATE_SPEED:k},j=[new te];const{gl:t,ext:C}=se(v);C.supportLinearFiltering||(p.DYE_RESOLUTION=256,p.SHADING=!1);function se(e){const r={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let i=e.getContext("webgl2",r);const n=!!i;n||(i=e.getContext("webgl",r)||e.getContext("experimental-webgl",r));let a,l;n?(i.getExtension("EXT_color_buffer_float"),l=i.getExtension("OES_texture_float_linear")):(a=i.getExtension("OES_texture_half_float"),l=i.getExtension("OES_texture_half_float_linear")),i.clearColor(0,0,0,1);const f=n?i.HALF_FLOAT:a&&a.HALF_FLOAT_OES;let T,y,V;return n?(T=G(i,i.RGBA16F,i.RGBA,f),y=G(i,i.RG16F,i.RG,f),V=G(i,i.R16F,i.RED,f)):(T=G(i,i.RGBA,i.RGBA,f),y=G(i,i.RGBA,i.RGBA,f),V=G(i,i.RGBA,i.RGBA,f)),{gl:i,ext:{formatRGBA:T,formatRG:y,formatR:V,halfFloatTexType:f,supportLinearFiltering:l}}}function G(e,r,i,n){if(!le(e,r,i,n))switch(r){case e.R16F:return G(e,e.RG16F,e.RG,n);case e.RG16F:return G(e,e.RGBA16F,e.RGBA,n);default:return null}return{internalFormat:r,format:i}}function le(e,r,i,n){const a=e.createTexture();e.bindTexture(e.TEXTURE_2D,a),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,r,4,4,0,i,n,null);const l=e.createFramebuffer();return e.bindFramebuffer(e.FRAMEBUFFER,l),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,a,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE}class de{constructor(r,i){this.vertexShader=r,this.fragmentShaderSource=i,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(r){let i=0;for(let a=0;a<r.length;a++)i+=tt(r[a]);let n=this.programs[i];if(n==null){let a=P(t.FRAGMENT_SHADER,this.fragmentShaderSource,r);n=ce(this.vertexShader,a),this.programs[i]=n}n!==this.activeProgram&&(this.uniforms=me(n),this.activeProgram=n)}bind(){t.useProgram(this.activeProgram)}}class M{constructor(r,i){this.uniforms={},this.program=ce(r,i),this.uniforms=me(this.program)}bind(){t.useProgram(this.program)}}function ce(e,r){let i=t.createProgram();return t.attachShader(i,e),t.attachShader(i,r),t.linkProgram(i),t.getProgramParameter(i,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(i)),i}function me(e){let r=[],i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;n++){let a=t.getActiveUniform(e,n).name;r[a]=t.getUniformLocation(e,a)}return r}function P(e,r,i){r=ue(r,i);const n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(n)),n}function ue(e,r){if(!r)return e;let i="";return r.forEach(n=>{i+="#define "+n+`
`}),i+e}const U=P(t.VERTEX_SHADER,`
        precision highp float;
        attribute vec2 aPosition;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform vec2 texelSize;

        void main () {
            vUv = aPosition * 0.5 + 0.5;
            vL = vUv - vec2(texelSize.x, 0.0);
            vR = vUv + vec2(texelSize.x, 0.0);
            vT = vUv + vec2(0.0, texelSize.y);
            vB = vUv - vec2(0.0, texelSize.y);
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `),s=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;

        void main () {
            gl_FragColor = texture2D(uTexture, vUv);
        }
      `),x=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        uniform sampler2D uTexture;
        uniform float value;

        void main () {
            gl_FragColor = value * texture2D(uTexture, vUv);
        }
     `),_=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,h=P(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uTarget;
        uniform float aspectRatio;
        uniform vec3 color;
        uniform vec2 point;
        uniform float radius;

        void main () {
            vec2 p = vUv - point.xy;
            p.x *= aspectRatio;
            vec3 splat = exp(-dot(p, p) / radius) * color;
            vec3 base = texture2D(uTarget, vUv).xyz;
            gl_FragColor = vec4(base + splat, 1.0);
        }
      `),D=P(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        uniform sampler2D uVelocity;
        uniform sampler2D uSource;
        uniform vec2 texelSize;
        uniform vec2 dyeTexelSize;
        uniform float dt;
        uniform float dissipation;

        vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
            vec2 st = uv / tsize - 0.5;
            vec2 iuv = floor(st);
            vec2 fuv = fract(st);

            vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
            vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
            vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
            vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

            return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
        }

        void main () {
            #ifdef MANUAL_FILTERING
                vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
                vec4 result = bilerp(uSource, coord, dyeTexelSize);
            #else
                vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
                vec4 result = texture2D(uSource, coord);
            #endif
            float decay = 1.0 + dissipation * dt;
            gl_FragColor = result / decay;
        }
      `,C.supportLinearFiltering?null:["MANUAL_FILTERING"]),X=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).x;
            float R = texture2D(uVelocity, vR).x;
            float T = texture2D(uVelocity, vT).y;
            float B = texture2D(uVelocity, vB).y;

            vec2 C = texture2D(uVelocity, vUv).xy;
            if (vL.x < 0.0) { L = -C.x; }
            if (vR.x > 1.0) { R = -C.x; }
            if (vT.y > 1.0) { T = -C.y; }
            if (vB.y < 0.0) { B = -C.y; }

            float div = 0.5 * (R - L + T - B);
            gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
        }
      `),K=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uVelocity, vL).y;
            float R = texture2D(uVelocity, vR).y;
            float T = texture2D(uVelocity, vT).x;
            float B = texture2D(uVelocity, vB).x;
            float vorticity = R - L - T + B;
            gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
        }
      `),q=P(t.FRAGMENT_SHADER,`
        precision highp float;
        precision highp sampler2D;
        varying vec2 vUv;
        varying vec2 vL;
        varying vec2 vR;
        varying vec2 vT;
        varying vec2 vB;
        uniform sampler2D uVelocity;
        uniform sampler2D uCurl;
        uniform float curl;
        uniform float dt;

        void main () {
            float L = texture2D(uCurl, vL).x;
            float R = texture2D(uCurl, vR).x;
            float T = texture2D(uCurl, vT).x;
            float B = texture2D(uCurl, vB).x;
            float C = texture2D(uCurl, vUv).x;

            vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
            force /= length(force) + 0.0001;
            force *= curl * C;
            force.y *= -1.0;

            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity += force * dt;
            velocity = min(max(velocity, -1000.0), 1000.0);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),re=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uDivergence;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            float C = texture2D(uPressure, vUv).x;
            float divergence = texture2D(uDivergence, vUv).x;
            float pressure = (L + R + B + T - divergence) * 0.25;
            gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
        }
      `),fe=P(t.FRAGMENT_SHADER,`
        precision mediump float;
        precision mediump sampler2D;
        varying highp vec2 vUv;
        varying highp vec2 vL;
        varying highp vec2 vR;
        varying highp vec2 vT;
        varying highp vec2 vB;
        uniform sampler2D uPressure;
        uniform sampler2D uVelocity;

        void main () {
            float L = texture2D(uPressure, vL).x;
            float R = texture2D(uPressure, vR).x;
            float T = texture2D(uPressure, vT).x;
            float B = texture2D(uPressure, vB).x;
            vec2 velocity = texture2D(uVelocity, vUv).xy;
            velocity.xy -= vec2(R - L, T - B);
            gl_FragColor = vec4(velocity, 0.0, 1.0);
        }
      `),A=(t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(e,r=!1)=>{e==null?(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)):(t.viewport(0,0,e.width,e.height),t.bindFramebuffer(t.FRAMEBUFFER,e.fbo)),r&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)});let L,c,H,Q,B;const Ae=new M(U,s),ye=new M(U,x),$=new M(U,h),I=new M(U,D),Re=new M(U,X),Ee=new M(U,K),ie=new M(U,q),he=new M(U,re),ve=new M(U,fe),xe=new de(U,_);function Le(){let e=Pe(p.SIM_RESOLUTION),r=Pe(p.DYE_RESOLUTION);const i=C.halfFloatTexType,n=C.formatRGBA,a=C.formatRG,l=C.formatR,f=C.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),L?L=Fe(L,r.width,r.height,n.internalFormat,n.format,i,f):L=Te(r.width,r.height,n.internalFormat,n.format,i,f),c?c=Fe(c,e.width,e.height,a.internalFormat,a.format,i,f):c=Te(e.width,e.height,a.internalFormat,a.format,i,f),H=oe(e.width,e.height,l.internalFormat,l.format,i,t.NEAREST),Q=oe(e.width,e.height,l.internalFormat,l.format,i,t.NEAREST),B=Te(e.width,e.height,l.internalFormat,l.format,i,t.NEAREST)}function oe(e,r,i,n,a,l){t.activeTexture(t.TEXTURE0);let f=t.createTexture();t.bindTexture(t.TEXTURE_2D,f),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,l),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,i,e,r,0,n,a,null);let T=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,T),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,f,0),t.viewport(0,0,e,r),t.clear(t.COLOR_BUFFER_BIT);let y=1/e,V=1/r;return{texture:f,fbo:T,width:e,height:r,texelSizeX:y,texelSizeY:V,attach(J){return t.activeTexture(t.TEXTURE0+J),t.bindTexture(t.TEXTURE_2D,f),J}}}function Te(e,r,i,n,a,l){let f=oe(e,r,i,n,a,l),T=oe(e,r,i,n,a,l);return{width:e,height:r,texelSizeX:f.texelSizeX,texelSizeY:f.texelSizeY,get read(){return f},set read(y){f=y},get write(){return T},set write(y){T=y},swap(){let y=f;f=T,T=y}}}function Me(e,r,i,n,a,l,f){let T=oe(r,i,n,a,l,f);return Ae.bind(),t.uniform1i(Ae.uniforms.uTexture,e.attach(0)),A(T),T}function Fe(e,r,i,n,a,l,f){return e.width===r&&e.height===i||(e.read=Me(e.read,r,i,n,a,l,f),e.write=oe(r,i,n,a,l,f),e.width=r,e.height=i,e.texelSizeX=1/r,e.texelSizeY=1/i),e}function Xe(){let e=[];p.SHADING&&e.push("SHADING"),xe.setKeywords(e)}Xe(),Le();let Ne=Date.now(),pe=0;function ge(){const e=Oe();ke()&&Le(),Ge(e),Ie(),Ye(e),Ve(null),requestAnimationFrame(ge)}function Oe(){let e=Date.now(),r=(e-Ne)/1e3;return r=Math.min(r,.016666),Ne=e,r}function ke(){let e=N(v.clientWidth),r=N(v.clientHeight);return v.width!==e||v.height!==r?(v.width=e,v.height=r,!0):!1}function Ge(e){pe+=e*p.COLOR_UPDATE_SPEED,pe>=1&&(pe=et(pe,0,1),j.forEach(r=>{r.color=be()}))}function Ie(){j.forEach(e=>{e.moved&&(e.moved=!1,We(e))})}function Ye(e){t.disable(t.BLEND),Ee.bind(),t.uniform2f(Ee.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(Ee.uniforms.uVelocity,c.read.attach(0)),A(Q),ie.bind(),t.uniform2f(ie.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(ie.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(ie.uniforms.uCurl,Q.attach(1)),t.uniform1f(ie.uniforms.curl,p.CURL),t.uniform1f(ie.uniforms.dt,e),A(c.write),c.swap(),Re.bind(),t.uniform2f(Re.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(Re.uniforms.uVelocity,c.read.attach(0)),A(H),ye.bind(),t.uniform1i(ye.uniforms.uTexture,B.read.attach(0)),t.uniform1f(ye.uniforms.value,p.PRESSURE),A(B.write),B.swap(),he.bind(),t.uniform2f(he.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(he.uniforms.uDivergence,H.attach(0));for(let i=0;i<p.PRESSURE_ITERATIONS;i++)t.uniform1i(he.uniforms.uPressure,B.read.attach(1)),A(B.write),B.swap();ve.bind(),t.uniform2f(ve.uniforms.texelSize,c.texelSizeX,c.texelSizeY),t.uniform1i(ve.uniforms.uPressure,B.read.attach(0)),t.uniform1i(ve.uniforms.uVelocity,c.read.attach(1)),A(c.write),c.swap(),I.bind(),t.uniform2f(I.uniforms.texelSize,c.texelSizeX,c.texelSizeY),C.supportLinearFiltering||t.uniform2f(I.uniforms.dyeTexelSize,c.texelSizeX,c.texelSizeY);let r=c.read.attach(0);t.uniform1i(I.uniforms.uVelocity,r),t.uniform1i(I.uniforms.uSource,r),t.uniform1f(I.uniforms.dt,e),t.uniform1f(I.uniforms.dissipation,p.VELOCITY_DISSIPATION),A(c.write),c.swap(),C.supportLinearFiltering||t.uniform2f(I.uniforms.dyeTexelSize,L.texelSizeX,L.texelSizeY),t.uniform1i(I.uniforms.uVelocity,c.read.attach(0)),t.uniform1i(I.uniforms.uSource,L.read.attach(1)),t.uniform1f(I.uniforms.dissipation,p.DENSITY_DISSIPATION),A(L.write),L.swap()}function Ve(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),He(e)}function He(e){let r=t.drawingBufferWidth,i=t.drawingBufferHeight;xe.bind(),p.SHADING&&t.uniform2f(xe.uniforms.texelSize,1/r,1/i),t.uniform1i(xe.uniforms.uTexture,L.read.attach(0)),A(e)}function We(e){let r=e.deltaX*p.SPLAT_FORCE,i=e.deltaY*p.SPLAT_FORCE;je(e.texcoordX,e.texcoordY,r,i,e.color)}function Ke(e){const r=be();r.r*=10,r.g*=10,r.b*=10;let i=10*(Math.random()-.5),n=30*(Math.random()-.5);je(e.texcoordX,e.texcoordY,i,n,r)}function je(e,r,i,n,a){$.bind(),t.uniform1i($.uniforms.uTarget,c.read.attach(0)),t.uniform1f($.uniforms.aspectRatio,v.width/v.height),t.uniform2f($.uniforms.point,e,r),t.uniform3f($.uniforms.color,i,n,0),t.uniform1f($.uniforms.radius,qe(p.SPLAT_RADIUS/100)),A(c.write),c.swap(),t.uniform1i($.uniforms.uTarget,L.read.attach(0)),t.uniform3f($.uniforms.color,a.r,a.g,a.b),A(L.write),L.swap()}function qe(e){let r=v.width/v.height;return r>1&&(e*=r),e}function we(e,r,i,n){e.id=r,e.down=!0,e.moved=!1,e.texcoordX=i/v.width,e.texcoordY=1-n/v.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=be()}function Se(e,r,i,n){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=r/v.width,e.texcoordY=1-i/v.height,e.deltaX=Qe(e.texcoordX-e.prevTexcoordX),e.deltaY=Je(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=n}function $e(e){e.down=!1}function Qe(e){let r=v.width/v.height;return r<1&&(e*=r),e}function Je(e){let r=v.width/v.height;return r>1&&(e/=r),e}function be(){let e=Ze(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function Ze(e,r,i){let n,a,l,f,T,y,V,J;switch(f=Math.floor(e*6),T=e*6-f,y=i*(1-r),V=i*(1-T*r),J=i*(1-(1-T)*r),f%6){case 0:n=i,a=J,l=y;break;case 1:n=V,a=i,l=y;break;case 2:n=y,a=i,l=J;break;case 3:n=y,a=V,l=i;break;case 4:n=J,a=y,l=i;break;case 5:n=i,a=y,l=V;break}return{r:n,g:a,b:l}}function et(e,r,i){const n=i-r;return(e-r)%n+r}function Pe(e){let r=t.drawingBufferWidth/t.drawingBufferHeight;r<1&&(r=1/r);const i=Math.round(e),n=Math.round(e*r);return t.drawingBufferWidth>t.drawingBufferHeight?{width:n,height:i}:{width:i,height:n}}function N(e){const r=window.devicePixelRatio||1;return Math.floor(e*r)}function tt(e){if(e.length===0)return 0;let r=0;for(let i=0;i<e.length;i++)r=(r<<5)-r+e.charCodeAt(i),r|=0;return r}window.addEventListener("mousedown",e=>{let r=j[0],i=N(e.clientX),n=N(e.clientY);we(r,-1,i,n),Ke(r)}),document.body.addEventListener("mousemove",function e(r){let i=j[0],n=N(r.clientX),a=N(r.clientY),l=be();ge(),Se(i,n,a,l),document.body.removeEventListener("mousemove",e)}),window.addEventListener("mousemove",e=>{let r=j[0],i=N(e.clientX),n=N(e.clientY),a=r.color;Se(r,i,n,a)}),document.body.addEventListener("touchstart",function e(r){const i=r.targetTouches;let n=j[0];for(let a=0;a<i.length;a++){let l=N(i[a].clientX),f=N(i[a].clientY);ge(),we(n,i[a].identifier,l,f)}document.body.removeEventListener("touchstart",e)}),window.addEventListener("touchstart",e=>{const r=e.targetTouches;let i=j[0];for(let n=0;n<r.length;n++){let a=N(r[n].clientX),l=N(r[n].clientY);we(i,r[n].identifier,a,l)}}),window.addEventListener("touchmove",e=>{const r=e.targetTouches;let i=j[0];for(let n=0;n<r.length;n++){let a=N(r[n].clientX),l=N(r[n].clientY);Se(i,a,l,i.color)}},!1),window.addEventListener("touchend",e=>{const r=e.changedTouches;let i=j[0];for(let n=0;n<r.length;n++)$e(i)}),ge()},[R,w,E,Y,d,u,b,F,Z,S,O,k,z,ee]),o.jsx("div",{className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:o.jsx("canvas",{ref:W,id:"fluid",className:"w-screen h-screen block"})})}const vt="/assets/Adarsh-BDG0zI57.png",xt=({logo:R,logoAlt:w="Logo",items:E,activeHref:Y,className:d="",ease:u="power3.easeOut",baseColor:b="#fff",pillColor:F="#060010",hoveredPillTextColor:Z="#060010",pillTextColor:S,onMobileMenuClick:O,initialLoadAnimation:k=!0})=>{const z=S??b,[ee,W]=m.useState(!1),v=m.useRef([]),te=m.useRef([]),p=m.useRef([]),j=m.useRef(null),t=m.useRef(null),C=m.useRef(null),se=m.useRef(null),G=m.useRef(null),le=m.useRef(null);m.useEffect(()=>{const s=()=>{v.current.forEach(h=>{if(!h?.parentElement)return;const D=h.parentElement,X=D.getBoundingClientRect(),{width:K,height:q}=X,re=(K*K/4+q*q)/(2*q),fe=Math.ceil(2*re)+2,A=Math.ceil(re-Math.sqrt(Math.max(0,re*re-K*K/4)))+1,L=fe-A;h.style.width=`${fe}px`,h.style.height=`${fe}px`,h.style.bottom=`-${A}px`,g.set(h,{xPercent:-50,scale:0,transformOrigin:`50% ${L}px`});const c=D.querySelector(".pill-label"),H=D.querySelector(".pill-label-hover");c&&g.set(c,{y:0}),H&&g.set(H,{y:q+12,opacity:0});const Q=v.current.indexOf(h);if(Q===-1)return;te.current[Q]?.kill();const B=g.timeline({paused:!0});B.to(h,{scale:1.2,xPercent:-50,duration:2,ease:u,overwrite:"auto"},0),c&&B.to(c,{y:-(q+8),duration:2,ease:u,overwrite:"auto"},0),H&&(g.set(H,{y:Math.ceil(q+100),opacity:0}),B.to(H,{y:0,opacity:1,duration:2,ease:u,overwrite:"auto"},0)),te.current[Q]=B})};s();const x=()=>s();window.addEventListener("resize",x),document.fonts?.ready&&document.fonts.ready.then(s).catch(()=>{});const _=se.current;if(_&&g.set(_,{visibility:"hidden",opacity:0,scaleY:1,y:0}),k){const h=le.current,D=G.current;h&&(g.set(h,{scale:0}),g.to(h,{scale:1,duration:.6,ease:u})),D&&(g.set(D,{width:0,overflow:"hidden"}),g.to(D,{width:"auto",duration:.6,ease:u}))}return()=>window.removeEventListener("resize",x)},[E,u,k]);const de=s=>{const x=te.current[s];x&&(p.current[s]?.kill(),p.current[s]=x.tweenTo(x.duration(),{duration:.3,ease:u,overwrite:"auto"}))},M=s=>{const x=te.current[s];x&&(p.current[s]?.kill(),p.current[s]=x.tweenTo(0,{duration:.2,ease:u,overwrite:"auto"}))},ce=()=>{const s=j.current;s&&(t.current?.kill(),g.set(s,{rotate:0}),t.current=g.to(s,{rotate:360,duration:.2,ease:u,overwrite:"auto"}))},me=()=>{const s=!ee;W(s);const x=C.current,_=se.current;if(x){const h=x.querySelectorAll(".hamburger-line");s?(g.to(h[0],{rotation:45,y:3,duration:.3,ease:u}),g.to(h[1],{rotation:-45,y:-3,duration:.3,ease:u})):(g.to(h[0],{rotation:0,y:0,duration:.3,ease:u}),g.to(h[1],{rotation:0,y:0,duration:.3,ease:u}))}_&&(s?(g.set(_,{visibility:"visible"}),g.fromTo(_,{opacity:0,y:10,scaleY:1},{opacity:1,y:0,scaleY:1,duration:.3,ease:u,transformOrigin:"top center"})):g.to(_,{opacity:0,y:10,scaleY:1,duration:.2,ease:u,transformOrigin:"top center",onComplete:()=>{g.set(_,{visibility:"hidden"})}})),O?.()},P=s=>s.startsWith("http://")||s.startsWith("https://")||s.startsWith("//")||s.startsWith("mailto:")||s.startsWith("tel:")||s.startsWith("#"),ue=s=>s&&!P(s),U={"--base":b,"--pill-bg":F,"--hover-text":Z,"--pill-text":z,"--nav-h":"42px","--logo":"36px","--pill-pad-x":"18px","--pill-gap":"3px"};return o.jsxs("div",{className:"absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto",children:[o.jsxs("nav",{className:`w-full md:w-max flex items-center justify-between md:justify-start box-border px-4 md:px-0 ${d}`,"aria-label":"Primary",style:U,children:[ue(E?.[0]?.href)?o.jsx(_e,{to:E[0].href,"aria-label":"Home",onMouseEnter:ce,role:"menuitem",ref:s=>{le.current=s},className:"rounded-full p-2 inline-flex items-center justify-center overflow-hidden",style:{width:"var(--nav-h)",height:"var(--nav-h)",background:"var(--base, #000)"},children:o.jsx("img",{src:R,alt:w,ref:j,className:"w-full h-full object-cover block"})}):o.jsx("a",{href:E?.[0]?.href||"#","aria-label":"Home",onMouseEnter:ce,ref:s=>{le.current=s},className:"rounded-full p-2 inline-flex items-center justify-center overflow-hidden",style:{width:"var(--nav-h)",height:"var(--nav-h)",background:"var(--base, #000)"},children:o.jsx("img",{src:R,alt:w,ref:j,className:"w-full h-full object-cover block"})}),o.jsx("div",{ref:G,className:"relative items-center rounded-full hidden md:flex ml-2",style:{height:"var(--nav-h)",background:"var(--base, #000)"},children:o.jsx("ul",{role:"menubar",className:"list-none flex items-stretch m-0 p-[3px] h-full",style:{gap:"var(--pill-gap)"},children:E.map((s,x)=>{const _=Y===s.href,h={background:"var(--pill-bg, #fff)",color:"var(--pill-text, var(--base, #000))",paddingLeft:"var(--pill-pad-x)",paddingRight:"var(--pill-pad-x)"},D=o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none",style:{background:"var(--base, #000)",willChange:"transform"},"aria-hidden":"true",ref:K=>{v.current[x]=K}}),o.jsxs("span",{className:"label-stack relative inline-block leading-[1] z-[2]",children:[o.jsx("span",{className:"pill-label relative z-[2] inline-block leading-[1]",style:{willChange:"transform"},children:s.label}),o.jsx("span",{className:"pill-label-hover absolute left-0 top-0 z-[3] inline-block",style:{color:"var(--hover-text, #fff)",willChange:"transform, opacity"},"aria-hidden":"true",children:s.label})]}),_&&o.jsx("span",{className:"absolute left-1/2 -bottom-[6px] -translate-x-1/2 w-3 h-3 rounded-full z-[4]",style:{background:"var(--base, #000)"},"aria-hidden":"true"})]}),X="relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full box-border font-semibold text-[16px] leading-[0] uppercase tracking-[0.2px] whitespace-nowrap cursor-pointer px-0";return o.jsx("li",{role:"none",className:"flex h-full",children:ue(s.href)?o.jsx(_e,{role:"menuitem",to:s.href,className:X,style:h,"aria-label":s.ariaLabel||s.label,onMouseEnter:()=>de(x),onMouseLeave:()=>M(x),children:D}):o.jsx("a",{role:"menuitem",href:s.href,className:X,style:h,"aria-label":s.ariaLabel||s.label,onMouseEnter:()=>de(x),onMouseLeave:()=>M(x),children:D})},s.href)})})}),o.jsxs("button",{ref:C,onClick:me,"aria-label":"Toggle menu","aria-expanded":ee,className:"md:hidden rounded-full border-0 flex flex-col items-center justify-center gap-1 cursor-pointer p-0 relative",style:{width:"var(--nav-h)",height:"var(--nav-h)",background:"var(--base, #000)"},children:[o.jsx("span",{className:"hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",style:{background:"var(--pill-bg, #fff)"}}),o.jsx("span",{className:"hamburger-line w-4 h-0.5 rounded origin-center transition-all duration-[10ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]",style:{background:"var(--pill-bg, #fff)"}})]})]}),o.jsx("div",{ref:se,className:"md:hidden absolute top-[3em] left-4 right-4 rounded-[27px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-[998] origin-top",style:{...U,background:"var(--base, #f0f0f0)"},children:o.jsx("ul",{className:"list-none m-0 p-[3px] flex flex-col gap-[3px]",children:E.map(s=>{const x={background:"var(--pill-bg, #fff)",color:"var(--pill-text, #fff)"},_=X=>{X.currentTarget.style.background="var(--base)",X.currentTarget.style.color="var(--hover-text, #fff)"},h=X=>{X.currentTarget.style.background="var(--pill-bg, #fff)",X.currentTarget.style.color="var(--pill-text, #fff)"},D="block py-3 px-4 text-[16px] font-medium rounded-[50px] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]";return o.jsx("li",{children:ue(s.href)?o.jsx(_e,{to:s.href,className:D,style:x,onMouseEnter:_,onMouseLeave:h,onClick:()=>W(!1),children:s.label}):o.jsx("a",{href:s.href,className:D,style:x,onMouseEnter:_,onMouseLeave:h,onClick:()=>W(!1),children:s.label})},s.href)})})})]})};function pt(){return o.jsx("nav",{className:"absolute top-0 left-0 w-full p-4 z-50 flex justify-center items-center",children:o.jsx(xt,{logo:vt,logoAlt:"Company Logo",items:[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Contact",href:"/contact"},{label:"Sample",href:"/sample"},{label:"Blog",href:"/blog"}],activeHref:"/",className:"custom-nav",ease:"power2.easeOut",baseColor:"#000000",pillColor:"#ffffff",hoveredPillTextColor:"#ffffff",pillTextColor:"#000000"})})}function ze(){return o.jsxs("div",{className:"flex justify-center items-center h-screen w-screen bg-black text-white",children:[o.jsxs("div",{"aria-label":"Loading...",role:"status",className:"flex flex-col items-center space-y-8",children:[o.jsxs("div",{className:"relative w-10 h-10",children:[o.jsx("div",{className:"absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin shadow-[0_0_15px_rgba(255,255,255,0.8)]"}),o.jsx("div",{className:"absolute inset-0 border-4 border-gray-400 border-b-transparent rounded-full animate-spin-slow shadow-[0_0_20px_rgba(255,255,255,0.6)]"}),o.jsx("div",{className:"absolute inset-0 border-2 border-white border-l-transparent rounded-full animate-spin-fast shadow-[0_0_25px_rgba(255,255,255,0.4)]"})]}),o.jsxs("div",{className:"flex space-x-2 text-xl font-semibold tracking-wider text-white",children:[o.jsx("span",{className:"animate-pulse-neon",children:"Loading"}),o.jsx("span",{className:"animate-bounce-neon delay-0",children:"."}),o.jsx("span",{className:"animate-bounce-neon delay-200",children:"."}),o.jsx("span",{className:"animate-bounce-neon delay-400",children:"."})]})]}),o.jsx("style",{jsx:"true",children:`
        @keyframes spin-slow {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes spin-fast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-spin-fast { animation: spin-fast 1.5s linear infinite; }

        @keyframes pulse-neon {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff; opacity: 0.8; }
          50% { text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff; opacity: 1; }
        }
        .animate-pulse-neon { animation: pulse-neon 1.5s infinite; }

        @keyframes bounce-neon {
          0%, 80%, 100% { transform: scale(0); opacity: 0.2; text-shadow: 0 0 5px #fff; }
          40% { transform: scale(1); opacity: 1; text-shadow: 0 0 10px #fff, 0 0 20px #fff; }
        }
        .animate-bounce-neon { animation: bounce-neon 1s infinite; }
        .delay-0 { animation-delay: 0s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-400 { animation-delay: 0.4s; }
      `})]})}const gt="G-X34L2QSKRG",bt=()=>{Ce.initialize(gt)},yt=R=>{Ce.send({hitType:"pageview",page:R})};function Rt(){const R=nt();return m.useEffect(()=>{bt()},[]),m.useEffect(()=>{yt(R.pathname)},[R]),null}function De({children:R,fallback:w}){const[E,Y]=m.useState(!1),d=m.useRef(null);return m.useEffect(()=>{const u=new IntersectionObserver(([b])=>{b.isIntersecting&&(Y(!0),u.disconnect())},{threshold:.2});return d.current&&u.observe(d.current),()=>{d.current&&u.unobserve(d.current)}},[]),o.jsx("div",{ref:d,children:E?o.jsx(m.Suspense,{fallback:w,children:R}):w})}const Et=m.lazy(()=>ae(()=>import("./Home-DaZEM6MX.js"),__vite__mapDeps([0,1,2,3]))),Tt=m.lazy(()=>ae(()=>import("./About-CtIr0b7z.js"),__vite__mapDeps([4,1,2,5,6,7,3]))),wt=m.lazy(()=>ae(()=>import("./Contact-C3OZQqsE.js"),__vite__mapDeps([8,1,2,5,6,7]))),St=m.lazy(()=>ae(()=>import("./Sample-Gw8B4UaZ.js"),__vite__mapDeps([9,1,2,5,6,10,7,3]))),_t=m.lazy(()=>ae(()=>import("./Blog-BjaNfbTE.js"),__vite__mapDeps([11,1,2,5,6,10,7,3]))),Dt=m.lazy(()=>ae(()=>import("./NotFound-CQcZjvT_.js"),__vite__mapDeps([12,1,2,3])));function At(){const[R,w]=m.useState(!0);return m.useEffect(()=>{const E=setTimeout(()=>{w(!1)},3e3);return()=>clearTimeout(E)},[]),R?o.jsx(ze,{}):o.jsxs(o.Fragment,{children:[o.jsx(De,{children:o.jsx(ht,{})}),o.jsx(Rt,{}),o.jsx(De,{children:o.jsx(pt,{})}),o.jsx(m.Suspense,{fallback:o.jsx(ze,{}),children:o.jsx(De,{children:o.jsxs(at,{children:[o.jsx(ne,{path:"/",element:o.jsx(Et,{})}),o.jsx(ne,{path:"/about",element:o.jsx(Tt,{})}),o.jsx(ne,{path:"/contact",element:o.jsx(wt,{})}),o.jsx(ne,{path:"/sample",element:o.jsx(St,{})}),o.jsx(ne,{path:"/blog",element:o.jsx(_t,{})}),o.jsx(ne,{path:"*",element:o.jsx(Dt,{})})]})})}),o.jsx(mt,{})]})}const Lt="o4jvc9/adadarsh23",Ft="8n7x7x4nxn63837x3n83nx838xn3n3863x836n48638",Nt="Adarsh",jt="adrajpu523@gmail.com",Pt="https://1b9b9b168e26f53aeb5a256e2da0e591@o4510039017390081.ingest.us.sentry.io/4510039018766336",Ut=parseFloat("1.0");function Bt(){Ue.init(Lt),Ue.identify(Ft,{name:Nt,email:jt})}function zt(){st({dsn:Pt,tracesSampleRate:Ut})}Bt();zt();ut.createRoot(document.getElementById("root")).render(o.jsx(m.StrictMode,{children:o.jsx(lt,{children:o.jsx(ct,{fallback:o.jsx("p",{className:"error-message",children:"Something went wrong."}),children:o.jsx(At,{})})})}));export{De as L,ae as _,ze as a,vt as l};
