import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { updateUser } from "../../data/api";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formDataInputs } from "../../data/formData";

import "../../styles/form.css";

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
                    {item.type === "textarea" ? (
                      <Textarea
                        name={item.value}
                        placeholder={item.label}
                        required={item.required}
                        onChange={handleUpdateValue}
                        defaultValue={userData && userData.about}
                      />
                    ) : (
                      <Input
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
