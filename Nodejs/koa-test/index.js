const koa = require('koa');
const logger = require('koa-logger');
const session = require('koa-session');
const store = require('koa-session-local');
const router = require('@koa/router');
const koajwt = require('koa-jwt');
const jwt = require('jsonwebtoken');

const app = new koa();
app.use(logger());

app.keys = ['some secret hurr'];

const CONFIG = {
  store: new store(),
  key: 'koa.sess' /** (string) cookie key (default is koa.sess) */,
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true /** (boolean) automatically commit headers (default true) */,
  overwrite: true /** (boolean) can overwrite or not (default true) */,
  httpOnly: true /** (boolean) httpOnly or not (default true) */,
  signed: true /** (boolean) signed or not (default true) */,
  rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
  renew: false /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/,
  secure: false /** (boolean) secure cookie*/,
  sameSite:
    null /** (string) session cookie sameSite options (default null, don't set it) */,
};

app.use(session(CONFIG, app));

const defaultRouter = new router();
defaultRouter.get('/hi', async (ctx) => {
  ctx.response.body = `hi, ${JSON.stringify(ctx.request.querystring)}`;
});

const userRouter = new router({
  prefix: '/user',
});

userRouter.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (error.status === 401) {
      ctx.status = 401;
      ctx.body = 'Unauthorized';
    } else {
      throw error;
    }
  }
});

userRouter.use(koajwt({ secret: 'secret' }).unless({
  path: ['/user/api2'],
}));

userRouter.get('/api', async (ctx) => {
  ctx.response.body = 'get user info';
});

userRouter.get('/api2', async (ctx) => {
  const userName = ctx.request.query.userName;
  var token = jwt.sign({ userName }, app.keys[0]);
  ctx.body = {
    token: `Bearer ${token}`,
  }
});

app.use(async (ctx, next) => {
  let num = ~~ctx.cookies.get('name');
  ctx.cookies.set('name', ++num);

  num = ~~ctx.session.views;
  console.log('get session: ', num);
  ctx.session.views = ++num;

  await next();
  //ctx.response.body = 'Hello World2';
});
app.use(defaultRouter.routes());
app.use(userRouter.routes());

app.listen(3006);
