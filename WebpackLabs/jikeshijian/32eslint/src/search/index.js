import React from 'react'
import ReactDOM from 'react-dom'
import './search.less'
import logo from './images/logo.png'
import { a } from './treesharking'

if (false) {
    console.log(a())
}

class Search extends React.Component {
    render() {
        // a = 1
        return <div className="search-text">
            Search Text<img src={logo} /></div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root'),
)
