import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../types/userData";
import { resumeApi, updateUser } from "../../data/api";
import { FormEvent, useEffect, useState } from "react";
import "../../styles/form.css";

export function EditFormStepThree() {
  const [userData, setUserData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(true);
  const [education, setEducation] = useState([
    {
      title: "",
      studies: "",
      year: "2022 - 2023",
    },
    {
      title: "",
      studies: "",
      year: "2021 - 2022",
    },
    {
      title: "",
      studies: "",
      year: "2020 - 2021",
    },
  ]);

  const [languages, setLanguages] = useState([
    {
      name: "Português",
      level: "",
    },
    {
      name: "",
      level: "",
    },
  ]);

  interface IEducation {
    education: (typeof education)[0];
  }

  interface ILang {
    lang: (typeof languages)[0];
  }

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);

          if (res.data?.education.length > 0) {
            setEducation(res.data?.education);
          }

          if (res.data?.languages.length > 0) {
            setLanguages(res.data?.languages);
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
    const payload = { education, languages };
    updateUser(userData?._id!, payload);
    navigate("/edit-step-four");
  };

  const handleUpdateEducation = (index: number, target: any) => {
    const updateEducation = [...education];
    updateEducation[index] = {
      ...updateEducation[index],
      [target.name]: target.value,
    };
    setEducation(updateEducation);
  };

  const handleUpdateLanguage = (index: number, target: any) => {
    const updateLanguages = [...languages];
    updateLanguages[index] = {
      ...updateLanguages[index],
      [target.name]: target.value,
    };
    setLanguages(updateLanguages);
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
                    Formação
                  </Heading>
                  {education?.map(
                    (item: IEducation["education"], index: number) => {
                      return (
                        <div key={index}>
                          <FormLabel>Título</FormLabel>
                          <Input
                            type="text"
                            defaultValue={item.title}
                            name={"title"}
                            onChange={(e) =>
                              handleUpdateEducation(index, e.target)
                            }
                          />

                          <FormLabel>Escola</FormLabel>
                          <Input
                            type="text"
                            defaultValue={item.studies}
                            name={"studies"}
                            onChange={(e) =>
                              handleUpdateEducation(index, e.target)
                            }
                          />

                          <FormLabel>Período</FormLabel>
                          <Input
                            type="text"
                            defaultValue={item.year}
                            name={"year"}
                            onChange={(e) =>
                              handleUpdateEducation(index, e.target)
                            }
                          />
                        </div>
                      );
                    }
                  )}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Idiomas
                  </Heading>
                  {languages?.map((item: ILang["lang"], index: number) => {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                        }}
                      >
                        <Input
                          type="text"
                          name={"name"}
                          placeholder={"Idioma"}
                          defaultValue={item.name}
                          onChange={(e) =>
                            handleUpdateLanguage(index, e.target)
                          }
                        />

                        <Input
                          type="text"
                          name={"level"}
                          placeholder="Nível"
                          defaultValue={item.level}
                          onChange={(e) =>
                            handleUpdateLanguage(index, e.target)
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

        <Button
          type="submit"
          colorScheme="blue"
          style={{ marginBottom: "2rem" }}
        >
          Salvar
        </Button>
      </form>
    </div>
  );
}
