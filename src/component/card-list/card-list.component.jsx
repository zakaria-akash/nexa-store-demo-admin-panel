import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => {
  const { products } = props;
  if (products == null) {
    return <h3>No Products To Show</h3>;
  }
  return (
    <div className="card-list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};
