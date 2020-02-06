const nanoexpress = require('..');
const Route = require('../build/Route');

const app = nanoexpress();
const route = new Route();

function exposeRoute(instance) {
  instance.get('/go', (req, res) => {
    res.end('go!');
  });
}

app.use('/', route);
exposeRoute(route);

app.use('/sub', route);
exposeRoute(route);

app.listen(4000);
