import React from "react";
import Footer from "../../components/Footer/Footer";
import FilterMenu from "../../components/ProductFilters/FilterMenu/FilterMenu";
// import Cart from "../../components/Cart/Cart";

import ProductsList from "../../components/productsList/ProductsList";

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <FilterMenu />

      {/* <Cart /> */}
      <ProductsList />
      {/* <Footer /> */}
    </div>
  );
};

export default Products;
