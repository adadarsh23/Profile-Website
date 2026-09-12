// src/lib/gemini.ts
import { queryLocalKnowledge } from '../components/chat/knowledgeEngine';

import type { ChatMessage } from '../components/chat/chatTypes';
export type { ChatMessage };

const API_BASE =
  import.meta.env.VITE_API_URL ||
  'https://ai-assistant-server-colf.onrender.com';

const API_URL = API_BASE.endsWith('/api/gemini')
  ? API_BASE
  : `${API_BASE.replace(/\/+$/, '')}/api/gemini`;

const HEALTH_URL = API_BASE.endsWith('/api/gemini')
  ? API_BASE.replace('/api/gemini', '/health')
  : `${API_BASE.replace(/\/+$/, '')}/health`;

// High-speed response cache (In-Memory + LocalStorage fallback)
const MEMORY_CACHE = new Map<string, string>();
const CACHE_STORAGE_KEY = 'ai_query_cache_v2';
const CACHE_MAX_ENTRIES = 100;

function getCachedResponse(normalizedQuery: string): string | null {
  if (MEMORY_CACHE.has(normalizedQuery)) {
    return MEMORY_CACHE.get(normalizedQuery)!;
  }
  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(CACHE_STORAGE_KEY);
      if (raw) {
        const stored = JSON.parse(raw);
        if (stored && stored[normalizedQuery]) {
          MEMORY_CACHE.set(normalizedQuery, stored[normalizedQuery]);
          return stored[normalizedQuery];
        }
      }
    } catch {
      // ignore storage errors
    }
  }
  return null;
}

function setCachedResponse(normalizedQuery: string, response: string) {
  if (!normalizedQuery || !response) return;
  MEMORY_CACHE.set(normalizedQuery, response);

  if (typeof window !== 'undefined') {
    try {
      const raw = localStorage.getItem(CACHE_STORAGE_KEY);
      const stored: Record<string, string> = raw ? JSON.parse(raw) : {};
      stored[normalizedQuery] = response;

      // Keep cache size bounded
      const keys = Object.keys(stored);
      if (keys.length > CACHE_MAX_ENTRIES) {
        delete stored[keys[0]];
      }
      localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // ignore storage write errors
    }
  }
}

// Background Server Pre-warming
let lastWarmedAt = 0;
const WARMUP_COOLDOWN_MS = 2 * 60 * 1000; // 2 minutes

const PREWARM_DISABLED_KEY = 'ai_prewarm_disabled';

/**
 * Pre-warms the Render backend server in the background on user interaction
 * so it is awake and hot before the user finishes typing a question.
 */
export function prewarmAiServer(): void {
  if (typeof window === 'undefined' || !navigator.onLine) {
    return;
  }

  try {
    if (sessionStorage.getItem(PREWARM_DISABLED_KEY)) {
      return;
    }
  } catch {
    // Ignore storage restrictions
  }

  const now = Date.now();
  if (now - lastWarmedAt < WARMUP_COOLDOWN_MS) {
    return; // Already prewarmed recently
  }
  lastWarmedAt = now;

  try {
    fetch(HEALTH_URL, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      keepalive: true,
    })
      .then((res) => {
        if (res.ok) {
          // Server awake
        }
      })
      .catch(() => {
        // If blocked by client (adblocker) or network unreachable, disable further attempts this session
        try {
          sessionStorage.setItem(PREWARM_DISABLED_KEY, 'true');
        } catch {
          // Ignore storage restrictions
        }
      });
  } catch {
    // Ignore warmup exceptions
  }
}

function normalizeKey(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Executes chat completion with Hybrid Fast-Path + Intelligent Caching + Cloud Fallback.
 */
export async function runChat(
  chatHistory: ChatMessage[],
  externalSignal?: AbortSignal
): Promise<string> {
  const userMessages = chatHistory.filter((msg) => msg.sender === 'user');
  const lastUserMsg = userMessages[userMessages.length - 1];

  if (!lastUserMsg || !lastUserMsg.text.trim()) {
    return "Hello! How can I assist you with Âd Adarsh's music or portfolio today?";
  }

  const queryText = lastUserMsg.text.trim();
  const normalizedKey = normalizeKey(queryText);

  // 1. FAST-PATH: Check Cache (<1ms)
  const cached = getCachedResponse(normalizedKey);
  if (cached) {
    return cached;
  }

  // 2. FAST-PATH: Local Knowledge Engine (<5ms)
  const localMatch = queryLocalKnowledge(queryText);
  if (localMatch.matched && localMatch.confidence >= 0.95) {
    setCachedResponse(normalizedKey, localMatch.response);
    return localMatch.response;
  }

  // 3. CLOUD ENGINE: Pre-warmed API Call with Fast Timeout & Graceful Recovery
  const messages = chatHistory.map((msg) => ({
    role: msg.sender === 'ai' ? 'model' : 'user',
    content: msg.text,
  }));

  const controller = new AbortController();
  // 7.5 second timeout to keep UI snappy instead of hanging for 30s
  const timeoutId = setTimeout(() => controller.abort(), 7500);

  // If external signal fires (e.g. user clicks Stop Generating), abort immediately
  if (externalSignal) {
    externalSignal.addEventListener('abort', () => controller.abort(), {
      once: true,
    });
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const serverData = await response.json();
      const aiText =
        serverData?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        serverData?.reply ||
        serverData?.message;

      if (aiText) {
        setCachedResponse(normalizedKey, aiText);
        return aiText;
      }
    }
  } catch (err) {
    clearTimeout(timeoutId);
    // If user cancelled, rethrow abort error so caller knows
    if (externalSignal?.aborted) {
      throw new DOMException('Generation stopped by user', 'AbortError');
    }
    console.warn(
      'Cloud AI fetch timed out or unavailable, using intelligent assistant fallback:',
      err
    );
  }

  // 4. INTELLIGENT FALLBACK: If Cloud AI was slow or unavailable, provide portfolio knowledge response
  if (localMatch.response) {
    setCachedResponse(normalizedKey, localMatch.response);
    return localMatch.response;
  }

  // General helpful portfolio assistant fallback
  const fallback = `I'm currently operating in fast local mode. 

**Âd Adarsh** is a music producer, beatmaker, and creative developer based in Delhi, India. 
- 🎵 **Flagship Album**: [Silent Ritual (2025)](/sample) – 10 atmospheric tracks
- 🎧 **Sample Beats**: Lo-fi, Trap, House, and EDM instrumentals available on the [Sample Beats Page](/sample)
- 🎛 **DAW & Production**: FL Studio, Serum, Omnisphere, sound design, mixing & mastering
- 📬 **Booking & Contact**: [${import.meta.env.VITE_CONTACT_EMAIL || 'adadarsh523@gmail.com'}](mailto:adadarsh523@gmail.com) or visit the [Contact Page](/contact)

How can I help you explore further?`;

  setCachedResponse(normalizedKey, fallback);
  return fallback;
}
