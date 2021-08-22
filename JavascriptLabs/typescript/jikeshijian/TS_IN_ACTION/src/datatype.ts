// 原始类型
const b1: Boolean = false;
const n1: Number = 45;
const s1: String = 'hello';

// 数组
const array1: Number[] = [1, 2, 3];
const array2: Array<String | Number> = ['1', '2', '3', 4];

// 元组
const tuple: [Number, String] = [56, 'hhjjk'];

// 函数
const add = (x: number, y: number): number => {
  return x + y;
};
let funType : (x: number, y: number) => number
funType = (x, y) => x + y

// 对象
const obj: {x: number, y: number} = {x: 1, y: 2}

// Symbol
const symbol1: Symbol = Symbol.for('start');

// undefined, null
const undefined1: undefined = undefined;
const null1: null = null;

// void
const noReturn = () => {}

// any
let anyOne

// never
const error = () => {
    throw new Error('never')
}
const aways = () => {
    while (true) {}
}

export default {
  b1,
  n1,
  s1,
  array1,
  array2,
  tuple,
  add,
  funType,
  obj,
  symbol1,
  undefined1,
  null1,
  noReturn,
  anyOne,
  error,
  aways
};
