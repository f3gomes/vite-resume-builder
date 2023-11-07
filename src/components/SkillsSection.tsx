import { skills } from "../data/FelipeData";

interface SkilssSectionProps {
  item: (typeof skills)[0];
}

export function SkillsSection() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">HABILIDADES</h2>

      <div className="skills__content bd-grid">
        <ul className="skills__data">
          {skills.map((item: SkilssSectionProps["item"]) => (
            <span key={item.id}>
              <li className="skills__name">
                <span className="skills_circle">{item.value}</span>
              </li>
            </span>
          ))}
        </ul>
      </div>
    </section>
  );
}
