import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  const { product } = props;
  return (
    <div className="card-container">
      <img alt={`${product.title}`} src={product.image} />
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>Price: {product.price}</p>
      {/* <p>{product.description}</p> */}
      <p>
        Rating: {product.rating.rate} ({product.rating.count})
      </p>
      <button>Update</button>
    </div>
  );
};
