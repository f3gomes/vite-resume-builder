import { info } from "../data/FelipeData";

interface HomeSectionProps {
  image: string;
  generateResume: () => void;
  handleSetImage: (e: any) => void;
  info: typeof info;
  darkTheme: boolean;
  handleDarkTheme: () => void;
}

export function HomeSection({
  info,
  image,
  darkTheme,
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
          <h1 className="home__title">{info[0].value}</h1>
          <h3 className="home__profession">{info[1].value}</h3>
        </div>

        <div className="home__address bd-grid">
          <span className="home__information">
            <i className="bx bx-map home__icon"></i>
            {info[2].value}
          </span>

          <span className="home__information">
            <i className="bx bx-envelope home__icon"></i>
            {info[4].value}
          </span>

          <span className="home__information">
            <i className="bx bx-phone home__icon"></i>
            {info[5].value}
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
