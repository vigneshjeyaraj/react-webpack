import { Component, PropTypes } from 'react';
import { Menu } from './Menu';

export class About extends Component {
    render() {
        return(
            <div>
                <Menu />
                <h1>I am About</h1>
            </div>
        )
    }
}
