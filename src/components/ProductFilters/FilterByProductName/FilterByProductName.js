import React, { useContext } from "react";
import ShopContext from "../../../context/context";
import "./FilterByProductName.css";

const FilterByProductName = () => {
  const value = useContext(ShopContext);
  const { searchProductNameInput, handleSearchProductNameInputChange } = value;

  return (
    <>
      <label htmlFor="searchByName">Search products by name:</label>
      <input
        className="filterByProductName"
        placeholder="Product name.."
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
