import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { EditFormStepTwo } from "./components/forms/EditFormTwo.tsx";
import { EditFormStepOne } from "./components/forms/EditFormOne.tsx";
import { EditFormStepFour } from "./components/forms/EditFormFour.tsx";
import { EditFormStepFive } from "./components/forms/EditFormFive.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EditFormStepThree } from "./components/forms/EditFormThree.tsx";
import App from "./App.tsx";

import "./index.css";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit-step-one",
    element: (
      <ChakraProvider>
        <EditFormStepOne />,
      </ChakraProvider>
    ),
  },
  {
    path: "/edit-step-two",
    element: (
      <ChakraProvider>
        <EditFormStepTwo />,
      </ChakraProvider>
    ),
  },
  {
    path: "/edit-step-three",
    element: (
      <ChakraProvider>
        <EditFormStepThree />,
      </ChakraProvider>
    ),
  },
  {
    path: "/edit-step-four",
    element: (
      <ChakraProvider>
        <EditFormStepFour />,
      </ChakraProvider>
    ),
  },
  {
    path: "/edit-step-five",
    element: (
      <ChakraProvider>
        <EditFormStepFive />,
      </ChakraProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
