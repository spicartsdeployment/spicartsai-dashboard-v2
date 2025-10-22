import React from "react";
import { useParams } from "react-router-dom";

const ItemDetailPage = ({ items, title }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <p>Details about {item.name} go here.</p>
    </div>
  );
};

export default ItemDetailPage;