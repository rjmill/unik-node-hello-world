const express = require('express');
const app = express();

app.get('/', function(req,res) {
  res.send('Hello UniK!');
});

app.listen(8080);
