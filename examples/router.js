const nanoexpress = require('..');
const Route = require('../build/Route');

const app = nanoexpress();
const route = new Route();

app.use(route);

route.get('/', (req, res) => {
  res.end('hello world');
});

app.listen(4000);
