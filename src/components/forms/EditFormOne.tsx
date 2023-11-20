import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { resumeApi } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { formDataInputs } from "../../data/formData";
import { FormEvent, useEffect, useState } from "react";

import "../../styles/form.css";

export function EditFormStepOne() {
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = "teste@gmail.com";
        await resumeApi
          .get(`/users/${email}`)
          .then((res) => setUserData(res.data));
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

    resumeApi
      .put(`/users/${userData._id}`, userData)
      .then(() => {
        console.log("Usuário atualizado com sucesso!");
        navigate("/edit-step-two");
      })
      .catch((error) => {
        console.error("Erro ao atualizar usuário:", error);
      });
  };

  const handleUpdateValue = (event: any) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit} className="edit-form">
        <div className="info-container">
          <Heading as="h3" size="lg">
            Informações Pessoais
          </Heading>
          <div>
            {isLoading ? (
              <Spinner color="blue.500" size={"lg"} />
            ) : (
              formDataInputs.map((item, index) => {
                return (
                  <FormControl key={index}>
                    <FormLabel>{item.label}</FormLabel>
                    {item.type === "textarea" ? (
                      <Textarea
                        name={item.value}
                        onChange={handleUpdateValue}
                        required={item.required}
                        defaultValue={userData && userData.about}
                      />
                    ) : (
                      <Input
                        type={item.type}
                        name={item.value}
                        onChange={handleUpdateValue}
                        required={item.required}
                        defaultValue={userData && userData[item.value]}
                      />
                    )}
                  </FormControl>
                );
              })
            )}
          </div>
        </div>

        <Button colorScheme="blue" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
}
