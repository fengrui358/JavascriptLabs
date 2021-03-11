let outResult = {};

let context = require.context('.', false, /.js$/);
context.keys().forEach(s => {
    if (s === './index.js') return;
    outResult[s.replace(/(^\.\/|\.js$)/g, '')] = context(s).default;
});

export default outResult;