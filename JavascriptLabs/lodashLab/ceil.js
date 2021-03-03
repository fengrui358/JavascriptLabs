const _ = require('lodash')

console.log(_.ceil(4.006))
// => 5
console.log(_.ceil(6.004, 2))
// => 6.01
console.log(_.ceil(6040, -2))
// => 6100
