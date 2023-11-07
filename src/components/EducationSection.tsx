import { education } from "../data/FelipeData";

interface EducationSectionProps {
  item: (typeof education)[0];
}

export function EducationSection() {
  return (
    <section className="education section" id="education">
      <h2 className="section-title">Formação</h2>

      <div className="education__container bd-grid">
        {education.map((item: EducationSectionProps["item"]) => (
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
  );
}
