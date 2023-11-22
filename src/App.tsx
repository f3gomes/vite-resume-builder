import { useState } from "react";
import Home from "./components/Home";
import { ModalEmail } from "./components/ModalEmail";

export default function App() {
  const [email] = useState(localStorage.getItem("rb_email"));

  return <>{!email ? <ModalEmail /> : <Home />}</>;
}
