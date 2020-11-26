import React from "react";
import Cart from "../../components/Cart/Cart";

import ProductsList from "../../components/productsList/ProductsList";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>

      <Cart />
      <ProductsList />
    </div>
  );
};

export default Products;
