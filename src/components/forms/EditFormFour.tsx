import {
  Button,
  Input,
  Spinner,
  Heading,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../types/userData";
import { resumeApi, updateUser } from "../../data/api";
import { FormEvent, useEffect, useState } from "react";

import "../../styles/form.css";

export function EditFormStepFour() {
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<IUserData>();
  const [experiences, setExperiences] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
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

  const handleUpdateExperience = (id: string, e: any) => {
    const updatedExperience = experiences.map((item: any) => {
      if (item._id === id) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setExperiences(updatedExperience);
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
                  {experiences?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <Input
                          id={item._id}
                          type="text"
                          name={"title"}
                          placeholder={"Cargo"}
                          defaultValue={item.title}
                          onChange={(e) => handleUpdateExperience(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"yearCompany"}
                          id={item.yearCompany}
                          placeholder={"Empresa"}
                          defaultValue={item.yearCompany}
                          onChange={(e) => handleUpdateExperience(item._id, e)}
                        />

                        <Textarea
                          id={item.description}
                          name={"description"}
                          placeholder={"Descrição"}
                          defaultValue={item.description}
                          onChange={(e) => handleUpdateExperience(item._id, e)}
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
