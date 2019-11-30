const nanoexpress = require('..');
const path = require('path');

const app = nanoexpress();

app.get('/', async () => 'see /video.mp4 route');
app.get('/video.mp4', (req, res) => {
  const videoFile = path.resolve(`./examples/${req.path}`);
  return res.sendFile(videoFile);
});

app.listen(4001);
