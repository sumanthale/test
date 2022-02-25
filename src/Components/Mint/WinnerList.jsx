import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import LooksTwo from '@mui/icons-material/LooksTwo';
import LooksThree from '@mui/icons-material/Looks3';
import LooksFour from '@mui/icons-material/Looks4';
import Looks from '@mui/icons-material/LooksOne';

export default function WinnerList() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <Looks />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 2 }}>
          <Typography variant="h4" component="span">
            1 winner receives
          </Typography>
          <Typography variant="h5">11.25 $SOL</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LooksTwo />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 2 }}>
          <Typography variant="h4" component="span">
            4 winners receive
          </Typography>
          <Typography variant="h5">1.2 $SOL</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <LooksThree />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 2 }}>
          <Typography variant="h4" component="span">
            11 winners receive
          </Typography>
          <Typography variant="h5">0.6 $SOL</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <LooksFour />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '16px', px: 2 }}>
          <Typography variant="h4" component="span">
            59 winners receive
          </Typography>
          <Typography variant="h5">0.15 $SOL</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
