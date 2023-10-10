import { NavLink, useNavigate } from "react-router-dom";
import CartButton from "../Cart/CartButton";
// import Products from "../Shop/Products";
import classes from "./MainNavigation.module.css";
const MainHeader = (props) => {
  // const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <h1>Zahra's Store</h1>
      <nav>
        <ul className={classes.link}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cart
            </NavLink>
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
