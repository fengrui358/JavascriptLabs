(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./a", "./a", "./a"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.print = void 0;
    var a_1 = require("./a"); // 批量导入
    var All = require("./a"); // 导入模块中的所有成员，绑定在 All 上
    var a_2 = require("./a"); // 不加{}，导入默认
    var print = function () {
        console.log(a_1.a, a_1.b, a_1.c);
        console.log(All);
        console.log('defaultFunction', a_2["default"]());
    };
    exports.print = print;
    var p = {
        x: 5,
        y: 10
    };
});
