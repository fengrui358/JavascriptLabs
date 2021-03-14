let Color = (require('./enums')).Color
let red = (require('./index2')).red
const assert = require('assert').strict

console.log(Color)

console.log('red equal:', Color.red === red)


// Instance properties
assert.equal(
    Color.red.enumKey, 'red');
assert.equal(
    Color.red.enumOrdinal, 0);

// Prototype methods
assert.equal(
    'Color: ' + Color.red, // .toString()
    'Color: Color.red');

// Static `.enumKeys` and static `.enumValues`
assert.deepEqual(
    Color.enumKeys,
    ['red', 'orange', 'yellow', 'green', 'blue', 'purple']);
assert.deepEqual(
    Color.enumValues,
    [Color.red, Color.orange, Color.yellow,
    Color.green, Color.blue, Color.purple]);

// Static `.enumValueOf()`
assert.equal(
    Color.enumValueOf('yellow'),
    Color.yellow);

// Iterability
const result = [];
const iterated = [...Color];
for (const c of Color) {
    result.push('Color: ' + c);
}
assert.deepEqual(
    iterated, [
    Color.red,
    Color.orange,
    Color.yellow,
    Color.green,
    Color.blue,
    Color.purple,
]);

assert.equal(Color.yellow.flag, 0x4)