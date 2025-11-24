import {
  r as e,
  j as t,
  aR as i,
  aS as s,
  aT as n,
  aU as o,
  aV as r,
  aW as h,
  aX as a,
} from './vendor-DEG5g0yW.js';
const d = [
  { image: 'https://i.ibb.co/0Vt8cMRV/Photo1.jpg', text: 'Red Flowers' },
  { image: 'https://i.ibb.co/39HW4P07/Photo2.jpg', text: '23' },
  { image: 'https://i.ibb.co/6RF1WhR7/Photo3.jpg', text: 'Red Gradient' },
  { image: 'https://i.ibb.co/QF0JJMSm/Photo4.jpg', text: 'Ai' },
];
class Media {
  constructor({
    geometry: e,
    gl: t,
    image: i,
    index: s,
    length: n,
    renderer: o,
    scene: r,
    screen: h,
    viewport: a,
    bend: d,
    borderRadius: c = 0,
  }) {
    ((this.extra = 0),
      (this.geometry = e),
      (this.gl = t),
      (this.image = i),
      (this.index = s),
      (this.length = n),
      (this.renderer = o),
      (this.scene = r),
      (this.screen = h),
      (this.viewport = a),
      (this.bend = d),
      (this.borderRadius = c),
      this.createShader(),
      this.createMesh(),
      this.onResize());
  }
  createShader() {
    const e = new r(this.gl, { generateMipmaps: !0 });
    this.program = new h(this.gl, {
      depthTest: !1,
      depthWrite: !1,
      vertex:
        '\n        precision highp float;\n        attribute vec3 position;\n        attribute vec2 uv;\n        uniform mat4 modelViewMatrix;\n        uniform mat4 projectionMatrix;\n        uniform float uTime;\n        uniform float uSpeed;\n        varying vec2 vUv;\n        void main() {\n          vUv = uv;\n          vec3 p = position;\n          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);\n          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);\n        }\n      ',
      fragment:
        '\n        precision highp float;\n        uniform vec2 uImageSizes;\n        uniform vec2 uPlaneSizes;\n        uniform sampler2D tMap;\n        uniform float uBorderRadius;\n        varying vec2 vUv;\n        \n        float roundedBoxSDF(vec2 p, vec2 b, float r) {\n          vec2 d = abs(p) - b;\n          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;\n        }\n        \n        void main() {\n          vec2 ratio = vec2(\n            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),\n            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)\n          );\n          vec2 uv = vec2(\n            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5\n          );\n          vec4 color = texture2D(tMap, uv);\n          \n          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);\n          \n          // Smooth antialiasing for edges\n          float edgeSmooth = 0.002;\n          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);\n          \n          gl_FragColor = vec4(color.rgb, alpha);\n        }\n      ',
      uniforms: {
        tMap: { value: e },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: !0,
    });
    const t = new Image();
    ((t.crossOrigin = 'anonymous'),
      (t.src = this.image),
      (t.onload = () => {
        ((e.image = t),
          (this.program.uniforms.uImageSizes.value = [
            t.naturalWidth,
            t.naturalHeight,
          ]));
      }));
  }
  createMesh() {
    ((this.plane = new a(this.gl, {
      geometry: this.geometry,
      program: this.program,
    })),
      this.plane.setParent(this.scene));
  }
  update(e, t) {
    this.plane.position.x = this.x - e.current - this.extra;
    const i = this.plane.position.x,
      s = this.viewport.width / 2;
    if (0 === this.bend)
      ((this.plane.position.y = 0), (this.plane.rotation.z = 0));
    else {
      const e = Math.abs(this.bend),
        t = (s * s + e * e) / (2 * e),
        n = Math.min(Math.abs(i), s),
        o = t - Math.sqrt(t * t - n * n);
      this.bend > 0
        ? ((this.plane.position.y = -o),
          (this.plane.rotation.z = -Math.sign(i) * Math.asin(n / t)))
        : ((this.plane.position.y = o),
          (this.plane.rotation.z = Math.sign(i) * Math.asin(n / t)));
    }
    ((this.speed = e.current - e.last),
      (this.program.uniforms.uTime.value += 0.04),
      (this.program.uniforms.uSpeed.value = this.speed));
    const n = this.plane.scale.x / 2,
      o = this.viewport.width / 2;
    ((this.isBefore = this.plane.position.x + n < -o),
      (this.isAfter = this.plane.position.x - n > o),
      'right' === t &&
        this.isBefore &&
        ((this.extra -= this.widthTotal), (this.isBefore = this.isAfter = !1)),
      'left' === t &&
        this.isAfter &&
        ((this.extra += this.widthTotal), (this.isBefore = this.isAfter = !1)));
  }
  onResize({ screen: e, viewport: t } = {}) {
    (e && (this.screen = e),
      t &&
        ((this.viewport = t),
        this.plane.program.uniforms.uViewportSizes &&
          (this.plane.program.uniforms.uViewportSizes.value = [
            this.viewport.width,
            this.viewport.height,
          ])),
      (this.scale = this.screen.height / 1500),
      (this.plane.scale.y =
        (this.viewport.height * (900 * this.scale)) / this.screen.height),
      (this.plane.scale.x =
        (this.viewport.width * (700 * this.scale)) / this.screen.width),
      (this.plane.program.uniforms.uPlaneSizes.value = [
        this.plane.scale.x,
        this.plane.scale.y,
      ]),
      (this.padding = 2),
      (this.width = this.plane.scale.x + this.padding),
      (this.widthTotal = this.width * this.length),
      (this.x = this.width * this.index));
  }
}
class App {
  constructor(
    e,
    {
      items: t,
      bend: i,
      borderRadius: s = 0.05,
      scrollSpeed: n = 2,
      scrollEase: o = 0.05,
    } = {}
  ) {
    (document.documentElement.classList.remove('no-js'),
      (this.container = e),
      (this.scrollSpeed = n),
      (this.scroll = { ease: o, current: 0, target: 0, last: 0 }),
      (this.onCheckDebounce = (function (e, t) {
        let i;
        return function (...s) {
          (clearTimeout(i), (i = setTimeout(() => e.apply(this, s), t)));
        };
      })(this.onCheck, 200)),
      this.createRenderer(),
      this.createCamera(),
      this.createScene(),
      this.onResize(),
      this.createGeometry(),
      this.createMedias(t, i, s),
      this.update(),
      this.addEventListeners());
  }
  createRenderer() {
    ((this.renderer = new i({
      alpha: !0,
      antialias: !0,
      dpr: Math.min(window.devicePixelRatio || 1, 2),
    })),
      (this.gl = this.renderer.gl),
      this.gl.clearColor(0, 0, 0, 0),
      this.container.appendChild(this.gl.canvas));
  }
  createCamera() {
    ((this.camera = new s(this.gl)),
      (this.camera.fov = 45),
      (this.camera.position.z = 20));
  }
  createScene() {
    this.scene = new n();
  }
  createGeometry() {
    this.planeGeometry = new o(this.gl, {
      heightSegments: 50,
      widthSegments: 100,
    });
  }
  createMedias(e, t = 1, i) {
    const s = e && e.length ? e : d;
    ((this.mediasImages = s.concat(s)),
      (this.medias = this.mediasImages.map(
        (e, s) =>
          new Media({
            geometry: this.planeGeometry,
            gl: this.gl,
            image: e.image,
            index: s,
            length: this.mediasImages.length,
            renderer: this.renderer,
            scene: this.scene,
            screen: this.screen,
            viewport: this.viewport,
            bend: t,
            borderRadius: i,
          })
      )));
  }
  onTouchDown(e) {
    ((this.isDown = !0),
      (this.scroll.position = this.scroll.current),
      (this.start = e.touches ? e.touches[0].clientX : e.clientX));
  }
  onTouchMove(e) {
    if (!this.isDown) return;
    const t = e.touches ? e.touches[0].clientX : e.clientX,
      i = (this.start - t) * (0.025 * this.scrollSpeed);
    this.scroll.target = this.scroll.position + i;
  }
  onTouchUp() {
    ((this.isDown = !1), this.onCheck());
  }
  onWheel(e) {
    const t = e.deltaY || e.wheelDelta || e.detail;
    ((this.scroll.target +=
      0.2 * (t > 0 ? this.scrollSpeed : -this.scrollSpeed)),
      this.onCheckDebounce());
  }
  onCheck() {
    if (!this.medias || !this.medias[0]) return;
    const e = this.medias[0].width,
      t = e * Math.round(Math.abs(this.scroll.target) / e);
    this.scroll.target = this.scroll.target < 0 ? -t : t;
  }
  onResize() {
    ((this.screen = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    }),
      this.renderer.setSize(this.screen.width, this.screen.height),
      this.camera.perspective({
        aspect: this.screen.width / this.screen.height,
      }));
    const e = (this.camera.fov * Math.PI) / 180,
      t = 2 * Math.tan(e / 2) * this.camera.position.z,
      i = t * this.camera.aspect;
    ((this.viewport = { width: i, height: t }),
      this.medias &&
        this.medias.forEach((e) =>
          e.onResize({ screen: this.screen, viewport: this.viewport })
        ));
  }
  update() {
    var e, t, i;
    this.scroll.current =
      ((e = this.scroll.current),
      (t = this.scroll.target),
      (i = this.scroll.ease),
      e + (t - e) * i);
    const s = this.scroll.current > this.scroll.last ? 'right' : 'left';
    (this.medias && this.medias.forEach((e) => e.update(this.scroll, s)),
      this.renderer.render({ scene: this.scene, camera: this.camera }),
      (this.scroll.last = this.scroll.current),
      (this.raf = window.requestAnimationFrame(this.update.bind(this))));
  }
  addEventListeners() {
    ((this.boundOnResize = this.onResize.bind(this)),
      (this.boundOnWheel = this.onWheel.bind(this)),
      (this.boundOnTouchDown = this.onTouchDown.bind(this)),
      (this.boundOnTouchMove = this.onTouchMove.bind(this)),
      (this.boundOnTouchUp = this.onTouchUp.bind(this)),
      window.addEventListener('resize', this.boundOnResize),
      window.addEventListener('mousewheel', this.boundOnWheel),
      window.addEventListener('wheel', this.boundOnWheel),
      window.addEventListener('mousedown', this.boundOnTouchDown),
      window.addEventListener('mousemove', this.boundOnTouchMove),
      window.addEventListener('mouseup', this.boundOnTouchUp),
      window.addEventListener('touchstart', this.boundOnTouchDown),
      window.addEventListener('touchmove', this.boundOnTouchMove),
      window.addEventListener('touchend', this.boundOnTouchUp));
  }
  destroy() {
    (window.cancelAnimationFrame(this.raf),
      window.removeEventListener('resize', this.boundOnResize),
      window.removeEventListener('mousewheel', this.boundOnWheel),
      window.removeEventListener('wheel', this.boundOnWheel),
      window.removeEventListener('mousedown', this.boundOnTouchDown),
      window.removeEventListener('mousemove', this.boundOnTouchMove),
      window.removeEventListener('mouseup', this.boundOnTouchUp),
      window.removeEventListener('touchstart', this.boundOnTouchDown),
      window.removeEventListener('touchmove', this.boundOnTouchMove),
      window.removeEventListener('touchend', this.boundOnTouchUp),
      this.renderer &&
        this.renderer.gl &&
        this.renderer.gl.canvas.parentNode &&
        this.renderer.gl.canvas.parentNode.removeChild(
          this.renderer.gl.canvas
        ));
  }
}
function CircularGallery({
  items: i = d,
  bend: s = 3,
  textColor: n = '#ffffff',
  borderRadius: o = 0.05,
  font: r = "bold 30px 'Bitcount Grid Double', system-ui, sans-serif",
  scrollSpeed: h = 2,
  scrollEase: a = 0.05,
}) {
  const c = e.useRef(null);
  return (
    e.useEffect(() => {
      let e;
      return (
        document.fonts.ready.then(() => {
          e = new App(c.current, {
            items: i,
            bend: s,
            textColor: n,
            borderRadius: o,
            font: r,
            scrollSpeed: h,
            scrollEase: a,
          });
        }),
        () => {
          e?.destroy();
        }
      );
    }, [i, s, n, o, r, h, a]),
    t.jsx('div', {
      className:
        'w-full h-full overflow-hidden cursor-grab active:cursor-grabbing',
      ref: c,
    })
  );
}
export { CircularGallery as default };
