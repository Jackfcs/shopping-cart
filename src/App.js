import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import {characters as chars} from './Characters'

function App() {

  
  const [cart, setCart] = useState([
    {
      id: 5,
      qty: 1,
      name: 'Caelynn Horineth',
      gender: 'Female',
      race: 'Elf',
      class: 'Ranger',
      age: 371,
      height: `5'3''`,
      description: 'Woman drawing her bow',
      Strength: 'Very perceptive',
      Weakness: 'Quick to anger',
      price: 9,
      img: 'ranger.jpeg'
  }
  ])

  

  const addToCart = (object) => {

    if (cart.some((obj) => obj.id === object.id)){
      let newArray = [...cart]
          object.qty +=1
          setCart(newArray)
    } else {
      setCart((prevCart) => [...prevCart, object])
    }
  
  };

  return (
    <Router>
      <div className="App">
        <Nav cart={cart} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route 
              exact path="/shop"
              render={() => <Shop chars={chars}
                                  onClick={(object) => addToCart(object)}
                   />}
            />
            <Route 
              render={() => <Cart cart={cart}

                    />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
