const mount = require('koa-mount');
const static = require('koa-static');
const app = new app(require('koa'));

app.use(mount('/static', static(`${__dirname}/source/static/`)));

app.use(async (ctx) => {

});

app.listen(80);