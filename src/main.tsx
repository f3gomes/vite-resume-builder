import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditForm from "./components/EditForm.tsx";
import ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit",
    element: <EditForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
