import withTitle from "../../../core/hoc/WithTitleHOC";
import * as S from "./styled";

import Flag from "../../../core/images/flag.svg";

interface AccountBalanceProps {
  cardIcon?: string;
  cardValue?: string;
}

const AccountBalance = ({
  cardIcon = Flag,
  cardValue = "$191.00",
}: AccountBalanceProps) => {
  return (
    <S.Card>
      <img src={cardIcon} alt="card icon" />
      <S.CardTitle>{cardValue}</S.CardTitle>
    </S.Card>
  );
};

export default withTitle(AccountBalance, "XEPPT Account Balance");
