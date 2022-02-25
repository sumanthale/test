import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Loadable from '../Helpers/Loadable';
import Header from '../Components/Header/Header';
import LiveMints from '../Components/LiveMints/LiveMints';
import { Box } from '@mui/system';
import Mint from '../Components/Mint/Mint';
import RequireAuth from '../Helpers/requrieAuth';
import Winner from '../Components/Winners/Winners';
const Intro = Loadable(lazy(() => import('../Components/Intro/Intro')));

export default function ROUTES() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        sx={{
          mt: { xs: '50px', sm: '70px', md: '90px' },
        }}
      ></Box>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/live" element={<LiveMints />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/mint/:name" element={<Mint />} />
        <Route
          path="/winners"
          element={
            <RequireAuth>
              <Winner />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
