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

export function EditFormStepFive() {
  const [hobbys, setHobbys] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [references, setReferences] = useState<any[]>([]);
  const [userData, setUserData] = useState<IUserData>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
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
    updateUser(userData?._id!, payload);
    navigate("/");
  };

  const handleUpdateReference = (id: string, e: any) => {
    const updatedReference = references.map((item: any) => {
      if (item._id === id) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setReferences(updatedReference);
  };

  const handleUpdateHobby = (id: string, e: any) => {
    const updatedHobby = hobbys.map((item: any) => {
      if (item._id === id) {
        return {
          ...item,
          name: e.target.value,
        };
      }
      return item;
    });

    setHobbys(updatedHobby);
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
                  {references?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <Input
                          type="text"
                          name={"name"}
                          placeholder="Nome"
                          defaultValue={item.name}
                          onChange={(e) => handleUpdateReference(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"title"}
                          placeholder="Título"
                          defaultValue={item.title}
                          onChange={(e) => handleUpdateReference(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"phone"}
                          placeholder="Telefone"
                          defaultValue={item.phone}
                          onChange={(e) => handleUpdateReference(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"email"}
                          placeholder="Email"
                          defaultValue={item.email}
                          onChange={(e) => handleUpdateReference(item._id, e)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Passatempos
                  </Heading>
                  {hobbys?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <i className={item.icon}></i>
                        <Input
                          type="text"
                          name={"name"}
                          defaultValue={item.name}
                          onChange={(e) => handleUpdateHobby(item._id, e)}
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
