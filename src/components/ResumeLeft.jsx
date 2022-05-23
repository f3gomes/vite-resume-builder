import React, { useContext, useEffect } from "react";
import profile from "/assets/perfil.jpeg";
import cv from "/assets/cv2022.pdf";
import data from "../data/ResumeData.json";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Provider";

export default function ResumeLeft(props) {
  const { resumeState, setResumeState } = useContext(MyContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("resumeStorage"))) {
      setResumeState(JSON.parse(localStorage.getItem("resumeStorage")));
    } else {
      localStorage.setItem("resumeStorage", JSON.stringify(data));
      setResumeState(data);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (resumeState && JSON.parse(localStorage.getItem("resumeStorage"))) {
        localStorage.removeItem("resumeStorage");
        localStorage.setItem("resumeStorage", JSON.stringify(resumeState));
      }
    }, 2000);
  }, [resumeState]);

  return (
    <div className="resume__left">
      <section className="home" id="home">
        <div className="home__container section bd-grid">
          <div className="home__data bd-grid">
            <img src={profile} alt="profile image" className="home__img" />
            <h1 className="home__title">{resumeState.name}</h1>
            <h3 className="home__profession">{resumeState.title}</h3>

            <div>
              <a download="" href={cv} className="home__button-movil">
                Download
              </a>
            </div>

            {/* <button type="button" onClick={() => navigate("/builder")}>
              EDIT CV
            </button> */}
          </div>

          <div className="home__address bd-grid">
            <span className="home__information">
              <i className="bx bx-map home__icon"></i>
              {resumeState.address}
            </span>

            <span className="home__information">
              <i className="bx bx-envelope home__icon"></i>
              {resumeState.email}
            </span>

            <span className="home__information">
              <i className="bx bx-phone home__icon"></i>
              {resumeState.phone}
            </span>
          </div>
        </div>

        <i
          className={
            props.darkTheme
              ? "bx bx-sun change-theme"
              : "bx bx-moon change-theme"
          }
          title="Theme"
          id="theme-button"
          onClick={props.handleDarkTheme}
        ></i>

        <i
          className="bx bx-download generate-pdf"
          title="Generate PDF"
          id="resume-button"
          onClick={props.generateResume}
        ></i>
      </section>

      <section className="social section">
        <h2 className="section-title">SOCIAL</h2>

        <div className="social__container bd-grid">
          <a
            href={resumeState.linkedin}
            target="_blank"
            className="social__link social__icon"
          >
            <i className="bx bxl-linkedin-square"></i>Linkedin
          </a>

          <a
            href={resumeState.github}
            target="_blank"
            className="social__link social__icon"
          >
            <i className="bx bxl-github"></i>Github
          </a>

          <a
            href={resumeState.instagram}
            target="_blank"
            className="social__link social__icon"
          >
            <i className="bx bxl-instagram"></i>Instagram
          </a>
        </div>
      </section>

      <section className="profile section" id="profile">
        <h2 className="section-title">About</h2>

        <p className="profile__description">{resumeState.descrtiption}</p>
      </section>

      <section className="education section" id="education">
        <h2 className="section-title">Education</h2>

        <div className="education__container bd-grid">
          <div className="education__content">
            <div className="education__time">
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div className="education__data bd-grid">
              <h3 className="education__title">
                {resumeState.educationTitle1}
              </h3>

              <span className="education__studies">
                {resumeState.educationStudies1}
              </span>
              <span className="education__year">
                {resumeState.educationYear1}
              </span>
            </div>
          </div>

          <div className="education__content">
            <div className="education__time">
              <span className="education__rounder"></span>
              <span className="education__line"></span>
            </div>

            <div className="education__data bd-grid">
              <h3 className="education__title">
                {resumeState.educationTitle2}
              </h3>

              <span className="education__studies">
                {resumeState.educationStudies2}
              </span>
              <span className="education__year">
                {resumeState.educationYear2}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="skills section" id="skills">
        <h2 className="section-title">SKILLS</h2>

        <div className="skills__content bd-grid">
          <ul className="skills__data">
            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills1}</span>
            </li>

            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills2}</span>
            </li>

            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills3}</span>
            </li>
          </ul>

          <ul className="skills__data">
            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills4}</span>
            </li>

            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills5}</span>
            </li>

            <li className="skills__name">
              <span className="skills_circle">{resumeState.skills6}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
