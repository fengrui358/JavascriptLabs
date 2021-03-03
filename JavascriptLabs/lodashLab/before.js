const _ = require('lodash')

let beforeWrap = _.before(4, ()=>console.log('打印'))

for (let index = 0; index < 6; index++) {
    console.log('调用 beforeWrap')
    beforeWrap()
}