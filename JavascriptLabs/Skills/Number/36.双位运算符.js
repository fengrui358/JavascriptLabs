//双位运算符比Math.floor(),Math.ceil()速度快
//负数时，双位运算符和Math.ceil结果一致，正数时和Math.floor结果一致

console.log(~~7.5)                // 7
console.log(Math.ceil(7.5))      // 8
console.log(Math.floor(7.5))      // 7


console.log(~~-7.5)        		// -7
console.log(Math.floor(-7.5))     // -8
console.log(Math.ceil(-7.5))      // -7
