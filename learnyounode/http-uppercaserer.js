const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    // Use the through2-map package to transform the incoming data
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  } else {
    res.statusCode = 405; // Method Not Allowed
    res.end('Only POST requests are allowed.');
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
