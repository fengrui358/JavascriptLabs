let x = { a: 'a', b: 'b', c: 'c', d: 'd' }

//手动排除属性a，将剩余的属性包括在对象y中
let { a, ...y } = { ...x }

console.log(a)
console.log(y)

let includeProperties = ['a', 'b', 'd']
let excludeProperties = ['b', 'c']
let result = {}
for (const propertyValue of Object.entries(x)) {
    if (excludeProperties.includes(propertyValue[0])) {
        continue
    }

    if (includeProperties.includes(propertyValue[0])) {
        result[propertyValue[0]] = propertyValue[1]
    }
}

console.log('result', result)