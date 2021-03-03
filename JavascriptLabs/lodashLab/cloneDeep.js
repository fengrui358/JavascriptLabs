const _ = require('lodash')

const objects = [{ 'a': 1 }, { 'b': 2 }]
const shallow = _.cloneDeep(objects)
console.log(shallow[0] === objects[0])
// => false

const x = { 'a': 1 }
const x1 = _.cloneDeep(x)
console.log(x === x1)
// => false

const y = { 'a': x }
const y1 = _.cloneDeep(y)
console.log(y.a === y1.a)
// => false