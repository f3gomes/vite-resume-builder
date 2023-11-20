import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditFormStepOne } from "./components/EditFormOne.tsx";
import ReactDOM from "react-dom/client";
import * as React from "react";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { EditFormStepTwo } from "./components/EditFormTwo.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit-step-one",
    element: (
      <ChakraProvider>
        <EditFormStepOne />
      </ChakraProvider>
    ),
  },

  {
    path: "/edit-step-two",
    element: (
      <ChakraProvider>
        <EditFormStepTwo />
      </ChakraProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
