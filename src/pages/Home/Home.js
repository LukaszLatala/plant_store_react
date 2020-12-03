import React, { useContext } from "react";
import Footer from "../../components/Footer/Footer";
import ShopContext from "../../context/context";
import "./Home.css";
const Home = () => {
  // const value = useContext(ShopContext);
  return (
    <>
      <div className="home_container">
        <h1>Plant Store</h1>
        <h3>Our misstion is...</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sed
          officia beatae? Expedita magnam ducimus consequatur officiis eos,
          error maxime voluptatibus ex, nesciunt asperiores cum dolorem dolores
          sed. Quidem, ut! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Labore sed officia beatae? Expedita magnam ducimus consequatur
          officiis eos, error maxime voluptatibus ex, nesciunt asperiores cum
          dolorem dolores sed. Quidem, ut! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Labore sed officia beatae? Expedita
          magnam ducimus consequatur officiis eos, error maxime voluptatibus ex,
          nesciunt asperiores cum dolorem dolores sed. Quidem, ut! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit. Labore sed officia
          beatae? Expedita magnam ducimus consequatur officiis eos, error maxime
          voluptatibus ex, nesciunt asperiores cum dolorem dolores sed. Quidem,
          ut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          sed officia beatae? Expedita magnam ducimus consequatur officiis eos,
          error maxime voluptatibus ex, nesciunt asperiores cum dolorem dolores
          sed. Quidem, ut! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Labore sed officia beatae? Expedita magnam ducimus consequatur
          officiis eos, error maxime voluptatibus ex, nesciunt asperiores cum
          dolorem dolores sed. Quidem, ut! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Labore sed officia beatae? Expedita
          magnam ducimus consequatur officiis eos, error maxime voluptatibus ex,
          nesciunt asperiores cum dolorem dolores sed. Quidem, ut! Lorem, ipsum
          dolor sit amet
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
