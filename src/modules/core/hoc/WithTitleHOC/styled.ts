import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  && {
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    color: ${({ theme }) => theme.colors.secondaryS20};
    margin-bottom: ${({ theme }) => theme.spacing(3)};

    @media ${device.lg} {
      margin-bottom: ${({ theme }) => theme.spacing(2)};
    }
  }
`;
