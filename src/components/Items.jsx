import React from "react";
import { Row, Col } from "react-bootstrap";

function Items(props) {
  return (
    <div>
      <Row>
        <div className="col-md-4">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
            alt=""
          />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://codingapple1.github.io/shop/shoes2.jpg"
            width="100%"
            alt=""
          />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://codingapple1.github.io/shop/shoes3.jpg"
            width="100%"
            alt=""
          />
          <h4>상품명</h4>
          <p>상품정보</p>
        </div>
      </Row>
      {/* <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row> */}
    </div>
  );
}

export default Items;
