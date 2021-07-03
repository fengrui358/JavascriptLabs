function stringA() {
    return "你好，module1";
}

(function () {
    console.log('模块1被加载了');

    setInterval(() => { console.log("模块1启动了定时器") }, 1000);
})()

let num = { 
    info: 45
}

function setNum(num) {
    num.info = num
}

export { stringA, num, setNum };