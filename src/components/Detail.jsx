import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

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
  let { id } = useParams();
  let history = useHistory();

  let clickedShoes = props.shoes.find(function (shoe) {
    return shoe.id == id;
  });
  return (
    <div>
      <div className="container">
        <Box>
          <Title color={"#7D0633"}>Detail Page</Title>
        </Box>
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
