import { Component, PropTypes } from 'react';

export class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-image'>
                    <img src='images/mixed_charcoal.jpg' />
                </div>
                <div className='card-desc'>
                    <h2>{this.props.cardDetails.heading}</h2>
                    <p>{this.props.cardDetails.description}</p>
                </div>
            </div>
        )
    }
}

Card.defaultProps = {
    cardDetails: {
        heading: "Our Fields",
        description: "Fields are located in southern parts of india"
    }
}

Card.propTypes = {
    cardDetails: PropTypes.object
}
