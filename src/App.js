import "./App.css";
import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Carousels from "./components/Carousels";
import Items from "./components/Items";
import shoesData from "./data";

function App() {
  let [shoes, setShoes] = useState(shoesData);
  return (
    <div className="App">
      <Navigation />
      <Carousels />
      <div className="container">
        <div className="row">
          {shoes.map((shoe, i) => {
            return <Items shoes={shoes[i]} i={i} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
