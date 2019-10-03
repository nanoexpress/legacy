import createDebug from 'debug';

const log = createDebug('nanoexpress:log');
log.namespace = `[${log.namespace}]`;
log.color = 2;

const error = createDebug('nanoexpress:error');
error.namespace = `[${error.namespace}]`;
error.color = 1;

// Environment checks
if (!process.env.DEBUG) {
  // DEBUG passed -> default library flow
  // DEBUG not passed -> check own directive
  if (process.env.NANOEXPRESS_LOGGING) {
    // Extract logging levels
    const levels = process.env.NANOEXPRESS_LOGGING.split(',');
    // Enable whitelisted levels
    log.enabled = levels.includes('log');
    error.enabled = levels.includes('error');
  } else {
    // Development environment -> enable all
    log.enabled = error.enabled = process.env.NODE_ENV === 'development';
  }
}

export default { log, error };
