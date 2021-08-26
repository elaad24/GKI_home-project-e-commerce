import React, { useState } from "react";

const Counter = ({ parentCallback, qty }) => {
  const [amount, setAmount] = useState(Number(qty));

  return (
    <div className="">
      <h5 className="text-center ">Quantity</h5>
      <div className="d-flex m-1 justify-content-between ">
        <button
          className="btn btn-danger"
          onClick={() => {
            amount <= 1 ? setAmount(amount) : setAmount(amount - 1);
            amount <= 1 ? parentCallback(amount) : parentCallback(amount - 1);
          }}
        >
          -
        </button>
        <span id="amount">{amount}</span>
        <button
          className="btn btn-success"
          onClick={() => {
            setAmount(Number(amount) + Number(1));
            parentCallback(Number(amount) + Number(1));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
