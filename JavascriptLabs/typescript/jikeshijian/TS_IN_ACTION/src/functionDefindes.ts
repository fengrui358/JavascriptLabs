let add: (a: number, b: number) => number

function add1(a: number = 98, b?: number): number {
  return b ? a + b : a
}

interface Add {
  (a: number, b?: number): number
}

type Add2 = (a: number, b?: number) => number

// 这种重载定义感觉毫无意义
interface AddRest {
  (a: number, ...rest: number[]): number
}
interface AddRest {
  (a: string, ...rest: string[]): string
}

let addRest: AddRest = function (a: any, ...rest: any[]): any {
  return ''
}

export { add, add1, addRest, Add, Add2 }
