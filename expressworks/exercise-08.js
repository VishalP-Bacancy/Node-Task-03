const express = require('express');
const fs      = require('fs');
const app = express();

const port = process.argv[2];
const fileName   = process.argv[3];

app.get('/books', (req, res) => {
  fs.readFile(fileName, (err, data) => {
    const books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(port);