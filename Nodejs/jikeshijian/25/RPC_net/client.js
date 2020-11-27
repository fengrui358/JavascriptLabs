const net = require('net');

const socket = new net.Socket({});

socket.connect({
    host: '192.168.1.80',
    port: 4000
});

socket.on('data', buffer => {
    const seqBuffer = buffer.slice(0, 2);
    const titleBuffer = buffer.slice(2);

    console.log(`recive seq:${seqBuffer.readInt16BE()}`, titleBuffer.toString());
    //半双工通信，收到请求再返回
    // const sendBuffer = encode();
    // socket.write(sendBuffer);
});

const lessonids = [
    136797,
    136798,
    136799,
    136800,
    136801,
    136803,
    136804,
    136806,
    136807,
    136808,
    136809,
    141994,
    143517,
    143557,
    143564,
    143644,
    146470,
    146569,
    146582,
];

//全双工通信
setInterval(() => {
    let id = Math.floor(Math.random() * lessonids.length);
    const buffer = encode(id);
    console.log(`send seq:${buffer.slice(0, 2).readInt16BE()}   lesssonid:${lessonids[id]}`);
    socket.write(buffer);
}, 50);

let seq = 0;
function encode(id) {
    let buffer = Buffer.alloc(6);
    buffer.writeInt16BE(seq++);

    //const id = Math.floor(Math.random() * lessonids.length);
    buffer.writeInt32BE(
        lessonids[id], 2
    );

    return buffer;
}

//同时发送会粘包
// for (let index = 0; index < 100; index++) {
//     let id = Math.floor(Math.random() * lessonids.length);
//     const buffer = encode(id);
//     console.log(`send seq:${buffer.slice(0, 2).readInt16BE()}   lesssonid:${lessonids[id]}`);
//     socket.write(buffer);
// }

// //半双工通信，启动发送数据
// const buffer = encode();
// //console.log(`send ${buffer.toString()}`);
// socket.write(buffer);
