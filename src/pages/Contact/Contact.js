import React from "react";
import "./Contact.css";
// import Example from "../../components/input/contact_Input";
import Button from "@material-ui/core/Button";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <form>
          <h3>Napisz do nas</h3>
          <textarea
            // value={this.state.value}
            // onChange={this.handleChange}
            placeholder="wpisz wiadomosc"
          ></textarea>
          {/* <button>Wyślij</button> */}
          {/* <Example /> */}
          <Button variant="contained" color="secondary">
            Send us a message!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
