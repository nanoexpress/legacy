/* globals describe, it, expect */
import { HttpResponse } from '../../src/proto';
import compile from './route';

// Init Fake HttpResponse
class Response {
  constructor() {
    this.buffer = '';
    this.headers = {};
  }
  getRemoteAddress() {
    const ipBuffer = new Uint8Array(4);

    ipBuffer[0] = 127;
    ipBuffer[3] = 1;

    return ipBuffer;
  }
  end(result) {
    this.buffer = result;
  }
  writeHeader(key, value) {
    this.headers[key] = value;
  }
  writeStatus(code) {
    this.code = code;
  }
}
Object.assign(Response.prototype, HttpResponse);

describe('compile basic functionality', () => {
  it('res.end', () => {
    const responseFunc = (req, res) => {
      res.end('simple result');
    };
    expect(compile(responseFunc).toString()).toBe(responseFunc.toString());
  });
  it('res.end w/ status', () => {
    expect(
      compile((req, res) => {
        res.status(400);

        res.end('simple result w/ status');
      }).toString()
    ).toBe(
      ((req, res) => {
        res.writeStatus('400 Bad Request');

        res.end('simple result w/ status');
      }).toString()
    );
  });
  it('res.end w/ headers', () => {
    const sourceFunctionDot = (req, res) => {
      const foo = req.headers.foo;
      res.end('foo header is ' + foo);
    };
    const sourceFunctionScope = (req, res) => {
      const foo = req.headers['foo'];
      res.end('foo header is ' + foo);
    };
    const sourceFunctionDestructure = (req, res) => {
      const { foo } = req.headers;
      res.end('foo header is ' + foo);
    };

    const exceptedFunction = (req, res) => {
      const foo = req.getHeader('foo');
      res.end('foo header is ' + foo);
    };

    expect(compile(sourceFunctionDot).toString()).toBe(
      exceptedFunction.toString()
    );
    expect(compile(sourceFunctionScope).toString()).toBe(
      exceptedFunction.toString()
    );

    expect(compile(sourceFunctionDestructure).toString()).toBe(
      exceptedFunction.toString()
    );
  });

  it('res.send', () => {
    expect(compile((req, res) => res.send('complex result'))).toBe(null);
  });
});
