import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

let format = dayjs().format()
console.log(format);

let timeSpan = dayjs.duration(160, 'm')
console.log(timeSpan, timeSpan.minutes(), timeSpan.asMinutes());

