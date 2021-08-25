import { a, b, c } from './a' // 批量导入
import { P } from './a' // 导入接口
import { f as F } from './a' // 导入时起别名
import * as All from './a' // 导入模块中的所有成员，绑定在 All 上
import defaultFunction from './a' // 不加{}，导入默认

export const print = function () {
  console.log(a, b, c)
  console.log(All)
  console.log('defaultFunction', defaultFunction())
}

let p: P = {
  x: 5,
  y: 10
}
