import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import LooksTwo from '@mui/icons-material/LooksTwo';
import LooksThree from '@mui/icons-material/Looks3';
import LooksFour from '@mui/icons-material/Looks4';
import Looks from '@mui/icons-material/LooksOne';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function WinnerList({ mint }) {
  const { pickedValues, priceGA, nftGA } = mint;

  if (!pickedValues || !priceGA || !nftGA) {
    return 'No Winners Selected Yet';
  }
  let prices = priceGA.split(',');
  let nfts = nftGA.split(',');
  let pickedValue = pickedValues;

  return (
    <>
      {prices.length > 0 && (
        <Timeline position="alternate">
          {pickedValue[0] && prices[0] && (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <Looks />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '16px', px: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h4"
                  component="span"
                >
                  {pickedValue[0]} winners receives
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h5"
                >
                  {prices[0]} $SOL
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {pickedValue[1] && prices[1] && (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <LooksTwo />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '16px', px: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h4"
                  component="span"
                >
                  {pickedValue[1]} winners receives
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h5"
                >
                  {prices[1]} $SOL
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {pickedValue[2] && prices[2] && (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LooksThree />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '16px', px: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h4"
                  component="span"
                >
                  {pickedValue[2]} winners receives
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h5"
                >
                  {prices[2]} $SOL
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
          {pickedValue[3] && prices[3] && (
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LooksFour />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '16px', px: 2 }}>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h4"
                  component="span"
                >
                  {pickedValue[3]} winners receives
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: '.8rem',
                      sm: '1rem',
                      md: '1.1rem',
                    },
                  }}
                  variant="h5"
                >
                  {prices[3]} $SOL
                </Typography>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      )}
      {nfts.length > 0 && (
        <TableContainer
          component={Paper}
          sx={{ maxHeight: '30vh', overflow: 'auto' }}
        >
          <Table aria-label="simple table" size="small">
            <TableHead>
              <TableRow>
                <TableCell>nfts Giveaway Prices</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {nfts.map((row, idx) => (
                <TableRow
                  key={idx}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
