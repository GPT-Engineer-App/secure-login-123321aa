import React, { useState } from "react";
import { Box, Text, Textarea, Button, VStack } from "@chakra-ui/react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [noteInput, setNoteInput] = useState("");

  const handleNoteSubmit = () => {
    if (noteInput.trim()) {
      setNotes([...notes, noteInput]);
      setNoteInput("");
    }
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Textarea placeholder="Notiz schreiben..." value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />
        <Button onClick={handleNoteSubmit}>Notiz veröffentlichen</Button>
      </VStack>
      <Box mt={4}>
        {notes.map((note, index) => (
          <Text key={index} p={2} borderBottom="1px" borderColor="gray.200">
            {note}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
