import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient';

const VISITOR_LOGGED_KEY = 'visitorLogged';
const VISITOR_LOGGING_DISABLED_KEY = 'visitorLoggingDisabled';

export function isValidPublicUrl(value) {
  if (!value || typeof value !== 'string') {
    return false;
  }

  try {
    const url = new URL(value);
    return (
      (url.protocol === 'http:' || url.protocol === 'https:') &&
      Boolean(url.hostname)
    );
  } catch {
    return false;
  }
}

export async function retry(fn, retries = 2, delay = 400) {
  try {
    return await fn();
  } catch (error) {
    if (retries <= 0) {
      throw error;
    }

    await new Promise((resolve) => setTimeout(resolve, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}

function disableLoggingForSession(reason) {
  sessionStorage.setItem(VISITOR_LOGGING_DISABLED_KEY, 'true');
  console.warn(`Visitor logging skipped: ${reason}`);
}

async function fetchVisitorIp(ipApiUrl, signal) {
  const response = await retry(() => fetch(ipApiUrl, { signal }), 1, 250);

  if (!response.ok) {
    throw new Error(`IP API error: ${response.status}`);
  }

  const ipData = await response.json();
  if (!ipData?.ip) {
    throw new Error('IP data missing');
  }

  return ipData;
}

export default function IpLogger() {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const ipApiUrl = import.meta.env.VITE_IP_API_URL;

    const logVisitor = async () => {
      if (typeof window === 'undefined') {
        return;
      }

      if (!navigator.onLine) {
        return;
      }

      if (localStorage.getItem(VISITOR_LOGGED_KEY)) {
        return;
      }

      if (sessionStorage.getItem(VISITOR_LOGGING_DISABLED_KEY)) {
        return;
      }

      if (!isValidPublicUrl(ipApiUrl)) {
        disableLoggingForSession('invalid IP API URL');
        return;
      }

      if (!isSupabaseConfigured) {
        disableLoggingForSession('Supabase is not configured');
        return;
      }

      try {
        const ipData = await fetchVisitorIp(ipApiUrl, signal);

        const visitorData = {
          unique_id: uuidv4(),
          ip: ipData.ip,
          city: ipData.city || 'Unknown',
          region: ipData.region || 'Unknown',
          country: ipData.country_name || 'Unknown',
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        };

        const { error } = await supabase.from('Producer').insert([visitorData]);
        if (error) {
          throw error;
        }

        localStorage.setItem(VISITOR_LOGGED_KEY, 'true');
      } catch (error) {
        if (signal.aborted || error?.name === 'AbortError') {
          return;
        }

        const message =
          error instanceof Error
            ? error.message
            : String(error ?? 'Unknown visitor logging error');

        if (
          message.includes('Failed to fetch') ||
          message.includes('ERR_NAME_NOT_RESOLVED')
        ) {
          disableLoggingForSession('IP service is unreachable');
          return;
        }

        console.error('Visitor data logging failed:', message);
      }
    };

    logVisitor();

    return () => {
      controller.abort();
    };
  }, []);

  return null;
}
