import React from "react";
import FilterByProductName from "../FilterByProductName/FilterByProductName";
import FilterByProductPrice from "../FilterByProductPrice/FilterByProductPrice";

const FilterMenu = () => {
  return (
    <>
      <FilterByProductName />
      <FilterByProductPrice />
    </>
  );
};

export default FilterMenu;
