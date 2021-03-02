//方法一
console.log('32' * 1)            // 32
console.log('ds' * 1)            // NaN
console.log(null * 1)            // 0
console.log(undefined * 1)    // NaN
console.log(1 * { valueOf: () => '3' })        // 3

//方法二
console.log(+ '123')            // 123
console.log(+ 'ds')               // NaN
console.log(+ '')                    // 0
console.log(+ null)              // 0
console.log(+ undefined)    // NaN
console.log(+ { valueOf: () => '3' })    // 3
