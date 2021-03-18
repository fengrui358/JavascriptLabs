const _ = require('lodash')

const objects = [
  { 'a': 2, 'b': 1 },
  { 'a': 1, 'b': 2 }
]
console.log(_.filter(objects, _.conforms({ 'b': function(n) { return n > 1 } })))
// => [{ 'a': 1, 'b': 2 }]
