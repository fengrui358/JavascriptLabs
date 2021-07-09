import { stringA, num, setNum } from './module1.js';
import { stringA as sss, stringB } from './module2.js';

/*
* module1 中启动了定时器， module2 中也import了module1，但是实验结果表示module1只会加载一次
*/

if (false) {
    document.body.append(stringA());
    document.body.append(stringB());
    document.body.append(sss());
}
else {
    console.log(stringA());
    console.log(stringB());
    console.log(sss());

    console.log('测试改变值', num.info)
    num.info = 78 //不能直接改变导出的引用，但是可以改变导出引用中的值
    num = { info: 90}  //这一句会报错
    console.log('测试改变值2', num.info)
}
