import { useRef } from 'react';
import WebSocketClient from './components/WebSocketClient';

export default function WebSocket() {
  const wsRef = useRef();

  // const handleMessage = (msg) => console.log("📩 Message from server:", msg);
  // const handleOpen = () => console.log("🚀 Connected!");
  // const handleClose = () => console.log("🔌 Connection closed.");

  // const sendTestMessage = () => {
  //   wsRef.current?.sendMessage({ type: "custom", text: "Hello Server!" });
  // };

  return (
    <>
      <WebSocketClient
        ref={wsRef}
        url="wss://echo.websocket.events"
        // onMessage={handleMessage}
        // onOpen={handleOpen}
        // onClose={handleClose}
        debug={true}
      />

      {/* Trigger send manually for testing */}
      {/* <button onClick={sendTestMessage}>Send Test Message</button> */}
    </>
  );
}
