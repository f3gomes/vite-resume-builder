import profile from "/assets/profile.jpeg";

import { useState } from "react";
import { info } from "../data/FelipeData";
import { LangSection } from "./LangSection";
import { HomeSection } from "./HomeSection";
import { SkillsSection } from "./SkillsSection";
import { SocialsSection } from "./SocialsSection";
import { EducationSection } from "./EducationSection";
import { InterestsSection } from "./InterestsSection";
import { ReferencesSection } from "./ReferencesSection";
import { ExperienceSection } from "./ExperienceSection";

interface ResumeProps {
  darkTheme: boolean;
  handleDarkTheme: () => void;
  generateResume: () => void;
}

export function Resume({
  darkTheme,
  handleDarkTheme,
  generateResume,
}: ResumeProps) {
  const [image, setImage] = useState(profile);

  const handleSetImage = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <>
      <div className="resume__left">
        <HomeSection
          info={info}
          image={image}
          darkTheme={darkTheme}
          handleSetImage={handleSetImage}
          generateResume={generateResume}
          handleDarkTheme={handleDarkTheme}
        />

        <SocialsSection />
        <EducationSection />
        <SkillsSection />
      </div>

      <div className="resume__right">
        <ExperienceSection />
        <ReferencesSection />
        <LangSection />
        <InterestsSection />
      </div>
    </>
  );
}
