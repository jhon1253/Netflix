import React from 'react';
import ProductList from './Components/ProductsList'
import CartIcon from './Components/CartIcons/CartIcon'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div>
      <CartIcon /> {/* Agrega el ícono del carrito */}
      <div>app</div>
      <ProductList />
    </div>
  );
}

export default App;
