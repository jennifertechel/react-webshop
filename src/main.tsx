import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductPage from "./pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="order" element={<OrderConfirmation />} />
      <Route path="admin" element={<Admin />} />
      <Route path="edit" element={<Edit />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
