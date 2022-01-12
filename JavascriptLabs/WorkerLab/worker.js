addEventListener('message', function (evt) {
    console.log('5. worker 收到消息，处理发送')
    this.postMessage(`hello ${evt.data}`);
    console.log('6. worker 收到消息，处理发送---完毕')
})