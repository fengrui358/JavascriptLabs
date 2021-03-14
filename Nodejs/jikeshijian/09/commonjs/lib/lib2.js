console.log()
console.log('run lib2')
console.log(`lib2 filename ${__filename}`)
console.log(`lib2 dirname ${__dirname}`)
console.log()

exports.obj2 = { name: 'free' }

exports.myclass = class myclass {
    constructor() {
        this.x = 'myclass'
    }

    tostring() {
        return `输出 ${this.x}`
    }
}