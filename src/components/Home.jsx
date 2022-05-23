import "../App.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import ResumeLeft from "./ResumeLeft";
import ResumeRight from "./ResumeRight";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const areaCv = document.getElementById("area-cv");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDarkTheme = () => {
    setDarkTheme(!darkTheme);

    if (darkTheme) {
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
    }
  };

  const opt = {
    margin: 0,
    filename: "myResume.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: "a4", orientation: "portrait" },
  };

  const scaleCv = () => {
    document.body.classList.add("scale-cv");
  };

  const removeScale = () => {
    document.body.classList.remove("scale-cv");
  };

  const generateResume = () => {
    scaleCv();
    html2pdf(areaCv, opt);
    setTimeout(removeScale, 5000);
  };

  return (
    <>
      <Header showMenu={showMenu} onClick={() => setShowMenu(!showMenu)} />

      <main className="l-main bd-container">
        <div className="resume" id="area-cv">
          <ResumeLeft
            darkTheme={darkTheme}
            handleDarkTheme={handleDarkTheme}
            generateResume={generateResume}
          />

          <ResumeRight />
        </div>
      </main>

      <a
        href=""
        className={showScrollTop ? "scrolltop show-scroll" : "scrolltop"}
        id="scroll-top"
        onClick={goToTop}
      >
        <i className="bx bx-up-arrow scrolltop__icon"></i>
      </a>
    </>
  );
}
