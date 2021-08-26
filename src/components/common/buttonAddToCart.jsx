import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { storeToLocalStorage } from "../../function";
import { addItem, removeItem } from "../../redux/slices/shoppingCartSlice";

const ButtonAddToCart = ({ product, qty }) => {
  const dispatch = useDispatch();
  if (qty == 0 || NaN) {
    qty++;
  }
  //function that delete the same product and insert the new one
  // and save the shoppinig cart from redux to local storage
  const addToShoppingCartRedux = ({ product, qty }) => {
    dispatch(removeItem({ product }));

    dispatch(addItem({ product, qty }));
  };
  const shoppingCart = useSelector((state) => state.shoppingCart.products);
  const update = async () => {
    await addToShoppingCartRedux({ product, qty });
    await storeToLocalStorage(shoppingCart);
  };
  return (
    <div className="btnAddToCartDiv">
      <button className="btn btn-warning " onClick={update}>
        <AiOutlineShoppingCart />
        <div>ADD TO CART</div>
      </button>
    </div>
  );
};

export default ButtonAddToCart;
