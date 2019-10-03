import logger from '../../../helpers/logger';

let cookie;

try {
  cookie = require('cookie');
} catch (e) {
  logger.error(
    '`cookie` was not found in your dependencies list' +
      ', please install yourself for this feature working properly'
  );
}

export default function setCookie(name, value, options) {
  if (!cookie || !cookie.serialize) {
    return undefined;
  }

  if (options.expires && Number.isInteger(options.expires)) {
    options.expires = new Date(options.expires);
  }
  const serialized = cookie.serialize(name, value, options);

  let setCookie = this.getHeader('Set-Cookie');

  if (!setCookie) {
    this.setHeader('Set-Cookie', serialized);
    return undefined;
  }

  if (typeof setCookie === 'string') {
    setCookie = [setCookie];
  }

  setCookie.push(serialized);

  this.removeHeader('Set-Cookie');
  this.setHeader('Set-Cookie', setCookie);
  return this;
}
