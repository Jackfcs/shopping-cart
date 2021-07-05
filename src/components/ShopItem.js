import React from 'react';
import '../css/ShopItem.css';
import { Link } from "react-router-dom";


const ShopItem = (props) => {
    const char = props.char

    return (
      <div className="item-container">
          <div className='img-container'>
          <Link to={`/shop/${char.id}`}>
            <img 
                alt={char.description}
                src={`/images/${char.img}`}
                className='character-img'
            ></img></Link>
        </div>
        <div className="item-info">
            
            <div>Name: <Link to={`/shop/${char.id}`}>{char.name}</Link></div>
            <div>Class: {char.class}</div>
            <div>Price: {char.price} GP per day</div>
            <button className="add-to-cart" onClick={()=> props.addToCart(char)}>Add to Cart</button>
        </div>
      </div>
    );
  }
  
  export default ShopItem;