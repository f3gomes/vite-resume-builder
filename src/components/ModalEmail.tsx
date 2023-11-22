import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FormEvent, useEffect, useState } from "react";
import { createUser } from "../data/api";

export function ModalEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [payload, setPayload] = useState({
    name: "",
    email: "",
  });

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    onOpen();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPayload((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    createUser(payload);
    localStorage.setItem("rb_email", payload.email);
  };

  return (
    <ChakraProvider>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Digite seu e-mail:</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Nome:</FormLabel>
                <Input
                  required
                  name="name"
                  type="text"
                  ref={initialRef}
                  placeholder="Seu nome"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email:</FormLabel>
                <Input
                  required
                  name="email"
                  type="email"
                  ref={initialRef}
                  placeholder="exemplo@email.com"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Salvar
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
