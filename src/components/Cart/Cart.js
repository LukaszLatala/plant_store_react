import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import ShopContext from "../../context/context";
// import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

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
    width: "30vw",
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
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Your Cart
      </button> */}

      <div className={classes.root}>
        <IconButton
          onClick={handleOpen}
          color="s"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon />
        </IconButton>
      </div>
      {/* <Button variant="contained">Default</Button> */}
      {/* <Button
        type="button"
        onClick={handleOpen}
        variant="contained"
        color="secondary"
      >
        {" "}
        Your Cart
      </Button> */}
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
            <ul>
              {cart.map((product) => {
                const { productName } = product;
                return (
                  <li>
                    <p>{productName}</p>
                  </li>
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
