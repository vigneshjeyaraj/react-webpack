import { Component, PropTypes } from 'react';
import { Card } from './Card';

export class CardList extends Component {
    render() {
        return (
            <div className='card-list'>
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}
