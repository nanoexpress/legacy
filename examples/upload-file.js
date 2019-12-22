const nanoexpress = require('..');
const bodyParser = require('../src/packed/middlewares/body-parser');
const fileUpload = require('../src/packed/middlewares/file-upload');

const path = require('path');

const app = nanoexpress();

app.use(bodyParser());
app.use(fileUpload());

app.get('/', async () => 'ok');

app.post('/', (req, res) => {
  console.debug('files', req.files);
  console.debug('body', req.body);

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400);
    return res.end('No files was provided');
  }

  for (const file of req.files) {
    file
      .mv(
        path.resolve(
          './examples/' + (file.filename || 'binary-file' + file.extension)
        )
      )
      .then(() => {
        res.send('File Uploaded!');
      })
      .catch((err) => {
        res.status(500);
        return res.send(err);
      });
  }
});

app.listen(4003);
