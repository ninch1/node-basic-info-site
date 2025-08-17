const { createServer } = require('http');
const fs = require('fs');
const PORT = 8080;

const server = createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("./view/index.html", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("<h1>Server Error</h1>")
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data)
            }
        })
    } else if (req.url === "/about") {
        fs.readFile("./view/about.html", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("<h1>Server Error</h1>")
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    } else if (req.url === "/contact-me") {
        fs.readFile("./view/contact-me.html", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("<h1>Server Error</h1>")
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        })
    } else {
        fs.readFile("./view/404.html", "utf8", (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("<h1>Server Error</h1>")
            } else {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end(data)
            }
        })
    }
})

server.listen(PORT, console.log('Server running at ' + PORT))