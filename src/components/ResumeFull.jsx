import React, { useEffect } from "react";
import profile from "/assets/profile.jpeg";
import { data } from "../data/eData.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ResumeLeft(props) {
  const [resumeState, setResumeState] = useState(data);
  const [image, setImage] = useState(profile);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("profileImage")) {
      setImage(localStorage.getItem("profileImage"));
    }

    if (!localStorage.getItem("resumeStorage")) {
      setResumeState(data);
      localStorage.setItem("resumeStorage", JSON.stringify(data));
    } else {
      const dataStorage = JSON.parse(localStorage.getItem("resumeStorage"));
      setResumeState(dataStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profileImage", image);
  }, [image]);

  return (
    <>
      <div className="resume__left">
        <section className="home" id="home">
          <div className="home__container section bd-grid">
            <div className="home__data bd-grid">
              <input
                className="input-file"
                type={"file"}
                onChange={(event) => {
                  setImage(URL.createObjectURL(event.target.files[0]));
                }}
              />
              <img src={image} alt="profile" className="home__img" />
              <h1 className="home__title">{resumeState[0][0].value}</h1>
              <h3 className="home__profession">{resumeState[0][1].value}</h3>

              <div>
                {/* <a download="" href={cv} className="home__button-movil">
                Download
              </a> */}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => navigate("/builder")}
                  className="edit-cv"
                >
                  EDIT
                </button>
              </div>
            </div>

            <div className="home__address bd-grid">
              <span className="home__information">
                <i className="bx bx-map home__icon"></i>
                {resumeState[0][2].value} <br />
                {resumeState[0][3].value}
              </span>

              <span className="home__information">
                <i className="bx bx-envelope home__icon"></i>
                {resumeState[0][4].value}
              </span>

              <span className="home__information">
                <i className="bx bx-phone home__icon"></i>
                {resumeState[0][5].value}
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
          <h2 className="section-title">CONTATO</h2>

          <div className="social__container bd-grid">
            {resumeState[1].map((item) => (
              <a
                key={item.id}
                href={item.value}
                target="_blank"
                className="social__link social__icon"
              >
                <i className={item.icon}></i>
                {item.key}
              </a>
            ))}
          </div>
        </section>

        <section className="profile section" id="profile">
          <h2 className="section-title">Sobre</h2>

          <p className="profile__description">{resumeState[0][6].value}</p>
        </section>

        <section className="education section" id="education">
          <h2 className="section-title">Educação</h2>

          <div className="education__container bd-grid">
            {resumeState[2].map((item) => (
              <div className="education__content" key={item.id}>
                <div className="education__time">
                  <span className="education__rounder"></span>
                  <span className="education__line"></span>
                </div>

                <div className="education__data bd-grid">
                  <h3 className="education__title">{item.title}</h3>

                  <span className="education__studies">{item.studies}</span>
                  <span className="education__year">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">HABILIDADES</h2>

          <div className="skills__content bd-grid">
            <ul className="skills__data">
              {resumeState[3].map((item, index) => (
                <span key={item.id}>
                  {index < 3 && (
                    <li className="skills__name">
                      <span className="skills_circle">{item.value}</span>
                    </li>
                  )}
                </span>
              ))}
            </ul>

            <ul className="skills__data">
              {resumeState[3].map((item, index) => (
                <span key={item.id}>
                  {index > 2 && (
                    <li className="skills__name">
                      <span className="skills_circle">{item.value}</span>
                    </li>
                  )}
                </span>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <div className="resume__right">
        <section className="experience section" id="experience">
          <h2 className="section-title">Experiência</h2>

          <div className="experience__container bd-grid">
            {resumeState[4].map((item) => (
              <div className="experience__content" key={item.id}>
                <div className="experience__time">
                  <span className="experience__rounder"></span>
                  <span className="experience__line"></span>
                </div>

                <div className="experience__data bd-grid">
                  <h3 className="experience__title">{item.title}</h3>
                  <span className="experience__company">
                    {item.yearCompany}
                  </span>
                  <p className="experience__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section className="certificate section" id="certificates">
          <h2 className="section-title">Certificados</h2>

          <div className="certificate__container bd-grid">
            {resumeState[8].map((item) => (
              <div className="certificate__content" key={item.id}>
                <h3 className="certificate__title">{item.title}</h3>
                <p className="certificate__description">{item.description}</p>
              </div>
            ))}
          </div>n
        </section> */}

        <section className="references section" id="references">
          <h2 className="section-title">Referências</h2>

          <div className="reference__container bd-grid">
            {resumeState[5].map((item) => (
              <div className="references__content bd-grid" key={item.id}>
                <span className="references__subtitle">{item.title}</span>
                <h3 className="references__title">{item.name}</h3>
                <ul className="references__contact">
                  <li>Phone: {item.phone}</li>
                  <li>Email: {item.mail}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="languages section">
          <h2 className="section-title">Idiomas</h2>

          <div className="languages__container">
            <ul className="languages__content bd-grid">
              {resumeState[6].map((item) => (
                <li className="languages__name" key={item.id}>
                  <span className="languages__circle"></span> {item.value}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="interests section">
          <h2 className="section-title">Passatempos</h2>

          <div className="interests__container bd-grid">
            {resumeState[7].map((item) => (
              <div className="interests__content" key={item.id}>
                <i className={item.icon}></i>
                <span className="interests__name">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
