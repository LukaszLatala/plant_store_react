import React from "react";
import Cart from "../components/Cart/Cart";
import Navbar from "../components/navigations/Navbar/Navbar";

const MainTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      <Cart />
      {children}
    </>
  );
};

export default MainTemplate;

// aby wyswietlic  to co zawierają konkretne komponenty (to co  jest w w pages) musimy  w  MainTemplate przekazac  Navbar (zawierajacy referencje do komponentow) oraz
// przeekazac  children (wbudowany obiekt  Reactowy)  aby wyswietlic co zawiera dany kompoinent
