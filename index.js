const { createServer } = require('http');
const PORT = 5000;

const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>server working')
})

server.listen(PORT, console.log('Server running at ' + PORT))