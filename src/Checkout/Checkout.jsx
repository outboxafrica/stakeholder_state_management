import React from "react";
import { useProductValue } from "../contexts/ProductContext";
import NumberFormat from "react-number-format";
import { getCartTotal } from "../contexts/reducer";
import CheckoutItem from "./CheckoutItem";

import "./Checkout.css";

export default function Checkout() {
  const [{ cart }] = useProductValue();
  return (
    <div className="checkout">
      <p className="checkout__heading">My Order has {cart?.length} items</p>

      {cart?.length === 0 ? (
        <p className="checkout__totalTitle">You have no items</p>
      ) : (
        <div>
          {cart.map((item) => {
            return (
              <CheckoutItem
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          })}
        </div>
      )}

      <div className="checkout__total">
        <p className="checkout__totalTitle">Total</p>
        <p className="checkout__totalNumber">
          <NumberFormat
            thousandSeparator={true}
            prefix={"UGX"}
            displayType={"text"}
            value={getCartTotal(cart)}
          />
        </p>
      </div>
      <div className="checkout__button">
        <button className="actionButton">CHECKOUT</button>
      </div>
    </div>
  );
}
