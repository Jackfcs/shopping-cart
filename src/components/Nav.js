import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


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
      <ul className="list">
        <div className="page-names">
        <Link style={navStyle} to="/">
          <img className="logo" src="/images/full-logo.png" alt="Logo"></img>
        </Link>
        
        <Link style={navStyle} to="/">
          <li className="home">Home</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li className="shop">Shop</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li className="cart"><FontAwesomeIcon className="cart-icon" icon={faShoppingCart} /> <div className="cart-number">{props.cartItemsQty}</div></li>
        </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
