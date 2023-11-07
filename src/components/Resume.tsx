import profile from "/assets/profile.jpeg";
import {
  info,
  socials,
  skills,
  references,
  languages,
  hobbys,
} from "../data/FelipeData";
import { useState } from "react";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { HomeSection } from "./HomeSection";

interface ResumeProps {
  darkTheme: boolean;
  handleDarkTheme: () => void;
  generateResume: () => void;
}

export function Resume({
  darkTheme,
  handleDarkTheme,
  generateResume,
}: ResumeProps) {
  const [image, setImage] = useState(profile);

  const handleSetImage = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className="resume__left">
        <HomeSection
          info={info}
          image={image}
          darkTheme={darkTheme}
          handleSetImage={handleSetImage}
          generateResume={generateResume}
          handleDarkTheme={handleDarkTheme}
        />

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

        <EducationSection />

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
        <ExperienceSection />

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
