import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

function Cart(props) {
  return (
    <div>
      <Table responsive>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        {props.state.map((state, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{props.state[i].name}</td>
              <td>{props.state[i].quan}</td>
              <td>
                <button onClick={() => props.dispatch({ type: "increase" })}>
                  +
                </button>
                <button onClick={() => props.dispatch({ type: "decrease" })}>
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
    </div>
  );
}

// redux store 데이터 사용 방법
// state를 props화하는 함수
function cartItems(state) {
  return {
    state: state,
    // shoeName : state[0].name;
  };
}

export default connect(cartItems)(Cart);
// export default Cart;
