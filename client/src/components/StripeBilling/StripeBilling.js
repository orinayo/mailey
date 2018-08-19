import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class StripeBilling extends Component {
  render () {
    return (
      <StripeCheckout
        name='Mailey'
        description='$5 for 5 survey credits'
        amount={500} // 500 cents
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className='waves-effect waves-light btn btn-round'>
          Add credits
        </button>
      </StripeCheckout>
    )
  }
}

export default connect(null, actions)(StripeBilling)
