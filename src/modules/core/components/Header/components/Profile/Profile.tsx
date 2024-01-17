import { useMediaQuery } from "@mui/material";
import { useCallback, useState } from "react";
import { Menu } from "../../../../../shared";
import Expand from "../../../../images/expand.svg";
import { theme } from "../../../../styles";

import * as S from "./styled";

interface ProfileProps {
  name?: string;
}

const Profile = ({ name = "PETER MORGAN" }: ProfileProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const isTablet = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });

  return (
    <S.Wrapper>
      <S.NameWrapper onClick={handleClick}>
        <S.Logo>
          <S.LogoTitle>PM</S.LogoTitle>
        </S.Logo>
        {!isTablet && <S.Name>{name}</S.Name>}
        <img src={Expand} alt="expand" />
      </S.NameWrapper>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        options={[]}
      />
    </S.Wrapper>
  );
};

export default Profile;
