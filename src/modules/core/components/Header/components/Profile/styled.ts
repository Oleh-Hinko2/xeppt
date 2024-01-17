import styled from "styled-components";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 18px;
`;

export const Logo = styled(Box)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.primaryP80};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled(Typography)`
  && {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.neutralN30};
    text-transform: uppercase;
  }
`;

export const NameWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 18px;
  cursor: pointer;
`;

export const Name = styled(Typography)`
  && {
    font-size: 18px;
    line-height: 150%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryP50};
    /* margin-right: ${({ theme }) => theme.spacing(2.25)}; */
  }
`;
