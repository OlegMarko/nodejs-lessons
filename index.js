const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World !');
});

server.listen(3000, '127.0.0.1');
console.log('Server has been started on 3000 port');
