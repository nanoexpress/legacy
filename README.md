# nanoexpress

[![Greenkeeper badge](https://badges.greenkeeper.io/dalisoft/nanoexpress.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/dalisoft/nanoexpress.svg)](http://github.com/dalisoft/nanoexpress)
[![Code Climate](https://codeclimate.com/github/dalisoft/nanoexpress/badges/gpa.svg)](https://codeclimate.com/github/dalisoft/nanoexpress)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/dalisoft/nanoexpress/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/dalisoft/nanoexpress/?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/dalisoft/nanoexpress/badge.svg?branch=master)](https://coveralls.io/github/dalisoft/nanoexpress?branch=master)
[![NPM Downloads](https://img.shields.io/npm/dm/nanoexpress.svg)](https://npmjs.org/package/nanoexpress)
[![NPM Version](https://img.shields.io/npm/v/nanoexpress.svg)](https://npmjs.org/package/nanoexpress)
[![size](https://img.badgesize.io/https://unpkg.com/nanoexpress)](http://unpkg.com/nanoexpress)
[![gzipsize](https://img.badgesize.io/https://unpkg.com/nanoexpress?compression=gzip)](http://unpkg.com/nanoexpress)

Nano-framework for Node.js powered by uWebSockets.js

Documentation available [here](https://github.com/dalisoft/nanoexpress/blob/master/docs/index.md)

**If you want better, faster and stable performance with extra features, see [PRO](https://github.com/dalisoft/nanoexpress/tree/pro) version**

_If you want **to suport** me, please see [Support](#support) section_

_See [**Credits**](#credits) if you want to know which libraries I've used_

## Warning

This library does not support HTTP2!

## NOTE

This library reached the `Stable` status and works well, see `/examples` folder.

This library is up to 25% slower than `uWebSockets.js` in normal and complex application because of method polyfilling layer. Basic usage/examples performance are the same as `uWebSockets.js`, but not in all cases gives you the same performance.

**Requires**: Node.js v10 or greater

## Benchmarks

![Benchmarks](https://github.com/dalisoft/nanoexpress/raw/master/.github/images/benchmark.png)
![Memory Usage](https://github.com/dalisoft/nanoexpress/raw/master/.github/images/memory.png)

Benchmarked on my macBook Pro 2012 13" (Core i5, 8Gb RAM) performance.

You can see real benchmark results at [here](https://github.com/the-benchmarker/web-frameworks#results)

**Note**: _Real-world app memory/rps may differs from these numbers and these numbers are in my macBook_

_You can install `wrk` via `Homebrew` in `macOS` or `Linux`_

**Benchmark command**: `wrk -t1 -d60 -c100`

## Motivation

I've been planning for a long time how to create my own Express-like alternative Node.js framework, then saw uWebSockets.js. Almost during 2 months I was thinking how to do this right and decided to create Node.js framework with almost the same as Express API.

This library makes a very thin layer between uWebSockets.js and your code. But it gives you very Familiar and Clean API. Async/Await supported out-of-the-box!

## Features

- Async/Await out-of-the-box
- No async mode supported
- Easy to use (for Express users especially)
- Blazing fast performance
- Ultra lightweight size
- Resource (CPU / Memory) effecient
- Familiar API
- Normalised API
- Can define routes Declaratively
- Express-compatible middleware
- In-built middlewares
- In-built Stream (Video stream, yay!) support
- In-built WebSocket support (Express-like API and Events)
- In-built Schema validator via `Ajv`
- Out-of-the-box `fast-json-stringify` support via `{schema}` middleware
- Small working examples
- TypeScript declaration
- Tests and CI checked code

## Examples

All examples are alive [here](https://github.com/dalisoft/nanoexpress/tree/master/examples)

## Built-in Middlewares

Built-in middlewares implemented at layer-level for performance reason and enables automacilly when needed, not always

- `cookie`
- `body-parser`
- `express-ws` (for comparing, uWS has built-in support at core-level)
- `fast-json-stringify` (for serialization)
- `express-ajv` (for comparing, for validation, this library does it at layer-level)
- `redoc`
- `swagger-ui`

## In-box Middlewares

I excluded in-box modules from initialization for performance reason

### How-to import

```js
import { middlewares } from 'nanoexpress/packed';
// or import { passportInitialize } from 'nanoexpress/packed/middlewares';

const app = nanoexpress();
app.use(middlewares.passportInitialize()); // or app.use(passportInitialize());
```

- `passport`

## Working Middlewares

- `body-parser` (yes, if you don't want built-in)
- `express-fileupload`
- `cors` (yes, `express` `cors` middleware)
- `express-jwt`
- `express-session`
- `express-graphql`
- `passport`

## Docker Support

If you use `alpine` or `slim` version of `node` images, some errors may happen and you can fix with this minimal guide

### Requires

- git

#### For `git` missing error

```Dockerfile
# FROM ...
RUN apk update && apk add --no-cache git
# your scripts
```

#### For `Alpine` incompatible error

```Dockerfile
# your scripts
RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2
CMD ["node", "server.js"]
```

## Credits

- [uWebSockets.js](https://github.com/uNetworking/uWebSockets.js)
- [Siffr Server](https://github.com/sifrr/sifrr/tree/master/packages/server/sifrr-server)
- [fast-json-stringify](https://github.com/fastify/fast-json-stringify)
- [ajv](https://ajv.js.org)
- [cookie](https://github.com/jshttp/cookie#readme)

And to other libraries which are used to create this library and without these libraries wouldn't be possible to create this library

## Sponsors

### Sponsors will get free access to

- Private Telegram all-before updates channel
- Private Telegram votes channel
- Private Telegram discussion chat

### Platinum sponsors

- [Sergey N](https://github.com/mrauhu)
- [Yaroslav Dobzhanskij](https://github.com/yarsky-tgz)

## License

[![license](https://img.shields.io/github/license/dalisoft/nanoexpress.svg)](https://github.com/dalisoft/nanoexpress/blob/master/LICENSE)
