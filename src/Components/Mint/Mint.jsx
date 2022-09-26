import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import MintList from "./MintList";
import WinnerList from "./WinnerList";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

const Mint = () => {
  const { id } = useParams();
  const [mint, setMint] = useState(null);
  React.useEffect(() => {
    async function fetchData() {
      if (id) {
        const docRef = doc(db, "mints", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setMint(docSnap.data());
        } else {
          console.log("No such document!");
        }
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      {id && mint && (
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              width: "100vw",
            },
          }}
        >
          <Paper elevation={3}>
            <Typography
              variant="h2"
              component="div"
              sx={{
                textAlign: "center",
                mt: 3,
                fontSize: {
                  xs: "1.5rem",
                  sm: "2rem",
                  md: "2.5rem",
                  lg: "3rem",
                },
              }}
              gutterBottom
            >
              {mint.category} Winners
            </Typography>

            <Box
              sx={{
                p: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  align="center"
                  justifyContent="center"
                >
                  <WinnerList mint={mint} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <MintList
                    winners={mint?.winners}
                    category={mint?.category}
                    price={mint?.priceGA}
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Mint;
