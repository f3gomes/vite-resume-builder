import { references } from "../data/FelipeData";

interface ReferencesSectionProps {
  item: (typeof references)[0];
}

export function ReferencesSection() {
  return (
    <section className="references section" id="references">
      <h2 className="section-title">Referências</h2>

      <div className="reference__container bd-grid">
        {references.map((item: ReferencesSectionProps["item"]) => (
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
  );
}
