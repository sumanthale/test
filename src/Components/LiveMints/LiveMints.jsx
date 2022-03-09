import { Box, Paper, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import MintDetails from './MintDetails';
import AdminClosedDetails from './AdminMint';
import { AuthContext } from '../../context/AuthContext';

// Add a new document in collection "cities"

const LiveMints = () => {
  const theme = useTheme();
  const { user } = useContext(AuthContext);

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
          Live Mints
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: 'center',
            mt: 3,
            fontSize: '1rem',
            color: theme.palette.primary.main,
          }}
          gutterBottom
        >
          Grab your chance to win some SOL and/or NFTs by minting tickets in our
          ongoing giveaways
        </Typography>
        <Box
          sx={{
            p: 3,
          }}
        >
          <Typography
            variant="h1"
            component="div"
            sx={{
              fontSize: '2rem',
              mt: 5,
            }}
            gutterBottom
          >
            Daily Mints
          </Typography>
          {user ? <AdminClosedDetails /> : <MintDetails />}
        </Box>
      </Paper>
    </Box>
  );
};

export default LiveMints;
