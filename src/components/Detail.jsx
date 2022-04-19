import React from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let history = useHistory();

  let clickedShoes = props.shoes.find(function (a) {
    console.log(a.id);
    console.log(id);

    return a.id === 0;
  });
  console.log(clickedShoes);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`https://codingapple1.github.io/shop/shoes1.jpg`}
              width="100%"
              alt=""
            />
          </div>
          <div className="col-md-6 mt-4">
            {/* <h4 className="pt-5">{shoes[id].title}</h4>
            <p>{shoes[id].content}</p>
            <p>{shoes[id].price}</p> */}
            <h4 className="pt-5">{clickedShoes.title}</h4>
            <p>{clickedShoes.content}</p>
            <p>₩{clickedShoes.price}</p>

            <button className="btn btn-danger">주문하기</button>
            <button
              className="btn btn-danger"
              onClick={() => {
                history.goBack();
                // history.push('/');
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
