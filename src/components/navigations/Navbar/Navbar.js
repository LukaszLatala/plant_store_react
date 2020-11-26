import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.about}>About</Link>
        </li>
        <li>
          <Link to={routes.products}>Products</Link>
        </li>
        <li>
          <Link to={routes.contact}>Contact</Link>
        </li>
        <li>
          <Link to={routes.cart}>Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
