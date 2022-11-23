import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Provider";
import InputData from "../components/InputData";
import "../styles/resumeForm.css";
import { useEffect } from "react";

export default function ResumeForm() {
  const { resumeState, setResumeState } = useContext(MyContext);

  const [isLoading, setIsLoading] = useState(false);
  const [inputState, setInputState] = useState({
    name: "",
    title: "",
    address: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    instagram: "",
    facebook: "",
    description: "",

    educationTitle1: "",
    educationStudies1: "",
    educationYear1: "",

    educationTitle2: "",
    educationStudies2: "",
    educationYear2: "",

    educationTitle3: "",
    educationStudies3: "",
    educationYear3: "",

    skills1: "",
    skills2: "",
    skills3: "",
    skills4: "",
    skills5: "",
    skills6: "",

    jobTitle1: "",
    jobYearCompany1: "",
    jobDesc1: "",

    jobTitle2: "",
    jobYearCompany2: "",
    jobDesc2: "",

    jobTitle3: "",
    jobYearCompany3: "",
    jobDesc3: "",

    jobTitle4: "",
    jobYearCompany4: "",
    jobDesc4: "",

    refTitle1: "",
    refName1: "",
    refPhone1: "",
    refEmail1: "",

    refTitle2: "",
    refName2: "",
    refPhone2: "",
    refEmail2: "",

    lang1: "",
    lang2: "",

    hob1: "",
    hob2: "",
    hob3: "",
    hob4: "",
  });

  const navigate = useNavigate();

  const updateState = (key, value) => {
    setResumeState((state) => ({ ...state, [key]: value }));
  };

  const handleResetData = () => {
    if (confirm("Tem certeza?")) {
      setIsLoading(true);
      localStorage.removeItem("resumeStorage");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const updateCV = () => {
    setIsLoading(true);

    updateState(
      setResumeState(() => ({
        name: inputState.name,
        title: inputState.title,
        address: inputState.address,
        email: inputState.email,
        phone: inputState.phone,
        linkedin: inputState.linkedin,
        github: inputState.github,
        instagram: inputState.instagram,
        facebook: inputState.facebook,
        description: inputState.description,

        educationTitle1: inputState.educationTitle1,
        educationStudies1: inputState.educationStudies1,
        educationYear1: inputState.educationYear1,

        educationTitle2: inputState.educationTitle2,
        educationStudies2: inputState.educationStudies2,
        educationYear2: inputState.educationYear2,

        educationTitle3: inputState.educationTitle3,
        educationStudies3: inputState.educationStudies3,
        educationYear3: inputState.educationYear3,

        skills1: inputState.skills1,
        skills2: inputState.skills2,
        skills3: inputState.skills3,
        skills4: inputState.skills4,
        skills5: inputState.skills5,
        skills6: inputState.skills6,

        jobTitle1: inputState.jobTitle1,
        jobYearCompany1: inputState.jobYearCompany1,
        jobDesc1: inputState.jobDesc1,

        jobTitle2: inputState.jobTitle2,
        jobYearCompany2: inputState.jobYearCompany2,
        jobDesc2: inputState.jobDesc2,

        jobTitle3: inputState.jobTitle3,
        jobYearCompany3: inputState.jobYearCompany3,
        jobDesc3: inputState.jobDesc3,

        jobTitle4: inputState.jobTitle4,
        jobYearCompany4: inputState.jobYearCompany4,
        jobDesc4: inputState.jobDesc4,

        refTitle1: inputState.refTitle1,
        refName1: inputState.refName1,
        refPhone1: inputState.refPhone1,
        refEmail1: inputState.refEmail1,

        refTitle2: inputState.refTitle2,
        refName2: inputState.refName2,
        refPhone2: inputState.refPhone2,
        refEmail2: inputState.refEmail2,

        lang1: inputState.lang1,
        lang2: inputState.lang2,

        hob1: inputState.hob1,
        hob2: inputState.hob2,
        hob3: inputState.hob3,
        hob4: inputState.hob4,
      }))
    );

    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  useEffect(() => {
    localStorage.setItem("resumeStorage", JSON.stringify(resumeState));
  }, [resumeState]);

  return (
    <>
      {isLoading ? (
        <div className="loader" />
      ) : (
        <div>
          <div className="form-container">
            {Object.keys(inputState).map((key, index) => {
              return (
                <InputData
                  key={index}
                  placeholder={key}
                  onChange={(event) =>
                    setInputState((state) => ({
                      ...state,
                      [key]: event.target.value,
                    }))
                  }
                />
              );
            })}
          </div>

          <div className={"btn-container"}>
            <button type="button" className="input-form" onClick={updateCV}>
              Update CV
            </button>

            <button
              type="button"
              className="input-form"
              onClick={handleResetData}
            >
              RESET DATA
            </button>

            <button
              type="button"
              className="input-form"
              onClick={() => navigate("/")}
            >
              CANCEL
            </button>
          </div>
        </div>
      )}
    </>
  );
}
