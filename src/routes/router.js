import { lazy } from "react";
import Loadable from "../Helpers/Loadable";

const Home = Loadable(lazy(() => import("../components/Home/Home")));

const LiveMints = Loadable(
  lazy(() => import("../components/LiveMints/LiveMints"))
);
const Mint = Loadable(lazy(() => import("../components/Mint/Mint")));

const Winner = Loadable(lazy(() => import("../components/Winners/Winners")));
const ClosedMints = Loadable(
  lazy(() => import("../components/ClosedMint/ClosedMints"))
);

const routes = [
  { path: "/", component: <Home />, public: true },
  { path: "/live", component: <LiveMints />, public: true },
  { path: "/mint", component: <Mint />, public: true },
  { path: "/closed", component: <ClosedMints />, public: true },
  { path: "/closed/:id", component: <Mint />, public: true },
  { path: "/winners/:id", component: <Winner />, public: false },
];

export default routes;
