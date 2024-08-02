import { useState } from 'react'
import ProductsList from './Components/ProductsList';
import Cart from './Components/Cart';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Cart/>
      <div>app</div>
      <ProductsList />
    </>
  );
}

export default App
