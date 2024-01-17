import { createTheme } from "@mui/material/styles";

import { colors } from "./colors";

const themeOptions = {
  colors,
  spacing: 8,
  palette: {
    primary: {
      main: colors.primaryP50,
    },
  },
  breakpoints: {
    values: {
      xs: 360, // for small screen mobile
      sm: 700,
      md: 768, // for tablets
      lg: 1024, // for laptops
      xl: 1600, // for big screens
      xxl: 1920, // for big screens
    },
  },
};

const theme = createTheme(themeOptions);

export { theme };
