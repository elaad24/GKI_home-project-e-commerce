import React from "react";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./buttonAddToCart";
import Counter from "./Counter";
import { useSelector } from "react-redux";

const Card = ({ id, image, title, category, price, qty, parentCallback }) => {
  const shoppingCart = useSelector((state) => state.shoppingCart.products);

  let item;
  let amount = 0;

  if (shoppingCart.length != 0) {
    item = shoppingCart.filter((prod) => prod.product.id == id);
    if (item.length != 0) {
      amount = item[0].qty;
    }
  } else {
    amount = 0;
  }

  return (
    <div className="card mb-3 decoration-none" style={{ width: "18rem" }}>
      <Link to={`/ProductPage?id=${id}`}>
        <img
          className="card-img-top"
          src={image}
          alt="Item image cap"
          height="160"
        />
      </Link>

      <h6 className="card-title text-center title_text">
        <b>{title}</b>
      </h6>

      <div className="card-body text-center  ">
        <h5>{category}</h5>
        <p>{price} $</p>

        <ButtonAddToCart
          product={{ id, image, title, category, price }}
          qty={qty}
        />
      </div>
    </div>
  );
};

export default Card;
