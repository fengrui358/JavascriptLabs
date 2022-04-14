import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

let format = dayjs().format()
console.log(format);

let timeSpan = dayjs.duration(990, 'm')
console.log(timeSpan, timeSpan.minutes(), timeSpan.asMinutes(), timeSpan.format('HH:mm'));

