const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

const cred = {
  key: fs.readFileSync(path.resolve(__dirname, './certs/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, './certs/cert.pem')),
};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(cred, app);

httpServer.listen(3000);
httpsServer.listen(3001);
