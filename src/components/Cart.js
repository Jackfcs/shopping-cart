import React from 'react';
import '../css/Cart.css';

const Cart = (props) => {
  console.log(props)

  const cart = props.cart

  const content = cart.map((item) => {
    return <div key={item.id}>
            <img 
                alt={item.description}
                src={`./images/${item.img}`}
                className='cart-character-img'
            ></img>
            <div>Name: {item.name}</div>
            <div>Class: {item.class}</div>
            <div>Price: {item.price} GP per day</div>
    </div>
  })

    return (
    
      <div>
        Cart Page
        {content}
      </div>
    );
  }
  
  export default Cart;