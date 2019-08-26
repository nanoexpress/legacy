const nanoexpress = require('..');

const app = nanoexpress();

app.get('/', (req, res) => {
  res.status(404);
  res.send({ hello: 'world' });
});

app.get('/500', (req, res) => {
  res.status(500);
  res.end('505');
});

app.listen(4000);