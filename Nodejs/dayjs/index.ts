import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import localeData from 'dayjs/plugin/localeData'
import locale_zh_cn from 'dayjs/locale/zh-cn'

dayjs.locale(locale_zh_cn)
dayjs.extend(duration)
dayjs.extend(localeData)

let format = dayjs().format()
console.log(format);

let timeSpan = dayjs.duration(990, 'm')
console.log(timeSpan, timeSpan.minutes(), timeSpan.asMinutes(), timeSpan.format('HH:mm'));

console.log(dayjs.locale());
console.log(dayjs.weekdays());
console.log(dayjs.weekdaysShort());
console.log(dayjs.weekdaysMin());
console.log(dayjs.monthsShort());
console.log(dayjs.months());

// 今天减昨天，获取相差天数
let startWeek = dayjs().startOf('week')

let diffDay = dayjs().diff(startWeek, 'day')
console.log('周起始', startWeek, diffDay);
