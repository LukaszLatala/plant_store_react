import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert as MaterialAlert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import ShopContext from "../../context/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = () => {
  const classes = useStyles();
  const value = useContext(ShopContext);
  const { handleAlertClose, isAlertOpen, alertSpecification } = value;

  return (
    <div className="alert">
      <div className={classes.root}>
        <Collapse in={isAlertOpen}>
          <MaterialAlert
            severity={alertSpecification.type}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={handleAlertClose}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            {alertSpecification.content}
          </MaterialAlert>
        </Collapse>
      </div>
    </div>
  );
};
export default Alert;
