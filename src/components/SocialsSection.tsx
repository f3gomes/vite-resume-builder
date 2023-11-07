import { info, socials } from "../data/FelipeData";

interface SocialsSectionProps {
  item: (typeof socials)[0];
}

export function SocialsSection() {
  return (
    <>
      <section className="social section">
        <h2 className="section-title">CONTATO</h2>

        <div className="social__container bd-grid">
          {socials.map((item: SocialsSectionProps["item"]) => (
            <a
              key={item.id}
              href={item.value}
              target="_blank"
              className="social__link social__icon"
            >
              <i className={item.icon}></i>
              {item.key}
            </a>
          ))}
        </div>
      </section>

      <section className="profile section" id="profile">
        <h2 className="section-title">Sobre</h2>

        <p className="profile__description">{info[6].value}</p>
      </section>
    </>
  );
}
