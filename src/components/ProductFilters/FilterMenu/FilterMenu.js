import React from "react";

import FilterByCategory from "../FilterByCategory/FilterByCategory";
import FilterByFreeDelivery from "../FilterByFreeDelivery/FilterByFreeDelivery";
import FilterByProductName from "../FilterByProductName/FilterByProductName";
import FilterByProductPrice from "../FilterByProductPrice/FilterByProductPrice";

import "./FilterMenu.css";
import { FiSearch } from "react-icons/fi";
const FilterMenu = () => {
  return (
    <>
      <header className="toolbar">
        <nav className="toolbar_navigation">
          <div></div>
          <div className="toolbar_logo">
            <h2>
              Search Product
              <FiSearch className="icon" />
            </h2>
          </div>
          {/* <div className="spacer" /> */}
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                {" "}
                <FilterByProductName />
              </li>
              <li>
                {" "}
                <FilterByProductPrice />
              </li>
              <li>
                {" "}
                <FilterByFreeDelivery />
              </li>
              <li>
                {" "}
                <FilterByCategory />
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* <div>
        <FilterByProductName className="filterByProductName" />
        <FilterByProductPrice className="filterByProductPrice" />
        <FilterByFreeDelivery className="filterByFreeDelivery" />
        <FilterByCategory className="filterByCategory" />
      </div> */}
    </>
  );
};

export default FilterMenu;
