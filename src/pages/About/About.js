import React, { useContext } from "react";
import ShopContext from "../../context/context";

const About = () => {
  const value = useContext(ShopContext);

  return (
    <div>
      <h1>About </h1>

      <h2> {value.info} </h2>

      <button onClick={value.handleInfoChange}>change info</button>
    </div>
  );
};

export default About;
