import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";

import XEPPTCardBackground from "../../../core/images/XEPPT_card_background.png";
import { device } from "../../../core/styles/breakpoints";

const LARGE_WIDTH_CARD = 312;
const MEDIUM_WIDTH_CARD = 280;

const LARGE_HEIGHT_CARD = 196;
const MEDIUM_HEIGHT_CARD = 176;

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Card = styled(Box)`
  padding: ${({ theme }) => theme.spacing(2.5, 2.75)};
  display: flex;
  width: ${LARGE_WIDTH_CARD}px;
  height: ${LARGE_HEIGHT_CARD}px;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${XEPPTCardBackground});
  background-repeat: no-repeat;
  background-size: 100%;
  box-sizing: border-box;

  @media ${device.lg} {
    width: ${MEDIUM_WIDTH_CARD}px;
    height: ${MEDIUM_HEIGHT_CARD}px;
    padding: ${({ theme }) => theme.spacing(2)};
  }
`;

export const CardTitle = styled(Typography)`
  && {
    color: #f5f5f5;
    font-size: 24px;
    font-weight: 700;

    @media ${device.lg} {
      font-size: 20px;
    }
  }
`;

export const CardDescription = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
    line-height: 150%;
    margin: 0;

    @media ${device.lg} {
      font-size: 14px;
    }
  }
`;

export const CardNumber = styled(CardDescription)`
  && {
    margin-top: ${({ theme }) => theme.spacing(3)};

    @media ${device.lg} {
      margin-top: ${({ theme }) => theme.spacing(2.5)};
    }
  }
`;

export const CardStatus = styled(Box)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(0.5, 2)};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primaryP80};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CardStatusTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.primaryP20};
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;
  }
`;

export const AddCard = styled(Box)`
  width: ${LARGE_WIDTH_CARD}px;
  height: ${LARGE_HEIGHT_CARD}px;
  display: flex;
  padding: ${({ theme }) => theme.spacing(3.375, 0, 0, 2.625)};
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryS80};
  background: ${({ theme }) => theme.colors.secondaryS90};
  box-sizing: border-box;

  @media ${device.lg} {
    width: ${MEDIUM_WIDTH_CARD}px;
    height: ${MEDIUM_HEIGHT_CARD}px;
  }
`;

export const AddCardTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 20px;
    font-weight: 700;
  }
`;

export const AddCardButton = styled(IconButton)`
  && {
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background: ${({ theme }) => theme.colors.secondaryS30};

    &:hover {
      background: ${({ theme }) => theme.colors.secondaryS20};
      transform: scale(1.2);
    }
  }
`;
