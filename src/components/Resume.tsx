import profile from "/assets/profile.jpeg";

import { Link } from "react-router-dom";
import { resumeApi } from "../data/api";
import { LangSection } from "./LangSection";
import { HomeSection } from "./HomeSection";
import { useEffect, useState } from "react";
import { IUserData } from "../types/userData";
import { SkillsSection } from "./SkillsSection";
import { SocialsSection } from "./SocialsSection";
import { EducationSection } from "./EducationSection";
import { InterestsSection } from "./InterestsSection";
import { ReferencesSection } from "./ReferencesSection";
import { ExperienceSection } from "./ExperienceSection";
import { Heading, Spinner } from "@chakra-ui/react";

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
  const [isLoading, setIsLoading] = useState(true);

  const handleSetImage = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "teste@gmail.com";
        await resumeApi
          .get(`/users/${email}`)
          .then((res) => setUserData(res.data));
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-container">
          <Heading as="h4" size="md">
            Carregando...
          </Heading>
        </div>
      ) : (
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
      )}
    </>
  );
}
