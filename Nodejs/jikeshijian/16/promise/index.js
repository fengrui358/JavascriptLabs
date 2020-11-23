(function () {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve()
        }, 300);
    })

    console.log(promise)

    setTimeout(() => {
        console.log(promise)
    }, 500);
})()
