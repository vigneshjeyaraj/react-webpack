import { Component, PropTypes } from 'react';

export class Menu extends Component {

    renderLeftNav() {
        const listItems = this.props.menuItems.map((item) => {
            <li key={item}>{item}</li>
        });
        return (
            <ul>{listItems}</ul>
        )
    }

    render() {
        return (
          <div className='menu'>
            <nav className='nav'>
                {this.renderLeftNav()}
            </nav>
          </div>
      )
    }
}

Menu.defaultProps = {
    menuItems: ["Home", "Contact Us", "About"]
}

Menu.propTypes = {
    menuItems: PropTypes.array
}
