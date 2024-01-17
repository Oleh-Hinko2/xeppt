import withTitle from "../../../core/hoc/WithTitleHOC";
import * as S from "./styled";

import AddIcon from "../../../core/images/add.svg";

interface PaidCardProps {
  status?: string;
  value?: string;
  cardNumber?: string;
}

const PrepaidCard = ({
  status = "Inactive",
  value = "$0.00",
  cardNumber = "4588 •••• •••• 0092",
}: PaidCardProps) => {
  return (
    <S.Wrapper>
      <S.Card>
        <S.CardStatus>
          <S.CardStatusTitle>{status}</S.CardStatusTitle>
        </S.CardStatus>
        <S.CardTitle>{value}</S.CardTitle>
        <S.CardDescription>Available Balance</S.CardDescription>
        <S.CardNumber>{cardNumber}</S.CardNumber>
      </S.Card>
      <S.AddCard>
        <S.AddCardButton>
          <img src={AddIcon} alt="add card" />
        </S.AddCardButton>
        <S.AddCardTitle>Order a new card</S.AddCardTitle>
      </S.AddCard>
    </S.Wrapper>
  );
};

export default withTitle(PrepaidCard, "XEPPT Prepaid Card");
