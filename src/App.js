import React from "react";
import ColorModeContextProvider from "./themes/colorModeContext";
import ROUTES from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import { ConfirmProvider } from "material-ui-confirm";
import Player from "./Helpers/sound";
function App() {
  return (
    <ColorModeContextProvider>
      <AuthProvider>
        <ToastContainer theme="colored" />
        <ConfirmProvider>
          <Player />
          <ROUTES />
        </ConfirmProvider>
      </AuthProvider>
    </ColorModeContextProvider>
  );
}

export default App;
