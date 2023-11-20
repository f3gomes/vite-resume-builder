import profile from "/assets/profile.jpeg";

import { useEffect, useState } from "react";
import { LangSection } from "./LangSection";
import { HomeSection } from "./HomeSection";
import { SkillsSection } from "./SkillsSection";
import { SocialsSection } from "./SocialsSection";
import { EducationSection } from "./EducationSection";
import { InterestsSection } from "./InterestsSection";
import { ReferencesSection } from "./ReferencesSection";
import { ExperienceSection } from "./ExperienceSection";
import { resumeApi } from "../data/api";
import { IUserData } from "../types/userData";
import { Link } from "react-router-dom";

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
  const [userData, setUserData] = useState<IUserData>();

  const handleSetImage = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const email = "teste@gmail.com";
    resumeApi.get(`/users/${email}`).then((res) => setUserData(res.data));
  }, []);

  return (
    <>
      <div className="resume__left">
        <HomeSection
          image={image}
          userData={userData!}
          darkTheme={darkTheme}
          handleSetImage={handleSetImage}
          generateResume={generateResume}
          handleDarkTheme={handleDarkTheme}
        />

        <SocialsSection userData={userData!} />
        <EducationSection education={userData?.education!} />
        <SkillsSection skills={userData?.skills!} />
      </div>

      <div className="resume__right">
        <Link className="btn-edit" to={"/edit-step-one"}>
          <i className="bx bxs-edit"></i>
        </Link>
        <ExperienceSection experience={userData?.experiences!} />
        <ReferencesSection references={userData?.references!} />
        <LangSection languages={userData?.languages!} />
        <InterestsSection hobbys={userData?.hobbys!} />
      </div>
    </>
  );
}
