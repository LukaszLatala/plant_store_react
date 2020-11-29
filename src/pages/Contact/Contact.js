import React from "react";
import "./Contact.css";
// import Example from "../../components/input/contact_Input";
import Button from "@material-ui/core/Button";
import Footer from "../../components/Footer/Footer";
const Contact = () => {
  return (
    <div>
      <div className="contact">
        <form>
          <h3> Write to us!</h3>
          <textarea
            // value={this.state.value}
            // onChange={this.handleChange}
            placeholder="Your message..."
          ></textarea>
          {/* <button>Wyślij</button> */}
          {/* <Example /> */}
          <Button className="contact_btn" variant="contained" color="secondary">
            Send us a message!
          </Button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
