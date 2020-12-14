const { isModuleSpecifier } = require('@babel/types');
const { Module } = require('module');
const React = require('react');

class App extends React.Component {
    render() {
        return ('<p>hello</p>');
    }
}

module.exports = <App />