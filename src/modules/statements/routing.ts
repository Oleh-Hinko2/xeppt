import { RouteObject } from "react-router-dom";
import { StatementsIndexRoute } from "./routes";

export const routes: RouteObject[] = [
  {
    path: "/Statements",
    Component: StatementsIndexRoute,
  },
];
