import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { resumeApi, updateUser } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import "../../styles/form.css";
import { IUserData } from "../../types/userData";

export function EditFormStepTwo() {
  const [userData, setUserData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(true);
  const [socials, setSocials] = useState([
    {
      name: "Linkedin",
      link: "",
      icon: "bx bxl-linkedin-square",
    },
    {
      name: "Github",
      link: "",
      icon: "bx bxl-github",
    },
    {
      name: "Instagram",
      link: "",
      icon: "bx bxl-instagram",
    },
  ]);

  const [skills, setSkills] = useState([
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ]);

  interface ISocials {
    social: (typeof socials)[0];
  }

  interface ISkills {
    skill: (typeof skills)[0];
  }

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "teste@gmail.com";
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);

          if (res.data?.socials.length > 0) {
            setSocials(res.data?.socials);
          }

          if (res.data?.skills.length > 0) {
            setSkills(res.data?.skills);
          }
        });
      } catch (error) {
        console.error("Erro ao obter dados da API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { socials, skills };
    updateUser(userData?._id!, payload);
    navigate("/edit-step-three");
  };

  const handleUpdateValue = (index: number, newLink: string) => {
    const updatedSocials = [...socials];
    updatedSocials[index] = { ...updatedSocials[index], link: newLink };
    setSocials(updatedSocials);
  };

  const handleUpdateSkill = (index: number, newSkill: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = { ...updatedSkills[index], name: newSkill };
    setSkills(updatedSkills);
  };

  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit} className="edit-form">
        <div>
          <FormControl>
            {isLoading ? (
              <Spinner color="blue.500" size={"lg"} />
            ) : (
              <div>
                <div className="socials-container">
                  <Heading as="h3" size="lg">
                    Redes Sociais
                  </Heading>
                  {socials?.map((item: ISocials["social"], index: number) => {
                    return (
                      <div key={index}>
                        <FormLabel>{item.name}</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.link}
                          name={item.name.toLowerCase()}
                          onChange={(e) =>
                            handleUpdateValue(index, e.target.value)
                          }
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Habilidades
                  </Heading>
                  {skills?.map((item: ISkills["skill"], index: number) => {
                    return (
                      <div key={index}>
                        <Input
                          type="text"
                          id={`${index}`}
                          defaultValue={item.name}
                          name={item.name.toLowerCase()}
                          onChange={(e) =>
                            handleUpdateSkill(index, e.target.value)
                          }
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </FormControl>
        </div>

        <Button colorScheme="blue" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
}
