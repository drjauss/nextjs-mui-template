import { Box, Container } from "@mui/material";
import React from "react";
import AchievementCard from "./components/AchievementCard";

const achievementCards = [<AchievementCard />];

const Achievements = () => (
  <Box>
    <Container>
      <h3>M&oacute;dulo de Logros</h3>
      <Box display="flex" flexDirection="row" gap="10px">
        {achievementCards.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Achievements;
