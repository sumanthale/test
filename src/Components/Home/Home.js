import { Box, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import React from 'react';
import Header from '../Header/Header';
import { ColorModeContext } from '../../themes/colorModeContext';

const Home = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  console.log(colorMode);
  console.log(theme);
  console.log(theme?.palette?.background);

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
