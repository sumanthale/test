import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Buddha from '../../assets/images/buddha.jpeg';
const Intro = () => {
  const theme = useTheme();

  return (
    <div className="Intro">
      <Grid container spacing={2}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box>
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontSize: { md: '80px', sm: '20px' },
              }}
            >
              What is
            </Typography>
            <Typography
              variant="h1"
              component="div"
              gutterBottom
              sx={{
                fontSize: { md: '70px', sm: '20px' },
                color: theme.palette.primary.main,
              }}
            >
              Solana Monke Ball?
            </Typography>
          </Box>
          <Box
            sx={{
              px: 5,
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{
                fontSize: { md: '18px', sm: '20px' },
                color: '#9e9e9e',
              }}
            >
              Solana Monke Ball is the first Solana-Based Lottery that pays
              majority of it's revenue to holders. We believe giving out most of
              our revenue is the only way to stay legitimate. Other lottery NFTs
              give out 20, 30, or 50%... but we give out 80%. Why? Because we're
              members of the ecosystem. We want to build for the longterm.
            </Typography>
          </Box>
          <Box
            fullwidth
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              p: 5,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                padding: '14px 34px',
                borderRadius: 10,
              }}
            >
              🚀 Explore
            </Button>
            <Button
              variant="contained"
              sx={{
                padding: '14px 45px',
                borderRadius: 10,
                marginLeft: 10,
              }}
            >
              💲 Buy
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img src={Buddha} alt="img" width="90%" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
