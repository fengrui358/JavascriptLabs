import { stringA } from './module1.js';
import { stringA as sss, stringB } from './module2.js';

/*
* module1 中启动了定时器， module2 中也import了module1，但是实验结果表示module1只会加载一次
*/

document.body.append(stringA());
document.body.append(stringB());
document.body.append(sss());