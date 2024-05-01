import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./CommonUI/AppLayout";
import Home from "./CommonUI/Home";
import Menu, { loader as productsLoader } from "./Features/menu/Menu";
import Error from "./CommonUI/Error";
import Cart from "./Features/cart/Cart";
import CreateOrder, {
  action as newOrderAction,
} from "./Features/order/CreateOrder";
import Order from "./Features/order/Order";

const BrowserRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: productsLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: newOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={BrowserRouter} />;
}

export default App;
