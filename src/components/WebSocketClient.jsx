// src/components/WebSocketClient.jsx
import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

/**
 * WebSocketClient v3.2 — Production-Grade (No UI)
 * Features:
 * ✅ Auto-reconnect with exponential backoff + jitter
 * ✅ Heartbeat ping/pong keepalive
 * ✅ JSON-safe send/receive
 * ✅ Graceful cleanup + manual close override
 * ✅ Safe logging and connection state
 * ✅ Exposes sendMessage(), reconnect(), close(), getStatus() via ref
 */

const WebSocketClient = forwardRef(
  (
    {
      url = "wss://echo.websocket.events",
      onMessage,
      onOpen,
      onError,
      onClose,
      reconnect = true,
      reconnectAttempts = 10,
      heartbeatInterval = 30000, // 30s
      debug = false,
    },
    ref
  ) => {
    const socketRef = useRef(null);
    const reconnectCount = useRef(0);
    const heartbeatRef = useRef(null);
    const reconnectTimeout = useRef(null);
    const manualClose = useRef(false);
    const state = useRef("DISCONNECTED");

    const log = (msg, type = "info") => {
      if (debug) console[type](`[WebSocketClient] ${msg}`);
    };

    const cleanup = () => {
      stopHeartbeat();
      clearTimeout(reconnectTimeout.current);
      reconnectTimeout.current = null;

      if (socketRef.current) {
        try {
          socketRef.current.onopen = null;
          socketRef.current.onmessage = null;
          socketRef.current.onerror = null;
          socketRef.current.onclose = null;
          if (socketRef.current.readyState === WebSocket.OPEN) {
            socketRef.current.close(1000, "Manual cleanup");
          }
        } catch (e) {
          log(`Cleanup error: ${e.message}`, "warn");
        }
        socketRef.current = null;
      }
      log("🧹 Cleanup complete");
    };

    const startHeartbeat = () => {
      stopHeartbeat();
      heartbeatRef.current = setInterval(() => {
        if (socketRef.current?.readyState === WebSocket.OPEN) {
          socketRef.current.send(JSON.stringify({ type: "ping", ts: Date.now() }));
          log("💓 Ping sent", "debug");
        }
      }, heartbeatInterval);
    };

    const stopHeartbeat = () => {
      if (heartbeatRef.current) {
        clearInterval(heartbeatRef.current);
        heartbeatRef.current = null;
      }
    };

    const connect = () => {
      if (manualClose.current) {
        log("Manual close active — skipping reconnect", "warn");
        return;
      }

      cleanup();
      log(`🔌 Connecting → ${url}`);
      state.current = "CONNECTING";

      let socket;
      try {
        socket = new WebSocket(url);
      } catch (err) {
        log(`WebSocket constructor failed: ${err.message}`, "error");
        return;
      }

      socketRef.current = socket;

      socket.onopen = () => {
        reconnectCount.current = 0;
        state.current = "CONNECTED";
        log(`✅ Connected → ${url}`);
        startHeartbeat();

        if (typeof onOpen === "function") onOpen();
        sendMessage({ type: "hello", msg: "👋 from WebSocketClient" });
      };

      socket.onmessage = (event) => {
        let data = event.data;
        try {
          const parsed = JSON.parse(event.data);
          if (parsed.type === "pong") {
            log("💓 Pong received (alive)", "debug");
            return;
          }
          data = parsed;
        } catch (_) {
          /* non-JSON messages are fine */
        }
        log(`📨 Message received: ${JSON.stringify(data)}`, "debug");
        if (typeof onMessage === "function") onMessage(data);
      };

      socket.onerror = (event) => {
        let msg = "Unknown WebSocket error";
        if (event instanceof Event && event.target?.url)
          msg = `Connection error to ${event.target.url}`;
        log(`❌ ${msg}`, "error");
        if (typeof onError === "function") onError(event);
      };

      socket.onclose = (event) => {
        state.current = "DISCONNECTED";
        stopHeartbeat();
        log(`🔒 Closed (${event.code}) ${event.reason || "No reason"}`, "warn");
        if (typeof onClose === "function") onClose(event);

        if (manualClose.current) {
          log("👋 Manual close detected — skipping reconnect");
          return;
        }

        if (reconnect && reconnectCount.current < reconnectAttempts) {
          const base = 2000;
          const delay = Math.min(base * 2 ** reconnectCount.current, 30000);
          const jitter = Math.floor(Math.random() * 500);
          const totalDelay = delay + jitter;
          log(`🔁 Reconnecting in ${(totalDelay / 1000).toFixed(1)}s...`);
          reconnectTimeout.current = setTimeout(connect, totalDelay);
          reconnectCount.current += 1;
        } else {
          log("🛑 Max reconnect attempts reached or reconnect disabled", "warn");
        }
      };
    };

    const sendMessage = (data) => {
      if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
        log("⚠️ Cannot send — socket not open", "warn");
        return false;
      }
      const message = typeof data === "object" ? JSON.stringify(data) : String(data);
      try {
        socketRef.current.send(message);
        log(`📤 Sent: ${message}`, "debug");
        return true;
      } catch (e) {
        log(`Send error: ${e.message}`, "error");
        return false;
      }
    };

    const closeConnection = () => {
      manualClose.current = true;
      log("🛑 Manual close requested");
      cleanup();
    };

    const getStatus = () => state.current;

    useImperativeHandle(ref, () => ({
      sendMessage,
      getStatus,
      reconnect: connect,
      close: closeConnection,
    }));

    useEffect(() => {
      connect();
      return () => cleanup();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return null;
  }
);

export default WebSocketClient;
