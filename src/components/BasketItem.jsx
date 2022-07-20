import React from "react";

function BasketItem({ item, product }) {
  return (
    <div className="order-detail">
      <h3>{product.name}</h3> <p>x {item.amount}</p>
    </div>
  );
}

export default BasketItem;
