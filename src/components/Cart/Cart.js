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
    width: "34vw",
    overflowY: "auto",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      color: "red",
      position: "absolute",
      right: "10px",
      top: "10px",
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
            <h2>Your cart</h2>

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
                  <div className="flexbox">
                    <li key={productId}>
                      <div className="cart_container">
                        <img
                          src={productImage}
                          alt={productName}
                          style={{ width: "100px", height: "100px" }}
                        />
                        <p>{productName}</p>
                        <button
                          className="btn_decrease"
                          disabled={productQuantity === 0 ? true : false}
                          onClick={() => {
                            value.decreaseQuantityofProductInCart(productId);
                          }}
                        >
                          -
                        </button>
                        <p
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
                          className="btn_increase"
                          onClick={() => {
                            value.increaseQuantityofProductInCart(productId);
                          }}
                        >
                          +
                        </button>
                        <p> Cena: {productPrice}</p>
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
