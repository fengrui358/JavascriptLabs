import types from './datatype'
import enums from './enum'

const s: string = 'Hello Typescript'
console.log(s)

let app = document.querySelector('.app')
if (app) {
    app.innerHTML = s
}

console.log('-------------------- 基本类型 --------------------')

function print(args: any[]): void {
    args.forEach(arg => console.log(arg, typeof arg, Reflect.toString.call(arg)))
}

print(Object.values(types))

console.log('add function: ' + types.add(435, 54))

console.log('-------------------- 枚举 --------------------')
console.log('数字枚举', enums.Role)
console.log('字符串枚举', enums.stringEnum)
console.log('枚举相等', enums.Role.Developer === enums.Role.Developer, enums.Role.Developer === 4, enums.Role[4] === 'Developer')
console.log('异构枚举', enums.Answer, enums.Char)
console.log('常量枚举值', enums.month)
