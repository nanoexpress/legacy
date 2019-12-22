const passportInitialize = require('./passport');
const reDoc = require('./redoc');
const bodyParser = require('./body-parser');
const fileUpload = require('./file-upload');
const swaggerUi = require('./swagger-ui');

module.exports = {
  passportInitialize,
  reDoc,
  bodyParser,
  fileUpload,
  swaggerUi
};
