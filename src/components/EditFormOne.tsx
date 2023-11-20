import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { formDataInputs } from "../data/formData";
import { FormEvent, useEffect, useState } from "react";
import { resumeApi } from "../data/api";
import "../styles/form.css";
import { useNavigate } from "react-router-dom";

export function EditFormStepOne() {
  const [userData, setUserData] = useState<any>();

  const navigate = useNavigate();

  useEffect(() => {
    const email = "teste@gmail.com";
    resumeApi.get(`/users/${email}`).then((res) => setUserData(res.data));
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
        <div>
          {formDataInputs.map((item, index) => {
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
          })}
        </div>

        <Button colorScheme="blue" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
}
