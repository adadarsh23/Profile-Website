// // TypeScript
// export function formatResponse(text: string) {
//   // Keep Markdown syntax clean and readable
//   return text
//     .replace(/\n{3,}/g, '\n\n') // normalize spacing
//     .trim();
// }

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

  // Normalize line endings to LF
  let formattedText = text.replace(/\r\n/g, '\n');

  // Ensure there's a newline before and after fenced code blocks
  // This prevents lists or other text from merging with code blocks.
  formattedText = formattedText.replace(/(\S)(```)/g, '$1\n$2'); // Before opening fence
  formattedText = formattedText.replace(/(```)(\S)/g, '$1\n$2'); // After closing fence

  // Collapse more than two consecutive newlines into just two.
  // This helps in maintaining clean spacing between paragraphs.
  formattedText = formattedText.replace(/\n{3,}/g, '\n\n');

  // Trim leading/trailing whitespace from the entire response.
  return formattedText.trim();
}
