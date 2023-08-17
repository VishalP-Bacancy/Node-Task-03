const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

const port = process.argv[2] || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
