import React, { useContext } from "react";
import ShopContext from "../../context/context";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductsList = () => {
  const value = useContext(ShopContext);
  const { products, addProductToCart, checkIfProductIsInTheCart } = value;

  return (
    <>
      <ul>
        <div className="product_container">
          {products.map(
            ({ productId, productName, productPrice, productImage }) => (
              <li key={productId} className="product">
                {/* <Link to={routes.single_product}>SingleProduct</Link> */}
                {/* <Link to="/products:/single">
                  {" "}
                  <img src={productImage} alt={productName} />
                </Link> */}

                <Link
                  to={{
                    pathname: `/products/${productName}`,
                    //Nie mylić ze stanem aplikacji/klasowym, TO JEST STAN LINKU ---> czyli to co link ze sobą przywiezie
                    state: {
                      productId: productId,
                      productName: productName,
                      productImage: productImage,
                      productPrice: productPrice,
                    },
                  }}
                >
                  <img src={productImage} alt={productName} />
                </Link>

                <p className="name">{productName}</p>
                <p> {productPrice} zł</p>
                <Button
                  onClick={() => {
                    checkIfProductIsInTheCart(productId);
                    addProductToCart(productId);
                  }}
                  variant="contained"
                  color="secondary"
                >
                  Add to cart
                </Button>
              </li>
            )
          )}
        </div>
      </ul>
    </>
  );
};
export default ProductsList;
