import React, { useContext } from "react";
import ShopContext from "../../../context/context";

const FilterByProductName = () => {
  const value = useContext(ShopContext);
  const { searchProductNameInput, handleSearchProductNameInputChange } = value;

  return (
    <>
      <label htmlFor="searchByName">search products by name:</label>
      <input
        type="search"
        name="searchByName"
        id="searchByName"
        value={searchProductNameInput}
        onChange={handleSearchProductNameInputChange}
      />
    </>
  );
};

export default FilterByProductName;

// sidebar sprobowac zrobic
