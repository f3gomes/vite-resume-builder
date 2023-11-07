import { hobbys } from "../data/FelipeData";

interface InterestsSectionProps {
  item: (typeof hobbys)[0];
}

export function InterestsSection() {
  return (
    <section className="interests section">
      <h2 className="section-title">Passatempos</h2>

      <div className="interests__container bd-grid">
        {hobbys.map((item: InterestsSectionProps["item"]) => (
          <div className="interests__content" key={item.id}>
            <i className={item.icon}></i>
            <span className="interests__name">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
