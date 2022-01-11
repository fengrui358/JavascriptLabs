// 设置在 moment 之后，用以替换 moment 的偏差值
(function () {
    var originalMoment = window.moment;
    window.moment = function () { 
        if (arguments.length === 0) {
            let momentNow = originalMoment();
            
            if (timemachine && timemachine.difference) {
                return momentNow.add(timemachine.difference, 'ms');
            }
            
            return momentNow;
        } else {
            return originalMoment.apply(this, arguments);
        }
    };
})()