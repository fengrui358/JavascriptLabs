// (function () {
//     let promise = interview()
//     let promise2 = promise.then(res => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(promise)
//                 //resolve('accpet')
//                 reject(new Error('refuse'))
//             }, 200);
//         })

//         //console.log(res, 'smile')
//     })

//     setTimeout(() => {
//         console.log(promise)
//         console.log(promise2)
//     }, 1200)
// })()

interview(1).then(() => {
    return interview(2)
}).then(() => {
    return interview(3)
}).then(() => {
    console.log('smile')
}).catch(err => {
    console.log('cry')
})

function interview(round) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                console.log(`pass round ${round}`)
                resolve('success')
            }
            else {
                reject(new Error(`fail at round ${round}`))
            }
        }, 500);
    })
}