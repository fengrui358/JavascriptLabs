const _ = require('lodash')

console.log(_.compact([0, -999, 1, false, undefined, null, NaN, 2, '', 3]))
 // => [-999, 1, 2, 3]