const http = require('http')
const { resolve } = require('path')

const server = http.createServer((req, res) => {
    console.log('请求', req)
    res.writeHead(200)
    res.end(`path: ${req.path}  host: ${req.host}  url: ${req.url}  port: ${3001}`)
})

server.listen(3001)