import MuiLink from "@mui/material/Link";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { device } from "../../../../styles/breakpoints";

export const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin-left: ${({ theme }) => theme.spacing(14)};
  gap: 16px;

  @media ${device.xl} {
    margin-left: ${({ theme }) => theme.spacing(4)};
  }

  @media ${device.lg} {
    margin-left: ${({ theme }) => theme.spacing(5.75)};
    gap: 8px;
  }

  @media ${device.md} {
    margin-left: ${({ theme }) => theme.spacing(1.5)};
  }
`;

export const Link = styled(MuiLink)`
  && {
    text-decoration: none;
    display: inline-block;
    color: ${({ theme }) => theme.colors.primaryP50};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    display: inline-block;
    transition: 0.3s all;
    padding: ${({ theme }) => theme.spacing(2, 3)};

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.colors.secondaryS20};
      border-radius: 30px;
    }

    @media ${device.xl} {
      padding: ${({ theme }) => theme.spacing(2, 2)};
    }

    @media ${device.lg} {
      font-size: 18px;
    }
  }
`;
