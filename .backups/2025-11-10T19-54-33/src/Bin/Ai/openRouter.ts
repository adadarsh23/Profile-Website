const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY;

if (!apiKey) {
  throw new Error('❌ Missing environment variable: VITE_OPENROUTER_API_KEY');
}

export type ChatMessage = {
  sender: 'ai' | 'user';
  text: string;
};

/**
 * Runs a chat completion using OpenRouter (Google Gemini 2.5 Pro).
 * @param chatHistory - Conversation messages
 * @param model - The model to use (default: google/gemini-2.5-pro)
 * @returns The AI-generated response text
 */
export async function runChat(
  chatHistory: ChatMessage[],
  model: string = 'google/gemini-2.5-pro'
): Promise<string> {
  const formattedMessages = chatHistory.map((m) => ({
    role: m.sender === 'ai' ? 'assistant' : 'user',
    content: m.text.trim(),
  }));

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 1024, // Gemini supports longer completions
        top_p: 0.9,
        frequency_penalty: 0.2,
        presence_penalty: 0.1,
      }),
    });

    if (!response.ok) {
      let errorMessage = `HTTP ${response.status} - ${response.statusText}`;
      try {
        const errorData = await response.json();
        if (errorData?.error?.message) {
          errorMessage = errorData.error.message;
        }
      } catch {
        // ignore JSON parse error
      }
      console.error('❌ OpenRouter API Error:', errorMessage);
      return `⚠️ AI Error (${response.status}): ${errorMessage}`;
    }

    const data = await response.json();

    if (!data?.choices?.length) {
      console.warn('⚠️ No choices returned from Gemini model.');
      return '🤖 No response received from Gemini. Please try again.';
    }

    const output = data.choices[0]?.message?.content?.trim();
    if (!output) {
      console.warn('⚠️ Gemini response contained no text.');
      return '🤖 Gemini did not return a valid message.';
    }

    return output;
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : 'Unexpected network or API failure.';
    console.error('🚨 Network/API Error:', message);
    return '⚠️ I’m having trouble connecting to Gemini right now. Please try again later.';
  }
}
