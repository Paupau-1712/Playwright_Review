const http = require('http');
const fs = require('fs');
const path = require('path');

const port = Number(process.env.PORT) || 3000;
const file = path.join(__dirname, 'index.html');

http
  .createServer((req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      fs.createReadStream(file).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  })
  .listen(port, () => console.log(`Listening on http://localhost:${port}`));
