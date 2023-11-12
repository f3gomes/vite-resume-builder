import { IUserData } from "../types/userData";

interface HomeSectionProps {
  image: string;
  generateResume: () => void;
  handleSetImage: (e: any) => void;
  darkTheme: boolean;
  handleDarkTheme: () => void;
  userData: IUserData;
}

export function HomeSection({
  image,
  darkTheme,
  userData,
  handleDarkTheme,
  generateResume,
  handleSetImage,
}: HomeSectionProps) {
  return (
    <section className="home" id="home">
      <div className="home__container section bd-grid">
        <div className="home__data bd-grid">
          <input
            className="input-file"
            type={"file"}
            onChange={handleSetImage}
          />
          <img src={image} alt="profile" className="home__img" />
          <h1 className="home__title">{userData?.name}</h1>
          <h3 className="home__profession">{userData?.title}</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <i className="bx bx-map home__icon"></i>
            {userData?.address}
          </span>

          <span className="home__information">
            <i className="bx bx-envelope home__icon"></i>
            {userData?.email}
          </span>

          <span className="home__information">
            <i className="bx bx-phone home__icon"></i>
            {userData?.phone}
          </span>
        </div>
      </div>

      <i
        className={
          darkTheme ? "bx bx-sun change-theme" : "bx bx-moon change-theme"
        }
        title="Theme"
        id="theme-button"
        onClick={handleDarkTheme}
      ></i>

      <i
        className="bx bx-download generate-pdf"
        title="Generate PDF"
        id="resume-button"
        onClick={generateResume}
      ></i>
    </section>
  );
}
