import React from "react";
import "./Contact.css";
// import Example from "../../components/input/contact_Input";
import Button from "@material-ui/core/Button";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <form>
          <h3> Write to us!</h3>
          <textarea placeholder="Your message..."></textarea>

          <Button className="contact_btn" variant="contained" color="secondary">
            Send us a message!
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
