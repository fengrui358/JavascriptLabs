console.log('start require')
let lib = require('./commonjs/lib.js')
let lib2 = require('./commonjs/lib.js')

lib.outData = '外部挂载数据'

console.log(`lib === lib2 ${lib === lib2}`)
console.log('end require', lib)
