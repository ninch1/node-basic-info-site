const { createServer } = require('http');
const PORT = 8080;

const server = createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>index</h1>')
    } else if (req.url === "/about") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>about</h1>');
    } else if (req.url === "/contact-me") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>contacts</h1>');
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>page does not exist</h1>')
    }
})

server.listen(PORT, console.log('Server running at ' + PORT))