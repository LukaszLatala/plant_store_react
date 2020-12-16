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
import { alertContentAndTypes } from "../utils/alertContentAndTypes";
// import { Category } from "@material-ui/icons";

// git commit --amend --reset-author

const Root = () => {
  // const data = productsData;
  const [initialProducts] = useState([...productsData]);
  const [products, setProducts] = useState([...productsData]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [alertSpecification, setAlertSpecification] = useState({});

  const [searchProductNameInput, setSearchProductNameInput] = useState("");
  const [filterProductPriceInput, setFilterProductPriceInput] = useState(0);
  const [productMaxPrice, setProductMaxPrice] = useState(0);
  const [filterByFreeDelivery, setFilterByFreeDelivery] = useState(false);
  const [filterByCategory, setFilterByCategory] = useState("");

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

  const handleSearchProductNameInputChange = (e) => {
    setSearchProductNameInput(e.target.value);
  };

  const handleProductPriceInputChange = (e) => {
    setFilterProductPriceInput(e.target.value);
  };

  const handleFreeDeliveryChange = (e) => {
    setFilterByFreeDelivery(e.target.checked);
  };

  const handleFilterByCategory = (e) => {
    setFilterByCategory(e.target.value);
  };

  const productsCatgories = [
    ...new Set(products.map((product) => product.productCategory)),
  ];

  console.log(productsCatgories);

  const filterProducts = () => {
    let tempProducts = [...initialProducts];

    if (searchProductNameInput.length > 0) {
      tempProducts = tempProducts.filter((product) => {
        return (
          searchProductNameInput.toLowerCase() ===
          product.productName
            .toLowerCase()
            .slice(0, searchProductNameInput.length)
        );
      });
    }

    const tempProductPrice = parseInt(filterProductPriceInput);

    tempProducts = tempProducts.filter((product) => {
      return product.productPrice <= tempProductPrice;
    });

    if (filterByFreeDelivery === true) {
      tempProducts = tempProducts.filter((product) => {
        return product.freeDelivery === filterByFreeDelivery;
      });
    }

    if (filterByCategory === "plant") {
      tempProducts = tempProducts.filter((product) => {
        return product.productCategory === filterByCategory;
      });
    }

    if (filterByCategory === "flowerpot") {
      tempProducts = tempProducts.filter((product) => {
        return product.productCategory === filterByCategory;
      });
    }
    // if (filterByCategory === "flowerpot") {
    //   tempProducts = tempProducts.filter((product) => {
    //     return product.productCategory === filterByCategory;
    //   });
    // }

    setProducts([...tempProducts]);
  };

  useEffect(() => {
    filterProducts();
  }, [
    searchProductNameInput,
    filterProductPriceInput,
    filterByFreeDelivery,
    filterByCategory,
  ]);

  const geProductMaxPrice = () => {
    const maxPrice = Math.max(
      ...initialProducts.map((product) => product.productPrice)
    );
    setProductMaxPrice(maxPrice);
    setFilterProductPriceInput(maxPrice);
  };

  useEffect(() => {
    geProductMaxPrice();
  }, []);

  // const productMinPrice = Math.min(
  //   ...initialProducts.map((product) => product.productPrice)
  // );
  // console.log(productMinPrice);

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const showAndHideAlert = (time, content, type) => {
    const alert = {
      type,
      content,
    };
    setAlertSpecification(alert);

    setIsAlertOpen(true);

    setTimeout(() => {
      handleAlertClose();
    }, time);
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

  const addProductToCart = (productIdx) => {
    const newProduct = products.find(
      ({ productId }) => productId === productIdx
    );
    showAndHideAlert(
      3000,
      alertContentAndTypes.content.addProduct,
      alertContentAndTypes.types.add
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

    showAndHideAlert(
      4000,
      alertContentAndTypes.content.deleteProduct,
      alertContentAndTypes.types.delete
    );

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
    showAndHideAlert(
      4000,
      alertContentAndTypes.content.paymentSucceed,
      "success"
    );
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
          alertSpecification,
          searchProductNameInput,
          handleSearchProductNameInputChange,
          handleProductPriceInputChange,
          filterProductPriceInput,
          // productMinPrice,
          productMaxPrice,
          handleFreeDeliveryChange,
          filterByFreeDelivery,

          productsCatgories,
          handleFilterByCategory,
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

// zaimplementować te alerty w projekcie minishop
