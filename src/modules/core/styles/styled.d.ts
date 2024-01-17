import "styled-components";
import { Theme } from "@mui/material/styles";
import { Colors } from "./colors";
interface CustomTheme {
  colors: Colors;
}
declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
