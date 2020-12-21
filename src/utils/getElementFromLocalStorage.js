export const getCartFromLocalStorage = () => {
  let localStorageCart;

  if (localStorage.getItem("cart")) {
    localStorageCart = JSON.parse(localStorage.getItem("cart"));
  } else {
    localStorageCart = [];
  }

  return localStorageCart;
};
