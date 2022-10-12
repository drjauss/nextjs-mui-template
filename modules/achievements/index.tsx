import { Box, Container, Typography } from "@mui/material";
import React from "react";
import AchievementCard from "./components/AchievementCard";

const achievementCards = [<AchievementCard />];

const Achievements = () => (
  <Box>
    <Container>
      <Typography variant="h5" my="8px">M&oacute;dulo de Logros</Typography>
      <Box display="flex" flexDirection="row" gap="10px">
        {achievementCards.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Achievements;
