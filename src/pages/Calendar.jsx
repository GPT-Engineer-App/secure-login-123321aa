import React, { useState } from "react";
import { Box, Text, Input, Button, VStack } from "@chakra-ui/react";

const Calendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const handleAppointmentSubmit = () => {
    if (titleInput.trim() && dateInput.trim()) {
      setAppointments([...appointments, { title: titleInput, date: dateInput }]);
      setTitleInput("");
      setDateInput("");
    }
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Input placeholder="Terminbezeichnung" value={titleInput} onChange={(e) => setTitleInput(e.target.value)} />
        <Input placeholder="Datum" type="date" value={dateInput} onChange={(e) => setDateInput(e.target.value)} />
        <Button onClick={handleAppointmentSubmit}>Termin hinzufügen</Button>
      </VStack>
      <Box mt={4}>
        {appointments.map((appointment, index) => (
          <Text key={index} p={2} borderBottom="1px" borderColor="gray.200">
            {appointment.title} - {appointment.date}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Calendar;
