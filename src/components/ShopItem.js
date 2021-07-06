import React from 'react';
import '../css/ShopItem.css';
import { Link } from "react-router-dom";


const ShopItem = (props) => {
    const char = props.char

    

    return (
      <div className="item-container">
          <div className='img-container'>
          <Link  to={`/shop/${char.id}`}>
            <img 
                alt={char.description}
                src={char.img}
                className='character-img'
            ></img></Link>
        </div>
        <div className="item-info-container">
            <div className="item-info">
                
                <div><span style={{fontWeight: "bold"}}>Name:</span> <Link className="name-link" to={`/shop/${char.id}`}>{char.name}</Link></div>
                <div><span style={{fontWeight: "bold"}}>Class:</span> {char.class}</div>
                <div><span style={{fontWeight: "bold"}}>Price:</span> {char.price} GP per day</div>
                <button className="add-to-cart" onClick={()=> props.addToCart(char)}>Add to Cart</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default ShopItem;