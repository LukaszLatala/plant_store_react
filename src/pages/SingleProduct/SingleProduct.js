import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../src/routes/routes";
import "./SingleProduct.css";
import Button from "@material-ui/core/Button";
const SingleProduct = (props) => {
  console.log(props);

  const {
    productName,
    productId,
    productImage,
    productPrice,
  } = props.location.state;
  return (
    <>
      <div className="returnb_btn_container">
        <Button className="return_btn" variant="contained" color="secondary">
          <Link className="return_link" to={routes.products}>
            Return to all products
          </Link>
        </Button>
      </div>

      {/*     
      <button>
        <Link className="link" to={routes.products}>
          Return to all products
        </Link>
      </button> */}
      <div className="box">
        <p className="single_product_name"> {productName}</p>
        <p> Produkt numer: {productId}</p>
        <p> Koszt: {productPrice}</p>

        <p style={{ color: "black", padding: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
          facere at. Quisquam, recusandae? Molestiae, sapiente. Officia quod
          assumenda voluptatum voluptas enim numquam iusto fugit omnis
          blanditiis. Exercitationem earum pariatur tempore. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam, facere at. Quisquam,
          recusandae? Molestiae, sapiente. Officia quod assumenda voluptatum
          voluptas enim numquam iusto fugit omnis blanditiis. Exercitationem
          earum pariatur tempore.
        </p>

        <img src={productImage} alt={productName} />
      </div>
    </>
  );
};
export default SingleProduct;
