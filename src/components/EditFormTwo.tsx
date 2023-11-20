import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";
import { resumeApi } from "../data/api";
import "../styles/form.css";

export function EditFormStepTwo() {
  const [userData, setUserData] = useState<any>();
  const [socials, setSocials] = useState([
    {
      name: "Linkedin",
      link: "",
      icon: "bx bxl-linkedin-square",
    },
    {
      name: "Github",
      link: "",
      icon: "bx bxl-github",
    },
    {
      name: "Instagram",
      link: "",
      icon: "bx bxl-instagram",
    },
  ]);

  useEffect(() => {
    const email = "teste@gmail.com";
    resumeApi.get(`/users/${email}`).then((res) => {
      setUserData(res.data);
      setSocials(res.data?.socials);
    });
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { socials };

    resumeApi
      .put(`/users/${userData._id}`, payload)
      .then(() => {
        console.log("Usuário atualizado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao atualizar usuário:", error);
      });
  };

  const handleUpdateValue = (index: number, newLink: string) => {
    const updatedSocials = [...socials];
    updatedSocials[index] = { ...updatedSocials[index], link: newLink };
    setSocials(updatedSocials);
  };

  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit} className="edit-form">
        <div>
          <FormControl>
            {socials.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <FormLabel>{item.name}</FormLabel>
                  <Input
                    type="text"
                    defaultValue={item.link}
                    name={item.name.toLowerCase()}
                    onChange={(e) => handleUpdateValue(index, e.target.value)}
                  />
                </div>
              );
            })}
          </FormControl>
        </div>

        <Button colorScheme="blue" type="submit">
          Salvar
        </Button>
      </form>
    </div>
  );
}
