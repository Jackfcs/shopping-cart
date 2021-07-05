import React from "react";
import "../css/Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  const deleteItem = props.deleteItem;
  const increaseQty = props.increaseQty;
  const decreaseQty = props.decreaseQty;

  // const deleteItem = (index) => {
  //   setCart(
  //     cart.splice[index]
  //   )
  // }

  // const deleteItem = (index) => {
  //   let newCart = cart
  //   newCart.splice(index, 1)
  //   setCart(newCart)
  //   console.log(cart)
  // }

  const content = cart.map((item, index) => {
    const total = item.qty * item.price;
    let days;
    if (item.qty === 1) {
      days = "day";
    } else {
      days = "days";
    }

    if (cart.length === 0) {
      return <div>Your cart is empty</div>;
    } else {
      return (
        <div className="cart-item-container" key={item.id}>
          <img
            alt={item.description}
            src={`./images/${item.img}`}
            className="cart-character-img"
          ></img>
          <div className="cart-character-info-container">
            <div className="cart-character-info">
              <div>Name: {item.name}</div>
              <div>Class: {item.class}</div>
              <div>Price: {item.price} GP per day</div>
              <div>
                <button onClick={() => decreaseQty(index)}>-</button> {item.qty}{" "}
                {days} <button onClick={() => increaseQty(index)}>+</button>
              </div>
              <div>Total: {total} GP</div>
              <button onClick={() => deleteItem(index)} className="delete-item">
                Delete Item
              </button>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div className="cart-container">{content}</div>;
};

export default Cart;
