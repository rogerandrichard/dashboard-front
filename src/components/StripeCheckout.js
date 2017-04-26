import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import logo from '../images/WhiteShark.png'
import { connect } from 'react-redux'
import { paidJob } from '../actions/job'


class TakeMoney extends React.Component {


  onToken = (token) => {
    console.log(token)
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(token => {
      //alert(`We are in business, ${token}`);
      //console.log({ this.props.jobid })
      this.props.dispatch(paidJob(this.props.jobid));    // >>> Marks Job Paid(use in Stripe Checkout)
    });                                       //Called from line 38 in Products with jobid 36(example)
  }

  // ...

  render() {
    return (

      <StripeCheckout
        name="White Shark Ltd"
        description="Record Payment"
        image={ logo }
        ComponentClass="div"
        amount={ this.props.amount }
        currency="USD"
        stripeKey="pk_test_7cudEUIoFdvcCsJoAUYyNW1F" //"my_PUBLISHABLE_stripekey"
        locale="en"
        email="info@vidhub.co"
        // Note: Enabling either address option will give the user the ability to
        // fill out both. Addresses are sent as a second parameter in the token callback.
        shippingAddress={false}
        billingAddress={false}
        // Note: enabling both zipCode checks and billing or shipping address will
        // cause zipCheck to be pulled from billing address (set to shipping if none provided).
        zipCode={false}
        alipay
        bitcoin
        allowRememberMe
        token={this.onToken}
        // Note: `reconfigureOnUpdate` should be set to true IFF, for some reason
        // you are using multiple stripe keys
        reconfigureOnUpdate={false}
        // Note: you can change the event to `onTouchTap`, `onClick`, `onTouchStart`
        // useful if you're using React-Tap-Event-Plugin
        //triggerEvent="onTouchTap"
        >
        <button className="btn btn-primary">
          Pay By Stripe
        </button>
      </StripeCheckout>

   // Use your own child component, which gets wrapped in whatever
   //            component you pass into as "ComponentClass" (defaults to span)
    )
  }
}

const mapStateToProps = (state) => {
  return {
    job: state.job
  }
}

export default connect(mapStateToProps)(TakeMoney)
