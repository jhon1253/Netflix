import { useEffect, useState } from "react";
import Product from "../components/Product";
import { useFetch } from "../Hooks/useGetProducts";
import Header from "../components/Menu/Header";

export default function App() {
  const { data: electronics } = useFetch(
    "https://fakestoreapi.com/products/category/electronics"
  );

  const { data: jewelery } = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  const { data: mensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/men's%20clothing"
  );

  const { data: womensclothing } = useFetch(
    "https://fakestoreapi.com/products/category/women's%20clothing"
  );

  useEffect(() => {
    // Empty effect
  }, [electronics, jewelery, mensclothing, womensclothing]);

  return (
    <>
      <Header />
      <div className="search flex justify-center">
        <h1 className="text-white">SHOPPING</h1>
      </div>
      <div className="titulos" name="electronics">
        <h1 className="text-3xl text-white">Electronics</h1>
        <div className="product-container">
          {electronics &&
            electronics.map((product, index) => (
              <Product key={index} {...product} />
            ))}
        </div>
      </div>
      <div className="titulos1" name="jewelery">
        <h1 className="text-3xl text-white">Jewelery</h1>
        <div className="imagenes1">
          {jewelery.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="titulos2" name="mensclothing">
        <h1 className="text-3xl text-white">Men's Clothing</h1>
        <div className="imagenes2">
          {mensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
      <div className="titulos3" name="womensclothing">
        <h1 className="text-3xl text-white">Women's Clothing</h1>
        <div className="imagenes3">
          {womensclothing.map((product, index) => (
            <Product key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}
