// keyof 提取类型属性名
interface Obj {
    a: string,
    b: string,
    c: number
}

function getValues(obj: any, keys: string[]) {
    return keys.map(key => obj[key])
}

function getValues2<T extends Obj, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map(key => obj[key])
}

const obj: Obj = {
    a: 'a',
    b: 'b',
    c: 45
}

let key: keyof Obj

// 字符串
let a = obj['a']
// 数字
let c = obj['c']

const r = getValues(obj, ['a', 'c'])
const r2 = getValues2(obj, ['a', 'c'])