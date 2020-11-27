import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import Cart from "../../Cart/Cart";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link className="link" to={routes.home}>
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to={routes.about}>
            About
          </Link>
        </li>
        <li>
          <Link className="link" to={routes.products}>
            Products
          </Link>
        </li>
        <li>
          <Link className="link" to={routes.contact}>
            Contact
          </Link>
        </li>
        <li className="right">
          <Link className="link" to={routes.cart}>
            <Cart />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
