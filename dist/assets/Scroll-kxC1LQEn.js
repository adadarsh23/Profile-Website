import { r as T, j as d } from './vendor_react-C8wG62CJ.js';
import {
  a4 as m,
  a5 as A,
  a6 as w,
  a7 as P,
  a8 as Y,
  a9 as G,
  aa as S,
  ab as x,
  ac as I,
  ad as D,
  ae as O,
  af as U,
  ag as k,
  ah as W,
  ai as F,
  aj as X,
  ak as R,
  al as H,
  am as p,
  an as C,
  ao as V,
  ap as q,
  aq as $,
  ar as Q,
  as as K,
  at as _,
  au as Z,
  av as N,
  aw as L,
  ax as J,
  ay as tt,
  az as et,
} from './vendor-Grk_15WJ.js';
import { l as it } from './index-BtU_4mIL.js';
import './vendor_react-dom-DKAsGG5-.js';
const st = `#version 300 es

uniform mat4 uWorldMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uProjectionMatrix;
uniform vec3 uCameraPosition;
uniform vec4 uRotationAxisVelocity;

in vec3 aModelPosition;
in vec3 aModelNormal;
in vec2 aModelUvs;
in mat4 aInstanceMatrix;

out vec2 vUvs;
out float vAlpha;
flat out int vInstanceId;

#define PI 3.141593

void main() {
    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);

    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;
    float radius = length(centerPos.xyz);

    if (gl_VertexID > 0) {
        vec3 rotationAxis = uRotationAxisVelocity.xyz;
        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);
        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));
        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);
        float strength = dot(stretchDir, relativeVertexPos);
        float invAbsStrength = min(0., abs(strength) - 1.);
        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);
        worldPosition.xyz += stretchDir * strength;
    }

    worldPosition.xyz = radius * normalize(worldPosition.xyz);

    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;

    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;
    vUvs = aModelUvs;
    vInstanceId = gl_InstanceID;
}
`,
  ot = `#version 300 es
precision highp float;

uniform sampler2D uTex;
uniform int uItemCount;
uniform int uAtlasSize;

out vec4 outColor;

in vec2 vUvs;
in float vAlpha;
flat in int vInstanceId;

void main() {
    int itemIndex = vInstanceId % uItemCount;
    int cellsPerRow = uAtlasSize;
    int cellX = itemIndex % cellsPerRow;
    int cellY = itemIndex / cellsPerRow;
    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));
    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;

    ivec2 texSize = textureSize(uTex, 0);
    float imageAspect = float(texSize.x) / float(texSize.y);
    float containerAspect = 1.0;
    
    float scale = max(imageAspect / containerAspect, 
                     containerAspect / imageAspect);
    
    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);
    st = (st - 0.5) * scale + 0.5;
    
    st = clamp(st, 0.0, 1.0);
    
    st = st * cellSize + cellOffset;
    
    outColor = texture(uTex, st);
    outColor.a *= vAlpha;
}
`;
class g {
  constructor(t, e, i) {
    ((this.a = t), (this.b = e), (this.c = i));
  }
}
class at {
  constructor(t, e, i) {
    ((this.position = A(t, e, i)), (this.normal = x()), (this.uv = P()));
  }
}
class B {
  constructor() {
    ((this.vertices = []), (this.faces = []));
  }
  addVertex(...t) {
    for (let e = 0; e < t.length; e += 3)
      this.vertices.push(new at(t[e], t[e + 1], t[e + 2]));
    return this;
  }
  addFace(...t) {
    for (let e = 0; e < t.length; e += 3)
      this.faces.push(new g(t[e], t[e + 1], t[e + 2]));
    return this;
  }
  get lastVertex() {
    return this.vertices[this.vertices.length - 1];
  }
  subdivide(t = 1) {
    const e = {};
    let i = this.faces;
    for (let a = 0; a < t; ++a) {
      const o = new Array(i.length * 4);
      (i.forEach((n, r) => {
        const c = this.getMidPoint(n.a, n.b, e),
          l = this.getMidPoint(n.b, n.c, e),
          h = this.getMidPoint(n.c, n.a, e),
          u = r * 4;
        ((o[u + 0] = new g(n.a, c, h)),
          (o[u + 1] = new g(n.b, l, c)),
          (o[u + 2] = new g(n.c, h, l)),
          (o[u + 3] = new g(c, l, h)));
      }),
        (i = o));
    }
    return ((this.faces = i), this);
  }
  spherize(t = 1) {
    return (
      this.vertices.forEach((e) => {
        (R(e.normal, e.position), et(e.position, e.normal, t));
      }),
      this
    );
  }
  get data() {
    return {
      vertices: this.vertexData,
      indices: this.indexData,
      normals: this.normalData,
      uvs: this.uvData,
    };
  }
  get vertexData() {
    return new Float32Array(
      this.vertices.flatMap((t) => Array.from(t.position))
    );
  }
  get normalData() {
    return new Float32Array(this.vertices.flatMap((t) => Array.from(t.normal)));
  }
  get uvData() {
    return new Float32Array(this.vertices.flatMap((t) => Array.from(t.uv)));
  }
  get indexData() {
    return new Uint16Array(this.faces.flatMap((t) => [t.a, t.b, t.c]));
  }
  getMidPoint(t, e, i) {
    const a = t < e ? `k_${e}_${t}` : `k_${t}_${e}`;
    if (Object.prototype.hasOwnProperty.call(i, a)) return i[a];
    const o = this.vertices[t].position,
      n = this.vertices[e].position,
      r = this.vertices.length;
    return (
      (i[a] = r),
      this.addVertex(
        (o[0] + n[0]) * 0.5,
        (o[1] + n[1]) * 0.5,
        (o[2] + n[2]) * 0.5
      ),
      r
    );
  }
}
class nt extends B {
  constructor() {
    super();
    const t = Math.sqrt(5) * 0.5 + 0.5;
    this.addVertex(
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      0,
      0,
      -1,
      t,
      0,
      1,
      t,
      0,
      -1,
      -t,
      0,
      1,
      -t,
      t,
      0,
      -1,
      t,
      0,
      1,
      -t,
      0,
      -1,
      -t,
      0,
      1
    ).addFace(
      0,
      11,
      5,
      0,
      5,
      1,
      0,
      1,
      7,
      0,
      7,
      10,
      0,
      10,
      11,
      1,
      5,
      9,
      5,
      11,
      4,
      11,
      10,
      2,
      10,
      7,
      6,
      7,
      1,
      8,
      3,
      9,
      4,
      3,
      4,
      2,
      3,
      2,
      6,
      3,
      6,
      8,
      3,
      8,
      9,
      4,
      9,
      5,
      2,
      4,
      11,
      6,
      2,
      10,
      8,
      6,
      7,
      9,
      8,
      1
    );
  }
}
class rt extends B {
  constructor(t = 4, e = 1) {
    (super(), (t = Math.max(4, t)));
    const i = (2 * Math.PI) / t;
    (this.addVertex(0, 0, 0),
      (this.lastVertex.uv[0] = 0.5),
      (this.lastVertex.uv[1] = 0.5));
    for (let a = 0; a < t; ++a) {
      const o = Math.cos(i * a),
        n = Math.sin(i * a);
      (this.addVertex(e * o, e * n, 0),
        (this.lastVertex.uv[0] = o * 0.5 + 0.5),
        (this.lastVertex.uv[1] = n * 0.5 + 0.5),
        a > 0 && this.addFace(0, a, a + 1));
    }
    this.addFace(0, t, 1);
  }
}
function ct(s, t, e) {
  const i = s.createShader(t);
  return (
    s.shaderSource(i, e),
    s.compileShader(i),
    s.getShaderParameter(i, s.COMPILE_STATUS)
      ? i
      : (console.error(s.getShaderInfoLog(i)), s.deleteShader(i), null)
  );
}
function ht(s, t, e, i) {
  const a = s.createProgram();
  if (
    ([s.VERTEX_SHADER, s.FRAGMENT_SHADER].forEach((n, r) => {
      const c = ct(s, n, t[r]);
      c && s.attachShader(a, c);
    }),
    i)
  )
    for (const n in i) s.bindAttribLocation(a, i[n], n);
  return (
    s.linkProgram(a),
    s.getProgramParameter(a, s.LINK_STATUS)
      ? a
      : (console.error(s.getProgramInfoLog(a)), s.deleteProgram(a), null)
  );
}
function lt(s, t, e) {
  const i = s.createVertexArray();
  s.bindVertexArray(i);
  for (const [a, o, n] of t)
    o !== -1 &&
      (s.bindBuffer(s.ARRAY_BUFFER, a),
      s.enableVertexAttribArray(o),
      s.vertexAttribPointer(o, n, s.FLOAT, !1, 0, 0));
  if (e) {
    const a = s.createBuffer();
    (s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, a),
      s.bufferData(s.ELEMENT_ARRAY_BUFFER, new Uint16Array(e), s.STATIC_DRAW));
  }
  return (s.bindVertexArray(null), i);
}
function mt(s) {
  const t = Math.min(2, window.devicePixelRatio),
    e = Math.round(s.clientWidth * t),
    i = Math.round(s.clientHeight * t),
    a = s.width !== e || s.height !== i;
  return (a && ((s.width = e), (s.height = i)), a);
}
function z(s, t, e) {
  const i = s.createBuffer();
  return (
    s.bindBuffer(s.ARRAY_BUFFER, i),
    s.bufferData(s.ARRAY_BUFFER, t, e),
    s.bindBuffer(s.ARRAY_BUFFER, null),
    i
  );
}
function dt(s, t, e, i, a) {
  const o = s.createTexture();
  return (
    s.bindTexture(s.TEXTURE_2D, o),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, i),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, a),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, t),
    s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, e),
    o
  );
}
class ut {
  isPointerDown = !1;
  orientation = p();
  pointerRotation = p();
  rotationVelocity = 0;
  rotationAxis = A(1, 0, 0);
  snapDirection = A(0, 0, -1);
  snapTargetDirection;
  EPSILON = 0.1;
  IDENTITY_QUAT = p();
  constructor(t, e) {
    ((this.canvas = t),
      (this.updateCallback = e || (() => null)),
      (this.pointerPos = P()),
      (this.previousPointerPos = P()),
      (this._rotationVelocity = 0),
      (this._combinedQuat = p()),
      t.addEventListener('pointerdown', (i) => {
        (w(this.pointerPos, i.clientX, i.clientY),
          V(this.previousPointerPos, this.pointerPos),
          (this.isPointerDown = !0));
      }),
      t.addEventListener('pointerup', () => {
        this.isPointerDown = !1;
      }),
      t.addEventListener('pointerleave', () => {
        this.isPointerDown = !1;
      }),
      t.addEventListener('pointermove', (i) => {
        this.isPointerDown && w(this.pointerPos, i.clientX, i.clientY);
      }),
      (t.style.touchAction = 'none'));
  }
  update(t, e = 16) {
    const i = t / e + 1e-5;
    let a = i,
      o = p();
    if (this.isPointerDown) {
      const v = 0.3 * i,
        y = 5 / i,
        f = q(P(), this.pointerPos, this.previousPointerPos);
      if (($(f, f, v), Q(f) > this.EPSILON)) {
        K(f, this.previousPointerPos, f);
        const E = this.#t(f),
          b = this.#t(this.previousPointerPos),
          M = R(x(), E),
          j = R(x(), b);
        (V(this.previousPointerPos, f),
          (a *= y),
          this.quatFromVectors(M, j, this.pointerRotation, a));
      } else
        _(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, v);
    } else {
      const v = 0.1 * i;
      if (
        (_(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, v),
        this.snapTargetDirection)
      ) {
        const f = this.snapTargetDirection,
          E = this.snapDirection,
          b = Z(f, E),
          M = Math.max(0.1, 1 - b * 10);
        ((a *= 0.2 * M), this.quatFromVectors(f, E, o, a));
      }
    }
    const n = N(p(), o, this.pointerRotation);
    ((this.orientation = N(p(), n, this.orientation)),
      L(this.orientation, this.orientation));
    const r = 0.8 * i;
    (_(this._combinedQuat, this._combinedQuat, n, r),
      L(this._combinedQuat, this._combinedQuat));
    const c = Math.acos(this._combinedQuat[3]) * 2,
      l = Math.sin(c / 2);
    let h = 0;
    l > 1e-6 &&
      ((h = c / (2 * Math.PI)),
      (this.rotationAxis[0] = this._combinedQuat[0] / l),
      (this.rotationAxis[1] = this._combinedQuat[1] / l),
      (this.rotationAxis[2] = this._combinedQuat[2] / l));
    const u = 0.5 * i;
    ((this._rotationVelocity += (h - this._rotationVelocity) * u),
      (this.rotationVelocity = this._rotationVelocity / i),
      this.updateCallback(t));
  }
  quatFromVectors(t, e, i, a = 1) {
    const o = J(x(), t, e);
    R(o, o);
    const n = Math.max(-1, Math.min(1, C(t, e))),
      r = Math.acos(n) * a;
    return (tt(i, o, r), { q: i, axis: o, angle: r });
  }
  #t(t) {
    const i = this.canvas.clientWidth,
      a = this.canvas.clientHeight,
      o = Math.max(i, a) - 1,
      n = (2 * t[0] - i - 1) / o,
      r = (2 * t[1] - a - 1) / o;
    let c = 0;
    const l = n * n + r * r,
      h = 4;
    return (
      l <= h / 2 ? (c = Math.sqrt(h - l)) : (c = h / Math.sqrt(l)),
      A(-n, r, c)
    );
  }
}
class ft {
  TARGET_FRAME_DURATION = 1e3 / 60;
  SPHERE_RADIUS = 2;
  #t = 0;
  #e = 0;
  #i = 0;
  #s = 0;
  camera = {
    matrix: m(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: A(0, 0, 3),
    up: A(0, 1, 0),
    matrices: { view: m(), projection: m(), inversProjection: m() },
  };
  nearestVertexIndex = null;
  smoothRotationVelocity = 0;
  scaleFactor = 1;
  movementActive = !1;
  constructor(t, e, i, a, o = null) {
    ((this.canvas = t),
      (this.items = e || []),
      (this.onActiveItemChange = i || (() => {})),
      (this.onMovementChange = a || (() => {})),
      this.#n(o));
  }
  resize() {
    this.viewportSize = w(
      this.viewportSize || P(),
      this.canvas.clientWidth,
      this.canvas.clientHeight
    );
    const t = this.gl;
    (mt(t.canvas) &&
      t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
      this.#a(t));
  }
  run(t = 0) {
    ((this.#e = Math.min(32, t - this.#t)),
      (this.#t = t),
      (this.#i = this.#e / this.TARGET_FRAME_DURATION),
      (this.#s += this.#i),
      this.#h(this.#e),
      this.#l(),
      requestAnimationFrame((e) => this.run(e)));
  }
  #n(t) {
    this.gl = this.canvas.getContext('webgl2', { antialias: !0, alpha: !1 });
    const e = this.gl;
    if (!e) throw new Error('No WebGL 2 context!');
    ((this.viewportSize = Y(this.canvas.clientWidth, this.canvas.clientHeight)),
      (this.drawBufferSize = G(this.viewportSize)),
      (this.discProgram = ht(e, [st, ot], null, {
        aModelPosition: 0,
        aModelNormal: 1,
        aModelUvs: 2,
        aInstanceMatrix: 3,
      })),
      (this.discLocations = {
        aModelPosition: e.getAttribLocation(this.discProgram, 'aModelPosition'),
        aModelUvs: e.getAttribLocation(this.discProgram, 'aModelUvs'),
        aInstanceMatrix: e.getAttribLocation(
          this.discProgram,
          'aInstanceMatrix'
        ),
        uWorldMatrix: e.getUniformLocation(this.discProgram, 'uWorldMatrix'),
        uViewMatrix: e.getUniformLocation(this.discProgram, 'uViewMatrix'),
        uProjectionMatrix: e.getUniformLocation(
          this.discProgram,
          'uProjectionMatrix'
        ),
        uCameraPosition: e.getUniformLocation(
          this.discProgram,
          'uCameraPosition'
        ),
        uScaleFactor: e.getUniformLocation(this.discProgram, 'uScaleFactor'),
        uRotationAxisVelocity: e.getUniformLocation(
          this.discProgram,
          'uRotationAxisVelocity'
        ),
        uTex: e.getUniformLocation(this.discProgram, 'uTex'),
        uFrames: e.getUniformLocation(this.discProgram, 'uFrames'),
        uItemCount: e.getUniformLocation(this.discProgram, 'uItemCount'),
        uAtlasSize: e.getUniformLocation(this.discProgram, 'uAtlasSize'),
      }),
      (this.discGeo = new rt(56, 1)),
      (this.discBuffers = this.discGeo.data),
      (this.discVAO = lt(
        e,
        [
          [
            z(e, this.discBuffers.vertices, e.STATIC_DRAW),
            this.discLocations.aModelPosition,
            3,
          ],
          [
            z(e, this.discBuffers.uvs, e.STATIC_DRAW),
            this.discLocations.aModelUvs,
            2,
          ],
        ],
        this.discBuffers.indices
      )),
      (this.icoGeo = new nt()),
      this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS),
      (this.instancePositions = this.icoGeo.vertices.map((i) => i.position)),
      (this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length),
      this.#c(this.DISC_INSTANCE_COUNT),
      (this.worldMatrix = m()),
      this.#r(),
      (this.control = new ut(this.canvas, (i) => this.#m(i))),
      this.#o(),
      this.#a(e),
      this.resize(),
      t && t(this));
  }
  #r() {
    const t = this.gl;
    this.tex = dt(t, t.LINEAR, t.LINEAR, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE);
    const e = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(e));
    const i = document.createElement('canvas'),
      a = i.getContext('2d'),
      o = 512;
    ((i.width = this.atlasSize * o),
      (i.height = this.atlasSize * o),
      Promise.all(
        this.items.map(
          (n) =>
            new Promise((r) => {
              const c = new Image();
              ((c.crossOrigin = 'anonymous'),
                (c.onload = () => r(c)),
                (c.src = n.image));
            })
        )
      ).then((n) => {
        (n.forEach((r, c) => {
          const l = (c % this.atlasSize) * o,
            h = Math.floor(c / this.atlasSize) * o;
          a.drawImage(r, l, h, o, o);
        }),
          t.bindTexture(t.TEXTURE_2D, this.tex),
          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, i),
          t.generateMipmap(t.TEXTURE_2D));
      }));
  }
  #c(t) {
    const e = this.gl;
    this.discInstances = {
      matricesArray: new Float32Array(t * 16),
      matrices: [],
      buffer: e.createBuffer(),
    };
    for (let o = 0; o < t; ++o) {
      const n = new Float32Array(
        this.discInstances.matricesArray.buffer,
        o * 16 * 4,
        16
      );
      (n.set(m()), this.discInstances.matrices.push(n));
    }
    (e.bindVertexArray(this.discVAO),
      e.bindBuffer(e.ARRAY_BUFFER, this.discInstances.buffer),
      e.bufferData(
        e.ARRAY_BUFFER,
        this.discInstances.matricesArray.byteLength,
        e.DYNAMIC_DRAW
      ));
    const i = 4,
      a = 64;
    for (let o = 0; o < i; ++o) {
      const n = this.discLocations.aInstanceMatrix + o;
      (e.enableVertexAttribArray(n),
        e.vertexAttribPointer(n, 4, e.FLOAT, !1, a, o * 4 * 4),
        e.vertexAttribDivisor(n, 1));
    }
    (e.bindBuffer(e.ARRAY_BUFFER, null), e.bindVertexArray(null));
  }
  #h(t) {
    const e = this.gl;
    this.control.update(t, this.TARGET_FRAME_DURATION);
    let i = this.instancePositions.map((n) =>
      S(x(), n, this.control.orientation)
    );
    const a = 0.25,
      o = 0.6;
    (i.forEach((n, r) => {
      const l = ((Math.abs(n[2]) / this.SPHERE_RADIUS) * o + (1 - o)) * a,
        h = m();
      (I(h, h, D(m(), O(x(), n))),
        I(h, h, U(m(), [0, 0, 0], n, [0, 1, 0])),
        I(h, h, k(m(), [l, l, l])),
        I(h, h, D(m(), [0, 0, -this.SPHERE_RADIUS])),
        W(this.discInstances.matrices[r], h));
    }),
      e.bindBuffer(e.ARRAY_BUFFER, this.discInstances.buffer),
      e.bufferSubData(e.ARRAY_BUFFER, 0, this.discInstances.matricesArray),
      e.bindBuffer(e.ARRAY_BUFFER, null),
      (this.smoothRotationVelocity = this.control.rotationVelocity));
  }
  #l() {
    const t = this.gl;
    (t.useProgram(this.discProgram),
      t.enable(t.CULL_FACE),
      t.enable(t.DEPTH_TEST),
      t.clearColor(0, 0, 0, 0),
      t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT),
      t.uniformMatrix4fv(this.discLocations.uWorldMatrix, !1, this.worldMatrix),
      t.uniformMatrix4fv(
        this.discLocations.uViewMatrix,
        !1,
        this.camera.matrices.view
      ),
      t.uniformMatrix4fv(
        this.discLocations.uProjectionMatrix,
        !1,
        this.camera.matrices.projection
      ),
      t.uniform3f(
        this.discLocations.uCameraPosition,
        this.camera.position[0],
        this.camera.position[1],
        this.camera.position[2]
      ),
      t.uniform4f(
        this.discLocations.uRotationAxisVelocity,
        this.control.rotationAxis[0],
        this.control.rotationAxis[1],
        this.control.rotationAxis[2],
        this.smoothRotationVelocity * 1.1
      ),
      t.uniform1i(this.discLocations.uItemCount, this.items.length),
      t.uniform1i(this.discLocations.uAtlasSize, this.atlasSize),
      t.uniform1f(this.discLocations.uFrames, this.#s),
      t.uniform1f(this.discLocations.uScaleFactor, this.scaleFactor),
      t.uniform1i(this.discLocations.uTex, 0),
      t.activeTexture(t.TEXTURE0),
      t.bindTexture(t.TEXTURE_2D, this.tex),
      t.bindVertexArray(this.discVAO),
      t.drawElementsInstanced(
        t.TRIANGLES,
        this.discBuffers.indices.length,
        t.UNSIGNED_SHORT,
        0,
        this.DISC_INSTANCE_COUNT
      ));
  }
  #o() {
    (U(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up),
      F(this.camera.matrices.view, this.camera.matrix));
  }
  #a(t) {
    this.camera.aspect = t.canvas.clientWidth / t.canvas.clientHeight;
    const e = this.SPHERE_RADIUS * 0.35,
      i = this.camera.position[2];
    (this.camera.aspect > 1
      ? (this.camera.fov = 2 * Math.atan(e / i))
      : (this.camera.fov = 2 * Math.atan(e / this.camera.aspect / i)),
      X(
        this.camera.matrices.projection,
        this.camera.fov,
        this.camera.aspect,
        this.camera.near,
        this.camera.far
      ),
      F(
        this.camera.matrices.inversProjection,
        this.camera.matrices.projection
      ));
  }
  #m(t) {
    const e = t / this.TARGET_FRAME_DURATION + 1e-4;
    let i = 5 / e,
      a = 3;
    const o =
      this.control.isPointerDown ||
      Math.abs(this.smoothRotationVelocity) > 0.01;
    if (
      (o !== this.movementActive &&
        ((this.movementActive = o), this.onMovementChange(o)),
      this.control.isPointerDown)
    )
      ((a += this.control.rotationVelocity * 80 + 2.5), (i = 7 / e));
    else {
      const n = this.#d(),
        r = n % Math.max(1, this.items.length);
      this.onActiveItemChange(r);
      const c = R(x(), this.#u(n));
      this.control.snapTargetDirection = c;
    }
    ((this.camera.position[2] += (a - this.camera.position[2]) / i), this.#o());
  }
  #d() {
    const t = this.control.snapDirection,
      e = H(p(), this.control.orientation),
      i = S(x(), t, e);
    let a = -1,
      o;
    for (let n = 0; n < this.instancePositions.length; ++n) {
      const r = C(i, this.instancePositions[n]);
      r > a && ((a = r), (o = n));
    }
    return o;
  }
  #u(t) {
    const e = this.instancePositions[t];
    return S(x(), e, this.control.orientation);
  }
}
const xt = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: '',
  },
];
function pt({ items: s = [] }) {
  const t = T.useRef(null),
    [e, i] = T.useState(null),
    [a, o] = T.useState(!1);
  T.useEffect(() => {
    const r = t.current;
    let c;
    const l = (u) => {
      const v = u % s.length;
      i(s[v]);
    };
    r && (c = new ft(r, s.length ? s : xt, l, o, (u) => u.run()));
    const h = () => {
      c && c.resize();
    };
    return (
      window.addEventListener('resize', h),
      h(),
      () => {
        window.removeEventListener('resize', h);
      }
    );
  }, [s]);
  const n = () => {
    e?.link && e.link.startsWith('http') && window.open(e.link, '_blank');
  };
  return d.jsxs('div', {
    className: 'relative w-full h-full',
    children: [
      d.jsx('canvas', {
        id: 'infinite-grid-menu-canvas',
        ref: t,
        className:
          'cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing',
      }),
      e &&
        d.jsxs(d.Fragment, {
          children: [
            d.jsx('h2', {
              className: `
          select-none
          absolute
          font-black
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10
          top-[45%] sm:top-1/2
          transform
          translate-x-1/4
          -translate-y-1/2
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          ${a ? 'opacity-0 pointer-events-none duration-[100ms]' : 'opacity-100 pointer-events-auto duration-[500ms]'}
        `,
              children: e.title,
            }),
            d.jsx('p', {
              className: `
          select-none
          absolute
          max-w-[12ch] sm:max-w-[15ch] md:max-w-[18ch] lg:max-w-[22ch] xl:max-w-[28ch]
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
          top-[55%]
          right-1 sm:right-2 md:right-4 lg:right-6 xl:right-8
          transition-all
          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          ${a ? 'opacity-0 pointer-events-none duration-[100ms] translate-x-[-50%] -translate-y-1/2' : 'opacity-100 pointer-events-auto duration-[500ms] translate-x-[-90%] -translate-y-1/2'}
        `,
              children: e.description,
            }),
            d.jsx('div', {
              onClick: n,
              className: `
          absolute
          left-1/2
          z-10
          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24
          grid place-items-center
          bg-[#ff0000]
          border-4 sm:border-5 md:border-6 lg:border-8 xl:border-10 border-black
          rounded-full
          cursor-pointer
          shadow-lg
          hover:scale-110 active:scale-95
          transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
          ${a ? 'bottom-[-80px] opacity-0 pointer-events-none duration-[100ms] scale-0 -translate-x-1/2' : 'bottom-[4em] sm:bottom-[3.8em] md:bottom-[4em] lg:bottom-[4.5em] xl:bottom-[5em] opacity-100 pointer-events-auto duration-[500ms] scale-100 -translate-x-1/2'}
        `,
              children: d.jsx('p', {
                className:
                  'select-none relative text-[#060010] top-[2px] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl',
                children: '↗',
              }),
            }),
          ],
        }),
    ],
  });
}
const vt = '/assets/insta-DfgTjsCq.png',
  At = '/assets/spotify-D_PSz9Uq.png',
  gt = '/assets/git-fH-nSCaL.jpg';
function It() {
  const s = [
    {
      image: it,
      link: 'https://www.youtube.com/@adadarsh23',
      title: 'YouTube',
      description: 'Watch videos and explore content.',
    },
    {
      image: vt,
      link: 'https://www.instagram.com/adadarsh23/',
      title: 'Instagram',
      description: 'Share photos and stories.',
    },
    {
      image: At,
      link: 'https://open.spotify.com/artist/7nd9x69ZcOpoft6TMDnXCa',
      title: 'Spotify',
      description: 'Listen to music and podcasts.',
    },
    {
      image: gt,
      link: 'https://github.com/adadarsh23',
      title: 'GitHub',
      description: 'Explore my projects and contributions.',
    },
  ];
  return d.jsx('section', {
    className: 'bg-black',
    children: d.jsx('div', {
      className: 'pt-10 pb-10',
      children: d.jsx(pt, { items: s }),
    }),
  });
}
export { It as default };
