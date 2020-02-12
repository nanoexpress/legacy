# Routes

Routes are intellectual, not only good, because if your routes are simple, library uses direct calling to `uWebSockets.js` which improves response time by 30-40% and response performance will be almost equal to `uWebSockets.js.

Performance tip: _Using many middlewares may slow response performance_

Note: If you want auto-handling your route, use as `Async` route. It's a known error!

## Async route

### Basic Async example

```js
app.get('/', async () => ({ status: 'success' }));
```

### Just example

```js
app.get('/', async (req, res) => {
  const result = await db.getUser(req.params.id);

  return result;
});
```

## Express/Connect like route

This library target is out-of-the-box async support and works well, but we recommend using `sync` aka Express/Connect like method for performance reason.

### Basic example

```js
app.get('/', (req, res) => {
  res.end('hello world');
});
```

### JSON example

```js
app.post('/', (req, res) => {
  const { body } = req;

  res.json({ status: 'ok' });
});
```

## Raw example

Note: _Any polyfilled methods are unavailable here, but performance may shock you!_

```js
app.get('/', { isRaw: true }, (req, res) => {
  // do something...
});
```

## Direct example

Note: _Any polyfilled methods are unavailable here, but performance may shock you!_

```js
app.get('/', { isRaw: true, direct: true }, (res, req) => {
  // do something...
});
```

## Prefix example

Note: _This option will be helpful when you want single config object to many routes_

```js
app.get('/', { isPrefix: '/v1' }, (req, res) => {
  // req.path === '/v1/'
});
```

## Known Issues

- See [my comment on #28](https://github.com/dalisoft/nanoexpress/issues/28#issuecomment-520485552) and [here](https://github.com/uNetworking/uWebSockets.js/issues/123)
- You should convert your route to `Async` route for Error to be handled by `nanoexpress`

[&laquo; Websocket](./websocket.md)

[Request &raquo;](./request.md)
