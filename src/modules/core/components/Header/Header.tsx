import React from "react";
import Logo from "../../images/logo.svg";
import { Links, MobileMenu, Profile } from "./components";

import NotificationIcon from "../../images/notification.svg";

import * as S from "./styled";
import { theme } from "../../styles";
import { useMediaQuery } from "@mui/material";

const Header: React.FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });

  return (
    <S.Header>
      <S.Container>
        {isMobile && <MobileMenu />}
        <S.LeftWrapper>
          <S.Logo src={Logo} alt="logo" />
          {!isMobile && <Links />}
        </S.LeftWrapper>
        <S.ProfileWrapper>
          <S.Language>fr</S.Language>
          <S.Notification>
            <img src={NotificationIcon} alt="notification" />
          </S.Notification>
          {!isMobile && <Profile />}
        </S.ProfileWrapper>
      </S.Container>
    </S.Header>
  );
};

export default Header;
