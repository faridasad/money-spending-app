import React, { useContext } from "react";
import { MainContext } from "../App";
import Item from "./Item";
import ToggleTheme from "./ToggleTheme";

function Items() {
  const { products } = useContext(MainContext);

  return (
    <div className="item-container">
      <ToggleTheme />
      {products.map((item) => {
        return (
          <Item
            img={item.img}
            product={item}
            key={item.id}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        );
      })}
    </div>
  );
}

export default Items;
