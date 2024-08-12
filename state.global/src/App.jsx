import React from 'react';
import ProductList from './Components/ProductsList'
import CartIcon from './Components/CartIcons/CartIcon';

function App() {
  return (
    <div>
      <CartIcon /> {/* Agrega el ícono del carrito */}
      <div>Cart</div>
      <ProductList />
    </div>
  );
}

export default App;
