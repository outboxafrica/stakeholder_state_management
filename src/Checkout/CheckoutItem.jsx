import React from 'react'
import { useProductValue } from '../contexts/ProductContext';

import "./Checkout.css";


export default function CheckoutItem({name, image, price}) {

    const [{cart}, dispatch] = useProductValue();

    console.log(cart);
    const removeFromCart = () =>{
        dispatch({
            type: "REMOVE_FROM_CART",
            id: name
        })
    }

    return (
        <div className="checkout__card">
        <img
          src={image}
          alt={name}
          className="checkout__cardImage"
        />
        <div className="checkout__cardDetails">
          <p className="checkout__cardDetailsName">{name}</p>
          <p className="checkout__cardDetailsPrice">{price}</p>
        </div>

        <span onClick={removeFromCart} class="checkout__icon material-icons">delete_outline</span>
      </div>
    )
}
