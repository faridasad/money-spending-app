import React, { useContext } from "react";
import { MainContext } from "../App";
import Item from "./Item";

function Items() {
  const { products } = useContext(MainContext);

  return (
    <div className="item-container">
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
