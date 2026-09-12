import { ESLint } from 'eslint';

const eslint = new ESLint();
const results = await eslint.lintFiles(['src']);
let totalErrors = 0;
let totalWarnings = 0;

for (const r of results) {
  if (r.errorCount > 0 || r.warningCount > 0) {
    console.log(r.filePath);
    for (const m of r.messages) {
      console.log(
        `  ${m.line}:${m.column} [${m.severity === 2 ? 'error' : 'warn'}] ${m.ruleId}: ${m.message}`
      );
      if (m.severity === 2) totalErrors++;
      else totalWarnings++;
    }
  }
}
console.log(
  `\nTotal: ${totalErrors} errors, ${totalWarnings} warnings in ${results.filter((r) => r.errorCount || r.warningCount).length} files`
);
