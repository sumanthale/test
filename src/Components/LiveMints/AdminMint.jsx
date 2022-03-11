import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import uniqid from 'uniqid';
import produce from 'immer';

import { errorToast, successToast } from '../../Helpers/toast';
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useConfirm } from 'material-ui-confirm';
import shuffleArray from '../../Helpers/shuffleArray';
import { LOTOURL } from '../../Helpers/default';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function AdminMint() {
  const theme = useTheme();
  const [mints, setMints] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [mintID, setMintID] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [supply, setSupply] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [winner, setWinner] = React.useState('');
  const [status, setStatus] = React.useState(true);
  const [merchantWallet, setMerchantWallet] = React.useState('');
  const [priceGA, setPriceGA] = React.useState('');
  const [nftGA, setNftGA] = React.useState('');
  const [newMint, setNewMint] = React.useState(false);
  const confirm = useConfirm();

  React.useEffect(() => {
    const fetchedMints = [];

    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, 'mints'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        fetchedMints.push(doc.data());
      });
      setMints(fetchedMints);
    }
    fetchData();
  }, []);

  const handelClickEdit = (mint) => {
    setNewMint(false);
    setMintID(mint.id);
    setCategory(mint.category);
    setSupply(mint.supply);
    setPrice(mint.price);
    setWinner(mint.winner);
    setMerchantWallet(mint.merchantWallet);
    setPriceGA(mint.priceGA);
    setNftGA(mint.nftGA);
    setStatus(mint.status);
    handleOpen();
  };
  const handelCreateClick = () => {
    setNewMint(true);
    reset();
    handleOpen();
  };
  const handelClickDelete = async (id) => {
    confirm({ description: 'This action is permanent!' })
      .then(async () => {
        try {
          await deleteDoc(doc(db, 'mints', id));
          const filtered = mints.filter((mint) => mint.id !== id);
          setMints(filtered);
          console.log('deleted');

          successToast('Mint Deleted Successfully!! 🎉🎉');
        } catch (err) {
          errorToast('Something went wrong 😥');
        }
      })
      .catch((err) => {
        console.log('cancelled deletion');
      });
  };

  const handelSubmitEdit = async (e) => {
    e.preventDefault();
    setMints(
      produce((draft) => {
        const mint = draft.find((mint) => mint.id === mintID);
        mint.category = category;
        mint.supply = supply;
        mint.price = price;
        mint.winner = winner;
        mint.priceGA = priceGA;
        mint.nftGA = nftGA;
        mint.status = status;
        mint.merchantWallet = merchantWallet;
      })
    );
    const mint = {
      category,
      supply,
      price,
      winner,
      status,
      priceGA,
      nftGA,
      merchantWallet,
    };
    console.log(mintID);
    try {
      const mintRef = doc(db, 'mints', mintID);

      await setDoc(mintRef, mint, { merge: true });
      successToast('Mint Edited Successfully!! 🎉🎉');
    } catch (err) {
      console.log(err);
      errorToast('Something went wrong 😥');
    }

    reset();
    handleClose();
  };
  const handelSubmitCreate = async (e) => {
    e.preventDefault();

    const genratedID = uniqid();
    const tokens = shuffleArray([...Array(+supply).keys()]);
    console.log(tokens);
    const mint = {
      category,
      supply,
      price,
      winner,
      link: genratedID,
      priceGA,
      nftGA,
      status,
      id: genratedID,
      winners: [],
      participants: [],
      tokens,
      tokensBought: [],
      merchantWallet,
    };
    handleClose();
    reset();
    setNewMint(false);
    try {
      const mintRef = doc(db, 'mints', mint.id);
      await setDoc(mintRef, mint);
      successToast('Mint Created Successfully!! 🎉🎉');
      setMints(
        produce((draft) => {
          draft.push({
            category,
            supply,
            price,
            winner,
            link: genratedID,
            priceGA,
            nftGA,
            status,
            id: genratedID,
            merchantWallet,
          });
        })
      );
    } catch (err) {
      console.log(err);
      errorToast('Something went wrong 😥');
    }
  };

  const navigate = useNavigate();

  const reset = () => {
    if (mintID) {
      setMintID('');
      setCategory('');
      setSupply('');
      setPrice('');
      setWinner('');
      setMerchantWallet('');
      setStatus('');
      setNftGA('');
      console.log('resetting');
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form
          onSubmit={(e) => {
            if (newMint) {
              handelSubmitCreate(e);
            } else {
              handelSubmitEdit(e);
            }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '70vw',
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h3"
              component="h1"
              gutterBottom
            >
              Edit Mint
            </Typography>

            <Grid container spacing={2} mt={2}>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Supply"
                  variant="outlined"
                  value={supply}
                  type="number"
                  onChange={(e) => {
                    setSupply(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                  type="number"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Total Winners"
                  type="number"
                  variant="outlined"
                  value={winner}
                  onChange={(e) => {
                    setWinner(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Status</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                    required
                    sx={{
                      mb: 3,
                      width: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      '& > .MuiOutlinedInput-root': {
                        background: theme.palette.background.default,
                      },
                      '& > .MuiSelect-select ': {
                        background: theme.palette.background.default,
                      },
                    }}
                  >
                    <MenuItem value={true}>Open</MenuItem>
                    <MenuItem value={false}>Close</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Merchant Wallet Address"
                  variant="outlined"
                  value={merchantWallet}
                  onChange={(e) => {
                    setMerchantWallet(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Prices For Places"
                  variant="outlined"
                  value={priceGA}
                  helperText="Write values seperated By commas(,)"
                  onChange={(e) => {
                    setPriceGA(e.target.value);
                  }}
                  required
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} rowSpacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Price for nftGA's"
                  variant="outlined"
                  value={nftGA}
                  onChange={(e) => {
                    setNftGA(e.target.value);
                  }}
                  required
                  helperText="Write values seperated By commas(,)"
                  sx={{
                    mb: 3,
                    width: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    '& > .MuiOutlinedInput-root': {
                      background: theme.palette.background.default,
                    },
                    '& input': {
                      background: theme.palette.background.default,
                    },
                  }}
                />
              </Grid>
            </Grid>

            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <Button type="submit" variant="outlined" color="success">
                {newMint ? 'Create Mint' : 'Edit Mint'}
              </Button>
            </Box>
          </Box>
        </form>
      </Modal>

      <TableContainer
        component={Paper}
        sx={{ maxHeight: '50vh', overflow: 'auto' }}
      >
        <Table stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell align="center">Category</StyledTableCell>
              <StyledTableCell align="center">Supply</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
              <StyledTableCell align="center">Winners</StyledTableCell>
              <StyledTableCell align="center">Link</StyledTableCell>
              <StyledTableCell align="center">Status</StyledTableCell>
              <StyledTableCell align="center">Pick</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mints.map((mint) => (
              <StyledTableRow key={mint.id}>
                <StyledTableCell component="th" scope="row">
                  <Button
                    variant="outlined"
                    size="small"
                    color="secondary"
                    sx={{
                      padding: '2px 8px',
                    }}
                    onClick={() => {
                      handelClickEdit(mint);
                    }}
                  >
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center" component="th" scope="row">
                  {mint.category}
                </StyledTableCell>
                <StyledTableCell align="center">{mint.supply}</StyledTableCell>
                <StyledTableCell align="center">{mint.price}</StyledTableCell>
                <StyledTableCell align="center">{mint.winner}</StyledTableCell>
                <StyledTableCell align="center">
                  <a
                    href={`${LOTOURL}/live/${mint.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        padding: '2px 8px',
                      }}
                    >
                      Buy Link
                    </Button>
                  </a>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {mint.status ? 'Open' : 'Closed'}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: '2px 8px',
                    }}
                    onClick={() => {
                      navigate(`/winners/${mint.id}`);
                    }}
                  >
                    Pick Winners
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      padding: '2px 8px',
                    }}
                    color="error"
                    onClick={() => {
                      handelClickDelete(mint.id);
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box id="modal-modal-description" sx={{ mt: 2 }}>
        <Button
          type="submit"
          variant="outlined"
          color="success"
          onClick={(e) => handelCreateClick(e)}
        >
          Create Mint
        </Button>
      </Box>
    </>
  );
}
