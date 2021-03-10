/** 
 * 使用 xpath 获取 dom 集合
 * @param {string} xpath Xpath表达式
 * @returns {[]} Doms集合
 */
function getDomsByXpath(xpath) {
    let result = []
    const targets = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    let target = targets.iterateNext();

    while (target) {
        result.push(target);
        target = targets.iterateNext();
    }

    return result;
}

/**
 * 根据 dom 的文本获取对应的 dom
 * @param {string} text dom 对应的文本
 * @returns 
 */
function getFirstDomByText(text) {
    const target = document.evaluate(`//*[text()='${text}']`, document, null, XPathResult.ANY_TYPE, null).iterateNext();
    return target;
}

/**
 * 触发dom元素的事件
 * @param {dom} el 
 * @param {string} type eventName
 */
function dispatch(el, type) {
    try {
        var evt = document.createEvent('Event');
        evt.initEvent(type, true, true);
        el.dispatchEvent(evt);
    } catch (e) { alert(e) };
}

/**
 * 触发点击
 * @param {dom} el 
 */
function triggerClick(el) {
    if (el.click) {
        el.click();
    } else {
        try {
            var evt = document.createEvent('Event');
            evt.initEvent('click', true, true);
            el.dispatchEvent(evt);
        } catch (e) { alert(e) };
    }
}

/**
 * 点击具有指定文本元素的 dom
 * @param {string} text 需要点击的文本元素
 */
function triggerClickByText(text) {
    const el = document.evaluate(`//*[text()='${text}']`, document, null, XPathResult.ANY_TYPE, null).iterateNext();
    if (el != null) {
        if (el.click) {
            el.click();
        } else {
            try {
                var evt = document.createEvent('Event');
                evt.initEvent('click', true, true);
                el.dispatchEvent(evt);
            } catch (e) { alert(e) };
        }
    }
}

/**
 * 等待指定毫秒数
 * @param {number} timeout 演示毫秒数
 * @returns 
 */
function delay(timeout) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeout)
    })
}