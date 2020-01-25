import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
class CheckoutForm extends Component {
  state = { complete: false };
  handleSubmit = async event => {
    // 2. on envoie le numéro de carte à Stripe
    const response = await this.props.stripe.createToken({ name: "Name" });
    // Stripe nous retourne un token
    console.log(response.token);
    // envoie ce token au backend
    const chargeRes = await axios.post("http://localhost:3001/charge", {
      token: response.token.id
    });
  };
  render() {
    if (this.state.complete) {
      return <h1>Purshase Complete </h1>;
    }
    return (
      <div className="chekout">
        <h3> would you like to complete the purshase? </h3>
        <CardElement style={{ base: { fontSize: "18px" } }} />
        <button onClick={this.handleSubmit}></button>
      </div>
    );
  }
}
export default injectStripe(CheckoutForm);
