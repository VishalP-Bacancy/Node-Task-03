const express = require('express');
const app = express();

const port = process.argv[2];

app.put('/message/:id', function(req, res) {
  const dateIdHash = require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex');
  
  res.send(dateIdHash);
});

app.listen(port);