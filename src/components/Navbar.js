import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'
import { navigate } from '@reach/router';


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <a className="navbar-item" to="/about" onClick = {() => navigate('/#about')}>
                About
              </a>
              <a className="navbar-item" to="/brunch-menu" onClick={() => navigate('/brunch-menu')}>
                Brunch Menu
              </a>
              <a className="navbar-item" to="/evening-menu" onClick={() => navigate('/evening-menu')}>
                Evening Menu
              </a>
              <a className="navbar-item" to="/contact" onClick={() => navigate('/#contact')}>
                Contact
              </a>
            </div>
            <div className="navbar-end has-text-centered">
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
