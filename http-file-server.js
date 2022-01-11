const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]);
const dir = process.argv[3];

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  const readStream = fs.createReadStream(dir);

  readStream.pipe(res);
});

server.listen(port);
