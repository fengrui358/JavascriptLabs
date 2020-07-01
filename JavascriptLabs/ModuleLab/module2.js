import {stringA as sss} from './module1.js';

function stringB(){
    return "你好，module2";
}

function stringA(){
    return `module2 覆盖 ${sss()}`
}

export {stringA, stringB};