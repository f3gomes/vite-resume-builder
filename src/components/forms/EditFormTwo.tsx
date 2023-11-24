import { Input, Button, Spinner, Heading, FormControl } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IUserData } from "../../types/userData";
import { resumeApi, updateUser } from "../../data/api";
import { FormEvent, useEffect, useState } from "react";

import "../../styles/form.css";

export function EditFormStepTwo() {
  const [skills, setSkills] = useState<any[]>([]);
  const [socials, setSocials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<IUserData>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const email = localStorage.getItem("rb_email");
        resumeApi.get(`/users/${email}`).then((res) => {
          setUserData(res.data);
          setSkills(res.data?.skills);
          setSocials(res.data?.socials);
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
    const payload = { socials, skills };
    updateUser(userData?._id!, payload);
    navigate("/edit-step-three");
  };

  const handleUpdateSocial = (id: string, e: any) => {
    const updatedSocials = socials.map((social: any) => {
      if (social._id === id) {
        return {
          ...social,
          link: e.target.value,
        };
      }
      return social;
    });

    setSocials(updatedSocials);
  };

  const handleUpdateSKill = (id: string, e: any) => {
    const updatedSkills = skills.map((skill: any) => {
      if (skill._id === id) {
        return {
          ...skill,
          name: e.target.value,
        };
      }
      return skill;
    });

    setSkills(updatedSkills);
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
                    Redes Sociais
                  </Heading>
                  {socials?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <Input
                          type="text"
                          name={"link"}
                          id={item.name}
                          placeholder={item.name}
                          defaultValue={item.link}
                          onChange={(e) => handleUpdateSocial(item._id, e)}
                        />
                      </div>
                    );
                  })}
                </div>

                <div className="skills-container">
                  <Heading as="h3" size="lg">
                    Habilidades
                  </Heading>
                  {skills?.map((item: any) => {
                    return (
                      <div key={item._id}>
                        <Input
                          type="text"
                          name={"name"}
                          id={item.name}
                          defaultValue={item.name}
                          onChange={(e) => handleUpdateSKill(item._id, e)}
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
