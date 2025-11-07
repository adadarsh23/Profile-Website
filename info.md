# 🌐 Info Website

A modern, fast, and visually rich portfolio built with **React + Vite**, styled using **Tailwind CSS**, and powered by **GSAP**, **Three.js**, and **Framer Motion** for smooth animations.  
This project also integrates **Supabase**, **Formspree**, and **Statsig** for backend, analytics, and performance tracking.

---

## 🚀 Tech Stack

**Frontend**

- React 18 (Vite build)
- Tailwind CSS
- Framer Motion
- GSAP & Anime.js
- Three.js + React Three Fiber + Drei
- Radix UI & Lucide Icons

**Backend / APIs**

- Supabase (Authentication, Database)
- Formspree (Contact Form Handling)
- Statsig (Analytics & A/B Testing)
- Sentry (Error Monitoring)
- LogRocket (Session Tracking)

**Developer Tools**

- ESLint + Prettier (Linting & Formatting)
- Storybook (UI Component Library)
- Vitest + Playwright (Testing)
- Husky (Git Hooks)
- Lighthouse (Performance Audits)
- Vite Plugins (Compression, Sitemap, PWA, Remove Console)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/adadarsh23/profile-website.git
cd profile-website
```

### 2. Clean & Install Dependencies

```bash
rimraf node_modules package-lock.json && npm cache clean --force
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

| Command              | Description                 |
| -------------------- | --------------------------- |
| `npm run dev`        | Start development server    |
| `npm run build`      | Build for production        |
| `npm run preview`    | Preview built app locally   |
| `npm run lint`       | Run ESLint checks           |
| `npm run format`     | Format code with Prettier   |
| `npm run storybook`  | Start Storybook environment |
| `npm run test`       | Run Vitest unit tests       |
| `npm run lighthouse` | Run Lighthouse audit        |
| `npm run deploy`     | Deploy via GitHub Pages     |

## Environment Variables

**Create a .env file in the root directory:**

- VITE_FORMSPREE_URL=your_value_here
- VITE_GA4_MEASUREMENT_ID=your_value_here
- VITE_LOGROCKET_APP_ID=your_value_here
- VITE_LOGROCKET_USER_EMAIL=your_value_here
- VITE_LOGROCKET_USER_ID=your_value_here
- VITE_APP_STATSIG_CLIENT_KEY=your_value_here
- ITE_LOGROCKET_USER_NAME=your_value_here
- VITE_SENTRY_DSN=your_value_here
- VITE_SENTRY_TRACES_SAMPLE_RATE=your_value_here
- VITE_TUBE_API_KEY=your_value_here
- VITE_YOUTUBE_CHANNEL_ID=your_value_here
- VITE_YOUTUBE_USERNAME=your_value_here
- VITE_IP_API_URL=your_value_here
- VITE_SUPABASE_URL=your_value_here
- VITE_SUPABASE_ANON_KEY=your_value_here
- VITE_GEMINI_API_KEY=your_value_here

---

## Manual Download

### ✅ Step 1: Install main dependencies

```bash
npm install @formspree/react @gsap/react @radix-ui/react-dialog @radix-ui/react-label @radix-ui/react-popover @radix-ui/react-primitive @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden @react-three/drei @react-three/fiber @sentry/react @sentry/tracing @statsig/react-bindings @statsig/session-replay @statsig/web-analytics @studio-freight/lenis @supabase/supabase-js @tailwindcss/vite animejs axios boxen chalk class-variance-authority clsx dotenv framer-motion gl-matrix gsap logrocket lucide-react motion ogl postprocessing pretty-bytes react react-dom react-ga4 react-icons react-intersection-observer react-router-dom storybook tailwind-merge three uuid
```

### ✅ Step 2: Install dev dependencies

```bash
npm install -D @chromatic-com/storybook @eslint/js @storybook/addon-a11y @storybook/addon-docs @storybook/addon-onboarding @storybook/addon-vitest @storybook/react-vite @types/react @types/react-dom @vitejs/plugin-legacy @vitejs/plugin-react @vitest/browser @vitest/coverage-v8 chrome-launcher eslint eslint-plugin-react-hooks eslint-plugin-react-refresh eslint-plugin-storybook gh-pages globals husky jsdom lighthouse playwright postcss prettier rimraf rollup-plugin-visualizer tailwindcss tw-animate-css vite vite-plugin-compression vite-plugin-pwa vite-plugin-remove-console vite-plugin-sitemap vitest eslint-plugin-react

```

### ⚙️ Optional clean install tip:

```bash
rimraf node_modules package-lock.json && npm cache clean --force
npm install
```

---
