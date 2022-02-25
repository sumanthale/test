import React from 'react';
import ColorModeContextProvider from './themes/colorModeContext';
import ROUTES from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <ColorModeContextProvider>
      <AuthProvider>
        <ToastContainer theme="colored" />

        <ROUTES />
      </AuthProvider>
    </ColorModeContextProvider>
  );
}

export default App;
