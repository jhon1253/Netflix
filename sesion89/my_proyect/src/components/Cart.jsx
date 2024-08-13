import React from "react";
import { useContext } from "react";
import { CartContext } from "../components/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div className="bg-red-600">
      <h2 className="text-center m-4">LIST PRODUCTS</h2>
      {cart.length === 0 ? (
        <p className="text-center">PRODUCT BASKET</p>
      ) : (
        <div>
          {cart.map((product, idx) => (
            <div
              key={idx}
              style={{
                border: "1px solid",
                background: "#f0f0f0",
                marginBottom: "10px",
                padding: "10px",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <p>Cantidad: {product.quantity}</p>
              <button onClick={() => removeFromCart(product)}>
                Eliminar del carrito
              </button>
            </div>
          ))}
          <button onClick={() => clearCart()}>Vaciar carrito</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
