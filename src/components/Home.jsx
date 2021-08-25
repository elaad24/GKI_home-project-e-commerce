import React, { useEffect, useState } from "react";
import Card from "./common/Card";
import { getAllProducts } from "../services/storeData";

const Home = () => {
  let [products, setProducts] = useState("");

  useEffect(async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  });

  let latestProdurts = [];
  for (let i of products) {
    if (i.id >= products.length - 4) {
      latestProdurts.push(i);
    }
  }
  return (
    <div>
      <div className="d-flex justify-content-center">
        <img
          className="homeImage"
          src="https://greatdrams.com/wp-content/uploads/2019/06/24139-big.png"
          alt=""
        />
      </div>

      <div>
        <h5 className="text-center ">
          <b>LATEST PRODUCTS</b>
        </h5>
        <div className="d-flex justify-content-center gap-4 mt-3">
          {latestProdurts.map((product) => (
            <Card
              category={product.category}
              image={product.image}
              price={product.price}
              title={product.title}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
