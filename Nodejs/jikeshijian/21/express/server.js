// const http = require('http');
// const url = require('url');
const fs = require('fs');
const express = require('express');

const game = require('./game');
const querystring = require('querystring');
let playLastAction = '';
let sameCount = 0;
let playwon = 0;

const app = express();
// app.use(function (request, response) {

// });

app.get('/favicon.ico', function (request, response) {
    response.status(200);
    // response.writeHead(200);
    // response.end('hello');
    return;
});

app.get('/game', function (request, response, next) {
    //const parseUrl = url.parse(request.url);
    const query = request.query;
    // const query = querystring.parse(parseUrl.query);

    if (query.action === playLastAction) {
        sameCount++;
    }
    else {
        sameCount = 0;
        playLastAction = query.action;
    }

    if (sameCount >= 3) {
        response.status(400);
        response.send('你作弊');
        // response.writeHead('400');
        // response.end('你作弊');
        return;
    }

    if (playwon >= 3) {
        response.status(500);
        response.send('再也不和你玩了');
        // response.writeHead('500');
        // response.end('再也不和你玩了');
        return;
    }

    const result = game(query.action);
    if (result === 0) {
        response.send('平局');
        // response.end('平局');
    }
    else if (result === 1) {
        playwon++;
        response.send('你赢了');
        // response.end('你赢了');
    }
    else {
        response.send('你输了');
        // response.end('你输了');
    }

    response.status(200);
});

app.get('/', function (request, response) {
    //response.status(200);
    response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'));
    
    //下载
    //response.send(fs.readFileSync(__dirname + '/index.html'));
    
    // response.writeHead(200);
    // fs.createReadStream(__dirname + '/index.html').pipe(response);
});

app.listen(80);

// http.createServer(function (request, response) {
//     const parseUrl = url.parse(request.url);

//     if (parseUrl.pathname == '/favicon.ico') {
//         response.writeHead(200);
//         response.end('hello');
//         return;
//     }

//     if (parseUrl.pathname == '/game') {
//         const query = querystring.parse(parseUrl.query);

//         if (query.action === playLastAction) {
//             sameCount++;
//         }
//         else {
//             sameCount = 0;
//             playLastAction = query.action;
//         }

//         if (sameCount >= 3) {
//             response.writeHead('400');
//             response.end('你作弊');
//             return;
//         }

//         if (playwon >= 3) {
//             response.writeHead('500');
//             response.end('再也不和你玩了');
//             return;
//         }

//         const result = game(query.action);
//         if (result === 0) {
//             response.end('平局');
//         }
//         else if (result === 1) {
//             playwon++;
//             response.end('你赢了');
//         }
//         else {
//             response.end('你输了');
//         }

//         response.writeHead(200);
//     }

//     if (parseUrl.pathname == '/') {
//         response.writeHead(200);
//         fs.createReadStream(__dirname + '/index.html').pipe(response);
//     }
// }).listen(80);