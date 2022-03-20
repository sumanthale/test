import { Typography } from "@mui/material";
import React from "react";
import Controller from "../../../assets/images/icons/controller.svg";
const GameTypeCard = ({ title }) => {
  return (
    <div className="GameTypeCard">
      <img src={Controller} alt="React Logo" width="50%" />

      {title}
      <Typography
        variant="h5"
        component="div"
        gutterBottom
        sx={{
          fontFamily: `inherit`,
        }}
      >
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </Typography>
    </div>
  );
};

export default GameTypeCard;
