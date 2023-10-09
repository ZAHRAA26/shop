// import { useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/product";
import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
const CartItem = (props) => {
  const { title, quantity, total, price, id } = props;
  const dispatch = useDispatch();

  // const {} = useSelector((state) => state.cart);
  const decreaseHandler = () => {
    dispatch(removeFromCart(id));
  };
  const increaseHandler = () => {
    dispatch(addToCart({ id, price, title }));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
