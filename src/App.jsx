import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import ResumeForm from "./components/ResumeForm";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={< ResumeForm/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
