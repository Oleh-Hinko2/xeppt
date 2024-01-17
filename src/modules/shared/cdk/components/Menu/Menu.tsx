import * as S from "./styled";

type MenuOptionsType = {
  title: string;
  id: string;
  path: string;
  visible: boolean;
};

type MenuPropsType = {
  onClose: () => void;
  open: boolean;
  anchorEl: null | HTMLElement;
  options: MenuOptionsType[];
};

const Menu = ({ onClose, open, anchorEl, options }: MenuPropsType) => {
  return (
    <S.Wrapper
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {options.map((option) => (
        <>
          {option.visible && (
            <S.ItemWrapper key={option.id}>{option.title}</S.ItemWrapper>
          )}
        </>
      ))}
    </S.Wrapper>
  );
};

export default Menu;
