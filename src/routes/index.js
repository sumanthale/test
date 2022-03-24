import { Routes, Route } from "react-router-dom";
import React, { lazy } from "react";
import Loadable from "../Helpers/Loadable";
import routes from "./router";
import Header from "../components/header/Header";

const RequireAuth = Loadable(lazy(() => import("../Helpers/requrieAuth")));

export default function ROUTES() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((data, index) => (
          <Route
            exact={true}
            path={data.path}
            element={
              data.public ? (
                data.component
              ) : (
                <RequireAuth>{data.component}</RequireAuth>
              )
            }
            key={index}
          />
        ))}
      </Routes>
    </>
  );
}
