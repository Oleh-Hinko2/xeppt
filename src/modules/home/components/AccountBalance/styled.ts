import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import styled from "styled-components";

export const Card = styled(Box)`
  display: flex;
  width: 200px;
  height: 130px;
  padding: ${({ theme }) => theme.spacing(2)};
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primaryP50};
  background: ${({ theme }) => theme.colors.primaryP90};
  box-sizing: border-box;
`;

export const CardTitle = styled(Typography)`
  && {
    color: ${({ theme }) => theme.colors.secondaryS20};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
  }
`;
