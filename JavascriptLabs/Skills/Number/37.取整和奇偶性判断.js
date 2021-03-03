// 取整
console.log(3.3 | 0)    // 3
console.log(-3.9 | 0)        // -3

console.log(parseInt(3.3))  // 3
console.log(parseInt(-3.3)) // -3

// 四舍五入取整
console.log(Math.round(3.3))// 3
console.log(Math.round(-3.3))// -3

// 向上取整
console.log(Math.ceil(3.3))// 4
console.log(Math.ceil(-3.3))// -3

// 向下取整
console.log(Math.floor(3.3))// 3
console.log(Math.floor(-3.3))// -4

// 判断奇偶
const num = 5;
console.log(!!(num & 1)) // true
console.log(!!(num % 2)) // true
