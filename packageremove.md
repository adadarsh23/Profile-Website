### Remove unused cammands

```bash
"prepare": "husky install",
"postinstall": "husky install",
"storybook": "storybook dev -p 6006",
"build-storybook": "storybook build",
"preview-storybook": "storybook preview",
"deploy-storybook": "storybook build && gh-pages -d storybook-static",

```

### Remove Dependencies

```bash
"@google/generative-ai": "^0.24.1",
"@radix-ui/react-popover": "^1.1.15",
"@radix-ui/react-primitive": "^2.1.4",
"@radix-ui/react-separator": "^1.1.8",
"@radix-ui/react-switch": "^1.2.6",
"@radix-ui/react-tooltip": "^1.2.8",
"@radix-ui/react-visually-hidden": "^1.2.4",
"@sentry/tracing": "^7.120.4",
"@statsig/session-replay": "^3.30.0",
"@statsig/web-analytics": "^3.30.0",
"storybook": "^10.0.8",
"animejs": "^4.2.2",
"boxen": "^8.0.1",
"crypto": "^1.0.1",
"dotenv": "^17.2.3",
"express-async-handler": "^1.2.0",
"mermaid": "^11.12.1",
"motion": "^12.23.24",
"pretty-bytes": "^7.1.0",
"rate-limit": "^0.1.1",
"react-bits": "^1.0.5",
"react-hook-form": "^7.66.1",
```

### Remove DevDependencies

```bash
"@babel/plugin-transform-react-jsx": "^7.27.1",
"@rollup/plugin-terser": "^0.4.4",
"@vitest/browser": "^4.0.13",
"@vitest/coverage-v8": "^4.0.13",
"eslint-plugin-storybook": "^10.0.8",
"@storybook/addon-a11y": "^10.0.8",
"@storybook/addon-docs": "^10.0.8",
"@storybook/addon-onboarding": "^10.0.8",
"@storybook/addon-vitest": "^10.0.8",
"@storybook/react-vite": "^10.0.8",
"husky": "^9.1.7",
"playwright": "^1.56.1",
"postcss": "^8.5.6",
"rimraf": "^6.1.2",
"tailwindcss": "^4.1.17",
"tw-animate-css": "^1.4.0",
"vite-plugin-remove-console": "^2.2.0",
```
