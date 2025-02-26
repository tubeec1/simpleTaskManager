import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import Task from "./pages/Task.jsx";
import { RouterProvider } from "react-router";

let routerProvider = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/task",
        element: <Task />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerProvider} />
  </StrictMode>
);
