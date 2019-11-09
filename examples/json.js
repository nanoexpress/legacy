const nanoexpress = require('..');

const app = nanoexpress();

app.get('/', async () => ({ hello: 'world' }));

app.post('/', (req, res) => res.send({ status: 'success' }));

app.listen(4000);
