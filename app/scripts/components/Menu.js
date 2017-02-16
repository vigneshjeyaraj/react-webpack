import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export class Menu extends Component {

    renderLeftNav() {

        return (
            <ul className='left-nav'>
                <li className='left-nav-item' key={this.props.menuItems.home}>
                    <Link to='/' className='left-link' activeClassName='selected'>
                        {this.props.menuItems.home}
                    </Link>
                </li>
                <li className='left-nav-item' key={this.props.menuItems.contactus}>
                    <Link to='/contact-us' className='left-link' activeClassName='selected'>
                        {this.props.menuItems.contactus}
                    </Link>
                </li>
                <li className='left-nav-item' key={this.props.menuItems.about}>
                    <Link to='/about' className='left-link' activeClassName='selected'>
                        {this.props.menuItems.about}
                    </Link>
                </li>
            </ul>
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
    menuItems: {
        home: "Home",
        contactus: "Contact Us",
        about: "About"
    }
}

Menu.propTypes = {
    menuItems: PropTypes.object
}
