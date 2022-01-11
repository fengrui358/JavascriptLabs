addEventListener('message', function (evt) {
    let total = run(evt.data);
    this.postMessage(total);
});

function run(num) {
    let total = 0;
    for (let index = 0; index < num; index++) {
        total += index;
    }
    
    return total;
}