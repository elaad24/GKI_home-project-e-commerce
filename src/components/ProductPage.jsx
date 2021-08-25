import React, { useEffect, useState } from "react";
import { getProductByID } from "../services/storeData";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
// need to add function to btn to add to cart
const ProductPage = () => {
  let [product, setProduct] = useState("");

  const url_string = window.location.href;
  const url = new URL(url_string);
  const id = url.searchParams.get("id");

  useEffect(async () => {
    const { data } = await getProductByID(id);
    setProduct(data);
  }, []);

  return (
    <div className="">
      <div>
        <Link to={`/ProductsPage?category=${product.category}`}>
          <button className="btn">
            <FaArrowLeft /> <b> Back To {product.category}</b>
          </button>
        </Link>
      </div>
      <div className="">
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
            <button className="btn btn-warning ">
              <b>ADD TO CART</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
