// const s: string = 'Hello Typescript';
// console.log(s);

// let app = document.querySelector('.app')
// if (app) {
//     app.innerHTML = s
// }

// import React from 'react'
import ReactDom from 'react-dom';

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC';
import HelloHooks from './components/demo/HelloHooks'

ReactDom.render(
  <HelloHooks name="Typescript" />,
  document.querySelector('.app')
);
