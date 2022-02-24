import React from 'react';
import ColorModeContextProvider from './themes/colorModeContext';
import ROUTES from './routes';
function App() {
  return (
    <ColorModeContextProvider>
      <ROUTES />
    </ColorModeContextProvider>
  );
}

export default App;
