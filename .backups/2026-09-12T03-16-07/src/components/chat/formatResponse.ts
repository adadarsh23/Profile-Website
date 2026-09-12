/**
 * Formats and sanitizes a raw text response from the AI
 * to ensure clean, readable, cross-browser safe markdown rendering.
 */
export function formatResponse(text: string | null | undefined): string {
  if (!text) {
    return '';
  }

  let formattedText = text
    .replace(/\r\n/g, '\n') // Normalize line endings to LF
    .replace(/```(\w+)\s*\n/g, '```$1\n'); // Clean fenced language tag

  // Ensure blank line before code blocks and after code blocks without corrupting inside contents
  formattedText = formattedText.replace(
    /([^\n])\n(```[\s\S]*?```)/g,
    '$1\n\n$2'
  );
  formattedText = formattedText.replace(
    /(```[\s\S]*?```)\n([^\n])/g,
    '$1\n\n$2'
  );

  // Add spacing before list items
  formattedText = formattedText.replace(/([^\n])(\n\s*[-*] )/g, '$1\n$2');

  // Collapse 3+ consecutive newlines to 2
  formattedText = formattedText.replace(/\n{3,}/g, '\n\n');

  return formattedText.trim();
}
