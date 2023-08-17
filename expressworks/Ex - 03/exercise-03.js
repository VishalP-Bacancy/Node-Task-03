const express = require('express');
const path = require('path');

const app = express();
const pugTemplate = process.argv[3];

app.set('view engine', 'pug');

app.set('views', pugTemplate || path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
    res.render('index', { date: new Date().toDateString() });
});

const port = process.argv[2] || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
