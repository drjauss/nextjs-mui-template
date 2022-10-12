import React from "react";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Container } from "@mui/system";

const RightNavigationBar = () => {
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-end" flex="1">
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
        size="large"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <AccountCircleIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <EmojiEventsIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

const Header = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <RightNavigationBar />
    </Box>
  );
};

export default Header;
