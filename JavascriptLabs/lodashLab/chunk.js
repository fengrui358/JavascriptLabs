const _ = require('lodash')

console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
// => [['a', 'b'], ['c', 'd']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 3))
// => [['a', 'b', 'c'], ['d']]
console.log(_.chunk(['a', 'b', 'c', 'd'], 4))
console.log(_.chunk(['a', 'b', 'c', 'd'], 5))
