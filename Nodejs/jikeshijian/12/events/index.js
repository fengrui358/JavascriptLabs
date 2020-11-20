let geektime = require('./EventEmitter')

geektime.addListener('newlesson', (res) => {
    console.log('yeah!', res)
})