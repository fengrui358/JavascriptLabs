let moment = require('moment')

let now = moment()
console.log(now.format())

let x1 = moment(new Date())
console.log('x1', x1)

let d = new Date()
d.setHours(1)
console.log(d)

console.log('-----------------------------------------------')
const start = moment((new Date()).setDate(1))
console.log('start', start)
const duration = moment.duration(moment(new Date()).diff(start))
console.log('duration', duration, duration.asHours(), duration.minutes(), duration.hours())
if (duration.asHours() > 0) {
  let s = `${Math.floor(duration.asHours()).toString().padStart(2, '0')}:${duration.minutes().toString().padStart(2, '0')}`
  console.log(s)
} else {
  let s = `${duration.minutes().toString().padStart(2, '0')}:${duration.seconds().toString().padStart(2, '0')}`
  console.log(s)
}