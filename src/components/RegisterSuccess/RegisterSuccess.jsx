import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <Container>
      <Box marginTop={"80px"} textAlign={"center"}>
        <Typography variant="h4">
          You have successfully registered, now you can{" "}
          <Link to="/login">Log in</Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default RegisterSuccess;
