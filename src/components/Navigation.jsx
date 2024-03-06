import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box p={4} display="flex" justifyContent="space-around" alignItems="center">
      <Button as={Link} to="/">
        Login
      </Button>
      <Button as={Link} to="/notes">
        Notizen
      </Button>
      <Button as={Link} to="/contacts">
        Kontakte
      </Button>
      <Button as={Link} to="/calendar">
        Kalender
      </Button>
    </Box>
  );
};

export default Navigation;
