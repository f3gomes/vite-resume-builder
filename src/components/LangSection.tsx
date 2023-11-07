import { languages } from "../data/FelipeData";

interface LangSectionProps {
  item: (typeof languages)[0];
}

export function LangSection() {
  return (
    <section className="languages section">
      <h2 className="section-title">Idiomas</h2>

      <div className="languages__container">
        <ul className="languages__content bd-grid">
          {languages.map((item: LangSectionProps["item"]) => (
            <li className="languages__name" key={item.id}>
              <span className="languages__circle"></span> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
