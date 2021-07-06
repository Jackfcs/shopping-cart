import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CharDetail from "./components/CharDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { characters as chars } from "./Characters";
import paladin from './images/paladin.jpeg';

function App() {
  const [cart, setCart] = useState([]);

  

  const deleteItem = (index) => {
    let newCart = [...cart];
    newCart[index].qty = 1;
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const addToCart = (object) => {
    if (cart.some((obj) => obj.id === object.id)) {
      let newArray = [...cart];
      object.qty += 1;
      setCart(newArray);
    } else {
      setCart((prevCart) => [...prevCart, object]);
    }
  };

  const cartItemsQty = cart.reduce(function (acc, curr) {
    return acc + curr.qty;
  }, 0);


  const increaseQty = (index) => {
    if (cart[index].qty >= 1) {
      let newCart = [...cart];
      newCart[index].qty = newCart[index].qty + 1;
      setCart(newCart);
    } else {
      return;
    }
  };

  const decreaseQty = (index) => {
    if (cart[index].qty >= 2) {
      let newCart = [...cart];
      newCart[index].qty = newCart[index].qty + -1;
      setCart(newCart);
    } else {
      return;
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav
          className="nav"
          cart={cart}
          cartItemsQty={cartItemsQty}
        />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/shop"
              render={() => (
                <Shop chars={chars} addToCart={(object) => addToCart(object)} />
              )}
            />
            <Route
              exact
              path="/cart"
              render={() => (
                <Cart
                  cart={cart}
                  increaseQty={(index) => increaseQty(index)}
                  decreaseQty={(index) => decreaseQty(index)}
                  deleteItem={(index) => deleteItem(index)}
                />
              )}
            />
            <Route
              exact
              path="/shop/:id"
              render={(props) => <CharDetail chars={chars} {...props} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
