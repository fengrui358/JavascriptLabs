let ejs = require('ejs');

const user = {
    name: 'haha <script>'
};

// const template = '<h2><%= user.name %></h2>';
// ejs.render(template, user);

//字符串模板达到同样渲染效果
const result = `<h2>${user.name}</h2>`;
console.log(result);

//使用vm模块，沙箱运行js代码
const vm = require('vm');
let vmString = vm.runInNewContext('`<h2>${_(user.name)}</h2>`', {
    user,

    //添加xss过滤函数
    _: function (markup) {
        if (!markup) return '';
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    },
});
console.log(vmString);


const templateMap = {
    templateA: '`<h2>${include("templateB")}</h2>`',
    templateB: '`<p>hhahahahahaa</p>`'
}

const context = {
    //子模版函数
    include: function (name) {
        return templateMap[name]();
    },

    //添加xss过滤函数
    _: function (markup) {
        if (!markup) return '';
        return String(markup)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/'/g, '&#39;')
            .replace(/"/g, '&quot;');
    },
}

Object.keys(templateMap).forEach(key => {
    const temp = templateMap[key];

    templateMap[key] = vm.runInNewContext(`(function() {
        return ${temp};
    })`, context);
});

let r = templateMap['templateA']();
console.log(r);