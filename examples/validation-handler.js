const nanoexpress = require('..');

const app = nanoexpress({
  ajv: {
    validateSchema: false,
    allErrors: true,
    jsonPointers: false,
    ownProperties: true
  }
});

app.post(
  '/uploadSchema',
  {
    schema: {
      body: {
        type: 'object',
        properties: {
          schema: { type: 'object' },
          key: { type: 'string' }
        },
        required: ['schema', 'key']
      },
      response: false,
      query: false,
      params: false,
      cookies: false
    }
  },
  async (req, res) => {
    res.send({ status: 200 });
  }
);

app.setValidationErrorHandler((errors, req, res) => {
  return res.end('Validation errors, ' + JSON.stringify(errors));
});

app.listen(4000);
