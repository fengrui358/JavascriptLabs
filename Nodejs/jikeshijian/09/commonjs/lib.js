console.log()
console.log('run lib')
console.log(`lib filename ${__filename}`)
console.log(`lib dirname ${__dirname}`)
console.log()

exports.hello = 'xyz'
exports.world = 'abc'
exports.add = function (a, b) {
    return a + b
}

exports.obj = { hello: 'world' }
exports.obj2 = require('./lib/lib2')

setTimeout(()=>{
    console.log(`this === exporsts  ${this === exports}`)
    console.log(this)
}, 2000)

//下面这一句会覆盖整个导出的对象
module.exports = { override : true}