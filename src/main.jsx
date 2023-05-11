import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UpdateCoffee from "./Pages/UpdateCoffee/UpdateCoffee.jsx";
import AddCoffee from "./Pages/AddCoffee/AddCoffee.jsx";
import Container from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
import CoffeeDetails from "./components/CoffeeDetails/CoffeeDetails";
import ErrorPage from "./Pages/404/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "update-coffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: "coffee/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Container />
    </RouterProvider>
  </React.StrictMode>
);
