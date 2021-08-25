(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./es6/c"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.print = void 0;
    var c_1 = require("./es6/c");
    var print = function () {
        console.log('print module');
        c_1.print();
    };
    exports.print = print;
});
