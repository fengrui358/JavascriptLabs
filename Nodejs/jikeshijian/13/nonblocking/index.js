const glob = require('glob')

console.time('glob')
let result = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')
console.log(result)