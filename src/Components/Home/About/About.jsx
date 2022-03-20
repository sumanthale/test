import { Box, Grid, Typography } from "@mui/material";
import Buddha from "../../../assets/images/home/buddha.png";
import Dices from "../../../assets/images/home/dices.jpg";
import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      {" "}
      <Box
        sx={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.61), rgba(0, 0, 0, 0.63)),url(${Dices})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{
            p: 2,
          }}
        >
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={Buddha} alt="img" width="100%" />
          </Grid>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
              }}
            >
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontSize: "60px",
                  fontFamily: "'Press Start 2P', cursive",
                  width: "`100%",
                }}
              >
                About US
              </Typography>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: "14px",
                  width: "90%",
                  textAlign: "justify",
                  my: 2,
                  fontFamily: `inherit`,
                }}
              >
                Solana Laughing Buddha Lotto is the first Solana-Based Lottery
                that pays majority of it's revenue to holders. We believe giving
                out most of our revenue is the only way to stay legitimate.
                Other lottery NFTs give out 20, 30, or 50%... but we give out
                80%. Why? Because we're members of the ecosystem. We want to
                build for the longterm.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default About;
