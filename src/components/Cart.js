import React from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cart = props.cart;
  const deleteItem = props.deleteItem;
  const increaseQty = props.increaseQty;
  const decreaseQty = props.decreaseQty;


  
  let itemTotal = 0;

  cart.forEach(function (obj) {
    itemTotal += obj.qty;
  });

  let cartTotalCost = 0;

  cart.forEach(function (obj) {
    cartTotalCost += obj.qty * obj.price;
  });

  let content;

  if (cart.length === 0) {
    content = (
      <div className="empty-cart">
        Your cart is empty
        <p className="add-npc">
          Add NPCs in the <Link to={"/shop"}>store</Link>
        </p>
      </div>
    );
  } else {
    content = cart.map((item, index) => {
      const total = item.qty * item.price;
      let days;
      if (item.qty === 1) {
        days = "day";
      } else {
        days = "days";
      }

      return (
        <div className="cart-item-container" key={item.id}>
          <img
            alt={item.description}
            src={`./images/${item.img}`}
            className="cart-character-img"
          ></img>
          <div className="cart-character-info-container">
            <div className="cart-character-info">
              <div><span style={{fontWeight: "bold"}}>Name:</span> {item.name}</div>
              <div><span style={{fontWeight: "bold"}}>Class:</span> {item.class}</div>
              <div><span style={{fontWeight: "bold"}}>Price:</span> {item.price} GP per day</div>
              <div className="amend-days">
                <div style={{fontWeight: "bold"}}>Duration:</div> 
                <div className="button-width">
                  <button className="amend-qty-btn" onClick={() => decreaseQty(index)}>-</button> 
                  <div className="num-of-days">{item.qty}{" "}{days}</div> 
                  <button className="amend-qty-btn" onClick={() => increaseQty(index)}>+</button>
                </div>
              </div>
              <div><span style={{fontWeight: "bold"}}>Total:</span> {total} GP</div>
              <button onClick={() => deleteItem(index)} className="delete-item">
                Delete Item
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header your-cart">Your Cart</div>
        {content}
      </div>
      <div className="order-summary-container">
        <div className="cart-header order-summary">Order Summary</div>
        <div className="num-of-items">Number of Items: {itemTotal}</div>
        <div className="total-cost">Total: {cartTotalCost} Gold Pieces</div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
