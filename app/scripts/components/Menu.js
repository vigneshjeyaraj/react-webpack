import { Component, PropTypes } from 'react';

export class Menu extends Component {

    renderLeftNav() {
        const listItems = this.props.menuItems.map((item) =>
            <li className='left-nav-item' key={item}>{item}</li>
        );
        return (
            <ul className='left-nav'>{listItems}</ul>
        )
    }

    render() {
        return (
          <div className='menu'>
            <nav className='menu-nav'>
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
