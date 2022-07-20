import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../App";
import { moneyFormat } from "../utilities/MoneyFormat.js";

function Header() {
  const { basket, total, setBasket, money } = useContext(MainContext);

  return (
    <nav className="header">
      <h1 className="header-text">
        {total - money !== 0
          ? total > 0
            ? `You have ${moneyFormat(money - total)} to crush!`
            : `You have ${moneyFormat(money)} to crush!`
          : "Pulsuz insanı ancaq anası sevər"}
      </h1>
      <div className="header-buttons">
        <button className="reset-button" onClick={() => setBasket([])}>
          Reset
        </button>
        <Link to={basket.length === 0 ? "" : "/checkout"}>
          <button className="checkout-button">Checkout</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
