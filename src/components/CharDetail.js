import React from 'react';
import { Link } from "react-router-dom";

import '../css/CharDetail.css';

const CharDetail = (props) => {

    const charIndex = props.match.params.id
    const chars = props.chars
    const char = chars[charIndex - 1]

    return (
      <div className="details-item-container">
          <div className='img-container'>
            <img alt={char.description}
                src={`/images/${char.img}`}                
                className='details-character-img'
            ></img>
        </div>
        <div className="text-container">
          <div className="details-item-info">
              <div><span style={{fontWeight: "bold"}}>Name:</span> {char.name}</div>
              <div><span style={{fontWeight: "bold"}}>Class:</span> {char.class}</div>
              <div><span style={{fontWeight: "bold"}}>Price:</span> {char.price} GP per day</div>
              <div><span style={{fontWeight: "bold"}}>Age:</span> {char.age}</div>
              <div><span style={{fontWeight: "bold"}}>Gender:</span> {char.gender}</div>
              <div><span style={{fontWeight: "bold"}}>Height:</span> {char.height}</div>
              <div><span style={{fontWeight: "bold"}}>Strength:</span> {char.strength}</div>
              <div><span style={{fontWeight: "bold"}}>Weakness:</span> {char.weakness}</div>
              <Link to={'/shop'}><button className="back-button">Back to shop</button></Link>
          </div>
        </div>
      </div>
      
    );
  }
  
  export default CharDetail;