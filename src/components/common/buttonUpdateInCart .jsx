import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { storeToLocalStorage } from "../../function";
import { addItem, removeItem } from "../../redux/slices/shoppingCartSlice";

// there i error when update items number of counter turn to NaN

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
  const shoppingCart = useSelector((state) => state.shoppingCart.products);

  const update = async () => {
    await addToShoppingCartRedux({ product, qty });
    await storeToLocalStorage(shoppingCart);
  };

  return (
    <div>
      <button className="btn btn-warning " onClick={update}>
        <AiOutlineShoppingCart />
        {" UPDATE"}
      </button>
    </div>
  );
};

export default ButtonUpdateInCart;
