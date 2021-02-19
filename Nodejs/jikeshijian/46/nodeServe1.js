const http = require('http')
const { resolve } = require('path')

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end(req.host)
})

server.listen(3000)