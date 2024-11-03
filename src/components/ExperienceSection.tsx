import { IExperience } from "../types/userData";

interface ExperienceSectionProps {
  data: any;
}

export function ExperienceSection({ data }: ExperienceSectionProps) {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experiência</h2>

      <div className="experience__container bd-grid">
        {data?.experience?.map((item: IExperience) => (
          <div className="experience__content" key={item?._id}>
            <div className="experience__time">
              <span className="experience__rounder"></span>
              <span className="experience__line"></span>
            </div>

            <div className="experience__data bd-grid">
              <h3 className="experience__title font-semibold">{item?.title}</h3>
              <span className="experience__company">{item?.yearCompany}</span>
              <p className="experience__description">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
