import React, { Component } from 'react'
import { connect } from 'react-redux'
const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

class LandingPage extends Component {
  render () {
    return (
      <div className='heading' style={{
        textAlign: 'center',
        fontSize: '3rem',
        fontWeight: '300',
        height: '90vh'}} >
        <h1 className='heading__primary' >
          Mailey
        </h1>
        Collect feedback from your users
        <br />
        {
          this.props.auth && <a href='/surveys' className='waves-effect waves-light btn btn-round' style={{margin: '0 auto'}}>
            View Surveys
          </a>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(LandingPage)
