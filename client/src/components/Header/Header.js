import React, { Component } from 'react'
import './Header.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// mapStateToProps function connects state from the store
// to corresponding props of the app
const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

class Header extends Component {
  renderContent () {
    const { auth } = this.props
    switch (auth) {
      case null:
        return
      case false:
        return (
          <ul className='right'>
            <li style={{marginRight: '1.5rem'}}>
              <a href='/auth/google' className='waves-effect waves-light btn'>
                Login With Google
                <i className='fab fa-google right' style={{lineHeight: '2.5rem'}}>
                </i>
              </a>
            </li>
          </ul>
        )
      default:
        return (
          <ul className='right'>
            <li style={{marginRight: '1.5rem'}}>
              <a href='/api/logout' className='waves-effect waves-light btn'>
                  Logout
              </a>
            </li>
          </ul>
        )
    }
  }
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
            style={{marginLeft: '2rem', fontSize: '3rem'}}
          >
            Mailey
          </Link>
          {
            this.renderContent()
          }
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)
