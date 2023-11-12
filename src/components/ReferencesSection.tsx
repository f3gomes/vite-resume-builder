import { IReference } from "../types/userData";

interface ReferencesSectionProps {
  references: IReference[];
}

export function ReferencesSection({ references }: ReferencesSectionProps) {
  return (
    <section className="references section" id="references">
      <h2 className="section-title">Referências</h2>

      <div className="reference__container bd-grid">
        {references?.map((item: IReference) => (
          <div className="references__content bd-grid" key={item?._id}>
            <span className="references__subtitle">{item?.title}</span>
            <h3 className="references__title">{item?.name}</h3>
            <ul className="references__contact">
              <li>Phone: {item?.phone}</li>
              <li>Email: {item?.email}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
