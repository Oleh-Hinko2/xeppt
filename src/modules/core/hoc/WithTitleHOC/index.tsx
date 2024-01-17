import React from "react";

import * as S from "./styled";

const withTitle = <P extends object>(
  Component: React.ComponentType<P>,
  title: string
) =>
  class WithTitle extends React.Component<P> {
    render() {
      const { ...props } = this.props;

      return (
        <S.Wrapper>
          <S.Title>{title}</S.Title>
          <Component {...(props as P)} />
        </S.Wrapper>
      );
    }
  };

export default withTitle;
