import { ILanguage } from "../types/userData";

interface LangSectionProps {
  data: any;
}

export function LangSection({ data }: LangSectionProps) {
  return (
    <section className="languages section">
      <h2 className="section-title">Idiomas</h2>

      <div className="languages__container">
        <ul className="languages__content bd-grid">
          {data?.languages?.map((item: ILanguage) => (
            <li className="languages__name" key={item._id}>
              <span className="languages__circle"></span>
              {item.name} ({item.level})
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
