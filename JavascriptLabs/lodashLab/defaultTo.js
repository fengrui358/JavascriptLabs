const _ = require('lodash')

console.log(_.defaultTo(1, 10))
// => 1
console.log(_.defaultTo(undefined, 10))
// => 10
console.log(_.defaultTo(0, 10))
// => 0
console.log(_.defaultTo(NaN, 10))
// => 10
