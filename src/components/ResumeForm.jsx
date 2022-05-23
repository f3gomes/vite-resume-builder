import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Provider";
import "./ResumeForm.css";

export default function ResumeForm() {
  const { resumeState, setResumeState } = useContext(MyContext);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const updateState = (key, value) => {
    setResumeState((state) => ({ ...state, [key]: value }));
  };

  const updateCV = () => {
    updateState("name", name);
    updateState("title", title);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <div className="form-container">
        <input
          type="text"
          placeholder="name"
          className="input-form"
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="title"
          className="input-form"
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="button" className="input-form" onClick={updateCV}>
          Update CV
        </button>
      </div>
    </>
  );
}
