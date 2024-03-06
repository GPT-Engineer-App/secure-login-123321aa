import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Input, InputGroup, InputRightElement, Button, Heading, useToast } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = () => {
    if (username === "Fia" && password === "123321Aa") {
      toast({
        title: "Login erfolgreich.",
        description: "Sie haben sich erfolgreich angemeldet.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Login fehlgeschlagen.",
        description: "Benutzername oder Passwort ist falsch.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" display="flex" alignItems="center" justifyContent="center">
        <VStack spacing="4">
          <Heading>Login</Heading>
          <Input placeholder="Benutzername" value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputGroup>
            <Input pr="4.5rem" type={showPassword ? "text" : "password"} placeholder="Passwort" value={password} onChange={(e) => setPassword(e.target.value)} />
            <InputRightElement width="3rem">
              <Button h="1.75rem" size="sm" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="blue" onClick={handleLogin}>
            Anmelden
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
