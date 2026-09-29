const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

console.log("WebSocket Server running on ws://localhost:8080");

wss.on('connection', function connection(ws) { console.log('ESP32-S3 Connected!');

ws.on('message', function message(data) { const payload = JSON.parse(data); console.log('[${payload.ts}ms] Thermal Max: ${payload.thermal.max}°C | Targets:

}); // Here you can broadcast 'data' directly to your frontend clients via WebSocket

ws.on('close', () => console.log('ESP32-S3 Disconnected.')); });