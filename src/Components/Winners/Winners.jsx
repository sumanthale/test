import {
  Alert,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Shuffle } from '@mui/icons-material';
import { toast } from 'react-toastify';

const Winner = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState('');
  const [pick, setPick] = useState('');

  const [members, setMembers] = useState(null);
  const [winners, setWinners] = useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handelPick = (event) => {
    setPick(event.target.value);
  };
  const handelSubmit = () => {
    if (value) {
      setMembers(value.split(',').filter((el) => !!el));
    }
  };

  const startPicking = () => {
    const copyMembers = [...members];
    const copyWinners = [...winners];
    if (pick > 0 && pick <= members.length) {
      for (let i = 0; i < pick; i++) {
        const randomNumber = Math.floor(Math.random() * copyMembers.length);
        copyWinners.push(copyMembers.splice(randomNumber, 1));
      }
      setMembers(copyMembers);
      setWinners(copyWinners);
    } else {
      toast.error('🙅 Please Check Pick Value', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const reset = () => {
    setMembers(null);
    setWinners([]);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          m: { xs: 0, sm: 0, md: 1 },
          mx: 2,
          width: '100vw',
          minHeight: {
            xs: 'calc(100vh - 110px)',
            sm: 'calc(100vh - 110px)',
            md: 'calc(100vh - 160px)',
          },
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          p: { xs: 1, sm: 1, md: 3 },
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.5rem', sm: '1.5rem', md: '3rem' },
            color: theme.palette.primary.main,
          }}
          gutterBottom
        >
          Pick Winners
        </Typography>
        {!members ? (
          <>
            <TextField
              id="outlined-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              minRows={2}
              value={value}
              onChange={handleChange}
              sx={{
                mb: 3,
                width: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                '& > .MuiOutlinedInput-root': {
                  background: theme.palette.background.default,
                },
                '& textarea': {
                  background: theme.palette.background.default,
                },
              }}
            />
            <Button
              variant="outlined"
              sx={{ maxWidth: '10vw' }}
              onClick={handelSubmit}
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="outlined"
              sx={{
                minWidth: '10vw',
                mb: 3,
                marginLeft: 'auto',
                position: { sm: 'absolute', md: 'initial' },
                right: 10,
                top: '7.5%',
              }}
              onClick={reset}
            >
              Reset
            </Button>
            <Grid
              //   justifyContent="center"
              //   alignItems="center"
              container
              sx={{
                position: 'relative',
              }}
              spacing={{ xs: 3, md: 2 }}
            >
              <Grid container item xs={12} sm={12} md={5} rowSpacing={3}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    zIndex: 9999,
                  }}
                >
                  <Alert variant="filled" severity="info">
                    Members {members.length}
                  </Alert>
                </Grid>
                <Grid
                  container
                  item
                  xs={12}
                  spacing={2}
                  sx={{
                    maxHeight: { sm: '35vh', md: '65vh' },
                    minHeight: { sm: '35vh', md: '65vh' },
                    overflow: 'auto',
                    position: 'relative',
                  }}
                >
                  {members.map((item, idx) => (
                    <Grid item xs={6} md={12} key={idx}>
                      <Alert severity="info" color="info">
                        #{item}
                      </Alert>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={2}
                spacing={2}
                sx={{
                  maxHeight: { sm: '10vh', md: '100%' },
                  minHeight: { sm: '10vh', md: '100%' },
                  overflow: 'auto',
                  display: 'flex',
                  alignContent: 'center',
                }}
              >
                <Grid item xs={6} md={12}>
                  <TextField
                    id="outlined-basic"
                    label="Count"
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={pick}
                    onChange={handelPick}
                    InputProps={{ inputProps: { min: 1, max: members.length } }}
                    sx={{
                      '& > .MuiOutlinedInput-root': {
                        background: theme.palette.background.default,
                      },
                      '& input': {
                        background: theme.palette.background.default,
                      },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={3}
                  md={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    onClick={startPicking}
                    fullWidth
                    color="warning"
                  >
                    Pick
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={3}
                  md={12}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    onClick={startPicking}
                    fullWidth
                    color="success"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
              <Grid item container xs={12} sm={12} md={5} rowSpacing={3}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    zIndex: 9999,
                  }}
                >
                  <Alert variant="filled" severity="success">
                    Winners {winners.length}
                  </Alert>
                </Grid>
                <Grid
                  item
                  container
                  xs={12}
                  sx={{
                    maxHeight: { sm: '35vh', md: '65vh' },
                    minHeight: { sm: '35vh', md: '65vh' },
                    overflow: 'auto',
                  }}
                  spacing={2}
                >
                  {winners.map((item, idx) => (
                    <Grid item xs={6} md={12} key={idx}>
                      <Alert severity="success" color="success">
                        #{item}
                      </Alert>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Winner;
