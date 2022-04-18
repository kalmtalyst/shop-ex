import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

function Items({ shoes }) {
  return (
    <div>
      <Row>
        {shoes.map((shoe, i) => {
          return (
            <div className="col-md-4">
              <img src={`${shoes[i].img}`} width="100%" alt="" />
              <h4>{shoes[i].title}</h4>
              <p>{shoes[i].content}</p>
              <p>{shoes[i].price}</p>
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default Items;
