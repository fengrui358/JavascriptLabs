const _ = require('lodash')

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'betty', 'active': true },
    { 'user': 'fred', 'active': false }
]

console.log(_.countBy(users, value => value.active))
// => { 'true': 2, 'false': 1 }
console.log(_.countBy(users, value => value.user))
// => { 'barney': 1, 'betty': 1, 'fred': 1 }