import { Component, PropTypes } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-image'>
                    <img src='images/mixed_charcoal.jpg' />
                </div>
                <div className='card-desc'>
                    <h2>Our Fields</h2>
                    <p>Fields are located in southern parts of india</p>
                </div>
            </div>
        )
    }
}
