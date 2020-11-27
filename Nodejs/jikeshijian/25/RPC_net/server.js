const net = require('net');

const server = net.createServer(socket => {
    socket.on('data', function (buffer) {
        console.log(buffer, buffer.toString());

        socket.write('recived');
    });
});

server.listen(4000);