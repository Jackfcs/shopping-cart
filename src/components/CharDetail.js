import React from 'react';

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
              <div>Name: {char.name}</div>
              <div>Class: {char.class}</div>
              <div>Price: {char.price} GP per day</div>
              <div>Age: {char.age}</div>
              <div>Gender: {char.gender}</div>
              <div>Height: {char.height}</div>
              <div>Strength: {char.strength}</div>
              <div>Weakness: {char.weakness}</div>
              
          </div>
        </div>
      </div>
    );
  }
  
  export default CharDetail;