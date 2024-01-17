import { Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

export const Wrapper = styled(Menu)`
  & .MuiMenu-paper {
    margin-top: 10px;
    border-radius: 15px;
    min-height: 100px;
    width: 300px;
  }
`;

export const ItemWrapper = styled(MenuItem)`
  && {
    font-size: 14px;
  }
`;
