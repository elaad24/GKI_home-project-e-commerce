import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

/*!!! need to add to button function to add to cart  */

const Card = ({ image, title, category, price }) => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={image}
        alt="Item image cap"
        height="160"
      />

      <h6 className="card-title text-center title_text">
        <b>{title}</b>
      </h6>

      <div className="card-body text-center  ">
        <h5>{category}</h5>
        <p>{price} $</p>
        <button className="btn btn-warning ">
          <AiOutlineShoppingCart />
          {" ADD TO CART"}
        </button>
      </div>
    </div>
  );
};

export default Card;
