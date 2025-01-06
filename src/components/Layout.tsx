import * as S from "@styles/Layout";
import React from "react";
import TopHeader from "./top/Top_Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Container>
      <S.HeaderComp>
        <TopHeader profileBool={true} />
      </S.HeaderComp>
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

export default Layout;
