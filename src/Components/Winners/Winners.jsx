import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { errorToast, successToast } from '../../Helpers/toast';
import Loader from '../../Helpers/Loader';

const colors = [
  'success',
  'success',
  'info',
  'warning',
  'error',
  'success',
  'info',
  'warning',
  'error',
  'success',
  'info',
  'warning',
  'error',
];
const Winner = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = React.useState('');
  const [pick, setPick] = useState('');
  const [pickedValues, setPickedValues] = useState([]);
  const [mint, setMint] = useState(null);

  const [members, setMembers] = useState(null);
  const [winners, setWinners] = useState([]);
  // const [mintID, setMintID] = useState('');

  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, 'mints', `${id}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log('Document data:', docSnap.data());
        const { participants } = docSnap.data();
        setMint(docSnap.data());
        const people = participants.map(
          ({ publicKey, token }) => `#${token}🗝${publicKey}`
        );
        setValue(people.join(',\n'));
      } else {
        navigate('/live');
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handelPick = (event) => {
    setPick(event.target.value);
  };
  const handelDataSubmit = (e) => {
    e.preventDefault();
    if (value) {
      const members = value
        .replace(/\s+\r?\n|\r| /g, '')
        .split(',')
        .filter((el) => !!el)
        .map((el) => ({ id: el }));
      setMembers(members);
    }
  };

  const startPicking = () => {
    const copyMembers = [...members];
    const copyWinners = [...winners];
    if (pick > 0 && pick <= members.length) {
      for (let i = 0; i < pick; i++) {
        const randomNumber = Math.floor(Math.random() * copyMembers.length);
        const selectedPick = copyMembers.splice(randomNumber, 1);

        copyWinners.push({
          ...selectedPick[0],
          pick,
          position: pickedValues.length + 1,
        });
      }
      setMembers(copyMembers);
      setWinners(copyWinners);
      setPickedValues((state) => [...state, pick]);
      setPick('');
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
  const onSuccessfullPick = async () => {
    try {
      const mintRef = doc(db, 'mints', mint.id);

      await setDoc(
        mintRef,
        {
          winners,
          pickedValues,
        },
        { merge: true }
      );
      successToast('Winners Picked Successfully!! 🎉🎉');
      navigate('/closed');
    } catch (err) {
      console.log(err);
      errorToast('Something went wrong 😥');
    }
  };

  const reset = () => {
    setMembers(null);
    setWinners([]);
    setPickedValues([]);
  };
  return (
    <>
      {mint ? (
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            '& > :not(style)': {
              m: { xs: 0, sm: 0, md: 1 },
              mx: 2,
              width: '100vw',
              minHeight: {
                xs: 'calc(100vh - 110px)',
                sm: 'calc(100vh - 110px)',
                md: 'calc(100vh - 180px)',
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
              Picking Winners For {mint.category}
            </Typography>
            {!!members && mint.id ? (
              <>
                <Button
                  variant="outlined"
                  sx={{
                    minWidth: '10vw',
                    position: 'absolute',
                    right: '5%',
                    top: '7.5%',
                    zIndex: 999,
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
                      style={{
                        zIndex: 999,
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
                      spacing={1}
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
                            {item.id}
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
                        InputProps={{
                          inputProps: { min: 1, max: members.length },
                        }}
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
                        onClick={onSuccessfullPick}
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
                        zIndex: 999,
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
                          <Alert
                            icon={false}
                            severity={colors[item.position]}
                            color={colors[item.position]}
                          >
                            <Typography
                              variant="h4"
                              component="span"
                              sx={{ m: 1, color: theme.palette.success.main }}
                            >
                              {item.id}
                            </Typography>
                            <div style={{ textAlign: 'center' }}>
                              <Typography
                                variant="h6"
                                component="span"
                                sx={{ m: 1 }}
                              >
                                ({item.pick} picks)
                              </Typography>
                              <Typography
                                variant="h6"
                                component="span"
                                sx={{ m: 1 }}
                              >
                                ({item.position} time)
                              </Typography>
                            </div>
                          </Alert>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </>
            ) : (
              <form>
                <TextField
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  minRows={2}
                  value={value}
                  required
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
                  onClick={(e) => handelDataSubmit(e)}
                  type="submit"
                  size="medium"
                  disabled={mint.status}
                >
                  Submit
                </Button>
                {mint.status && (
                  <span
                    style={{
                      marginLeft: 10,
                    }}
                  >
                    Close the Mint to Pick Winners
                  </span>
                )}
              </form>
            )}
          </Paper>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Winner;
