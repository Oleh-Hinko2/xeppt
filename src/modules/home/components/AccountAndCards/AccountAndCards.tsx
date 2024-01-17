import * as S from "./styled";

import Add from "../../../core/images/add.svg";

interface AccountAndCardsProps {
  title?: string;
}

interface CardListData {
  id: string;
  title: string;
}

const cardListData: CardListData[] = [
  {
    id: "0",
    title: "Signature RBC visa ( ****3234)",
  },
  {
    id: "1",
    title: "TD Bank Debit ( ****0024)",
  },
];

const AccountAndCards = ({
  title = "Bank Account and Cards",
}: AccountAndCardsProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.ListWrapper>
        {cardListData.map((card) => (
          <S.ListItem key={card.id}>
            <S.ListItemTitle>{card.title}</S.ListItemTitle>
          </S.ListItem>
        ))}
      </S.ListWrapper>
      <S.AddCardAndBankBtn>
        <S.AddCardAndBankIcon>
          <img src={Add} alt="add" />
        </S.AddCardAndBankIcon>
        <S.AddCardAndBankTitle>Link a card or bank</S.AddCardAndBankTitle>
      </S.AddCardAndBankBtn>
    </S.Wrapper>
  );
};

export default AccountAndCards;
