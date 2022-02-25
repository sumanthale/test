import { Box, Button, Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import MintList from './MintList';
import WinnerList from './WinnerList';

const Mint = () => {
  const theme = useTheme();
  const [mint, setMint] = useState({
    name: 'NFT',
    supply: '300 Supply',
    price: '0.3 Mint Price',
    winner: '113 Total Winners',
    status: 'Mint Closed',
  });
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: 4,
          width: '100vw',
          height: 'calc(100vh - 170px)',
        },
      }}
    >
      <Paper elevation={3}>
        <Typography
          variant="h1"
          component="div"
          sx={{
            textAlign: 'center',
            mt: 3,
            fontSize: '3rem',
          }}
          gutterBottom
        >
          Round 3: SOL Giveaway
        </Typography>

        <Box
          sx={{
            p: 3,
          }}
        >
          <Button
            variant="outlined"
            sx={{
              textAlign: 'center',
              display: 'flex',
              justifyContent: 'center',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 5,
            }}
          >
            {mint.status}
          </Button>

          {/* <MintList mint={mint} /> */}
          <WinnerList />
        </Box>
      </Paper>
    </Box>
  );
};

export default Mint;
