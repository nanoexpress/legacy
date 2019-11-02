/* globals describe, it, expect, beforeAll, afterAll */
import nanoexpress from '../../src/nanoexpress';
import http from 'http';

describe('bind to specific host', function() {
  let app = null;
  beforeAll(async () => {
    app = await nanoexpress()
      .any('*', (req, resp) => {
        // console.log("got request")
        resp.end(Buffer.from(resp.getRemoteAddress()).join('.'));
      })
      .listen(3000, '127.0.0.1');
    return app;
  });

  afterAll(() => {
    return app.close();
  });

  it('should return IPv4 address', () => {
    return new Promise((resolve, reject) => {
      http
        .request({ host: '127.0.0.1', port: 3000 }, (res) => {
          // console.log("Response received");
          res.on('data', (d) => resolve(d));
          res.on('error', (e) => reject(e));
        })
        .end();
    }).then((resp) => {
      expect(resp.toString('ascii')).toStrictEqual('127.0.0.1');
    });
  });
});
