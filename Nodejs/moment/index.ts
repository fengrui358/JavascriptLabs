// const moment = require('moment');
import moment from 'moment';

// 1.1 从 Date 初始化
let nowDate = new Date();
console.log('1.1 从 date 初始化：', nowDate, moment(nowDate));

// 1.2 直接初始化
let nowMoment = moment();
console.log('1.2 直接初始化：', nowMoment);

// 1.3 从字符串初始化 todo 得到的时区有问题
console.log('1.3 从字符串初始化', moment('1987-08-15 16:15:45Z'))

