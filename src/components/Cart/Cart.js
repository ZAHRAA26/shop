import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((state) => state.product.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items &&
          items.map((i) => {
            return (
              <CartItem
                key={i.id}
                id={i.id}
                title={i.title}
                quantity={i.quantity}
                price={i.price}
                total={i.totalPrice}
              />
            );
          })}
      </ul>
    </Card>
  );
};

export default Cart;
