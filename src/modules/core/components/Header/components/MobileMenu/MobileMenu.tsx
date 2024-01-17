import { useCallback, useState } from "react";
import MenuIcon from "../../../../images/menu.svg";

import * as S from "./styled";

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return (
    <>
      <S.IconWrapper onClick={handleClick}>
        <img src={MenuIcon} alt="menu" />
      </S.IconWrapper>
      <S.Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      ></S.Menu>
    </>
  );
};

export default MobileMenu;
