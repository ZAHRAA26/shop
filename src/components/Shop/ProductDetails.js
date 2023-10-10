import React from "react";
import { Link, json, useLoaderData } from "react-router-dom";
import classes from "./productDetails.module.css";
import { useEffect } from "react";
// import Products from "./Products";
const ProductDetails = () => {
  const data = useLoaderData();
  const product = data.product;
  const startDeleteHandler = () => {
    // return product && product.id;
  };
  return (
    <>
      <img src={product && product.images[0]} alt={product && product.title} />
      <h1>{product && product.title}</h1>
      <p>{product && product.description}</p>
      {/* <Link to={`${product.id}`}>Read More{product && product.id}</Link> */}
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </>
  );
};

export default ProductDetails;
export const loader = async ({ request, params }) => {
  const id = params.productId;
  const response = await fetch("https://dummyjson.com/products/" + id);
  console.log(`${response}`);
  if (!response.ok) {
    throw json(
      { message: "couldn't fetch data about this product" },
      { status: 500 }
    );
  } else return response;
};
