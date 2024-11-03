import { IHobby } from "../types/userData";

interface InterestsSectionProps {
  data: any;
}

export function InterestsSection({ data }: InterestsSectionProps) {
  return (
    <section className="interests section">
      <h2 className="section-title">Passatempos</h2>

      <div className="interests__container bd-grid">
        {data?.hobbys?.map((item: IHobby) => (
          <div className="interests__content" key={item?._id}>
            <i className={item.icon}></i>
            <span className="interests__name">{item?.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
