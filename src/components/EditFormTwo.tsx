import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { resumeApi } from "../data/api";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";

export function EditFormStepTwo() {
  const [userData, setUserData] = useState<any>();
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

    resumeApi
      .put(`/users/${userData._id}`, payload)
      .then(() => {
        console.log("Usuário atualizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Erro ao atualizar usuário:", error);
      });
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
                  {socials?.map((item: any, index: number) => {
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
                  {skills?.map((item: any, index: number) => {
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
