import React, { useState } from "react";
import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleContactSubmit = () => {
    if (nameInput.trim() && emailInput.trim()) {
      setContacts([...contacts, { name: nameInput, email: emailInput }]);
      setNameInput("");
      setEmailInput("");
    }
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input placeholder="Name" value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
        <Input placeholder="E-Mail" type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
        <Button onClick={handleContactSubmit}>Kontakt hinzufügen</Button>
      </VStack>
      <Box mt={4}>
        {contacts.map((contact, index) => (
          <Text key={index} p={2} borderBottom="1px" borderColor="gray.200">
            {contact.name} - {contact.email}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Contacts;
