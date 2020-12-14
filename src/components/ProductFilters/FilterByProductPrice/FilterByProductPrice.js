import React, { useContext } from "react";
import ShopContext from "../../../context/context";

const FilterByProductPrice = () => {
  const value = useContext(ShopContext);
  const { handleProductPriceInputChange, filterProductPriceInput } = value;

  return (
    <>
      <label htmlFor="searchByPrice">product price:</label>
      <input
        type="range"
        name="searchByPrice"
        id="searchByPrice"
        value={filterProductPriceInput}
        onChange={handleProductPriceInputChange}
      />
    </>
  );
};

export default FilterByProductPrice;
