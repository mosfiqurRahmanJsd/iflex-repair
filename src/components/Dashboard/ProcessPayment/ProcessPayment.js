import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimpleCardFrom from "./SimpleCardFrom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IpFs9Ht3mhi3KHTYzkQKC06NlYrIb3Ca1dUI2PGTTlJ4nV7qV29OQhKTmp1T9eQMzjvhXUrlUYKr8NlTvvI0VXo00pMjs9YIL"
);
const ProcessPayment = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardFrom handlePayment={handlePayment}></SimpleCardFrom>
    </Elements>
  );
};

export default ProcessPayment;
