import {
  Input,
  Button,
  Spinner,
  Heading,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../types/userData";
import { resumeApi, updateUser } from "../../data/api";
import { FormEvent, useEffect, useState } from "react";

import "../../styles/form.css";

export function EditFormStepThree() {
  const [userData, setUserData] = useState<IUserData>();
  const [isLoading, setIsLoading] = useState(true);
  const [education, setEducation] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);
          setEducation(res.data?.education);
          setLanguages(res.data?.languages);
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

  const handleUpdateEducation = (id: string, e: any) => {
    const updatedEducation = education.map((item: any) => {
      if (item._id === id) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setEducation(updatedEducation);
  };

  const handleUpdateLanguages = (id: string, e: any) => {
    const updatedLang = languages.map((item: any) => {
      if (item._id === id) {
        return {
          ...item,
          [e.target.name]: e.target.value,
        };
      }
      return item;
    });

    setLanguages(updatedLang);
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
                  {education?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <Input
                          type="text"
                          name={"title"}
                          placeholder="Título"
                          defaultValue={item.title}
                          onChange={(e) => handleUpdateEducation(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"studies"}
                          placeholder="Escola"
                          defaultValue={item.studies}
                          onChange={(e) => handleUpdateEducation(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"year"}
                          placeholder="Período"
                          defaultValue={item.year}
                          onChange={(e) => handleUpdateEducation(item._id, e)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Idiomas
                  </Heading>
                  {languages?.map((item: any) => {
                    return (
                      <div
                        key={item._id}
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
                          onChange={(e) => handleUpdateLanguages(item._id, e)}
                        />

                        <Input
                          type="text"
                          name={"level"}
                          placeholder="Nível"
                          defaultValue={item.level}
                          onChange={(e) => handleUpdateLanguages(item._id, e)}
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
