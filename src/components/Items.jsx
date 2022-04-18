import React from "react";
// import { Row, Col } from "react-bootstrap";

function Items({ shoes, i }) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes` + (i + 1) + `.jpg`}
        width="100%"
        alt=""
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </div>
  );
}

export default Items;
