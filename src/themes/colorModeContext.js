import React, { useEffect, useRef } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import setTheme from '.';
import { StyledEngineProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ColorModeContextProvider({ children }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const didMountRef = useRef(false);

  const [mode, setMode] = React.useState('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );
  useEffect(() => {
    if (didMountRef.current) {
      if (!prefersDarkMode) setMode('light');
    } else {
      didMountRef.current = true;
    }
  }, [prefersDarkMode]);

  const theme = React.useMemo(() => {
    return setTheme(mode);
  }, [mode]);
  console.log(prefersDarkMode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
}
