import moment from 'moment-timezone';

// 1. 初始化
// 1.1 从 Date 初始化
let nowDate = new Date();
console.log('1.1 从 date 初始化：', nowDate, moment(nowDate));

// 1.2 直接初始化
let nowMoment = moment();
console.log('1.2 直接初始化：', nowMoment);

// 1.3 从字符串初始化，不知道为什么 moment 拿到的时间会快 9 个小时
const ISO8601_String = (new Date(1987, 8, 15 , 16, 15, 45)).toISOString();
console.log('1.3 从字符串初始化：', ISO8601_String, moment(ISO8601_String), new Date(Date.parse(ISO8601_String)))

// 2. 格式化
// 2.1 Format 格式化输出
console.log('2.1 Format 格式化输出：', nowMoment.format())

// 2.2 Format 默认格式化
moment.defaultFormat = 'YYYY-MM-DD HH:mm:ss:SSSS'
console.log('2.2 Format 默认格式化输出：', nowMoment.format())

// 2.3 UTC Format 格式化输出
console.log('2.1 Format 格式化输出：', nowMoment.utc().format())

// 2.4 UTC Format 默认格式化
moment.defaultFormatUtc = 'YYYY-MM-DD HH:mm:ss:SSSS'
console.log('2.4 UTC Format 默认格式化输出：', nowMoment.utc().format())

// 3. Unix 时间戳
console.log('3.1 原生获取时间戳：', nowDate.getTime(), new Date(nowDate.getTime()))
console.log('3.1 moment 获取时间戳：', nowMoment.unix(), moment.unix(nowMoment.unix()), moment(nowDate.getTime()))

// 4. 时区
// 4.1 获取当前时区
console.log('4.1 获取当前时区：', moment.tz.guess(), moment.utc())

// 5. 时间临界值
console.log('5.1 获取当天最后一刻', moment().endOf('day'))
console.log('5.2 获取本周最后一刻', moment().endOf('week').startOf('day'))
console.log('5.3 获取本月第一天', moment().startOf('month'))
console.log('5.4 获取明年第一天', moment().year(moment().year() + 1).startOf('year'))

// 6. 时长
// 6.1 原生时长差值
const d1 = new Date(1987, 8, 15, 16, 15, 45)
const d2 = new Date(1987, 8, 15, 17, 13, 45)
console.log('6.1 原生时长差值（单位 ms）：', d2.getTime() - d1.getTime(), d1.getTime() - d2.getTime())

const m1 = moment(d1)
const m2 = moment(d2)
const duration = moment.duration(m2.diff(m1))
console.log('6.2 moment 时长差值：', m2.diff(m1), m1.diff(m2), duration.asMilliseconds(), duration.asMinutes())

console.log('6.3 moment 时长差值减：', duration.subtract(moment.duration(5, 'minute')).asMinutes())