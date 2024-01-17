import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { device } from "../../styles/breakpoints";

const LARGE_HEADER_HEIGHT = 136;
const MEDIUM_HEADER_HEIGHT = 96;

export const Container = styled(Box)`
  margin: 0 13.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  @media ${device.xl} {
    margin: 0 5%;
  }

  @media ${device.lg} {
    margin: ${({ theme }) => theme.spacing(0, 2)};
  }
`;

export const Header = styled.header`
  height: ${LARGE_HEADER_HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.secondaryS30};
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;

  @media ${device.lg} {
    height: ${MEDIUM_HEADER_HEIGHT}px;
  }
`;

export const Language = styled(Typography)`
  && {
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.primaryP50};
  }
`;

export const ProfileWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 18px;

  @media ${device.lg} {
    gap: 16px;
  }
`;

export const LeftWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Notification = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.primaryP80};
`;

export const Logo = styled.img`
  @media ${device.md} {
    width: 100px;
    height: 34px;
    object-fit: cover;
  }
`;
