const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    let myReader = null;

    if (req.url === '/index') {
        myReader = fs.createReadStream(__dirname + '/index.html', 'utf8');
    } else {
        myReader = fs.createReadStream(__dirname + '/article.txt', 'utf8');
    }

    myReader.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('Server has been started on 3000 port');
