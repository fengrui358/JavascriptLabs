const EasySock = require('easy_sock');

const protobuf = require('protocol-buffers');
const fs = require('fs');
const { buffer } = require('protocol-buffers/compile');
const schemas = protobuf(fs.readFileSync(`${__dirname}/Source/detail.proto`));

const easySock = new EasySock({
    ip: "127.0.0.1",
    port: 5000,
    /*
    * 是否保持连接状态，如果为false，则每次socket空闲下来后就会关闭连接
    */
    keepAlive: true,
    timeout: 5000
});

easySock.encode = function (data, seq) {
    const body = schemas.ColumnRequest.encode(data);

    const head = Buffer.alloc(8);
    head.writeInt32BE(seq);
    head.writeInt32BE(body);

    return Buffer.concat([head, body]);
};

easySock.decode = function (buffer) {
    const seq = buffer.readInt32BE();
    const body = schemas.ColumnResponse.decode(buffer.slice(8));

    return {
        result: body,
        seq
    }
};

easySock.isReceiveComplete = function (buffer) {
    if (buffer.length < 8) {
        return 0;
    }

    const bodyLength = buffer.readInt32BE(4);

    if (buffer.length >= bodyLength + 8) {
        return bodyLength + 8;
    }
    else {
        return 0;
    }
}

module.exports = easySock;