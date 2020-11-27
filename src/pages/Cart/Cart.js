// import React, { useContext } from "react";
// import ShopContext from "../../context/context";
// import "./Cart.css";
// import Button from "@material-ui/core/Button";

// const Cart = () => {
//   const value = useContext(ShopContext);
//   return (
//     <>
//       <h1>This is your cart ({value.cart.length}) </h1>
//       <ul>
//         <div className="car_container">
//           {value.cart.map(
//             ({ productId, productName, productPrice, productImage }) => (
//               <li key={productId} className="product">
//                 <img src={productImage} alt={productName} />
//                 <p className="name">{productName}</p>
//                 <p> {productPrice} zł</p>
//                 {/* <button>add to cart</button> */}
//                 {/* <Example /> */}
//                 {/* <button
//                   onClick={() => {
//                     value.removeProductFromCart(productId);
//                   }}
//                 >
//                   Remove from cart
//                 </button> */}

//                 <Button
//                   onClick={() => {
//                     value.removeProductFromCart(productId);
//                   }}
//                   variant="contained"
//                   color="secondary"
//                 >
//                   Remove from cart
//                 </Button>
//               </li>
//             )
//           )}
//         </div>
//       </ul>
//     </>
//   );
// };

// export default Cart;
