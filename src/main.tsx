import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { EditFormStepTwo } from "./components/EditFormTwo.tsx";
import { EditFormStepOne } from "./components/EditFormOne.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import * as React from "react";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit-step-one",
    element: <EditFormStepOne />,
  },

  {
    path: "/edit-step-two",
    element: <EditFormStepTwo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
