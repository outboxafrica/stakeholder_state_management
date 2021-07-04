import React from "react";

import NavigationLink from "./NavigationLink";
import NavigationIcon from "./NavigationIcon";

import "./Navigation.css";

function Navigation() {
  return (
    <nav>
      <div className="nav__logo">SteakHolder</div>
      <div className="nav__option">
        <NavigationLink navLinkName="Home" link="/" />
        <NavigationLink navLinkName="About" />
        <NavigationLink navLinkName="Offers" />
      </div>
      <div className="nav__icon">
        <NavigationIcon icon="search" />
        <div className="cart">
        <span className="cartNumber">0</span>
        <NavigationIcon icon="shopping_cart" />
        </div>
        
      </div>
      <NavigationLink navLinkName="Sign In" link="signIn" />
    </nav>
  );
}

export default Navigation;
