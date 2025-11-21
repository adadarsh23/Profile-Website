/**
 * Formats and sanitizes a raw text response, often from an AI,
 * to ensure it's clean, readable, and safe for rendering.
 * This function is designed to handle markdown-like text by normalizing
 * whitespace and ensuring proper spacing around elements like code blocks.
 *
 * @param text The raw string to format. Can be null or undefined.
 * @returns A cleaned and formatted string. Returns an empty string if the input is nullish.
 */
export function formatResponse(text: string | null | undefined): string {
  if (!text) {
    return '';
  }

  let formattedText = text
    .replace(/\r\n/g, '\n') // Normalize line endings to LF
    .replace(/```(\w+)\s*\n/g, '```$1\n') // Remove space after language in code blocks
    .replace(/\n```/g, '\n\n```'); // Ensure newline before closing code fence

  // Ensure there's a newline before and after fenced code blocks
  formattedText = formattedText.replace(/([^\n])\n(```)/g, '$1\n\n$2');
  formattedText = formattedText.replace(/(```)\n([^\n])/g, '$1\n\n$2');

  // Add a newline before lists if they follow a non-newline character
  formattedText = formattedText.replace(/([^\n])(\n\s*[-*] )/g, '$1\n$2');

  // Automatically linkify URLs that are not already part of a markdown link
  // This regex looks for URLs that are not preceded by `](` or followed by `)`.
  // It's a simplified approach and might not cover all edge cases.
  const urlRegex = /(?<!\]\()https?:\/\/[^\s]+(?!\))/g;
  formattedText = formattedText.replace(urlRegex, (url) => {
    // Avoid double-wrapping if it's already a link
    return `${url}`;
  });

  // Collapse more than two consecutive newlines into just two.
  formattedText = formattedText.replace(/\n{3,}/g, '\n\n');

  return formattedText.trim();
}
