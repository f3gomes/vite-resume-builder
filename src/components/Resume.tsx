import profile from "/assets/profile.jpeg";

import { useState } from "react";
import { useQuery } from "react-query";
import { resumeApi } from "../data/api";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { LangSection } from "./LangSection";
import { HomeSection } from "./HomeSection";
import { SkillsSection } from "./SkillsSection";
import { SocialsSection } from "./SocialsSection";
import { InterestsSection } from "./InterestsSection";
import { EducationSection } from "./EducationSection";
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

  const { data, isLoading } = useQuery(
    "userData",
    async () => {
      const email = "teste@gmail.com";
      return await resumeApi.get(`/users/${email}`).then((res) => res?.data);
    },
    { staleTime: 20000 }
  );

  if (isLoading) {
    return (
      <div className="spinner-container">
        <Heading as="h4" size="md">
          Carregando...
        </Heading>
      </div>
    );
  }

  return (
    <>
      <div className="resume__left">
        <HomeSection
          image={image}
          userData={data}
          darkTheme={darkTheme}
          handleSetImage={handleSetImage}
          generateResume={generateResume}
          handleDarkTheme={handleDarkTheme}
        />

        <SocialsSection userData={data} />
        <EducationSection education={data?.education} />
        <SkillsSection skills={data?.skills} />
      </div>

      <div className="resume__right">
        <Link className="btn-edit" to={"/edit-step-one"}>
          <i className="bx bxs-edit"></i>
        </Link>
        <ExperienceSection experience={data?.experiences} />
        <ReferencesSection references={data?.references} />
        <LangSection languages={data?.languages} />
        <InterestsSection hobbys={data?.hobbys} />
      </div>
    </>
  );
}
