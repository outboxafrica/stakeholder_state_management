import React, { useState } from "react";
import { useProductValue } from "../../contexts/ProductContext";

import "./MeatItem.css";

export default function MeatItem({ image, name, price }) {
  const [{}, dispatch] = useProductValue();
  const [isShown, setIsShown] = useState(false);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        name: name,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="meat" onMouseEnter={()=> setIsShown(true)} onMouseLeave={()=> setIsShown(false)}>
      <img className="meat__image" src={image} alt={name} />
      <div className="meat__detail">
        <p className="meat__detailTitle">{name}</p>
        <div className="meat__detailOption">
          <span className="material-icons meat__detailOptionIcon">
            thumb_up
          </span>
          <span className="material-icons meat__detailOptionIcon">
            shopping_cart
          </span>
        </div>
      </div>
      {isShown ? (
        <button className="actionButton" onClick={addToBasket}>ADD TO CART</button>
      ):
       <p className="meat__price">{price}</p>
      }
    </div>
  );
}
