const nanoexpress = require('..');

const app = nanoexpress();
const channel_name = 'my-channel';

app.get('/', async () => 'Connect at /ws');

app.ws('/ws', (req, ws) => {
  console.log('Connected');

  ws.subscribe(channel_name);

  ws.on('message', (msg) => {
    console.log('Message received', msg);
    ws.send(msg);
  });
  ws.on('close', (code, message) => {
    console.log('Connection closed', { code, message });
  });
});

app.listen(4000);

console.log(`Sending publish/broadcast message to channel > ${channel_name}`);
app.publish(channel_name, 'new message');

console.log('After publish > App is GO!');
