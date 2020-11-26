import React, { useContext } from "react";
import ShopContext from "../../context/context";
// import ShopContext from "../../context/context";

const Cart = () => {
  const value = useContext(ShopContext);
  return (
    <div>
      <h1>This is your cart </h1>
    </div>
  );
};

export default Cart;
