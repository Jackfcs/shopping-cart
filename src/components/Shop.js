import React from 'react';
import ShopItem from "./ShopItem";
import '../css/Shop.css';



const Shop = (props) => {
    const chars = props.chars

    const content = chars.map((char, index) => {
        return <div key={char.id} className="item">
                         <ShopItem char={chars[index]}
                         addToCart={(object) => props.addToCart(object)} 
                         key={char.id}
               />
               </div>
    })
    

    return (
      <div className="items-container">
        {content}
      </div>
    );
  }
  
  export default Shop;