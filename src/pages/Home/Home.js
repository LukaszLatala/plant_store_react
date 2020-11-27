import React, { useContext } from "react";
import ShopContext from "../../context/context";

const Home = () => {
  const value = useContext(ShopContext);
  return (
    <>
      <div>
        Home
        {/* <h1>{value.counter}</h1>
        <button onClick={value.increase}>+</button> */}
      </div>
    </>
  );
};

export default Home;
