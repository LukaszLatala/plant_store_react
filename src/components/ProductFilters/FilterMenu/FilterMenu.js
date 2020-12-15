import React from "react";
import FilterByFreeDelivery from "../FilterByFreeDelivery/FilterByFreeDelivery";
import FilterByProductName from "../FilterByProductName/FilterByProductName";
import FilterByProductPrice from "../FilterByProductPrice/FilterByProductPrice";

const FilterMenu = () => {
  return (
    <>
      <FilterByProductName />
      <FilterByProductPrice />
      <FilterByFreeDelivery />
    </>
  );
};

export default FilterMenu;
