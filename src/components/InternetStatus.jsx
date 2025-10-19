import React, { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

const InternetStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [checking, setChecking] = useState(false);
  const [visible, setVisible] = useState(!navigator.onLine);

  // ✅ stable handler to prevent unnecessary re-renders
  const updateStatus = useCallback(() => {
    const online = navigator.onLine;
    setIsOnline(online);
    setVisible(!online);
  }, []);

  useEffect(() => {
    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, [updateStatus]);

  // ✅ Retry connectivity with lightweight HEAD request
  const handleRetry = async () => {
    setChecking(true);
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 4000); // safety timeout
      const response = await fetch("https://www.google.com/favicon.ico", {
        method: "HEAD",
        cache: "no-store",
        signal: controller.signal,
      });
      clearTimeout(timeout);

      if (response.ok) {
        setIsOnline(true);
        setTimeout(() => setVisible(false), 300);
      } else {
        throw new Error("No network");
      }
    } catch {
      setIsOnline(false);
      setVisible(true);
    } finally {
      setChecking(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-3 rounded-xl shadow-lg font-medium z-[9999] flex items-center gap-3 transition-all duration-300 ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <span className="text-lg animate-pulse select-none">⚠️</span>
      <div className="flex flex-col text-sm">
        <span className="font-semibold">
          {isOnline ? "Reconnected" : "You’re offline"}
        </span>
        <span className="opacity-90">
          {isOnline ? "Connection restored." : "Check your connection or retry."}
        </span>
      </div>

      {/* Retry button */}
      {!isOnline && (
        <button
          onClick={handleRetry}
          disabled={checking}
          className={`ml-auto px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
            checking
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-white text-red-600 hover:bg-red-100"
          }`}
        >
          {checking ? "Checking..." : "Retry"}
        </button>
      )}

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close notification"
        className="p-1 -mr-2 rounded-full hover:bg-white/20 transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default InternetStatus;