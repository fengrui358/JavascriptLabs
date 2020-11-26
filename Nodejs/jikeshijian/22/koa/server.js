// const http = require('http');
// const url = require('url');
const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');

const game = require('./game');
let playLastAction = '';
let sameCount = 0;
let playwon = 0;

const app = new koa();
app.use(mount('/favicon.ico', function (ctx) {
    ctx.status = 200;
}));

const gameKoa = new koa();

//判定胜利中间件
gameKoa.use(
    async function (ctx, next) {
        if (playwon >= 3) {
            ctx.status = 500;
            ctx.body = '再也不和你玩了';
            return;
        }

        await next();

        if (ctx.playwon) {
            playwon++;
        }
    }
);

//判定作弊中间件
gameKoa.use(
    async function (ctx, next) {
        const query = ctx.request.query;

        if (query.action === playLastAction) {
            sameCount++;
        }
        else {
            sameCount = 0;
            playLastAction = query.action;
        }

        if (sameCount >= 3) {
            ctx.status = 400;
            ctx.body = '你作弊';
            return;
        }

        await next();
    }
);

//正式游戏中间件
gameKoa.use(
    async function (ctx) {
        const query = ctx.request.query;

        await new Promise(resolve => {
            setTimeout(() => {
                const result = game(query.action);
                if (result === 0) {
                    ctx.body = '平局';
                }
                else if (result === 1) {
                    ctx.playwon = true;
                    ctx.body = '你赢了';
                }
                else {
                    ctx.body = '你输了';
                }

                ctx.status = 200;
                resolve();
            }, 500);
        });
    }
);

app.use(mount('/game', gameKoa));

app.use(mount('/', function (ctx) {
    ctx.response.body = fs.readFileSync(__dirname + '/index.html', 'utf-8');
}));

app.listen(80);
