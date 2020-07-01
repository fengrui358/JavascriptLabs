function stringA() {
    return "你好，module1";
}

(function () {
    console.log('模块1被加载了');

    setInterval(() => { console.log("模块1启动了定时器") }, 1000);
})()

export { stringA };