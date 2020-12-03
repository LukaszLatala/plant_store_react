import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes/routes";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.css";
import ShopContext from "../../../context/context";

const Navbar = () => {
  const value = useContext(ShopContext);

  const { cart, handleCartOpen } = value;

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
          <div>
            <IconButton
              onClick={handleCartOpen}
              color="s"
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
              <h8>({cart.length}) </h8>
            </IconButton>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
