import React from 'react';
import '../css/ShopItem.css'


const ShopItem = (props) => {
    const char = props.char

    return (
      <div className="item-container">
          <div className='img-container'>
            <img 
                alt={char.description}
                src={`./images/${char.img}`}
                className='character-img'
            ></img>
        </div>
        <div className="item-info">
            <div>Name: {char.name}</div>
            <div>Class: {char.class}</div>
            <div>Price: {char.price} GP per day</div>
            <button onClick={()=> props.onClick(char)}>Add to Cart</button>
        </div>
      </div>
    );
  }
  
  export default ShopItem;