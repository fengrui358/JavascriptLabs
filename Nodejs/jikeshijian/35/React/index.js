require('@babel/register')({
    presets: ['@babel/preset-react']
});

const ReactDOMServer = require('react-dom/server');

let result = ReactDOMServer.renderToString(require('./index.jsx'));
console.log(result);