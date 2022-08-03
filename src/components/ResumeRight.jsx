import React, { useContext } from "react";
import { MyContext } from "../context/Provider";

export default function ResumeRight() {
  const { resumeState, setResumeState } = useContext(MyContext);

  return (
    <div className="resume__right">
      <section className="experience section" id="experience">
        <h2 className="section-title">Experience</h2>

        <div className="experience__container bd-grid">
          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle1}</h3>
              <span className="experience__company">
                {resumeState.jobYearCompany1}
              </span>
              <p className="experience__description">
                {resumeState.jobDesc1}
              </p>
            </div>
          </div>

          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle2}</h3>
              <span className="experience__company">
                {resumeState.jobYearCompany2}
              </span>
              <p className="experience__description">
                {resumeState.jobDesc2}
              </p>
            </div>
          </div>

          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle3}</h3>
              <span className="experience__company">{resumeState.jobYearCompany3}</span>
              <p className="experience__description">
                {resumeState.jobDesc3}
              </p>
            </div>
          </div>

          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle4}</h3>
              <span className="experience__company">
                {resumeState.jobYearCompany4}
              </span>
              <p className="experience__description">{resumeState.jobDesc4}</p>
            </div>
          </div>

          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle5}</h3>
              <span className="experience__company">
                {resumeState.jobYearCompany5}
              </span>
              <p className="experience__description">{resumeState.jobDesc5}</p>
            </div>
          </div>

          <div className="experience__content">
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title">{resumeState.jobTitle6}</h3>
              <span className="experience__company">
                {resumeState.jobYearCompany6}
              </span>
              <p className="experience__description">{resumeState.jobDesc6}</p>
            </div>
          </div>
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
        <h2 className="section-title">References</h2>

        <div className="reference__container bd-grid">
          <div className="references__content bd-grid">
            <span className="references__subtitle">{resumeState.refTitle1}</span>
            <h3 className="references__title">{resumeState.refName1}</h3>
            <ul className="references__contact">
              <li>Phone: {resumeState.refPhone1}</li>
              <li>Email: {resumeState.refEmail1}</li>
            </ul>
          </div>

          <div className="references__content bd-grid">
            <span className="references__subtitle">{resumeState.refTitle2}</span>
            <h3 className="references__title">{resumeState.refName2}</h3>
            <ul className="references__contact">
              <li>Phone: {resumeState.refPhone2}</li>
              <li>Email: {resumeState.refEmail2}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="languages section">
        <h2 className="section-title">Languages</h2>

        <div className="languages__container">
          <ul className="languages__content bd-grid">
            <li className="languages__name">
              <span className="languages__circle"></span> {resumeState.lang1}
            </li>

            <li className="languages__name">
              <span className="languages__circle"></span> {resumeState.lang2}
            </li>
          </ul>
        </div>
      </section>

      <section className="interests section">
        <h2 className="section-title">Hobbys</h2>

        <div className="interests__container bd-grid">
          <div className="interests__content">
            <i className="bx bx-headphone interests__icon"></i>
            <span className="interests__name">{resumeState.hob1}</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-game interests__icon"></i>
            <span className="interests__name">{resumeState.hob2}</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-desktop interests__icon"></i>
            <span className="interests__name">{resumeState.hob3}</span>
          </div>

          <div className="interests__content">
            <i className="bx bx-dumbbell interests__icon"></i>
            <span className="interests__name">{resumeState.hob4}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
