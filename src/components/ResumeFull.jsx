import React, { useEffect } from "react";
import profile from "/assets/profile.jpeg";
import { data } from "../data/FelipeData.js";
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
                  setImageClass("img-container");
                }}
              />
              <img src={image} alt="profile" className="home__img" />
              <h1 className="home__title">{resumeState[0].value}</h1>
              <h3 className="home__profession">{resumeState[1].value}</h3>

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
                {resumeState[2].value}
              </span>

              <span className="home__information">
                <i className="bx bx-envelope home__icon"></i>
                {resumeState[3].value}
              </span>

              <span className="home__information">
                <i className="bx bx-phone home__icon"></i>
                {resumeState[4].value}
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
            <a
              href={resumeState[5].value}
              target="_blank"
              className="social__link social__icon"
            >
              <i className="bx bxl-linkedin-square"></i>Linkedin
            </a>

            <a
              href={resumeState[6].value}
              target="_blank"
              className="social__link social__icon"
            >
              <i className="bx bxl-github"></i>Github
            </a>

            <a
              href={resumeState[7].value}
              target="_blank"
              className="social__link social__icon"
            >
              <i className="bx bxl-instagram"></i>Instagram
            </a>
          </div>
        </section>

        <section className="profile section" id="profile">
          <h2 className="section-title">Sobre</h2>

          <p className="profile__description">{resumeState[9].value}</p>
        </section>

        <section className="education section" id="education">
          <h2 className="section-title">Educação</h2>

          <div className="education__container bd-grid">
            <div className="education__content">
              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div className="education__data bd-grid">
                <h3 className="education__title">{resumeState[10].value}</h3>

                <span className="education__studies">
                  {resumeState[11].value}
                </span>
                <span className="education__year">{resumeState[12].value}</span>
              </div>
            </div>

            <div className="education__content">
              <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
              </div>

              <div className="education__data bd-grid">
                <h3 className="education__title">{resumeState[13].value}</h3>

                <span className="education__studies">
                  {resumeState[14].value}
                </span>
                <span className="education__year">{resumeState[15].value}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">HABILIDADES</h2>

          <div className="skills__content bd-grid">
            <ul className="skills__data">
              <li className="skills__name">
                <span className="skills_circle">{resumeState[22].value}</span>
              </li>

              <li className="skills__name">
                <span className="skills_circle">{resumeState[23].value}</span>
              </li>

              <li className="skills__name">
                <span className="skills_circle">{resumeState[24].value}</span>
              </li>
            </ul>

            <ul className="skills__data">
              <li className="skills__name">
                <span className="skills_circle">{resumeState[25].value}</span>
              </li>

              <li className="skills__name">
                <span className="skills_circle">{resumeState[26].value}</span>
              </li>

              <li className="skills__name">
                <span className="skills_circle">{resumeState[27].value}</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="resume__right">
        <section className="experience section" id="experience">
          <h2 className="section-title">Experiência</h2>

          <div className="experience__container bd-grid">
            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__data bd-grid">
                <h3 className="experience__title">{resumeState[28].value}</h3>
                <span className="experience__company">
                  {resumeState[29].value}
                </span>
                <p className="experience__description">
                  {resumeState[30].value}
                </p>
              </div>
            </div>

            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__data bd-grid">
                <h3 className="experience__title">{resumeState[31].value}</h3>
                <span className="experience__company">
                  {resumeState[32].value}
                </span>
                <p className="experience__description">
                  {resumeState[33].value}
                </p>
              </div>
            </div>

            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__data bd-grid">
                <h3 className="experience__title">{resumeState[34].value}</h3>
                <span className="experience__company">
                  {resumeState[35].value}
                </span>
                <p className="experience__description">
                  {resumeState[36].value}
                </p>
              </div>
            </div>

            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__data bd-grid">
                <h3 className="experience__title">{resumeState[37].value}</h3>
                <span className="experience__company">
                  {resumeState[38].value}
                </span>
                <p className="experience__description">
                  {resumeState[39].value}
                </p>
              </div>
            </div>

            <div className="experience__content">
              <div className="experience__time">
                <span className="experience__rounder"></span>
                <span className="experience__line"></span>
              </div>

              <div className="experience__data bd-grid">
                <h3 className="experience__title">{resumeState[40].value}</h3>
                <span className="experience__company">
                  {resumeState[41].value}
                </span>
                <p className="experience__description">
                  {resumeState[42].value}
                </p>
              </div>
            </div>

            {/* <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title"></h3>
              <span className="experience__company">
              </span>
              <p className="experience__description"></p>
            </div>
          </div> */}
          </div>
        </section>

        {/* <section className="certificate section" id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="certificate__container bd-grid">
        <div className="certificate__content">
          <h3 className="certificate__title">
            Certified for compliance (2020)
          </h3>
          <p className="certificate__description">
            My first certificate.
          </p>
        </div>

        <div className="certificate__content">
          <h3 className="certificate__title">
            Certified for compliance (2020)
          </h3>
          <p className="certificate__description">
            My first certificate.
          </p>
        </div>

        <div className="certificate__content">
          <h3 className="certificate__title">
            Certified for compliance (2020)
          </h3>
          <p className="certificate__description">
            My first certificate.
          </p>
        </div>
      </div>
    </section> */}

        <section className="references section" id="references">
          <h2 className="section-title">Referências</h2>

          <div className="reference__container bd-grid">
            <div className="references__content bd-grid">
              <span className="references__subtitle">
                {resumeState[44].value}
              </span>
              <h3 className="references__title">{resumeState[45].value}</h3>
              <ul className="references__contact">
                <li>Phone: {resumeState[46].value}</li>
                <li>Email: {resumeState[47].value}</li>
              </ul>
            </div>

            <div className="references__content bd-grid">
              <span className="references__subtitle">
                {resumeState[48].value}
              </span>
              <h3 className="references__title">{resumeState[49].value}</h3>
              <ul className="references__contact">
                <li>Phone: {resumeState[50].value}</li>
                <li>Email: {resumeState[51].value}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="languages section">
          <h2 className="section-title">Idiomas</h2>

          <div className="languages__container">
            <ul className="languages__content bd-grid">
              <li className="languages__name">
                <span className="languages__circle"></span>{" "}
                {resumeState[51].value}
              </li>

              <li className="languages__name">
                <span className="languages__circle"></span>{" "}
                {resumeState[52].value}
              </li>
            </ul>
          </div>
        </section>

        <section className="interests section">
          <h2 className="section-title">Passatempos</h2>

          <div className="interests__container bd-grid">
            <div className="interests__content">
              <i className="bx bx-headphone interests__icon"></i>
              <span className="interests__name">{resumeState[53].value}</span>
            </div>

            <div className="interests__content">
              <i className="bx bx-game interests__icon"></i>
              <span className="interests__name">{resumeState[54].value}</span>
            </div>

            <div className="interests__content">
              <i className="bx bx-desktop interests__icon"></i>
              <span className="interests__name">{resumeState[55].value}</span>
            </div>

            <div className="interests__content">
              <i className="bx bx-dumbbell interests__icon"></i>
              <span className="interests__name">{resumeState[56].value}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
