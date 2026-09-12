import { useRef } from 'react';
import WebSocketClient from './components/WebSocketClient';

const WS_URL = import.meta.env.VITE_WS_URL;

/**
 * Mounts a WebSocket connection only when VITE_WS_URL is defined.
 * This prevents the app from connecting to the public echo test server
 * (wss://echo.websocket.org/) on every production page load.
 */
export default function WebSocket() {
  const wsRef = useRef();

  if (!WS_URL) return null;

  // const handleMessage = (msg) => console.log('📩 Message from server:', msg);
  // const handleOpen   = () => console.log('🚀 Connected!');
  // const handleClose  = () => console.log('🔌 Connection closed.');

  // const sendTestMessage = () => {
  //   wsRef.current?.sendMessage({ type: 'custom', text: 'Hello Server!' });
  // };

  return (
    <WebSocketClient
      ref={wsRef}
      url={WS_URL}
      // onMessage={handleMessage}
      // onOpen={handleOpen}
      // onClose={handleClose}
      debug={import.meta.env.DEV}
    />
  );
}
