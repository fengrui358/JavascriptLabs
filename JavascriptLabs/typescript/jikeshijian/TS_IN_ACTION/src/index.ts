import types from './datatype'
import enums from './enum'
import { render, getLib } from './objectDefindes'
import { add1, Add, Add2 } from './functionDefindes'

const s: string = 'Hello Typescript'
console.log(s)

let app = document.querySelector('.app')
if (app) {
  app.innerHTML = s
}

console.log('-------------------- 基本类型 --------------------')

function print(args: any[]): void {
  args.forEach((arg) =>
    console.log(arg, typeof arg, Reflect.toString.call(arg))
  )
}

print(Object.values(types))

console.log('add function: ' + types.add(435, 54))

console.log('-------------------- 枚举 --------------------')
console.log('数字枚举', enums.Role)
console.log('字符串枚举', enums.stringEnum)
console.log(
  '枚举相等',
  enums.Role.Developer === enums.Role.Developer,
  enums.Role.Developer === 4,
  enums.Role[4] === 'Developer'
)
console.log('异构枚举', enums.Answer, enums.Char)
console.log('常量枚举值', enums.month)

console.log('-------------------- 对象 --------------------')
console.log(render(null))
console.log(getLib, getLib(), getLib().version)

console.log('-------------------- 函数 --------------------')

// add = (a: number, b: number) => a + b

const AddFunc: Add = function (a, b) {
  return b ? a + b : a
}

const Add2Func: Add2 = (a, b) => (b ? a + b : a)

console.log(add1())
console.log(AddFunc(1, 2))
console.log(Add2Func(3, 4))
