const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    return res.end('Only GET requests are supported');
  }

  const parsedUrl = new url.URL(req.url, 'http://localhost');
  const isoTime = parsedUrl.searchParams.get('iso');
  
  if (!isoTime) {
    return res.end('Missing iso parameter');
  }

  const date = new Date(isoTime);
  let result;

  if (parsedUrl.pathname === '/api/parsetime') {
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = {
      unixtime: date.getTime()
    };
  } else {
    return res.end('Invalid path');
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(result));
});

const port = process.argv[2];
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
