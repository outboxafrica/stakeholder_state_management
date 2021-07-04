import React from "react";

import MeatItem from "./MeatItem/MeatItem";
import meatList from "./meat_list";

import "./MeatCategory.css";

export default function MeatCategory() {
  
  const meat = meatList.map((item, key) => (
    <MeatItem
      key={item.id}
      image={item.image}
      name={item.name}
      price={item.price}
    />
  ));

  return <div className="meat__category">{meat}</div>;
}
