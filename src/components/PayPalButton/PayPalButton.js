import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { idKey } from "../../Keys/Keys";

const PayPalButton = ({ cartTotal, clearAndCloseCart }) => {
  const onSuccessPayment = (payment) => {
    console.log(payment);
    clearAndCloseCart();
  };

  const onCancelPayment = (reason) => {
    console.log(reason);
  };

  const onError = (err) => {
    console.error(err);
  };

  const client = {
    sandbox: idKey,
    production: "",
  };

  return (
    <PaypalExpressBtn
      onSuccess={onSuccessPayment}
      onCancel={onCancelPayment}
      onError={onError}
      currency="PLN"
      env="sandbox"
      client={client}
      total={cartTotal}
    />
  );
};

export default PayPalButton;
