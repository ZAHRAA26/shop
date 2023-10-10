import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { loader as productsLoader } from "./components/Shop/Products";
import ProductDetails, {
  loader as productDetailsLoader,
} from "./components/Shop/ProductDetails";
import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import cart from './store/toggleCart';
import Error from "./components/Error/Error";
function App() {
  const globalState = useSelector((state) => state);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "products",
          children: [
            { index: true, element: <Products />, loader: productsLoader },
            {
              path: ":productId",
              loader: productDetailsLoader,
              element: <ProductDetails />,
            },
          ],
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
