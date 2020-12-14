import React, { useState } from "react";
import Alert from "../components/Alert/Alert";
import Cart from "../components/Cart/Cart";
import Navbar from "../components/navigations/Navbar/Navbar";
import "./goTopButton.css";
import { animateScroll as scroll } from "react-scroll";

const MainTemplate = ({ children }) => {
  const [isScrollIconVisible, setIsScrollIconVisible] = useState(false);

  const toggleScrollVisibility = () => {
    if (!isScrollIconVisible && window.pageYOffset > 400) {
      setIsScrollIconVisible(true);
    } else if (isScrollIconVisible && window.pageYOffset <= 400) {
      setIsScrollIconVisible(false);
    }
  };

  window.addEventListener("scroll", toggleScrollVisibility);
  return (
    <>
      <Navbar />
      <Alert />
      <Cart />
      {isScrollIconVisible ? (
        <button
          className="goTop__btn"
          onClick={() => scroll.scrollToTop()}
        ></button>
      ) : null}
      {children}
    </>
  );
};

export default MainTemplate;

// aby wyswietlic  to co zawierają konkretne komponenty (to co  jest w w pages) musimy  w  MainTemplate przekazac  Navbar (zawierajacy referencje do komponentow) oraz
// przeekazac  children (wbudowany obiekt  Reactowy)  aby wyswietlic co zawiera dany kompoinent
