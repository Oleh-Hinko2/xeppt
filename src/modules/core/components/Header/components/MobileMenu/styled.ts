import { Box } from "@mui/material";
import styled from "styled-components";
import MuiMenu from "@mui/material/Menu";
import MuiMenuItem from "@mui/material/MenuItem";

export const IconWrapper = styled(Box)`
  display: flex;
  cursor: pointer;
`;

export const Menu = styled(MuiMenu)`
  & .MuiMenu-paper {
    margin-top: 10px;
    border-radius: 15px;
    min-height: 100px;
    width: 300px;
  }
`;

export const ItemWrapper = styled(MuiMenuItem)`
  && {
    font-size: 14px;
  }
`;
