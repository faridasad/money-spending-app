import React, { useContext } from "react";
import { MainContext } from "../App";
import { moneyFormat } from "../utilities/MoneyFormat.js";

function Item({ product, id, name, price, img }) {
  const { basket, setBasket, total, money, isDark } = useContext(MainContext);

  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);

    checkBasket.amount -= 1;
    if (checkBasket.amount === 0) {
      setBasket([...basket.filter((item) => item.id !== product.id)]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    }
  };

  return (
    <div className={isDark ? "card dark item" : "card"}>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-body">
        <div className="details">
          <p className="name">{name}</p>
          <p className="price">{moneyFormat(price)}</p>
        </div>
        <div className="buttons">
          <button
            disabled={!basketItem}
            className={
              !basketItem ? "button decrease disabled" : "button decrease"
            }
            onClick={removeBasket}
          >
            Sell
          </button>
          <p className="amount">{(basketItem && basketItem.amount) || 0}</p>
          <button
            disabled={total + product.price > money}
            className="button increase"
            onClick={addBasket}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
