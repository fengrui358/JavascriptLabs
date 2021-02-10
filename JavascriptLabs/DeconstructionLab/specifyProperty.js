let x = { a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j', k: 'k' }

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

console.time('遍历添加属性')
//移除属性性能对比
let result1 = []
for (let index = 0; index < 1000000; index++) {
    let newItem = {}
    for (const propertyValue of Object.entries(x)) {
        if (excludeProperties.includes(propertyValue[0])) {
            continue
        }

        newItem[propertyValue[0]] = propertyValue[1]
    }

    result1.push(newItem)
}
console.timeEnd('遍历添加属性')

console.time('遍历json序列化然后删除属性')
//移除属性性能对比
let result2 = []
for (let index = 0; index < 1000000; index++) {
    let newItem = JSON.parse(JSON.stringify(x))
    for (const property of excludeProperties) {
        delete newItem[property]
    }

    result2.push(newItem)
}
console.timeEnd('遍历json序列化然后删除属性')

console.time('遍历浅拷贝然后删除属性')
//移除属性性能对比
let result3 = []
for (let index = 0; index < 1000000; index++) {
    let newItem = { ...x }
    for (const property of excludeProperties) {
        delete newItem[property]
    }

    result3.push(newItem)
}
console.timeEnd('遍历浅拷贝然后删除属性')