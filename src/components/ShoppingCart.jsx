import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Counter from "./common/Counter";
import ButtonUpdateInCart from "./common/buttonUpdateInCart ";
import RemoveBtn from "./common/RemoveBtn";
import { removeItem } from "../redux/slices/shoppingCartSlice";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart.products);
  let totalPrice = 0;
  for (let i of shoppingCart) {
    totalPrice += i.product.price * i.qty;
  }
  //
  // describe the product itself
  let [product, setProduct] = useState("");
  // describe the amount in page
  let [amountInPage, setAmountInPage] = useState(0);

  let item;
  let amount = 0;

  return (
    <div className="container d-flex flex-column justify-content-center my-5 text-center">
      <h1>
        <b>
          <span>Order</span> <span className="text-warning">Summary</span>
        </b>
      </h1>

      <div className="border">
        <div className="container">
          {shoppingCart.map((product) => (
            <div className="d-flex align-items-center justify-content-around my-5 gap-5">
              <div className="">
                <img
                  className="shoppingCartImage"
                  src={product.product.image}
                  alt="product image"
                />
              </div>

              <div className="shoppingCartTextBox">
                <div className="d-flex flex-row-reverse gap-3">
                  <RemoveBtn product={product} />
                  <h5>
                    <b>{product.product.title}</b>
                  </h5>
                </div>

                <h5>
                  <b>Price: {product.product.price}$</b>
                </h5>
                <Counter parentCallback={setAmountInPage} qty={product.qty} />
                <ButtonUpdateInCart
                  product={product.product}
                  qty={amountInPage}
                />
                <hr />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="d-flex justify-content-between gap-2">
          <div className=" d-flex gap-2">
            <div className=" text-warning">
              <h2>
                <b>TOTAL:</b>
              </h2>
            </div>
            <div className="">
              <h2>
                <b>{totalPrice}$</b>
              </h2>
            </div>
          </div>
          <div className="">
            <button className="btn btn-warning ">
              <b>COMPLETE ORDER</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
