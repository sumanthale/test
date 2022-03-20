import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Intro.scss";
const Intro = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${"https://s7template.com/tf/bettfor/assets/img/banner/1.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid
        container
        sx={{
          p: 2,
          minHeight: "calc(100vh - 78px)",
        }}
      >
        <Grid
          item
          // sm={12}
          md={10}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
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
                fontSize: { md: "90px", sm: "50px" },
                color: theme.palette.primary.main,
                fontFamily: `inherit`,
                width: "90%",
              }}
            >
              Solana Laughing Buddha
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: { md: "16px", sm: "20px" },
                color: theme.palette.text.secondary,
                width: "80%",
                textAlign: "justify",
                my: 2,
                fontFamily: `inherit`,
              }}
            >
              Solana Laughing Buddha Lotto is the first Solana-Based Lottery
              that pays majority of it's revenue to holders. We believe giving
              out most of our revenue is the only way to stay legitimate. Other
              lottery NFTs give out 20, 30, or 50%... but we give out 80%. Why?
              Because we're members of the ecosystem. We want to build for the
              longterm.
            </Typography>
            <Box
              fullwidth
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "50%",
                mt: 3,
                zIndex: 99,
                position: "relative",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{
                  padding: "14px 34px",
                  backgroundColor: theme.palette.warning.main,
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: ".8rem",
                  color: "black",
                }}
              >
                Explore
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                style={{
                  padding: "14px 34px",
                  backgroundColor: theme.palette.success.main,
                  borderRadius: "4px",
                  marginLeft: 30,
                  cursor: "pointer",
                  color: "black",
                  fontSize: ".8rem",
                }}
                onClick={() => {
                  navigate("/live");
                }}
              >
                Buy
              </motion.div>
            </Box>
          </Box>
        </Grid>
        {/* <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Buddha} alt="img" width="90%" />
        </Grid> */}
      </Grid>
      <div className="overlay"></div>
    </Box>
  );
};

export default Intro;
