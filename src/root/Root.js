import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
// import Cart from "../pages/Cart/Cart";
// import Cart from "../components/Cart/Cart";
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  // const [counter, setCounter] = useState(0);

  // const increaseCounter = () => {
  //   setCounter(counter + 1);
  // };

  // componentDidMount ---> czyli wywolanie czegoś RAZ na samym początku w momencie kiedy komponent się montuje/renderuje na stronie
  // useEffect(() => {
  //   increaseCounter();
  // }, []);

  //componentDidUpdate --> czyli wywolanie czegoś ZA KAŻDYM RAZEM kiedy coś innego co monitorujemy się zmieni
  // useEffect(() => {
  //   increaseCounter();
  // }, [cart]);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleAlertOpen = () => {
    setIsAlertOpen(true);
  };

  useEffect(() => {
    calculateCartTotal();
  }, [cart]);

  const calculateCartTotal = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.productQuantity * product.productPrice;
    });
    setCartTotal(total);
  };

  const handleCartOpen = () => {
    setIsCartOpen(true);
  };
  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const showAndHideAlert = (time) => {
    handleAlertOpen();

    setTimeout(() => {
      handleAlertClose();
    }, time);
  };

  const addProductToCart = (productIdx) => {
    const newProduct = products.find(
      ({ productId }) => productId === productIdx
    );
    showAndHideAlert(3000);
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

  const clearAndCloseCart = () => {
    setCart([]);
    handleCartClose();
    showAndHideAlert(4000);
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
          isCartOpen,
          handleCartClose,
          handleCartOpen,
          cartTotal,
          clearAndCloseCart,
          isAlertOpen,
          handleAlertClose,
          handleAlertOpen,
        }}
      >
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} component={Home} />
            <Route path={routes.about} component={About} />
            <Route path={routes.contact} component={Contact} />
            <Route exact path={routes.products} component={Products} />
            <Route path={routes.single_product} component={SingleProduct} />
          </Switch>
        </MainTemplate>
      </ShopContext.Provider>
    </BrowserRouter>
  );
};

export default Root;

// poprawic input na button (nazwy)
