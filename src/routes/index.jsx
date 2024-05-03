import { createBrowserRouter } from "react-router-dom";
import { BaseLayoout } from "../components/BaseLayoout";
import { HomePages } from "../pages/HomePages";
import { Products } from "../pages/Products";

export const router = createBrowserRouter(
  [
  {
    path: '/',
    element: <BaseLayoout />,
    children: [
      {
        path: '',
        element: <HomePages />,
      }, {
        path: 'products',
        element: <Products/>
      }
    ]
  }

])