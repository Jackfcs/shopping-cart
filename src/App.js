import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CharDetail from "./components/CharDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import { characters as chars } from "./Characters";

function App() {
  const [cart, setCart] = useState([
    // {
    //   id: 5,
    //   qty: 1,
    //   name: "Caelynn Horineth",
    //   gender: "Female",
    //   race: "Elf",
    //   class: "Ranger",
    //   age: 371,
    //   height: `5'3''`,
    //   description: "Woman drawing her bow",
    //   Strength: "Very perceptive",
    //   Weakness: "Quick to anger",
    //   price: 9,
    //   img: "ranger.jpeg",
    // },
  ]);

  //const [cartTotal, setCartTotal] = useState(0);

  const deleteItem = (index) => {
    let newCart = [...cart];
    newCart[index].qty = 1;
    newCart.splice(index, 1);
    setCart(newCart);

    // setCartTotal(0)
    // setCartTotal(setTimeout(() => {
    //   calcCartTotal()
    // }, 1))
    //setCartTotal(0)
    //setCartTotal(calcCartTotal);
  };

  const addToCart = (object) => {
    if (cart.some((obj) => obj.id === object.id)) {
      let newArray = [...cart];
      object.qty += 1;
      setCart(newArray);
    } else {
      setCart((prevCart) => [...prevCart, object]);
    }

    //setCartTotal(calcCartTotal);

    //let newTotal = calcCartTotal()

    // setCartTotal( setTimeout(() => {
    //  calcCartTotal()
    // }, 10))

    //setCartTotal(newTotal)

    // setTimeout(() => {
    //   setCartTotal(calcCartTotal())
    // }, 10)

    //setCartTotal(calcCartTotal())

    // const cartItemsQty =   setTimeout(() => {
    //                       cart.reduce((acc, cur) => acc + cur.qty, 0)
    //                         }, 1)
    // console.log(cartItemsQty)
  };

  const cartItemsQty = cart.reduce(function (acc, curr) {
    return acc + curr.qty;
  }, 0);

  // const calcCartTotal = () => {
  //   let newTotal = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     newTotal = newTotal + cart[i].qty;
  //   }
  //   //console.log(newTotal)
  //   return newTotal;
  // };

  const increaseQty = (index) => {
    if (cart[index].qty >= 1) {
      let newCart = [...cart];
      newCart[index].qty = newCart[index].qty + 1;
      setCart(newCart);
      //setCartTotal(calcCartTotal)
    } else {
      return;
    }
  };

  const decreaseQty = (index) => {
    if (cart[index].qty >= 2) {
      let newCart = [...cart];
      newCart[index].qty = newCart[index].qty + -1;
      setCart(newCart);
      //setCartTotal(calcCartTotal)
    } else {
      return;
    }
  };

  return (
    <Router>
      <div className="App">
        <Nav
          cart={cart}
          cartItemsQty={cartItemsQty}
          //cartTotal={cartTotal}
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
