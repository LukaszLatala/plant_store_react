import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../../context/context";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import "./Cart.css";
import PayPalButton from "../PayPalButton/PayPalButton";
// import { IconButton } from "@material-ui/core";

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

  const value = useContext(ShopContext);

  const {
    cart,
    isCartOpen,
    handleCartClose,
    cartTotal,
    clearAndCloseCart,
  } = value;

  return (
    <div className="cart_container">
      <div className={classes.root}>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={isCartOpen}
          onClose={handleCartClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={isCartOpen}>
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
                          disabled={productQuantity === 1}
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
                        <div className="price_div">
                          <p className="price"> Price: {productPrice} zł</p>
                        </div>

                        <Button
                          onClick={() => {
                            value.removeProductFromCart(productId);
                          }}
                          variant="contained"
                          color="default"
                          className={classes.button}
                          startIcon={<DeleteIcon />}
                        >
                          Remove
                        </Button>
                      </li>
                    </div>
                  );
                })}
              </ul>
              {cartTotal === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <>
                  <div className="payment_information">
                    <h5>Your total: {cartTotal}zł</h5>
                    <PayPalButton
                      cartTotal={cartTotal}
                      clearAndCloseCart={clearAndCloseCart}
                    />
                  </div>
                </>
              )}
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
};
export default Cart;
