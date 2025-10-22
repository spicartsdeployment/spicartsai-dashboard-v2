import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Details</h2>
      <p>You are viewing details for Product {productId}</p>
    </div>
  );
};

export default ProductDetails;
