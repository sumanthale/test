import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React from 'react';
import Header from '../Header/Header';
import { ColorModeContext } from '../../themes/colorModeContext';
import Intro from '../Intro/Intro';

const Home = () => {
  return (
    <>
      <Intro />
    </>
  );
};

export default Home;
