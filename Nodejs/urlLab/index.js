const urlObj = new URL('http://localhost:5602/Log');
console.log(urlObj);

let request = {
    appName: 'testApp',
    logLevel: 'info',
    logTime: new Date(),
    messages: ['test']
};
const body = JSON.stringify(request);
console.log(urlObj.protocol.slice(0, urlObj.protocol.length - 1));
let invoker = require(urlObj.protocol.slice(0, urlObj.protocol.length - 1));
const req = invoker.request({
  hostname: urlObj.hostname,
  port: urlObj.port,
  path: urlObj.pathname,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': body.length,
  },
});

req.write(body);
req.end();

console.log('发送完毕!')
