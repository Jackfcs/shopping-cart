import React from 'react';
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  
    return (
      <div className="window">
        <h3 className="title">
        <Link to={'/shop'}>View available henchmen</Link>
            
        </h3>
      </div>
    );
  }
  
  export default Home;