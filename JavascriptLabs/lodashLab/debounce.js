const _ = require('lodash')

let debounced = _.debounce(() => console.log('hello'), 1000)
debounced()
debounced() //等待1s输出

let debounced2 = _.debounce(() => console.log('hello 2'), 1000, { leading: false, maxWait: 5000, trailing: true })
debounced2()
debounced2() //等待1s输出

let debounced3 = _.debounce(() => console.log('hello 3'), 1000, { leading: true, maxWait: 5000, trailing: true })
debounced3()
debounced3( //会输出两次，开头一次结尾一次