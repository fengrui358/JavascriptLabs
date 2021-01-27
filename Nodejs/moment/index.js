let moment = require('moment')

let now = moment()
console.log(now.format())

let x1 = moment(new Date())
console.log('x1', x1)

let d = new Date()
d.setHours(1)
console.log(d)