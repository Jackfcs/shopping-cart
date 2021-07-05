import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css"

const Nav = (props) => {
  const navStyle = {
    textDecoration: 'none',
    color: 'white'
  }

  // let cartTotal = 0

  

  // for (let i = 0; i < props.cart.length; i++){
  //       cartTotal += parseInt(props.cart[i].qty)
        
  //     }

  return (
    <nav>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <h3>Logo</h3>
        </Link>
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li>Cart ({props.cartItemsQty})</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
