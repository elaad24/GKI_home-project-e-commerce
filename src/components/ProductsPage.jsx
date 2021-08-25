import React, { useEffect, useState } from "react";
import Card from "./common/Card";
import { getAllProducts } from "../services/storeData";

const Home = () => {
  let [products, setProducts] = useState("");

  useEffect(async () => {
    const { data } = await getAllProducts();
    setProducts(data);
  }, []);
  const url_string = window.location.href;
  const url = new URL(url_string);
  const category = url.searchParams.get("category");

  let ProductByCategory = [];

  for (let i of products) {
    if (
      category == "clothing" ||
      "men%27s%20clothing" ||
      "women%27s%20clothing"
    ) {
      if (i.category == "men's clothing") {
        ProductByCategory.push(i);
      } else if (i.category == "women's clothing") {
        ProductByCategory.push(i);
      }
    } else {
      if (i.category == category) {
        ProductByCategory.push(i);
      }
    }
  }

  return (
    <div>
      <div className=" container d-flex justify-content-center gap-4 flex-wrap ">
        {ProductByCategory.map((product) => (
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
  );
};

export default Home;

/* 



*/
