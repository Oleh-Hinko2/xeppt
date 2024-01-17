import React from "react";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

import * as S from "./styled";

const Links: React.FC = () => {
  const location = useLocation();

  const linksData = [
    {
      id: "0",
      title: "Home",
      path: "/",
    },
    {
      id: "1",
      title: "XEPPT Card",
      path: "/card",
    },
    {
      id: "2",
      title: "Statements",
      path: "/statements",
    },
  ];

  return (
    <S.Container>
      {linksData.map((link) => (
        <S.Link
          key={link.id}
          href={link.path}
          className={classNames({
            active: location.pathname === link.path,
          })}
        >
          {link.title}
        </S.Link>
      ))}
    </S.Container>
  );
};

export default Links;
