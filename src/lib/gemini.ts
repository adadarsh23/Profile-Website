// src/lib/gemini.ts
export type ChatMessage = {
  sender: 'ai' | 'user';
  text: string;
};

const API_URL =
  import.meta.env.VITE_API_URL ||
  'https://ai-assistant-server-colf.onrender.com/api/gemini';

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

type GeminiResponse = {
  candidates?: {
    content?: { parts?: { text: string }[] };
  }[];
};

type ServerResponse = {
  data?: GeminiResponse;
};

export async function runChat(chatHistory: ChatMessage[]): Promise<string> {
  const messages = chatHistory.map((msg) => ({
    role: msg.sender === 'ai' ? 'model' : 'user',
    content: msg.text,
  }));

  let attempts = 0;
  const maxRetries = 3;

  while (attempts < maxRetries) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        if (response.status === 429) {
          attempts++;
          console.warn(
            `⚠️ Rate limit hit. Retrying... (${attempts}/${maxRetries})`
          );
          await delay(1500 * attempts);
          continue;
        }
        // Try to read the response body to surface a helpful server message
        let bodyText: string | undefined;
        try {
          const text = await response.text();
          if (text) {
            try {
              const json = JSON.parse(text);
              bodyText =
                json.message ||
                json.error ||
                json.data?.message ||
                JSON.stringify(json);
            } catch {
              bodyText = text;
            }
          }
        } catch (e) {
          // ignore body read errors
        }

        throw new Error(
          `Gemini request failed (${response.status})${bodyText ? `: ${bodyText}` : ''}`
        );
      }

      const serverData: ServerResponse = await response.json();
      return (
        serverData.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        '⚠️ No response from Gemini.'
      );
    } catch (err) {
      if (attempts >= maxRetries - 1) {
        console.error('❌ Gemini Chat Error:', err);
        const message =
          err instanceof Error ? err.message : String(err ?? 'Unknown error');
        // If the error already includes a helpful server message, return it so the UI can show it.
        if (message) return message;
        return '⚠️ Gemini is currently unavailable. Please try again later.';
      }
      attempts++;
      await delay(1500 * attempts);
    }
  }

  return '❌ Gemini API limit reached. Please try again later.';
}
