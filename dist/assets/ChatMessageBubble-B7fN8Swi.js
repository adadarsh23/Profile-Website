import {
  r as e,
  j as t,
  m as s,
  bv as a,
  bw as i,
  bx as n,
  by as o,
  bz as r,
  bA as l,
  bB as c,
  bC as d,
  X as m,
  bD as h,
  bE as b,
  bF as x,
} from './vendor-CLKqtzgM.js';
import { c as p } from './utils-xZivFseN.js';
const u = e.memo(({ inline: s, className: a, children: i }) => {
  const [n, o] = e.useState(!1),
    r = /language-(\w+)/.exec(a || ''),
    d = String(i).replace(/\n$/, '');
  return !s && r
    ? t.jsxs('div', {
        className: 'relative my-2',
        children: [
          t.jsx('button', {
            onClick: () => {
              (navigator.clipboard.writeText(d),
                o(!0),
                setTimeout(() => o(!1), 2e3));
            },
            className:
              'absolute top-2 right-2 p-1.5 rounded-md bg-black/30 text-white/70 hover:bg-black/50 hover:text-white transition-all',
            title: 'Copy code',
            children: n
              ? t.jsx(c, { className: 'w-4 h-4 text-green-400' })
              : t.jsx(l, { className: 'w-4 h-4' }),
          }),
          t.jsx(b, {
            language: r[1],
            PreTag: 'div',
            showLineNumbers: !1,
            wrapLongLines: !0,
            style: x,
            customStyle: {
              borderRadius: '0.5rem',
              padding: '1rem',
              fontSize: '0.875rem',
            },
            children: d,
          }),
        ],
      })
    : t.jsx('code', {
        className: 'px-1.5 py-1 rounded bg-white/20 text-[0.9em]',
        children: i,
      });
});
function ChatMessageBubble({ msg: b, onRegenerate: x, allMessages: g }) {
  const w = 'ai' === b.sender,
    [j, N] = e.useState(!1),
    [y, k] = e.useState(!1),
    [v, S] = e.useState(!1),
    [f, C] = e.useState(!1),
    [T, M] = e.useState(!1);
  return t.jsxs(s.div, {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.25, ease: 'easeOut' },
    onClick: () => M((e) => !e),
    className: p(
      'group max-w-[80%] px-4 py-3 rounded-xl shadow-md backdrop-blur-md break-words whitespace-pre-wrap relative mb-4',
      w
        ? 'bg-white/10 text-white self-start'
        : 'bg-white/85 text-black font-semibold self-end',
      T && 'z-10'
    ),
    children: [
      t.jsx('div', {
        className: p(
          'prose prose-sm max-w-none prose-p:text-inherit prose-headings:text-inherit prose-strong:text-inherit',
          w ? 'prose-invert' : ''
        ),
        children: t.jsx(a, {
          rehypePlugins: [n],
          remarkPlugins: [i],
          components: { code: u },
          children: b.text,
        }),
      }),
      t.jsxs('div', {
        className: p(
          'absolute -bottom-4 right-0 flex items-center gap-1 p-1 rounded-full bg-black/20 border border-white/10 opacity-0 transition-all duration-300',
          'group-hover:opacity-100 group-hover:-bottom-5',
          T && 'opacity-100 -bottom-5'
        ),
        children: [
          w &&
            t.jsxs(t.Fragment, {
              children: [
                t.jsx('button', {
                  onClick: () => {
                    (N(!j), k(!1));
                  },
                  title: 'Like',
                  className: p('icon-action-btn', j && 'text-green-400'),
                  children: t.jsx(o, { className: 'w-4 h-4' }),
                }),
                t.jsx('button', {
                  onClick: () => {
                    (k(!y), N(!1));
                  },
                  title: 'Dislike',
                  className: p('icon-action-btn', y && 'text-red-400'),
                  children: t.jsx(r, { className: 'w-4 h-4' }),
                }),
              ],
            }),
          g &&
            g.length > 1 &&
            t.jsx('button', {
              onClick: () => {
                if (!g || !g.length) return;
                const e = g
                  .map((e) => `${'ai' === e.sender ? 'AI' : 'User'}: ${e.text}`)
                  .join('\n\n');
                (navigator.clipboard.writeText(e),
                  S(!0),
                  setTimeout(() => S(!1), 1500));
              },
              title: 'Copy All Messages',
              className: 'icon-action-btn',
              children: t.jsx(l, { className: 'w-4 h-4 rotate-45' }),
            }),
          t.jsx('button', {
            onClick: () => {
              (navigator.clipboard.writeText(b.text),
                S(!0),
                setTimeout(() => S(!1), 1500));
            },
            title: v ? 'Copied!' : 'Copy Message',
            className: p('icon-action-btn', v && 'text-green-400'),
            children: v
              ? t.jsx(c, { className: 'w-4 h-4' })
              : t.jsx(l, { className: 'w-4 h-4' }),
          }),
          w &&
            x &&
            !f &&
            t.jsx('button', {
              onClick: x,
              title: 'Regenerate',
              className: 'icon-action-btn',
              children: t.jsx(d, { className: 'w-4 h-4' }),
            }),
          t.jsx('button', {
            onClick: () => {
              if (f) return (speechSynthesis.cancel(), void C(!1));
              if (!b.text) return;
              const e = new SpeechSynthesisUtterance(b.text),
                t = speechSynthesis.getVoices(),
                s =
                  t.find(
                    (e) =>
                      /en-US/i.test(e.lang) && /google|microsoft/i.test(e.name)
                  ) || t.find((e) => /en-US/i.test(e.lang));
              (s && (e.voice = s),
                (e.pitch = 1),
                (e.rate = 1.1),
                (e.onstart = () => C(!0)),
                (e.onend = () => C(!1)),
                (e.onerror = () => C(!1)),
                speechSynthesis.speak(e));
            },
            title: f ? 'Stop' : 'Speak',
            className: p('icon-action-btn', f && 'text-blue-400'),
            children: f
              ? t.jsx(m, { className: 'w-4 h-4 animate-pulse' })
              : t.jsx(h, { className: 'w-4 h-4' }),
          }),
        ],
      }),
    ],
  });
}
export { ChatMessageBubble as default };
