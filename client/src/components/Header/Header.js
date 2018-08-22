import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StripeBilling from '../StripeBilling/StripeBilling'
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
          <li style={{marginRight: '1.5rem'}}>
            <a href='/auth/google' className='waves-effect waves-light btn btn-round'>
              Login With Google
              <i className='fab fa-google right' style={{lineHeight: '2.5rem'}}>
              </i>
            </a>
          </li>
        )
      default:
        return [
          <li key='1' style={{margin: '.2rem 1.5rem'}}>
            CREDITS: {auth.credits}
          </li>,
          <li key='2'>
            <StripeBilling />
          </li>,
          <li key='3' style={{marginRight: '1.5rem'}}>
            <a href='/api/logout' className='waves-effect waves-light btn btn-round'>
              Logout
            </a>
          </li>
        ]
    }
  }
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className='left brand-logo'
            style={{marginLeft: '2rem'}}
          >
            <i className='material-icons' style={{fontSize: '3.75rem'}}>email</i>
          </Link>
          <ul className='right'>
            {
              this.renderContent()
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps)(Header)
