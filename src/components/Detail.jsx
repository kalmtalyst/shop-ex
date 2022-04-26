import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./detail.scss";

let Box = styled.div`
  padding: 20px;
`;
let Title = styled.h4`
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

let DetailInfo = styled.div`
  width: 300px;
  margin: 0 auto;
  h4 {
    border-top: 1px solid black;
    color: #443737;
  }
  p {
    padding: 10px;
    margin: 10px;
    border-bottom: 1px solid black;
    color: #ed5107;
  }
`;

let Button = styled.button`
  background-color: #ff4301;
  color: #ffffff;
  margin: 10px 10px 0 0;
`;

function Detail(props) {
  let [alert, setAlert] = useState(true);
  let [inputData, setInputData] = useState("");

  useEffect(() => {
    // mount시, update시 실행
    console.log("this component has been updated");

    let timer = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [alert]); // alert라는 state가 변경 될때만 실행
  let { id } = useParams();
  let history = useHistory();

  let clickedShoes = props.shoes.find(function (shoe) {
    return shoe.id == id;
  });

  let picNum = ++id;

  return (
    <div>
      <div className="container">
        <Box>
          <Title className="titleColor">Detail Page</Title>
        </Box>
        {alert === true ? (
          <div className="my-alert my-alert-red">
            <p>재고가 얼마 남지 않았습니다!</p>
          </div>
        ) : null}

        <div className="row">
          <div className="col-md-6">
            <img
              src={
                `https://codingapple1.github.io/shop/shoes` +
                `${picNum}` +
                `.jpg`
              }
              width="100%"
              alt=""
            />
          </div>
          <DetailInfo className="col-md-6 mt-4">
            <h4 className="pt-5">{clickedShoes.title}</h4>
            <p>{clickedShoes.content}</p>
            <p>₩{clickedShoes.price}</p>

            <Button className="btn btn-danger">주문하기</Button>
            <Button
              className="btn btn-danger"
              onClick={() => {
                // history.goBack();
                history.push("/");
              }}
            >
              뒤로가기
            </Button>
          </DetailInfo>
        </div>
      </div>
    </div>
  );
}

export default Detail;
