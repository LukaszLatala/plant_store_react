import React from "react";
import FilterByCategory from "../FilterByCategory/FilterByCategory";
import FilterByFreeDelivery from "../FilterByFreeDelivery/FilterByFreeDelivery";
import FilterByProductName from "../FilterByProductName/FilterByProductName";
import FilterByProductPrice from "../FilterByProductPrice/FilterByProductPrice";

const FilterMenu = () => {
  return (
    <>
      <FilterByProductName />
      <FilterByProductPrice />
      <FilterByFreeDelivery />
      <FilterByCategory />
    </>
  );
};

export default FilterMenu;
