import React, { useContext } from "react";
import ShopContext from "../../context/context";
import Slider from "react-slick";
import "./About.css";

// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

// const products = [
//   {
//     productName: "first",
//     category: "Tv",
//   },

//   {
//     productName: "second2",
//     category: "Phone",
//   },
//   {
//     productName: "second3",
//     category: "Phone",
//   },
//   {
//     productName: "second4",
//     category: "Phone",
//   },

//   {
//     productName: "thrid",
//     category: "Laptop",
//   },
//   {
//     productName: "test",
//     category: "washmachine",
//   },
// ];

// const productsCatgories = [
//   ...new Set(products.map((product) => product.category)),
// ];
// console.log(productsCatgories);

const About = () => {
  const value = useContext(ShopContext);
  const { products } = value;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      {/* <label htmlFor="categorySelct">Choose category:</label>
      <select name="categorySelct" id="categorySelct">
        {productsCatgories.map((el) => {
          return <option value={el}>{el}</option>;
        })}
      </select> */}

      <div>
        <h1> Our Product is our mission </h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
          aliquam, facere maxime praesentium ex hic doloribus ea consequatur
          quaerat tempora enim modi quos deserunt sunt est eveniet, vero
          suscipit quidem.Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Aut, aliquam, facere maxime praesentium ex hic doloribus ea
          consequatur quaerat tempora enim modi quos deserunt sunt est eveniet,
          vero suscipit quidem.
        </p>
        <div>
          <Slider {...settings}>
            {products.map((product) => {
              const { productImage, productName } = product;
              return (
                <div>
                  <img src={productImage} alt={productName} />
                </div>
              );
            })}
          </Slider>
        </div>
        )
      </div>
    </>
  );
};

export default About;
