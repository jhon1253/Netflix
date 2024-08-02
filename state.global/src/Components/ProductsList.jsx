import React from "react";
import { products } from "../products";

const ProductsList = () => {
  return (
    <div>
      {
        products.map((product) => {
            return (
            <div style={{border: '1px solid'} } key={product.id}>
                <img src={product.image} alt={product.title} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <button>AGREGAR AL CARRITO</button>
            </div>
            )
      })
      }
    </div>
  );
};

export default ProductsList;
