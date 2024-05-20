import {
  Modal,
  Input,
  Button,
  ModalBody,
  ModalFooter,
  FormControl,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ChakraProvider,
  ModalCloseButton,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { createUser } from "../data/api";

export function ModalEmail() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubmit = async () => {
    event?.preventDefault();

    try {
      setIsLoading(true);
      await createUser(payload);
      localStorage.setItem("rb_email", payload.email);
      onClose();

      setTimeout(() => {
        window.location.reload();
      }, 500);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChakraProvider>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={finalRef}
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Digite seu nome e e-mail:</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody pb={6}>
              <FormControl>
                <Input
                  required
                  name="name"
                  type="text"
                  ref={initialRef}
                  autoComplete="off"
                  placeholder="Nome Completo"
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mt={4}>
                <Input
                  required
                  name="email"
                  type="email"
                  ref={initialRef}
                  autoComplete="off"
                  placeholder="exemplo@email.com"
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                mr={3}
                type="submit"
                colorScheme="blue"
                disabled={isLoading}
              >
                {isLoading ? "Aguarde..." : "Salvar"}
              </Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
}
