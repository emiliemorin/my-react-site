const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../dist`));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../dist/index.html`));
});
var server = app.listen(PORT, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at port:' + port)
});