const _ = require('lodash')

const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false }
]

console.log(_.filter(users, ({ active }) => active))
// => objects for ['barney']