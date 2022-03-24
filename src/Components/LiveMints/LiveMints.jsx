import { Box, Paper, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import MintDetails from "./MintDetails";
import AdminClosedDetails from "./AdminMint";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

// Add a new document in collection "cities"

const LiveMints = () => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);

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
            color: theme.palette.success.main,
          }}
          gutterBottom
        >
          Live Mints
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
                    <h2 className="heading">Live Mints</h2>
                  </div>
                  <div className="breadcrumbs">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Live Mints</li>
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
          {user ? <AdminClosedDetails /> : <MintDetails />}
        </Box>
      </Paper>
    </Box>
  );
};

export default LiveMints;
