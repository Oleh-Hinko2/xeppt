import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { routes } from "./routing";
import { Box } from "@mui/material";
import { ThemeProvider } from "styled-components";
import { theme } from "./modules/core/styles";
import Global from "./modules/core/styles/global";

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Box>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
