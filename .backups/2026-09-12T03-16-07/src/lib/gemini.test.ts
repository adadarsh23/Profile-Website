import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ---------------------------------------------------------------------------
// normalizeKey — re-implemented inline because it is a private helper
// ---------------------------------------------------------------------------
describe('normalizeKey (internal logic)', () => {
  function normalizeKey(str: string): string {
    return str
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  it('lowercases the string', () => {
    expect(normalizeKey('Hello World')).toBe('hello world');
  });

  it('strips punctuation characters', () => {
    expect(normalizeKey('Whats up?!')).toBe('whats up');
  });

  it('collapses multiple spaces', () => {
    expect(normalizeKey('  foo   bar  ')).toBe('foo bar');
  });

  it('handles an empty string', () => {
    expect(normalizeKey('')).toBe('');
  });
});

// ---------------------------------------------------------------------------
// prewarmAiServer — cooldown throttle & guard paths
// ---------------------------------------------------------------------------
describe('prewarmAiServer', () => {
  let fetchSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubGlobal('navigator', { onLine: true });
    sessionStorage.clear();
    fetchSpy = vi
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue({ ok: true } as Response);
    // Reset module so lastWarmedAt resets between tests
    vi.resetModules();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
    sessionStorage.clear();
  });

  it('calls fetch on first invocation', async () => {
    const { prewarmAiServer } = await import('./gemini');
    prewarmAiServer();
    await Promise.resolve();
    expect(fetchSpy).toHaveBeenCalledTimes(1);
  });

  it('skips fetch when navigator.onLine is false', async () => {
    vi.stubGlobal('navigator', { onLine: false });
    const { prewarmAiServer } = await import('./gemini');
    prewarmAiServer();
    await Promise.resolve();
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('skips fetch when ai_prewarm_disabled is set in sessionStorage', async () => {
    sessionStorage.setItem('ai_prewarm_disabled', 'true');
    const { prewarmAiServer } = await import('./gemini');
    prewarmAiServer();
    await Promise.resolve();
    expect(fetchSpy).not.toHaveBeenCalled();
  });
});
