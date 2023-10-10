import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { useLoaderData } from "react-router-dom";
import classes from "./Products.module.css";

const Products = (props) => {
  // const dummyProducts = [
  //   {
  //     id: 1,
  //     title: "Book1",
  //     price: 6,
  //     description: "data about book one",
  //     quantity: 0,
  //   },
  //   {
  //     id: 2,
  //     title: "Book2",
  //     price: 7,
  //     description: "data about book two",
  //     quantity: 0,
  //   },
  //   {
  //     id: 3,
  //     title: "Book3",
  //     price: 8,
  //     description: "data about book three",
  //     quantity: 0,
  //   },
  // ];
  const data = useLoaderData();
  const products = data.products;

  return (
    <section classtitle={classes.products}>
      <h2>
        Buy your favorite products and show cart from{" "}
        <Link to="/cart">here</Link>
      </h2>
      <ul>
        {products.map((p) => {
          return (
            <ProductItem
              image={p.images[0]}
              key={p.id}
              id={p.id}
              title={p.title}
              price={p.price}
              quantity={p.stock}
              description={p.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
export const loader = async () => {
  const response = await fetch("https://dummyjson.com/products");
  console.log(`${response}`);
  if (!response.ok) {
    throw new response(
      JSON.stringify({ message: "there is error" }, { status: 500 })
    );
  } else return response;
};
