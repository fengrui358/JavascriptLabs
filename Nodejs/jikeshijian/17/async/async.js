// async function 等效于返回一个 promise 的普通函数

// let asyncFunction = async function () {
//     return 4
// }

// console.log(asyncFunction())

// console.log(function () {
//     return new Promise(resolve => {
//         resolve(4)
//     })
// }())

(function () {
    const result = async function () {
        let content = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 500);
        })

        console.log(content)
        return 4;
    }

    setTimeout(() => {
        console.log(result)
    }, 800);
})()
