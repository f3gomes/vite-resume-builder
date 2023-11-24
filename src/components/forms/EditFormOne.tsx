import {
  Input,
  Button,
  Spinner,
  Heading,
  Textarea,
  FormControl,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { formDataInputs } from "../../data/formData";
import { resumeApi, updateUser } from "../../data/api";
import { FormEvent, useEffect, useState } from "react";

import "../../styles/form.css";

export function EditFormStepOne() {
  const [userData, setUserData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);
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
    updateUser(userData._id, userData);
    navigate("/edit-step-two");
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
                    {item.type === "textarea" ? (
                      <Textarea
                        id={item.value}
                        name={item.value}
                        placeholder={item.label}
                        required={item.required}
                        onChange={handleUpdateValue}
                        defaultValue={userData && userData.about}
                      />
                    ) : (
                      <Input
                        id={item.value}
                        type={item.type}
                        name={item.value}
                        placeholder={item.label}
                        required={item.required}
                        onChange={handleUpdateValue}
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
