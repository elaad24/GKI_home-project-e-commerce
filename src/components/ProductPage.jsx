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
  let [amountInPage, setAmountInPage] = useState(0);
  const url_string = window.location.href;
  const url = new URL(url_string);
  const id = url.searchParams.get("id");

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
          <div>
            <img
              className="productPageImg"
              src={product.image}
              alt="product image"
            />
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
            <Counter parentCallback={setAmountInPage} qty={amount} />
            <ButtonAddToCart product={product} qty={amountInPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
