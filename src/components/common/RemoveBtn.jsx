import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeToLocalStorage } from "../../function";
import { removeItem } from "../../redux/slices/shoppingCartSlice";

const RemoveBtn = ({ product }) => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart.products);

  // function that remove from redux and update the local storge
  const remove = async () => {
    await dispatch(removeItem(product));
    await storeToLocalStorage(shoppingCart);
  };

  return (
    <button className="btn btn-danger removeBtn" onClick={remove}>
      remove
    </button>
  );
};

export default RemoveBtn;
