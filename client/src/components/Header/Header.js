import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
          <a className='left brand-logo' style={{marginLeft: '2rem', fontSize: '3rem'}}>
            Mailey
          </a>
          <ul className='right'>
            <li style={{marginRight: '1.5rem'}}>
              <a className='waves-effect waves-light btn btn-pink'>
                Login With Google
                <i className='fab fa-google right' style={{lineHeight: '2.5rem'}}>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
