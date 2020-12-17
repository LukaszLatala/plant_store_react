import React, { useContext } from "react";
import ShopContext from "../../../context/context";

const FilterByFreeDelivery = () => {
  const value = useContext(ShopContext);
  const { filterByFreeDelivery, handleFreeDeliveryChange } = value;

  return (
    <>
      <label htmlFor="searchByName">Free delivery</label>

      <input
        type="checkbox"
        name="searchByName"
        id="searchByName"
        value={filterByFreeDelivery}
        onChange={handleFreeDeliveryChange}
      />
    </>
  );
};

export default FilterByFreeDelivery;
