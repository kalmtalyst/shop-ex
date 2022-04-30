import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StockContext } from "../App";

const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: tomato;
  }
  color: teal;
  h4 {
    margin-top: 20px;
  }
`;
function Items({ shoes, i }) {
  let stockValue = useContext(StockContext);

  let num = i + 1;
  return (
    <div className="col-md-4">
      <StyledLink to={"/detail/" + i} className="item-link">
        <img
          src={`https://codingapple1.github.io/shop/shoes` + num + `.jpg`}
          width="100%"
          alt=""
        />
        <h4>{shoes.title}</h4>
        <p>{shoes.content}</p>
        <p>{shoes.price}</p>
        <p>{stockValue[i]}</p>
      </StyledLink>
    </div>
  );
}

export default Items;
