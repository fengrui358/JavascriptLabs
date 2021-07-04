<<<<<<< HEAD
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
>>>>>>> cb383e26e7c40baf9bbf5d483177c4ecc530b4a9
import logo from './images/logo.png'
import { a } from './treesharking'

if (false) {
    console.log(a())
}

class Search extends React.Component {
    render() {
<<<<<<< HEAD
        // a = 1;
        return <div class="search-text">Search Text<img src={ logo } /></div>;
=======
        // a = 1
        return <div className="search-text">
            Search Text<img src={logo} /></div>
>>>>>>> cb383e26e7c40baf9bbf5d483177c4ecc530b4a9
    }
}

ReactDOM.render(
    <Search />,
<<<<<<< HEAD
    document.getElementById('root')
)
=======
    document.getElementById('root'),
)
>>>>>>> cb383e26e7c40baf9bbf5d483177c4ecc530b4a9
