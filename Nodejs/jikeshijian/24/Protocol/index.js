const protobuf = require('protocol-buffers');
const fs = require('fs');
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'));

console.log(schema);

const buffer = schema.Column.encode({
    id: 1,
    name: 'hello world',
    price: 32.435
});
console.log(buffer);

const obj = schema.Column.decode(buffer);
console.log(obj);  //price 为float 格式，经历了转换后出现精度不准确的问题
