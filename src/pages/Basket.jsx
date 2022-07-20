import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../App";
import BasketItem from "../components/BasketItem";
import { moneyFormat } from "../utilities/MoneyFormat";

function Basket() {
  const { basket, products, total, setBasket } = useContext(MainContext);

  return (
    <div className="checkout-container">
      <h1 className="checkout-header">CHECKOUT</h1>
      <div className="checkout-wrapper">
        <div className="placeholders">
          <h3>name</h3>
          <p>count</p>
        </div>
        {basket.map((item) => {
          return (
            <BasketItem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          );
        })}
        <div className="total-cost">
          <p>Total: {moneyFormat(total)}</p>
          <Link to="/">
            <button
              className="button button-try-again"
              onClick={() => setBasket([])}
            >
              Try Again
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Basket;
