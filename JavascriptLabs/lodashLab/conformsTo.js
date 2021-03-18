const _ = require('lodash')

const object = { 'a': 1, 'b': 2 }
console.log(_.conformsTo(object, { 'b': function(n) { return n > 1 } }))
// => true
console.log(_.conformsTo(object, { 'b': function(n) { return n > 2 } }))
// => false
