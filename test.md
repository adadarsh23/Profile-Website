# Project Quality & Testing Guide

This guide provides the essential commands for maintaining code quality, running tests, and ensuring the project is in a healthy state.

---

## 1. Type Check

Verifies TypeScript types across the project without generating any JavaScript files. This is useful for catching type-related errors early.

```bash
npm run type-check
```

## 2. Lint

Run ESLint to detect and fix code quality issues.

```bash
npm run lint
```

## 3. Run Tests (Silent)

Execute test suites without verbose console output.

```bash
npm run test --silent
```

## 4. Build Project

Create a production-ready build of the project.

```bash
npm run build
```

## 5. Security Audit

Scan for high or critical vulnerabilities in production dependencies.

```bash
npm audit --production --audit-level=high
```

## 6. List React Versions

Check all installed React versions in the dependency tree.

```bash
npm ls react --all
```

---

To create this file automatically, run:

```bash
echo "# Project Test Commands

This file includes all necessary commands to check, lint, test, build, audit, and inspect dependencies for this project.

## 1. Type Check
\`\`\`bash
npm run type-check
\`\`\`

## 2. Lint
\`\`\`bash
npm run lint
\`\`\`

## 3. Run Tests (Silent)
\`\`\`bash
npm run test --silent
\`\`\`

## 4. Build Project
\`\`\`bash
npm run build
\`\`\`

## 5. Security Audit
\`\`\`bash
npm audit --production --audit-level=high
\`\`\`

## 6. List React Versions
\`\`\`bash
npm ls react --all
\`\`\`
" > test.md
```
