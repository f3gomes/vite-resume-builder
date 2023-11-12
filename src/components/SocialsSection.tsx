import { ISocial, IUserData } from "../types/userData";

interface SocialsSectionProps {
  userData: IUserData;
}

export function SocialsSection({ userData }: SocialsSectionProps) {
  return (
    <>
      <section className="social section">
        <h2 className="section-title">CONTATO</h2>

        <div className="social__container bd-grid">
          {userData?.socials?.map((item: ISocial) => (
            <a
              key={item._id}
              href={item.link}
              target="_blank"
              className="social__link social__icon"
            >
              <i className={item.icon}></i>
              {item.name}
            </a>
          ))}
        </div>
      </section>

      <section className="profile section" id="profile">
        <h2 className="section-title">Sobre</h2>

        <p className="profile__description">{userData?.about}</p>
      </section>
    </>
  );
}
