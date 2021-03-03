const _ = require('lodash')

console.log(_.camelCase('Foo Bar'))
// => 'fooBar'
console.log(_.camelCase('--foo-bar--'))
// => 'fooBar'
console.log(_.camelCase('__FOO_BAR__'))
// => 'fooBar'