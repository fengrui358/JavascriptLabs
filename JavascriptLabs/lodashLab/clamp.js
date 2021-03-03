const _ = require('lodash')

console.log(_.clamp(-10, -5, 5))
// => -5
console.log(_.clamp(10, -5, 5))
// => 5
console.log(_.clamp(3, -5, 5))