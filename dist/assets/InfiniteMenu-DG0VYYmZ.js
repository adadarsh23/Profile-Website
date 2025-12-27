import {
  r as t,
  j as i,
  ab as e,
  ac as s,
  ad as n,
  ae as a,
  af as o,
  ag as r,
  ah as c,
  ai as h,
  aj as l,
  ak as m,
  al as d,
  am as u,
  an as f,
  ao as x,
  ap as v,
  aq as A,
  ar as g,
  as as p,
  at as P,
  au as R,
  av as E,
  aw as T,
  ax as M,
  ay as b,
  az as I,
  aA as _,
  aB as w,
  aC as D,
  aD as y,
  aE as U,
  aF as S,
  aG as F,
} from './vendor-iWomKbAA.js';
class Face {
  constructor(t, i, e) {
    ((this.a = t), (this.b = i), (this.c = e));
  }
}
class Vertex {
  constructor(t, i, e) {
    ((this.position = s(t, i, e)), (this.normal = h()), (this.uv = a()));
  }
}
class Geometry {
  constructor() {
    ((this.vertices = []), (this.faces = []));
  }
  addVertex(...t) {
    for (let i = 0; i < t.length; i += 3)
      this.vertices.push(new Vertex(t[i], t[i + 1], t[i + 2]));
    return this;
  }
  addFace(...t) {
    for (let i = 0; i < t.length; i += 3)
      this.faces.push(new Face(t[i], t[i + 1], t[i + 2]));
    return this;
  }
  get lastVertex() {
    return this.vertices[this.vertices.length - 1];
  }
  subdivide(t = 1) {
    const i = {};
    let e = this.faces;
    for (let s = 0; s < t; ++s) {
      const t = new Array(4 * e.length);
      (e.forEach((e, s) => {
        const n = this.getMidPoint(e.a, e.b, i),
          a = this.getMidPoint(e.b, e.c, i),
          o = this.getMidPoint(e.c, e.a, i),
          r = 4 * s;
        ((t[r + 0] = new Face(e.a, n, o)),
          (t[r + 1] = new Face(e.b, a, n)),
          (t[r + 2] = new Face(e.c, o, a)),
          (t[r + 3] = new Face(n, a, o)));
      }),
        (e = t));
    }
    return ((this.faces = e), this);
  }
  spherize(t = 1) {
    return (
      this.vertices.forEach((i) => {
        (g(i.normal, i.position), F(i.position, i.normal, t));
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
  getMidPoint(t, i, e) {
    const s = t < i ? `k_${i}_${t}` : `k_${t}_${i}`;
    if (Object.prototype.hasOwnProperty.call(e, s)) return e[s];
    const n = this.vertices[t].position,
      a = this.vertices[i].position,
      o = this.vertices.length;
    return (
      (e[s] = o),
      this.addVertex(
        0.5 * (n[0] + a[0]),
        0.5 * (n[1] + a[1]),
        0.5 * (n[2] + a[2])
      ),
      o
    );
  }
}
class IcosahedronGeometry extends Geometry {
  constructor() {
    super();
    const t = 0.5 * Math.sqrt(5) + 0.5;
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
class DiscGeometry extends Geometry {
  constructor(t = 4, i = 1) {
    (super(), (t = Math.max(4, t)));
    const e = (2 * Math.PI) / t;
    (this.addVertex(0, 0, 0),
      (this.lastVertex.uv[0] = 0.5),
      (this.lastVertex.uv[1] = 0.5));
    for (let s = 0; s < t; ++s) {
      const t = Math.cos(e * s),
        n = Math.sin(e * s);
      (this.addVertex(i * t, i * n, 0),
        (this.lastVertex.uv[0] = 0.5 * t + 0.5),
        (this.lastVertex.uv[1] = 0.5 * n + 0.5),
        s > 0 && this.addFace(0, s, s + 1));
    }
    this.addFace(0, t, 1);
  }
}
function makeBuffer(t, i, e) {
  const s = t.createBuffer();
  return (
    t.bindBuffer(t.ARRAY_BUFFER, s),
    t.bufferData(t.ARRAY_BUFFER, i, e),
    t.bindBuffer(t.ARRAY_BUFFER, null),
    s
  );
}
class ArcballControl {
  isPointerDown = !1;
  orientation = P();
  pointerRotation = P();
  rotationVelocity = 0;
  rotationAxis = s(1, 0, 0);
  snapDirection = s(0, 0, -1);
  snapTargetDirection;
  EPSILON = 0.1;
  IDENTITY_QUAT = P();
  constructor(t, i) {
    ((this.canvas = t),
      (this.updateCallback = i || (() => null)),
      (this.pointerPos = a()),
      (this.previousPointerPos = a()),
      (this._rotationVelocity = 0),
      (this._combinedQuat = P()),
      t.addEventListener('pointerdown', (t) => {
        (n(this.pointerPos, t.clientX, t.clientY),
          E(this.previousPointerPos, this.pointerPos),
          (this.isPointerDown = !0));
      }),
      t.addEventListener('pointerup', () => {
        this.isPointerDown = !1;
      }),
      t.addEventListener('pointerleave', () => {
        this.isPointerDown = !1;
      }),
      t.addEventListener('pointermove', (t) => {
        this.isPointerDown && n(this.pointerPos, t.clientX, t.clientY);
      }),
      (t.style.touchAction = 'none'));
  }
  update(t, i = 16) {
    const e = t / i + 1e-5;
    let s = e,
      n = P();
    if (this.isPointerDown) {
      const t = 0.3 * e,
        i = 5 / e,
        n = T(a(), this.pointerPos, this.previousPointerPos);
      if ((M(n, n, t), b(n) > this.EPSILON)) {
        I(n, this.previousPointerPos, n);
        const t = this.#t(n),
          e = this.#t(this.previousPointerPos),
          a = g(h(), t),
          o = g(h(), e);
        (E(this.previousPointerPos, n),
          (s *= i),
          this.quatFromVectors(a, o, this.pointerRotation, s));
      } else
        _(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, t);
    } else {
      const t = 0.1 * e;
      if (
        (_(this.pointerRotation, this.pointerRotation, this.IDENTITY_QUAT, t),
        this.snapTargetDirection)
      ) {
        const t = 0.2,
          i = this.snapTargetDirection,
          e = this.snapDirection,
          a = w(i, e);
        ((s *= t * Math.max(0.1, 1 - 10 * a)),
          this.quatFromVectors(i, e, n, s));
      }
    }
    const o = D(P(), n, this.pointerRotation);
    ((this.orientation = D(P(), o, this.orientation)),
      y(this.orientation, this.orientation));
    const r = 0.8 * e;
    (_(this._combinedQuat, this._combinedQuat, o, r),
      y(this._combinedQuat, this._combinedQuat));
    const c = 2 * Math.acos(this._combinedQuat[3]),
      l = Math.sin(c / 2);
    let m = 0;
    l > 1e-6 &&
      ((m = c / (2 * Math.PI)),
      (this.rotationAxis[0] = this._combinedQuat[0] / l),
      (this.rotationAxis[1] = this._combinedQuat[1] / l),
      (this.rotationAxis[2] = this._combinedQuat[2] / l));
    const d = 0.5 * e;
    ((this._rotationVelocity += (m - this._rotationVelocity) * d),
      (this.rotationVelocity = this._rotationVelocity / e),
      this.updateCallback(t));
  }
  quatFromVectors(t, i, e, s = 1) {
    const n = U(h(), t, i);
    g(n, n);
    const a = Math.max(-1, Math.min(1, R(t, i))),
      o = Math.acos(a) * s;
    return (S(e, n, o), { q: e, axis: n, angle: o });
  }
  #t(t) {
    const i = this.canvas.clientWidth,
      e = this.canvas.clientHeight,
      n = Math.max(i, e) - 1,
      a = (2 * t[0] - i - 1) / n,
      o = (2 * t[1] - e - 1) / n;
    let r = 0;
    const c = a * a + o * o;
    return ((r = c <= 2 ? Math.sqrt(4 - c) : 4 / Math.sqrt(c)), s(-a, o, r));
  }
}
class InfiniteGridMenu {
  TARGET_FRAME_DURATION = 1e3 / 60;
  SPHERE_RADIUS = 2;
  #i = 0;
  #e = 0;
  #s = 0;
  #n = 0;
  camera = {
    matrix: e(),
    near: 0.1,
    far: 40,
    fov: Math.PI / 4,
    aspect: 1,
    position: s(0, 0, 3),
    up: s(0, 1, 0),
    matrices: { view: e(), projection: e(), inversProjection: e() },
  };
  nearestVertexIndex = null;
  smoothRotationVelocity = 0;
  scaleFactor = 1;
  movementActive = !1;
  constructor(t, i, e, s, n = null) {
    ((this.canvas = t),
      (this.items = i || []),
      (this.onActiveItemChange = e || (() => {})),
      (this.onMovementChange = s || (() => {})),
      this.#a(n));
  }
  resize() {
    this.viewportSize = n(
      this.viewportSize || a(),
      this.canvas.clientWidth,
      this.canvas.clientHeight
    );
    const t = this.gl;
    ((function (t) {
      const i = Math.min(2, window.devicePixelRatio),
        e = Math.round(t.clientWidth * i),
        s = Math.round(t.clientHeight * i),
        n = t.width !== e || t.height !== s;
      return (n && ((t.width = e), (t.height = s)), n);
    })(t.canvas) &&
      t.viewport(0, 0, t.drawingBufferWidth, t.drawingBufferHeight),
      this.#o(t));
  }
  run(t = 0) {
    ((this.#e = Math.min(32, t - this.#i)),
      (this.#i = t),
      (this.#s = this.#e / this.TARGET_FRAME_DURATION),
      (this.#n += this.#s),
      this.#r(this.#e),
      this.#c(),
      requestAnimationFrame((t) => this.run(t)));
  }
  #a(t) {
    this.gl = this.canvas.getContext('webgl2', { antialias: !0, alpha: !1 });
    const i = this.gl;
    if (!i) throw new Error('No WebGL 2 context!');
    ((this.viewportSize = o(this.canvas.clientWidth, this.canvas.clientHeight)),
      (this.drawBufferSize = r(this.viewportSize)),
      (this.discProgram = (function (t, i, e, s) {
        const n = t.createProgram();
        if (
          ([t.VERTEX_SHADER, t.FRAGMENT_SHADER].forEach((e, s) => {
            const a = (function (t, i, e) {
              const s = t.createShader(i);
              return (
                t.shaderSource(s, e),
                t.compileShader(s),
                t.getShaderParameter(s, t.COMPILE_STATUS)
                  ? s
                  : (t.deleteShader(s), null)
              );
            })(t, e, i[s]);
            a && t.attachShader(n, a);
          }),
          s)
        )
          for (const a in s) t.bindAttribLocation(n, s[a], a);
        return (
          t.linkProgram(n),
          t.getProgramParameter(n, t.LINK_STATUS)
            ? n
            : (t.deleteProgram(n), null)
        );
      })(
        i,
        [
          '#version 300 es\n\nuniform mat4 uWorldMatrix;\nuniform mat4 uViewMatrix;\nuniform mat4 uProjectionMatrix;\nuniform vec3 uCameraPosition;\nuniform vec4 uRotationAxisVelocity;\n\nin vec3 aModelPosition;\nin vec3 aModelNormal;\nin vec2 aModelUvs;\nin mat4 aInstanceMatrix;\n\nout vec2 vUvs;\nout float vAlpha;\nflat out int vInstanceId;\n\n#define PI 3.141593\n\nvoid main() {\n    vec4 worldPosition = uWorldMatrix * aInstanceMatrix * vec4(aModelPosition, 1.);\n\n    vec3 centerPos = (uWorldMatrix * aInstanceMatrix * vec4(0., 0., 0., 1.)).xyz;\n    float radius = length(centerPos.xyz);\n\n    if (gl_VertexID > 0) {\n        vec3 rotationAxis = uRotationAxisVelocity.xyz;\n        float rotationVelocity = min(.15, uRotationAxisVelocity.w * 15.);\n        vec3 stretchDir = normalize(cross(centerPos, rotationAxis));\n        vec3 relativeVertexPos = normalize(worldPosition.xyz - centerPos);\n        float strength = dot(stretchDir, relativeVertexPos);\n        float invAbsStrength = min(0., abs(strength) - 1.);\n        strength = rotationVelocity * sign(strength) * abs(invAbsStrength * invAbsStrength * invAbsStrength + 1.);\n        worldPosition.xyz += stretchDir * strength;\n    }\n\n    worldPosition.xyz = radius * normalize(worldPosition.xyz);\n\n    gl_Position = uProjectionMatrix * uViewMatrix * worldPosition;\n\n    vAlpha = smoothstep(0.5, 1., normalize(worldPosition.xyz).z) * .9 + .1;\n    vUvs = aModelUvs;\n    vInstanceId = gl_InstanceID;\n}\n',
          '#version 300 es\nprecision highp float;\n\nuniform sampler2D uTex;\nuniform int uItemCount;\nuniform int uAtlasSize;\n\nout vec4 outColor;\n\nin vec2 vUvs;\nin float vAlpha;\nflat in int vInstanceId;\n\nvoid main() {\n    int itemIndex = vInstanceId % uItemCount;\n    int cellsPerRow = uAtlasSize;\n    int cellX = itemIndex % cellsPerRow;\n    int cellY = itemIndex / cellsPerRow;\n    vec2 cellSize = vec2(1.0) / vec2(float(cellsPerRow));\n    vec2 cellOffset = vec2(float(cellX), float(cellY)) * cellSize;\n\n    ivec2 texSize = textureSize(uTex, 0);\n    float imageAspect = float(texSize.x) / float(texSize.y);\n    float containerAspect = 1.0;\n    \n    float scale = max(imageAspect / containerAspect, \n                     containerAspect / imageAspect);\n    \n    vec2 st = vec2(vUvs.x, 1.0 - vUvs.y);\n    st = (st - 0.5) * scale + 0.5;\n    \n    st = clamp(st, 0.0, 1.0);\n    \n    st = st * cellSize + cellOffset;\n    \n    outColor = texture(uTex, st);\n    outColor.a *= vAlpha;\n}\n',
        ],
        0,
        { aModelPosition: 0, aModelNormal: 1, aModelUvs: 2, aInstanceMatrix: 3 }
      )),
      (this.discLocations = {
        aModelPosition: i.getAttribLocation(this.discProgram, 'aModelPosition'),
        aModelUvs: i.getAttribLocation(this.discProgram, 'aModelUvs'),
        aInstanceMatrix: i.getAttribLocation(
          this.discProgram,
          'aInstanceMatrix'
        ),
        uWorldMatrix: i.getUniformLocation(this.discProgram, 'uWorldMatrix'),
        uViewMatrix: i.getUniformLocation(this.discProgram, 'uViewMatrix'),
        uProjectionMatrix: i.getUniformLocation(
          this.discProgram,
          'uProjectionMatrix'
        ),
        uCameraPosition: i.getUniformLocation(
          this.discProgram,
          'uCameraPosition'
        ),
        uScaleFactor: i.getUniformLocation(this.discProgram, 'uScaleFactor'),
        uRotationAxisVelocity: i.getUniformLocation(
          this.discProgram,
          'uRotationAxisVelocity'
        ),
        uTex: i.getUniformLocation(this.discProgram, 'uTex'),
        uFrames: i.getUniformLocation(this.discProgram, 'uFrames'),
        uItemCount: i.getUniformLocation(this.discProgram, 'uItemCount'),
        uAtlasSize: i.getUniformLocation(this.discProgram, 'uAtlasSize'),
      }),
      (this.discGeo = new DiscGeometry(56, 1)),
      (this.discBuffers = this.discGeo.data),
      (this.discVAO = (function (t, i, e) {
        const s = t.createVertexArray();
        t.bindVertexArray(s);
        for (const [n, a, o] of i)
          -1 !== a &&
            (t.bindBuffer(t.ARRAY_BUFFER, n),
            t.enableVertexAttribArray(a),
            t.vertexAttribPointer(a, o, t.FLOAT, !1, 0, 0));
        if (e) {
          const i = t.createBuffer();
          (t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i),
            t.bufferData(
              t.ELEMENT_ARRAY_BUFFER,
              new Uint16Array(e),
              t.STATIC_DRAW
            ));
        }
        return (t.bindVertexArray(null), s);
      })(
        i,
        [
          [
            makeBuffer(i, this.discBuffers.vertices, i.STATIC_DRAW),
            this.discLocations.aModelPosition,
            3,
          ],
          [
            makeBuffer(i, this.discBuffers.uvs, i.STATIC_DRAW),
            this.discLocations.aModelUvs,
            2,
          ],
        ],
        this.discBuffers.indices
      )),
      (this.icoGeo = new IcosahedronGeometry()),
      this.icoGeo.subdivide(1).spherize(this.SPHERE_RADIUS),
      (this.instancePositions = this.icoGeo.vertices.map((t) => t.position)),
      (this.DISC_INSTANCE_COUNT = this.icoGeo.vertices.length),
      this.#h(this.DISC_INSTANCE_COUNT),
      (this.worldMatrix = e()),
      this.#l(),
      (this.control = new ArcballControl(this.canvas, (t) => this.#m(t))),
      this.#d(),
      this.#o(i),
      this.resize(),
      t && t(this));
  }
  #l() {
    const t = this.gl;
    this.tex = (function (t, i, e, s, n) {
      const a = t.createTexture();
      return (
        t.bindTexture(t.TEXTURE_2D, a),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, s),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, n),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, i),
        t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, e),
        a
      );
    })(t, t.LINEAR, t.LINEAR, t.CLAMP_TO_EDGE, t.CLAMP_TO_EDGE);
    const i = Math.max(1, this.items.length);
    this.atlasSize = Math.ceil(Math.sqrt(i));
    const e = document.createElement('canvas'),
      s = e.getContext('2d'),
      n = 512;
    ((e.width = this.atlasSize * n),
      (e.height = this.atlasSize * n),
      Promise.all(
        this.items.map(
          (t) =>
            new Promise((i) => {
              const e = new Image();
              ((e.crossOrigin = 'anonymous'),
                (e.onload = () => i(e)),
                (e.src = t.image));
            })
        )
      ).then((i) => {
        (i.forEach((t, i) => {
          const e = (i % this.atlasSize) * n,
            a = Math.floor(i / this.atlasSize) * n;
          s.drawImage(t, e, a, n, n);
        }),
          t.bindTexture(t.TEXTURE_2D, this.tex),
          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e),
          t.generateMipmap(t.TEXTURE_2D));
      }));
  }
  #h(t) {
    const i = this.gl;
    this.discInstances = {
      matricesArray: new Float32Array(16 * t),
      matrices: [],
      buffer: i.createBuffer(),
    };
    for (let s = 0; s < t; ++s) {
      const t = new Float32Array(
        this.discInstances.matricesArray.buffer,
        16 * s * 4,
        16
      );
      (t.set(e()), this.discInstances.matrices.push(t));
    }
    (i.bindVertexArray(this.discVAO),
      i.bindBuffer(i.ARRAY_BUFFER, this.discInstances.buffer),
      i.bufferData(
        i.ARRAY_BUFFER,
        this.discInstances.matricesArray.byteLength,
        i.DYNAMIC_DRAW
      ));
    for (let e = 0; e < 4; ++e) {
      const t = this.discLocations.aInstanceMatrix + e;
      (i.enableVertexAttribArray(t),
        i.vertexAttribPointer(t, 4, i.FLOAT, !1, 64, 4 * e * 4),
        i.vertexAttribDivisor(t, 1));
    }
    (i.bindBuffer(i.ARRAY_BUFFER, null), i.bindVertexArray(null));
  }
  #r(t) {
    const i = this.gl;
    this.control.update(t, this.TARGET_FRAME_DURATION);
    let s = this.instancePositions.map((t) =>
      c(h(), t, this.control.orientation)
    );
    (s.forEach((t, i) => {
      const s = 0.25 * ((Math.abs(t[2]) / this.SPHERE_RADIUS) * 0.6 + 0.4),
        n = e();
      (l(n, n, m(e(), d(h(), t))),
        l(n, n, u(e(), [0, 0, 0], t, [0, 1, 0])),
        l(n, n, f(e(), [s, s, s])),
        l(n, n, m(e(), [0, 0, -this.SPHERE_RADIUS])),
        x(this.discInstances.matrices[i], n));
    }),
      i.bindBuffer(i.ARRAY_BUFFER, this.discInstances.buffer),
      i.bufferSubData(i.ARRAY_BUFFER, 0, this.discInstances.matricesArray),
      i.bindBuffer(i.ARRAY_BUFFER, null),
      (this.smoothRotationVelocity = this.control.rotationVelocity));
  }
  #c() {
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
        1.1 * this.smoothRotationVelocity
      ),
      t.uniform1i(this.discLocations.uItemCount, this.items.length),
      t.uniform1i(this.discLocations.uAtlasSize, this.atlasSize),
      t.uniform1f(this.discLocations.uFrames, this.#n),
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
  #d() {
    (u(this.camera.matrix, this.camera.position, [0, 0, 0], this.camera.up),
      v(this.camera.matrices.view, this.camera.matrix));
  }
  #o(t) {
    this.camera.aspect = t.canvas.clientWidth / t.canvas.clientHeight;
    const i = 0.35 * this.SPHERE_RADIUS,
      e = this.camera.position[2];
    (this.camera.aspect > 1
      ? (this.camera.fov = 2 * Math.atan(i / e))
      : (this.camera.fov = 2 * Math.atan(i / this.camera.aspect / e)),
      A(
        this.camera.matrices.projection,
        this.camera.fov,
        this.camera.aspect,
        this.camera.near,
        this.camera.far
      ),
      v(
        this.camera.matrices.inversProjection,
        this.camera.matrices.projection
      ));
  }
  #m(t) {
    const i = t / this.TARGET_FRAME_DURATION + 1e-4;
    let e = 5 / i,
      s = 3;
    const n =
      this.control.isPointerDown ||
      Math.abs(this.smoothRotationVelocity) > 0.01;
    if (
      (n !== this.movementActive &&
        ((this.movementActive = n), this.onMovementChange(n)),
      this.control.isPointerDown)
    )
      ((s += 80 * this.control.rotationVelocity + 2.5), (e = 7 / i));
    else {
      const t = this.#u(),
        i = t % Math.max(1, this.items.length);
      this.onActiveItemChange(i);
      const e = g(h(), this.#f(t));
      this.control.snapTargetDirection = e;
    }
    ((this.camera.position[2] += (s - this.camera.position[2]) / e), this.#d());
  }
  #u() {
    const t = this.control.snapDirection,
      i = p(P(), this.control.orientation),
      e = c(h(), t, i);
    let s,
      n = -1;
    for (let a = 0; a < this.instancePositions.length; ++a) {
      const t = R(e, this.instancePositions[a]);
      t > n && ((n = t), (s = a));
    }
    return s;
  }
  #f(t) {
    const i = this.instancePositions[t];
    return c(h(), i, this.control.orientation);
  }
}
const V = [
  {
    image: 'https://picsum.photos/900/900?grayscale',
    link: 'https://google.com/',
    title: '',
    description: '',
  },
];
function InfiniteMenu({ items: e = [] }) {
  const s = t.useRef(null),
    [n, a] = t.useState(null),
    [o, r] = t.useState(!1);
  t.useEffect(() => {
    const t = s.current;
    let i;
    const handleActiveItem = (t) => {
      const i = t % e.length;
      a(e[i]);
    };
    t &&
      (i = new InfiniteGridMenu(t, e.length ? e : V, handleActiveItem, r, (t) =>
        t.run()
      ));
    const handleResize = () => {
      i && i.resize();
    };
    return (
      window.addEventListener('resize', handleResize),
      handleResize(),
      () => {
        window.removeEventListener('resize', handleResize);
      }
    );
  }, [e]);
  return i.jsxs('div', {
    className: 'relative w-full h-full',
    children: [
      i.jsx('canvas', {
        id: 'infinite-grid-menu-canvas',
        ref: s,
        className:
          'cursor-grab w-full h-full overflow-hidden relative outline-none active:cursor-grabbing',
      }),
      n &&
        i.jsxs(i.Fragment, {
          children: [
            i.jsx('h2', {
              className: `\n          select-none\n          absolute\n          font-black\n          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl\n          left-3 sm:left-4 md:left-6 lg:left-8 xl:left-10\n          top-[45%] sm:top-1/2\n          transform\n          translate-x-1/4\n          -translate-y-1/2\n          transition-all\n          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ${o ? 'opacity-0 pointer-events-none duration-[100ms]' : 'opacity-100 pointer-events-auto duration-[500ms]'}\n        `,
              children: n.title,
            }),
            i.jsx('p', {
              className: `\n          select-none\n          absolute\n          max-w-[12ch] sm:max-w-[15ch] md:max-w-[18ch] lg:max-w-[22ch] xl:max-w-[28ch]\n          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl\n          top-[55%]\n          right-1 sm:right-2 md:right-4 lg:right-6 xl:right-8\n          transition-all\n          ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ${o ? 'opacity-0 pointer-events-none duration-[100ms] translate-x-[-50%] -translate-y-1/2' : 'opacity-100 pointer-events-auto duration-[500ms] translate-x-[-90%] -translate-y-1/2'}\n        `,
              children: n.description,
            }),
            i.jsx('div', {
              onClick: () => {
                n?.link &&
                  n.link.startsWith('http') &&
                  window.open(n.link, '_blank');
              },
              className: `\n          absolute\n          left-1/2\n          z-10\n          w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24\n          grid place-items-center\n          bg-[#ff0000]\n          border-4 sm:border-5 md:border-6 lg:border-8 xl:border-10 border-black\n          rounded-full\n          cursor-pointer\n          shadow-lg\n          hover:scale-110 active:scale-95\n          transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]\n          ${o ? 'bottom-[-80px] opacity-0 pointer-events-none duration-[100ms] scale-0 -translate-x-1/2' : 'bottom-[4em] sm:bottom-[3.8em] md:bottom-[4em] lg:bottom-[4.5em] xl:bottom-[5em] opacity-100 pointer-events-auto duration-[500ms] scale-100 -translate-x-1/2'}\n        `,
              children: i.jsx('p', {
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
export { InfiniteMenu as default };
