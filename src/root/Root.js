import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import { routes } from "../routes/routes";
import MainTemplate from "../templates/MainTemplate";
import ShopContext from "../context/context";
import { productsData } from "../localData/productsData.js";
import SingleProduct from "../pages/SingleProduct/SingleProduct";

const Root = () => {
  // const data = productsData;

  const [products, setProducts] = useState([...productsData]);
  const [cart, setCart] = useState([]);

  const addProductToCart = (productIdx) => {
    const newProduct = products.find(
      ({ productId }) => productId === productIdx
    );

    setCart([...new Set([...cart, newProduct])]);
    console.log(newProduct);
  };

  const removeProductFromCart = (productId) => {
    const filteredProduct = cart.filter((product) => {
      if (product.productId === productId) {
        product.productQuantity = 1;
      }
      return productId !== product.productId;
    });

    setCart([...filteredProduct]);
  };

  const checkIfProductIsInTheCart = (id) => {
    const mappedCart = cart.map((product) => {
      if (product.productId === id) {
        product.productQuantity += 1;
      }
      return product;
    });
    setCart([...mappedCart]);
  };

  const increaseQuantityofProductInCart = (id) => {
    const mappedCart = cart.map((product) => {
      if (product.productId === id) {
        product.productQuantity += 1;
      }
      return product;
    });
    setCart([...mappedCart]);
  };

  const decreaseQuantityofProductInCart = (id) => {
    const mappedCart = cart.map((product) => {
      if (product.productId === id) {
        product.productQuantity -= 1;
      }

      return product;
    });
    setCart([...mappedCart]);
  };

  return (
    <BrowserRouter>
      <ShopContext.Provider
        value={{
          addProductToCart,
          products,
          cart,
          removeProductFromCart,
          checkIfProductIsInTheCart,
          increaseQuantityofProductInCart,
          decreaseQuantityofProductInCart,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.contact} component={Contact} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.cart} component={Cart} />
            <Route path={routes.single_product} component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;

// poprawic input na button (nazwy)
