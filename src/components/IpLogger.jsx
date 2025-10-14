import React, { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

/**
 * Utility: exponential back‑off retry
 * @param {Function} fn - async function to retry
 * @param {number} retries - number of attempts
 * @param {number} delay - initial delay in ms
 */
async function retry(fn, retries = 3, delay = 500) {
  try {
    return await fn();
  } catch (err) {
    if (retries <= 0) throw err;
    await new Promise((res) => setTimeout(res, delay));
    return retry(fn, retries - 1, delay * 2);
  }
}

export default function IpLogger() {
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let isMounted = true; // guard against state updates after unmount

    const logVisitor = async () => {
      // Prevent duplicate logs in the same session
      if (localStorage.getItem("visitorLogged")) return;

      try {
        // 1️⃣ Fetch IP data
        const ipApiUrl = "https://ipapi.co/json/";
        const ipResponse = await retry(() => fetch(ipApiUrl, { signal }), 3, 500);

        if (!ipResponse.ok) throw new Error(`IP API error: ${ipResponse.status}`);
        const ipData = await ipResponse.json();

        if (!ipData?.ip) throw new Error("IP data missing");

        // 2️⃣ Build visitor payload
        const visitorData = {
          unique_id: uuidv4(),
          ip: ipData.ip,
          city: ipData.city,
          region: ipData.region,
          country: ipData.country_name,
          user_agent: navigator.userAgent,
          timestamp: new Date().toISOString(),
        };

        // 3️⃣ Insert into Supabase
        const { error } = await supabase.from("Producer").insert([visitorData]);
        if (error) throw error;

        if (isMounted) {
          console.log("Visitor data stored successfully:", visitorData);
          localStorage.setItem("visitorLogged", "true");
        }
      } catch (err) {
        // Ignore AbortError caused by component unmount
        if (err.name !== "AbortError") {
          console.error("Visitor data logging failed:", err);
        }
      }
    };

    logVisitor();

    // Cleanup on unmount
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return null;
}