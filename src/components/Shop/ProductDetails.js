import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import classes from "./productDetails.module.css";
import { useEffect } from "react";
// import Products from "./Products";
const ProductDetails = () => {
  const data = useLoaderData();
  const product = data.product;
  // useEffect(console.log(`${data}`), []);
  const startDeleteHandler = () => {
    return product.id;
  };
  return (
    <>
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <Link to={`Products\${product.id}`}>Read More</Link>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </>
  );
};

export default ProductDetails;
export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products/id");
  console.log(`${response.data}`);
  if (!response.ok) {
    throw new response(
      JSON.stringify({ message: "there is error" }, { status: 500 })
    );
  } else return response;
};
