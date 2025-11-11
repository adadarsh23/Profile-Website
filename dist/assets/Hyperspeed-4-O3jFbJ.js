import{r as C,j as le}from"./vendor_react-dEWb8ZBQ.js";import{p as h,o as f,W as ce,b5 as de,P as me,S as fe,b6 as ge,q as pe,b7 as ve,b8 as B,b9 as we,ba as A,bb as Pe,bc as xe,bd as j,C as v,be as q,bf as $,bg as m,bh as U,bi as ye,bj as Le,bk as G,bl as y,bm as H}from"./vendor-BydJ7EqF.js";import"./vendor_react-dom-Bh-7mpZz.js";const Te=({effectOptions:W={onSpeedUp:()=>{},onSlowDown:()=>{},distortion:"turbulentDistortion",length:400,roadWidth:10,islandWidth:2,lanesPerRoad:4,fov:90,fovSpeedUp:150,speedUp:2,carLightsFade:.4,totalSideLightSticks:20,lightPairsPerRoadWay:40,shoulderLinesWidthPercentage:.05,brokenLinesWidthPercentage:.1,brokenLinesLengthPercentage:.5,lightStickWidth:[.12,.5],lightStickHeight:[1.3,1.7],movingAwaySpeed:[60,80],movingCloserSpeed:[-120,-160],carLightsLength:[400*.03,400*.2],carLightsRadius:[.05,.14],carWidthPercentage:[.3,.5],carShiftX:[-.8,.8],carFloorSeparation:[0,5],colors:{roadColor:526344,islandColor:657930,background:0,shoulderLines:16777215,brokenLines:16777215,leftCars:[14177983,6770850,12732332],rightCars:[242627,941733,3294549],sticks:242627}}})=>{const V=C.useRef(null),L=C.useRef(null);return C.useEffect(()=>{if(L.current){L.current.dispose();const i=document.getElementById("lights");if(i)for(;i.firstChild;)i.removeChild(i.firstChild)}const D={uFreq:{value:new h(3,6,10)},uAmp:{value:new h(30,30,20)}},T={uFreq:{value:new f(5,2)},uAmp:{value:new f(25,15)}},I={uFreq:{value:new f(2,3)},uAmp:{value:new f(35,10)}},S={uFreq:{value:new H(4,8,8,1)},uAmp:{value:new H(25,5,10,10)}},M={uFreq:{value:new f(4,8)},uAmp:{value:new f(10,20)},uPowY:{value:new f(20,2)}};let w=i=>Math.sin(i)*.5+.5;const J={mountainDistortion:{uniforms:D,getDistortion:`
          uniform vec3 uAmp;
          uniform vec3 uFreq;
          #define PI 3.14159265358979
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              nsin(progress * PI * uFreq.y + uTime) * uAmp.y - nsin(movementProgressFix * PI * uFreq.y + uTime) * uAmp.y,
              nsin(progress * PI * uFreq.z + uTime) * uAmp.z - nsin(movementProgressFix * PI * uFreq.z + uTime) * uAmp.z
            );
          }
        `,getJS:(i,e)=>{let t=.02,o=D.uFreq.value,s=D.uAmp.value,r=new h(Math.cos(i*Math.PI*o.x+e)*s.x-Math.cos(t*Math.PI*o.x+e)*s.x,w(i*Math.PI*o.y+e)*s.y-w(t*Math.PI*o.y+e)*s.y,w(i*Math.PI*o.z+e)*s.z-w(t*Math.PI*o.z+e)*s.z),n=new h(2,2,2),u=new h(0,0,-5);return r.multiply(n).add(u)}},xyDistortion:{uniforms:T,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float movementProgressFix = 0.02;
            return vec3( 
              cos(progress * PI * uFreq.x + uTime) * uAmp.x - cos(movementProgressFix * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + PI/2. + uTime) * uAmp.y - sin(movementProgressFix * PI * uFreq.y + PI/2. + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(i,e)=>{let t=.02,o=T.uFreq.value,s=T.uAmp.value,r=new h(Math.cos(i*Math.PI*o.x+e)*s.x-Math.cos(t*Math.PI*o.x+e)*s.x,Math.sin(i*Math.PI*o.y+e+Math.PI/2)*s.y-Math.sin(t*Math.PI*o.y+e+Math.PI/2)*s.y,0),n=new h(2,.4,1),u=new h(0,0,-3);return r.multiply(n).add(u)}},LongRaceDistortion:{uniforms:I,getDistortion:`
          uniform vec2 uFreq;
          uniform vec2 uAmp;
          #define PI 3.14159265358979
          vec3 getDistortion(float progress){
            float camProgress = 0.0125;
            return vec3( 
              sin(progress * PI * uFreq.x + uTime) * uAmp.x - sin(camProgress * PI * uFreq.x + uTime) * uAmp.x,
              sin(progress * PI * uFreq.y + uTime) * uAmp.y - sin(camProgress * PI * uFreq.y + uTime) * uAmp.y,
              0.
            );
          }
        `,getJS:(i,e)=>{let t=.0125,o=I.uFreq.value,s=I.uAmp.value,r=new h(Math.sin(i*Math.PI*o.x+e)*s.x-Math.sin(t*Math.PI*o.x+e)*s.x,Math.sin(i*Math.PI*o.y+e)*s.y-Math.sin(t*Math.PI*o.y+e)*s.y,0),n=new h(1,1,0),u=new h(0,0,-5);return r.multiply(n).add(u)}},turbulentDistortion:{uniforms:S,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r + uTime) * uAmp.r +
              pow(cos(PI * progress * uFreq.g + uTime * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b + uTime) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a + uTime / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.0125),
              getDistortionY(progress) - getDistortionY(0.0125),
              0.
            );
          }
        `,getJS:(i,e)=>{const t=S.uFreq.value,o=S.uAmp.value,s=a=>Math.cos(Math.PI*a*t.x+e)*o.x+Math.pow(Math.cos(Math.PI*a*t.y+e*(t.y/t.x)),2)*o.y,r=a=>-w(Math.PI*a*t.z+e)*o.z-Math.pow(w(Math.PI*a*t.w+e/(t.z/t.w)),5)*o.w;let n=new h(s(i)-s(i+.007),r(i)-r(i+.007),0),u=new h(-2,-5,0),l=new h(0,0,-10);return n.multiply(u).add(l)}},turbulentDistortionStill:{uniforms:S,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              cos(PI * progress * uFreq.r) * uAmp.r +
              pow(cos(PI * progress * uFreq.g * (uFreq.g / uFreq.r)), 2. ) * uAmp.g
            );
          }
          float getDistortionY(float progress){
            return (
              -nsin(PI * progress * uFreq.b) * uAmp.b +
              -pow(nsin(PI * progress * uFreq.a / (uFreq.b / uFreq.a)), 5.) * uAmp.a
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `},deepDistortionStill:{uniforms:M,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x) * uAmp.x * 2.
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.05),
              0.
            );
          }
        `},deepDistortion:{uniforms:M,getDistortion:`
          uniform vec4 uFreq;
          uniform vec4 uAmp;
          uniform vec2 uPowY;
          float nsin(float val){
            return sin(val) * 0.5 + 0.5;
          }
          #define PI 3.14159265358979
          float getDistortionX(float progress){
            return (
              sin(progress * PI * uFreq.x + uTime) * uAmp.x
            );
          }
          float getDistortionY(float progress){
            return (
              pow(abs(progress * uPowY.x), uPowY.y) + sin(progress * PI * uFreq.y + uTime) * uAmp.y
            );
          }
          vec3 getDistortion(float progress){
            return vec3(
              getDistortionX(progress) - getDistortionX(0.02),
              getDistortionY(progress) - getDistortionY(0.02),
              0.
            );
          }
        `,getJS:(i,e)=>{const t=M.uFreq.value,o=M.uAmp.value,s=M.uPowY.value,r=d=>Math.sin(d*Math.PI*t.x+e)*o.x,n=d=>Math.pow(d*s.x,s.y)+Math.sin(d*Math.PI*t.y+e)*o.y;let u=new h(r(i)-r(i+.01),n(i)-n(i+.01),0),l=new h(-2,-4,0),a=new h(0,0,-10);return u.multiply(l).add(a)}}};class N{constructor(e,t={}){this.options=t,this.options.distortion==null&&(this.options.distortion={uniforms:Z,getDistortion:K}),this.container=e,this.renderer=new ce({antialias:!1,alpha:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),this.composer=new de(this.renderer),e.append(this.renderer.domElement),this.camera=new me(t.fov,e.offsetWidth/e.offsetHeight,.1,1e4),this.camera.position.z=-5,this.camera.position.y=8,this.camera.position.x=0,this.scene=new fe,this.scene.background=null;let o=new ge(t.colors.background,t.length*.2,t.length*500);this.scene.fog=o,this.fogUniforms={fogColor:{value:o.color},fogNear:{value:o.near},fogFar:{value:o.far}},this.clock=new pe,this.assets={},this.disposed=!1,this.road=new ie(this,t),this.leftCarLights=new z(this,t,t.colors.leftCars,t.movingAwaySpeed,new f(0,1-t.carLightsFade)),this.rightCarLights=new z(this,t,t.colors.rightCars,t.movingCloserSpeed,new f(1,0+t.carLightsFade)),this.leftSticks=new te(this,t),this.fovTarget=t.fov,this.speedUpTarget=0,this.speedUp=0,this.timeOffset=0,this.tick=this.tick.bind(this),this.init=this.init.bind(this),this.setSize=this.setSize.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onMouseUp=this.onMouseUp.bind(this),this.onTouchStart=this.onTouchStart.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onContextMenu=this.onContextMenu.bind(this),window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){const e=this.container.offsetWidth,t=this.container.offsetHeight;this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.composer.setSize(e,t)}initPasses(){this.renderPass=new ve(this.scene,this.camera),this.bloomPass=new B(this.camera,new we({luminanceThreshold:.2,luminanceSmoothing:0,resolutionScale:1}));const e=new B(this.camera,new A({preset:Pe.MEDIUM,searchImage:A.searchImageDataURL,areaImage:A.areaImageDataURL}));this.renderPass.renderToScreen=!1,this.bloomPass.renderToScreen=!1,e.renderToScreen=!0,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloomPass),this.composer.addPass(e)}loadAssets(){const e=this.assets;return new Promise(t=>{const o=new xe(t),s=new Image,r=new Image;e.smaa={},s.addEventListener("load",function(){e.smaa.search=this,o.itemEnd("smaa-search")}),r.addEventListener("load",function(){e.smaa.area=this,o.itemEnd("smaa-area")}),o.itemStart("smaa-search"),o.itemStart("smaa-area"),s.src=A.searchImageDataURL,r.src=A.areaImageDataURL})}init(){this.initPasses();const e=this.options;this.road.init(),this.leftCarLights.init(),this.leftCarLights.mesh.position.setX(-e.roadWidth/2-e.islandWidth/2),this.rightCarLights.init(),this.rightCarLights.mesh.position.setX(e.roadWidth/2+e.islandWidth/2),this.leftSticks.init(),this.leftSticks.mesh.position.setX(-(e.roadWidth+e.islandWidth/2)),this.container.addEventListener("mousedown",this.onMouseDown),this.container.addEventListener("mouseup",this.onMouseUp),this.container.addEventListener("mouseout",this.onMouseUp),this.container.addEventListener("touchstart",this.onTouchStart,{passive:!0}),this.container.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.container.addEventListener("touchcancel",this.onTouchEnd,{passive:!0}),this.container.addEventListener("contextmenu",this.onContextMenu),this.tick()}onMouseDown(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onMouseUp(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onTouchStart(e){this.options.onSpeedUp&&this.options.onSpeedUp(e),this.fovTarget=this.options.fovSpeedUp,this.speedUpTarget=this.options.speedUp}onTouchEnd(e){this.options.onSlowDown&&this.options.onSlowDown(e),this.fovTarget=this.options.fov,this.speedUpTarget=0}onContextMenu(e){e.preventDefault()}update(e){let t=Math.exp(-(-60*Math.log2(.9))*e);this.speedUp+=E(this.speedUp,this.speedUpTarget,t,1e-5),this.timeOffset+=this.speedUp*e;let o=this.clock.elapsedTime+this.timeOffset;this.rightCarLights.update(o),this.leftCarLights.update(o),this.leftSticks.update(o),this.road.update(o);let s=!1,r=E(this.camera.fov,this.fovTarget,t);if(r!==0&&(this.camera.fov+=r*e*6,s=!0),this.options.distortion.getJS){const n=this.options.distortion.getJS(.025,o);this.camera.lookAt(new h(this.camera.position.x+n.x,this.camera.position.y+n.y,this.camera.position.z+n.z)),s=!0}s&&this.camera.updateProjectionMatrix(),this.options.isHyper}render(e){this.composer.render(e)}dispose(){this.disposed=!0,this.renderer&&this.renderer.dispose(),this.composer&&this.composer.dispose(),this.scene&&this.scene.clear(),window.removeEventListener("resize",this.onWindowResize.bind(this)),this.container&&(this.container.removeEventListener("mousedown",this.onMouseDown),this.container.removeEventListener("mouseup",this.onMouseUp),this.container.removeEventListener("mouseout",this.onMouseUp),this.container.removeEventListener("touchstart",this.onTouchStart),this.container.removeEventListener("touchend",this.onTouchEnd),this.container.removeEventListener("touchcancel",this.onTouchEnd),this.container.removeEventListener("contextmenu",this.onContextMenu))}setSize(e,t,o){this.composer.setSize(e,t,o)}tick(){if(this.disposed||!this)return;if(ue(this.renderer,this.setSize)){const t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}const Z={uDistortionX:{value:new f(80,3)},uDistortionY:{value:new f(-40,2.5)}},K=`
      #define PI 3.14159265358979
      uniform vec2 uDistortionX;
      uniform vec2 uDistortionY;
      float nsin(float val){
        return sin(val) * 0.5 + 0.5;
      }
      vec3 getDistortion(float progress){
        progress = clamp(progress, 0., 1.);
        float xAmp = uDistortionX.r;
        float xFreq = uDistortionX.g;
        float yAmp = uDistortionY.r;
        float yFreq = uDistortionY.g;
        return vec3( 
          xAmp * nsin(progress * PI * xFreq - PI / 2.),
          yAmp * nsin(progress * PI * yFreq - PI / 2.),
          0.
        );
      }
    `,g=i=>Array.isArray(i)?Math.random()*(i[1]-i[0])+i[0]:Math.random()*i,_=i=>Array.isArray(i)?i[Math.floor(Math.random()*i.length)]:i;function E(i,e,t=.1,o=.001){let s=(e-i)*t;return Math.abs(s)<o&&(s=e-i),s}class z{constructor(e,t,o,s,r){this.webgl=e,this.options=t,this.colors=o,this.speed=s,this.fade=r}init(){const e=this.options;let t=new ye(new h(0,0,0),new h(0,0,-1)),o=new Le(t,40,1,8,!1),s=new G().copy(o);s.instanceCount=e.lightPairsPerRoadWay*2;let r=e.roadWidth/e.lanesPerRoad,n=[],u=[],l=[],a=this.colors;Array.isArray(a)?a=a.map(c=>new v(c)):a=new v(a);for(let c=0;c<e.lightPairsPerRoadWay;c++){let F=g(e.carLightsRadius),b=g(e.carLightsLength),P=g(this.speed),k=c%e.lanesPerRoad*r-e.roadWidth/2+r/2,R=g(e.carWidthPercentage)*r,he=g(e.carShiftX)*r;k+=he;let O=g(e.carFloorSeparation)+F*1.3,X=-g(e.length);n.push(k-R/2),n.push(O),n.push(X),n.push(k+R/2),n.push(O),n.push(X),u.push(F),u.push(b),u.push(P),u.push(F),u.push(b),u.push(P);let x=_(a);l.push(x.r),l.push(x.g),l.push(x.b),l.push(x.r),l.push(x.g),l.push(x.b)}s.setAttribute("aOffset",new y(new Float32Array(n),3,!1)),s.setAttribute("aMetrics",new y(new Float32Array(u),3,!1)),s.setAttribute("aColor",new y(new Float32Array(l),3,!1));let d=new q({fragmentShader:Q,vertexShader:ee,transparent:!0,uniforms:Object.assign({uTime:{value:0},uTravelLength:{value:e.length},uFade:{value:this.fade}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};let p=new U(s,d);p.frustumCulled=!1,this.webgl.scene.add(p),this.mesh=p}update(e){this.mesh.material.uniforms.uTime.value=e}}const Q=`
      #define USE_FOG;
      ${m.fog_pars_fragment}
      varying vec3 vColor;
      varying vec2 vUv; 
      uniform vec2 uFade;
      void main() {
        vec3 color = vec3(vColor);
        float alpha = smoothstep(uFade.x, uFade.y, vUv.x);
        gl_FragColor = vec4(color, alpha);
        if (gl_FragColor.a < 0.0001) discard;
        ${m.fog_fragment}
      }
    `,ee=`
      #define USE_FOG;
      ${m.fog_pars_vertex}
      attribute vec3 aOffset;
      attribute vec3 aMetrics;
      attribute vec3 aColor;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec2 vUv; 
      varying vec3 vColor; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        float radius = aMetrics.r;
        float myLength = aMetrics.g;
        float speed = aMetrics.b;

        transformed.xy *= radius;
        transformed.z *= myLength;

        transformed.z += myLength - mod(uTime * speed + aOffset.z, uTravelLength);
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        vColor = aColor;
        ${m.fog_vertex}
      }
    `;class te{constructor(e,t){this.webgl=e,this.options=t}init(){const e=this.options,t=new j(1,1);let o=new G().copy(t),s=e.totalSideLightSticks;o.instanceCount=s;let r=e.length/(s-1);const n=[],u=[],l=[];let a=e.colors.sticks;Array.isArray(a)?a=a.map(c=>new v(c)):a=new v(a);for(let c=0;c<s;c++){let F=g(e.lightStickWidth),b=g(e.lightStickHeight);n.push((c-1)*r*2+r*Math.random());let P=_(a);u.push(P.r),u.push(P.g),u.push(P.b),l.push(F),l.push(b)}o.setAttribute("aOffset",new y(new Float32Array(n),1,!1)),o.setAttribute("aColor",new y(new Float32Array(u),3,!1)),o.setAttribute("aMetrics",new y(new Float32Array(l),2,!1));const d=new q({fragmentShader:oe,vertexShader:se,side:$,uniforms:Object.assign({uTravelLength:{value:e.length},uTime:{value:0}},this.webgl.fogUniforms,e.distortion.uniforms)});d.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <getDistortion_vertex>",e.distortion.getDistortion)};const p=new U(o,d);p.frustumCulled=!1,this.webgl.scene.add(p),this.mesh=p}update(e){this.mesh.material.uniforms.uTime.value=e}}const se=`
      #define USE_FOG;
      ${m.fog_pars_vertex}
      attribute float aOffset;
      attribute vec3 aColor;
      attribute vec2 aMetrics;
      uniform float uTravelLength;
      uniform float uTime;
      varying vec3 vColor;
      mat4 rotationY( in float angle ) {
        return mat4(	cos(angle),		0,		sin(angle),	0,
                     0,		1.0,			 0,	0,
                -sin(angle),	0,		cos(angle),	0,
                0, 		0,				0,	1);
      }
      #include <getDistortion_vertex>
      void main(){
        vec3 transformed = position.xyz;
        float width = aMetrics.x;
        float height = aMetrics.y;

        transformed.xy *= vec2(width, height);
        float time = mod(uTime * 60. * 2. + aOffset, uTravelLength);

        transformed = (rotationY(3.14/2.) * vec4(transformed,1.)).xyz;

        transformed.z += - uTravelLength + time;

        float progress = abs(transformed.z / uTravelLength);
        transformed.xyz += getDistortion(progress);

        transformed.y += height / 2.;
        transformed.x += -width / 2.;
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vColor = aColor;
        ${m.fog_vertex}
      }
    `,oe=`
      #define USE_FOG;
      ${m.fog_pars_fragment}
      varying vec3 vColor;
      void main(){
        vec3 color = vec3(vColor);
        gl_FragColor = vec4(color,1.);
        ${m.fog_fragment}
      }
    `;class ie{constructor(e,t){this.webgl=e,this.options=t,this.uTime={value:0}}createPlane(e,t,o){const s=this.options;let r=100;const n=new j(o?s.roadWidth:s.islandWidth,s.length,20,r);let u={uTravelLength:{value:s.length},uColor:{value:new v(o?s.colors.roadColor:s.colors.islandColor)},uTime:this.uTime};o&&(u=Object.assign(u,{uLanes:{value:s.lanesPerRoad},uBrokenLinesColor:{value:new v(s.colors.brokenLines)},uShoulderLinesColor:{value:new v(s.colors.shoulderLines)},uShoulderLinesWidthPercentage:{value:s.shoulderLinesWidthPercentage},uBrokenLinesLengthPercentage:{value:s.brokenLinesLengthPercentage},uBrokenLinesWidthPercentage:{value:s.brokenLinesWidthPercentage}}));const l=new q({fragmentShader:o?ne:re,vertexShader:ae,side:$,uniforms:Object.assign(u,this.webgl.fogUniforms,s.distortion.uniforms)});l.onBeforeCompile=d=>{d.vertexShader=d.vertexShader.replace("#include <getDistortion_vertex>",s.distortion.getDistortion)};const a=new U(n,l);return a.rotation.x=-Math.PI/2,a.position.z=-s.length/2,a.position.x+=(this.options.islandWidth/2+s.roadWidth/2)*e,this.webgl.scene.add(a),a}init(){this.leftRoadWay=this.createPlane(-1,this.options.roadWidth,!0),this.rightRoadWay=this.createPlane(1,this.options.roadWidth,!0),this.island=this.createPlane(0,this.options.islandWidth,!1)}update(e){this.uTime.value=e}}const Y=`
      #define USE_FOG;
      varying vec2 vUv; 
      uniform vec3 uColor;
      uniform float uTime;
      #include <roadMarkings_vars>
      ${m.fog_pars_fragment}
      void main() {
        vec2 uv = vUv;
        vec3 color = vec3(uColor);
        #include <roadMarkings_fragment>
        gl_FragColor = vec4(color, 1.);
        ${m.fog_fragment}
      }
    `,re=Y.replace("#include <roadMarkings_fragment>","").replace("#include <roadMarkings_vars>",""),ne=Y.replace("#include <roadMarkings_fragment>",`
      uv.y = mod(uv.y + uTime * 0.05, 1.);
      float laneWidth = 1.0 / uLanes;
      float brokenLineWidth = laneWidth * uBrokenLinesWidthPercentage;
      float laneEmptySpace = 1. - uBrokenLinesLengthPercentage;

      float brokenLines = step(1.0 - brokenLineWidth, fract(uv.x * 2.0)) * step(laneEmptySpace, fract(uv.y * 10.0));
      float sideLines = step(1.0 - brokenLineWidth, fract((uv.x - laneWidth * (uLanes - 1.0)) * 2.0)) + step(brokenLineWidth, uv.x);

      brokenLines = mix(brokenLines, sideLines, uv.x);
    `).replace("#include <roadMarkings_vars>",`
      uniform float uLanes;
      uniform vec3 uBrokenLinesColor;
      uniform vec3 uShoulderLinesColor;
      uniform float uShoulderLinesWidthPercentage;
      uniform float uBrokenLinesWidthPercentage;
      uniform float uBrokenLinesLengthPercentage;
      highp float random(vec2 co) {
        highp float a = 12.9898;
        highp float b = 78.233;
        highp float c = 43758.5453;
        highp float dt = dot(co.xy, vec2(a, b));
        highp float sn = mod(dt, 3.14);
        return fract(sin(sn) * c);
      }
    `),ae=`
      #define USE_FOG;
      uniform float uTime;
      ${m.fog_pars_vertex}
      uniform float uTravelLength;
      varying vec2 vUv; 
      #include <getDistortion_vertex>
      void main() {
        vec3 transformed = position.xyz;
        vec3 distortion = getDistortion((transformed.y + uTravelLength / 2.) / uTravelLength);
        transformed.x += distortion.x;
        transformed.z += distortion.y;
        transformed.y += -1. * distortion.z;  
        
        vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
        ${m.fog_vertex}
      }
    `;function ue(i,e){const t=i.domElement,o=t.clientWidth,s=t.clientHeight,r=t.width!==o||t.height!==s;return r&&e(o,s,!1),r}return(function(){const i=document.getElementById("lights"),e={...W};e.distortion=J[e.distortion];const t=new N(i,e);L.current=t,t.loadAssets().then(t.init)})(),()=>{L.current&&L.current.dispose()}},[W]),le.jsx("div",{id:"lights",className:"w-full h-full",ref:V})};export{Te as default};
