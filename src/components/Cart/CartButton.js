import { showCart } from "../../store/toggleCart.js";
import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
// import product from "../../store/product";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);
  return (
    <button className={classes.button} onClick={() => dispatch(showCart())}>
      <span>My Cart</span>
      <span className={classes.badge}>
        {globalState.product.numberOfProducts}
      </span>
    </button>
  );
};

export default CartButton;
