const nanoexpress = require('..');

const app = nanoexpress();

app.setErrorHandler((err, req, res) => {
  console.log(err.error);
  res.end('error was handled: ' + (err.error || err.message));
});

app.setNotFoundHandler((req, res) => {
  res.end('you accessing to missing route??');
});

app.setValidationErrorHandler((errors, req, res) => {
  res.end('validation errors, ' + JSON.stringify(errors));
});

app.get('/', (req, res) => {
  res.end('hello world');
});

app.get('/err', async () => {
  throw new Error('error created');
});

app.listen(4000);
