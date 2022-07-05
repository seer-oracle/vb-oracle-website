import { lazy } from "react";

const homeRoute = {
  path: "/home",
  exact: true,
  public: true,
  component: lazy(() => import(".")),
};

export default homeRoute;
