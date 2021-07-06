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


  return (
    <nav>
      <ul className="list">
        <div className="page-names">
        <Link style={navStyle} to="/">
          <div className="logo-text">
          <img className="logo" src="../images/logo.png" alt="Logo"></img><span>NPC4HIRE</span>
          </div>
        </Link>
        
        <Link style={navStyle} to="/">
          <li className="home">Home</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li className="shop">Shop</li>
        </Link>
        <Link style={navStyle} to="/cart">
          <li className="cart">
            <FontAwesomeIcon className="cart-icon" icon={faShoppingCart} /> 
            <div className="cart-number">{props.cartItemsQty}</div></li>
        </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
