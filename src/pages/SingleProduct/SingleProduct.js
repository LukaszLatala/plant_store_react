import React from "react";

import "./SingleProduct.css";

const SingleProduct = (props) => {
  console.log(props);

  const {
    productName,
    productId,
    productImage,
    productPrice,
  } = props.location.state;
  return (
    <div className="box">
      <p className="name"> {productName}</p>
      <p> Produkt numer: {productId}</p>
      <p> Koszt {productPrice}</p>

      <p style={{ color: "black" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
        at. Quisquam, recusandae? Molestiae, sapiente. Officia quod assumenda
        voluptatum voluptas enim numquam iusto fugit omnis blanditiis.
        Exercitationem earum pariatur tempore. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Veniam, facere at. Quisquam, recusandae?
        Molestiae, sapiente. Officia quod assumenda voluptatum voluptas enim
        numquam iusto fugit omnis blanditiis. Exercitationem earum pariatur
        tempore.
      </p>

      <img src={productImage} alt={productName} />
    </div>
  );
};
export default SingleProduct;
