import React, { useContext } from "react";
import ShopContext from "../../context/context";
import Slider from "react-slick";
import "./About.css";
import Footer from "../../components/Footer/Footer";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const About = () => {
  const value = useContext(ShopContext);
  const { products } = value;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
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
            {/* <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/abau/3638-monstera-xl-wieksza-lola-flora.JPG"
                alt="gg"
              />
            </div>
            <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/abac/3598-philodendron-verrucosum-lola-flora-2.jpg"
                alt="Philodendron verrucosum"
              />
            </div>
            <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/aba1/3516-philodendron-tortum-lola-flora.jpg"
                alt="Philodendron Tortum"
              />
            </div>
            <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/abai/3496-aglaonema-butterfly-manis-lola-flora.jpg"
                alt="Aglaonema butterfly manis"
              />
            </div>
            <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/abau/3510-clusia-green-magic-lola-flora.jpg"
                alt="Clusia rosea 'Green Magic'®"
              />
            </div>
            <div>
              <img
                src="https://cdn.shoplo.com/2473/products/th640/abas/3508-chamaedorea-metallica-lola-flora.jpg"
                alt="Chamaedorea metallica"
              />
            </div> */}
          </Slider>
          <Footer />
        </div>
        )
      </div>
    </>
  );
};

export default About;
