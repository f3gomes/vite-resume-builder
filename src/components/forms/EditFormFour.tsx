import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { resumeApi, updateUser } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import "../../styles/form.css";
import { IUserData } from "../../types/userData";

export function EditFormStepFour() {
  const [userData, setUserData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(true);
  const [experiences, setExperiences] = useState([
    {
      title: "Cargo",
      yearCompany: "2023 - 2023 | Empresa",
      description: "",
    },
    {
      title: "Cargo",
      yearCompany: "2022 - 2022 | Empresa",
      description: "",
    },
    {
      title: "Cargo",
      yearCompany: "2021 - 2021 | Empresa",
      description: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "teste@gmail.com";
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);

          if (res.data?.experiences.length > 0) {
            setExperiences(res.data?.experiences);
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
    const payload = { experiences };
    updateUser(userData?._id!, payload);
    navigate("/edit-step-five");
  };

  const handleUpdateExperience = (index: number, target: any) => {
    const updateExperience = [...experiences];
    updateExperience[index] = {
      ...updateExperience[index],
      [target.name]: target.value,
    };
    setExperiences(updateExperience);
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
                    Experiências
                  </Heading>
                  {experiences?.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <FormLabel>Título</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.title}
                          name={"title"}
                          onChange={(e) =>
                            handleUpdateExperience(index, e.target)
                          }
                        />

                        <FormLabel>Empresa</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.yearCompany}
                          name={"yearCompany"}
                          onChange={(e) =>
                            handleUpdateExperience(index, e.target)
                          }
                        />

                        <FormLabel>Descrição</FormLabel>
                        <Textarea
                          defaultValue={item.description}
                          name={"description"}
                          onChange={(e) =>
                            handleUpdateExperience(index, e.target)
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
