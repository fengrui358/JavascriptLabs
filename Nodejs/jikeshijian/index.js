//const { setImmediate } = require("core-js");

const start = process.hrtime.bigint();
console.log(start);

console.log('hello world')

console.log(Date)
console.log(Math)

console.log(setTimeout);
console.log(setInterval);
// console.log(requestAnimationFrame)
console.log(setImmediate)

console.log(`filename: ${__filename}`)
console.log(`dirname: ${__dirname}`)

console.log(process)
console.log(process.argv)
const end = process.hrtime.bigint();
console.log(end);

console.log(`耗时：${end - start}`);
