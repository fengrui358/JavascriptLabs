let moment = require('moment')

let now = moment()
// console.log(now.format('YYYY-MM-DD HH:mm:ss'))

// let x1 = moment(new Date())
// console.log('x1', x1)

// let d = new Date()
// d.setHours(1)
// console.log(d)

console.log('-----------------------------------------------')
const start = moment().minutes(28)
console.log('start', start)
const duration = start.diff(moment())
console.log('duration', duration.asHours(), duration.asMinutes(), duration.hours())
// console.log('duration', duration, duration.asHours(), duration.minutes(), duration.hours())
// if (duration.asHours() > 0) {
//   let s = `${Math.floor(duration.asHours()).toString().padStart(2, '0')}:${duration.minutes().toString().padStart(2, '0')}`
//   console.log(s)
// } else {
//   let s = `${duration.minutes().toString().padStart(2, '0')}:${duration.seconds().toString().padStart(2, '0')}`
//   console.log(s)
// }