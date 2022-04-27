import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import Items from "./components/Items";
import shoesData from "./data";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Detail from "./components/Detail";

function App() {
  let [shoes, setShoes] = useState(shoesData);
  let [stock, setStock] = useState([10, 11, 12]);

  const getMore = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then((response) => {
        setShoes([...shoes, ...response.data]);
        // setShoes(shoes.concat(response.data));
      })
      .catch(alert("ERROR"));
  };
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path={"/"}>
          <Carousels />
          <div className="container">
            <div className="row">
              {shoes.map((shoe, i) => {
                return <Items shoes={shoes[i]} i={i} key={i} />;
              })}
            </div>
          </div>
          <button className="btn btn-primary" onClick={getMore}>
            + more
          </button>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} stock={stock} setStock={setStock} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
