const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'view', 'index.html')))
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'view', 'about.html')))
app.get('/contact-me', (req, res) => res.sendFile(path.join(__dirname, 'view', 'contact-me.html')))
//404
app.use((req, res) => res.status(404).sendFile(path.join(__dirname, 'view', '404.html')))

app.listen(PORT, (error) => {
    if (error) throw error;
    console.log(`Server running on port ${3000}`)
})