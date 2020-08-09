////pk_test_ZyFGAsqEGC8tRHtAy8NztCVO008mzc0XQd
import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

const StripeCheckoutButton = (props) => {
  const { price } = props;
  const publishableKey = 'pk_test_ZyFGAsqEGC8tRHtAy8NztCVO008mzc0XQd';

  const handleSubmit = (token) => {
    alert('Payment success!');
  };

  return (
    <StripeCheckout
      label="PAY NOW"
      name="PAY"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={price * 100}
      panelLabel="PAY NOW"
      token={handleSubmit}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
