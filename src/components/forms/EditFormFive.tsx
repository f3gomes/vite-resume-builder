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

export function EditFormStepFive() {
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [hobbys, setHobbys] = useState([
    {
      name: "Música",
      icon: "bx bx-headphone interests__icon",
    },
    {
      name: "Programação",
      icon: "bx bx-desktop interests__icon",
    },
    {
      name: "Games",
      icon: "bx bx-game interests__icon",
    },
    {
      name: "Academia",
      icon: "bx bx-dumbbell interests__icon",
    },
  ]);

  const [references, setReferences] = useState([
    {
      name: "",
      title: "",
      phone: "",
      email: "",
    },
    {
      name: "",
      title: "",
      phone: "",
      email: "",
    },
  ]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "teste@gmail.com";
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);

          if (res.data?.hobbys.length > 0) {
            setHobbys(res.data?.hobbys);
          }

          if (res.data?.references.length > 0) {
            setReferences(res.data?.references);
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
    const payload = { hobbys, references };
    updateUser(userData._id, payload);
    navigate("/");
  };

  const handleUpdateHobby = (index: number, value: string) => {
    const updateHobby = [...hobbys];
    updateHobby[index] = { ...updateHobby[index], name: value };
    setHobbys(updateHobby);
  };

  const handleUpdateReference = (index: number, target: any) => {
    const updateReference = [...references];
    updateReference[index] = {
      ...updateReference[index],
      [target.name]: target.value,
    };
    setReferences(updateReference);
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
                    Referências
                  </Heading>
                  {references?.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <FormLabel>Nome</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.name}
                          name={"name"}
                          onChange={(e) =>
                            handleUpdateReference(index, e.target)
                          }
                        />

                        <FormLabel>Título</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.title}
                          name={"title"}
                          onChange={(e) =>
                            handleUpdateReference(index, e.target)
                          }
                        />

                        <FormLabel>Telefone</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.phone}
                          name={"phone"}
                          onChange={(e) =>
                            handleUpdateReference(index, e.target)
                          }
                        />

                        <FormLabel>Email</FormLabel>
                        <Input
                          type="text"
                          defaultValue={item.email}
                          name={"email"}
                          onChange={(e) =>
                            handleUpdateReference(index, e.target)
                          }
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Passatempos
                  </Heading>
                  {hobbys?.map((item: any, index: number) => {
                    return (
                      <div key={index}>
                        <Input
                          type="text"
                          id={`${index}`}
                          defaultValue={item.name}
                          name={item.name.toLowerCase()}
                          onChange={(e) =>
                            handleUpdateHobby(index, e.target.value)
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
