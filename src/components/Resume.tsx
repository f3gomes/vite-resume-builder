import profile from "/assets/profile.jpeg";

import { useEffect, useState } from "react";
import { getUserByEmail } from "../data/api";
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
  const [data, setData] = useState();
  const [image, setImage] = useState(profile);
  const [isLoading, setIsloading] = useState(false);

  const email = localStorage.getItem("rb_email")!;

  const handleSetImage = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsloading(true);
        const resp = await getUserByEmail(email);
        setData(resp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    };

    fetchUser();
  }, []);

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
        <EducationSection data={data} />
        <SkillsSection data={data} />
      </div>

      <div className="resume__right">
        <Link className="btn-edit" to={"/edit-step-one"}>
          <i className="bx bxs-edit"></i>
        </Link>
        <ExperienceSection data={data} />
        <ReferencesSection data={data} />
        <LangSection data={data} />
        <InterestsSection data={data} />
      </div>
    </>
  );
}
