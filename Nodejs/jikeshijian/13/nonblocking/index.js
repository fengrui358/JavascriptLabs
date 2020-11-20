const glob = require('glob')

//阻塞IO调用
console.time('sync glob')
let result = glob.sync(__dirname + '/**/*')

console.timeEnd('sync glob')
console.log(result)

//非阻塞IO调用
console.time('async glob')
glob(__dirname + '/**/*', function (err, res) {
    result = res
    console.log(result)
})
console.timeEnd('async glob')
