import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  let history = useHistory();

  let clickedShoes = props.shoes.find(function (shoe) {
    return shoe.id == id;
  });
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={
                `https://codingapple1.github.io/shop/shoes` + `${id}` + `.jpg`
              }
              width="100%"
              alt=""
            />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{clickedShoes.title}</h4>
            <p>{clickedShoes.content}</p>
            <p>₩{clickedShoes.price}</p>

            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                // history.goBack();
                history.push("/");
              }}
            >
              뒤로가기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
