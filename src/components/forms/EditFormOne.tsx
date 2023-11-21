import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { updateUser } from "../../data/api";
import { useNavigate } from "react-router-dom";
import { formDataInputs } from "../../data/formData";
import { FormEvent, useState } from "react";

import "../../styles/form.css";
import { useQuery } from "react-query";

export function EditFormStepOne() {
  const [userData, setUserData] = useState<any>();

  const navigate = useNavigate();

  const { data, isLoading } = useQuery("userData", () => {
    setUserData(data);
  });

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
