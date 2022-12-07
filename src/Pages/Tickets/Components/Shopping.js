import React from 'react';
import Product from './Products';

export default function Shopping(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {products.map((products) => (
          <Product key={products.id} product={products} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}