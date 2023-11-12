import { IHobby } from "../types/userData";

interface InterestsSectionProps {
  hobbys: IHobby[];
}

export function InterestsSection({ hobbys }: InterestsSectionProps) {
  return (
    <section className="interests section">
      <h2 className="section-title">Passatempos</h2>

      <div className="interests__container bd-grid">
        {hobbys?.map((item: IHobby) => (
          <div className="interests__content" key={item?._id}>
            <i className={item.icon}></i>
            <span className="interests__name">{item?.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
