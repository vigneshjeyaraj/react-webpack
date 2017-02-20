import { Component, PropTypes } from 'react';
import { Menu } from './Menu';
import { P1 } from './P1';
import { CardList } from './CardList';

export class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Menu />
                <P1 />
                <CardList />
            </div>
        );
    }
}
