import withTitle from "../../../core/hoc/WithTitleHOC";
import * as S from "./styled";

import CreditCard from "../../../core/images/credit_card.svg";
import Wallet from "../../../core/images/account_balance_wallet.svg";

type TransactionType = "deposit" | "withdrawal";

enum TransactionTypes {
  deposit = "deposit",
  withdrawal = "withdrawal",
}

interface TransactionListData {
  id: string;
  title: string;
  amount: string;
  type: TransactionType;
  createAt: string;
}

const transactionListData: TransactionListData[] = [
  {
    id: "0",
    title: "Cineplex Inc.",
    amount: "-$42.50",
    type: "withdrawal",
    createAt: "Sept 24, Payment",
  },
  {
    id: "1",
    title: "RBC Royal Bank",
    amount: "+$500.00",
    type: "deposit",
    createAt: "Aug 19, Transfer from bank",
  },
  {
    id: "2",
    title: "Skyline Restaurant",
    amount: "-$110.45",
    type: "withdrawal",
    createAt: "Aug 1, Payment",
  },
];

const Transactions = () => {
  const generateListIcon = (type: TransactionType) => {
    if (type === TransactionTypes.withdrawal) {
      return (
        <S.ListIconWithdrawal>
          <img src={CreditCard} alt="withdrawal" />
        </S.ListIconWithdrawal>
      );
    }

    if (type === TransactionTypes.deposit) {
      return (
        <S.ListIconDeposit>
          <img src={Wallet} alt="withdrawal" />
        </S.ListIconDeposit>
      );
    }

    return null;
  };

  const generateListAmount = (type: TransactionType, amount: string) => {
    if (type === TransactionTypes.withdrawal) {
      return <S.ListItemAmountWithdrawal>{amount}</S.ListItemAmountWithdrawal>;
    }

    if (type === TransactionTypes.deposit) {
      return <S.ListItemAmountDeposit>{amount}</S.ListItemAmountDeposit>;
    }

    return null;
  };

  return (
    <S.Wrapper>
      <S.ButtonsWrapper>
        <S.ButtonsLefWrapper>
          <S.AllBtn>All</S.AllBtn>
          <S.XEPPTBtn>XEPPT Card</S.XEPPTBtn>
        </S.ButtonsLefWrapper>
        <S.ShowMoreBtn>Show more</S.ShowMoreBtn>
      </S.ButtonsWrapper>
      <S.ListWrapper>
        {transactionListData.map((transaction) => (
          <S.ListItem key={transaction.id}>
            <S.ListLeftWrapper>
              {generateListIcon(transaction.type)}
              <S.ListDetailsWrapper>
                <S.ListItemTitle>{transaction.title}</S.ListItemTitle>
                <S.ListItemCreateAt>{transaction.createAt}</S.ListItemCreateAt>
              </S.ListDetailsWrapper>
            </S.ListLeftWrapper>
            {generateListAmount(transaction.type, transaction.amount)}
            <></>
          </S.ListItem>
        ))}
      </S.ListWrapper>
    </S.Wrapper>
  );
};

export default withTitle(Transactions, "Transactions");
