import {
  r as e,
  aY as t,
  aZ as r,
  a_ as s,
  a$ as o,
  b0 as n,
  b1 as a,
  b2 as i,
  b3 as l,
  b4 as c,
  b5 as u,
  j as p,
  b6 as h,
  b7 as y,
  b8 as m,
} from './vendor-DEG5g0yW.js';
const d = {
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
function RobotHead({ cursor: f, isHovered: x }) {
  const M = e.useRef(),
    g = e.useRef(),
    j = e.useRef(),
    S = e.useRef(),
    C = e.useRef(),
    v = e.useRef(),
    b = e.useRef(),
    I = e.useRef(),
    w = e.useRef(),
    R = e.useRef(),
    T = e.useRef([]),
    A = e.useRef(),
    L = e.useRef(),
    G = e.useRef(),
    z = e.useRef(),
    k = e.useRef(),
    B = e.useRef(),
    [P, E] = e.useState(1),
    [H, D] = e.useState('neutral'),
    [F, q] = e.useState(!1),
    [O, U] = e.useState(!1),
    [W, Y] = e.useState(!1),
    [Z, $] = e.useState(1),
    [_, J] = e.useState(!1),
    [K, N] = e.useState(!1),
    [Q, V] = e.useState({ x: 0, y: 0 }),
    [X, ee] = e.useState(0),
    [te, re] = e.useState(0);
  (e.useEffect(() => {
    let e = !0;
    const blinkLoop = () => {
      if (!e) return;
      (E('sleepy' === H ? 0.3 : 'surprised' === H ? 0.5 : 0.1),
        setTimeout(() => E(1), d.eyes.blinkDuration));
      const t =
        Math.random() * (d.eyes.blinkInterval[1] - d.eyes.blinkInterval[0]) +
        d.eyes.blinkInterval[0];
      setTimeout(blinkLoop, t * ('sleepy' === H ? 0.5 : 1));
    };
    return (
      blinkLoop(),
      () => {
        e = !1;
      }
    );
  }, [H]),
    e.useEffect(() => {
      let e = !0;
      const lookAround = () => {
        e &&
          (Math.random() > 0.4 &&
            (N(!0),
            V({ x: 1.5 * (Math.random() - 0.5), y: 1 * (Math.random() - 0.5) }),
            setTimeout(() => N(!1), 1500 + 1e3 * Math.random())),
          setTimeout(
            lookAround,
            d.eyes.lookAroundInterval + 2e3 * Math.random()
          ));
      };
      return (
        lookAround(),
        () => {
          e = !1;
        }
      );
    }, []),
    e.useEffect(() => {
      const e = Object.keys(d.emotions);
      let t = 0;
      const r = setInterval(() => {
        (D(e[t]), (t = (t + 1) % e.length));
        const r = e[t];
        (('happy' !== r && 'excited' !== r && 'love' !== r) ||
          (q(!0),
          Y(!0),
          setTimeout(() => {
            (q(!1), Y(!1));
          }, 1800)),
          ('confused' !== r && 'thinking' !== r) ||
            (U(!0), setTimeout(() => U(!1), 1500)),
          'surprised' === r && (ee(1), setTimeout(() => ee(0), 800)),
          'angry' === r && (re(1), setTimeout(() => re(0), 1e3)),
          Math.random() > 0.5 &&
            (J(!0), setTimeout(() => J(!1), 1500 + 1e3 * Math.random())));
      }, 4e3);
      return () => clearInterval(r);
    }, []));
  const se = e.useMemo(
      () => ({
        head: new n(1.5, 1.2, 1.2, 4, 4, 4),
        face: new o(1.2, 0.8),
        eye: new r(0.12, 32, 32),
        antenna: new s(0.04, 0.06, 0.6, 16),
        antennaTip: new r(0.09, 32, 32),
        energyRing: new t(0.15, 0.02, 16, 32),
      }),
      []
    ),
    oe = e.useMemo(
      () => ({
        head: new a({
          color: '#0a0a0a',
          metalness: 0.98,
          roughness: 0.12,
          emissive: '#001a1a',
          emissiveIntensity: 0.4,
        }),
        face: new a({ color: '#0a1a1a', metalness: 0.85, roughness: 0.25 }),
        side: new a({
          color: '#00ffff',
          emissive: '#00ffff',
          emissiveIntensity: 1.2,
        }),
      }),
      []
    ),
    ne = e.useMemo(() => {
      const e = new Float32Array(240),
        t = new Float32Array(240);
      for (let r = 0; r < 80; r++) {
        const s = 0.8 + 0.5 * Math.random(),
          o = Math.random() * Math.PI * 2,
          n = Math.random() * Math.PI;
        ((e[3 * r] = s * Math.sin(n) * Math.cos(o)),
          (e[3 * r + 1] = s * Math.sin(n) * Math.sin(o)),
          (e[3 * r + 2] = s * Math.cos(n)),
          (t[3 * r] = 0.02 * (Math.random() - 0.5)),
          (t[3 * r + 1] = 0.02 * (Math.random() - 0.5)),
          (t[3 * r + 2] = 0.02 * (Math.random() - 0.5)));
      }
      return { positions: e, velocities: t, count: 80 };
    }, []);
  (e.useEffect(() => {
    if (!w.current) return;
    const e = new i();
    (e.setAttribute('position', new l(ne.positions, 3)),
      (w.current.geometry = e),
      (w.current.material = new c({
        size: 0.02,
        transparent: !0,
        opacity: 0.8,
        depthWrite: !1,
      })));
  }, []),
    u((e) => {
      const t = e.clock.getElapsedTime();
      if (!M.current) return;
      const r = d.emotions[H],
        s = x ? 1.3 : 1,
        o = d.head.idleAmp * r.energyLevel * s,
        n = d.head.idleSpeed * r.pulseSpeed,
        a = Math.sin(t * n) * o,
        i = Math.sin(t * n * 0.5) * o * 0.3;
      if (((M.current.position.y = a + i), X > 0)) {
        const e = 0.05 * X;
        ((M.current.position.x += (Math.random() - 0.5) * e),
          (M.current.position.z += (Math.random() - 0.5) * e),
          ee((e) => Math.max(0, e - 0.05)));
      }
      W &&
        (M.current.position.y += Math.abs(Math.sin(6 * t)) * d.head.bounceAmp);
      const l = r.headTilt * (x ? 1.2 : 1);
      ((M.current.rotation.z = m.lerp(M.current.rotation.z, l, 0.06)),
        F &&
          (M.current.rotation.x +=
            0.35 * Math.sin(7 * t) * Math.cos(3 * t) * 0.5),
        O &&
          (M.current.rotation.y +=
            0.18 * Math.sin(12 * t) * Math.cos(5 * t) * 0.3),
        F ||
          O ||
          ((M.current.position.x =
            0.02 * Math.sin(0.4 * t) + 0.015 * Math.cos(0.7 * t)),
          (M.current.position.z = 0.015 * Math.cos(0.5 * t)),
          (M.current.rotation.z += 0.008 * Math.sin(0.25 * t))));
      const c = K ? Q : f.current,
        u = r.energyLevel * (x ? 1.4 : 0.8),
        p = c.x * u * 0.7,
        h = -c.y * u * 0.5;
      if (!F && !O) {
        const e = 'sleepy' === H ? 0.03 : d.head.lerp;
        ((M.current.rotation.y = m.lerp(M.current.rotation.y, p, e)),
          (M.current.rotation.x = m.lerp(M.current.rotation.x, h, e)));
      }
      [
        { mesh: g.current, pupil: G.current },
        { mesh: j.current, pupil: z.current },
      ].forEach(({ mesh: e, pupil: s }, o) => {
        if (!e) return;
        const n = 0 === o ? -0.4 : 0.4,
          a = m.clamp(0.25 * c.x, -0.18, d.eyes.xRange),
          i = m.clamp(0.18 * -c.y, -0.15, d.eyes.yRange);
        ((e.position.x = m.lerp(e.position.x, n + a, d.eyes.lerp)),
          (e.position.y = m.lerp(e.position.y, 0.2 + i, d.eyes.lerp)));
        const l = m.lerp(e.scale.y, P, 0.25);
        ((e.scale.y = l),
          (e.scale.x = m.lerp(e.scale.x, 1 + 0.1 * (1 - l), 0.2)));
        const u = r.eyeScale * (x ? 1.1 : 1);
        if (
          ((e.scale.x = m.lerp(e.scale.x, u, 0.06)),
          (e.scale.z = m.lerp(e.scale.z, u, 0.06)),
          s)
        ) {
          let e = 1;
          (x
            ? (e = 1.2)
            : 'surprised' === H
              ? (e = 1.3)
              : 'angry' === H && (e = 0.6),
            s.scale.setScalar(m.lerp(s.scale.x, e, 0.05)));
        }
        ('angry' === H && (e.position.y += 0.015 * Math.sin(4 * t)),
          'excited' === H &&
            ((e.position.x += 0.015 * Math.sin(6 * t + o * Math.PI)),
            (e.position.y += 0.01 * Math.cos(5 * t + o * Math.PI))),
          'sleepy' === H && (e.position.y -= 0.03));
      });
      if (
        ([C.current, v.current].forEach((e, s) => {
          if (!e) return;
          const o = 0 === s ? -1 : 1,
            n = r.eyebrowAngle * o * (x ? 1.2 : 1);
          ((e.rotation.z = m.lerp(e.rotation.z, n, 0.1)),
            'surprised' === H
              ? (e.position.y = 0.42 + 0.08 * Math.abs(Math.sin(5 * t)))
              : 'confused' === H
                ? (e.position.x += 0.02 * Math.sin(3 * t + s * Math.PI))
                : (e.position.y =
                    'angry' === H
                      ? m.lerp(e.position.y, 0.38, 0.05)
                      : m.lerp(e.position.y, 0.42, 0.05)));
        }),
        L.current)
      ) {
        const e = r.mouthCurve * (x ? 1.15 : 1);
        ((L.current.rotation.z = m.lerp(L.current.rotation.z, 0.6 * e, 0.08)),
          _
            ? ((L.current.scale.x = 1 + 0.15 * Math.sin(15 * t)),
              (L.current.scale.y = 1 + 0.2 * Math.abs(Math.sin(15 * t))))
            : ((L.current.scale.x = m.lerp(L.current.scale.x, 1, 0.1)),
              (L.current.scale.y = m.lerp(L.current.scale.y, 1, 0.1))),
          (L.current.scale.x += 0.05 * Math.sin(t * r.pulseSpeed * 2)));
      }
      if (S.current) {
        const e = r.energyLevel * (x ? 1.6 : 1);
        ((S.current.rotation.z =
          Math.sin(t * d.antenna.wobbleSpeed) * d.antenna.wobbleAmp * e +
          0.08 * Math.cos(t * d.antenna.wobbleSpeed * 0.6) * e),
          (S.current.rotation.x =
            0.12 * Math.sin(1.8 * t) * e + 0.06 * Math.cos(2.3 * t) * e),
          'thinking' === H
            ? ((S.current.position.x = 0.15 * Math.sin(2.5 * t)),
              (S.current.position.z = 0.15 * Math.cos(2.5 * t)))
            : 'excited' === H
              ? (S.current.position.y = 0.9 + 0.05 * Math.abs(Math.sin(4 * t)))
              : ((S.current.position.x = m.lerp(S.current.position.x, 0, 0.1)),
                (S.current.position.z = m.lerp(S.current.position.z, 0, 0.1)),
                (S.current.position.y = m.lerp(
                  S.current.position.y,
                  0.9,
                  0.1
                ))));
      }
      if (b.current) {
        const e =
          0.09 + 0.06 * Math.sin(t * r.pulseSpeed * 2.5) * r.energyLevel;
        ((b.current.material.opacity = e * s),
          b.current.scale.setScalar(
            1.03 + 0.015 * Math.sin(t * r.pulseSpeed * 1.5)
          ));
      }
      I.current &&
        ((I.current.material.opacity =
          0.04 + 0.03 * Math.sin(t * r.pulseSpeed)),
        I.current.scale.setScalar(
          1.08 + 0.02 * Math.cos(t * r.pulseSpeed * 0.8)
        ));
      const y = 0.8 + 0.4 * Math.sin(t * n) * s;
      if (
        (k.current && (k.current.material.emissiveIntensity = y),
        B.current && (B.current.material.emissiveIntensity = y),
        T.current.forEach((e, s) => {
          e &&
            ((e.rotation.x = t * (0.5 + 0.3 * s) * r.pulseSpeed),
            (e.rotation.y = t * (0.3 + 0.2 * s) * r.pulseSpeed),
            e.scale.setScalar(1 + 0.1 * Math.sin(2 * t + s) * r.energyLevel),
            (e.material.opacity =
              (0.3 + 0.2 * Math.sin(3 * t + s)) * r.energyLevel));
        }),
        R.current &&
          ((R.current.position.y = ((0.8 * t) % 1.5) - 0.5),
          (R.current.material.opacity =
            0.6 - 0.3 * Math.abs(R.current.position.y))),
        A.current &&
          ((A.current.rotation.y = 0.5 * t),
          (A.current.material.opacity = 0.15 + 0.1 * Math.sin(2 * t))),
        w.current && w.current.geometry)
      ) {
        w.current.rotation.y = 0.3 * t * r.pulseSpeed;
        const e = w.current.geometry.attributes.position,
          s = e?.array,
          o = ne.velocities;
        if (s)
          for (let n = 0; n < s.length; n += 3) {
            ((s[n] += o[n] * r.energyLevel),
              (s[n + 1] += o[n + 1] * r.energyLevel + 0.005 * Math.sin(t + n)),
              (s[n + 2] += o[n + 2] * r.energyLevel));
            if (Math.sqrt(s[n] ** 2 + s[n + 1] ** 2 + s[n + 2] ** 2) > 2) {
              const e = 0.8,
                t = Math.random() * Math.PI * 2,
                r = Math.random() * Math.PI;
              ((s[n] = e * Math.sin(r) * Math.cos(t)),
                (s[n + 1] = e * Math.sin(r) * Math.sin(t)),
                (s[n + 2] = e * Math.cos(r)));
            }
          }
        (w.current.geometry.attributes.position &&
          (w.current.geometry.attributes.position.needsUpdate = !0),
          w.current.material &&
            ((w.current.material.opacity = 0.25 + 0.75 * r.energyLevel),
            w.current.material.color.set(r.eyeColor)));
      }
      const E = 1 + 0.35 * Math.sin(t * r.pulseSpeed * 3) * r.energyLevel;
      $(E * s);
    }));
  const ae = d.emotions[H];
  return p.jsxs('group', {
    ref: M,
    children: [
      p.jsx('mesh', {
        geometry: se.head,
        material: oe.head,
        castShadow: !0,
        receiveShadow: !0,
      }),
      p.jsxs('mesh', {
        ref: k,
        position: [-0.76, 0, 0],
        rotation: [0, Math.PI / 2, 0],
        children: [
          p.jsx('planeGeometry', { args: [1.2, 1.2] }),
          p.jsx('meshStandardMaterial', { ...oe.side }),
        ],
      }),
      p.jsxs('mesh', {
        ref: B,
        position: [0.76, 0, 0],
        rotation: [0, -Math.PI / 2, 0],
        children: [
          p.jsx('planeGeometry', { args: [1.2, 1.2] }),
          p.jsx('meshStandardMaterial', { ...oe.side }),
        ],
      }),
      p.jsxs('mesh', {
        ref: b,
        scale: 1.03,
        children: [
          p.jsx('boxGeometry', { args: [1.5, 1.2, 1.2] }),
          p.jsx('meshBasicMaterial', {
            color: ae.eyeColor,
            transparent: !0,
            opacity: 0.12,
            side: h,
          }),
        ],
      }),
      p.jsxs('mesh', {
        ref: I,
        scale: 1.08,
        children: [
          p.jsx('boxGeometry', { args: [1.5, 1.2, 1.2] }),
          p.jsx('meshBasicMaterial', {
            color: ae.secondaryColor,
            transparent: !0,
            opacity: 0.06,
            side: h,
          }),
        ],
      }),
      p.jsx('mesh', {
        geometry: se.face,
        position: [0, 0, 0.61],
        material: oe.face,
      }),
      p.jsxs('mesh', {
        ref: A,
        position: [0, 0, 0.63],
        children: [
          p.jsx('planeGeometry', { args: [1.1, 0.7] }),
          p.jsx('meshBasicMaterial', {
            color: ae.eyeColor,
            transparent: !0,
            opacity: 0.15,
            side: y,
          }),
        ],
      }),
      p.jsxs('mesh', {
        ref: R,
        position: [0, 0, 0.62],
        children: [
          p.jsx('planeGeometry', { args: [1.2, 0.02] }),
          p.jsx('meshBasicMaterial', {
            color: ae.eyeColor,
            transparent: !0,
            opacity: 0.6,
          }),
        ],
      }),
      [
        { ref: g, pupilRef: G, x: -0.4 },
        { ref: j, pupilRef: z, x: 0.4 },
      ].map(({ ref: e, pupilRef: t, x: r }, s) =>
        p.jsxs(
          'group',
          {
            children: [
              p.jsxs('mesh', {
                ref: e,
                position: [r, 0.2, 0.65],
                children: [
                  p.jsx('sphereGeometry', { args: [0.12, 32, 32] }),
                  p.jsx('meshStandardMaterial', {
                    emissive: ae.eyeColor,
                    emissiveIntensity: (x ? 4.2 : 3) * Z,
                    color: ae.eyeColor,
                    metalness: 0.7,
                    roughness: 0.2,
                  }),
                ],
              }),
              p.jsxs('mesh', {
                position: [r, 0.2, 0.65],
                scale: 1.6,
                children: [
                  p.jsx('sphereGeometry', { args: [0.12, 16, 16] }),
                  p.jsx('meshBasicMaterial', {
                    color: ae.eyeColor,
                    transparent: !0,
                    opacity: 0.4 * Z,
                    side: h,
                  }),
                ],
              }),
              p.jsxs('mesh', {
                position: [r, 0.2, 0.65],
                scale: 2,
                children: [
                  p.jsx('sphereGeometry', { args: [0.12, 16, 16] }),
                  p.jsx('meshBasicMaterial', {
                    color: ae.secondaryColor,
                    transparent: !0,
                    opacity: 0.2 * Z,
                    side: h,
                  }),
                ],
              }),
              p.jsxs('mesh', {
                position: [r + 0.04, 0.24, 0.72],
                scale: 0.35,
                children: [
                  p.jsx('sphereGeometry', { args: [0.06, 8, 8] }),
                  p.jsx('meshBasicMaterial', {
                    color: '#ffffff',
                    transparent: !0,
                    opacity: 0.85,
                  }),
                ],
              }),
              p.jsxs('mesh', {
                ref: t,
                position: [r, 0.2, 0.78],
                children: [
                  p.jsx('sphereGeometry', { args: [0.035, 16, 16] }),
                  p.jsx('meshStandardMaterial', {
                    color: '#000000',
                    metalness: 0.1,
                    roughness: 0.6,
                  }),
                ],
              }),
              p.jsxs('mesh', {
                position: [r, 0.16, 0.74],
                children: [
                  p.jsx('ringGeometry', { args: [0.12, 0.14, 32] }),
                  p.jsx('meshBasicMaterial', {
                    color: '#000000',
                    transparent: !0,
                    opacity: 0.15,
                  }),
                ],
              }),
            ],
          },
          s
        )
      ),
      p.jsxs('mesh', {
        ref: C,
        position: [-0.45, 0.42, 0.72],
        rotation: [0, 0, 0],
        children: [
          p.jsx('boxGeometry', { args: [0.35, 0.06, 0.02] }),
          p.jsx('meshStandardMaterial', {
            color: ae.secondaryColor,
            metalness: 0.2,
            roughness: 0.6,
          }),
        ],
      }),
      p.jsxs('mesh', {
        ref: v,
        position: [0.45, 0.42, 0.72],
        rotation: [0, 0, 0],
        children: [
          p.jsx('boxGeometry', { args: [0.35, 0.06, 0.02] }),
          p.jsx('meshStandardMaterial', {
            color: ae.secondaryColor,
            metalness: 0.2,
            roughness: 0.6,
          }),
        ],
      }),
      p.jsxs('group', {
        ref: S,
        position: [0, 0.7, 0.15],
        children: [
          p.jsx('mesh', {
            geometry: se.antenna,
            position: [0, 0, 0],
            children: p.jsx('meshStandardMaterial', {
              color: '#222222',
              metalness: 0.9,
              roughness: 0.25,
            }),
          }),
          p.jsx('mesh', {
            geometry: se.antennaTip,
            position: [0, 0.33, 0],
            children: p.jsx('meshStandardMaterial', {
              emissive: ae.eyeColor,
              emissiveIntensity: 1.6,
              color: ae.eyeColor,
            }),
          }),
          p.jsxs('mesh', {
            position: [0, 0.46, 0],
            scale: 0.9,
            children: [
              p.jsx('sphereGeometry', { args: [0.12, 12, 12] }),
              p.jsx('meshBasicMaterial', {
                color: ae.secondaryColor,
                transparent: !0,
                opacity: 0.25,
              }),
            ],
          }),
        ],
      }),
      p.jsx('group', {
        ref: L,
        position: [0, -0.18, 0.73],
        children: p.jsxs('mesh', {
          children: [
            p.jsx('planeGeometry', { args: [0.45, 0.14, 8, 1] }),
            p.jsx('meshStandardMaterial', {
              color: ae.secondaryColor,
              emissive: ae.eyeColor,
              emissiveIntensity: 0.6,
              transparent: !0,
              opacity: 0.95,
            }),
          ],
        }),
      }),
      [0, 1, 2].map((e) =>
        p.jsxs(
          'mesh',
          {
            ref: (t) => (T.current[e] = t),
            position: [0, 0, 0.6 - 0.02 * e],
            rotation: [Math.PI / 2, 0, 0],
            scale: 1 + 0.08 * e,
            children: [
              p.jsx('torusGeometry', {
                args: [0.24 + 0.06 * e, 0.01 + 0.005 * e, 8, 64],
              }),
              p.jsx('meshBasicMaterial', {
                color: ae.eyeColor,
                transparent: !0,
                opacity: 0.25,
                side: y,
              }),
            ],
          },
          e
        )
      ),
      p.jsx('points', {
        ref: w,
        position: [0, 0, 0.6],
        children: p.jsx('bufferGeometry', {}),
      }),
    ],
  });
}
export { RobotHead as default };
