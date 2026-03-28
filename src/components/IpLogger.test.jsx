import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import IpLogger, { isValidPublicUrl } from './IpLogger';

const insertMock = vi.fn();

vi.mock('../lib/supabaseClient', () => ({
  isSupabaseConfigured: true,
  supabase: {
    from: vi.fn(() => ({
      insert: insertMock,
    })),
  },
}));

const flushPromises = async () => {
  await act(async () => {
    await Promise.resolve();
    await Promise.resolve();
  });
};

describe('IpLogger', () => {
  let container;
  let root;

  beforeEach(() => {
    globalThis.IS_REACT_ACT_ENVIRONMENT = true;
    vi.useFakeTimers();
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);

    vi.restoreAllMocks();
    vi.stubEnv('VITE_IP_API_URL', 'https://example.com/ip');
    localStorage.clear();
    sessionStorage.clear();
    insertMock.mockReset();
    insertMock.mockResolvedValue({ error: null });
  });

  afterEach(async () => {
    vi.unstubAllEnvs();
    vi.useRealTimers();
    await act(async () => {
      root.unmount();
    });
    container.remove();
  });

  it('validates public URLs safely', () => {
    expect(isValidPublicUrl('https://example.com/ip')).toBe(true);
    expect(isValidPublicUrl('http://localhost:3000')).toBe(true);
    expect(isValidPublicUrl('notaurl')).toBe(false);
    expect(isValidPublicUrl('')).toBe(false);
  });

  it('skips logging when the IP API URL is invalid', async () => {
    vi.stubEnv('VITE_IP_API_URL', 'bad-url');
    const fetchSpy = vi.spyOn(global, 'fetch');
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await act(async () => {
      root.render(<IpLogger />);
    });

    await flushPromises();

    expect(warnSpy).toHaveBeenCalledWith(
      'Visitor logging skipped: invalid IP API URL'
    );
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(insertMock).not.toHaveBeenCalled();
  });

  it('disables logging for the session when fetch fails', async () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new TypeError('Failed to fetch'));
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});

    await act(async () => {
      root.render(<IpLogger />);
    });

    await flushPromises();
    await act(async () => {
      vi.runAllTimers();
    });
    await flushPromises();

    expect(sessionStorage.getItem('visitorLoggingDisabled')).toBe('true');
    expect(warnSpy).toHaveBeenCalledWith(
      'Visitor logging skipped: IP service is unreachable'
    );
    expect(insertMock).not.toHaveBeenCalled();
  });

  it('stores a visitor once when fetch and insert succeed', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => ({
        ip: '127.0.0.1',
        city: 'Kolkata',
        region: 'WB',
        country_name: 'India',
      }),
    });

    await act(async () => {
      root.render(<IpLogger />);
    });

    await flushPromises();

    expect(insertMock).toHaveBeenCalledTimes(1);
    expect(localStorage.getItem('visitorLogged')).toBe('true');
  });
});
