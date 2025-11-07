import { r as o, W as Me, j as t } from './vendor_react-C8wG62CJ.js';
import {
  b7 as xe,
  b8 as te,
  b9 as Se,
  aZ as be,
  ba as Ce,
  bb as E,
  bc as je,
  bd as ve,
  be as Ie,
  bf as T,
  a$ as se,
  bg as l,
} from './vendor-Grk_15WJ.js';
import './vendor_react-dom-DKAsGG5-.js';
const u = {
  head: { lerp: 0.08, idleAmp: 0.05, idleSpeed: 0.8, bounceAmp: 0.03 },
  eyes: {
    lerp: 0.15,
    blinkInterval: [1800, 4e3],
    blinkDuration: 100,
    xRange: 0.18,
    yRange: 0.15,
    lookAroundInterval: 3e3,
  },
  antenna: { wobbleAmp: 0.2, wobbleSpeed: 2.8 },
  emotions: {
    neutral: {
      eyeColor: '#00ffff',
      secondaryColor: '#0088ff',
      mouthIntensity: 1.5,
      headTilt: 0,
      eyeScale: 1,
      mouthCurve: 0,
      pulseSpeed: 1,
      eyebrowAngle: 0,
      energyLevel: 0.5,
      particleCount: 20,
    },
    happy: {
      eyeColor: '#00ffcc',
      secondaryColor: '#00ff88',
      mouthIntensity: 3.5,
      headTilt: 0.15,
      eyeScale: 1.3,
      mouthCurve: 0.2,
      pulseSpeed: 1.8,
      eyebrowAngle: 0.25,
      energyLevel: 0.8,
      particleCount: 40,
    },
    excited: {
      eyeColor: '#ff00ff',
      secondaryColor: '#ff0088',
      mouthIntensity: 4.5,
      headTilt: -0.1,
      eyeScale: 1.5,
      mouthCurve: 0.3,
      pulseSpeed: 3,
      eyebrowAngle: 0.35,
      energyLevel: 1,
      particleCount: 60,
    },
    thinking: {
      eyeColor: '#ffaa00',
      secondaryColor: '#ff8800',
      mouthIntensity: 1.2,
      headTilt: 0.35,
      eyeScale: 0.75,
      mouthCurve: -0.05,
      pulseSpeed: 0.6,
      eyebrowAngle: 0.2,
      energyLevel: 0.4,
      particleCount: 15,
    },
    confused: {
      eyeColor: '#ff6600',
      secondaryColor: '#ff9900',
      mouthIntensity: 2,
      headTilt: -0.28,
      eyeScale: 0.95,
      mouthCurve: -0.12,
      pulseSpeed: 1.3,
      eyebrowAngle: -0.25,
      energyLevel: 0.6,
      particleCount: 25,
    },
    surprised: {
      eyeColor: '#ffff00',
      secondaryColor: '#ffcc00',
      mouthIntensity: 4,
      headTilt: 0,
      eyeScale: 1.7,
      mouthCurve: 0.35,
      pulseSpeed: 3.5,
      eyebrowAngle: 0.45,
      energyLevel: 0.9,
      particleCount: 50,
    },
    sad: {
      eyeColor: '#0099ff',
      secondaryColor: '#0066cc',
      mouthIntensity: 0.7,
      headTilt: -0.25,
      eyeScale: 0.65,
      mouthCurve: -0.25,
      pulseSpeed: 0.4,
      eyebrowAngle: -0.35,
      energyLevel: 0.2,
      particleCount: 10,
    },
    angry: {
      eyeColor: '#ff0000',
      secondaryColor: '#cc0000',
      mouthIntensity: 3,
      headTilt: 0.12,
      eyeScale: 1.15,
      mouthCurve: -0.18,
      pulseSpeed: 2.2,
      eyebrowAngle: -0.45,
      energyLevel: 0.85,
      particleCount: 35,
    },
    love: {
      eyeColor: '#ff69b4',
      secondaryColor: '#ff1493',
      mouthIntensity: 3.3,
      headTilt: 0.22,
      eyeScale: 1.35,
      mouthCurve: 0.22,
      pulseSpeed: 2,
      eyebrowAngle: 0.28,
      energyLevel: 0.75,
      particleCount: 45,
    },
    sleepy: {
      eyeColor: '#8866ff',
      secondaryColor: '#6644cc',
      mouthIntensity: 0.8,
      headTilt: -0.15,
      eyeScale: 0.5,
      mouthCurve: 0.05,
      pulseSpeed: 0.3,
      eyebrowAngle: -0.2,
      energyLevel: 0.1,
      particleCount: 5,
    },
    focused: {
      eyeColor: '#00ff00',
      secondaryColor: '#00cc00',
      mouthIntensity: 1.8,
      headTilt: 0.05,
      eyeScale: 1.1,
      mouthCurve: 0,
      pulseSpeed: 1.2,
      eyebrowAngle: 0.1,
      energyLevel: 0.7,
      particleCount: 30,
    },
  },
};
function Be({ cursor: re, isHovered: M }) {
  const y = o.useRef(),
    z = o.useRef(),
    P = o.useRef(),
    f = o.useRef(),
    D = o.useRef(),
    F = o.useRef(),
    I = o.useRef(),
    R = o.useRef(),
    m = o.useRef(),
    b = o.useRef(),
    N = o.useRef([]),
    w = o.useRef(),
    d = o.useRef(),
    W = o.useRef(),
    O = o.useRef(),
    [oe, U] = o.useState(1),
    [p, ne] = o.useState('neutral'),
    [L, V] = o.useState(!1),
    [G, q] = o.useState(!1),
    [ae, X] = o.useState(!1),
    [B, ie] = o.useState(1),
    [le, Y] = o.useState(!1),
    [ce, Z] = o.useState(!1),
    [ue, pe] = o.useState({ x: 0, y: 0 }),
    [Re, $] = o.useState(0),
    [we, J] = o.useState(0);
  (o.useEffect(() => {
    let n = !0;
    const e = () => {
      if (!n) return;
      (U(p === 'sleepy' ? 0.3 : p === 'surprised' ? 0.5 : 0.1),
        setTimeout(() => U(1), u.eyes.blinkDuration));
      const a =
        Math.random() * (u.eyes.blinkInterval[1] - u.eyes.blinkInterval[0]) +
        u.eyes.blinkInterval[0];
      setTimeout(e, a * (p === 'sleepy' ? 0.5 : 1));
    };
    return (
      e(),
      () => {
        n = !1;
      }
    );
  }, [p]),
    o.useEffect(() => {
      let n = !0;
      const e = () => {
        n &&
          (Math.random() > 0.4 &&
            (Z(!0),
            pe({
              x: (Math.random() - 0.5) * 1.5,
              y: (Math.random() - 0.5) * 1,
            }),
            setTimeout(() => Z(!1), 1500 + Math.random() * 1e3)),
          setTimeout(e, u.eyes.lookAroundInterval + Math.random() * 2e3));
      };
      return (
        e(),
        () => {
          n = !1;
        }
      );
    }, []),
    o.useEffect(() => {
      const n = Object.keys(u.emotions);
      let e = 0;
      const r = setInterval(() => {
        (ne(n[e]), (e = (e + 1) % n.length));
        const a = n[e];
        ((a === 'happy' || a === 'excited' || a === 'love') &&
          (V(!0),
          X(!0),
          setTimeout(() => {
            (V(!1), X(!1));
          }, 1800)),
          (a === 'confused' || a === 'thinking') &&
            (q(!0), setTimeout(() => q(!1), 1500)),
          a === 'surprised' && ($(1), setTimeout(() => $(0), 800)),
          a === 'angry' && (J(1), setTimeout(() => J(0), 1e3)),
          Math.random() > 0.5 &&
            (Y(!0), setTimeout(() => Y(!1), 1500 + Math.random() * 1e3)));
      }, 4e3);
      return () => clearInterval(r);
    }, []));
  const A = o.useMemo(
      () => ({
        head: new Ce(1.5, 1.2, 1.2, 4, 4, 4),
        face: new be(1.2, 0.8),
        eye: new te(0.12, 32, 32),
        antenna: new Se(0.04, 0.06, 0.6, 16),
        antennaTip: new te(0.09, 32, 32),
        energyRing: new xe(0.15, 0.02, 16, 32),
      }),
      []
    ),
    K = o.useMemo(
      () => ({
        head: new E({
          color: '#0a0a0a',
          metalness: 0.98,
          roughness: 0.12,
          emissive: '#001a1a',
          emissiveIntensity: 0.4,
        }),
        face: new E({ color: '#0a1a1a', metalness: 0.85, roughness: 0.25 }),
        side: new E({
          color: '#00ffff',
          emissive: '#00ffff',
          emissiveIntensity: 1.2,
        }),
      }),
      []
    ),
    Q = o.useMemo(() => {
      const e = new Float32Array(240),
        r = new Float32Array(240);
      for (let a = 0; a < 80; a++) {
        const x = 0.8 + Math.random() * 0.5,
          C = Math.random() * Math.PI * 2,
          j = Math.random() * Math.PI;
        ((e[a * 3] = x * Math.sin(j) * Math.cos(C)),
          (e[a * 3 + 1] = x * Math.sin(j) * Math.sin(C)),
          (e[a * 3 + 2] = x * Math.cos(j)),
          (r[a * 3] = (Math.random() - 0.5) * 0.02),
          (r[a * 3 + 1] = (Math.random() - 0.5) * 0.02),
          (r[a * 3 + 2] = (Math.random() - 0.5) * 0.02));
      }
      return { positions: e, velocities: r, count: 80 };
    }, []);
  (o.useEffect(() => {
    if (!m.current) return;
    const n = new je();
    (n.setAttribute('position', new ve(Q.positions, 3)),
      (m.current.geometry = n),
      (m.current.material = new Ie({
        size: 0.02,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
      })));
  }, []),
    Me((n) => {
      const e = n.clock.getElapsedTime();
      if (!y.current) return;
      const r = u.emotions[p],
        a = M ? 1.3 : 1,
        x = u.head.idleAmp * r.energyLevel * a,
        C = u.head.idleSpeed * r.pulseSpeed,
        j = Math.sin(e * C) * x,
        he = Math.sin(e * C * 0.5) * x * 0.3;
      ((y.current.position.y = j + he),
        ae &&
          (y.current.position.y +=
            Math.abs(Math.sin(e * 6)) * u.head.bounceAmp));
      const ye = r.headTilt * (M ? 1.2 : 1);
      ((y.current.rotation.z = l.lerp(y.current.rotation.z, ye, 0.06)),
        L &&
          (y.current.rotation.x +=
            Math.sin(e * 7) * 0.35 * Math.cos(e * 3) * 0.5),
        G &&
          (y.current.rotation.y +=
            Math.sin(e * 12) * 0.18 * Math.cos(e * 5) * 0.3),
        !L &&
          !G &&
          ((y.current.position.x =
            Math.sin(e * 0.4) * 0.02 + Math.cos(e * 0.7) * 0.015),
          (y.current.position.z = Math.cos(e * 0.5) * 0.015),
          (y.current.rotation.z += Math.sin(e * 0.25) * 0.008)));
      const k = ce ? ue : re.current,
        _ = r.energyLevel * (M ? 1.2 : 0.8),
        fe = k.x * _ * 0.7,
        me = -k.y * _ * 0.5;
      if (!L && !G) {
        const s = p === 'sleepy' ? 0.03 : u.head.lerp;
        ((y.current.rotation.y = l.lerp(y.current.rotation.y, fe, s)),
          (y.current.rotation.x = l.lerp(y.current.rotation.x, me, s)));
      }
      if (
        ([
          { mesh: z.current, pupil: W.current },
          { mesh: P.current, pupil: O.current },
        ].forEach(({ mesh: s, pupil: i }, g) => {
          if (!s) return;
          const c = g === 0 ? -0.4 : 0.4,
            H = l.clamp(k.x * 0.25, -0.18, u.eyes.xRange),
            ee = l.clamp(-k.y * 0.18, -0.15, u.eyes.yRange);
          ((s.position.x = l.lerp(s.position.x, c + H, u.eyes.lerp)),
            (s.position.y = l.lerp(s.position.y, 0.2 + ee, u.eyes.lerp)));
          const v = l.lerp(s.scale.y, oe, 0.25);
          ((s.scale.y = v),
            (s.scale.x = l.lerp(s.scale.x, 1 + (1 - v) * 0.1, 0.2)));
          const S = r.eyeScale * (M ? 1.1 : 1);
          if (
            ((s.scale.x = l.lerp(s.scale.x, S, 0.06)),
            (s.scale.z = l.lerp(s.scale.z, S, 0.06)),
            i)
          ) {
            const ge =
              p === 'surprised'
                ? 1.3
                : p === 'angry'
                  ? 0.6
                  : p === 'love'
                    ? 1.2
                    : 1;
            i.scale.setScalar(l.lerp(i.scale.x, ge, 0.05));
          }
          (p === 'angry' && (s.position.y += Math.sin(e * 4) * 0.015),
            p === 'excited' &&
              ((s.position.x += Math.sin(e * 6 + g * Math.PI) * 0.015),
              (s.position.y += Math.cos(e * 5 + g * Math.PI) * 0.01)),
            p === 'sleepy' && (s.position.y -= 0.03));
        }),
        [D.current, F.current].forEach((s, i) => {
          if (!s) return;
          const g = i === 0 ? -1 : 1,
            c = r.eyebrowAngle * g * (M ? 1.2 : 1);
          ((s.rotation.z = l.lerp(s.rotation.z, c, 0.1)),
            p === 'surprised'
              ? (s.position.y = 0.42 + Math.abs(Math.sin(e * 5)) * 0.08)
              : p === 'confused'
                ? (s.position.x += Math.sin(e * 3 + i * Math.PI) * 0.02)
                : p === 'angry'
                  ? (s.position.y = l.lerp(s.position.y, 0.38, 0.05))
                  : (s.position.y = l.lerp(s.position.y, 0.42, 0.05)));
        }),
        d.current)
      ) {
        const s = r.mouthCurve * (M ? 1.15 : 1);
        ((d.current.rotation.z = l.lerp(d.current.rotation.z, s * 0.6, 0.08)),
          le
            ? ((d.current.scale.x = 1 + Math.sin(e * 15) * 0.15),
              (d.current.scale.y = 1 + Math.abs(Math.sin(e * 15)) * 0.2))
            : ((d.current.scale.x = l.lerp(d.current.scale.x, 1, 0.1)),
              (d.current.scale.y = l.lerp(d.current.scale.y, 1, 0.1))),
          (d.current.scale.x += Math.sin(e * r.pulseSpeed * 2) * 0.05));
      }
      if (f.current) {
        const s = r.energyLevel * (M ? 1.4 : 1);
        ((f.current.rotation.z =
          Math.sin(e * u.antenna.wobbleSpeed) * u.antenna.wobbleAmp * s +
          Math.cos(e * u.antenna.wobbleSpeed * 0.6) * 0.08 * s),
          (f.current.rotation.x =
            Math.sin(e * 1.8) * 0.12 * s + Math.cos(e * 2.3) * 0.06 * s),
          p === 'thinking'
            ? ((f.current.position.x = Math.sin(e * 2.5) * 0.15),
              (f.current.position.z = Math.cos(e * 2.5) * 0.15))
            : p === 'excited'
              ? (f.current.position.y = 0.9 + Math.abs(Math.sin(e * 4)) * 0.05)
              : ((f.current.position.x = l.lerp(f.current.position.x, 0, 0.1)),
                (f.current.position.z = l.lerp(f.current.position.z, 0, 0.1)),
                (f.current.position.y = l.lerp(
                  f.current.position.y,
                  0.9,
                  0.1
                ))));
      }
      if (I.current) {
        const s =
          0.09 + Math.sin(e * r.pulseSpeed * 2.5) * 0.06 * r.energyLevel;
        ((I.current.material.opacity = s * a),
          I.current.scale.setScalar(
            1.03 + Math.sin(e * r.pulseSpeed * 1.5) * 0.015
          ));
      }
      if (
        (R.current &&
          ((R.current.material.opacity =
            0.04 + Math.sin(e * r.pulseSpeed) * 0.03),
          R.current.scale.setScalar(
            1.08 + Math.cos(e * r.pulseSpeed * 0.8) * 0.02
          )),
        N.current.forEach((s, i) => {
          s &&
            ((s.rotation.x = e * (0.5 + i * 0.3) * r.pulseSpeed),
            (s.rotation.y = e * (0.3 + i * 0.2) * r.pulseSpeed),
            s.scale.setScalar(1 + Math.sin(e * 2 + i) * 0.1 * r.energyLevel),
            (s.material.opacity =
              (0.3 + Math.sin(e * 3 + i) * 0.2) * r.energyLevel));
        }),
        b.current &&
          ((b.current.position.y = -0.5 + ((e * 0.8) % 1.5)),
          (b.current.material.opacity =
            0.6 - Math.abs(b.current.position.y) * 0.3)),
        w.current &&
          ((w.current.rotation.y = e * 0.5),
          (w.current.material.opacity = 0.15 + Math.sin(e * 2) * 0.1)),
        m.current && m.current.geometry)
      ) {
        m.current.rotation.y = e * 0.3 * r.pulseSpeed;
        const i = m.current.geometry.attributes.position?.array,
          g = Q.velocities;
        if (i) {
          for (let c = 0; c < i.length; c += 3)
            if (
              ((i[c] += g[c] * r.energyLevel),
              (i[c + 1] += g[c + 1] * r.energyLevel + Math.sin(e + c) * 0.005),
              (i[c + 2] += g[c + 2] * r.energyLevel),
              Math.sqrt(i[c] ** 2 + i[c + 1] ** 2 + i[c + 2] ** 2) > 2)
            ) {
              const v = Math.random() * Math.PI * 2,
                S = Math.random() * Math.PI;
              ((i[c] = 0.8 * Math.sin(S) * Math.cos(v)),
                (i[c + 1] = 0.8 * Math.sin(S) * Math.sin(v)),
                (i[c + 2] = 0.8 * Math.cos(S)));
            }
        }
        (m.current.geometry.attributes.position &&
          (m.current.geometry.attributes.position.needsUpdate = !0),
          m.current.material &&
            ((m.current.material.opacity = 0.25 + 0.75 * r.energyLevel),
            m.current.material.color.set(r.eyeColor)));
      }
      const de = 1 + Math.sin(e * r.pulseSpeed * 3) * 0.35 * r.energyLevel;
      ie(de * a);
    }));
  const h = u.emotions[p];
  return t.jsxs('group', {
    ref: y,
    children: [
      t.jsx('mesh', {
        geometry: A.head,
        material: K.head,
        castShadow: !0,
        receiveShadow: !0,
      }),
      t.jsxs('mesh', {
        ref: I,
        scale: 1.03,
        children: [
          t.jsx('boxGeometry', { args: [1.5, 1.2, 1.2] }),
          t.jsx('meshBasicMaterial', {
            color: h.eyeColor,
            transparent: !0,
            opacity: 0.12,
            side: T,
          }),
        ],
      }),
      t.jsxs('mesh', {
        ref: R,
        scale: 1.08,
        children: [
          t.jsx('boxGeometry', { args: [1.5, 1.2, 1.2] }),
          t.jsx('meshBasicMaterial', {
            color: h.secondaryColor,
            transparent: !0,
            opacity: 0.06,
            side: T,
          }),
        ],
      }),
      t.jsx('mesh', {
        geometry: A.face,
        position: [0, 0, 0.61],
        material: K.face,
      }),
      t.jsxs('mesh', {
        ref: w,
        position: [0, 0, 0.63],
        children: [
          t.jsx('planeGeometry', { args: [1.1, 0.7] }),
          t.jsx('meshBasicMaterial', {
            color: h.eyeColor,
            transparent: !0,
            opacity: 0.15,
            side: se,
          }),
        ],
      }),
      t.jsxs('mesh', {
        ref: b,
        position: [0, 0, 0.62],
        children: [
          t.jsx('planeGeometry', { args: [1.2, 0.02] }),
          t.jsx('meshBasicMaterial', {
            color: h.eyeColor,
            transparent: !0,
            opacity: 0.6,
          }),
        ],
      }),
      [
        { ref: z, pupilRef: W, x: -0.4 },
        { ref: P, pupilRef: O, x: 0.4 },
      ].map(({ ref: n, pupilRef: e, x: r }, a) =>
        t.jsxs(
          'group',
          {
            children: [
              t.jsxs('mesh', {
                ref: n,
                position: [r, 0.2, 0.65],
                children: [
                  t.jsx('sphereGeometry', { args: [0.12, 32, 32] }),
                  t.jsx('meshStandardMaterial', {
                    emissive: h.eyeColor,
                    emissiveIntensity: (M ? 4.2 : 3) * B,
                    color: h.eyeColor,
                    metalness: 0.7,
                    roughness: 0.2,
                  }),
                ],
              }),
              t.jsxs('mesh', {
                position: [r, 0.2, 0.65],
                scale: 1.6,
                children: [
                  t.jsx('sphereGeometry', { args: [0.12, 16, 16] }),
                  t.jsx('meshBasicMaterial', {
                    color: h.eyeColor,
                    transparent: !0,
                    opacity: 0.4 * B,
                    side: T,
                  }),
                ],
              }),
              t.jsxs('mesh', {
                position: [r, 0.2, 0.65],
                scale: 2,
                children: [
                  t.jsx('sphereGeometry', { args: [0.12, 16, 16] }),
                  t.jsx('meshBasicMaterial', {
                    color: h.secondaryColor,
                    transparent: !0,
                    opacity: 0.2 * B,
                    side: T,
                  }),
                ],
              }),
              t.jsxs('mesh', {
                position: [r + 0.04, 0.24, 0.72],
                scale: 0.35,
                children: [
                  t.jsx('sphereGeometry', { args: [0.06, 8, 8] }),
                  t.jsx('meshBasicMaterial', {
                    color: '#ffffff',
                    transparent: !0,
                    opacity: 0.85,
                  }),
                ],
              }),
              t.jsxs('mesh', {
                ref: e,
                position: [r, 0.2, 0.78],
                children: [
                  t.jsx('sphereGeometry', { args: [0.035, 16, 16] }),
                  t.jsx('meshStandardMaterial', {
                    color: '#000000',
                    metalness: 0.1,
                    roughness: 0.6,
                  }),
                ],
              }),
              t.jsxs('mesh', {
                position: [r, 0.16, 0.74],
                children: [
                  t.jsx('ringGeometry', { args: [0.12, 0.14, 32] }),
                  t.jsx('meshBasicMaterial', {
                    color: '#000000',
                    transparent: !0,
                    opacity: 0.15,
                  }),
                ],
              }),
            ],
          },
          a
        )
      ),
      t.jsxs('mesh', {
        ref: D,
        position: [-0.45, 0.42, 0.72],
        rotation: [0, 0, 0],
        children: [
          t.jsx('boxGeometry', { args: [0.35, 0.06, 0.02] }),
          t.jsx('meshStandardMaterial', {
            color: h.secondaryColor,
            metalness: 0.2,
            roughness: 0.6,
          }),
        ],
      }),
      t.jsxs('mesh', {
        ref: F,
        position: [0.45, 0.42, 0.72],
        rotation: [0, 0, 0],
        children: [
          t.jsx('boxGeometry', { args: [0.35, 0.06, 0.02] }),
          t.jsx('meshStandardMaterial', {
            color: h.secondaryColor,
            metalness: 0.2,
            roughness: 0.6,
          }),
        ],
      }),
      t.jsxs('group', {
        ref: f,
        position: [0, 0.7, 0.15],
        children: [
          t.jsx('mesh', {
            geometry: A.antenna,
            position: [0, 0, 0],
            children: t.jsx('meshStandardMaterial', {
              color: '#222222',
              metalness: 0.9,
              roughness: 0.25,
            }),
          }),
          t.jsx('mesh', {
            geometry: A.antennaTip,
            position: [0, 0.33, 0],
            children: t.jsx('meshStandardMaterial', {
              emissive: h.eyeColor,
              emissiveIntensity: 1.6,
              color: h.eyeColor,
            }),
          }),
          t.jsxs('mesh', {
            position: [0, 0.46, 0],
            scale: 0.9,
            children: [
              t.jsx('sphereGeometry', { args: [0.12, 12, 12] }),
              t.jsx('meshBasicMaterial', {
                color: h.secondaryColor,
                transparent: !0,
                opacity: 0.25,
              }),
            ],
          }),
        ],
      }),
      t.jsx('group', {
        ref: d,
        position: [0, -0.18, 0.73],
        children: t.jsxs('mesh', {
          children: [
            t.jsx('planeGeometry', { args: [0.45, 0.14, 8, 1] }),
            t.jsx('meshStandardMaterial', {
              color: h.secondaryColor,
              emissive: h.eyeColor,
              emissiveIntensity: 0.6,
              transparent: !0,
              opacity: 0.95,
            }),
          ],
        }),
      }),
      [0, 1, 2].map((n) =>
        t.jsxs(
          'mesh',
          {
            ref: (e) => (N.current[n] = e),
            position: [0, 0, 0.6 - n * 0.02],
            rotation: [Math.PI / 2, 0, 0],
            scale: 1 + n * 0.08,
            children: [
              t.jsx('torusGeometry', {
                args: [0.24 + n * 0.06, 0.01 + n * 0.005, 8, 64],
              }),
              t.jsx('meshBasicMaterial', {
                color: h.eyeColor,
                transparent: !0,
                opacity: 0.25,
                side: se,
              }),
            ],
          },
          n
        )
      ),
      t.jsx('points', {
        ref: m,
        position: [0, 0, 0.6],
        children: t.jsx('bufferGeometry', {}),
      }),
    ],
  });
}
export { Be as default };
