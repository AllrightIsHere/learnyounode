const net = require('net');

const port = Number(process.argv[2]);

const server = net.createServer((socket) => {
  const date = new Date();
  const aux = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 16);
  const result = aux.replace('T', ' ') + '\n';
  socket.write(result);
  socket.end();
});

server.listen(port);
