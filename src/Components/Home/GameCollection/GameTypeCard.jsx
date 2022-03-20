import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const GameTypeCard = ({ title, id }) => {
  const theme = useTheme();
  return (
    <Box
      className="GameTypeCard"
      sx={{
        boxShadow: 2,
        border: `5px solid ${theme.palette.grey[300]}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={require(`../../../assets/images/home/game${id}.png`)}
          alt="React Logo"
          className="img"
        />
      </Box>

      <Typography
        variant="h2"
        component="div"
        gutterBottom
        sx={{
          fontFamily: "'Press Start 2P', cursive",
          mt: 2,
          // color: theme.palette.success.main,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        sx={{
          fontFamily: `inherit`,
          textAlign: "justify",
          px: 1,
        }}
      >
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
        ipsum dolor sit amet, consectetur adipiscing adipiscing elit, sed do
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </Typography>
    </Box>
  );
};

export default GameTypeCard;
