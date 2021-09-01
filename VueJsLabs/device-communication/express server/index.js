const fs = require('fs');
const path = require('path');
const express = require('express');
const http = require('http');
const https = require('https');
var cors = require('cors');

const app = express();

app.use(cors());
app.post('/api/getImage', async function (req, res) {
  var stream = fs.createReadStream(
    path.resolve(__dirname, 'Images', `${req.query.index}.jpg`)
  );
  var responseData = []; //存储文件流
  if (stream) {
    //判断状态
    stream.on('data', function (chunk) {
      responseData.push(chunk);
    });
    stream.on('end', function () {
      var finalData = Buffer.concat(responseData);
      res.write(finalData);
      res.end();
    });
  }
});

// const cred = {
//   key: fs.readFileSync(path.resolve(__dirname, './certs/key.pem')),
//   cert: fs.readFileSync(path.resolve(__dirname, './certs/cert.pem')),
// };

const httpServer = http.createServer(app);
// const httpsServer = https.createServer(cred, app);

httpServer.listen(3000);
// httpsServer.listen(9576);
