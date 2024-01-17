import MuiButton from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { device } from "../../../core/styles/breakpoints";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${device.lg} {
    gap: 16px;
  }
`;

export const ListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
`;

export const ListLeftWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const ListDetailsWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonsLefWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const Button = styled(MuiButton)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-transform: inherit;
    padding: ${({ theme }) => theme.spacing(1.25, 3)};
  }
`;

export const AllBtn = styled(Button)`
  && {
    border: 1px solid ${({ theme }) => theme.colors.primaryP30};
    background: ${({ theme }) => theme.colors.primaryP30};
    color: ${({ theme }) => theme.colors.secondaryS100};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryP50};
    }
  }
`;

export const XEPPTBtn = styled(Button)`
  && {
    border: 1px solid ${({ theme }) => theme.colors.primaryP30};
    color: ${({ theme }) => theme.colors.primaryP30};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryP90};
    }
  }
`;

export const ShowMoreBtn = styled(Button)`
  && {
    background: ${({ theme }) => theme.colors.neutralN30};
    color: ${({ theme }) => theme.colors.primaryP50};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryP30};
    }
  }
`;

export const ListItem = styled(Box)`
  display: flex;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryS80};
  background: ${({ theme }) => theme.colors.secondaryS100};
`;

export const ListItemTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
  }
`;

export const ListItemCreateAt = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }
`;

export const ListItemAmount = styled(Typography)`
  && {
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const ListItemAmountWithdrawal = styled(ListItemAmount)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS40};
  }
`;

export const ListItemAmountDeposit = styled(ListItemAmount)`
  && {
    color: ${({ theme }) => theme.colors.successSU40};
  }
`;

export const ListIcon = styled(Box)`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export const ListIconWithdrawal = styled(ListIcon)`
  background-color: ${({ theme }) => theme.colors.primaryP80};
`;

export const ListIconDeposit = styled(ListIcon)`
  background-color: ${({ theme }) => theme.colors.primaryP50};
`;
