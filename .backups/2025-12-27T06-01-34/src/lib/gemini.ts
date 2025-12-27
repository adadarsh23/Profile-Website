// // src/lib/gemini.ts
// export type ChatMessage = {
//   sender: 'user' | 'ai';
//   text: string;
// };

// // ✅ Gemini 2.0 Flash endpoint (v1beta) + CORS proxy
// const MODEL_ID = 'gemini-2.0-flash';
// const API_URL = `https://cors-anywhere.herokuapp.com/https://generativelanguage.googleapis.com/v1beta/models/${MODEL_ID}:generateContent`;

// const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

// if (!apiKey) {
//   throw new Error('❌ Missing environment variable: VITE_GOOGLE_API_KEY');
// }

// // ✅ Main chat function
// export async function runChat(history: ChatMessage[]): Promise<string> {
//   const prompt = history
//     .map((msg) => `${msg.sender === 'user' ? 'User' : 'AI'}: ${msg.text}`)
//     .join('\n');

//   try {
//     const response = await fetch(`${API_URL}?key=${apiKey}`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         // Required by cors-anywhere proxy
//         'x-requested-with': 'XMLHttpRequest',
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [{ text: prompt }],
//           },
//         ],
//       }),
//     });

//     if (!response.ok) {
//       const err = await response.text();
//       console.error('❌ Gemini API Error:', err);
//       throw new Error(`Gemini request failed (${response.status})`);
//     }

//     const data = await response.json();
//     const output =
//       data?.candidates?.[0]?.content?.parts?.[0]?.text ||
//       '⚠️ Gemini returned no response.';
//     return output.trim();
//   } catch (error) {
//     console.error('❌ Gemini Chat Error:', error);
//     return '⚠️ Something went wrong while fetching from Gemini.';
//   }
// }

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
        throw new Error(`Gemini request failed (${response.status})`);
      }

      const serverData: ServerResponse = await response.json();
      return (
        serverData.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        '⚠️ No response from Gemini.'
      );
    } catch (err) {
      if (attempts >= maxRetries - 1) {
        console.error('❌ Gemini Chat Error:', err);
        return '⚠️ Gemini is currently unavailable. Please try again later.';
      }
      attempts++;
      await delay(1500 * attempts);
    }
  }

  return '❌ Gemini API limit reached. Please try again later.';
}
