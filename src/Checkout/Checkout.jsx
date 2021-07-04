import React from "react";

import "./Checkout.css";

export default function Checkout() {
  return (
    <div className="checkout">
      <p className="checkout__heading">My Order</p>

      <div className="checkout__card">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1lYXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="checkout__cardImage"
        />
        <div className="checkout__cardDetails">
          <p className="checkout__cardDetailsName">Bulgarian Meat</p>
          <p className="checkout__cardDetailsPrice">UGX 20,000</p>
        </div>

        <span class="checkout__icon material-icons">delete_outline</span>
      </div>

      <div className="checkout__total">
        <p className="checkout__totalTitle">Total</p>
        <p className="checkout__totalNumber">UGX 20,000</p>
      </div>
      <div className="checkout__button">
      <button className="actionButton">CHECKOUT</button>

      </div>
    </div>
  );
}
