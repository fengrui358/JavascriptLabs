// const s: string = 'Hello Typescript';
// console.log(s);

// let app = document.querySelector('.app')
// if (app) {
//     app.innerHTML = s
// }

import React from 'react'
import ReactDom from 'react-dom'

import Hello from './components/demo/Hello'

ReactDom.render(
    <Hello name="Typescript" />,
    document.querySelector('.app')
)