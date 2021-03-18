const _ = require('lodash')

function Shape() {
    this.x = 0
    this.y = 0
}

function Circle() {
    Shape.call(this)
}

Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
})

const circle = new Circle
console.log(circle instanceof Circle)
// => true

console.log(circle instanceof Shape)
// => true
