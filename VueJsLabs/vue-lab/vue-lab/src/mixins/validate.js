export default {
    methods: {
        validateRules: function () {
            return {
                onlyNumber: {
                    validator: (rule, value, callback) => {
                        const numPattern = /^\d+$/;
                        if (value && !numPattern.test(value)) {
                            return callback("输入数字");
                        }
                        callback();
                    },
                    trigger: "change",
                }
            }
        }
    }
}