import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import Items from "./components/Items";
import shoesData from "./data";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  let [shoes, setShoes] = useState(shoesData);
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
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
