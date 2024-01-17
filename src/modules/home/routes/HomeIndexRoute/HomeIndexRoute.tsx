import React from "react";
import { Header } from "../../../core";
import {
  AccountAndCards,
  AccountBalance,
  PrepaidCard,
  Transactions,
} from "../../components";

import * as S from "./styled";

const HomeIndexRoute: React.FC = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.LeftPanel>
          <AccountBalance />
          <PrepaidCard />
          <Transactions />
        </S.LeftPanel>
        <S.RightPanel>
          <S.RightPanelContainer>
            <S.AddMoneyBtn>Add money</S.AddMoneyBtn>
            <AccountAndCards />
          </S.RightPanelContainer>
        </S.RightPanel>
      </S.Wrapper>
    </>
  );
};

export default HomeIndexRoute;
