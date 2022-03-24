import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import ClosedMintDetails from "./ClosedMintDetails";
import { Link } from "react-router-dom";

const ClosedMints = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "85vh",
        "& > :not(style)": {
          width: "100vw",
        },
      }}
    >
      <Paper elevation={3}>
        {/* <Typography
          variant="h1"
          component="div"
          sx={{
            textAlign: "center",
            mt: 3,
            fontSize: "3rem",
            color: theme.palette.error.main,
          }}
          gutterBottom
        >
          Closed Mints
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            mt: 3,
            fontSize: "1rem",
            color: theme.palette.primary.main,
          }}
          gutterBottom
        >
          Grab your chance to win some SOL and/or NFTs by minting tickets in our
          ongoing giveaways
        </Typography> */}
        <section className="fl-page-title">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title-inner flex">
                  <div className="page-title-heading">
                    <h2 className="heading">Closed Mints</h2>
                  </div>
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Closed Mints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Box
          sx={{
            p: 3,
          }}
        >
          {/* <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: "2rem",
            }}
            gutterBottom
          >
            Daily Mints
          </Typography> */}
          <ClosedMintDetails />
        </Box>
      </Paper>
    </Box>
  );
};

export default ClosedMints;
