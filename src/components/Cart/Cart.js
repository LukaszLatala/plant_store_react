import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../../context/context";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import "./Cart.css";

// import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "20px",
    outline: "none",
    height: "85vh",
    width: "45vw",
    overflowY: "auto",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "red",
      // position: "absolute",
      // right: "10px",
      // top: "10px",
    },
  },
}));

const Cart = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const value = useContext(ShopContext);

  const { cart } = value;

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          onClick={handleOpen}
          color="s"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
          <h8>({value.cart.length}) </h8>
        </IconButton>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="title">
              <h2>Your cart</h2>
            </div>

            <ul style={{ padding: "0" }}>
              {cart.map((product) => {
                const {
                  productName,
                  productImage,
                  productId,
                  productQuantity,
                  productPrice,
                } = product;
                return (
                  <div>
                    <li className="product_container_cart" key={productId}>
                      <div className="image">
                        <img
                          src={productImage}
                          alt={productName}
                          style={{ width: "120px", height: "120px" }}
                        />
                      </div>
                      <div className="name">
                        <p>{productName}</p>
                      </div>

                      <button
                        className="decrease_button"
                        disabled={productQuantity === 0 ? true : false}
                        onClick={() => {
                          value.decreaseQuantityofProductInCart(productId);
                        }}
                      >
                        -
                      </button>
                      <p
                        className="quantity_information"
                        style={
                          productQuantity === 0
                            ? {
                                opacity: 0.3,
                              }
                            : null
                        }
                      >
                        {productQuantity}{" "}
                      </p>
                      <button
                        className="increase_button"
                        onClick={() => {
                          value.increaseQuantityofProductInCart(productId);
                        }}
                      >
                        +
                      </button>

                      <div className="price">
                        <p> Price: {productPrice}</p>
                      </div>

                      <div className="buy_btn">
                        <button className="buy_btn">Buy</button>
                      </div>

                      <div className="remove_btn">
                        <button
                          className="btn_remove"
                          onClick={() => {
                            value.removeProductFromCart(productId);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default Cart;
