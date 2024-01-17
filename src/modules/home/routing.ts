import { RouteObject } from "react-router-dom";
import { HomeIndexRoute } from "./routes";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: HomeIndexRoute,
  },
];
