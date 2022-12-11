import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputData from "../components/InputData";
import "../styles/form.css";

export default function ResumeForm() {
  const [resumeState] = useState(
    JSON.parse(localStorage.getItem("resumeStorage"))
  );

  const [isLoading, setIsLoading] = useState(false);
  const [inputState, setInputState] = useState([]);

  const navigate = useNavigate();

  const handleResetData = () => {
    if (confirm("Tem certeza?")) {
      setIsLoading(true);
      localStorage.removeItem("resumeStorage");
      localStorage.removeItem("profileImage");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const updateCV = (inputArr, arrIndex) => {
    setIsLoading(true);

    const updateArr = resumeState[arrIndex].map((item) => {
      if (Object.keys(inputArr).includes(item.key)) {
        item.value = inputArr[item.key];
      }

      return item;
    });

    const updateState = resumeState.map((item, index) => {
      return index > 0 ? item : updateArr;
    });

    localStorage.removeItem("resumeStorage");

    setTimeout(() => {
      localStorage.setItem("resumeStorage", JSON.stringify(updateState));
    }, 500);

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      {isLoading ? (
        <div className="loader" />
      ) : (
        <div>
          <div className={"btn-container"}>
            <button
              type="button"
              className="input-form"
              onClick={() => updateCV(inputState, 0)}
            >
              SAVE
            </button>

            <button
              type="button"
              className="input-form"
              onClick={handleResetData}
            >
              RESET
            </button>

            <button
              type="button"
              className="input-form"
              onClick={() => navigate("/")}
            >
              CANCEL
            </button>
          </div>
          <div className="form-container">
            {resumeState[0].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.value}
                  onChange={(event) =>
                    setInputState((state) => ({
                      ...state,
                      [item.key]: event.target.value,
                    }))
                  }
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
