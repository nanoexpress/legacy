import createDebug from 'debug';

const log = createDebug('nanoexpress:log');
log.namespace = `[${log.namespace}]`;
log.color = 2;

const error = createDebug('nanoexpress:error');
error.namespace = `[${error.namespace}]`;
error.color = 1;

log.enabled = error.enabled =
  !process.env.NODE_ENV ||
  (process.env.NODE_ENV && process.env.NODE_ENV === 'development');

export default { log, error };
