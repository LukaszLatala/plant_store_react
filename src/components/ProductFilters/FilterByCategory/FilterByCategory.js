import React, { useContext } from "react";
import ShopContext from "../../../context/context";
import "./FilterByCategory.css";
const FilterByCategory = () => {
  const value = useContext(ShopContext);
  const { productsCatgories, handleFilterByCategory, filterByCategory } = value;

  return (
    <>
      <label htmlFor="categorySelct">Choose category:</label>

      <select
        name="categorySelct"
        id="categorySelct"
        onChange={handleFilterByCategory}
        value={filterByCategory}
      >
        <option value={productsCatgories.flowerpot && productsCatgories.plant}>
          all
        </option>
        <option value={productsCatgories.plant}>plant</option>
        <option value={productsCatgories.flowerpot}>flowerpot</option>
      </select>
    </>
  );
};

export default FilterByCategory;
