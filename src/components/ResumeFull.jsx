import React from "react";
import profile from "/assets/profile.jpeg";
import {
  info,
  socials,
  education,
  skills,
  experience,
  references,
  languages,
  hobbys,
} from "../data/FelipeData.js";
import { useState } from "react";

export default function ResumeLeft(props) {
  const [image, setImage] = useState(profile);

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
              <h1 className="home__title">{info[0].value}</h1>
              <h3 className="home__profession">{info[1].value}</h3>
            </div>

            <div className="home__address bd-grid">
              <span className="home__information">
                <i className="bx bx-map home__icon"></i>
                {info[2].value} <br />
                {info[3].value}
              </span>

              <span className="home__information">
                <i className="bx bx-envelope home__icon"></i>
                {info[4].value}
              </span>

              <span className="home__information">
                <i className="bx bx-phone home__icon"></i>
                {info[5].value}
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
            {socials.map((item) => (
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

          <p className="profile__description">{info[6].value}</p>
        </section>

        <section className="education section" id="education">
          <h2 className="section-title">Educação</h2>

          <div className="education__container bd-grid">
            {education.map((item) => (
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
              {skills.map((item, index) => (
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
              {skills.map((item, index) => (
                <span key={item.id}>
                  {index > 2 && index < 6 && (
                    <li className="skills__name">
                      <span className="skills_circle">{item.value}</span>
                    </li>
                  )}
                </span>
              ))}
            </ul>

            <ul className="skills__data">
              {skills.map((item, index) => (
                <span key={item.id}>
                  {index > 5 && index < 9 && (
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
            {experience.map((item) => (
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
            {resume[8].map((item) => (
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
            {references.map((item) => (
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
              {languages.map((item) => (
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
            {hobbys.map((item) => (
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
