import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/slices/shoppingCartSlice";

const ButtonUpdateInCart = ({ product, qty }) => {
  const dispatch = useDispatch();
  if (qty == 0) {
    qty++;
  }
  //function that delete the same product and insert the new one
  const addToShoppingCartRedux = ({ product, qty }) => {
    dispatch(removeItem({ product }));

    dispatch(addItem({ product, qty }));
  };
  return (
    <div>
      <button
        className="btn btn-warning "
        onClick={() => addToShoppingCartRedux({ product, qty })}
      >
        <AiOutlineShoppingCart />
        {" UPDATE"}
      </button>
    </div>
  );
};

export default ButtonUpdateInCart;
