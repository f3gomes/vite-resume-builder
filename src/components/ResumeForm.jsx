import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputData from "../components/InputData";
import "../styles/form.css";
import BtnContainer from "./BtnContainer";

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

  const updateCV = (inputArr, arrIndex, field) => {
    setIsLoading(true);

    const updateArr = resumeState[arrIndex].map((item) => {
      if (Object.keys(inputArr).includes(item.key)) {
        item[field || "value"] = inputArr[item.key];
      }

      return item;
    });

    const updateState = resumeState.map((item, index) => {
      return index !== arrIndex ? item : updateArr;
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
          <BtnContainer
            update={() => updateCV(inputState, 0)}
            reset={handleResetData}
            cancel={() => navigate("/")}
          />

          <div className="form-container">
            {resumeState[1].map((item, index) => {
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
          <BtnContainer update={() => updateCV(inputState, 1)} />

          <div className="form-container">
            {resumeState[2].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.title}
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
          <BtnContainer update={() => updateCV(inputState, 2, "title")} />

          <div className="form-container">
            {resumeState[2].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.studies}
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
          <BtnContainer update={() => updateCV(inputState, 2, "studies")} />

          <div className="form-container">
            {resumeState[2].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.year}
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
          <BtnContainer update={() => updateCV(inputState, 2, "year")} />

          <div className="form-container">
            {resumeState[3].map((item, index) => {
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
          <BtnContainer update={() => updateCV(inputState, 3)} />

          <div className="form-container">
            {resumeState[4].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.title}
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
          <BtnContainer update={() => updateCV(inputState, 4, "title")} />

          <div className="form-container">
            {resumeState[4].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.yearCompany}
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
          <BtnContainer update={() => updateCV(inputState, 4, "yearCompany")} />

          <div className="form-container">
            {resumeState[4].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.description}
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
          <BtnContainer update={() => updateCV(inputState, 4, "description")} />

          <div className="form-container">
            {resumeState[5].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.title}
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
          <BtnContainer update={() => updateCV(inputState, 5, "title")} />

          <div className="form-container">
            {resumeState[5].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.name}
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
          <BtnContainer update={() => updateCV(inputState, 5, "name")} />

          <div className="form-container">
            {resumeState[5].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.phone}
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
          <BtnContainer update={() => updateCV(inputState, 5, "phone")} />

          <div className="form-container">
            {resumeState[5].map((item, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={item.key}
                  value={item.mail}
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
          <BtnContainer update={() => updateCV(inputState, 5, "mail")} />

          <div className="form-container">
            {resumeState[6].map((item, index) => {
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
          <BtnContainer update={() => updateCV(inputState, 6)} />

          <div className="form-container">
            {resumeState[7].map((item, index) => {
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
          <BtnContainer update={() => updateCV(inputState, 7)} />
        </div>
      )}
    </>
  );
}
