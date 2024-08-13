import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../Cart";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  console.log(cart);

  // Contar la cantidad total de productos en el carrito
  const totalItems = cart?.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="relative inline-block">
      <i
        className="bi bi-cart4  text-white text-3xl  cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      ></i>

      {totalItems > 0 && (
        <span className="absolute top-0 right-0  text-white rounded-full  text-sm font-bold">
          {totalItems}
        </span>
      )}
      {showCart && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 shadow-lg p-4 z-50 w-80 max-h-[400px] overflow-y-auto">
          <Cart />
        </div>
      )}
    </div>
  );
};

export default CartIcon;
