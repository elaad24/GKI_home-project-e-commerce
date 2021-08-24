import React from "react";

const ProductPage = () => {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const category = url.searchParams.get("category");

  return <div>{category}</div>;
};

export default ProductPage;
