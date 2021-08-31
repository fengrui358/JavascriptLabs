// const s: string = 'Hello Typescript';
// console.log(s);

// let app = document.querySelector('.app')
// if (app) {
//     app.innerHTML = s
// }

// import React from 'react'
import ReactDOM from 'react-dom';

// import Hello from './components/demo/Hello'
// import HelloClass from './components/demo/HelloClass'
// import HelloHOC from './components/demo/HelloHOC';
// import HelloHooks from './components/demo/HelloHooks'

// ReactDom.render(
//   <HelloHooks name="Typescript" />,
//   document.querySelector('.app')
// );

import Root from './routers';

ReactDOM.render(
    // <Hello name="TypeScript" />,
    // <HelloClass name="TypeScript" />,
    // <HelloHOC name="TypeScript" loading={false} />,
    // <HelloHooks name="TypeScript" />,
    // <App />,
    <Root />,
    document.querySelectorAll('.app')[0]
);