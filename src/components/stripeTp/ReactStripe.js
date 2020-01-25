import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";
export default function ReactStripe(props) {
  return (
    <div>
      <StripeProvider apiKey="pk_test_LSjYGS6ovvxLEalj2Lqczufn00Ngy11ocl">
        <div className="example">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">
              <span role="img" aria-label="task">
                💳
              </span>
              {props.title}
            </h1>
          </div>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    </div>
  );
}
