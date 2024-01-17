import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";

import Planet from "../../../core/images/planet.png";
import { device } from "../../../core/styles/breakpoints";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;

  @media ${device.md} {
    flex-direction: column;
  }
`;

export const LeftPanel = styled(Box)`
  width: 61.3%;
  background-color: ${({ theme }) => theme.colors.primaryP100};
  padding: ${({ theme }) => theme.spacing(9, 3, 4, 0)};
  padding-left: 13.5%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  box-sizing: border-box;

  @media ${device.xl} {
    padding-left: 5%;
  }

  @media ${device.lg} {
    padding: ${({ theme }) => theme.spacing(4, 2)};
    gap: ${({ theme }) => theme.spacing(4)};
  }

  @media ${device.md} {
    width: 100%;
  }
`;

export const RightPanel = styled(Box)`
  width: 38.7%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(9, 0, 0, 4)};
  background: url(${Planet});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 50%;
  box-sizing: border-box;

  @media ${device.lg} {
    padding: ${({ theme }) => theme.spacing(4, 2, 0, 4)};
  }

  @media ${device.md} {
    width: 100%;
    padding: ${({ theme }) => theme.spacing(4, 2, 3.635, 4)};
    background-color: ${({ theme }) => theme.colors.primaryP100};
    background-image: none;
  }
`;

export const RightPanelContainer = styled(Box)`
  width: 360px;
  display: flex;
  gap: 48px;
  flex-direction: column;

  @media ${device.lg} {
    width: auto;
    gap: 32px;
  }

  @media ${device.md} {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const AddMoneyBtn = styled(Button)`
  && {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: ${({ theme }) => theme.colors.neutralN30};
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryP50};
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    text-transform: inherit;

    &:hover {
      background: ${({ theme }) => theme.colors.primaryP30};
    }

    @media ${device.md} {
      width: 320px;
      margin: 0 auto;
      font-size: 16px;
    }
  }
`;
