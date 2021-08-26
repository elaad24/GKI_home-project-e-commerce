import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/shoppingCartSlice";

const RemoveBtn = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <button
      className="btn btn-danger"
      onClick={() => dispatch(removeItem(product))}
    >
      remove
    </button>
  );
};

export default RemoveBtn;
