interview((res) => {
    if (res instanceof Error) {
        console.log('cry', res);
    }
    else {
        console.log('smile', res)
    }
})

function interview(callback) {
    //setTimeout 会开启另一个事件循环，内部抛出的错误外部调用者无法捕获，会被抛到nodejs全局
    setTimeout(() => {
        if (Math.random() < 0.1) {
            callback('success')
        }
        else {
            callback(new Error('fail'))
        }
    }, 500);
}