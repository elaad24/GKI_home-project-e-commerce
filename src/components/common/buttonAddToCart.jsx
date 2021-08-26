import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/shoppingCartSlice";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ButtonAddToCart = ({ product, qty }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        className="btn btn-warning "
        onClick={() => dispatch(addItem({ product, qty }))}
      >
        <AiOutlineShoppingCart />
        {" ADD TO CART"}
      </button>
    </div>
  );
};

export default ButtonAddToCart;
