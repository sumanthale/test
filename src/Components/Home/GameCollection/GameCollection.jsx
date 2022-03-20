import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import React from "react";
import "./GameCollection.scss";
import GameTypeCard from "./GameTypeCard";
const GameCollection = () => {
  const theme = useTheme();
  return (
    <div className="GameCollection">
      <div className="types">
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontFamily: `inherit`,
          }}
        >
          GAMES
        </Typography>
        <Typography
          variant="h1"
          component="div"
          gutterBottom
          sx={{
            fontFamily: `inherit`,
          }}
        >
          TYPE OF GAMES
        </Typography>
        <div className="cards">
          <Grid
            container
            sx={{
              p: 2,
            }}
            spacing={4}
          >
            {[1, 2, 3].map((i) => (
              <Grid item md={4} key={i}>
                <GameTypeCard title={`Game  ${i}`} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GameCollection;
