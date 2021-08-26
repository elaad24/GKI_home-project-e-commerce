import React, { useEffect, useState } from "react";
import { getProductByID } from "../services/storeData";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonAddToCart from "./common/buttonAddToCart";
import Counter from "./common/Counter";
import { useSelector } from "react-redux";

const ProductPage = () => {
  useEffect(async () => {
    const { data } = await getProductByID(id);
    setProduct(data);
  }, []);

  //
  // describe the product itself
  let [product, setProduct] = useState("");
  // describe the amount in page
  let [amount, setAmount] = useState("");

  const url_string = window.location.href;
  const url = new URL(url_string);
  const id = url.searchParams.get("id");

  /* let item;

  const shoppingCart = useSelector((state) => state.shoppingCart.products);
  useEffect(async () => {
    if (shoppingCart.length != 0) {
      item = await shoppingCart.filter((prod) => prod.product.id == product.id);
      await setAmount(item[0].qty);
      if (item.length != 0) {
        console.log(item[0].qty);
        console.log("amount", amount);
      }
    }
  }, []); */

  let category = product.category;

  if (category == "men's clothing") {
    console.log(category == "men's clothing");
    category = "clothing";
  } else if (category == "women's clothing") {
    console.log(category == "women's clothing");
    category = "clothing";
  }

  return (
    <div className="">
      <div>
        <Link to={`/ProductsPage?category=${category}`}>
          <button className="btn">
            <FaArrowLeft /> <b> Back To {product.category}</b>
          </button>
        </Link>
      </div>
      <div className="container">
        <div className="d-flex  align-items-center justify-content-center marginTop-20vh gap-5">
          <div className="">
            <img src={product.image} alt="product image" height="450px" />
          </div>

          <div className="">
            <h2>
              <b>{product.title}</b>
            </h2>
            <h6>{product.category}</h6>

            <p>{product.description}</p>
            <h2>
              <b>Price: {product.price}$</b>
            </h2>
            <Counter parentCallback={setAmount} qty={amount} />
            <ButtonAddToCart product={product} qty={amount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
