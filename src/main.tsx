import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { EditFormStepTwo } from "./components/forms/EditFormTwo.tsx";
import { EditFormStepOne } from "./components/forms/EditFormOne.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditFormStepFour } from "./components/forms/EditFormFour.tsx";
import { EditFormStepFive } from "./components/forms/EditFormFive.tsx";
import { EditFormStepThree } from "./components/forms/EditFormThree.tsx";

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

  {
    path: "/edit-step-three",
    element: <EditFormStepThree />,
  },

  {
    path: "/edit-step-four",
    element: <EditFormStepFour />,
  },

  {
    path: "/edit-step-five",
    element: <EditFormStepFive />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
