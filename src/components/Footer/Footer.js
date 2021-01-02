import React from "react";
import "./Footer.css";
function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer_container">
      <footer className="footer">
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
}

export default Footer;
