import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

let initialState = [
  { id: 0, name: "coolest shoes ever", quan: 1 },
  { id: 1, name: "awesome shoes", quan: 2 },
  { id: 2, name: "sneakers with a red mark", quan: 3 },
];

function reducer(state = initialState, action) {
  if (action.type === "increase") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "decrease") {
    let copy = [...initialState];
    copy[0].quan--;
    return copy[0].quan >= 0 ? copy : state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
