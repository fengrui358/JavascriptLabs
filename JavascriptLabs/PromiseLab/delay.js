async function start(){
    console.log('启动')
    await delay(3000)
    console.log('延时结束')
}

start()

function delay(time){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve()
        }, time);
    })
}