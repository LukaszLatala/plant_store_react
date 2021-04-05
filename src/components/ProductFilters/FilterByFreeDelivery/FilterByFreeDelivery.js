import React, { useContext } from "react";
import ShopContext from "../../../context/context";
import "./FilterByFreeDelivery.css";

const FilterByFreeDelivery = () => {
  const value = useContext(ShopContext);
  const { filterByFreeDelivery, handleFreeDeliveryChange } = value;

  return (
    <>
      <label htmlFor="searchByFreeDelivery">Free delivery</label>

      <input
        type="checkbox"
        name="searchByFreeDelivery"
        id="searchByFreeDelivery"
        value={filterByFreeDelivery}
        onChange={handleFreeDeliveryChange}
      />
    </>
  );
};

export default FilterByFreeDelivery;
