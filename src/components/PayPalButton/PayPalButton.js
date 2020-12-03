import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { idKey } from "../../idKey/idKey";

const PayPalButton = () => {
  const onSuccessPayment = (payment) => {
    console.log(payment);
  };

  const onCancelPayment = (reason) => {
    console.log(reason);
  };

  const onError = (err) => {
    console.error(err);
  };

  const client = {
    sandbox: "idKey",
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
    />
  );
};

export default PayPalButton;

// ukryc klcuz tak samo jak api w sandbox
