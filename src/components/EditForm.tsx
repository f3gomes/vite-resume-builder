import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { formDataInpus } from "../data/formData";
import { useEffect, useState } from "react";
import { resumeApi } from "../data/api";
import "../styles/form.css";

export function EditForm() {
  const [userData, setUserData] = useState<any>();

  useEffect(() => {
    const email = "fgomesdeluna@gmail.com";
    resumeApi.get(`/users/${email}`).then((res) => setUserData(res.data));
  }, []);

  const handleSubmit = () => {};

  const handleUpdateValue = (event: any) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit} className="edit-form">
        <div>
          {formDataInpus.map((item, index) => {
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
