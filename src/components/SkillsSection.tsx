import { ISkill } from "../types/userData";

interface SkilssSectionProps {
  skills: ISkill[];
}

export function SkillsSection({ skills }: SkilssSectionProps) {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">HABILIDADES</h2>

      <div className="skills__content bd-grid">
        <ul className="skills__data">
          {skills?.map((item: ISkill) => (
            <span key={item._id}>
              <li className="skills__name">
                <span className="skills_circle">{item.name}</span>
              </li>
            </span>
          ))}
        </ul>
      </div>
    </section>
  );
}
