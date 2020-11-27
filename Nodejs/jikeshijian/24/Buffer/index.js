const buffer1 = Buffer.from('hello world'); //<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>
const buffer2 = Buffer.from([1,2,3,4,255, 256, -1]); //<Buffer 01 02 03 04 ff 00 ff>
const buffer3 = Buffer.alloc(20); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00>

console.log(buffer1);
console.log(buffer2);
console.log(buffer3);


//BE(big-endian) LE(little-endian byte order)区别，windows为LE：little-endian byte order，Linux为BE：big-endian
buffer2.writeInt8(12, 2); //<Buffer 01 02 0c 04 ff 00 ff>  索引2位置变成了0c，十进制为12
console.log(buffer2);

buffer2.writeUInt16BE(512, 2); //<Buffer 01 02 02 00 ff 00 ff>  Int16占用两个字节，512的十六进制为02 00，大端编码是高位放在前面
console.log(buffer2);

buffer2.writeUInt16LE(512, 2); //<Buffer 01 02 00 02 ff 00 ff>  Int16占用两个字节，512的十六进制为02 00，小端编码是高位放在后面
console.log(buffer2);