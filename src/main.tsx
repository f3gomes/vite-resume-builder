import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditForm } from "./components/EditForm.tsx";
import ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit",
    element: (
      <ChakraProvider>
        <EditForm />
      </ChakraProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
