const nanoexpress = require('..');

const app = nanoexpress();

app.get(
  '/',
  {
    schema: {
      headers: false,
      query: {
        type: 'object',
        properties: {
          test: { type: 'string' }
        }
      },
      params: false,
      response: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  async () => ({ hello: 'world' })
);

app.listen(4000);
