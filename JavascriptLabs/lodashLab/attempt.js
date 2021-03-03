const _ = require('lodash')

let elements = _.attempt(selector => document.querySelectorAll(selector), '>_>')

if(_.isError(elements)){
    console.log('内部异常')
    elements = []
}