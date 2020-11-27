const net = require('net');

const socket = new net.Socket({});

socket.connect({
    host: '192.168.1.80',
    port: 4000
});

socket.on('data', buffer => {
    console.log(buffer, buffer.toString());
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

setInterval(() => {
    let buffer = Buffer.alloc(4);
    buffer.writeInt32BE(
        lessonids[Math.floor(Math.random() * lessonids.length)]
    );

    socket.write(buffer);
}, 2000);