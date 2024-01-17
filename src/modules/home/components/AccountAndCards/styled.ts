import Box from "@mui/material/Box";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { device } from "../../../core/styles/breakpoints";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 18px;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const ListItem = styled(Box)`
  display: flex;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryS80};
  background: ${({ theme }) => theme.colors.primaryP100};
`;

export const ListItemTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 18px;
    font-weight: 500;
    line-height: 150%;

    @media ${device.lg} {
      font-size: 16px;
    }
  }
`;

export const AddCardAndBankBtn = styled(Button)`
  && {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
    text-transform: inherit;
    padding: 0;
    margin: 0;
    gap: 16px;

    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const AddCardAndBankIcon = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.secondaryS30};

  &:hover {
    transform: scale(1.2);
  }
`;

export const AddCardAndBankTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 20px;
    font-weight: 700;
    text-decoration-line: underline;

    @media ${device.lg} {
      font-size: 18px;
    }
  }
`;
