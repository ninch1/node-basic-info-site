const { createServer } = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8080;

function showFile(res, fileName, statusCode = 200) {
    fs.readFile(path.join(__dirname, "view", `${fileName}.html`) , "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, {"Content-Type": "text/html"})
            res.end("<h1>Server Error</h1>");
        } else {
            res.writeHead(statusCode, {"Content-Type": "text/html"})
            res.end(data)
        }
    });
}

const urlMap = {
    "/": "index",
    "/about": "about",
    "/contact-me": "contact-me"
}

const server = createServer((req, res) => {
    const fileName = urlMap[req.url.split('?')[0]]
    fileName ? showFile(res, fileName, 200) : showFile(res, "404", 404);
})

server.listen(PORT,  () => {
    console.log('Server running at ' + PORT)
})