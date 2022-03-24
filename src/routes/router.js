import { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import Home02 from "../pages/Home02";
import Explore01 from "../pages/Explore01";
import Explore02 from "../pages/Explore02";
import Creator from "../pages/Creator";
import Item from "../pages/Item";
import ItemDetails from "../pages/ItemDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Authors from "../pages/Authors";
import ConnectWallet from "../pages/ConnectWallet";
import CreateItem from "../pages/CreateItem";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";

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

  { path: "/home-02", component: <Home02 />, public: true },
  { path: "/explore-01", component: <Explore01 />, public: true },
  { path: "/explore-02", component: <Explore02 />, public: true },
  { path: "/creator", component: <Creator />, public: true },
  { path: "/item", component: <Item />, public: true },
  { path: "/item-details", component: <ItemDetails />, public: true },
  { path: "/blog", component: <Blog />, public: true },
  { path: "/blog-details", component: <BlogDetails />, public: true },
  { path: "/authors", component: <Authors />, public: true },
  { path: "/connect-wallet", component: <ConnectWallet />, public: true },
  { path: "/create-item", component: <CreateItem />, public: true },
  { path: "/login", component: <Login />, public: true },
  { path: "/register", component: <Register />, public: true },
  { path: "/contact", component: <Contact />, public: true },
];

export default routes;
