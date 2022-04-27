import React from "react";
import { useParams } from "react-router-dom";

function StockInfo(props) {
  let { id } = useParams();
  return (
    <div>
      <p>재고 : {props.stock[id]}</p>
    </div>
  );
}

export default StockInfo;
