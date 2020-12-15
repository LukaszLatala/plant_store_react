import React, { useContext } from "react";
import ShopContext from "../../../context/context";

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
        {productsCatgories.map((el) => {
          return <option value={el}>{el}</option>;
        })}
      </select>
    </>
  );
};

export default FilterByCategory;
