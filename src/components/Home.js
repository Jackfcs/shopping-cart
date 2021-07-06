import React from 'react';
import "../css/Home.css";
import { Link } from "react-router-dom";

function Home() {
  
    return (
      <div className="window">
        <h3 >
        <Link to={'/shop'}><button className="title">View available henchmen in the shop</button></Link>
            
        </h3>
      </div>
    );
  }
  
  export default Home;