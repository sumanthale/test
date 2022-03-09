import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import Loadable from '../Helpers/Loadable';
import { Box } from '@mui/system';
const Intro = Loadable(lazy(() => import('../Components/Intro/Intro')));

const LiveMints = Loadable(
  lazy(() => import('../Components/LiveMints/LiveMints'))
);
const Mint = Loadable(lazy(() => import('../Components/Mint/Mint')));
const RequireAuth = Loadable(lazy(() => import('../Helpers/requrieAuth')));
const Winner = Loadable(lazy(() => import('../Components/Winners/Winners')));
const ClosedMints = Loadable(
  lazy(() => import('../Components/ClosedMint/ClosedMints'))
);
const Header = Loadable(lazy(() => import('../Components/Header/Header')));

export default function ROUTES() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        sx={{
          mt: { xs: '60px', sm: '80px', md: '90px' },
        }}
      ></Box>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/live" element={<LiveMints />} />
        <Route path="/mint" element={<Mint />} />
        <Route path="/closed" element={<ClosedMints />} />
        <Route path="/closed/:id" element={<Mint />} />
        {/* <Route
          path="/winners"
          element={
            <RequireAuth>
              <Winner />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/winners/:id"
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
