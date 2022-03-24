import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ClosedMintDetails() {
  const [mints, setMints] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    const fetchedMints = [];

    async function fetchData() {
      const q = query(collection(db, "mints"), where("status", "==", false));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        fetchedMints.unshift(doc.data());
      });

      setMints(fetchedMints);
    }
    fetchData();
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: "50vh",
      }}
    >
      <Table stickyHeader aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Category</StyledTableCell>
            <StyledTableCell align="center">Supply</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center">Winners</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">View Winners</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {mints.map((mint, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {mint.category}
              </StyledTableCell>
              <StyledTableCell align="center">{mint.supply}</StyledTableCell>
              <StyledTableCell align="center">{mint.price}</StyledTableCell>
              <StyledTableCell align="center">{mint.winner}</StyledTableCell>
              <StyledTableCell align="center">
                {mint.status ? "Open" : "Closed"}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    padding: "2px 8px",
                  }}
                  onClick={() => {
                    navigate(`/closed/${mint.id}`);
                  }}
                >
                  View Winners
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
