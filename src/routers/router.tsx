import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import Management from "../pages/Management/Management";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/products",
        element: <Product />,
      },
      {
        path: "/product-management",
        element: <Management />,
      },
    ],
  },
]);

export default router;
