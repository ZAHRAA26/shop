import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addToCart } from "../../store/product";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <Link to={`/products/${id}`}>show details</Link>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: id,
                  title: title,
                  price: price,
                  description,
                  quantity: 1,
                })
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
