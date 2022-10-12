import { Box, Container, Typography } from "@mui/material";
import React from "react";
import ExpTotalAmount from "./components/expTotalAmount";

const Experience = () => (
  <Box>
    <Container>
      <Typography variant="h5" my="8px">M&oacute;dulo de Experiencia</Typography>
      <ExpTotalAmount />
    </Container>
  </Box>
);

export default Experience;
