const express = require('express');
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.post('/form', (req, res, next) => {
  const reversedStr = req.body.str.split('').reverse().join('');
  res.send(reversedStr);
})

const port = process.argv[2] || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
