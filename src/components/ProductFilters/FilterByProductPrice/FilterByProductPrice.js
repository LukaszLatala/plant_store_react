import React, { useContext } from "react";
import ShopContext from "../../../context/context";

const FilterByProductPrice = () => {
  const value = useContext(ShopContext);
  const {
    handleProductPriceInputChange,
    filterProductPriceInput,
    productMaxPrice,
    // productMinPrice,
  } = value;

  return (
    <>
      <label htmlFor="searchByPrice">
        Product price: {filterProductPriceInput}
      </label>

      <input
        type="range"
        min={0}
        max={productMaxPrice}
        name="searchByPrice"
        id="searchByPrice"
        value={filterProductPriceInput}
        onChange={handleProductPriceInputChange}
      />
    </>
  );
};

export default FilterByProductPrice;
